(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{204:function(t,e,n){var content=n(210);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("713d93a5",content,!0,{sourceMap:!1})},205:function(t,e,n){var content=n(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("eb6d0094",content,!0,{sourceMap:!1})},206:function(t,e,n){"use strict";n(80),n(23),n(24),n(68);var o=n(58);n(14);function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=n(45),l=n.n(c);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var h="http://localhost:5000/api/posts/",f=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,c;return e=t,c=[{key:"getPosts",value:function(){return new Promise((function(t,e){try{l.a.get(h).then((function(e){var data=e.data;t(data.map((function(t){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},t,{createdAt:new Date(t.createdAt)})})))}))}catch(t){e(t)}}))}},{key:"insertPost",value:function(text){return l.a.post(h,{text:text})}},{key:"deletePost",value:function(t){return l.a.delete("".concat(h).concat(t))}},{key:"downloadResume",value:function(){l.a.get("".concat(h,"downloadResume"),{responseType:"blob"}).then((function(t){var e=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=e,n.setAttribute("download","Resume Aghil Jose.pdf"),document.body.appendChild(n),n.click()}))}}],(n=null)&&r(e.prototype,n),c&&r(e,c),t}();e.a=f},209:function(t,e,n){"use strict";var o=n(204);n.n(o).a},210:function(t,e,n){(e=n(16)(!1)).push([t.i,".customButton[data-v-dccb527a]{width:30%;height:20%;color:#fff;display:flex;justify-content:center;align-items:center;border-radius:2%;cursor:pointer;transition:.5s}.customButton[data-v-dccb527a]:hover{transform:scale(1.1)}@media only screen and (max-width:600px){.customButton[data-v-dccb527a]{width:45%;height:40%;font-size:.8rem}}",""]),t.exports=e},211:function(t,e,n){"use strict";var o=n(205);n.n(o).a},212:function(t,e,n){var o=n(16),r=n(213),c=n(214);e=o(!1);var l=r(c);e.push([t.i,".contentClass[data-v-6ad7f03a]{top:1vh;width:100%;height:90%;position:absolute;display:flex;justify-content:space-evenly;align-items:center;text-align:justify}.textContent[data-v-6ad7f03a]{width:50%}.introCard[data-v-6ad7f03a]{width:35%;height:70%;background:var(--intro-card-bg);border-radius:1%;display:flex;box-shadow:0 4px 8px 0 var(--intro-card-shadow),0 6px 20px 0 var(--intro-card-shadow);justify-content:space-evenly;flex-direction:column;padding:2%;align-items:center}.imageHolder[data-v-6ad7f03a]{border:10px solid var(--intro-card-pic-border-color);height:35vh;width:35vh;border-radius:50%;background-image:url("+l+");background-size:cover}.buttonsHolder[data-v-6ad7f03a]{background:var(--intro-card-button-holder-color);width:100%;height:30%;display:flex;flex-direction:row;justify-content:space-around;align-items:center;border-radius:1%}@media only screen and (max-width:600px){.contentClass[data-v-6ad7f03a]{width:90%;height:80vh;position:relative;display:block;align-items:center;flex-direction:column-reverse;justify-content:space-around;overflow:auto}.textContent[data-v-6ad7f03a]{width:100%;padding:5% 0}.introCard[data-v-6ad7f03a]{height:40%;width:100%;padding:5%}.imageHolder[data-v-6ad7f03a]{height:20vh;width:20vh}}",""]),t.exports=e},213:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},214:function(t,e,n){t.exports=n.p+"img/d13726b.png"},215:function(t,e,n){"use strict";n.r(e);n(35);var o=n(6),r=n(206),c={props:["buttonName","buttonColor","colorHover"],data:function(){return{hovering:!1}},methods:{mouseOver:function(){this.hovering=!0},mouseLeave:function(){this.hovering=!1}},computed:{style:function(){return this.hovering?"background: "+this.$props.colorHover:"background: "+this.$props.buttonColor}}},l=(n(209),n(5)),d={components:{CustomButton:Object(l.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"customButton",style:this.style,on:{mouseover:this.mouseOver,mouseleave:this.mouseLeave}},[this._v(this._s(this.buttonName))])}),[],!1,null,"dccb527a",null).exports},methods:{downloadResume:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.downloadResume();case 2:case"end":return t.stop()}}),t)})))()}}},h=(n(211),{data:function(){return{title:"Aghil Jose - Home"}},head:function(){return{title:this.title,meta:[{hid:"home",name:"Home Portfolio",content:"The portfolio and blog of Full Stack Engineer Aghil Jose"}]}},components:{IndexContent:Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contentClass"},[n("div",{staticClass:"introCard"},[n("div",{staticClass:"imageHolder"}),t._v(" "),n("div",{staticClass:"buttonsHolder"},[n("CustomButton",{attrs:{buttonName:"Download Resume",buttonColor:"rgba(44, 62, 80, 0.5)",colorHover:"rgba(44, 62, 80, 1)"},nativeOn:{click:function(e){return t.downloadResume(e)}}}),t._v(" "),n("CustomButton",{attrs:{buttonName:"Email",buttonColor:"rgba(150, 40, 27, 0.5)",colorHover:"rgba(150, 40, 27, 1)"}})],1)]),t._v(" "),n("div",{staticClass:"textContent",attrs:{id:"introContent"}},[t._v("\n\t\tA Software Engineer with experience in End-to-End Application Development and have worked with Accenture and\n\t\tNissan Digital. I specialize in building application to the needs of the business and clients in Agile\n\t\tEnvironment. Experienced in Automotive visualization and virtual testing environment for Autonomous\n\t\tvehicles. A team player with strong inter-personal skills, with the ability to collaborate with\n\t\tmulti-functional teams. Apart from these, I love football, travel, photography and reading.\n\t")])])}),[],!1,null,"6ad7f03a",null).exports}}),f=Object(l.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("IndexContent")],1)}),[],!1,null,"36f1e754",null);e.default=f.exports}}]);