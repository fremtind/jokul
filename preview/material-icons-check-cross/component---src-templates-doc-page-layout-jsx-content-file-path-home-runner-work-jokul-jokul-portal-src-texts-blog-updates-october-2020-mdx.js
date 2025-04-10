"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[6164],{10830:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return p},Head:function(){return u},default:function(){return f}});var r=n(33156),l=n(7378);function a(e){const t=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li"},(0,r.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"Den forrige måneden var kanskje ikke den mest spennende for Jøkul sin del.\nDet har stort sett være finpuss og bugfixer som har blitt publisert. Sånn sett ser oktober ut til å bli en mer spennede måned.\nOktober er også ",l.createElement(t.a,{href:"https://hacktoberfest.digitalocean.com/"},"hacktober"),", og siden Jøkul er open source kvalifiserer alle PRer i oktober.\nDet ligger saker og ting i issuelisten om du har lyst å bidra, du kan feks starte ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%A7%B8+good+first+issue%22"},"her"),"u\nEllers så står Dependabot på som en helt og holder dependenciene våre oppdatert."),"\n",l.createElement(t.h2,null,"🌱 Releaser"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"💥 Button har hatt en breaking change med ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1370"},"forwardRef"),".\nI praksis skal ikke det bety så mye i de aller fleste tilfeller. ",l.createElement(t.a,{href:"https://reactjs.org/docs/forwarding-refs.html"},"Les mer")),"\n"),"\n",l.createElement(t.h2,null,"📰 Oppdateringer"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Vi kan ønske @Mikaila94 velkommen som ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1335"},"bidragsyter"),"!"),"\n",l.createElement(t.li,null,"Vi har endelig fått på plass en fullverdi ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1295"},"font stack")),"\n",l.createElement(t.li,null,"@piofinn forklarer hvordan ",l.createElement(t.a,{href:"/preview/material-icons-check-cross/blog/darkmode/"},"dark mode funker")),"\n",l.createElement(t.li,null,"@Steinop gikk i dybden på ",l.createElement(t.a,{href:"/preview/material-icons-check-cross/blog/ikoner_sept2020/"},"ikoner")),"\n"),"\n",l.createElement(t.h2,null,"🔮 Kommende"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Komponent for å laste bilder i ulik størrelse for ulike dingser, med blur up for hurtigere oppleved ytelse"),"\n",l.createElement(t.li,null,"Hovedmenyen til portalen er på vei inn som komponent"),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},i=n(68888),s=n(47672),c=n(52948),m=n(38776),d=n(20919);const u=e=>{let{pageContext:t}=e;return l.createElement(s.G,{title:t.title})},p=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:s}=r;return l.createElement(d.D,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(m.Ao,Object.assign({},o,{versions:r.versions})),t.pathname.includes("komponenter")&&l.createElement(c.A,{variant:"komponent",component:o.title}),l.createElement(m.f6,o),a,s&&l.createElement(i.N,{types:s}))};function f(e){return l.createElement(p,e,l.createElement(o,e))}},68888:function(e,t,n){n.d(t,{N:function(){return f}});var r=n(88635),l=n(24408),a=n(78022),o=n(7378),i=n(45371);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},f=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,l,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(l.A,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.NG,{className:"jkl-portal-code-block"},s),r.length>0&&o.createElement(p,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},52948:function(e,t,n){n.d(t,{A:function(){return i}});var r=n(77800),l=n(38316),a=n(7378),o=n(45371);const i=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(l.u,null),a.createElement(o.fz,null,s[t].text)),a.createElement(r.N,{href:s[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,t,n){n.d(t,{D:function(){return s}});var r=n(3698),l=n.n(r),a=n(94270),o=n(7378),i=n(79197);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.M),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.P.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},88635:function(e,t,n){n.d(t,{n:function(){return s}});var r=n(45271),l=n(86106),a=n(3698),o=n.n(a);const i=["className","density","id"],s=e=>{let{className:t,density:n,id:a}=e,s=(0,r.A)(e,i);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:a},s))}},24408:function(e,t,n){n.d(t,{A:function(){return d}});var r=n(45271),l=n(86106),a=n(21197),o=n(82455),i=n(3698),s=n.n(i),c=n(7378);const m=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:n,className:i,startExpanded:d=!1,onClick:u,id:p}=e,f=(0,r.A)(e,m);const[k,b]=(0,c.useState)(d),[v]=(0,c.useState)((()=>d)),{detailsRef:g,summaryRef:h,contentRef:E,onSummaryClick:j}=(0,o.$)({onOpenChange:(e,t)=>{b(e),u&&u(t,e)},isExpanded:v});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},f,{className:s()("jkl-accordion-item",i),ref:g,id:p,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:h,children:[n,(0,l.jsx)(a.l,{className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},38316:function(e,t,n){n.d(t,{u:function(){return m}});var r=n(7378),l=n(19767),a=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>r.createElement(l.I,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},78022:function(e,t,n){n.d(t,{b:function(){return g}});var r=n(7378),l=n(10494),a=n(75374),o=n(82462),i=n(60630),s=n(94624),c=n(65759),m=n(21664),d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const g=(0,r.forwardRef)(((e,t)=>{var n,d=e,{caption:g,columns:h,emptyTableText:E,rows:j,verticalAlign:y}=d,_=((e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&b.call(e,r)&&(n[r]=e[r]);return n})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(l.X,(n=((e,t)=>{for(var n in t||(t={}))k.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))b.call(t,n)&&v(e,n,t[n]);return e})({fullWidth:!0},_),u(n,p({ref:t}))),g&&r.createElement(o.r,{srOnly:!0},g),r.createElement(s.n,null,r.createElement(m.H,null,h.map(((e,t)=>r.createElement(c.A,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.B,null,0===j.length&&E&&r.createElement(m.H,null,r.createElement(i.n,{colSpan:h.length},E)),j.map(((e,t)=>r.createElement(m.H,{key:t},e.map(((e,t)=>r.createElement(i.n,{key:t,"data-th":h[t],verticalAlign:y},e))))))))}));g.displayName="DataTable"}}]);