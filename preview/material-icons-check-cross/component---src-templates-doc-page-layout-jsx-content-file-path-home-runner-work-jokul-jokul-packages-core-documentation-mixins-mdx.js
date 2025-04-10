"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5979],{39191:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return p},Head:function(){return u},default:function(){return f}});var r=n(33156),l=n(7378);function a(e){const t=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre"},(0,r.RP)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Vi bruker Sass for å lage CSSen i Jøkul, og har etter hvert fått et større\nbibliotek med mixins og funksjoner.")),"\n",l.createElement(t.p,null,"Mange av disse hjelperne er generiske nok til å være nyttige også i egne applikasjoner. Hvis prosjektet ditt bruker Sass er det lurt å ta en nærmere titt på hva Jøkul har å tilby."),"\n",l.createElement(t.p,null,"Vi har for øvrig en guide for ",l.createElement(t.a,{href:"/preview/material-icons-check-cross/guider/sass"},"Hvordan skrive Sass i Jøkul")," som kan være en inspirasjon til hvordan dere skriver Sass i egne prosjekter."),"\n",l.createElement(t.h2,null,"Hvilke mixins finnes?"),"\n",l.createElement(t.p,null,"For en fullstendig oversikt er det best å ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/tree/main/packages/core/jkl"},"se på kildekoden"),"."),"\n",l.createElement(t.p,null,"Et utvalg av de mest brukte internt i Jøkul:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Funksjonen ",l.createElement(t.code,null,"rem()")," hjelper med å oversette et design i pixler til ",l.createElement(t.code,null,"rem"),"."),"\n",l.createElement(t.li,null,"Mixinene ",l.createElement(t.code,null,"small-screen")," og ",l.createElement(t.code,null,"from-medium-screen")," er nyttige for responsiv design."),"\n",l.createElement(t.li,null,"Det samme er ",l.createElement(t.code,null,"screen-from()"),", ",l.createElement(t.code,null,"screen-to()"),", og ",l.createElement(t.code,null,"screen-between()"),"."),"\n",l.createElement(t.li,null,"Mixen ",l.createElement(t.code,null,"motion()")," hjelper deg med å få animert ting med samme easing og timing som Jøkul."),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"light-mode-variables")," og ",l.createElement(t.code,null,"dark-mode-variables")," hjelper med å støtte begge temaene."),"\n"),"\n",l.createElement(t.h2,null,"Hvordan bruker jeg dem?"),"\n",l.createElement(t.p,null,"Alle hjelperne finnes i ",l.createElement(t.code,null,"jkl"),"-modulen i ",l.createElement(t.code,null,"@fremtind/jkl-core"),"."),"\n",l.createElement(t.p,null,"Om du har en editor med god code completion for Sass får du en oversikt over alt som er tilgjengelig etter å ha skrevet ",l.createElement(t.code,null,"jkl."),". Hvis du bruker Visual Studio Code er extensionen ",l.createElement(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=SomewhatStationery.some-sass"},"Some Sass")," anbefalt. Med den får du code suggestions for moduler og visning av SassDoc ved hover, blant annet."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-scss"},'@use "@fremtind/jkl-core/jkl";\n\n.min-custom-ting {\n    min-width: jkl.rem(280px);\n\n    @include jkl.screen-from(4096px) {\n        padding: jkl.$spacing-3xl;\n    }\n}\n')))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)};var i=n(68888),s=n(47672),c=n(52948),m=n(38776),d=n(20919);const u=e=>{let{pageContext:t}=e;return l.createElement(s.G,{title:t.title})},p=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:s}=r;return l.createElement(d.D,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(m.Ao,Object.assign({},o,{versions:r.versions})),t.pathname.includes("komponenter")&&l.createElement(c.A,{variant:"komponent",component:o.title}),l.createElement(m.f6,o),a,s&&l.createElement(i.N,{types:s}))};function f(e){return l.createElement(p,e,l.createElement(o,e))}},68888:function(e,t,n){n.d(t,{N:function(){return f}});var r=n(88635),l=n(24408),a=n(78022),o=n(7378),i=n(45371);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},f=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,l,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(l.A,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.NG,{className:"jkl-portal-code-block"},s),r.length>0&&o.createElement(p,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},52948:function(e,t,n){n.d(t,{A:function(){return i}});var r=n(77800),l=n(38316),a=n(7378),o=n(45371);const i=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(l.u,null),a.createElement(o.fz,null,s[t].text)),a.createElement(r.N,{href:s[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,t,n){n.d(t,{D:function(){return s}});var r=n(3698),l=n.n(r),a=n(94270),o=n(7378),i=n(79197);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.M),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.P.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},88635:function(e,t,n){n.d(t,{n:function(){return s}});var r=n(45271),l=n(86106),a=n(3698),o=n.n(a);const i=["className","density","id"],s=e=>{let{className:t,density:n,id:a}=e,s=(0,r.A)(e,i);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:a},s))}},24408:function(e,t,n){n.d(t,{A:function(){return d}});var r=n(45271),l=n(86106),a=n(21197),o=n(82455),i=n(3698),s=n.n(i),c=n(7378);const m=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:n,className:i,startExpanded:d=!1,onClick:u,id:p}=e,f=(0,r.A)(e,m);const[k,v]=(0,c.useState)(d),[g]=(0,c.useState)((()=>d)),{detailsRef:E,summaryRef:b,contentRef:j,onSummaryClick:h}=(0,o.$)({onOpenChange:(e,t)=>{v(e),u&&u(t,e)},isExpanded:g});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},f,{className:s()("jkl-accordion-item",i),ref:E,id:p,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:b,children:[n,(0,l.jsx)(a.l,{className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:j,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},38316:function(e,t,n){n.d(t,{u:function(){return m}});var r=n(7378),l=n(19767),a=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>r.createElement(l.I,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},78022:function(e,t,n){n.d(t,{b:function(){return E}});var r=n(7378),l=n(10494),a=n(75374),o=n(82462),i=n(60630),s=n(94624),c=n(65759),m=n(21664),d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const E=(0,r.forwardRef)(((e,t)=>{var n,d=e,{caption:E,columns:b,emptyTableText:j,rows:h,verticalAlign:y}=d,N=((e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&v.call(e,r)&&(n[r]=e[r]);return n})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(l.X,(n=((e,t)=>{for(var n in t||(t={}))k.call(t,n)&&g(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&g(e,n,t[n]);return e})({fullWidth:!0},N),u(n,p({ref:t}))),E&&r.createElement(o.r,{srOnly:!0},E),r.createElement(s.n,null,r.createElement(m.H,null,b.map(((e,t)=>r.createElement(c.A,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.B,null,0===h.length&&j&&r.createElement(m.H,null,r.createElement(i.n,{colSpan:b.length},j)),h.map(((e,t)=>r.createElement(m.H,{key:t},e.map(((e,t)=>r.createElement(i.n,{key:t,"data-th":b[t],verticalAlign:y},e))))))))}));E.displayName="DataTable"}}]);