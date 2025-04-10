"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7724],{11971:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return d},default:function(){return f}});var l=n(64717),r=n(92379);function a(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"Hvis forrige månded var stille, så var denne stormen. En rekke nye kompenter, bugfixer i eksisternede, opprydding og forvaltning."),"\n",r.createElement(t.h2,null,"🌱 Releaser"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"✨ ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1558"},"Datepicker")," fikk en kraftig ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1443"},"robustifisering"),", ingen breaking changes, bare en sterk oppfordring om å oppdatere!"),"\n",r.createElement(t.li,null,"✨ ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1537"},"Ny validator"),", med en ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1536"},"opprydding")," av pakken"),"\n",r.createElement(t.li,null,"🔥 Ny komponent ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1534"},"ContentToggle"),", animasjonskomponent som ivaretar et av våre animasjonsprinsipper for små bevegelser, se i ",r.createElement(t.a,{href:"/preview/4597-code-example-block/komponenter/contenttoggle"},"portalen")),"\n",r.createElement(t.li,null,"🔥 Ny pakke med ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1528"},"konstanter"),", se i ",r.createElement(t.a,{href:"/preview/4597-code-example-block/komponenter/constants"},"portalen")),"\n",r.createElement(t.li,null,"🔥 Ny komponent med ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1524"},"ToggleSlider"),", se i ",r.createElement(t.a,{href:"/preview/4597-code-example-block/komponenter/toggleswitch"},"portalen")),"\n",r.createElement(t.li,null,"🔥 Ny komponent ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1522"},"Check og crosslist"),", se i ",r.createElement(t.a,{href:"/preview/4597-code-example-block/komponenter/list"},"portalen")),"\n",r.createElement(t.li,null,"🔥 Ny pakke ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1517"},"Feedback"),", se i ",r.createElement(t.a,{href:"/preview/4597-code-example-block/komponenter/feedback"},"portalen")),"\n",r.createElement(t.li,null,"💅 Mobil forbedring på ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1465"},"knappene")),"\n"),"\n",r.createElement(t.h2,null,"📰 Oppdateringer"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Vi kan ønske @Fridaks velkommen som ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1418"},"bidragsyter"),"!"),"\n",r.createElement(t.li,null,"Vi har skrudd på CodeQL for å analysere koden vår for ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1414"},"sikkerhetshull")),"\n",r.createElement(t.li,null,"Vi har lagt til ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1431"},"CodeSandbox")," integrasjon, som tilgjengeliggjør oppdatert versjon av pakkene våre i en sandbox på hver PR. Hvis PRen er knyttet til en bugrapport som inneholder end CodeSandbox for å reprodusere feilen, så vil den automatisk forkes og bygges med oppdatert versjon i PRen."),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},i=n(75482),c=n(96036),s=n(59001),m=n(65458),p=n(79379);const d=e=>{let{pageContext:t}=e;return r.createElement(c.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:o}=n.page,{types:c}=l;return r.createElement(p.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(m.M1,Object.assign({},o,{versions:l.versions})),t.pathname.includes("komponenter")&&r.createElement(s.c,{variant:"komponent",component:o.title}),r.createElement(m.w5,o),a,c&&r.createElement(i.l,{types:c}))};function f(e){return r.createElement(u,e,r.createElement(o,e))}},75482:function(e,t,n){n.d(t,{l:function(){return f}});var l=n(96845),r=n(41162),a=n(74797),o=n(92379),i=n(25329);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},p=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,o=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},d=e=>{const t=e.target,n=t.parentElement;p(t,n)},u=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&p(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var l},f=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(s):[],c=(e=>{var t,n,l,r,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&o.createElement(i.dn,{className:"jkl-portal-code-block"},c),l.length>0&&o.createElement(u,{props:l}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:a})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return i}});var l=n(48467),r=n(58990),a=n(92379),o=n(25329);const i=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(r.U,null),a.createElement(o.nv,null,c[t].text)),a.createElement(l.r,{href:c[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},c={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,t,n){n.d(t,{M:function(){return c}});var l=n(80324),r=n.n(l),a=n(24157),o=n(92379),i=n(69215);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,o.useContext)(i.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||c?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},96845:function(e,t,n){n.d(t,{U:function(){return c}});var l=n(99767),r=n(651),a=n(80324),o=n.n(a);const i=["className","density","id"],c=e=>{let{className:t,density:n,id:a}=e,c=(0,l.Z)(e,i);return(0,r.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:a},c))}},41162:function(e,t,n){n.d(t,{Q:function(){return p}});var l=n(99767),r=n(651),a=n(42054),o=n(95020),i=n(80324),c=n.n(i),s=n(92379);const m=["children","title","className","startExpanded","onClick","id"],p=e=>{let{children:t,title:n,className:i,startExpanded:p=!1,onClick:d,id:u}=e,f=(0,l.Z)(e,m);const[k,g]=(0,s.useState)(p),[h]=(0,s.useState)((()=>p)),{detailsRef:b,summaryRef:v,contentRef:E,onSummaryClick:j}=(0,o.E)({onOpenChange:(e,t)=>{g(e),d&&d(t,e)},isExpanded:h});return(0,r.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},f,{className:c()("jkl-accordion-item",i),ref:b,id:u,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:v,children:[n,(0,r.jsx)(a.K,{className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},58990:function(e,t,n){n.d(t,{U:function(){return m}});var l=n(92379),r=n(55650),a=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>l.createElement(r.J,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&s(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},74797:function(e,t,n){n.d(t,{w:function(){return b}});var l=n(92379),r=n(94207),a=n(49309),o=n(36774),i=n(64081),c=n(64483),s=n(42104),m=n(98746),p=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const b=(0,l.forwardRef)(((e,t)=>{var n,p=e,{caption:b,columns:v,emptyTableText:E,rows:j,verticalAlign:y}=p,w=((e,t)=>{var n={};for(var l in e)k.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&f)for(var l of f(e))t.indexOf(l)<0&&g.call(e,l)&&(n[l]=e[l]);return n})(p,["caption","columns","emptyTableText","rows","verticalAlign"]);return l.createElement(r.i,(n=((e,t)=>{for(var n in t||(t={}))k.call(t,n)&&h(e,n,t[n]);if(f)for(var n of f(t))g.call(t,n)&&h(e,n,t[n]);return e})({fullWidth:!0},w),d(n,u({ref:t}))),b&&l.createElement(o.R,{srOnly:!0},b),l.createElement(c.s,null,l.createElement(m.S,null,v.map(((e,t)=>l.createElement(s.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===j.length&&E&&l.createElement(m.S,null,l.createElement(i.p,{colSpan:v.length},E)),j.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":v[t],verticalAlign:y},e))))))))}));b.displayName="DataTable"}}]);