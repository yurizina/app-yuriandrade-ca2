function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logo-logo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/logo/logo.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/logo/logo.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLogoLogoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- A front-page to the app!-->\n<ion-content class=\"\">\n<h1> Welcome <i>Banjo Eyes</i>! </h1> \n<h2> Enjoy this amateur fan app</h2>\n<img src=\"/assets/img/logobb.jpg\">\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/logo/logo-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/logo/logo-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: LogoPageRoutingModule */

  /***/
  function srcAppPagesLogoLogoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoPageRoutingModule", function () {
      return LogoPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _logo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./logo.page */
    "./src/app/pages/logo/logo.page.ts");

    var routes = [{
      path: '',
      component: _logo_page__WEBPACK_IMPORTED_MODULE_3__["LogoPage"]
    }];

    var LogoPageRoutingModule = function LogoPageRoutingModule() {
      _classCallCheck(this, LogoPageRoutingModule);
    };

    LogoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LogoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/logo/logo.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/logo/logo.module.ts ***!
    \*******************************************/

  /*! exports provided: LogoPageModule */

  /***/
  function srcAppPagesLogoLogoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoPageModule", function () {
      return LogoPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _logo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./logo-routing.module */
    "./src/app/pages/logo/logo-routing.module.ts");
    /* harmony import */


    var _logo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./logo.page */
    "./src/app/pages/logo/logo.page.ts");

    var LogoPageModule = function LogoPageModule() {
      _classCallCheck(this, LogoPageModule);
    };

    LogoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _logo_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogoPageRoutingModule"]],
      declarations: [_logo_page__WEBPACK_IMPORTED_MODULE_6__["LogoPage"]]
    })], LogoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/logo/logo.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/logo/logo.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLogoLogoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1, h2 {\n  font-family: \"Goudy Old Style\", Garamond, \"Big Caslon\", \"Times New Roman\", serif;\n  color: #1f6032;\n  text-align: center;\n  /** Font from:\n  https://www.cssfontstack.com/Goudy-Old-Style\n  **/\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYXBwLXl1cmlhbmRyYWRlLWNhMi9zcmMvYXBwL3BhZ2VzL2xvZ28vbG9nby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ28vbG9nby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnRkFBQTtFQUNBLGNBQUE7RUFDRCxrQkFBQTtFQUVBOztJQUFBO0FDQ0giLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dvL2xvZ28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5oMSxoMntcbiAgICBmb250LWZhbWlseTogXCJHb3VkeSBPbGQgU3R5bGVcIiwgR2FyYW1vbmQsIFwiQmlnIENhc2xvblwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbiAgICBjb2xvcjogIzFmNjAzMjtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgLyoqIEZvbnQgZnJvbTpcbiAgIGh0dHBzOi8vd3d3LmNzc2ZvbnRzdGFjay5jb20vR291ZHktT2xkLVN0eWxlXG4gICAqKi9cbn0iLCJoMSwgaDIge1xuICBmb250LWZhbWlseTogXCJHb3VkeSBPbGQgU3R5bGVcIiwgR2FyYW1vbmQsIFwiQmlnIENhc2xvblwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbiAgY29sb3I6ICMxZjYwMzI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyoqIEZvbnQgZnJvbTpcbiAgaHR0cHM6Ly93d3cuY3NzZm9udHN0YWNrLmNvbS9Hb3VkeS1PbGQtU3R5bGVcbiAgKiovXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/logo/logo.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/logo/logo.page.ts ***!
    \*****************************************/

  /*! exports provided: LogoPage */

  /***/
  function srcAppPagesLogoLogoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoPage", function () {
      return LogoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LogoPage = /*#__PURE__*/function () {
      function LogoPage() {
        _classCallCheck(this, LogoPage);
      }

      _createClass(LogoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LogoPage;
    }();

    LogoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/logo/logo.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logo.page.scss */
      "./src/app/pages/logo/logo.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LogoPage);
    /***/
  }
}]);
//# sourceMappingURL=logo-logo-module-es5.js.map