exports.ids = [5];
exports.modules = {

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("36c7cbf8", content, true, context)
};

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_cb5849c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_cb5849c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_cb5849c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_cb5849c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_cb5849c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_cb5849c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".contentContainer[data-v-cb5849c4]{position:absolute;overflow:auto;height:100%;width:100%;display:grid;grid-template-rows:60vh 40vh}.homeTitle[data-v-cb5849c4]{position:relative;font-size:10vw;padding:0 0 0 5%}.skillAndLogo[data-v-cb5849c4]{position:relative;display:grid;grid-template-columns:6fr 4fr;grid-template-rows:auto}#homeLogoID[data-v-cb5849c4]{-o-object-fit:contain;object-fit:contain}.logoHolder[data-v-cb5849c4]{display:flex;justify-content:center}.skillHolder[data-v-cb5849c4]{font-size:1vw}.skillClass[data-v-cb5849c4]{padding:2%;display:inline-block;-webkit-animation:jump-data-v-cb5849c4 .5s linear infinite;animation:jump-data-v-cb5849c4 .5s linear infinite}.skillHolder[data-v-cb5849c4] :hover{transform:scale(1.5)}.skillHolder[data-v-cb5849c4] :nth-child(2){-webkit-animation-delay:.25s;animation-delay:.25s}.skillHolder[data-v-cb5849c4] :nth-child(3){-webkit-animation-delay:.5s;animation-delay:.5s}.skillHolder[data-v-cb5849c4] :nth-child(4){-webkit-animation-delay:.75s;animation-delay:.75s}.skillHolder[data-v-cb5849c4] :nth-child(5){-webkit-animation-delay:1s;animation-delay:1s}.skillHolder[data-v-cb5849c4] :nth-child(6){-webkit-animation-delay:1.25s;animation-delay:1.25s}.skillHolder[data-v-cb5849c4] :nth-child(7){-webkit-animation-delay:1.5s;animation-delay:1.5s}.skillHolder[data-v-cb5849c4] :nth-child(8){-webkit-animation-delay:1.75s;animation-delay:1.75s}.skillHolder[data-v-cb5849c4] :nth-child(9){-webkit-animation-delay:2s;animation-delay:2s}.skillHolder[data-v-cb5849c4] :nth-child(10){-webkit-animation-delay:2.25s;animation-delay:2.25s}.skillHolder[data-v-cb5849c4] :nth-child(11){-webkit-animation-delay:2.5s;animation-delay:2.5s}.skillHolder[data-v-cb5849c4] :nth-child(12){-webkit-animation-delay:2.75s;animation-delay:2.75s}@-webkit-keyframes jump-data-v-cb5849c4{0%{transform:translateY(0)}50%{transform:translateY(1%)}to{transform:translateY(0)}}@keyframes jump-data-v-cb5849c4{0%{transform:translateY(0)}50%{transform:translateY(1%)}to{transform:translateY(0)}}@media only screen and (max-width:600px){.contentContainer[data-v-cb5849c4]{grid-template-rows:25vh 55vh}.homeTitle[data-v-cb5849c4]{font-size:14vw;padding:0;margin:0}.skillAndLogo[data-v-cb5849c4]{top:0;grid-template-columns:auto}.skillHolder[data-v-cb5849c4]{font-size:3.5vw}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=4d685c9c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('HomePage')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=4d685c9c&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/HomePage.vue?vue&type=template&id=cb5849c4&scoped=true&
var HomePagevue_type_template_id_cb5849c4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contentContainer"},[_vm._ssrNode("<div class=\"homeTitle\" data-v-cb5849c4><p id=\"homeTitle1\" data-v-cb5849c4>FULL STACK</p> <p id=\"homeTitle2\" data-v-cb5849c4>ENGINEER</p></div> <div class=\"skillAndLogo\" data-v-cb5849c4><div class=\"skillHolder\" data-v-cb5849c4><div class=\"skillClass\" data-v-cb5849c4>Javascript</div> <div class=\"skillClass\" data-v-cb5849c4>Java</div> <div class=\"skillClass\" data-v-cb5849c4>MongoDB</div> <div class=\"skillClass\" data-v-cb5849c4>NodeJS</div> <div class=\"skillClass\" data-v-cb5849c4>Express</div> <div class=\"skillClass\" data-v-cb5849c4>Unity 3D</div> <div class=\"skillClass\" data-v-cb5849c4>Angular</div> <div class=\"skillClass\" data-v-cb5849c4>React</div> <div class=\"skillClass\" data-v-cb5849c4>VueJS</div> <div class=\"skillClass\" data-v-cb5849c4>NuxtJS</div> <div class=\"skillClass\" data-v-cb5849c4>HTML5</div> <div class=\"skillClass\" data-v-cb5849c4>CSS3</div></div> <div class=\"logoHolder\" data-v-cb5849c4><img id=\"homeLogoID\" src=\"/img/common/homelogo.png\" alt=\"Aghil Jose Logo\" class=\"logoImg\" data-v-cb5849c4></div></div>")])}
var HomePagevue_type_template_id_cb5849c4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/HomePage.vue?vue&type=template&id=cb5849c4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomePage.vue?vue&type=script&lang=js&
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
/* harmony default export */ var HomePagevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/HomePage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HomePagevue_type_script_lang_js_ = (HomePagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HomePage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HomePagevue_type_script_lang_js_,
  HomePagevue_type_template_id_cb5849c4_scoped_true_render,
  HomePagevue_type_template_id_cb5849c4_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "cb5849c4",
  "7fcdc650"
  
)

/* harmony default export */ var HomePage = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  transition: 'fade',

  data() {
    return {
      title: 'Aghil Jose | Full Stack Engineer'
    };
  },

  head() {
    return {
      title: this.title,
      meta: [{
        hid: 'home',
        name: 'Home Portfolio',
        content: 'The portfolio and blog of Full Stack Engineer Aghil Jose'
      }]
    };
  },

  mounted() {},

  methods: {
    introAnimRemove() {
      document.getElementById('introAnimComp').style.opacity = 0;
      setTimeout(this.sendElementDown, 1000);
    },

    sendElementDown() {
      document.getElementById('introAnimComp').style.display = 'none';
    }

  },
  components: {
    HomePage: HomePage
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function pages_injectStyles (context) {
  
  
}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  pages_injectStyles,
  "4d685c9c",
  "3bef225e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map