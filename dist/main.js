(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./baseClasses/nBase.component.ts":
/*!****************************************!*\
  !*** ./baseClasses/nBase.component.ts ***!
  \****************************************/
/*! exports provided: NBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NBaseComponent", function() { return NBaseComponent; });
/* harmony import */ var _nDataModel_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nDataModel.class */ "./baseClasses/nDataModel.class.ts");
/* harmony import */ var _src_app_n_services_n_localeResources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/app/n-services/n-localeResources.service */ "./src/app/n-services/n-localeResources.service.ts");
// Base component 


var NBaseComponent = /** @class */ (function () {
    function NBaseComponent() {
        var _this = this;
        this.locales = {};
        this.dm = new _nDataModel_class__WEBPACK_IMPORTED_MODULE_0__["NDataModel"]();
        this.localeService = new _src_app_n_services_n_localeResources_service__WEBPACK_IMPORTED_MODULE_1__["NLocaleResource"]();
        this.localeService.$localeSub.subscribe(function (locales) {
            _this.locales = locales;
        });
        this.localeService.getLang();
    }
    return NBaseComponent;
}());



/***/ }),

/***/ "./baseClasses/nDataModel.class.ts":
/*!*****************************************!*\
  !*** ./baseClasses/nDataModel.class.ts ***!
  \*****************************************/
/*! exports provided: NDataModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NDataModel", function() { return NDataModel; });
//IMPORT NEW DATAMODEL
var NDataModel = /** @class */ (function () {
    //DECLARE NEW VARIABLE
    function NDataModel() {
        //CREATE NEW DM INSTANCE
    }
    return NDataModel;
}());



