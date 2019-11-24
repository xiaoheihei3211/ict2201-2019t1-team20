(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rewards-rewards-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/rewards/rewards.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/rewards/rewards.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='light'>\n    <ion-title>\n      Rewards <img src=\"/assets/steps.png\" name=\"stepImg\" alt=\"\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-label id=\"pointBG\">\n    <p id=\"pointDisplay\"><ion-text id=\"currPoints\">{{steps}}</ion-text> steps</p>\n\n\n  </ion-label>\n\n  <ion-list lines=\"none\">\n\n    <ion-item>\n      <ion-label>\n        <h1>Hello,<ion-text id=\"uname\"> {{currName}} :)</ion-text></h1>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"userTier\"><h1>{{userTier}} Member</h1></ion-label>\n      </ion-item>\n      <ion-label id=\"pointBG\">\n        <p id=\"alignLeh\"><ion-text id=\"currPoints1\">{{next}}</ion-text> steps to next tier\n          <br>\n          <ion-button style=\"align:left\" (click)=\"displayRedeemedReward()\">Display Redeemed Rewards</ion-button>\n\n\n\n        </p>\n\n      </ion-label>\n      <ion-text style=\"font-size:20px; font-weight:bold; padding-left:8px;\">Rewards</ion-text>\n      <br>\n      <ion-text style=\"font-size:15px; padding-left:8px;\">Select from the options below</ion-text>\n  </ion-list>\n\n\n\n    <ion-card name=\"grabCard\">\n      <img src=\"/assets/grab.jpg\" alt=\"\">\n      <ion-header>\n        <ion-card-header>\n        <ion-card-title></ion-card-title>\n        <ion-card-subtitle *ngFor=\"let items of rewardList\">{{items.grab}} </ion-card-subtitle>\n        <ion-card-subtitle>\n          <ion-button size=\"small\" class=\"bronzeReward\" (click)=\"validateUserReward(1,1);\">{{bronzeArray[4]}} Steps</ion-button>\n          <ion-button size=\"small\" class=\"silverReward\" (click)=\"validateUserReward(2,2);\">{{silverArray[4]}} Steps</ion-button>\n          <ion-button size=\"small\" class=\"goldreward\" (click)=\"validateUserReward(3,3);\">{{goldArray[4]}} Steps</ion-button>\n        </ion-card-subtitle>\n        </ion-card-header>\n      </ion-header>\n    </ion-card>\n\n    <ion-title></ion-title>\n    <ion-title></ion-title>\n\n    <ion-card name=\"watsonsCard\">\n      <img src=\"/assets/watsons-logo.png\" alt=\"\">\n      <ion-header>\n        <ion-card-header>\n        <ion-card-title></ion-card-title>\n        <ion-card-subtitle *ngFor=\"let items of rewardList\">{{items.watsons}} </ion-card-subtitle>\n        <ion-card-subtitle>\n          <ion-button size=\"small\" class=\"bronzeReward\" (click)=\"validateUserReward(1,4);\">{{bronzeArray[4]}} Steps</ion-button>\n          <ion-button size=\"small\" class=\"silverReward\" (click)=\"validateUserReward(2,5);\">{{silverArray[4]}} Steps</ion-button>\n          <ion-button size=\"small\" class=\"goldreward\" (click)=\"validateUserReward(3,6);\">{{goldArray[4]}} Steps</ion-button>\n        </ion-card-subtitle>\n        </ion-card-header>\n      </ion-header>\n    </ion-card>\n\n\n    <ion-title></ion-title>\n    <ion-title></ion-title>\n\n    <ion-card name=\"spcaCard\">\n      <img src=\"/assets/spca.jpg\" alt=\"\">\n      <ion-header>\n        <ion-card-header>\n        <ion-card-title></ion-card-title>\n        <ion-card-subtitle *ngFor=\"let items of rewardList\">{{items.spca}} </ion-card-subtitle>\n        <ion-card-subtitle>\n          <ion-button size=\"small\" class=\"bronzeReward\" (click)=\"validateUserReward(1,7);\">{{bronzeArray[4]}} Steps</ion-button>\n          <ion-button size=\"small\" class=\"silverReward\" (click)=\"validateUserReward(2,8);\">{{silverArray[4]}} Steps</ion-button>\n          <ion-button size=\"small\" class=\"goldreward\" (click)=\"validateUserReward(3,9);\">{{goldArray[4]}} Steps</ion-button>\n        </ion-card-subtitle>\n        </ion-card-header>\n      </ion-header>\n    </ion-card>\n\n\n\n\n\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/pages/rewards/rewards.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/rewards/rewards.module.ts ***!
  \*************************************************/
/*! exports provided: RewardsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsPageModule", function() { return RewardsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rewards_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rewards.page */ "./src/app/pages/rewards/rewards.page.ts");







