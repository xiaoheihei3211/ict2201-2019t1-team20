(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-navigate-navigate-module"],{

/***/ "./node_modules/@ionic-native/geolocation/ngx/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic-native/geolocation/ngx/index.js ***!
  \*************************************************************/
/*! exports provided: Geolocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return Geolocation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Geolocation = /** @class */ (function (_super) {
    __extends(Geolocation, _super);
    function Geolocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Geolocation.prototype.getCurrentPosition = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getCurrentPosition", { "callbackOrder": "reverse" }, arguments); };
    /**
     * Watch the current device's position.  Clear the watch by unsubscribing from
     * Observable changes.
     *
     * ```typescript
     * const subscription = this.geolocation.watchPosition()
     *                               .filter((p) => p.coords !== undefined) //Filter Out Errors
     *                               .subscribe(position => {
     *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
     * });
     *
     * // To stop notifications
     * subscription.unsubscribe();
     * ```
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Observable<Geoposition>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
     */
    Geolocation.prototype.watchPosition = function (options) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var watchId = navigator.geolocation.watchPosition(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.geolocation.clearWatch(watchId); };
        });
    };
    Geolocation.pluginName = "Geolocation";
    Geolocation.plugin = "cordova-plugin-geolocation";
    Geolocation.pluginRef = "navigator.geolocation";
    Geolocation.repo = "https://github.com/apache/cordova-plugin-geolocation";
    Geolocation.install = "ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION=\"To locate you\"";
    Geolocation.installVariables = ["GEOLOCATION_USAGE_DESCRIPTION"];
    Geolocation.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    Geolocation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Geolocation);
    return Geolocation;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dlb2xvY2F0aW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBaUtELCtCQUFpQjs7OztJQVVoRCx3Q0FBa0IsYUFBQyxPQUE0QjtJQUkvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FpQkc7SUFDSCxtQ0FBYSxHQUFiLFVBQWMsT0FBNEI7UUFDeEMsT0FBTyxJQUFJLFVBQVUsQ0FBYyxVQUFDLFFBQWE7WUFDL0MsSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQ2pELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDNUIsT0FBTyxDQUNSLENBQUM7WUFDRixPQUFPLGNBQU0sT0FBQSxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBekMsQ0FBeUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7O0lBekNVLFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVztzQkFuS3hCO0VBbUtpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIGNvbnN0IG5hdmlnYXRvcjogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvb3JkaW5hdGVzIHtcbiAgLyoqXG4gICAqIGEgZG91YmxlIHJlcHJlc2VudGluZyB0aGUgcG9zaXRpb24ncyBsYXRpdHVkZSBpbiBkZWNpbWFsIGRlZ3JlZXMuXG4gICAqL1xuICBsYXRpdHVkZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIHBvc2l0aW9uJ3MgbG9uZ2l0dWRlIGluIGRlY2ltYWwgZGVncmVlcy5cbiAgICovXG4gIGxvbmdpdHVkZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIGFjY3VyYWN5IG9mIHRoZSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIHByb3BlcnRpZXMsXG4gICAqIGV4cHJlc3NlZCBpbiBtZXRlcnMuXG4gICAqL1xuICBhY2N1cmFjeTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIHBvc2l0aW9uJ3MgYWx0aXR1ZGUgaW4gbWV0cmVzLCByZWxhdGl2ZSB0byBzZWFcbiAgICogbGV2ZWwuIFRoaXMgdmFsdWUgY2FuIGJlIG51bGwgaWYgdGhlIGltcGxlbWVudGF0aW9uIGNhbm5vdCBwcm92aWRlIHRoZSBkYXRhLlxuICAgKi9cbiAgYWx0aXR1ZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSBhY2N1cmFjeSBvZiB0aGUgYWx0aXR1ZGUgZXhwcmVzc2VkIGluIG1ldGVycy5cbiAgICogVGhpcyB2YWx1ZSBjYW4gYmUgbnVsbC5cbiAgICovXG4gIGFsdGl0dWRlQWNjdXJhY3k6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIGRldmljZSBpcyB0cmF2ZWxpbmcuIFRoaXNcbiAgICogdmFsdWUsIHNwZWNpZmllZCBpbiBkZWdyZWVzLCBpbmRpY2F0ZXMgaG93IGZhciBvZmYgZnJvbSBoZWFkaW5nIHRydWUgbm9ydGhcbiAgICogdGhlIGRldmljZSBpcy4gMCBkZWdyZWVzIHJlcHJlc2VudHMgdHJ1ZSBub3J0aCwgYW5kIHRoZSBkaXJlY3Rpb24gaXNcbiAgICogZGV0ZXJtaW5lZCBjbG9ja3dpc2UgKHdoaWNoIG1lYW5zIHRoYXQgZWFzdCBpcyA5MCBkZWdyZWVzIGFuZCB3ZXN0IGlzIDI3MFxuICAgKiBkZWdyZWVzKS4gSWYgc3BlZWQgaXMgMCwgaGVhZGluZyBpcyBOYU4uIElmIHRoZSBkZXZpY2UgaXMgdW5hYmxlIHRvIHByb3ZpZGVcbiAgICogaGVhZGluZyBpbmZvcm1hdGlvbiwgdGhpcyB2YWx1ZSBpcyBudWxsLlxuICAgKi9cbiAgaGVhZGluZzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIHZlbG9jaXR5IG9mIHRoZSBkZXZpY2UgaW4gbWV0ZXJzIHBlciBzZWNvbmQuXG4gICAqIFRoaXMgdmFsdWUgY2FuIGJlIG51bGwuXG4gICAqL1xuICBzcGVlZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlb3Bvc2l0aW9uIHtcbiAgLyoqXG4gICAqIEEgQ29vcmRpbmF0ZXMgb2JqZWN0IGRlZmluaW5nIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAqL1xuICBjb29yZHM6IENvb3JkaW5hdGVzO1xuXG4gIC8qKlxuICAgKiBBIHRpbWVzdGFtcCByZXByZXNlbnRpbmcgdGhlIHRpbWUgYXQgd2hpY2ggdGhlIGxvY2F0aW9uIHdhcyByZXRyaWV2ZWQuXG4gICAqL1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbkVycm9yIHtcbiAgLyoqXG4gICAqIEEgY29kZSB0aGF0IGluZGljYXRlcyB0aGUgZXJyb3IgdGhhdCBvY2N1cnJlZFxuICAgKi9cbiAgY29kZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIG1lc3NhZ2UgdGhhdCBjYW4gZGVzY3JpYmUgdGhlIGVycm9yIHRoYXQgb2NjdXJyZWRcbiAgICovXG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW9sb2NhdGlvbk9wdGlvbnMge1xuICAvKipcbiAgICogSXMgYSBwb3NpdGl2ZSBsb25nIHZhbHVlIGluZGljYXRpbmcgdGhlIG1heGltdW0gYWdlIGluIG1pbGxpc2Vjb25kcyBvZiBhXG4gICAqIHBvc3NpYmxlIGNhY2hlZCBwb3NpdGlvbiB0aGF0IGlzIGFjY2VwdGFibGUgdG8gcmV0dXJuLiBJZiBzZXQgdG8gMCwgaXRcbiAgICogbWVhbnMgdGhhdCB0aGUgZGV2aWNlIGNhbm5vdCB1c2UgYSBjYWNoZWQgcG9zaXRpb24gYW5kIG11c3QgYXR0ZW1wdCB0b1xuICAgKiByZXRyaWV2ZSB0aGUgcmVhbCBjdXJyZW50IHBvc2l0aW9uLiBJZiBzZXQgdG8gSW5maW5pdHkgdGhlIGRldmljZSBtdXN0XG4gICAqIHJldHVybiBhIGNhY2hlZCBwb3NpdGlvbiByZWdhcmRsZXNzIG9mIGl0cyBhZ2UuIERlZmF1bHQ6IDAuXG4gICAqL1xuICBtYXhpbXVtQWdlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJcyBhIHBvc2l0aXZlIGxvbmcgdmFsdWUgcmVwcmVzZW50aW5nIHRoZSBtYXhpbXVtIGxlbmd0aCBvZiB0aW1lXG4gICAqIChpbiBtaWxsaXNlY29uZHMpIHRoZSBkZXZpY2UgaXMgYWxsb3dlZCB0byB0YWtlIGluIG9yZGVyIHRvIHJldHVybiBhXG4gICAqIHBvc2l0aW9uLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBJbmZpbml0eSwgbWVhbmluZyB0aGF0IGdldEN1cnJlbnRQb3NpdGlvbigpXG4gICAqIHdvbid0IHJldHVybiB1bnRpbCB0aGUgcG9zaXRpb24gaXMgYXZhaWxhYmxlLlxuICAgKi9cbiAgdGltZW91dD86IG51bWJlcjtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSBhcHBsaWNhdGlvbiB3b3VsZCBsaWtlIHRvIHJlY2VpdmUgdGhlIGJlc3QgcG9zc2libGUgcmVzdWx0cy5cbiAgICogSWYgdHJ1ZSBhbmQgaWYgdGhlIGRldmljZSBpcyBhYmxlIHRvIHByb3ZpZGUgYSBtb3JlIGFjY3VyYXRlIHBvc2l0aW9uLCBpdFxuICAgKiB3aWxsIGRvIHNvLiBOb3RlIHRoYXQgdGhpcyBjYW4gcmVzdWx0IGluIHNsb3dlciByZXNwb25zZSB0aW1lcyBvciBpbmNyZWFzZWRcbiAgICogcG93ZXIgY29uc3VtcHRpb24gKHdpdGggYSBHUFMgY2hpcCBvbiBhIG1vYmlsZSBkZXZpY2UgZm9yIGV4YW1wbGUpLiBPbiB0aGVcbiAgICogb3RoZXIgaGFuZCwgaWYgZmFsc2UsIHRoZSBkZXZpY2UgY2FuIHRha2UgdGhlIGxpYmVydHkgdG8gc2F2ZSByZXNvdXJjZXMgYnlcbiAgICogcmVzcG9uZGluZyBtb3JlIHF1aWNrbHkgYW5kL29yIHVzaW5nIGxlc3MgcG93ZXIuIERlZmF1bHQ6IGZhbHNlLlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGVuYWJsZUhpZ2hBY2N1cmFjeT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgR2VvbG9jYXRpb25cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gcHJvdmlkZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGRldmljZSdzIGxvY2F0aW9uLCBzdWNoIGFzIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUuIENvbW1vbiBzb3VyY2VzIG9mIGxvY2F0aW9uIGluZm9ybWF0aW9uIGluY2x1ZGUgR2xvYmFsIFBvc2l0aW9uaW5nIFN5c3RlbSAoR1BTKSBhbmQgbG9jYXRpb24gaW5mZXJyZWQgZnJvbSBuZXR3b3JrIHNpZ25hbHMgc3VjaCBhcyBJUCBhZGRyZXNzLCBSRklELCBXaUZpIGFuZCBCbHVldG9vdGggTUFDIGFkZHJlc3NlcywgYW5kIEdTTS9DRE1BIGNlbGwgSURzLlxuICpcbiAqICBUaGlzIEFQSSBpcyBiYXNlZCBvbiB0aGUgVzNDIEdlb2xvY2F0aW9uIEFQSSBTcGVjaWZpY2F0aW9uLCBhbmQgb25seSBleGVjdXRlcyBvbiBkZXZpY2VzIHRoYXQgZG9uJ3QgYWxyZWFkeSBwcm92aWRlIGFuIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEZvciBpT1MgeW91IGhhdmUgdG8gYWRkIHRoaXMgY29uZmlndXJhdGlvbiB0byB5b3VyIGNvbmZpZ3VyYXRpb24ueG1sIGZpbGVcbiAqIGBgYHhtbFxuICogPGVkaXQtY29uZmlnIGZpbGU9XCIqLUluZm8ucGxpc3RcIiBtb2RlPVwibWVyZ2VcIiB0YXJnZXQ9XCJOU0xvY2F0aW9uV2hlbkluVXNlVXNhZ2VEZXNjcmlwdGlvblwiPlxuICogICAgPHN0cmluZz5XZSB1c2UgeW91ciBsb2NhdGlvbiBmb3IgZnVsbCBmdW5jdGlvbmFsaXR5IG9mIGNlcnRhaW4gYXBwIGZlYXR1cmVzLjwvc3RyaW5nPlxuICogPC9lZGl0LWNvbmZpZz5cbiAqIGBgYFxuICpcbiAqXG4gKiBAdXNhZ2VcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBHZW9sb2NhdGlvbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZ2VvbG9jYXRpb24vbmd4JztcbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGdlb2xvY2F0aW9uOiBHZW9sb2NhdGlvbikge31cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigpLnRoZW4oKHJlc3ApID0+IHtcbiAqICAvLyByZXNwLmNvb3Jkcy5sYXRpdHVkZVxuICogIC8vIHJlc3AuY29vcmRzLmxvbmdpdHVkZVxuICogfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKCdFcnJvciBnZXR0aW5nIGxvY2F0aW9uJywgZXJyb3IpO1xuICogfSk7XG4gKlxuICogbGV0IHdhdGNoID0gdGhpcy5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKCk7XG4gKiB3YXRjaC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAqICAvLyBkYXRhIGNhbiBiZSBhIHNldCBvZiBjb29yZGluYXRlcywgb3IgYW4gZXJyb3IgKGlmIGFuIGVycm9yIG9jY3VycmVkKS5cbiAqICAvLyBkYXRhLmNvb3Jkcy5sYXRpdHVkZVxuICogIC8vIGRhdGEuY29vcmRzLmxvbmdpdHVkZVxuICogfSk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBDb29yZGluYXRlc1xuICogR2VvcG9zaXRpb25cbiAqIFBvc2l0aW9uRXJyb3JcbiAqIEdlb2xvY2F0aW9uT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dlb2xvY2F0aW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ2VvbG9jYXRpb24nLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3IuZ2VvbG9jYXRpb24nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1nZW9sb2NhdGlvbicsXG4gIGluc3RhbGw6XG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1nZW9sb2NhdGlvbiAtLXZhcmlhYmxlIEdFT0xPQ0FUSU9OX1VTQUdFX0RFU0NSSVBUSU9OPVwiVG8gbG9jYXRlIHlvdVwiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydHRU9MT0NBVElPTl9VU0FHRV9ERVNDUklQVElPTiddLFxuICBwbGF0Zm9ybXM6IFsnQW1hem9uIEZpcmUgT1MnLCAnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2VvbG9jYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBHZXQgdGhlIGRldmljZSdzIGN1cnJlbnQgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7R2VvbG9jYXRpb25PcHRpb25zfSBvcHRpb25zICBUaGUgW2dlb2xvY2F0aW9uIG9wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Qb3NpdGlvbk9wdGlvbnMpLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxHZW9wb3NpdGlvbj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgW3Bvc2l0aW9uXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUG9zaXRpb24pIG9mIHRoZSBkZXZpY2UsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgZ2V0Q3VycmVudFBvc2l0aW9uKG9wdGlvbnM/OiBHZW9sb2NhdGlvbk9wdGlvbnMpOiBQcm9taXNlPEdlb3Bvc2l0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoIHRoZSBjdXJyZW50IGRldmljZSdzIHBvc2l0aW9uLiAgQ2xlYXIgdGhlIHdhdGNoIGJ5IHVuc3Vic2NyaWJpbmcgZnJvbVxuICAgKiBPYnNlcnZhYmxlIGNoYW5nZXMuXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKClcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigocCkgPT4gcC5jb29yZHMgIT09IHVuZGVmaW5lZCkgLy9GaWx0ZXIgT3V0IEVycm9yc1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHBvc2l0aW9uID0+IHtcbiAgICogICBjb25zb2xlLmxvZyhwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlICsgJyAnICsgcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlKTtcbiAgICogfSk7XG4gICAqXG4gICAqIC8vIFRvIHN0b3Agbm90aWZpY2F0aW9uc1xuICAgKiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7R2VvbG9jYXRpb25PcHRpb25zfSBvcHRpb25zICBUaGUgW2dlb2xvY2F0aW9uIG9wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Qb3NpdGlvbk9wdGlvbnMpLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxHZW9wb3NpdGlvbj59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHdpdGggdGhlIFtwb3NpdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Bvc2l0aW9uKSBvZiB0aGUgZGV2aWNlLCBvciBlcnJvcnMuXG4gICAqL1xuICB3YXRjaFBvc2l0aW9uKG9wdGlvbnM/OiBHZW9sb2NhdGlvbk9wdGlvbnMpOiBPYnNlcnZhYmxlPEdlb3Bvc2l0aW9uPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPEdlb3Bvc2l0aW9uPigob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgY29uc3Qgd2F0Y2hJZCA9IG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKFxuICAgICAgICBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuICgpID0+IG5hdmlnYXRvci5nZW9sb2NhdGlvbi5jbGVhcldhdGNoKHdhdGNoSWQpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/navigate/navigate.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/navigate/navigate.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='light'>\n    <ion-title>Navigate</ion-title><ion-button color=\"tertiary\" size=\"small\" slot =\"end\" class=\"SavedRoutebutton\">Saved Route</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"directionForm\" (ngSubmit)=\"generateRoute(directionForm.value)\">\n    <ion-item>\n      <ion-label position=\"stacked\">Source</ion-label>\n        <ion-searchbar formControlName =\"source\" [(ngModel)]=\"autocomplete.input\" (ionInput)=\"updateSearchResults()\" placeholder=\"Start\"></ion-searchbar>\n      </ion-item>\n      <ion-list [hidden]=\"autocompleteItems.length == 0\">\n        <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResult(item)\">\n          {{ item.description }}\n        </ion-item>\n      </ion-list>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Destination</ion-label>\n        <ion-searchbar formControlName =\"destination\" [(ngModel)]=\"autocomplete2.input\" (ionInput)=\"updateSearchResults2()\" placeholder=\"Finish\"></ion-searchbar>\n      </ion-item>\n      <ion-list [hidden]=\"autocompleteItems2.length == 0\">\n        <ion-item *ngFor=\"let item of autocompleteItems2\" tappable (click)=\"selectSearchResult2(item)\">\n          {{ item.description }}\n        </ion-item>\n      </ion-list>\n\n    <ion-button expand=\"full\" color=\"success\" shape=\"round\" type=\"submit\" [disabled]=\"directionForm.invalid\">Get Direction</ion-button>\n\n\n\n\n  </form>\n  <ion-card>\n\t\t<ion-card-content>\n\t\t\t<div #directionsPanel class=\"direction\"></div>\n\t\t</ion-card-content>\n\t</ion-card>\n  <div #mapElement class=\"map\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/navigate/navigate.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/navigate/navigate.module.ts ***!
  \***************************************************/
