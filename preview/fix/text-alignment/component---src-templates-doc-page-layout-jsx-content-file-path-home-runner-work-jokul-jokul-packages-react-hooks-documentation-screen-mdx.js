"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[8834],{13334:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return _},Head:function(){return j},default:function(){return N}});var r=n(47160),a=n(70079),i=n(60203),l=n(38301),s=n(28936);let c=function(e){return e.orientation="ORIENTATION_CHANGED",e.deviceSize="DEVICE_SIZE_CHANGED",e}({});const o=(e,t)=>{switch(t.type){case c.orientation:return{...e,...(r=t.property,{isLandscape:"isLandscape"===r,isPortrait:"isPortrait"===r})};case c.deviceSize:return{...e,...(n=t.property,{isSmallDevice:"isSmallDevice"===n,isMediumDevice:"isMediumDevice"===n,isLargeDevice:"isLargeDevice"===n,isXlDevice:"isXlDevice"===n})};default:return e}var n,r},d={isSmallDevice:"(max-width: "+(l.A.medium-1)+"px)",isMediumDevice:"(min-width: "+l.A.medium+"px) and (max-width: "+(l.A.large-1)+"px)",isLargeDevice:"(min-width: "+l.A.large+"px) and (max-width: "+(l.A.xl-1)+"px)",isXlDevice:"(min-width: "+l.A.xl+"px)",isPortrait:"(orientation: portrait)",isLandscape:"(orientation: landscape)"},u=e=>({type:"isLandscape"===e||"isPortrait"===e?c.orientation:c.deviceSize,property:e}),m=()=>{const e=(()=>{const{0:e,1:t}=(0,a.useState)(!1),{0:n,1:r}=(0,a.useReducer)(o,{isSmallDevice:!1,isMediumDevice:!1,isLargeDevice:!1,isXlDevice:!1,isLandscape:!1,isPortrait:!1});(0,a.useEffect)((()=>{t(!0),Object.entries(d).map((e=>{let[t,n]=e;return[t,(0,s.LV)(n)]})).forEach((e=>{let[t,n]=e;n&&r(u(t))}))}),[]);const i=(0,a.useCallback)((e=>t=>{requestAnimationFrame((()=>{t.matches&&r(u(e))}))}),[]);return(0,a.useEffect)((()=>{if(!e||!window.matchMedia)return;const t=[];return Object.entries(d).forEach((e=>{let[n,r]=e;const a=window.matchMedia(r),l=i(n);t.push([a,l]),(0,s.xl)(a,l)})),()=>{t.forEach((e=>{let[t,n]=e;return(0,s.h9)(t,n)}))}}),[i,e]),{...n}})();return a.createElement("p",{className:"jkl-heading-3 jkl-spacing-xl--bottom"},"Din dings har en "+(()=>{switch(!0){case e.isSmallDevice:return"liten";case e.isMediumDevice:return"medium";case e.isLargeDevice:return"stor";case e.isXlDevice:return"veldig stor";default:return""}})()+" skjerm"+(()=>{switch(!0){case e.isLandscape:return" i landskaps"+i.shy+"modus";case e.isPortrait:return" i portrett"+i.shy+"modus";default:return""}})())},p='const screen = useScreen();\n\nconst getDeviceName = () => {\n    switch (true) {\n        case screen.isSmallDevice:\n            return "liten";\n        case screen.isMediumDevice:\n            return "medium";\n        case screen.isLargeDevice:\n            return "stor";\n        case screen.isXlDevice:\n            return "veldig stor";\n        default:\n            return "";\n    }\n};\n\nconst getOrientation = () => {\n    switch (true) {\n        case screen.isLandscape:\n            return ` i landskapsmodus`;\n        case screen.isPortrait:\n            return ` i portrettmodus`;\n        default:\n            return "";\n    }\n};\n\nreturn (\n    <p className="jkl-heading-3 jkl-spacing-xl--bottom">\n        {`Din dings har en ${getDeviceName()} skjerm${getOrientation()}`}\n    </p>\n);';function v(e){const t=Object.assign({p:"p",code:"code",a:"a"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:i}=t;return i||E("ComponentExample",!0),n||E("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,"useScreen gir deg informasjon om skjermens størrelse med utgangspunkt i breakpoints fra Jøkul."),"\n",a.createElement(i,{title:"useScreen",component:m,codeExample:p}),"\n",a.createElement(t.p,null,"Bruk denne hooken når du trenger å rendre forskjellig innhold på en side ut fra dimensjonene til nettleservinduet. Du bør foretrekke en løsning i ren CSS der det er mulig. Husk også at verdiene fra ",a.createElement(t.code,null,"useScreen")," er upålitelige dersom du bruker server-side rendering."),"\n",a.createElement(t.p,null,"For å unngå å sette mange eventlyttere i nettleseren kan du vurdere å dele verdiene fra ",a.createElement(t.code,null,"useScreen")," i en ",a.createElement(t.a,{href:"https://beta.reactjs.org/learn/passing-data-deeply-with-context"},"context")," på passende nivå i applikasjonen din. Verdiene endrer seg kun når vinduet passerer breakpoints eller går fra landskaps- til portrettformat."))}var f=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(v,e)):v(e)};function E(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var g=n(72285),k=n(22756),h=n(95573),b=n(1634);const j=e=>{let{pageContext:t}=e;return a.createElement(k.p,{title:t.title})},_=e=>{let{location:t,data:n,pageContext:r,children:i}=e;const{frontmatter:l}=n.page,{types:s}=r;return a.createElement(b.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(h.M1,Object.assign({},l,{versions:r.versions})),a.createElement(h.w5,l),i,s&&a.createElement(g.l,{types:s}))};function N(e){return a.createElement(_,e,a.createElement(f,e))}},60203:function(e,t,n){n.r(t),n.d(t,{COPYRIGHT:function(){return o},DOWNWARDS_ARROW:function(){return v},LEFTWARDS_ARROW:function(){return u},NON_BREAKING_HYPHEN:function(){return i},NON_BREAKING_SPACE:function(){return r},NORTH_EAST_ARROW:function(){return d},RIGHTWARDS_ARROW:function(){return p},SOFT_HYPHEN:function(){return s},UPWARDS_ARROW:function(){return m},ZERO_WIDTH_SPACE:function(){return f},nbhy:function(){return l},nbsp:function(){return a},shy:function(){return c}});const r=" ",a=r,i="‑",l=i,s="­",c=s,o="©",d="↗",u="←",m="↑",p="→",v="↓",f="​"},72285:function(e,t,n){n.d(t,{l:function(){return v}});var r=n(78217),a=n(41994),i=n(87505),l=n(70079),s=n(54656);const c=e=>l.createElement("code",{className:"jkl-portal-inline-code"},e),o=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,i=n>0,l=r-n>a;t.classList.toggle("left-shadow",i),t.classList.toggle("right-shadow",l)},m=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,l.useRef)(null);return(0,l.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),l.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},l.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},l.createElement(i.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var r},v=e=>{let{types:t}=e;return l.createElement("section",{className:"mb-104 jkl-portal-paragraph"},l.createElement("h2",{className:"heading-1 mt-104"},"React API"),l.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),l.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(d):[],i=n.props?Object.values(n.props).filter(o):[],c=(e=>{var t,n,r,a,i,l;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(i=a.param)||void 0===i?void 0:i.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(l=e.tags)&&void 0!==l&&l.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return l.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&l.createElement(s.dn,{className:"jkl-portal-code-block"},c),r.length>0&&l.createElement(p,{props:r}),i.length>0&&l.createElement(l.Fragment,null,l.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),l.createElement(p,{props:i})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return c}});var r=n(26372),a=n.n(r),i=n(49597),l=n(70079),s=n(34044);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,l.useContext)(s.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return l.createElement(i.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||c?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return l}});var r=n(26372),a=n.n(r),i=n(70079);const l=e=>{let{className:t,density:n,...r}=e;return i.createElement("div",{"data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,...r})}},41994:function(e,t,n){n.d(t,{Q:function(){return o}});var r=n(53484),a=n(3438),i=n(84490),l=n(26372),s=n.n(l),c=n(70079);const o=e=>{let{children:t,title:n,className:l,startExpanded:o=!1,onClick:d,...u}=e;const m=(0,a.M)("title"),p=(0,a.M)("content"),{0:v,1:f}=(0,c.useState)(o),[E]=(0,i.v)(v,{easing:"exit",timing:"expressive"});return c.createElement("div",{"data-testid":"jkl-accordion-item",...u,className:s()("jkl-accordion-item",l,{"jkl-accordion-item--expanded":v})},c.createElement("button",{id:m,className:"jkl-accordion-item__title",type:"button","aria-expanded":v,"aria-controls":p,onClick:e=>{const t=!v;f(t),d&&d(e,t)}},n,c.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!v,bold:v})),c.createElement("div",{id:p,ref:E,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":m,hidden:!v},c.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return u}});var r=n(70079),a=n(41699),i=n(65174),l=n(6914),s=n(82546),c=n(39126),o=n(66169),d=n(94509);const u=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:m,rows:p,verticalAlign:v,...f}=e;return r.createElement(a.i,{fullWidth:!0,...f,ref:t},n&&r.createElement(l.R,{srOnly:!0},n),r.createElement(c.s,null,r.createElement(d.S,null,u.map(((e,t)=>r.createElement(o.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(i.R,null,0===p.length&&m&&r.createElement(d.S,null,r.createElement(s.p,{colSpan:u.length},m)),p.map(((e,t)=>r.createElement(d.S,{key:t},e.map(((e,t)=>r.createElement(s.p,{key:t,"data-th":u[t],verticalAlign:v},e))))))))}));u.displayName="DataTable"}}]);