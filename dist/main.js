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

/***/ "./node_modules/raw-loader/index.js!./src/app/components/certifyinformationComponent/certifyinformation.template.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/certifyinformationComponent/certifyinformation.template.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column wrap\" style=\"width:100%;height:600px;\" fxFlex=\"100\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <div fxLayout=\"row wrap\" style=\"width:100%;height:76px;\" fxFlex=\"30\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"column wrap\" style=\"width:100%;height:100%;\" fxFlex=\"100\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <div fxLayout=\"row wrap\" style=\"width:100%;height:100%;\" fxFlex=\"25\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n        <div fxLayout=\"column wrap\" style=\"width:100%;height:100%;\" fxFlex=\"75\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n        <div fxLayout=\"column wrap\" style=\"width:100%;height:100%;\" fxFlex=\"25\" fxLayoutAlign=\"center end\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"Images\\image1.png\"></div>\n      </div>\n      <div fxLayout=\"row wrap\" style=\"width:100%;height:100%;\" fxFlex=\"75\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n        <div fxLayout=\"column wrap\" style=\"width:100%;height:100%;\" fxFlex=\"100\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n          <div fxLayout=\"row wrap\" style=\"width:100%;height:100%;\" fxFlex=\"40\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n            <div style=\"width:100%;\" class=\"certify-info\">\n              {{locales.certifyinfo}}</div>\n          </div>\n          <div fxLayout=\"row wrap\" style=\"margin-left:15px;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"Images\\step3.png\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div fxLayout=\"row wrap\" style=\"width:100%;height:400px;\" fxFlex=\"40\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"column wrap\" style=\"width:100%;height:100%;margin-left: 15px;\" fxFlex=\"90\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <form #certifyForm=\"ngForm\">\n        <mat-form-field style=\"width:100%;font-family:Poppins;\" [appearance]=\"&apos;legacy&apos;\" [floatLabel]=\"&apos;auto&apos;\" [hideRequiredMarker]=\"false\">\n          <input matInput [(ngModel)]=\"signature\" name=\"signature\" type=\"text\" placeholder=\"{{locales.Signature}}\" required #Sign=\"ngModel\" [ngModelOptions]=\"{updateOn: &apos;change&apos;}\" pattern=\"[a-zA-Z\\s]+$\">\n\n        </mat-form-field>\n        <div *ngIf=\"Sign.errors &amp;&amp; (Sign.dirty || Sign.touched || validclick)\">\n          <span *ngIf=\"Sign.errors.required\">\n                <small style=\"color:red;font-family:Poppins;font-style:normal;\">{{locales.sir}}</small></span><span *ngIf=\"Sign.errors.pattern\">\n                <small style=\"color:red;font-family: Poppins;font-style: normal;\">{{locales.Signatureinvalid}}</small></span></div>\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n          <div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div><em style=\"color: #25282B;font-family: Poppins; font-style: normal; font-weight: normal; font-size: 13px; line-height: 19px; letter-spacing: 0.2px;\">\n                 <label>\n   <input type=\"checkbox\" [(ngModel)]=\"accept\" name=\"accept\" #Accepted=\"ngModel\" [checked]=\"false\" required> &#xA0;\n{{locales.certconf}} &#xA0; \n<a style=\"color:green;\" data-toggle=\"modal\" data-target=\"#myModal\">{{locales.terms}}</a>\n</label>\n  <!-- Modal -->\n  <div class=\"modal fade modalstyle1\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n    \n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&#xD7;</button>\n          <h4 class=\"modal-title\">{{locales.terms}}</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p>\n          {{locales.termsmessage}}\n          </p>\n        </div>\n      \n      </div>\n    </div>\n  </div></em>\n        </div>\n      </form>\n    </div>\n    <div fxLayout=\"column wrap\" style=\"width:100%;height:100%;\" fxFlex=\"10\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n  </div>\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxFlex=\"30\" fxLayoutAlign=\"end start\" [fxShow]=\"true\" [fxHide]=\"false\"><label>\n        <button mat-button (click)=\"onBack()\">\n          <mat-icon>keyboard_arrow_left</mat-icon>{{locales.back}}\n        </button></label></div>\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxFlex=\"70\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><button mat-button style=\"color: #FFFFFF;margin-top: 50px;margin-left:105px;height: 60px;width: 134px;font-family: Poppins; font-style: normal; font-weight: 600;box-shadow: 1.13333px 7.93333px 23.8px rgba(94, 167, 62, 0.2); background:#52575C;border-radius: 44px;\" (click)=\"signSubmit(certifyForm)\">{{locales.Submit}}</button></div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/confirmdetailsComponent/confirmdetails.template.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/confirmdetailsComponent/confirmdetails.template.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column wrap\" style=\"width:100%;height:700px;\" fxFlex=\"100\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <div fxLayout=\"row wrap\" style=\"width :100%;\" fxFlex=\"25\" fxLayoutAlign=\"space-between stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"column wrap\" style=\"width:100%;height:100%;\" fxFlex=\"100\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <div fxLayout=\"row wrap\" style=\"width:100%;height:100%;\" fxFlex=\"25\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n        <div fxLayout=\"column wrap\" style=\"width:100%;height:100%;\" fxFlex=\"75\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n        <div fxLayout=\"column wrap\" style=\"width:100%;height:100%;\" fxFlex=\"25\" fxLayoutAlign=\"center end\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"Images\\image1.png\" style=\"height :20px;width:80px;\" width=\"50px;\"></div>\n      </div>\n      <div fxLayout=\"row wrap\" style=\"width:100%;height:100%;\" fxFlex=\"75\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n        <div fxLayout=\"column wrap\" style=\"width:100%;height:100%;\" fxFlex=\"90\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n          <div fxLayout=\"row wrap\" style=\"width:100%;height:100%;\" fxFlex=\"50\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n            <div style=\"margin-top:15px;margin-left:15px;font-family:Poppins;font-style:normal;color:#283552;\" class=\"contact-info\">\n              {{locales.cd}}</div>\n          </div>\n          <div fxLayout=\"row wrap\" style=\"width:100%;\" fxFlex=\"30\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n            <div style=\"margin-left:15px;color:#52575C;font-family:Poppins;font-style:normal;font-weight:normal;font-size:15px;line-height:19px;letter-spacing:0.5px;max-height:49%;\">\n              {{locales.pclph}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div fxLayout=\"row wrap\" style=\"width:100%;\" fxFlex=\"75\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"column wrap\" style=\"width:100%;margin-left:15px;\" fxFlex=\"90\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <form #ConfirmdetailsForm=\"ngForm\" style=\"width:100%;height:100%;\">\n        <mat-form-field style=\"font-family:Poppins;font-style:normal;width:100%;\" [appearance]=\"&apos;legacy&apos;\" [floatLabel]=\"&apos;auto&apos;\" [hideRequiredMarker]=\"false\">\n          <input matInput [(ngModel)]=\"locationName\" name=\"locationName\" type=\"text\" placeholder=\"{{locales.confirmlocation}}\" required #location=\"ngModel\" pattern=\"[a-zA-Z0-9\\s]+$\" [ngModelOptions]=\"{updateOn:&apos;change&apos;}\" (ngModelChange)=\"locationFilter()\" [matAutocomplete]=\"auto\">\n\n        </mat-form-field>\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let location of updatelocations\" [value]=\"location.locationName\">\n            {{location.locationName}}\n          </mat-option>\n        </mat-autocomplete>\n        <div *ngIf=\"location.errors &amp;&amp; (location.dirty || location.touched || validclick)\">\n          <span *ngIf=\"location.errors.required\">\n                <small style=\"color:red;font-family:Poppins;font-style:normal;\">{{locales.lr}}</small></span><span *ngIf=\"location.errors.pattern\">\n                 <small style=\"color:red;font-family:Poppins;font-style:normal;\">{{locales.poc}}</small></span></div>\n        <mat-form-field style=\" font-family:Poppins;font-style:normal;width:100%;\" [appearance]=\"&apos;legacy&apos;\" [floatLabel]=\"&apos;auto&apos;\" [hideRequiredMarker]=\"false\">\n          <input matInput [(ngModel)]=\"phone\" name=\"phone\" type=\"text\" placeholder=\"{{locales.phone}}\" required #mobilenumber=\"ngModel\" pattern=\"(^\\+?[0-9]{5,12})$\">\n\n        </mat-form-field>\n        <div *ngIf=\"mobilenumber.errors &amp;&amp; (mobilenumber.dirty || mobilenumber.touched || validclick)\">\n          <span *ngIf=\"mobilenumber.errors.required\">\n                <small style=\"color:red;font-family:Poppins;font-style:normal;\">{{locales.pnr}}</small></span><span *ngIf=\"mobilenumber.errors.pattern\">\n                <small style=\"color:red;font-family:Poppins;font-style:normal;\">{{locales.pnrl}}</small></span></div>\n        <div fxLayout=\"row wrap\" style=\"width:100%;height:20%;margin-top:70px;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><button mat-button style=\"color: #FFFFFF;margin-top: 0px;margin-left:185px;height: 60px;width: 134px;font-family: Poppins; font-style: normal; font-weight: 600;background: #5EA73E; box-shadow: 1.13333px 7.93333px 23.8px rgba(94, 167, 62, 0.2); border-radius: 44px;\" (click)=\"onSubmit(ConfirmdetailsForm)\" type=\"submit\">{{locales.cont}}</button></div>\n      </form>\n    </div>\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxFlex=\"10\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/contactinformationComponent/contactinformation.template.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/contactinformationComponent/contactinformation.template.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  fxLayout=\"column wrap\"\n  style=\"width: 100%; height: 600px;\"\n  fxFlex=\"100\"\n  fxLayoutAlign=\"start stretch\"\n  [fxShow]=\"true\"\n  [fxHide]=\"false\"\n>\n  <div\n    fxLayout=\"row wrap\"\n    style=\"width: 100%; height: 100%;\"\n    fxFlex=\"20\"\n    fxLayoutAlign=\"start stretch\"\n    [fxShow]=\"true\"\n    [fxHide]=\"false\"\n  >\n    <div\n      fxLayout=\"column wrap\"\n      style=\"width: 100%; height: 100%;\"\n      fxFlex=\"100\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    >\n      <div\n        fxLayout=\"row wrap\"\n        style=\"width: 100%; height: 100%;\"\n        fxFlex=\"25\"\n        fxLayoutAlign=\"start stretch\"\n        [fxShow]=\"true\"\n        [fxHide]=\"false\"\n      >\n        <div\n          fxLayout=\"column wrap\"\n          style=\"width: 100%; height: 100%;\"\n          fxFlex=\"75\"\n          fxLayoutAlign=\"start stretch\"\n          [fxShow]=\"true\"\n          [fxHide]=\"false\"\n        ></div>\n        <div\n          fxLayout=\"column wrap\"\n          style=\"width: 100%; height: 100%;\"\n          fxFlex=\"25\"\n          fxLayoutAlign=\"center end\"\n          [fxShow]=\"true\"\n          [fxHide]=\"false\"\n        >\n          <img\n            imgSrc=\"Images\\image1.png\"\n            style=\"width: 80px; height: 20px;\"\n            width=\"100px;\"\n          />\n        </div>\n      </div>\n      <div\n        fxLayout=\"row wrap\"\n        style=\"width: 100%; height: 100%;\"\n        fxFlex=\"75\"\n        fxLayoutAlign=\"start stretch\"\n        [fxShow]=\"true\"\n        [fxHide]=\"false\"\n      >\n        <div\n          fxLayout=\"column wrap\"\n          style=\"width: 100%; height: 100%;\"\n          fxFlex=\"100\"\n          fxLayoutAlign=\"start stretch\"\n          [fxShow]=\"true\"\n          [fxHide]=\"false\"\n        >\n          <div\n            fxLayout=\"row wrap\"\n            style=\"width: 100%; height: 100%;\"\n            fxFlex=\"40\"\n            fxLayoutAlign=\"start stretch\"\n            [fxShow]=\"true\"\n            [fxHide]=\"false\"\n          >\n            <div class=\"contact-info\">\n              {{locales.contactinfo}}\n            </div>\n          </div>\n          <div\n            fxLayout=\"row wrap\"\n            style=\"width: 100%; height: 100%; margin-left: 15px;\"\n            fxFlex=\"20\"\n            fxLayoutAlign=\"start stretch\"\n            [fxShow]=\"true\"\n            [fxHide]=\"false\"\n          >\n            <img imgSrc=\"Images\\step.png\" />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div\n    fxLayout=\"row wrap\"\n    style=\"width: 100%; height: 400px;\"\n    fxFlex=\"50\"\n    fxLayoutAlign=\"start stretch\"\n    [fxShow]=\"true\"\n    [fxHide]=\"false\"\n  >\n    <div\n      fxLayout=\"column wrap\"\n      style=\"width: 100%; height: 100%; margin-left: 15px;\"\n      fxFlex=\"90\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    >\n      <form #contactInfo=\"ngForm\" style=\"width: 100%; height: 100%;\">\n        <mat-form-field\n          style=\"width: 100%;\"\n          [appearance]=\"'legacy'\"\n          [floatLabel]=\"'auto'\"\n          [hideRequiredMarker]=\"false\"\n        >\n          <input\n            matInput\n            [(ngModel)]=\"email\"\n            name=\"email\"\n            type=\"text\"\n            placeholder=\"{{locales.Email}}\"\n            required\n            #EmailId=\"ngModel\"\n            oninput=\"this.value = this.value.toLowerCase()\"\n            pattern=\"([A-Za-z]|[0-9])[A-Za-z0-9.]+[A-Za-z0-9]@((?:[-a-z0-9]+\\.)+[a-z]{2,})\"\n            [ngModelOptions]=\"{ updateOn:change}\"\n            (keyup)=\"onBlurEmail(EmailId)\"\n          />\n        </mat-form-field>\n        <div\n          *ngIf=\"EmailId.errors &amp;&amp; (EmailId.dirty || EmailId.touched || validclick)\"\n        >\n          <span *ngIf=\"EmailId.errors.required\">\n            <small style=\"color: red; font-family: Poppins; font-style: normal;\"\n              >{{locales.eir}}</small\n            ></span\n          ><span *ngIf=\"EmailId.errors.pattern\">\n            <small style=\"color: red;\">{{locales.Emailidinvalid}}</small></span\n          >\n        </div>\n        <mat-form-field\n          style=\"width: 100%;\"\n          [appearance]=\"'legacy'\"\n          [floatLabel]=\"'auto'\"\n          [hideRequiredMarker]=\"false\"\n        >\n          <input\n            matInput\n            [(ngModel)]=\"phone\"\n            name=\"phone\"\n            type=\"text\"\n            placeholder=\"{{locales.phone}}\"\n            required\n            #mobilenumber=\"ngModel\"\n          />\n        </mat-form-field>\n        <div\n          *ngIf=\"mobilenumber.errors &amp;&amp; (mobilenumber.dirty || mobilenumber.touched || validclick)\"\n        >\n          <span *ngIf=\"mobilenumber.errors.required\">\n            <small style=\"color: red; font-family: Poppins; font-style: normal;\"\n              >{{locales.pnr}}</small\n            ></span\n          ><span *ngIf=\"mobilenumber.errors.pattern\">\n            <small style=\"color: red; font-family: Poppins; font-style: normal;\"\n              >{{locales.pnrl}}</small\n            ></span\n          >\n        </div>\n        <mat-form-field\n          style=\"width: 100%;\"\n          [appearance]=\"'legacy'\"\n          [floatLabel]=\"'auto'\"\n          [hideRequiredMarker]=\"false\"\n        >\n          <input\n            matInput\n            [(ngModel)]=\"company\"\n            name=\"company\"\n            type=\"text\"\n            placeholder=\"{{locales.companyname}}\"\n            required\n            #companyName=\"ngModel\"\n          />\n        </mat-form-field>\n        <div\n          *ngIf=\" companyName.errors &amp;&amp; (companyName.dirty || companyName.touched || validclick)\"\n        >\n          <span *ngIf=\"companyName.errors.required\">\n            <small style=\"color: red; font-family: Poppins; font-style: normal;\"\n              >{{locales.cr}}</small\n            ></span\n          ><span *ngIf=\"companyName.errors.pattern\">\n            <small style=\"color: red; font-family: Poppins; font-style: normal;\"\n              >{{locales.poc}}</small\n            ></span\n          >\n        </div>\n        <mat-form-field\n          style=\"width: 100%;\"\n          [appearance]=\"'legacy'\"\n          [floatLabel]=\"'auto'\"\n          [hideRequiredMarker]=\"false\"\n        >\n          <input\n            matInput\n            [(ngModel)]=\"ingredioncontact\"\n            name=\"ingredioncontact\"\n            type=\"text\"\n            placeholder=\"{{locales.ingredoncontact}}\"\n            required\n            #gc=\"ngModel\"\n            pattern=\"[a-zA-Z\\s]+$\"\n            [ngModelOptions]=\"{updateOn:'change'}\"\n          />\n        </mat-form-field>\n        <div\n          *ngIf=\"gc.errors &amp;&amp; (gc.dirty || gc.touched || validclick)\"\n        >\n          <span *ngIf=\"gc.errors.required\">\n            <small style=\"color: red; font-family: Poppins; font-style: normal;\"\n              >{{locales.gcn}}</small\n            ></span\n          ><span *ngIf=\"gc.errors.pattern\">\n            <small style=\"color: red; font-family: Poppins; font-style: normal;\"\n              >{{locales.poc}}</small\n            ></span\n          >\n        </div>\n      </form>\n    </div>\n    <div\n      fxLayout=\"column wrap\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    ></div>\n  </div>\n  <div\n    fxLayout=\"row wrap\"\n    style=\"width: 100%;\"\n    fxFlex=\"20\"\n    fxLayoutAlign=\"start stretch\"\n    [fxShow]=\"true\"\n    [fxHide]=\"false\"\n  >\n    <div\n      fxLayout=\"column wrap\"\n      style=\"width: 100%;\"\n      fxFlex=\"30\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    >\n      <div>\n        <mat-icon\n          style=\"position: absolute; top: 486px; bottom: 24%; margin-left: 4px;\"\n          (click)=\"navigatePrev()\"\n          >arrow_back_ios</mat-icon\n        >\n        <button\n          mat-flat-button\n          style=\"\n            margin-top: 67px;\n            margin-left: 16px;\n            font-family: Poppins;\n            font-style: normal;\n            font-weight: 500;\n            font-size: 18px;\n            line-height: 24px;\n            display: flex;\n            align-items: center;\n            letter-spacing: 0.5px;\n            text-transform: capitalize;\n            color: #a1a4b1;\n          \"\n          type=\"submit\"\n          (click)=\"navigatePrev()\"\n        >\n          {{locales.back}}\n        </button>\n      </div>\n    </div>\n    <div\n      fxLayout=\"column wrap\"\n      style=\"width: 100%;\"\n      fxFlex=\"70\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    >\n      <button\n        mat-button\n        style=\"\n          color: #ffffff;\n          margin-top: 50px;\n          margin-left: 105px;\n          height: 60px;\n          width: 134px;\n          font-family: Poppins;\n          font-style: normal;\n          font-weight: 600;\n          box-shadow: 1.13333px 7.93333px 23.8px rgba(94, 167, 62, 0.2);\n          background: #5ea73e;\n          border-radius: 44px;\n        \"\n        (click)=\"contactSubmit(contactInfo)\"\n      >\n        {{locales.cont}}\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/healthinfoComponent/healthinfo.template.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/healthinfoComponent/healthinfo.template.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  fxLayout=\"column wrap\"\n  style=\"display: flex; width: 100%; height: 700px;\"\n  fxFlex=\"100\"\n  fxLayoutAlign=\"start stretch\"\n  [fxShow]=\"true\"\n  [fxHide]=\"false\"\n>\n  <div\n    fxLayout=\"row wrap\"\n    style=\"width: 100%; height: 100px;\"\n    fxFlex=\"15\"\n    fxLayoutAlign=\"start stretch\"\n    [fxShow]=\"true\"\n    [fxHide]=\"false\"\n  >\n    <div\n      fxLayout=\"column wrap\"\n      style=\"width: 100%; height: 100%;\"\n      fxFlex=\"100\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    >\n      <div\n        fxLayout=\"row wrap\"\n        style=\"width: 100%; height: 100%;\"\n        fxFlex=\"30\"\n        fxLayoutAlign=\"start stretch\"\n        [fxShow]=\"true\"\n        [fxHide]=\"false\"\n      >\n        <div\n          fxLayout=\"column wrap\"\n          style=\"width: 100%; height: 100%;\"\n          fxFlex=\"80\"\n          fxLayoutAlign=\"start stretch\"\n          [fxShow]=\"true\"\n          [fxHide]=\"false\"\n        ></div>\n        <div\n          fxLayout=\"column wrap\"\n          style=\"width: 100%; height: 100%;\"\n          fxFlex=\"20\"\n          fxLayoutAlign=\"end center\"\n          [fxShow]=\"true\"\n          [fxHide]=\"false\"\n        >\n          <img imgSrc=\"Web/image1.png\" style=\"width: 100px;\" />\n        </div>\n      </div>\n      <div\n        fxLayout=\"row wrap\"\n        style=\"width: 100%; height: 100%;\"\n        fxFlex=\"70\"\n        fxLayoutAlign=\"start stretch\"\n        [fxShow]=\"true\"\n        [fxHide]=\"false\"\n      >\n        <div\n          fxLayout=\"column wrap\"\n          style=\"width: 100%; height: 100%;\"\n          fxFlex=\"100\"\n          fxLayoutAlign=\"start stretch\"\n          [fxShow]=\"true\"\n          [fxHide]=\"false\"\n        >\n          <div\n            fxLayout=\"row wrap\"\n            style=\"width: 100%; height: 100%;\"\n            fxFlex=\"40\"\n            fxLayoutAlign=\"start stretch\"\n            [fxShow]=\"true\"\n            [fxHide]=\"false\"\n          >\n            <div\n              style=\"\n                margin-left: 10px;\n                letter-spacing: 0.5px;\n                text-transform: capitalize;\n                color: #283552;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 600;\n                font-size: 20px;\n                line-height: 30px;\n              \"\n            >\n              {{locales.healthinformation}}\n            </div>\n          </div>\n          <div\n            fxLayout=\"row wrap\"\n            style=\"width: 100%; height: 100%;\"\n            fxFlex=\"60\"\n            fxLayoutAlign=\"start stretch\"\n            [fxShow]=\"true\"\n            [fxHide]=\"false\"\n          >\n            <div\n              fxLayout=\"column wrap\"\n              style=\"width: 100%; height: 100%;\"\n              fxFlex=\"80\"\n              fxLayoutAlign=\"start stretch\"\n              [fxShow]=\"true\"\n              [fxHide]=\"false\"\n            >\n              <img\n                imgSrc=\"Web/Stepper.png\"\n                style=\"margin-left: 10px; width: 300px;\"\n              />\n            </div>\n            <div\n              fxLayout=\"column wrap\"\n              style=\"width: 100%; height: 100%;\"\n              fxFlex=\"20\"\n              fxLayoutAlign=\"start stretch\"\n              [fxShow]=\"true\"\n              [fxHide]=\"false\"\n            ></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div\n    fxLayout=\"row wrap\"\n    style=\"\n      color: #25282b;\n      width: 100%;\n      font-family: Poppins;\n      font-style: normal;\n      font-weight: 600;\n      font-size: 13px;\n      line-height: 19px;\n      letter-spacing: 0.5px;\n    \"\n    fxFlex=\"32\"\n    fxLayoutAlign=\"start none\"\n    [fxShow]=\"true\"\n    [fxHide]=\"false\"\n  >\n    <div\n      fxLayout=\"column wrap\"\n      style=\"width: 100%; height: 100%; margin-left: 10px;\"\n      fxLayoutAlign=\"center center\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    >\n      <div\n        fxLayout=\"row wrap\"\n        style=\"width: 100%; height: 100%;\"\n        fxLayoutAlign=\"center center\"\n        [fxShow]=\"true\"\n        [fxHide]=\"false\"\n      >\n        <div\n          fxLayout=\"column wrap\"\n          style=\"width: 100%; height: 100%;\"\n          fxLayoutAlign=\"  none\"\n          [fxShow]=\"true\"\n          [fxHide]=\"false\"\n        >\n          <label style=\"margin-left: 10px; color: #25282b;\">\n            {{locales.question1}}</label\n          ><label class=\"text\"> {{locales.fever}}</label\n          ><label class=\"text\"> {{locales.cough}}</label\n          ><label class=\"text\"> {{locales.chills}}</label\n          ><label class=\"text\"> {{locales.choose}}</label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div\n    fxLayout=\"row wrap\"\n    style=\"width: 100%; height: 100%; margin-bottom: 10px;\"\n    fxFlex=\"8\"\n    fxLayoutAlign=\"start stretch\"\n    [fxShow]=\"true\"\n    [fxHide]=\"false\"\n  >\n    <div\n      fxLayout=\"column wrap\"\n      fxFlex=\"10\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    ></div>\n    <div\n      fxLayout=\"column wrap\"\n      style=\"margin-top: 15px;\"\n      fxFlex=\"80\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    >\n      <div\n        fxLayout=\"row wrap\"\n        fxLayoutAlign=\"space-around stretch\"\n        [fxShow]=\"true\"\n        [fxHide]=\"false\"\n      >\n        <mat-radio-group (change)=\"onChangeRadio($event, 1)\">\n          <mat-radio-button value=\"false\" required [labelPosition]=\"'after'\"\n            >NO</mat-radio-button\n          >\n          <mat-radio-button value=\"true\" required [labelPosition]=\"'after'\"\n            >YES</mat-radio-button\n          >\n        </mat-radio-group>\n      </div>\n    </div>\n    <div\n      fxLayout=\"column wrap\"\n      fxFlex=\"10\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    ></div>\n  </div>\n  <div\n    fxLayout=\"row wrap\"\n    style=\"width: 100%; height: 100px;\"\n    fxLayoutAlign=\"start stretch\"\n    [fxShow]=\"true\"\n    [fxHide]=\"false\"\n  >\n    <div\n      fxLayout=\"column wrap\"\n      style=\"width: 100%; height: 100%;\"\n      fxLayoutAlign=\"center center\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    >\n      <label style=\"color: #25282b;\" class=\"text2\">\n        {{locales.question2}}</label\n      >\n    </div>\n  </div>\n  <div\n    fxLayout=\"row wrap\"\n    style=\"width: 100%; height: 100%;\"\n    fxFlex=\"10\"\n    fxLayoutAlign=\"start stretch\"\n    [fxShow]=\"true\"\n    [fxHide]=\"false\"\n  >\n    <div\n      fxLayout=\"column wrap\"\n      fxFlex=\"10\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    ></div>\n    <div\n      fxLayout=\"column wrap\"\n      style=\"margin-right: 10px;\"\n      fxFlex=\"80\"\n      fxLayoutAlign=\"start end\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    >\n      <div\n        fxLayout=\"row wrap\"\n        style=\"width: 100%; height: 100%;\"\n        fxFlex=\"100\"\n        fxLayoutAlign=\"center start\"\n        [fxShow]=\"true\"\n        [fxHide]=\"false\"\n      >\n        <mat-radio-group (change)=\"onChangeRadioTwo($event, 2)\">\n          <mat-radio-button value=\"false\" required>NO</mat-radio-button>\n          <mat-radio-button value=\"true\" required color=\"#5EA73E\"\n            >YES</mat-radio-button\n          >\n        </mat-radio-group>\n      </div>\n    </div>\n    <div\n      fxLayout=\"column wrap\"\n      fxFlex=\"10\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    ></div>\n  </div>\n  <div\n    fxLayout=\"row wrap\"\n    style=\"width: 100%; height: 100%;\"\n    fxFlex=\"10\"\n    fxLayoutAlign=\"start stretch\"\n    [fxShow]=\"true\"\n    [fxHide]=\"false\"\n  >\n    <div\n      fxLayout=\"column wrap\"\n      style=\"width: 100%;\"\n      fxLayoutAlign=\"  none\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    >\n      <div\n        fxLayout=\"row wrap\"\n        fxLayoutAlign=\"space-around stretch\"\n        [fxShow]=\"true\"\n        [fxHide]=\"false\"\n      >\n        <label style=\"margin-right: 130px; margin-top: 20px; align: left;\">\n          <button mat-button (click)=\"onBack()\">\n            <mat-icon>keyboard_arrow_left</mat-icon>{{locales.back}}\n          </button></label\n        ><label style=\"margin-left: 20px; margin-right: 10px;\">\n          <button\n            mat-button\n            style=\"\n              width: 100px;\n              height: 50px;\n              color: #ffffff;\n              background: #5ea73e;\n              box-shadow: 1.13333px 7.93333px 23.8px rgba(94, 167, 62, 0.2);\n              border-radius: 44px;\n            \"\n            (click)=\"onNext()\"\n          >\n            {{locales.continue}}\n          </button></label\n        >\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/healthinfonextComponent/healthinfonext.template.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/healthinfonextComponent/healthinfonext.template.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  fxLayout=\"column wrap\"\n  style=\"width: 100%; height: 600px;\"\n  fxLayoutAlign=\"start stretch\"\n  [fxShow]=\"true\"\n  [fxHide]=\"false\"\n>\n  <div\n    fxLayout=\"row wrap\"\n    style=\"width: 100%;\"\n    fxFlex=\"20\"\n    fxLayoutAlign=\"start stretch\"\n    [fxShow]=\"true\"\n    [fxHide]=\"false\"\n  >\n    <div\n      fxLayout=\"column wrap\"\n      style=\"width: 100%; height: 100%;\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    >\n      <div\n        fxLayout=\"row wrap\"\n        style=\"width: 100%;\"\n        fxFlex=\"30\"\n        fxLayoutAlign=\"start stretch\"\n        [fxShow]=\"true\"\n        [fxHide]=\"false\"\n      >\n        <div\n          fxLayout=\"column wrap\"\n          style=\"width: 100%; height: 100%;\"\n          fxFlex=\"70\"\n          fxLayoutAlign=\"start stretch\"\n          [fxShow]=\"true\"\n          [fxHide]=\"false\"\n        ></div>\n        <div\n          fxLayout=\"column wrap\"\n          style=\"width: 100%; height: 100%;\"\n          fxFlex=\"30\"\n          fxLayoutAlign=\"center center\"\n          [fxShow]=\"true\"\n          [fxHide]=\"false\"\n        >\n          <img imgSrc=\"Web/image1.png\" width=\"70px\" />\n        </div>\n      </div>\n      <div\n        fxLayout=\"row wrap\"\n        style=\"width: 100%;\"\n        fxFlex=\"70\"\n        fxLayoutAlign=\"start stretch\"\n        [fxShow]=\"true\"\n        [fxHide]=\"false\"\n      >\n        <div\n          fxLayout=\"column wrap\"\n          style=\"width: 100%;\"\n          fxFlex=\"100\"\n          fxLayoutAlign=\"start stretch\"\n          [fxShow]=\"true\"\n          [fxHide]=\"false\"\n        >\n          <div\n            fxLayout=\"row wrap\"\n            style=\"width: 100%; margin-left: 10px;\"\n            fxFlex=\"50\"\n            fxLayoutAlign=\"start stretch\"\n            [fxShow]=\"true\"\n            [fxHide]=\"false\"\n          >\n            <div\n              style=\"\n                width: 100%;\n                color: #283552;\n                font-family: Poppins;\n                font-style: normal;\n                font-weight: 600;\n                font-size: 20px;\n                line-height: 30px; /* identical to box height */\n                letter-spacing: 0.5px;\n                text-transform: capitalize;\n              \"\n            >\n              {{locales.travel}}\n            </div>\n          </div>\n          <div\n            fxLayout=\"row wrap\"\n            style=\"width: 100%; margin-left: 10px;\"\n            fxFlex=\"50\"\n            fxLayoutAlign=\"start stretch\"\n            [fxShow]=\"true\"\n            [fxHide]=\"false\"\n          >\n            <img imgSrc=\"Images/Stepper4.png\" />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div\n    fxLayout=\"row wrap\"\n    style=\"margin-top: 10px;\"\n    fxLayoutAlign=\"start stretch\"\n    [fxShow]=\"true\"\n    [fxHide]=\"false\"\n  >\n    <div\n      fxLayout=\"column wrap\"\n      style=\"width:100%:\"\n      fxFlex=\"10\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    ></div>\n    <div\n      fxLayout=\"column wrap\"\n      style=\"width:100%:\"\n      fxFlex=\"80\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    >\n      <div class=\"question3\">\n        {{locales.question3}}\n      </div>\n    </div>\n    <div\n      fxLayout=\"column wrap\"\n      class=\"question3\"\n      fxFlex=\"10\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    ></div>\n  </div>\n  <div\n    fxLayout=\"row wrap\"\n    style=\"width: 100%;\"\n    fxFlex=\"10\"\n    fxLayoutAlign=\"start stretch\"\n    [fxShow]=\"true\"\n    [fxHide]=\"false\"\n  ></div>\n  <div\n    fxLayout=\"row wrap\"\n    style=\"width: 100%;\"\n    fxFlex=\"20\"\n    fxLayoutAlign=\"start stretch\"\n    [fxShow]=\"true\"\n    [fxHide]=\"false\"\n  >\n    <div\n      fxLayout=\"column wrap\"\n      style=\"width: 100%;\"\n      fxFlex=\"10\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    ></div>\n    <div\n      fxLayout=\"column wrap\"\n      style=\"width:100%:\"\n      fxFlex=\"80\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    >\n      <mat-radio-group (change)=\"onChangeRadio($event,3)\">\n        <mat-radio-button value=\"false\" required>NO</mat-radio-button>\n        <mat-radio-button value=\"true\" required>YES</mat-radio-button>\n      </mat-radio-group>\n    </div>\n    <div\n      fxLayout=\"column wrap\"\n      style=\"width: 100%;\"\n      fxFlex=\"10\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    ></div>\n  </div>\n  <div\n    fxLayout=\"row wrap\"\n    style=\"width: 100%; padding-top: 10px;\"\n    fxFlex=\"20\"\n    fxLayoutAlign=\"center stretch\"\n    [fxShow]=\"true\"\n    [fxHide]=\"false\"\n  >\n    <form\n      class=\"example-form\"\n      #healthForm=\"ngForm\"\n      [hidden]=\"!enableTextArea\"\n      style=\"width: 85%;\"\n    >\n      <mat-form-field class=\"example-full-width\">\n        <input\n          name=\"addlinfo\"\n          [(ngModel)]=\"addlinfo\"\n          matInput\n          #message\n          maxlength=\"256\"\n          placeholder=\"{{locales.inputhelp}}\"\n        />\n        <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\n      </mat-form-field>\n    </form>\n  </div>\n  <div\n    fxLayout=\"row wrap\"\n    style=\"width: 100%;\"\n    fxFlex=\"10\"\n    fxLayoutAlign=\"space-around end\"\n    [fxShow]=\"true\"\n    [fxHide]=\"false\"\n  >\n    <div\n      fxLayout=\"column wrap\"\n      fxLayoutAlign=\"start start\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    >\n      <label>\n        <button mat-button (click)=\"onBack()\">\n          <mat-icon>keyboard_arrow_left</mat-icon>{{locales.back}}\n        </button></label\n      >\n    </div>\n    <div\n      fxLayout=\"column wrap\"\n      style=\"width: 100%;\"\n      fxFlex=\"15\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    ></div>\n    <div\n      fxLayout=\"column wrap\"\n      style=\"margin-right: 10px;\"\n      fxLayoutAlign=\"end end\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    >\n      <button\n        mat-button\n        style=\"\n          width: 100px;\n          height: 50px;\n          color: #ffffff;\n          background: #5ea73e;\n          box-shadow: 1.13333px 7.93333px 23.8px rgba(94, 167, 62, 0.2);\n          border-radius: 44px;\n        \"\n        (click)=\"onNext(healthForm)\"\n      >\n        {{locales.continue}}\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/homeComponent/home.template.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/homeComponent/home.template.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <div fxLayout=\"column wrap\" style=\"background-color: #3D424E; height:100vh; width: 100vw;\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\" *ngIf=\"showSplash\"><img imgSrc=\"/Android/res/drawable/screen2.png\" alt=\"splash-image\" style=\"height:100vh;width:100vw;\"></div>\n  <bh-thankyou *ngIf=\"showThankYou\"></bh-thankyou>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/hrdashboardComponent/hrdashboard.template.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/hrdashboardComponent/hrdashboard.template.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column wrap\" style=\"display:flex; width:100%;height:100%;background-color:#F3F3F9;\" fxFlex=\"100\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <div fxLayout=\"row wrap\" style=\"width:100%; height:80px;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <mat-toolbar style=\"margin:5px;;padding:0;\">\n      <div fxLayout=\"column wrap\" style=\"width:100;height:100%;margin:5px;\" fxFlex=\"15\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"Web/locod1.png\" width=\"80\"></div>\n      <div fxLayout=\"column wrap\" style=\"width:100%;height:100%;\" fxFlex=\"65\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\">\n        <div style=\"margin-top:7px;color: #52575C;width:100%;height:100%;font-family: Poppins; font-style: normal; font-weight: 500; font-size: 30px; line-height: 51px; text-align: center; letter-spacing: 0.766667px; text-transform: uppercase;\">\n          {{locales.dashboard}}</div>\n      </div>\n      <div fxLayout=\"column wrap\" style=\"width:100%;height:100%;\" fxFlex=\"20\" fxLayoutAlign=\"start center\" [fxShow]=\"true\" [fxHide]=\"false\">\n        <div fxLayout=\"row wrap\" style=\"width:100%;height:100%\" fxLayoutGap=\"2px\" fxLayoutAlign=\"start center\" [fxShow]=\"true\" [fxHide]=\"false\">\n          <div fxLayout=\"column wrap\" fxFlex=\"33\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"Web/layer21.png\" style=\"width:25px;height:40px;\"></div>\n          <div fxLayout=\"column wrap\" fxFlex=\"33\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"Web/image1.png\" style=\"width:111;height:25;\"></div>\n          <div fxLayout=\"column wrap\" fxFlex=\"34\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><img></div>\n        </div>\n      </div>\n    </mat-toolbar>\n  </div>\n  <div fxLayout=\"row wrap\" style=\"width:100%; height:100%;\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"row wrap\" style=\"width:100%; height:200px;background: #5EA73E; border-radius: 39.4615px;\" fxFlex=\"80\" fxLayoutAlign=\"center none\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <div fxLayout=\"column wrap\" style=\"width:100%;height:100%;\" fxFlex=\"70\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\"><label style=\"margin-left:40px;color: #FFFFFF;letter-spacing: 0.789231px; text-transform: capitalize;width:100%;font-family: Poppins; font-style: normal; font-weight: 600; font-size: 15px; line-height: 47px;\">\n          {{locales.hrwelcome}}</label><label style=\"margin-left:40px;color: #FFFFFF;width:100%;font-family: Poppins; font-style: normal; font-weight: normal; font-size: 10px; line-height: 33px; letter-spacing: 0.789231px;\">\n          {{locales.hrmessage2}}</label></div>\n      <div fxLayout=\"column wrap\" style=\"width:100%;height:100%;\" fxFlex=\"30\" fxLayoutAlign=\"center start\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"Web/Group.png\" style=\"height:90px;\"></div>\n    </div>\n  </div>\n  <div fxLayout=\"row wrap\" style=\"width:100%;height:100px;\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center stretch\" [fxShow]=\"true\" [fxHide]=\"false\" fxLayout.xs=\"column\" fxFlexLayout.xs=\"column\"><label style=\"widht:100%; height:100%;\" class=\"filters\">\n      Filters</label><button mat-button style=\"background: #5EA73E;border-radius: 40.5882px; width:120px; height:40px;\" class=\"hrtextbutton\" (click)=\"dashboarddata()\">Global</button></div>\n  <div fxLayout=\"row wrap\" style=\"width:100%;\" fxFlex=\"50\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-around center\" [fxShow]=\"true\" [fxHide]=\"false\" fxLayout.xs=\"column\">\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxFlex=\"30\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\" fxFlexOrder fxFlexOrder.xs=\"1\">\n      <mat-card style=\"width:400px; height:200px; margin:0; padding:0;\">\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><label style=\"margin-top:15px;margin-left:15px;font-family: Poppins; font-style: normal; font-weight: 600; font-size: 18px; line-height: 27px; letter-spacing: 0.715116px; text-transform: uppercase;    color: #52575C;\" class=\"hrqrtext\">\n            {{locales.hrq1}}</label></div>\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n          <div fxLayout=\"column wrap\" fxFlex=\"70\" fxLayoutAlign=\"end start\" [fxShow]=\"true\" [fxHide]=\"false\">\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-around stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><label style=\"margin-left:25px;margin-bottom:30px;\" class=\"positive\">\n                {{locales.positive}}</label>\n              <div style=\"margin-left:30px;color: #EB5757;font-family: Poppins; font-style: normal; font-weight: 600; font-size: 18px; line-height: 27px; letter-spacing: 0.575093px; text-transform: uppercase;\">\n                {{q1postive}}</div>\n            </div>\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><label style=\"margin-left:25px;margin-bottom:30px;\" class=\"positive\">\n                {{locales.negative}}</label>\n              <div style=\"margin-left:20px;color: #5EA73E;font-family: Poppins; font-style: normal; font-weight: 600; font-size: 18px; line-height: 27px; letter-spacing: 0.575093px; text-transform: uppercase;\">\n                {{q1negative}}</div>\n            </div>\n          </div>\n          <div fxLayout=\"column wrap\" fxFlex=\"30\" fxLayoutAlign=\"end end\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"Web/Group_1.png\" style=\"margin-right:10px;margin-top:20px;\"></div>\n        </div>\n      </mat-card>\n    </div>\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxFlex=\"30\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\" fxFlexOrder fxFlexOrder.xs=\"2\">\n      <mat-card style=\"width:400px; height:200px; margin:0; padding:0;\">\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><label style=\"margin-top:15px;margin-left:15px;font-family: Poppins; font-style: normal; font-weight: 600; font-size: 18px; line-height: 27px; letter-spacing: 0.715116px; text-transform: uppercase;    color: #52575C;\">\n            {{locales.hrq2}}</label></div>\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n          <div fxLayout=\"column wrap\" fxFlex=\"70\" fxLayoutAlign=\"end start\" [fxShow]=\"true\" [fxHide]=\"false\">\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-around stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><label style=\"margin-left:25px;margin-bottom:30px;\" class=\"positive\">\n                {{locales.positive}}</label>\n              <div style=\"margin-left:30px;color: #EB5757;font-family: Poppins; font-style: normal; font-weight: 600; font-size: 18px; line-height: 27px; letter-spacing: 0.575093px; text-transform: uppercase;\">\n                {{q2postive}}</div>\n            </div>\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-around stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><label style=\"margin-left:25px;margin-bottom:30px;\" class=\"positive\">\n                {{locales.negative}}</label>\n              <div style=\"margin-left:20px;color: #5EA73E;font-family: Poppins; font-style: normal; font-weight: 600; font-size: 18px; line-height: 27px; letter-spacing: 0.575093px; text-transform: uppercase;\">\n                {{q2negative}}</div>\n            </div>\n          </div>\n          <div fxLayout=\"column wrap\" fxFlex=\"30\" fxLayoutAlign=\"end end\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"Web/Maskgroup.png\" style=\"margin-right:10px;margin-top:20px;\"></div>\n        </div>\n      </mat-card>\n    </div>\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxFlex=\"30\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\" fxFlexOrder fxFlexOrder.xs=\"3\">\n      <mat-card style=\"width:400px; height:200px;margin:0; padding:0;\">\n        <div fxLayout=\"row wrap\" style=\"margin-top:10px; margin-left:3px;\" fxLayoutAlign=\"start start\" [fxShow]=\"true\" [fxHide]=\"false\"><label style=\"margin-top:15px;margin-left:15px;font-family: Poppins; font-style: normal; font-weight: 600; font-size: 18px; line-height: 27px; letter-spacing: 0.715116px; text-transform: uppercase;    color: #52575C;\">\n            {{locales.hrq3}}</label></div>\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n          <div fxLayout=\"column wrap\" fxFlex=\"70\" fxLayoutAlign=\"end start\" [fxShow]=\"true\" [fxHide]=\"false\">\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><label style=\"margin-left:25px;margin-bottom:30px;\" class=\"positive\">\n                {{locales.positive}}</label><label style=\"margin-left:30px;color: #EB5757;font-family: Poppins; font-style: normal; font-weight: 600; font-size: 18px; line-height: 27px; letter-spacing: 0.575093px; text-transform: uppercase;\">\n                {{q3postive}}</label></div>\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><label style=\"margin-left:25px;margin-bottom:30px;\" class=\"positive\">\n                {{locales.negative}}</label>\n              <div style=\"margin-left:20px;color: #5EA73E;font-family: Poppins; font-style: normal; font-weight: 600; font-size: 18px; line-height: 27px; letter-spacing: 0.575093px; text-transform: uppercase;\">\n                {{q3negative}}</div>\n            </div>\n          </div>\n          <div fxLayout=\"column wrap\" fxFlex=\"30\" fxLayoutAlign=\"end end\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"Web/Frame.png\" style=\"margin-right:10px;margin-top:20px;\"></div>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/hrloginComponent/hrlogin.template.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/hrloginComponent/hrlogin.template.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column wrap\" style=\"display:flex;width:100%; height:100%;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <bh-logo></bh-logo>\n  <div fxLayout=\"row wrap\" style=\"width:100%; height:100px;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"column wrap\" fxFlex=\"15\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n    <div fxLayout=\"column wrap\" fxFlex=\"70\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"Web/locod1.png\" width=\"132\"></div>\n    <div fxLayout=\"column wrap\" fxFlex=\"15\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n  </div>\n  <div fxLayout=\"row wrap\" style=\"width:100%; height:40px;\" fxLayoutAlign=\"center stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"column wrap\" fxFlex=\"15\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n    <div fxLayout=\"column wrap\" fxFlex=\"70\" fxLayoutAlign=\"start center\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <div class=\"loginmessage\">\n        {{locales.loginmessage}}</div>\n    </div>\n    <div fxLayout=\"column wrap\" fxFlex=\"15\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n  </div>\n  <div fxLayout=\"row wrap\" style=\"width:100%; height:300px; \" fxLayoutGap=\"10px;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"column wrap\" fxFlex=\"15\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n    <div fxLayout=\"column wrap\" fxFlex=\"70\" fxLayoutAlign=\"start center\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <form style=\"display: inline-block\">\n        <mat-form-field style=\"width:100%;\" class=\"labelmessage\" [appearance]=\"&apos;outline&apos;\" [floatLabel]=\"&apos;auto&apos;\" [hideRequiredMarker]=\"false\">\n          <input matInput name=\"{{locales.username}}\" type=\"input\" required>\n          <mat-label>{{locales.username}}</mat-label>\n        </mat-form-field>\n        <mat-form-field style=\"width:100%;\" class=\"labelmessage\" [appearance]=\"&apos;outline&apos;\" [floatLabel]=\"&apos;auto&apos;\" [hideRequiredMarker]=\"false\">\n          <input matInput name=\"{{locales.password}}\" type=\"password\" placeholder=\"Input\" required>\n          <mat-label>{{locales.password}}</mat-label>\n        </mat-form-field><button mat-raised-button style=\"width:100%;background: #5EA73E; border-radius: 30px;\" routerLink=\"/hrdashboard\" color=\"primary\">Login</button>\n        <div fxLayout=\"row wrap\" style=\"width:100%;height:30px;\" fxLayoutAlign=\"space-around stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n          <mat-checkbox style=\"margin-top:15px;font-family: Poppins; font-style: normal; font-weight: normal; font-size: 15px; line-height: 16px;letter-spacing: 0.2px;color: #25282B;\" required>{{locales.rememberme}}</mat-checkbox>\n          <div fxLayout=\"column wrap\" fxFlex=\"30\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div><span style=\"height:30px;margin-top:12px;\" class=\"forgotpassword\">\n          {{locales.forgotpassword}}</span>\n        </div>\n      </form>\n    </div>\n    <div fxLayout=\"column wrap\" fxFlex=\"15\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landingpageComponent/landingpage.template.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landingpageComponent/landingpage.template.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column wrap\" style=\"width:100%;height:100%;\" fxFlex=\"100\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <bh-logo></bh-logo>\n  <div fxLayout=\"row wrap\" style=\"width:100%;height:60px;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxFlex=\"20\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxFlex=\"60\" fxLayoutAlign=\"start center\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <mat-form-field style=\"width:50%;solid #5EA73E; \">\n        <mat-label>Select Language</mat-label>\n        <mat-select (selectionChange)=\"doSomething($event)\">\n          <mat-option *ngFor=\"let language of languages\" [value]=\"language.value\">\n            {{language.viewValue}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxFlex=\"20\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n  </div>\n  <div fxLayout=\"row wrap\" style=\"width:100%; height:380px;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"column wrap\" style=\"width:100%; height:100%;\" fxFlex=\"10\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n    <div fxLayout=\"column wrap\" style=\"width:100%; height:100%;\" fxFlex=\"80\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"Web/Group1440.png\" style=\"width:300px;height:400px;\"></div>\n    <div fxLayout=\"column wrap\" style=\"width:100%; height:100%;\" fxFlex=\"10\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n  </div>\n  <div fxLayout=\"row wrap\" style=\"width:100%; height:50px;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"column wrap\" style=\"width:100%; height:100%;\" fxFlex=\"30\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n    <div fxLayout=\"column wrap\" style=\"width:100%; height:100%;\" fxFlex=\"40\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><label style=\"margin-top:10px;color: #5EA73E;width:100%;height:100%;font-family: Poppins; font-style: normal; font-weight: 600; font-size: 15px; line-height: 30px;  text-align: center; letter-spacing: 0.5px; text-transform: capitalize;\">\n        <button mat-button (click)=\"letStart()\">{{locales.start}}\n          <mat-icon>keyboard_arrow_right</mat-icon>\n        </button></label></div>\n    <div fxLayout=\"column wrap\" style=\"width:100%; height:100%;\" fxFlex=\"30\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n  </div>\n  <div fxLayout=\"row wrap\" style=\"width:100%; height:100px;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"column wrap\" style=\"width:100%; height:100%;\" fxFlex=\"15\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n    <div fxLayout=\"column wrap\" style=\"width:100%; height:100%;\" fxFlex=\"70\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <div fxLayout=\"row wrap\" style=\"width:100%; height:100%;\" fxFlex=\"100\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n        <div fxLayout=\"column wrap\" style=\"width:100%; height:100%;\" fxFlex=\"50\" fxLayoutAlign=\"center end\" [fxShow]=\"true\" [fxHide]=\"false\">\n          <div style=\"margin-bottom:60px;color: #25282B;align-items: center; letter-spacing: 0.2px;font-family: Poppins; font-style: normal; font-weight: normal; font-size: 11px; line-height: 16px;\">\n            {{locales.develop}}</div>\n        </div>\n        <div fxLayout=\"column wrap\" style=\"width:100%; height:100%;\" fxFlex=\"50\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"Web/logo031.png\" style=\"width:80px;height:40px;\"></div>\n      </div>\n    </div>\n    <div fxLayout=\"column wrap\" style=\"width:100%; height:100%;\" fxFlex=\"15\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/loginComponent/login.template.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/loginComponent/login.template.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column wrap\" style=\"display:flex; width:100%;height:700px;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <bh-logo></bh-logo>\n  <div fxLayout=\"row wrap\" style=\"width:100%;\" fxFlex=\"5\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n  <div fxLayout=\"row wrap\" style=\"width:100%;\" fxFlex=\"5\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxFlex=\"35\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxFlex=\"35\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n  </div>\n  <div fxLayout=\"row wrap\" style=\"width:100%;\" fxFlex=\"5\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n  <div fxLayout=\"row wrap\" style=\"color: #282E3A;width:100%;font-family: Poppins; font-style: normal; font-weight: normal; font-size: 14px; line-height: 21px; display: flex; align-items: center; text-align: center; letter-spacing: 0.4px;\" fxFlex=\"5\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxFlex=\"20\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxFlex=\"60\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <div>\n        {{locales.loginmessage}}</div>\n    </div>\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxFlex=\"20\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n  </div>\n  <div fxLayout=\"row wrap\" style=\"width:100%\" fxFlex=\"5\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n  <div fxLayout=\"row wrap\" style=\"width:100%;\" fxFlex=\"30\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxFlex=\"10\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n    <div fxLayout=\"column wrap\" style=\"width:100%;padding:10px;color: #282E3A;font-family: Poppins; font-style: normal; font-weight: normal; font-size: 17px; line-height: 26px; display: flex; align-items: center; text-align: center; letter-spacing: 0.4px;\" fxFlex=\"80\" fxLayoutAlign=\"start center\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <form #form=\"ngForm\" style=\"width:100%; height:100%;\" class=\"form-group\" (ngSubmit)=\"login(form)\">\n        <mat-form-field style=\"width:100%;\" [appearance]=\"&apos;legacy&apos;\" [floatLabel]=\"&apos;auto&apos;\" [hideRequiredMarker]=\"false\">\n          <input matInput name=\"email\" type=\"text\" required ngModel>\n          <mat-label>{{locales.username}}</mat-label>\n        </mat-form-field>\n        <mat-form-field style=\"width:100%;\" [appearance]=\"&apos;legacy&apos;\" [floatLabel]=\"&apos;auto&apos;\" [hideRequiredMarker]=\"false\">\n          <input matInput name=\"password\" type=\"password\" required ngModel>\n          <mat-label>{{locales.password}}</mat-label>\n        </mat-form-field><button mat-button style=\"width:150px;height:50px;color: #FFFFFF;background: #5EA73E; box-shadow: 1.13333px 7.93333px 23.8px rgba(94, 167, 62, 0.2); border-radius: 44px;\" (click)=\"login(form)\" type=\"submit\" routerLink=\"/confirmdetails\">{{locales.login}}</button>\n      </form>\n    </div>\n    <div fxLayout=\"column wrap\" style=\"width:100%\" fxFlex=\"10\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n  </div>\n  <div fxLayout=\"row wrap\" style=\"width:100%;\" fxFlex=\"5\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n  <div fxLayout=\"row wrap\" style=\"width:100%;\" fxFlex=\"10\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxFlex=\"20\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxFlex=\"20\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/logoComponent/logo.template.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/logoComponent/logo.template.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column wrap\" style=\"margin-top: 30px;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <div fxLayout=\"row wrap\" style=\"width:100%;padding-left: 5px;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxFlex=\"20\" fxLayoutAlign=\"start start\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"Web/ingredionlogo.png\" style=\"align-self:center;width:60px;margin-top:5px;\"></div>\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxFlex=\"60\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"Web/Carefirst.jpg\" style=\"align-self:center;height: 60px;\"></div>\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxFlex=\"20\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"Web/Fit4digital.png\" style=\"align-self:center; width: 100px;\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pageinformationComponent/pageinformation.template.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pageinformationComponent/pageinformation.template.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  fxLayout=\"column wrap\"\n  style=\"width: 100px; height: 560px;\"\n  fxFlex=\"100\"\n  fxLayoutAlign=\"start stretch\"\n  [fxShow]=\"true\"\n  [fxHide]=\"false\"\n>\n  <div\n    fxLayout=\"row wrap\"\n    style=\"width: 100%; height: 100%;\"\n    fxFlex=\"20\"\n    fxLayoutAlign=\"start stretch\"\n    [fxShow]=\"true\"\n    [fxHide]=\"false\"\n  >\n    <div\n      fxLayout=\"column wrap\"\n      style=\"width: 100px; height: 100%;\"\n      fxFlex=\"100\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    >\n      <div\n        fxLayout=\"row wrap\"\n        style=\"width: 100%;\"\n        fxFlex=\"20\"\n        fxLayoutAlign=\"start stretch\"\n        [fxShow]=\"true\"\n        [fxHide]=\"false\"\n      >\n        <div\n          fxLayout=\"column wrap\"\n          style=\"width: 100%; height: 100%;\"\n          fxFlex=\"70\"\n          fxLayoutAlign=\"start stretch\"\n          [fxShow]=\"true\"\n          [fxHide]=\"false\"\n        ></div>\n        <div\n          fxLayout=\"column wrap\"\n          style=\"width: 100%; height: 100%;\"\n          fxFlex=\"30\"\n          fxLayoutAlign=\"start stretch\"\n          [fxShow]=\"true\"\n          [fxHide]=\"false\"\n        >\n          <img imgSrc=\"Images\\image1.png\" style=\"margin-top: 5px;\" />\n        </div>\n      </div>\n      <div\n        fxLayout=\"row wrap\"\n        style=\"width: 100%; heiht: 100%;\"\n        fxFlex=\"20\"\n        fxLayoutAlign=\"start stretch\"\n        [fxShow]=\"true\"\n        [fxHide]=\"false\"\n      >\n        <label\n          style=\"\n            margin-left: 15px;\n            color: #283552;\n            font-family: Poppins;\n            font-style: normal;\n            font-weight: 600;\n            font-size: 20px;\n            line-height: 30px; /* identical to box height */\n            letter-spacing: 0.5px;\n            text-transform: capitalize;\n          \"\n        >\n          {{locales.personalinformation}}</label\n        >\n      </div>\n      <div\n        fxLayout=\"row wrap\"\n        style=\"width: 100%;\"\n        fxFlex=\"20\"\n        fxLayoutAlign=\"start stretch\"\n        [fxShow]=\"true\"\n        [fxHide]=\"false\"\n      >\n        <img imgSrc=\"Images\\step1.png\" style=\"margin-left: 15px;\" />\n      </div>\n    </div>\n  </div>\n  <div\n    fxLayout=\"row wrap\"\n    style=\"width: 100%; height: 400px;\"\n    fxFlex=\"50\"\n    fxLayoutAlign=\"start stretch\"\n    [fxShow]=\"true\"\n    [fxHide]=\"false\"\n  >\n    <div\n      fxLayout=\"column wrap\"\n      style=\"width: 100%; height: 100%; margin-left: 15px;\"\n      fxFlex=\"90\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    >\n      <form #personalInfo=\"ngForm\" style=\"width: 100%; height: 100%;\">\n        <mat-form-field\n          style=\"\n            width: 100%;\n            font-family: Poppins;\n            font-style: normal;\n            font-weight: normal;\n            font-size: 13px;\n            line-height: 19px;\n            letter-spacing: 0.5px;\n          \"\n          [appearance]=\"'legacy'\"\n          [floatLabel]=\"'auto'\"\n          [hideRequiredMarker]=\"false\"\n        >\n          <input\n            matInput\n            [(ngModel)]=\"firstname\"\n            name=\"firstname\"\n            type=\"text\"\n            placeholder=\"{{locales.firstname}}\"\n            required\n            #FirstName=\"ngModel\"\n            [ngModelOptions]=\"{updateOn:'change'}\"\n            pattern=\"[a-zA-Z\\s]+$\"\n          />\n        </mat-form-field>\n        <div\n          *ngIf=\"FirstName.errors  &amp;&amp;  (FirstName.dirty || FirstName.touched || validclick)\"\n          style=\"\n            font-family: Poppins;\n            font-style: normal;\n            font-weight: normal;\n            font-size: 13px;\n            line-height: 19px;\n            letter-spacing: 0.5px;\n          \"\n        >\n          <span *ngIf=\"FirstName.errors.required\">\n            <small style=\"color: red; font-family: Poppins; font-style: normal;\"\n              >{{locales.fir}}</small\n            > </span\n          ><span *ngIf=\"FirstName.errors.pattern\">\n            <small style=\"color: red; font-family: Poppins; font-style: normal;\"\n              >{{locales.pocs}}</small\n            >\n          </span>\n        </div>\n        <mat-form-field\n          style=\"width: 100%;\"\n          [appearance]=\"'legacy'\"\n          [floatLabel]=\"'auto'\"\n          [hideRequiredMarker]=\"false\"\n        >\n          <input\n            matInput\n            [(ngModel)]=\"lastname\"\n            name=\"lastname\"\n            type=\"text\"\n            placeholder=\"{{locales.lastname}}\"\n            required\n            #LastName=\"ngModel\"\n            [ngModelOptions]=\"{updateOn:'change'}\"\n            pattern=\"[a-zA-Z\\s]+$\"\n          />\n        </mat-form-field>\n        <div\n          *ngIf=\"LastName.errors  &amp;&amp;  (LastName.dirty || LastName.touched || validclick)\"\n        >\n          <span *ngIf=\"LastName.errors.required\">\n            <small style=\"color: red; font-family: Poppins; font-style: normal;\"\n              >{{locales.lir}}</small\n            ></span\n          ><span *ngIf=\"LastName.errors.pattern\">\n            <small style=\"color: red; font-family: Poppins; font-style: normal;\"\n              >{{locales.pocs}}</small\n            ></span\n          >\n        </div>\n        <mat-form-field\n          style=\"font-family: Poppins; font-style: normal; width: 100%;\"\n          [appearance]=\"'legacy'\"\n          [floatLabel]=\"'auto'\"\n          [hideRequiredMarker]=\"false\"\n        >\n          <input\n            matInput\n            [(ngModel)]=\"locationName\"\n            name=\"locationName\"\n            type=\"text\"\n            placeholder=\"{{locales.Location}}\"\n            required\n            #location=\"ngModel\"\n            (ngModelChange)=\"locationFilter()\"\n            [ngModelOptions]=\"{updateOn:'change'}\"\n            pattern=\"[a-zA-Z0-9\\s]+$\"\n            [matAutocomplete]=\"auto\"\n          />\n        </mat-form-field>\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option\n            *ngFor=\"let location of updatelocations\"\n            [value]=\"location.locationName\"\n          >\n            {{location.locationName}}\n          </mat-option>\n        </mat-autocomplete>\n        <div\n          *ngIf=\"location.errors &amp;&amp; (location.dirty || location.touched || validclick)\"\n        >\n          <span *ngIf=\"location.errors.required\"> {{locales.lr}}</span\n          ><span *ngIf=\"location.errors.pattern\"> {{locales.pocs}}</span>\n        </div>\n        <mat-form-field style=\"width: 100%;\">\n          <mat-label>Classify User</mat-label>\n          <mat-select\n            (selectionChange)=\"selectUser($event)\"\n            [(ngModel)]=\"type\"\n            name=\"type\"\n          >\n            <mat-option *ngFor=\"let user of usertypes\" [value]=\"user.type\">\n              {{user.type}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </form>\n    </div>\n    <div\n      fxLayout=\"column wrap\"\n      style=\"width: 100%; height: 100%;\"\n      fxFlex=\"10\"\n      fxLayoutAlign=\"start stretch\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    ></div>\n  </div>\n  <div\n    fxLayout=\"row wrap\"\n    style=\"width: 100%;\"\n    fxFlex=\"30\"\n    fxLayoutAlign=\"start stretch\"\n    [fxShow]=\"true\"\n    [fxHide]=\"false\"\n  >\n    <div\n      fxLayout=\"column wrap\"\n      style=\"width: 100%;\"\n      fxFlex=\"50\"\n      fxLayoutAlign=\"center center\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    ></div>\n    <div\n      fxLayout=\"column wrap\"\n      style=\"width: 100%;\"\n      fxFlex=\"50\"\n      fxLayoutAlign=\"start end\"\n      [fxShow]=\"true\"\n      [fxHide]=\"false\"\n    >\n      <button\n        mat-button\n        style=\"\n          margin-top: 50px;\n          margin-right: 20px;\n          color: #ffffff;\n          height: 60px;\n          width: 134px;\n          font-family: Poppins;\n          font-style: normal;\n          font-weight: 600;\n          background: #5ea73e;\n          box-shadow: 1.13333px 7.93333px 23.8px rgba(94, 167, 62, 0.2);\n          border-radius: 44px;\n        \"\n        (click)=\"personalInfoSubmit(personalInfo)\"\n        type=\"submit\"\n      >\n        {{locales.cont}}\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/splashComponent/splash.template.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/splashComponent/splash.template.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column wrap\" style=\"width:100%;height:100%;background-color:#3D424E;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <div fxLayout=\"row wrap\" style=\"width:100%;\" fxFlex=\"100\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"Web/Logo.png\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/thankyouComponent/thankyou.template.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/thankyouComponent/thankyou.template.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column wrap\" style=\"min-height:100vh;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n  <bh-logo></bh-logo>\n  <div fxLayout=\"column wrap\" style=\"margin:auto;\" fxLayoutAlign=\"start center\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <mat-icon class=\"bg-green done-icon\" *ngIf=\"!isAmber\">done</mat-icon>\n      <mat-icon class=\"bg-amber done-icon\" *ngIf=\"isAmber\">done</mat-icon>\n    </div>\n    <div fxLayout=\"row wrap\" style=\"width:100%;\" fxLayoutAlign=\"center stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <div fxLayout=\"column wrap\" style=\"width:100%;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n        <div style=\"color: #283552;text-align: center; letter-spacing: 0.5px; text-transform: capitalize;width:100%;font-family: Poppins; font-style: normal; font-weight: 600; font-size: 20px; line-height: 30px;\">\n          {{locales.thankyou}}</div>\n      </div>\n    </div>\n    <div fxLayout=\"row wrap\" style=\"width:100%;\" fxLayoutAlign=\"center stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <div style=\"color: #283552;width:60%;font-family: Poppins; font-style: normal; font-weight: normal; font-size: 11px; line-height: 16px; text-align: center; letter-spacing: 0.5px; text-transform: capitalize;\">\n        {{locales.thankyoumessage}}\n\n        <div style=\"font-size: 20px; margin-top: 30px; font-weight: 600;\">{{today}}</div>\n      </div>\n    </div>\n  </div>\n  <div fxLayout=\"column wrap\" style=\"margin-top:auto;margin-bottom:30px;\" fxLayoutAlign=\"start stretch\" [fxShow]=\"true\" [fxHide]=\"false\">\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\">\n      <div style=\"color: #25282B;font-family: Poppins; font-style: normal; font-weight: normal; font-size: 14px; line-height: 16px;\">\n        {{locales.developedby}}</div>\n    </div>\n    <div fxLayout=\"column wrap\" style=\"width:100%;\" fxLayoutAlign=\"center center\" [fxShow]=\"true\" [fxHide]=\"false\"><img imgSrc=\"Web/logo031.png\" style=\"width:100px; height:50px;\"></div>\n  </div>\n</div>"

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

