"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[8992],{23443:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return F},Head:function(){return P},default:function(){return W}});var r=n(47160),a=n(70079),l=n(64592);const o="fremtind-cookie-consent",i=e=>{const t=function(e){if(void 0===e&&(e=o),"undefined"==typeof document)return;const t=document.cookie.split(";").map((e=>e.trim().split("="))).find((t=>t[0]===e));return t||void 0}();if(t){return JSON.parse(t[1])}if(e)return e()},s=function(e,t,n){void 0===t&&(t=10368e3),void 0===n&&(n=o);const r=[];r.push(n+"="+JSON.stringify(e)),r.push("max-age="+t),r.push("SameSite=Lax"),document.cookie=r.join(";")},c=e=>{const t={functional:void 0,marketing:void 0,statistics:void 0},n=Object.entries({...t,...e}).map((e=>{let[t,n]=e;return[t,(r=n,void 0===r?null:!1===r||"false"===String(r).toLowerCase()?"denied":"accepted")];var r}));return Object.fromEntries(n)},u=a.createContext(void 0),d=(e,t)=>{switch(t.type){case"SET_SHOW_CONSENT":return{...e,isOpen:t.payload};case"SET_SHOW_SETTINGS":return{...e,showSettings:t.payload};case"UPDATE_CONSENT":return{...e,consent:{...e.consent,...t.payload}};case"UPDATE_REQUIREMENTS":return{...e,requirement:{...e.requirement,...t.payload}};default:throw new Error("Unhandled action type: "+t.type)}},m=e=>{let{children:t,cookieAdapter:n,marketing:r,functional:l,statistics:o}=e;const s=(0,a.useMemo)((()=>{var e;return null!==(e=i(n))&&void 0!==e?e:{marketing:null,functional:null,statistics:null}}),[n]),c=(0,a.useMemo)((()=>({marketing:null!=r&&r,functional:null!=l&&l,statistics:null!=o&&o})),[r,l,o]),[m,p]=a.useReducer(d,{isOpen:!1,showSettings:!1,requirement:c,consent:s});(0,a.useEffect)((()=>{((e,t)=>{if(t){const n=new Map(Object.entries(t)),r=Object.entries(e);for(const[e,t]of r)if(t&&null===n.get(e))return!0;return!1}return Object.values(e).some((e=>e))})(c,s)?p({type:"SET_SHOW_CONSENT",payload:!0}):s&&p({type:"UPDATE_CONSENT",payload:s})}),[c,s]);const k={state:m,dispatch:p};return a.createElement(u.Provider,{value:k},t)},p=()=>{const e=a.useContext(u);if(void 0===e)throw new Error("useCookieConsentState must be used within a CookieConsentProvider");return{dispatch:e.dispatch,...e.state}};var k=n(96820),f=n(88522),g=n(56733),E=n(74016),v=n(34304),h=n(99861),b=n(3438),y=n(99581);const j=e=>{let{defaultChecked:t,name:n,label:r,children:l}=e;return a.createElement(a.Fragment,null,a.createElement(f.X,{className:"jkl-cookie-consent-modal__checkbox",value:"True",name:n,defaultChecked:t},r),a.createElement("p",{className:"jkl-cookie-consent-modal__info-text"},l))},S=e=>{let{onAccept:t,...n}=e;const{consent:r,dispatch:o,isOpen:i,requirement:s,showSettings:u}=p(),d=(0,a.useCallback)((e=>{t("implicit"===e?c(s):e)}),[t,s]),m=(0,a.useCallback)((e=>{e.preventDefault();const t={},n=Object.entries(s).map((e=>{let[t,n]=e;return n?t:void 0})).filter(Boolean),r=new FormData(e.target);n.forEach((e=>{t[e]="True"===r.get(e)})),d(c(t))}),[d,s]),k=(0,b.M)("jkl-cookie-modal"),[f,{container:S,overlay:_,modal:C,title:N,closeButton:O}]=(0,v.d)({id:k,role:"alertdialog",title:"Informasjonskapsler"});return(0,a.useEffect)((()=>{f&&(i?f.show():f.hide())}),[f,i]),"undefined"==typeof document?null:y.createPortal(a.createElement(h.F0,Object.assign({},n,S,{"data-testautoid":"jkl-cookie-consent-modal"}),a.createElement(h.ZA,_),u?a.createElement(h.u_,Object.assign({component:"form"},C,{onSubmit:m}),a.createElement(h.xB,null,a.createElement(h.r6,N,"Informasjonskapsler")),a.createElement(h.fe,null,a.createElement(g.QI,{className:"jkl-cookie-consent-modal__checklist"},a.createElement(E.O2,null,"Nettsidene skal fungere teknisk")),a.createElement("p",{className:"jkl-cookie-consent-modal__info-text"},"For at nettsidene skal fungere, må vi bruke tekniske informasjonskapsler. Denne kan derfor ikke slås av."),s.functional&&a.createElement(j,{name:"functional",label:"Tillat funksjonelle",defaultChecked:"accepted"===r.functional},"Funksjonelle informasjonskapsler lagrer opplysninger om din bruk av nettsidene og hvilke innstillinger du har gjort, slik at du kan få funksjonalitet tilpasset deg."),s.statistics&&a.createElement(j,{name:"statistics",label:"Tillat statistikk",defaultChecked:"accepted"===r.statistics},"Informasjonskapslene lagrer statistikk som hjelper oss med å forstå hvordan nettsidene blir brukt, slik at vi kan gjøre dem bedre og enklere å bruke."),s.marketing&&a.createElement(j,{name:"marketing",label:"Tillat personlig markedsføring",defaultChecked:"accepted"===r.marketing},"Dette gjør at vi kan gi deg mer relevant og tilpasset markedsføring, også gjennom våre samarbeidspartnere, på for eksempel nettsider, annonser og i sosiale medier.")),a.createElement(h.nK,null,a.createElement(l.KM,{"data-testid":"jkl-cookie-consent-godta"},"Godta"))):a.createElement(h.u_,C,a.createElement(h.xB,null,a.createElement(h.r6,N,"Vi bruker informasjonskapsler slik at:")),a.createElement(h.fe,null,a.createElement(g.QI,{className:"jkl-cookie-consent-modal__checklist"},a.createElement(E.O2,null,"Nettsidene skal fungere teknisk"),s.functional&&a.createElement(E.O2,null,"Nettsidene skal tilpasses din bruk, dine valg og dine innstillinger."),s.statistics&&a.createElement(E.O2,null,"Vi kan samle statistikk på hvordan nettsidene brukes og dermed kunne forbedre tjenestene våre."),s.marketing&&a.createElement(E.O2,null,"Vi kan gi deg personlig tilpasset innhold og relevante annonser, også gjennom våre samarbeidspartnere, på for eksempel nettsider og i sosiale medier."))),a.createElement(h.nK,null,a.createElement(l.KM,Object.assign({"data-testid":"jkl-cookie-consent-godta"},O,{onClick:()=>{d("implicit")}}),"Godta"),a.createElement(l.C9,{onClick:()=>{o({type:"SET_SHOW_SETTINGS",payload:!0})}},"Innstillinger")))),document.body)},_=e=>{let{blocking:t,onAccept:n,...r}=e;const{dispatch:l,consent:o}=p(),i=(0,k.z)(o);if((0,a.useEffect)((()=>{n&&o!==i&&n(o)}),[n,o,i]),"undefined"!=typeof navigator&&!navigator.cookieEnabled)return n&&n({functional:"denied",marketing:"denied",statistics:"denied"}),null;const c=e=>{const t=Object.fromEntries(Object.entries(e).filter((e=>{let[,t]=e;return null!=t}))),n={...o,...t};l({type:"UPDATE_CONSENT",payload:n}),l({type:"SET_SHOW_CONSENT",payload:!1}),s(n)};return t?a.createElement(S,Object.assign({},r,{onAccept:c})):null};const C=e=>{let{functional:t=!1,statistics:n=!1,marketing:r=!1}=e;const{openConsentModalWithSettings:o}=(()=>{const e=a.useContext(u);if(void 0===e)throw new Error("useCookieConsent must be used within a CookieConsentProvider");return{openConsentModalWithSettings:()=>{e.dispatch({type:"SET_SHOW_CONSENT",payload:!0}),e.dispatch({type:"SET_SHOW_SETTINGS",payload:!0})},consents:e.state.consent}})(),{dispatch:i}=p();return(0,a.useEffect)((()=>{setTimeout((()=>{i({type:"SET_SHOW_CONSENT",payload:!1}),i({type:"SET_SHOW_SETTINGS",payload:!1}),i({type:"UPDATE_REQUIREMENTS",payload:{functional:t,statistics:n,marketing:r}})}),0)}),[i,t,n,r]),a.createElement(a.Fragment,null,a.createElement(l.C9,{"data-testid":"trigger-cookie-consent",onClick:o},"Informasjonskapsler"),a.createElement(_,{blocking:!0,onAccept:console.log}))},N={boolProps:["Functional","Statistics","Marketing"]},O=e=>{let{boolValues:t}=e;const{0:n,1:r}=(0,a.useState)(!1);return(0,a.useEffect)((()=>{r(!0)}),[]),n?(s({functional:null,statistics:null,marketing:null},-1),a.createElement(m,{functional:null==t?void 0:t.Functional,statistics:null==t?void 0:t.Statistics,marketing:null==t?void 0:t.Marketing},a.createElement(C,{functional:null==t?void 0:t.Functional,statistics:null==t?void 0:t.Statistics,marketing:null==t?void 0:t.Marketing}))):null},w=e=>{let{boolValues:t}=e;return"\nconst Example = () => {\n    const { openConsentModalWithSettings } = useCookieConsent();\n    return (\n        <>\n            <TertiaryButton onClick={openConsentModalWithSettings}>\n                Informasjonskapsler\n            </TertiaryButton>\n            <CookieConsent blocking onAccept={handleUserChoices} />\n        </>\n    );\n};\n\nexport const App = () => {\n    return (\n        <CookieConsentProvider\n            functional={"+(null==t?void 0:t.Functional)+"}\n            statistics={"+(null==t?void 0:t.Statistics)+"}\n            marketing={"+(null==t?void 0:t.Marketing)+"}\n        >\n            <Example />\n        </CookieConsentProvider>\n    );\n};\n"};function T(e){const t=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",h2:"h2",pre:"pre",code:"code"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:l}=t;return l||M("ComponentExample",!0),n||M("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"Informasjonskapselsamtykke informerer om bruken av informasjonskapsler på nettstedet og lar brukeren velge bort de\nsom ikke er nødvendige for at siden skal fungere.")),"\n",a.createElement(l,{title:"CookieConsent",component:O,knobs:N,codeExample:w}),"\n",a.createElement(t.p,null,"Vi anser det som at informasjonskapsler kan deles opp i 3 formål, med hver sine hensikter og lovverk:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Funksjonelle"),"\n",a.createElement(t.li,null,"Markedsføring"),"\n",a.createElement(t.li,null,"Statistikk"),"\n"),"\n",a.createElement(t.p,null,"Et kjernekonsept er at man ",a.createElement(t.strong,null,"ikke skal spørre om mer enn man har behov for"),". I praksis\nbetyr dette at man eksplisitt setter hvilke formål man vil inhente et samtykke for, og man blir ikke spurt om andre\nformål enn disse."),"\n",a.createElement(t.p,null,"Foreløpig har Jøkul kun en blokkerende modal, hvor brukeren må ta et aktivt valg for å komme videre. Modalen vil ikke vises dersom ingen av de valgfrie kategoriene er i bruk."),"\n",a.createElement(t.h2,null,"Lagring og bruk av samtykker"),"\n",a.createElement(t.p,null,"Når brukeren lukker modalen vil komponenten lagre en cookie med en utløpstid på 120 dager, hvor det defineres hvorvidt et consent\ner tatt stilling til:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-JSON"},'{\n    "marketing":null,         // ikke tatt stilling til\n    "functional":"accepted",  // godtatt\n    "statistics":"denied"     // avslått\n}\n')),"\n",a.createElement(t.p,null,"Det er opp til hvert enkelt nettsted å ",a.createElement(t.strong,null,"sørge for at brukerens valg faktisk respekteres"),". Her er et eksempel:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-tsx"},'<CookieConsent\n    blocking\n    onAccept={(v) => {\n        if (v.statistics === "accepted") {\n            mixpanel.opt_in_tracking();\n            saveUserState(user, { statistics: true });\n        } else if (v.statistics === "denied") {\n            mixpanel.opt_out_tracking();\n            saveUserState(user, { statistics: false });\n        }\n    }}\n/>\n')))}var x=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(T,e)):T(e)};function M(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var R=n(72285),A=n(22756),I=n(95573),H=n(1634);const P=e=>{let{pageContext:t}=e;return a.createElement(A.p,{title:t.title})},F=e=>{let{location:t,data:n,pageContext:r,children:l}=e;const{frontmatter:o}=n.page,{types:i}=r;return a.createElement(H.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(I.M1,Object.assign({},o,{versions:r.versions})),a.createElement(I.w5,o),l,i&&a.createElement(R.l,{types:i}))};function W(e){return a.createElement(F,e,a.createElement(x,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var r=n(78217),a=n(76802),l=n(87505),o=n(70079),i=n(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},u=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,o=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},m=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(u):[],l=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,a,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(l=a.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),r.length>0&&o.createElement(p,{props:r}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(26372),a=n.n(r),l=n(49597),o=n(70079),i=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(26372),a=n.n(r),l=n(70079);const o=e=>{let{className:t,density:n,...r}=e;return l.createElement("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,...r})}},76802:function(e,t,n){n.d(t,{Q:function(){return s}});var r=n(53484),a=n(26372),l=n.n(a),o=n(70079);const i=e=>{let{onOpenChange:t,startExpanded:n}=e;const r=(0,o.useRef)(null),a=(0,o.useRef)(null),l=(0,o.useRef)(null),i=(0,o.useRef)(null),{0:s,1:c}=(0,o.useState)(!1),{0:u,1:d}=(0,o.useState)(!1);(0,o.useEffect)((()=>{r.current&&(r.current.open=n)}),[]);const m=e=>{r.current&&a.current&&(r.current.open=e,i.current=null,c(!1),d(!1),r.current.style.overflow="",r.current.style.height="")};return{detailsRef:r,summaryRef:a,contentRef:l,onSummaryClick:e=>{e.preventDefault(),r.current&&a.current&&(r.current.style.overflow="hidden",s||!r.current.open?(e=>{r.current&&a.current&&(r.current.style.height="".concat(r.current.offsetHeight,"px"),r.current.open=!0,requestAnimationFrame((()=>{if(r.current&&a.current&&l.current){d(!0),t(!0,e);const n=r.current.offsetHeight,o=a.current.offsetHeight+l.current.offsetHeight;i.current&&i.current.cancel(),r.current.animate&&(i.current=r.current.animate({height:["".concat(n,"px"),"".concat(o,"px")]},{duration:150,easing:"ease"}),i.current.onfinish=()=>m(!0),i.current.oncancel=()=>d(!1))}})))})(e):(u||r.current.open)&&(e=>{if(r.current&&a.current){c(!0),t(!1,e);const n=r.current.offsetHeight,l=a.current.offsetHeight;i.current&&i.current.cancel(),r.current.animate&&(i.current=r.current.animate({height:["".concat(n,"px"),"".concat(l,"px")]},{duration:150,easing:"ease"}),i.current.onfinish=()=>m(!1),i.current.oncancel=()=>c(!1))}})(e))}}},s=e=>{let{children:t,title:n,className:a,startExpanded:s=!1,onClick:c,...u}=e;const{0:d,1:m}=(0,o.useState)(s),{detailsRef:p,summaryRef:k,contentRef:f,onSummaryClick:g}=i({onOpenChange:(e,t)=>{m(e),c&&c(t,e)},startExpanded:s});return o.createElement("details",{"data-testid":"jkl-accordion-item",...u,className:l()("jkl-accordion-item",a),ref:p},o.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:g,ref:k},n,o.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!d,bold:d})),o.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:f},o.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var r=n(70079),a=n(41699),l=n(65174),o=n(6914),i=n(82546),s=n(39126),c=n(66169),u=n(94509);const d=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:m,rows:p,verticalAlign:k,...f}=e;return r.createElement(a.i,{fullWidth:!0,...f,ref:t},n&&r.createElement(o.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(u.S,null,d.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.R,null,0===p.length&&m&&r.createElement(u.S,null,r.createElement(i.p,{colSpan:d.length},m)),p.map(((e,t)=>r.createElement(u.S,{key:t},e.map(((e,t)=>r.createElement(i.p,{key:t,"data-th":d[t],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);