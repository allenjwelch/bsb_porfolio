(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(154),c=n(149);t.default=function(){return a.a.createElement(o.a,null,a.a.createElement("h1",null,"About Page"),a.a.createElement(c.a,{to:"/"},"Go back to the homepage"))}},149:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var r=n(0),a=n.n(r),o=n(4),c=n.n(o),l=n(33),i=n.n(l);n.d(t,"a",function(){return i.a});n(150);var s=a.a.createContext({}),u=function(e){return a.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},150:function(e,t,n){var r;e.exports=(r=n(153))&&r.default||r},151:function(e,t,n){"use strict";t.a=function(){var e;console.log("testing");try{e=window.innerHeight}catch(a){console.log(a)}var t,n,r=document.querySelector(".header");console.log(r),document.querySelector(".home-page")&&(t=document.querySelectorAll(".text-link"),n=document.querySelectorAll(".kicker"),console.log(n),console.log(t)),document.querySelector(".projects-page")&&document.querySelectorAll(".project-tile").forEach(function(e){e.addEventListener("click",function(){var e=document.querySelector('.project[data-project="'+this.dataset.project+'"]');console.log(e),e.scrollIntoView({block:"center",behavior:"smooth"})})});window.addEventListener("scroll",function(t){var n=window.scrollY+.66*e,r=window.scrollY+e/2,a=window.scrollY+e;window.scrollY>200?document.querySelector(".header").classList.add("scrolled"):document.querySelector(".header").classList.remove("scrolled"),document.querySelector(".home-page")&&(document.querySelectorAll(".text-link").forEach(function(e,t){r>=e.offsetTop?e.classList.add("scrolled"):e.classList.remove("scrolled")}),document.querySelectorAll(".kicker").forEach(function(e,t){n>=e.offsetTop?e.classList.add("scrolled"):e.classList.remove("scrolled")})),document.querySelector(".art-page")&&document.querySelectorAll("img").forEach(function(e,t){e.offsetTop<a?e.classList.add("active"):e.classList.remove("active")})})}},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Briana Brock"}}}}},153:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),l=n(55),i=n(2),s=function(e){var t=e.location,n=i.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,n){"use strict";var r=n(152),a=n(0),o=n.n(a),c=n(4),l=n.n(c),i=n(149),s=n(7),u=n.n(s),d=(n(155),n(151)),m=function(e){function t(){return e.apply(this,arguments)||this}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(d.a)()},n.render=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"header-container"},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(i.a,{to:"/",style:{textDecoration:"none"}},this.props.siteTitle)),o.a.createElement("div",{className:"header-links"},o.a.createElement(i.a,{to:"/projects/"},"Projects"),o.a.createElement(i.a,{to:"/art/"},"Art"))))},t}(o.a.Component);m.propTypes={siteTitle:l.a.string},m.defaultProps={siteTitle:""};var p=m,f=function(){return o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built by Allen Welch")},h=(n(156),function(e){var t=e.children;return o.a.createElement(i.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("main",null,t),o.a.createElement(f,null))},data:r})});h.propTypes={children:l.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-about-js-281f2e9425606d15afed.js.map