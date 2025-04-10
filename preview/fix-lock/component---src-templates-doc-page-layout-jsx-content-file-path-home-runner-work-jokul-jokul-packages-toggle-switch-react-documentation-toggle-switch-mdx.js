"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4537],{83500:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return g},Head:function(){return p},default:function(){return k}});var r=n(47160),l=n(70079),a=n(24799);function o(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a",h3:"h3"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:o,Grid:s,DoDontExample:i,PortalImage:u}=t;return o||c("ComponentExample",!0),i||c("DoDontExample",!0),s||c("Grid",!0),n||c("Ingress",!0),u||c("PortalImage",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Veksleknapper gir brukerne mulighet til å bytte mellom to tilstander uten å måtte bekrefte valget. Det finnes to\nvarianter: En ren av/på knapp og en slider variant der man velger mellom to tilstander.")),"\n",l.createElement(o,{title:"ToggleSwitch",component:a.u$,knobs:a._H,codeExample:a.R_}),"\n",l.createElement(o,{title:"ToggleSlider",component:a.DB,knobs:a.P5,codeExample:a.KV}),"\n",l.createElement(t.h2,null,"Bruk"),"\n",l.createElement(t.p,null,"Bruk veksleknapper dersom du ønsker:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Å skru av/på en funksjonalitet uten bekreftelse fra brukeren. Et godt eksempel på det er når man skrur på Bluetooth på en mobiltelefon. Det aktiveres umiddelbart, altså uten bekreftelse."),"\n",l.createElement(t.li,null,"Å endre visning av innhold. For eksempel så kan man bytte mellom å vise pris per måned eller år. Avhengig av situasjonen, bør man vurdere om andre komponenter som ",l.createElement(t.a,{href:"/preview/fix-lock/komponenter/tabs"},"Tabs")," er et bedre valg."),"\n"),"\n",l.createElement(t.p,null,"Ikke bruk veksleknapper dersom brukeren skal bekrefte et valg. Et eksempel på det er når veksleknapper benyttes som en Checkbox i et skjema."),"\n",l.createElement(s,null,l.createElement(i,{type:"do",description:"Skrur av/på mørk modus umidderlbart uten bekreftelse fra brukeren",content:l.createElement(a.u$)}),l.createElement(i,{type:"dont",description:"Ønsker bekreftelse fra brukeren ved å benytte veksleknapp som CheckBox",content:l.createElement(a.zj)})),"\n",l.createElement(t.p,null,"Vi tilbyr andre komponenter som kan brukes dersom man ønsker at brukeren skal bekrefte valget sitt. Under ser du noen eksempler:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"/preview/fix-lock/komponenter/checkbox"},"Checkbox"),": I tilfeller der man ønsker å tilby flere valg og skal velge et eller flere valg."),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"/preview/fix-lock/komponenter/radiobutton"},"RadioButton"),": I tilfeller der man ønsker å tilby flere valg og skal kun velge ett valg."),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"/preview/fix-lock/komponenter/select"},"Select"),": I tilfeller der man ønsker å tilby mange valg og skal kun velge ett valg."),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"/preview/fix-lock/komponenter/autosuggest"},"Autosuggest"),": I tilfeller der man ønsker å tilby mange valg som forslag via fritekst og skal kun velge ett."),"\n"),"\n",l.createElement(t.p,null,"I tillegg bør man etterstrebe å følge disse prinsippene:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Bruk korte og beskrivende navn."),"\n",l.createElement(t.li,null,"Mellomrom bør unngås hvis mulig."),"\n"),"\n",l.createElement(s,null,l.createElement(i,{type:"do",description:"Korte og beskrivende valg uten mellomrom",content:l.createElement(a.DB)}),l.createElement(i,{type:"dont",description:"Unødvendig lange valg med mellomrom",content:l.createElement(a.V0)})),"\n",l.createElement(t.h3,null,"Eksempler på bruk"),"\n",l.createElement(u,{src:"/assets/documentation/togle/toggle-dekninger.png",caption:"Toggle som bytter mellom å vise hva forsikringen dekker og ikke dekker."}),"\n",l.createElement(u,{src:"/assets/documentation/togle/toggle-priser.png",caption:"Toggle som bytter mellom priser vist per måned eller per år."}))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)};function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var i=n(72285),u=n(22756),m=n(95573),d=n(1634);const p=e=>{let{pageContext:t}=e;return l.createElement(u.p,{title:t.title})},g=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:s}=r;return l.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(m.M1,Object.assign({},o,{versions:r.versions})),l.createElement(m.w5,o),a,s&&l.createElement(i.l,{types:s}))};function k(e){return l.createElement(g,e,l.createElement(s,e))}},2977:function(e,t,n){n.d(t,{KM:function(){return u},kq:function(){return m},C9:function(){return d}});var r=n(41886),l=n(80532),a=n(26372),o=n.n(a),s=n(70079);const c=(0,s.forwardRef)(((e,t)=>s.createElement("button",Object.assign({},e,{ref:t}))));c.displayName="BaseButton";const i=e=>{const t=(0,s.forwardRef)(((t,n)=>{const{children:a,className:i,density:u,onClick:m,onTouchStart:d,loader:p,iconLeft:g,iconRight:k,...f}=t,v=(0,s.useCallback)((e=>{d&&d(e);const t=e.target;if(t&&e.targetTouches.length){const n=e.targetTouches[0].clientX-t.getBoundingClientRect().x,r=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",n.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",r.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((()=>t.classList.remove("jkl-button--pressed")),400)}}),[d]),E=(0,l.c)(null==p?void 0:p.showLoader);return s.createElement(c,Object.assign({},E,{"data-density":u,className:o()("jkl-button","jkl-button--"+e,i,{"jkl-button--icon-left":g,"jkl-button--icon-right":k}),disabled:null==p?void 0:p.showLoader,onClick:m,onTouchStart:v},f,{ref:n}),s.createElement("div",{className:"jkl-button__content"},s.createElement("div",{className:o()("jkl-button__slider",{"jkl-button__slider--show-loader":!(null==p||!p.showLoader)})},g&&s.createElement("span",{className:"jkl-button__icon"},g),s.createElement("span",{className:"jkl-button__children"},a),k&&s.createElement("span",{className:"jkl-button__icon"},k),p&&s.createElement("div",{className:"jkl-button__loader"},s.createElement(r.a,{textDescription:p.textDescription,"aria-hidden":!p.showLoader})))))}));return t.displayName="BaseButton",t},u=i("primary");u.displayName="PrimaryButton";const m=i("secondary");m.displayName="SecondaryButton";const d=i("tertiary");d.displayName="TertiaryButton"},24799:function(e,t,n){n.d(t,{DB:function(){return f},V0:function(){return y},u$:function(){return E},zj:function(){return b},KV:function(){return v},P5:function(){return k},R_:function(){return h},_H:function(){return g}});var r=n(70079),l=n(2977),a=n(3438),o=n(58675),s=n(26372),c=n.n(s),i=n(15089);const u=(e,t,n)=>{const{0:l,1:a}=(0,r.useState)(0),{0:o,1:s}=(0,r.useState)(0),c=(0,r.useCallback)((()=>{if(e.current&&e.current.parentElement){a(e.current.clientWidth);const n=t?e.current.parentElement.clientWidth-e.current.clientWidth:0;s(n)}}),[e,t].concat((0,i.Z)(n))),u=(0,r.useMemo)((()=>function(e){let t=!1;return function(){if(t)return;const n=e.apply(void 0,arguments);return t=!0,window.setTimeout((()=>{t=!1}),200),n}}(c)),[c]);return(0,r.useEffect)((()=>(c(),"undefined"!=typeof window&&window.addEventListener("resize",u),()=>{"undefined"!=typeof window&&window.removeEventListener("resize",u)})),[c,u]),{width:l,transform:"translateX("+o+"px)"}},m=e=>{let{children:t,labels:n,className:l="",onToggle:s,defaultValue:i,hideLegend:m=!1,density:d,...p}=e;const{0:g,1:k}=(0,r.useState)(i||n[0]),f=(0,a.M)("jkl-toggle-slider"),v=(0,a.M)("jkl-toggle-slider-legend"),E=(0,r.useRef)(null),h=g===n[1],b=u(E,h,[d]),{gestureHandlers:y}=(0,o.J)({onClick:e=>{const{value:t}=e.currentTarget;k(t),s(t)},onChange:(e,t)=>{k(t?n[1]:n[0]),s(t?n[1]:n[0])}}),{onClick:w,...j}=y;return r.createElement("fieldset",Object.assign({},p,{className:c()("jkl-toggle-slider",l),"aria-labelledby":v,"data-testid":"jkl-toggle-slider","data-density":d}),r.createElement("div",{id:v,className:c()("jkl-toggle-slider__legend",{"jkl-toggle-slider__legend--sr-only":m})},t),r.createElement("div",Object.assign({className:"jkl-toggle-slider__inputs"},j),n.map((e=>r.createElement(r.Fragment,{key:e},r.createElement("input",{className:"jkl-toggle-slider__input",type:"radio",value:e,checked:e===g,name:f,id:e+"-"+f,onClick:w,onChange:()=>{}}),r.createElement("label",{className:c()("jkl-toggle-slider__label",{"jkl-toggle-slider__label--selected":e===g}),ref:e===g?E:void 0,htmlFor:e+"-"+f},e)))),r.createElement("span",{className:"jkl-toggle-slider__pill",style:b,"aria-hidden":!0})))};var d=n(11939);const p=(0,r.forwardRef)(((e,t)=>{let{"aria-pressed":n=!1,children:l,className:s,density:i,id:u,onChange:m,...p}=e;const g=(0,a.M)(u||"jkl-toggle-switch",{generateSuffix:!u}),[k,f]=r.useState(n);r.useEffect((()=>{f(n)}),[n]);const{onClick:v,onPointerCancel:E,onPointerDown:h,onPointerMove:b,onPointerUp:y,...w}=p,{gestureHandlers:j}=(0,o.J)({onClick:e=>{f(!k),null==m||m(e,!k),null==v||v(e)},onChange:(e,t)=>{t!==k&&(f(t),null==m||m(e,t))},onPointerCancel:E,onPointerDown:h,onPointerMove:b,onPointerUp:y});return r.createElement("button",Object.assign({className:c()("jkl-toggle-switch",s),id:g,ref:t,"aria-pressed":k,"data-density":i},w,j),l,r.createElement("div",{"aria-hidden":!0,className:"jkl-toggle-switch-widget"},r.createElement("div",{className:"jkl-toggle-switch-widget__slider"},r.createElement("div",{className:"jkl-toggle-switch-widget__knob"}),r.createElement(d.n,{variant:"small",bold:!0,className:"jkl-toggle-switch-widget__indicator"}))))}));p.displayName="ToggleSwitch";const g={boolProps:["Deaktivert","Med hjelpetekst"]},k={},f=e=>{let{displayValues:t}=e;const{0:n,1:l}=(0,r.useState)("måned");return r.createElement("section",{style:{width:"100%"}},r.createElement(m,{defaultValue:"måned",labels:["måned","år"],onToggle:l,density:null==t?void 0:t.density},"Pris per"),r.createElement("p",{className:"jkl-spacing-l--top jkl-bold"},"år"===n?"1 200 kr/år":"100 kr/mnd"))},v=()=>'\nconst [value, setValue] = useState("måned");\nreturn (\n    <section style={{ width: "100%" }}>\n        <ToggleSlider\n            defaultValue="måned"\n            labels={["måned", "år"]}\n            onToggle={setValue}\n        >\n            Pris per\n        </ToggleSlider>\n        <p className="jkl-spacing-l--top jkl-bold">{value === "år" ? "1 200 kr/år" : "100 kr/mnd"}</p>\n    </section>\n);\n',E=()=>r.createElement(p,{onChange:(e,t)=>console.log("Mørk modus satt til: ",t,e)},"Mørk modus"),h=()=>'\nconst handleToggle: ToggleHandler<HTMLButtonElement> = (event, pressed) =>\n    console.log("Mørk modus satt til: ", pressed, event);\n\n<ToggleSwitch onToggle={handleToggle}>Mørk modus</ToggleSwitch>',b=()=>r.createElement("form",null,r.createElement(p,null,"Jeg samtykker"),r.createElement(l.KM,{type:"submit",className:"jkl-spacing-l--top"},"Send")),y=()=>r.createElement(m,{defaultValue:"Pris per måned",labels:["Pris per måned","Pris per år"],onToggle:console.log},"Vis pris per")},72285:function(e,t,n){n.d(t,{l:function(){return g}});var r=n(78217),l=n(76802),a=n(87505),o=n(70079),s=n(54656);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),i=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},u=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},d=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var r},g=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(u):[],a=n.props?Object.values(n.props).filter(i):[],c=(e=>{var t,n,r,l,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&o.createElement(s.dn,{className:"jkl-portal-code-block"},c),r.length>0&&o.createElement(p,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return c}});var r=n(26372),l=n.n(r),a=n(49597),o=n(70079),s=n(34044);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(s.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||c?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(26372),l=n.n(r),a=n(70079);const o=e=>{let{className:t,density:n,...r}=e;return a.createElement("section",{role:"group","data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,...r})}},76802:function(e,t,n){n.d(t,{Q:function(){return c}});var r=n(53484),l=n(26372),a=n.n(l),o=n(70079);const s=e=>{let{onOpenChange:t,startExpanded:n}=e;const r=(0,o.useRef)(null),l=(0,o.useRef)(null),a=(0,o.useRef)(null),s=(0,o.useRef)(null),{0:c,1:i}=(0,o.useState)(!1),{0:u,1:m}=(0,o.useState)(!1);(0,o.useEffect)((()=>{r.current&&(r.current.open=n)}),[]);const d=e=>{r.current&&l.current&&(r.current.open=e,s.current=null,i(!1),m(!1),r.current.style.overflow="",r.current.style.height="")};return{detailsRef:r,summaryRef:l,contentRef:a,onSummaryClick:e=>{e.preventDefault(),r.current&&l.current&&(r.current.style.overflow="hidden",c||!r.current.open?(e=>{r.current&&l.current&&(r.current.style.height="".concat(r.current.offsetHeight,"px"),r.current.open=!0,requestAnimationFrame((()=>{if(r.current&&l.current&&a.current){m(!0),t(!0,e);const n=r.current.offsetHeight,o=l.current.offsetHeight+a.current.offsetHeight;s.current&&s.current.cancel(),r.current.animate&&(s.current=r.current.animate({height:["".concat(n,"px"),"".concat(o,"px")]},{duration:150,easing:"ease"}),s.current.onfinish=()=>d(!0),s.current.oncancel=()=>m(!1))}})))})(e):(u||r.current.open)&&(e=>{if(r.current&&l.current){i(!0),t(!1,e);const n=r.current.offsetHeight,a=l.current.offsetHeight;s.current&&s.current.cancel(),r.current.animate&&(s.current=r.current.animate({height:["".concat(n,"px"),"".concat(a,"px")]},{duration:150,easing:"ease"}),s.current.onfinish=()=>d(!1),s.current.oncancel=()=>i(!1))}})(e))}}},c=e=>{let{children:t,title:n,className:l,startExpanded:c=!1,onClick:i,...u}=e;const{0:m,1:d}=(0,o.useState)(c),{detailsRef:p,summaryRef:g,contentRef:k,onSummaryClick:f}=s({onOpenChange:(e,t)=>{d(e),i&&i(t,e)},startExpanded:c});return o.createElement("details",{"data-testid":"jkl-accordion-item",...u,className:a()("jkl-accordion-item",l),ref:p},o.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:f,ref:g},n,o.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!m,bold:m})),o.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:k},o.createElement("div",{className:"jkl-accordion-item__content"},t)))}},11939:function(e,t,n){n.d(t,{n:function(){return s}});var r=n(3938),l=n(70079);const a=e=>l.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M8.013 17L20 5l1 1L8.013 19 3 14.002 4 13l4.013 4z",fill:"currentColor"})),o=e=>l.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M8.5 16L19.492 5 21 6.5 8.5 19 3 13.5 4.5 12l4 4z",fill:"currentColor"})),s=(0,r.d)({bold:{small:e=>l.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M6.512 14L16 4.5l1 1L6.512 16 2.5 12l1-1 3.012 3z",fill:"currentColor"})),medium:o,inherit:o},regular:{small:e=>l.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M6.44 14.594L16.28 5l.721.703L6.44 16 2 11.67l.721-.703 3.72 3.627z",fill:"currentColor"})),medium:a,inherit:a}});s.displayName="CheckIcon"},58675:function(e,t,n){n.d(t,{J:function(){return a}});var r=n(70079);function l(e){return{x:e.clientX,y:e.clientY}}function a(e){const t=(0,r.useRef)(!1),n=(0,r.useRef)(),{onClick:a,onChange:o,onPointerCancel:s,onPointerDown:c,onPointerMove:i,onPointerUp:u}=e,m=(0,r.useCallback)((e=>{t.current||null==a||a(e),t.current=!1}),[a]),d=(0,r.useCallback)((e=>{var r,a;e.preventDefault(),null==(a=(r=e.target).setPointerCapture)||a.call(r,e.pointerId),n.current=l(e),t.current=!1,null==c||c(e)}),[c]),p=(0,r.useCallback)((e=>{if(e.preventDefault(),!n.current)return;const{x:r}=l(e),{x:a}=n.current;r-a>10&&o&&"on"!==t.current?(o(e,!0),t.current="on",n.current=l(e)):a-r>10&&o&&"off"!==t.current&&(o(e,!1),t.current="off",n.current=l(e)),null==i||i(e)}),[i,o]),g=(0,r.useCallback)((e=>{var t,r;e.preventDefault(),null==(r=(t=e.target).releasePointerCapture)||r.call(t,e.pointerId),n.current=void 0,"pointerup"===e.type?null==u||u(e):null==s||s(e)}),[u,s]);return{swipeHandled:t,gestureHandlers:{onClick:m,onPointerDown:d,onPointerMove:p,onPointerUp:g,onPointerCancel:g}}}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var r=n(70079),l=n(41699),a=n(65174),o=n(6914),s=n(82546),c=n(39126),i=n(66169),u=n(94509);const m=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:d,rows:p,verticalAlign:g,...k}=e;return r.createElement(l.i,{fullWidth:!0,...k,ref:t},n&&r.createElement(o.R,{srOnly:!0},n),r.createElement(c.s,null,r.createElement(u.S,null,m.map(((e,t)=>r.createElement(i.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===p.length&&d&&r.createElement(u.S,null,r.createElement(s.p,{colSpan:m.length},d)),p.map(((e,t)=>r.createElement(u.S,{key:t},e.map(((e,t)=>r.createElement(s.p,{key:t,"data-th":m[t],verticalAlign:g},e))))))))}));m.displayName="DataTable"}}]);