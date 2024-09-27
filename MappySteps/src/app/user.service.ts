import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'

import { AngularFirestore } from '@angular/fire/firestore';

interface user {
  //email: string,
  uid: string
  commute: string
  mobile: string
  email: string
}

@Injectable()
export class UserReg {
  private user: user

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore ) {}

  setUser(user: user) {
    this.user = user
  }

  getUID() {
    return this.user.uid
  }
  //feedback
  setStar(rating){
    return this.afs.collection('feedback').add(rating);
  }

  getEmail(): string {
   return this.user.email
  }

  getCommute(): string {
    return this.user.email
  }

  getMobile(): string {
     return this.user.email
   }

  readUsrReward(uid){
    return this.afs.collection('users');
  }

  readRewards(){
    return this.afs.collection('toRedeem').snapshotChanges();
  }

  update_Reward(rewardID, reward){
    this.afs.doc('users/' + rewardID).update(reward)
  }

  read_subcollection(uid){
    return this.afs.collection('users').doc('/' + uid).collection('claimedRewards').snapshotChanges();
  }

  add_reward(reward, uid){
    return this.afs.collection('users').doc('/' + uid).collection('claimedRewards').add(reward);
  }

  //history Routes
  read_history_routes(uid){
   return this.afs.collection('users').doc('/' + uid).collection('historyRoutes').snapshotChanges();
  }

  add_historyRoutes(routes, uid){
    return this.afs.collection('users').doc('/' + uid).collection('historyRoutes').add(routes);
  }

  //point system
  add_points(points, uid){
    this.afs.doc('users/' + uid).update(points)
  }

  add_totalPoints(points, uid){
    this.afs.doc('users/' + uid).update(points)
  }


  update_tier(tier, uid){
    this.afs.doc('users/' + uid).update(tier)
  }


}
