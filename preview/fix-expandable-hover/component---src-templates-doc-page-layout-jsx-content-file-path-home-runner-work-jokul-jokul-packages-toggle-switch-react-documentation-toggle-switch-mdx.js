"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4537],{83500:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return k},Head:function(){return p},default:function(){return g}});var r=n(47160),l=n(70079),a=n(52743);function o(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a",h3:"h3"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:o,Grid:i,DoDontExample:c,PortalImage:u}=t;return o||s("ComponentExample",!0),c||s("DoDontExample",!0),i||s("Grid",!0),n||s("Ingress",!0),u||s("PortalImage",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Veksleknapper gir brukerne mulighet til å bytte mellom to tilstander uten å\nmåtte bekrefte valget. Det finnes to varianter: En ren av/på knapp og en\nslider variant der man velger mellom to tilstander.")),"\n",l.createElement(o,{title:"ToggleSwitch",component:a.u$,knobs:a._H,codeExample:a.R_}),"\n",l.createElement(t.h2,null,"Bruk"),"\n",l.createElement(t.p,null,"Bruk veksleknapper dersom du ønsker:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Å skru av/på en funksjonalitet uten bekreftelse fra brukeren. Et godt eksempel på det er når man skrur på Bluetooth på en mobiltelefon. Det aktiveres umiddelbart, altså uten bekreftelse."),"\n",l.createElement(t.li,null,"Å endre visning av innhold. For eksempel så kan man bytte mellom å vise pris per måned eller år. Avhengig av situasjonen, bør man vurdere om andre komponenter som ",l.createElement(t.a,{href:"/preview/fix-expandable-hover/komponenter/tabs"},"Tabs")," er et bedre valg."),"\n"),"\n",l.createElement(t.p,null,"Ikke bruk veksleknapper dersom brukeren skal bekrefte et valg. Et eksempel på det er når veksleknapper benyttes som en Checkbox i et skjema."),"\n",l.createElement(i,null,l.createElement(c,{type:"do",description:"Skrur av/på mørk modus umidderlbart uten bekreftelse fra brukeren",content:l.createElement(a.u$)}),l.createElement(c,{type:"dont",description:"Ønsker bekreftelse fra brukeren ved å benytte veksleknapp som CheckBox",content:l.createElement(a.zj)})),"\n",l.createElement(t.p,null,"Vi tilbyr andre komponenter som kan brukes dersom man ønsker at brukeren skal bekrefte valget sitt. Under ser du noen eksempler:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"/preview/fix-expandable-hover/komponenter/checkbox"},"Checkbox"),": I tilfeller der man ønsker å tilby flere valg og skal velge et eller flere valg."),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"/preview/fix-expandable-hover/komponenter/radiobutton"},"RadioButton"),": I tilfeller der man ønsker å tilby flere valg og skal kun velge ett valg."),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"/preview/fix-expandable-hover/komponenter/select"},"Select"),": I tilfeller der man ønsker å tilby mange valg og skal kun velge ett valg."),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"/preview/fix-expandable-hover/komponenter/autosuggest"},"Autosuggest"),": I tilfeller der man ønsker å tilby mange valg som forslag via fritekst og skal kun velge ett."),"\n"),"\n",l.createElement(t.p,null,"I tillegg bør man etterstrebe å følge disse prinsippene:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Bruk korte og beskrivende navn."),"\n",l.createElement(t.li,null,"Mellomrom bør unngås hvis mulig."),"\n"),"\n",l.createElement(t.h3,null,"Eksempler på bruk"),"\n",l.createElement(u,{src:"/assets/documentation/togle/toggle-dekninger.png",caption:"Toggle som bytter mellom å vise hva forsikringen dekker og ikke dekker."}),"\n",l.createElement(u,{src:"/assets/documentation/togle/toggle-priser.png",caption:"Toggle som bytter mellom priser vist per måned eller per år."}))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)};function s(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var c=n(72285),u=n(22756),d=n(95573),m=n(1634);const p=e=>{let{pageContext:t}=e;return l.createElement(u.p,{title:t.title})},k=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:i}=r;return l.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(d.M1,Object.assign({},o,{versions:r.versions})),l.createElement(d.w5,o),a,i&&l.createElement(c.l,{types:i}))};function g(e){return l.createElement(k,e,l.createElement(i,e))}},56180:function(e,t,n){n.d(t,{C9:function(){return d},KM:function(){return c},kq:function(){return u},zx:function(){return s}});var r=n(41886),l=n(80532),a=n(26372),o=n.n(a),i=n(70079);const s=i.forwardRef((function(e,t){const{as:n="button",children:a,className:s,density:c,onTouchStart:u,loader:d,icon:m,iconPosition:p="left",iconLeft:k,iconRight:g,variant:v="secondary",...f}=e,b=n;const E=(0,i.useCallback)((e=>{u&&u(e);const t=e.target;if(t&&!t.disabled&&e.targetTouches.length){const n=e.targetTouches[0].clientX-t.getBoundingClientRect().x,r=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",n.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",r.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((()=>{t.classList.remove("jkl-button--pressed"),t.style.removeProperty("--jkl-touch-xcoord"),t.style.removeProperty("--jkl-touch-ycoord")}),400)}}),[u]),h=(0,l.c)(null==d?void 0:d.showLoader),y=Boolean(a)&&Boolean(null==d?void 0:d.showLoader);return i.createElement(b,Object.assign({},h,{"data-loading":y,"data-density":c,className:o()("jkl-button","jkl-button--"+v,s),disabled:"button"===n?null==d?void 0:d.showLoader:void 0,onTouchStart:E},f,{ref:t}),i.createElement("div",{className:"jkl-button__label"},k&&k,m&&"left"===p&&m,a&&i.createElement("span",{className:"jkl-button__text"},a),g&&g,m&&"right"===p&&m),a&&i.createElement(r.a,{className:"jkl-button__loader",variant:"medium",textDescription:(null==d?void 0:d.textDescription)||"Vennligst vent","aria-hidden":!(null!=d&&d.showLoader)}))}));function c(e){const t={...e,variant:"primary"};return i.createElement(s,t)}function u(e){const t={...e,variant:"secondary"};return i.createElement(s,t)}function d(e){const t={...e,variant:"tertiary"};return i.createElement(s,t)}},52743:function(e,t,n){n.d(t,{u$:function(){return m},zj:function(){return k},R_:function(){return p},_H:function(){return d}});var r=n(70079),l=n(56180),a=n(31401),o=n(3438),i=n(58675),s=n(26372),c=n.n(s);const u=(0,r.forwardRef)(((e,t)=>{let{"aria-pressed":n=!1,children:l,className:s,density:u,id:d,onChange:m,...p}=e;const k=(0,o.M)(d||"jkl-toggle-switch",{generateSuffix:!d}),[g,v]=r.useState(n);r.useEffect((()=>{v(n)}),[n]);const{onClick:f,onPointerCancel:b,onPointerDown:E,onPointerMove:h,onPointerUp:y,...j}=p,{gestureHandlers:w}=(0,i.J)({onClick:e=>{v(!g),null==m||m(e,!g),null==f||f(e)},onChange:(e,t)=>{t!==g&&(v(t),null==m||m(e,t))},onPointerCancel:b,onPointerDown:E,onPointerMove:h,onPointerUp:y});return r.createElement("button",Object.assign({className:c()("jkl-toggle-switch",s),id:k,ref:t,"aria-pressed":g,"data-density":u},j,j.disabled?{}:w),l,r.createElement("div",{"aria-hidden":!0,className:"jkl-toggle-switch-widget"},r.createElement("div",{className:"jkl-toggle-switch-widget__slider"},r.createElement("div",{className:"jkl-toggle-switch-widget__knob"}),r.createElement(a.n,{variant:"small",bold:!0,className:"jkl-toggle-switch-widget__indicator"}))))}));u.displayName="ToggleSwitch";const d={boolProps:["Deaktivert"]},m=e=>{let{boolValues:t}=e;const n=null==t?void 0:t.Deaktivert;return r.createElement(u,{disabled:n,onChange:(e,t)=>console.log("Mørk modus satt til: ",t,e)},"Mørk modus")},p=()=>'\nconst handleToggle: ToggleHandler<HTMLButtonElement> = (event, pressed) =>\n    console.log("Mørk modus satt til: ", pressed, event);\n\n<ToggleSwitch onToggle={handleToggle}>Mørk modus</ToggleSwitch>',k=()=>r.createElement("form",null,r.createElement(u,null,"Jeg samtykker"),r.createElement(l.KM,{type:"submit",className:"jkl-spacing-l--top"},"Send"))},72285:function(e,t,n){n.d(t,{l:function(){return k}});var r=n(58820),l=n(63571),a=n(87505),o=n(70079),i=n(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},u=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},m=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(u):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,l,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),r.length>0&&o.createElement(p,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(26372),l=n.n(r),a=n(49597),o=n(70079),i=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(35250),l=n(26372),a=n.n(l);const o=e=>{let{className:t,density:n,id:l,...o}=e;return(0,r.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:l,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return c}});var r=n(35250),l=n(68998),a=n(1386),o=n(26372),i=n.n(o),s=n(70079);const c=e=>{let{children:t,title:n,className:o,startExpanded:c=!1,onClick:u,id:d,...m}=e;const[p,k]=(0,s.useState)(c),[g]=(0,s.useState)((()=>c)),{detailsRef:v,summaryRef:f,contentRef:b,onSummaryClick:E}=(0,a.E)({onOpenChange:(e,t)=>{k(e),u&&u(t,e)},isExpanded:g});return(0,r.jsxs)("details",{"data-testid":"jkl-accordion-item",...m,className:i()("jkl-accordion-item",o),ref:v,id:d,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:E,ref:f,children:[n,(0,r.jsx)(l.K,{className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:b,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},31401:function(e,t,n){n.d(t,{n:function(){return a}});var r=n(70079),l=n(31787);const a=e=>r.createElement(l.J,{...e},"");a.displayName="CheckIcon"},58675:function(e,t,n){n.d(t,{J:function(){return a}});var r=n(70079);function l(e){return{x:e.clientX,y:e.clientY}}function a(e){const t=(0,r.useRef)(!1),n=(0,r.useRef)(),{onClick:a,onChange:o,onPointerCancel:i,onPointerDown:s,onPointerMove:c,onPointerUp:u}=e,d=(0,r.useCallback)((e=>{t.current||null==a||a(e),t.current=!1}),[a]),m=(0,r.useCallback)((e=>{var r,a;e.preventDefault(),null==(a=(r=e.target).setPointerCapture)||a.call(r,e.pointerId),n.current=l(e),t.current=!1,null==s||s(e)}),[s]),p=(0,r.useCallback)((e=>{if(e.preventDefault(),!n.current)return;const{x:r}=l(e),{x:a}=n.current;r-a>10&&o&&"on"!==t.current?(o(e,!0),t.current="on",n.current=l(e)):a-r>10&&o&&"off"!==t.current&&(o(e,!1),t.current="off",n.current=l(e)),null==c||c(e)}),[c,o]),k=(0,r.useCallback)((e=>{var t,r;e.preventDefault(),null==(r=(t=e.target).releasePointerCapture)||r.call(t,e.pointerId),n.current=void 0,"pointerup"===e.type?null==u||u(e):null==i||i(e)}),[u,i]);return{swipeHandled:t,gestureHandlers:{onClick:d,onPointerDown:m,onPointerMove:p,onPointerUp:k,onPointerCancel:k}}}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var r=n(70079),l=n(41699),a=n(65174),o=n(6914),i=n(82546),s=n(39126),c=n(66169),u=n(94509);const d=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:m,rows:p,verticalAlign:k,...g}=e;return r.createElement(l.i,{fullWidth:!0,...g,ref:t},n&&r.createElement(o.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(u.S,null,d.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===p.length&&m&&r.createElement(u.S,null,r.createElement(i.p,{colSpan:d.length},m)),p.map(((e,t)=>r.createElement(u.S,{key:t},e.map(((e,t)=>r.createElement(i.p,{key:t,"data-th":d[t],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);