/***/ "./src/app/components/certifyinformationComponent/certifyinformation.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/certifyinformationComponent/certifyinformation.component.ts ***!
  \****************************************************************************************/
/*! exports provided: certifyinformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "certifyinformationComponent", function() { return certifyinformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/datasharing/datasharing.service */ "./src/app/services/datasharing/datasharing.service.ts");
/* harmony import */ var _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/masterdata/masterdata.service */ "./src/app/services/masterdata/masterdata.service.ts");
/* harmony import */ var app_sd_services_saveuserresponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/sd-services/saveuserresponse */ "./src/app/sd-services/saveuserresponse.ts");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/




/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/
/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/


var certifyinformationComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](certifyinformationComponent, _super);
    function certifyinformationComponent(router, masterdata, saveuserService, datasharingService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.masterdata = masterdata;
        _this.saveuserService = saveuserService;
        _this.datasharingService = datasharingService;
        // get the previously selected language from local storage
        // set the language if selected
        var language = window.localStorage.getItem('language');
        if (language) {
            _this.localeService.language = language;
        }
        return _this;
    }
    certifyinformationComponent.prototype.ngOnInit = function () { };
    /**
     * Function name: signSubmit
     * @Input: JSON data {signature and Acceptance }
     * @Output:JSON data { response 201 / error}
     * @Desc: This function collects the data from user and posts into Information Collection db
     * @error: 500 Internal server error / 404 - method not found
     */
    certifyinformationComponent.prototype.signSubmit = function (data) {
        var _this = this;
        this.validclick = true;
        console.log(data.value);
        if (data.valid === true) {
            this.validclick = false;
            var certifyInfoName = data.value.signature;
            var certifyInfoChecked = data.value.accept;
            this.masterdata.certifyInfoName = data.value.signature;
            this.masterdata.certifyInfoChecked = data.value.accept;
            localStorage.setItem('certifyInfoName', data.value.signature);
            localStorage.setItem('certifyInfoChecked', data.value.accept);
            this.masterdata.userSubmit().then(function (resp) {
                console.log('certt resp', resp);
                // get the color code for thank you page
                var isGreen = resp.response.every(function (v) { return v.answer === false; });
                if (isGreen) {
                    localStorage.setItem('colorCode', 'green');
                }
                else {
                    localStorage.setItem('colorCode', 'amber');
                }
                // navigate to the thankyou page
                _this.router.navigate(['/thankyou']);
            }).catch(function (err) {
                console.log('cert err', err);
            });
        }
        else {
            if (this.accept == undefined) {
                this.datasharingService.openSnackBar('Please select Terms and Conditions', "X");
            }
            else {
                this.datasharingService.openSnackBar('Please provide required information', "X");
            }
        }
    };
    certifyinformationComponent.prototype.onBack = function () {
        this.router.navigate(['/hinfonext']);
    };
    certifyinformationComponent.prototype.navigatePrev = function () {
        alert('I am navigating to previous page');
    };
    certifyinformationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_5__["masterdataService"] },
        { type: app_sd_services_saveuserresponse__WEBPACK_IMPORTED_MODULE_6__["saveuserresponse"] },
        { type: app_services_datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_4__["datasharingService"] }
    ]; };
    certifyinformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-certifyinformation',
            template: __webpack_require__(/*! raw-loader!./certifyinformation.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/certifyinformationComponent/certifyinformation.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_5__["masterdataService"], app_sd_services_saveuserresponse__WEBPACK_IMPORTED_MODULE_6__["saveuserresponse"], app_services_datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_4__["datasharingService"]])
    ], certifyinformationComponent);
    return certifyinformationComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/confirmdetailsComponent/confirmdetails.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/confirmdetailsComponent/confirmdetails.component.ts ***!
  \********************************************************************************/
/*! exports provided: confirmdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmdetailsComponent", function() { return confirmdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/datasharing/datasharing.service */ "./src/app/services/datasharing/datasharing.service.ts");
/* harmony import */ var app_sd_services_userdetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/sd-services/userdetails */ "./src/app/sd-services/userdetails.ts");
/* harmony import */ var app_sd_services_saveuserresponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/sd-services/saveuserresponse */ "./src/app/sd-services/saveuserresponse.ts");
/* harmony import */ var _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/masterdata/masterdata.service */ "./src/app/services/masterdata/masterdata.service.ts");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/





