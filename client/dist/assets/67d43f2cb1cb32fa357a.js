(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{210:function(t,e,o){var content=o(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("0d86934b",content,!0,{sourceMap:!1})},211:function(t,e,o){var content=o(226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("412fd5bc",content,!0,{sourceMap:!1})},223:function(t,e,o){"use strict";var n=o(210);o.n(n).a},224:function(t,e,o){(e=o(13)(!1)).push([t.i,".customButton[data-v-cf122ba8]{width:10vh;height:10vh;color:#fff;display:flex;justify-content:center;align-items:center;border-radius:2%;cursor:pointer;transition:.5s}.customButton[data-v-cf122ba8]:hover{transform:scale(1.1)}img[data-v-cf122ba8]{position:relative;height:80%}@media only screen and (max-width:600px){.customButton[data-v-cf122ba8]{width:5vh;height:5vh;font-size:.8rem}}",""]),t.exports=e},225:function(t,e,o){"use strict";var n=o(211);o.n(n).a},226:function(t,e,o){(e=o(13)(!1)).push([t.i,".contentClass[data-v-cd89e37c]{width:100%;height:100%;position:absolute;display:flex;justify-content:space-evenly;align-items:center;text-align:left}.textContent[data-v-cd89e37c]{width:50%}.introCard[data-v-cd89e37c]{width:35%;height:70%;background:var(--intro-card-bg);border-radius:1%;display:flex;box-shadow:0 4px 8px 0 var(--intro-card-shadow),0 6px 20px 0 var(--intro-card-shadow);justify-content:space-evenly;flex-direction:column;padding:2%;align-items:center}.imageHolder[data-v-cd89e37c]{border:10px solid var(--intro-card-pic-border-color);height:35vh;width:35vh;border-radius:50%;background-image:url(/img/intro.png);background-size:cover}.buttonsHolder[data-v-cd89e37c]{background:var(--intro-card-button-holder-color);width:100%;height:30%;display:flex;flex-direction:row;justify-content:space-around;align-items:flex-end;border-radius:1%}@media only screen and (max-width:600px){.contentClass[data-v-cd89e37c]{width:100%;height:100%;position:absolute;align-items:center;flex-direction:column-reverse;justify-content:space-around;overflow:auto}.textContent[data-v-cd89e37c]{width:100%;padding:5% 0}.introCard[data-v-cd89e37c]{height:40%;width:100%;padding:5%}.imageHolder[data-v-cd89e37c]{height:20vh;width:20vh}}",""]),t.exports=e},237:function(t,e,o){"use strict";o.r(e);o(29);var n=o(4),r=o(71),c={props:["buttonName","buttonColor","colorHover"],data:function(){return{hovering:!1,tempName:"download.png"}},methods:{mouseOver:function(){this.hovering=!0},mouseLeave:function(){this.hovering=!1}},computed:{style:function(){return this.hovering?"background: "+this.$props.colorHover:"background: "+this.$props.buttonColor},imgName:function(){return this.$props.buttonName+".png"}}},d=(o(223),o(2)),l={components:{CustomButton:Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"customButton",style:this.style,on:{mouseover:this.mouseOver,mouseleave:this.mouseLeave}},[e("img",{attrs:{src:"img/"+this.imgName,alt:"Custom Button"}})])}),[],!1,null,"cf122ba8",null).exports},methods:{downloadResume:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.downloadResume();case 2:case"end":return t.stop()}}),t)})))()}}},h=(o(225),{data:function(){return{title:"Aghil Jose | Full Stack Engineer"}},head:function(){return{title:this.title,meta:[{hid:"contact",name:"Contact",content:"The contact of Full Stack Engineer Aghil Jose"}]}},components:{IndexContent:Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contentClass"},[o("div",{staticClass:"introCard"},[o("div",{staticClass:"imageHolder"}),t._v(" "),o("div",{staticClass:"buttonsHolder"},[o("CustomButton",{attrs:{buttonName:"download",buttonColor:"rgba(44, 62, 80, 0.5)",colorHover:"rgba(44, 62, 80, 1)"},nativeOn:{click:function(e){return t.downloadResume(e)}}}),t._v(" "),o("CustomButton",{attrs:{buttonName:"mail",buttonColor:"rgba(150, 40, 27, 0.5)",colorHover:"rgba(150, 40, 27, 1)"}})],1)])])}),[],!1,null,"cd89e37c",null).exports}}),v=Object(d.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("IndexContent")],1)}),[],!1,null,"ca42886a",null);e.default=v.exports}}]);