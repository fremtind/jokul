"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5107],{86040:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return y},Head:function(){return j},default:function(){return w}});var l=n(75615),a=n(70079),r=n(80276);const o=e=>{let{boolValues:t,choiceValues:n}=e;const{0:l,1:o}=(0,a.useState)(!1),i={showLoader:l||!(null==t||!t.isLoading),textDescription:"Laster innhold"},s="uten"===(null==n?void 0:n.Pil)||null==n?void 0:n.Pil;return a.createElement(r.KM,{loader:l||null!=t&&t.withLoader?i:void 0,className:"jkl-spacing-l--right",onClick:()=>{console.log("Hello!"),o(!0),setTimeout((()=>{o(!1)}),2200)},arrow:s},"Lagre og send inn")},i=e=>{let{boolValues:t,choiceValues:n}=e;return"\n<PrimaryButton\n    loader={"+(null!=t&&t.withLoader?"{\n        showLoader: "+!(null==t||!t.isLoading)+',\n        textDescription: "Laster innhold"\n    }':"false")+'}\n    onClick={simulateLoading}\n    className="jkl-spacing-l--right"\n    '+("uten"===(null==n?void 0:n.Pil)?"":'arrow="'+(null==n?void 0:n.Pil)+'"')+"\n>\n    Lagre og send inn\n</PrimaryButton>\n"},s=e=>{let{boolValues:t,choiceValues:n}=e;const{0:l,1:o}=(0,a.useState)(!1),i={showLoader:l||!(null==t||!t.isLoading),textDescription:"Laster innhold"},s="uten"===(null==n?void 0:n.Pil)||null==n?void 0:n.Pil;return a.createElement(r.kq,{loader:l||null!=t&&t.withLoader?i:void 0,className:"jkl-spacing-l--right",onClick:()=>{console.log("Hello!"),o(!0),setTimeout((()=>{o(!1)}),2200)},arrow:s},"Lagre")},c=e=>{let{boolValues:t,choiceValues:n}=e;return"\n<SecondaryButton\n    loader={"+(null!=t&&t.withLoader?"{\n        showLoader: "+!(null==t||!t.isLoading)+',\n        textDescription: "Laster innhold"\n    }':"false")+'}\n    onClick={simulateLoading}\n    className="jkl-spacing-l--right"\n    '+("uten"===(null==n?void 0:n.Pil)?"":'arrow="'+(null==n?void 0:n.Pil)+'"')+"\n>\n    Lagre\n</SecondaryButton>\n"},d=e=>{let{boolValues:t,choiceValues:n}=e;const{0:l,1:o}=(0,a.useState)(!1),i={showLoader:l||!(null==t||!t.isLoading),textDescription:"Laster innhold"},s="uten"===(null==n?void 0:n.Pil)||null==n?void 0:n.Pil;return a.createElement(r.C9,{loader:l||null!=t&&t.withLoader?i:void 0,className:"jkl-spacing-l--right",onClick:()=>{console.log("Hello!"),o(!0),setTimeout((()=>{o(!1)}),2200)},arrow:s},"Avbryt")},m=e=>{let{boolValues:t,choiceValues:n}=e;return"\n<TertiaryButton\n    loader={"+(null!=t&&t.withLoader?"{\n        showLoader: "+!(null==t||!t.isLoading)+',\n        textDescription: "Laster innhold"\n    }':"false")+'}\n    onClick={simulateLoading}\n    className="jkl-spacing-l--right"\n    '+("uten"===(null==n?void 0:n.Pil)?"":'arrow="'+(null==n?void 0:n.Pil)+'"')+"\n>\n    Avbryt\n</TertiaryButton>\n"},u=()=>a.createElement("div",{className:"jkl-button-example"},a.createElement("div",null,a.createElement("a",{className:"jkl-button jkl-button--primary",href:"/komponenter/buttons#knapper-som-er-lenker"},"Send inn")),a.createElement("div",null,a.createElement("a",{className:"jkl-button jkl-button--secondary",href:"/komponenter/buttons#knapper-som-er-lenker"},"Lagre")),a.createElement("div",null,a.createElement("a",{className:"jkl-button jkl-button--tertiary",href:"/komponenter/buttons#knapper-som-er-lenker"},"Avbryt"))),p={boolProps:["withLoader","isLoading"],choiceProps:[{name:"Pil",values:["uten","left","right"],defaultValue:0}]};function k(e){const t=Object.assign({p:"p",strong:"strong",h2:"h2",code:"code",a:"a"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:k,DoDontExample:g,PortalImage:E}=t;return k||h("ComponentExample",!0),g||h("DoDontExample",!0),n||h("Ingress",!0),E||h("PortalImage",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"Knapper starter en handling. Teksten på knappen forteller hva som vil skje når brukeren klikker på den.")),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Primærknapp:")," brukes til den viktigste handlingen på en side - hovedhandlingen. En side kan noen ganger ha mer enn en hovedhandling, men ikke mange."),"\n",a.createElement(k,{title:"PrimaryButton",component:o,knobs:p,codeExample:i}),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Sekundærknapp:")," brukes til handlinger som ikke er like viktige for oss eller brukeren."),"\n",a.createElement(k,{title:"SecondaryButton",component:s,knobs:p,codeExample:c}),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Tertiærknapp:")," brukes til handlinger som er mindre viktige, eller som kan gi uønskede konsekvenser."),"\n",a.createElement(k,{title:"TertiaryButton",component:d,knobs:p,codeExample:m}),"\n",a.createElement(t.h2,null,"Lastemodus"),"\n",a.createElement(t.p,null,"Hvis du skal bruke lastemodus i knappen må du sørge for at ",a.createElement(t.code,null,"@fremtind/jkl-loader/loader.min.css")," er lastet inn i klienten."),"\n",a.createElement(t.h2,null,"Knappetyper"),"\n",a.createElement(t.p,null,"Disse tre hovedknappetypene har et hierarki. Når brukeren har flere valg samtidig, skal vi kun ha én primærknapp."),"\n",a.createElement(g,{type:"do",description:"Kun én primærknapp",image:"/assets/do-donts/button-do-1.png"}),"\n",a.createElement(g,{type:"dont",description:"Flere primærknapper",image:"/assets/do-donts/button-dont-1.png"}),"\n",a.createElement(t.h2,null,"Tekst på knapper"),"\n",a.createElement(t.p,null,"Knappetekster skal være så enkle og korte som mulig og skal oppfordre til handling. Bruk helst bare to ord:"),"\n",a.createElement(r.KM,{className:"jkl-spacing-xl--right"},"Send inn"),"\n","\n","\n",a.createElement(r.kq,{className:"jkl-spacing-xl--right"},"Lagre"),"\n","\n","\n",a.createElement(r.C9,{className:"jkl-spacing-xl--right"},"Avbryt"),"\n",a.createElement(t.h2,null,"Knapper som er lenker"),"\n",a.createElement(t.p,null,"Avhengig av situasjonen kan det hende en knapp teknisk sett er et ",a.createElement(t.code,null,"<a />"),"-element. Jøkul støtter å ha knappeklasser på ",a.createElement(t.code,null,"<a />"),"."),"\n",a.createElement(k,{component:u,codeExample:'\n<div>\n    <a\n        className="jkl-button jkl-button--primary"\n        href="/komponenter/buttons#knapper-som-er-lenker"\n    >\n        Send inn\n    </a>\n</div>\n<div>\n    <a\n        className="jkl-button jkl-button--secondary"\n        href="/komponenter/buttons#knapper-som-er-lenker"\n    >\n        Lagre\n    </a>\n</div>\n<div>\n    <a\n        className="jkl-button jkl-button--tertiary"\n        href="/komponenter/buttons#knapper-som-er-lenker"\n    >\n        Avbryt\n    </a>\n</div>\n'}),"\n",a.createElement(t.h2,null,"Eksempler på bruk"),"\n",a.createElement(t.p,null,"Du finner et ",a.createElement(t.a,{href:"/demoer/skjemavalidering/"},"eksempel på en primærknapp brukt i skjemakontekst")," under Profil og Skjemadesign. ",a.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/portal/src/pages/demoer/skjemavalidering.tsx"},"Koden til eksempelet")," finner du på GitHub."),"\n",a.createElement(E,{src:"/assets/documentation/button/button-primary-loading.gif",caption:"En primærknapp som har startet en handling og nå er i lastemodus."}),"\n",a.createElement(E,{src:"/assets/documentation/button/button-changing-priority.gif",caption:"En primærknapp som bytter rolle i det den klikkes på."}))}var g=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(k,e)):k(e)};function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var E=n(71111),v=n(16569),b=n(72892),f=n(479);const j=e=>{let{pageContext:t}=e;return a.createElement(v.p,{title:t.title})},y=e=>{let{location:t,data:n,pageContext:l,children:r}=e;const{frontmatter:o}=n.page,{types:i}=l;return a.createElement(f.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(b.M1,Object.assign({},o,{versions:l.versions})),a.createElement(b.w5,o),r,i&&a.createElement(E.l,{types:i}))};function w(e){return a.createElement(y,e,a.createElement(g,e))}},80276:function(e,t,n){n.d(t,{KM:function(){return u},kq:function(){return p},C9:function(){return k}});var l=n(82985),a=n(35860),r=n(25095),o=n(97033),i=n(26372),s=n.n(i),c=n(70079);const d=(0,c.forwardRef)(((e,t)=>c.createElement("button",Object.assign({},e,{ref:t}))));d.displayName="BaseButton";const m=e=>{const t=(0,c.forwardRef)(((t,n)=>{const{children:i,className:m,density:u,onClick:p,onTouchStart:k,loader:g,arrow:h,...E}=t,v=(0,c.useCallback)((e=>{k&&k(e);const t=e.target;if(t&&e.targetTouches.length){const n=e.targetTouches[0].clientX-t.getBoundingClientRect().x,l=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",n.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",l.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((()=>t.classList.remove("jkl-button--pressed")),400)}}),[k]),b=(0,o.c)(null==g?void 0:g.showLoader);return c.createElement(d,Object.assign({},b,{"data-density":u,className:s()("jkl-button","jkl-button--"+e,m,{"jkl-button--left-arrow":"left"===h,"jkl-button--right-arrow":"right"===h}),disabled:null==g?void 0:g.showLoader,onClick:p,onTouchStart:v},E,{ref:n}),c.createElement("div",{className:"jkl-button__content"},c.createElement("div",{className:s()("jkl-button__slider",{"jkl-button__slider--show-loader":!(null==g||!g.showLoader)})},"left"===h&&c.createElement(l.X,{className:"jkl-button__arrow",bold:!0}),c.createElement("span",{className:"jkl-button__children"},i),"right"===h&&c.createElement(a.o,{className:"jkl-button__arrow",bold:!0}),g&&c.createElement("div",{className:"jkl-button__loader"},c.createElement(r.a,{textDescription:g.textDescription,"aria-hidden":!g.showLoader})))))}));return t.displayName="BaseButton",t},u=m("primary");u.displayName="PrimaryButton";const p=m("secondary");p.displayName="SecondaryButton";const k=m("tertiary");k.displayName="TertiaryButton"},71111:function(e,t,n){n.d(t,{l:function(){return p}});var l=n(57986),a=n(80252),r=n(50601),o=n(70079);const i=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:a}=t,r=n>0,o=l-n>a;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",o)},m=e=>{const t=e.target,n=t.parentElement;d(t,n)},u=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var l},p=e=>{let{types:t}=e;return o.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},o.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),o.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(c):[],r=n.props?Object.values(n.props).filter(s):[];return o.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},l.length>0&&o.createElement(u,{props:l}),r.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:r})))}))))}},479:function(e,t,n){n.d(t,{M:function(){return s}});var l=n(26372),a=n.n(l),r=n(79363),o=n(70079),i=n(56024);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(r.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},57986:function(e,t,n){n.d(t,{U:function(){return o}});var l=n(26372),a=n.n(l),r=n(70079);const o=e=>{let{className:t,density:n,...l}=e;return r.createElement("div",{"data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,...l})}},80252:function(e,t,n){n.d(t,{Q:function(){return c}});var l=n(14092),a=n(89292),r=n(26372),o=n.n(r),i=n(70079);const s=e=>{let{expanded:t=!1,className:n}=e;return i.createElement("span",{className:o()("jkl-accordion-item__arrow",n,{"jkl-accordion-item__arrow--expanded":t})},i.createElement("svg",{className:"jkl-accordion-item__arrow-down",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M11.15 8.51998L10.35 7.73998L6.54999 11.58L6.55 0.699982L5.43 0.699982L5.43 11.56L1.67 7.73998L0.869995 8.51998L6.01 13.54L11.15 8.51998Z",fill:"currentColor"})),i.createElement("svg",{className:"jkl-accordion-item__arrow-up",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M0.940002 5.71998L1.74 6.49998L5.54 2.65998V13.54H6.66V2.67998L10.42 6.49998L11.22 5.71998L6.08 0.699982L0.940002 5.71998Z",fill:"currentColor"})))},c=e=>{let{children:t,title:n,className:r,startExpanded:c=!1,onClick:d,...m}=e;const u=(0,l.M)("title"),p=(0,l.M)("content"),{0:k,1:g}=(0,i.useState)(c),[h]=(0,a.v)(k,{easing:"exit",timing:"expressive"});return i.createElement("div",{"data-testid":"jkl-accordion-item",...m,className:o()("jkl-accordion-item",r,{"jkl-accordion-item--expanded":k})},i.createElement("button",{id:u,className:"jkl-accordion-item__title",type:"button","aria-expanded":k,"aria-controls":p,onClick:e=>{const t=!k;g(t),d&&d(e,t)}},n,i.createElement(s,{expanded:k})),i.createElement("div",{id:p,ref:h,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":u,hidden:!k},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},50601:function(e,t,n){n.d(t,{w:function(){return m}});var l=n(70079),a=n(64327),r=n(1807),o=n(11348),i=n(12675),s=n(14687),c=n(61211),d=n(39666);const m=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:u,rows:p,verticalAlign:k,...g}=e;return l.createElement(a.i,{fullWidth:!0,...g,ref:t},n&&l.createElement(o.R,{srOnly:!0},n),l.createElement(s.s,null,l.createElement(d.S,null,m.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(r.R,null,0===p.length&&u&&l.createElement(d.S,null,l.createElement(i.p,{colSpan:m.length},u)),p.map(((e,t)=>l.createElement(d.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":m[t],verticalAlign:k},e))))))))}));m.displayName="DataTable"}}]);