/*! exports provided: NavigatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatePageModule", function() { return NavigatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _navigate_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigate.page */ "./src/app/pages/navigate/navigate.page.ts");








var routes = [
    {
        path: '',
        component: _navigate_page__WEBPACK_IMPORTED_MODULE_7__["NavigatePage"]
    }
];
var NavigatePageModule = /** @class */ (function () {
    function NavigatePageModule() {
    }
    NavigatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_navigate_page__WEBPACK_IMPORTED_MODULE_7__["NavigatePage"]],
            providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]]
        })
    ], NavigatePageModule);
    return NavigatePageModule;
}());



/***/ }),

/***/ "./src/app/pages/navigate/navigate.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/navigate/navigate.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  height: 70%;\n  width: 100%;\n}\n\nion-card {\n  max-height: 200px;\n  overflow: scroll;\n  position: absolute;\n  z-index: 1;\n}\n\n.scroll {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGUvQzpcXFVzZXJzXFx3ZWl5YVxcT25lRHJpdmVcXERlc2t0b3BcXFNJVCBOT1RFU1xcWUVBUiAyIFRSSSAxXFxJQ1QyMjAxIC0gSW50cm9kdWN0aW9uIHRvIFNvZnR3YXJlIEVuZ2luZWVyaW5nXFxQcm9qZWN0XFxNYXBweVN0ZXBzX0xvZ2luUmVnL3NyY1xcYXBwXFxwYWdlc1xcbmF2aWdhdGVcXG5hdmlnYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbmF2aWdhdGUvbmF2aWdhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNDRjs7QURDQTtFQUNZLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNFWjs7QURDQTtFQUNZLFlBQUE7QUNFWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmlnYXRlL25hdmlnYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIHdpZHRoOiAxMDAlXHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbi5zY3JvbGwge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCVcclxuICAgICAgICB9XHJcbiIsIi5tYXAge1xuICBoZWlnaHQ6IDcwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLnNjcm9sbCB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/navigate/navigate.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/navigate/navigate.page.ts ***!
  \*************************************************/
