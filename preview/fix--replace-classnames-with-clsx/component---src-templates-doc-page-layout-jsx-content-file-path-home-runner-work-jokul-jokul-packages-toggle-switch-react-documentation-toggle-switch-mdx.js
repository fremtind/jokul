"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4537],{83500:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return k},Head:function(){return p},default:function(){return g}});var l=n(47160),r=n(70079),a=n(52743);function o(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a",h3:"h3"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:o,Grid:i,DoDontExample:c,PortalImage:u}=t;return o||s("ComponentExample",!0),c||s("DoDontExample",!0),i||s("Grid",!0),n||s("Ingress",!0),u||s("PortalImage",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Veksleknapper gir brukerne mulighet til å bytte mellom to tilstander uten å måtte bekrefte valget. Det finnes to\nvarianter: En ren av/på knapp og en slider variant der man velger mellom to tilstander.")),"\n",r.createElement(o,{title:"ToggleSwitch",component:a.u$,knobs:a._H,codeExample:a.R_}),"\n",r.createElement(t.h2,null,"Bruk"),"\n",r.createElement(t.p,null,"Bruk veksleknapper dersom du ønsker:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Å skru av/på en funksjonalitet uten bekreftelse fra brukeren. Et godt eksempel på det er når man skrur på Bluetooth på en mobiltelefon. Det aktiveres umiddelbart, altså uten bekreftelse."),"\n",r.createElement(t.li,null,"Å endre visning av innhold. For eksempel så kan man bytte mellom å vise pris per måned eller år. Avhengig av situasjonen, bør man vurdere om andre komponenter som ",r.createElement(t.a,{href:"/preview/fix--replace-classnames-with-clsx/komponenter/tabs"},"Tabs")," er et bedre valg."),"\n"),"\n",r.createElement(t.p,null,"Ikke bruk veksleknapper dersom brukeren skal bekrefte et valg. Et eksempel på det er når veksleknapper benyttes som en Checkbox i et skjema."),"\n",r.createElement(i,null,r.createElement(c,{type:"do",description:"Skrur av/på mørk modus umidderlbart uten bekreftelse fra brukeren",content:r.createElement(a.u$)}),r.createElement(c,{type:"dont",description:"Ønsker bekreftelse fra brukeren ved å benytte veksleknapp som CheckBox",content:r.createElement(a.zj)})),"\n",r.createElement(t.p,null,"Vi tilbyr andre komponenter som kan brukes dersom man ønsker at brukeren skal bekrefte valget sitt. Under ser du noen eksempler:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/fix--replace-classnames-with-clsx/komponenter/checkbox"},"Checkbox"),": I tilfeller der man ønsker å tilby flere valg og skal velge et eller flere valg."),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/fix--replace-classnames-with-clsx/komponenter/radiobutton"},"RadioButton"),": I tilfeller der man ønsker å tilby flere valg og skal kun velge ett valg."),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/fix--replace-classnames-with-clsx/komponenter/select"},"Select"),": I tilfeller der man ønsker å tilby mange valg og skal kun velge ett valg."),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/fix--replace-classnames-with-clsx/komponenter/autosuggest"},"Autosuggest"),": I tilfeller der man ønsker å tilby mange valg som forslag via fritekst og skal kun velge ett."),"\n"),"\n",r.createElement(t.p,null,"I tillegg bør man etterstrebe å følge disse prinsippene:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Bruk korte og beskrivende navn."),"\n",r.createElement(t.li,null,"Mellomrom bør unngås hvis mulig."),"\n"),"\n",r.createElement(t.h3,null,"Eksempler på bruk"),"\n",r.createElement(u,{src:"/assets/documentation/togle/toggle-dekninger.png",caption:"Toggle som bytter mellom å vise hva forsikringen dekker og ikke dekker."}),"\n",r.createElement(u,{src:"/assets/documentation/togle/toggle-priser.png",caption:"Toggle som bytter mellom priser vist per måned eller per år."}))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)};function s(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var c=n(72285),u=n(22756),m=n(95573),d=n(1634);const p=e=>{let{pageContext:t}=e;return r.createElement(u.p,{title:t.title})},k=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:o}=n.page,{types:i}=l;return r.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(m.M1,Object.assign({},o,{versions:l.versions})),r.createElement(m.w5,o),a,i&&r.createElement(c.l,{types:i}))};function g(e){return r.createElement(k,e,r.createElement(i,e))}},56180:function(e,t,n){n.d(t,{C9:function(){return u},KM:function(){return s},kq:function(){return c},zx:function(){return i}});var l=n(41886),r=n(80532),a=n(53048),o=n(70079);const i=o.forwardRef((function(e,t){const{as:n="button",children:i,className:s,density:c,onTouchStart:u,loader:m,iconLeft:d,iconRight:p,type:k=("button"===n?"button":void 0),variant:g="secondary",...v}=e,f=n,E=(0,o.useCallback)((e=>{u&&u(e);const t=e.target;if(t&&e.targetTouches.length){const n=e.targetTouches[0].clientX-t.getBoundingClientRect().x,l=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",n.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",l.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((()=>{t.classList.remove("jkl-button--pressed"),t.style.removeProperty("--jkl-touch-xcoord"),t.style.removeProperty("--jkl-touch-ycoord")}),400)}}),[u]),b=(0,r.c)(null==m?void 0:m.showLoader);return o.createElement(f,Object.assign({},b,{"data-density":c,className:(0,a.Z)("jkl-button","jkl-button--"+g,s,{"jkl-button--icon-left":d,"jkl-button--icon-right":p}),disabled:"button"===n?null==m?void 0:m.showLoader:void 0,onTouchStart:E},v,{type:k,ref:t}),o.createElement("div",{className:"jkl-button__content"},o.createElement("div",{className:(0,a.Z)("jkl-button__slider",{"jkl-button__slider--show-loader":!(null==m||!m.showLoader)})},d&&o.createElement("span",{className:"jkl-button__icon"},d),o.createElement("span",{className:"jkl-button__children"},i),p&&o.createElement("span",{className:"jkl-button__icon"},p),m&&o.createElement("div",{className:"jkl-button__loader"},o.createElement(l.a,{textDescription:m.textDescription,"aria-hidden":!m.showLoader})))))}));function s(e){const t={...e,variant:"primary"};return o.createElement(i,t)}function c(e){const t={...e,variant:"secondary"};return o.createElement(i,t)}function u(e){const t={...e,variant:"tertiary"};return o.createElement(i,t)}},52743:function(e,t,n){n.d(t,{u$:function(){return m},zj:function(){return p},R_:function(){return d},_H:function(){return u}});var l=n(70079),r=n(56180),a=n(11939),o=n(3438),i=n(58675),s=n(53048);const c=(0,l.forwardRef)(((e,t)=>{let{"aria-pressed":n=!1,children:r,className:c,density:u,id:m,onChange:d,...p}=e;const k=(0,o.M)(m||"jkl-toggle-switch",{generateSuffix:!m}),[g,v]=l.useState(n);l.useEffect((()=>{v(n)}),[n]);const{onClick:f,onPointerCancel:E,onPointerDown:b,onPointerMove:h,onPointerUp:w,...y}=p,{gestureHandlers:j}=(0,i.J)({onClick:e=>{v(!g),null==d||d(e,!g),null==f||f(e)},onChange:(e,t)=>{t!==g&&(v(t),null==d||d(e,t))},onPointerCancel:E,onPointerDown:b,onPointerMove:h,onPointerUp:w});return l.createElement("button",Object.assign({className:(0,s.Z)("jkl-toggle-switch",c),id:k,ref:t,"aria-pressed":g,"data-density":u},y,y.disabled?{}:j),r,l.createElement("div",{"aria-hidden":!0,className:"jkl-toggle-switch-widget"},l.createElement("div",{className:"jkl-toggle-switch-widget__slider"},l.createElement("div",{className:"jkl-toggle-switch-widget__knob"}),l.createElement(a.n,{variant:"small",bold:!0,className:"jkl-toggle-switch-widget__indicator"}))))}));c.displayName="ToggleSwitch";const u={boolProps:["Deaktivert"]},m=e=>{let{boolValues:t}=e;const n=null==t?void 0:t.Deaktivert;return l.createElement(c,{disabled:n,onChange:(e,t)=>console.log("Mørk modus satt til: ",t,e)},"Mørk modus")},d=()=>'\nconst handleToggle: ToggleHandler<HTMLButtonElement> = (event, pressed) =>\n    console.log("Mørk modus satt til: ", pressed, event);\n\n<ToggleSwitch onToggle={handleToggle}>Mørk modus</ToggleSwitch>',p=()=>l.createElement("form",null,l.createElement(c,null,"Jeg samtykker"),l.createElement(r.KM,{type:"submit",className:"jkl-spacing-l--top"},"Send"))},72285:function(e,t,n){n.d(t,{l:function(){return k}});var l=n(78217),r=n(41994),a=n(87505),o=n(70079),i=n(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},u=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,o=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},d=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(u):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,l,r,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),l.length>0&&o.createElement(p,{props:l}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var l=n(26372),r=n.n(l),a=n(49597),o=n(70079),i=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return a}});var l=n(53048),r=n(70079);const a=e=>{let{className:t,density:n,id:a,...o}=e;return r.createElement("section",{role:"group","data-testid":"jkl-accordion",className:(0,l.Z)("jkl-accordion",t),"data-density":n,id:a,...o})}},41994:function(e,t,n){n.d(t,{Q:function(){return i}});var l=n(53484),r=n(1386),a=n(53048),o=n(70079);const i=e=>{let{children:t,title:n,className:i,startExpanded:s=!1,onClick:c,id:u,...m}=e;const{0:d,1:p}=(0,o.useState)(s),{0:k}=(0,o.useState)((()=>s)),{detailsRef:g,summaryRef:v,contentRef:f,onSummaryClick:E}=(0,r.E)({onOpenChange:(e,t)=>{p(e),c&&c(t,e)},isExpanded:k});return o.createElement("details",{"data-testid":"jkl-accordion-item",...m,className:(0,a.Z)("jkl-accordion-item",i),ref:g,id:u},o.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:E,ref:v},n,o.createElement(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!d,bold:d})),o.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:f},o.createElement("div",{className:"jkl-accordion-item__content"},t)))}},11939:function(e,t,n){n.d(t,{n:function(){return i}});var l=n(3938),r=n(70079);const a=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M8.013 17L20 5l1 1L8.013 19 3 14.002 4 13l4.013 4z",fill:"currentColor"})),o=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M8.5 16L19.492 5 21 6.5 8.5 19 3 13.5 4.5 12l4 4z",fill:"currentColor"})),i=(0,l.d)({bold:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M6.512 14L16 4.5l1 1L6.512 16 2.5 12l1-1 3.012 3z",fill:"currentColor"})),medium:o,inherit:o},regular:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M6.44 14.594L16.28 5l.721.703L6.44 16 2 11.67l.721-.703 3.72 3.627z",fill:"currentColor"})),medium:a,inherit:a}});i.displayName="CheckIcon"},58675:function(e,t,n){n.d(t,{J:function(){return a}});var l=n(70079);function r(e){return{x:e.clientX,y:e.clientY}}function a(e){const t=(0,l.useRef)(!1),n=(0,l.useRef)(),{onClick:a,onChange:o,onPointerCancel:i,onPointerDown:s,onPointerMove:c,onPointerUp:u}=e,m=(0,l.useCallback)((e=>{t.current||null==a||a(e),t.current=!1}),[a]),d=(0,l.useCallback)((e=>{var l,a;e.preventDefault(),null==(a=(l=e.target).setPointerCapture)||a.call(l,e.pointerId),n.current=r(e),t.current=!1,null==s||s(e)}),[s]),p=(0,l.useCallback)((e=>{if(e.preventDefault(),!n.current)return;const{x:l}=r(e),{x:a}=n.current;l-a>10&&o&&"on"!==t.current?(o(e,!0),t.current="on",n.current=r(e)):a-l>10&&o&&"off"!==t.current&&(o(e,!1),t.current="off",n.current=r(e)),null==c||c(e)}),[c,o]),k=(0,l.useCallback)((e=>{var t,l;e.preventDefault(),null==(l=(t=e.target).releasePointerCapture)||l.call(t,e.pointerId),n.current=void 0,"pointerup"===e.type?null==u||u(e):null==i||i(e)}),[u,i]);return{swipeHandled:t,gestureHandlers:{onClick:m,onPointerDown:d,onPointerMove:p,onPointerUp:k,onPointerCancel:k}}}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var l=n(70079),r=n(41699),a=n(65174),o=n(6914),i=n(82546),s=n(39126),c=n(66169),u=n(94509);const m=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:d,rows:p,verticalAlign:k,...g}=e;return l.createElement(r.i,{fullWidth:!0,...g,ref:t},n&&l.createElement(o.R,{srOnly:!0},n),l.createElement(s.s,null,l.createElement(u.S,null,m.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&d&&l.createElement(u.S,null,l.createElement(i.p,{colSpan:m.length},d)),p.map(((e,t)=>l.createElement(u.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":m[t],verticalAlign:k},e))))))))}));m.displayName="DataTable"}}]);