/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

var confirmdetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](confirmdetailsComponent, _super);
    function confirmdetailsComponent(router, userdataservice, getlocation, datash, masterdata, datasharingService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.userdataservice = userdataservice;
        _this.getlocation = getlocation;
        _this.datash = datash;
        _this.masterdata = masterdata;
        _this.datasharingService = datasharingService;
        _this.defaultLocationName = "Westchester";
        // get the previously selected language from local storage
        // set the language if selected
        var language = window.localStorage.getItem("language");
        if (language) {
            _this.localeService.language = language;
        }
        return _this;
    }
    confirmdetailsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var bh, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.locationName = this.defaultLocationName.slice(0);
                        this.phone = "817930010987";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.getlocation.getLocations()];
                    case 2:
                        bh = _a.sent();
                        console.log(bh);
                        console.log(bh.local.result);
                        this.updatelocations = bh.local.result;
                        this.totallocations = this.updatelocations;
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
    /**
     * Function name: onSubmit
     * @Input: JSON data {locationName, phone}
     * @Output:JSON data { response 201 / error}
     * @Desc: This function collects the locationname and phonenumber from user and posts into db
     * @error: 500 Internal server error / 404 - method not found
     */
    confirmdetailsComponent.prototype.onSubmit = function (data) {
        var _this = this;
        this.validclick = true;
        console.log(data.value);
        console.log(this.defaultLocationName, data.value.locationName);
        if (data.valid === true) {
            for (var i = 0; i <= this.totallocations.length; i++) {
                if ((this.totallocations[i] &&
                    this.totallocations[i].locationName === this.locationName) ||
                    this.defaultLocationName === data.value.locationName) {
                    console.log("valid success");
                    this.masterdata.locationName = data.value.locationName;
                    this.masterdata.phone = data.value.phone;
                    this.masterdata.locationNameTwo = data.value.locationName;
                    this.masterdata.userType = data.value.type;
                    var confirmdetailsObj = {
                        email: "bhsarat@gmail.com",
                        locationName: this.masterdata.locationName,
                        phone: this.masterdata.phone,
                    };
                    //calling confirm details api
                    this.userdataservice
                        .userDetails(confirmdetailsObj)
                        .then(function (result) {
                        console.log(result);
                        _this.router.navigate(["/healthinfo"]);
                    })
                        .catch(function (err) {
                        console.log("error", err);
                    });
                    localStorage.setItem("locationName", confirmdetailsObj.locationName);
                    localStorage.setItem("phone", confirmdetailsObj.phone);
                    break;
                }
            }
            this.validclick = false;
        }
    };
    confirmdetailsComponent.prototype.locationFilter = function () {
        this.updatelocations = this.filter(this.totallocations);
    };
    confirmdetailsComponent.prototype.filter = function (values) {
        var _this = this;
        // console.log(values);
        return values.filter(function (location) {
            return location.locationName.includes(_this.locationName);
        });
    };
    confirmdetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_sd_services_userdetails__WEBPACK_IMPORTED_MODULE_5__["userdetails"] },
        { type: app_sd_services_saveuserresponse__WEBPACK_IMPORTED_MODULE_6__["saveuserresponse"] },
        { type: app_services_datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_4__["datasharingService"] },
        { type: _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_7__["masterdataService"] },
        { type: app_services_datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_4__["datasharingService"] }
    ]; };
    confirmdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bh-confirmdetails",
            template: __webpack_require__(/*! raw-loader!./confirmdetails.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/confirmdetailsComponent/confirmdetails.template.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            app_sd_services_userdetails__WEBPACK_IMPORTED_MODULE_5__["userdetails"],
            app_sd_services_saveuserresponse__WEBPACK_IMPORTED_MODULE_6__["saveuserresponse"],
            app_services_datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_4__["datasharingService"],
            _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_7__["masterdataService"],
            app_services_datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_4__["datasharingService"]])
    ], confirmdetailsComponent);
    return confirmdetailsComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/contactinformationComponent/contactinformation.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/contactinformationComponent/contactinformation.component.ts ***!
  \****************************************************************************************/
/*! exports provided: contactinformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactinformationComponent", function() { return contactinformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/masterdata/masterdata.service */ "./src/app/services/masterdata/masterdata.service.ts");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/



