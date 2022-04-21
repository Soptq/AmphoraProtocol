import { s } from "./scope";
import { ethers } from "hardhat";
import { BigNumber, Event, utils } from "ethers";
import { expect, assert } from "chai";
import { stealMoney } from "../../util/money";
import { showBody } from "../../util/format";
import { BN } from "../../util/number";
import { advanceBlockHeight, fastForward, mineBlock, OneWeek, OneYear, reset } from "../../util/block";


const usdcAmount = BN("5000e6")

const fundDave = async () => {
    let usdc_minter = "0xe78388b4ce79068e89bf8aa7f218ef6b9ab0e9d0";
    //showBody(`stealing ${s.Dave_USDC} to dave from ${s.usdcAddress}`)
    await stealMoney(
        usdc_minter,
        s.Dave.address,
        s.usdcAddress,
        s.Dave_USDC
    )
}

//set balances
describe("TOKEN-DEPOSITS", async () => {
    let startingUSDIAmount: BigNumber
    let startBlock: number
    before(async () => {
        startBlock = await ethers.provider.getBlockNumber()
        await mineBlock()
        await fundDave()
        await mineBlock()
    })
    after(async () => {
        //reset to previous block to fix balances
        await reset(startBlock)
    })
    it("check starting balance and deposit USDC", async () => {

        const startingUSDCamount = await s.USDC.balanceOf(s.Dave.address)
        assert.equal(startingUSDCamount.toString(), s.Dave_USDC.toString(), "Starting USDC balance is correct")

        //Dave already holds some USDi at this point
        startingUSDIAmount = await s.USDI.balanceOf(s.Dave.address)

        //approve
        await s.USDC.connect(s.Dave).approve(s.USDI.address, usdcAmount)

        //check pauseable 
        await s.USDI.connect(s.Frank).pause()
        await advanceBlockHeight(1)
        await expect(s.USDI.connect(s.Dave).deposit(usdcAmount)).to.be.revertedWith("Pausable: paused")
        await s.USDI.connect(s.Frank).unpause()
        await advanceBlockHeight(1)

        const depositResult = await s.USDI.connect(s.Dave).deposit(usdcAmount)
        await mineBlock()
        const depositReceipt = await depositResult.wait()
        const depositArgs = depositReceipt.events![depositReceipt.events!.length - 1]
        assert.equal(depositArgs.event!, "Deposit", "correct event emitted")

        let usdcBalance = await s.USDC.balanceOf(s.Dave.address)
        assert.equal(usdcBalance.toString(), s.Dave_USDC.sub(usdcAmount).toString(), "Dave deposited USDC tokens")

        let usdiBalance = await s.USDI.balanceOf(s.Dave.address)
        //some interest has accrued, USDI balance should be slightly higher than existingUSDI balance + USDC amount deposited 
        expect(usdiBalance).to.be.gt(startingUSDIAmount.add(usdcAmount.mul(1e12)))
        //assert.equal(usdiBalance.toString(), startingUSDIamount.add(usdcAmount.mul(1e12)).toString(), "USDi balance is correct")

    });

    //fixed bug in withdraw
    it("redeem USDC for USDI", async () => {



        //check pauseable 
        await s.USDI.connect(s.Frank).pause()
        await advanceBlockHeight(1)
        await expect(s.USDI.connect(s.Dave).withdraw(usdcAmount)).to.be.revertedWith("Pausable: paused")
        await s.USDI.connect(s.Frank).unpause()
        await advanceBlockHeight(1)
        const startingUSDCamount = await s.USDC.balanceOf(s.Dave.address)
        assert.equal(startingUSDCamount.toString(), s.Dave_USDC.sub(usdcAmount).toString(), "Starting USDC balance is correct")



        const withdrawResult = await s.USDI.connect(s.Dave).withdraw(usdcAmount)
        await mineBlock()

        let usdcBalance = await s.USDC.balanceOf(s.Dave.address)
        assert.equal(usdcBalance.toString(), s.Dave_USDC.toString(), "Dave redeemed all USDC tokens")

        //Return Dave to his original amount of USDi holdings
        let usdiBalance = await s.USDI.balanceOf(s.Dave.address)
        //should end up with slightly more USDI than original due to interest 
        expect(usdiBalance).to.be.gt(startingUSDIAmount)
        //showBody("Diference: ", usdiBalance.sub(startingUSDIamount))
        //assert.equal(usdiBalance.toString(), startingUSDIamount.sub(usdcAmount.mul(1e12)).toString(), "USDi balance is correct")

    });

    it("Withdraw total reserves", async () => {
        

        let reserve = await s.USDC.balanceOf(s.USDI.address)
        let reserve_e18 = reserve.mul(BN("1e18"))
        let formatReserve = utils.formatEther(reserve_e18.toString())

        const withdrawResult = await s.USDI.connect(s.Dave).withdraw(reserve)
        await mineBlock()


        reserve = await s.USDC.balanceOf(s.USDI.address)
        reserve_e18 = reserve.mul(BN("1e18"))
        formatReserve = utils.formatEther((reserve_e18.sub(BN("1e6"))).toString())

        assert.equal(reserve.toString(), "0", "reserve is empty")

        await expect(s.USDI.connect(s.Dave).withdraw(1)).to.be.reverted

    })
    it("Anyone can donate USDC to the protocol", async () => {
        let balance = await s.USDC.balanceOf(s.Dave.address)
        let reserve = await s.USDC.balanceOf(s.USDI.address)

        assert.equal(reserve.toString(), "0", "reserve is 0, donations welcome :)")
        
        //todo check totalSupply and confirm interest rate changes
        
        //Dave approves and donates half of his USDC
        await s.USDC.connect(s.Dave).approve(s.USDI.address, balance.div(2))
        await s.USDI.connect(s.Dave).donate(balance.div(2))
        await mineBlock()


        let updatedBalance = await s.USDC.balanceOf(s.Dave.address)
        let updatedReserve = await s.USDC.balanceOf(s.USDI.address)

        assert.equal(updatedBalance.toString(), updatedReserve.toString(), "Donate successful")
        
    })

});
