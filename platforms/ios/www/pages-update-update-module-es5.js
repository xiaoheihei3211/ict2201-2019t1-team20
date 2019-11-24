(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-update-update-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/update/update.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/update/update.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='light'>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home/profile\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding fullscreen>\n  <ion-list>\n\n    <ion-card-header>\n      <ion-card-title>\n       <ion-row>\n         <ion-col>\n           Edit Profile\n         </ion-col>\n        </ion-row>\n       </ion-card-title>\n    </ion-card-header>\n\n     <ion-card-header>\n       <ion-item>\n        <ion-label><strong>Email: </strong></ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"email\" placeholder=\"{{ email }}\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n       <ion-label><strong>Mobile: </strong></ion-label>\n       <ion-input type=\"text\" [(ngModel)]=\"mobile\" placeholder=\"{{ mobile }}\"></ion-input>\n     </ion-item>\n\n    <ion-item>\n     <ion-label><strong>Commute Method: </strong></ion-label>\n       <ion-select [(ngModel)]=\"commute\">\n           <ion-select-option value=\"Walking\" checked=\"true\">Walking</ion-select-option>\n           <ion-select-option value=\"Wheelchair\">Wheelchair</ion-select-option>\n       </ion-select>\n   </ion-item>\n\n     </ion-card-header>\n\n    <ion-button id=\"button\" fill=\"solid\" expand=\"block\" (click)=\"updateProfile()\" [disabled]=\"!email || !mobile || !commute\">Update Profile</ion-button>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/update/update.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/update/update.module.ts ***!
  \***********************************************/
/*! exports provided: UpdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePageModule", function() { return UpdatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update.page */ "./src/app/pages/update/update.page.ts");







var routes = [
    {
        path: '',
        component: _update_page__WEBPACK_IMPORTED_MODULE_6__["UpdatePage"]
    }
];
var UpdatePageModule = /** @class */ (function () {
    function UpdatePageModule() {
    }
    UpdatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_update_page__WEBPACK_IMPORTED_MODULE_6__["UpdatePage"]]
        })
    ], UpdatePageModule);
    return UpdatePageModule;
}());



/***/ }),

/***/ "./src/app/pages/update/update.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/update/update.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VwZGF0ZS91cGRhdGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/update/update.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/update/update.page.ts ***!
  \*********************************************/
/*! exports provided: UpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePage", function() { return UpdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var UpdatePage = /** @class */ (function () {
    function UpdatePage(afs, user, userProfile, router, alert, afAuth) {
        var _this = this;
        this.afs = afs;
        this.user = user;
        this.userProfile = userProfile;
        this.router = router;
        this.alert = alert;
        this.afAuth = afAuth;
        this.currentUser = afs.doc("users/" + user.getUID());
        this.userss = this.currentUser.valueChanges().subscribe(function (e) {
            _this.email = e.email;
            _this.commute = e.commute;
            _this.mobile = e.mobile;
        });
    }
    UpdatePage.prototype.ngOnInit = function () {
    };
    UpdatePage.prototype.updateProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                //update email
                if (this.email !== this.userProfile.getEmail()) {
                    this.currentUser.update({
                        email: this.email
                    });
                    this.afAuth.auth.currentUser.updateEmail(this.email);
                }
                if (this.commute !== this.userProfile.getCommute()) {
                    this.currentUser.update({
                        commute: this.commute
                    });
                }
                if (this.mobile !== this.userProfile.getMobile()) {
                    this.currentUser.update({
                        mobile: this.mobile
                    });
                }
                this.showAlert();
                this.router.navigate(['/home/profile']);
                return [2 /*return*/];
            });
        });
    };
    UpdatePage.prototype.showAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Success',
                            message: 'Profile updated!',
                            buttons: ["Ok"]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdatePage.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserReg"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserReg"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
    ]; };
    UpdatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! raw-loader!./update.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/update/update.page.html"),
            styles: [__webpack_require__(/*! ./update.page.scss */ "./src/app/pages/update/update.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserReg"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserReg"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], UpdatePage);
    return UpdatePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-update-update-module-es5.js.map