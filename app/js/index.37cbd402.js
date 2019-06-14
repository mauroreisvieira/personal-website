(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],h=0,p=[];h<s.length;h++)o=s[h],r[o]&&p.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={index:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"10c5":function(t){t.exports=[{path:"/what-s-new-in-javascript",date:"2019-05-21",author:"Mauro Reis Vieira",title:"What’s new in Javascript?",description:"Many of us know that there is a standard procedure for Javascript latest releases and a committee behind that. In this post, I will explain about who makes the final call on any new specification, what is the procedure for it, and what's new in ES2019."},{path:"/how-i-work",date:"2019-05-10",author:"Mauro Reis Vieira",title:"How I Work",description:"I’ve seen a few people share their work setups / processes lately, so I thought I would do the same."},{path:"/sublime-text-3-tips",date:"2019-04-16",author:"Mauro Reis Vieira",title:"Sublime Text 3 Tips",description:"I've been using Sublime Text 3 for probably four years now and in that time I've discovered tons of useful tricks. I figured I should start writing them down for anyone who might be interested. I'll try to explain the bits that seem esoteric because there are a lot of cool commands which only work in certain contexts."}]},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("Header"),n("transition",{attrs:{name:"fade-up",mode:"out-in"},on:{"before-enter":t.beforeTransitionEnter,"after-enter":t.afterTransitionEnter}},[n("router-view",{key:t.$route.fullPath})],1),n("transition",{attrs:{name:"fade"}},[this.footerIsVisible?n("Footer"):t._e()],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"container"},[n("Nav")],1)},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.menus.length?n("nav",{staticClass:"navigation",attrs:{role:"navigation","aria-hidden":"true",hidden:""}},t._l(this.menus,function(e,a){return n("router-link",{key:a,staticClass:"navigation__item",attrs:{to:e.path,title:e.name}},[n("span",[t._v(t._s(e.name))])])}),1):t._e()},c=[],u={data:function(){return{menus:[{path:"/",name:"Home"},{path:"/about",name:"About"},{path:"/blog",name:"Blog"}]}},mounted:function(){}},h=u,p=n("2877"),d=Object(p["a"])(h,l,c,!1,null,null,null),f=d.exports,v={components:{Nav:f},data:function(){return{}}},m=v,g=Object(p["a"])(m,o,s,!1,null,null,null),_=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer container"},[n("p",[t._v("Copyright © 2019 Mauro Reis Vieira")]),n("Social")],1)},w=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"social"},[n("a",{staticClass:"social__item",attrs:{rel:"noopener","aria-label":"Follow me on Codepen",href:this.social.codepen,target:"_blank"}},[n("svg",{attrs:{role:"img",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M31.9 10.925v-.2-.2-.2-.1s0-.1-.1-.1v-.1s0-.1-.1-.1l-.1-.1s-.1 0-.1-.1h-.1L16.7.225c-.5-.3-1.1-.3-1.5 0l-14.7 9.8H.4s-.1 0-.1.1l-.1.1-.1.1v.1s0 .1-.1.1V22.025s0 .1.1.1v.1s0 .1.1.1l.1.1s.1 0 .1.1h.1l14.6 9.8c.2.2.5.2.8.2.3 0 .5-.1.8-.2l14.6-10.3h.1s.1 0 .1-.1l.1-.1.1-.1v-.1s0-.1.1-.1v-.2-.2-.2-.1V10.925c.1.2.1.1.1 0zm-14.6-7l10.8 7.2-4.8 3.2-6-4v-6.4zm-2.8 0v6.4l-6 4-4.8-3.2 10.8-7.2zm-11.8 9.8l3.4 2.3-3.4 2.3v-4.6zm11.8 14.4l-10.7-7.2 4.8-3.2 6 4v6.4h-.1zm1.4-8.8l-4.9-3.3 4.9-3.3 4.9 3.3-4.9 3.3zm1.4 8.8v-6.4l6-4 4.8 3.2-10.8 7.2zm11.8-9.8l-3.4-2.3 3.4-2.3v4.6z"}})])]),n("a",{staticClass:"social__item",attrs:{rel:"noopener","aria-label":"Follow me on Github",href:this.social.github,target:"_blank"}},[n("svg",{attrs:{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}})])]),n("a",{staticClass:"social__item",attrs:{rel:"noopener","aria-label":"Follow me on Twitter",href:this.social.twitter,target:"_blank"}},[n("svg",{attrs:{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"}})])]),n("a",{staticClass:"social__item",attrs:{rel:"noopener","aria-label":"Connect to me on Linkedin",href:this.social.linkedin,target:"_blank"}},[n("svg",{attrs:{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}})])])])},y=[],C={data:function(){return{social:this.$store.state.social}}},k=C,H=Object(p["a"])(k,x,y,!1,null,null,null),j=H.exports,O={components:{Social:j}},$=O,E=Object(p["a"])($,b,w,!1,null,null,null),S=E.exports,M={name:"app",components:{Header:_,Footer:S},data:function(){return{footerIsVisible:!1}},mounted:function(){this.footerIsVisible=!0},methods:{beforeTransitionEnter:function(){this.footerIsVisible=!1},afterTransitionEnter:function(){this.footerIsVisible=!0}}},I=M,P=(n("5c0b"),Object(p["a"])(I,r,i,!1,null,null,null)),z=P.exports,V=(n("ac6a"),n("f3e2"),n("8c4f")),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"container"},[n("Hero",{attrs:{title:"About"}}),n("Page",{attrs:{path:"/docs/pages/about"}})],1)},B=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero"},[n("h1",{staticClass:"hero__title"},[t._v(t._s(t.title))]),t.date||t.author?n("div",{staticClass:"hero__publish"},[t.date?n("span",{staticClass:"hero__date"},[t._v(t._s(t.date))]):t._e(),t.author?n("span",{staticClass:"hero__author"},[t._v(" - by "+t._s(t.author))]):t._e()]):t._e()])},q=[],A={props:{title:{type:String,required:!0},date:{type:String},author:{type:String}}},F=A,N=Object(p["a"])(F,R,q,!1,null,null,null),L=N.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{domProps:{innerHTML:t._s(t.markdown)}})},J=[],W=n("c197"),Y=n.n(W),G=n("5b5f"),K=n.n(G),Q=n("d225"),U=n("b0b4"),X=function(){function t(){Object(Q["a"])(this,t)}return Object(U["a"])(t,null,[{key:"readFile",value:function(t,e){var n=window.location.origin+t;fetch(n).then(function(t){return t.text()}).then(function(t){e(t)})}},{key:"formatDate",value:function(t){var e=new Date(t),n=e.getDate(),a=e.getFullYear(),r=e.toLocaleString("en-us",{month:"long"});return"".concat(r," ").concat(n,", ").concat(a)}}]),t}(),Z={data:function(){return{file:void 0,markdown:void 0}},props:{path:{type:String,required:!0}},mounted:function(){var t=this,e=this.path+".md",n=new K.a({langPrefix:"hljs language-"});X.readFile(e,function(e){t.markdown=n.render(e),t.$nextTick(function(){Y.a.highlightAll()})})}},tt=Z,et=Object(p["a"])(tt,D,J,!1,null,null,null),nt=et.exports,at={components:{Hero:L,Page:nt},data:function(){return{}}},rt=at,it=Object(p["a"])(rt,T,B,!1,null,null,null),ot=it.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"container blog"},[n("Hero",{attrs:{title:"Blog"}}),t._l(t.list,function(t,e){return n("Article",{key:e,attrs:{path:t.path,title:t.title,description:t.description,date:t.date}})})],2)},lt=[],ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{attrs:{to:t.path}},[n("article",{staticClass:"article"},[n("span",{staticClass:"article__date"},[t._v(t._s(t.datetime))]),n("h2",{staticClass:"article__title"},[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.description))])])])},ut=[],ht={data:function(){return{datetime:X.formatDate(this.date)}},props:{path:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},date:{type:String,required:!0}}},pt=ht,dt=Object(p["a"])(pt,ct,ut,!1,null,null,null),ft=dt.exports,vt=n("10c5"),mt={components:{Hero:L,Article:ft},data:function(){return{list:vt}},mounted:function(){}},gt=mt,_t=Object(p["a"])(gt,st,lt,!1,null,null,null),bt=_t.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"container blog"},[n("Progress",{attrs:{max:t.max,value:t.value}}),n("Hero",{attrs:{title:t.title,date:t.date}}),n("Page",{attrs:{path:t.path}}),n("Navigation")],1)},xt=[],yt=(n("20d6"),n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress progress--accent"},[n("progress",{staticClass:"progress__control",attrs:{max:t.max},domProps:{value:t.value}})])}),Ct=[],kt=(n("c5f6"),{props:{max:{type:Number,required:!0},value:{type:Number,required:!0}}}),Ht=kt,jt=Object(p["a"])(Ht,yt,Ct,!1,null,null,null),Ot=jt.exports,$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation navigation--blog",attrs:{role:"navigation"}},[t.prev>=0&&t.prev<t.data.length?n("div",{staticClass:"navigation__prev"},[n("span",[t._v("Previous")]),n("router-link",{attrs:{to:t.data[t.prev].path}},[n("svg",{attrs:{fill:"currentColor",viewBox:"0 0 40 40"}},[n("g",[n("path",{attrs:{d:"m33.4 18.4v3.2h-20.4l9.3 9.4-2.3 2.4-13.4-13.4 13.4-13.4 2.3 2.4-9.3 9.4h20.4z"}})])]),t._v("\n            "+t._s(t.data[t.prev].title)+"\n        ")])],1):t._e(),t.next>=0&&t.next<t.data.length?n("div",{staticClass:"navigation__next"},[n("span",[t._v("Next")]),n("router-link",{attrs:{to:t.data[t.next].path}},[t._v("\n            "+t._s(t.data[t.next].title)+"\n            "),n("svg",{attrs:{fill:"currentColor",viewBox:"0 0 40 40"}},[n("g",[n("path",{attrs:{d:"m20 6.6l13.4 13.4-13.4 13.4-2.3-2.4 9.3-9.4h-20.4v-3.2h20.4l-9.3-9.4z"}})])])])],1):t._e()])},Et=[],St={data:function(){return{data:vt,next:0,prev:0}},props:{},mounted:function(){var t=this;this.current=this.data.findIndex(function(e){return e.path===t.$router.currentRoute.path}),this.prev=this.current-1,this.next=this.current+1}},Mt=St,It=Object(p["a"])(Mt,$t,Et,!1,null,null,null),Pt=It.exports,zt={components:{Hero:L,Progress:Ot,Navigation:Pt,Page:nt},data:function(){return{data:vt,title:this.$router.currentRoute.name,path:"/docs/blog"+this.$router.currentRoute.path,max:0,value:0,date:void 0,author:void 0,current:0}},mounted:function(){var t=this;this.current=this.data.findIndex(function(e){return e.path===t.$router.currentRoute.path});var e=this.data[this.current].date;this.date=X.formatDate(e),window.addEventListener("resize",function(){t.max=t.$el.clientHeight-screen.height/2}),window.addEventListener("scroll",function(){t.value=window.scrollY})},updated:function(){var t=this;this.$nextTick(function(){t.max=t.$el.clientHeight-screen.height/2})}},Vt=zt,Tt=Object(p["a"])(Vt,wt,xt,!1,null,null,null),Bt=Tt.exports,Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home container"},[n("Hero",{ref:"hero",attrs:{title:t.title}})],1)},qt=[],At={components:{Hero:L},data:function(){return{title:"Hi",index:0}},mounted:function(){var t=["Hi","Olá","Hallo","Salut","Hola","Hei","Hallo","Hej","Helló"];this.title=t[Math.floor(Math.random()*t.length)]}},Ft=At,Nt=Object(p["a"])(Ft,Rt,qt,!1,null,null,null),Lt=Nt.exports;a["a"].use(V["a"]);var Dt=[{path:"/",name:"Home",component:Lt,meta:{description:""}},{path:"/about",name:"About",component:ot,meta:{description:""}},{path:"/blog",name:"Blog",component:bt,meta:{description:""}}];vt.forEach(function(t){Dt.push({path:t.path,name:t.title,component:Bt,meta:{description:t.description}})});var Jt=new V["a"]({mode:"history",scrollBehavior:function(){return{x:0,y:0}},linkActiveClass:"is-active",linkExactActiveClass:"is-exact-active",routes:Dt}),Wt=n("2f62");a["a"].use(Wt["a"]);var Yt=new Wt["a"].Store({state:{theme:{appName:"Mauro Reis Vieira",search:!1},social:{codepen:"https://codepen.io/mauroreisvieira/",twitter:"https://twitter.com/mauroreisvieira/",github:"https://github.com/mauroreisvieira/",linkedin:"https://www.linkedin.com/in/mauro-reis-vieira-a752928b/"}}});new a["a"]({store:Yt,router:Jt,render:function(t){return t(z)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("b19e"),r=n.n(a);r.a},b19e:function(t,e,n){}});
//# sourceMappingURL=index.37cbd402.js.map