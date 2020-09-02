exports.ids = [1];
exports.modules = {

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("472a7d9f", content, true, context)
};

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_7535a7c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_7535a7c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_7535a7c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_7535a7c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_7535a7c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_7535a7c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".aboutImg[data-v-7535a7c0]{position:absolute;width:25%;left:0;top:5%}.aboutTextContents[data-v-7535a7c0]{position:absolute;overflow:auto;height:100%;width:100%;display:grid;grid-template-rows:65vh 35vh}.aboutTextContents[data-v-7535a7c0]::-webkit-scrollbar{display:none}.aboutTitleContents[data-v-7535a7c0]{position:relative;display:grid;grid-template-columns:30% 70%}.aboutTitleHolder[data-v-7535a7c0]{position:relative;font-size:8vw;color:var(--color-primary);top:25%;left:-15%;height:75%}.aboutTextHolder[data-v-7535a7c0]{left:25%;top:-35%;padding:1%;position:relative;display:grid;grid-template-columns:auto auto;width:75%;height:135%}.indTextHolder[data-v-7535a7c0]{position:relative;height:100%;padding:2%}p[data-v-7535a7c0]{padding-top:5%;font-size:1vw}.experienceHolder[data-v-7535a7c0]{position:relative;top:40%}.experienceTitle[data-v-7535a7c0]{font-size:2vw}@media only screen and (max-width:600px){.aboutTextContents[data-v-7535a7c0]{grid-template-columns:auto;grid-template-rows:100vw 100vh}.aboutTitleContents[data-v-7535a7c0]{grid-template-columns:auto;grid-template-rows:75vw 25vw}.aboutImg[data-v-7535a7c0]{top:0;height:75vw;width:auto}.aboutTitleHolder[data-v-7535a7c0]{font-size:10vw;left:0;top:0;display:flex;height:100%;align-items:center}.aboutTextHolder[data-v-7535a7c0]{top:0;left:0;width:100%;height:90vw;grid-template-columns:auto}.indTextHolder[data-v-7535a7c0]{padding:0}.experienceHolder[data-v-7535a7c0]{top:0;left:0}.experienceTitle[data-v-7535a7c0]{font-size:5vw}p[data-v-7535a7c0]{font-size:3vw}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=7535a7c0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"aboutTextContents\" data-v-7535a7c0><div class=\"aboutTitleContents\" data-v-7535a7c0><div data-v-7535a7c0><img src=\"/img/common/about.jpg\" alt=\"Aghil Jose\" class=\"aboutImg\" data-v-7535a7c0></div> <div class=\"aboutTitleHolder\" data-v-7535a7c0>HEY THERE, I'M <br data-v-7535a7c0>AGHIL JOSE</div></div> <div class=\"aboutTextHolder\" data-v-7535a7c0><div class=\"indTextHolder\" data-v-7535a7c0><p data-v-7535a7c0>\n\t\t\t\t\tA Full Stack Engineer based in Trivandrum, Kerala, India. I'm into learning new technologies as\n\t\t\t\t\twell as working in challenging environments.\n\t\t\t\t</p> <p data-v-7535a7c0>\n\t\t\t\t\tI often build applications that leaves people wondering, &quot;How was this built?&quot;. I hold\n\t\t\t\t\texperience in End-to-End Application Development and have worked with Accenture and Nissan Motor\n\t\t\t\t\tCoorperation. Experienced in Automotive visualization and virtual testing environment for\n\t\t\t\t\tAutonomous vehicles.\n\t\t\t\t</p> <p data-v-7535a7c0>\n\t\t\t\t\tA team player with strong inter-personal skills, with the ability to collaborate with\n\t\t\t\t\tcross-functional teams. Apart from these, I love football, travel, photography and reading.\n\t\t\t\t</p></div> <div class=\"indTextHolder experienceHolder\" data-v-7535a7c0><div class=\"experienceTitle\" data-v-7535a7c0>EXPERIENCE</div> <p data-v-7535a7c0>\n\t\t\t\t\tNissan Motor Coorporation / Software Engineer / Sep 2018 - Present<br data-v-7535a7c0>\n\t\t\t\t\tAccenture / Associate Software Engineer / Jan 2018 - Jun 2018\n\t\t\t\t</p></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=7535a7c0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&
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
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  transition: 'fade',

  data() {
    return {
      title: 'About | Aghil Jose | Full Stack Engineer'
    };
  },

  head() {
    return {
      title: this.title,
      meta: [{
        hid: 'about',
        name: 'About',
        content: 'About Full Stack Engineer Aghil Jose'
      }]
    };
  },

  components: {}
});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/about.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7535a7c0",
  "1c374799"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about.js.map