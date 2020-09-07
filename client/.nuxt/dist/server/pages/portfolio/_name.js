exports.ids = [6];
exports.modules = {

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("42220f5c", content, true, context)
};

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_ca287b9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_ca287b9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_ca287b9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_ca287b9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_ca287b9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_ca287b9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".backButton[data-v-ca287b9c]{position:absolute;text-decoration:none;top:10%;color:var(--primary-color);z-index:6}.portfolioContainer[data-v-ca287b9c]{position:absolute;width:100%;height:100%;overflow:auto;-ms-overflow-style:none;color:var(--primary-color)}.portfolioContainer[data-v-ca287b9c]::-webkit-scrollbar{display:none}.portfolioTitleImageHolder[data-v-ca287b9c]{top:0;width:100%;height:60%;display:flex;justify-content:center}.portfolioTitleImg[data-v-ca287b9c]{height:100%;-o-object-fit:cover;object-fit:cover}.portfolioTitle[data-v-ca287b9c]{top:40%;width:100%;text-align:center;font-size:4vw}.portfolioContentHolder[data-v-ca287b9c]{display:flex;justify-content:center;width:100%;top:50%;font-size:1vw}@media only screen and (max-width:600px){.backButton[data-v-ca287b9c]{position:unset}.portfolioTitleImageHolder[data-v-ca287b9c]{margin-top:2%;height:auto}.portfolioTitleImg[data-v-ca287b9c]{width:100%}.portfolioTitle[data-v-ca287b9c]{font-size:8vw}.portfolioContent[data-v-ca287b9c]{width:100%}.portfolioContentHolder[data-v-ca287b9c]{font-size:3vw}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/portfolio/_name.vue?vue&type=template&id=ca287b9c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"portfolioContainer\" data-v-ca287b9c>","</div>",[_c('nuxt-link',{staticClass:"backButton",attrs:{"id":"portfolioDisplay","to":'/portfolio/'}},[_vm._v("« Return to List "),_c('br'),_vm._v("\n\t\t\tPORTFOLIOS")]),_vm._ssrNode(" <div class=\"portfolioTitleImageHolder\" data-v-ca287b9c><img"+(_vm._ssrAttr("src",("/img/portfolio/" + (_vm.portfolioItem.titleImage) + ".jpg")))+" alt=\"portfolioImage\" class=\"portfolioTitleImg\" data-v-ca287b9c></div> <div class=\"portfolioTitle\" data-v-ca287b9c>"+_vm._ssrEscape(_vm._s(_vm.portfolioItem.name))+"</div> <div class=\"portfolioContentHolder\" data-v-ca287b9c><div class=\"portfolioContent\" data-v-ca287b9c>"+(_vm._s(_vm.portfolioItem.content))+"</div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/portfolio/_name.vue?vue&type=template&id=ca287b9c&scoped=true&

// EXTERNAL MODULE: ./static/ServerService.js
var ServerService = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/portfolio/_name.vue?vue&type=script&lang=js&
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

/* harmony default export */ var _namevue_type_script_lang_js_ = ({
  transition: 'fade',

  head() {
    return {
      title: this.title,
      meta: [{
        hid: 'portfolio',
        name: 'Portfolio',
        content: 'The portfolio of Full Stack Engineer Aghil Jose'
      }]
    };
  },

  data() {
    return {
      title: 'Portfolio | Aghil Jose | Full Stack Engineer',
      portfolioItem: {},
      currentRoute: ''
    };
  },

  created() {
    this.$store.commit('pageTitle/set', 'PORTFOLIO');
  },

  async mounted() {
    if (this.$store.state.portfolios.portfolios.length > 1) {
      let portfoliosContent = this.$store.state.portfolios.portfolios;
      portfoliosContent.forEach(portfolioContent => {
        if (portfolioContent.name == this.$route.params.name) {
          this.portfolioItem = portfolioContent;
          this.title = this.portfolioItem.name + ' | ' + this.title;
        }
      });
    } else {
      let portfoliosContent = await ServerService["a" /* default */].getPortfolio(this.$route.params.name);
      this.portfolioItem = portfoliosContent[0];
    }
  },

  validate({
    params
  }) {
    return isNaN(+params.name);
  }

});
// CONCATENATED MODULE: ./pages/portfolio/_name.vue?vue&type=script&lang=js&
 /* harmony default export */ var portfolio_namevue_type_script_lang_js_ = (_namevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/portfolio/_name.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(86)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  portfolio_namevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ca287b9c",
  "52771b3c"
  
)

/* harmony default export */ var _name = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_name.js.map