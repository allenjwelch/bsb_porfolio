(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(149),c=n(154),l=n(157);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(l.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(o.a,{to:"/"},"Go back to the homepage"))}},149:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),o=n(4),c=n.n(o),l=n(33),i=n.n(l);n.d(t,"a",function(){return i.a});n(150);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},150:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},151:function(e,t,n){"use strict";t.a=function(){var e;console.log("testing");try{e=window.innerHeight}catch(r){console.log(r)}var t,n,a=document.querySelector(".header");console.log(a),document.querySelector(".home-page")&&(t=document.querySelectorAll(".text-link"),n=document.querySelectorAll(".kicker"),console.log(n),console.log(t)),document.querySelector(".projects-page")&&document.querySelectorAll(".project-tile").forEach(function(e){e.addEventListener("click",function(){var e=document.querySelector('.project[data-project="'+this.dataset.project+'"]');console.log(e),e.scrollIntoView({block:"center",behavior:"smooth"})})});window.addEventListener("scroll",function(t){var n=window.scrollY+.66*e,a=window.scrollY+e/2,r=window.scrollY+e;window.scrollY>200?document.querySelector(".header").classList.add("scrolled"):document.querySelector(".header").classList.remove("scrolled"),document.querySelector(".home-page")&&(document.querySelectorAll(".text-link").forEach(function(e,t){a>=e.offsetTop?e.classList.add("scrolled"):e.classList.remove("scrolled")}),document.querySelectorAll(".kicker").forEach(function(e,t){n>=e.offsetTop?e.classList.add("scrolled"):e.classList.remove("scrolled")})),document.querySelector(".art-page")&&document.querySelectorAll("img").forEach(function(e,t){e.offsetTop<r?e.classList.add("active"):e.classList.remove("active")})})}},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Briana Brock"}}}}},153:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),l=n(55),i=n(2),s=function(e){var t=e.location,n=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,n){"use strict";var a=n(152),r=n(0),o=n.n(r),c=n(4),l=n.n(c),i=n(149),s=n(7),u=n.n(s),d=(n(155),n(151)),m=function(e){function t(){return e.apply(this,arguments)||this}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(d.a)()},n.render=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"header-container"},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(i.a,{to:"/",style:{textDecoration:"none"}},this.props.siteTitle)),o.a.createElement("div",{className:"header-links"},o.a.createElement(i.a,{to:"/projects/"},"Projects"),o.a.createElement(i.a,{to:"/art/"},"Art"))))},t}(o.a.Component);m.propTypes={siteTitle:l.a.string},m.defaultProps={siteTitle:""};var p=m,f=function(){return o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built by Allen Welch")},y=(n(156),function(e){var t=e.children;return o.a.createElement(i.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("main",null,t),o.a.createElement(f,null))},data:a})});y.propTypes={children:l.a.node.isRequired};t.a=y},157:function(e,t,n){"use strict";var a=n(158),r=n(0),o=n.n(r),c=n(4),l=n.n(c),i=n(159),s=n.n(i);function u(e){var t=e.description,n=e.lang,r=e.meta,c=e.keywords,l=e.title,i=a.data.site,u=t||i.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Briana Brock",description:"Web portfolio for Briana Brock. ",author:"Allen Welch"}}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-bbc2c2642610986219e1.js.map