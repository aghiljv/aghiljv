exports.ids=[2],exports.modules={58:function(t,e,o){var content=o(76);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var l=o(4).default;t.exports.__inject__=function(t){l("dff8c22e",content,!0,t)}},75:function(t,e,o){"use strict";o.r(e);var l=o(58),n=o.n(l);for(var r in l)"default"!==r&&function(t){o.d(e,t,(function(){return l[t]}))}(r);e.default=n.a},76:function(t,e,o){(e=o(3)(!1)).push([t.i,".backButton[data-v-813cf182]{position:absolute;text-decoration:none;top:10%;color:var(--primary-color);z-index:6}.blogContainer[data-v-813cf182]{position:absolute;width:100%;height:100%;overflow:auto;-ms-overflow-style:none;color:var(--primary-color)}.blogContainer[data-v-813cf182]::-webkit-scrollbar{display:none}.blogTitleImageHolder[data-v-813cf182]{top:0;width:100%;height:60%;display:flex;justify-content:center}.blogTitleImg[data-v-813cf182]{height:100%;-o-object-fit:cover;object-fit:cover}.blogTitle[data-v-813cf182]{top:40%;width:100%;text-align:center;font-size:4vw}.blogContentHolder[data-v-813cf182]{display:flex;justify-content:center;width:100%;top:50%;font-size:1vw}.blogContent[data-v-813cf182]{width:50%}@media only screen and (max-width:600px){.backButton[data-v-813cf182]{position:unset}.blogTitleImageHolder[data-v-813cf182]{margin-top:2%;height:auto}.blogTitleImg[data-v-813cf182]{width:100%}.blogTitle[data-v-813cf182]{font-size:8vw}.blogContent[data-v-813cf182]{width:100%}.blogContentHolder[data-v-813cf182]{font-size:3vw}}",""]),t.exports=e},86:function(t,e,o){"use strict";o.r(e);var l=o(17),n={transition:"fade",head(){return{title:this.title,meta:[{hid:"blog",name:"Blog",content:"The blog of Full Stack Engineer Aghil Jose"}]}},data:()=>({title:"Aghil Jose | Full Stack Engineer",blogItem:{},currentRoute:""}),async created(){if(this.$store.commit("pageTitle/set","BLOG"),this.$store.state.blogs.blogs.length>1){this.$store.state.blogs.blogs.forEach(t=>{t.name.includes(this.$route.params.name)&&(this.blogItem=t,this.title=this.blogItem.name)})}else{let t=await l.a.getBlog(this.$route.params.name);this.blogItem=t[0]}},async mounted(){},validate:({params:t})=>isNaN(+t.name)},r=o(1);var component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[t._ssrNode('<div class="blogContainer" data-v-813cf182>',"</div>",[o("nuxt-link",{staticClass:"backButton",attrs:{id:"blogDisplay",to:"/blog/"}},[t._v("« Return to List "),o("br"),t._v("\n\t\t\tBLOGS")]),t._ssrNode(' <div class="blogTitleImageHolder" data-v-813cf182><img'+t._ssrAttr("src","/img/blog/"+t.blogItem.titleImage+".jpg")+' alt="blogImage" class="blogTitleImg" data-v-813cf182></div> <div class="blogTitle" data-v-813cf182>'+t._ssrEscape(t._s(t.blogItem.name))+'</div> <div class="blogContentHolder" data-v-813cf182><div class="blogContent" data-v-813cf182>'+t._s(t.blogItem.content)+"</div></div>")],2)])}),[],!1,(function(t){var e=o(75);e.__inject__&&e.__inject__(t)}),"813cf182","5fe9363e");e.default=component.exports}};