import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { CrudService } from './../services/crud.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

    reward : any
    rewardList : any
    steps : number;
    userID : string = "";
    abcd: number;

    userTier : string = "";
    userTierNo : number;
    userRewards : string = "";
    ptsToDeduct : number;

    bronzeArray = []
    silverArray = []
    goldArray  = []

    displayArray = []

    collectedReward : string = "";

    checkReward : boolean = false;

    constructor(private changeRef: ChangeDetectorRef, private crudService: CrudService) {}

    ngOnInit() {
     this.crudService.read_Reward().subscribe(data => {
       this.reward = data.map(e => {
         return {
           id: e.payload.doc.id,
           isEdit: false,
           steps: e.payload.doc.data()['steps'],
           tier: e.payload.doc.data()['tier'],
           uname: e.payload.doc.data()['uname'],
           next: e.payload.doc.data()['toNextTier'],
         };

       })
       this.userTier = this.reward[0].tier;
       this.steps = this.reward[0].steps;
       this.userID = this.reward[0].id;
       console.log(this.reward);

     });

       this.crudService.read_Bronze().subscribe(data => {
         this.rewardList = data.map(f => {
           return {
             id: f.payload.doc.id,
             grab: f.payload.doc.data()['grabName'],
             spca: f.payload.doc.data()['spcaName'],
             watsons: f.payload.doc.data()['watsonsName'],
             points: f.payload.doc.data()['points'],
           };
         })
         console.log(this.rewardList);


          this.bronzeArray[0] = this.rewardList[0].id
          this.bronzeArray[1] = this.rewardList[0].grab
          this.bronzeArray[2] = this.rewardList[0].spca
          this.bronzeArray[3] = this.rewardList[0].watsons
          this.bronzeArray[4] = this.rewardList[0].points


          this.silverArray[0] = this.rewardList[1].id
          this.silverArray[1] = this.rewardList[1].grab
          this.silverArray[2] = this.rewardList[1].spca
          this.silverArray[3] = this.rewardList[1].watsons
          this.silverArray[4] = this.rewardList[1].points

          this.goldArray[0] = this.rewardList[2].id
          this.goldArray[1] = this.rewardList[2].grab
          this.goldArray[2] = this.rewardList[2].spca
          this.goldArray[3] = this.rewardList[2].watsons
          this.goldArray[4] = this.rewardList[2].points

       });



   }

   displayRedeemedReward(){
      do{
        if(this.reward == ""){
          alert("You currently have no rewards redeemed")
          continue;
        }
        alert (this.userTier)
        break;
      }while(this.checkReward == true)

    }

    validateUserReward(rewardTierNo:number){
      if(this.userTier == "Bronze"){
        this.userTierNo = 1;
      }else if (this.userTier == "Silver"){
        this.userTierNo = 2;
      }else{
        this.userTierNo = 3;
      }

      if(rewardTierNo == 1){
        this.ptsToDeduct = this.bronzeArray[4];
      }
      else if (rewardTierNo == 2){
        this.ptsToDeduct = this.silverArray[4];
      }else{
        this.ptsToDeduct = this.goldArray [4];
      }

      if(this.steps >= this.ptsToDeduct){
        if(this.userTierNo < rewardTierNo){
          alert("This Reward Is Above Your Tier! Please Walk More!")
        }else if(this.userTierNo > rewardTierNo){
          this.redeemReward(this.ptsToDeduct)
        }else{
          this.redeemReward(this.ptsToDeduct)
        }
      }else{
        alert("Not Enough Points! Please Walk More!")
      }

    }

    redeemReward(deductPoint){
      let reward = {}
      this.steps = this.steps - deductPoint
      reward['steps'] = this.steps;
      this.crudService.update_Reward(this.userID, reward)
    }







}