/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/alldataComponent/alldata.template.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/alldataComponent/alldata.template.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center start\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <div>\n    <div style=\"color: #ffffff;\">Total Number of Records: {{users.length}}</div>\n  </div>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <mat-grid-list rowHeight=\"40px\" cols=\"1\" style=\"width: 100%;background-color:#ffffff;\">\n    <mat-grid-tile *ngFor=\"let user of users\" style=\"border-bottom:1px solid #000000ea;\">\n      <div fxLayout=\"column wrap\" style=\"width:100%;\" fxLayoutAlign=\"space-between start\" [fxShow]=\"true\" [fxHide]=\"false\">\n        <div style=\"display:flex; justify-content: space-around;width:100%;\">\n          <div>{{user.name}} / {{user.email}} / {{user.phone}} / {{user.region}} / {{user.department}}\n            <div></div>\n          </div>\n        </div>\n      </div>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/congratsComponent/congrats.template.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/congratsComponent/congrats.template.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column wrap\" style=\"padding:20px;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <bh-pageheader [pageHeader]=\"pageHeader\"></bh-pageheader>\n  <mat-progress-bar [mode]=\"&apos;determinate&apos;\" value=\"100\"></mat-progress-bar>\n  <div fxLayout=\"column wrap\" style=\"height:70vh;\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <mat-icon class=\"done-icon\">done</mat-icon>\n    <div style=\"text-align:center;\">\n      <h3 style=\"margin:0\">Thank You</h3>\n      <div>\n        {{locales.thankMsg}}\n      </div>\n    </div>\n  </div>\n</div>\n<div fxLayout=\"column wrap\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\"><button mat-button color=\"primary\" (click)=\"changeLanguage()\">Change Language</button></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboardComponent/dashboard.template.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboardComponent/dashboard.template.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column wrap\" style=\"margin-top:20px;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"/Web/ingredion-logo-3.png\" alt=\"image\" style=\"width:120px;margin:auto;\"></div>\n<div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <mat-card style=\"background-color:#4CAF50;color:#ffffff;border-radius: 10px;margin:10px;\">\n    <mat-card-subtitle style=\"color:#ffffff;font-weight:600;\">Hello {{name}}</mat-card-subtitle>\n\n    <mat-card-content>\n      <div>\n        <p>Do you wish to know how to protect yourself while you are working with us? Let&apos;s start a quick simlulation to collect information from you.</p>\n      </div>\n    </mat-card-content>\n\n    <mat-card-actions><button mat-button style=\"background-color:#359c35;\">Let&apos;s Start</button></mat-card-actions>\n  </mat-card>\n  <div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <mat-progress-spinner style=\"margin:auto;\" *ngIf=\"isLoading\" [mode]=\"&apos;indeterminate&apos;\" strokeWidth=\"2\" [diameter]=\"25\"></mat-progress-spinner>\n    <div *ngIf=\"!isLoading\">\n      <div style=\"text-align: center;padding-top: 10px;padding-bottom: 10px;border-top: 1px solid #d3d3d3;border-bottom: 1px solid #d3d3d3;\">Region: {{region}}</div>\n    </div>\n  </div>\n</div>\n<div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"row \" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <mat-card style=\"background-color:#FF9800;\" class=\"report-card\">\n        <img mat-card-image class=\"report-card-image\" alt=\"image\" imgSrc=\"/Web/fever.webp\">\n\n        <mat-card-content>\n          <div>\n            <div style=\"height:1px;width:100%;background-color:#d3d3d3;margin-top: 2px;\"></div>\n            <h6 style=\"height: 30px;\">HAD FEVER RECENTLY</h6>\n            <div>\n              <table>\n                <tbody>\n                  <tr>\n                    <td>Positive:</td>\n                    <td style=\"color: #ff0000; font-weight: 600; font-size: 20px;\">{{feverPositiveCount}}</td>\n                  </tr>\n                  <tr>\n                    <td>Negative:</td>\n                    <td style=\"color: #4CAF50; font-weight: 600; font-size: 20px;\">{{feverNegativeCount}}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </mat-card-content>\n      </mat-card>\n      <mat-card style=\"background-color:#FFEB3B;\" class=\"report-card\">\n        <img mat-card-image class=\"report-card-image\" alt=\"image\" imgSrc=\"/Web/virus.png\">\n\n        <mat-card-content>\n          <div>\n            <div style=\"height:1px;width:100%;background-color:#d3d3d3;margin-top: 2px;\"></div>\n            <h6 style=\"height: 30px;\">HAD CONTACT WITH COVID SUSPECT</h6>\n            <div>\n              <table>\n                <tbody>\n                  <tr>\n                    <td>Positive:</td>\n                    <td style=\"color: #ff0000; font-weight: 600; font-size: 20px;\">{{contactPositiveCount}}</td>\n                  </tr>\n                  <tr>\n                    <td>Negative:</td>\n                    <td style=\"color: #4CAF50; font-weight: 600; font-size: 20px;\">{{contactNegativeCount}}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n  <div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"row \" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <mat-card style=\"background-color:#8BC34A;\" class=\"report-card\">\n        <img mat-card-image class=\"report-card-image\" alt=\"image\" imgSrc=\"/Web/healthcondition.webp\">\n\n        <mat-card-content>\n          <div>\n            <div style=\"height:1px;width:100%;background-color:#d3d3d3;margin-top: 2px;\"></div>\n            <h6 style=\"height: 30px;\">WITH UNDERLYING HEALTH CONDITION</h6>\n            <div>\n              <table>\n                <tbody>\n                  <tr>\n                    <td>Positive:</td>\n                    <td style=\"color: #ff0000; font-weight: 600; font-size: 20px;\">{{healthPositiveCount}}</td>\n                  </tr>\n                  <tr>\n                    <td>Negative:</td>\n                    <td style=\"color: #4CAF50; font-weight: 600; font-size: 20px;\">{{healthNegativeCount}}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </mat-card-content>\n      </mat-card>\n      <mat-card style=\"background-color:#607D8B;\" class=\"report-card\">\n        <img mat-card-image class=\"report-card-image\" alt=\"image\" imgSrc=\"/Web/abroad.png\">\n\n        <mat-card-content>\n          <div>\n            <div style=\"height:1px;width:100%;background-color:#d3d3d3;margin-top: 2px;\"></div>\n            <h6 style=\"height: 30px;\">TRAVELED OUTSIDE COUNTRY</h6>\n            <div>\n              <table>\n                <tbody>\n                  <tr>\n                    <td>Positive:</td>\n                    <td style=\"color: #ff0000; font-weight: 600; font-size: 20px;\">{{abroadPositiveCount}}</td>\n                  </tr>\n                  <tr>\n                    <td>Negative:</td>\n                    <td style=\"color: #4CAF50; font-weight: 600; font-size: 20px;\">{{abroadNegativeCount}}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/detailsComponent/details.template.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/detailsComponent/details.template.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" style=\"margin-top: 20px;\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"/Web/ingredion.png\"></div>\n<div fxLayout=\"row wrap\" style=\"background-color: #ffffffe6;\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <div>\n    <div class=\"dtls-container\">\n      <!-- <h1 align=\"center\">DETAILS</h1> -->\n      <div class=\"row\">\n        <div class=\"col-25\">\n          <label for=\"name\">Name:</label>\n        </div>\n        <div class=\"col-75\">\n          <input type=\"text\" [(ngModel)]=\"name\" placeholder=\"Your name..\" readonly style=\"background-color: #bfbfbf;\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-25\">\n          <label for=\"phone\">Phone No:</label>\n        </div>\n        <div class=\"col-75\">\n          <input type=\"text\" [(ngModel)]=\"phone\" placeholder=\"Phone No\" readonly style=\"background-color: #bfbfbf;\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-25\">\n          <label for=\"email\">Email:</label>\n        </div>\n        <div class=\"col-75\">\n          <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"Email\" readonly style=\"background-color: #bfbfbf;\">\n        </div>\n      </div>\n      <!-- <div class=\"row\">\n      <div class=\"col-25\">\n        <label for=\"age\">Age:</label>\n      </div>\n      <div class=\"col-75\">\n        <input type=\"text\" [(ngModel)]=\"age\" placeholder=\"Age\">\n      </div>\n    </div> -->\n      <div class=\"row\">\n        <div class=\"col-25\">\n          <label for=\"department\">Department:</label>\n        </div>\n        <div class=\"col-75\">\n          <input type=\"text\" [(ngModel)]=\"department\" placeholder=\"Department\" readonly style=\"background-color: #bfbfbf;\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-25\">\n          <label for=\"region\">Region:</label>\n        </div>\n        <div class=\"col-75\">\n          <input type=\"text\" [(ngModel)]=\"region\" placeholder=\"Region\" readonly style=\"background-color: #bfbfbf;\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-25\">\n          <label for=\"fever\">Do You Have Fever?</label>\n        </div>\n        <div class=\"col-75\">\n          <input type=\"text\" [(ngModel)]=\"fever\" placeholder=\"Yes/No\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-25\">\n          <label for=\"contact\">Have you come in contact with COVID-19 patient?:</label>\n        </div>\n        <div class=\"col-75\">\n          <input type=\"text\" [(ngModel)]=\"contact\" placeholder=\"Yes/No\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-25\">\n          <label for=\"foreign-trip\">Have you returned from abroad recently?</label>\n        </div>\n        <div class=\"col-75\">\n          <input type=\"text\" [(ngModel)]=\"foreignTour\" placeholder=\"Yes/No\">\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-25\">\n          <label for=\"disease\">Have You ever had any of the following:</label>\n        </div>\n        <div class=\"col-75\">\n          <input type=\"checkbox\" value=\"Diabetes\" [(ngModel)]=\"isDiabetes\">\n          <label> Diabetes</label><br>\n          <input type=\"checkbox\" value=\"Hypertension\" [(ngModel)]=\"isHyperTension\">\n          <label> Hypertension</label><br>\n          <input type=\"checkbox\" value=\"Lung disease\" [(ngModel)]=\"isLungDisease\">\n          <label> Lung disease</label><br>\n          <input type=\"checkbox\" value=\"Heart disease\" [(ngModel)]=\"isHeartDisease\">\n          <label> Heart disease</label><br>\n          <input type=\"checkbox\" value=\"None of the Above\" [(ngModel)]=\"isNone\">\n          <label> None of the Above</label><br>\n        </div>\n      </div>\n\n\n\n      <div class=\"row\" style=\"margin-top: 20px;\" *ngIf=\"!isSaving\">\n        <input type=\"submit\" value=\"Submit\" (click)=\"saveData()\">\n      </div>\n    </div>\n  </div>\n</div>\n<div fxLayout=\"row wrap\" style=\"margin-top:20px;\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <mat-progress-spinner *ngIf=\"isSaving\" [mode]=\"&apos;indeterminate&apos;\" color=\"primary\" strokeWidth=\"2\" [diameter]=\"30\"></mat-progress-spinner>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/healthinfonextComponent/healthinfonext.template.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/healthinfonextComponent/healthinfonext.template.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column wrap\" style=\"padding: 20px;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <bh-pageheader [pageHeader]=\"pageHeader\"></bh-pageheader>\n  <div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <mat-progress-bar [mode]=\"&apos;determinate&apos;\" value=\"75\"></mat-progress-bar>\n    <div fxLayout=\"column wrap\" style=\"margin-top:20px; \" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <bh-questions style=\"margin-bottom: 20px;margin-top: 20px;\" [question]=\"question3\" [questionIndex]=\"2\"></bh-questions>\n      <bh-questions style=\"margin-top: 20px;margin-bottom:20px;\" [question]=\"question4\" [questionIndex]=\"3\"></bh-questions>\n      <div fxLayout=\"row wrap\" style=\"margin-top: 30px;padding: 10px;\" fxLayoutAlign=\"space-between stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n        <mat-icon class=\"arrow-icon-left\" (click)=\"onClickBack()\" *ngIf=\"!isLoading\">keyboard_arrow_left</mat-icon>\n        <mat-progress-spinner style=\"margin:auto;\" *ngIf=\"isLoading\" [mode]=\"&apos;indeterminate&apos;\" color=\"primary\" strokeWidth=\"2\" [diameter]=\"25\"></mat-progress-spinner>\n        <mat-icon class=\"arrow-icon-right\" (click)=\"onClickNext()\" *ngIf=\"!isLoading\">keyboard_arrow_right</mat-icon>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/healthinformationComponent/healthinformation.template.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/healthinformationComponent/healthinformation.template.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column wrap\" style=\"padding: 20px;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <bh-pageheader [pageHeader]=\"pageHeader\"></bh-pageheader>\n  </div>\n  <div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <mat-progress-bar [mode]=\"&apos;determinate&apos;\" value=\"55\" bufferValue=\"10\"></mat-progress-bar>\n    <div fxLayout=\"column wrap\" style=\"margin-top:20px; \" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <bh-questions style=\"margin-bottom: 20px;margin-top: 20px;\" [question]=\"question1\" [radioValue]=\"ans1\" [questionIndex]=\"0\"></bh-questions>\n      <bh-questions style=\"margin-top: 20px;margin-bottom:20px;\" [question]=\"question2\" [radioValue]=\"ans2\" [questionIndex]=\"1\"></bh-questions>\n      <div fxLayout=\"row wrap\" style=\"margin-top: 30px;padding: 10px;\" fxLayoutAlign=\"space-between stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n        <mat-icon class=\"arrow-icon-left\" (click)=\"onClickBack()\">keyboard_arrow_left</mat-icon>\n        <mat-icon class=\"arrow-icon-right\" (click)=\"onClickNext()\">keyboard_arrow_right</mat-icon>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/homeComponent/home.template.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/homeComponent/home.template.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" style=\"margin-top:50px;\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"/Web/ingredion-logo-3.png\" alt=\"image\" style=\"width:120px;\"></div>\n<div fxLayout=\"column wrap\" style=\"padding:20px;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <div>\n  </div>\n  <div fxLayout=\"column wrap\" fxLayoutAlign=\"center none\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <mat-form-field [appearance]=\"&apos;legacy&apos;\" [floatLabel]=\"&apos;always&apos;\" [hideRequiredMarker]=\"false\">\n      <input matInput [(ngModel)]=\"email\" name=\"email\" required>\n      <mat-label>Email</mat-label>\n    </mat-form-field>\n    <mat-form-field [appearance]=\"&apos;legacy&apos;\" [floatLabel]=\"&apos;always&apos;\" [hideRequiredMarker]=\"false\">\n      <input matInput [(ngModel)]=\"password\" type=\"password\" required>\n      <mat-label>Password</mat-label>\n    </mat-form-field><button mat-button class=\"login-btn\" *ngIf=\"!isLoading\" (click)=\"onLogin()\">Login</button>\n    <div fxLayout=\"column wrap\" style=\"width: 100%;margin-top:30px;\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <mat-progress-spinner *ngIf=\"isLoading\" [mode]=\"&apos;indeterminate&apos;\" color=\"primary\" strokeWidth=\"2\" [diameter]=\"25\"></mat-progress-spinner>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landingComponent/landing.template.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landingComponent/landing.template.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column wrap\" class=\"landing-page\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"/Web/ingredion-logo-3.png\" style=\"width: 120px;margin:auto;\">\n    <header>\n      <h3 class=\"landing-header\">\n        It Might Be Stormy Now, But Rain Doesn&apos;t Last Forever</h3>\n    </header>\n    <div fxLayout=\"column wrap\" class=\"para\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <p>\n        Let&apos;s answer few questions and inform our friends and families with our latest ground level COVID-19 updates from Ingredion family and we believe &quot;We are in this together and we will get through this together&quot;.</p>\n    </div>\n  </div>\n</div>\n<div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><label (click)=\"onClickStart()\" class=\"lets-start\">\n    Let&apos;s Start<mat-icon>keyboard_arrow_right</mat-icon></label></div>\n<div fxLayout=\"column wrap\" class=\"bcd-div\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <div>\n    Developved With <span style=\"color: #ff5454;\">&#x2665;</span> By: <span style=\"color:#2196f3;\">BLU</span><span>&#xA0;COC</span><span style=\"color: #fdd835; \">OO</span>N DIGITAL PVT. LTD.</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landingpbe2Component/landingpbe2.template.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landingpbe2Component/landingpbe2.template.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column wrap\" class=\"landing-page\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"/Web/pbf-energy-logo.png\" alt=\"image\" style=\"width:120px;margin:auto;\">\n    <header>\n      <h3 class=\"landing-header\">\n        It Might Be Stormy Now, But Rain Doesn&apos;t Last Forever</h3>\n    </header>\n    <div fxLayout=\"column wrap\" class=\"para\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <div>\n        Let&apos;s answer few questions and inform our friends and families with our latest ground level COVID-19 updates from PBF family and we believe &quot;We are in this together and we will get through this together&quot;.</div>\n    </div>\n  </div>\n</div>\n<div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><label (click)=\"onClickStart()\" class=\"lets-start\">\n    Let&apos;s Start<mat-icon>keyboard_arrow_right</mat-icon></label></div>\n<div fxLayout=\"column wrap\" style=\"padding:0; height: 40px;padding-top: 5px;\" class=\"bcd-div\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <div>\n    <!-- Developved With <span style=\"color: #ff5454;\">&#9829;</span> By: <span style=\"color:#2196f3;\">BLU</span><span>&nbsp;COC</span><span style=\"color: #fdd835; \">OO</span>N DIGITAL PVT. LTD. -->\n\n    <div style=\"display: flex; justify-content: center; align-items: center;\">\n      <label style=\"padding:0; margin:0;\">Developed By: </label>\n      <img src=\"assets/Web/intersol-logo.png\" alt=\"image\" style=\"width: 30px; height: 30px;\">\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landingpbeComponent/landingpbe.template.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landingpbeComponent/landingpbe.template.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <div fxLayout=\"column wrap\" style=\"height:100vh;background-color:#eceff1;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"/Web/pbf-energy-logo.png\" alt=\"image\" style=\"width:120px;margin:auto;\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pageheaderComponent/pageheader.template.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pageheaderComponent/pageheader.template.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <h2>\n    {{pageHeader}}</h2>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/personalinfoComponent/personalinfo.template.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/personalinfoComponent/personalinfo.template.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column wrap\" style=\"padding: 20px;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <bh-pageheader [pageHeader]=\"pageHeader\"></bh-pageheader>\n  <div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <mat-progress-bar [mode]=\"&apos;determinate&apos;\" value=\"25\"></mat-progress-bar>\n    <mat-form-field [appearance]=\"&apos;legacy&apos;\" [floatLabel]=\"&apos;auto&apos;\" [hideRequiredMarker]=\"false\">\n      <input matInput [(ngModel)]=\"name\" placeholder=\"Name\" readonly=\"true\" [disabled]=\"false\">\n      <mat-label>Name</mat-label>\n    </mat-form-field>\n    <mat-form-field [appearance]=\"&apos;legacy&apos;\" [floatLabel]=\"&apos;auto&apos;\" [hideRequiredMarker]=\"false\">\n      <input matInput [(ngModel)]=\"email\" placeholder=\"Email\" value=\"asyuya@gmail.com\" readonly=\"true\" [disabled]=\"false\">\n      <mat-label>Email</mat-label>\n    </mat-form-field>\n    <mat-form-field [appearance]=\"&apos;legacy&apos;\" [floatLabel]=\"&apos;auto&apos;\" [hideRequiredMarker]=\"false\">\n      <input matInput [(ngModel)]=\"phone\" placeholder=\"Phone No\" value=\"983719182722\" readonly=\"true\">\n      <mat-label>Phone No</mat-label>\n    </mat-form-field>\n    <mat-form-field [appearance]=\"&apos;legacy&apos;\" [floatLabel]=\"&apos;auto&apos;\" [hideRequiredMarker]=\"false\">\n      <input matInput [(ngModel)]=\"department\" placeholder=\"Department\" value=\"Accounts\" readonly=\"true\">\n      <mat-label>Department</mat-label>\n    </mat-form-field>\n    <mat-form-field [appearance]=\"&apos;legacy&apos;\" [floatLabel]=\"&apos;auto&apos;\" [hideRequiredMarker]=\"false\">\n      <input matInput [(ngModel)]=\"region\" placeholder=\"Region\" value=\"EMEA\" readonly=\"true\">\n      <mat-label>Region</mat-label>\n    </mat-form-field>\n    <div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"end stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n        <mat-icon class=\"arrow-icon-right\" (click)=\"onClickNext()\">keyboard_arrow_right</mat-icon>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/questionsComponent/questions.template.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/questionsComponent/questions.template.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div>\n      {{question}}</div>\n  </div>\n  <div fxLayout=\"column wrap\" style=\"margin-top: 15px;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-around stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <mat-radio-group [(ngModel)]=\"answer\" (change)=\"onChangeRadio($event, questionIndex)\" [labelPosition]=\"&apos;after&apos;\">\n        <mat-radio-button value=\"No\" style=\"margin-right: 10px;\" required [labelPosition]=\"&apos;after&apos;\" color=\"primary\">No</mat-radio-button>\n        <mat-radio-button value=\"Yes\" required [labelPosition]=\"&apos;after&apos;\" color=\"primary\">Yes</mat-radio-button>\n      </mat-radio-group>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/splashComponent/splash.template.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/splashComponent/splash.template.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/successpageComponent/successpage.template.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/successpageComponent/successpage.template.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <header>\n    <h1>\n      Success!!</h1>\n  </header>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\"><button mat-raised-button routerLink=\"/all-data\" color=\"primary\">Show All Data</button></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/n-components/nMapComponent/n-map.template.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/n-components/nMapComponent/n-map.template.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map\">\n  <agm-map #gm [latitude]=\"lat\" [longitude]=\"lng\" [usePanning]=\"usePanning\" [zoom]=\"mapZoom\" (mapClick)=\"mapClicked($event)\">\n    <agm-marker *ngIf=\"!hideMarker\" [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"markerTraggerble\" [iconUrl]=\"iconConfiguration\" (dragEnd)=\"marker($event)\" (markerClick)=\"markerEventEmitter($event);gm.lastOpen?.close(); gm.lastOpen = infoWindow\">\n      <agm-info-window #infoWindow *ngIf=\"formattedAddress\">\n        <strong>{{formattedAddress}}</strong>\n      </agm-info-window>\n    </agm-marker>\n  </agm-map>\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_declarations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/declarations */ "./src/app/config/declarations.ts");
/* harmony import */ var _config_import_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/import-modules */ "./src/app/config/import-modules.ts");




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: _config_declarations__WEBPACK_IMPORTED_MODULE_2__["appDeclarations"].slice(),
            imports: _config_import_modules__WEBPACK_IMPORTED_MODULE_3__["appImportModules"].slice(),
            providers: _config_declarations__WEBPACK_IMPORTED_MODULE_2__["appProviders"].slice(),
            entryComponents: _config_declarations__WEBPACK_IMPORTED_MODULE_2__["appEntryComponents"].slice(),
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: _config_declarations__WEBPACK_IMPORTED_MODULE_2__["appBootstrap"].slice()
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/alldataComponent/alldata.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/alldataComponent/alldata.component.ts ***!
  \******************************************************************/
/*! exports provided: alldataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alldataComponent", function() { return alldataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");
/* harmony import */ var app_sd_services_dataservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/sd-services/dataservice */ "./src/app/sd-services/dataservice.ts");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/



