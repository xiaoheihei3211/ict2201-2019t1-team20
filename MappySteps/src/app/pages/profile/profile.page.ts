import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { UserReg } from '../../user.service';
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  mainuser: AngularFirestoreDocument
  subEvent
  fname: string;
  lname: string;
  email: string;
  commute: string;
  age: string;
  mobile: string;
  gender: string;

  constructor(
    private afs: AngularFirestore,
    private user: UserReg,
    public router: Router,
    private afAuth: AngularFireAuth,
  ) {
    this.mainuser = afs.doc(`users/${user.getUID()}`)
        this.subEvent = this.mainuser.valueChanges().subscribe(event => {
          this.fname = event.fname
          this.lname = event.lname
          this.age = event.age
          this.commute = event.commute
          this.email = event.email
          this.gender = event.gender
          this.mobile = event.mobile
          this.email = event.email

    })
  }

  ngOnInit() {
  }

  async editProfile(){
    this.router.navigate(['home/update'])
  }

  async logOut() {
    console.log("Logged out")
    this.afAuth.auth.signOut();
    this.router.navigate(['/login'])
  }
}
