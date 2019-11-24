(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color='light'>\r\n    <ion-title>Login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n      <app-logo></app-logo>\r\n      <ion-list>\r\n          <div padding>\r\n          <ion-item>\r\n            <ion-icon item-left name=\"person\" color=\"secondary\"></ion-icon>\r\n            <ion-input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"email\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-icon medium item-left name=\"lock\" color=\"secondary\"></ion-icon>\r\n            <ion-input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\"></ion-input>\r\n          </ion-item>\r\n          </div>\r\n        <ion-button expand=\"block\" share=\"round\" color=\"success\" (click)=\"verifyLogin()\">Login</ion-button>\r\n        <div padding class=\"center\">\r\n              <ion-button fill=\"clear\" (click)=\"loadForgotpasswordPage()\">Forgot Password?</ion-button>\r\n              <br>\r\n              <ion-button fill=\"clear\" (click)=\"navigatetoRegisterPage()\">New user? Sign up</ion-button>\r\n        </div>\r\n      </ion-list>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");







//import to use app-slides from ComponentsModule

var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
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
    return LoginPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");






var LoginPage = /** @class */ (function () {
    function LoginPage(afAuth, alertController, router, user) {
        this.afAuth = afAuth;
        this.alertController = alertController;
        this.router = router;
        this.user = user;
        this.email = "";
        this.password = "";
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.verifyLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, email, password, commute, mobile, alert, loginAttempts, VerifyAlert, Welcome, res, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, email = _a.email, password = _a.password, commute = _a.commute, mobile = _a.mobile;
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Error',
                                subHeader: 'Email/Password not found',
                                message: 'Your Credentials are incorrect',
                                buttons: [{
                                        text: 'Cancel',
                                        role: 'cancel'
                                    }]
                            })];
                    case 1:
                        alert = _b.sent();
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Error',
                                subHeader: 'Too many tries',
                                message: 'Your application has been disabled',
                                buttons: [{
                                        text: 'Cancel',
                                        role: 'cancel'
                                    }]
                            })];
                    case 2:
                        loginAttempts = _b.sent();
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Take Note',
                                subHeader: 'Email Verification',
                                message: 'Please Verify Your Account in your email.',
                                buttons: [{
                                        text: 'Cancel',
                                        role: 'cancel'
                                    }]
                            })];
                    case 3:
                        VerifyAlert = _b.sent();
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Take Note',
                                subHeader: 'Email Verified',
                                message: 'Please proceed to login',
                                buttons: [{
                                        text: 'Ok',
                                        role: 'cancel'
                                    }]
                            })];
                    case 4:
                        Welcome = _b.sent();
                        _b.label = 5;
                    case 5:
                        _b.trys.push([5, 10, , 12]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)];
                    case 6:
                        res = _b.sent();
                        if (!res.user.emailVerified) return [3 /*break*/, 7];
                        console.log("email verified");
                        this.router.navigate(['home/navigate']);
                        return [3 /*break*/, 9];
                    case 7: 
                    // Tell the user to have a look at its mailbox
                    return [4 /*yield*/, VerifyAlert.present()];
                    case 8:
                        // Tell the user to have a look at its mailbox
                        _b.sent();
                        this.sendEmailVerification(email);
                        _b.label = 9;
                    case 9:
                        if (res.user) {
                            this.user.setUser({
                                email: email,
                                commute: commute,
                                mobile: mobile,
                                uid: res.user.uid
                            });
                        }
                        return [3 /*break*/, 12];
                    case 10:
                        err_1 = _b.sent();
                        console.dir(err_1);
                        return [4 /*yield*/, alert.present()];
                    case 11:
                        _b.sent();
                        return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.navigatetoRegisterPage = function () {
        this.router.navigate(['register']);
    };
    LoginPage.prototype.sendEmailVerification = function (email) {
        this.afAuth.authState.subscribe(function (user) {
            user.sendEmailVerification()
                .then(function () {
                console.log('email sent');
            });
        });
    };
    LoginPage.prototype.loadForgotpasswordPage = function () {
        this.router.navigate(['forgetpass']);
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserReg"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserReg"]])
    ], LoginPage);
    return LoginPage;
}());

/*
testcase1(){
  const res = await this.afAuth.auth.signInWithEmailAndPassword("abc123.com", this.password)
  console.dir(err)=="auth/invalid email"

}
*/


/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map