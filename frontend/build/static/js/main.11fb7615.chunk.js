(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,a,t){e.exports={navigation:"Navigation_navigation__1zcHs",navigationTitle:"Navigation_navigationTitle__7F5gu",navigationLink:"Navigation_navigationLink__pmnhd",blob:"Navigation_blob__Oi3Bf"}},16:function(e,a,t){e.exports={projectContainer:"Projects_projectContainer__3rtNp",header1:"Projects_header1__3r5SH",header2:"Projects_header2__29DF5",sourceButton:"Projects_sourceButton__J838Y",liveButton:"Projects_liveButton__2a_R7",languageBadge:"Projects_languageBadge__3Y7Lm",languages:"Projects_languages__3EsOV"}},19:function(e,a,t){e.exports={container:"Header_container__1zVrb",hireButton:"Header_hireButton__12pjT",header1:"Header_header1__31_5t",header2:"Header_header2__3Amat"}},43:function(e,a,t){e.exports=t.p+"static/media/coding2.24c552c9.svg"},50:function(e,a,t){e.exports=t(82)},55:function(e,a,t){},56:function(e,a,t){},82:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),c=t.n(l),o=(t(55),t(46)),i=t(12),s=(t(56),t(14)),m=t.n(s),u=t(20),g=t(17);var E=function(){return r.a.createElement("div",null,r.a.createElement(u.a,{className:m.a.navigation,collapseOnSelect:!0,expand:"lg",variant:"light"},r.a.createElement(u.a.Brand,{className:m.a.navigationTitle,href:"/"},"Brandon Pessman"),r.a.createElement(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(g.a,{className:"mr-auto"}),r.a.createElement(g.a,null,r.a.createElement(g.a.Link,{className:m.a.navigationLink,href:"#"},"About"),r.a.createElement(g.a.Link,{className:m.a.navigationLink,href:"#"},"Projects"),r.a.createElement(g.a.Link,{className:m.a.navigationLink,href:"#"},"Contact")))),r.a.createElement("svg",{viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg",className:m.a.blob},r.a.createElement("path",{fill:"#FFF0E6",d:"M12.7,-29.9C17.6,-19.2,23.3,-18,36.2,-14.6C49.1,-11.2,69.2,-5.6,65.9,-1.9C62.5,1.7,35.6,3.4,28.9,17.5C22.2,31.7,35.6,58.2,34.1,69.1C32.6,80,16.3,75.3,0.9,73.7C-14.5,72.1,-29,73.7,-34.3,65C-39.6,56.3,-35.6,37.3,-44.1,24.8C-52.6,12.2,-73.5,6.1,-80.8,-4.2C-88,-14.5,-81.7,-29,-68.7,-33.7C-55.6,-38.4,-35.9,-33.2,-23.4,-39.4C-10.8,-45.7,-5.4,-63.3,-0.7,-62C3.9,-60.7,7.9,-40.6,12.7,-29.9Z",transform:"translate(180 20)"})))},_=t(19),d=t.n(_),p=t(23),v=t(24),h=t(18),f=t(29),N=t(43),b=t.n(N);var x=function(){return r.a.createElement("div",null,r.a.createElement(p.a,{className:d.a.container},r.a.createElement(v.a,null,r.a.createElement(h.a,{sm:6},r.a.createElement("h1",{className:d.a.header1},"Hi There!"),r.a.createElement("h2",{className:d.a.header2},"I'm Brandon and I'm a Fullstack Web Developer."),r.a.createElement(f.a,{className:d.a.hireButton,variant:"primary"},"Hire Me!")),r.a.createElement(h.a,{sm:6},r.a.createElement("img",{src:b.a})))))},B=t(49),C=t(16),j=t.n(C),k=t(44),y=t.n(k),P=t(45),w=t(15);var L=function(){var e=Object(n.useState)(null),a=Object(B.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){y.a.get("https://api.github.com/users/brandonpessman/repos").then((function(e){console.log(e.data),l(e.data)}))}),[]),r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement("h1",{style:{fontSize:"28px",fontWeight:"600",marginBottom:"25px"}},"Projects"),r.a.createElement(v.a,null,null!=t?t.map((function(e){return e.fork?"":r.a.createElement(h.a,{key:e.id,sm:4},r.a.createElement("a",{href:e.html_url,style:{color:"inherit",textDecoration:"none"},target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:j.a.projectContainer},r.a.createElement("h1",{className:j.a.header1},e.name),r.a.createElement("h2",{className:j.a.header2},e.description),r.a.createElement("div",{className:j.a.languages},r.a.createElement("span",{style:{margin:"0 5px",fontSize:"13px",fontWeight:"600",color:"#FF6A00"}},e.stargazers_count," ",r.a.createElement(w.d,{icon:w.c})),r.a.createElement("span",{style:{margin:"0 5px",fontSize:"13px",fontWeight:"600"}},e.forks_count," ",r.a.createElement(w.d,{icon:w.b})),r.a.createElement("span",{style:{margin:"0 5px",fontSize:"13px",fontWeight:"600"}},e.watchers_count," ",r.a.createElement(w.d,{icon:w.a})),r.a.createElement("span",{style:{margin:"0 5px",fontSize:"13px",fontWeight:"600"}},r.a.createElement(P.a,{className:j.a.languageBadge,variant:"primary",style:{color:"white !important"}},e.language))))))})):"")))};var z=function(){return r.a.createElement("div",null)};var F=function(){return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(L,null),r.a.createElement(z,null))};var H=function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/"},r.a.createElement(F,null)))))};t(81);c.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.11fb7615.chunk.js.map