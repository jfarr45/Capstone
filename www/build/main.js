webpackJsonp([0],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeasuredCountertopsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {Subject} from 'rxjs';
var MeasuredCountertopsServiceProvider = /** @class */ (function () {
    function MeasuredCountertopsServiceProvider(http) {
        this.http = http;
        this.countertops = [];
        this.baseURL = "http://localhost:8080";
        console.log('Hello MeasuredCountertopsServiceProvider Provider');
        this.dataChangeSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.dataChanged$ = this.dataChangeSubject.asObservable();
    }
    MeasuredCountertopsServiceProvider.prototype.getCountertops = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.baseURL + '/measuredcountertops').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    MeasuredCountertopsServiceProvider.prototype.addCountertop = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseURL + '/measurecountertops', JSON.stringify(data))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    MeasuredCountertopsServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MeasuredCountertopsServiceProvider);
    return MeasuredCountertopsServiceProvider;
}());

//# sourceMappingURL=measured-countertops-service.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 205;

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\farrj\Countertops\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Dashboard" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Measure Form" tabIcon="construct"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Measured Countertops" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\farrj\Countertops\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_measured_countertops_service_measured_countertops_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(fb, dataService) {
        this.fb = fb;
        this.dataService = dataService;
        this.name = 'Angular';
        this.finishes = ['Finish', 'Raw'];
        this.endsplash = ['Yes', 'No'];
        this.countertop_types = ['Straight', 'Lshape Left', 'Lshape Right', 'Ushape'];
        this.profileForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            unit_number: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            left_wall_length: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            left_wall_depth: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            back_wall_length: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            back_wall_depth: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            right_wall_length: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            right_wall_depth: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            left_finish: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            left_endsplash: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            right_finish: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            right_endsplash: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
        });
        this.countertop = {
            unit_number: '',
            left_wall_length: '',
            left_wall_depth: '',
            back_wall_length: '',
            back_wall_depth: '',
            right_wall_length: '',
            right_wall_depth: '',
            left_finish: '',
            left_endsplash: '',
            right_finish: '',
            right_endsplash: '',
        };
        this.profileForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            countertop_type: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            unit_number: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            left_wall_length: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            left_wall_depth: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            back_wall_length: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            back_wall_depth: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            right_wall_length: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            right_wall_depth: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            left_finish: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            left_endsplash: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            right_finish: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            right_endsplash: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
        });
        this.addCountertop();
    }
    AboutPage.prototype.onSubmit = function () {
        // TODO: Use EventEmitter with form value
        console.warn(this.profileForm.value);
    };
    AboutPage.prototype.addCountertop = function () {
        this.dataService.addCountertop(this.countertop).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
        });
        this.profileForm.reset();
        alert("Countertop measured.");
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\farrj\Countertops\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Measure Tops\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  \n\n<form [formGroup]="profileForm"(ngSubmit)="onSubmit()">\n\n  <h1>Measure Form</h1>\n\n  <div >\n\n  <label>\n\n    Unit Number:\n\n    <input type="text" formControlName="unit_number">\n\n  </label>\n\n  </div>\n\n  \n\n  <div>\n\n    <label>\n\n      Countertop Type:\n\n      <select id="Item" formControlName="countertop_type" required>\n\n        <option [ngValue]="null" [disabled]="true" >Choose one...</option>\n\n        <option *ngFor="let c of countertop_types" [ngValue]="c">{{ c }}</option>\n\n      </select>\n\n    </label>\n\n  </div>\n\n  \n\n  <div *ngIf="profileForm.get(\'countertop_type\').value == \'Straight\'">\n\n  <label>\n\n    Back Wall Length:\n\n    <input type="text" formControlName="back_wall_length" required>\n\n  </label>\n\n  </div>\n\n  <div *ngIf="profileForm.get(\'countertop_type\').value == \'Straight\'">\n\n  <label>\n\n    Back Wall Depth:\n\n    <input type="text" formControlName="back_wall_depth" required>\n\n  </label>\n\n  </div>\n\n  \n\n  <div *ngIf="profileForm.get(\'countertop_type\').value == \'Lshape Left\'">\n\n  <label>\n\n    Left Wall Length:\n\n    <input type="text" formControlName="left_wall_length" required>\n\n  </label>\n\n  </div>\n\n  <div *ngIf="profileForm.get(\'countertop_type\').value == \'Lshape Left\'">\n\n  <label>\n\n    Left Wall Depth:\n\n    <input type="text" formControlName="left_wall_depth" required>\n\n  </label>\n\n  </div>\n\n  <div *ngIf="profileForm.get(\'countertop_type\').value == \'Lshape Left\'">\n\n  <label>\n\n    Back Wall Length:\n\n    <input type="text" formControlName="back_wall_length" required>\n\n  </label>\n\n  </div>\n\n  <div *ngIf="profileForm.get(\'countertop_type\').value == \'Lshape Left\'">\n\n  <label>\n\n    Back Wall Depth:\n\n    <input type="text" formControlName="back_wall_depth" required>\n\n  </label>\n\n  </div>\n\n  \n\n  <div *ngIf="profileForm.get(\'countertop_type\').value == \'Lshape Right\'">\n\n  <label>\n\n    Back Wall Length:\n\n    <input type="text" formControlName="back_wall_length" required>\n\n  </label>\n\n  </div>\n\n  <div *ngIf="profileForm.get(\'countertop_type\').value == \'Lshape Right\'">\n\n  <label>\n\n    Back Wall Depth:\n\n    <input type="text" formControlName="back_wall_depth" required>\n\n  </label>\n\n  </div>\n\n  <div *ngIf="profileForm.get(\'countertop_type\').value == \'Lshape Right\'">\n\n  <label>\n\n    Right Wall Length:\n\n    <input type="text" formControlName="right_wall_length" required>\n\n  </label>\n\n  </div>\n\n  <div *ngIf="profileForm.get(\'countertop_type\').value == \'Lshape Right\'">\n\n  <label>\n\n    Right Wall Depth:\n\n    <input type="text" formControlName="right_wall_depth" required>\n\n  </label>\n\n  </div>\n\n  \n\n  <div *ngIf="profileForm.get(\'countertop_type\').value == \'Ushape\'">\n\n  <label>\n\n    Left Wall Length:\n\n    <input type="text" formControlName="left_wall_length" required>\n\n  </label>\n\n  </div>\n\n  <div *ngIf="profileForm.get(\'countertop_type\').value == \'Ushape\'">\n\n  <label>\n\n    Left Wall Depth:\n\n    <input type="text" formControlName="left_wall_depth" required>\n\n  </label>\n\n  </div>\n\n  <div *ngIf="profileForm.get(\'countertop_type\').value == \'Ushape\'">\n\n  <label>\n\n    Back Wall Length:\n\n    <input type="text" formControlName="back_wall_length" required>\n\n  </label>\n\n  </div>\n\n  <div *ngIf="profileForm.get(\'countertop_type\').value == \'Ushape\'">\n\n  <label>\n\n    Back Wall Depth:\n\n    <input type="text" formControlName="back_wall_depth" required>\n\n  </label>\n\n  </div>\n\n  <div *ngIf="profileForm.get(\'countertop_type\').value == \'Ushape\'">\n\n  <label>\n\n    Right Wall Length:\n\n    <input type="text" formControlName="right_wall_length" required>\n\n  </label>\n\n  </div>\n\n  <div *ngIf="profileForm.get(\'countertop_type\').value == \'Ushape\'">\n\n  <label>\n\n    Right Wall Depth:\n\n    <input type="text" formControlName="right_wall_depth" required>\n\n  </label>\n\n  </div>\n\n  \n\n  \n\n  <div>\n\n  <label>\n\n    Left End Finish:\n\n    <select id="Left Finish" formControlName="left_finish" required>\n\n      <option [ngValue]="null" [disabled]="true" >Choose one...</option>\n\n      <option *ngFor="let c of finishes" [ngValue]="c">{{ c }}</option>\n\n    </select>\n\n  </label>\n\n  </div>\n\n  <div>\n\n  <label>\n\n    Left End Splash:\n\n    <select id="Left Splash" formControlName="left_endsplash" required>\n\n     <option [ngValue]="null" [disabled]="true" >Choose one...</option>\n\n     <option *ngFor="let c of endsplash" [ngValue]="c">{{ c }}</option>\n\n  </select>\n\n  </label>\n\n  </div>\n\n  <div>\n\n  <label>\n\n    Right End Finish:\n\n    <select id="Right Finish" formControlName="right_finish" required>\n\n      <option [ngValue]="null" [disabled]="true" >Choose one...</option>\n\n      <option *ngFor="let c of finishes" [ngValue]="c">{{ c }}</option>\n\n    </select>\n\n  </label>\n\n  </div>\n\n  <div>\n\n  <label>\n\n    Right End Splash:\n\n    <select id="Right Splash" formControlName="right_endsplash" required>\n\n      <option [ngValue]="null" [disabled]="true" >Choose one...</option>\n\n      <option *ngFor="let c of endsplash" [ngValue]="c">{{ c }}</option>\n\n  </select>\n\n  </label>\n\n  </div>\n\n  \n\n  <div class="card-footer text-center border-top-0">\n\n    <button class="btn btn-primary mr-1" (click)="addCountertop()" [disabled]="!profileForm.valid">Add Countertop</button>\n\n    <a href="mailto:lescommercial@lesmith.com"><button class="btn btn-secondary" type="button" (click)="onSubmit()">Finish Job</button></a>\n\n  </div>\n\n  \n\n  \n\n</form>\n\n\n\n  <p>\n\n    Form Status: {{ profileForm.status }}\n\n  </p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\farrj\Countertops\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__providers_measured_countertops_service_measured_countertops_service__["a" /* MeasuredCountertopsServiceProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_measured_countertops_service_measured_countertops_service__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, toastCtrl, alertCtrl, dataService, http) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.http = http;
        this.title = "Countertops Measured";
        this.getCountertops();
    }
    ContactPage.prototype.getCountertops = function () {
        var _this = this;
        this.dataService.getCountertops()
            .then(function (data) {
            _this.countertops = data;
            console.log(_this.countertops);
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\farrj\Countertops\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Measured Countertops\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n  <ion-list inset>\n\n    <ion-item-sliding *ngFor="let countertop of getCountertops()">\n\n      <ion-item>\n\n        <h2>{{countertop.unit_number}}</h2>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button (click)="editCountertop(countertop, i)" ion-button color="primary" icon-start>\n\n          <ion-icon name="create"></ion-icon>\n\n          Edit\n\n        </button>\n\n        <button (click)="removeItem(item, i)" ion-button color="danger" icon-start>\n\n          <ion-icon name="trash"></ion-icon>\n\n          Remove\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n  <ion-fab bottom right>\n\n    <button (click)="addCountertop()" ion-fab mini><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\farrj\Countertops\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_measured_countertops_service_measured_countertops_service__["a" /* MeasuredCountertopsServiceProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_job_service_job_service__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl, alertCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.title = "Countertops";
    }
    HomePage.prototype.loadJobs = function () {
        return this.dataService.getJobs();
    };
    HomePage.prototype.loadUsers = function () {
        return this.dataService.getUsers();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\farrj\Countertops\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n<ion-list>\n\n\n\n  <ion-item *ngFor="let user of loadUsers(); let i = index">\n\n    <h2>\n\n      Welcome {{user.name}}!\n\n    </h2>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>Select a Job: </ion-label>\n\n    <ion-select placeholder="Select One">\n\n      <ion-option *ngFor="let job of loadJobs(); let i = index">{{job.name}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>Date of Measure: </ion-label>\n\n    <ion-input type="date"></ion-input>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\farrj\Countertops\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_job_service_job_service__["a" /* JobServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the JobServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var JobServiceProvider = /** @class */ (function () {
    function JobServiceProvider() {
        this.jobs = [
            { name: "Living Word Dream Center" },
            { name: "Shawnee Lofts" }
        ];
        this.users = [
            { name: "Kelsy" }
        ];
        console.log('Hello JobServiceProvider Provider');
    }
    JobServiceProvider.prototype.getJobs = function () {
        return this.jobs;
    };
    JobServiceProvider.prototype.getUsers = function () {
        return this.users;
    };
    JobServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], JobServiceProvider);
    return JobServiceProvider;
}());

//# sourceMappingURL=job-service.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(353);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_job_service_job_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_measure_service_measure_service__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_measured_countertops_service_measured_countertops_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["g" /* ReactiveFormsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_job_service_job_service__["a" /* JobServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_measure_service_measure_service__["a" /* MeasureServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_measured_countertops_service_measured_countertops_service__["a" /* MeasuredCountertopsServiceProvider */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\farrj\Countertops\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\farrj\Countertops\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeasureServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the MeasureServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MeasureServiceProvider = /** @class */ (function () {
    function MeasureServiceProvider() {
        this.countertopTypes = [
            { name: "Straight" },
            { name: "L-Shape Right" },
            { name: "L-Shape Left" },
            { name: "U-Shape" },
        ];
        console.log('Hello MeasureServiceProvider Provider');
    }
    MeasureServiceProvider.prototype.getCountertopTypes = function () {
        return this.countertopTypes;
    };
    MeasureServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MeasureServiceProvider);
    return MeasureServiceProvider;
}());

//# sourceMappingURL=measure-service.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map