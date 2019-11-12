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

  constructor(public afAuth: AngularFireAuth , private alertController: AlertController, private router : Router, public user: UserReg) { }

  ngOnInit() { }

  async verifyLogin() {

    const { email, password } = this
    const alert = await this.alertController.create({ //popup alert for incorrect credentials
      header: 'Error',
      subHeader: 'Email/Password not found',
      message: 'Your Credentials are incorrect',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }]
    });

    const loginAttempts = await this.alertController.create({ //popup alert for exceeding no. of tries
      header: 'Error',
      subHeader: 'Too many tries',
      message: 'Your application has been disabled',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }]
    });

    const emailNotVerifiedError = await this.alertController.create({ //popup alert for non-verified email
      header: 'Error',
      subHeader: 'Email not verified!',
      message : "Please verify your email before logging in. ",
      buttons: [{
        text: 'Close',
        role: 'cancel'
      }]
    })

    //Email verification
    try { //firebase authentication for email & password validation and verification
      const res = await this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
      if(res.user.emailVerified) {
         console.log("email verified");
         this.router.navigate(['home/navigate']);
        // Redirect the user here
      } else {
        // Tell the user to have a look at its mailbox
        await emailNotVerifiedError.present();
        console.log("email not verified");
        this.sendEmailVerification(email);
       }
      if(res.user) {
        this.user.setUser({
          email,
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
      user.sendEmailVerification() //send verification email to user
      .then(() => {
        console.log('email sent');
      })
    });
}
}