/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/
var contactinformationComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](contactinformationComponent, _super);
    function contactinformationComponent(router, masterdata) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.masterdata = masterdata;
        // get the previously selected language from local storage
        // set the language if selected
        var language = window.localStorage.getItem('language');
        if (language) {
            _this.localeService.language = language;
        }
        return _this;
    }
    contactinformationComponent.prototype.ngOnInit = function () {
    };
    /**
     * Function Name: onBlurEmail
     * Input: Email
     * Output: Boolean true or false
     *
     */
    contactinformationComponent.prototype.onBlurEmail = function (email) {
        if (email) {
            var EmailId = email.toString().toLowerCase();
        }
        this.emailvalidation = false; // default we keep as false once the email is found in database records we make it to true
        var regexp = new RegExp('([A-Za-z]|[0-9])[A-Za-z0-9.]+[A-Za-z0-9]@((?:[-a-z0-9]+\.)+[a-z]{2,})');
        if (regexp.test(EmailId)) {
            console.log(EmailId);
        }
    };
    /**
     * Function name: contactSubmit
     * @Input: JSON data {Email, phone,Companyname,IngredIon Contact }
     * @Output:JSON data { response 201 / error}
     * @Desc: This function collects the data from user and posts into Information Collection db
     * @error: 500 Internal server error / 404 - method not found
     */
    contactinformationComponent.prototype.contactSubmit = function (data) {
        this.validclick = true;
        console.log(data.value);
        if (data.valid === true) {
            this.masterdata.email = data.value.email;
            this.masterdata.phone = data.value.phone;
            this.masterdata.company = data.value.company;
            this.masterdata.ingredionContact = data.value.ingredionContact;
            this.router.navigate(['/healthinfo']);
            this.validclick = false;
        }
    };
    contactinformationComponent.prototype.navigatePrev = function () {
        this.router.navigate(['/personalinfo']);
    };
    contactinformationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_4__["masterdataService"] }
    ]; };
    contactinformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-contactinformation',
            template: __webpack_require__(/*! raw-loader!./contactinformation.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/contactinformationComponent/contactinformation.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_4__["masterdataService"]])
    ], contactinformationComponent);
    return contactinformationComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/healthinfoComponent/healthinfo.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/healthinfoComponent/healthinfo.component.ts ***!
  \************************************************************************/
/*! exports provided: healthinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "healthinfoComponent", function() { return healthinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/datasharing/datasharing.service */ "./src/app/services/datasharing/datasharing.service.ts");
/* harmony import */ var _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/masterdata/masterdata.service */ "./src/app/services/masterdata/masterdata.service.ts");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/