/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/
/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/
var alldataComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](alldataComponent, _super);
    function alldataComponent(dataService) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.users = [];
        _this.PeriodicElement = [
            {
                position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'
            },
            {
                position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'
            },
            {
                position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'
            },
            {
                position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'
            },
            {
                position: 5, name: 'Boron', weight: 10.811, symbol: 'B'
            },
            {
                position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'
            },
            {
                position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'
            },
            {
                position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'
            },
            {
                position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'
            },
            {
                position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'
            },
        ];
        return _this;
    }
    alldataComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var bh, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataService.getData()];
                    case 1:
                        bh = _a.sent();
                        this.users = bh.local.result.User;
                        console.log(this.users);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    alldataComponent.ctorParameters = function () { return [
        { type: app_sd_services_dataservice__WEBPACK_IMPORTED_MODULE_3__["dataservice"] }
    ]; };
    alldataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-alldata',
            template: __webpack_require__(/*! raw-loader!./alldata.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/alldataComponent/alldata.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_sd_services_dataservice__WEBPACK_IMPORTED_MODULE_3__["dataservice"]])
    ], alldataComponent);
    return alldataComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/congratsComponent/congrats.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/congratsComponent/congrats.component.ts ***!
  \********************************************************************/
/*! exports provided: congratsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "congratsComponent", function() { return congratsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/


/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/
/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/
var congratsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](congratsComponent, _super);
    function congratsComponent() {
        var _this = _super.call(this) || this;
        _this.pageHeader = 'Congratulations!';
        return _this;
    }
    congratsComponent.prototype.ngOnInit = function () {
        var lang = this.localeService.language;
        console.log({ lang: lang });
    };
    congratsComponent.prototype.changeLanguage = function () {
        var lang = this.localeService.language;
        console.log({ lang: lang });
        console.log(this.localeService);
        if (this.localeService.defaultLcid === 'en') {
            this.localeService.language = 'bn';
            return;
        }
        if (this.localeService.defaultLcid === 'bn') {
            this.localeService.language = 'zh-CN';
            return;
        }
        if (this.localeService.defaultLcid === 'zh-CN') {
            this.localeService.language = 'en';
            return;
        }
    };
    congratsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-congrats',
            template: __webpack_require__(/*! raw-loader!./congrats.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/congratsComponent/congrats.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], congratsComponent);
    return congratsComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/dashboardComponent/dashboard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/dashboardComponent/dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: dashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardComponent", function() { return dashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");
/* harmony import */ var app_sd_services_dataservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/sd-services/dataservice */ "./src/app/sd-services/dataservice.ts");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/



/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/
/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/
var dashboardComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](dashboardComponent, _super);
    function dashboardComponent(dataService) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        _this.name = 'John Doe';
        _this.region = 'Westchester';
        _this.isLoading = true;
        _this.feverPositiveCount = 0;
        _this.feverNegativeCount = 0;
        _this.contactPositiveCount = 0;
        _this.contactNegativeCount = 0;
        _this.healthPositiveCount = 0;
        _this.healthNegativeCount = 0;
        _this.abroadPositiveCount = 0;
        _this.abroadNegativeCount = 0;
        return _this;
    }
    dashboardComponent.prototype.ngOnInit = function () {
        this.name = window.localStorage.getItem('name');
        this.region = window.localStorage.getItem('region');
        this.getAllData();
    };
    dashboardComponent.prototype.getAllData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var bh, res, err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.isLoading = true;
                        return [4 /*yield*/, this.dataService.getData()];
                    case 1:
                        bh = _a.sent();
                        if (bh.local.result && bh.local.result.user) {
                            res = bh.local.result.user;
                            res.forEach(function (d) {
                                if (d.fever === "Yes" || d.fever === "yes" || d.fever === "y" || d.fever === "Y" || d.fever === "true") {
                                    _this.feverPositiveCount = _this.feverPositiveCount + 1;
                                }
                                else {
                                    _this.feverNegativeCount = _this.feverNegativeCount + 1;
                                }
                                if (d.contact === "Yes" || d.contact === "yes" || d.contact === "y" || d.contact === "Y" || d.contact === "true") {
                                    _this.contactPositiveCount = _this.contactPositiveCount + 1;
                                }
                                else {
                                    _this.contactNegativeCount = _this.contactNegativeCount + 1;
                                }
                                if (d.health_condition === "Yes" || d.health_condition === "yes" || d.health_condition === "y" || d.health_condition === "Y" || d.health_condition === "true") {
                                    _this.healthPositiveCount = _this.healthPositiveCount + 1;
                                }
                                else {
                                    _this.healthNegativeCount = _this.healthNegativeCount + 1;
                                }
                                if (d.foreign_tour === "Yes" || d.foreign_tour === "yes" || d.foreign_tour === "y" || d.foreign_tour === "Y" || d.foreign_tour === "true") {
                                    _this.abroadPositiveCount = _this.abroadPositiveCount + 1;
                                }
                                else {
                                    _this.abroadNegativeCount = _this.abroadNegativeCount + 1;
                                }
                            });
                            this.isLoading = false;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        this.isLoading = false;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    dashboardComponent.ctorParameters = function () { return [
        { type: app_sd_services_dataservice__WEBPACK_IMPORTED_MODULE_3__["dataservice"] }
    ]; };
    dashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboardComponent/dashboard.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_sd_services_dataservice__WEBPACK_IMPORTED_MODULE_3__["dataservice"]])
    ], dashboardComponent);
    return dashboardComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/detailsComponent/details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/detailsComponent/details.component.ts ***!
  \******************************************************************/
/*! exports provided: detailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detailsComponent", function() { return detailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_sd_services_dataservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/sd-services/dataservice */ "./src/app/sd-services/dataservice.ts");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/




/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/
/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/
var detailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](detailsComponent, _super);
    function detailsComponent(router, dataService, activatedRoute) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.dataService = dataService;
        _this.activatedRoute = activatedRoute;
        _this.name = '';
        _this.phone = '9876543210';
        _this.email = 'john.doe@ingredion.com';
        _this.age = "10";
        _this.department = 'Accounts';
        _this.region = 'EMEA';
        _this.fever = "";
        _this.contact = "";
        _this.foreignTour = "";
        _this.isDiabetes = false;
        _this.isHyperTension = false;
        _this.isLungDisease = false;
        _this.isHeartDisease = false;
        _this.isNone = false;
        _this.isSaving = false;
        return _this;
    }
    detailsComponent.prototype.ngOnInit = function () {
        var username = this.activatedRoute.snapshot.paramMap.get("username");
        if (username) {
            this.name = username;
        }
    };
    detailsComponent.prototype.saveData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var healtCondition, data, bh, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        healtCondition = [];
                        if (this.isDiabetes) {
                            healtCondition.push("Diabetes");
                        }
                        if (this.isHyperTension) {
                            healtCondition.push("Hypertension");
                        }
                        if (this.isLungDisease) {
                            healtCondition.push("Lung Disease");
                        }
                        if (this.isHeartDisease) {
                            healtCondition.push("Heart Disease");
                        }
                        if (this.isNone) {
                            healtCondition = ["None"];
                        }
                        data = {
                            name: this.name,
                            phone: this.phone,
                            email: this.email,
                            age: this.age,
                            department: this.department,
                            region: this.region,
                            fever: this.fever,
                            contact: this.contact,
                            foreign_tour: this.foreignTour,
                            health_condition: healtCondition
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this.isSaving = true;
                        return [4 /*yield*/, this.dataService.saveData(data)];
                    case 2:
                        bh = _a.sent();
                        console.log(bh.local.result);
                        this.isSaving = false;
                        // this.name = JSON.stringify(bh.local.result)
                        // this.phone = JSON.stringify(bh.local.result)
                        this.router.navigate(['/success-page']);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    detailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_sd_services_dataservice__WEBPACK_IMPORTED_MODULE_4__["dataservice"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    detailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-details',
            template: __webpack_require__(/*! raw-loader!./details.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/detailsComponent/details.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_sd_services_dataservice__WEBPACK_IMPORTED_MODULE_4__["dataservice"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], detailsComponent);
    return detailsComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/healthinfonextComponent/healthinfonext.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/healthinfonextComponent/healthinfonext.component.ts ***!
  \********************************************************************************/
/*! exports provided: healthinfonextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "healthinfonextComponent", function() { return healthinfonextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_sd_services_dataservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/sd-services/dataservice */ "./src/app/sd-services/dataservice.ts");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/




/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/
/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/
var healthinfonextComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](healthinfonextComponent, _super);
    function healthinfonextComponent(router, dataService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.dataService = dataService;
        _this.pageHeader = 'Health Information';
        _this.question3 = 'Did you travel outside country in past 2 months?';
        _this.question4 = 'Do you have any underlying health condition?';
        _this.isLoading = false;
        return _this;
    }
    healthinfonextComponent.prototype.onClickNext = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var name_1, email, phone, department, region, age, fever, contact, foreign_tour, health_condition, data, bh, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Next clicked');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this.isLoading = true;
                        name_1 = window.localStorage.getItem('name');
                        email = window.localStorage.getItem('email');
                        phone = window.localStorage.getItem('phone');
                        department = window.localStorage.getItem('department');
                        region = window.localStorage.getItem('region');
                        age = "10";
                        fever = window.localStorage.getItem('HAS_FEVER');
                        contact = window.localStorage.getItem('HAS_CONTACT');
                        foreign_tour = window.localStorage.getItem('HAS_TRAVELED');
                        health_condition = window.localStorage.getItem('HEALTH_CONDITION');
                        data = { name: name_1, email: email, phone: phone, department: department, region: region, age: age, fever: fever, contact: contact, foreign_tour: foreign_tour, health_condition: health_condition };
                        return [4 /*yield*/, this.dataService.saveData(data)];
                    case 2:
                        bh = _a.sent();
                        console.log(bh.local.result);
                        this.isLoading = false;
                        this.router.navigate(['/congrats']);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.isLoading = false;
                        console.log(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    healthinfonextComponent.prototype.onClickBack = function () {
        console.log('Back clicked');
        this.router.navigate(['/health-info']);
    };
    healthinfonextComponent.prototype.ngOnInit = function () {
    };
    healthinfonextComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_sd_services_dataservice__WEBPACK_IMPORTED_MODULE_4__["dataservice"] }
    ]; };
    healthinfonextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-healthinfonext',
            template: __webpack_require__(/*! raw-loader!./healthinfonext.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/healthinfonextComponent/healthinfonext.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_sd_services_dataservice__WEBPACK_IMPORTED_MODULE_4__["dataservice"]])
    ], healthinfonextComponent);
    return healthinfonextComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/healthinformationComponent/healthinformation.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/healthinformationComponent/healthinformation.component.ts ***!
  \**************************************************************************************/
/*! exports provided: healthinformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "healthinformationComponent", function() { return healthinformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/



/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/
/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/
var healthinformationComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](healthinformationComponent, _super);
    function healthinformationComponent(router) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.pageHeader = 'Health Information';
        _this.question1 = 'Did you have fever in last 24 hours?';
        _this.question2 = 'Did you come in contact with a covid suspect in last 2 weeks?';
        _this.question3 = 'Did you travel outside country in past 2 months?';
        _this.question4 = 'Do you have any underlying health condition?';
        _this.ans1 = '';
        _this.ans2 = '';
        _this.ans3 = '';
        _this.ans4 = '';
        return _this;
    }
    healthinformationComponent.prototype.onClickNext = function () {
        console.log('Next Clicked...');
        this.router.navigate(['/health-info-next']);
    };
    healthinformationComponent.prototype.onClickBack = function () {
        console.log('Back clicked');
        this.router.navigate(['/personal-info']);
    };
    healthinformationComponent.prototype.ngOnInit = function () {
    };
    healthinformationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    healthinformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-healthinformation',
            template: __webpack_require__(/*! raw-loader!./healthinformation.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/healthinformationComponent/healthinformation.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], healthinformationComponent);
    return healthinformationComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/homeComponent/home.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/homeComponent/home.component.ts ***!
  \************************************************************/
/*! exports provided: homeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeComponent", function() { return homeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_sd_services_dataservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/sd-services/dataservice */ "./src/app/sd-services/dataservice.ts");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/




