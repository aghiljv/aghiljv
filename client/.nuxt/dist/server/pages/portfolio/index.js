exports.ids = [7];
exports.modules = {

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("06752056", content, true, context)
};

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("96b2af26", content, true, context)
};

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("191a3a52", content, true, context)
};

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioMain_vue_vue_type_style_index_0_id_791461a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioMain_vue_vue_type_style_index_0_id_791461a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioMain_vue_vue_type_style_index_0_id_791461a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioMain_vue_vue_type_style_index_0_id_791461a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioMain_vue_vue_type_style_index_0_id_791461a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioMain_vue_vue_type_style_index_0_id_791461a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".portfolioHolder[data-v-791461a2]{height:100%;display:inline-flex}.portfolioHolder[data-v-791461a2],.portImageHolder[data-v-791461a2]{align-items:center;justify-content:center;width:100%}.portImageHolder[data-v-791461a2]{height:60%;display:flex;opacity:1;transition:.5s}.portImage[data-v-791461a2]{width:100%;height:100%;transition:.5s;-o-object-fit:contain;object-fit:contain}.portfolioItem[data-v-791461a2]{position:absolute;top:10%;left:5%;height:80%;width:50%;padding:1%;text-align:center;display:flex;flex-direction:column;justify-content:space-around;align-items:center;z-index:-1}.portName[data-v-791461a2]{text-align:left;font-size:5vw;width:100%;justify-content:center;display:flex}.portfolioDesc[data-v-791461a2],.portName[data-v-791461a2],.portNumber[data-v-791461a2]{transition:.5s}.portNumber[data-v-791461a2]{font-size:1vw;width:100%;display:flex;justify-content:center;align-items:center}@media only screen and (max-width:600px){.portfolioHolder[data-v-791461a2]{flex-direction:column;height:60%;padding:5% 0}.portfolioItem[data-v-791461a2],.portImageHolder[data-v-791461a2]{width:100%}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioNav_vue_vue_type_style_index_0_id_c7608f5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioNav_vue_vue_type_style_index_0_id_c7608f5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioNav_vue_vue_type_style_index_0_id_c7608f5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioNav_vue_vue_type_style_index_0_id_c7608f5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioNav_vue_vue_type_style_index_0_id_c7608f5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioNav_vue_vue_type_style_index_0_id_c7608f5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".portfolioNavHolder[data-v-c7608f5c]{display:inline-flex;text-decoration:none}.portfolioNavHolder[data-v-c7608f5c],.portImageHolder[data-v-c7608f5c]{height:100%;align-items:center;width:100%;transition:.5s}.portImageHolder[data-v-c7608f5c]{position:relative;display:flex;justify-content:flex-end;opacity:1;margin:1%;-webkit-filter:grayscale(1);filter:grayscale(1);letter-spacing:2px;font-size:3.5vw;text-transform:uppercase;-webkit-text-stroke:1px var(--color-primary);-webkit-text-fill-color:hsla(0,0%,100%,0);z-index:0}.portImageHolder[data-v-c7608f5c]:hover{-webkit-filter:grayscale(0);filter:grayscale(0);-webkit-text-fill-color:var(--color-primary);letter-spacing:0;z-index:6}.portImage[data-v-c7608f5c]{width:100%;transition:.5s}.portName[data-v-c7608f5c]{font-size:2vw}@media only screen and (max-width:600px){.portImageHolder[data-v-c7608f5c]{font-size:7.5vw}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6f83457d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6f83457d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6f83457d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6f83457d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6f83457d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6f83457d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".portfolioContainer[data-v-6f83457d]{position:absolute;width:100%;height:100%;overflow:auto;bottom:0;justify-content:space-around;align-items:center}.portfolioContainer[data-v-6f83457d]::-webkit-scrollbar{display:none}.portContentContainer[data-v-6f83457d]{position:fixed;height:100%;width:100%;left:0}.portNavContainer[data-v-6f83457d]{position:absolute;width:50%;right:0;top:10%;margin:1%;overflow:auto;-ms-overflow-style:none}@media only screen and (max-width:600px){.portNavContainer[data-v-6f83457d]{width:100%}.portContentContainer[data-v-6f83457d]{display:none}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/portfolio/index.vue?vue&type=template&id=6f83457d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{directives:[{name:"touch",rawName:"v-touch:swipe.right",value:(_vm.swipeUpAction),expression:"swipeUpAction",arg:"swipe",modifiers:{"right":true}},{name:"touch",rawName:"v-touch:swipe.left",value:(_vm.swipeDownAction),expression:"swipeDownAction",arg:"swipe",modifiers:{"left":true}}],staticClass:"portfolioContainer"},[_vm._ssrNode("<div class=\"portContentContainer\" data-v-6f83457d>","</div>",_vm._l((_vm.portfolios),function(portfolio,index){return _c('PortfolioMain',{key:portfolio._id,attrs:{"item":portfolio,"index":index,"portfolioName":portfolio.name,"portfolioImage":portfolio.titleImage,"portfolioBrief":portfolio.briefdesc,"activePortIndex":_vm.activePortIndex}})}),1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"portNavContainer\" data-v-6f83457d>","</div>",_vm._l((_vm.portfolios),function(portfolio,index){return _c('PortfolioNav',{key:portfolio._id,attrs:{"index":index,"portfolioName":portfolio.name,"portfolioImage":portfolio.titleImage},on:{"setActiveOpacity":function($event){return _vm.setActiveOpacity($event)},"setDetPos":function($event){return _vm.setDetPos($event)}}})}),1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/portfolio/index.vue?vue&type=template&id=6f83457d&scoped=true&

// EXTERNAL MODULE: ./static/ServerService.js
var ServerService = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/portfolio/PortfolioMain.vue?vue&type=template&id=791461a2&scoped=true&
var PortfolioMainvue_type_template_id_791461a2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"portfolioHolder",attrs:{"id":"portfolioDisplay"}},[_vm._ssrNode("<div"+(_vm._ssrAttr("id",'portfolioItem' + _vm.index))+" class=\"portfolioItem\""+(_vm._ssrStyle(null,[_vm.index == _vm.activePortIndex ? { opacity: '1', 'z-index': '10' } : { opacity: '0' }], null))+" data-v-791461a2><div class=\"portImageHolder\" data-v-791461a2><img"+(_vm._ssrAttr("src",("/img/portfolio/" + _vm.portfolioImage + "hover.jpg")))+" alt=\"portfolioImage\" class=\"portImage\" data-v-791461a2></div></div>")])}
var PortfolioMainvue_type_template_id_791461a2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/portfolio/PortfolioMain.vue?vue&type=template&id=791461a2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/portfolio/PortfolioMain.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PortfolioMainvue_type_script_lang_js_ = ({
  props: ['portfolioName', 'portfolioImage', 'portfolioBrief', 'index', 'activePortIndex']
});
// CONCATENATED MODULE: ./components/portfolio/PortfolioMain.vue?vue&type=script&lang=js&
 /* harmony default export */ var portfolio_PortfolioMainvue_type_script_lang_js_ = (PortfolioMainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/portfolio/PortfolioMain.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(73)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  portfolio_PortfolioMainvue_type_script_lang_js_,
  PortfolioMainvue_type_template_id_791461a2_scoped_true_render,
  PortfolioMainvue_type_template_id_791461a2_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "791461a2",
  "e8fee79a"
  
)