/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/
/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/


var healthinfoComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](healthinfoComponent, _super);
    function healthinfoComponent(router, masterdata, datasharingService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.masterdata = masterdata;
        _this.datasharingService = datasharingService;
        _this.answer = '';
        _this.shortTextOne = "had fever";
        _this.shortTextTwo = "had Personal Contact";
        _this.showError = false;
        // get the previously selected language from local storage
        // set the language if selected
        var language = window.localStorage.getItem('language');
        if (language) {
            _this.localeService.language = language;
        }
        return _this;
    }
    healthinfoComponent.prototype.ngOnInit = function () { };
    healthinfoComponent.prototype.onChangeRadio = function (e, questionIndex) {
        console.log('onChangeRadio called...');
        console.log("Question Index", questionIndex);
        this.val1 = e.value;
        this.answer = this.val1;
        console.log("ths.ans", this.val1);
        if (questionIndex == '1') {
            this.masterdata.answer1 = this.val1;
            this.masterdata.questionId = questionIndex;
            this.masterdata.shortTextOne = this.shortTextOne;
            localStorage.setItem('answer1', JSON.stringify({ "questionId": this.masterdata.questionId,
                "answer": this.masterdata.answer1,
                "shortText": this.shortTextOne
            }));
        }
    };
    healthinfoComponent.prototype.onChangeRadioTwo = function (e, questionIndex) {
        console.log('onChangeRadio2 called...');
        console.log("Question Index", questionIndex);
        this.val2 = e.value;
        this.answer = this.val2;
        console.log("ths.ans", this.val2);
        if (questionIndex == '2') {
            this.masterdata.answer2 = this.val2;
            this.masterdata.questionId2 = questionIndex;
            this.masterdata.shortTextTwo = this.shortTextTwo;
            localStorage.setItem('answer2', JSON.stringify({ "questionId": this.masterdata.questionId2,
                "answer": this.masterdata.answer2,
                "shortText": this.shortTextTwo
            }));
        }
    };
    healthinfoComponent.prototype.onBack = function () {
        this.router.navigate(['/landingpage']);
    };
    healthinfoComponent.prototype.onNext = function () {
        console.log('val1', this.val1, 'val2', this.val2);
        if (this.val1 && this.val2) {
            this.router.navigate(['/hinfonext']);
        }
        else {
            this.datasharingService.openSnackBar('Please answer for questions', 'X');
        }
    };
    healthinfoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_5__["masterdataService"] },
        { type: app_services_datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_4__["datasharingService"] }
    ]; };
    healthinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-healthinfo',
            template: __webpack_require__(/*! raw-loader!./healthinfo.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/healthinfoComponent/healthinfo.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_5__["masterdataService"], app_services_datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_4__["datasharingService"]])
    ], healthinfoComponent);
    return healthinfoComponent;
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
/* harmony import */ var _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/masterdata/masterdata.service */ "./src/app/services/masterdata/masterdata.service.ts");
/* harmony import */ var app_services_datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/datasharing/datasharing.service */ "./src/app/services/datasharing/datasharing.service.ts");

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
    function healthinfonextComponent(router, masterdata, datasharingService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.masterdata = masterdata;
        _this.datasharingService = datasharingService;
        _this.answer = "";
        _this.shortTextThree = "Travelled Outside Country";
        _this.enableTextArea = false;
        // get the previously selected language from local storage
        // set the language if selected
        var language = window.localStorage.getItem("language");
        if (language) {
            _this.localeService.language = language;
        }
        return _this;
    }
    healthinfonextComponent.prototype.ngOnInit = function () { };
    //question :boolean = false;
    healthinfonextComponent.prototype.onChangeRadio = function (e, questionIndex) {
        console.log("onChangeRadio called...");
        console.log("Question Index", questionIndex);
        this.val3 = e.value;
        this.answer = this.val3;
        // if(this.answer == YES){
        //     this.question = true;
        // }
        console.log(this.val3);
        if (questionIndex == "3") {
            if (e.value == "true") {
                this.enableTextArea = true;
            }
            else {
                this.enableTextArea = false;
            }
            this.masterdata.answer3 = this.val3;
            this.masterdata.questionId3 = questionIndex;
            this.masterdata.shortTextThree = this.shortTextThree;
            localStorage.setItem("answer3", JSON.stringify({
                questionId: this.masterdata.questionId3,
                answer: this.masterdata.answer1,
                shortText: this.shortTextThree,
                addlInfo: this.masterdata.addlInfo,
            }));
        }
    };
    healthinfonextComponent.prototype.onBack = function () {
        this.router.navigate(["/healthinfo"]);
    };
    healthinfonextComponent.prototype.onNext = function (form) {
        console.log(this.val3);
        this.masterdata.addlInfo = form.value.addlinfo;
        if (this.val3 != undefined && (this.val3 || !this.val3)) {
            console.log(this.val3);
            if (this.val3 == "true") {
                console.log(form.value.addlinfo, typeof this.val3);
                if (this.val3 == "true" && form.value.addlinfo != undefined) {
                    this.router.navigate(["/certifyinfo"]);
                }
                else if (form.value.addlinfo == undefined) {
                    this.datasharingService.openSnackBar("Please answer locations", "X");
                }
            }
            else {
                console.log("im here ");
                this.router.navigate(["/certifyinfo"]);
            }
        }
        else {
            this.datasharingService.openSnackBar("Please select option ", "X");
        }
    };
    healthinfonextComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_4__["masterdataService"] },
        { type: app_services_datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_5__["datasharingService"] }
    ]; };
    healthinfonextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bh-healthinfonext",
            template: __webpack_require__(/*! raw-loader!./healthinfonext.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/healthinfonextComponent/healthinfonext.template.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_4__["masterdataService"],
            app_services_datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_5__["datasharingService"]])
    ], healthinfonextComponent);
    return healthinfonextComponent;
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
/* harmony import */ var app_sd_services_saveuserresponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/sd-services/saveuserresponse */ "./src/app/sd-services/saveuserresponse.ts");

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
    function homeComponent(userService, router) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this.router = router;
        _this.showSplash = true;
        _this.showThankYou = false;
        return _this;
    }
    homeComponent.prototype.ngOnInit = function () {
        this.fetchUserResponse();
    };
    // check if the user has submitted response for the day
    // if user has submitted already then we set showThankYou = true
    // otherwise showLanding = true
    homeComponent.prototype.fetchUserResponse = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var username, bh, hasSubmitted, colorCode, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        username = localStorage.getItem('username');
                        if (!username) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.userService.getIfUserSubmitted(username)];
                    case 1:
                        bh = _a.sent();
                        console.log(bh);
                        hasSubmitted = "no";
                        colorCode = "green";
                        if (bh.local && bh.local.result) {
                            hasSubmitted = bh.local.result.updated;
                            colorCode = bh.local.result.colorCode;
                        }
                        // save the colorCode in localStorage
                        window.localStorage.setItem('colorCode', colorCode);
                        // hide splash screen
                        this.showSplash = false;
                        // when user already submitted show Thank You screen 
                        if (hasSubmitted === "yes") {
                            this.showThankYou = true;
                            return [2 /*return*/];
                        }
                        // otherwise show landing page 
                        this.router.navigate(['/landingpage']);
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
    homeComponent.ctorParameters = function () { return [
        { type: app_sd_services_saveuserresponse__WEBPACK_IMPORTED_MODULE_4__["saveuserresponse"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    homeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-home',
            template: __webpack_require__(/*! raw-loader!./home.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/homeComponent/home.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_sd_services_saveuserresponse__WEBPACK_IMPORTED_MODULE_4__["saveuserresponse"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], homeComponent);
    return homeComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/hrdashboardComponent/hrdashboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/hrdashboardComponent/hrdashboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: hrdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrdashboardComponent", function() { return hrdashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");
/* harmony import */ var app_sd_services_hrdashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/sd-services/hrdashboard */ "./src/app/sd-services/hrdashboard.ts");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/


/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';

*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/
var hrdashboardComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](hrdashboardComponent, _super);
    function hrdashboardComponent(hrdashboard) {
        var _this = _super.call(this) || this;
        _this.hrdashboard = hrdashboard;
        _this.name = "Angular";
        _this.foods = [
            { value: "steak-0", viewValue: "Steak" },
            { value: "pizza-1", viewValue: "Pizza" },
            { value: "tacos-2", viewValue: "Tacos" },
        ];
        var language = window.localStorage.getItem("language");
        if (language) {
            _this.localeService.language = language;
        }
        return _this;
    }
    hrdashboardComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dashboard, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.hrdashboard.hrDashboard()];
                    case 1:
                        dashboard = _a.sent();
                        this.q2postive = dashboard.local.result.q1_count.postive[0].postive.toString();
                        this.q2negative = dashboard.local.result.q1_count.negative[0].negative;
                        //q2
                        this.q3postive = dashboard.local.result.q2_count.positive[0].postive;
                        this.q3negative = dashboard.local.result.q2_count.negative[0].negative;
                        //q3
                        this.q1postive = dashboard.local.result.q3_count.positive[0].postive;
                        this.q1negative = dashboard.local.result.q3_count.negative[0].negative;
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
    hrdashboardComponent.ctorParameters = function () { return [
        { type: app_sd_services_hrdashboard__WEBPACK_IMPORTED_MODULE_3__["hrdashboard"] }
    ]; };
    hrdashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bh-hrdashboard",
            template: __webpack_require__(/*! raw-loader!./hrdashboard.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/hrdashboardComponent/hrdashboard.template.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_sd_services_hrdashboard__WEBPACK_IMPORTED_MODULE_3__["hrdashboard"]])
    ], hrdashboardComponent);
    return hrdashboardComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/hrloginComponent/hrlogin.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/hrloginComponent/hrlogin.component.ts ***!
  \******************************************************************/
/*! exports provided: hrloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrloginComponent", function() { return hrloginComponent; });
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
var hrloginComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](hrloginComponent, _super);
    function hrloginComponent() {
        var _this = _super.call(this) || this;
        // get the previously selected language from local storage
        // set the language if selected
        var language = window.localStorage.getItem('language');
        if (language) {
            _this.localeService.language = language;
        }
        return _this;
    }
    hrloginComponent.prototype.ngOnInit = function () {
    };
    hrloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-hrlogin',
            template: __webpack_require__(/*! raw-loader!./hrlogin.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/hrloginComponent/hrlogin.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], hrloginComponent);
    return hrloginComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/landingpageComponent/landingpage.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/landingpageComponent/landingpage.component.ts ***!
  \**************************************************************************/
/*! exports provided: landingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landingpageComponent", function() { return landingpageComponent; });
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
var landingpageComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](landingpageComponent, _super);
    function landingpageComponent(router) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.href = "";
        _this.languages = [
            { value: "en", viewValue: "English" },
            { value: "es", viewValue: "Spanish" },
            { value: "pt", viewValue: "Portuguese" },
            { value: "ko", viewValue: "Korean" },
            { value: "th", viewValue: "Thai" },
            { value: "zh-CN", viewValue: "CHINESE" },
        ];
        // get the previously selected language from local storage
        // set the language if selected
        var language = window.localStorage.getItem("language");
        if (language) {
            _this.localeService.language = language;
        }
        return _this;
    }
    landingpageComponent.prototype.ngOnInit = function () { };
    landingpageComponent.prototype.doSomething = function (event) {
        //console.log(event.value);
        window.localStorage.setItem("language", event.value);
        var language = window.localStorage.getItem("language");
        console.log(language);
        this.localeService.language = language;
    };
    landingpageComponent.prototype.letStart = function () {
        console.log("Lets Starts is working");
        if (this.router.url == "/landingpage") {
            this.router.navigate(["/login"]);
        }
        else {
            this.router.navigate(["/personalinfo"]);
        }
    };
    landingpageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    landingpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bh-landingpage",
            template: __webpack_require__(/*! raw-loader!./landingpage.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/landingpageComponent/landingpage.template.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], landingpageComponent);
    return landingpageComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/loginComponent/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/loginComponent/login.component.ts ***!
  \**************************************************************/
/*! exports provided: loginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginComponent", function() { return loginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/masterdata/masterdata.service */ "./src/app/services/masterdata/masterdata.service.ts");
/* harmony import */ var app_sd_services_saveuserresponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/sd-services/saveuserresponse */ "./src/app/sd-services/saveuserresponse.ts");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/



/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/
/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/


var loginComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](loginComponent, _super);
    function loginComponent(router, masterdata, saveuserService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.masterdata = masterdata;
        _this.saveuserService = saveuserService;
        var language = window.localStorage.getItem("language");
        if (language) {
            _this.localeService.language = language;
        }
        return _this;
    }
    loginComponent.prototype.ngOnInit = function () { };
    loginComponent.prototype.login = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var formdata;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(form.value);
                this.masterdata.email = form.value.email;
                this.masterdata.password = form.value.password;
                console.log(this.masterdata);
                formdata = {
                    username: form.value.email,
                    password: form.value.password,
                };
                localStorage.setItem("username", this.masterdata.email);
                localStorage.setItem("password", this.masterdata.password);
                console.log(form.email);
                if (form.value.email == "craig.shirley@ingredion.com") {
                    this.router.navigate(["/hrdashboard"]);
                    console.log("craig");
                }
                else {
                    this.router.navigate(["/confirmdetails"]);
                }
                return [2 /*return*/];
            });
        });
    };
    loginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_4__["masterdataService"] },
        { type: app_sd_services_saveuserresponse__WEBPACK_IMPORTED_MODULE_5__["saveuserresponse"] }
    ]; };
    loginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bh-login",
            template: __webpack_require__(/*! raw-loader!./login.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/loginComponent/login.template.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_4__["masterdataService"],
            app_sd_services_saveuserresponse__WEBPACK_IMPORTED_MODULE_5__["saveuserresponse"]])
    ], loginComponent);
    return loginComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/logoComponent/logo.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/logoComponent/logo.component.ts ***!
  \************************************************************/
/*! exports provided: logoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoComponent", function() { return logoComponent; });
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
var logoComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](logoComponent, _super);
    function logoComponent() {
        return _super.call(this) || this;
    }
    logoComponent.prototype.ngOnInit = function () {
    };
    logoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bh-logo',
            template: __webpack_require__(/*! raw-loader!./logo.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/logoComponent/logo.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], logoComponent);
    return logoComponent;
}(_app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__["NBaseComponent"]));



/***/ }),

