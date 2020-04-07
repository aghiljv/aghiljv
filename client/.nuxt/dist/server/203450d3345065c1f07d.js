exports.ids=[3],exports.modules={50:function(t,e,o){var content=o(55);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(3).default;t.exports.__inject__=function(t){n("e222d1e6",content,!0,t)}},51:function(t,e,o){var content=o(57);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(3).default;t.exports.__inject__=function(t){n("7cb8d662",content,!0,t)}},54:function(t,e,o){"use strict";o.r(e);var n=o(50),r=o.n(n);for(var c in n)"default"!==c&&function(t){o.d(e,t,(function(){return n[t]}))}(c);e.default=r.a},55:function(t,e,o){(e=o(2)(!1)).push([t.i,".customButton[data-v-cb40df1a]{width:30%;height:20%;color:#fff;display:flex;justify-content:center;align-items:center;border-radius:2%;cursor:pointer;transition:.5s}.customButton[data-v-cb40df1a]:hover{transform:scale(1.1)}",""]),t.exports=e},56:function(t,e,o){"use strict";o.r(e);var n=o(51),r=o.n(n);for(var c in n)"default"!==c&&function(t){o.d(e,t,(function(){return n[t]}))}(c);e.default=r.a},57:function(t,e,o){var n=o(2),r=o(58),c=o(59);e=n(!1);var d=r(c);e.push([t.i,".contentClass[data-v-44acaae2]{width:100%;height:90%;position:absolute;display:flex;align-items:center;text-align:justify}.textContent[data-v-44acaae2]{position:inherit;left:5%;width:50%}.introCard[data-v-44acaae2]{position:fixed;right:5%;top:15%;width:35%;height:70%;background:var(--intro-card-bg);border-radius:1%;display:flex;box-shadow:0 4px 8px 0 var(--intro-card-shadow),0 6px 20px 0 var(--intro-card-shadow);justify-content:space-evenly;flex-direction:column;padding:2%;align-items:center}.imageHolder[data-v-44acaae2]{border:10px solid var(--intro-card-pic-border-color);height:50%;width:50%;border-radius:50%;background-image:url("+d+");background-size:cover}.buttonsHolder[data-v-44acaae2]{background:var(--intro-card-button-holder-color);width:100%;height:30%;display:flex;flex-direction:row;justify-content:space-around;align-items:center;border-radius:1%}@media only screen and (max-width:600px){.contentClass[data-v-44acaae2]{width:90%;height:100%;position:absolute;display:flex;align-items:center}}",""]),t.exports=e},58:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},59:function(t,e,o){t.exports=o.p+"img/d13726b.png"},60:function(t,e,o){"use strict";o.r(e);var n={props:["buttonName","buttonColor","colorHover"],data:()=>({hovering:!1}),methods:{mouseOver(){this.hovering=!0},mouseLeave(){this.hovering=!1}},computed:{style(){return this.hovering?"background: "+this.$props.colorHover:"background: "+this.$props.buttonColor}}},r=o(1);var c={components:{CustomButton:Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"customButton",style:this.style,on:{mouseover:this.mouseOver,mouseleave:this.mouseLeave}},[this._ssrNode(this._ssrEscape(this._s(this.buttonName)))])}),[],!1,(function(t){var e=o(54);e.__inject__&&e.__inject__(t)}),"cb40df1a","161d1cda").exports}};var d={components:{IndexContent:Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contentClass"},[this._ssrNode('<div id="introContent" class="textContent" data-v-44acaae2>\n\t\tA Software Engineer with experience in End-to-End Application Development and have worked with Accenture and\n\t\tNissan Digital. I specialize in building application to the needs of the business and clients in Agile\n\t\tEnvironment. Experienced in Automotive visualization and virtual testing environment for Autonomous\n\t\tvehicles. A team player with strong inter-personal skills, with the ability to collaborate with\n\t\tmulti-functional teams. Apart from these, I love football, travel, photography and reading.\n\t</div> '),this._ssrNode('<div class="introCard" data-v-44acaae2>',"</div>",[this._ssrNode('<div class="imageHolder" data-v-44acaae2></div> '),this._ssrNode('<div class="buttonsHolder" data-v-44acaae2>',"</div>",[e("CustomButton",{attrs:{buttonName:"Download Resume",buttonColor:"rgba(44, 62, 80, 0.5)",colorHover:"rgba(44, 62, 80, 1)"}}),this._ssrNode(" "),e("CustomButton",{attrs:{buttonName:"Email",buttonColor:"rgba(150, 40, 27, 0.5)",colorHover:"rgba(150, 40, 27, 1)"}})],2)],2)],2)}),[],!1,(function(t){var e=o(56);e.__inject__&&e.__inject__(t)}),"44acaae2","33961cd7").exports}};var l=Object(r.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("IndexContent")],1)}),[],!1,(function(t){}),"059f297f","0a89ce44");e.default=l.exports}};