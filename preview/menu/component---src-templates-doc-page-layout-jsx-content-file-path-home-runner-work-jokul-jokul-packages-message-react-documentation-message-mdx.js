"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3176],{54543:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return T},Head:function(){return W},default:function(){return A}});var l=t(47160),r=t(70079),a=t(41992),s=t(46746),i=t(86636),o=t(52762),m=t(11607),c=t(3438),d=t(80324),u=t.n(d),p=t(79661);const g=(0,r.forwardRef)(((e,n)=>{let{label:t="Lukk",...l}=e;return r.createElement("button",Object.assign({ref:n,type:"button",title:t},l),r.createElement(p.T,{variant:"small",bold:!0}),r.createElement("span",{className:"jkl-sr-only"},t))}));g.displayName="DismissButton";function k(e){const n=(0,r.forwardRef)(((n,t)=>{const{id:l,title:a,fullWidth:d,density:p,className:k="",dismissed:v,dismissAction:f,children:E,role:b,...h}=n,j=(0,c.M)(l||"jkl-message",{generateSuffix:!l}),y=r.Children.map(E,(e=>"string"==typeof e)),N=null!=y&&y[0]?r.createElement("p",null,E):E;return r.createElement("div",Object.assign({},h,{id:l,ref:t,className:u()("jkl-message","jkl-message--"+e,k,{"jkl-message--full":d,"jkl-message--dismissed":v}),role:b,"data-density":p}),(e=>{switch(e){case"error":return r.createElement(s.P,{className:"jkl-message__icon"});case"info":return r.createElement(i.s,{className:"jkl-message__icon"});case"success":return r.createElement(o.t,{className:"jkl-message__icon"});case"warning":return r.createElement(m.a,{className:"jkl-message__icon"});default:return null}})(e),r.createElement("div",{className:"jkl-message__content","data-theme":"light"},a&&r.createElement("p",{className:"jkl-message__title"},a),r.createElement("div",{className:"jkl-message__message"},N)),(null==f?void 0:f.handleDismiss)&&r.createElement(g,{"aria-controls":j,className:"jkl-message__dismiss-button",label:f.buttonTitle||"Lukk",onClick:f.handleDismiss}))}));return n.displayName="Message",n}const v=k("info");v.displayName="InfoMessage";const f=k("error");f.displayName="ErrorMessage";const E=k("warning");E.displayName="WarningMessage";const b=k("success");b.displayName="SuccessMessage";const h={boolProps:["Full width","Dismissable","No title"],choiceProps:[{name:"Variant",values:["Info","Success","Warning","Error"],defaultValue:0}]},j=e=>{switch(e){case"Info":default:return v;case"Success":return b;case"Warning":return E;case"Error":return f}},y=e=>{let{boolValues:n,choiceValues:t}=e;const{0:l,1:s}=(0,r.useState)(!1),i=j(null==t?void 0:t.Variant),o=null!=n&&n.Dismissable?{handleDismiss:()=>{s(!0),setTimeout((()=>s(!1)),2600)},buttonTitle:"Merk som lest"}:void 0;return r.createElement(i,{fullWidth:null==n?void 0:n["Full width"],title:null!=n&&n["No title"]||null==t?void 0:t.Variant,dismissed:l,dismissAction:o,role:"none presentation"},r.createElement("p",null,"Hei, jeg er en melding av typen ",null==t?void 0:t.Variant," med"," ",r.createElement(a.O,{href:"/komponenter/Message"},"en navlink")))},N=e=>{let{boolValues:n,choiceValues:t}=e;return"\n<"+j(t?t.Variant:"").displayName+(null!=n&&n["No title"]?'\n    title="'+(null==t?void 0:t.Variant):"")+"\n    fullWidth={"+(null==n?void 0:n["Full width"])+"}\n    dismissed={false}"+(null!=n&&n.Dismissable?'\n    dismissAction={{\n        handleDismiss: () => setDismissed(true),\n        buttonTitle: "Merk som lest",\n    }}':"")+"\n/>\n"};var _=t(84490);const w={title:"Feil og mangler i skjemaet"},S=(0,r.forwardRef)(((e,n)=>{const{className:t,errors:l,isSubmitted:a,isValid:s,messageProps:i,...o}=e,m=a&&!s,[c]=(0,_.v)(m,{display:"grid"}),d=(0,r.useRef)(l);(0,r.useEffect)((()=>{d.current=l}),[l]);const p=l.length>d.current.length;return r.createElement("div",Object.assign({ref:n,className:u()("jkl-form-error-message",t)},o),r.createElement(f,Object.assign({},w,i,{ref:c,role:p?"alert":"presentation"}),r.createElement("ul",{className:"jkl-list"},l.filter((e=>void 0!==e)).map((e=>r.createElement("li",{className:"jkl-list__item",key:e},e))))))}));S.displayName="FormErrorMessage";const M={boolProps:["Full width","Submitted","Gyldig fornavn","Gyldig etternavn"]},x=e=>{let{boolValues:n}=e;return r.createElement("div",null,r.createElement(S,{errors:[null!=n&&n["Gyldig fornavn"]?void 0:"Du må oppgi fornavn",null!=n&&n["Gyldig etternavn"]?void 0:"Du må oppgi etternavn"],isSubmitted:(null==n?void 0:n.Submitted)||!1,isValid:(null==n?void 0:n["Gyldig fornavn"])&&(null==n?void 0:n["Gyldig etternavn"])||!1,messageProps:{fullWidth:null==n?void 0:n["Full width"]}}),r.createElement("p",{className:"jkl-small"},"Velg ",r.createElement("i",null,"Submitted")," for å animere inn komponenten"))},D=e=>{let{boolValues:n}=e;return"\n<FormErrorMessage\n    errors={["+(null!=n&&n["Gyldig fornavn"]?"":'"Du må oppgi fornavn", ')+(null!=n&&n["Gyldig etternavn"]?"":'"Du må oppgi etternavn"')+"]}\n    isSubmitted={"+((null==n?void 0:n.Submitted)||!1)+"}\n    isValid={"+((null==n?void 0:n["Gyldig fornavn"])&&(null==n?void 0:n["Gyldig etternavn"]))+"}\n    messageProps={{\n        fullWidth: "+(null==n?void 0:n["Full width"])+",\n    }}\n/>\n"};function V(e){const n=Object.assign({p:"p",h2:"h2",a:"a",ul:"ul",li:"li",code:"code"},(0,l.ah)(),e.components),{Ingress:t,ComponentExample:a,Grid:s,DoDontExample:i}=n;return a||R("ComponentExample",!0),i||R("DoDontExample",!0),s||R("Grid",!0),t||R("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(t,null,r.createElement(n.p,null,"En melding er en beskjed til brukeren som vises i tilknytning til innhold på siden. Det kan være et varsel om at noe\ner feil, informasjon om at noe mangler i et skjema, eller en bekreftelse på at noe har blitt oppdatert.")),"\n",r.createElement(a,{title:"Message",component:y,knobs:h,codeExample:N}),"\n",r.createElement(n.p,null,"Meldingene består en meldingstekst og en valgfri overskrift."),"\n",r.createElement(n.p,null,"Om meldingen ikke er koblet til en tilstand på siden (for eksempel en feil i et skjema) kan man la brukeren lukke den. Tenk på om siden bør huske at brukeren lukket meldingen."),"\n",r.createElement(n.h2,null,"Varianter"),"\n",r.createElement(n.p,null,"Vi har fire ulike meldinger, med fargene blå, rød, gul og grønn. ",r.createElement(n.a,{href:"/preview/menu/profil/farger#meldingsfargene"},"Meldingsfargene våre er funksjonelle"),". Det vil si at hver variant har en betydning:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Blått er for generell informasjon til brukeren."),"\n",r.createElement(n.li,null,"Gult gir brukeren en advarsel, for eksempel at en funksjonalitet er i beta og derfor er ustabil."),"\n",r.createElement(n.li,null,"Rødt gir brukeren en feilmelding, for eksempel om det oppstår en systemfeil eller brukeren avbryter en handling."),"\n",r.createElement(n.li,null,"Grønt betyr at en handling var vellykket."),"\n"),"\n",r.createElement(n.h2,null,"I skjema"),"\n",r.createElement(n.p,null,"Som beskrevet i ",r.createElement(n.a,{href:"/preview/menu/guider/skjemadesign#skjemavalidering"},"Skjemavalidering")," bruker vi en ErrorMessage til å oppsummere valideringsfeil. Det finnes en ferdig variant ",r.createElement(n.code,null,"FormErrorMessage")," som animeres, og skjules på små skjermer. Se ",r.createElement(n.a,{href:"/preview/menu/demoer/skjemavalidering"},"eksempelet på skjemavalidering")," for å se komponenten i bruk."),"\n",r.createElement(a,{title:"FormErrorMessage",component:x,knobs:M,codeExample:D}),"\n",r.createElement(n.h2,null,"Tilgjengelighet"),"\n",r.createElement(n.p,null,"Når vi bruker meldinger med farge, må vi alltid huske å ha en god og beskrivende tekst, siden farge ikke er et godt nok kjennetegn for alle brukere. Skriv en presis meldingstekst, der du sier det viktigste først."),"\n",r.createElement(n.p,null,r.createElement(n.code,null,"ErrorMessage")," og ",r.createElement(n.code,null,"WarningMessage")," har ",r.createElement(n.code,null,'role="alert"'),", som betyr at innholdet vil bli lest opp av skjermlesere uansett hvor skjermleserens markør befinner seg på siden. Rollen kan overstyres."),"\n",r.createElement(n.h2,null,"Når bruker vi en melding?"),"\n",r.createElement(n.p,null,"Før du bruker en melding er det greit å ha tatt stilling til noen spørsmål:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Er beskjeden tilknyttet innholdet den står i nærheten av?"),"\n",r.createElement(n.li,null,"Er beskjeden tydelig nok til å forstås uten farge som kjennetegn?"),"\n",r.createElement(n.li,null,"Kan meldingen lukkes? Bør den da skjules ved neste besøk?"),"\n"),"\n",r.createElement(n.p,null,"Om meldingen er helt selvstendig (ikke tilknyttet noe av innholdet på siden) skal vi bruke ",r.createElement(n.a,{href:"/preview/menu/komponenter/systemmessage"},"SystemMessage"),"."),"\n",r.createElement(s,null,r.createElement(i,{type:"do",description:"Vis meldingen i kontekst av innholdet",image:"/assets/do-donts/system-message-dont-1.png"})))}var O=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(V,e)):V(e)};function R(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var F=t(72285),G=t(22756),C=t(95573),P=t(1634);const W=e=>{let{pageContext:n}=e;return r.createElement(G.p,{title:n.title})},T=e=>{let{location:n,data:t,pageContext:l,children:a}=e;const{frontmatter:s}=t.page,{types:i}=l;return r.createElement(P.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(C.M1,Object.assign({},s,{versions:l.versions})),r.createElement(C.w5,s),a,i&&r.createElement(F.l,{types:i}))};function A(e){return r.createElement(T,e,r.createElement(O,e))}},72285:function(e,n,t){t.d(n,{l:function(){return g}});var l=t(58820),r=t(63571),a=t(87505),s=t(70079),i=t(54656);const o=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),m=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},d=(e,n)=>{const{scrollLeft:t,scrollWidth:l}=e,{clientWidth:r}=n,a=t>0,s=l-t>r;n.classList.toggle("left-shadow",a),n.classList.toggle("right-shadow",s)},u=e=>{const n=e.target,t=n.parentElement;d(n,t)},p=e=>{let{props:n}=e;const t=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&d(n,e)}}))})),l=t.current.parentElement.parentElement;n.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=n,l.map((e=>{var n,t;return[e.name?o(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?o(e.type.name):""]})))})));var l},g=e=>{let{types:n}=e;return s.createElement("section",{className:"mb-104 jkl-portal-paragraph"},s.createElement("h2",{className:"heading-1 mt-104"},"React API"),s.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const l=t.props?Object.values(t.props).filter(c):[],a=t.props?Object.values(t.props).filter(m):[],o=(e=>{var n,t,l,r,a,s;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(s=e.tags)&&void 0!==s&&s.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return s.createElement(r.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},o&&s.createElement(i.dn,{className:"jkl-portal-code-block"},o),l.length>0&&s.createElement(p,{props:l}),a.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(p,{props:a})))}))))}},1634:function(e,n,t){t.d(n,{M:function(){return o}});var l=t(26372),r=t.n(l),a=t(49597),s=t(70079),i=t(34044);const o=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:l}=(0,s.useContext)(i.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||o?0:.35},className:r()("jkl-portal__main",n),id:"innhold"},t)}},58820:function(e,n,t){t.d(n,{U:function(){return s}});var l=t(35250),r=t(26372),a=t.n(r);const s=e=>{let{className:n,density:t,id:r,...s}=e;return(0,l.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",n),"data-density":t,id:r,...s})}},63571:function(e,n,t){t.d(n,{Q:function(){return m}});var l=t(35250),r=t(68998),a=t(1386),s=t(26372),i=t.n(s),o=t(70079);const m=e=>{let{children:n,title:t,className:s,startExpanded:m=!1,onClick:c,id:d,...u}=e;const[p,g]=(0,o.useState)(m),[k]=(0,o.useState)((()=>m)),{detailsRef:v,summaryRef:f,contentRef:E,onSummaryClick:b}=(0,a.E)({onOpenChange:(e,n)=>{g(e),c&&c(n,e)},isExpanded:k});return(0,l.jsxs)("details",{"data-testid":"jkl-accordion-item",...u,className:i()("jkl-accordion-item",s),ref:v,id:d,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:b,ref:f,children:[t,(0,l.jsx)(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]})}},41992:function(e,n,t){t.d(n,{O:function(){return s}});var l=t(26372),r=t.n(l),a=t(70079);const s=a.forwardRef((function(e,n){const{active:t=!1,back:l=!1,className:s,children:i,as:o="a",...m}=e,c=o;return a.createElement(c,{ref:n,className:r()("jkl-nav-link",{"jkl-nav-link--active":t,"jkl-nav-link--back":l},s),...m},i)}))},87505:function(e,n,t){t.d(n,{w:function(){return d}});var l=t(70079),r=t(41699),a=t(65174),s=t(6914),i=t(82546),o=t(39126),m=t(66169),c=t(94509);const d=(0,l.forwardRef)(((e,n)=>{let{caption:t,columns:d,emptyTableText:u,rows:p,verticalAlign:g,...k}=e;return l.createElement(r.i,{fullWidth:!0,...k,ref:n},t&&l.createElement(s.R,{srOnly:!0},t),l.createElement(o.s,null,l.createElement(c.S,null,d.map(((e,n)=>l.createElement(m.x,{key:n,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&u&&l.createElement(c.S,null,l.createElement(i.p,{colSpan:d.length},u)),p.map(((e,n)=>l.createElement(c.S,{key:n},e.map(((e,n)=>l.createElement(i.p,{key:n,"data-th":d[n],verticalAlign:g},e))))))))}));d.displayName="DataTable"}}]);