/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/
/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/
var homeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](homeComponent, _super);
    function homeComponent(router, dataService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.dataService = dataService;
        _this.username = '';
        _this.email = '';
        _this.password = '';
        _this.isLoading = false;
        return _this;
    }
    homeComponent.prototype.ngOnInit = function () {
    };
    homeComponent.prototype.onLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var bh, _a, name_1, email, phone, department, region, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.email) {
                            return [2 /*return*/];
                        }
                        if (!this.password) {
                            return [2 /*return*/];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        console.log('email: ', this.email);
                        console.log('password:', this.password);
                        this.isLoading = true;
                        return [4 /*yield*/, this.dataService.login(this.email, this.password)];
                    case 2:
                        bh = _b.sent();
                        if (bh.local.result && bh.local.result.user) {
                            _a = bh.local.result.user, name_1 = _a.name, email = _a.email, phone = _a.phone, department = _a.department, region = _a.region;
                            console.log({ name: name_1, email: email, phone: phone, department: department, region: region });
                            window.localStorage.setItem('name', name_1);
                            window.localStorage.setItem('email', email);
                            window.localStorage.setItem('phone', phone);
                            window.localStorage.setItem('department', department);
                            window.localStorage.setItem('region', region);
                            window.localStorage.setItem('HAS_FEVER', '');
                            window.localStorage.setItem('HAS_CONTACT', '');
                            window.localStorage.setItem('HAS_TRAVELED', '');
                            window.localStorage.setItem('HEALTH_CONDITION', '');
                            this.isLoading = false;
                            if (email === 'hradmin@ingredion.com' || email === 'hradmin@pbfenergy.com') {
                                this.router.navigate(['/dashboard']);
                                return [2 /*return*/];
                            }
                            this.router.navigate(['/personal-info']);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        console.log(err_1);
                        this.isLoading = false;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    homeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_sd_services_dataservice__WEBPACK_IMPORTED_MODULE_4__["dataservice"] }
    ]; };
    homeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-home',
            template: __webpack_require__(/*! raw-loader!./home.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/homeComponent/home.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_sd_services_dataservice__WEBPACK_IMPORTED_MODULE_4__["dataservice"]])
    ], homeComponent);
    return homeComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/landingComponent/landing.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/landingComponent/landing.component.ts ***!
  \******************************************************************/
/*! exports provided: landingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landingComponent", function() { return landingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/



/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/
/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/
var landingComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](landingComponent, _super);
    function landingComponent(router) {
        var _this = _super.call(this) || this;
        _this.router = router;
        return _this;
    }
    landingComponent.prototype.ngOnInit = function () {
    };
    landingComponent.prototype.onClickStart = function () {
        console.log('Lets start clicked');
        this.router.navigate(['/home']);
    };
    landingComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    landingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-landing',
            template: __webpack_require__(/*! raw-loader!./landing.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/landingComponent/landing.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], landingComponent);
    return landingComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/landingpbe2Component/landingpbe2.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/landingpbe2Component/landingpbe2.component.ts ***!
  \**************************************************************************/
/*! exports provided: landingpbe2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landingpbe2Component", function() { return landingpbe2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/



/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/
/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/
var landingpbe2Component = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](landingpbe2Component, _super);
    function landingpbe2Component(router) {
        var _this = _super.call(this) || this;
        _this.router = router;
        return _this;
    }
    landingpbe2Component.prototype.ngOnInit = function () {
    };
    landingpbe2Component.prototype.onClickStart = function () {
        console.log('Lets start clicked');
        this.router.navigate(['/home']);
    };
    landingpbe2Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    landingpbe2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-landingpbe2',
            template: __webpack_require__(/*! raw-loader!./landingpbe2.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/landingpbe2Component/landingpbe2.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], landingpbe2Component);
    return landingpbe2Component;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/landingpbeComponent/landingpbe.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/landingpbeComponent/landingpbe.component.ts ***!
  \************************************************************************/
/*! exports provided: landingpbeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landingpbeComponent", function() { return landingpbeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/



/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/
/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/
var landingpbeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](landingpbeComponent, _super);
    function landingpbeComponent(router) {
        var _this = _super.call(this) || this;
        _this.router = router;
        return _this;
    }
    landingpbeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/landing-pbe-2']);
        }, 7000);
    };
    landingpbeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    landingpbeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-landingpbe',
            template: __webpack_require__(/*! raw-loader!./landingpbe.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/landingpbeComponent/landingpbe.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], landingpbeComponent);
    return landingpbeComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/pageheaderComponent/pageheader.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/pageheaderComponent/pageheader.component.ts ***!
  \************************************************************************/
/*! exports provided: pageheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageheaderComponent", function() { return pageheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/


/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/
/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/
var pageheaderComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](pageheaderComponent, _super);
    function pageheaderComponent() {
        return _super.call(this) || this;
    }
    pageheaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], pageheaderComponent.prototype, "pageHeader", void 0);
    pageheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-pageheader',
            template: __webpack_require__(/*! raw-loader!./pageheader.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/pageheaderComponent/pageheader.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], pageheaderComponent);
    return pageheaderComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/personalinfoComponent/personalinfo.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/personalinfoComponent/personalinfo.component.ts ***!
  \****************************************************************************/
/*! exports provided: personalinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personalinfoComponent", function() { return personalinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/



/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/
/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/
var personalinfoComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](personalinfoComponent, _super);
    function personalinfoComponent(router) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.pageHeader = 'Personal Information';
        _this.name = 'Sibaprasad Maiti';
        _this.email = 'sibaprasad.maiti@gmail.com';
        _this.phone = '9876543210';
        _this.department = 'Accounts';
        _this.region = 'EMEA';
        return _this;
    }
    personalinfoComponent.prototype.onClickNext = function () {
        console.log('Next clicked');
        this.router.navigate(['/health-info']);
    };
    personalinfoComponent.prototype.ngOnInit = function () {
        var name = window.localStorage.getItem('name');
        var email = window.localStorage.getItem('email');
        var phone = window.localStorage.getItem('phone');
        var department = window.localStorage.getItem('department');
        var region = window.localStorage.getItem('region');
        console.log({ name: name, email: email, phone: phone, department: department, region: region });
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.department = department;
        this.region = region;
    };
    personalinfoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    personalinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-personalinfo',
            template: __webpack_require__(/*! raw-loader!./personalinfo.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/personalinfoComponent/personalinfo.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], personalinfoComponent);
    return personalinfoComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/questionsComponent/questions.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/questionsComponent/questions.component.ts ***!
  \**********************************************************************/
/*! exports provided: questionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questionsComponent", function() { return questionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/


/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/
/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/
var questionsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](questionsComponent, _super);
    function questionsComponent() {
        var _this = _super.call(this) || this;
        _this.onAnswer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.answer = "";
        return _this;
    }
    questionsComponent.prototype.onCheckYes = function () {
        console.log('onCheckYes callled ....');
    };
    questionsComponent.prototype.ngOnInit = function () {
        if (this.questionIndex === 0) {
            var hasFever = window.localStorage.getItem('HAS_FEVER');
            if (hasFever) {
                this.answer = hasFever;
            }
            return;
        }
        if (this.questionIndex === 1) {
            var hasContact = window.localStorage.getItem('HAS_CONTACT');
            if (hasContact) {
                this.answer = hasContact;
            }
            return;
        }
        if (this.questionIndex === 2) {
            var hasTraveled = window.localStorage.getItem('HAS_TRAVELED');
            if (hasTraveled) {
                this.answer = hasTraveled;
            }
            return;
        }
        if (this.questionIndex === 3) {
            var healthCondition = window.localStorage.getItem('HEALTH_CONDITION');
            if (healthCondition) {
                this.answer = healthCondition;
            }
            return;
        }
    };
    questionsComponent.prototype.onChangeRadio = function (e, questionIndex) {
        console.log('onChangeRadio called...');
        console.log("Question Index", questionIndex);
        var val = e.value;
        this.answer = val;
        console.log({ val: val });
        if (questionIndex === 0) {
            window.localStorage.setItem('HAS_FEVER', val);
            return;
        }
        if (questionIndex === 1) {
            window.localStorage.setItem('HAS_CONTACT', val);
            return;
        }
        if (questionIndex === 2) {
            window.localStorage.setItem('HAS_TRAVELED', val);
            return;
        }
        if (questionIndex === 3) {
            window.localStorage.setItem('HEALTH_CONDITION', val);
            return;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], questionsComponent.prototype, "question", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], questionsComponent.prototype, "radioValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], questionsComponent.prototype, "questionIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], questionsComponent.prototype, "onAnswer", void 0);
    questionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-questions',
            template: __webpack_require__(/*! raw-loader!./questions.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/questionsComponent/questions.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], questionsComponent);
    return questionsComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/splashComponent/splash.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/splashComponent/splash.component.ts ***!
  \****************************************************************/
/*! exports provided: splashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splashComponent", function() { return splashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/


/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/
/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/
var splashComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](splashComponent, _super);
    function splashComponent() {
        return _super.call(this) || this;
    }
    splashComponent.prototype.ngOnInit = function () {
    };
    splashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-splash',
            template: __webpack_require__(/*! raw-loader!./splash.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/splashComponent/splash.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], splashComponent);
    return splashComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/successpageComponent/successpage.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/successpageComponent/successpage.component.ts ***!
  \**************************************************************************/
/*! exports provided: successpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successpageComponent", function() { return successpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/


/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/
/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/
var successpageComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](successpageComponent, _super);
    function successpageComponent() {
        return _super.call(this) || this;
    }
    successpageComponent.prototype.ngOnInit = function () {
    };
    successpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-successpage',
            template: __webpack_require__(/*! raw-loader!./successpage.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/successpageComponent/successpage.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], successpageComponent);
    return successpageComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/config/declarations.ts":
/*!****************************************!*\
  !*** ./src/app/config/declarations.ts ***!
  \****************************************/
/*! exports provided: startupServiceFactory, appBootstrap, appEntryComponents, appDeclarations, appProviders, appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startupServiceFactory", function() { return startupServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appBootstrap", function() { return appBootstrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appEntryComponents", function() { return appEntryComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appDeclarations", function() { return appDeclarations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appProviders", function() { return appProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../not-found.component */ "./src/app/not-found.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _directives_imgSrc_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/imgSrc.directive */ "./src/app/directives/imgSrc.directive.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _n_services_n_dataSorce_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../n-services/n-dataSorce.service */ "./src/app/n-services/n-dataSorce.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _n_components_nMapComponent_n_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../n-components/nMapComponent/n-map.component */ "./src/app/n-components/nMapComponent/n-map.component.ts");
/* harmony import */ var _n_services_n_localeResources_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../n-services/n-localeResources.service */ "./src/app/n-services/n-localeResources.service.ts");
/* harmony import */ var neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! neutrinos-seed-services */ "./node_modules/neutrinos-seed-services/fesm5/neutrinos-seed-services.js");
/* harmony import */ var _directives_artImgSrc_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../directives/artImgSrc.directive */ "./src/app/directives/artImgSrc.directive.ts");
/* harmony import */ var _components_landingpbe2Component_landingpbe2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/landingpbe2Component/landingpbe2.component */ "./src/app/components/landingpbe2Component/landingpbe2.component.ts");
/* harmony import */ var _components_landingpbeComponent_landingpbe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/landingpbeComponent/landingpbe.component */ "./src/app/components/landingpbeComponent/landingpbe.component.ts");
/* harmony import */ var _components_landingComponent_landing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/landingComponent/landing.component */ "./src/app/components/landingComponent/landing.component.ts");
/* harmony import */ var _components_dashboardComponent_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/dashboardComponent/dashboard.component */ "./src/app/components/dashboardComponent/dashboard.component.ts");
/* harmony import */ var _components_congratsComponent_congrats_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/congratsComponent/congrats.component */ "./src/app/components/congratsComponent/congrats.component.ts");
/* harmony import */ var _components_personalinfoComponent_personalinfo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/personalinfoComponent/personalinfo.component */ "./src/app/components/personalinfoComponent/personalinfo.component.ts");
/* harmony import */ var _components_healthinfonextComponent_healthinfonext_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/healthinfonextComponent/healthinfonext.component */ "./src/app/components/healthinfonextComponent/healthinfonext.component.ts");
/* harmony import */ var _components_questionsComponent_questions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/questionsComponent/questions.component */ "./src/app/components/questionsComponent/questions.component.ts");
/* harmony import */ var _components_pageheaderComponent_pageheader_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/pageheaderComponent/pageheader.component */ "./src/app/components/pageheaderComponent/pageheader.component.ts");
/* harmony import */ var _components_healthinformationComponent_healthinformation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/healthinformationComponent/healthinformation.component */ "./src/app/components/healthinformationComponent/healthinformation.component.ts");
/* harmony import */ var _components_splashComponent_splash_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/splashComponent/splash.component */ "./src/app/components/splashComponent/splash.component.ts");
/* harmony import */ var _components_alldataComponent_alldata_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/alldataComponent/alldata.component */ "./src/app/components/alldataComponent/alldata.component.ts");
/* harmony import */ var _components_successpageComponent_successpage_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/successpageComponent/successpage.component */ "./src/app/components/successpageComponent/successpage.component.ts");
/* harmony import */ var _components_homeComponent_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/homeComponent/home.component */ "./src/app/components/homeComponent/home.component.ts");
/* harmony import */ var _components_detailsComponent_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/detailsComponent/details.component */ "./src/app/components/detailsComponent/details.component.ts");










