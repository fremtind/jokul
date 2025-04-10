"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1052],{17368:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return f},Head:function(){return E},default:function(){return g}});var r=n(47160),l=n(70079);function a(e){void 0===e&&(e=200);const t=(0,l.useRef)(null),{0:n,1:r}=(0,l.useState)({height:0,width:0}),a=(0,l.useMemo)((()=>function(e,t){let n=!1;return function(){if(n)return;const r=e.apply(void 0,arguments);return 0!==t&&(n=!0,window.setTimeout((()=>{n=!1}),t)),r}}((()=>{var e,n;return r({height:(null===(e=t.current)||void 0===e?void 0:e.scrollHeight)||0,width:(null===(n=t.current)||void 0===n?void 0:n.scrollWidth)||0})}),e)),[e]);return(0,l.useEffect)((()=>{var e,n;return r({height:(null===(e=t.current)||void 0===e?void 0:e.scrollHeight)||0,width:(null===(n=t.current)||void 0===n?void 0:n.scrollWidth)||0}),"undefined"!=typeof window&&window.addEventListener("resize",a),()=>{"undefined"!=typeof window&&window.removeEventListener("resize",a)}}),[a]),[t,n]}const i=()=>{const[e,t]=a(250);return l.createElement("div",{className:"example-div",ref:e},l.createElement("dl",null,l.createElement("dt",null,"Høyde"),l.createElement("dd",null,t.height),l.createElement("dt",null,"Bredde"),l.createElement("dd",null,t.width)))},o="\nconst [elementRef, dimensions] = useElementDimensions<HTMLDivElement>(250);\n\nreturn (\n    <div ref={elementRef}>\n        <dl>\n            <dt>Høyde</dt>\n            <dd>{dimensions.height}</dd>\n            <dt>Bredde</dt>\n            <dd>{dimensions.width}</dd>\n        </dl>\n    </div>\n);\n";function s(e){const t=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:a}=t;return a||d("ComponentExample",!0),n||d("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Du kan bruke useElementDimensions for å finne dimensjonene til et element på siden. Du kan også følge med på\nendringer i størrelse når brukeren endrer størrelse på nettleservinduet.")),"\n",l.createElement(a,{title:"useElementDimensions",component:i,codeExample:o}),"\n",l.createElement(t.h2,null,"Bruk"),"\n",l.createElement(t.p,null,"useElementDimensions returnerer en ",l.createElement(t.code,null,"ref")," som du kan sette på elementet du vil finne størrelsen til, sammen med et objekt med dimensjonene (",l.createElement(t.code,null,"height")," og ",l.createElement(t.code,null,"width"),") i piksler. Begge deler returneres i et array, så du kan selv gi navn til verdiene:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-tsx"},"const [myElementRef, myDimensions] = useElementDimensions<HTMLDivElement>();\n")),"\n",l.createElement(t.p,null,"Hooken lytter også etter forandringer når nettleservinduet endrer størrelse. Av ytelsesgrunner begrenser hooken hvor often størrelsen leses til én gang hver 200 millisekunder. Du kan endre hvor hyppig lesingen skal skje når du kaller hooken dersom du trenger det."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-tsx"},"const [ref, dimensions] = useElementDimensions(400);\n")),"\n",l.createElement(t.p,null,"Vær forsiktig med å sette et for lavt delay, eller lytte etter for mange størrelser på denne måten, da det kan fyres av veldig mange rerenders på kort tid ved å gjøre dette."))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(s,e)):s(e)};function d(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=n(72285),u=n(22756),p=n(95573),v=n(1634);const E=e=>{let{pageContext:t}=e;return l.createElement(u.p,{title:t.title})},f=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:i}=n.page,{types:o}=r;return l.createElement(v.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(p.M1,Object.assign({},i,{versions:r.versions})),l.createElement(p.w5,i),a,o&&l.createElement(m.l,{types:o}))};function g(e){return l.createElement(f,e,l.createElement(c,e))}},72285:function(e,t,n){n.d(t,{l:function(){return v}});var r=n(78217),l=n(41994),a=n(87505),i=n(70079),o=n(54656);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,i=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},u=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},v=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(d):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,l,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),r.length>0&&i.createElement(p,{props:r}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(26372),l=n.n(r),a=n(49597),i=n(70079),o=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return a}});var r=n(53048),l=n(70079);const a=e=>{let{className:t,density:n,id:a,...i}=e;return l.createElement("section",{role:"group","data-testid":"jkl-accordion",className:(0,r.Z)("jkl-accordion",t),"data-density":n,id:a,...i})}},41994:function(e,t,n){n.d(t,{Q:function(){return o}});var r=n(53484),l=n(1386),a=n(53048),i=n(70079);const o=e=>{let{children:t,title:n,className:o,startExpanded:s=!1,onClick:c,id:d,...m}=e;const{0:u,1:p}=(0,i.useState)(s),{0:v}=(0,i.useState)((()=>s)),{detailsRef:E,summaryRef:f,contentRef:g,onSummaryClick:k}=(0,l.E)({onOpenChange:(e,t)=>{p(e),c&&c(t,e)},isExpanded:v});return i.createElement("details",{"data-testid":"jkl-accordion-item",...m,className:(0,a.Z)("jkl-accordion-item",o),ref:E,id:d},i.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:k,ref:f},n,i.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})),i.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:g},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var r=n(70079),l=n(41699),a=n(65174),i=n(6914),o=n(82546),s=n(39126),c=n(66169),d=n(94509);const m=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:u,rows:p,verticalAlign:v,...E}=e;return r.createElement(l.i,{fullWidth:!0,...E,ref:t},n&&r.createElement(i.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(d.S,null,m.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===p.length&&u&&r.createElement(d.S,null,r.createElement(o.p,{colSpan:m.length},u)),p.map(((e,t)=>r.createElement(d.S,{key:t},e.map(((e,t)=>r.createElement(o.p,{key:t,"data-th":m[t],verticalAlign:v},e))))))))}));m.displayName="DataTable"}}]);