/***/ "./src/app/components/pageinformationComponent/pageinformation.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/pageinformationComponent/pageinformation.component.ts ***!
  \**********************************************************************************/
/*! exports provided: pageinformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageinformationComponent", function() { return pageinformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_baseClasses_nBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/baseClasses/nBase.component */ "./baseClasses/nBase.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/datasharing/datasharing.service */ "./src/app/services/datasharing/datasharing.service.ts");
/* harmony import */ var app_sd_services_saveuserresponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/sd-services/saveuserresponse */ "./src/app/sd-services/saveuserresponse.ts");
/* harmony import */ var _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/masterdata/masterdata.service */ "./src/app/services/masterdata/masterdata.service.ts");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/




/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/


/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/
var pageinformationComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](pageinformationComponent, _super);
    function pageinformationComponent(router, datash, getlocation, masterdata) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.datash = datash;
        _this.getlocation = getlocation;
        _this.masterdata = masterdata;
        _this.defaultLocationName = "India";
        _this.languages = [
            { value: "en", viewValue: "English" },
            { value: "es", viewValue: "Spanish" },
            { value: "pt", viewValue: "Portuguese" },
            { value: "ko", viewValue: "Korean" },
            { value: "th", viewValue: "Thai" },
            { value: "zh-CN", viewValue: "CHINESE" },
        ];
        // get the previously selected language from local storage
        // set the language if selected
        var language = window.localStorage.getItem("language");
        if (language) {
            _this.localeService.language = language;
        }
        return _this;
    }
    pageinformationComponent.prototype.doSomething = function (event) {
        //console.log(event.value);
        window.localStorage.setItem("language", event.value);
        var language = window.localStorage.getItem("language");
        console.log(language);
        this.localeService.language = language;
    };
    pageinformationComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var bh, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.usertypes = this.datash.getusertypes();
                        console.log("uts", this.usertypes);
                        return [4 /*yield*/, this.getlocation.getLocations()];
                    case 1:
                        bh = _a.sent();
                        console.log(bh);
                        console.log(bh.local.result);
                        this.updatelocations = bh.local.result;
                        this.totallocations = this.updatelocations;
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
    /**
     * Function name: personalInfoSubmit
     * @Input: JSON data
     * @Output:JSON data { response 201 / error}
     * @Desc: This function collects the data from user and posts into Information Collection db
     * @error: 500 Internal server error / 404 - method not found
     */
    pageinformationComponent.prototype.personalInfoSubmit = function (data) {
        this.validclick = true;
        console.log(data.value);
        console.log(this.defaultLocationName, data.value.locationName);
        this.masterdata.firstName = data.value.firstname;
        this.masterdata.lastName = data.value.lastname;
        this.masterdata.locationName = data.value.locationName;
        this.masterdata.userType = data.value.type;
        if (data.valid === true) {
            for (var i = 0; i <= this.totallocations.length; i++) {
                if ((this.totallocations[i] &&
                    this.totallocations[i].locationName === this.locationName) ||
                    this.defaultLocationName === data.value.locationName) {
                    console.log("valid success");
                    this.router.navigate(["/contactinfo"]);
                    break;
                }
            }
            this.validclick = false;
            // this.router.navigate(['/thankyou']);
        }
    };
    pageinformationComponent.prototype.locationFilter = function () {
        this.updatelocations = this.filter(this.totallocations);
    };
    pageinformationComponent.prototype.filter = function (values) {
        var _this = this;
        return values.filter(function (location) {
            return location.locationName.includes(_this.locationName);
        });
    };
    pageinformationComponent.prototype.selectUser = function (event) {
        //console.log(event.value);
        window.localStorage.setItem("usertype", event.value);
        var usertype = window.localStorage.getItem("usertype");
        console.log(usertype);
    };
    pageinformationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_4__["datasharingService"] },
        { type: app_sd_services_saveuserresponse__WEBPACK_IMPORTED_MODULE_5__["saveuserresponse"] },
        { type: _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_6__["masterdataService"] }
    ]; };
    pageinformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bh-pageinformation",
            template: __webpack_require__(/*! raw-loader!./pageinformation.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/pageinformationComponent/pageinformation.template.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_4__["datasharingService"],
            app_sd_services_saveuserresponse__WEBPACK_IMPORTED_MODULE_5__["saveuserresponse"],
            _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_6__["masterdataService"]])
    ], pageinformationComponent);
    return pageinformationComponent;
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

/***/ "./src/app/components/thankyouComponent/thankyou.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/thankyouComponent/thankyou.component.ts ***!
  \********************************************************************/
/*! exports provided: thankyouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thankyouComponent", function() { return thankyouComponent; });
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
var thankyouComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](thankyouComponent, _super);
    function thankyouComponent() {
        var _this = _super.call(this) || this;
        // this property determine the background color of the tick mark icon circle
        // when this property is set to true
        // the backround color of the circle will change to amber otherwise green
        _this.isAmber = false;
        _this.today = "";
        // get the previously selected language from local storage
        // set the language if selected
        var language = window.localStorage.getItem("language");
        if (language) {
            _this.localeService.language = language;
        }
        // get the color code from localstorage
        var color = window.localStorage.getItem("colorCode");
        _this.isAmber = color === "amber";
        return _this;
    }
    // returns today's date in DD-MMM-YYYY format
    // which can be shown in the UI
    thankyouComponent.prototype.getDay = function () {
        var dt = new Date();
        var date = dt.getDate();
        var month = dt.getMonth();
        var year = dt.getFullYear();
        var dateStr = date < 10 ? "0" + date : date + "";
        var monthStr = month === 0
            ? "JAN"
            : month === 1
                ? "FEB"
                : month === 2
                    ? "MAR"
                    : month === 3
                        ? "APR"
                        : month === 4
                            ? "MAY"
                            : month === 5
                                ? "JUN"
                                : month === 6
                                    ? "JUL"
                                    : month === 7
                                        ? "AUG"
                                        : month === 8
                                            ? "SEP"
                                            : month === 9
                                                ? "OCT"
                                                : month === 10
                                                    ? "NOV"
                                                    : month === 11
                                                        ? "DEC"
                                                        : "";
        var dayStr = dateStr + "-" + monthStr + "-" + year;
        return dayStr;
    };
    thankyouComponent.prototype.ngOnInit = function () {
        // set today
        this.today = this.getDay();
        console.log(this.today);
    };
    thankyouComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "bh-thankyou",
            template: __webpack_require__(/*! raw-loader!./thankyou.template.html */ "./node_modules/raw-loader/index.js!./src/app/components/thankyouComponent/thankyou.template.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], thankyouComponent);
    return thankyouComponent;
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
/* harmony import */ var _components_logoComponent_logo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/logoComponent/logo.component */ "./src/app/components/logoComponent/logo.component.ts");
/* harmony import */ var _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/masterdata/masterdata.service */ "./src/app/services/masterdata/masterdata.service.ts");
/* harmony import */ var _components_healthinfonextComponent_healthinfonext_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/healthinfonextComponent/healthinfonext.component */ "./src/app/components/healthinfonextComponent/healthinfonext.component.ts");
/* harmony import */ var _components_contactinformationComponent_contactinformation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/contactinformationComponent/contactinformation.component */ "./src/app/components/contactinformationComponent/contactinformation.component.ts");
/* harmony import */ var _components_confirmdetailsComponent_confirmdetails_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/confirmdetailsComponent/confirmdetails.component */ "./src/app/components/confirmdetailsComponent/confirmdetails.component.ts");
/* harmony import */ var _components_certifyinformationComponent_certifyinformation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/certifyinformationComponent/certifyinformation.component */ "./src/app/components/certifyinformationComponent/certifyinformation.component.ts");
/* harmony import */ var _services_datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/datasharing/datasharing.service */ "./src/app/services/datasharing/datasharing.service.ts");
/* harmony import */ var _components_pageinformationComponent_pageinformation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/pageinformationComponent/pageinformation.component */ "./src/app/components/pageinformationComponent/pageinformation.component.ts");
/* harmony import */ var _services_language_language_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/language/language.service */ "./src/app/services/language/language.service.ts");
/* harmony import */ var _components_splashComponent_splash_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/splashComponent/splash.component */ "./src/app/components/splashComponent/splash.component.ts");
/* harmony import */ var _components_loginComponent_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/loginComponent/login.component */ "./src/app/components/loginComponent/login.component.ts");
/* harmony import */ var _components_thankyouComponent_thankyou_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/thankyouComponent/thankyou.component */ "./src/app/components/thankyouComponent/thankyou.component.ts");
/* harmony import */ var _components_healthinfoComponent_healthinfo_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/healthinfoComponent/healthinfo.component */ "./src/app/components/healthinfoComponent/healthinfo.component.ts");
/* harmony import */ var _components_landingpageComponent_landingpage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/landingpageComponent/landingpage.component */ "./src/app/components/landingpageComponent/landingpage.component.ts");
/* harmony import */ var _components_hrdashboardComponent_hrdashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/hrdashboardComponent/hrdashboard.component */ "./src/app/components/hrdashboardComponent/hrdashboard.component.ts");
/* harmony import */ var _components_hrloginComponent_hrlogin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/hrloginComponent/hrlogin.component */ "./src/app/components/hrloginComponent/hrlogin.component.ts");
/* harmony import */ var _components_homeComponent_home_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/homeComponent/home.component */ "./src/app/components/homeComponent/home.component.ts");










