exports.ids = [5];
exports.modules = {

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("52b06fce", content, true, context)
};

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_48892c14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_48892c14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_48892c14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_48892c14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_48892c14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_48892c14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".contentContainer[data-v-48892c14]{position:absolute;overflow:auto;height:100vh;width:100%;display:grid;grid-template-rows:6fr 4fr}.homeTitle[data-v-48892c14]{position:relative;font-size:10vw;padding:0 0 0 5%}.skillAndLogo[data-v-48892c14]{position:relative;display:grid;grid-template-columns:6fr 4fr;grid-template-rows:auto}#homeLogoID[data-v-48892c14]{-o-object-fit:contain;object-fit:contain}.logoHolder[data-v-48892c14]{display:flex;justify-content:center}.skillHolder[data-v-48892c14]{display:unset;padding:2%}.skillClass[data-v-48892c14]{padding:2%;display:inline-block;transition:.5s}.skillImageHolder[data-v-48892c14]{height:2.5vw;width:2.5vw;display:flex;flex-direction:column;justify-content:center}.skillLogo[data-v-48892c14]{-o-object-fit:contain;object-fit:contain}.skillClass[data-v-48892c14] :hover{transform:scale(1.05)}@media only screen and (max-width:600px){.contentContainer[data-v-48892c14]{height:72vh;grid-template-rows:2.5fr 5.5fr}.homeTitle[data-v-48892c14]{font-size:14vw;padding:0;margin:0}.skillAndLogo[data-v-48892c14]{top:0;grid-template-columns:auto}.skillHolder[data-v-48892c14]{display:grid;grid-template-columns:repeat(9,auto);justify-content:space-around;padding:0}.skillImageHolder[data-v-48892c14]{height:8vw;width:8vw;align-self:center}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=3754ce78&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('HomePage')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=3754ce78&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/HomePage.vue?vue&type=template&id=48892c14&scoped=true&
var HomePagevue_type_template_id_48892c14_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contentContainer"},[_vm._ssrNode("<div class=\"homeTitle\" data-v-48892c14><p id=\"homeTitle1\" data-v-48892c14>FULL STACK</p> <p id=\"homeTitle2\" data-v-48892c14>ENGINEER</p></div> <div class=\"skillAndLogo\" data-v-48892c14><div class=\"skillHolder\" data-v-48892c14><div class=\"skillClass\" data-v-48892c14><div class=\"skillImageHolder\" data-v-48892c14><img src=\"/img/homepagelogos/nuxt-icon.png\" alt=\"Nuxt JS\" class=\"skillLogo\" data-v-48892c14></div></div> <div class=\"skillClass\" data-v-48892c14><div class=\"skillImageHolder\" data-v-48892c14><img src=\"/img/homepagelogos/vue-icon.png\" alt=\"Vue JS\" class=\"skillLogo\" data-v-48892c14></div></div> <div class=\"skillClass\" data-v-48892c14><div class=\"skillImageHolder\" data-v-48892c14><img src=\"/img/homepagelogos/angular-icon.png\" alt=\"Angular\" class=\"skillLogo\" data-v-48892c14></div></div> <div class=\"skillClass\" data-v-48892c14><div class=\"skillImageHolder\" data-v-48892c14><img src=\"/img/homepagelogos/node-icon.png\" alt=\"Node JS\" class=\"skillLogo\" data-v-48892c14></div></div> <div class=\"skillClass\" data-v-48892c14><div class=\"skillImageHolder\" data-v-48892c14><img src=\"/img/homepagelogos/mongo-icon.png\" alt=\"Mongo DB\" class=\"skillLogo\" data-v-48892c14></div></div> <div class=\"skillClass\" data-v-48892c14><div class=\"skillImageHolder\" data-v-48892c14><img src=\"/img/homepagelogos/jest-icon.png\" alt=\"Jest\" class=\"skillLogo\" data-v-48892c14></div></div> <div class=\"skillClass\" data-v-48892c14><div class=\"skillImageHolder\" data-v-48892c14><img src=\"/img/homepagelogos/spring-icon.png\" alt=\"Spring\" class=\"skillLogo\" data-v-48892c14></div></div> <div class=\"skillClass\" data-v-48892c14><div class=\"skillImageHolder\" data-v-48892c14><img src=\"/img/homepagelogos/flutter-icon.png\" alt=\"Flutter\" class=\"skillLogo\" data-v-48892c14></div></div> <div class=\"skillClass\" data-v-48892c14><div class=\"skillImageHolder\" data-v-48892c14><img src=\"/img/homepagelogos/csharp-icon.png\" alt=\"C#\" class=\"skillLogo\" data-v-48892c14></div></div> <div class=\"skillClass\" data-v-48892c14><div class=\"skillImageHolder\" data-v-48892c14><img src=\"/img/homepagelogos/cpp-icon.png\" alt=\"C++\" class=\"skillLogo\" data-v-48892c14></div></div> <div class=\"skillClass\" data-v-48892c14><div class=\"skillImageHolder\" data-v-48892c14><img src=\"/img/homepagelogos/mysql-icon.png\" alt=\"MySQL\" class=\"skillLogo\" data-v-48892c14></div></div> <div class=\"skillClass\" data-v-48892c14><div class=\"skillImageHolder\" data-v-48892c14><img src=\"/img/homepagelogos/postgres-icon.png\" alt=\"PostgreSQL\" class=\"skillLogo\" data-v-48892c14></div></div> <div class=\"skillClass\" data-v-48892c14><div class=\"skillImageHolder\" data-v-48892c14><img src=\"/img/homepagelogos/unity-icon.png\" alt=\"Unity 3D\" class=\"skillLogo\" data-v-48892c14></div></div> <div class=\"skillClass\" data-v-48892c14><div class=\"skillImageHolder\" data-v-48892c14><img src=\"/img/homepagelogos/unreal-icon.png\" alt=\"Unreal Engine\" class=\"skillLogo\" data-v-48892c14></div></div> <div class=\"skillClass\" data-v-48892c14><div class=\"skillImageHolder\" data-v-48892c14><img src=\"/img/homepagelogos/git-icon.png\" alt=\"Version Control\" class=\"skillLogo\" data-v-48892c14></div></div> <div class=\"skillClass\" data-v-48892c14><div class=\"skillImageHolder\" data-v-48892c14><img src=\"/img/homepagelogos/jenkins-icon.png\" alt=\"Jenkins\" class=\"skillLogo\" data-v-48892c14></div></div> <div class=\"skillClass\" data-v-48892c14><div class=\"skillImageHolder\" data-v-48892c14><img src=\"/img/homepagelogos/photoshop-icon.png\" alt=\"Adobe Photoshop\" class=\"skillLogo\" data-v-48892c14></div></div> <div class=\"skillClass\" data-v-48892c14><div class=\"skillImageHolder\" data-v-48892c14><img src=\"/img/homepagelogos/xd-icon.png\" alt=\"Adobe XD\" class=\"skillLogo\" data-v-48892c14></div></div></div> <div class=\"logoHolder\" data-v-48892c14><img id=\"homeLogoID\" src=\"/img/common/homelogo.png\" alt=\"Aghil Jose Logo\" class=\"logoImg\" data-v-48892c14></div></div>")])}
var HomePagevue_type_template_id_48892c14_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/HomePage.vue?vue&type=template&id=48892c14&scoped=true&

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
  
  var style0 = __webpack_require__(88)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HomePagevue_type_script_lang_js_,
  HomePagevue_type_template_id_48892c14_scoped_true_render,
  HomePagevue_type_template_id_48892c14_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "48892c14",
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
  transition: "fade",

  data() {
    return {
      title: "Aghil Jose | Full Stack Engineer"
    };
  },

  head() {
    return {
      title: this.title,
      meta: [{
        hid: "home",
        name: "Home Portfolio",
        content: "The portfolio and blog of Full Stack Engineer Aghil Jose"
      }]
    };
  },

  mounted() {},

  methods: {
    introAnimRemove() {
      document.getElementById("introAnimComp").style.opacity = 0;
      setTimeout(this.sendElementDown, 1000);
    },

    sendElementDown() {
      document.getElementById("introAnimComp").style.display = "none";
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
  "3754ce78",
  "3bef225e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map