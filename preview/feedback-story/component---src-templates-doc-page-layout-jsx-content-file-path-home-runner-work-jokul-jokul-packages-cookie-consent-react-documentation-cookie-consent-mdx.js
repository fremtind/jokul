"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[8992],{55550:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return A},Head:function(){return R},default:function(){return F}});var o=t(64717),a=t(92379),r=t(36976);const l=e=>{let{adapter:n,name:t}=e;const o=(e=>{if("undefined"==typeof document)return;const n=document.cookie.split(";").map((e=>e.trim().split("="))).find((n=>n[0]===e));return n||void 0})(t);if(o){return JSON.parse(o[1])}if(n)return n()},i=10368e3,s=e=>{let{consent:n,maxAge:t=i,name:o,domain:a,path:r}=e;document.cookie=[o+"="+JSON.stringify(n),"max-age="+t,"SameSite=Lax",!!a&&"domain="+a,!!r&&"path="+r].filter((e=>e)).join(";")},c=e=>void 0===e?null:!1===e||"false"===String(e).toLowerCase()?"denied":"accepted",d=(e,n)=>({functional:n.functional?c(e.functional):void 0,statistics:n.statistics?c(e.statistics):void 0,marketing:n.marketing?c(e.marketing):void 0}),m="fremtind-cookie-consent",u=a.createContext(void 0),p=e=>{let{children:n,cookieAdapter:t,marketing:o,functional:r,statistics:i,cookieName:s=m,cookieDomain:c,cookiePath:d}=e;const{0:p,1:k}=(0,a.useState)((()=>Date.now())),g=(0,a.useMemo)((()=>(e=>{let{marketing:n,functional:t,statistics:o}=e;return Object.assign({},n&&{marketing:n},t&&{functional:t},o&&{statistics:o})})({marketing:o,functional:r,statistics:i})),[o,r,i]),f=(0,a.useMemo)((()=>{var e;return null!==(e=l({adapter:t,name:s}))&&void 0!==e?e:{marketing:null,functional:null,statistics:null}}),[t,s,p]),{0:v,1:E}=(0,a.useState)((()=>((e,n)=>{if(n){const t=new Map(Object.entries(n)),o=Object.entries(e);for(const[e,n]of o)if(n&&null===t.get(e))return!0;return!1}return Object.values(e).some((e=>e))})(g,f)));return a.createElement(u.Provider,{value:{isOpen:v,setIsOpen:E,updateCurrentConsents:()=>k(Date.now()),requirement:g,currentConsent:f,cookieName:s,cookieDomain:c,cookiePath:d}},n)};t(78311);var k=t(99767),g=t(30061),f=t(61205),v=t(95295),E=t(74124);const b=e=>{let{defaultChecked:n,name:t,label:o,children:r}=e;return a.createElement(a.Fragment,null,a.createElement(E.X,{className:"jkl-cookie-consent-modal__checkbox",value:"true",name:t,defaultChecked:n},o),a.createElement("p",{className:"jkl-cookie-consent-modal__info-text"},r))},h=["blocking","onAccept"],j=e=>{let{blocking:n,onAccept:t}=e,o=(0,k.Z)(e,h);const{currentConsent:l,cookieName:i,cookieDomain:c,cookiePath:m,requirement:p,isOpen:E,setIsOpen:j,updateCurrentConsents:y}=(()=>{const e=a.useContext(u);if(void 0===e)throw new Error("CookieConsent must be used within a CookieConsentProvider");return e})(),[C,w]=(0,g.d)({id:"jkl-cookie-modal-"+(0,a.useId)(),role:n?"alertdialog":"dialog",title:"Informasjonskapsler"});if((0,a.useEffect)((()=>{E?null==C||C.show():null==C||C.hide()}),[C,E]),(0,a.useEffect)((()=>{const e=()=>j(!1);return null==C||C.on("hide",e),()=>{null==C||C.off("hide",e)}}),[C,j]),"undefined"==typeof document)return null;if("undefined"!=typeof navigator&&!navigator.cookieEnabled)return t&&t({functional:"denied",marketing:"denied",statistics:"denied"}),null;const N=function(e){void 0===e&&(e=d({functional:!0,statistics:!0,marketing:!0},p));const n=Object.fromEntries(Object.entries(e).filter((e=>{let[,n]=e;return void 0!==n}))),o=Object.assign({},l,n);s({consent:o,name:i,domain:c,path:m}),y(),null==t||t(o),null==C||C.hide()};return v.createPortal(a.createElement(f.F0,Object.assign({},w.container,o,{"data-cookie-consent-open":E}),a.createElement(f.ZA,w.overlay),a.createElement(f.u_,Object.assign({component:"form"},w.modal,{onSubmit:e=>{e.preventDefault();const n=new FormData(e.currentTarget),t=d({functional:"true"===n.get("functional"),statistics:"true"===n.get("statistics"),marketing:"true"===n.get("marketing")},p);N(t)}}),a.createElement(f.xB,null,a.createElement(f.r6,w.title,"Velg informasjonskapsler")),a.createElement(f.fe,null,a.createElement("p",null,"For at nettsidene skal fungere må vi bruke tekniske informasjonskaplser. Disse lagres derfor uten samtykke."),p.functional&&a.createElement(b,{name:"functional",label:"Tillat funksjonelle",defaultChecked:"accepted"===l.functional,key:"functional-"+l.functional},"Funksjonelle informasjonskapsler lagrer opplysninger om din bruk av nettsidene og hvilke innstillinger du har gjort, slik at du kan få funksjonalitet tilpasset deg."),p.statistics&&a.createElement(b,{name:"statistics",label:"Tillat statistikk",defaultChecked:"accepted"===l.statistics,key:"statistics-"+l.statistics},"Informasjonskapslene lagrer statistikk som hjelper oss med å forstå hvordan nettsidene blir brukt, slik at vi kan gjøre dem bedre og enklere å bruke."),p.marketing&&a.createElement(b,{name:"marketing",label:"Tillat personlig markedsføring",defaultChecked:"accepted"===l.marketing,key:"marketing-"+l.marketing},"Dette gjør at vi kan gi deg mer relevant og tilpasset markedsføring, også gjennom våre samarbeidspartnere, på for eksempel nettsider, annonser og i sosiale medier.")),a.createElement(f.nK,null,a.createElement(r.kq,{"data-testid":"jkl-cookie-consent-godta-alle",type:"button",onClick:()=>N()},"Godta alle"),a.createElement(r.kq,{"data-testid":"jkl-cookie-consent-godta",type:"submit"},"Godta mine valg")))),document.body)},y=e=>{let{blocking:n}=e;const{openConsentModal:t,consents:o}=(()=>{const e=(0,a.useContext)(u);if(void 0===e)throw new Error("useCookieConsent must be used within a CookieConsentProvider");return{openConsentModal:()=>{e.setIsOpen(!0)},consents:e.currentConsent}})();return(0,a.useEffect)((()=>{console.log("Current consents:",o)}),[o]),a.createElement(a.Fragment,null,a.createElement(r.C9,{"data-testid":"trigger-cookie-consent",onClick:t},"Informasjonskapsler"),a.createElement(j,{blocking:n,onAccept:e=>console.log("Updated consents: ",e)}))},C={boolProps:[{prop:"Blocking",defaultValue:!0},{prop:"Functional",defaultValue:!0},"Statistics","Marketing"]},w=e=>{let{boolValues:n}=e;const{0:t,1:o}=(0,a.useState)(!1);return(0,a.useEffect)((()=>{s({consent:{functional:"denied",statistics:"denied",marketing:"denied"},name:"demo-consent-cookie"}),o(!0)}),[o,n]),t?a.createElement(p,{cookieName:"demo-consent-cookie",cookiePath:"/",functional:null==n?void 0:n.Functional,statistics:null==n?void 0:n.Statistics,marketing:null==n?void 0:n.Marketing},a.createElement(y,{blocking:(null==n?void 0:n.Blocking)||!1})):null},N=e=>{let{boolValues:n}=e;return'\nconst Example: FC<{ blocking: boolean }> = ({ blocking }) => {\n    const { openConsentModal, consents } = useCookieConsent();\n\n    useEffect(() => {\n        console.log("Current consents:", consents);\n    }, [consents]);\n\n    return (\n        <>\n            <TertiaryButton\n                data-testid="trigger-cookie-consent"\n                onClick={openConsentModal}\n            >\n                Informasjonskapsler\n            </TertiaryButton>\n            <CookieConsent\n                blocking={blocking}\n                onAccept={(newConsents) =>\n                    console.log("Updated consents: ", newConsents)\n                }\n            />\n        </>\n    );\n};\n\nexport const App = () => {\n    const [hasResetCookie, setHasResetCookie] = useState(false);\n    useEffect(() => {\n        // Write a cookie to avoid having the modal pop up on first render\n        setConsentCookie({\n            consent: {\n                functional: "denied",\n                statistics: "denied",\n                marketing: "denied",\n            },\n            name: "demo-consent-cookie",\n        });\n        setHasResetCookie(true);\n    }, [setHasResetCookie, boolValues]);\n\n    if (!hasResetCookie) {\n        return null;\n    }\n\n    return (\n        <CookieConsentProvider\n            cookieName="demo-consent-cookie"\n            functional={'+(null==n?void 0:n.Functional)+"}\n            statistics={"+(null==n?void 0:n.Statistics)+"}\n            marketing={"+(null==n?void 0:n.Marketing)+"}\n        >\n            <Example blocking={"+((null==n?void 0:n.Blocking)||!1)+"} />\n        </CookieConsentProvider>\n    );\n};\n"};function O(e){const n=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",h2:"h2",pre:"pre",code:"code",em:"em"},(0,o.ah)(),e.components),{Ingress:t,ComponentExample:r}=n;return r||x("ComponentExample",!0),t||x("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(t,null,a.createElement(n.p,null,"Informasjonskapselsamtykke informerer om bruken av informasjonskapsler på\nnettstedet og lar brukeren velge bort de som ikke er nødvendige for at siden\nskal fungere.")),"\n",a.createElement(r,{title:"CookieConsent",component:w,knobs:C,codeExample:N}),"\n",a.createElement(n.p,null,"Vi anser det som at informasjonskapsler kan deles opp i 3 formål, med hver sine hensikter og lovverk:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Funksjonelle"),"\n",a.createElement(n.li,null,"Markedsføring"),"\n",a.createElement(n.li,null,"Statistikk"),"\n"),"\n",a.createElement(n.p,null,"Et kjernekonsept er at man ",a.createElement(n.strong,null,"ikke skal spørre om mer enn man har behov for"),". I praksis\nbetyr dette at man eksplisitt setter hvilke formål man vil inhente et samtykke for, og man blir ikke spurt om andre\nformål enn disse."),"\n",a.createElement(n.p,null,"Foreløpig har Jøkul kun en blokkerende modal, hvor brukeren må ta et aktivt valg for å komme videre. Modalen vil ikke vises dersom ingen av de valgfrie kategoriene er i bruk."),"\n",a.createElement(n.h2,null,"Lagring og bruk av samtykker"),"\n",a.createElement(n.p,null,"Når brukeren lukker modalen vil komponenten lagre en cookie med en utløpstid på 120 dager, hvor det defineres hvorvidt et consent\ner tatt stilling til:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-JSON"},'{\n    "marketing":null,         // ikke tatt stilling til\n    "functional":"accepted",  // godtatt\n    "statistics":"denied"     // avslått\n}\n')),"\n",a.createElement(n.p,null,"Det er opp til hvert enkelt nettsted å ",a.createElement(n.strong,null,"sørge for at brukerens valg faktisk respekteres"),". Her er et eksempel:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-tsx"},'<CookieConsent\n    blocking\n    onAccept={(v) => {\n        if (v.statistics === "accepted") {\n            mixpanel.opt_in_tracking();\n            saveUserState(user, { statistics: true });\n        } else if (v.statistics === "denied") {\n            mixpanel.opt_out_tracking();\n            saveUserState(user, { statistics: false });\n        }\n    }}\n/>\n')),"\n",a.createElement(n.h2,null,"Tilpassninger av cookien som lagres"),"\n",a.createElement(n.p,null,"Dersom du har et behov for å styre navnet på cookien som blir lagret kan du gjøre dette via ",a.createElement(n.code,null,"cookieName")," prop på ",a.createElement(n.code,null,"CookieConsentProvider"),".\nDefault-verdien dersom ingenting angis er ",a.createElement(n.code,null,'"fremtind-cookie-consent"'),"."),"\n",a.createElement(n.p,null,"Ønsker du kontroll over hvilket domene cookien settes for kan du gjøre dette via ",a.createElement(n.code,null,"cookieDomain")," prop på ",a.createElement(n.code,null,"CookieConsentProvider"),".\nMerk at denne verdien vil brukes direkte i ",a.createElement(n.code,null,"domain=<domain>;")," delen av cookien som lagres.\nDet er ditt ansvar at det som sendes inn er gyldig og at du bruker en verdi som gir deg tilgang til å lese cookien senere.\nDersom det ikke angis noen custom verdi brukes det domenet siden er på og dette er mest sannsynlig det du ønsker."),"\n",a.createElement(n.p,null,"Du kan også styre hvilken path cookien lagres på via ",a.createElement(n.code,null,"cookiePath")," prop. Dette\npåvirker hvilke URLer cookien kan leses fra. Hvis applikasjonen din for eksempel\nhar en side på URLen ",a.createElement(n.em,null,"/app/forsikringer/11231")," vil du på denne siden ha tilgang til\ncookies som er lagret under ",a.createElement(n.em,null,"/"),", ",a.createElement(n.em,null,"/app"),", ",a.createElement(n.em,null,"/app/forsikringer")," og ",a.createElement(n.em,null,"/app/forsikringer/11231"),".\nEn side som ligger på ",a.createElement(n.em,null,"/app")," vil derimot bare kunne lese cookies med path satt til\n",a.createElement(n.em,null,"/")," eller ",a.createElement(n.em,null,"/app"),". Dersom du ikke angir noen ",a.createElement(n.code,null,"cookiePath")," gjør browseren det den\nmener er riktig. Hvis du har dype stier i applikasjonen din er det ikke sikkert\ndet er dette du ønsker, og i så fall bør du sette verdien til det som er roten\nfor din applikasjon (feks ",a.createElement(n.em,null,"/app")," eller ",a.createElement(n.em,null,"/"),")."))}var _=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?a.createElement(n,e,a.createElement(O,e)):O(e)};function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var S=t(75482),P=t(96036),D=t(59001),M=t(65458),I=t(79379);const R=e=>{let{pageContext:n}=e;return a.createElement(P.p,{title:n.title})},A=e=>{let{location:n,data:t,pageContext:o,children:r}=e;const{frontmatter:l}=t.page,{types:i}=o;return a.createElement(I.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(M.M1,Object.assign({},l,{versions:o.versions})),n.pathname.includes("komponenter")&&a.createElement(D.c,{variant:"komponent",component:l.title}),a.createElement(M.w5,l),r,i&&a.createElement(S.l,{types:i}))};function F(e){return a.createElement(A,e,a.createElement(_,e))}},75482:function(e,n,t){t.d(n,{l:function(){return k}});var o=t(96845),a=t(41162),r=t(74797),l=t(92379),i=t(25329);const s=e=>l.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},d=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},m=(e,n)=>{const{scrollLeft:t,scrollWidth:o}=e,{clientWidth:a}=n,r=t>0,l=o-t>a;n.classList.toggle("left-shadow",r),n.classList.toggle("right-shadow",l)},u=e=>{const n=e.target,t=n.parentElement;m(n,t)},p=e=>{let{props:n}=e;const t=(0,l.useRef)(null);return(0,l.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&m(n,e)}}))})),o=t.current.parentElement.parentElement;n.observe(o,{attributes:!0,attributeFilter:["hidden"]})}}),[]),l.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},l.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},l.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(o=n,o.map((e=>{var n,t;return[e.name?s(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?s(e.type.name):""]})))})));var o},k=e=>{let{types:n}=e;return l.createElement("section",{className:"mb-104 jkl-portal-paragraph"},l.createElement("h2",{className:"heading-1 mt-104"},"React API"),l.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),l.createElement(o.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const o=t.props?Object.values(t.props).filter(d):[],r=t.props?Object.values(t.props).filter(c):[],s=(e=>{var n,t,o,a,r,l;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(o=e.description)||void 0===o?void 0:o.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(r=a.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(l=e.tags)&&void 0!==l&&l.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return l.createElement(a.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},s&&l.createElement(i.dn,{className:"jkl-portal-code-block"},s),o.length>0&&l.createElement(p,{props:o}),r.length>0&&l.createElement(l.Fragment,null,l.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),l.createElement(p,{props:r})))}))))}},59001:function(e,n,t){t.d(n,{c:function(){return i}});var o=t(48467),a=t(58990),r=t(92379),l=t(25329);const i=e=>{let{variant:n,component:t}=e;return r.createElement("section",{className:"suggestion-block"},r.createElement("div",{className:"suggestion-block__content"},r.createElement(a.U,null),r.createElement(l.nv,null,s[n].text)),r.createElement(o.r,{href:s[n].link+"+<"+t+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,n,t){t.d(n,{M:function(){return s}});var o=t(80324),a=t.n(o),r=t(24157),l=t(92379),i=t(69215);const s=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:o}=(0,l.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return l.createElement(r.E.main,{initial:{y:o?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:o?0:-20,opacity:0},transition:{duration:o||s?0:.35},className:a()("jkl-portal__main",n),id:"innhold"},t)}},96845:function(e,n,t){t.d(n,{U:function(){return s}});var o=t(99767),a=t(651),r=t(80324),l=t.n(r);const i=["className","density","id"],s=e=>{let{className:n,density:t,id:r}=e,s=(0,o.Z)(e,i);return(0,a.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:l()("jkl-accordion",n),"data-density":t,id:r},s))}},41162:function(e,n,t){t.d(n,{Q:function(){return m}});var o=t(99767),a=t(651),r=t(42054),l=t(95020),i=t(80324),s=t.n(i),c=t(92379);const d=["children","title","className","startExpanded","onClick","id"],m=e=>{let{children:n,title:t,className:i,startExpanded:m=!1,onClick:u,id:p}=e,k=(0,o.Z)(e,d);const[g,f]=(0,c.useState)(m),[v]=(0,c.useState)((()=>m)),{detailsRef:E,summaryRef:b,contentRef:h,onSummaryClick:j}=(0,l.E)({onOpenChange:(e,n)=>{f(e),u&&u(n,e)},isExpanded:v});return(0,a.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:s()("jkl-accordion-item",i),ref:E,id:p,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:b,children:[t,(0,a.jsx)(r.K,{className:"jkl-accordion-item__arrow",pointingDown:!g,bold:g})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]}))}},58990:function(e,n,t){t.d(n,{U:function(){return d}});var o=t(92379),a=t(55650),r=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const d=e=>o.createElement(a.J,((e,n)=>{for(var t in n||(n={}))i.call(n,t)&&c(e,t,n[t]);if(l)for(var t of l(n))s.call(n,t)&&c(e,t,n[t]);return e})({},e),"");d.displayName="QuestionIcon"},74797:function(e,n,t){t.d(n,{w:function(){return E}});var o=t(92379),a=t(94207),r=t(49309),l=t(36774),i=t(64081),s=t(64483),c=t(42104),d=t(98746),m=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,n,t)=>n in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const E=(0,o.forwardRef)(((e,n)=>{var t,m=e,{caption:E,columns:b,emptyTableText:h,rows:j,verticalAlign:y}=m,C=((e,n)=>{var t={};for(var o in e)g.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&k)for(var o of k(e))n.indexOf(o)<0&&f.call(e,o)&&(t[o]=e[o]);return t})(m,["caption","columns","emptyTableText","rows","verticalAlign"]);return o.createElement(a.i,(t=((e,n)=>{for(var t in n||(n={}))g.call(n,t)&&v(e,t,n[t]);if(k)for(var t of k(n))f.call(n,t)&&v(e,t,n[t]);return e})({fullWidth:!0},C),u(t,p({ref:n}))),E&&o.createElement(l.R,{srOnly:!0},E),o.createElement(s.s,null,o.createElement(d.S,null,b.map(((e,n)=>o.createElement(c.x,{key:n,density:"compact",bold:!0},e))))),o.createElement(r.R,null,0===j.length&&h&&o.createElement(d.S,null,o.createElement(i.p,{colSpan:b.length},h)),j.map(((e,n)=>o.createElement(d.S,{key:n},e.map(((e,n)=>o.createElement(i.p,{key:n,"data-th":b[n],verticalAlign:y},e))))))))}));E.displayName="DataTable"}}]);