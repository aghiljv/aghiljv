(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{214:function(t,e,n){var content=n(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("296f8ead",content,!0,{sourceMap:!1})},215:function(t,e,n){var content=n(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("c34e899e",content,!0,{sourceMap:!1})},232:function(t,e,n){"use strict";var o=n(214);n.n(o).a},233:function(t,e,n){(e=n(13)(!1)).push([t.i,".textInputs[data-v-463ce7b4]{background:transparent;color:var(--color-primary)}.postButton[data-v-463ce7b4],.textInputs[data-v-463ce7b4]{width:100%;height:2.5vw;outline:none;border:1px solid var(--color-primary);border-radius:5vw;padding-left:2.5%}.postButton[data-v-463ce7b4]{background:var(--color-primary);color:var(--background-color-primary)}@media only screen and (max-width:600px){.postButton[data-v-463ce7b4],.textInputs[data-v-463ce7b4]{height:10vw}}",""]),t.exports=e},234:function(t,e,n){"use strict";var o=n(215);n.n(o).a},235:function(t,e,n){(e=n(13)(!1)).push([t.i,".backButton[data-v-a74b88ac]{position:absolute;text-decoration:none;top:10%;color:var(--primary-color);z-index:6}.blogContainer[data-v-a74b88ac]{position:absolute;width:100%;height:100%;overflow:auto;-ms-overflow-style:none;color:var(--primary-color)}.blogContainer[data-v-a74b88ac]::-webkit-scrollbar{display:none}.blogTitleImageHolder[data-v-a74b88ac]{top:0;width:100%;height:60%;display:flex;justify-content:center}.blogTitleImg[data-v-a74b88ac]{height:100%;-o-object-fit:cover;object-fit:cover}.blogTitle[data-v-a74b88ac]{top:40%;width:100%;text-align:center;font-size:4vw}.blogContentHolder[data-v-a74b88ac]{display:flex;justify-content:center;width:100%;top:50%;font-size:1vw}.blogContent[data-v-a74b88ac]{width:50%}.commentsMain[data-v-a74b88ac]{display:flex;flex-direction:column;align-items:center;width:100%;top:50%;font-size:1vw}.commentsInput[data-v-a74b88ac]{width:50%}@media only screen and (max-width:600px){.backButton[data-v-a74b88ac]{position:unset}.blogTitleImageHolder[data-v-a74b88ac]{margin-top:2%;height:auto}.blogTitleImg[data-v-a74b88ac]{width:100%}.blogTitle[data-v-a74b88ac]{font-size:8vw}.blogContent[data-v-a74b88ac]{width:100%}.blogContentHolder[data-v-a74b88ac]{font-size:3vw}.commentsInput[data-v-a74b88ac]{width:100%}.commentsMain[data-v-a74b88ac]{font-size:3vw}}",""]),t.exports=e},242:function(t,e,n){"use strict";n.r(e);n(25),n(51),n(75),n(30);var o=n(3),r=n(74),l={props:[],data:function(){return{commentInputText:"",getDetails:!1}},mounted:function(){console.log(this.commentInputText.length)},methods:{keyUpEvent:function(t){var e=this.$refs[t];this.commentInputText=e.value,console.log(this.commentInputText.length)},getCredentials:function(){this.getDetails=!0}}},c=(n(232),n(2)),d={transition:"fade",components:{CommentsInput:Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("form",{attrs:{id:"commentsIn"}},[t.getDetails?n("input",{ref:"emailInputText",staticClass:"textInputs",attrs:{type:"text",id:"email",name:"email",placeholder:"E=mail"}}):n("input",{ref:"commentInputText",staticClass:"textInputs",attrs:{type:"text",id:"comment",name:"comment",placeholder:"Add a comment"},on:{keyup:function(e){return t.keyUpEvent("commentInputText")}}}),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),this.commentInputText.length>0?n("div",{staticClass:"postOption"},[n("button",{staticClass:"postButton",on:{click:t.getCredentials}},[t._v("Post")]),t._v(" "),n("br"),t._v(" "),n("br")]):n("div",[n("br"),t._v(" "),n("br"),t._v(" "),n("br")])])])}),[],!1,null,"463ce7b4",null).exports},head:function(){return{title:this.title,meta:[{hid:"blog",name:"Blog",content:"The blog of Full Stack Engineer Aghil Jose"},{hid:"og:image",property:"og:image",content:"/img/common/ogBlog.png"},{hid:"og:description",name:"og:description",content:"The blog of Aghil Jose | Full Stack Engineer"},{hid:"og:type",name:"og:type",content:"article"}]}},data:function(){return{title:"Blog | Aghil Jose | Full Stack Engineer",blogItem:{},currentRoute:""}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$store.commit("pageTitle/set","BLOG"),!(t.$store.state.blogs.blogs.length>1)){e.next=6;break}t.$store.state.blogs.blogs.forEach((function(e){e.name.includes(t.$route.params.name)&&(t.blogItem=e,t.title=t.blogItem.name)})),e.next=10;break;case 6:return e.next=8,r.a.getBlog(t.$route.params.name);case 8:n=e.sent,t.blogItem=n[0];case 10:case"end":return e.stop()}}),e)})))()},mounted:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},validate:function(t){var e=t.params;return isNaN(+e.name)}},m=(n(234),Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"blogContainer"},[n("nuxt-link",{staticClass:"backButton",attrs:{id:"blogDisplay",to:"/blog/"}},[t._v("\n      « Return to List\n      "),n("br"),t._v("BLOGS\n    ")]),t._v(" "),n("div",{staticClass:"blogTitleImageHolder"},[n("img",{staticClass:"blogTitleImg",attrs:{src:"/img/blog/"+t.blogItem.titleImage+".jpg",alt:"blogImage"}})]),t._v(" "),n("div",{staticClass:"blogTitle"},[t._v(t._s(t.blogItem.name))]),t._v(" "),n("div",{staticClass:"blogContentHolder"},[n("div",{staticClass:"blogContent",domProps:{innerHTML:t._s(t.blogItem.content)}})])],1)])}),[],!1,null,"a74b88ac",null));e.default=m.exports}}]);