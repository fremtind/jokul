"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[410],{79379:function(e,t,a){a.d(t,{M:function(){return s}});var n=a(80324),l=a.n(n),r=a(24157),o=a(92379),i=a(69215);const s=e=>{let{className:t,children:a}=e;const{prefersReducedMotion:n}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(r.E.main,{initial:{y:n?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:n?0:-20,opacity:0},transition:{duration:n||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},a)}},87869:function(e,t,a){a.r(t),a.d(t,{Head:function(){return s}});var n=a(1692),l=a(95745),r=a(92379),o=a(96036),i=a(79379);const s=()=>r.createElement(o.p,{title:"Blogg"});t.default=e=>{let{data:t}=e;const a=t.allMdx.nodes;return r.createElement(i.M,null,r.createElement("h1",{className:"title mb-64"},"Blogg"),r.createElement("p",{className:"jkl-portal-paragraph"},"Velkommen til Jøkul — design­systemet til Fremtind."),r.createElement("h2",{className:"heading-1 mt-40 mb-24"},"Alt fra bloggen"),r.createElement("ul",{className:"jkl-portal-blog__post-list"},a.map((e=>{const t=e.frontmatter.title||e.fields.path;return r.createElement("li",{key:e.fields.path,className:"jkl-portal-blog__post"},r.createElement(n.J,{component:l.Link,title:t,to:e.fields.path,description:e.frontmatter.description||e.excerpt},r.createElement(n.U,null,e.frontmatter.publishDate," av"," ",e.frontmatter.author)))}))))}}}]);