(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{217:function(t,e,o){var content=o(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("5cdee440",content,!0,{sourceMap:!1})},218:function(t,e,o){var content=o(234);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("7284d402",content,!0,{sourceMap:!1})},231:function(t,e,o){"use strict";var n=o(217);o.n(n).a},232:function(t,e,o){(e=o(15)(!1)).push([t.i,".blogHolder[data-v-a8907f82]{width:100%;height:30%;display:flex;justify-content:space-between;align-items:center;padding:1% 0;text-decoration:none;color:var(--primary-color)}#blogDisplay[data-v-a8907f82]{opacity:1;transition:.5s}.portImageHolder[data-v-a8907f82]{position:relative;height:100%;width:30%;display:flex;justify-content:center;align-items:center}.portImage[data-v-a8907f82]{width:100%;transition:.5s}.blogItem[data-v-a8907f82]{position:relative;height:50%;width:70%;padding:1%}.blogName[data-v-a8907f82]{text-align:left;font-size:2vw}.blogDesc[data-v-a8907f82]{font-size:1vw}@media only screen and (max-width:600px){.blogHolder[data-v-a8907f82]{flex-direction:column;height:auto;padding:5% 0}.blogItem[data-v-a8907f82],.portImageHolder[data-v-a8907f82]{width:100%}.blogName[data-v-a8907f82]{font-size:5vw}.blogDesc[data-v-a8907f82]{font-size:3vw}}@media only screen and (min-width:600px){.blogHolder:hover .portImage[data-v-a8907f82]{transform:scale(1.1)}}",""]),t.exports=e},233:function(t,e,o){"use strict";var n=o(218);o.n(n).a},234:function(t,e,o){(e=o(15)(!1)).push([t.i,".blogContainer[data-v-485f96e8]{position:absolute;width:100%;height:100%;overflow:auto;padding-top:5%;-ms-overflow-style:none}.blogContainer[data-v-485f96e8]::-webkit-scrollbar{display:none}",""]),t.exports=e},257:function(t,e,o){"use strict";o.r(e);var n={props:["blogName","blogImage","blogBrief","index"]},l=(o(231),o(3)),r={transition:"fade",components:{BlogMain:Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nuxt-link",{staticClass:"blogHolder",attrs:{id:"blogDisplay",to:"/blog/"+t.blogName}},[o("div",{staticClass:"portImageHolder"},[o("img",{staticClass:"portImage",attrs:{src:"/img/blog/"+t.blogImage+".jpg",alt:"blogImage"}})]),t._v(" "),o("div",{staticClass:"blogItem"},[o("div",{staticClass:"blogName"},[t._v(t._s(t.blogName))]),t._v(" "),o("div",{staticClass:"blogDesc"},[t._v(t._s(t.blogBrief))])])])}),[],!1,null,"a8907f82",null).exports},data:function(){return{scrollState:null,swipeState:null,scrollDirecton:0,currentIndex:0,minIndex:0,error:"",currentDeltaY:0,firstLoad:!0}},head:function(){return{title:"Blog | Aghil Jose | Full Stack Engineer",meta:[{hid:"og:image",property:"og:image",content:"/img/common/ogBlog.png"},{hid:"og:description",name:"og:description",content:"The blog of Aghil Jose | Full Stack Engineer"},{hid:"og:type",name:"og:type",content:"blog"}]}},mounted:function(){document.getElementById("mainContent").addEventListener("wheel",this.handleScroll)},methods:{handleScroll:function(t){this.firstLoad=!1,t.deltaY<-20?this.scrollState="up":t.deltaY>20&&(this.scrollState="down"),-1!=t.deltaY&&1!=t.deltaY||(this.scrollState=null)},switchblog:function(t){document.getElementById("blogDisplay").style.opacity=t},swipeUpAction:function(){var t=this;this.scrollState="up",setTimeout((function(){t.scrollState=null}),500)},swipeDownAction:function(){var t=this;this.scrollState="down",setTimeout((function(){t.scrollState=null}),500)}},watch:{scrollState:function(){var t=this;"up"==this.scrollState?this.currentIndex>0&&setTimeout((function(){t.currentIndex--}),500):"down"==this.scrollState&&this.currentIndex<this.maxIndex-1&&setTimeout((function(){t.currentIndex++}),500)}},computed:{blogs:function(){return this.$store.state.blogs.blogs},maxIndex:function(){return this.$store.state.blogs.blogs.length}}},c=(o(233),Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{directives:[{name:"touch",rawName:"v-touch:swipe.right",value:this.swipeUpAction,expression:"swipeUpAction",arg:"swipe",modifiers:{right:!0}},{name:"touch",rawName:"v-touch:swipe.left",value:this.swipeDownAction,expression:"swipeDownAction",arg:"swipe",modifiers:{left:!0}}],staticClass:"blogContainer"},this._l(this.blogs,(function(t,o){return e("BlogMain",{key:t._id,attrs:{item:t,index:o,blogName:t.name,blogImage:t.titleImage,blogBrief:t.briefdesc}})})),1)])}),[],!1,null,"485f96e8",null));e.default=c.exports}}]);