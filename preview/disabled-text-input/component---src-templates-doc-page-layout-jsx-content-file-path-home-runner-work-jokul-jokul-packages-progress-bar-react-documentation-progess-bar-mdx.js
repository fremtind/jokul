"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[6010],{52481:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return P},Head:function(){return O},default:function(){return C}});var a=n(64717),r=n(92379),l=n(94726),o=n(96697),i=n(82764),s=n(62871);const c={},d=()=>{const{0:e,1:t}=(0,r.useState)(50);return r.createElement("div",{style:{width:"100%",minWidth:"240px"}},r.createElement(s.k,{"aria-valuenow":e}),r.createElement("div",{className:"jkl-spacing-l--top",style:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"}},r.createElement(l.h,{onClick:()=>t(e-10<0?0:e-10)},r.createElement(o.w,null)),r.createElement("input",{type:"range",min:"0",max:"100",value:e,onChange:e=>t(parseInt(e.target.value,10))}),r.createElement(l.h,{onClick:()=>t(e+10>100?100:e+10)},r.createElement(i.X,null))))},m=()=>"\n<ProgressBar aria-valuenow={50} />\n";var u=n(9378),p=n(99767);const f=["className","from","isPaused"],v=e=>{let{className:t,from:n,isPaused:a}=e,l=(0,p.Z)(e,f);const{0:o,1:i}=(0,r.useState)(Math.floor(n/1e3));return(0,r.useEffect)((()=>{o<=0||setTimeout((()=>{a||i((e=>e-1))}),1e3)}),[a,n,o,i]),r.createElement("div",Object.assign({className:"jkl-countdown "+(null!=t?t:""),role:"timer","data-testid":"jkl-countdown"},l),r.createElement("span",{className:"jkl-countdown__tracker",role:"presentation",style:{"--duration":n+"ms","--play-state":a?"paused":"running"},"data-testid":"jkl-countdown__tracker"}),r.createElement("span",{className:"jkl-sr-only"},o))},k={},b=()=>{const{0:e,1:t}=(0,r.useState)(!0),{0:n,1:a}=(0,r.useState)(String(Date.now()));return r.createElement("div",{style:{width:"100%",minWidth:"240px"}},r.createElement(v,{key:n,from:5e3,isPaused:e}),r.createElement("div",{className:"jkl-spacing-l--top",style:{display:"flex",flexDirection:"row",gap:"1rem"}},r.createElement(u.KM,{onClick:()=>t(!e)},e?"Start":"Pause"),r.createElement(u.C9,{onClick:()=>{t(!0),a(String(Date.now()))}},"Reset")))},g=()=>"\n<Countdown from={5000} isPaused={isPaused} />\n";function E(e){const t=Object.assign({p:"p",h2:"h2",a:"a",ul:"ul",li:"li"},(0,a.ah)(),e.components),{Ingress:n,ComponentExample:l}=t;return l||j("ComponentExample",!0),n||j("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Fremdriftsindikator kan brukes for å vise brukeren hvor langt man er kommet\ni en lengre operasjon.")),"\n",r.createElement(l,{component:d,knobs:c,codeExample:m}),"\n",r.createElement(t.h2,null,"Når bruker vi ProgressBar?"),"\n",r.createElement(t.p,null,"Vi bruker en fremdriftsindikator i de tilfellene hvor vi ville brukt en ",r.createElement(t.a,{href:"/preview/disabled-text-input/komponenter/loader"},"Loader"),", men hvor vi trenger å gi tilbakemelding til brukeren om hvor langt prosessen har kommet."),"\n",r.createElement(t.p,null,"For eksempel:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/disabled-text-input/komponenter/fileinput"},"Filopplasting"),", der vi forventer store filer som kan ta tid å laste opp. Filopplasteren har en hjelpefunksjon for å beregne verdien som skal vises i fremdriftsindikatoren."),"\n"),"\n",r.createElement(t.h2,null,"Nedtelling"),"\n",r.createElement(t.p,null,"Ved nedtelling brukes det en komponent som er visuelt lik, men ",r.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/timer_role"},"semantisk ulik"),". Animasjonen er også lineær, siden den er en visuell representasjon av tid."),"\n",r.createElement(l,{title:"Countdown",component:b,knobs:k,codeExample:g}))}var h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(E,e)):E(e)};function j(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var y=n(75482),w=n(96036),N=n(59001),_=n(65458),x=n(79379);const O=e=>{let{pageContext:t}=e;return r.createElement(w.p,{title:t.title})},P=e=>{let{location:t,data:n,pageContext:a,children:l}=e;const{frontmatter:o}=n.page,{types:i}=a;return r.createElement(x.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(_.M1,Object.assign({},o,{versions:a.versions})),t.pathname.includes("komponenter")&&r.createElement(N.c,{variant:"komponent",component:o.title}),r.createElement(_.w5,o),l,i&&r.createElement(y.l,{types:i}))};function C(e){return r.createElement(P,e,r.createElement(h,e))}},9378:function(e,t,n){n.d(t,{C9:function(){return p},KM:function(){return m},kq:function(){return u},zx:function(){return d}});var a=n(99767),r=n(60894),l=n(40969),o=n(80324),i=n.n(o),s=n(92379);const c=["as","children","className","density","onTouchStart","loader","icon","iconPosition","iconLeft","iconRight","variant"],d=s.forwardRef((function(e,t){const{as:n="button",children:o,className:d,density:m,onTouchStart:u,loader:p,icon:f,iconPosition:v="left",iconLeft:k,iconRight:b,variant:g="secondary"}=e,E=(0,a.Z)(e,c),h=n;const j=(0,s.useCallback)((e=>{u&&u(e);const t=e.target;if(t&&!t.disabled&&e.targetTouches.length){const n=e.targetTouches[0].clientX-t.getBoundingClientRect().x,a=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",n.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",a.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((()=>{t.classList.remove("jkl-button--pressed"),t.style.removeProperty("--jkl-touch-xcoord"),t.style.removeProperty("--jkl-touch-ycoord")}),400)}}),[u]),y=(0,l.c)(null==p?void 0:p.showLoader),w=Boolean(o)&&Boolean(null==p?void 0:p.showLoader);return s.createElement(h,Object.assign({},y,{"data-loading":w,"data-density":m,className:i()("jkl-button","jkl-button--"+g,d),disabled:"button"===n?null==p?void 0:p.showLoader:void 0,onTouchStart:j},E,{ref:t}),s.createElement("div",{className:"jkl-button__label"},k&&k,f&&"left"===v&&f,o&&s.createElement("span",{className:"jkl-button__text"},o),b&&b,f&&"right"===v&&f),o&&s.createElement(r.a,{className:"jkl-button__loader",variant:"medium",textDescription:(null==p?void 0:p.textDescription)||"Vennligst vent","aria-hidden":!(null!=p&&p.showLoader)}))}));function m(e){const t=Object.assign({},e,{variant:"primary"});return s.createElement(d,t)}function u(e){const t=Object.assign({},e,{variant:"secondary"});return s.createElement(d,t)}function p(e){const t=Object.assign({},e,{variant:"tertiary"});return s.createElement(d,t)}},94726:function(e,t,n){n.d(t,{h:function(){return s}});var a=n(99767),r=n(80324),l=n.n(r),o=n(92379);const i=["className","children","density"],s=(0,o.forwardRef)(((e,t)=>{const{className:n,children:r,density:s}=e,c=(0,a.Z)(e,i);return o.createElement("button",Object.assign({ref:t,type:"button",className:l()("jkl-icon-button",n),"data-testid":"jkl-icon-button","data-density":s},c),r)}));s.displayName="IconButton"},51060:function(e,t,n){n.d(t,{J:function(){return s}});var a=n(99767),r=n(80324),l=n.n(r),o=n(92379);const i=["bold","children","className","filled","variant"],s=o.forwardRef((function(e,t){const{bold:n,children:r,className:s,filled:c,variant:d}=e,m=(0,a.Z)(e,i);return o.createElement("span",Object.assign({"aria-hidden":!0,ref:t,className:l()("jkl-icon",s,{"jkl-icon--filled":c,"jkl-icon--bold":n,["jkl-icon--"+d]:!!d})},m),r)}))},96697:function(e,t,n){n.d(t,{w:function(){return l}});var a=n(92379),r=n(51060);const l=e=>a.createElement(r.J,e,"");l.displayName="ChevronLeftIcon"},82764:function(e,t,n){n.d(t,{X:function(){return l}});var a=n(92379),r=n(51060);const l=e=>a.createElement(r.J,e,"");l.displayName="ChevronRightIcon"},62871:function(e,t,n){n.d(t,{k:function(){return o}});var a=n(99767),r=n(92379);const l=["aria-valuenow","aria-valuemin","aria-valuemax","title","className"],o=e=>{let{"aria-valuenow":t,"aria-valuemin":n=0,"aria-valuemax":o=100,title:i="Fremdrift",className:s}=e,c=(0,a.Z)(e,l);const d=(m=t,(0===(u=o)?0:100*m/u)+"%");var m,u;return r.createElement("div",Object.assign({className:"jkl-progress-bar "+(null!=s?s:""),role:"progressbar",title:i,"aria-valuenow":t,"aria-valuemin":n,"aria-valuemax":o,"data-testid":"jkl-progress-bar"},c),r.createElement("span",{className:"jkl-progress-bar__tracker",style:{width:d},"data-testid":"jkl-progress-bar__tracker"}))}},75482:function(e,t,n){n.d(t,{l:function(){return f}});var a=n(96845),r=n(41162),l=n(74797),o=n(92379),i=n(25329);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:r}=t,l=n>0,o=a-n>r;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var a},f=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(d):[],l=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,a,r,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(l=r.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),a.length>0&&o.createElement(p,{props:a}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:l})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return i}});var a=n(48467),r=n(58990),l=n(92379),o=n(25329);const i=e=>{let{variant:t,component:n}=e;return l.createElement("section",{className:"suggestion-block"},l.createElement("div",{className:"suggestion-block__content"},l.createElement(r.U,null),l.createElement(o.nv,null,s[t].text)),l.createElement(a.r,{href:s[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,t,n){n.d(t,{M:function(){return s}});var a=n(80324),r=n.n(a),l=n(24157),o=n(92379),i=n(69215);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},96845:function(e,t,n){n.d(t,{U:function(){return s}});var a=n(99767),r=n(651),l=n(80324),o=n.n(l);const i=["className","density","id"],s=e=>{let{className:t,density:n,id:l}=e,s=(0,a.Z)(e,i);return(0,r.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:l},s))}},41162:function(e,t,n){n.d(t,{Q:function(){return m}});var a=n(99767),r=n(651),l=n(42054),o=n(95020),i=n(80324),s=n.n(i),c=n(92379);const d=["children","title","className","startExpanded","onClick","id"],m=e=>{let{children:t,title:n,className:i,startExpanded:m=!1,onClick:u,id:p}=e,f=(0,a.Z)(e,d);const[v,k]=(0,c.useState)(m),[b]=(0,c.useState)((()=>m)),{detailsRef:g,summaryRef:E,contentRef:h,onSummaryClick:j}=(0,o.E)({onOpenChange:(e,t)=>{k(e),u&&u(t,e)},isExpanded:b});return(0,r.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},f,{className:s()("jkl-accordion-item",i),ref:g,id:p,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:E,children:[n,(0,r.jsx)(l.K,{className:"jkl-accordion-item__arrow",pointingDown:!v,bold:v})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},58990:function(e,t,n){n.d(t,{U:function(){return d}});var a=n(92379),r=n(55650),l=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const d=e=>a.createElement(r.J,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e})({},e),"");d.displayName="QuestionIcon"},74797:function(e,t,n){n.d(t,{w:function(){return g}});var a=n(92379),r=n(94207),l=n(49309),o=n(36774),i=n(64081),s=n(64483),c=n(42104),d=n(98746),m=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const g=(0,a.forwardRef)(((e,t)=>{var n,m=e,{caption:g,columns:E,emptyTableText:h,rows:j,verticalAlign:y}=m,w=((e,t)=>{var n={};for(var a in e)v.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&f)for(var a of f(e))t.indexOf(a)<0&&k.call(e,a)&&(n[a]=e[a]);return n})(m,["caption","columns","emptyTableText","rows","verticalAlign"]);return a.createElement(r.i,(n=((e,t)=>{for(var n in t||(t={}))v.call(t,n)&&b(e,n,t[n]);if(f)for(var n of f(t))k.call(t,n)&&b(e,n,t[n]);return e})({fullWidth:!0},w),u(n,p({ref:t}))),g&&a.createElement(o.R,{srOnly:!0},g),a.createElement(s.s,null,a.createElement(d.S,null,E.map(((e,t)=>a.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(l.R,null,0===j.length&&h&&a.createElement(d.S,null,a.createElement(i.p,{colSpan:E.length},h)),j.map(((e,t)=>a.createElement(d.S,{key:t},e.map(((e,t)=>a.createElement(i.p,{key:t,"data-th":E[t],verticalAlign:y},e))))))))}));g.displayName="DataTable"}}]);