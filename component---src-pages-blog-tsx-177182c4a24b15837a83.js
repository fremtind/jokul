"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[410],{479:function(e,t,a){a.d(t,{M:function(){return s}});var n=a(26372),l=a.n(n),o=a(79363),r=a(70079),i=a(56024);const s=e=>{let{className:t,children:a}=e;const{prefersReducedMotion:n}=(0,r.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return r.createElement(o.E.main,{initial:{y:n?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:n?0:-20,opacity:0},transition:{duration:n||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},a)}},80942:function(e,t,a){a.r(t),a.d(t,{Head:function(){return s}});var n=a(91251),l=a(42864),o=a(70079),r=a(16569),i=a(479);const s=()=>o.createElement(r.p,{title:"Blogg"});t.default=e=>{let{data:t}=e;const a=t.allMdx.nodes;return o.createElement(i.M,null,o.createElement("h1",{className:"jkl-title jkl-spacing-64--bottom"},"Blogg"),o.createElement("p",{className:"jkl-portal-paragraph"},"Velkommen til Jøkul — design­systemet til Fremtind."),o.createElement("h2",{className:"jkl-heading-1 jkl-spacing-40--top jkl-spacing-24--bottom"},"Alt fra bloggen"),o.createElement("ul",{className:"jkl-portal-blog__post-list"},a.map((e=>{const t=e.frontmatter.title||e.fields.path;return o.createElement("li",{key:e.fields.path,className:"jkl-portal-blog__post"},o.createElement(n.J,{component:l.Link,title:t,to:e.fields.path,description:e.frontmatter.description||e.excerpt},o.createElement(n.U,null,e.frontmatter.publishDate," av ",e.frontmatter.author)))}))))}}}]);