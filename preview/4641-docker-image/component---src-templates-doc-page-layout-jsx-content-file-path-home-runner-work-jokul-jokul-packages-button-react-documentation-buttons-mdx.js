"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5107],{48373:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return O},Head:function(){return P},default:function(){return _}});var r=t(64717),l=t(92379),o=t(57193),a=t(9378);const i=e=>{let{boolValues:n,choiceValues:t}=e;const{0:r,1:i}=(0,l.useState)(!1),s=(null==n?void 0:n.icon)||!1,c={showLoader:r||!(null==n||!n.isLoading),textDescription:"Laster innhold"},u=(null==t?void 0:t.iconPosition)||"left",m=s||null==n||!n.label?{icon:l.createElement(o.n,null),iconPosition:u}:{},d=null==n?void 0:n.label;return l.createElement(a.zx,Object.assign({variant:"primary",loader:r||null!=n&&n.withLoader?c:void 0,onClick:()=>{console.log("Hello!"),i(!0),setTimeout((()=>{i(!1)}),2200)},"aria-label":d?void 0:"Lagre og send inn"},m),d?"Lagre og send inn":null)},s=e=>{let{boolValues:n,choiceValues:t}=e;const r=null!=n&&n.label?"\n    Lagre og send inn\n":"",l=(null==n?void 0:n.icon)||!1,o=(null==t?void 0:t.iconPosition)||"left",a=l||null==n||!n.label?'\n    icon={<CheckIcon />}\n    iconPosition="'+o+'"':"";return'\n<Button\n    variant="primary"\n    loader={'+(null!=n&&n.withLoader?"{\n        showLoader: "+!(null==n||!n.isLoading)+',\n        textDescription: "Laster innhold"\n    }':"false")+"}\n    onClick={simulateLoading}"+a+"\n>"+r+"</Button>\n"},c=e=>{let{boolValues:n,choiceValues:t}=e;const{0:r,1:i}=(0,l.useState)(!1),s={showLoader:r||!(null==n||!n.isLoading),textDescription:"Laster innhold"},c="none"===(null==t?void 0:t.iconPosition)||null==t?void 0:t.iconPosition,u=null==n?void 0:n.label;return l.createElement(a.zx,{loader:r||null!=n&&n.withLoader?s:void 0,className:"jkl-spacing-l--right",onClick:()=>{console.log("Hello!"),i(!0),setTimeout((()=>{i(!1)}),2200)},"aria-label":u?void 0:"Lagre",iconPosition:c,icon:l.createElement(o.n,null)},u?"Lagre":null)},u=e=>{let{boolValues:n,choiceValues:t}=e;const r=(null==t?void 0:t.iconPosition)||"noIcon";return"\n<Button\n    loader={"+(null!=n&&n.withLoader?"{\n        showLoader: "+!(null==n||!n.isLoading)+',\n        textDescription: "Laster innhold"\n    }':"false")+'}\n    onClick={simulateLoading}\n    className="jkl-spacing-l--right"\n    icon={<CheckIcon />}'+(["left","right"].includes(r)?'\n    iconPosition="'+r+'"':"")+"\n>\n    Lagre\n</Button>\n"};var m=t(46835);const d=e=>{let{boolValues:n,choiceValues:t}=e;const{0:r,1:o}=(0,l.useState)(!1),i={showLoader:r||!(null==n||!n.isLoading),textDescription:"Laster innhold"},s="none"===(null==t?void 0:t.iconPosition)||null==t?void 0:t.iconPosition,c=null==n?void 0:n.label;return l.createElement(a.zx,{variant:"tertiary",loader:r||null!=n&&n.withLoader?i:void 0,className:"jkl-spacing-l--right",onClick:()=>{console.log("Hello!"),o(!0),setTimeout((()=>{o(!1)}),2200)},"aria-label":c?void 0:"Avbryt",iconPosition:s,icon:l.createElement(m.T,null)},c?"Avbryt":null)},p=e=>{let{boolValues:n,choiceValues:t}=e;const r=(null==t?void 0:t.iconPosition)||"noIcon";return'\n<Button\n    variant="tertiary"\n    loader={'+(null!=n&&n.withLoader?"{\n        showLoader: "+!(null==n||!n.isLoading)+',\n        textDescription: "Laster innhold"\n    }':"false")+'}\n    onClick={simulateLoading}\n    className="jkl-spacing-l--right"\n    icon={<CloseIcon />}'+(["left","right"].includes(r)?'\n    iconPosition="'+r+'"':"")+"\n>\n    Avbryt\n</Button>\n"};var k=t(70434);const v=e=>{let{boolValues:n,choiceValues:t}=e;const{0:r}=(0,l.useState)(!1),o={showLoader:r||!(null==n||!n.isLoading),textDescription:"Laster innhold"},i="none"===(null==t?void 0:t.iconPosition)||null==t?void 0:t.iconPosition,s=null==n?void 0:n.label;return l.createElement(a.zx,{variant:"ghost",loader:r||null!=n&&n.withLoader?o:void 0,className:"jkl-spacing-l--right","aria-label":s?void 0:"Ola Nordmann",iconPosition:i,icon:l.createElement(k.v,null)},s?"Ola Nordmann":null)},g=e=>{let{choiceValues:n}=e;const t=(null==n?void 0:n.iconPosition)||"noIcon";return'\n<Button\n    variant="ghost"\n    className="jkl-spacing-l--right"\n    icon={<ChevronDownIcon />}'+(["left","right"].includes(t)?'\n    iconPosition="'+t+'"':"")+"\n>\n    Ola Nordmann\n</Button>\n"},h=()=>l.createElement("div",{className:"jkl-button-example"},l.createElement("div",null,l.createElement(a.zx,{as:"a",variant:"primary",href:"/komponenter/buttons#knapper-rendret-som-andre-elementer"},"Send inn")),l.createElement("div",null,l.createElement(a.zx,{variant:"secondary",as:"a",href:"/komponenter/buttons#knapper-rendret-som-andre-elementer"},"Lagre")),l.createElement("div",null,l.createElement(a.zx,{variant:"tertiary",as:"a",href:"/komponenter/buttons#knapper-rendret-som-andre-elementer"},"Avbryt")),l.createElement("div",null,l.createElement(a.zx,{variant:"ghost",as:"a",href:"/komponenter/buttons#knapper-rendret-som-andre-elementer"},"Vis mer"))),f={boolProps:["withLoader","isLoading","icon",{prop:"label",defaultValue:!0}],choiceProps:[{name:"iconPosition",values:["left","right"],defaultValue:0}]};function b(e){const n=Object.assign({p:"p",strong:"strong",a:"a",h2:"h2",code:"code",h3:"h3",pre:"pre",em:"em"},(0,r.ah)(),e.components),{Ingress:t,ComponentExample:o,PortalImage:m}=n;return o||y("ComponentExample",!0),t||y("Ingress",!0),m||y("PortalImage",!0),l.createElement(l.Fragment,null,l.createElement(t,null,l.createElement(n.p,null,"Knapper starter en handling. Teksten på knappen forteller hva som vil skje\nnår brukeren klikker på den.")),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Primærknapp:")," brukes til den viktigste handlingen på en side - hovedhandlingen. En side kan noen ganger ha mer enn en hovedhandling, men ikke mange."),"\n",l.createElement(o,{title:"PrimaryButton",component:i,knobs:f,codeExample:s}),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Sekundærknapp:")," brukes til handlinger som ikke er like viktige for oss eller brukeren."),"\n",l.createElement(o,{title:"SecondaryButton",component:c,knobs:f,codeExample:u}),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Tertiærknapp:")," brukes til handlinger som er mindre viktige, eller som kan gi uønskede konsekvenser."),"\n",l.createElement(o,{title:"TertiaryButton",component:d,knobs:f,codeExample:p}),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Ghost-knapp:")," brukes til sekundære handlinger som å åpne menyer. Bruk den gjerne som triggerelement for ",l.createElement(n.a,{href:"/preview/4641-docker-image/komponenter/contextualmenu"},"ContextualMenu")),"\n",l.createElement(o,{title:"GhostButton",component:v,knobs:f,codeExample:g}),"\n",l.createElement(n.h2,null,"Lastemodus"),"\n",l.createElement(n.p,null,"Hvis du skal bruke lastemodus i knappen må du sørge for at ",l.createElement(n.code,null,"@fremtind/jkl-loader/loader.min.css")," er lastet inn i klienten."),"\n",l.createElement(n.h2,null,"Knappetyper"),"\n",l.createElement(n.p,null,"Knappene våre har et hierarki. Når brukeren har flere knapper å velge mellom, skal vi kun ha én primærknapp."),"\n",l.createElement(n.h2,null,"Tekst på knapper"),"\n",l.createElement(n.p,null,"Knappetekster skal være så enkle og korte som mulig og skal oppfordre til handling. Bruk helst bare to ord:"),"\n",l.createElement("form",null,l.createElement(a.zx,{variant:"primary",className:"jkl-spacing-xl--right"},l.createElement(n.p,null,"Send inn")),l.createElement(a.zx,{type:"button",className:"jkl-spacing-xl--right"},l.createElement(n.p,null,"Lagre")),l.createElement(a.zx,{type:"button",variant:"tertiary",className:"jkl-spacing-xl--right"},l.createElement(n.p,null,"Avbryt"))),"\n",l.createElement(n.h2,null,"Ikoner i knapper"),"\n",l.createElement(n.p,null,"Knappene kan ta inn et ikon som vises til venstre eller høyre for knappeteksten. Om du ikke sender inn tekst vises kun ikonet.\nSom standard vises ikonet til venstre for knappeteksten."),"\n",l.createElement(n.h3,null,"Knapper med kun ikon"),"\n",l.createElement(n.p,null,"Vær forsiktig med å bruke knapper med kun ikon, da dette krever ekstra forståelse fra brukerens side. De kan likevel være nyttige i ekspertverktøy, og i mønstre som verktøylinjer. Når du bruker en knapp med kun ikon må du huske å angi en tekstlig beskrivelse av funksjonaliteten gjennom f.eks. et ",l.createElement("a",{href:"/komponenter/tooltip"},"Tooltip")," eller ",l.createElement(n.code,null,"title"),"-attributten."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-tsx"},'<Tooltip>\n    <TooltipTrigger><Button variant="ghost" icon={<PenIcon />} /></TooltipTrigger>\n    <TooltipContent>Rediger innhold</TooltipContent>\n<Tooltip/>\n')),"\n",l.createElement(n.h2,null,"Knapper rendret som andre elementer"),"\n",l.createElement(n.p,null,"I noen tilfeller representerer en knapp et annet semantisk element, for eksempel en lenke. Knappekomponentene i Jøkul er derfor ",l.createElement(n.em,null,"polymorfe"),", og kan ta inn en React-komponent eller et HTML-element den skal rendre ut."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-tsx"},'// Rendrer en vanlig HTML-lenke til gitt href:\n<Button type="primary" as="a" href="/order">\n    Bestill nå\n</Button>;\n\n// Rendrer en Remix-lenke som bruker rammeverkets ruting:\nimport { Link } from "@remix-run/react";\n\n<Button as={Link} to="/products">\n    Se alle produkter\n</Button>;\n')),"\n",l.createElement(n.p,null,"Knappen tar automatisk imot riktige props og riktig ",l.createElement(n.code,null,"ref")," for komponenten som sendes inn, slik at du får typesikkerhet."),"\n",l.createElement(o,{component:h,codeExample:'\n<div>\n    <Button\n        variant="primary"\n        as="a"\n        href="/komponenter/buttons#knapper-rendret-som-andre-elementer"\n    >\n        Send inn\n    </Button>\n</div>\n<div>\n    <Button\n        variant="secondary" // Kan unnlates, secondary er standard variant\n        as="a"\n        href="/komponenter/buttons#knapper-rendret-som-andre-elementer"\n    >\n        Lagre\n    </Button>\n</div>\n<div>\n    <Button\n        variant="tertiary"\n        as="a"\n        href="/komponenter/buttons#knapper-rendret-som-andre-elementer"\n    >\n        Avbryt\n    </Button>\n</div>\n'}),"\n",l.createElement(n.h2,null,"Eksempler på bruk"),"\n",l.createElement(n.p,null,"Du finner et ",l.createElement(n.a,{href:"/preview/4641-docker-image/demoer/skjemavalidering/"},"eksempel på en primærknapp brukt i skjemakontekst")," under Demoer. ",l.createElement(n.a,{href:"https://github.com/fremtind/jokul/blob/main/portal/src/pages/demoer/skjemavalidering.tsx"},"Koden til eksempelet")," finner du på GitHub."),"\n",l.createElement(m,{src:"/assets/documentation/button/button-primary-loading.gif",caption:"En primærknapp som har startet en handling og nå er i lastemodus."}))}var E=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(b,e)):b(e)};function y(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var j=t(75482),x=t(96036),w=t(59001),L=t(65458),N=t(79379);const P=e=>{let{pageContext:n}=e;return l.createElement(x.p,{title:n.title})},O=e=>{let{location:n,data:t,pageContext:r,children:o}=e;const{frontmatter:a}=t.page,{types:i}=r;return l.createElement(N.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(L.M1,Object.assign({},a,{versions:r.versions})),n.pathname.includes("komponenter")&&l.createElement(w.c,{variant:"komponent",component:a.title}),l.createElement(L.w5,a),o,i&&l.createElement(j.l,{types:i}))};function _(e){return l.createElement(O,e,l.createElement(E,e))}},9378:function(e,n,t){t.d(n,{C9:function(){return p},KM:function(){return m},kq:function(){return d},zx:function(){return u}});var r=t(99767),l=t(60894),o=t(40969),a=t(80324),i=t.n(a),s=t(92379);const c=["as","children","className","density","onTouchStart","loader","icon","iconPosition","iconLeft","iconRight","variant"],u=s.forwardRef((function(e,n){const{as:t="button",children:a,className:u,density:m,onTouchStart:d,loader:p,icon:k,iconPosition:v="left",iconLeft:g,iconRight:h,variant:f="secondary"}=e,b=(0,r.Z)(e,c),E=t;const y=(0,s.useCallback)((e=>{d&&d(e);const n=e.target;if(n&&!n.disabled&&e.targetTouches.length){const t=e.targetTouches[0].clientX-n.getBoundingClientRect().x,r=e.targetTouches[0].clientY-n.getBoundingClientRect().y;n.style.setProperty("--jkl-touch-xcoord",t.toPrecision(4)+"px"),n.style.setProperty("--jkl-touch-ycoord",r.toPrecision(4)+"px"),n.classList.add("jkl-button--pressed"),setTimeout((()=>{n.classList.remove("jkl-button--pressed"),n.style.removeProperty("--jkl-touch-xcoord"),n.style.removeProperty("--jkl-touch-ycoord")}),400)}}),[d]),j=(0,o.c)(null==p?void 0:p.showLoader),x=Boolean(a)&&Boolean(null==p?void 0:p.showLoader);return s.createElement(E,Object.assign({},j,{"data-loading":x,"data-density":m,className:i()("jkl-button","jkl-button--"+f,u),disabled:"button"===t?null==p?void 0:p.showLoader:void 0,onTouchStart:y},b,{ref:n}),s.createElement("div",{className:"jkl-button__label"},g&&g,k&&"left"===v&&k,a&&s.createElement("span",{className:"jkl-button__text"},a),h&&h,k&&"right"===v&&k),a&&s.createElement(l.a,{className:"jkl-button__loader",variant:"medium",textDescription:(null==p?void 0:p.textDescription)||"Vennligst vent","aria-hidden":!(null!=p&&p.showLoader)}))}));function m(e){const n=Object.assign({},e,{variant:"primary"});return s.createElement(u,n)}function d(e){const n=Object.assign({},e,{variant:"secondary"});return s.createElement(u,n)}function p(e){const n=Object.assign({},e,{variant:"tertiary"});return s.createElement(u,n)}},75482:function(e,n,t){t.d(n,{l:function(){return k}});var r=t(96845),l=t(41162),o=t(74797),a=t(92379),i=t(25329);const s=e=>a.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},u=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},m=(e,n)=>{const{scrollLeft:t,scrollWidth:r}=e,{clientWidth:l}=n,o=t>0,a=r-t>l;n.classList.toggle("left-shadow",o),n.classList.toggle("right-shadow",a)},d=e=>{const n=e.target,t=n.parentElement;m(n,t)},p=e=>{let{props:n}=e;const t=(0,a.useRef)(null);return(0,a.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&m(n,e)}}))})),r=t.current.parentElement.parentElement;n.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),a.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},a.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},a.createElement(o.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=n,r.map((e=>{var n,t;return[e.name?s(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?s(e.type.name):""]})))})));var r},k=e=>{let{types:n}=e;return a.createElement("section",{className:"mb-104 jkl-portal-paragraph"},a.createElement("h2",{className:"heading-1 mt-104"},"React API"),a.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),a.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const r=t.props?Object.values(t.props).filter(u):[],o=t.props?Object.values(t.props).filter(c):[],s=(e=>{var n,t,r,l,o,a;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(o=l.param)||void 0===o?void 0:o.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(a=e.tags)&&void 0!==a&&a.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return a.createElement(l.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},s&&a.createElement(i.dn,{className:"jkl-portal-code-block"},s),r.length>0&&a.createElement(p,{props:r}),o.length>0&&a.createElement(a.Fragment,null,a.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),a.createElement(p,{props:o})))}))))}},59001:function(e,n,t){t.d(n,{c:function(){return i}});var r=t(48467),l=t(58990),o=t(92379),a=t(25329);const i=e=>{let{variant:n,component:t}=e;return o.createElement("section",{className:"suggestion-block"},o.createElement("div",{className:"suggestion-block__content"},o.createElement(l.U,null),o.createElement(a.nv,null,s[n].text)),o.createElement(r.r,{href:s[n].link+"+<"+t+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,n,t){t.d(n,{M:function(){return s}});var r=t(80324),l=t.n(r),o=t(24157),a=t(92379),i=t(69215);const s=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:r}=(0,a.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return a.createElement(o.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",n),id:"innhold"},t)}},96845:function(e,n,t){t.d(n,{U:function(){return s}});var r=t(99767),l=t(651),o=t(80324),a=t.n(o);const i=["className","density","id"],s=e=>{let{className:n,density:t,id:o}=e,s=(0,r.Z)(e,i);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",n),"data-density":t,id:o},s))}},41162:function(e,n,t){t.d(n,{Q:function(){return m}});var r=t(99767),l=t(651),o=t(42054),a=t(95020),i=t(80324),s=t.n(i),c=t(92379);const u=["children","title","className","startExpanded","onClick","id"],m=e=>{let{children:n,title:t,className:i,startExpanded:m=!1,onClick:d,id:p}=e,k=(0,r.Z)(e,u);const[v,g]=(0,c.useState)(m),[h]=(0,c.useState)((()=>m)),{detailsRef:f,summaryRef:b,contentRef:E,onSummaryClick:y}=(0,a.E)({onOpenChange:(e,n)=>{g(e),d&&d(n,e)},isExpanded:h});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:s()("jkl-accordion-item",i),ref:f,id:p,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:y,ref:b,children:[t,(0,l.jsx)(o.K,{className:"jkl-accordion-item__arrow",pointingDown:!v,bold:v})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]}))}},57193:function(e,n,t){t.d(n,{n:function(){return u}});var r=t(92379),l=t(55650),o=Object.defineProperty,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const u=e=>r.createElement(l.J,((e,n)=>{for(var t in n||(n={}))i.call(n,t)&&c(e,t,n[t]);if(a)for(var t of a(n))s.call(n,t)&&c(e,t,n[t]);return e})({},e),"");u.displayName="CheckIcon"},70434:function(e,n,t){t.d(n,{v:function(){return u}});var r=t(92379),l=t(55650),o=Object.defineProperty,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const u=e=>r.createElement(l.J,((e,n)=>{for(var t in n||(n={}))i.call(n,t)&&c(e,t,n[t]);if(a)for(var t of a(n))s.call(n,t)&&c(e,t,n[t]);return e})({},e),"");u.displayName="ChevronDownIcon"},58990:function(e,n,t){t.d(n,{U:function(){return u}});var r=t(92379),l=t(55650),o=Object.defineProperty,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const u=e=>r.createElement(l.J,((e,n)=>{for(var t in n||(n={}))i.call(n,t)&&c(e,t,n[t]);if(a)for(var t of a(n))s.call(n,t)&&c(e,t,n[t]);return e})({},e),"");u.displayName="QuestionIcon"},74797:function(e,n,t){t.d(n,{w:function(){return f}});var r=t(92379),l=t(94207),o=t(49309),a=t(36774),i=t(64081),s=t(64483),c=t(42104),u=t(98746),m=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,n,t)=>n in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const f=(0,r.forwardRef)(((e,n)=>{var t,m=e,{caption:f,columns:b,emptyTableText:E,rows:y,verticalAlign:j}=m,x=((e,n)=>{var t={};for(var r in e)v.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&k)for(var r of k(e))n.indexOf(r)<0&&g.call(e,r)&&(t[r]=e[r]);return t})(m,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(l.i,(t=((e,n)=>{for(var t in n||(n={}))v.call(n,t)&&h(e,t,n[t]);if(k)for(var t of k(n))g.call(n,t)&&h(e,t,n[t]);return e})({fullWidth:!0},x),d(t,p({ref:n}))),f&&r.createElement(a.R,{srOnly:!0},f),r.createElement(s.s,null,r.createElement(u.S,null,b.map(((e,n)=>r.createElement(c.x,{key:n,density:"compact",bold:!0},e))))),r.createElement(o.R,null,0===y.length&&E&&r.createElement(u.S,null,r.createElement(i.p,{colSpan:b.length},E)),y.map(((e,n)=>r.createElement(u.S,{key:n},e.map(((e,n)=>r.createElement(i.p,{key:n,"data-th":b[n],verticalAlign:j},e))))))))}));f.displayName="DataTable"}}]);