/*! exports provided: NavigatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatePage", function() { return NavigatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");









var map;
var gcounter = 0;
var scounter = 0;
var gRoute = [];
var sRoute;
var resp;
var startMarker;
var endMarker;
var NavigatePage = /** @class */ (function () {
    function NavigatePage(fb, alertController, geolocation, router, zone, user, afs) {
        var _this = this;
        this.fb = fb;
        this.alertController = alertController;
        this.geolocation = geolocation;
        this.router = router;
        this.zone = zone;
        this.user = user;
        this.afs = afs;
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.currentLocation = {
            lat: 0,
            lng: 0
        };
        this.loading = false;
        this.addressInput = '';
        this.points = 0;
        this.currPoint = 0;
        this.totalPoints = 0;
        this.lifetimePoints = 0;
        this.toNextTierPoints = 0;
        this.createDirectionForm();
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: '' };
        this.autocomplete2 = { input: '' };
        this.autocompleteItems = [];
        this.autocompleteItems2 = [];
        this.mainuser = afs.doc("users/" + user.getUID());
        this.subEvent = this.mainuser.valueChanges().subscribe(function (event) {
            _this.currPoint = event.steps;
            _this.tier = event.tier;
            //console.log("default tier: " , this.tier)
            //console.log("Curr points: " + this.currPoint) //
        });
    }
    NavigatePage.prototype.createDirectionForm = function () {
        this.directionForm = this.fb.group({
            source: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            destination: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    NavigatePage.prototype.ngOnInit = function () {
        this.loggedInID = this.user.getUID();
    };
    NavigatePage.prototype.ngAfterViewInit = function () {
        map = new google.maps.Map(this.mapNativeElement.nativeElement, {
            zoom: 11,
            center: { lat: 1.290270, lng: 103.851959 }
        });
        this.directionsDisplay.setPanel(this.directionsPanel.nativeElement);
    };
    NavigatePage.prototype.updateSearchResults = function () {
        var _this = this;
        if (this.autocomplete.input == " ") {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({
            input: this.autocomplete.input,
            componentRestrictions: { country: 'sg' }
        }, function (predictions, status) {
            _this.autocompleteItems = [];
            _this.zone.run(function () {
                predictions.forEach(function (prediction) {
                    _this.autocompleteItems.push(prediction);
                });
            });
        });
    };
    NavigatePage.prototype.updateSearchResults2 = function () {
        var _this = this;
        if (this.autocomplete2.input == '') {
            this.autocompleteItems2 = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({
            input: this.autocomplete2.input,
            componentRestrictions: { country: 'sg' }
        }, function (predictions, status) {
            _this.autocompleteItems2 = [];
            _this.zone.run(function () {
                predictions.forEach(function (prediction) {
                    _this.autocompleteItems2.push(prediction);
                });
            });
        });
    };
    NavigatePage.prototype.selectSearchResult = function (item) {
        console.log(item);
        this.location = item;
        this.begin = this.location.description;
        console.log('source = ' + this.begin);
        this.autocomplete.input = this.begin;
        this.autocompleteItems = [];
    };
    NavigatePage.prototype.selectSearchResult2 = function (item) {
        console.log(item);
        this.location = item;
        this.fin = this.location.description;
        console.log('destination = ' + this.fin);
        this.autocomplete2.input = this.fin;
        this.autocompleteItems2 = [];
    };
    NavigatePage.prototype.invalidRoute = function (status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            //CHANGE THE ERROR MESSAGE
                            //message: 'Directions request failed due to ' + status,
                            message: 'Directions request failed due to ' + status.replace(/_/g, ' ').toLowerCase() + ".",
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
    NavigatePage.prototype.resetDisqualified = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var quit;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'So sorry...',
                            subHeader: 'You have diverted from the route for too long.',
                            message: 'Please select route again!',
                            buttons: [{
                                    text: 'Ok',
                                    role: 'cancel'
                                }]
                        })];
                    case 1:
                        quit = _a.sent();
                        return [4 /*yield*/, quit.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NavigatePage.prototype.routeCompleted = function (points) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var redirect;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Congratulations! You have Completed the Route!',
                            message: 'You have been awarded ' + points + ' points for completing this journey.',
                            buttons: [{
                                    text: 'Ok',
                                    role: 'cancel'
                                }]
                        })];
                    case 1:
                        redirect = _a.sent();
                        return [4 /*yield*/, redirect.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NavigatePage.prototype.generateRoute = function (formValues) {
        var that = this;
        if (scounter != 0) {
            sRoute.setMap(null);
            this.directionsDisplay.setMap(null);
            this.directionsDisplay.set('directions', null);
        }
        scounter = 0;
        this.directionsService.route({
            origin: formValues.source,
            destination: formValues.destination,
            travelMode: 'WALKING',
            provideRouteAlternatives: true
        }, function (response, status) {
            if (status === 'OK') {
                resp = response;
                if (gcounter != 0) {
                    for (var i = 0; i < gcounter; i++) {
                        gRoute[i].setMap(null);
                    }
                    gcounter = 0;
                    startMarker.setMap(null);
                    endMarker.setMap(null);
                }
                that.drawRoute(resp, 0, null);
            }
            else {
                that.invalidRoute(status);
            }
        });
        //this.router.navigate(['/home/feedback'])
    };
    NavigatePage.prototype.drawRoute = function (response, checker, routenum) {
        var self = this;
        var color = [
            "green",
            "red",
            "blue"
        ];
        if (checker == 0) {
            var bounds = new google.maps.LatLngBounds();
            for (var h = 0, len = response.routes.length; h < len; h++) {
                gRoute[h] = new google.maps.Polyline({
                    path: [],
                    strokeColor: color[h],
                    strokeWeight: 3,
                    zIndex: h
                });
                var legs = response.routes[h].legs;
                for (var i = 0; i < legs.length; i++) {
                    var steps = legs[i].steps;
                    for (var j = 0; j < steps.length; j++) {
                        var nextSegment = steps[j].path;
                        for (var k = 0; k < nextSegment.length; k++) {
                            gRoute[h].getPath().push(nextSegment[k]);
                            bounds.extend(nextSegment[k]);
                        }
                    }
                }
                map.fitBounds(bounds);
                gRoute[h].setMap(map);
                gRoute[h].addListener('click', function (e) {
                    self.drawRoute(resp, 1, this.zIndex);
                });
                gcounter++;
            }
            startMarker = new google.maps.Marker({
                position: gRoute[0].getPath().getAt(0),
                label: {
                    text: 'A',
                    color: 'white',
                },
                map: map
            });
            endMarker = new google.maps.Marker({
                position: gRoute[0].getPath().getAt(gRoute[0].getPath().getLength() - 1),
                label: {
                    text: 'B',
                    color: 'white',
                },
                map: map
            });
        }
        else {
            if (gcounter != 0) {
                for (var i = 0; i < gcounter; i++) {
                    gRoute[i].setMap(null);
                }
                gcounter = 0;
            }
            if (scounter != 0) {
                sRoute.setMap(null);
                scounter = 0;
            }
            startMarker.setMap(null);
            endMarker.setMap(null);
            this.getlatandlang(response.routes[routenum].overview_path);
            sRoute = new google.maps.DirectionsRenderer({
                polylineOptions: {
                    strokeColor: "black",
                    strokeOpacity: 0.5
                },
                map: map,
                directions: response,
                routeIndex: routenum,
            });
            for (var i = response.routes.length - 1; i >= 0; i--) {
                if (i == routenum && i != 0 && i == response.routes.length - 1) {
                    response.routes.splice(0, i);
                }
                else if (i == routenum && i != 0 && i != response.routes.length - 1) {
                    response.routes.pop();
                    response.routes.splice(0, i - 1);
                }
                else {
                    response.routes.splice(i, response.routes.length - 1);
                }
            }
            this.directionsDisplay.setMap(map);
            this.directionsDisplay.setDirections(response);
            this.totalDistance = google.maps.geometry.spherical.computeLength(gRoute[routenum].getPath());
            console.log("number 1: ", this.totalDistance); //<---- the route distance
            scounter++;
        }
    };
    NavigatePage.prototype.getlatandlang = function (selectedroute) {
        var _this = this;
        var latlist = [""];
        var longlist = [""];
        var latlonglist = [""];
        var count = 0;
        for (var i in selectedroute) {
            latlist[i] = [selectedroute[i].lat()];
            longlist[i] = [selectedroute[i].lng()];
            latlonglist[i] = latlist[i] + "," + longlist[i];
        }
        //RESTART TRACKING FUNCTION EVERY 2 SECONDS
        var sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["interval"])(2000);
        this.subscribe = sub.subscribe(function (val) {
            count = count + 1;
            _this.trackroute(latlist, longlist, latlonglist, count);
        });
    };
    //TRACKING FUNCTION
    NavigatePage.prototype.trackroute = function (latlist, longlist, latlonglist, count) {
        var that = this;
        var userlatlong = "";
        var distCheckpoint = 0;
        var checkpoint = 0;
        var distCheck = [];
        var distComplete = 0;
        var complete = 0;
        var starting = 0;
        var distance = 0;
        var userlocation = "";
        var smallest = 0;
        var marker = "";
        var markerg = [];
        //GET CURRENT LOCATION
        navigator.geolocation.getCurrentPosition(function (position) {
            userlatlong = (position.coords.latitude + ", " + position.coords.longitude);
            userlocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            console.log("start tracking");
            //ISSUE**: MARKER NEED TO REAPPLY EVERY SINGLE LOOP, NOW IT KEEP STACKING.
            marker = new google.maps.Marker({
                position: userlocation,
                map: map
            });
            //CALCULATE USER's DISTANCE FROM ROUTE
            for (var i_1 in latlonglist) {
                checkpoint = new google.maps.LatLng(latlist[i_1], longlist[i_1]);
                distCheckpoint = google.maps.geometry.spherical.computeDistanceBetween(userlocation, checkpoint);
                distCheck[i_1] = distCheckpoint;
            }
            //THE SHORTEST DISTANCE
            smallest = distCheck[0];
            for (var i = 0; i < distCheck.length; i++) {
                if (distCheck[i] < smallest) {
                    smallest = distCheck[i];
                }
            }
            console.log(smallest);
            //CHECK HOW FAR IS THE USER LOCATED FROM THE ROUTE
            if (smallest > 200) {
                count + 1;
                console.log("Diverted from track");
                console.log(count);
                if (count == 10) {
                    //ISSUE**: app will reload the map, clear everything
                    console.log("user is disqualified");
                    that.resetDisqualified();
                    that.subscribe.unsubscribe();
                    map = new google.maps.Map(that.mapNativeElement.nativeElement, {
                        zoom: 11,
                        center: { lat: 1.290270, lng: 103.851959 }
                    });
                    that.directionsDisplay.setMap(null);
                    that.directionsDisplay.set('directions', null);
                }
            }
            else {
                console.log("on track");
            }
            //TRACKING DISTANCE BETWEEN DESTINATION AND USER
            complete = new google.maps.LatLng(latlist[latlist.length - 1], longlist[longlist.length - 1]);
            starting = new google.maps.LatLng(latlist[0], longlist[0]);
            distance = google.maps.geometry.spherical.computeDistanceBetween(starting, complete);
            distComplete = google.maps.geometry.spherical.computeDistanceBetween(userlocation, complete);
            //vairable for total distance
            console.log("Distance from Destination = " + distance);
            //IF DISTANCE IS LOWER THAN 300M, USER COMPLETE ROUTE
            if (distComplete < 100) {
                //ISSUE**: app will add rewardpoints and route start&end tagged to uid, and will be redirected to history route page.
                console.log("Route Completed");
                console.log("start: " + that.begin);
                console.log("end: " + that.fin);
                that.subscribe.unsubscribe();
                //alert user route has completed + points awarded for that trip
                that.routeCompleted(that.pointsAwarded(that.totalDistance));
                //console.log("logged in test " , that.loggedInID)
                //award current points to user
                console.log("usable points: ", that.calculatePoints(that.pointsAwarded(that.totalDistance)));
                var awardPoints = {};
                awardPoints['steps'] = that.calculatePoints(that.pointsAwarded(that.totalDistance));
                that.user.add_points(awardPoints, that.loggedInID);
                //award lifetime points to user
                that.test1 = that.getLifetimePoints(that.pointsAwarded(that.totalDistance));
                console.log("Lifetime points: ", that.test1);
                var lifetimeP = {};
                lifetimeP['lifetimePoints'] = that.test1;
                that.user.add_totalPoints(lifetimeP, that.loggedInID);
                //update user tier to DB based on lifetimePoints
                //console.log("Tier: " + that.updateTier(that.getLifetimePoints(that.pointsAwarded(that.totalDistance))))
                var latestTier = {};
                latestTier['tier'] = that.updateTier(that.test1);
                that.user.update_tier(latestTier, that.loggedInID);
                //update user toNextTierPoints
                console.log("To next tier points: " + that.toNextTier(that.getLifetimePoints(that.pointsAwarded(that.totalDistance))));
                var toNextTierL = {};
                toNextTierL['toNextTier'] = that.toNextTier(that.getLifetimePoints(that.pointsAwarded(that.totalDistance)));
                that.user.update_tier(toNextTierL, that.loggedInID);
                //insert history route to DB with start and end location as its field
                var hroute = {};
                hroute['startloc'] = that.begin;
                hroute['endloc'] = that.fin;
                that.user.add_historyRoutes(hroute, that.loggedInID).then(function (e) {
                    console.log("History route added: ", e);
                });
                that.router.navigate(['/home/routehistory']);
            }
        });
    };
    //total points (curret points + newly awarded points)
    NavigatePage.prototype.calculatePoints = function (addedPoints) {
        this.totalPoints = addedPoints + this.currPoint;
        console.log("Usable points: " + this.totalPoints);
        return this.totalPoints;
    };
    //points awarded for that particular trip
    NavigatePage.prototype.pointsAwarded = function (distanceTravelled) {
        this.points = distanceTravelled * 0.025;
        this.points = Math.round((this.points * 100) / 100);
        console.log("Points awarded for this trip: " + this.points);
        return this.points;
    };
    //get lifetime points (to determine tier)
    NavigatePage.prototype.getLifetimePoints = function (addedPoints) {
        this.lifetimePoints = this.lifetimePoints + addedPoints;
        //console.log ("Lifetime points: " + this.lifetimePoints)
        return this.lifetimePoints;
    };
    //update Tier
    NavigatePage.prototype.updateTier = function (lifetimePoints) {
        if (lifetimePoints <= 1500) {
            this.tier = "Bronze";
        }
        else if (lifetimePoints <= 3000) {
            this.tier = "Silver";
        }
        else if (lifetimePoints > 3000) {
            this.tier = "Gold";
        }
        else { //if no tier
            this.tier = "Bronze";
        }
        return this.tier;
    };
    //update toNextTier
    NavigatePage.prototype.toNextTier = function (lifetimePoints) {
        if (lifetimePoints <= 1500) {
            this.toNextTierPoints = 1500 - lifetimePoints;
        }
        else if (lifetimePoints <= 3000) {
            this.toNextTierPoints = 3000 - lifetimePoints;
        }
        else if (lifetimePoints > 3000 && lifetimePoints < 4500) {
            this.toNextTierPoints = 4500 - lifetimePoints;
        }
        else if (lifetimePoints > 4500) {
            this.toNextTierPoints = 0;
        }
        else { //if no lifetimepoints
            this.toNextTierPoints = 1500;
        }
        return this.toNextTierPoints;
    };
    NavigatePage.prototype.ngOnDestroy = function () {
        this.subscribe.unsubscribe();
    };
    NavigatePage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserReg"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigatePage.prototype, "mapNativeElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('directionsPanel', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NavigatePage.prototype, "directionsPanel", void 0);
    NavigatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigate',
            template: __webpack_require__(/*! raw-loader!./navigate.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/navigate/navigate.page.html"),
            styles: [__webpack_require__(/*! ./navigate.page.scss */ "./src/app/pages/navigate/navigate.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _user_service__WEBPACK_IMPORTED_MODULE_7__["UserReg"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
    ], NavigatePage);
    return NavigatePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-navigate-navigate-module-es5.js.map