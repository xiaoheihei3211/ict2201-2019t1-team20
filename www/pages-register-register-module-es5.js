(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='light'>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-buttons slot=\"start\">\n    <ion-back-button  defaultHref=\"/login\"></ion-back-button>\n</ion-buttons>\n\n  <ion-content >\n    <app-logo></app-logo>\n<ion-list >\n  <form [formGroup]=\"RegForm\">\n    <ion-row>\n      <ion-col class=\"ion-padding\">\n        <ion-item>\n          <ion-icon item-left name=\"person\" color=\"secondary\"></ion-icon>\n          <ion-input type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"fname\" formControlName=\"fname\" [class.invalid]=\"!RegForm.controls.fname.valid && RegForm.controls.fname.dirty\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"!RegForm.controls.fname.valid  && RegForm.controls.fname.dirty\">\n          <ion-label stacked class=\"my-label\" color=\"danger\">Please Enter A Valid Name.</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col class=\"ion-padding\">\n        <ion-item>\n          <ion-icon item-left name=\"person\" color=\"secondary\"></ion-icon>\n          <ion-input type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"lname\" formControlName=\"lname\" [class.invalid]=\"!RegForm.controls.lname.valid && RegForm.controls.lname.dirty\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"!RegForm.controls.lname.valid  && RegForm.controls.lname.dirty\">\n          <ion-label stacked class=\"my-label\" color=\"danger\">Please Enter A Valid Name.</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row >\n      <ion-col class=\"ion-padding\">\n        <ion-item>\n          <ion-icon medium item-left name=\"lock\" color=\"secondary\"></ion-icon>\n          <ion-input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" formControlName=\"password\" [class.invalid]=\"!RegForm.controls.password.valid && RegForm.controls.password.dirty\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"!RegForm.controls.password.valid  && RegForm.controls.password.dirty\">\n          <ion-label stacked class=\"my-label\" color=\"danger\">*Uppercase,Lowercase,Num*</ion-label>\n        </ion-item>\n        <ion-item *ngIf=\"!RegForm.controls.password.valid  && RegForm.controls.password.dirty\">\n          <ion-label stacked class=\"my-label\" color=\"danger\">Please Enter A Valid Password</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col class=\"ion-padding\">\n        <ion-item>\n          <ion-icon medium item-left name=\"lock\" color=\"secondary\"></ion-icon>\n          <ion-input type=\"password\" placeholder=\"Confirm Password\" [(ngModel)]=\"cpassword\" formControlName=\"cpassword\" [class.invalid]=\"!RegForm.controls.cpassword.valid && RegForm.controls.cpassword.dirty\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"!RegForm.controls.cpassword.valid  && RegForm.controls.cpassword.dirty\">\n          <ion-label stacked class=\"my-label\" color=\"danger\">*Uppercase,Lowercase,Num*</ion-label>\n        </ion-item>\n        <ion-item *ngIf=\"!RegForm.controls.cpassword.valid  && RegForm.controls.cpassword.dirty\">\n          <ion-label stacked class=\"my-label\" color=\"danger\">Please Enter A Valid Password</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row >\n      <ion-col class=\"ion-padding\">\n        <ion-item>\n          <ion-icon medium item-left name=\"mail\" color=\"secondary\"></ion-icon>\n          <ion-input type=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" formControlName=\"email\" [class.invalid]=\"!RegForm.controls.email.valid && RegForm.controls.email.dirty\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"!RegForm.controls.email.valid  && RegForm.controls.email.dirty\">\n          <ion-label stacked class=\"my-label\" color=\"danger\">Please Enter A Valid Email.</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col class=\"ion-padding\">\n        <ion-item>\n          <ion-icon item-left name=\"phone-portrait\" color=\"secondary\"></ion-icon>\n          <ion-input type=\"tel\" placeholder=\"Mobile\" [(ngModel)]=\"mobile\" formControlName=\"mobile\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  <ion-row >\n      <ion-col class=\"ion-padding\">\n        <ion-item>\n          <ion-icon item-left name=\"man\" color=\"secondary\"></ion-icon>\n          <ion-input type=\"text\" placeholder=\"Age\" [(ngModel)]=\"age\" formControlName=\"age\" [class.invalid]=\"!RegForm.controls.age.valid && RegForm.controls.age.dirty\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"!RegForm.controls.age.valid  && RegForm.controls.age.dirty\">\n          <ion-label stacked class=\"my-label\" color=\"danger\">Please Enter A Valid Age.</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col class=\"ion-padding\">\n        <ion-item>\n          <ion-icon item-left name=\"man\" color=\"secondary\"></ion-icon>\n          <ion-select [(ngModel)]=\"gender\" formControlName=\"gender\" placeholder=\"Gender\" [class.invalid]=\"!RegForm.controls.gender.valid && RegForm.controls.gender.dirty\">\n              <ion-select-option value=\"Male\" checked=\"true\">Male</ion-select-option>\n              <ion-select-option value=\"Female\">Female</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-icon item-left name=\"walk\" color=\"secondary\"></ion-icon>\n        <ion-select [(ngModel)]=\"commute\" formControlName=\"commute\" placeholder=\"Commute Method\" [class.invalid]=\"!RegForm.controls.commute.valid && RegForm.controls.commute.dirty\">\n            <ion-select-option value=\"Walking\" checked=\"true\">Walking</ion-select-option>\n            <ion-select-option value=\"Wheelchair\">Wheelchair</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-button expand=\"block\" share=\"round\" color=\"success\" (click)=\"verifyDetails()\" [disabled]=\"!fname || !lname || !password || !cpassword || !email || !mobile || !age || !gender || !commute\" >Register</ion-button>\n  </form>\n</ion-list>\n\n\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");