window['neutrinos'] = {
    environments: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"]
};
//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-landingpbe2Component

//CORE_REFERENCE_IMPORT-landingpbeComponent

//CORE_REFERENCE_IMPORT-landingComponent

//CORE_REFERENCE_IMPORT-dashboardComponent

//CORE_REFERENCE_IMPORT-congratsComponent

//CORE_REFERENCE_IMPORT-personalinfoComponent

//CORE_REFERENCE_IMPORT-healthinfonextComponent

//CORE_REFERENCE_IMPORT-questionsComponent

//CORE_REFERENCE_IMPORT-pageheaderComponent

//CORE_REFERENCE_IMPORT-healthinformationComponent

//CORE_REFERENCE_IMPORT-splashComponent

//CORE_REFERENCE_IMPORT-alldataComponent

//CORE_REFERENCE_IMPORT-successpageComponent

//CORE_REFERENCE_IMPORT-homeComponent

//CORE_REFERENCE_IMPORT-detailsComponent

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
function startupServiceFactory(startupService) {
    return function () { return startupService.getDataSource(); };
}
/**
*bootstrap for @NgModule
*/
var appBootstrap = [
    _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
];
/**
*Entry Components for @NgModule
*/
var appEntryComponents = [
//CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];
/**
*declarations for @NgModule
*/
var appDeclarations = [
    _directives_imgSrc_directive__WEBPACK_IMPORTED_MODULE_2__["ImgSrcDirective"],
    _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
    _not_found_component__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundComponent"],
    _n_components_nMapComponent_n_map_component__WEBPACK_IMPORTED_MODULE_6__["NMapComponent"],
    _directives_artImgSrc_directive__WEBPACK_IMPORTED_MODULE_9__["ArtImgSrcDirective"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-landingpbe2Component
    _components_landingpbe2Component_landingpbe2_component__WEBPACK_IMPORTED_MODULE_10__["landingpbe2Component"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-landingpbeComponent
    _components_landingpbeComponent_landingpbe_component__WEBPACK_IMPORTED_MODULE_11__["landingpbeComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-landingComponent
    _components_landingComponent_landing_component__WEBPACK_IMPORTED_MODULE_12__["landingComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dashboardComponent
    _components_dashboardComponent_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["dashboardComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-congratsComponent
    _components_congratsComponent_congrats_component__WEBPACK_IMPORTED_MODULE_14__["congratsComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-personalinfoComponent
    _components_personalinfoComponent_personalinfo_component__WEBPACK_IMPORTED_MODULE_15__["personalinfoComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-healthinfonextComponent
    _components_healthinfonextComponent_healthinfonext_component__WEBPACK_IMPORTED_MODULE_16__["healthinfonextComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-questionsComponent
    _components_questionsComponent_questions_component__WEBPACK_IMPORTED_MODULE_17__["questionsComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-pageheaderComponent
    _components_pageheaderComponent_pageheader_component__WEBPACK_IMPORTED_MODULE_18__["pageheaderComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-healthinformationComponent
    _components_healthinformationComponent_healthinformation_component__WEBPACK_IMPORTED_MODULE_19__["healthinformationComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-splashComponent
    _components_splashComponent_splash_component__WEBPACK_IMPORTED_MODULE_20__["splashComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-alldataComponent
    _components_alldataComponent_alldata_component__WEBPACK_IMPORTED_MODULE_21__["alldataComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-successpageComponent
    _components_successpageComponent_successpage_component__WEBPACK_IMPORTED_MODULE_22__["successpageComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
    _components_homeComponent_home_component__WEBPACK_IMPORTED_MODULE_23__["homeComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-detailsComponent
    _components_detailsComponent_details_component__WEBPACK_IMPORTED_MODULE_24__["detailsComponent"],
];
/**
* provider for @NgModuke
*/
var appProviders = [
    _n_services_n_dataSorce_service__WEBPACK_IMPORTED_MODULE_4__["NDataSourceService"],
    _n_services_n_localeResources_service__WEBPACK_IMPORTED_MODULE_7__["NLocaleResource"],
    {
        // Provider for APP_INITIALIZER
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"],
        useFactory: startupServiceFactory,
        deps: [_n_services_n_dataSorce_service__WEBPACK_IMPORTED_MODULE_4__["NDataSourceService"]],
        multi: true
    },
    neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_8__["NAuthGuardService"],
];
/**
* Routes available for bApp
*/
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
var appRoutes = [{ path: 'home', component: _components_homeComponent_home_component__WEBPACK_IMPORTED_MODULE_23__["homeComponent"],
        children: [] }, { path: 'health-info', component: _components_healthinformationComponent_healthinformation_component__WEBPACK_IMPORTED_MODULE_19__["healthinformationComponent"] }, { path: 'health-info-next', component: _components_healthinfonextComponent_healthinfonext_component__WEBPACK_IMPORTED_MODULE_16__["healthinfonextComponent"] }, { path: 'personal-info', component: _components_personalinfoComponent_personalinfo_component__WEBPACK_IMPORTED_MODULE_15__["personalinfoComponent"] }, { path: 'congrats', component: _components_congratsComponent_congrats_component__WEBPACK_IMPORTED_MODULE_14__["congratsComponent"],
        children: [] }, { path: 'dashboard', component: _components_dashboardComponent_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["dashboardComponent"] }, { path: 'landing', component: _components_landingComponent_landing_component__WEBPACK_IMPORTED_MODULE_12__["landingComponent"] }, { path: 'landing-pbe', component: _components_landingpbeComponent_landingpbe_component__WEBPACK_IMPORTED_MODULE_11__["landingpbeComponent"] }, { path: 'landing-pbe-2', component: _components_landingpbe2Component_landingpbe2_component__WEBPACK_IMPORTED_MODULE_10__["landingpbe2Component"] }, { path: '', redirectTo: 'landing', pathMatch: 'full' }, { path: '**', component: _not_found_component__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundComponent"] }];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END


/***/ }),

/***/ "./src/app/config/dependencies.module.ts":
/*!***********************************************!*\
  !*** ./src/app/config/dependencies.module.ts ***!
  \***********************************************/
/*! exports provided: DependenciesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependenciesModule", function() { return DependenciesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sd_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sd-providers */ "./src/app/config/sd-providers.ts");

//__IMPORT_MODULES_HERE__


var DependenciesModule = /** @class */ (function () {
    function DependenciesModule() {
    }
    DependenciesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
            //__CUSTOM_IMPORTS_MODULES__
            //__CUSTOM_IMPORTS_MODULES_END__
            //__IMPORTS_MODULES__
            //__IMPORTS_MODULES_END__
            ],
            providers: _sd_providers__WEBPACK_IMPORTED_MODULE_2__["sdProviders"].slice(),
            exports: [
            //__EXPORTS_MODULES__
            //__EXPORTS_MODULES_END__
            ]
        })
    ], DependenciesModule);
    return DependenciesModule;
}());



/***/ }),

/***/ "./src/app/config/import-modules.ts":
/*!******************************************!*\
  !*** ./src/app/config/import-modules.ts ***!
  \******************************************/
/*! exports provided: appImportModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appImportModules", function() { return appImportModules; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _declarations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./declarations */ "./src/app/config/declarations.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var neutrinos_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! neutrinos-module */ "./node_modules/neutrinos-module/fesm5/neutrinos-module.js");
/* harmony import */ var _dependencies_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dependencies.module */ "./src/app/config/dependencies.module.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var neutrinos_oauth_client__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! neutrinos-oauth-client */ "./node_modules/neutrinos-oauth-client/fesm5/neutrinos-oauth-client.js");















































/**
 * adding the environments into the window object
*/
/**
*imports for @NgModule
*/
var appImportModules = [
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_declarations__WEBPACK_IMPORTED_MODULE_5__["appRoutes"]),
    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"],
    ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
    /**
     * Angular material components
     */
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_28__["MatButtonToggleModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__["MatCheckboxModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_31__["MatAutocompleteModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepickerModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_35__["MatStepperModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_36__["MatExpansionModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_37__["MatChipsModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__["MatProgressSpinnerModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_39__["MatProgressBarModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_42__["MatSortModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_43__["MatPaginatorModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_44__["MatGridListModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_41__["MatBadgeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_45__["MatNativeDateModule"],
    _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({
        apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].properties.googleMapKey
    }),
    neutrinos_module__WEBPACK_IMPORTED_MODULE_12__["NeutrinosModule"],
    _dependencies_module__WEBPACK_IMPORTED_MODULE_13__["DependenciesModule"],
    neutrinos_oauth_client__WEBPACK_IMPORTED_MODULE_46__["NeutrinosOAuthClientModule"]
];


/***/ }),

/***/ "./src/app/config/sd-providers.ts":
/*!****************************************!*\
  !*** ./src/app/config/sd-providers.ts ***!
  \****************************************/
/*! exports provided: sdProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sdProviders", function() { return sdProviders; });
/* harmony import */ var app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/n-services/SDBaseService */ "./src/app/n-services/SDBaseService.ts");
/* harmony import */ var _sd_services_dataservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sd-services/dataservice */ "./src/app/sd-services/dataservice.ts");

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-dataservice

var sdProviders = [
    app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_0__["SDBaseService"],
    //CORE_REFERENCE_PUSH_TO_SD_ARRAY
    //CORE_REFERENCE_PUSH_TO_SD_ARRAY-dataservice
    _sd_services_dataservice__WEBPACK_IMPORTED_MODULE_1__["dataservice"]
];


/***/ }),

/***/ "./src/app/directives/artImgSrc.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/artImgSrc.directive.ts ***!
  \***************************************************/
/*! exports provided: ArtImgSrcDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtImgSrcDirective", function() { return ArtImgSrcDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! neutrinos-seed-services */ "./node_modules/neutrinos-seed-services/fesm5/neutrinos-seed-services.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ArtImgSrcDirective = /** @class */ (function () {
    function ArtImgSrcDirective(el, _renderer, http) {
        this.el = el;
        this._renderer = _renderer;
        this.http = http;
        this.systemService = neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_2__["NSystemService"].getInstance();
    }
    ArtImgSrcDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (typeof this.imageFilter === 'string' && this.parseJSON(this.imageFilter)) {
            this.imageFilter = this.imageFilter;
        }
        if (this.collectionName && typeof this.imageFilter === 'object') {
            this.imgSource = this.systemService.getFileIOUrl() + this.collectionName
                + '?metadataFilter=' + encodeURI(JSON.stringify(this.imageFilter));
            this._internalSubscription = this.http
                .get(this.imgSource, {
                responseType: 'blob'
            })
                .subscribe(function (m) {
                _this._renderer.setAttribute(_this.el.nativeElement, 'src', URL.createObjectURL(m));
            });
        }
    };
    ArtImgSrcDirective.prototype.parseJSON = function (jsonstring) {
        var json;
        try {
            json = JSON.parse(jsonstring);
        }
        catch (error) {
            return null;
        }
        return json;
    };
    ArtImgSrcDirective.prototype.ngOnDestroy = function () {
        if (this._internalSubscription) {
            this._internalSubscription.unsubscribe();
        }
    };
    ArtImgSrcDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ArtImgSrcDirective.prototype, "collectionName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ArtImgSrcDirective.prototype, "imageFilter", void 0);
    ArtImgSrcDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[artImgSrc]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ArtImgSrcDirective);
    return ArtImgSrcDirective;
}());



/***/ }),

/***/ "./src/app/directives/imgSrc.directive.ts":
/*!************************************************!*\
  !*** ./src/app/directives/imgSrc.directive.ts ***!
  \************************************************/
/*! exports provided: ImgSrcDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function() { return ImgSrcDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImgSrcDirective = /** @class */ (function () {
    function ImgSrcDirective(el, _renderer) {
        this.el = el;
        this._renderer = _renderer;
    }
    ImgSrcDirective.prototype.ngOnInit = function () {
        var relativePath = 'assets';
        if (this.imgSrc) {
            if (this.imgSrc.charAt(0) != '/') {
                relativePath += '/';
            }
            this._renderer.setAttribute(this.el.nativeElement, 'src', relativePath + this.imgSrc);
        }
        else {
            this._renderer.setAttribute(this.el.nativeElement, 'src', '');
        }
    };
    ImgSrcDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('imgSrc'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImgSrcDirective.prototype, "imgSrc", void 0);
    ImgSrcDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[imgSrc]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ImgSrcDirective);
    return ImgSrcDirective;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! neutrinos-seed-services */ "./node_modules/neutrinos-seed-services/fesm5/neutrinos-seed-services.js");



