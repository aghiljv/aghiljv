exports.ids = [4];
exports.modules = {

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6a91dacb", content, true, context)
};

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_434db00b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_434db00b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_434db00b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_434db00b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_434db00b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_434db00b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".contentContainer[data-v-434db00b]{position:absolute;display:grid;grid-template-columns:30vw 50vw;min-height:100%}.contactImg[data-v-434db00b]{position:relative;width:90%;left:0;top:10%}.contactTextContent[data-v-434db00b]{position:relative;top:30%;display:grid;grid-template-columns:auto;grid-template-rows:30vh 40vh}.contactTitleHolder[data-v-434db00b]{position:absolute;font-size:8vw;color:var(--color-primary);top:20%;left:20%}.contactDescHolder[data-v-434db00b]{width:60%;top:30%;left:45%;text-align:left}.contactTitleContent[data-v-434db00b]{display:flex;align-items:center}.contactDesc[data-v-434db00b]{padding-left:12%;position:relative;font-size:.8vw;font-weight:lighter}p[data-v-434db00b]{padding-top:5%;font-size:1.25vw}a[data-v-434db00b]{text-decoration:none;color:var(--color-primary);font-weight:bolder}span[data-v-434db00b]{cursor:pointer}.logoImg[data-v-434db00b]{position:absolute;right:5%;width:25%;bottom:5%}.contactHolder[data-v-434db00b]{top:60%;left:45%;display:grid;grid-template-columns:auto auto}.indConatct[data-v-434db00b]{align-items:center;padding:1%}.contactContent[data-v-434db00b]{display:inline-block;width:80%;padding:1%;font-size:1vw}img.contactContent[data-v-434db00b]{width:10%;-webkit-filter:var(--invert-value);filter:var(--invert-value)}@media only screen and (max-width:600px){.contentContainer[data-v-434db00b]{grid-template-columns:auto;grid-template-rows:30%}.contactImg[data-v-434db00b]{top:0;width:100%}.contactTextContent[data-v-434db00b]{top:0;grid-template-rows:auto}.contactTitleHolder[data-v-434db00b]{font-size:2.5vw;top:55%;left:0}.contactDescHolder[data-v-434db00b]{width:100%;left:0;top:55%}.logoImg[data-v-434db00b]{top:110%;width:100%;right:0}.contactHolder[data-v-434db00b]{top:90%;left:0;grid-template-columns:auto}p[data-v-434db00b]{font-size:5vw}.contactDesc[data-v-434db00b]{font-size:3vw}.contactContent[data-v-434db00b]{font-size:5vw}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=template&id=434db00b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"contentContainer\" data-v-434db00b><img src=\"/img/common/homelogo.png\" alt=\"Aghil Jose\" class=\"contactImg\" data-v-434db00b> <div class=\"contactTextContent\" data-v-434db00b><div class=\"contactDescHolder\" data-v-434db00b><p data-v-434db00b>\n          I am mostly active on\n          <a href=\"https://www.linkedin.com/in/aghil-jose/\" target=\"_blank\" rel=\"noopener noreferrer\" data-v-434db00b><u data-v-434db00b>LinkedIn</u></a>\n          and reachable\n          <a href=\"mailto:aghiljv@gmail.com\" data-v-434db00b><u data-v-434db00b>via email</u></a></p> <p data-v-434db00b>\n          But you can also find me in most places on internet as\n          <u data-v-434db00b>@aghiljv</u></p> <p data-v-434db00b>\n          You can also check out my\n          <span data-v-434db00b><u data-v-434db00b><a href=\"/ResumeFullStack.pdf\" download data-v-434db00b>resume</a></u></span></p></div> <div class=\"contactHolder\" data-v-434db00b><a href=\"https://www.linkedin.com/in/aghil-jose/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"indConatct\" data-v-434db00b><div class=\"contactTitleContent\" data-v-434db00b><img src=\"/img/common/linkedinp.png\" alt=\"LinkedIn\" class=\"contactContent\" data-v-434db00b> <div class=\"contactContent\" data-v-434db00b>LinkedIn</div></div> <div class=\"contactDesc\" data-v-434db00b>\n            I am mostly active around here with posts and articles on a regualr basis which are relevant\n            to the profession.\n          </div></a> <a href=\"https://github.com/aghiljv\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"indConatct\" data-v-434db00b><div class=\"contactTitleContent\" data-v-434db00b><img src=\"/img/common/githubp.png\" alt=\"GitHub\" class=\"contactContent\" data-v-434db00b> <div class=\"contactContent\" data-v-434db00b>GitHub</div></div> <div class=\"contactDesc\" data-v-434db00b>\n            This is the place where I do my personal and fun projects. Although, most of the\n            repositories are private.\n          </div></a> <a href=\"https://twitter.com/aghiljv/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"indConatct\" data-v-434db00b><div class=\"contactTitleContent\" data-v-434db00b><img src=\"/img/common/twitterp.png\" alt=\"Twitter\" class=\"contactContent\" data-v-434db00b> <div class=\"contactContent\" data-v-434db00b>Twitter</div></div> <div class=\"contactDesc\" data-v-434db00b>I am not much for the twitterverse. But, I have my moments.</div></a> <a href=\"https://www.instagram.com/aghiljv/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"indConatct\" data-v-434db00b><div class=\"contactTitleContent\" data-v-434db00b><img src=\"/img/common/instagramp.png\" alt=\"Instagram\" class=\"contactContent\" data-v-434db00b> <div class=\"contactContent\" data-v-434db00b>Instagram</div></div> <div class=\"contactDesc\" data-v-434db00b>This is the platform I use to showcase one of my hobbies - Photography.</div></a> <a href=\"https://www.facebook.com/aghiljv\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"indConatct\" data-v-434db00b><div class=\"contactTitleContent\" data-v-434db00b><img src=\"/img/common/facebookp.png\" alt=\"Facebook\" class=\"contactContent\" data-v-434db00b> <div class=\"contactContent\" data-v-434db00b>Facebook</div></div> <div class=\"contactDesc\" data-v-434db00b>I just go in for the memes.</div></a></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact.vue?vue&type=template&id=434db00b&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=script&lang=js&
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
/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  transition: "fade",

  data() {
    return {
      title: "Contact | Aghil Jose | Full Stack Engineer"
    };
  },

  head() {
    return {
      title: this.title,
      meta: [{
        hid: "contact",
        name: "Contact",
        content: "Contact Full Stack Engineer Aghil Jose"
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/contact.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(71)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "434db00b",
  "23fecca8"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact.js.map