/* harmony default export */ var PortfolioMain = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/portfolio/PortfolioNav.vue?vue&type=template&id=c7608f5c&scoped=true&
var PortfolioNavvue_type_template_id_c7608f5c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nuxt-link',{staticClass:"portfolioNavHolder",attrs:{"id":'portNav' + _vm.index,"to":'/portfolio/' + _vm.portfolioName}},[_c('div',{staticClass:"portImageHolder",on:{"mousemove":function($event){return _vm.mouseMove($event)},"mouseover":function($event){return _vm.activePort(_vm.index)},"mouseleave":function($event){return _vm.activePort(-1)}}},[_vm._v("\n\t\t"+_vm._s(_vm.portfolioName)+"\n\t")])])}
var PortfolioNavvue_type_template_id_c7608f5c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/portfolio/PortfolioNav.vue?vue&type=template&id=c7608f5c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/portfolio/PortfolioNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PortfolioNavvue_type_script_lang_js_ = ({
  props: ['portfolioName', 'portfolioImage', 'index'],
  methods: {
    activePort(index) {
      this.$emit('setActiveOpacity', index);
    },

    mouseMove(e) {
      this.$emit('setDetPos', e);
    }

  }
});
// CONCATENATED MODULE: ./components/portfolio/PortfolioNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var portfolio_PortfolioNavvue_type_script_lang_js_ = (PortfolioNavvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/portfolio/PortfolioNav.vue



