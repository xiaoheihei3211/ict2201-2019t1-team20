import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { AlertController } from '@ionic/angular';

import { Router } from '@angular/router';

import { UserReg } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = ""
  password: string = ""
  commute: string
  mobile: string

  constructor(public afAuth: AngularFireAuth , private alertController: AlertController, private router : Router, public user: UserReg) { }

  ngOnInit() {
  }

  async verifyLogin() {

    const { email, password, commute, mobile } = this
    const alert = await this.alertController.create({    //pop-up alert function
      header: 'Error',
      subHeader: 'Email/Password not found',
      message: 'Your Credentials are incorrect',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }]
    });

    const loginAttempts = await this.alertController.create({     //pop-up alert function
      header: 'Error',
      subHeader: 'Too many tries',
      message: 'Your application has been disabled',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }]
    });

    const VerifyAlert = await this.alertController.create({     //pop-up alert function
      header: 'Take Note',
      subHeader: 'Email Verification',
      message: 'Please Verify Your Account in your email.',
      buttons: [{
        text: 'Ok',
        role: 'cancel'
      }]
    });

    const Welcome = await this.alertController.create({    //pop-up alert function
      header: 'Take Note',
      subHeader: 'Email Verified',
      message: 'Please proceed to login',
      buttons: [{
        text: 'Ok',
        role: 'cancel'
      }]
    });

    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
      if(res.user.emailVerified) {
         console.log("email verified");
         this.router.navigate(['home/navigate']);
        // Redirect the user here
      } else {
        // Tell the user to have a look at its mailbox
         await VerifyAlert.present()
         this.sendEmailVerification(email);
       }
      if(res.user) {
        this.user.setUser({
          email,
          commute,
          mobile,
          uid: res.user.uid
        })


      }

    }
    catch(err) {
      console.dir(err)
      await alert.present()
    }

  }

navigatetoRegisterPage() {

    this.router.navigate(['register']);
  }



sendEmailVerification(email) {
  this.afAuth.authState.subscribe(user => {
      user.sendEmailVerification()
      .then(() => {
        console.log('email sent');
      })
    });
}

loadForgotpasswordPage() {
  this.router.navigate(['forgetpass']);
}

}

/*
testcase1(){
  const res = await this.afAuth.auth.signInWithEmailAndPassword("abc123.com", this.password)
  console.dir(err)=="auth/invalid email"

}
*/