window["neutrinos"] = {
    environments: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"],
};
//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-logoComponent

//CORE_REFERENCE_IMPORT-masterdataService

//CORE_REFERENCE_IMPORT-healthinfonextComponent

//CORE_REFERENCE_IMPORT-contactinformationComponent

//CORE_REFERENCE_IMPORT-confirmdetailsComponent

//CORE_REFERENCE_IMPORT-certifyinformationComponent

//CORE_REFERENCE_IMPORT-datasharingService

//CORE_REFERENCE_IMPORT-pageinformationComponent

//CORE_REFERENCE_IMPORT-languageService

//CORE_REFERENCE_IMPORT-splashComponent

//CORE_REFERENCE_IMPORT-loginComponent

//CORE_REFERENCE_IMPORT-thankyouComponent

//CORE_REFERENCE_IMPORT-healthinfoComponent

//CORE_REFERENCE_IMPORT-landingpageComponent

//CORE_REFERENCE_IMPORT-hrdashboardComponent

//CORE_REFERENCE_IMPORT-hrloginComponent

//CORE_REFERENCE_IMPORT-homeComponent

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
var appBootstrap = [_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"]];
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
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-logoComponent
    _components_logoComponent_logo_component__WEBPACK_IMPORTED_MODULE_10__["logoComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-healthinfonextComponent
    _components_healthinfonextComponent_healthinfonext_component__WEBPACK_IMPORTED_MODULE_12__["healthinfonextComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-contactinformationComponent
    _components_contactinformationComponent_contactinformation_component__WEBPACK_IMPORTED_MODULE_13__["contactinformationComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-confirmdetailsComponent
    _components_confirmdetailsComponent_confirmdetails_component__WEBPACK_IMPORTED_MODULE_14__["confirmdetailsComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-certifyinformationComponent
    _components_certifyinformationComponent_certifyinformation_component__WEBPACK_IMPORTED_MODULE_15__["certifyinformationComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-pageinformationComponent
    _components_pageinformationComponent_pageinformation_component__WEBPACK_IMPORTED_MODULE_17__["pageinformationComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-splashComponent
    _components_splashComponent_splash_component__WEBPACK_IMPORTED_MODULE_19__["splashComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
    _components_loginComponent_login_component__WEBPACK_IMPORTED_MODULE_20__["loginComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-thankyouComponent
    _components_thankyouComponent_thankyou_component__WEBPACK_IMPORTED_MODULE_21__["thankyouComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-healthinfoComponent
    _components_healthinfoComponent_healthinfo_component__WEBPACK_IMPORTED_MODULE_22__["healthinfoComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-landingpageComponent
    _components_landingpageComponent_landingpage_component__WEBPACK_IMPORTED_MODULE_23__["landingpageComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-hrdashboardComponent
    _components_hrdashboardComponent_hrdashboard_component__WEBPACK_IMPORTED_MODULE_24__["hrdashboardComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-hrloginComponent
    _components_hrloginComponent_hrlogin_component__WEBPACK_IMPORTED_MODULE_25__["hrloginComponent"],
    //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
    _components_homeComponent_home_component__WEBPACK_IMPORTED_MODULE_26__["homeComponent"],
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
        multi: true,
    },
    neutrinos_seed_services__WEBPACK_IMPORTED_MODULE_8__["NAuthGuardService"],
    //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
    //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-masterdataService
    _services_masterdata_masterdata_service__WEBPACK_IMPORTED_MODULE_11__["masterdataService"],
    //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-datasharingService
    _services_datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_16__["datasharingService"],
    //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-languageService
    _services_language_language_service__WEBPACK_IMPORTED_MODULE_18__["languageService"],
];
/**
 * Routes available for bApp
 */
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
var appRoutes = [{ path: 'home', component: _components_homeComponent_home_component__WEBPACK_IMPORTED_MODULE_26__["homeComponent"] }, { path: 'hrlogin', component: _components_hrloginComponent_hrlogin_component__WEBPACK_IMPORTED_MODULE_25__["hrloginComponent"] }, { path: 'hrdashboard', component: _components_hrdashboardComponent_hrdashboard_component__WEBPACK_IMPORTED_MODULE_24__["hrdashboardComponent"] }, { path: 'landingpage', component: _components_landingpageComponent_landingpage_component__WEBPACK_IMPORTED_MODULE_23__["landingpageComponent"] }, { path: 'healthinfo', component: _components_healthinfoComponent_healthinfo_component__WEBPACK_IMPORTED_MODULE_22__["healthinfoComponent"] }, { path: 'thankyou', component: _components_thankyouComponent_thankyou_component__WEBPACK_IMPORTED_MODULE_21__["thankyouComponent"] }, { path: 'login', component: _components_loginComponent_login_component__WEBPACK_IMPORTED_MODULE_20__["loginComponent"] }, { path: 'splash', component: _components_splashComponent_splash_component__WEBPACK_IMPORTED_MODULE_19__["splashComponent"] }, { path: 'personalinfo', component: _components_pageinformationComponent_pageinformation_component__WEBPACK_IMPORTED_MODULE_17__["pageinformationComponent"] }, { path: 'contactinfo', component: _components_contactinformationComponent_contactinformation_component__WEBPACK_IMPORTED_MODULE_13__["contactinformationComponent"] }, { path: 'certifyinfo', component: _components_certifyinformationComponent_certifyinformation_component__WEBPACK_IMPORTED_MODULE_15__["certifyinformationComponent"] }, { path: 'confirmdetails', component: _components_confirmdetailsComponent_confirmdetails_component__WEBPACK_IMPORTED_MODULE_14__["confirmdetailsComponent"] }, { path: 'hinfonext', component: _components_healthinfonextComponent_healthinfonext_component__WEBPACK_IMPORTED_MODULE_12__["healthinfonextComponent"] }, { path: 'landpage', component: _components_landingpageComponent_landingpage_component__WEBPACK_IMPORTED_MODULE_23__["landingpageComponent"] }, { path: '', redirectTo: '/home', pathMatch: 'full' }, { path: '**', component: _not_found_component__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundComponent"] }];
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
/* harmony import */ var _sd_services_hrdashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sd-services/hrdashboard */ "./src/app/sd-services/hrdashboard.ts");
/* harmony import */ var _sd_services_userdetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sd-services/userdetails */ "./src/app/sd-services/userdetails.ts");
/* harmony import */ var _sd_services_saveuserresponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sd-services/saveuserresponse */ "./src/app/sd-services/saveuserresponse.ts");

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-hrdashboard

//CORE_REFERENCE_IMPORT-userdetails

//CORE_REFERENCE_IMPORT-saveuserresponse

var sdProviders = [
    app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_0__["SDBaseService"],
    //CORE_REFERENCE_PUSH_TO_SD_ARRAY
    //CORE_REFERENCE_PUSH_TO_SD_ARRAY-hrdashboard
    _sd_services_hrdashboard__WEBPACK_IMPORTED_MODULE_1__["hrdashboard"],
    //CORE_REFERENCE_PUSH_TO_SD_ARRAY-userdetails
    _sd_services_userdetails__WEBPACK_IMPORTED_MODULE_2__["userdetails"],
    //CORE_REFERENCE_PUSH_TO_SD_ARRAY-saveuserresponse
    _sd_services_saveuserresponse__WEBPACK_IMPORTED_MODULE_3__["saveuserresponse"]
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

module.exports = "agm-map {\n  height: 100%;\n  width: 100%; }\n\n.map {\n  height: 100%;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWJhcHJhc2FkL25ldXRyaW5vcy1zdHVkaW8vaGVhbHRoLWFwcC9hcHAvc3JjL2FwcC9uLWNvbXBvbmVudHMvbk1hcENvbXBvbmVudC9uLW1hcC5zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFlBQVk7RUFDWixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uLWNvbXBvbmVudHMvbk1hcENvbXBvbmVudC9uLW1hcC5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5hZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ubWFwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

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

/***/ "./src/app/sd-services/hrdashboard.ts":
/*!********************************************!*\
  !*** ./src/app/sd-services/hrdashboard.ts ***!
  \********************************************/
/*! exports provided: hrdashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrdashboard", function() { return hrdashboard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/n-services/SDBaseService */ "./src/app/n-services/SDBaseService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/

//CORE_REFERENCE_IMPORTS



var hrdashboard = /** @class */ (function () {
    function hrdashboard(sdService, router, matSnackBar) {
        this.sdService = sdService;
        this.router = router;
        this.matSnackBar = matSnackBar;
    }
    //   service flows_hrdashboard
    hrdashboard.prototype.hrDashboard = function () {
        var others = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            others[_i] = arguments[_i];
        }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var bh, outputVariables, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bh = { input: {}, local: { result: undefined, apiURL: undefined } };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        bh = this.sdService.__constructDefault(bh);
                        return [4 /*yield*/, this.sd_kamBbrZpnMvR8rdb(bh)];
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
                        return [4 /*yield*/, this.errorHandler(bh, e_1, 'sd_Jztg3nB5PDL8fsTd')];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //appendnew_flow_hrdashboard_Start
    hrdashboard.prototype.sd_kamBbrZpnMvR8rdb = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        bh.local.apiURL = bh.system.environment.properties.ssdURL + "/api/dashboard";
                        return [4 /*yield*/, this.sd_WgjyYUaFO0rOcUFb(bh)];
                    case 1:
                        bh = _a.sent();
                        //appendnew_next_sd_kamBbrZpnMvR8rdb
                        return [2 /*return*/, bh];
                    case 2:
                        e_2 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_2, 'sd_kamBbrZpnMvR8rdb')];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    hrdashboard.prototype.sd_WgjyYUaFO0rOcUFb = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var requestOptions, _a, e_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 4]);
                        requestOptions = {
                            url: bh.local.apiURL,
                            method: 'post',
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
                        this.sd_YpkWzoDaVvv9eMUU(bh);
                        //appendnew_next_sd_WgjyYUaFO0rOcUFb
                        return [2 /*return*/, bh];
                    case 2:
                        e_3 = _b.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_3, 'sd_WgjyYUaFO0rOcUFb')];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    hrdashboard.prototype.sd_YpkWzoDaVvv9eMUU = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 1, , 3]);
                        console.log(new Date().toLocaleTimeString(), bh.local.result);
                        //appendnew_next_sd_YpkWzoDaVvv9eMUU
                        return [2 /*return*/, bh];
                    case 1:
                        e_4 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_4, 'sd_YpkWzoDaVvv9eMUU')];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //appendnew_node
    hrdashboard.prototype.errorHandler = function (bh, e, src) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.error(e);
                bh.error = e;
                bh.errorSource = src;
                if (false
                /*appendnew_next_Catch*/
                ) {}
                else {
                    throw e;
                }
                return [2 /*return*/];
            });
        });
    };
    hrdashboard.ctorParameters = function () { return [
        { type: _app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_2__["SDBaseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    hrdashboard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_2__["SDBaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], hrdashboard);
    return hrdashboard;
}());



/***/ }),

/***/ "./src/app/sd-services/saveuserresponse.ts":
/*!*************************************************!*\
  !*** ./src/app/sd-services/saveuserresponse.ts ***!
  \*************************************************/
/*! exports provided: saveuserresponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveuserresponse", function() { return saveuserresponse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/n-services/SDBaseService */ "./src/app/n-services/SDBaseService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/

//CORE_REFERENCE_IMPORTS