var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(nLocalstorage, nTokenService) {
        this.nLocalstorage = nLocalstorage;
        this.nTokenService = nTokenService;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        if (this.nLocalstorage.getValue('accessToken')) {
            this.nTokenService.updateSessionStorage();
        }
    };
    LayoutComponent.ctorParameters = function () { return [
        { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_2__["NLocalStorageService"] },
        { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_2__["NTokenService"] }
    ]; };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>\n             <n-snackbar></n-snackbar>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_2__["NLocalStorageService"], neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_2__["NTokenService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/n-components/nMapComponent/n-map.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/n-components/nMapComponent/n-map.component.ts ***!
  \***************************************************************/
/*! exports provided: NMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NMapComponent", function() { return NMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! neutrinos-seed-services */ "./node_modules/neutrinos-seed-services/fesm5/neutrinos-seed-services.js");




var NMapComponent = /** @class */ (function () {
    function NMapComponent() {
        this.gMapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gMarkerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.systemService = neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_3__["NSystemService"].getInstance();
    }
    NMapComponent.prototype.onWindowResize = function () {
        var _this_1 = this;
        this.myMap.triggerResize().then(function () {
            if (_this_1.lat && _this_1.lng)
                _this_1.myMap._mapsWrapper.setCenter({ lat: _this_1.lat, lng: _this_1.lng });
        });
    };
    NMapComponent.prototype.ngOnInit = function () {
        this.hideMarker = this.hideMarker ? this.hideMarker : false;
        this.enableHighAccuracy = this.enableHighAccuracy ? this.enableHighAccuracy : false;
        this.mapTimedout = this.mapTimedout ? this.mapTimedout : 10000;
        this.mapZoom = this.mapZoom ? this.mapZoom : 20;
        this.markerSize = this.markerSize ? this.markerSize : 40;
        this.usePanning = this.usePanning ? this.usePanning : false;
        this.markerTraggerble = this.markerTraggerble ? this.markerTraggerble : false;
        this.getLocation();
    };
    NMapComponent.prototype.markerEventEmitter = function (event) {
        this.gMarkerClick.emit(event);
    };
    NMapComponent.prototype.getLocation = function () {
        var _this = this;
        if (this.systemService.deviceType == 'browser') {
            navigator.geolocation.getCurrentPosition(locationSuccess);
        }
        else {
            getCurrentLocation();
        }
        function getCurrentLocation() {
            navigator.geolocation.getCurrentPosition(locationSuccess, locationError, { enableHighAccuracy: this.enableHighAccuracy, timeout: _this.mapTimedout });
        }
        function locationSuccess(position) {
            _this.lat = position.coords.latitude;
            _this.lng = position.coords.longitude;
            _this.getGeoLocation(_this.lat, _this.lng);
        }
        function locationError(error) {
            window['cordova'].plugins.diagnostic.isLocationEnabled(function (enabled) {
                if (enabled) {
                }
                else {
                    window['cordova'].plugins.diagnostic.switchToLocationSettings();
                    window['cordova'].plugins.diagnostic.registerLocationStateChangeHandler(function () {
                        getCurrentLocation();
                    });
                }
            }, function () {
            });
        }
    };
    NMapComponent.prototype.ngAfterContentInit = function () {
        var _this_1 = this;
        if (this.iconUrl) {
            this.imageDetect(this.iconUrl).then(function (url) {
                _this_1.updateImageUrl(url);
            }).catch(function (error) {
                //this.updateImageUrl(error);
            });
        }
        else {
            //this.updateImageUrl(null);
        }
    };
    NMapComponent.prototype.marker = function (event) {
        this.lat = event.coords.lat;
        this.lng = event.coords.lng;
        this.getGeoLocation(this.lat, this.lng);
    };
    NMapComponent.prototype.getGeoLocation = function (lat, lng) {
        var _this = this;
        var latlng = new google.maps.LatLng(lat, lng);
        var geocoder = geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    _this.formattedAddress = true;
                    _this.formattedAddress = results[1].formatted_address;
                }
                else {
                    _this.formattedAddress = false;
                }
            }
            else {
                _this.formattedAddress = false;
            }
        });
    };
    NMapComponent.prototype.mapClicked = function (event) {
        this.gMapClick.emit(event);
        this.lat = event.coords.lat;
        this.lng = event.coords.lng;
        this.getGeoLocation(this.lat, this.lng);
    };
    NMapComponent.prototype.imageDetect = function (url) {
        return new Promise(function (resolve, reject) {
            var image = new Image();
            image.src = url;
            image.onload = function () {
                resolve(url);
            };
            image.onerror = function () {
                reject(false);
            };
        });
    };
    NMapComponent.prototype.updateImageUrl = function (url) {
        this.iconConfiguration = {
            url: url,
            scaledSize: {
                height: this.markerSize,
                width: this.markerSize
            }
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NMapComponent.prototype, "gMapClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NMapComponent.prototype, "gMarkerClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMap"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NMapComponent.prototype, "myMap", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('iconUrl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NMapComponent.prototype, "iconUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('lat'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NMapComponent.prototype, "lat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('lng'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NMapComponent.prototype, "lng", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hideMarker'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NMapComponent.prototype, "hideMarker", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('enableHighAccuracy'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NMapComponent.prototype, "enableHighAccuracy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mapTimedout'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NMapComponent.prototype, "mapTimedout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mapZoom'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NMapComponent.prototype, "mapZoom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('markerSize'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NMapComponent.prototype, "markerSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('markerTraggerble'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NMapComponent.prototype, "markerTraggerble", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('usePanning'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NMapComponent.prototype, "usePanning", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('infoWindow', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NMapComponent.prototype, "infoWindow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NMapComponent.prototype, "onWindowResize", null);
    NMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'n-google-map',
            template: __webpack_require__(/*! raw-loader!./n-map.template.html */ "./node_modules/raw-loader/index.js!./src/app/n-components/nMapComponent/n-map.template.html"),
            styles: [__webpack_require__(/*! ./n-map.style.scss */ "./src/app/n-components/nMapComponent/n-map.style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NMapComponent);
    return NMapComponent;
}());



/***/ }),

/***/ "./src/app/n-components/nMapComponent/n-map.style.scss":
/*!*************************************************************!*\
  !*** ./src/app/n-components/nMapComponent/n-map.style.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 100%;\n  width: 100%; }\n\n.map {\n  height: 100%;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWJhcHJhc2FkL25ldXRyaW5vcy1zdHVkaW8vY292aWQtMTkvYXBwL3NyYy9hcHAvbi1jb21wb25lbnRzL25NYXBDb21wb25lbnQvbi1tYXAuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRWY7RUFDSSxZQUFZO0VBQ1osV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbi1jb21wb25lbnRzL25NYXBDb21wb25lbnQvbi1tYXAuc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLm1hcCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/n-services/SDBaseService.ts":
/*!*********************************************!*\
  !*** ./src/app/n-services/SDBaseService.ts ***!
  \*********************************************/
/*! exports provided: SDBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDBaseService", function() { return SDBaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var neutrinos_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! neutrinos-module */ "./node_modules/neutrinos-module/fesm5/neutrinos-module.js");
/* harmony import */ var neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! neutrinos-seed-services */ "./node_modules/neutrinos-seed-services/fesm5/neutrinos-seed-services.js");
/* harmony import */ var neutrinos_oauth_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! neutrinos-oauth-client */ "./node_modules/neutrinos-oauth-client/fesm5/neutrinos-oauth-client.js");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/






var SDBaseService = /** @class */ (function () {
    function SDBaseService(http, sessionStorage, tokenService, httpLoaderService, dataModelService, loginService, authGuardService, localStorageService, logoutService, notificationService, pubsubService, snackbarService, alertService, fileIOService, OauthService) {
        this.http = http;
        this.sessionStorage = sessionStorage;
        this.tokenService = tokenService;
        this.httpLoaderService = httpLoaderService;
        this.dataModelService = dataModelService;
        this.loginService = loginService;
        this.authGuardService = authGuardService;
        this.localStorageService = localStorageService;
        this.logoutService = logoutService;
        this.notificationService = notificationService;
        this.pubsubService = pubsubService;
        this.snackbarService = snackbarService;
        this.alertService = alertService;
        this.fileIOService = fileIOService;
        this.OauthService = OauthService;
        this.systemService = neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NSystemService"].getInstance();
        this.operators = {
            'eq': function (a, b, c, d) { return a == b; },
            'se': function (a, b, c, d) { return a === b; },
            'neq': function (a, b, c, d) { return a != b; },
            'sne': function (a, b, c, d) { return a !== b; },
            'lt': function (a, b, c, d) { return a < b; },
            'lte': function (a, b, c, d) { return a <= b; },
            'gt': function (a, b, c, d) { return a > b; },
            'gte': function (a, b, c, d) { return a >= b; },
            'btwn': function (a, b, c, d) { return a >= b && a <= c; },
            'cont': function (a, b, c, d) { return (a + "").indexOf(b) != -1; },
            'regex': function (a, b, c, d) { return (a + "").match(new RegExp(b, d ? 'i' : '')); },
            'true': function (a, b, c, d) { return a === true; },
            'false': function (a, b, c, d) { return a === false; },
            'null': function (a, b, c, d) { return (typeof a == "undefined" || a === null); },
            'nnull': function (a, b, c, d) { return (typeof a != "undefined" && a !== null); },
            'empty': function (a, b, c, d) {
                if (typeof a === 'string' || Array.isArray(a)) {
                    return a.length === 0;
                }
                else if (typeof a === 'object' && a !== null) {
                    return Object.keys(a).length === 0;
                }
                return false;
            },
            'nempty': function (a, b, c, d) {
                if (typeof a === 'string' || Array.isArray(a)) {
                    return a.length !== 0;
                }
                else if (typeof a === 'object' && a !== null) {
                    return Object.keys(a).length !== 0;
                }
                return false;
            },
            'istype': function (a, b, c, d) {
                if (b === "array") {
                    return Array.isArray(a);
                }
                else if (b === "json") {
                    try {
                        JSON.parse(a);
                        return true;
                    } // or maybe ??? a !== null; }
                    catch (e) {
                        return false;
                    }
                }
                else if (b === "null") {
                    return a === null;
                }
                else {
                    return typeof a === b && !Array.isArray(a) && a !== null;
                }
            },
            'else': function (a, b, c, d) { return a === true; }
        };
    }
    SDBaseService.prototype.getPathAndQParamsObj = function (urlWithSearchParams) {
        var paramsObj = {};
        var qparams = urlWithSearchParams.split('?')[1];
        if (qparams) {
            var qkv = qparams.split('&');
            if (qkv) {
                qkv.map(function (qparamsPair) { return qparamsPair.split('='); }).forEach(function (v) { return paramsObj[v[0]] = v[1]; });
            }
        }
        return { paramObj: paramsObj, path: urlWithSearchParams.split('?')[0] };
    };
    SDBaseService.prototype.formatPathWithParams = function (path, pathparams) {
        Object.keys(pathparams || {}).forEach(function (pathparamKey) {
            var value = pathparams[pathparamKey];
            value = value ? ((typeof value === 'object') ? JSON.stringify(value) : value) : ":" + pathparamKey;
            path = path.replace(":" + pathparamKey, value);
        });
        return path;
    };
    SDBaseService.prototype.__formatHeaders = function (headersObj) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        if (typeof headersObj === 'object') {
            Object.entries(headersObj).forEach(function (p) {
                var value = p[1];
                if (typeof value === 'object') {
                    value = JSON.stringify(value);
                }
                headers = headers.set(p[0], value);
            });
        }
        return headers;
    };
    SDBaseService.prototype.__formatParams = function (paramsObj) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (typeof paramsObj === 'object') {
            Object.entries(paramsObj).forEach(function (p) {
                var value = p[1];
                if (typeof value === 'object') {
                    value = JSON.stringify(value);
                }
                params = params.set(p[0], value);
            });
        }
        return params;
    };
    SDBaseService.prototype.nHttpRequest = function (requestOptions) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var responseType = requestOptions.responseType || undefined;
            var reportProgress = requestOptions.reportProgress || false;
            var headers = _this.__formatHeaders(requestOptions.headers);
            var params = _this.__formatParams(requestOptions.params);
            var options = { headers: headers, params: params, responseType: responseType, reportProgress: reportProgress };
            _this.http.request(requestOptions.method, requestOptions.url, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ body: requestOptions.body }, options)).subscribe(function (result) {
                return resolve(result);
            }, function (error) {
                return reject(error);
            });
        });
    };
    SDBaseService.prototype.__constructDefault = function (bh) {
        var system = {};
        try {
            system.oauthService = this.OauthService;
            system.currentUser = system.oauthService.userInfo;
            system.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
            system.tokenService = this.tokenService;
            system.deviceService = this.systemService;
            system.httpLoaderService = this.httpLoaderService;
            system.dataModelService = this.dataModelService;
            system.loginService = this.loginService;
            system.authGuardService = this.authGuardService;
            system.localStorageService = this.localStorageService;
            system.logoutService = this.logoutService;
            system.notificationService = this.notificationService;
            system.pubsubService = this.pubsubService;
            system.snackbarService = this.snackbarService;
            system.alertService = this.alertService;
            system.fileIOService = this.fileIOService;
            Object.defineProperty(bh, 'system', {
                value: system,
                writable: false
            });
            return bh;
        }
        catch (e) {
            throw e;
        }
    };
    SDBaseService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NSessionStorageService"] },
        { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NTokenService"] },
        { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NHTTPLoaderService"] },
        { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NDataModelService"] },
        { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NLoginService"] },
        { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NAuthGuardService"] },
        { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NLocalStorageService"] },
        { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NLogoutService"] },
        { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NNotificationService"] },
        { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NPubSubService"] },
        { type: neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NSnackbarService"] },
        { type: neutrinos_module__WEBPACK_IMPORTED_MODULE_4__["NAlertService"] },
        { type: neutrinos_module__WEBPACK_IMPORTED_MODULE_4__["NFileIOService"] },
        { type: neutrinos_oauth_client__WEBPACK_IMPORTED_MODULE_6__["NeutrinosOAuthClientService"] }
    ]; };
    SDBaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NSessionStorageService"],
            neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NTokenService"],
            neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NHTTPLoaderService"],
            neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NDataModelService"],
            neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NLoginService"],
            neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NAuthGuardService"],
            neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NLocalStorageService"],
            neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NLogoutService"],
            neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NNotificationService"],
            neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NPubSubService"],
            neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_5__["NSnackbarService"],
            neutrinos_module__WEBPACK_IMPORTED_MODULE_4__["NAlertService"],
            neutrinos_module__WEBPACK_IMPORTED_MODULE_4__["NFileIOService"],
            neutrinos_oauth_client__WEBPACK_IMPORTED_MODULE_6__["NeutrinosOAuthClientService"]])
    ], SDBaseService);
    return SDBaseService;
}());



/***/ }),