var routes = [
    {
        path: '',
        component: _rewards_page__WEBPACK_IMPORTED_MODULE_6__["RewardsPage"]
    }
];
var RewardsPageModule = /** @class */ (function () {
    function RewardsPageModule() {
    }
    RewardsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_rewards_page__WEBPACK_IMPORTED_MODULE_6__["RewardsPage"]]
        })
    ], RewardsPageModule);
    return RewardsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/rewards/rewards.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/rewards/rewards.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --color: #cd7f32;\n}\n\n#currPoints {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n#currPoints1 {\n  font-size: 15px;\n}\n\n#alignLeh {\n  text-align: center;\n  font-size: 15px;\n  padding-bottom: 10px;\n  color: black;\n}\n\n#progressBar {\n  background: #33cd5f;\n  height: 15px;\n}\n\n#pointDisplay {\n  background: #488aff;\n  color: white;\n  text-align: center;\n  font-size: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.userTier {\n  background: --color1;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmV3YXJkcy9DOlxcVXNlcnNcXHdlaXlhXFxPbmVEcml2ZVxcRGVza3RvcFxcU0lUIE5PVEVTXFxZRUFSIDIgVFJJIDFcXElDVDIyMDEgLSBJbnRyb2R1Y3Rpb24gdG8gU29mdHdhcmUgRW5naW5lZXJpbmdcXFByb2plY3RcXE1hcHB5U3RlcHNfTG9naW5SZWcvc3JjXFxhcHBcXHBhZ2VzXFxyZXdhcmRzXFxyZXdhcmRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmV3YXJkcy9yZXdhcmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXdhcmRzL3Jld2FyZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3R7XHJcbiAgLS1jb2xvcjogI2NkN2YzMjtcclxufVxyXG5cclxuI2N1cnJQb2ludHN7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4jY3VyclBvaW50czF7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4jYWxpZ25MZWh7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNwcm9ncmVzc0JhcntcclxuICBiYWNrZ3JvdW5kOiAjMzNjZDVmO1xyXG4gIGhlaWdodDogMTVweDtcclxufVxyXG5cclxuI3BvaW50RGlzcGxheXtcclxuICBiYWNrZ3JvdW5kOiAjNDg4YWZmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnVzZXJUaWVye1xyXG4gIGJhY2tncm91bmQ6IC0tY29sb3IxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iLCI6cm9vdCB7XG4gIC0tY29sb3I6ICNjZDdmMzI7XG59XG5cbiNjdXJyUG9pbnRzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI2N1cnJQb2ludHMxIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4jYWxpZ25MZWgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI3Byb2dyZXNzQmFyIHtcbiAgYmFja2dyb3VuZDogIzMzY2Q1ZjtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG4jcG9pbnREaXNwbGF5IHtcbiAgYmFja2dyb3VuZDogIzQ4OGFmZjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLnVzZXJUaWVyIHtcbiAgYmFja2dyb3VuZDogLS1jb2xvcjE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/rewards/rewards.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/rewards/rewards.page.ts ***!
  \***********************************************/
