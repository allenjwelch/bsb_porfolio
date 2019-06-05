(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{186:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),c=a(0),i=a.n(c),o=a(192),s=a(196),l=a(199),u=(a(208),a(205)),d=a.n(u),m=a(206),p=a.n(m),f=a(201),g=a.n(f),h=(a(202),a(203)),v=a.n(h),E=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.projectScroll()},a.projectScroll=function(){document.querySelectorAll(".project-tile").forEach(function(e){e.addEventListener("click",function(){var e=document.querySelector('.project[data-project="'+this.dataset.project+'"]');console.log(e),e.scrollIntoView({block:"center",behavior:"smooth"})})})},a.render=function(){return i.a.createElement(s.a,null,i.a.createElement("div",{className:"home-page"},i.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react"]}),i.a.createElement("section",{className:"hero"}),i.a.createElement("section",{className:"content"},i.a.createElement("section",{className:"brief-text"},i.a.createElement("p",null,"A creative thinker and artist dedicated to the user centered process of research and design")),i.a.createElement("section",{className:"project-tiles"},i.a.createElement("img",{className:"project-tile","data-project":"1",src:d.a,alt:""}),i.a.createElement("img",{className:"project-tile","data-project":"2",src:v.a,alt:""}),i.a.createElement("img",{className:"project-tile","data-project":"3",src:"https://via.placeholder.com/300C/O",alt:""})),i.a.createElement("section",{className:"intro-text"},i.a.createElement("p",null,"I'm an emerging UX Designer passionate about people, proficient with research, with a creative mind and spirit, and an eye for detail ready to create beautiful experiences. I'm pretty great at research including competative audits, user interviews based on demographics, synthesizing qualitative and quantitative data, and using all that information to start getting down to the beautiful design of an awesome product and experience. An artist at heart with a customer service background, I bring the dynamic combination of creativity and understanding to the design process of the user’s experience. See my latest ",i.a.createElement(o.a,{className:"text-link",to:"/projects/"},"projects")," and how I might be able to help your team on your next venture.")),i.a.createElement("section",{className:"projects-container"},i.a.createElement("article",{className:"project","data-project":"1"},i.a.createElement(o.a,{to:"/qoins"},i.a.createElement("div",{className:"project-image"},i.a.createElement("img",{src:p.a,alt:""})),i.a.createElement("div",{className:"project-description"},i.a.createElement("h1",null,"Qoins"),i.a.createElement("p",null,"A financial management mobile app that rounds up your individual purchases and allows you to set up automatic payments to set money aside in order for you to pay off your debt faster")))),i.a.createElement("article",{className:"project","data-project":"2"},i.a.createElement(o.a,{to:"/recycleATL"},i.a.createElement("div",{className:"project-description"},i.a.createElement("h1",null,"Recycle ATL"),i.a.createElement("p",null,"Recycle ATL is what we call a passion project.  It comes out of my need to know where I can specifically recycle glass, since the city of Atlanta no longer recycles glass.  Not only that, but also for users living in locations that do not offer curbside recycling.")),i.a.createElement("div",{className:"project-image"},i.a.createElement("img",{src:g.a,alt:""})))),i.a.createElement("article",{className:"project","data-project":"3"},i.a.createElement("div",{className:"project-image"},i.a.createElement("img",{src:"https://via.placeholder.com/500x400",alt:""})),i.a.createElement("div",{className:"project-description"},i.a.createElement("h1",null,"TITLE"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla libero at dolor consequuntur dolores impedit pariatur recusandae maxime inventore praesentium iste sunt unde, iusto commodi esse nostrum aliquam beatae repellendus?")))))))},t}(i.a.Component);t.default=E},192:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),c=a(4),i=a.n(c),o=a(33),s=a.n(o);a.d(t,"a",function(){return s.a});a(193);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},193:function(e,t,a){var n;e.exports=(n=a(195))&&n.default||n},194:function(e){e.exports={data:{site:{siteMetadata:{title:"Briana Brock"}}}}},195:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),o=a(60),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},196:function(e,t,a){"use strict";var n=a(194),r=a(0),c=a.n(r),i=a(4),o=a.n(i),s=a(192),l=a(7),u=a.n(l),d=(a(197),function(e){function t(){return e.apply(this,arguments)||this}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.headerScroll()},a.headerScroll=function(){var e=document.querySelector(".header");window.addEventListener("scroll",function(t){window.scrollY>200?e.classList.add("scrolled"):e.classList.remove("scrolled")})},a.render=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header-container"},c.a.createElement("h1",{style:{margin:0}},c.a.createElement(s.a,{to:"/",style:{textDecoration:"none"}},this.props.siteTitle)),c.a.createElement("div",{className:"header-links"},c.a.createElement(s.a,{to:"/projects/"},"Projects"),c.a.createElement(s.a,{to:"/art/"},"Art"))))},t}(c.a.Component));d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};var m=d,p=function(){return c.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built by Allen Welch")},f=(a(198),function(e){var t=e.children;return c.a.createElement(s.b,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),c.a.createElement("main",null,t),c.a.createElement(p,null))},data:n})});f.propTypes={children:o.a.node.isRequired};t.a=f},199:function(e,t,a){"use strict";var n=a(200),r=a(0),c=a.n(r),i=a(4),o=a.n(i),s=a(204),l=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title,s=n.data.site,u=t||s.siteMetadata.description;return c.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u},200:function(e){e.exports={data:{site:{siteMetadata:{title:"Briana Brock",description:"Web portfolio for Briana Brock. ",author:"Allen Welch"}}}}},201:function(e,t,a){e.exports=a.p+"static/logo-0124936f7c907c06ba91360d66db3bef.png"},202:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAACZCAMAAAB9uNoDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAKsUExURQAAAC8vLwICAgEBARISEgICAgMDAwkJCQkJCQYGBgICAgICAgQEBPf39wQEBP7+/v7+/vv7+8XFxdjY2P////39/ZmZmbGxsezs7P///0GSNP///gN4cv39/P7+/vcfIKHbOufy5v+2AvT483CtZ1mfTf/LAgR1b8/kzP6sBKDImYi7gE2ZQf7++v7BA/ckJvv7+/7YBP6xAju3CgVoXd2iBOwfHmfPHQp9df7QArfWs/ylA+dDE/v99azQpqbbQPp8BgVxbJvYONvr2f6bA/E5OvuEBfv56/27BbThSJTBjcPdv//HA+9hC3fPIrjWtCqMYK7fQ/yPBBx+TfNyCvbt7YjLHZLDOhlqcdSiA2WnWt3TBlzLGGU+hd8uFZvNPOxUDdbQCJ4unH63cp+lCPjSYKfbUFHLE+krG0K7EPOxq3PRNzyYWRxda38igOk3FuAeGfbOzP20CuWgBBRyT/bbgvfqt1YraipRavmvHReBaEGLS4LWS0WZKUY8bfbg3Heuovq/JlGhKODxxcqkBfr02fX34CWCRJDOJPjvzNbo483OC7jhaJ7LGPGkAurz8qXfhvg2GDCMPA55ZTGLgGTAK4zJYer21fPWBuTUD1G8I4UjhVadlGYkbfT77MXd2ev24z+RifJFH02ac/fkn/XUP8voo/OOD7akBVWxCrnjonnFUtjsrfrSKI+/tbDSz+9YVE8dV/inJh9/eJ3Iv0CrJ7/lhKZEpPyhDXCsCfnjy2mmQszok9vF3ZA1lFyxKKPabXS0TGCnf8K1zejd6exxb7yUvPjBO9W9U1mZRuDdZTtVerfOEHNUjPCemXs1jPOZRO6Nfo7cXPKEI/THr5bMfdLvwMLNErJ3sZdllvG5fuNgNpuPpm9AdtalGJpMmT56h6PKnJG5J+m6A9dDst4AAAAZdFJOUwAEOz4MGScYBQ00MwbGLvFgQXyXgIBrXF0S5zOjAAAR+ElEQVR42u2diV8TWbbHmxlUUJye5S2fVFEFsSoSsrTVtiIdSFiigInIrhgZRBHEdkGxQUAdUBQVQVRc2n3Brd3HbWy3Vqddet/XmXnv/SnvnHurKsEWu4oESX/GA20Kqure7/2dpe6tCulXXiH2h9GvGsLSRv/+lQD7D0P42n/6MX9vCGf7g4IZMTqsOUdHyJwxYY1peDWGgkZFhjenITIKQSNiosOcMzqGco4Ic84RkYQzMvw5o5AzOuw5o4me0cPCnHNYdFRIOXle+uDO38HuDAZnTGg4ea7jauunfyY2b94Pd0pCyYl+jwoFJy9cPHAlOeFjynl33ry//e1RSdj5ne++ujM2Njk2NoFgfv45YM6bN+9OeHGy0kWgREwA/ZhwEsx58z7gwsjvfHdrrIIJoKUf//nzuxTz7v8KfNhw8sYH+X5MBC399FMI0Lv79+9f+ogLDWdM0JxsR2/+4mY/Zmxyaen/lX68f+nSpfuX7r9bErr4DIqT72i9erij4/CFo6qeV0rBGg8uBTmX7v+BDxM9OfAsx7O81HFA1jM5GXzf+JeDS4mkH/BhoScnXG190Nv7oPWwJF1NJpi0QJUuoaQ/CmGQR+yhk7vz0Ww9Ca3d3MXkhOZmOfcRFG3l3/kh15Pd01ldvTg/f9WHq3qKVu3s4A435y9e3CyDJpQi5sp/lYRCz4ggOFn79akFBbvzP7x168NVq1YVAejVxWC0TCXEZjQC5sqVj1h2aPW0t00FK5iTljZn5i0A7TnaLVkRlMZpQkJGI3IeDDqVgrxuOjsJZ0FB2syZM0HR5uZWydi7GD2fkJBMKuoSUPTgDxI7lH7nz02lnIg58/6qVfnNzRfB8/mEE0jJxQkK1ME7nIEPPt8HOv9sn1pA1ZyDnOB54GzlhV5I/1g/aEbpXw5+KvF3Hg2V3+23KWYBxZwz07aqOb/bYDgMnMmEk2R9Rmlj48offzx48NHQ5BG7h0CCZQLoHLBbtvwL4F7pQX5+M1LS8lS6pLGx8a9g/xqSdQfrvJ6GBppmZsYj5pyZHz4QMGE68vN7KCaCgpxLliDoP/mh4LS3paXFx6fFF0wtAE6oTGD3vTS/Wpt7qJ4kRpegNf515QdD4ndnJ+HMTAPO+Mx4sMzMTifd172zJyGDGlGUgP6TC4ozYkB6stxJFDMNOdPiq6uRMz5tj10uWBd6MiZQTuJ+mOYtKe1gg+GMGVi+s+1phCw+M60zTcaMv21X9gq9EyZMkPVEy8hY0sobhiCPuNvxCudUBbPgkF8xc37zzp1XlGTCKcnhIbm+w0SJCAoZ1Cljxp+0+zklT++VK0d3qpwZB7gh4YSydK4aMePTpsqY1U4Vk2WdJ+8/6D16NJn4HGJgQlByBjFPZg12522QtLo6TeZsC4iKtnv3xFs+cWfPBNmOBjcTCWY+z7LsnusQmxCjaJ2qnPYjnZkzv/WJ9ysr31Y4L3L+u1Dci+XEPp1tnZmytbFKQJyszty0CCArz963yaBX/GskSeJeaJ1H90KfEKYE87pdZW/f03bujOXbb3efPXuLQdCMCRf4gFNe9LyOlyQeV3K3AVMt8YGjEA4dcXsvtLYeONodlJpB68mTMOXbr2ee5NlnBTAujHiwPov9AV+Pgr1Pa7e3OXXcze2WhuI+g17rvrrz8IvOd/0m4I3So9Jg55FSe+x23m636401nus4gDP85IvcgPyumZNl7ZzdeWhP2/H6jzqrV59k9VF2H5hA5qOxV7r5wYzPtuvb7lXP2TRjRtfevXO7ZsxY7dTl8gulUEvptOQCN4ic7TOnzyC2acvs2bM/mTFj+jm79lrr7d1Iaj5QgqY6J826/N42R8bsAsy5W2BrqlZBuSO7bTs2FiFoAt4qiT0g8frzSON8nnPeRtJNm75Hzrld07u2NGiShT10ffr0Xe+vY4iiCbAWSU6+yA9mHp3bBNY1FzFB0O+3fKRJUO7edLBd69atW8MUgevR8UcF/Zya10f8ua6uTZs+oZhbtsydu7dB2/CmK6DrwPsbi3qAVFcq6aufbPaJ77u6QE6COfv1d/bu/ciuxfN2Iuj099eB6zcya3YAbI+u2qQrPln7cahHn8hyzn0d7Z3NWjjZPdNl0B3MmjVrdmzcWFRU1CoNUl1i2/funT37HYL3DnkBq9JUmrhtkyYR0DVrVM6iw3r11Mhp/2ju7L0Kn2Ln2+3PLZuycw8tmkRs1zrkRMqitw8MBicsazafAMo3ib3+JiDixtg36+39n8Kr02Lu5CTZ3l/DEM639XFqrUuSkF315tixhJH8i5hjwc5n9+tswT97Z51fKaC71u0gmDo5Nd735qQGgJo2bawCKlOeONEg9b8u8dce9jtALEPORavPiosB8+1WAxf6PJKyzxPOaZSRQI49f7zq/PkTzn6667sWkraVIWbZoq8WrV60etc1ZoeLO8yHmJOXnPVjKec0cD58kdfNUnYDCMprwDQYjkwqQ9LViLno7L59+4xCLxviPJKkDecVzmnyxtixVXZY5rbXV3HPDhSOTlmV2TV3pgwNKeF7377dUh7j1KXnL9Z5iLSqaX49p71GeM9vYCUAlTZk8/1iGvjN7cow7IuQc9JXiAmcZr7ymju0enJcA4JRPHilG/VwzeTAnrEkVlOIcz5pV+8xfFdWtqBswa7VqxH4W8597Zo3tHWJdZ4AODRCSV9PZD9Pf1lEe/36Dby6fP6qbMHChQsXoN0TnL5r11yhnYewG1572nJea3A+p4jJmHzD2hyVkzXs2beQck46c8i5e+G1a9tC63f2eI6Cl4OI8DKmyvmcZFXQstfmAKd6IL8NOctWnznCHTmLvNtCW5fY+pwcSjlmDNnKge5/uabwXBUeGFAOhG1nzrQdcXKHzux7442FejgjtHJSFRGUcGqZJ/ENdXDeZo5lWR6+0Viekw61bdu18A0wvXpG/DLnGLAc/KcOQcfkrM3WUKI3rK2Dw9dWUXvyZDfa2V37FhBKFPRMiPO9gRLKBiLV253ZP7e+Gjur6ug549ESt06c/967xGRMEPS70M7n2ew6qqTS7WNn9uO1xJougzU1rW0Cu7y5T9LX19WN92MmpmzdumLW6fnz33vvXYVz4ZEQr+O4x3XQHaVMhE6PO+uh7zF1KZNvTCaWkgL/3NgceItnc1NdYuJ42RJTUoBz64oVEyfOWn9aAd3nDG2+GwzH67A3gpk4PrEp29mUCAohIQUtLE5NTz91M2Dyn/24bnzi5MJEKiblJJizJk6cL4Oe1cGpbf6ZvVZxX+L4usQqZwPBLCwkmIVZ6cWp5eXFxQGczp8mTz5VXFwMUieOJ5gpFHMiGDifcG7jNHNqfL5pPw7BhpSJiXWJKQ1SVQr0XQiWW1x4Kis9vaK8vDw1gJNrSM/NBcz0QhhGYUoKlXOibPMp6MIjfGjrJ+rzmFICZmLKBmcTdEx0rKjIzc2tqAA5AdTP2fJ1bgVwpqdnFWZlZVHSrTLlLORE0LM65/Na1u/85iaCiT5scm64QShBx4qK2mXLapKAsyYpabk6X324rDwVRpCaWp6bnoWshTcUOSFAIetPr3/33TOsIeR6svxxqieEWpP9ZmFWcWpuejooWVtTviwpqQYoAzj5L5OWoZWX1x6rAFFxSIUrMD4BcxZWp/Wz3ttl18mp7X4IV38jhSRP1tf2m1kgVWpucWpqDSUcNy4uLm6cymkouQSUSYTzWCq4Pz29ODf3FEn39ch5euKs+ScH6X6dvb4p5UYhdJmV3Y6YYLWAGEfsKU5ueQ2onFRec+zYsVoELQbpc7NWIOd64ISXJ049nDruh7BS/Y3JhPOm9A9KSRnjpkyhrH5OlvsMZa6p3b59e21tLaYacBanZ0GZX7/+9PpZ//OkndWrp9b787z9+GWItKz0n5xv+TmnjJsyZdzPOFnpYVxcUhJyYmjUYFblIuipiQC54vLlm/ruK2pbx+EyiLjz5hfgwtR/lBBBa+MwLKeomAGccGjLJVR5+/Zx40gEE1TgxDJ16tQXDbqeJGjjBEyJIw8zDbzzp6+B8Eup5RgQEDo/ZiAnnLIcQek+AgrpX1tRnAWoX3/Rou/BjLZ856jJN0Fbvjy2/dg30jdTaI4D5ji6FciJQxM+uyTvkjmhxtbUVqSf+uKbbN3PZbRzKrcIea7ls0vHloNc41TMn3GiB6SSh7jz4Vt97Zubgu43YWhbb/L4dD/giTQrOZe/VcKVfAmheWlKgC3vc4oktSBnC/f0YlT/e0W01SWSRs94wM+WPGXSUz6QPkNO/rm3nbTOlzTN63iOf+YyXeJghYZfBrJW4/uewhokiNAWtk8IBfG+i6hg3nfx/ENapsT14Rzw+y6Cef6uoU/prbg+fh/w+y4G+/0M3MMWNvhWQvp3fP1MCkpC9ncog/v3m6H5u54X/j4Ww8DzKOZXwvnv93e7g8sZ9ZLzmWYMxfVIMBrNZq8DzTwQCMHtsFh9ef0yuqw2hjTsdjhcFtmsVi90afHAq+brpllkFDNZBiCWwwRn9vPAxWIj7ZLHHC4m0LxGK3Zo1lOXvIwPxmrF/sSBSAon9ucKMgjaah5jEkWTjTFZLQ4fnmC0MXm64tMo4+EIzQPj7DcERQbcZaNqYNuVRFwPI5Dz8nTVJYVTAE4P2TA7vP6ejeRpH3rWCL90u41qZOMOoxk56S8cDu9Tb/8RGJNRHr3bRLkxtsyEnHkO57PqvJvx0Q1oEVtxkajy0I4wxCBurR6rz8Y44GD4WQQaowd3uI0mo8FHBBM8JMT7PnLLY6yARjQ0Wv2cgqiF82m/mxmTHKdk5C7GZjY4bARU8DFMpcNl8jGC0aT4r9JAgsvmcVhtJhH79pGoAWTLUyllZdzQPPGX4KYxQsZPwAfIaTYREY20KQthtlIt3NgTbAvkaOAUTEiFY3KRGETlSJCKjC3Q9TZs2UYHKMcykVX4Jc5nxSdwGr0WUfY1dIgjF2zQOzRVSQ6pdJDC4iVHUyoHBXEjmxUTxEfbYlyBLVvUIcvglFM+VB9nHi1pNitpzUOyQnChm10KTp6RjJ+Og7haTnELyWELAuCIzMBk9bfsYdxur8sawM704bToqkvACQXUqIYUI5DaL3oEK9WW+gl9StQR0X02/zXRihgAILiwBokOpV2XaFPKuujnFAO6teiKT9RTNPpDn4GAsjoEuh1QGR3Efx7KaQpMFi8JQhyaOSA6IQkrrVa4THrUADU+k1Mwa9ITvAvJKseKEfzuMcpSqXq6BZoEopw1qp5uwgn9QHEiQzN4AwUwKlFpVjl96kVV5bTkaeKEEzAqRWzL7FXDxmPBEdDI8lrkiDLTTKhUhLaaafHBRuiQfH4PiKLag0uNSdPPOI2mPE15RDLHgkVaNEH3SmkxWWnSExyrfKToJq0rgxGwCwvWK6OcyUZ/bguMQ93yucxCX04obYzP4jK7YZx5WtbFGJ5WUqIZko3Yo9EgkKhzMXJlcShtV9IiQy8yggjjgn+8BuVQs8lE9XRbK01qzYe2RYwKM5nrmKmIAbOnPA15ZGFsJp/occMFmKHFG688JpvNK/dggrRVEpO0jsJgKRBFmy3PYPSZRKtLIHMjm8mfkEaYFdlkZqZSKXlwiIix4jaB+UTRarV6LBa3hvgMmHBYrPIPZv+k2egSScOCP+fkYzxipafvPMnsr26ypiKdn9CT3V63xql9EOsOo0XRU88yQhjYh18Es940mVxmnDxZDINvwazjPCa8SPnMhhfCOfD7inlmXPO9yHVxzMv1exj4/cVyxvxK7i9F/IruL0W8vP/575bvkS/9/rLOv+QMWXy++muIT5gvhfnnUat59N9hzflHRc8Rw/8Uxph/Gi5/LnHkiOGj/himrn919H/9brj6Oc/DfzfyN78NT/vNSJUTAhRBw9MAc5j8+d5RkSMAdNSoUSPxayT5j7yMGql8j8JveccodZ/yazS6y9+I/DM9SN1UO6Cn0DPlb38L/sZHjQJMKif5YPcRw4YND08bBpjy58+jotEjRgBr2BlQRauYABoRExkZGR12FhkdCZQRAf/DiQi0KLSYiCj4ioEXeI0hv4qKiFJ+wF14ZERMhLwrhnzhhnx0BG1E3qKn4EuE0gxsgMXIHZJfRKmNkG6jyD5y3CuBlL8C+3/4FquwyO8k6AAAAABJRU5ErkJggg=="},203:function(e,t,a){e.exports=a.p+"static/logo3-6a7c1e1e21babeda20f07482ccd69d48.png"},205:function(e,t,a){e.exports=a.p+"static/title1-fa703b18102f5fe78798d16352eb32f2.png"},206:function(e,t,a){e.exports=a.p+"static/title2-4afc7bc2ccd02a5c0203013533fa3fb1.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-8fdee5c39571aa917b90.js.map