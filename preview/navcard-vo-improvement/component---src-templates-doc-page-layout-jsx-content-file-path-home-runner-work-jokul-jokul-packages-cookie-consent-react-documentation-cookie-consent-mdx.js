"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[8992],{11910:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return U},Head:function(){return H},default:function(){return V}});var a=n(47160),l=n(70079),r=n(20204);const o=e=>{let{adapter:t,name:n}=e;const a=(e=>{if("undefined"==typeof document)return;const t=document.cookie.split(";").map((e=>e.trim().split("="))).find((t=>t[0]===e));return t||void 0})(n);if(a){return JSON.parse(a[1])}if(t)return t()},i=10368e3,s=e=>{let{consent:t,maxAge:n=i,name:a,domain:l}=e;document.cookie=[a+"="+JSON.stringify(t),"max-age="+n,"SameSite=Lax",!!l&&"domain="+l].filter((e=>e)).join(";")},c=e=>{const t={functional:void 0,marketing:void 0,statistics:void 0},n=Object.entries({...t,...e}).map((e=>{let[t,n]=e;return[t,(a=n,void 0===a?null:!1===a||"false"===String(a).toLowerCase()?"denied":"accepted")];var a}));return Object.fromEntries(n)},d="fremtind-cookie-consent",m=l.createContext(void 0),u=(e,t)=>{switch(t.type){case"SET_SHOW_CONSENT":return{...e,isOpen:t.payload};case"SET_SHOW_SETTINGS":return{...e,showSettings:t.payload};case"UPDATE_CONSENT":return{...e,consent:{...e.consent,...t.payload}};case"UPDATE_REQUIREMENTS":return{...e,requirement:{...e.requirement,...t.payload}};default:throw new Error("Unhandled action type: "+t.type)}},p=e=>{let{children:t,cookieAdapter:n,marketing:a,functional:r,statistics:i,cookieName:s=d,cookieDomain:c}=e;const p=(0,l.useMemo)((()=>{var e;return null!==(e=o({adapter:n,name:s}))&&void 0!==e?e:{marketing:null,functional:null,statistics:null}}),[n,s]),k=(0,l.useMemo)((()=>({marketing:null!=a&&a,functional:null!=r&&r,statistics:null!=i&&i})),[a,r,i]),[g,f]=l.useReducer(u,{isOpen:!1,showSettings:!1,requirement:k,consent:p});(0,l.useEffect)((()=>{((e,t)=>{if(t){const n=new Map(Object.entries(t)),a=Object.entries(e);for(const[e,t]of a)if(t&&null===n.get(e))return!0;return!1}return Object.values(e).some((e=>e))})(k,p)?f({type:"SET_SHOW_CONSENT",payload:!0}):p&&f({type:"UPDATE_CONSENT",payload:p})}),[k,p]);const E={state:g,dispatch:f,cookieName:s,cookieDomain:c};return l.createElement(m.Provider,{value:E},t)},k=()=>{const e=l.useContext(m);if(void 0===e)throw new Error("useCookieConsentState must be used within a CookieConsentProvider");return{dispatch:e.dispatch,cookieName:e.cookieName,cookieDomain:e.cookieDomain,...e.state}};var g=n(96820),f=n(34304),E=n(99861),v=n(3438),h=n(99581),b=n(56733),j=n(74016),y=n(88522);const S=e=>{let{defaultChecked:t,name:n,label:a,children:r}=e;return l.createElement(l.Fragment,null,l.createElement(y.X,{className:"jkl-cookie-consent-modal__checkbox",value:"True",name:n,defaultChecked:t},a),l.createElement("p",{className:"jkl-cookie-consent-modal__info-text"},r))},_=e=>{let{modalConfig:t,handleAccept:n}=e;const{consent:a,requirement:o}=k(),i=(0,l.useCallback)((e=>{e.preventDefault();const t={},a=Object.entries(o).map((e=>{let[t,n]=e;return n?t:void 0})).filter(Boolean),l=new FormData(e.target);a.forEach((e=>{t[e]="True"===l.get(e)})),n(c(t))}),[n,o]);return l.createElement(E.u_,Object.assign({component:"form"},t.modal,{onSubmit:i}),l.createElement(E.xB,null,l.createElement(E.r6,t.title,"Informasjonskapsler")),l.createElement(E.fe,null,l.createElement(b.QI,{className:"jkl-cookie-consent-modal__checklist"},l.createElement(j.O2,null,"Nettsidene skal fungere teknisk")),l.createElement("p",{className:"jkl-cookie-consent-modal__info-text"},"For at nettsidene skal fungere, må vi bruke tekniske informasjonskapsler. Denne kan derfor ikke slås av."),o.functional&&l.createElement(S,{name:"functional",label:"Tillat funksjonelle",defaultChecked:"accepted"===a.functional},"Funksjonelle informasjonskapsler lagrer opplysninger om din bruk av nettsidene og hvilke innstillinger du har gjort, slik at du kan få funksjonalitet tilpasset deg."),o.statistics&&l.createElement(S,{name:"statistics",label:"Tillat statistikk",defaultChecked:"accepted"===a.statistics},"Informasjonskapslene lagrer statistikk som hjelper oss med å forstå hvordan nettsidene blir brukt, slik at vi kan gjøre dem bedre og enklere å bruke."),o.marketing&&l.createElement(S,{name:"marketing",label:"Tillat personlig markedsføring",defaultChecked:"accepted"===a.marketing},"Dette gjør at vi kan gi deg mer relevant og tilpasset markedsføring, også gjennom våre samarbeidspartnere, på for eksempel nettsider, annonser og i sosiale medier.")),l.createElement(E.nK,null,l.createElement(r.KM,{"data-testid":"jkl-cookie-consent-godta"},"Godta")))},C=e=>{let{modalConfig:t,handleAccept:n}=e;const{dispatch:a,requirement:o}=k(),i=(0,l.useCallback)((e=>{e.preventDefault(),n("implicit")}),[n]);return l.createElement(E.u_,Object.assign({component:"form"},t.modal,{onSubmit:i}),l.createElement(E.xB,null,l.createElement(E.r6,t.title,"Vi bruker informasjonskapsler slik at:")),l.createElement(E.fe,null,l.createElement(b.QI,{className:"jkl-cookie-consent-modal__checklist"},l.createElement(j.O2,null,"Nettsidene skal fungere teknisk"),o.functional&&l.createElement(j.O2,null,"Nettsidene skal tilpasses din bruk, dine valg og dine innstillinger."),o.statistics&&l.createElement(j.O2,null,"Vi kan samle statistikk på hvordan nettsidene brukes og dermed kunne forbedre tjenestene våre."),o.marketing&&l.createElement(j.O2,null,"Vi kan gi deg personlig tilpasset innhold og relevante annonser, også gjennom våre samarbeidspartnere, på for eksempel nettsider og i sosiale medier."))),l.createElement(E.nK,null,l.createElement(r.KM,Object.assign({"data-testid":"jkl-cookie-consent-godta"},t.closeButton,{type:"submit"}),"Godta"),l.createElement(r.C9,{type:"button",onClick:()=>{a({type:"SET_SHOW_SETTINGS",payload:!0})}},"Innstillinger")))},N=e=>{let{onAccept:t,...n}=e;const{isOpen:a,requirement:r,showSettings:o}=k(),i=(0,l.useCallback)((e=>{t("implicit"===e?c(r):e)}),[t,r]),[s,d]=(0,f.d)({id:(0,v.M)("jkl-cookie-modal"),role:"alertdialog",title:"Informasjonskapsler"});return(0,l.useEffect)((()=>{s&&(a?s.show():s.hide())}),[s,a]),"undefined"==typeof document?null:h.createPortal(l.createElement(E.F0,Object.assign({},n,d.container,{"data-testautoid":"jkl-cookie-consent-modal"}),l.createElement(E.ZA,d.overlay),o?l.createElement(_,{modalConfig:d,handleAccept:i}):l.createElement(C,{modalConfig:d,handleAccept:i})),document.body)},O=e=>{let{blocking:t,onAccept:n,...a}=e;const{dispatch:r,consent:o,cookieName:i,cookieDomain:c}=k(),d=(0,g.z)(o);if((0,l.useEffect)((()=>{n&&o!==d&&n(o)}),[n,o,d]),"undefined"!=typeof navigator&&!navigator.cookieEnabled)return n&&n({functional:"denied",marketing:"denied",statistics:"denied"}),null;const m=e=>{const t=Object.fromEntries(Object.entries(e).filter((e=>{let[,t]=e;return null!=t}))),n={...o,...t};r({type:"UPDATE_CONSENT",payload:n}),r({type:"SET_SHOW_CONSENT",payload:!1}),s({consent:n,name:i,domain:c})};return t?l.createElement(N,Object.assign({},a,{onAccept:m})):null};const T=e=>{let{functional:t=!1,statistics:n=!1,marketing:a=!1}=e;const{openConsentModalWithDefaults:o}=(()=>{const e=l.useContext(m);if(void 0===e)throw new Error("useCookieConsent must be used within a CookieConsentProvider");return{openConsentModalWithSettings:()=>{e.dispatch({type:"SET_SHOW_CONSENT",payload:!0}),e.dispatch({type:"SET_SHOW_SETTINGS",payload:!0})},openConsentModalWithDefaults:()=>{e.dispatch({type:"SET_SHOW_CONSENT",payload:!0}),e.dispatch({type:"SET_SHOW_SETTINGS",payload:!1})},consents:e.state.consent}})(),{dispatch:i}=k();return(0,l.useEffect)((()=>{setTimeout((()=>{i({type:"SET_SHOW_CONSENT",payload:!1}),i({type:"SET_SHOW_SETTINGS",payload:!1}),i({type:"UPDATE_REQUIREMENTS",payload:{functional:t,statistics:n,marketing:a}})}),0)}),[i,t,n,a]),l.createElement(l.Fragment,null,l.createElement(r.C9,{"data-testid":"trigger-cookie-consent",onClick:o},"Informasjonskapsler"),l.createElement(O,{blocking:!0,onAccept:console.log}))},w={boolProps:[{prop:"Functional",defaultValue:!0},"Statistics","Marketing"]},x=e=>{let{boolValues:t}=e;const{0:n,1:a}=(0,l.useState)(!1);return(0,l.useEffect)((()=>{a(!0)}),[]),n?(s({consent:{functional:null,statistics:null,marketing:null},name:d,maxAge:-1}),l.createElement(p,{functional:null==t?void 0:t.Functional,statistics:null==t?void 0:t.Statistics,marketing:null==t?void 0:t.Marketing},l.createElement(T,{functional:null==t?void 0:t.Functional,statistics:null==t?void 0:t.Statistics,marketing:null==t?void 0:t.Marketing}))):null},D=e=>{let{boolValues:t}=e;return"\nconst Example = () => {\n    const { openConsentModalWithSettings } = useCookieConsent();\n    return (\n        <>\n            <TertiaryButton onClick={openConsentModalWithSettings}>\n                Informasjonskapsler\n            </TertiaryButton>\n            <CookieConsent blocking onAccept={handleUserChoices} />\n        </>\n    );\n};\n\nexport const App = () => {\n    return (\n        <CookieConsentProvider\n            functional={"+(null==t?void 0:t.Functional)+"}\n            statistics={"+(null==t?void 0:t.Statistics)+"}\n            marketing={"+(null==t?void 0:t.Marketing)+"}\n        >\n            <Example />\n        </CookieConsentProvider>\n    );\n};\n"};function M(e){const t=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",h2:"h2",pre:"pre",code:"code"},(0,a.ah)(),e.components),{Ingress:n,ComponentExample:r}=t;return r||I("ComponentExample",!0),n||I("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Informasjonskapselsamtykke informerer om bruken av informasjonskapsler på nettstedet og lar brukeren velge bort de\nsom ikke er nødvendige for at siden skal fungere.")),"\n",l.createElement(r,{title:"CookieConsent",component:x,knobs:w,codeExample:D}),"\n",l.createElement(t.p,null,"Vi anser det som at informasjonskapsler kan deles opp i 3 formål, med hver sine hensikter og lovverk:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Funksjonelle"),"\n",l.createElement(t.li,null,"Markedsføring"),"\n",l.createElement(t.li,null,"Statistikk"),"\n"),"\n",l.createElement(t.p,null,"Et kjernekonsept er at man ",l.createElement(t.strong,null,"ikke skal spørre om mer enn man har behov for"),". I praksis\nbetyr dette at man eksplisitt setter hvilke formål man vil inhente et samtykke for, og man blir ikke spurt om andre\nformål enn disse."),"\n",l.createElement(t.p,null,"Foreløpig har Jøkul kun en blokkerende modal, hvor brukeren må ta et aktivt valg for å komme videre. Modalen vil ikke vises dersom ingen av de valgfrie kategoriene er i bruk."),"\n",l.createElement(t.h2,null,"Lagring og bruk av samtykker"),"\n",l.createElement(t.p,null,"Når brukeren lukker modalen vil komponenten lagre en cookie med en utløpstid på 120 dager, hvor det defineres hvorvidt et consent\ner tatt stilling til:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-JSON"},'{\n    "marketing":null,         // ikke tatt stilling til\n    "functional":"accepted",  // godtatt\n    "statistics":"denied"     // avslått\n}\n')),"\n",l.createElement(t.p,null,"Det er opp til hvert enkelt nettsted å ",l.createElement(t.strong,null,"sørge for at brukerens valg faktisk respekteres"),". Her er et eksempel:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-tsx"},'<CookieConsent\n    blocking\n    onAccept={(v) => {\n        if (v.statistics === "accepted") {\n            mixpanel.opt_in_tracking();\n            saveUserState(user, { statistics: true });\n        } else if (v.statistics === "denied") {\n            mixpanel.opt_out_tracking();\n            saveUserState(user, { statistics: false });\n        }\n    }}\n/>\n')),"\n",l.createElement(t.h2,null,"Tilpassninger av cookien som lagres"),"\n",l.createElement(t.p,null,"Dersom du har et behov for å styre navnet på cookien som blir lagret kan du gjøre dette via ",l.createElement(t.code,null,"cookieName")," prop på ",l.createElement(t.code,null,"CookieConsentProvider"),".\nDefault-verdien dersom ingenting angis er ",l.createElement(t.code,null,'"fremtind-cookie-consent"'),"."),"\n",l.createElement(t.p,null,"Ønsker du kontroll over hvilket domene cookien settes for kan du gjøre dette via ",l.createElement(t.code,null,"cookieDomain")," prop på ",l.createElement(t.code,null,"CookieConsentProvider"),".\nMerk at denne verdien vil brukes direkte i ",l.createElement(t.code,null,"domain=<domain>;")," delen av cookien som lagres.\nDet er ditt ansvar at det som sendes inn er gyldig og at du bruker en verdi som gir deg tilgang til å lese cookien senere.\nDersom det ikke angis noen custom verdi brukes det domenet siden er på og dette er mest sannsynlig det du ønsker."))}var A=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(M,e)):M(e)};function I(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var P=n(72285),W=n(22756),F=n(95573),R=n(1634);const H=e=>{let{pageContext:t}=e;return l.createElement(W.p,{title:t.title})},U=e=>{let{location:t,data:n,pageContext:a,children:r}=e;const{frontmatter:o}=n.page,{types:i}=a;return l.createElement(R.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(F.M1,Object.assign({},o,{versions:a.versions})),l.createElement(F.w5,o),r,i&&l.createElement(P.l,{types:i}))};function V(e){return l.createElement(U,e,l.createElement(A,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var a=n(58820),l=n(63571),r=n(87505),o=n(70079),i=n(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:l}=t,r=n>0,o=a-n>l;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var a},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(d):[],r=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,a,l,r,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(r=l.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),a.length>0&&o.createElement(p,{props:a}),r.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:r})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var a=n(26372),l=n.n(a),r=n(49597),o=n(70079),i=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(r.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var a=n(35250),l=n(26372),r=n.n(l);const o=e=>{let{className:t,density:n,id:l,...o}=e;return(0,a.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,id:l,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return c}});var a=n(35250),l=n(68998),r=n(1386),o=n(26372),i=n.n(o),s=n(70079);const c=e=>{let{children:t,title:n,className:o,startExpanded:c=!1,onClick:d,id:m,...u}=e;const[p,k]=(0,s.useState)(c),[g]=(0,s.useState)((()=>c)),{detailsRef:f,summaryRef:E,contentRef:v,onSummaryClick:h}=(0,r.E)({onOpenChange:(e,t)=>{k(e),d&&d(t,e)},isExpanded:g});return(0,a.jsxs)("details",{"data-testid":"jkl-accordion-item",...u,className:i()("jkl-accordion-item",o),ref:f,id:m,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:E,children:[n,(0,a.jsx)(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:v,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var a=n(70079),l=n(41699),r=n(65174),o=n(6914),i=n(82546),s=n(39126),c=n(66169),d=n(94509);const m=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:u,rows:p,verticalAlign:k,...g}=e;return a.createElement(l.i,{fullWidth:!0,...g,ref:t},n&&a.createElement(o.R,{srOnly:!0},n),a.createElement(s.s,null,a.createElement(d.S,null,m.map(((e,t)=>a.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(r.R,null,0===p.length&&u&&a.createElement(d.S,null,a.createElement(i.p,{colSpan:m.length},u)),p.map(((e,t)=>a.createElement(d.S,{key:t},e.map(((e,t)=>a.createElement(i.p,{key:t,"data-th":m[t],verticalAlign:k},e))))))))}));m.displayName="DataTable"}}]);