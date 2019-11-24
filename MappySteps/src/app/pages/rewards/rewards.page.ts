import { Component, OnInit } from '@angular/core';
import { UserReg } from '../../user.service';
import { AlertController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'


@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
})
export class RewardsPage implements OnInit {
  mainuser: AngularFirestoreDocument
  subEvent
  reward : any
    rewardList : any
    rewardSub : any
    steps : number;
    userID : string = "";
    confirmation : string = "";
    selectedReward : string = "";
    currName : string = "";
    i : number;
    next : number;

    loggedInID: string = ""


    userTier : string = "";
    userTierNo : number;
    userRewards : string = "";
    ptsToDeduct : number;

    bronzeArray = []
    silverArray = []
    goldArray  = []

    displayArray = []

    collectedReward = "";

    constructor(
      private afs: AngularFirestore,
      private user: UserReg,
      public alertController: AlertController,
    ) {
      this.mainuser = afs.doc(`users/${user.getUID()}`)
          this.subEvent = this.mainuser.valueChanges().subscribe(event => {
            this.steps = event.steps
            this.currName = event.fname
            this.userTier = event.tier
            this.next = event.toNextTier
      })
    }

  async successAlert() {
      const alert = await this.alertController.create({
        header : "Success!",
        message : "Reward Successfully Added",
        buttons : ['OK']
      });
      await alert.present();
    }

  async displayRewardAlert(){
      const alert = await this.alertController.create({
        header: "Your Claimed Rewards",
        message : this.displayArray + '\n',
        buttons : ['OK']
      });
      await alert.present()
  }

  async wrongTierAlert() {
    const alert = await this.alertController.create({
      header : "OH NO!",
      message : "This Reward Is Above Your Tier! Please Walk More!",
      buttons : ['OK']
    });

    await alert.present();
  }

  async pointsAlert() {
    const alert = await this.alertController.create({
      header : "OH NO!",
      message : "You Do Not Have Enough Points! Please Walk More!",
      buttons : ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
    this.loggedInID = this.user.getUID();
    //generate relevant data
    this.user.readRewards().subscribe(data => {
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

  loadRedeemedReward(){
        this.user.read_subcollection(this.loggedInID).subscribe(data=>{
          this.rewardSub = data.map(g=>{
            return{
              id: g.payload.doc.id,
              claimed: g.payload.doc.data()['reward'],
            };
          });
          console.log(this.rewardSub);
        })
    }

  displayRedeemedReward(){
      this.i = 0;
      if(this.i < 1){
        this.loadRedeemedReward();
        this.i = 1;
      }

      for(var i=0; i < Object.keys(this.rewardSub).length; i++){
        this.displayArray[i] = this.rewardSub[i].claimed;
      }

      this.displayRewardAlert()
    }

  validateUserReward(rewardTierNo: number, rewardNo:number){
    if(this.userTier == "Bronze"){
      this.userTierNo = 1;
    }else if (this.userTier == "Silver"){
      this.userTierNo = 2;
    }else{
      this.userTierNo = 3;
    }
    if(rewardNo == 1){
      this.selectedReward = this.bronzeArray[1];
    }else if(rewardNo == 2){
      this.selectedReward = this.silverArray[1];
    }else if(rewardNo == 3){
      this.selectedReward = this.goldArray[1];
    }else if(rewardNo == 4){
      this.selectedReward = this.bronzeArray[3];
    }else if(rewardNo == 5){
      this.selectedReward = this.silverArray[3];
    }else if(rewardNo == 6){
      this.selectedReward = this.goldArray[3];
    }if(rewardNo == 7){
      this.selectedReward = this.bronzeArray[2];
    }else if(rewardNo == 8){
      this.selectedReward = this.silverArray[2];
    }else if(rewardNo == 9){
      this.selectedReward = this.goldArray[2];
    }

    //check selected reward tier & set points
    if(rewardTierNo == 1){
      this.ptsToDeduct = this.bronzeArray[4];
    }
    else if (rewardTierNo == 2){
      this.ptsToDeduct = this.silverArray[4];
    }else{
      this.ptsToDeduct = this.goldArray [4];
    }

    //check for sufficient steps, if sufficient, pass
    if(this.steps >= this.ptsToDeduct){
        if(this.userTierNo < rewardTierNo){
          this.wrongTierAlert();
        }else if(this.userTierNo > rewardTierNo){
          this.redeemReward(this.ptsToDeduct)
          this.CreateRecord(this.loggedInID);
        }else{
          this.redeemReward(this.ptsToDeduct)
          this.CreateRecord(this.loggedInID);
        }
      }else{
        this.pointsAlert();
      }
  }

  redeemReward(deductPoint){
    let reward = {}
    this.steps = this.steps - deductPoint
    reward['steps'] = this.steps;
    this.user.update_Reward(this.loggedInID, reward)
    this.confirmation = "yes"
    if (this.confirmation == "yes"){
      this.successAlert();
    }
  }

  CreateRecord(uid){
    let record = {}
    record['reward'] = this.selectedReward
    this.user.add_reward(record, uid).then(resp => {
      console.log(resp)
    })
  }




}
