import { Component, OnInit } from '@angular/core'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { UserReg } from '../../user.service'
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular'


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  currentUser: AngularFirestoreDocument
  userss
  username: string
  email: string
  commute: string
  mobile: string

  constructor(private afs: AngularFirestore,
    private user: UserReg,
    private userProfile: UserReg,
    public router: Router,
    public alert: AlertController,
    public afAuth: AngularFireAuth
  ) {this.currentUser = afs.doc(`users/${user.getUID()}`)
        this.userss = this.currentUser.valueChanges().subscribe(e => {
        this.email = e.email
        this.commute = e.commute
        this.mobile = e.mobile
   })
 }

  ngOnInit() {
  }
  async updateProfile() {


    //update email
    if(this.email !== this.userProfile.getEmail()) {
      this.currentUser.update({
        email: this.email
      })
      this.afAuth.auth.currentUser.updateEmail(this.email);
    }

    if(this.commute !== this.userProfile.getCommute()) {
      this.currentUser.update({
        commute: this.commute
      })
    }

    if(this.mobile !== this.userProfile.getMobile()) {
      this.currentUser.update({
        mobile: this.mobile
      })
    }

    this.showAlert();
    this.router.navigate(['/home/profile'])
  }

  async showAlert() {
    const alert = await this.alert.create({
      header: 'Success',
      message: 'Profile updated!',
      buttons: ["Ok"]
    })
    await alert.present()
  }

}
