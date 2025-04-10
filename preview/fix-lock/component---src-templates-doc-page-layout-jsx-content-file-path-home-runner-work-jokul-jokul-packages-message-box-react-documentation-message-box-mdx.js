"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1463],{90861:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return W},Head:function(){return P},default:function(){return T}});var l=n(47160),r=n(70079),a=n(41992),s=n(3133),i=n(36090),o=n(91720),c=n(65838),m=n(3438),u=n(26372),d=n.n(u),p=n(95176);const g=(0,r.forwardRef)(((e,t)=>{let{label:n="Lukk",...l}=e;return r.createElement("button",Object.assign({ref:t,type:"button",title:n},l),r.createElement(p.T,{variant:"small",bold:!0}),r.createElement("span",{className:"jkl-sr-only"},n))}));g.displayName="DismissButton";function k(e){const t=(0,r.forwardRef)(((t,n)=>{const{id:l,title:a,fullWidth:u,density:p,className:k="",dismissed:f,dismissAction:v,children:E,role:b,...h}=t,j=(0,m.M)(l||"jkl-message-box",{generateSuffix:!l}),y=r.Children.map(E,(e=>"string"==typeof e)),x=null!=y&&y[0]?r.createElement("p",null,E):E;return r.createElement("div",Object.assign({},h,{id:l,ref:n,className:d()("jkl-message-box","jkl-message-box--"+e,k,{"jkl-message-box--full":u,"jkl-message-box--dismissed":f}),role:b,"data-density":p}),(e=>{switch(e){case"error":return r.createElement(s.P,{className:"jkl-message-box__icon"});case"info":return r.createElement(i.s,{className:"jkl-message-box__icon"});case"success":return r.createElement(o.t,{className:"jkl-message-box__icon"});case"warning":return r.createElement(c.a,{className:"jkl-message-box__icon"});default:return null}})(e),r.createElement("div",{className:"jkl-message-box__content","data-theme":"light"},a&&r.createElement("p",{className:"jkl-message-box__title"},a),r.createElement("div",{className:"jkl-message-box__message"},x)),(null==v?void 0:v.handleDismiss)&&r.createElement(g,{"aria-controls":j,className:"jkl-message-box__dismiss-button",label:v.buttonTitle||"Lukk",onClick:v.handleDismiss}))}));return t.displayName="MessageBox",t}const f=k("info");f.displayName="InfoMessageBox";const v=k("error");v.displayName="ErrorMessageBox";const E=k("warning");E.displayName="WarningMessageBox";const b=k("success");b.displayName="SuccessMessageBox";const h={boolProps:["Full width","Dismissable","No title"],choiceProps:[{name:"Variant",values:["Info","Success","Warning","Error"],defaultValue:0}]},j=e=>{switch(e){case"Info":default:return f;case"Success":return b;case"Warning":return E;case"Error":return v}},y=e=>{let{boolValues:t,choiceValues:n}=e;const{0:l,1:s}=(0,r.useState)(!1),i=j(null==n?void 0:n.Variant),o=null!=t&&t.Dismissable?{handleDismiss:()=>{s(!0),setTimeout((()=>s(!1)),2600)},buttonTitle:"Merk som lest"}:void 0;return r.createElement(i,{fullWidth:null==t?void 0:t["Full width"],title:null!=t&&t["No title"]||null==n?void 0:n.Variant,dismissed:l,dismissAction:o,role:"none presentation"},r.createElement("p",null,"Hei, jeg er en melding av typen ",null==n?void 0:n.Variant," med"," ",r.createElement(a.O,{href:"/komponenter/messagebox"},"en navlink")))},x=e=>{let{boolValues:t,choiceValues:n}=e;return"\n<"+j(n?n.Variant:"").displayName+(null!=t&&t["No title"]?'\n    title="'+(null==n?void 0:n.Variant):"")+"\n    fullWidth={"+(null==t?void 0:t["Full width"])+"}\n    dismissed={false}"+(null!=t&&t.Dismissable?'\n    dismissAction={{\n        handleDismiss: () => setDismissed(true),\n        buttonTitle: "Merk som lest",\n    }}':"")+"\n/>\n"};var N=n(84490);const _={title:"Feil og mangler i skjemaet"},w=(0,r.forwardRef)(((e,t)=>{const{className:n,errors:l,isSubmitted:a,isValid:s,messageBoxProps:i,...o}=e,c=a&&!s,[m]=(0,N.v)(c,{display:"grid"}),u=(0,r.useRef)(l);(0,r.useEffect)((()=>{u.current=l}),[l]);const p=l.length>u.current.length;return r.createElement("div",Object.assign({ref:t,className:d()("jkl-form-error-message-box",n)},o),r.createElement(v,Object.assign({},_,i,{ref:m,role:p?"alert":"presentation"}),r.createElement("ul",{className:"jkl-list"},l.filter((e=>void 0!==e)).map((e=>r.createElement("li",{className:"jkl-list__item",key:e},e))))))}));w.displayName="FormErrorMessageBox";const S={boolProps:["Full width","Submitted","Gyldig fornavn","Gyldig etternavn"]},M=e=>{let{boolValues:t}=e;return r.createElement("div",null,r.createElement(w,{errors:[null!=t&&t["Gyldig fornavn"]?void 0:"Du må oppgi fornavn",null!=t&&t["Gyldig etternavn"]?void 0:"Du må oppgi etternavn"],isSubmitted:(null==t?void 0:t.Submitted)||!1,isValid:(null==t?void 0:t["Gyldig fornavn"])&&(null==t?void 0:t["Gyldig etternavn"])||!1,messageBoxProps:{fullWidth:null==t?void 0:t["Full width"]}}),r.createElement("p",{className:"jkl-small"},"Velg ",r.createElement("i",null,"Submitted")," for å animere inn komponenten"))},D=e=>{let{boolValues:t}=e;return"\n<FormErrorMessageBox\n    errors={["+(null!=t&&t["Gyldig fornavn"]?"":'"Du må oppgi fornavn", ')+(null!=t&&t["Gyldig etternavn"]?"":'"Du må oppgi etternavn"')+"]}\n    isSubmitted={"+((null==t?void 0:t.Submitted)||!1)+"}\n    isValid={"+((null==t?void 0:t["Gyldig fornavn"])&&(null==t?void 0:t["Gyldig etternavn"]))+"}\n    messageBoxProps={{\n        fullWidth: "+(null==t?void 0:t["Full width"])+",\n    }}\n/>\n"};function R(e){const t=Object.assign({p:"p",h2:"h2",a:"a",ul:"ul",li:"li",code:"code"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:a,Grid:s,DoDontExample:i}=t;return a||B("ComponentExample",!0),i||B("DoDontExample",!0),s||B("Grid",!0),n||B("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"En melding er en beskjed til brukeren som vises i tilknytning til innhold på siden. Det kan være et varsel om at noe\ner feil, informasjon om at noe mangler i et skjema, eller en bekreftelse på at noe har blitt oppdatert.")),"\n",r.createElement(a,{title:"MessageBox",component:y,knobs:h,codeExample:x}),"\n",r.createElement(t.p,null,"Meldingene består en meldingstekst og en valgfri overskrift."),"\n",r.createElement(t.p,null,"Om meldingen ikke er koblet til en tilstand på siden (for eksempel en feil i et skjema) kan man la brukeren lukke den. Tenk på om siden bør huske at brukeren lukket meldingen."),"\n",r.createElement(t.h2,null,"Varianter"),"\n",r.createElement(t.p,null,"Vi har fire ulike meldinger, med fargene blå, rød, gul og grønn. ",r.createElement(t.a,{href:"/preview/fix-lock/profil/farger#meldingsfargene"},"Meldingsfargene våre er funksjonelle"),". Det vil si at hver variant har en betydning:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Blått er for generell informasjon til brukeren."),"\n",r.createElement(t.li,null,"Gult gir brukeren en advarsel, for eksempel at en funksjonalitet er i beta og derfor er ustabil."),"\n",r.createElement(t.li,null,"Rødt gir brukeren en feilmelding, for eksempel om det oppstår en systemfeil eller brukeren avbryter en handling."),"\n",r.createElement(t.li,null,"Grønt betyr at en handling var vellykket."),"\n"),"\n",r.createElement(t.h2,null,"I skjema"),"\n",r.createElement(t.p,null,"Som beskrevet i ",r.createElement(t.a,{href:"/preview/fix-lock/guider/skjemadesign#skjemavalidering"},"Skjemavalidering")," bruker vi en ErrorMessageBox til å oppsummere valideringsfeil. Det finnes en ferdig variant ",r.createElement(t.code,null,"FormErrorMessageBox")," som animeres, og skjules på små skjermer. Se ",r.createElement(t.a,{href:"/preview/fix-lock/demoer/skjemavalidering"},"eksempelet på skjemavalidering")," for å se komponenten i bruk."),"\n",r.createElement(a,{title:"FormErrorMessageBox",component:M,knobs:S,codeExample:D}),"\n",r.createElement(t.h2,null,"Tilgjengelighet"),"\n",r.createElement(t.p,null,"Når vi bruker meldinger med farge, må vi alltid huske å ha en god og beskrivende tekst, siden farge ikke er et godt nok kjennetegn for alle brukere. Skriv en presis meldingstekst, der du sier det viktigste først."),"\n",r.createElement(t.p,null,r.createElement(t.code,null,"ErrorMessageBox")," og ",r.createElement(t.code,null,"WarningMessageBox")," har ",r.createElement(t.code,null,'role="alert"'),", som betyr at innholdet vil bli lest opp av skjermlesere uansett hvor skjermleserens markør befinner seg på siden. Rollen kan overstyres."),"\n",r.createElement(t.h2,null,"Når bruker vi en melding?"),"\n",r.createElement(t.p,null,"Før du bruker en melding er det greit å ha tatt stilling til noen spørsmål:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Er beskjeden tilknyttet innholdet den står i nærheten av?"),"\n",r.createElement(t.li,null,"Er beskjeden tydelig nok til å forstås uten farge som kjennetegn?"),"\n",r.createElement(t.li,null,"Kan meldingen lukkes? Bør den da skjules ved neste besøk?"),"\n"),"\n",r.createElement(t.p,null,"Om meldingen er helt selvstendig (ikke tilknyttet noe av innholdet på siden) skal vi bruke ",r.createElement(t.a,{href:"/preview/fix-lock/komponenter/alertmessage"},"AlertMessage"),"."),"\n",r.createElement(s,null,r.createElement(i,{type:"do",description:"Vis meldingen i kontekst av innholdet",image:"/assets/do-donts/alert-message-dont-1.png"})))}var V=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(R,e)):R(e)};function B(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var O=n(72285),F=n(22756),C=n(95573),G=n(1634);const P=e=>{let{pageContext:t}=e;return r.createElement(F.p,{title:t.title})},W=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:s}=n.page,{types:i}=l;return r.createElement(G.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(C.M1,Object.assign({},s,{versions:l.versions})),r.createElement(C.w5,s),a,i&&r.createElement(O.l,{types:i}))};function T(e){return r.createElement(W,e,r.createElement(V,e))}},72285:function(e,t,n){n.d(t,{l:function(){return g}});var l=n(78217),r=n(76802),a=n(87505),s=n(70079),i=n(54656);const o=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,s=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",s)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var l},g=e=>{let{types:t}=e;return s.createElement("section",{className:"mb-104 jkl-portal-paragraph"},s.createElement("h2",{className:"heading-1 mt-104"},"React API"),s.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],o=(e=>{var t,n,l,r,a,s;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(s=e.tags)&&void 0!==s&&s.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return s.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&s.createElement(i.dn,{className:"jkl-portal-code-block"},o),l.length>0&&s.createElement(p,{props:l}),a.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return o}});var l=n(26372),r=n.n(l),a=n(49597),s=n(70079),i=n(34044);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,s.useContext)(i.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||o?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return s}});var l=n(26372),r=n.n(l),a=n(70079);const s=e=>{let{className:t,density:n,...l}=e;return a.createElement("section",{role:"group","data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,...l})}},76802:function(e,t,n){n.d(t,{Q:function(){return o}});var l=n(53484),r=n(26372),a=n.n(r),s=n(70079);const i=e=>{let{onOpenChange:t,startExpanded:n}=e;const l=(0,s.useRef)(null),r=(0,s.useRef)(null),a=(0,s.useRef)(null),i=(0,s.useRef)(null),{0:o,1:c}=(0,s.useState)(!1),{0:m,1:u}=(0,s.useState)(!1);(0,s.useEffect)((()=>{l.current&&(l.current.open=n)}),[]);const d=e=>{l.current&&r.current&&(l.current.open=e,i.current=null,c(!1),u(!1),l.current.style.overflow="",l.current.style.height="")};return{detailsRef:l,summaryRef:r,contentRef:a,onSummaryClick:e=>{e.preventDefault(),l.current&&r.current&&(l.current.style.overflow="hidden",o||!l.current.open?(e=>{l.current&&r.current&&(l.current.style.height="".concat(l.current.offsetHeight,"px"),l.current.open=!0,requestAnimationFrame((()=>{if(l.current&&r.current&&a.current){u(!0),t(!0,e);const n=l.current.offsetHeight,s=r.current.offsetHeight+a.current.offsetHeight;i.current&&i.current.cancel(),l.current.animate&&(i.current=l.current.animate({height:["".concat(n,"px"),"".concat(s,"px")]},{duration:150,easing:"ease"}),i.current.onfinish=()=>d(!0),i.current.oncancel=()=>u(!1))}})))})(e):(m||l.current.open)&&(e=>{if(l.current&&r.current){c(!0),t(!1,e);const n=l.current.offsetHeight,a=r.current.offsetHeight;i.current&&i.current.cancel(),l.current.animate&&(i.current=l.current.animate({height:["".concat(n,"px"),"".concat(a,"px")]},{duration:150,easing:"ease"}),i.current.onfinish=()=>d(!1),i.current.oncancel=()=>c(!1))}})(e))}}},o=e=>{let{children:t,title:n,className:r,startExpanded:o=!1,onClick:c,...m}=e;const{0:u,1:d}=(0,s.useState)(o),{detailsRef:p,summaryRef:g,contentRef:k,onSummaryClick:f}=i({onOpenChange:(e,t)=>{d(e),c&&c(t,e)},startExpanded:o});return s.createElement("details",{"data-testid":"jkl-accordion-item",...m,className:a()("jkl-accordion-item",r),ref:p},s.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:f,ref:g},n,s.createElement(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})),s.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:k},s.createElement("div",{className:"jkl-accordion-item__content"},t)))}},41992:function(e,t,n){n.d(t,{O:function(){return s}});var l=n(26372),r=n.n(l),a=n(70079);const s=e=>{let{active:t=!1,back:n=!1,className:l,children:s,...i}=e;return a.createElement("a",{className:r()("jkl-nav-link",{"jkl-nav-link--active":t,"jkl-nav-link--back":n},l),...i},s)}},87505:function(e,t,n){n.d(t,{w:function(){return u}});var l=n(70079),r=n(41699),a=n(65174),s=n(6914),i=n(82546),o=n(39126),c=n(66169),m=n(94509);const u=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:d,rows:p,verticalAlign:g,...k}=e;return l.createElement(r.i,{fullWidth:!0,...k,ref:t},n&&l.createElement(s.R,{srOnly:!0},n),l.createElement(o.s,null,l.createElement(m.S,null,u.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&d&&l.createElement(m.S,null,l.createElement(i.p,{colSpan:u.length},d)),p.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":u[t],verticalAlign:g},e))))))))}));u.displayName="DataTable"}}]);