//import to use app-slides from ComponentsModule

//import to use ReactiveFormsModule

var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid {\n  border: 1px solid #ea6153;\n}\n\n.my-label {\n  font-size: x-small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvQzpcXFVzZXJzXFx3ZWl5YVxcT25lRHJpdmVcXERlc2t0b3BcXFNJVCBOT1RFU1xcWUVBUiAyIFRSSSAxXFxJQ1QyMjAxIC0gSW50cm9kdWN0aW9uIHRvIFNvZnR3YXJlIEVuZ2luZWVyaW5nXFxQcm9qZWN0XFxNYXBweVN0ZXBzX0xvZ2luUmVnL3NyY1xcYXBwXFxwYWdlc1xccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52YWxpZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWE2MTUzO1xyXG59XHJcblxyXG4ubXktbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG4iLCIuaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYTYxNTM7XG59XG5cbi5teS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var RegisterPage = /** @class */ (function () {
    function RegisterPage(afAuth, alertController, router, afstore, user, formBuilder) {
        this.afAuth = afAuth;
        this.alertController = alertController;
        this.router = router;
        this.afstore = afstore;
        this.user = user;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.password = "";
        this.cpassword = "";
        this.email = "";
        this.fname = "";
        this.lname = "";
        this.mobile = "";
        this.age = "";
        this.gender = "";
        this.commute = "";
        this.steps = 0;
        this.lifetimePoints = 0;
        this.toNextTier = 0;
        this.RegForm = formBuilder.group({
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])],
            cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])],
            mobile: [''],
            age: ['', this.isValid],
            gender: [''],
            commute: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
    }
    RegisterPage.prototype.ngOnInit = function () { };
    RegisterPage.prototype.verifyDetails = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, email, password, cpassword, fname, lname, mobile, age, gender, commute, steps, lifetimePoints, toNextTier, alert, pwdalert, success, res, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, email = _a.email, password = _a.password, cpassword = _a.cpassword, fname = _a.fname, lname = _a.lname, mobile = _a.mobile, age = _a.age, gender = _a.gender, commute = _a.commute, steps = _a.steps, lifetimePoints = _a.lifetimePoints, toNextTier = _a.toNextTier;
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Error',
                                subHeader: 'Email/Password not valid',
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
                                subHeader: 'Password does not match',
                                message: 'Please re-enter Password',
                                buttons: [{
                                        text: 'Cancel',
                                        role: 'cancel'
                                    }]
                            })];
                    case 2:
                        pwdalert = _b.sent();
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Success',
                                subHeader: 'Registration is Done!',
                                message: 'Please proceed to login.',
                                buttons: [{
                                        text: 'OK',
                                        role: 'cancel'
                                    }]
                            })];
                    case 3:
                        success = _b.sent();
                        if (!(password !== cpassword)) return [3 /*break*/, 5];
                        return [4 /*yield*/, pwdalert.present()];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, console.error("password mismatch")];
                    case 5:
                        _b.trys.push([5, 8, , 10]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)];
                    case 6:
                        res = _b.sent();
                        this.afstore.doc("users/" + res.user.uid).set({
                            email: email,
                            password: password,
                            fname: fname,
                            lname: lname,
                            mobile: mobile,
                            age: age,
                            gender: gender,
                            commute: commute,
                            steps: steps,
                            lifetimePoints: lifetimePoints,
                            toNextTier: toNextTier
                        });
                        this.user.setUser({
                            email: email,
                            commute: commute,
                            mobile: mobile,
                            uid: res.user.uid
                        });
                        return [4 /*yield*/, success.present()];
                    case 7:
                        _b.sent();
                        this.router.navigate(['login']);
                        return [3 /*break*/, 10];
                    case 8:
                        err_1 = _b.sent();
                        console.dir(err_1);
                        return [4 /*yield*/, alert.present()];
                    case 9:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    //Age Validator
    RegisterPage.prototype.isValid = function (control) {
        if (isNaN(control.value)) {
            return {
                "not a number": true
            };
        }
        if (control.value % 1 !== 0) {
            return {
                "not a whole number": true
            };
        }
        if (control.value < 8) {
            return {
                "too young": true
            };
        }
        if (control.value > 90) {
            return {
                "not realistic": true
            };
        }
        return null;
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserReg"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _user_service__WEBPACK_IMPORTED_MODULE_6__["UserReg"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module-es5.js.map