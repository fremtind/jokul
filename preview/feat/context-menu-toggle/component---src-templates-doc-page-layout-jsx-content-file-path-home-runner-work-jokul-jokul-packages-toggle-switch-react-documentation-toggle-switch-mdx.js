"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4537],{83500:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return g},Head:function(){return p},default:function(){return k}});var l=n(47160),r=n(70079),a=n(82928);function o(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a",h3:"h3"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:o,Grid:s,DoDontExample:c,PortalImage:d}=t;return o||i("ComponentExample",!0),c||i("DoDontExample",!0),s||i("Grid",!0),n||i("Ingress",!0),d||i("PortalImage",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Veksleknapper gir brukerne mulighet til å bytte mellom to tilstander uten å måtte bekrefte valget. Det finnes to\nvarianter: En ren av/på knapp og en slider variant der man velger mellom to tilstander.")),"\n",r.createElement(o,{title:"ToggleSwitch",component:a.u$,knobs:a._H,codeExample:a.R_}),"\n",r.createElement(o,{title:"ToggleSlider",component:a.DB,knobs:a.P5,codeExample:a.KV}),"\n",r.createElement(t.h2,null,"Bruk"),"\n",r.createElement(t.p,null,"Bruk veksleknapper dersom du ønsker:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Å skru av/på en funksjonalitet uten bekreftelse fra brukeren. Et godt eksempel på det er når man skrur på Bluetooth på en mobiltelefon. Det aktiveres umiddelbart, altså uten bekreftelse."),"\n",r.createElement(t.li,null,"Å endre visning av innhold. For eksempel så kan man bytte mellom å vise pris per måned eller år. Avhengig av situasjonen, bør man vurdere om andre komponenter som ",r.createElement(t.a,{href:"/preview/feat/context-menu-toggle/komponenter/tabs"},"Tabs")," er et bedre valg."),"\n"),"\n",r.createElement(t.p,null,"Ikke bruk veksleknapper dersom brukeren skal bekrefte et valg. Et eksempel på det er når veksleknapper benyttes som en Checkbox i et skjema."),"\n",r.createElement(s,null,r.createElement(c,{type:"do",description:"Skrur av/på mørk modus umidderlbart uten bekreftelse fra brukeren",content:r.createElement(a.u$)}),r.createElement(c,{type:"dont",description:"Ønsker bekreftelse fra brukeren ved å benytte veksleknapp som CheckBox",content:r.createElement(a.zj)})),"\n",r.createElement(t.p,null,"Vi tilbyr andre komponenter som kan brukes dersom man ønsker at brukeren skal bekrefte valget sitt. Under ser du noen eksempler:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/feat/context-menu-toggle/komponenter/checkbox"},"Checkbox"),": I tilfeller der man ønsker å tilby flere valg og skal velge et eller flere valg."),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/feat/context-menu-toggle/komponenter/radiobutton"},"RadioButton"),": I tilfeller der man ønsker å tilby flere valg og skal kun velge ett valg."),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/feat/context-menu-toggle/komponenter/select"},"Select"),": I tilfeller der man ønsker å tilby mange valg og skal kun velge ett valg."),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/feat/context-menu-toggle/komponenter/autosuggest"},"Autosuggest"),": I tilfeller der man ønsker å tilby mange valg som forslag via fritekst og skal kun velge ett."),"\n"),"\n",r.createElement(t.p,null,"I tillegg bør man etterstrebe å følge disse prinsippene:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Bruk korte og beskrivende navn."),"\n",r.createElement(t.li,null,"Mellomrom bør unngås hvis mulig."),"\n"),"\n",r.createElement(s,null,r.createElement(c,{type:"do",description:"Korte og beskrivende valg uten mellomrom",content:r.createElement(a.DB)}),r.createElement(c,{type:"dont",description:"Unødvendig lange valg med mellomrom",content:r.createElement(a.V0)})),"\n",r.createElement(t.h3,null,"Eksempler på bruk"),"\n",r.createElement(d,{src:"/assets/documentation/togle/toggle-dekninger.png",caption:"Toggle som bytter mellom å vise hva forsikringen dekker og ikke dekker."}),"\n",r.createElement(d,{src:"/assets/documentation/togle/toggle-priser.png",caption:"Toggle som bytter mellom priser vist per måned eller per år."}))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)};function i(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var c=n(72285),d=n(22756),m=n(95573),u=n(1634);const p=e=>{let{pageContext:t}=e;return r.createElement(d.p,{title:t.title})},g=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:o}=n.page,{types:s}=l;return r.createElement(u.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(m.M1,Object.assign({},o,{versions:l.versions})),r.createElement(m.w5,o),a,s&&r.createElement(c.l,{types:s}))};function k(e){return r.createElement(g,e,r.createElement(s,e))}},2977:function(e,t,n){n.d(t,{KM:function(){return u},kq:function(){return p},C9:function(){return g}});var l=n(82400),r=n(18438),a=n(41886),o=n(80532),s=n(26372),i=n.n(s),c=n(70079);const d=(0,c.forwardRef)(((e,t)=>c.createElement("button",Object.assign({},e,{ref:t}))));d.displayName="BaseButton";const m=e=>{const t=(0,c.forwardRef)(((t,n)=>{const{children:s,className:m,density:u,onClick:p,onTouchStart:g,loader:k,arrow:f,...v}=t,E=(0,c.useCallback)((e=>{g&&g(e);const t=e.target;if(t&&e.targetTouches.length){const n=e.targetTouches[0].clientX-t.getBoundingClientRect().x,l=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",n.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",l.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((()=>t.classList.remove("jkl-button--pressed")),400)}}),[g]),b=(0,o.c)(null==k?void 0:k.showLoader);return c.createElement(d,Object.assign({},b,{"data-density":u,className:i()("jkl-button","jkl-button--"+e,m,{"jkl-button--left-arrow":"left"===f,"jkl-button--right-arrow":"right"===f}),disabled:null==k?void 0:k.showLoader,onClick:p,onTouchStart:E},v,{ref:n}),c.createElement("div",{className:"jkl-button__content"},c.createElement("div",{className:i()("jkl-button__slider",{"jkl-button__slider--show-loader":!(null==k||!k.showLoader)})},"left"===f&&c.createElement(l.Y,{className:"jkl-button__arrow",bold:!0}),c.createElement("span",{className:"jkl-button__children"},s),"right"===f&&c.createElement(r.L,{className:"jkl-button__arrow",bold:!0}),k&&c.createElement("div",{className:"jkl-button__loader"},c.createElement(a.a,{textDescription:k.textDescription,"aria-hidden":!k.showLoader})))))}));return t.displayName="BaseButton",t},u=m("primary");u.displayName="PrimaryButton";const p=m("secondary");p.displayName="SecondaryButton";const g=m("tertiary");g.displayName="TertiaryButton"},82928:function(e,t,n){n.d(t,{DB:function(){return v},V0:function(){return y},u$:function(){return b},zj:function(){return w},KV:function(){return E},P5:function(){return f},R_:function(){return h},_H:function(){return k}});var l=n(70079),r=n(2977),a=n(3438),o=n(26372),s=n.n(o),i=n(15089);const c=(e,t,n)=>{const{0:r,1:a}=(0,l.useState)(0),{0:o,1:s}=(0,l.useState)(0),c=(0,l.useCallback)((()=>{if(e.current&&e.current.parentElement){a(e.current.clientWidth);const n=t?e.current.parentElement.clientWidth-e.current.clientWidth:0;s(n)}}),[e,t].concat((0,i.Z)(n))),d=(0,l.useMemo)((()=>function(e){let t=!1;return function(){if(t)return;const n=e.apply(void 0,arguments);return t=!0,window.setTimeout((()=>{t=!1}),200),n}}(c)),[c]);return(0,l.useEffect)((()=>(c(),"undefined"!=typeof window&&window.addEventListener("resize",d),()=>{"undefined"!=typeof window&&window.removeEventListener("resize",d)})),[c,d]),{width:r,transform:"translateX("+o+"px)"}};function d(e){return{x:e.clientX,y:e.clientY}}function m(e){const t=(0,l.useRef)(!1),n=(0,l.useRef)(),{onClick:r,onChange:a,onPointerCancel:o,onPointerDown:s,onPointerMove:i,onPointerUp:c}=e,m=(0,l.useCallback)((e=>{t.current||null==r||r(e),t.current=!1}),[r]),u=(0,l.useCallback)((e=>{var l,r;e.preventDefault(),null===(l=(r=e.target).setPointerCapture)||void 0===l||l.call(r,e.pointerId),n.current=d(e),t.current=!1,null==s||s(e)}),[s]),p=(0,l.useCallback)((e=>{if(e.preventDefault(),!n.current)return;const{x:l}=d(e),{x:r}=n.current;l-r>10&&a&&"on"!==t.current?(a(e,!0),t.current="on",n.current=d(e)):r-l>10&&a&&"off"!==t.current&&(a(e,!1),t.current="off",n.current=d(e)),null==i||i(e)}),[i,a]),g=(0,l.useCallback)((e=>{var t,l;e.preventDefault(),null===(t=(l=e.target).releasePointerCapture)||void 0===t||t.call(l,e.pointerId),n.current=void 0,"pointerup"===e.type?null==c||c(e):null==o||o(e)}),[c,o]);return{swipeHandled:t,gestureHandlers:{onClick:m,onPointerDown:u,onPointerMove:p,onPointerUp:g,onPointerCancel:g}}}const u=e=>{let{children:t,labels:n,className:r="",onToggle:o,defaultValue:i,hideLegend:d=!1,density:u,...p}=e;const{0:g,1:k}=(0,l.useState)(i||n[0]),f=(0,a.M)("jkl-toggle-slider"),v=(0,a.M)("jkl-toggle-slider-legend"),E=(0,l.useRef)(null),b=g===n[1],h=c(E,b,[u]),{gestureHandlers:w}=m({onClick:e=>{const{value:t}=e.currentTarget;k(t),o(t)},onChange:(e,t)=>{k(t?n[1]:n[0]),o(t?n[1]:n[0])}}),{onClick:y,...j}=w;return l.createElement("fieldset",Object.assign({},p,{className:s()("jkl-toggle-slider",r),"aria-labelledby":v,"data-testid":"jkl-toggle-slider","data-density":u}),l.createElement("div",{id:v,className:s()("jkl-toggle-slider__legend",{"jkl-toggle-slider__legend--sr-only":d})},t),l.createElement("div",Object.assign({className:"jkl-toggle-slider__inputs"},j),n.map((e=>l.createElement(l.Fragment,{key:e},l.createElement("input",{className:"jkl-toggle-slider__input",type:"radio",value:e,checked:e===g,name:f,id:e+"-"+f,onClick:y,onChange:()=>{}}),l.createElement("label",{className:s()("jkl-toggle-slider__label",{"jkl-toggle-slider__label--selected":e===g}),ref:e===g?E:void 0,htmlFor:e+"-"+f},e)))),l.createElement("span",{className:"jkl-toggle-slider__pill",style:h,"aria-hidden":!0})))};var p=n(11939);const g=(0,l.forwardRef)(((e,t)=>{let{"aria-pressed":n=!1,children:r,className:o,density:i,id:c,onChange:d,...u}=e;const g=(0,a.M)(c||"jkl-toggle-switch",{generateSuffix:!c}),[k,f]=l.useState(n),{onClick:v,onPointerCancel:E,onPointerDown:b,onPointerMove:h,onPointerUp:w,...y}=u,{gestureHandlers:j}=m({onClick:e=>{f(!k),null==d||d(e,!k),null==v||v(e)},onChange:(e,t)=>{t!==k&&(f(t),null==d||d(e,t))},onPointerCancel:E,onPointerDown:b,onPointerMove:h,onPointerUp:w});return l.createElement("button",Object.assign({className:s()("jkl-toggle-switch",o),id:g,ref:t,"aria-pressed":k,"data-density":i},y,j),r,l.createElement("div",{"aria-hidden":!0,className:"jkl-toggle-switch-widget"},l.createElement("div",{className:"jkl-toggle-switch-widget__slider"},l.createElement("div",{className:"jkl-toggle-switch-widget__knob"}),l.createElement(p.n,{variant:"small",bold:!0,className:"jkl-toggle-switch-widget__indicator"}))))}));g.displayName="ToggleSwitch";const k={boolProps:["Deaktivert","Med hjelpetekst"]},f={},v=e=>{let{displayValues:t}=e;const{0:n,1:r}=(0,l.useState)("måned");return l.createElement("section",{style:{width:"100%"}},l.createElement(u,{defaultValue:"måned",labels:["måned","år"],onToggle:r,density:null==t?void 0:t.density},"Pris per"),l.createElement("p",{className:"jkl-spacing-l--top jkl-bold"},"år"===n?"1 200 kr/år":"100 kr/mnd"))},E=()=>'\nconst [value, setValue] = useState("måned");\nreturn (\n    <section style={{ width: "100%" }}>\n        <ToggleSlider\n            defaultValue="måned"\n            labels={["måned", "år"]}\n            onToggle={setValue}\n        >\n            Pris per\n        </ToggleSlider>\n        <p className="jkl-spacing-l--top jkl-bold">{value === "år" ? "1 200 kr/år" : "100 kr/mnd"}</p>\n    </section>\n);\n',b=()=>l.createElement(g,{onChange:(e,t)=>console.log("Mørk modus satt til: ",t,e)},"Mørk modus"),h=()=>'\nconst handleToggle: ToggleHandler<HTMLButtonElement> = (event, pressed) =>\n    console.log("Mørk modus satt til: ", pressed, event);\n\n<ToggleSwitch onToggle={handleToggle}>Mørk modus</ToggleSwitch>',w=()=>l.createElement("form",null,l.createElement(g,null,"Jeg samtykker"),l.createElement(r.KM,{type:"submit",className:"jkl-spacing-l--top"},"Send")),y=()=>l.createElement(u,{defaultValue:"Pris per måned",labels:["Pris per måned","Pris per år"],onToggle:console.log},"Vis pris per")},72285:function(e,t,n){n.d(t,{l:function(){return p}});var l=n(78217),r=n(41994),a=n(87505),o=n(70079);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),i=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,o=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},m=e=>{const t=e.target,n=t.parentElement;d(t,n)},u=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},p=e=>{let{types:t}=e;return o.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},o.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),o.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(c):[],a=n.props?Object.values(n.props).filter(i):[];return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},l.length>0&&o.createElement(u,{props:l}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return i}});var l=n(26372),r=n.n(l),a=n(49597),o=n(70079),s=n(34044);const i=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,o.useContext)(s.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||i?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return o}});var l=n(26372),r=n.n(l),a=n(70079);const o=e=>{let{className:t,density:n,...l}=e;return a.createElement("div",{"data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,...l})}},41994:function(e,t,n){n.d(t,{Q:function(){return c}});var l=n(53484),r=n(3438),a=n(84490),o=n(26372),s=n.n(o),i=n(70079);const c=e=>{let{children:t,title:n,className:o,startExpanded:c=!1,onClick:d,...m}=e;const u=(0,r.M)("title"),p=(0,r.M)("content"),{0:g,1:k}=(0,i.useState)(c),[f]=(0,a.v)(g,{easing:"exit",timing:"expressive"});return i.createElement("div",{"data-testid":"jkl-accordion-item",...m,className:s()("jkl-accordion-item",o,{"jkl-accordion-item--expanded":g})},i.createElement("button",{id:u,className:"jkl-accordion-item__title",type:"button","aria-expanded":g,"aria-controls":p,onClick:e=>{const t=!g;k(t),d&&d(e,t)}},n,i.createElement(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!g,bold:g})),i.createElement("div",{id:p,ref:f,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":u,hidden:!g},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},11939:function(e,t,n){n.d(t,{n:function(){return s}});var l=n(3938),r=n(70079);const a=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M8.013 17L20 5l1 1L8.013 19 3 14.002 4 13l4.013 4z",fill:"currentColor"})),o=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M8.5 16L19.492 5 21 6.5 8.5 19 3 13.5 4.5 12l4 4z",fill:"currentColor"})),s=(0,l.d)({bold:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M6.512 14L16 4.5l1 1L6.512 16 2.5 12l1-1 3.012 3z",fill:"currentColor"})),medium:o,inherit:o},regular:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M6.44 14.594L16.28 5l.721.703L6.44 16 2 11.67l.721-.703 3.72 3.627z",fill:"currentColor"})),medium:a,inherit:a}});s.displayName="CheckIcon"},87505:function(e,t,n){n.d(t,{w:function(){return m}});var l=n(70079),r=n(41699),a=n(65174),o=n(6914),s=n(82546),i=n(39126),c=n(66169),d=n(94509);const m=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:u,rows:p,verticalAlign:g,...k}=e;return l.createElement(r.i,{fullWidth:!0,...k,ref:t},n&&l.createElement(o.R,{srOnly:!0},n),l.createElement(i.s,null,l.createElement(d.S,null,m.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&u&&l.createElement(d.S,null,l.createElement(s.p,{colSpan:m.length},u)),p.map(((e,t)=>l.createElement(d.S,{key:t},e.map(((e,t)=>l.createElement(s.p,{key:t,"data-th":m[t],verticalAlign:g},e))))))))}));m.displayName="DataTable"}}]);