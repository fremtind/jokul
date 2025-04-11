"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3176],{4269:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return Z},Head:function(){return L},default:function(){return H}});var l=n(64717),r=n(92379),a=n(3456),i=n(99767),s=n(10056),o=n(47919),c=n(92541),m=n(64160),d=n(38475),u=n(80324),p=n.n(u),g=n(46835);const k=["label"],f=(0,r.forwardRef)(((e,t)=>{let{label:n="Lukk"}=e,l=(0,i.Z)(e,k);return r.createElement("button",Object.assign({ref:t,type:"button",title:n},l),r.createElement(g.T,{variant:"small",bold:!0}),r.createElement("span",{className:"jkl-sr-only"},n))}));f.displayName="DismissButton";const v=["id","title","fullWidth","density","className","dismissed","dismissAction","children","role"];function b(e){const t=(0,r.forwardRef)(((t,n)=>{const{id:l,title:a,fullWidth:u,density:g,className:k="",dismissed:b,dismissAction:E,children:h,role:j}=t,y=(0,i.Z)(t,v),N=(0,d.M)(l||"jkl-message",{generateSuffix:!l}),_=r.Children.map(h,(e=>"string"==typeof e)),w=null!=_&&_[0]?r.createElement("p",null,h):h;return r.createElement("div",Object.assign({},y,{id:l,ref:n,className:p()("jkl-message","jkl-message--"+e,k,{"jkl-message--full":u,"jkl-message--dismissed":b}),role:j,"data-density":g}),(e=>{switch(e){case"error":return r.createElement(s.P,{className:"jkl-message__icon"});case"info":return r.createElement(o.s,{className:"jkl-message__icon"});case"success":return r.createElement(c.t,{className:"jkl-message__icon"});case"warning":return r.createElement(m.a,{className:"jkl-message__icon"});default:return null}})(e),r.createElement("div",{className:"jkl-message__content","data-theme":"light"},a&&r.createElement("p",{className:"jkl-message__title"},a),r.createElement("div",{className:"jkl-message__message"},w)),(null==E?void 0:E.handleDismiss)&&r.createElement(f,{"data-theme":"light","aria-controls":N,className:"jkl-message__dismiss-button",label:E.buttonTitle||"Lukk",onClick:E.handleDismiss}))}));return t.displayName="Message",t}const E=b("info");E.displayName="InfoMessage";const h=b("error");h.displayName="ErrorMessage";const j=b("warning");j.displayName="WarningMessage";const y=b("success");y.displayName="SuccessMessage";const N={boolProps:["Full width","Dismissable","No title"],choiceProps:[{name:"Variant",values:["Info","Success","Warning","Error"],defaultValue:0}]},_=e=>{switch(e){case"Info":default:return E;case"Success":return y;case"Warning":return j;case"Error":return h}},w=e=>{let{boolValues:t,choiceValues:n}=e;const{0:l,1:i}=(0,r.useState)(!1),s=_(null==n?void 0:n.Variant),o=null!=t&&t.Dismissable?{handleDismiss:()=>{i(!0),setTimeout((()=>i(!1)),2600)},buttonTitle:"Merk som lest"}:void 0;return r.createElement(s,{fullWidth:null==t?void 0:t["Full width"],title:null!=t&&t["No title"]||null==n?void 0:n.Variant,dismissed:l,dismissAction:o,role:"none presentation"},r.createElement("p",null,"Hei, jeg er en melding av typen ",null==n?void 0:n.Variant," med"," ",r.createElement(a.O,{href:"/komponenter/Message"},"en navlink")))},O=e=>{let{boolValues:t,choiceValues:n}=e;return"\n<"+_(n?n.Variant:"").displayName+(null!=t&&t["No title"]?'\n    title="'+(null==n?void 0:n.Variant):"")+"\n    fullWidth={"+(null==t?void 0:t["Full width"])+"}\n    dismissed={false}"+(null!=t&&t.Dismissable?'\n    dismissAction={{\n        handleDismiss: () => setDismissed(true),\n        buttonTitle: "Merk som lest",\n    }}':"")+"\n/>\n"};var x=n(27685);const S=["className","errors","isSubmitted","isValid","messageProps"],M={title:"Feil og mangler i skjemaet"},D=(0,r.forwardRef)(((e,t)=>{const{className:n,errors:l,isSubmitted:a,isValid:s,messageProps:o}=e,c=(0,i.Z)(e,S),m=a&&!s,[d]=(0,x.v)(m,{display:"grid"}),u=(0,r.useRef)(l);(0,r.useEffect)((()=>{u.current=l}),[l]);const g=l.length>u.current.length;return r.createElement("div",Object.assign({ref:t,className:p()("jkl-form-error-message",n)},c),r.createElement(h,Object.assign({},M,o,{ref:d,role:g?"alert":"presentation"}),r.createElement("ul",{className:"jkl-list"},l.filter((e=>void 0!==e)).map((e=>r.createElement("li",{className:"jkl-list__item",key:e},e))))))}));D.displayName="FormErrorMessage";const P={boolProps:["Full width","Submitted","Gyldig fornavn","Gyldig etternavn"]},V=e=>{let{boolValues:t}=e;return r.createElement("div",null,r.createElement(D,{errors:[null!=t&&t["Gyldig fornavn"]?void 0:"Du må oppgi fornavn",null!=t&&t["Gyldig etternavn"]?void 0:"Du må oppgi etternavn"],isSubmitted:(null==t?void 0:t.Submitted)||!1,isValid:(null==t?void 0:t["Gyldig fornavn"])&&(null==t?void 0:t["Gyldig etternavn"])||!1,messageProps:{fullWidth:null==t?void 0:t["Full width"]}}),r.createElement("p",{className:"jkl-small"},"Velg ",r.createElement("i",null,"Submitted")," for å animere inn komponenten"))},F=e=>{let{boolValues:t}=e;return"\n<FormErrorMessage\n    errors={["+(null!=t&&t["Gyldig fornavn"]?"":'"Du må oppgi fornavn", ')+(null!=t&&t["Gyldig etternavn"]?"":'"Du må oppgi etternavn"')+"]}\n    isSubmitted={"+((null==t?void 0:t.Submitted)||!1)+"}\n    isValid={"+((null==t?void 0:t["Gyldig fornavn"])&&(null==t?void 0:t["Gyldig etternavn"]))+"}\n    messageProps={{\n        fullWidth: "+(null==t?void 0:t["Full width"])+",\n    }}\n/>\n"};function R(e){const t=Object.assign({p:"p",h2:"h2",a:"a",ul:"ul",li:"li",code:"code"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:a,Grid:i,DoDontExample:s}=t;return a||C("ComponentExample",!0),s||C("DoDontExample",!0),i||C("Grid",!0),n||C("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"En melding er en beskjed til brukeren som vises i tilknytning til innhold på\nsiden. Det kan være et varsel om at noe er feil, informasjon om at noe\nmangler i et skjema, eller en bekreftelse på at noe har blitt oppdatert.")),"\n",r.createElement(a,{title:"Message",component:w,knobs:N,codeExample:O}),"\n",r.createElement(t.p,null,"Meldingene består en meldingstekst og en valgfri overskrift."),"\n",r.createElement(t.p,null,"Om meldingen ikke er koblet til en tilstand på siden (for eksempel en feil i et skjema) kan man la brukeren lukke den. Tenk på om siden bør huske at brukeren lukket meldingen."),"\n",r.createElement(t.h2,null,"Varianter"),"\n",r.createElement(t.p,null,"Vi har fire ulike meldinger, med fargene blå, rød, gul og grønn. ",r.createElement(t.a,{href:"/preview/fix/chip-button-type/profil/farger#meldingsfargene"},"Meldingsfargene våre er funksjonelle"),". Det vil si at hver variant har en betydning:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Blått er for generell informasjon til brukeren."),"\n",r.createElement(t.li,null,"Gult gir brukeren en advarsel, for eksempel at en funksjonalitet er i beta og derfor er ustabil."),"\n",r.createElement(t.li,null,"Rødt gir brukeren en feilmelding, for eksempel om det oppstår en systemfeil eller brukeren avbryter en handling."),"\n",r.createElement(t.li,null,"Grønt betyr at en handling var vellykket."),"\n"),"\n",r.createElement(t.h2,null,"I skjema"),"\n",r.createElement(t.p,null,"Som beskrevet i ",r.createElement(t.a,{href:"/preview/fix/chip-button-type/guider/skjemadesign#skjemavalidering"},"Skjemavalidering")," bruker vi en ErrorMessage til å oppsummere valideringsfeil. Det finnes en ferdig variant ",r.createElement(t.code,null,"FormErrorMessage")," som animeres, og skjules på små skjermer. Se ",r.createElement(t.a,{href:"/preview/fix/chip-button-type/demoer/skjemavalidering"},"eksempelet på skjemavalidering")," for å se komponenten i bruk."),"\n",r.createElement(a,{title:"FormErrorMessage",component:V,knobs:P,codeExample:F}),"\n",r.createElement(t.h2,null,"Tilgjengelighet"),"\n",r.createElement(t.p,null,"Når vi bruker meldinger med farge, må vi alltid huske å ha en god og beskrivende tekst, siden farge ikke er et godt nok kjennetegn for alle brukere. Skriv en presis meldingstekst, der du sier det viktigste først."),"\n",r.createElement(t.p,null,r.createElement(t.code,null,"ErrorMessage")," og ",r.createElement(t.code,null,"WarningMessage")," har ",r.createElement(t.code,null,'role="alert"'),", som betyr at innholdet vil bli lest opp av skjermlesere uansett hvor skjermleserens markør befinner seg på siden. Rollen kan overstyres."),"\n",r.createElement(t.h2,null,"Når bruker vi en melding?"),"\n",r.createElement(t.p,null,"Før du bruker en melding er det greit å ha tatt stilling til noen spørsmål:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Er beskjeden tilknyttet innholdet den står i nærheten av?"),"\n",r.createElement(t.li,null,"Er beskjeden tydelig nok til å forstås uten farge som kjennetegn?"),"\n",r.createElement(t.li,null,"Kan meldingen lukkes? Bør den da skjules ved neste besøk?"),"\n"),"\n",r.createElement(t.p,null,"Om meldingen er helt selvstendig (ikke tilknyttet noe av innholdet på siden) skal vi bruke ",r.createElement(t.a,{href:"/preview/fix/chip-button-type/komponenter/systemmessage"},"SystemMessage"),"."),"\n",r.createElement(i,null,r.createElement(s,{type:"do",description:"Vis meldingen i kontekst av innholdet",image:"/assets/do-donts/system-message-dont-1.png"})))}var G=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(R,e)):R(e)};function C(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var I=n(75482),T=n(96036),W=n(59001),A=n(65458),B=n(79379);const L=e=>{let{pageContext:t}=e;return r.createElement(T.p,{title:t.title})},Z=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:i}=n.page,{types:s}=l;return r.createElement(B.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(A.M1,Object.assign({},i,{versions:l.versions})),t.pathname.includes("komponenter")&&r.createElement(W.c,{variant:"komponent",component:i.title}),r.createElement(A.w5,i),a,s&&r.createElement(I.l,{types:s}))};function H(e){return r.createElement(Z,e,r.createElement(G,e))}},75482:function(e,t,n){n.d(t,{l:function(){return g}});var l=n(96845),r=n(41162),a=n(74797),i=n(92379),s=n(25329);const o=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,i=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var l},g=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],o=(e=>{var t,n,l,r,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&i.createElement(s.dn,{className:"jkl-portal-code-block"},o),l.length>0&&i.createElement(p,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return s}});var l=n(48467),r=n(58990),a=n(92379),i=n(25329);const s=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(r.U,null),a.createElement(i.nv,null,o[t].text)),a.createElement(l.r,{href:o[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},o={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,t,n){n.d(t,{M:function(){return o}});var l=n(80324),r=n.n(l),a=n(24157),i=n(92379),s=n(69215);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,i.useContext)(s.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||o?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},96845:function(e,t,n){n.d(t,{U:function(){return o}});var l=n(99767),r=n(651),a=n(80324),i=n.n(a);const s=["className","density","id"],o=e=>{let{className:t,density:n,id:a}=e,o=(0,l.Z)(e,s);return(0,r.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:i()("jkl-accordion",t),"data-density":n,id:a},o))}},41162:function(e,t,n){n.d(t,{Q:function(){return d}});var l=n(99767),r=n(651),a=n(42054),i=n(95020),s=n(80324),o=n.n(s),c=n(92379);const m=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:n,className:s,startExpanded:d=!1,onClick:u,id:p}=e,g=(0,l.Z)(e,m);const[k,f]=(0,c.useState)(d),[v]=(0,c.useState)((()=>d)),{detailsRef:b,summaryRef:E,contentRef:h,onSummaryClick:j}=(0,i.E)({onOpenChange:(e,t)=>{f(e),u&&u(t,e)},isExpanded:v});return(0,r.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},g,{className:o()("jkl-accordion-item",s),ref:b,id:p,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:E,children:[n,(0,r.jsx)(a.K,{className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},3456:function(e,t,n){n.d(t,{O:function(){return d}});var l=n(80324),r=n.n(l),a=n(92379),i=Object.defineProperty,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const d=a.forwardRef((function(e,t){const n=e,{active:l=!1,back:i=!1,className:d,children:u,as:p="a"}=n,g=((e,t)=>{var n={};for(var l in e)o.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&s)for(var l of s(e))t.indexOf(l)<0&&c.call(e,l)&&(n[l]=e[l]);return n})(n,["active","back","className","children","as"]),k=p;return a.createElement(k,((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&m(e,n,t[n]);return e})({ref:t,className:r()("jkl-nav-link",{"jkl-nav-link--active":l,"jkl-nav-link--back":i},d)},g),i&&a.createElement(a.Fragment,null,a.createElement("span",{"aria-hidden":!0,ref:t,className:r()("jkl-icon","jkl-icon--small","jkl-nav-link__icon")},"")),u,!i&&a.createElement(a.Fragment,null,a.createElement("span",{"aria-hidden":!0,ref:t,className:r()("jkl-icon","jkl-icon--small","jkl-nav-link__icon")},"")))}))},58990:function(e,t,n){n.d(t,{U:function(){return m}});var l=n(92379),r=n(55650),a=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>l.createElement(r.J,((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))o.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},74797:function(e,t,n){n.d(t,{w:function(){return b}});var l=n(92379),r=n(94207),a=n(49309),i=n(36774),s=n(64081),o=n(64483),c=n(42104),m=n(98746),d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const b=(0,l.forwardRef)(((e,t)=>{var n,d=e,{caption:b,columns:E,emptyTableText:h,rows:j,verticalAlign:y}=d,N=((e,t)=>{var n={};for(var l in e)k.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&g)for(var l of g(e))t.indexOf(l)<0&&f.call(e,l)&&(n[l]=e[l]);return n})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return l.createElement(r.i,(n=((e,t)=>{for(var n in t||(t={}))k.call(t,n)&&v(e,n,t[n]);if(g)for(var n of g(t))f.call(t,n)&&v(e,n,t[n]);return e})({fullWidth:!0},N),u(n,p({ref:t}))),b&&l.createElement(i.R,{srOnly:!0},b),l.createElement(o.s,null,l.createElement(m.S,null,E.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===j.length&&h&&l.createElement(m.S,null,l.createElement(s.p,{colSpan:E.length},h)),j.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(s.p,{key:t,"data-th":E[t],verticalAlign:y},e))))))))}));b.displayName="DataTable"}}]);