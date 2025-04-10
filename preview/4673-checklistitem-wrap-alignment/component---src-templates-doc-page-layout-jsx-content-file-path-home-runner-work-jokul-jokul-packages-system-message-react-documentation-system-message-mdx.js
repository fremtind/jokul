"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7297],{6609:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return A},Head:function(){return R},default:function(){return F}});var l=n(64717),a=n(92379),r=n(3456),s=n(99767),i=n(38475),o=n(80324),c=n.n(o),m=n(46835);const d=["label"],u=(0,a.forwardRef)(((e,t)=>{let{label:n="Lukk"}=e,l=(0,s.Z)(e,d);return a.createElement("button",Object.assign({ref:t,type:"button",title:n},l),a.createElement(m.T,{variant:"small",bold:!0}),a.createElement("span",{className:"jkl-sr-only"},n))}));u.displayName="DismissButton";var p=n(10056),k=n(47919),g=n(92541),f=n(64160);const v=e=>{let{messageType:t}=e;switch(t){case"error":return a.createElement(p.P,{className:"jkl-system-message__icon"});case"info":return a.createElement(k.s,{className:"jkl-system-message__icon"});case"success":return a.createElement(g.t,{className:"jkl-system-message__icon"});case"warning":return a.createElement(f.a,{className:"jkl-system-message__icon"});default:return null}},b=["id","className","density","maxContentWidth","paddingLeft","role","dismissed","dismissAction","children"];function E(e){return t=>{let{id:n,className:l,density:r,maxContentWidth:o,paddingLeft:m,role:d="status",dismissed:p,dismissAction:k,children:g}=t,f=(0,s.Z)(t,b);const E=(0,i.M)(n||"jkl-system-message",{generateSuffix:!n});return a.createElement("div",Object.assign({role:d},f,{id:E,className:c()("jkl-system-message","jkl-system-message--"+e,l,{"jkl-system-message--dismissed":p}),"data-density":r}),a.createElement("div",{className:"jkl-system-message__content","data-testid":"system-message-content","data-theme":"light",style:{maxWidth:o,paddingLeft:m}},a.createElement(v,{messageType:e}),a.createElement("span",{className:"jkl-system-message__message"},g),(null==k?void 0:k.handleDismiss)&&a.createElement(u,{"data-theme":"light","aria-controls":E,className:"jkl-system-message__dismiss-button",label:k.buttonTitle||"Lukk",onClick:k.handleDismiss})))}}const y=E("info");y.displayName="InfoSystemMessage";const j=E("error");j.displayName="ErrorSystemMessage";const h=E("warning");h.displayName="WarningSystemMessage";const N=E("success");N.displayName="SuccessSystemMessage";const _={boolProps:["Dismissable"],choiceProps:[{name:"Variant",values:["Info","Success","Warning","Error"],defaultValue:0}]},w=e=>{switch(e){case"Info":default:return y;case"Success":return N;case"Warning":return h;case"Error":return j}},O=e=>{let{boolValues:t,choiceValues:n}=e;const l=w(n?n.Variant:""),{0:s,1:i}=(0,a.useState)(!1),o=null!=t&&t.Dismissable?{handleDismiss:()=>{i(!0),setTimeout((()=>i(!1)),2600)},buttonTitle:"Merk som lest"}:void 0;return a.createElement(l,{dismissed:s,dismissAction:o,role:"none presentation"},"Hei, jeg er en varslingsmelding av typen"," ",n?n.Variant:"ᕙ(⇀‸↼‶)ᕗ"," med"," ",a.createElement(r.O,{href:"/komponenter/systemmessage"},"en navlink"))},x=e=>{let{boolValues:t,choiceValues:n}=e;return"\n<"+w(n?n.Variant:"").displayName+" dismissed={false} dismissAction={"+(null!=t&&t.Dismissable?'{\n    handleDismiss: () => setDismissed(true),\n    buttonTitle: "Merk som lest",\n}':void 0)+"}  />\n"};function S(e){const t=Object.assign({p:"p",h2:"h2",a:"a",ul:"ul",li:"li"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:r}=t;return r||M("ComponentExample",!0),n||M("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"En varselmelding er en beskjed til brukeren som vises i en global\nsammenheng. Det kan være et varsel om at noe er feil, global informasjon\neller lignende.")),"\n",a.createElement(r,{title:"SystemMessage",component:O,knobs:_,codeExample:x}),"\n",a.createElement(t.p,null,"Innholdet i en varselmelding bør ikke bryte over flere linjer på desktop. På mobil kan det vises over flere linjer så lenge varselet ikke skjuler viktig innhold under."),"\n",a.createElement(t.p,null,"Dersom meldingen ikke er koblet til en tilstand på siden (for eksempel en feil i et skjema) kan man la brukeren lukke den. For global informasjon som driftsmeldinger bør man huske valget om å lukke meldingen, så brukeren slipper å se den på nytt."),"\n",a.createElement(t.h2,null,"Varianter"),"\n",a.createElement(t.p,null,"Vi har fire ulike varsler, med fargene blå, rød, gul og grønn. Fargene i varselmeldinger har en betydning på samme måte som ",a.createElement(t.a,{href:"/preview/4673-checklistitem-wrap-alignment/komponenter/message"},"Message"),":"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Blått er for generell informasjon til brukeren."),"\n",a.createElement(t.li,null,"Gult gir brukeren en advarsel, for eksempel at en funksjonalitet er i beta og derfor er ustabil."),"\n",a.createElement(t.li,null,"Rødt gir brukeren en feilmelding, for eksempel om det oppstår en systemfeil eller brukeren avbryter en handling."),"\n",a.createElement(t.li,null,"Grønt betyr at en handling var vellykket."),"\n"),"\n",a.createElement(t.h2,null,"Tilgjengelighet"),"\n",a.createElement(t.p,null,"Når vi bruker meldinger med farge, må vi alltid huske å ha en god og beskrivende tekst, siden farge ikke er et godt nok kjennetegn for alle brukere. Skriv en presis meldingstekst, der du sier det viktigste først."),"\n",a.createElement(t.h2,null,"Når bruker vi en SystemMessage?"),"\n",a.createElement(t.p,null,"Før bruker en SystemMessage er det greit å ha tatt stilling til noen spørsmål:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Er innholdet i beskjeden tydelig nok til å stå på egenhånd, uten tilknytning til noe annet på siden?"),"\n",a.createElement(t.li,null,"Får innholdet plass på én linje på desktop?"),"\n"),"\n",a.createElement(t.p,null,"Varsler skal vises plassert øverst på siden og ta opp hele sidebredden. Bruk ",a.createElement(t.a,{href:"/preview/4673-checklistitem-wrap-alignment/komponenter/message"},"Message")," om du skal vise en beskjed i en annen kontekst."))}var P=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(S,e)):S(e)};function M(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var D=n(75482),C=n(96036),T=n(59001),V=n(65458),I=n(79379);const R=e=>{let{pageContext:t}=e;return a.createElement(C.p,{title:t.title})},A=e=>{let{location:t,data:n,pageContext:l,children:r}=e;const{frontmatter:s}=n.page,{types:i}=l;return a.createElement(I.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(V.M1,Object.assign({},s,{versions:l.versions})),t.pathname.includes("komponenter")&&a.createElement(T.c,{variant:"komponent",component:s.title}),a.createElement(V.w5,s),r,i&&a.createElement(D.l,{types:i}))};function F(e){return a.createElement(A,e,a.createElement(P,e))}},75482:function(e,t,n){n.d(t,{l:function(){return k}});var l=n(96845),a=n(41162),r=n(74797),s=n(92379),i=n(25329);const o=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:a}=t,r=n>0,s=l-n>a;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",s)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var l},k=e=>{let{types:t}=e;return s.createElement("section",{className:"mb-104 jkl-portal-paragraph"},s.createElement("h2",{className:"heading-1 mt-104"},"React API"),s.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],r=n.props?Object.values(n.props).filter(c):[],o=(e=>{var t,n,l,a,r,s;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(r=a.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(s=e.tags)&&void 0!==s&&s.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return s.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&s.createElement(i.dn,{className:"jkl-portal-code-block"},o),l.length>0&&s.createElement(p,{props:l}),r.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(p,{props:r})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return i}});var l=n(48467),a=n(58990),r=n(92379),s=n(25329);const i=e=>{let{variant:t,component:n}=e;return r.createElement("section",{className:"suggestion-block"},r.createElement("div",{className:"suggestion-block__content"},r.createElement(a.U,null),r.createElement(s.nv,null,o[t].text)),r.createElement(l.r,{href:o[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},o={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,t,n){n.d(t,{M:function(){return o}});var l=n(80324),a=n.n(l),r=n(24157),s=n(92379),i=n(69215);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,s.useContext)(i.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(r.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||o?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},96845:function(e,t,n){n.d(t,{U:function(){return o}});var l=n(99767),a=n(651),r=n(80324),s=n.n(r);const i=["className","density","id"],o=e=>{let{className:t,density:n,id:r}=e,o=(0,l.Z)(e,i);return(0,a.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:s()("jkl-accordion",t),"data-density":n,id:r},o))}},41162:function(e,t,n){n.d(t,{Q:function(){return d}});var l=n(99767),a=n(651),r=n(42054),s=n(95020),i=n(80324),o=n.n(i),c=n(92379);const m=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:n,className:i,startExpanded:d=!1,onClick:u,id:p}=e,k=(0,l.Z)(e,m);const[g,f]=(0,c.useState)(d),[v]=(0,c.useState)((()=>d)),{detailsRef:b,summaryRef:E,contentRef:y,onSummaryClick:j}=(0,s.E)({onOpenChange:(e,t)=>{f(e),u&&u(t,e)},isExpanded:v});return(0,a.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:o()("jkl-accordion-item",i),ref:b,id:p,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:E,children:[n,(0,a.jsx)(r.K,{className:"jkl-accordion-item__arrow",pointingDown:!g,bold:g})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:y,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},3456:function(e,t,n){n.d(t,{O:function(){return d}});var l=n(80324),a=n.n(l),r=n(92379),s=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const d=r.forwardRef((function(e,t){const n=e,{active:l=!1,back:s=!1,className:d,children:u,as:p="a"}=n,k=((e,t)=>{var n={};for(var l in e)o.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&i)for(var l of i(e))t.indexOf(l)<0&&c.call(e,l)&&(n[l]=e[l]);return n})(n,["active","back","className","children","as"]),g=p;return r.createElement(g,((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&m(e,n,t[n]);return e})({ref:t,className:a()("jkl-nav-link",{"jkl-nav-link--active":l,"jkl-nav-link--back":s},d)},k),s&&r.createElement(r.Fragment,null,r.createElement("span",{"aria-hidden":!0,ref:t,className:a()("jkl-icon","jkl-icon--small","jkl-nav-link__icon")},"")),u,!s&&r.createElement(r.Fragment,null,r.createElement("span",{"aria-hidden":!0,ref:t,className:a()("jkl-icon","jkl-icon--small","jkl-nav-link__icon")},"")))}))},58990:function(e,t,n){n.d(t,{U:function(){return m}});var l=n(92379),a=n(55650),r=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>l.createElement(a.J,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))o.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},74797:function(e,t,n){n.d(t,{w:function(){return b}});var l=n(92379),a=n(94207),r=n(49309),s=n(36774),i=n(64081),o=n(64483),c=n(42104),m=n(98746),d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const b=(0,l.forwardRef)(((e,t)=>{var n,d=e,{caption:b,columns:E,emptyTableText:y,rows:j,verticalAlign:h}=d,N=((e,t)=>{var n={};for(var l in e)g.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&k)for(var l of k(e))t.indexOf(l)<0&&f.call(e,l)&&(n[l]=e[l]);return n})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return l.createElement(a.i,(n=((e,t)=>{for(var n in t||(t={}))g.call(t,n)&&v(e,n,t[n]);if(k)for(var n of k(t))f.call(t,n)&&v(e,n,t[n]);return e})({fullWidth:!0},N),u(n,p({ref:t}))),b&&l.createElement(s.R,{srOnly:!0},b),l.createElement(o.s,null,l.createElement(m.S,null,E.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(r.R,null,0===j.length&&y&&l.createElement(m.S,null,l.createElement(i.p,{colSpan:E.length},y)),j.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":E[t],verticalAlign:h},e))))))))}));b.displayName="DataTable"}}]);