(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{211:function(t,e,o){var content=o(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("6503de2c",content,!0,{sourceMap:!1})},212:function(t,e,o){var content=o(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("3e804a2b",content,!0,{sourceMap:!1})},213:function(t,e,o){var content=o(229);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("09d48360",content,!0,{sourceMap:!1})},224:function(t,e,o){"use strict";var n=o(211);o.n(n).a},225:function(t,e,o){(e=o(13)(!1)).push([t.i,".portfolioHolder[data-v-ad7a4ade]{height:100%;display:inline-flex}.portfolioHolder[data-v-ad7a4ade],.portImageHolder[data-v-ad7a4ade]{align-items:center;justify-content:center;width:100%}.portImageHolder[data-v-ad7a4ade]{height:60%;display:flex;opacity:1;transition:.5s}.portImage[data-v-ad7a4ade]{transition:.5s}.portfolioItem[data-v-ad7a4ade]{position:absolute;top:10%;left:5%;height:80%;width:50%;padding:1%;text-align:center;display:flex;flex-direction:column;justify-content:space-around;align-items:center;z-index:-1}.portName[data-v-ad7a4ade]{text-align:left;font-size:5vw;width:100%;justify-content:center;display:flex}.portfolioDesc[data-v-ad7a4ade],.portName[data-v-ad7a4ade]{transition:.5s}.portNumber[data-v-ad7a4ade]{font-size:1vw;width:100%;display:flex;justify-content:center;align-items:center;transition:.5s}@media only screen and (max-width:600px){.portfolioHolder[data-v-ad7a4ade]{flex-direction:column;height:60%;padding:5% 0}.portfolioItem[data-v-ad7a4ade],.portImageHolder[data-v-ad7a4ade]{width:100%}}",""]),t.exports=e},226:function(t,e,o){"use strict";var n=o(212);o.n(n).a},227:function(t,e,o){(e=o(13)(!1)).push([t.i,".portfolioNavHolder[data-v-12407cfe]{display:inline-flex}.portfolioNavHolder[data-v-12407cfe],.portImageHolder[data-v-12407cfe]{height:100%;align-items:center;width:100%;transition:.5s}.portImageHolder[data-v-12407cfe]{position:relative;display:flex;justify-content:flex-end;opacity:1;margin:1%;-webkit-filter:grayscale(1);filter:grayscale(1);letter-spacing:2px;font-size:3.5vw;text-transform:uppercase;-webkit-text-stroke:1px var(--color-primary);-webkit-text-fill-color:hsla(0,0%,100%,0);z-index:0}.portImageHolder[data-v-12407cfe]:hover{-webkit-filter:grayscale(0);filter:grayscale(0);-webkit-text-fill-color:var(--color-primary);letter-spacing:0;z-index:6}.portImage[data-v-12407cfe]{width:100%;transition:.5s}.portName[data-v-12407cfe]{font-size:2vw}@media only screen and (max-width:600px){.portfolioNavHolder[data-v-12407cfe]{flex-direction:column;height:60%}.portImageHolder[data-v-12407cfe]{font-size:8vw}}",""]),t.exports=e},228:function(t,e,o){"use strict";var n=o(213);o.n(n).a},229:function(t,e,o){(e=o(13)(!1)).push([t.i,".portfolioContainer[data-v-cb524ef0]{position:absolute;width:100%;height:100%;overflow:auto;bottom:0;display:flex;justify-content:space-around;align-items:center}.portfolioContainer[data-v-cb524ef0]::-webkit-scrollbar{display:none}.portContentContainer[data-v-cb524ef0]{position:absolute;height:100%;width:100%;left:0}.portNavContainer[data-v-cb524ef0]{position:absolute;height:50%;width:50%;right:0;display:flex;flex-direction:column;margin:1%}@media only screen and (max-width:600px){.portNavContainer[data-v-cb524ef0]{width:100%}}",""]),t.exports=e},234:function(t,e,o){"use strict";o.r(e);o(71);var n={props:["portfolioName","portfolioImage","portfolioBrief","index","activePortIndex"]},r=(o(224),o(2)),l=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"portfolioHolder",attrs:{id:"portfolioDisplay"}},[o("div",{staticClass:"portfolioItem",style:[t.index==t.activePortIndex?{opacity:"1","z-index":"5"}:{opacity:"0"}],attrs:{id:"portfolioItem"+t.index}},[o("div",{staticClass:"portImageHolder"},[o("img",{staticClass:"portImage",attrs:{src:"/img/portfolio/"+t.portfolioImage+".jpg",alt:"portfolioImage"}})]),t._v(" "),o("div",{staticClass:"portfolioDesc"},[t._v(t._s(t.portfolioBrief))])])])}),[],!1,null,"ad7a4ade",null).exports,c={props:["portfolioName","portfolioImage","index"],methods:{activePort:function(t){this.$emit("setActiveOpacity",t)},mouseMove:function(t){this.$emit("setDetPos",t)}}},d=(o(226),{transition:"fade",components:{PortfolioMain:l,PortfolioNav:Object(r.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"portfolioNavHolder",attrs:{id:"portNav"+t.index},on:{mousemove:function(e){return t.mouseMove(e)},mouseover:function(e){return t.activePort(t.index)},mouseleave:function(e){return t.activePort(-1)}}},[o("div",{staticClass:"portImageHolder"},[t._v("\n\t\t"+t._s(t.portfolioName)+"\n\t")])])}),[],!1,null,"12407cfe",null).exports},data:function(){return{title:"Aghil Jose | Full Stack Engineer",scrollState:null,swipeState:null,scrollDirecton:0,currentIndex:0,minIndex:0,error:"",currentDeltaY:0,firstLoad:!0,activePortIndex:-1}},head:function(){return{title:this.title,meta:[{hid:"portfolio",name:"Portfolio",content:"The portfolio of Full Stack Engineer Aghil Jose"}]}},mounted:function(){document.getElementById("mainContent").addEventListener("wheel",this.handleScroll)},methods:{handleScroll:function(t){this.firstLoad=!1,t.deltaY<-20?this.scrollState="up":t.deltaY>20&&(this.scrollState="down"),-1!=t.deltaY&&1!=t.deltaY||(this.scrollState=null)},switchPortfolio:function(t){document.getElementById("portfolioDisplay").style.opacity=t},swipeUpAction:function(){var t=this;this.scrollState="up",setTimeout((function(){t.scrollState=null}),500)},swipeDownAction:function(){var t=this;this.scrollState="down",setTimeout((function(){t.scrollState=null}),500)},setActiveOpacity:function(t){this.activePortIndex=t},setDetPos:function(t){var e="portNav"+this.activePortIndex,o="portfolioItem"+this.activePortIndex,n=document.getElementById(e).clientWidth/2,r=(document.getElementById(e).clientHeight/2-t.offsetY)/-50,l=(n-t.offsetX)/-20;document.getElementById(o).style.transform="translate("+l+"%, "+r+"%)"}},watch:{scrollState:function(){var t=this;"up"==this.scrollState?this.currentIndex>0&&setTimeout((function(){t.currentIndex--}),500):"down"==this.scrollState&&this.currentIndex<this.maxIndex-1&&setTimeout((function(){t.currentIndex++}),500)}},computed:{portfolios:function(){return this.$store.state.portfolios.portfolios},maxIndex:function(){return this.$store.state.portfolios.portfolios.length}}}),f=(o(228),Object(r.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{directives:[{name:"touch",rawName:"v-touch:swipe.right",value:t.swipeUpAction,expression:"swipeUpAction",arg:"swipe",modifiers:{right:!0}},{name:"touch",rawName:"v-touch:swipe.left",value:t.swipeDownAction,expression:"swipeDownAction",arg:"swipe",modifiers:{left:!0}}],staticClass:"portfolioContainer"},[o("div",{staticClass:"portContentContainer"},t._l(t.portfolios,(function(e,n){return o("PortfolioMain",{key:e._id,attrs:{item:e,index:n,portfolioName:e.name,portfolioImage:e.titleImage,portfolioBrief:e.briefdesc,activePortIndex:t.activePortIndex}})})),1),t._v(" "),o("div",{staticClass:"portNavContainer"},t._l(t.portfolios,(function(e,n){return o("PortfolioNav",{key:e._id,attrs:{index:n,portfolioName:e.name,portfolioImage:e.titleImage},on:{setActiveOpacity:function(e){return t.setActiveOpacity(e)},setDetPos:function(e){return t.setDetPos(e)}}})})),1)])])}),[],!1,null,"cb524ef0",null));e.default=f.exports}}]);