/*! exports provided: RewardsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsPage", function() { return RewardsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");





var RewardsPage = /** @class */ (function () {
    function RewardsPage(afs, user, alertController) {
        var _this = this;
        this.afs = afs;
        this.user = user;
        this.alertController = alertController;
        this.userID = "";
        this.confirmation = "";
        this.selectedReward = "";
        this.currName = "";
        this.loggedInID = "";
        this.userTier = "";
        this.userRewards = "";
        this.bronzeArray = [];
        this.silverArray = [];
        this.goldArray = [];
        this.displayArray = [];
        this.collectedReward = "";
        this.mainuser = afs.doc("users/" + user.getUID());
        this.subEvent = this.mainuser.valueChanges().subscribe(function (event) {
            _this.steps = event.steps;
            _this.currName = event.fname;
            _this.userTier = event.tier;
            _this.next = event.toNextTier;
        });
    }
    RewardsPage.prototype.successAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Success!",
                            message: "Reward Successfully Added",
                            buttons: ['OK']
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
    RewardsPage.prototype.displayRewardAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Your Claimed Rewards",
                            message: this.displayArray + '\n',
                            buttons: ['OK']
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
    RewardsPage.prototype.wrongTierAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "OH NO!",
                            message: "This Reward Is Above Your Tier! Please Walk More!",
                            buttons: ['OK']
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
    RewardsPage.prototype.pointsAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "OH NO!",
                            message: "You Do Not Have Enough Points! Please Walk More!",
                            buttons: ['OK']
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
    RewardsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedInID = this.user.getUID();
        //generate relevant data
        this.user.readRewards().subscribe(function (data) {
            _this.rewardList = data.map(function (f) {
                return {
                    id: f.payload.doc.id,
                    grab: f.payload.doc.data()['grabName'],
                    spca: f.payload.doc.data()['spcaName'],
                    watsons: f.payload.doc.data()['watsonsName'],
                    points: f.payload.doc.data()['points'],
                };
            });
            console.log(_this.rewardList);
            _this.bronzeArray[0] = _this.rewardList[0].id;
            _this.bronzeArray[1] = _this.rewardList[0].grab;
            _this.bronzeArray[2] = _this.rewardList[0].spca;
            _this.bronzeArray[3] = _this.rewardList[0].watsons;
            _this.bronzeArray[4] = _this.rewardList[0].points;
            _this.silverArray[0] = _this.rewardList[1].id;
            _this.silverArray[1] = _this.rewardList[1].grab;
            _this.silverArray[2] = _this.rewardList[1].spca;
            _this.silverArray[3] = _this.rewardList[1].watsons;
            _this.silverArray[4] = _this.rewardList[1].points;
            _this.goldArray[0] = _this.rewardList[2].id;
            _this.goldArray[1] = _this.rewardList[2].grab;
            _this.goldArray[2] = _this.rewardList[2].spca;
            _this.goldArray[3] = _this.rewardList[2].watsons;
            _this.goldArray[4] = _this.rewardList[2].points;
        });
    };
    RewardsPage.prototype.loadRedeemedReward = function () {
        var _this = this;
        this.user.read_subcollection(this.loggedInID).subscribe(function (data) {
            _this.rewardSub = data.map(function (g) {
                return {
                    id: g.payload.doc.id,
                    claimed: g.payload.doc.data()['reward'],
                };
            });
            console.log(_this.rewardSub);
        });
    };
    RewardsPage.prototype.displayRedeemedReward = function () {
        this.i = 0;
        if (this.i < 1) {
            this.loadRedeemedReward();
            this.i = 1;
        }
        for (var i = 0; i < Object.keys(this.rewardSub).length; i++) {
            this.displayArray[i] = this.rewardSub[i].claimed;
        }
        this.displayRewardAlert();
    };
    RewardsPage.prototype.validateUserReward = function (rewardTierNo, rewardNo) {
        if (this.userTier == "Bronze") {
            this.userTierNo = 1;
        }
        else if (this.userTier == "Silver") {
            this.userTierNo = 2;
        }
        else {
            this.userTierNo = 3;
        }
        if (rewardNo == 1) {
            this.selectedReward = this.bronzeArray[1];
        }
        else if (rewardNo == 2) {
            this.selectedReward = this.silverArray[1];
        }
        else if (rewardNo == 3) {
            this.selectedReward = this.goldArray[1];
        }
        else if (rewardNo == 4) {
            this.selectedReward = this.bronzeArray[3];
        }
        else if (rewardNo == 5) {
            this.selectedReward = this.silverArray[3];
        }
        else if (rewardNo == 6) {
            this.selectedReward = this.goldArray[3];
        }
        if (rewardNo == 7) {
            this.selectedReward = this.bronzeArray[2];
        }
        else if (rewardNo == 8) {
            this.selectedReward = this.silverArray[2];
        }
        else if (rewardNo == 9) {
            this.selectedReward = this.goldArray[2];
        }
        //check selected reward tier & set points
        if (rewardTierNo == 1) {
            this.ptsToDeduct = this.bronzeArray[4];
        }
        else if (rewardTierNo == 2) {
            this.ptsToDeduct = this.silverArray[4];
        }
        else {
            this.ptsToDeduct = this.goldArray[4];
        }
        //check for sufficient steps, if sufficient, pass
        if (this.steps >= this.ptsToDeduct) {
            if (this.userTierNo < rewardTierNo) {
                this.wrongTierAlert();
            }
            else if (this.userTierNo > rewardTierNo) {
                this.redeemReward(this.ptsToDeduct);
                this.CreateRecord(this.loggedInID);
            }
            else {
                this.redeemReward(this.ptsToDeduct);
                this.CreateRecord(this.loggedInID);
            }
        }
        else {
            this.pointsAlert();
        }
    };
    RewardsPage.prototype.redeemReward = function (deductPoint) {
        var reward = {};
        this.steps = this.steps - deductPoint;
        reward['steps'] = this.steps;
        this.user.update_Reward(this.loggedInID, reward);
        this.confirmation = "yes";
        if (this.confirmation == "yes") {
            this.successAlert();
        }
    };
    RewardsPage.prototype.CreateRecord = function (uid) {
        var record = {};
        record['reward'] = this.selectedReward;
        this.user.add_reward(record, uid).then(function (resp) {
            console.log(resp);
        });
    };
    RewardsPage.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserReg"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    RewardsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rewards',
            template: __webpack_require__(/*! raw-loader!./rewards.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/rewards/rewards.page.html"),
            styles: [__webpack_require__(/*! ./rewards.page.scss */ "./src/app/pages/rewards/rewards.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserReg"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], RewardsPage);
    return RewardsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-rewards-rewards-module-es5.js.map