var saveuserresponse = /** @class */ (function () {
    function saveuserresponse(sdService, router, matSnackBar) {
        this.sdService = sdService;
        this.router = router;
        this.matSnackBar = matSnackBar;
    }
    //   service flows_saveuserresponse
    saveuserresponse.prototype.saveUserData = function (formdata) {
        if (formdata === void 0) { formdata = undefined; }
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
                            input: { formdata: formdata },
                            local: { result: undefined, apiUrl: '' }
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        bh = this.sdService.__constructDefault(bh);
                        return [4 /*yield*/, this.sd_p4EvIXbAOEeVOVuZ(bh)];
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
                        return [4 /*yield*/, this.errorHandler(bh, e_1, 'sd_kBgqCy1h0V1BXjSL')];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    saveuserresponse.prototype.getLocations = function () {
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
                        return [4 /*yield*/, this.sd_chnzbvsmBYvG8poP(bh)];
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
                        return [4 /*yield*/, this.errorHandler(bh, e_2, 'sd_KvTvemnknfk5F5U8')];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    saveuserresponse.prototype.getIfUserSubmitted = function (email) {
        if (email === void 0) { email = ''; }
        var others = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            others[_i - 1] = arguments[_i];
        }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var bh, outputVariables, e_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bh = { input: { email: email }, local: { result: undefined } };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        bh = this.sdService.__constructDefault(bh);
                        return [4 /*yield*/, this.sd_Og123zKXVRzX2ldq(bh)];
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
                        return [4 /*yield*/, this.errorHandler(bh, e_3, 'sd_UT6P090uRaDXp7Bs')];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //appendnew_flow_saveuserresponse_Start
    saveuserresponse.prototype.sd_p4EvIXbAOEeVOVuZ = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        bh.local.apiUrl = bh.system.environment.properties.ssdURL + "/api/userResponse";
                        return [4 /*yield*/, this.sd_yHzOyr3hOiBVBVi3(bh)];
                    case 1:
                        bh = _a.sent();
                        //appendnew_next_sd_p4EvIXbAOEeVOVuZ
                        return [2 /*return*/, bh];
                    case 2:
                        e_4 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_4, 'sd_p4EvIXbAOEeVOVuZ')];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    saveuserresponse.prototype.sd_yHzOyr3hOiBVBVi3 = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        console.log('httpformdata', bh.input.formdata);
                        return [4 /*yield*/, this.sd_FcFvtFytCkN7uU9N(bh)];
                    case 1:
                        bh = _a.sent();
                        //appendnew_next_sd_yHzOyr3hOiBVBVi3
                        return [2 /*return*/, bh];
                    case 2:
                        e_5 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_5, 'sd_yHzOyr3hOiBVBVi3')];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    saveuserresponse.prototype.sd_FcFvtFytCkN7uU9N = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var requestOptions, _a, e_6;
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
                            body: bh.input.formdata
                        };
                        _a = bh.local;
                        return [4 /*yield*/, this.sdService.nHttpRequest(requestOptions)];
                    case 1:
                        _a.result = _b.sent();
                        this.sd_xpG8uIqE7dWEgS0F(bh);
                        //appendnew_next_sd_FcFvtFytCkN7uU9N
                        return [2 /*return*/, bh];
                    case 2:
                        e_6 = _b.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_6, 'sd_FcFvtFytCkN7uU9N')];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    saveuserresponse.prototype.sd_xpG8uIqE7dWEgS0F = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_7;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 1, , 3]);
                        console.log(new Date().toLocaleTimeString(), bh);
                        //appendnew_next_sd_xpG8uIqE7dWEgS0F
                        return [2 /*return*/, bh];
                    case 1:
                        e_7 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_7, 'sd_xpG8uIqE7dWEgS0F')];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    saveuserresponse.prototype.sd_edbqgcUOheevvEDW = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_8;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 1, , 3]);
                        console.log(new Date().toLocaleTimeString(), bh.error);
                        //appendnew_next_sd_edbqgcUOheevvEDW
                        return [2 /*return*/, bh];
                    case 1:
                        e_8 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_8, 'sd_edbqgcUOheevvEDW')];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    saveuserresponse.prototype.sd_chnzbvsmBYvG8poP = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_9;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        bh.local.apiURL = bh.system.environment.properties.ssdURL + "/api/getlocation";
                        return [4 /*yield*/, this.sd_CrsIy7P6IOcKj3sX(bh)];
                    case 1:
                        bh = _a.sent();
                        //appendnew_next_sd_chnzbvsmBYvG8poP
                        return [2 /*return*/, bh];
                    case 2:
                        e_9 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_9, 'sd_chnzbvsmBYvG8poP')];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    saveuserresponse.prototype.sd_CrsIy7P6IOcKj3sX = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var requestOptions, _a, e_10;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 4]);
                        requestOptions = {
                            url: bh.local.apiURL,
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
                        this.sd_i2UZMf57vKvaRxeM(bh);
                        //appendnew_next_sd_CrsIy7P6IOcKj3sX
                        return [2 /*return*/, bh];
                    case 2:
                        e_10 = _b.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_10, 'sd_CrsIy7P6IOcKj3sX')];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    saveuserresponse.prototype.sd_i2UZMf57vKvaRxeM = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_11;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 1, , 3]);
                        console.log(new Date().toLocaleTimeString(), bh.local.result);
                        //appendnew_next_sd_i2UZMf57vKvaRxeM
                        return [2 /*return*/, bh];
                    case 1:
                        e_11 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_11, 'sd_i2UZMf57vKvaRxeM')];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    saveuserresponse.prototype.sd_Og123zKXVRzX2ldq = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var email, e_12;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        email = bh.input.email;
                        bh.local.apiURL = bh.system.environment.properties.ssdURL + "/api/userflag?email=" + email;
                        return [4 /*yield*/, this.sd_DIoisxysFNjLhDvY(bh)];
                    case 1:
                        bh = _a.sent();
                        //appendnew_next_sd_Og123zKXVRzX2ldq
                        return [2 /*return*/, bh];
                    case 2:
                        e_12 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_12, 'sd_Og123zKXVRzX2ldq')];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    saveuserresponse.prototype.sd_DIoisxysFNjLhDvY = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var requestOptions, _a, e_13;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 4]);
                        requestOptions = {
                            url: bh.local.apiURL,
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
                        this.sd_OhLN2vw7EWihaLcR(bh);
                        //appendnew_next_sd_DIoisxysFNjLhDvY
                        return [2 /*return*/, bh];
                    case 2:
                        e_13 = _b.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_13, 'sd_DIoisxysFNjLhDvY')];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    saveuserresponse.prototype.sd_OhLN2vw7EWihaLcR = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_14;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 1, , 3]);
                        console.log(new Date().toLocaleTimeString(), bh.local.result);
                        //appendnew_next_sd_OhLN2vw7EWihaLcR
                        return [2 /*return*/, bh];
                    case 1:
                        e_14 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_14, 'sd_OhLN2vw7EWihaLcR')];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //appendnew_node
    saveuserresponse.prototype.errorHandler = function (bh, e, src) {
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
                        return [4 /*yield*/, this.sd_JvVnSwB12u0QvrzM(bh)];
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
    saveuserresponse.prototype.sd_JvVnSwB12u0QvrzM = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.sd_edbqgcUOheevvEDW(bh);
                //appendnew_next_sd_JvVnSwB12u0QvrzM
                return [2 /*return*/, true];
            });
        });
    };
    saveuserresponse.ctorParameters = function () { return [
        { type: _app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_2__["SDBaseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    saveuserresponse = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_2__["SDBaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], saveuserresponse);
    return saveuserresponse;
}());



/***/ }),

/***/ "./src/app/sd-services/userdetails.ts":
/*!********************************************!*\
  !*** ./src/app/sd-services/userdetails.ts ***!
  \********************************************/
/*! exports provided: userdetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userdetails", function() { return userdetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/n-services/SDBaseService */ "./src/app/n-services/SDBaseService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/

//CORE_REFERENCE_IMPORTS



var userdetails = /** @class */ (function () {
    function userdetails(sdService, router, matSnackBar) {
        this.sdService = sdService;
        this.router = router;
        this.matSnackBar = matSnackBar;
    }
    //   service flows_userdetails
    userdetails.prototype.userDetails = function (data) {
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
                            local: { result: undefined, apiURL: undefined }
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        bh = this.sdService.__constructDefault(bh);
                        return [4 /*yield*/, this.sd_9sGvXKpcJuz4o6iA(bh)];
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
                        return [4 /*yield*/, this.errorHandler(bh, e_1, 'sd_jATRPplELulU1IJj')];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //appendnew_flow_userdetails_Start
    userdetails.prototype.sd_9sGvXKpcJuz4o6iA = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        bh.local.apiURL = bh.system.environment.properties.ssdURL + "/api/userinfo";
                        return [4 /*yield*/, this.sd_b3dGX6U7nArDuByi(bh)];
                    case 1:
                        bh = _a.sent();
                        //appendnew_next_sd_9sGvXKpcJuz4o6iA
                        return [2 /*return*/, bh];
                    case 2:
                        e_2 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_2, 'sd_9sGvXKpcJuz4o6iA')];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    userdetails.prototype.sd_b3dGX6U7nArDuByi = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var requestOptions, _a, e_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 4]);
                        requestOptions = {
                            url: bh.local.apiURL,
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
                        this.sd_K3ODbZQfLJ4SsrAR(bh);
                        //appendnew_next_sd_b3dGX6U7nArDuByi
                        return [2 /*return*/, bh];
                    case 2:
                        e_3 = _b.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_3, 'sd_b3dGX6U7nArDuByi')];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    userdetails.prototype.sd_K3ODbZQfLJ4SsrAR = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 1, , 3]);
                        console.log(new Date().toLocaleTimeString(), bh);
                        //appendnew_next_sd_K3ODbZQfLJ4SsrAR
                        return [2 /*return*/, bh];
                    case 1:
                        e_4 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_4, 'sd_K3ODbZQfLJ4SsrAR')];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    userdetails.prototype.sd_9bNLEihqbGQ8hBkz = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 1, , 3]);
                        console.log(new Date().toLocaleTimeString(), bh);
                        //appendnew_next_sd_9bNLEihqbGQ8hBkz
                        return [2 /*return*/, bh];
                    case 1:
                        e_5 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(bh, e_5, 'sd_9bNLEihqbGQ8hBkz')];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //appendnew_node
    userdetails.prototype.errorHandler = function (bh, e, src) {
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
                        return [4 /*yield*/, this.sd_fppaVeWTVfJkSBcU(bh)];
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
    userdetails.prototype.sd_fppaVeWTVfJkSBcU = function (bh) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.sd_9bNLEihqbGQ8hBkz(bh);
                //appendnew_next_sd_fppaVeWTVfJkSBcU
                return [2 /*return*/, true];
            });
        });
    };
    userdetails.ctorParameters = function () { return [
        { type: _app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_2__["SDBaseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    userdetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_n_services_SDBaseService__WEBPACK_IMPORTED_MODULE_2__["SDBaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], userdetails);
    return userdetails;
}());



/***/ }),

/***/ "./src/app/services/datasharing/datasharing.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/datasharing/datasharing.service.ts ***!
  \*************************************************************/
/*! exports provided: datasharingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datasharingService", function() { return datasharingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/



var datasharingService = /** @class */ (function () {
    function datasharingService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
    }
    datasharingService.prototype.getusertypes = function () {
        // sample json data
        return (this.usertypes = [
            {
                type: "vendor",
            },
            {
                type: "customer",
            },
            {
                type: "visitor",
            },
        ]);
        console.log("user name", this.usertypes[0].name);
    };
    datasharingService.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
            panelClass: ["bar-color"],
            horizontalPosition: "right",
            verticalPosition: "top",
        });
    };
    datasharingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    datasharingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], datasharingService);
    return datasharingService;
}());



/***/ }),

/***/ "./src/app/services/language/language.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/language/language.service.ts ***!
  \*******************************************************/
/*! exports provided: languageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languageService", function() { return languageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/

var languageService = /** @class */ (function () {
    function languageService() {
        this.languagecode = 'en';
    }
    languageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], languageService);
    return languageService;
}());



/***/ }),

/***/ "./src/app/services/masterdata/masterdata.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/masterdata/masterdata.service.ts ***!
  \***********************************************************/
/*! exports provided: masterdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "masterdataService", function() { return masterdataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_sd_services_saveuserresponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/sd-services/saveuserresponse */ "./src/app/sd-services/saveuserresponse.ts");

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/



var masterdataService = /** @class */ (function () {
    // creating serverurl variable we can define it env.json and access here
    function masterdataService(http, saveuserService) {
        this.http = http;
        this.saveuserService = saveuserService;
    }
    // async userSubmit(){
    //     console.log(JSON.parse(localStorage.getItem('answer1')));
    //     let answer1  = this.answer1;
    //     let answer2  = this.answer2;
    //     let answer3  = this.answer3;
    //     let UpdatedlocationName = this.locationName;
    //     let UcertifyInfoName = this.certifyInfoName;
    //     let UcertifyInfoCheck = this.certifyInfoChecked;
    //     try {
    //         console.log(this.username);
    //           let formdata = {
    //                 type:"employee",
    //                 locationName: UpdatedlocationName,
    //                 email:this.username,
    //                 phone:localStorage.getItem('phone'),
    //                 firstName:"st peter",
    //                 lastName:"henry",
    //                 company:"blucocondigital",
    //                 ingredionContact:"none",
    //                 certifyInfoName:UcertifyInfoName,
    //                 certifyInfoChecked:UcertifyInfoCheck,
    //                   response:[{
    //                              "questionId": this.questionId, "answer": this.answer1,  "shortText": this.shortTextOne
    //                         },{
    //                             "questionId": this.questionId2, "answer": this.answer2,  "shortText": this.shortTextTwo
    //                         },{
    //                             "questionId": this.questionId3, "answer": this.answer3,  "shortText": this.shortTextThree
    //                         }
    //                     ],
    //             };
    //         console.log(formdata);
    //         let bh = await this.saveuserService.saveUserData(formdata)
    //         console.log(bh.local.result);
    //        return bh.local.result;
    //     } catch(err){
    //         // this.isLoading = false
    //         console.log(err)
    //     }
    // }
    masterdataService.prototype.userSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var answer1, answer2, answer3, UpdatedlocationName, UcertifyInfoName, UcertifyInfoCheck, formdata, bh, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(JSON.parse(localStorage.getItem("answer1")));
                        answer1 = this.answer1;
                        answer2 = this.answer2;
                        answer3 = this.answer3;
                        UpdatedlocationName = this.locationName;
                        UcertifyInfoName = this.certifyInfoName;
                        UcertifyInfoCheck = this.certifyInfoChecked;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        console.log(this.username);
                        formdata = {
                            type: this.userType,
                            locationName: UpdatedlocationName,
                            email: this.email,
                            phone: localStorage.getItem("phone"),
                            firstName: this.firstName,
                            lastName: this.lastName,
                            company: this.company,
                            ingredionContact: this.ingredionContact,
                            certifyInfoName: UcertifyInfoName,
                            certifyInfoChecked: UcertifyInfoCheck,
                            response: [
                                {
                                    questionId: this.questionId,
                                    answer: this.answer1,
                                    shortText: this.shortTextOne,
                                },
                                {
                                    questionId: this.questionId2,
                                    answer: this.answer2,
                                    shortText: this.shortTextTwo,
                                },
                                {
                                    questionId: this.questionId3,
                                    answer: this.answer3,
                                    shortText: this.shortTextThree,
                                    addlInfo: this.addlInfo,
                                },
                            ],
                        };
                        console.log(formdata);
                        return [4 /*yield*/, this.saveuserService.saveUserData(formdata)];
                    case 2:
                        bh = _a.sent();
                        console.log(bh.local.result);
                        return [2 /*return*/, bh.local.result];
                    case 3:
                        err_1 = _a.sent();
                        // this.isLoading = false
                        console.log(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    masterdataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: app_sd_services_saveuserresponse__WEBPACK_IMPORTED_MODULE_3__["saveuserresponse"] }
    ]; };
    masterdataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            app_sd_services_saveuserresponse__WEBPACK_IMPORTED_MODULE_3__["saveuserresponse"]])
    ], masterdataService);
    return masterdataService;
}());

//  console.log(localStorage.getItem('answer1'),localStorage.getItem('answer2'),localStorage.getItem('answer3'));
//  var confirmdetailsObj = JSON.parse(localStorage.getItem('confirmdetails'));


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
        "ssdURL": "https://health-appdev.azurewebsites.net",
        "tenantName": "blucocoondigital",
        "appName": "health-app",
        "namespace": "com.blucocoondigital.health-app",
        "googleMapKey": "AIzaSyCSTnVwijjv0CFRA4MEeS-H6PAQc87LEoU",
        "useDefaultExceptionUI": true,
        "isIDSEnabled": "false",
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

module.exports = __webpack_require__(/*! /Users/sibaprasad/neutrinos-studio/health-app/app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map