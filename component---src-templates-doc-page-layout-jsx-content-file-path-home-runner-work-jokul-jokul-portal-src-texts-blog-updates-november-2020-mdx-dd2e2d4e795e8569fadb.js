"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7724],{38140:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return d},Head:function(){return p},default:function(){return u}});var l=n(75615),r=n(70079);function a(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"Hvis forrige månded var stille, så var denne stormen. En rekke nye kompenter, bugfixer i eksisternede, opprydding og forvaltning."),"\n",r.createElement(t.h2,null,"🌱 Releaser"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"✨ ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1558"},"Datepicker")," fikk en kraftig ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1443"},"robustifisering"),", ingen breaking changes, bare en sterk oppfordring om å oppdatere!"),"\n",r.createElement(t.li,null,"✨ ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1537"},"Ny validator"),", med en ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1536"},"opprydding")," av pakken"),"\n",r.createElement(t.li,null,"🔥 Ny komponent ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1534"},"ContentToggle"),", animasjonskomponent som ivaretar et av våre animasjonsprinsipper for små bevegelser, se i ",r.createElement(t.a,{href:"/komponenter/contenttoggle"},"portalen")),"\n",r.createElement(t.li,null,"🔥 Ny pakke med ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1528"},"konstanter"),", se i ",r.createElement(t.a,{href:"/komponenter/constants"},"portalen")),"\n",r.createElement(t.li,null,"🔥 Ny komponent med ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1524"},"ToggleSlider"),", se i ",r.createElement(t.a,{href:"/komponenter/toggleswitch"},"portalen")),"\n",r.createElement(t.li,null,"🔥 Ny komponent ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1522"},"Check og crosslist"),", se i ",r.createElement(t.a,{href:"/komponenter/list"},"portalen")),"\n",r.createElement(t.li,null,"🔥 Ny pakke ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1517"},"Feedback"),", se i ",r.createElement(t.a,{href:"/komponenter/feedback"},"portalen")),"\n",r.createElement(t.li,null,"💅 Mobil forbedring på ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1465"},"knappene")),"\n"),"\n",r.createElement(t.h2,null,"📰 Oppdateringer"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Vi kan ønske @Fridaks velkommen som ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1418"},"bidragsyter"),"!"),"\n",r.createElement(t.li,null,"Vi har skrudd på CodeQL for å analysere koden vår for ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1414"},"sikkerhetshull")),"\n",r.createElement(t.li,null,"Vi har lagt til ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1431"},"CodeSandbox")," integrasjon, som tilgjengeliggjør oppdatert versjon av pakkene våre i en sandbox på hver PR. Hvis PRen er knyttet til en bugrapport som inneholder end CodeSandbox for å reprodusere feilen, så vil den automatisk forkes og bygges med oppdatert versjon i PRen."),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},i=n(71111),c=n(16569),s=n(72892),m=n(479);const p=e=>{let{pageContext:t}=e;return r.createElement(c.p,{title:t.title})},d=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:o}=n.page,{types:c}=l;return r.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(s.M1,Object.assign({},o,{versions:l.versions})),r.createElement(s.w5,o),a,c&&r.createElement(i.l,{types:c}))};function u(e){return r.createElement(d,e,r.createElement(o,e))}},71111:function(e,t,n){n.d(t,{l:function(){return u}});var l=n(57986),r=n(80252),a=n(50601),o=n(70079);const i=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,o=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},p=e=>{const t=e.target,n=t.parentElement;m(t,n)},d=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var l},u=e=>{let{types:t}=e;return o.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},o.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),o.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(s):[],a=n.props?Object.values(n.props).filter(c):[];return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},l.length>0&&o.createElement(d,{props:l}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(d,{props:a})))}))))}},479:function(e,t,n){n.d(t,{M:function(){return c}});var l=n(26372),r=n.n(l),a=n(79363),o=n(70079),i=n(56024);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,o.useContext)(i.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||c?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},57986:function(e,t,n){n.d(t,{U:function(){return o}});var l=n(26372),r=n.n(l),a=n(70079);const o=e=>{let{className:t,density:n,...l}=e;return a.createElement("div",{"data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,...l})}},80252:function(e,t,n){n.d(t,{Q:function(){return s}});var l=n(14092),r=n(89292),a=n(26372),o=n.n(a),i=n(70079);const c=e=>{let{expanded:t=!1,className:n}=e;return i.createElement("span",{className:o()("jkl-accordion-item__arrow",n,{"jkl-accordion-item__arrow--expanded":t})},i.createElement("svg",{className:"jkl-accordion-item__arrow-down",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M11.15 8.51998L10.35 7.73998L6.54999 11.58L6.55 0.699982L5.43 0.699982L5.43 11.56L1.67 7.73998L0.869995 8.51998L6.01 13.54L11.15 8.51998Z",fill:"currentColor"})),i.createElement("svg",{className:"jkl-accordion-item__arrow-up",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M0.940002 5.71998L1.74 6.49998L5.54 2.65998V13.54H6.66V2.67998L10.42 6.49998L11.22 5.71998L6.08 0.699982L0.940002 5.71998Z",fill:"currentColor"})))},s=e=>{let{children:t,title:n,className:a,startExpanded:s=!1,onClick:m,...p}=e;const d=(0,l.M)("title"),u=(0,l.M)("content"),{0:k,1:f}=(0,i.useState)(s),[h]=(0,r.v)(k,{easing:"exit",timing:"expressive"});return i.createElement("div",{"data-testid":"jkl-accordion-item",...p,className:o()("jkl-accordion-item",a,{"jkl-accordion-item--expanded":k})},i.createElement("button",{id:d,className:"jkl-accordion-item__title",type:"button","aria-expanded":k,"aria-controls":u,onClick:e=>{const t=!k;f(t),m&&m(e,t)}},n,i.createElement(c,{expanded:k})),i.createElement("div",{id:u,ref:h,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":d,hidden:!k},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},50601:function(e,t,n){n.d(t,{w:function(){return p}});var l=n(70079),r=n(64327),a=n(1807),o=n(11348),i=n(12675),c=n(14687),s=n(61211),m=n(39666);const p=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:p,emptyTableText:d,rows:u,verticalAlign:k,...f}=e;return l.createElement(r.i,{fullWidth:!0,...f,ref:t},n&&l.createElement(o.R,{srOnly:!0},n),l.createElement(c.s,null,l.createElement(m.S,null,p.map(((e,t)=>l.createElement(s.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===u.length&&d&&l.createElement(m.S,null,l.createElement(i.p,{colSpan:p.length},d)),u.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":p[t],verticalAlign:k},e))))))))}));p.displayName="DataTable"}}]);