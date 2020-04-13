exports.ids=[5],exports.modules={56:function(t,e,o){"use strict";var n=o(4),r=o.n(n);const l="api/posts/";e.a=class{static getPortfolios(){return new Promise((t,e)=>{try{r.a.get(l).then(e=>{const data=e.data;t(data.map(t=>({...t,createdAt:new Date(t.createdAt)})))})}catch(t){e(t)}})}static insertPost(text){return r.a.post(l,{text:text})}static deletePost(t){return r.a.delete(`${l}${t}`)}static downloadResume(){r.a.get(`${l}downloadResume`,{responseType:"blob"}).then(t=>{var e=window.URL.createObjectURL(new Blob([t.data])),o=document.createElement("a");o.href=e,o.setAttribute("download","Resume Aghil Jose.pdf"),document.body.appendChild(o),o.click()})}}},60:function(t,e,o){var content=o(73);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(3).default;t.exports.__inject__=function(t){n("39fbbd43",content,!0,t)}},61:function(t,e,o){var content=o(75);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(3).default;t.exports.__inject__=function(t){n("27163683",content,!0,t)}},72:function(t,e,o){"use strict";o.r(e);var n=o(60),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,(function(){return n[t]}))}(l);e.default=r.a},73:function(t,e,o){(e=o(2)(!1)).push([t.i,".portfolioHolder[data-v-0d72176e]{margin:1%;padding:1%;width:98%;display:inline-block;transition:.5s}.portImage[data-v-0d72176e]{position:inherit;width:100%}.portName[data-v-0d72176e]{text-align:center;font-size:2rem}",""]),t.exports=e},74:function(t,e,o){"use strict";o.r(e);var n=o(61),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,(function(){return n[t]}))}(l);e.default=r.a},75:function(t,e,o){(e=o(2)(!1)).push([t.i,".portfolioContainer[data-v-6520402c]{position:absolute;width:100%}",""]),t.exports=e},81:function(t,e,o){"use strict";o.r(e);var n=o(56),r={props:["portfolioName","portfolioImage"]},l=o(1);var c={components:{PortfolioMain:Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"portfolioHolder"},[this._ssrNode("<img"+this._ssrAttr("src","/img/portfolio/"+this.portfolioImage+".jpg")+' alt="portfolioImage" class="portImage" data-v-0d72176e> <div class="portName" data-v-0d72176e>'+this._ssrEscape(this._s(this.portfolioName))+"</div>")])}),[],!1,(function(t){var e=o(72);e.__inject__&&e.__inject__(t)}),"0d72176e","14f046ba").exports},data:()=>({title:"Aghil Jose | Full Stack Engineer",portfolios:[],scrollState:null,currentIndex:0,minIndex:0,maxIndex:0}),head(){return{title:this.title,meta:[{hid:"portfolio",name:"Portfolio",content:"The portfolio of Full Stack Engineer Aghil Jose"}]}},async created(){try{this.portfolios=await n.a.getPortfolios()}catch(t){this.error=t.message}},mounted(){document.getElementById("mainContent").addEventListener("wheel",this.handleScroll)},methods:{handleScroll(t){t.deltaY<-20?this.scrollState="up":t.deltaY>20&&(this.scrollState="down")}},watch:{scrollState(){console.log(this.scrollState),this.currentIndex>0?this.currentIndex--:this.currentIndex<this.maxIndex&&this.currentIndex++},portfolios(){this.maxIndex=this.portfolios.length}}};var d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[t._ssrNode('<div class="portfolioContainer" data-v-6520402c>',"</div>",t._l(t.portfolios,(function(e,n){return n==t.currentIndex?o("PortfolioMain",{key:e._id,attrs:{item:e,index:n,portfolioName:e.name,portfolioImage:e.titleImage}}):t._e()})),1)])}),[],!1,(function(t){var e=o(74);e.__inject__&&e.__inject__(t)}),"6520402c","75c967d7");e.default=d.exports}};