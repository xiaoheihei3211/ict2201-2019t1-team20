import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  constructor(
      private firestore: AngularFirestore
    ) { }

    add_Reward(reward, uid){
      return this.firestore.collection('Reward').doc('/'+uid).collection('claimedReward').add(reward);
    }

    read_subcollection(uid){
      return this.firestore.collection('Reward').doc('/'+ uid).collection('claimedRewards').snapshotChanges();
    }


    read_Reward(){
      return this.firestore.collection('Reward').snapshotChanges();
    }

    read_Bronze(){
      return this.firestore.collection('toRedeem').snapshotChanges();
    }

    update_Reward(rewardID, reward){
      this.firestore.doc('Reward/' + rewardID).update(reward);
    }

}
