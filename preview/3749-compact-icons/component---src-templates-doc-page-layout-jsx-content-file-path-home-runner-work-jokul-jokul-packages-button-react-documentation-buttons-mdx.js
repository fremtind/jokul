"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5107],{62101:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return N},Head:function(){return L},default:function(){return x}});var l=t(47160),r=t(70079),a=t(82400),o=t(18438),i=t(2977);const s=e=>{let{boolValues:n,choiceValues:t}=e;const{0:l,1:s}=(0,r.useState)(!1),c={showLoader:l||!(null==n||!n.isLoading),textDescription:"Laster innhold"},u="uten"===(null==t?void 0:t.Ikon)||null==t?void 0:t.Ikon;return r.createElement(i.KM,{loader:l||null!=n&&n.withLoader?c:void 0,className:"jkl-spacing-l--right",onClick:()=>{console.log("Hello!"),s(!0),setTimeout((()=>{s(!1)}),2200)},iconLeft:"arrow-left"===u||"begge"===u?r.createElement(a.Y,null):null,iconRight:"arrow-right"===u||"begge"===u?r.createElement(o.L,null):null},"Lagre og send inn")},c=e=>{let{boolValues:n,choiceValues:t}=e;return"\n<PrimaryButton\n    loader={"+(null!=n&&n.withLoader?"{\n        showLoader: "+!(null==n||!n.isLoading)+',\n        textDescription: "Laster innhold"\n    }':"false")+'}\n    onClick={simulateLoading}\n    className="jkl-spacing-l--right"\n    iconLeft={'+("arrow-left"===(null==t?void 0:t.Ikon)||"begge"===(null==t?void 0:t.Ikon)?"<ArrowLeft />":null)+"}\n    iconRight={"+("arrow-right"===(null==t?void 0:t.Ikon)||"begge"===(null==t?void 0:t.Ikon)?"<ArrowRight />":null)+"}\n>\n    Lagre og send inn\n</PrimaryButton>\n"},u=e=>{let{boolValues:n,choiceValues:t}=e;const{0:l,1:s}=(0,r.useState)(!1),c={showLoader:l||!(null==n||!n.isLoading),textDescription:"Laster innhold"},u="uten"===(null==t?void 0:t.Ikon)||null==t?void 0:t.Ikon;return r.createElement(i.kq,{loader:l||null!=n&&n.withLoader?c:void 0,className:"jkl-spacing-l--right",onClick:()=>{console.log("Hello!"),s(!0),setTimeout((()=>{s(!1)}),2200)},iconLeft:"arrow-left"===u||"begge"===u?r.createElement(a.Y,null):null,iconRight:"arrow-right"===u||"begge"===u?r.createElement(o.L,null):null},"Lagre")},m=e=>{let{boolValues:n,choiceValues:t}=e;return"\n<SecondaryButton\n    loader={"+(null!=n&&n.withLoader?"{\n        showLoader: "+!(null==n||!n.isLoading)+',\n        textDescription: "Laster innhold"\n    }':"false")+'}\n    onClick={simulateLoading}\n    className="jkl-spacing-l--right"\n    iconLeft={'+("arrow-left"===(null==t?void 0:t.Ikon)||"begge"===(null==t?void 0:t.Ikon)?"<ArrowLeft />":null)+"}\n    iconRight={"+("arrow-right"===(null==t?void 0:t.Ikon)||"begge"===(null==t?void 0:t.Ikon)?"<ArrowRight />":null)+"}\n>\n    Lagre\n</SecondaryButton>\n"},d=e=>{let{boolValues:n,choiceValues:t}=e;const{0:l,1:s}=(0,r.useState)(!1),c={showLoader:l||!(null==n||!n.isLoading),textDescription:"Laster innhold"},u="uten"===(null==t?void 0:t.Ikon)||null==t?void 0:t.Ikon;return r.createElement(i.C9,{loader:l||null!=n&&n.withLoader?c:void 0,className:"jkl-spacing-l--right",onClick:()=>{console.log("Hello!"),s(!0),setTimeout((()=>{s(!1)}),2200)},iconLeft:"arrow-left"===u||"begge"===u?r.createElement(a.Y,{bold:!0}):null,iconRight:"arrow-right"===u||"begge"===u?r.createElement(o.L,{bold:!0}):null},"Avbryt")},p=e=>{let{boolValues:n,choiceValues:t}=e;return"\n<TertiaryButton\n    loader={"+(null!=n&&n.withLoader?"{\n        showLoader: "+!(null==n||!n.isLoading)+',\n        textDescription: "Laster innhold"\n    }':"false")+'}\n    onClick={simulateLoading}\n    className="jkl-spacing-l--right"\n    iconLeft={'+("arrow-left"===(null==t?void 0:t.Ikon)||"begge"===(null==t?void 0:t.Ikon)?"<ArrowLeft bold/>":null)+"}\n    iconRight={"+("arrow-right"===(null==t?void 0:t.Ikon)||"begge"===(null==t?void 0:t.Ikon)?"<ArrowRight bold/>":null)+"}\n>\n    Avbryt\n</TertiaryButton>\n"},k=()=>r.createElement("div",{className:"jkl-button-example"},r.createElement("div",null,r.createElement("a",{className:"jkl-button jkl-button--primary",href:"/komponenter/buttons#knapper-som-er-lenker"},"Send inn")),r.createElement("div",null,r.createElement("a",{className:"jkl-button jkl-button--secondary",href:"/komponenter/buttons#knapper-som-er-lenker"},"Lagre")),r.createElement("div",null,r.createElement("a",{className:"jkl-button jkl-button--tertiary",href:"/komponenter/buttons#knapper-som-er-lenker"},"Avbryt"))),g='\n<div>\n    <a\n        className="jkl-button jkl-button--primary"\n        href="/komponenter/buttons#knapper-som-er-lenker"\n    >\n        Send inn\n    </a>\n</div>\n<div>\n    <a\n        className="jkl-button jkl-button--secondary"\n        href="/komponenter/buttons#knapper-som-er-lenker"\n    >\n        Lagre\n    </a>\n</div>\n<div>\n    <a\n        className="jkl-button jkl-button--tertiary"\n        href="/komponenter/buttons#knapper-som-er-lenker"\n    >\n        Avbryt\n    </a>\n</div>\n',h={boolProps:["withLoader","isLoading"],choiceProps:[{name:"Ikon",values:["uten","arrow-left","arrow-right","begge"],defaultValue:0}]};function v(e){const n=Object.assign({p:"p",strong:"strong",h2:"h2",code:"code",a:"a"},(0,l.ah)(),e.components),{Ingress:t,ComponentExample:a,PortalImage:o}=n;return a||f("ComponentExample",!0),t||f("Ingress",!0),o||f("PortalImage",!0),r.createElement(r.Fragment,null,r.createElement(t,null,r.createElement(n.p,null,"Knapper starter en handling. Teksten på knappen forteller hva som vil skje når brukeren klikker på den.")),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Primærknapp:")," brukes til den viktigste handlingen på en side - hovedhandlingen. En side kan noen ganger ha mer enn en hovedhandling, men ikke mange."),"\n",r.createElement(a,{title:"PrimaryButton",component:s,knobs:h,codeExample:c}),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Sekundærknapp:")," brukes til handlinger som ikke er like viktige for oss eller brukeren."),"\n",r.createElement(a,{title:"SecondaryButton",component:u,knobs:h,codeExample:m}),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Tertiærknapp:")," brukes til handlinger som er mindre viktige, eller som kan gi uønskede konsekvenser."),"\n",r.createElement(a,{title:"TertiaryButton",component:d,knobs:h,codeExample:p}),"\n",r.createElement(n.h2,null,"Lastemodus"),"\n",r.createElement(n.p,null,"Hvis du skal bruke lastemodus i knappen må du sørge for at ",r.createElement(n.code,null,"@fremtind/jkl-loader/loader.min.css")," er lastet inn i klienten."),"\n",r.createElement(n.h2,null,"Knappetyper"),"\n",r.createElement(n.p,null,"De tre knappene har et hierarki. Når brukeren har flere knapper å velge mellom, skal vi kun ha én primærknapp."),"\n",r.createElement(n.h2,null,"Tekst på knapper"),"\n",r.createElement(n.p,null,"Knappetekster skal være så enkle og korte som mulig og skal oppfordre til handling. Bruk helst bare to ord:"),"\n",r.createElement(i.KM,{className:"jkl-spacing-xl--right"},"Send inn"),"\n",r.createElement(i.kq,{className:"jkl-spacing-xl--right"},"Lagre"),"\n",r.createElement(i.C9,{className:"jkl-spacing-xl--right"},"Avbryt"),"\n",r.createElement(n.h2,null,"Knapper som er lenker"),"\n",r.createElement(n.p,null,"Avhengig av situasjonen kan det hende en knapp teknisk sett er et ",r.createElement(n.code,null,"<a />"),"-element. Jøkul støtter å ha knappeklasser på ",r.createElement(n.code,null,"<a />"),"."),"\n",r.createElement(a,{component:k,codeExample:g}),"\n",r.createElement(n.h2,null,"Eksempler på bruk"),"\n",r.createElement(n.p,null,"Du finner et ",r.createElement(n.a,{href:"/preview/3749-compact-icons/demoer/skjemavalidering/"},"eksempel på en primærknapp brukt i skjemakontekst")," under Demoer. ",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/blob/main/portal/src/pages/demoer/skjemavalidering.tsx"},"Koden til eksempelet")," finner du på GitHub."),"\n",r.createElement(o,{src:"/assets/documentation/button/button-primary-loading.gif",caption:"En primærknapp som har startet en handling og nå er i lastemodus."}))}var E=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(v,e)):v(e)};function f(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var b=t(72285),w=t(22756),j=t(95573),y=t(1634);const L=e=>{let{pageContext:n}=e;return r.createElement(w.p,{title:n.title})},N=e=>{let{location:n,data:t,pageContext:l,children:a}=e;const{frontmatter:o}=t.page,{types:i}=l;return r.createElement(y.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(j.M1,Object.assign({},o,{versions:l.versions})),r.createElement(j.w5,o),a,i&&r.createElement(b.l,{types:i}))};function x(e){return r.createElement(N,e,r.createElement(E,e))}},2977:function(e,n,t){t.d(n,{KM:function(){return u},kq:function(){return m},C9:function(){return d}});var l=t(41886),r=t(80532),a=t(26372),o=t.n(a),i=t(70079);const s=(0,i.forwardRef)(((e,n)=>i.createElement("button",Object.assign({},e,{ref:n}))));s.displayName="BaseButton";const c=e=>{const n=(0,i.forwardRef)(((n,t)=>{const{children:a,className:c,density:u,onClick:m,onTouchStart:d,loader:p,iconLeft:k,iconRight:g,...h}=n,v=(0,i.useCallback)((e=>{d&&d(e);const n=e.target;if(n&&e.targetTouches.length){const t=e.targetTouches[0].clientX-n.getBoundingClientRect().x,l=e.targetTouches[0].clientY-n.getBoundingClientRect().y;n.style.setProperty("--jkl-touch-xcoord",t.toPrecision(4)+"px"),n.style.setProperty("--jkl-touch-ycoord",l.toPrecision(4)+"px"),n.classList.add("jkl-button--pressed"),setTimeout((()=>n.classList.remove("jkl-button--pressed")),400)}}),[d]),E=(0,r.c)(null==p?void 0:p.showLoader);return i.createElement(s,Object.assign({},E,{"data-density":u,className:o()("jkl-button","jkl-button--"+e,c,{"jkl-button--icon-left":k,"jkl-button--icon-right":g}),disabled:null==p?void 0:p.showLoader,onClick:m,onTouchStart:v},h,{ref:t}),i.createElement("div",{className:"jkl-button__content"},i.createElement("div",{className:o()("jkl-button__slider",{"jkl-button__slider--show-loader":!(null==p||!p.showLoader)})},k&&i.createElement("span",{className:"jkl-button__icon"},k),i.createElement("span",{className:"jkl-button__children"},a),g&&i.createElement("span",{className:"jkl-button__icon"},g),p&&i.createElement("div",{className:"jkl-button__loader"},i.createElement(l.a,{textDescription:p.textDescription,"aria-hidden":!p.showLoader})))))}));return n.displayName="BaseButton",n},u=c("primary");u.displayName="PrimaryButton";const m=c("secondary");m.displayName="SecondaryButton";const d=c("tertiary");d.displayName="TertiaryButton"},72285:function(e,n,t){t.d(n,{l:function(){return k}});var l=t(78217),r=t(41994),a=t(87505),o=t(70079),i=t(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},u=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},m=(e,n)=>{const{scrollLeft:t,scrollWidth:l}=e,{clientWidth:r}=n,a=t>0,o=l-t>r;n.classList.toggle("left-shadow",a),n.classList.toggle("right-shadow",o)},d=e=>{const n=e.target,t=n.parentElement;m(n,t)},p=e=>{let{props:n}=e;const t=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&m(n,e)}}))})),l=t.current.parentElement.parentElement;n.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=n,l.map((e=>{var n,t;return[e.name?s(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?s(e.type.name):""]})))})));var l},k=e=>{let{types:n}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const l=t.props?Object.values(t.props).filter(u):[],a=t.props?Object.values(t.props).filter(c):[],s=(e=>{var n,t,l,r,a,o;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return o.createElement(r.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),l.length>0&&o.createElement(p,{props:l}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},1634:function(e,n,t){t.d(n,{M:function(){return s}});var l=t(26372),r=t.n(l),a=t(49597),o=t(70079),i=t(34044);const s=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:l}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",n),id:"innhold"},t)}},78217:function(e,n,t){t.d(n,{U:function(){return o}});var l=t(26372),r=t.n(l),a=t(70079);const o=e=>{let{className:n,density:t,...l}=e;return a.createElement("div",{"data-testid":"jkl-accordion",className:r()("jkl-accordion",n),"data-density":t,...l})}},41994:function(e,n,t){t.d(n,{Q:function(){return c}});var l=t(53484),r=t(3438),a=t(84490),o=t(26372),i=t.n(o),s=t(70079);const c=e=>{let{children:n,title:t,className:o,startExpanded:c=!1,onClick:u,...m}=e;const d=(0,r.M)("title"),p=(0,r.M)("content"),{0:k,1:g}=(0,s.useState)(c),[h]=(0,a.v)(k,{easing:"exit",timing:"expressive"});return s.createElement("div",{"data-testid":"jkl-accordion-item",...m,className:i()("jkl-accordion-item",o,{"jkl-accordion-item--expanded":k})},s.createElement("button",{id:d,className:"jkl-accordion-item__title",type:"button","aria-expanded":k,"aria-controls":p,onClick:e=>{const n=!k;g(n),u&&u(e,n)}},t,s.createElement(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})),s.createElement("div",{id:p,ref:h,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":d,hidden:!k},s.createElement("div",{className:"jkl-accordion-item__content"},n)))}},82400:function(e,n,t){t.d(n,{Y:function(){return i}});var l=t(3938),r=t(70079);const a=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M10.083 7l.79.778-3.889 3.697H18v1.09H7.005l3.867 3.657-.79.778L5 12l5.083-5z",fill:"currentColor"})),o=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M10.25 6.5l1.211 1.262-3.396 3.35H18v1.775H8.045l3.416 3.351-1.21 1.262L5 12.02l5.25-5.52z",fill:"currentColor"})),i=(0,l.d)({bold:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M8.443 5.25l1.024 1.09-2.874 2.894H15v1.532H6.577l2.89 2.894-1.024 1.09L4 10.017 8.443 5.25z",fill:"currentColor"})),medium:o,inherit:o},regular:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M8.3 5.5l.669.7-3.29 3.327H15v.98H5.696L8.97 13.8l-.668.7L4 10l4.3-4.5z",fill:"currentColor"})),medium:a,inherit:a}});i.displayName="ArrowLeftIcon"},18438:function(e,n,t){t.d(n,{L:function(){return i}});var l=t(3938),r=t(70079);const a=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M13.917 7l-.79.778 3.889 3.697H6v1.09h10.995l-3.867 3.657.79.778L19 12l-5.083-5z",fill:"currentColor"})),o=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M13.75 6.5l-1.211 1.262 3.396 3.35H6v1.775h9.955l-3.416 3.351 1.21 1.262L19 12.02 13.75 6.5z",fill:"currentColor"})),i=(0,l.d)({bold:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M11.557 5.25l-1.024 1.09 2.874 2.894H5v1.532h8.423l-2.89 2.894 1.024 1.09L16 10.017 11.557 5.25z",fill:"currentColor"})),medium:o,inherit:o},regular:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M11.7 5.5l-.669.7 3.29 3.327H5v.98h9.304L11.03 13.8l.668.7L16 10l-4.3-4.5z",fill:"currentColor"})),medium:a,inherit:a}});i.displayName="ArrowRightIcon"},87505:function(e,n,t){t.d(n,{w:function(){return m}});var l=t(70079),r=t(41699),a=t(65174),o=t(6914),i=t(82546),s=t(39126),c=t(66169),u=t(94509);const m=(0,l.forwardRef)(((e,n)=>{let{caption:t,columns:m,emptyTableText:d,rows:p,verticalAlign:k,...g}=e;return l.createElement(r.i,{fullWidth:!0,...g,ref:n},t&&l.createElement(o.R,{srOnly:!0},t),l.createElement(s.s,null,l.createElement(u.S,null,m.map(((e,n)=>l.createElement(c.x,{key:n,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&d&&l.createElement(u.S,null,l.createElement(i.p,{colSpan:m.length},d)),p.map(((e,n)=>l.createElement(u.S,{key:n},e.map(((e,n)=>l.createElement(i.p,{key:n,"data-th":m[n],verticalAlign:k},e))))))))}));m.displayName="DataTable"}}]);