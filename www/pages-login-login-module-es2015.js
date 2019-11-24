(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color='light'>\r\n    <ion-title>Login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n      <app-logo></app-logo>\r\n      <ion-list>\r\n          <div padding>\r\n          <ion-item>\r\n            <ion-icon item-left name=\"person\" color=\"secondary\"></ion-icon>\r\n            <ion-input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"email\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-icon medium item-left name=\"lock\" color=\"secondary\"></ion-icon>\r\n            <ion-input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\"></ion-input>\r\n          </ion-item>\r\n          </div>\r\n        <ion-button expand=\"block\" share=\"round\" color=\"success\" (click)=\"verifyLogin()\" [disabled]=\"!email || !password\" >Login</ion-button>\r\n        <div padding class=\"center\">\r\n              <ion-button fill=\"clear\" (click)=\"loadForgotpasswordPage()\">Forgot Password?</ion-button>\r\n              <br>\r\n              <ion-button fill=\"clear\" (click)=\"navigatetoRegisterPage()\">New user? Sign up</ion-button>\r\n        </div>\r\n      </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");







//import to use app-slides from ComponentsModule

const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");






let LoginPage = class LoginPage {
    constructor(afAuth, alertController, router, user) {
        this.afAuth = afAuth;
        this.alertController = alertController;
        this.router = router;
        this.user = user;
        this.email = "";
        this.password = "";
    }
    ngOnInit() {
    }
    verifyLogin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { email, password, commute, mobile } = this;
            const alert = yield this.alertController.create({
                header: 'Error',
                subHeader: 'Email/Password not found',
                message: 'Your Credentials are incorrect',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                    }]
            });
            const loginAttempts = yield this.alertController.create({
                header: 'Error',
                subHeader: 'Too many tries',
                message: 'Your application has been disabled',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                    }]
            });
            const VerifyAlert = yield this.alertController.create({
                header: 'Take Note',
                subHeader: 'Email Verification',
                message: 'Please Verify Your Account in your email.',
                buttons: [{
                        text: 'Ok',
                        role: 'cancel'
                    }]
            });
            const Welcome = yield this.alertController.create({
                header: 'Take Note',
                subHeader: 'Email Verified',
                message: 'Please proceed to login',
                buttons: [{
                        text: 'Ok',
                        role: 'cancel'
                    }]
            });
            try {
                const res = yield this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);
                if (res.user.emailVerified) {
                    console.log("email verified");
                    this.router.navigate(['home/navigate']);
                    // Redirect the user here
                }
                else {
                    // Tell the user to have a look at its mailbox
                    yield VerifyAlert.present();
                    this.sendEmailVerification(email);
                }
                if (res.user) {
                    this.user.setUser({
                        email,
                        commute,
                        mobile,
                        uid: res.user.uid
                    });
                }
            }
            catch (err) {
                console.dir(err);
                yield alert.present();
            }
        });
    }
    navigatetoRegisterPage() {
        this.router.navigate(['register']);
    }
    sendEmailVerification(email) {
        this.afAuth.authState.subscribe(user => {
            user.sendEmailVerification()
                .then(() => {
                console.log('email sent');
            });
        });
    }
    loadForgotpasswordPage() {
        this.router.navigate(['forgetpass']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserReg"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserReg"]])
], LoginPage);

/*
testcase1(){
  const res = await this.afAuth.auth.signInWithEmailAndPassword("abc123.com", this.password)
  console.dir(err)=="auth/invalid email"

}
*/


/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map