(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-route-route-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/route/route.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/route/route.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='light'>\n    <ion-title>RouteHistory</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let item of subHistory\">\n  <span *ngIf=\"!item.isEdit\">\n\n    <ion-card-content>\n      <strong>Start location:</strong> {{item.sroute}} <br>\n      <strong>End location: </strong>{{item.eroute}}\n    </ion-card-content>\n      <ion-button expand =\"block\" shape=\"round\" color=\"success\" size=\"small\" (click)=\"toFeedback()\">\n       <ion-icon size=\"small\" slot=\"icon-only\" name=\"star\"></ion-icon>\n              Submit feedback\n      </ion-button>\n  </span>\n  </ion-card>\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/route/route.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/route/route.module.ts ***!
  \*********************************************/
/*! exports provided: RoutePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutePageModule", function() { return RoutePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _route_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./route.page */ "./src/app/pages/route/route.page.ts");







const routes = [
    {
        path: '',
        component: _route_page__WEBPACK_IMPORTED_MODULE_6__["RoutePage"]
    }
];
let RoutePageModule = class RoutePageModule {
};
RoutePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_route_page__WEBPACK_IMPORTED_MODULE_6__["RoutePage"]]
    })
], RoutePageModule);



/***/ }),

/***/ "./src/app/pages/route/route.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/route/route.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvdXRlL3JvdXRlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/route/route.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/route/route.page.ts ***!
  \*******************************************/
/*! exports provided: RoutePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutePage", function() { return RoutePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let RoutePage = class RoutePage {
    constructor(afs, //Must have in order to pre-load from constructor
    user, //Wei Ye's CRUD Service
    alertController, router) {
        this.afs = afs;
        this.user = user;
        this.alertController = alertController;
        this.router = router;
        this.displayHistory = [];
    }
    ngOnInit() {
        this.loggedInID = this.user.getUID();
        this.user.read_history_routes(this.loggedInID).subscribe(data => {
            this.subHistory = data.map(e => {
                return {
                    id: e.payload.doc.id,
                    isEdit: false,
                    sroute: e.payload.doc.data()['startloc'],
                    eroute: e.payload.doc.data()['endloc']
                };
            });
            console.log(this.subHistory);
        });
    }
    //route to feedback
    toFeedback() {
        this.router.navigate(['home/feedback']);
    }
};
RoutePage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserReg"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RoutePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-route',
        template: __webpack_require__(/*! raw-loader!./route.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/route/route.page.html"),
        styles: [__webpack_require__(/*! ./route.page.scss */ "./src/app/pages/route/route.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
        _user_service__WEBPACK_IMPORTED_MODULE_3__["UserReg"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], RoutePage);



/***/ })

}]);
//# sourceMappingURL=pages-route-route-module-es2015.js.map