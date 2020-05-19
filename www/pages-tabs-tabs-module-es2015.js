(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\t<!-- Now all the previous code has been erased and new html code introduced to root our tab -->\n\t<ion-tab-bar slot=\"bottom\">\n\t\t<!-- This slot bottom will generate bar in the bottom part-with 4 tabs -->\n\n\t\t<ion-tab-button tab=\"characters\">\n\t\t\t<ion-icon name=\"people-circle-outline\"></ion-icon>\n\t\t\t<!-- This icons I retrieved from the following website-->\n\t\t\t<!-- https://ionicons.com/ -->\n\t\t\t<ion-label>Characters</ion-label>\n\t\t</ion-tab-button>\n\n\t\t<ion-tab-button tab=\"episodes\">\n\t\t\t<ion-icon name=\"file-tray-full-outline\"></ion-icon>\n\t\t\t<ion-label>Episodes</ion-label>\n\t\t</ion-tab-button>\n\n\t\t<ion-tab-button tab=\"quotes\">\n\t\t\t<ion-icon name=\"receipt-outline\"></ion-icon>\n\t\t\t<ion-label>Quotes</ion-label>\n\t\t</ion-tab-button>\n        \n\t\t<ion-tab-button tab=\"deaths\">\n\t\t\t<ion-icon name=\"skull-outline\"></ion-icon>\n\t\t\t<ion-label>Deaths</ion-label>\n\t\t</ion-tab-button>\n\n\t</ion-tab-bar>\n\n</ion-tabs>");

/***/ }),

/***/ "./src/app/pages/tabs/tabs-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");



// After set up view and main path, we have to set up the rooting for the tabs!  

//Code based upon Mikhail Timoteef, lecturer from CCT, module Mobile Development
const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'logo',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | logo-logo-module */ "logo-logo-module").then(__webpack_require__.bind(null, /*! ../logo/logo.module */ "./src/app/pages/logo/logo.module.ts")).then(m => m.LogoPageModule)
                    },
                ]
            },
            {
                path: 'characters',
                //this will be written as tabs/characters
                children: [
                    {
                        path: '',
                        //the first empty path for the characters will go to characters.module, this responsible for rooting the files for my app 
                        loadChildren: () => Promise.all(/*! import() | characters-characters-module */[__webpack_require__.e("common"), __webpack_require__.e("characters-characters-module")]).then(__webpack_require__.bind(null, /*! ../characters/characters.module */ "./src/app/pages/characters/characters.module.ts")).then(m => m.CharactersPageModule)
                    },
                    {
                        path: ':id',
                        //we set a variable ID to look for the content we would like
                        loadChildren: () => Promise.all(/*! import() | character-details-character-details-module */[__webpack_require__.e("common"), __webpack_require__.e("character-details-character-details-module")]).then(__webpack_require__.bind(null, /*! ../character-details/character-details.module */ "./src/app/pages/character-details/character-details.module.ts")).then(m => m.CharacterDetailsPageModule)
                    }
                ]
            },
            {
                path: 'episodes',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | episodes-episodes-module */[__webpack_require__.e("common"), __webpack_require__.e("episodes-episodes-module")]).then(__webpack_require__.bind(null, /*! ../episodes/episodes.module */ "./src/app/pages/episodes/episodes.module.ts")).then(m => m.EpisodesPageModule)
                    },
                    {
                        path: ':id',
                        loadChildren: () => Promise.all(/*! import() | episode-details-episode-details-module */[__webpack_require__.e("common"), __webpack_require__.e("episode-details-episode-details-module")]).then(__webpack_require__.bind(null, /*! ../episode-details/episode-details.module */ "./src/app/pages/episode-details/episode-details.module.ts")).then(m => m.EpisodeDetailsPageModule)
                    }
                ]
            },
            {
                path: 'deaths',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | deaths-deaths-module */[__webpack_require__.e("common"), __webpack_require__.e("deaths-deaths-module")]).then(__webpack_require__.bind(null, /*! ../deaths/deaths.module */ "./src/app/pages/deaths/deaths.module.ts")).then(m => m.DeathsPageModule)
                    },
                ]
            },
            {
                path: 'quotes',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | quotes-quotes-module */[__webpack_require__.e("common"), __webpack_require__.e("quotes-quotes-module")]).then(__webpack_require__.bind(null, /*! ../quotes/quotes.module */ "./src/app/pages/quotes/quotes.module.ts")).then(m => m.QuotesPageModule)
                    },
                    {
                        path: ':id',
                        loadChildren: () => Promise.all(/*! import() | quote-details-quote-details-module */[__webpack_require__.e("common"), __webpack_require__.e("quote-details-quote-details-module")]).then(__webpack_require__.bind(null, /*! ../quote-details/quote-details.module */ "./src/app/pages/quote-details/quote-details.module.ts")).then(m => m.QuoteDetailsPageModule)
                    }
                ]
            }
        ]
    },
    //First page open will be logo, because the empty path redirects to the page selected
    {
        path: '',
        redirectTo: '/tabs/logo',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/pages/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
    ngOnInit() {
    }
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/tabs/tabs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module-es2015.js.map