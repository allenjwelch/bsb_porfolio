(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{146:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),l=(a(149),a(154)),n=(a(185),a(151));Object(n.a)();t.default=function(){return c.a.createElement(l.a,null,c.a.createElement("div",{className:"projects-page"},c.a.createElement("section",{className:"hero"}),c.a.createElement("section",{className:"project-tiles"},c.a.createElement("img",{className:"project-tile","data-project":"1",src:"https://via.placeholder.com/300C/O",alt:""}),c.a.createElement("img",{className:"project-tile","data-project":"2",src:"https://via.placeholder.com/300C/O",alt:""}),c.a.createElement("img",{className:"project-tile","data-project":"3",src:"https://via.placeholder.com/300C/O",alt:""}),c.a.createElement("img",{className:"project-tile","data-project":"4",src:"https://via.placeholder.com/300C/O",alt:""}),c.a.createElement("img",{className:"project-tile","data-project":"5",src:"https://via.placeholder.com/300C/O",alt:""}),c.a.createElement("img",{className:"project-tile","data-project":"6",src:"https://via.placeholder.com/300C/O",alt:""})),c.a.createElement("section",{className:"projects-container"},c.a.createElement("article",{className:"project","data-project":"1"},c.a.createElement("div",{className:"project-image"},c.a.createElement("img",{src:"https://via.placeholder.com/500x400",alt:""})),c.a.createElement("div",{className:"project-description"},c.a.createElement("h1",null,"TITLE"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla libero at dolor consequuntur dolores impedit pariatur recusandae maxime inventore praesentium iste sunt unde, iusto commodi esse nostrum aliquam beatae repellendus?")),c.a.createElement("div",{className:"project-tags"},c.a.createElement("p",null,"role"),c.a.createElement("p",null,"features"),c.a.createElement("p",null,"other stuff"))),c.a.createElement("article",{className:"project","data-project":"2"},c.a.createElement("div",{className:"project-description"},c.a.createElement("h1",null,"TITLE"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla libero at dolor consequuntur dolores impedit pariatur recusandae maxime inventore praesentium iste sunt unde, iusto commodi esse nostrum aliquam beatae repellendus?")),c.a.createElement("div",{className:"project-image"},c.a.createElement("img",{src:"https://via.placeholder.com/500x400",alt:""})),c.a.createElement("div",{className:"project-tags"},c.a.createElement("p",null,"role"),c.a.createElement("p",null,"features"),c.a.createElement("p",null,"other stuff"))),c.a.createElement("article",{className:"project","data-project":"3"},c.a.createElement("div",{className:"project-image"},c.a.createElement("img",{src:"https://via.placeholder.com/500x400",alt:""})),c.a.createElement("div",{className:"project-description"},c.a.createElement("h1",null,"TITLE"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla libero at dolor consequuntur dolores impedit pariatur recusandae maxime inventore praesentium iste sunt unde, iusto commodi esse nostrum aliquam beatae repellendus?")),c.a.createElement("div",{className:"project-tags"},c.a.createElement("p",null,"role"),c.a.createElement("p",null,"features"),c.a.createElement("p",null,"other stuff"))))))}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(0),c=a.n(r),l=a(4),n=a.n(l),o=a(33),s=a.n(o);a.d(t,"a",function(){return s.a});a(150);var i=c.a.createContext({}),u=function(e){return c.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:n.a.object,query:n.a.string.isRequired,render:n.a.func,children:n.a.func}},150:function(e,t,a){var r;e.exports=(r=a(153))&&r.default||r},151:function(e,t,a){"use strict";t.a=function(){var e;console.log("testing");try{e=window.innerHeight}catch(c){console.log(c)}var t,a,r=document.querySelector(".header");console.log(r),document.querySelector(".home-page")&&(t=document.querySelectorAll(".text-link"),a=document.querySelectorAll(".kicker"),console.log(a),console.log(t)),document.querySelector(".projects-page")&&document.querySelectorAll(".project-tile").forEach(function(e){e.addEventListener("click",function(){var e=document.querySelector('.project[data-project="'+this.dataset.project+'"]');console.log(e),e.scrollIntoView({block:"center",behavior:"smooth"})})});window.addEventListener("scroll",function(t){var a=window.scrollY+.66*e,r=window.scrollY+e/2,c=window.scrollY+e;window.scrollY>200?document.querySelector(".header").classList.add("scrolled"):document.querySelector(".header").classList.remove("scrolled"),document.querySelector(".home-page")&&(document.querySelectorAll(".text-link").forEach(function(e,t){r>=e.offsetTop?e.classList.add("scrolled"):e.classList.remove("scrolled")}),document.querySelectorAll(".kicker").forEach(function(e,t){a>=e.offsetTop?e.classList.add("scrolled"):e.classList.remove("scrolled")})),document.querySelector(".art-page")&&document.querySelectorAll("img").forEach(function(e,t){e.offsetTop<c?e.classList.add("active"):e.classList.remove("active")})})}},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Briana Brock"}}}}},153:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),c=a.n(r),l=a(4),n=a.n(l),o=a(55),s=a(2),i=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return c.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};i.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},t.default=i},154:function(e,t,a){"use strict";var r=a(152),c=a(0),l=a.n(c),n=a(4),o=a.n(n),s=a(149),i=a(7),u=a.n(i),m=(a(155),a(151)),d=function(e){function t(){return e.apply(this,arguments)||this}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){Object(m.a)()},a.render=function(){return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"header-container"},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(s.a,{to:"/",style:{textDecoration:"none"}},this.props.siteTitle)),l.a.createElement("div",{className:"header-links"},l.a.createElement(s.a,{to:"/projects/"},"Projects"),l.a.createElement(s.a,{to:"/art/"},"Art"))))},t}(l.a.Component);d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};var p=d,E=function(){return l.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built by Allen Welch")},h=(a(156),function(e){var t=e.children;return l.a.createElement(s.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("main",null,t),l.a.createElement(E,null))},data:r})});h.propTypes={children:o.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-projects-js-84f49abc3170ffb7cb3b.js.map