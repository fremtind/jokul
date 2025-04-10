"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7369],{30155:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return g},Head:function(){return v},default:function(){return _}});var r=n(47160),a=n(70079),l=n(87505),o=n(60203);const c=["Constant","Verdi"],i=Object.entries(o).map((e=>e)),s=()=>a.createElement(l.w,{className:"jkl-constant-example__table",columns:c,rows:i});function d(e){const t=Object.assign({p:"p",h2:"h2"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:l}=t;return l||p("ComponentExample",!0),n||p("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"Vi trenger ikke finne opp hjulet på nytt i hver løsning, vi har ofte behov for mange av de samme konstantene og\ndette området i Jøkul er riktig sted å lagre de.")),"\n",a.createElement(t.h2,null,"Unicode"),"\n",a.createElement(t.p,null,"Disse eksponerer mer eller mindre nyttige støtteverdier fra unicode, som gjør det mye tydeligere hva intensjonen din er."),"\n",a.createElement(l,{title:"Unicode",component:s}))}var m=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(d,e)):d(e)};function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=n(72285),f=n(22756),E=n(95573),k=n(1634);const v=e=>{let{pageContext:t}=e;return a.createElement(f.p,{title:t.title})},g=e=>{let{location:t,data:n,pageContext:r,children:l}=e;const{frontmatter:o}=n.page,{types:c}=r;return a.createElement(k.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(E.M1,Object.assign({},o,{versions:r.versions})),a.createElement(E.w5,o),l,c&&a.createElement(u.l,{types:c}))};function _(e){return a.createElement(g,e,a.createElement(m,e))}},60203:function(e,t,n){n.r(t),n.d(t,{COPYRIGHT:function(){return s},DOWNWARDS_ARROW:function(){return f},LEFTWARDS_ARROW:function(){return m},NON_BREAKING_HYPHEN:function(){return l},NON_BREAKING_SPACE:function(){return r},NORTH_EAST_ARROW:function(){return d},RIGHTWARDS_ARROW:function(){return u},SOFT_HYPHEN:function(){return c},UPWARDS_ARROW:function(){return p},ZERO_WIDTH_SPACE:function(){return E},nbhy:function(){return o},nbsp:function(){return a},shy:function(){return i}});const r=" ",a=r,l="‑",o=l,c="­",i=c,s="©",d="↗",m="←",p="↑",u="→",f="↓",E="​"},72285:function(e,t,n){n.d(t,{l:function(){return u}});var r=n(78217),a=n(41994),l=n(87505),o=n(70079);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),i=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,o=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},m=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var r},u=e=>{let{types:t}=e;return o.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},o.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),o.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(s):[],l=n.props?Object.values(n.props).filter(i):[];return o.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},r.length>0&&o.createElement(p,{props:r}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return i}});var r=n(26372),a=n.n(r),l=n(49597),o=n(70079),c=n(34044);const i=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(c.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||i?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(26372),a=n.n(r),l=n(70079);const o=e=>{let{className:t,density:n,...r}=e;return l.createElement("div",{"data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,...r})}},41994:function(e,t,n){n.d(t,{Q:function(){return s}});var r=n(53484),a=n(3438),l=n(84490),o=n(26372),c=n.n(o),i=n(70079);const s=e=>{let{children:t,title:n,className:o,startExpanded:s=!1,onClick:d,...m}=e;const p=(0,a.M)("title"),u=(0,a.M)("content"),{0:f,1:E}=(0,i.useState)(s),[k]=(0,l.v)(f,{easing:"exit",timing:"expressive"});return i.createElement("div",{"data-testid":"jkl-accordion-item",...m,className:c()("jkl-accordion-item",o,{"jkl-accordion-item--expanded":f})},i.createElement("button",{id:p,className:"jkl-accordion-item__title",type:"button","aria-expanded":f,"aria-controls":u,onClick:e=>{const t=!f;E(t),d&&d(e,t)}},n,i.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!f,bold:f})),i.createElement("div",{id:u,ref:k,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":p,hidden:!f},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var r=n(70079),a=n(41699),l=n(65174),o=n(6914),c=n(82546),i=n(39126),s=n(66169),d=n(94509);const m=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:p,rows:u,verticalAlign:f,...E}=e;return r.createElement(a.i,{fullWidth:!0,...E,ref:t},n&&r.createElement(o.R,{srOnly:!0},n),r.createElement(i.s,null,r.createElement(d.S,null,m.map(((e,t)=>r.createElement(s.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.R,null,0===u.length&&p&&r.createElement(d.S,null,r.createElement(c.p,{colSpan:m.length},p)),u.map(((e,t)=>r.createElement(d.S,{key:t},e.map(((e,t)=>r.createElement(c.p,{key:t,"data-th":m[t],verticalAlign:f},e))))))))}));m.displayName="DataTable"}}]);