/***/ "./src/app/n-services/n-dataSorce.service.ts":
/*!***************************************************!*\
  !*** ./src/app/n-services/n-dataSorce.service.ts ***!
  \***************************************************/
/*! exports provided: NDataSourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NDataSourceService", function() { return NDataSourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var NDataSourceService = /** @class */ (function () {
    function NDataSourceService(http) {
        this.http = http;
    }
    NDataSourceService.prototype.getDataSource = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('constants/app.const.json').subscribe(function (result) {
                window['neutrinos']['dataSource'] = result['dataSource'];
                return resolve(result);
            }, function (error) {
                return reject(error);
            });
        });
    };
    NDataSourceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    NDataSourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NDataSourceService);
    return NDataSourceService;
}());



/***/ }),

/***/ "./src/app/n-services/n-localeResources.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/n-services/n-localeResources.service.ts ***!
  \*********************************************************/
/*! exports provided: NLocaleResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NLocaleResource", function() { return NLocaleResource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var NLocaleResource = /** @class */ (function () {
    function NLocaleResource() {
        //DEFAULT_LANGUAGE
        this.defaultLcid = 'en';
        this.locale = {};
        this.localeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"](new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpXhrBackend"]({ build: function () { return new XMLHttpRequest(); } }));
        if (!this.defaultLcid) {
            this.defaultLcid = "en";
        }
        this.$localeSub = this.localeSubject.asObservable();
    }
    NLocaleResource.prototype.getLang = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getlanguageResource(this.defaultLcid)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
    *
    * @param lcid
    * Reads resource object based on lcid and
    */
    NLocaleResource.prototype.getlanguageResource = function (lcid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getLangResObj(lcid).then(function (resObj) {
                return resolve(_this.constructBundle(resObj['properties']));
            }).catch(function (error) {
                return reject(error);
            });
        });
    };
    /**
    *
    * @param lang
    * @param key
    *
    * Returns value based on lcid and key
    */
    NLocaleResource.prototype.getVal = function (lcid, key) {
        return this.getLangResObj(lcid).then(function (resObj) {
            return (resObj[key]);
        });
    };
    /**
    *
    * @param lcid
    * @param callback
    *
    * Reads and returns the resource object based on the lcid
    */
    NLocaleResource.prototype.getLangResObj = function (lcid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient.get("locales/locale_" + lcid + ".json").subscribe(function (r) {
                resolve(r);
            }, function (error) {
                if (error && error.status == 404) {
                    console.error(" locale file for language " + lcid + " not found");
                }
                else {
                    console.error(error.error);
                }
                return reject(error);
            });
        });
    };
    /**
    *
    * @param resourceObj object
    * Adds key and value pair into 'this'
    */
    NLocaleResource.prototype.constructBundle = function (resourceObj) {
        var keys = Object.keys(resourceObj);
        for (var att = 0; att < keys.length; att++) {
            this.locale[keys[att]] = resourceObj[keys[att]];
        }
        this.localeSubject.next(this.locale);
        return this.locale;
    };
    Object.defineProperty(NLocaleResource.prototype, "language", {
        /**
        * returns user selected language
        */
        get: function () {
            return this.defaultLcid;
        },
        /**
        * set the user selected language and updates the resource object based on user selected language
        */
        set: function (lcid) {
            var _this = this;
            this.getLocales().then(function (localesObj) {
                if (localesObj[lcid]) {
                    _this.defaultLcid = lcid;
                    _this.getlanguageResource(lcid);
                }
                else {
                    _this.locale = {};
                    _this.localeSubject.next();
                    console.error(" locale " + lcid + " is not valid");
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
    * return locales list created by developer
    */
    NLocaleResource.prototype.getLocales = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.httpClient.get('locales/locales.json').subscribe(function (r) {
                return resolve(r);
            }, function (error) {
                console.error(error.error);
                return reject(error);
            });
        });
    };
    return NLocaleResource;
}());



/***/ }),

/***/ "./src/app/not-found.component.ts":
/*!****************************************!*\
  !*** ./src/app/not-found.component.ts ***!
  \****************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: '<h2>Page not found</h2>'
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/sd-services/dataservice.ts":
/*!********************************************!*\
  !*** ./src/app/sd-services/dataservice.ts ***!
  \********************************************/
/*! exports provided: dataservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataservice", function() { return dataservice; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/n-services/SDBaseService */ "./src/app/n-services/SDBaseService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/

//CORE_REFERENCE_IMPORTS



var dataservice = /** @class */ (function () {
    function dataservice(sdService, router, matSnackBar) {
        this.sdService = sdService;
        this.router = router;
        this.matSnackBar = matSnackBar;
    }
    //   service flows_dataservice
    dataservice.prototype.saveData = function (data) {
        if (data === void 0) { data = undefined; }
        var others = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            others[_i - 1] = arguments[_i];
        }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var bh, outputVariables, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bh = {
                            input: { data: data },
                            local: { result: undefined, apiUrl: '' }
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        bh = this.sdService.__constructDefault(bh);
                        return [4 /*yield*/, this.sd_FJS4lS2dymGG8u7a(bh)];
                    case 2:
                        bh = _a.sent();
                        outputVariables = {
                            input: {},
                            local: {
                                result: bh.local.result
                            }
                        };
                        //End formatting output variables
                        return [2 /*return*/, outputVariables];
                    case 3:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_1, 'sd_DUAMP23kvQbaBXUy')];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    dataservice.prototype.getData = function () {
        var others = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            others[_i] = arguments[_i];
        }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var bh, outputVariables, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bh = { input: {}, local: { result: undefined } };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        bh = this.sdService.__constructDefault(bh);
                        return [4 /*yield*/, this.sd_mjFtbynpSOrGtnCk(bh)];
                    case 2:
                        bh = _a.sent();
                        outputVariables = {
                            input: {},
                            local: {
                                result: bh.local.result
                            }
                        };
                        //End formatting output variables
                        return [2 /*return*/, outputVariables];
                    case 3:
                        e_2 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_2, 'sd_8xPUiYmqn68XneqD')];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    dataservice.prototype.login = function (email, password) {
        if (email === void 0) { email = ''; }
        if (password === void 0) { password = ''; }
        var others = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            others[_i - 2] = arguments[_i];
        }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var bh, outputVariables, e_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bh = {
                            input: { email: email, password: password },
                            local: { result: undefined, reqBody: undefined }
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        bh = this.sdService.__constructDefault(bh);
                        return [4 /*yield*/, this.sd_j6ODUb73Y2xsh90I(bh)];
                    case 2:
                        bh = _a.sent();
                        outputVariables = {
                            input: {},
                            local: {
                                result: bh.local.result
                            }
                        };
                        //End formatting output variables
                        return [2 /*return*/, outputVariables];
                    case 3:
                        e_3 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_3, 'sd_ZG8dPvADa7c9LKnA')];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //appendnew_flow_dataservice_Start
    dataservice.prototype.sd_FJS4lS2dymGG8u7a = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        // bh.local.apiUrl = "https://corona-node-deploy.herokuapp.com/users/save_data"
                        bh.local.apiUrl = bh.system.environment.properties.ssdURL + "/users/save_data";
                        return [4 /*yield*/, this.sd_zWYptxlIv02Zm7Ok(bh)];
                    case 1:
                        bh = _a.sent();
                        //appendnew_next_sd_FJS4lS2dymGG8u7a
                        return [2 /*return*/, bh];
                    case 2:
                        e_4 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_4, 'sd_FJS4lS2dymGG8u7a')];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    dataservice.prototype.sd_zWYptxlIv02Zm7Ok = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var requestOptions, _a, e_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 4]);
                        requestOptions = {
                            url: bh.local.apiUrl,
                            method: 'post',
                            responseType: 'json',
                            reportProgress: undefined,
                            headers: {},
                            params: {},
                            body: bh.input.data
                        };
                        _a = bh.local;
                        return [4 /*yield*/, this.sdService.nHttpRequest(requestOptions)];
                    case 1:
                        _a.result = _b.sent();
                        this.sd_bjUEBsI2IghET29m(bh);
                        //appendnew_next_sd_zWYptxlIv02Zm7Ok
                        return [2 /*return*/, bh];
                    case 2:
                        e_5 = _b.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_5, 'sd_zWYptxlIv02Zm7Ok')];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    dataservice.prototype.sd_bjUEBsI2IghET29m = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_6;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 1, , 3]);
                        console.log(new Date().toLocaleTimeString(), bh.local.result);
                        //appendnew_next_sd_bjUEBsI2IghET29m
                        return [2 /*return*/, bh];
                    case 1:
                        e_6 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_6, 'sd_bjUEBsI2IghET29m')];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    dataservice.prototype.sd_6mlyVPfh9AYjEmu7 = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_7;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 1, , 3]);
                        this.matSnackBar.open('Something went wrong', '', {
                            duration: 2000,
                            direction: 'ltr',
                            horizontalPosition: 'center',
                            verticalPosition: 'bottom'
                        });
                        //appendnew_next_sd_6mlyVPfh9AYjEmu7
                        return [2 /*return*/, bh];
                    case 1:
                        e_7 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_7, 'sd_6mlyVPfh9AYjEmu7')];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    dataservice.prototype.sd_mjFtbynpSOrGtnCk = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_8;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        bh.local.apiUrl = bh.system.environment.properties.ssdURL + "/users/view_data";
                        return [4 /*yield*/, this.sd_RTFZ50ZT76mq8Wur(bh)];
                    case 1:
                        bh = _a.sent();
                        //appendnew_next_sd_mjFtbynpSOrGtnCk
                        return [2 /*return*/, bh];
                    case 2:
                        e_8 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_8, 'sd_mjFtbynpSOrGtnCk')];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    dataservice.prototype.sd_RTFZ50ZT76mq8Wur = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var requestOptions, _a, e_9;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 4]);
                        requestOptions = {
                            url: bh.local.apiUrl,
                            method: 'get',
                            responseType: 'json',
                            reportProgress: undefined,
                            headers: {},
                            params: {},
                            body: undefined
                        };
                        _a = bh.local;
                        return [4 /*yield*/, this.sdService.nHttpRequest(requestOptions)];
                    case 1:
                        _a.result = _b.sent();
                        //appendnew_next_sd_RTFZ50ZT76mq8Wur
                        return [2 /*return*/, bh];
                    case 2:
                        e_9 = _b.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_9, 'sd_RTFZ50ZT76mq8Wur')];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    dataservice.prototype.sd_j6ODUb73Y2xsh90I = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_10;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        bh.local.apiUrl = bh.system.environment.properties.ssdURL + "/users/login";
                        bh.local.reqBody = {
                            email: bh.input.email,
                            password: bh.input.password
                        };
                        return [4 /*yield*/, this.sd_Z9MZaBdEziHQnVms(bh)];
                    case 1:
                        bh = _a.sent();
                        //appendnew_next_sd_j6ODUb73Y2xsh90I
                        return [2 /*return*/, bh];
                    case 2:
                        e_10 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_10, 'sd_j6ODUb73Y2xsh90I')];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    dataservice.prototype.sd_Z9MZaBdEziHQnVms = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var requestOptions, _a, e_11;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 4]);
                        requestOptions = {
                            url: bh.local.apiUrl,
                            method: 'post',
                            responseType: 'json',
                            reportProgress: undefined,
                            headers: {},
                            params: {},
                            body: bh.local.reqBody
                        };
                        _a = bh.local;
                        return [4 /*yield*/, this.sdService.nHttpRequest(requestOptions)];
                    case 1:
                        _a.result = _b.sent();
                        //appendnew_next_sd_Z9MZaBdEziHQnVms
                        return [2 /*return*/, bh];
                    case 2:
                        e_11 = _b.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_11, 'sd_Z9MZaBdEziHQnVms')];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //appendnew_node
    dataservice.prototype.errorHandler = function (bh, e, src) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.error(e);
                        bh.error = e;
                        bh.errorSource = src;
                        _a = false;
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.sd_vjKeAyQoSWl0L6Fu(bh)];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        if (_a) {
                            return [2 /*return*/, bh];
                        }
                        else {
                            throw e;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    dataservice.prototype.sd_vjKeAyQoSWl0L6Fu = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var nodes;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nodes = [
                            'sd_DUAMP23kvQbaBXUy',
                            'sd_FJS4lS2dymGG8u7a',
                            'sd_zWYptxlIv02Zm7Ok',
                            'sd_bjUEBsI2IghET29m',
                            'sd_8xPUiYmqn68XneqD',
                            'sd_mjFtbynpSOrGtnCk',
                            'sd_RTFZ50ZT76mq8Wur',
                            'sd_ZG8dPvADa7c9LKnA',
                            'sd_j6ODUb73Y2xsh90I',
                            'sd_Z9MZaBdEziHQnVms'
                        ];
                        if (!nodes.includes(bh.errorSource)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.sd_6mlyVPfh9AYjEmu7(bh)];
                    case 1:
                        bh = _a.sent();
                        //appendnew_next_sd_vjKeAyQoSWl0L6Fu
                        return [2 /*return*/, true];
                    case 2: return [2 /*return*/, false];
                }
            });
        });
    };
    dataservice.ctorParameters = function () { return [
        { type: _app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_2__["SDBaseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    dataservice = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_2__["SDBaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], dataservice);
    return dataservice;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    "name": "dev",
    "properties": {
        "production": false,
        "ssdURL": "https://corona-node-deploy.herokuapp.com",
        "tenantName": "blucocoondigital",
        "appName": "covid-19",
        "namespace": "com.blucocoondigital.covid-19",
        "googleMapKey": "AIzaSyCSTnVwijjv0CFRA4MEeS-H6PAQc87LEoU",
        "useDefaultExceptionUI": true,
        "isIDSEnabled": "true",
        "webAppMountpoint": "web"
    }
};


/***/ }),

