"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[8992],{23443:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return D},Head:function(){return F},default:function(){return U}});var a=n(47160),l=n(70079),r=n(64592);const o="fremtind-cookie-consent",i=e=>{const t=function(e){if(void 0===e&&(e=o),"undefined"==typeof document)return;const t=document.cookie.split(";").map((e=>e.trim().split("="))).find((t=>t[0]===e));return t||void 0}();if(t){return JSON.parse(t[1])}if(e)return e()},s=function(e,t,n){void 0===t&&(t=10368e3),void 0===n&&(n=o);const a=[];a.push(n+"="+JSON.stringify(e)),a.push("max-age="+t),a.push("SameSite=Lax"),document.cookie=a.join(";")},c=e=>{const t={functional:void 0,marketing:void 0,statistics:void 0},n=Object.entries({...t,...e}).map((e=>{let[t,n]=e;return[t,(a=n,void 0===a?null:!1===a||"false"===String(a).toLowerCase()?"denied":"accepted")];var a}));return Object.fromEntries(n)},d=l.createContext(void 0),m=(e,t)=>{switch(t.type){case"SET_SHOW_CONSENT":return{...e,isOpen:t.payload};case"SET_SHOW_SETTINGS":return{...e,showSettings:t.payload};case"UPDATE_CONSENT":return{...e,consent:{...e.consent,...t.payload}};case"UPDATE_REQUIREMENTS":return{...e,requirement:{...e.requirement,...t.payload}};default:throw new Error("Unhandled action type: "+t.type)}},u=e=>{let{children:t,cookieAdapter:n,marketing:a,functional:r,statistics:o}=e;const s=(0,l.useMemo)((()=>{var e;return null!==(e=i(n))&&void 0!==e?e:{marketing:null,functional:null,statistics:null}}),[n]),c=(0,l.useMemo)((()=>({marketing:null!=a&&a,functional:null!=r&&r,statistics:null!=o&&o})),[a,r,o]),[u,p]=l.useReducer(m,{isOpen:!1,showSettings:!1,requirement:c,consent:s});(0,l.useEffect)((()=>{((e,t)=>{if(t){const n=new Map(Object.entries(t)),a=Object.entries(e);for(const[e,t]of a)if(t&&null===n.get(e))return!0;return!1}return Object.values(e).some((e=>e))})(c,s)?p({type:"SET_SHOW_CONSENT",payload:!0}):s&&p({type:"UPDATE_CONSENT",payload:s})}),[c,s]);const k={state:u,dispatch:p};return l.createElement(d.Provider,{value:k},t)},p=()=>{const e=l.useContext(d);if(void 0===e)throw new Error("useCookieConsentState must be used within a CookieConsentProvider");return{dispatch:e.dispatch,...e.state}};var k=n(96820),f=n(88522),g=n(56733),E=n(74016),v=n(34304),h=n(99861),b=n(3438),j=n(99581);const y=e=>{let{defaultChecked:t,name:n,label:a,children:r}=e;return l.createElement(l.Fragment,null,l.createElement(f.X,{className:"jkl-cookie-consent-modal__checkbox",value:"True",name:n,defaultChecked:t},a),l.createElement("p",{className:"jkl-cookie-consent-modal__info-text"},r))},_=e=>{let{onAccept:t,...n}=e;const{consent:a,dispatch:o,isOpen:i,requirement:s,showSettings:d}=p(),m=(0,l.useCallback)((e=>{t("implicit"===e?c(s):e)}),[t,s]),u=(0,l.useCallback)((e=>{e.preventDefault();const t={},n=Object.entries(s).map((e=>{let[t,n]=e;return n?t:void 0})).filter(Boolean),a=new FormData(e.target);n.forEach((e=>{t[e]="True"===a.get(e)})),m(c(t))}),[m,s]),k=(0,b.M)("jkl-cookie-modal"),[f,{container:_,overlay:S,modal:N,title:C,closeButton:O}]=(0,v.d)({id:k,role:"alertdialog",title:"Informasjonskapsler"});return(0,l.useEffect)((()=>{f&&(i?f.show():f.hide())}),[f,i]),"undefined"==typeof document?null:j.createPortal(l.createElement(h.F0,Object.assign({},n,_,{"data-testautoid":"jkl-cookie-consent-modal"}),l.createElement(h.ZA,S),d?l.createElement(h.u_,Object.assign({component:"form"},N,{onSubmit:u}),l.createElement(h.xB,null,l.createElement(h.r6,C,"Informasjonskapsler")),l.createElement(h.fe,null,l.createElement(g.QI,{className:"jkl-cookie-consent-modal__checklist"},l.createElement(E.O2,null,"Nettsidene skal fungere teknisk")),l.createElement("p",{className:"jkl-cookie-consent-modal__info-text"},"For at nettsidene skal fungere, må vi bruke tekniske informasjonskapsler. Denne kan derfor ikke slås av."),s.functional&&l.createElement(y,{name:"functional",label:"Tillat funksjonelle",defaultChecked:"accepted"===a.functional},"Funksjonelle informasjonskapsler lagrer opplysninger om din bruk av nettsidene og hvilke innstillinger du har gjort, slik at du kan få funksjonalitet tilpasset deg."),s.statistics&&l.createElement(y,{name:"statistics",label:"Tillat statistikk",defaultChecked:"accepted"===a.statistics},"Informasjonskapslene lagrer statistikk som hjelper oss med å forstå hvordan nettsidene blir brukt, slik at vi kan gjøre dem bedre og enklere å bruke."),s.marketing&&l.createElement(y,{name:"marketing",label:"Tillat personlig markedsføring",defaultChecked:"accepted"===a.marketing},"Dette gjør at vi kan gi deg mer relevant og tilpasset markedsføring, også gjennom våre samarbeidspartnere, på for eksempel nettsider, annonser og i sosiale medier.")),l.createElement(h.nK,null,l.createElement(r.KM,{"data-testid":"jkl-cookie-consent-godta"},"Godta"))):l.createElement(h.u_,N,l.createElement(h.xB,null,l.createElement(h.r6,C,"Vi bruker informasjonskapsler slik at:")),l.createElement(h.fe,null,l.createElement(g.QI,{className:"jkl-cookie-consent-modal__checklist"},l.createElement(E.O2,null,"Nettsidene skal fungere teknisk"),s.functional&&l.createElement(E.O2,null,"Nettsidene skal tilpasses din bruk, dine valg og dine innstillinger."),s.statistics&&l.createElement(E.O2,null,"Vi kan samle statistikk på hvordan nettsidene brukes og dermed kunne forbedre tjenestene våre."),s.marketing&&l.createElement(E.O2,null,"Vi kan gi deg personlig tilpasset innhold og relevante annonser, også gjennom våre samarbeidspartnere, på for eksempel nettsider og i sosiale medier."))),l.createElement(h.nK,null,l.createElement(r.KM,Object.assign({"data-testid":"jkl-cookie-consent-godta"},O,{onClick:()=>{m("implicit")}}),"Godta"),l.createElement(r.C9,{onClick:()=>{o({type:"SET_SHOW_SETTINGS",payload:!0})}},"Innstillinger")))),document.body)},S=e=>{let{blocking:t,onAccept:n,...a}=e;const{dispatch:r,consent:o}=p(),i=(0,k.z)(o);if((0,l.useEffect)((()=>{n&&o!==i&&n(o)}),[n,o,i]),"undefined"!=typeof navigator&&!navigator.cookieEnabled)return n&&n({functional:"denied",marketing:"denied",statistics:"denied"}),null;const c=e=>{const t=Object.fromEntries(Object.entries(e).filter((e=>{let[,t]=e;return null!=t}))),n={...o,...t};r({type:"UPDATE_CONSENT",payload:n}),r({type:"SET_SHOW_CONSENT",payload:!1}),s(n)};return t?l.createElement(_,Object.assign({},a,{onAccept:c})):null};const N=e=>{let{functional:t=!1,statistics:n=!1,marketing:a=!1}=e;const{openConsentModalWithSettings:o}=(()=>{const e=l.useContext(d);if(void 0===e)throw new Error("useCookieConsent must be used within a CookieConsentProvider");return{openConsentModalWithSettings:()=>{e.dispatch({type:"SET_SHOW_CONSENT",payload:!0}),e.dispatch({type:"SET_SHOW_SETTINGS",payload:!0})},consents:e.state.consent}})(),{dispatch:i}=p();return(0,l.useEffect)((()=>{setTimeout((()=>{i({type:"SET_SHOW_CONSENT",payload:!1}),i({type:"SET_SHOW_SETTINGS",payload:!1}),i({type:"UPDATE_REQUIREMENTS",payload:{functional:t,statistics:n,marketing:a}})}),0)}),[i,t,n,a]),l.createElement(l.Fragment,null,l.createElement(r.C9,{"data-testid":"trigger-cookie-consent",onClick:o},"Informasjonskapsler"),l.createElement(S,{blocking:!0,onAccept:console.log}))},C={boolProps:["Functional","Statistics","Marketing"]},O=e=>{let{boolValues:t}=e;const{0:n,1:a}=(0,l.useState)(!1);return(0,l.useEffect)((()=>{a(!0)}),[]),n?(s({functional:null,statistics:null,marketing:null},-1),l.createElement(u,{functional:null==t?void 0:t.Functional,statistics:null==t?void 0:t.Statistics,marketing:null==t?void 0:t.Marketing},l.createElement(N,{functional:null==t?void 0:t.Functional,statistics:null==t?void 0:t.Statistics,marketing:null==t?void 0:t.Marketing}))):null},T=e=>{let{boolValues:t}=e;return"\nconst Example = () => {\n    const { openConsentModalWithSettings } = useCookieConsent();\n    return (\n        <>\n            <TertiaryButton onClick={openConsentModalWithSettings}>\n                Informasjonskapsler\n            </TertiaryButton>\n            <CookieConsent blocking onAccept={handleUserChoices} />\n        </>\n    );\n};\n\nexport const App = () => {\n    return (\n        <CookieConsentProvider\n            functional={"+(null==t?void 0:t.Functional)+"}\n            statistics={"+(null==t?void 0:t.Statistics)+"}\n            marketing={"+(null==t?void 0:t.Marketing)+"}\n        >\n            <Example />\n        </CookieConsentProvider>\n    );\n};\n"};function w(e){const t=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",h2:"h2",pre:"pre",code:"code"},(0,a.ah)(),e.components),{Ingress:n,ComponentExample:r}=t;return r||M("ComponentExample",!0),n||M("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Informasjonskapselsamtykke informerer om bruken av informasjonskapsler på nettstedet og lar brukeren velge bort de\nsom ikke er nødvendige for at siden skal fungere.")),"\n",l.createElement(r,{title:"CookieConsent",component:O,knobs:C,codeExample:T}),"\n",l.createElement(t.p,null,"Vi anser det som at informasjonskapsler kan deles opp i 3 formål, med hver sine hensikter og lovverk:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Funksjonelle"),"\n",l.createElement(t.li,null,"Markedsføring"),"\n",l.createElement(t.li,null,"Statistikk"),"\n"),"\n",l.createElement(t.p,null,"Et kjernekonsept er at man ",l.createElement(t.strong,null,"ikke skal spørre om mer enn man har behov for"),". I praksis\nbetyr dette at man eksplisitt setter hvilke formål man vil inhente et samtykke for, og man blir ikke spurt om andre\nformål enn disse."),"\n",l.createElement(t.p,null,"Foreløpig har Jøkul kun en blokkerende modal, hvor brukeren må ta et aktivt valg for å komme videre. Modalen vil ikke vises dersom ingen av de valgfrie kategoriene er i bruk."),"\n",l.createElement(t.h2,null,"Lagring og bruk av samtykker"),"\n",l.createElement(t.p,null,"Når brukeren lukker modalen vil komponenten lagre en cookie med en utløpstid på 120 dager, hvor det defineres hvorvidt et consent\ner tatt stilling til:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-JSON"},'{\n    "marketing":null,         // ikke tatt stilling til\n    "functional":"accepted",  // godtatt\n    "statistics":"denied"     // avslått\n}\n')),"\n",l.createElement(t.p,null,"Det er opp til hvert enkelt nettsted å ",l.createElement(t.strong,null,"sørge for at brukerens valg faktisk respekteres"),". Her er et eksempel:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-tsx"},'<CookieConsent\n    blocking\n    onAccept={(v) => {\n        if (v.statistics === "accepted") {\n            mixpanel.opt_in_tracking();\n            saveUserState(user, { statistics: true });\n        } else if (v.statistics === "denied") {\n            mixpanel.opt_out_tracking();\n            saveUserState(user, { statistics: false });\n        }\n    }}\n/>\n')))}var x=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(w,e)):w(e)};function M(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var I=n(72285),A=n(22756),P=n(95573),W=n(1634);const F=e=>{let{pageContext:t}=e;return l.createElement(A.p,{title:t.title})},D=e=>{let{location:t,data:n,pageContext:a,children:r}=e;const{frontmatter:o}=n.page,{types:i}=a;return l.createElement(W.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(P.M1,Object.assign({},o,{versions:a.versions})),l.createElement(P.w5,o),r,i&&l.createElement(I.l,{types:i}))};function U(e){return l.createElement(D,e,l.createElement(x,e))}},72285:function(e,t,n){n.d(t,{l:function(){return p}});var a=n(78217),l=n(41994),r=n(87505),o=n(70079);const i=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:l}=t,r=n>0,o=a-n>l;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",o)},m=e=>{const t=e.target,n=t.parentElement;d(t,n)},u=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var a},p=e=>{let{types:t}=e;return o.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},o.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),o.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(c):[],r=n.props?Object.values(n.props).filter(s):[];return o.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},a.length>0&&o.createElement(u,{props:a}),r.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:r})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var a=n(26372),l=n.n(a),r=n(49597),o=n(70079),i=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(r.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return o}});var a=n(26372),l=n.n(a),r=n(70079);const o=e=>{let{className:t,density:n,...a}=e;return r.createElement("div",{"data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,...a})}},41994:function(e,t,n){n.d(t,{Q:function(){return c}});var a=n(53484),l=n(3438),r=n(84490),o=n(26372),i=n.n(o),s=n(70079);const c=e=>{let{children:t,title:n,className:o,startExpanded:c=!1,onClick:d,...m}=e;const u=(0,l.M)("title"),p=(0,l.M)("content"),{0:k,1:f}=(0,s.useState)(c),[g]=(0,r.v)(k,{easing:"exit",timing:"expressive"});return s.createElement("div",{"data-testid":"jkl-accordion-item",...m,className:i()("jkl-accordion-item",o,{"jkl-accordion-item--expanded":k})},s.createElement("button",{id:u,className:"jkl-accordion-item__title",type:"button","aria-expanded":k,"aria-controls":p,onClick:e=>{const t=!k;f(t),d&&d(e,t)}},n,s.createElement(a.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})),s.createElement("div",{id:p,ref:g,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":u,hidden:!k},s.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var a=n(70079),l=n(41699),r=n(65174),o=n(6914),i=n(82546),s=n(39126),c=n(66169),d=n(94509);const m=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:u,rows:p,verticalAlign:k,...f}=e;return a.createElement(l.i,{fullWidth:!0,...f,ref:t},n&&a.createElement(o.R,{srOnly:!0},n),a.createElement(s.s,null,a.createElement(d.S,null,m.map(((e,t)=>a.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(r.R,null,0===p.length&&u&&a.createElement(d.S,null,a.createElement(i.p,{colSpan:m.length},u)),p.map(((e,t)=>a.createElement(d.S,{key:t},e.map(((e,t)=>a.createElement(i.p,{key:t,"data-th":m[t],verticalAlign:k},e))))))))}));m.displayName="DataTable"}}]);