import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{

    steps : number = 4000;
    userName : string = "Anthony";
    userTier : string = "Bronze";
    userRewards : string = "";

    rewardTierB : string = "Bronze";
    rewardTierS : string = "Silver";
    rewardTierG : string = "Gold";

    bronzeDeduct : number = 1500;
    silverDeduct : number = 3000;
    goldDeduct : number = 4500;

    reward1 : string = "$5 Grab Voucher";
    reward2 : string = "$10 Watsons Voucher";
    reward3 : string = "$15 SPCA Donation";
    reward : string = "";
    checkReward : boolean = false;

    constructor(private changeRef: ChangeDetectorRef) {}

    displayRedeemedReward(){
      do{
        if(this.reward == ""){
          alert("You currently have no rewards redeemed")
          continue;
        }
        alert (this.reward)
        break;
      }while(this.checkReward == true)

    }


    validateUserReward(rewardTier:string, toDeduct:number){
      if(this.userTier == rewardTier && this.steps > toDeduct){
        if(rewardTier == this.rewardTierB){
          this.reward = this.reward + this.reward1 + ('\n')
          this.checkReward = true;
          alert('Successfully Redeemed')
          this.steps = this.redeemReward(toDeduct);
        }else if (rewardTier == this.rewardTierS){
          this.reward = this.reward + this.reward2 + ('\n')
          this.checkReward = true;
          alert('Successfully Redeemed')
          this.steps = this.redeemReward(toDeduct);
        }else{
          this.reward = this.reward + this.reward3 + ('\n')
          this.checkReward = true;
          alert('Successfully Redeemed')
          this.steps = this.redeemReward(toDeduct);
        }
      }else if (this.userTier != rewardTier){
        alert('This reward is above your tier')
      }
    }


    redeemReward(toDeduct:number){
      if (this.steps > toDeduct){
        this.steps = this.steps - toDeduct;
        return this.steps;
      }else{
        alert('Insufficient Points! Please Walk More!')
      }


    }
}