function PortfolioNav_injectStyles (context) {
  
  var style0 = __webpack_require__(75)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PortfolioNav_component = Object(componentNormalizer["a" /* default */])(
  portfolio_PortfolioNavvue_type_script_lang_js_,
  PortfolioNavvue_type_template_id_c7608f5c_scoped_true_render,
  PortfolioNavvue_type_template_id_c7608f5c_scoped_true_staticRenderFns,
  false,
  PortfolioNav_injectStyles,
  "c7608f5c",
  "18f92599"
  
)

/* harmony default export */ var PortfolioNav = (PortfolioNav_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/portfolio/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var portfoliovue_type_script_lang_js_ = ({
  transition: "fade",
  components: {
    PortfolioMain: PortfolioMain,
    PortfolioNav: PortfolioNav
  },

  data() {
    return {
      scrollState: null,
      swipeState: null,
      scrollDirecton: 0,
      currentIndex: 0,
      minIndex: 0,
      error: "",
      currentDeltaY: 0,
      firstLoad: true,
      activePortIndex: -1
    };
  },

  head() {
    return {
      title: "Portfolio | Aghil Jose | Full Stack Engineer",
      meta: [{
        hid: "og:image",
        property: "og:image",
        content: "/img/common/ogPortfolio.png"
      }, {
        hid: "og:description",
        name: "og:description",
        content: "The portfolio of Aghil Jose | Full Stack Engineer"
      }, {
        hid: "og:type",
        name: "og:type",
        content: "portfolio"
      }]
    };
  },

  mounted() {
    document.getElementById("mainContent").addEventListener("wheel", this.handleScroll);
  },

  methods: {
    handleScroll(e) {
      this.firstLoad = false;

      if (e.deltaY < -20) {
        this.scrollState = "up";
      } else if (e.deltaY > 20) {
        this.scrollState = "down";
      }

      if (e.deltaY == -1 || e.deltaY == 1) {
        this.scrollState = null;
      }
    },

    switchPortfolio(opacityState) {
      document.getElementById("portfolioDisplay").style.opacity = opacityState;
    },

    swipeUpAction() {
      this.scrollState = "up";
      setTimeout(() => {
        this.scrollState = null;
      }, 500);
    },

    swipeDownAction() {
      this.scrollState = "down";
      setTimeout(() => {
        this.scrollState = null;
      }, 500);
    },

    setActiveOpacity(index) {
      this.activePortIndex = index;
    },

    setDetPos(e) {
      let currentNavId = "portNav" + this.activePortIndex;
      let currentDetId = "portfolioItem" + this.activePortIndex;
      let centreWidth = document.getElementById(currentNavId).clientWidth / 2;
      let centreHeight = document.getElementById(currentNavId).clientHeight / 2;
      let changeY = (centreHeight - e.offsetY) / -50;
      let changeX = (centreWidth - e.offsetX) / -20;
      document.getElementById(currentDetId).style.transform = "translate(" + changeX + "%, " + changeY + "%)";
    }

  },
  watch: {
    scrollState() {
      if (this.scrollState == "up") {
        if (this.currentIndex > 0) {
          // this.switchPortfolio(0);
          setTimeout(() => {
            this.currentIndex--;
          }, 500);
        }
      } else if (this.scrollState == "down") {
        if (this.currentIndex < this.maxIndex - 1) {
          // this.switchPortfolio(0);
          setTimeout(() => {
            this.currentIndex++;
          }, 500);
        }
      } else {// this.switchPortfolio(1);
      }
    }

  },
  computed: {
    portfolios() {
      return this.$store.state.portfolios.portfolios;
    },

    // portfolio() {
    // 	return this.portfolios[this.currentIndex];
    // },
    maxIndex() {
      return this.$store.state.portfolios.portfolios.length;
    }

  }
});
// CONCATENATED MODULE: ./pages/portfolio/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_portfoliovue_type_script_lang_js_ = (portfoliovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/portfolio/index.vue



function portfolio_injectStyles (context) {
  
  var style0 = __webpack_require__(77)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var portfolio_component = Object(componentNormalizer["a" /* default */])(
  pages_portfoliovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  portfolio_injectStyles,
  "6f83457d",
  "338873ca"
  
)

/* harmony default export */ var portfolio = __webpack_exports__["default"] = (portfolio_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map