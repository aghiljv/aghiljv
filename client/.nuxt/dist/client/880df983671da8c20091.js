(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{208:function(t,e,o){var content=o(218);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("77ba225a",content,!0,{sourceMap:!1})},209:function(t,e,o){var content=o(220);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("4e97f038",content,!0,{sourceMap:!1})},217:function(t,e,o){"use strict";var n=o(208);o.n(n).a},218:function(t,e,o){(e=o(13)(!1)).push([t.i,".blogHolder[data-v-9d65fa32]{width:100%;height:30%;display:flex;justify-content:space-between;align-items:center;padding:1% 0}#blogDisplay[data-v-9d65fa32]{opacity:1;transition:.5s}.portImageHolder[data-v-9d65fa32]{position:relative;height:100%;width:30%;display:flex;justify-content:center;align-items:center}.portImage[data-v-9d65fa32]{width:100%;transition:.5s}.blogItem[data-v-9d65fa32]{position:relative;height:100%;width:70%;padding:1%}.portName[data-v-9d65fa32]{text-align:left;font-size:2rem}@media only screen and (max-width:600px){.blogHolder[data-v-9d65fa32]{flex-direction:column;height:50%;padding:5% 0}.blogItem[data-v-9d65fa32],.portImageHolder[data-v-9d65fa32]{width:100%}}@media only screen and (min-width:600px){.blogHolder:hover .portImage[data-v-9d65fa32]{transform:scale(1.1)}}",""]),t.exports=e},219:function(t,e,o){"use strict";var n=o(209);o.n(n).a},220:function(t,e,o){(e=o(13)(!1)).push([t.i,".blogContainer[data-v-275d1c30]{position:absolute;width:100%;height:100%;overflow:auto;padding-top:5%;-ms-overflow-style:none}.blogContainer[data-v-275d1c30]::-webkit-scrollbar{display:none}",""]),t.exports=e},232:function(t,e,o){"use strict";o.r(e);var n={props:["blogName","blogImage","blogBrief"]},l=(o(217),o(2)),r={transition:"fade",components:{BlogMain:Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blogHolder",attrs:{id:"blogDisplay"}},[o("div",{staticClass:"portImageHolder"},[o("img",{staticClass:"portImage",attrs:{src:"/img/blog/"+t.blogImage+".jpg",alt:"blogImage"}})]),t._v(" "),o("div",{staticClass:"blogItem"},[o("div",{staticClass:"portName"},[t._v(t._s(t.blogName))]),t._v(" "),o("div",{staticClass:"blogDesc"},[t._v(t._s(t.blogBrief))])])])}),[],!1,null,"9d65fa32",null).exports},data:function(){return{title:"Aghil Jose | Full Stack Engineer",scrollState:null,swipeState:null,scrollDirecton:0,currentIndex:0,minIndex:0,error:"",currentDeltaY:0,firstLoad:!0}},head:function(){return{title:this.title,meta:[{hid:"blog",name:"Blog",content:"The blog of Full Stack Engineer Aghil Jose"}]}},mounted:function(){document.getElementById("mainContent").addEventListener("wheel",this.handleScroll)},methods:{handleScroll:function(t){this.firstLoad=!1,t.deltaY<-20?this.scrollState="up":t.deltaY>20&&(this.scrollState="down"),-1!=t.deltaY&&1!=t.deltaY||(this.scrollState=null)},switchblog:function(t){document.getElementById("blogDisplay").style.opacity=t},swipeUpAction:function(){var t=this;this.scrollState="up",setTimeout((function(){t.scrollState=null}),500)},swipeDownAction:function(){var t=this;this.scrollState="down",setTimeout((function(){t.scrollState=null}),500)}},watch:{scrollState:function(){var t=this;"up"==this.scrollState?this.currentIndex>0&&setTimeout((function(){t.currentIndex--}),500):"down"==this.scrollState&&this.currentIndex<this.maxIndex-1&&setTimeout((function(){t.currentIndex++}),500)}},computed:{blogs:function(){return this.$store.state.blogs.blogs},maxIndex:function(){return this.$store.state.blogs.blogs.length}}},c=(o(219),Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{directives:[{name:"touch",rawName:"v-touch:swipe.right",value:this.swipeUpAction,expression:"swipeUpAction",arg:"swipe",modifiers:{right:!0}},{name:"touch",rawName:"v-touch:swipe.left",value:this.swipeDownAction,expression:"swipeDownAction",arg:"swipe",modifiers:{left:!0}}],staticClass:"blogContainer"},this._l(this.blogs,(function(t,o){return e("BlogMain",{key:t._id,attrs:{item:t,index:o,blogName:t.name,blogImage:t.titleImage,blogBrief:t.briefdesc}})})),1)])}),[],!1,null,"275d1c30",null));e.default=c.exports}}]);