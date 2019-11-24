import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { UserReg } from '../../user.service';
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-route',
  templateUrl: './route.page.html',
  styleUrls: ['./route.page.scss'],
})
export class RoutePage implements OnInit {
  mainuser: AngularFirestoreDocument
  subEvent
  subHistory
  loggedInID: string
  hroute
  displayHistory = []

  constructor(
      private afs: AngularFirestore, //Must have in order to pre-load from constructor
      private user: UserReg, //Wei Ye's CRUD Service
      public alertController: AlertController,
      private router: Router
    ){}
  ngOnInit() {
    this.loggedInID = this.user.getUID();

    this.user.read_history_routes(this.loggedInID).subscribe(data=>{
      this.subHistory = data.map(e=>{
        return{
          id: e.payload.doc.id,
          isEdit: false,
          sroute: e.payload.doc.data()['startloc'],
          eroute: e.payload.doc.data()['endloc']
        };
      });
      console.log(this.subHistory)
    })
  }
  //route to feedback
  toFeedback(){
    this.router.navigate(['home/feedback'])
  }



}
