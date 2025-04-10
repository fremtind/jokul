"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3176],{4269:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return Z},Head:function(){return L},default:function(){return H}});var l=t(64717),r=t(92379),a=t(3456),s=t(99767),i=t(10056),o=t(47919),c=t(92541),m=t(64160),d=t(38475),u=t(80324),p=t.n(u),k=t(46835);const g=["label"],f=(0,r.forwardRef)(((e,n)=>{let{label:t="Lukk"}=e,l=(0,s.Z)(e,g);return r.createElement("button",Object.assign({ref:n,type:"button",title:t},l),r.createElement(k.T,{variant:"small",bold:!0}),r.createElement("span",{className:"jkl-sr-only"},t))}));f.displayName="DismissButton";const v=["id","title","fullWidth","density","className","dismissed","dismissAction","children","role"];function b(e){const n=(0,r.forwardRef)(((n,t)=>{const{id:l,title:a,fullWidth:u,density:k,className:g="",dismissed:b,dismissAction:E,children:j,role:h}=n,y=(0,s.Z)(n,v),N=(0,d.M)(l||"jkl-message",{generateSuffix:!l}),_=r.Children.map(j,(e=>"string"==typeof e)),w=null!=_&&_[0]?r.createElement("p",null,j):j;return r.createElement("div",Object.assign({},y,{id:l,ref:t,className:p()("jkl-message","jkl-message--"+e,g,{"jkl-message--full":u,"jkl-message--dismissed":b}),role:h,"data-density":k}),(e=>{switch(e){case"error":return r.createElement(i.P,{className:"jkl-message__icon"});case"info":return r.createElement(o.s,{className:"jkl-message__icon"});case"success":return r.createElement(c.t,{className:"jkl-message__icon"});case"warning":return r.createElement(m.a,{className:"jkl-message__icon"});default:return null}})(e),r.createElement("div",{className:"jkl-message__content","data-theme":"light"},a&&r.createElement("p",{className:"jkl-message__title"},a),r.createElement("div",{className:"jkl-message__message"},w)),(null==E?void 0:E.handleDismiss)&&r.createElement(f,{"data-theme":"light","aria-controls":N,className:"jkl-message__dismiss-button",label:E.buttonTitle||"Lukk",onClick:E.handleDismiss}))}));return n.displayName="Message",n}const E=b("info");E.displayName="InfoMessage";const j=b("error");j.displayName="ErrorMessage";const h=b("warning");h.displayName="WarningMessage";const y=b("success");y.displayName="SuccessMessage";const N={boolProps:["Full width","Dismissable","No title"],choiceProps:[{name:"Variant",values:["Info","Success","Warning","Error"],defaultValue:0}]},_=e=>{switch(e){case"Info":default:return E;case"Success":return y;case"Warning":return h;case"Error":return j}},w=e=>{let{boolValues:n,choiceValues:t}=e;const{0:l,1:s}=(0,r.useState)(!1),i=_(null==t?void 0:t.Variant),o=null!=n&&n.Dismissable?{handleDismiss:()=>{s(!0),setTimeout((()=>s(!1)),2600)},buttonTitle:"Merk som lest"}:void 0;return r.createElement(i,{fullWidth:null==n?void 0:n["Full width"],title:null!=n&&n["No title"]||null==t?void 0:t.Variant,dismissed:l,dismissAction:o,role:"none presentation"},r.createElement("p",null,"Hei, jeg er en melding av typen ",null==t?void 0:t.Variant," med"," ",r.createElement(a.O,{href:"/komponenter/Message"},"en navlink")))},O=e=>{let{boolValues:n,choiceValues:t}=e;return"\n<"+_(t?t.Variant:"").displayName+(null!=n&&n["No title"]?'\n    title="'+(null==t?void 0:t.Variant):"")+"\n    fullWidth={"+(null==n?void 0:n["Full width"])+"}\n    dismissed={false}"+(null!=n&&n.Dismissable?'\n    dismissAction={{\n        handleDismiss: () => setDismissed(true),\n        buttonTitle: "Merk som lest",\n    }}':"")+"\n/>\n"};var x=t(27685);const S=["className","errors","isSubmitted","isValid","messageProps"],M={title:"Feil og mangler i skjemaet"},D=(0,r.forwardRef)(((e,n)=>{const{className:t,errors:l,isSubmitted:a,isValid:i,messageProps:o}=e,c=(0,s.Z)(e,S),m=a&&!i,[d]=(0,x.v)(m,{display:"grid"}),u=(0,r.useRef)(l);(0,r.useEffect)((()=>{u.current=l}),[l]);const k=l.length>u.current.length;return r.createElement("div",Object.assign({ref:n,className:p()("jkl-form-error-message",t)},c),r.createElement(j,Object.assign({},M,o,{ref:d,role:k?"alert":"presentation"}),r.createElement("ul",{className:"jkl-list"},l.filter((e=>void 0!==e)).map((e=>r.createElement("li",{className:"jkl-list__item",key:e},e))))))}));D.displayName="FormErrorMessage";const P={boolProps:["Full width","Submitted","Gyldig fornavn","Gyldig etternavn"]},V=e=>{let{boolValues:n}=e;return r.createElement("div",null,r.createElement(D,{errors:[null!=n&&n["Gyldig fornavn"]?void 0:"Du må oppgi fornavn",null!=n&&n["Gyldig etternavn"]?void 0:"Du må oppgi etternavn"],isSubmitted:(null==n?void 0:n.Submitted)||!1,isValid:(null==n?void 0:n["Gyldig fornavn"])&&(null==n?void 0:n["Gyldig etternavn"])||!1,messageProps:{fullWidth:null==n?void 0:n["Full width"]}}),r.createElement("p",{className:"jkl-small"},"Velg ",r.createElement("i",null,"Submitted")," for å animere inn komponenten"))},F=e=>{let{boolValues:n}=e;return"\n<FormErrorMessage\n    errors={["+(null!=n&&n["Gyldig fornavn"]?"":'"Du må oppgi fornavn", ')+(null!=n&&n["Gyldig etternavn"]?"":'"Du må oppgi etternavn"')+"]}\n    isSubmitted={"+((null==n?void 0:n.Submitted)||!1)+"}\n    isValid={"+((null==n?void 0:n["Gyldig fornavn"])&&(null==n?void 0:n["Gyldig etternavn"]))+"}\n    messageProps={{\n        fullWidth: "+(null==n?void 0:n["Full width"])+",\n    }}\n/>\n"};function R(e){const n=Object.assign({p:"p",h2:"h2",a:"a",ul:"ul",li:"li",code:"code"},(0,l.ah)(),e.components),{Ingress:t,ComponentExample:a,Grid:s,DoDontExample:i}=n;return a||C("ComponentExample",!0),i||C("DoDontExample",!0),s||C("Grid",!0),t||C("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(t,null,r.createElement(n.p,null,"En melding er en beskjed til brukeren som vises i tilknytning til innhold på\nsiden. Det kan være et varsel om at noe er feil, informasjon om at noe\nmangler i et skjema, eller en bekreftelse på at noe har blitt oppdatert.")),"\n",r.createElement(a,{title:"Message",component:w,knobs:N,codeExample:O}),"\n",r.createElement(n.p,null,"Meldingene består en meldingstekst og en valgfri overskrift."),"\n",r.createElement(n.p,null,"Om meldingen ikke er koblet til en tilstand på siden (for eksempel en feil i et skjema) kan man la brukeren lukke den. Tenk på om siden bør huske at brukeren lukket meldingen."),"\n",r.createElement(n.h2,null,"Varianter"),"\n",r.createElement(n.p,null,"Vi har fire ulike meldinger, med fargene blå, rød, gul og grønn. ",r.createElement(n.a,{href:"/preview/use-storybook-for-dev/profil/farger#meldingsfargene"},"Meldingsfargene våre er funksjonelle"),". Det vil si at hver variant har en betydning:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Blått er for generell informasjon til brukeren."),"\n",r.createElement(n.li,null,"Gult gir brukeren en advarsel, for eksempel at en funksjonalitet er i beta og derfor er ustabil."),"\n",r.createElement(n.li,null,"Rødt gir brukeren en feilmelding, for eksempel om det oppstår en systemfeil eller brukeren avbryter en handling."),"\n",r.createElement(n.li,null,"Grønt betyr at en handling var vellykket."),"\n"),"\n",r.createElement(n.h2,null,"I skjema"),"\n",r.createElement(n.p,null,"Som beskrevet i ",r.createElement(n.a,{href:"/preview/use-storybook-for-dev/guider/skjemadesign#skjemavalidering"},"Skjemavalidering")," bruker vi en ErrorMessage til å oppsummere valideringsfeil. Det finnes en ferdig variant ",r.createElement(n.code,null,"FormErrorMessage")," som animeres, og skjules på små skjermer. Se ",r.createElement(n.a,{href:"/preview/use-storybook-for-dev/demoer/skjemavalidering"},"eksempelet på skjemavalidering")," for å se komponenten i bruk."),"\n",r.createElement(a,{title:"FormErrorMessage",component:V,knobs:P,codeExample:F}),"\n",r.createElement(n.h2,null,"Tilgjengelighet"),"\n",r.createElement(n.p,null,"Når vi bruker meldinger med farge, må vi alltid huske å ha en god og beskrivende tekst, siden farge ikke er et godt nok kjennetegn for alle brukere. Skriv en presis meldingstekst, der du sier det viktigste først."),"\n",r.createElement(n.p,null,r.createElement(n.code,null,"ErrorMessage")," og ",r.createElement(n.code,null,"WarningMessage")," har ",r.createElement(n.code,null,'role="alert"'),", som betyr at innholdet vil bli lest opp av skjermlesere uansett hvor skjermleserens markør befinner seg på siden. Rollen kan overstyres."),"\n",r.createElement(n.h2,null,"Når bruker vi en melding?"),"\n",r.createElement(n.p,null,"Før du bruker en melding er det greit å ha tatt stilling til noen spørsmål:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Er beskjeden tilknyttet innholdet den står i nærheten av?"),"\n",r.createElement(n.li,null,"Er beskjeden tydelig nok til å forstås uten farge som kjennetegn?"),"\n",r.createElement(n.li,null,"Kan meldingen lukkes? Bør den da skjules ved neste besøk?"),"\n"),"\n",r.createElement(n.p,null,"Om meldingen er helt selvstendig (ikke tilknyttet noe av innholdet på siden) skal vi bruke ",r.createElement(n.a,{href:"/preview/use-storybook-for-dev/komponenter/systemmessage"},"SystemMessage"),"."),"\n",r.createElement(s,null,r.createElement(i,{type:"do",description:"Vis meldingen i kontekst av innholdet",image:"/assets/do-donts/system-message-dont-1.png"})))}var G=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(R,e)):R(e)};function C(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var I=t(75482),T=t(96036),W=t(59001),A=t(65458),B=t(79379);const L=e=>{let{pageContext:n}=e;return r.createElement(T.p,{title:n.title})},Z=e=>{let{location:n,data:t,pageContext:l,children:a}=e;const{frontmatter:s}=t.page,{types:i}=l;return r.createElement(B.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(A.M1,Object.assign({},s,{versions:l.versions})),n.pathname.includes("komponenter")&&r.createElement(W.c,{variant:"komponent",component:s.title}),r.createElement(A.w5,s),a,i&&r.createElement(I.l,{types:i}))};function H(e){return r.createElement(Z,e,r.createElement(G,e))}},75482:function(e,n,t){t.d(n,{l:function(){return k}});var l=t(96845),r=t(41162),a=t(74797),s=t(92379),i=t(25329);const o=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},m=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},d=(e,n)=>{const{scrollLeft:t,scrollWidth:l}=e,{clientWidth:r}=n,a=t>0,s=l-t>r;n.classList.toggle("left-shadow",a),n.classList.toggle("right-shadow",s)},u=e=>{const n=e.target,t=n.parentElement;d(n,t)},p=e=>{let{props:n}=e;const t=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&d(n,e)}}))})),l=t.current.parentElement.parentElement;n.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=n,l.map((e=>{var n,t;return[e.name?o(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?o(e.type.name):""]})))})));var l},k=e=>{let{types:n}=e;return s.createElement("section",{className:"mb-104 jkl-portal-paragraph"},s.createElement("h2",{className:"heading-1 mt-104"},"React API"),s.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const l=t.props?Object.values(t.props).filter(m):[],a=t.props?Object.values(t.props).filter(c):[],o=(e=>{var n,t,l,r,a,s;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(s=e.tags)&&void 0!==s&&s.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return s.createElement(r.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},o&&s.createElement(i.dn,{className:"jkl-portal-code-block"},o),l.length>0&&s.createElement(p,{props:l}),a.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(p,{props:a})))}))))}},59001:function(e,n,t){t.d(n,{c:function(){return i}});var l=t(48467),r=t(58990),a=t(92379),s=t(25329);const i=e=>{let{variant:n,component:t}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(r.U,null),a.createElement(s.nv,null,o[n].text)),a.createElement(l.r,{href:o[n].link+"+<"+t+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},o={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,n,t){t.d(n,{M:function(){return o}});var l=t(80324),r=t.n(l),a=t(24157),s=t(92379),i=t(69215);const o=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:l}=(0,s.useContext)(i.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||o?0:.35},className:r()("jkl-portal__main",n),id:"innhold"},t)}},96845:function(e,n,t){t.d(n,{U:function(){return o}});var l=t(99767),r=t(651),a=t(80324),s=t.n(a);const i=["className","density","id"],o=e=>{let{className:n,density:t,id:a}=e,o=(0,l.Z)(e,i);return(0,r.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:s()("jkl-accordion",n),"data-density":t,id:a},o))}},41162:function(e,n,t){t.d(n,{Q:function(){return d}});var l=t(99767),r=t(651),a=t(42054),s=t(95020),i=t(80324),o=t.n(i),c=t(92379);const m=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:n,title:t,className:i,startExpanded:d=!1,onClick:u,id:p}=e,k=(0,l.Z)(e,m);const[g,f]=(0,c.useState)(d),[v]=(0,c.useState)((()=>d)),{detailsRef:b,summaryRef:E,contentRef:j,onSummaryClick:h}=(0,s.E)({onOpenChange:(e,n)=>{f(e),u&&u(n,e)},isExpanded:v});return(0,r.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:o()("jkl-accordion-item",i),ref:b,id:p,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:E,children:[t,(0,r.jsx)(a.K,{className:"jkl-accordion-item__arrow",pointingDown:!g,bold:g})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:j,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]}))}},3456:function(e,n,t){t.d(n,{O:function(){return d}});var l=t(80324),r=t.n(l),a=t(92379),s=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,n,t)=>n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const d=a.forwardRef((function(e,n){const t=e,{active:l=!1,back:s=!1,className:d,children:u,as:p="a"}=t,k=((e,n)=>{var t={};for(var l in e)o.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&i)for(var l of i(e))n.indexOf(l)<0&&c.call(e,l)&&(t[l]=e[l]);return t})(t,["active","back","className","children","as"]),g=p;return a.createElement(g,((e,n)=>{for(var t in n||(n={}))o.call(n,t)&&m(e,t,n[t]);if(i)for(var t of i(n))c.call(n,t)&&m(e,t,n[t]);return e})({ref:n,className:r()("jkl-nav-link",{"jkl-nav-link--active":l,"jkl-nav-link--back":s},d)},k),s&&a.createElement(a.Fragment,null,a.createElement("span",{"aria-hidden":!0,ref:n,className:r()("jkl-icon","jkl-icon--small","jkl-nav-link__icon")},"")),u,!s&&a.createElement(a.Fragment,null,a.createElement("span",{"aria-hidden":!0,ref:n,className:r()("jkl-icon","jkl-icon--small","jkl-nav-link__icon")},"")))}))},58990:function(e,n,t){t.d(n,{U:function(){return m}});var l=t(92379),r=t(55650),a=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const m=e=>l.createElement(r.J,((e,n)=>{for(var t in n||(n={}))i.call(n,t)&&c(e,t,n[t]);if(s)for(var t of s(n))o.call(n,t)&&c(e,t,n[t]);return e})({},e),"");m.displayName="QuestionIcon"},74797:function(e,n,t){t.d(n,{w:function(){return b}});var l=t(92379),r=t(94207),a=t(49309),s=t(36774),i=t(64081),o=t(64483),c=t(42104),m=t(98746),d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,n,t)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const b=(0,l.forwardRef)(((e,n)=>{var t,d=e,{caption:b,columns:E,emptyTableText:j,rows:h,verticalAlign:y}=d,N=((e,n)=>{var t={};for(var l in e)g.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&k)for(var l of k(e))n.indexOf(l)<0&&f.call(e,l)&&(t[l]=e[l]);return t})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return l.createElement(r.i,(t=((e,n)=>{for(var t in n||(n={}))g.call(n,t)&&v(e,t,n[t]);if(k)for(var t of k(n))f.call(n,t)&&v(e,t,n[t]);return e})({fullWidth:!0},N),u(t,p({ref:n}))),b&&l.createElement(s.R,{srOnly:!0},b),l.createElement(o.s,null,l.createElement(m.S,null,E.map(((e,n)=>l.createElement(c.x,{key:n,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===h.length&&j&&l.createElement(m.S,null,l.createElement(i.p,{colSpan:E.length},j)),h.map(((e,n)=>l.createElement(m.S,{key:n},e.map(((e,n)=>l.createElement(i.p,{key:n,"data-th":E[n],verticalAlign:y},e))))))))}));b.displayName="DataTable"}}]);