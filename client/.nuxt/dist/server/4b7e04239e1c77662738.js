exports.ids=[2],exports.modules={51:function(t,e,o){var content=o(62);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(4).default;t.exports.__inject__=function(t){r("5ce46b2a",content,!0,t)}},52:function(t,e,o){var content=o(64);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(4).default;t.exports.__inject__=function(t){r("4fd56ee6",content,!0,t)}},61:function(t,e,o){"use strict";o.r(e);var r=o(51),n=o.n(r);for(var l in r)"default"!==l&&function(t){o.d(e,t,(function(){return r[t]}))}(l);e.default=n.a},62:function(t,e,o){(e=o(3)(!1)).push([t.i,".portfolioHolder[data-v-0cf32e60]{width:100%;height:30%;display:flex;justify-content:space-between;align-items:center;padding:1% 0}#portfolioDisplay[data-v-0cf32e60]{opacity:1;transition:.5s}.portImageHolder[data-v-0cf32e60]{position:relative;height:100%;width:30%;display:flex;justify-content:center;align-items:center}.portImage[data-v-0cf32e60]{width:100%;transition:.5s}.portfolioItem[data-v-0cf32e60]{position:relative;height:100%;width:70%;padding:1%}.portName[data-v-0cf32e60]{text-align:left;font-size:2rem}@media only screen and (max-width:600px){.portfolioHolder[data-v-0cf32e60]{flex-direction:column;height:60%;padding:5% 0}.portfolioItem[data-v-0cf32e60],.portImageHolder[data-v-0cf32e60]{width:100%}}@media only screen and (min-width:600px){.portfolioHolder:hover .portImage[data-v-0cf32e60]{transform:scale(1.1)}}",""]),t.exports=e},63:function(t,e,o){"use strict";o.r(e);var r=o(52),n=o.n(r);for(var l in r)"default"!==l&&function(t){o.d(e,t,(function(){return r[t]}))}(l);e.default=n.a},64:function(t,e,o){(e=o(3)(!1)).push([t.i,".blogContainer[data-v-7506d329]{position:absolute;width:100%;height:100%;overflow:auto;padding-top:5%;-ms-overflow-style:none}.blogContainer[data-v-7506d329]::-webkit-scrollbar{display:none}",""]),t.exports=e},78:function(t,e,o){"use strict";o.r(e);var r={props:["portfolioName","portfolioImage","portfolioBrief"]},n=o(1);var l={transition:"fade",components:{BlogMain:Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"portfolioHolder",attrs:{id:"portfolioDisplay"}},[t._ssrNode('<div class="portImageHolder" data-v-0cf32e60><img'+t._ssrAttr("src","/img/blog/"+t.portfolioImage+".jpg")+' alt="blogImage" class="portImage" data-v-0cf32e60></div> <div class="portfolioItem" data-v-0cf32e60><div class="portName" data-v-0cf32e60>'+t._ssrEscape(t._s(t.portfolioName))+'</div> <div class="portfolioDesc" data-v-0cf32e60>'+t._ssrEscape(t._s(t.portfolioBrief))+"</div></div>")])}),[],!1,(function(t){var e=o(61);e.__inject__&&e.__inject__(t)}),"0cf32e60","23af6fa8").exports},data:()=>({title:"Aghil Jose | Full Stack Engineer",scrollState:null,swipeState:null,scrollDirecton:0,currentIndex:0,minIndex:0,error:"",currentDeltaY:0,firstLoad:!0}),head(){return{title:this.title,meta:[{hid:"blog",name:"Blog",content:"The blog of Full Stack Engineer Aghil Jose"}]}},mounted(){document.getElementById("mainContent").addEventListener("wheel",this.handleScroll)},methods:{handleScroll(t){this.firstLoad=!1,t.deltaY<-20?this.scrollState="up":t.deltaY>20&&(this.scrollState="down"),-1!=t.deltaY&&1!=t.deltaY||(this.scrollState=null)},switchPortfolio(t){document.getElementById("portfolioDisplay").style.opacity=t},swipeUpAction(){this.scrollState="up",setTimeout(()=>{this.scrollState=null},500)},swipeDownAction(){this.scrollState="down",setTimeout(()=>{this.scrollState=null},500)}},watch:{scrollState(){"up"==this.scrollState?this.currentIndex>0&&setTimeout(()=>{this.currentIndex--},500):"down"==this.scrollState&&this.currentIndex<this.maxIndex-1&&setTimeout(()=>{this.currentIndex++},500)}},computed:{portfolios(){return this.$store.state.blogs.blogs},maxIndex(){return this.$store.state.blogs.blogs.length}}};var c=Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{directives:[{name:"touch",rawName:"v-touch:swipe.right",value:this.swipeUpAction,expression:"swipeUpAction",arg:"swipe",modifiers:{right:!0}},{name:"touch",rawName:"v-touch:swipe.left",value:this.swipeDownAction,expression:"swipeDownAction",arg:"swipe",modifiers:{left:!0}}],staticClass:"blogContainer"},this._l(this.portfolios,(function(t,o){return e("BlogMain",{key:t._id,attrs:{item:t,index:o,portfolioName:t.name,portfolioImage:t.titleImage,portfolioBrief:t.briefdesc}})})),1)])}),[],!1,(function(t){var e=o(63);e.__inject__&&e.__inject__(t)}),"7506d329","2ccf6649");e.default=c.exports}};