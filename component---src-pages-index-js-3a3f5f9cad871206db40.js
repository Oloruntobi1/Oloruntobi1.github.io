(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"/uZM":function(e,t,a){e.exports={container:"layout-module--container--3BoYY",content:"layout-module--content--zUuRj"}},Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("/uZM"),o=a.n(i),u=(a("tUrg"),a("I/Z2")),l=a("Wbzz"),c=a("aOmW"),s=a.n(c),m=function(e){return r.a.createElement(l.a,{className:s.a.link,to:e.to},e.text)},d=function(e){return r.a.createElement(l.a,{to:e.to},r.a.createElement("div",{className:s.a.button},e.text))},f=function(e){var t="",a="";return"twitter"===e.site?(t=s.a.buttonTwitter,a="https://twitter.com/"+e.username):"linkedin"===e.site?(t=s.a.buttonLinkedin,a="https://www.linkedin.com/in/"+e.username):"github"===e.site&&(t=s.a.buttonGithub,a="https://www.github.com/"+e.username),r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:t},e.children," "))},p=function(){return r.a.createElement(l.b,{query:"3159585216",render:function(e){return r.a.createElement("header",{className:s.a.container},r.a.createElement("div",{className:s.a.row},r.a.createElement(d,{to:"/",text:e.site.siteMetadata.title}),r.a.createElement(f,{site:"github",username:"Oloruntobi1"}),r.a.createElement(f,{site:"linkedin",username:"balogun-tobi-adisa"}),r.a.createElement(f,{site:"twitter",username:"jaiyejaiyeprogrammer"})),r.a.createElement("div",{className:s.a.row},r.a.createElement(m,{to:"/",text:"ARTICLES"}),r.a.createElement(m,{to:"/about",text:"ABOUT"})))},data:u})},h=a("SxA4"),E=a.n(h),b=function(e){var t=e.children;return r.a.createElement("footer",{className:E.a.container},r.a.createElement("div",{className:E.a.footer},t))};t.a=function(e){var t=e.children;return r.a.createElement("div",{className:o.a.container},r.a.createElement(p,null),r.a.createElement("div",{className:o.a.content},t),r.a.createElement(b,null,"My new Gatsby Blog 2019"))}},FXdY:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"totalCount":4,"edges":[{"node":{"fields":{"slug":"/graphql-many-data-sources/"},"id":"6481c416-770a-5496-a09a-dc58e6fed343","frontmatter":{"title":"One GraphQL, many data sources","image":"https://source.unsplash.com/150x150/?graphql","keywords":"data","date":"January 2019"},"excerpt":"Learn to query multiple data sources with GraphQL Ipsum aliquip aute commodo aliqua qui ex enim anim esse excepteur ex. Veniam cillum et…"}},{"node":{"fields":{"slug":"/react-powerful/"},"id":"33496269-1720-5c79-8032-c4f60618b84a","frontmatter":{"title":"React is powerful","image":"https://source.unsplash.com/150x150/?reactjs","keywords":"javascript","date":"January 2019"},"excerpt":"Learn why React is so powerful Sint voluptate ex anim id ullamco duis quis. Ea excepteur sit ex quis eiusmod culpa nulla in non dolor magna…"}},{"node":{"fields":{"slug":"/gatsby-awesome/"},"id":"3e7e8177-2812-5704-9976-905c6c5b2987","frontmatter":{"title":"Gatsby is awesome","image":"https://source.unsplash.com/150x150/?gatsbyjs","keywords":"blog","date":"January 2019"},"excerpt":"If you are reading this, you know Gatsby is awesome! Dolore anim duis enim sint elit et dolor pariatur ipsum anim dolor et consequat velit…"}},{"node":{"fields":{"slug":"/welcome/"},"id":"9204980b-4c39-5a12-8449-04f4463c6ca6","frontmatter":{"title":"Welcome to my new Gatsby blog!","image":"https://source.unsplash.com/150x150/?welcome","keywords":"developers","date":"January 2019"},"excerpt":"Hi there! Est culpa fugiat sint et mollit laboris dolore. Eiusmod qui adipisicing tempor ullamco irure non aliqua commodo proident laboris…"}}]}}}')},"I/Z2":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Askari blog"}}}}')},OGtf:function(e,t,a){var n=a("XKFU"),r=a("eeVq"),i=a("vhPU"),o=/"/g,u=function(e,t,a,n){var r=String(i(e)),u="<"+t;return""!==a&&(u+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),u+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(u),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("Bl7J"),o=a("WORS"),u=a("FXdY"),l=a("Wbzz"),c=a("vL02"),s=a.n(c),m=function(e){return r.a.createElement(l.a,{to:e.to},r.a.createElement("article",{className:s.a.articleBox,key:e.id},r.a.createElement("div",{className:s.a.left},r.a.createElement("img",{src:"https://source.unsplash.com/150x150/?"+e.keywords,alt:e.title})),r.a.createElement("div",{className:s.a.right},r.a.createElement("h3",null,e.title),r.a.createElement("div",{className:s.a.date},e.date),r.a.createElement("div",null,e.excerpt))))},d=function(){return r.a.createElement(l.b,{query:"3964204167",render:function(e){return r.a.createElement("div",null,e.allMarkdownRemark.edges.map((function(e){var t=e.node;return r.a.createElement(m,{id:t.id,to:t.fields.slug,keywords:t.frontmatter.keywords,title:t.frontmatter.title,date:t.frontmatter.date,excerpt:t.excerpt})})))},data:u})};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{text:"Welcome"}),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement(d,null))}},SxA4:function(e,t,a){e.exports={container:"footer-module--container--29a86",footer:"footer-module--footer--cvZzG"}},WORS:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Yqq1"),o=a.n(i);t.a=function(e){return r.a.createElement("section",{className:o.a.container},r.a.createElement("h1",{className:o.a.title},e.text),r.a.createElement("div",{className:o.a.subtitle},e.subtitle))}},Wbzz:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));a("xfY5");var n=a("q1tI"),r=a.n(n),i=a("+ZDr"),o=a.n(i);a.d(t,"a",(function(){return o.a}));a("lw3w"),a("emEt").default.enqueue;var u=r.a.createContext({});function l(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(u.Consumer,null,(function(e){return r.a.createElement(l,{data:t,query:a,render:n||i,staticQueryData:e})}))}},Yqq1:function(e,t,a){e.exports={container:"title-module--container--2vW-5",title:"title-module--title--sKQPK",subtitle:"title-module--subtitle--1TL_y"}},aOmW:function(e,t,a){e.exports={container:"header-module--container--1KdcH",row:"header-module--row--3Ii7u",button:"header-module--button--1sLwG",buttonIcon:"header-module--button-icon--yOf1N",buttonGithub:"header-module--button-github--1Gl6d",buttonTwitter:"header-module--button-twitter--3cJmB",buttonLinkedin:"header-module--button-linkedin--3Z87Y",link:"header-module--link--1xI67"}},lw3w:function(e,t,a){var n;e.exports=(n=a("rzlk"))&&n.default||n},qncB:function(e,t,a){var n=a("XKFU"),r=a("vhPU"),i=a("eeVq"),o=a("/e88"),u="["+o+"]",l=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),s=function(e,t,a){var r={},u=i((function(){return!!o[e]()||"​"!="​"[e]()})),l=r[e]=u?t(m):o[e];a&&(r[a]=l),n(n.P+n.F*u,"String",r)},m=s.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(c,"")),e};e.exports=s},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var n=a("q1tI"),r=a.n(n),i=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},vL02:function(e,t,a){e.exports={articleBox:"article-module--article-box--26J0c",left:"article-module--left--lmZFy",right:"article-module--right--3IAhC",date:"article-module--date--1Wodh"}},xfY5:function(e,t,a){"use strict";var n=a("dyZX"),r=a("aagx"),i=a("LZWt"),o=a("Xbzi"),u=a("apmT"),l=a("eeVq"),c=a("kJMx").f,s=a("EemH").f,m=a("hswa").f,d=a("qncB").trim,f=n.Number,p=f,h=f.prototype,E="Number"==i(a("Kuth")(h)),b="trim"in String.prototype,g=function(e){var t=u(e,!1);if("string"==typeof t&&t.length>2){var a,n,r,i=(t=b?t.trim():d(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+t}for(var o,l=t.slice(2),c=0,s=l.length;c<s;c++)if((o=l.charCodeAt(c))<48||o>r)return NaN;return parseInt(l,n)}}return+t};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof f&&(E?l((function(){h.valueOf.call(a)})):"Number"!=i(a))?o(new p(g(t)),a,f):g(t)};for(var v,w=a("nh4g")?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;w.length>x;x++)r(p,v=w[x])&&!r(f,v)&&m(f,v,s(p,v));f.prototype=h,h.constructor=f,a("KroJ")(n,"Number",f)}}}]);
//# sourceMappingURL=component---src-pages-index-js-3a3f5f9cad871206db40.js.map