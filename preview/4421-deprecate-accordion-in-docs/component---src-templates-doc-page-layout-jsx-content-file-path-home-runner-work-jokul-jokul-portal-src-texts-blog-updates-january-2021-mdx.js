"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[199],{6903:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return d},Head:function(){return p},default:function(){return f}});var l=n(33156),r=n(7378);function a(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a"},(0,l.RP)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"Nytt år, nye muligheter. Så med det så justerte vi litt på oppdateringspostene, med vilje eller ei, kommer nå januar-oppdateringen etter januar er ferdig. Det går stadig ny kode ut i produksjon i ulike prosjekt som bruker Jøkul, så endelig begynner vi å se fruktene helt ute i PROD av alt arbeidet som er lagt ned i Jøkul. Det arbeides videre med universell utforming, både på komponenter og prosess nivå. Det forventes også nå som flere klienter er ute i produksjon at Jøkul kommer til å få en del nye komponenter og justetering på eksisterende ut i fra behovene til klientene i produksjon."),"\n",r.createElement(t.h2,null,"🌱 Releaser"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Arbeidet med UU går videre, blant annet med flere seksjoner fra ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1705"},"denne PR"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"ToggleSlider fikk et løft for ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1741"},"skjerlesere")),"\n",r.createElement(t.li,null,"Datepicker fikk fikset litt ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1745"},"referanse trøbbel")),"\n"),"\n"),"\n",r.createElement(t.li,null,"Select fikk forwardRef, som betyr ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1689"},"breaking change"),", i praksis er det bare å oppdatere med mindre du gjør bruker referanser inn i select-komponenten"),"\n",r.createElement(t.li,null,"NavLink kan nå også peke ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1733"},"bakover")),"\n",r.createElement(t.li,null,"ToggleSlider fikk også et ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1751"},"visuelt løft")," og tar nå litt mer plass og er lettere å bruke"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1781"},"Feedback")," er blitt skrevet om og har nå litt subtil bevegelse i seg og støtter custom tilbakemelding basert på hva brukeren svarte"),"\n",r.createElement(t.li,null,"Ny ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1807"},"mixin")," for å gjøre det enklere for klienter å ta ibruk keyboard-navigasjon-stil som Jøkul gjør"),"\n",r.createElement(t.li,null,"Button fikk løst en ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1784"},"bug"),", anbefaler ALLE å oppgradere til nyeste versjon asap"),"\n"),"\n",r.createElement(t.h2,null,"📰 Oppdateringer"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Dokumentasjon av ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1765"},"animasjon")," er på plass"),"\n",r.createElement(t.li,null,"Litt mer utfyllende tekst om ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1771/files"},"språk og tone")),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.RP)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},o=n(68888),s=n(47672),c=n(52948),m=n(38776),u=n(20919);const p=e=>{let{pageContext:t}=e;return r.createElement(s.G,{title:t.title})},d=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:i}=n.page,{types:s}=l;return r.createElement(u.D,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(m.Ao,Object.assign({},i,{versions:l.versions})),r.createElement(c.A,{variant:"komponent",component:i.title}),r.createElement(m.f6,i),a,s&&r.createElement(o.N,{types:s}))};function f(e){return r.createElement(d,e,r.createElement(i,e))}},68888:function(e,t,n){n.d(t,{N:function(){return f}});var l=n(88635),r=n(24408),a=n(78022),i=n(7378),o=n(45371);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,i=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},p=e=>{const t=e.target,n=t.parentElement;u(t,n)},d=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},f=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,l,r,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(r.A,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.NG,{className:"jkl-portal-code-block"},s),l.length>0&&i.createElement(d,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(d,{props:a})))}))))}},52948:function(e,t,n){n.d(t,{A:function(){return o}});var l=n(77800),r=n(38316),a=n(7378),i=n(45371);const o=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(r.u,null),a.createElement(i.fz,null,s[t].text)),a.createElement(l.N,{href:s[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,t,n){n.d(t,{D:function(){return s}});var l=n(3698),r=n.n(l),a=n(94270),i=n(7378),o=n(79197);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,i.useContext)(o.M),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.P.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},88635:function(e,t,n){n.d(t,{n:function(){return s}});var l=n(45271),r=n(86106),a=n(3698),i=n.n(a);const o=["className","density","id"],s=e=>{let{className:t,density:n,id:a}=e,s=(0,l.A)(e,o);return(0,r.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:i()("jkl-accordion",t),"data-density":n,id:a},s))}},24408:function(e,t,n){n.d(t,{A:function(){return u}});var l=n(45271),r=n(86106),a=n(21197),i=n(82455),o=n(3698),s=n.n(o),c=n(7378);const m=["children","title","className","startExpanded","onClick","id"],u=e=>{let{children:t,title:n,className:o,startExpanded:u=!1,onClick:p,id:d}=e,f=(0,l.A)(e,m);const[k,b]=(0,c.useState)(u),[g]=(0,c.useState)((()=>u)),{detailsRef:v,summaryRef:h,contentRef:E,onSummaryClick:j}=(0,i.$)({onOpenChange:(e,t)=>{b(e),p&&p(t,e)},isExpanded:g});return(0,r.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},f,{className:s()("jkl-accordion-item",o),ref:v,id:d,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:h,children:[n,(0,r.jsx)(a.l,{className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},38316:function(e,t,n){n.d(t,{u:function(){return m}});var l=n(7378),r=n(19767),a=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>l.createElement(r.I,((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},78022:function(e,t,n){n.d(t,{b:function(){return v}});var l=n(7378),r=n(10494),a=n(75374),i=n(82462),o=n(60630),s=n(94624),c=n(65759),m=n(21664),u=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const v=(0,l.forwardRef)(((e,t)=>{var n,u=e,{caption:v,columns:h,emptyTableText:E,rows:j,verticalAlign:y}=u,N=((e,t)=>{var n={};for(var l in e)k.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&f)for(var l of f(e))t.indexOf(l)<0&&b.call(e,l)&&(n[l]=e[l]);return n})(u,["caption","columns","emptyTableText","rows","verticalAlign"]);return l.createElement(r.X,(n=((e,t)=>{for(var n in t||(t={}))k.call(t,n)&&g(e,n,t[n]);if(f)for(var n of f(t))b.call(t,n)&&g(e,n,t[n]);return e})({fullWidth:!0},N),p(n,d({ref:t}))),v&&l.createElement(i.r,{srOnly:!0},v),l.createElement(s.n,null,l.createElement(m.H,null,h.map(((e,t)=>l.createElement(c.A,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.B,null,0===j.length&&E&&l.createElement(m.H,null,l.createElement(o.n,{colSpan:h.length},E)),j.map(((e,t)=>l.createElement(m.H,{key:t},e.map(((e,t)=>l.createElement(o.n,{key:t,"data-th":h[t],verticalAlign:y},e))))))))}));v.displayName="DataTable"}}]);