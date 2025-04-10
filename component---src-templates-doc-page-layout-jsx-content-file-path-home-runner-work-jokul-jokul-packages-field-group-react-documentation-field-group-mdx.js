"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1429],{34715:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return v},Head:function(){return E},default:function(){return h}});var l=n(33865),r=n(70079),a=n(69182),o=n(73030);const i={boolProps:["Med hjelpetekst","Med feil","Med tooltip"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},s=e=>{let{boolValues:t,choiceValues:n}=e;const l=null!=t&&t["Med tooltip"]?{content:r.createElement(r.Fragment,null,"Du må fylle ut fødelsnummer eller D-nummer. Se ",r.createElement(a.r,{href:""},"guiden vår")," hvis du er usikker på hvordan du finner D-nummer.")}:void 0;return r.createElement(o.N,{legend:"Samleoverskrift for feltene",labelProps:{variant:null==n?void 0:n.Variant},helpLabel:null!=t&&t["Med hjelpetekst"]?"Hjelpetekst for feltene samlet":void 0,errorLabel:null!=t&&t["Med feil"]?"Feilmelding for feltene samlet":void 0,tooltipProps:l},r.createElement("p",null,"her kan du sette inn innhold og felter"))},c=e=>{let{boolValues:t,choiceValues:n}=e;return'\n<FieldGroup\n    legend="Samleoverskrift for feltene"\n    variant="'+(null==n?void 0:n.Variant)+'"\n    helpLabel='+(null!=t&&t["Med hjelpetekst"]?'"Hjelpetekst for feltene samlet"':"{undefined}")+"\n    errorLabel="+(null!=t&&t["Med feil"]?'"Feilmelding for feltene samlet"':"{undefined}")+(null!=t&&t["Med tooltip"]?'\n        tooltipProps={{ content: (\n            <>\n                Du må fylle ut fødelsnummer eller D-nummer. Se <Link href="">guiden vår</Link> hvis du er usikker\n                på hvordan Du finner D-nummer.\n            </>\n        )}}':"")+"\n>\n    <p>her kan du sette inn innhold og felter</p>\n</FieldGroup>\n"};function d(e){const t=Object.assign({p:"p",a:"a",h2:"h2",code:"code",em:"em",ul:"ul",li:"li"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:a}=t;return a||p("ComponentExample",!0),n||p("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Et feltsett er et sett med skjemafelter som hører sammen, for eksempel navn, adresse og postnummer/sted. Feltsettet\nmå ha en overskrift som beskriver innholdet, og kan også ha en hjelpetekst eller en feilmelding.")),"\n",r.createElement(a,{title:"FieldGroup",component:s,knobs:i,codeExample:c}),"\n",r.createElement(t.p,null,"Du finner et ",r.createElement(t.a,{href:"/demoer/skjemavalidering/"},"eksempel på et feltsett brukt i skjemakontekst")," under Profil og Skjemadesign. ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/portal/src/pages/demoer/skjemavalidering.tsx"},"Koden til eksempelet")," finner du på GitHub."),"\n",r.createElement(t.h2,null,"Tekst og validering"),"\n",r.createElement(t.p,null,"Velg størrelse på overskriften til et feltsett etter ",r.createElement(t.a,{href:"/profil/skjemadesign"},"prinsippene for skjemadesign"),". Ha en kort og tydelig overskrift, som beskriver hva brukeren skal velge. Hvis du trenger å gi mer forklaring, kan du sette en hjelpetekst under feltsettet."),"\n",r.createElement(t.p,null,"Hvis feltsettet ikke validerer, kan vi enten velge å legge en feilemelding under hele settet, eller under ett eller flere felt, hvis det gir bedre hjelp."),"\n",r.createElement(t.h2,null,"Bruk"),"\n",r.createElement(t.p,null,"Selv om det visuelle i et feltsett dukker opp mange steder vil ",r.createElement(t.code,null,"FieldGroup"),"-komponenten ikke brukes så ofte direkte."),"\n",r.createElement(t.p,null,"Dersom du bruker ",r.createElement(t.a,{href:"/komponenter/radiobutton"},"RadioButton")," har den sin egen ",r.createElement(t.code,null,"RadioButtonGroup")," (visuelt identisk) som fyller rollen til ",r.createElement(t.code,null,"FieldGroup"),", med noe skreddersøm for en gruppe radioknapper. Skjemafelter som ",r.createElement(t.a,{href:"/komponenter/textinput"},"TextInput"),", ",r.createElement(t.a,{href:"/komponenter/select"},"Select")," og ",r.createElement(t.a,{href:"/komponenter/datepicker"},"Datepicker")," har innebygget støtte for ledetekst, hjelpetekst, og feilmeldinger. Med mindre disse skjemafeltene ",r.createElement(t.em,null,"sammen")," utgjør et konsept skal det ikke brukes en ",r.createElement(t.code,null,"FieldGroup")," rundt dem."),"\n",r.createElement(t.p,null,"Der du vil trenge å bruke ",r.createElement(t.code,null,"FieldGroup"),"-komponenten direkte er:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"rundt en liste med ",r.createElement(t.a,{href:"/komponenter/checkbox"},"Checkbox")),"\n",r.createElement(t.li,null,"rundt inputfelter som til sammen utgjør et konsept (for eksempel adressefelter)"),"\n"))}var m=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(d,e)):d(e)};function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=n(6499),k=n(64864),f=n(33226),g=n(51588);const E=e=>{let{pageContext:t}=e;return r.createElement(k.p,{title:t.title})},v=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:o}=n.page,{types:i}=l;return r.createElement(g.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(f.M1,Object.assign({},o,{versions:l.versions})),r.createElement(f.w5,o),a,i&&r.createElement(u.l,{types:i}))};function h(e){return r.createElement(v,e,r.createElement(m,e))}},73030:function(e,t,n){n.d(t,{N:function(){return d}});var l=n(64806),r=n(74084),a=n(31967),o=n(67316),i=n(26372),s=n.n(i),c=n(70079);const d=e=>{const{id:t,legend:n,labelProps:i,supportLabelProps:d,tooltipProps:m,className:p,children:u,helpLabel:k,errorLabel:f,density:g,"data-testautoid":E,...v}=e,h=(0,a.M)(t||"jkl-field-group",{generateSuffix:!t}),b=h+"_support-label",j=k||f?b:void 0;return c.createElement("fieldset",Object.assign({id:h,className:s()("jkl-field-group",p),"data-testautoid":E},v,{"aria-describedby":j,"data-density":g}),c.createElement("legend",{className:"jkl-field-group__legend"},c.createElement(l._,Object.assign({},i,{density:g}),!m&&n,m&&c.createElement(c.Fragment,null,c.createElement("span",{style:{whiteSpace:"normal"}},n)," ",m&&c.createElement(o.u,m)))),u,(k||f)&&c.createElement(r.A,Object.assign({},d,{id:b,density:g,helpLabel:k,errorLabel:f})))}},6499:function(e,t,n){n.d(t,{l:function(){return u}});var l=n(17016),r=n(60705),a=n(50315),o=n(70079);const i=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,o=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},m=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var l},u=e=>{let{types:t}=e;return o.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},o.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),o.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(c):[],a=n.props?Object.values(n.props).filter(s):[];return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},l.length>0&&o.createElement(p,{props:l}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},51588:function(e,t,n){n.d(t,{M:function(){return s}});var l=n(26372),r=n.n(l),a=n(49597),o=n(70079),i=n(54331);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},17016:function(e,t,n){n.d(t,{U:function(){return o}});var l=n(26372),r=n.n(l),a=n(70079);const o=e=>{let{className:t,density:n,...l}=e;return a.createElement("div",{"data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,...l})}},60705:function(e,t,n){n.d(t,{Q:function(){return c}});var l=n(31967),r=n(29957),a=n(26372),o=n.n(a),i=n(70079);const s=e=>{let{expanded:t=!1,className:n}=e;return i.createElement("span",{className:o()("jkl-accordion-item__arrow",n,{"jkl-accordion-item__arrow--expanded":t})},i.createElement("svg",{className:"jkl-accordion-item__arrow-down",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M11.15 8.51998L10.35 7.73998L6.54999 11.58L6.55 0.699982L5.43 0.699982L5.43 11.56L1.67 7.73998L0.869995 8.51998L6.01 13.54L11.15 8.51998Z",fill:"currentColor"})),i.createElement("svg",{className:"jkl-accordion-item__arrow-up",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M0.940002 5.71998L1.74 6.49998L5.54 2.65998V13.54H6.66V2.67998L10.42 6.49998L11.22 5.71998L6.08 0.699982L0.940002 5.71998Z",fill:"currentColor"})))},c=e=>{let{children:t,title:n,className:a,startExpanded:c=!1,onClick:d,...m}=e;const p=(0,l.M)("title"),u=(0,l.M)("content"),{0:k,1:f}=(0,i.useState)(c),[g]=(0,r.v)(k,{easing:"exit",timing:"expressive"});return i.createElement("div",{"data-testid":"jkl-accordion-item",...m,className:o()("jkl-accordion-item",a,{"jkl-accordion-item--expanded":k})},i.createElement("button",{id:p,className:"jkl-accordion-item__title",type:"button","aria-expanded":k,"aria-controls":u,onClick:e=>{const t=!k;f(t),d&&d(e,t)}},n,i.createElement(s,{expanded:k})),i.createElement("div",{id:u,ref:g,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":p,hidden:!k},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},50315:function(e,t,n){n.d(t,{w:function(){return m}});var l=n(70079),r=n(27468),a=n(89948),o=n(76769),i=n(76501),s=n(63551),c=n(93643),d=n(73372);const m=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:p,rows:u,verticalAlign:k,...f}=e;return l.createElement(r.i,{fullWidth:!0,...f,ref:t},n&&l.createElement(o.R,{srOnly:!0},n),l.createElement(s.s,null,l.createElement(d.S,null,m.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===u.length&&p&&l.createElement(d.S,null,l.createElement(i.p,{colSpan:m.length},p)),u.map(((e,t)=>l.createElement(d.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":m[t],verticalAlign:k},e))))))))}));m.displayName="DataTable"}}]);