(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{183:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(196),o=a(199);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},192:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(193);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},193:function(e,t,a){var n;e.exports=(n=a(195))&&n.default||n},194:function(e){e.exports={data:{site:{siteMetadata:{title:"Briana Brock"}}}}},195:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(60),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},196:function(e,t,a){"use strict";var n=a(194),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(192),l=a(7),u=a.n(l),d=(a(197),function(e){function t(){return e.apply(this,arguments)||this}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.headerScroll()},a.headerScroll=function(){var e=document.querySelector(".header");window.addEventListener("scroll",function(t){window.scrollY>200?e.classList.add("scrolled"):e.classList.remove("scrolled")})},a.render=function(){return i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"header-container"},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{textDecoration:"none"}},this.props.siteTitle)),i.a.createElement("div",{className:"header-links"},i.a.createElement(s.a,{to:"/projects/"},"Projects"),i.a.createElement(s.a,{to:"/art/"},"Art"))))},t}(i.a.Component));d.propTypes={siteTitle:c.a.string},d.defaultProps={siteTitle:""};var p=d,m=function(){return i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built by Allen Welch")},f=(a(198),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t),i.a.createElement(m,null))},data:n})});f.propTypes={children:c.a.node.isRequired};t.a=f},199:function(e,t,a){"use strict";var n=a(200),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(203),l=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,s=n.data.site,u=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},200:function(e){e.exports={data:{site:{siteMetadata:{title:"Briana Brock",description:"Web portfolio for Briana Brock. ",author:"Allen Welch"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-2e4faadf36a6be4d52c4.js.map