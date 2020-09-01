exports.ids = [2];
exports.modules = {

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("11117cb6", content, true, context)
};

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_3049694a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_3049694a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_3049694a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_3049694a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_3049694a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_3049694a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".backButton[data-v-3049694a]{position:absolute;text-decoration:none;top:10%;color:var(--primary-color);z-index:6}.blogContainer[data-v-3049694a]{position:absolute;width:100%;height:100%;overflow:auto;-ms-overflow-style:none;color:var(--primary-color)}.blogContainer[data-v-3049694a]::-webkit-scrollbar{display:none}.blogTitleImageHolder[data-v-3049694a]{top:0;width:100%;height:60%;display:flex;justify-content:center}.blogTitleImg[data-v-3049694a]{height:100%;-o-object-fit:cover;object-fit:cover}.blogTitle[data-v-3049694a]{top:40%;width:100%;text-align:center;font-size:4vw}.blogContentHolder[data-v-3049694a]{display:flex;justify-content:center;width:100%;top:50%;font-size:1vw}.blogContent[data-v-3049694a]{width:50%}@media only screen and (max-width:600px){.backButton[data-v-3049694a]{position:unset}.blogTitleImageHolder[data-v-3049694a]{margin-top:2%;height:auto}.blogTitleImg[data-v-3049694a]{width:100%}.blogTitle[data-v-3049694a]{font-size:8vw}.blogContent[data-v-3049694a]{width:100%}.blogContentHolder[data-v-3049694a]{font-size:3vw}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_name.vue?vue&type=template&id=3049694a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"blogContainer\" data-v-3049694a>","</div>",[_c('nuxt-link',{staticClass:"backButton",attrs:{"id":"blogDisplay","to":'/blog/'}},[_vm._v("« Return to List "),_c('br'),_vm._v("\n\t\t\tBLOGS")]),_vm._ssrNode(" <div class=\"blogTitleImageHolder\" data-v-3049694a><img"+(_vm._ssrAttr("src",("/img/blog/" + (_vm.blogItem.titleImage) + ".jpg")))+" alt=\"blogImage\" class=\"blogTitleImg\" data-v-3049694a></div> <div class=\"blogTitle\" data-v-3049694a>"+_vm._ssrEscape(_vm._s(_vm.blogItem.name))+"</div> <div class=\"blogContentHolder\" data-v-3049694a><div class=\"blogContent\" data-v-3049694a>"+(_vm._s(_vm.blogItem.content))+"</div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/_name.vue?vue&type=template&id=3049694a&scoped=true&

// EXTERNAL MODULE: ./static/ServerService.js
var ServerService = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_name.vue?vue&type=script&lang=js&
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
        hid: 'blog',
        name: 'Blog',
        content: 'The blog of Full Stack Engineer Aghil Jose'
      }]
    };
  },

  data() {
    return {
      title: '',
      blogItem: {},
      currentRoute: ''
    };
  },

  async created() {
    this.$store.commit('pageTitle/set', 'BLOG');

    if (this.$store.state.blogs.blogs.length > 1) {
      let blogsContent = this.$store.state.blogs.blogs;
      blogsContent.forEach(blogContent => {
        if (blogContent.name.includes(this.$route.params.name)) {
          this.blogItem = blogContent;
          this.title = this.blogItem.name;
        }
      });
    } else {
      let blogsContent = await ServerService["a" /* default */].getBlog(this.$route.params.name);
      this.blogItem = blogsContent[0];
    }
  },

  async mounted() {// if (this.$store.state.blogs.blogs.length > 1) {
    // 	let blogsContent = this.$store.state.blogs.blogs;
    // 	blogsContent.forEach((blogContent) => {
    // 		if (blogContent.name.includes(this.$route.params.name)) {
    // 			this.blogItem = blogContent;
    // 			this.title = this.blogItem.name;
    // 		}
    // 	});
    // } else {
    // 	let blogsContent = await ServerService.getBlog(this.$route.params.name);
    // 	this.blogItem = blogsContent[0];
    // }
  },

  validate({
    params
  }) {
    return isNaN(+params.name);
  }

});
// CONCATENATED MODULE: ./pages/blog/_name.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_namevue_type_script_lang_js_ = (_namevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/blog/_name.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(75)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_namevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3049694a",
  "564a2dd4"
  
)

/* harmony default export */ var _name = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_name.js.map