/***/ "./src/libConfig/firebaseInitForServiceWorker.ts":
/*!*******************************************************!*\
  !*** ./src/libConfig/firebaseInitForServiceWorker.ts ***!
  \*******************************************************/
/*! exports provided: firebaseInitForServiceWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseInitForServiceWorker", function() { return firebaseInitForServiceWorker; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);


function firebaseInitForServiceWorker() {
    firebase__WEBPACK_IMPORTED_MODULE_1__["initializeApp"]({
        'apiKey': _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].properties['firebaseAuthKey'],
        'authDomain': _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].properties['authDomain'],
        'databaseURL': _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].properties['databaseURL'],
        'storageBucket': _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].properties['storageBucket'],
        'messagingSenderId': _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].properties['firebaseSenderId']
    });
    var open = indexedDB.open('neutrinos_firebase_db', 1);
    open.onupgradeneeded = function () {
        var db = open.result;
        var store = db.createObjectStore('neutrinos_firebase_db_store');
        console.log(store);
    };
    open.onsuccess = function () {
        // Start a new transaction
        var db = open.result;
        var tx = db.transaction('neutrinos_firebase_db_store', 'readwrite');
        var store = tx.objectStore('neutrinos_firebase_db_store');
        // store.put(environment.properties);
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].properties['firebaseSenderId']) {
            store.add(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].properties['firebaseSenderId'], 'firebaseSenderId');
        }
        tx.oncomplete = function () {
            db.close();
        };
    };
}


/***/ }),

/***/ "./src/libConfig/initChartJS.ts":
/*!**************************************!*\
  !*** ./src/libConfig/initChartJS.ts ***!
  \**************************************/
/*! exports provided: initChartJS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initChartJS", function() { return initChartJS; });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);

/**
 * This function will be called after bootstrapping
 * of the app to register a plugin and to extend all the
 * prototypes to support color changes.
 *
 *
 * For applying tooltips permanently set
 * chart.options.showAllTooltips = true;
 */
function initChartJS() {
    /**
     * beforeRend and afterDraw are like lifecycle
     * They work lifeCycle are called throughtout the
     * formation of chart.js graph
     */
    chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"].pluginService.register({
        /**
         * Runs after the chart has been drawn
         * In here screen/media query is made and the tooltips are
         * turned on and drawn
         */
        afterDraw: function (chart, easing) {
            if (chart.options.showAllTooltips && window.matchMedia("(min-width: 500px)").matches) {
                // create an array of tooltips
                // we can't use the chart tooltip because there is only one tooltip per chart
                chart.pluginTooltips = [];
                chart.config.data.datasets.forEach(function (dataset, i) {
                    chart.getDatasetMeta(i).data.forEach(function (sector, j) {
                        chart.pluginTooltips.push(new chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"].Tooltip({
                            _chart: chart.chart,
                            _chartInstance: chart,
                            _data: chart.data,
                            _options: chart['options'].tooltips,
                            _active: [sector]
                        }, chart));
                    });
                });
                // turn off normal tooltips 
                chart.options.tooltips.enabled = false;
                // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
                if (!chart.allTooltipsOnce) {
                    if (easing !== 1)
                        return;
                    chart.allTooltipsOnce = true;
                }
                // turn on tooltips
                chart.options.tooltips.enabled = true;
                chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"].helpers.each(chart.pluginTooltips, function (tooltip) {
                    tooltip.initialize();
                    tooltip.update();
                    // we don't actually need this since we are not animating tooltips
                    tooltip.pivot();
                    tooltip.transition(easing).draw();
                });
                chart.options.tooltips.enabled = false;
            }
        }
    });
    /**
     * Get a list of all the controllers
     * and applyBackgroundColor
     */
    var chartList = Object.keys(chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"].controllers);
    for (var i = 0; i < chartList.length; i++) {
        applyBackgroundColor(chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"].controllers[chartList[i]].prototype, chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"].controllers[chartList[i]].prototype.draw);
    }
    /**
     * To apply background color set;
     *
     * chart.options.bApplyBackgroundColor = true;
     * if it is set and yHighlightRanges is not present then:
     *
     * default background color will be applied from 0 to ymax ('rgba(46,139,87, 0.1)') and
     * ymin to 0 ('rgba(255, 0, 0, 0.1)')
     *
     * The default format of making a yHighlightRanges array is
     * yHighlightRanges = [{
     *                       begin: 0,
     *                       end: 100,
     *                       color: 'rgba(46,139,87, 0.1)'
     *                   }, {
     *                       begin: -100,
     *                       end: 0,
     *                       color: 'rgba(255, 0, 0, 0.1)'
     *                   }]
     *
     * @param chartPrototype chart controller prototype
     * @param drawObject chart controller draw function from the prototype
     */
    function applyBackgroundColor(chartPrototype, drawObject) {
        chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"].helpers.extend(chartPrototype, {
            draw: function () {
                var chart = this.chart;
                var ctx = chart.chart.ctx;
                ctx.save();
                if (chart.options.bApplyBackgroundColor) {
                    var yHighlightRanges = [];
                    var xaxis = chart.scales['x-axis-0'];
                    var yaxis = chart.scales['y-axis-0'];
                    if (!chart.options.yHighlightRanges) {
                        var ymin = chart.scales['y-axis-0'].min;
                        var ymax = chart.scales['y-axis-0'].max;
                        yHighlightRanges = [{
                                begin: 0,
                                end: ymax,
                                color: 'rgba(46,139,87, 0.1)'
                            }, {
                                begin: ymin,
                                end: 0,
                                color: 'rgba(255, 0, 0, 0.1)'
                            }];
                    }
                    else {
                        yHighlightRanges = Object.assign({}, chart['options'].yHighlightRanges);
                    }
                    for (var i = 0; i < yHighlightRanges.length; ++i) {
                        var yHighlightRange = yHighlightRanges[i];
                        var yRangeBegin = yHighlightRange.begin;
                        var yRangeEnd = yHighlightRange.end;
                        var yRangeBeginPixel = yaxis.getPixelForValue(yRangeBegin);
                        var yRangeEndPixel = yaxis.getPixelForValue(yRangeEnd);
                        // The fill style of the rectangle we are about to fill.
                        ctx.fillStyle = yHighlightRange.color;
                        // Fill the rectangle that represents the highlight region. The parameters are the closest-to-starting-point pixel's x-coordinate,
                        // the closest-to-starting-point pixel's y-coordinate, the width of the rectangle in pixels, and the height of the rectangle in pixels, respectively.
                        ctx.fillRect(xaxis.left, Math.min(yRangeBeginPixel, yRangeEndPixel), xaxis.right - xaxis.left, Math.max(yRangeBeginPixel, yRangeEndPixel) - Math.min(yRangeBeginPixel, yRangeEndPixel));
                    }
                }
                ctx.restore();
                // Apply the original draw function for the chart.
                drawObject.apply(this, arguments);
            }
        });
    }
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libConfig_firebaseInitForServiceWorker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libConfig/firebaseInitForServiceWorker */ "./src/libConfig/firebaseInitForServiceWorker.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _libConfig_initChartJS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./libConfig/initChartJS */ "./src/libConfig/initChartJS.ts");
/* harmony import */ var neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! neutrinos-seed-services */ "./node_modules/neutrinos-seed-services/fesm5/neutrinos-seed-services.js");







if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].properties['production']) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
function bootstrapNow() {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).then(function (data) {
        neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_6__["NSystemService"].getInstance();
        if (window['navigator'] && window['navigator']['splashscreen']) {
            // hide splash screen
            window['navigator']['splashscreen'].hide();
        }
        var pushType = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].properties['pushType'] ? _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].properties['pushType'] : 'FCM';
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].properties['isNotificationEnabled'] && pushType.toUpperCase() === 'FCM') {
            Object(_libConfig_firebaseInitForServiceWorker__WEBPACK_IMPORTED_MODULE_0__["firebaseInitForServiceWorker"])();
        }
        Object(_libConfig_initChartJS__WEBPACK_IMPORTED_MODULE_5__["initChartJS"])();
    });
}
function checkDeviceLocal() {
    if (window['cordova']) {
        return 'mobile';
    }
    else {
        return 'browser';
    }
}
var deviceTypeLocal = checkDeviceLocal();
if (deviceTypeLocal == 'browser') {
    bootstrapNow();
}
/**
 * deviceready will only be triggered by a cordova app
 * and since we are not using cordova browser to server files.
 * However, if cordova browser would be used then the app will
 * get bootstrapped
 */
document.addEventListener('deviceready', function () {
    bootstrapNow();
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sibaprasad/neutrinos-studio/covid-19/app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map