"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1567],{39349:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return d},default:function(){return p}});var l=n(47160),r=n(70079);function a(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"Da var februar over, og det er på tide med en ny liten oppdatering fra det som har rørt seg i Jøkul. Det har vært jobbet mye med mer og bedre dokumentasjon av universell utforming, som vi forhåpentligvis veldig snart ser resulatetene av. Gatsby, som portalen bygger på, har kommet i ny majorversjon, det bør gi oss bedre ytelse under utvikling og raskere byggtid, samt en enklere håntering av bilder. Den gir også tydeligere tilbakemeldinger om ting som gjør at serverside-rendering blir trøblete. Vi har også fått ryddet vekk gamle PRer, så vi er mer ajour enn på lenge."),"\n",r.createElement(t.h2,null,"🌱 Releaser"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Card har fått en outline når det er ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1858"},"klikkbar")),"\n"),"\n",r.createElement(t.h2,null,"🐛 Bugfixer"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"ListItem tar nå imot ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1839"},"className riktig")),"\n",r.createElement(t.li,null,"Checklist ser bedre ut i ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1828"},"IE")),"\n",r.createElement(t.li,null,"TextInput tar imot ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1826"},"defaultValue")),"\n",r.createElement(t.li,null,"Datepicker ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1805"},"setter dato på blur")),"\n"),"\n",r.createElement(t.h2,null,"📰 Oppdateringer"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Oppdatert dokumentasjon av ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1829"},"animasjon")),"\n",r.createElement(t.li,null,"Universell utforming seksjonen har fått en ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1794"},"tilbakemeldings-del")),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},o=n(72285),s=n(22756),c=n(95573),m=n(1634);const d=e=>{let{pageContext:t}=e;return r.createElement(s.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:i}=n.page,{types:s}=l;return r.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(c.M1,Object.assign({},i,{versions:l.versions})),r.createElement(c.w5,i),a,s&&r.createElement(o.l,{types:s}))};function p(e){return r.createElement(u,e,r.createElement(i,e))}},72285:function(e,t,n){n.d(t,{l:function(){return f}});var l=n(58820),r=n(63571),a=n(87505),i=n(70079),o=n(54656);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,i=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},f=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,l,r,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),l.length>0&&i.createElement(p,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var l=n(26372),r=n.n(l),a=n(49597),i=n(70079),o=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return i}});var l=n(35250),r=n(26372),a=n.n(r);const i=e=>{let{className:t,density:n,id:r,...i}=e;return(0,l.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:r,...i})}},63571:function(e,t,n){n.d(t,{Q:function(){return c}});var l=n(35250),r=n(68998),a=n(1386),i=n(26372),o=n.n(i),s=n(70079);const c=e=>{let{children:t,title:n,className:i,startExpanded:c=!1,onClick:m,id:d,...u}=e;const[p,f]=(0,s.useState)(c),[g]=(0,s.useState)((()=>c)),{detailsRef:h,summaryRef:k,contentRef:v,onSummaryClick:E}=(0,a.E)({onOpenChange:(e,t)=>{f(e),m&&m(t,e)},isExpanded:g});return(0,l.jsxs)("details",{"data-testid":"jkl-accordion-item",...u,className:o()("jkl-accordion-item",i),ref:h,id:d,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:E,ref:k,children:[n,(0,l.jsx)(r.K,{className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:v,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var l=n(70079),r=n(41699),a=n(65174),i=n(6914),o=n(82546),s=n(39126),c=n(66169),m=n(94509);const d=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:u,rows:p,verticalAlign:f,...g}=e;return l.createElement(r.i,{fullWidth:!0,...g,ref:t},n&&l.createElement(i.R,{srOnly:!0},n),l.createElement(s.s,null,l.createElement(m.S,null,d.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&u&&l.createElement(m.S,null,l.createElement(o.p,{colSpan:d.length},u)),p.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(o.p,{key:t,"data-th":d[t],verticalAlign:f},e))))))))}));d.displayName="DataTable"}}]);