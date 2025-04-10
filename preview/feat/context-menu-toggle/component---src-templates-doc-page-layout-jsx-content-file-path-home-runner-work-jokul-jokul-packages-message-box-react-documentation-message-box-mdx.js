"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1463],{90861:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return C},Head:function(){return W},default:function(){return T}});var l=n(47160),r=n(70079),a=n(41992),s=n(3133),i=n(36090),o=n(91720),c=n(65838),m=n(3438),d=n(26372),u=n.n(d),p=n(95176);const g=(0,r.forwardRef)(((e,t)=>{let{label:n="Lukk",...l}=e;return r.createElement("button",Object.assign({ref:t,type:"button",title:n},l),r.createElement(p.T,{variant:"small",bold:!0}),r.createElement("span",{className:"jkl-sr-only"},n))}));g.displayName="DismissButton";function k(e){const t=(0,r.forwardRef)(((t,n)=>{const{id:l,title:a,fullWidth:d,density:p,className:k="",dismissed:v,dismissAction:f,children:E,role:b,...h}=t,j=(0,m.M)(l||"jkl-message-box",{generateSuffix:!l}),y=r.Children.map(E,(e=>"string"==typeof e)),N=null!=y&&y[0]?r.createElement("p",null,E):E;return r.createElement("div",Object.assign({},h,{id:l,ref:n,className:u()("jkl-message-box","jkl-message-box--"+e,k,{"jkl-message-box--full":d,"jkl-message-box--dismissed":v}),role:b,"data-theme":"light","data-density":p}),(e=>{switch(e){case"error":return r.createElement(s.P,{className:"jkl-message-box__icon"});case"info":return r.createElement(i.s,{className:"jkl-message-box__icon"});case"success":return r.createElement(o.t,{className:"jkl-message-box__icon"});case"warning":return r.createElement(c.a,{className:"jkl-message-box__icon"});default:return null}})(e),r.createElement("div",{className:"jkl-message-box__content"},a&&r.createElement("p",{className:"jkl-message-box__title"},a),r.createElement("div",{className:"jkl-message-box__message"},N)),(null==f?void 0:f.handleDismiss)&&r.createElement(g,{"aria-controls":j,className:"jkl-message-box__dismiss-button",label:f.buttonTitle||"Lukk",onClick:f.handleDismiss}))}));return t.displayName="MessageBox",t}const v=k("info");v.displayName="InfoMessageBox";const f=k("error");f.displayName="ErrorMessageBox";const E=k("warning");E.displayName="WarningMessageBox";const b=k("success");b.displayName="SuccessMessageBox";const h={boolProps:["Full width","Dismissable","No title"],choiceProps:[{name:"Variant",values:["Info","Success","Warning","Error"],defaultValue:0}]},j=e=>{switch(e){case"Info":default:return v;case"Success":return b;case"Warning":return E;case"Error":return f}},y=e=>{let{boolValues:t,choiceValues:n}=e;const{0:l,1:s}=(0,r.useState)(!1),i=j(null==n?void 0:n.Variant),o=null!=t&&t.Dismissable?{handleDismiss:()=>{s(!0),setTimeout((()=>s(!1)),2600)},buttonTitle:"Merk som lest"}:void 0;return r.createElement(i,{fullWidth:null==t?void 0:t["Full width"],title:null!=t&&t["No title"]||null==n?void 0:n.Variant,dismissed:l,dismissAction:o,role:"none presentation"},r.createElement("p",null,"Hei, jeg er en melding av typen ",null==n?void 0:n.Variant," med"," ",r.createElement(a.O,{href:"/komponenter/messagebox"},"en navlink")))},N=e=>{let{boolValues:t,choiceValues:n}=e;return"\n<"+j(n?n.Variant:"").displayName+(null!=t&&t["No title"]?'\n    title="'+(null==n?void 0:n.Variant):"")+"\n    fullWidth={"+(null==t?void 0:t["Full width"])+"}\n    dismissed={false}"+(null!=t&&t.Dismissable?'\n    dismissAction={{\n        handleDismiss: () => setDismissed(true),\n        buttonTitle: "Merk som lest",\n    }}':"")+"\n/>\n"};var x=n(84490);const _={title:"Feil og mangler i skjemaet"},w=(0,r.forwardRef)(((e,t)=>{const{className:n,errors:l,isSubmitted:a,isValid:s,messageBoxProps:i,...o}=e,c=a&&!s,[m]=(0,x.v)(c,{display:"grid"}),d=(0,r.useRef)(l);(0,r.useEffect)((()=>{d.current=l}),[l]);const p=l.length>d.current.length;return r.createElement("div",Object.assign({ref:t,className:u()("jkl-form-error-message-box",n)},o),r.createElement(f,Object.assign({},_,i,{ref:m,role:p?"alert":"presentation"}),r.createElement("ul",{className:"jkl-list"},l.filter((e=>void 0!==e)).map((e=>r.createElement("li",{className:"jkl-list__item",key:e},e))))))}));w.displayName="FormErrorMessageBox";const M={boolProps:["Full width","Submitted","Gyldig fornavn","Gyldig etternavn"]},S=e=>{let{boolValues:t}=e;return r.createElement("div",null,r.createElement(w,{errors:[null!=t&&t["Gyldig fornavn"]?void 0:"Du må oppgi fornavn",null!=t&&t["Gyldig etternavn"]?void 0:"Du må oppgi etternavn"],isSubmitted:(null==t?void 0:t.Submitted)||!1,isValid:(null==t?void 0:t["Gyldig fornavn"])&&(null==t?void 0:t["Gyldig etternavn"])||!1,messageBoxProps:{fullWidth:null==t?void 0:t["Full width"]}}),r.createElement("p",{className:"jkl-small"},"Velg ",r.createElement("i",null,"Submitted")," for å animere inn komponenten"))},D=e=>{let{boolValues:t}=e;return"\n<FormErrorMessageBox\n    errors={["+(null!=t&&t["Gyldig fornavn"]?"":'"Du må oppgi fornavn", ')+(null!=t&&t["Gyldig etternavn"]?"":'"Du må oppgi etternavn"')+"]}\n    isSubmitted={"+((null==t?void 0:t.Submitted)||!1)+"}\n    isValid={"+((null==t?void 0:t["Gyldig fornavn"])&&(null==t?void 0:t["Gyldig etternavn"]))+"}\n    messageBoxProps={{\n        fullWidth: "+(null==t?void 0:t["Full width"])+",\n    }}\n/>\n"};function V(e){const t=Object.assign({p:"p",h2:"h2",a:"a",ul:"ul",li:"li",code:"code"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:a,Grid:s,DoDontExample:i}=t;return a||O("ComponentExample",!0),i||O("DoDontExample",!0),s||O("Grid",!0),n||O("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"En melding er en beskjed til brukeren som vises i tilknytning til innhold på siden. Det kan være et varsel om at noe\ner feil, informasjon om at noe mangler i et skjema, eller en bekreftelse på at noe har blitt oppdatert.")),"\n",r.createElement(a,{title:"MessageBox",component:y,knobs:h,codeExample:N}),"\n",r.createElement(t.p,null,"Meldingene består en meldingstekst og en valgfri overskrift."),"\n",r.createElement(t.p,null,"Om meldingen ikke er koblet til en tilstand på siden (for eksempel en feil i et skjema) kan man la brukeren lukke den. Tenk på om siden bør huske at brukeren lukket meldingen."),"\n",r.createElement(t.h2,null,"Varianter"),"\n",r.createElement(t.p,null,"Vi har fire ulike meldinger, med fargene blå, rød, gul og grønn. ",r.createElement(t.a,{href:"/preview/feat/context-menu-toggle/profil/farger#meldingsfargene"},"Meldingsfargene våre er funksjonelle"),". Det vil si at hver variant har en betydning:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Blått er for generell informasjon til brukeren."),"\n",r.createElement(t.li,null,"Gult gir brukeren en advarsel, for eksempel at en funksjonalitet er i beta og derfor er ustabil."),"\n",r.createElement(t.li,null,"Rødt gir brukeren en feilmelding, for eksempel om det oppstår en systemfeil eller brukeren avbryter en handling."),"\n",r.createElement(t.li,null,"Grønt betyr at en handling var vellykket."),"\n"),"\n",r.createElement(t.h2,null,"I skjema"),"\n",r.createElement(t.p,null,"Som beskrevet i ",r.createElement(t.a,{href:"/preview/feat/context-menu-toggle/guider/skjemadesign#skjemavalidering"},"Skjemavalidering")," bruker vi en ErrorMessageBox til å oppsummere valideringsfeil. Det finnes en ferdig variant ",r.createElement(t.code,null,"FormErrorMessageBox")," som animeres, og skjules på små skjermer. Se ",r.createElement(t.a,{href:"/preview/feat/context-menu-toggle/demoer/skjemavalidering"},"eksempelet på skjemavalidering")," for å se komponenten i bruk."),"\n",r.createElement(a,{title:"FormErrorMessageBox",component:S,knobs:M,codeExample:D}),"\n",r.createElement(t.h2,null,"Tilgjengelighet"),"\n",r.createElement(t.p,null,"Når vi bruker meldinger med farge, må vi alltid huske å ha en god og beskrivende tekst, siden farge ikke er et godt nok kjennetegn for alle brukere. Skriv en presis meldingstekst, der du sier det viktigste først."),"\n",r.createElement(t.p,null,r.createElement(t.code,null,"ErrorMessageBox")," og ",r.createElement(t.code,null,"WarningMessageBox")," har ",r.createElement(t.code,null,'role="alert"'),", som betyr at innholdet vil bli lest opp av skjermlesere uansett hvor skjermleserens markør befinner seg på siden. Rollen kan overstyres."),"\n",r.createElement(t.h2,null,"Når bruker vi en melding?"),"\n",r.createElement(t.p,null,"Før du bruker en melding er det greit å ha tatt stilling til noen spørsmål:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Er beskjeden tilknyttet innholdet den står i nærheten av?"),"\n",r.createElement(t.li,null,"Er beskjeden tydelig nok til å forstås uten farge som kjennetegn?"),"\n",r.createElement(t.li,null,"Kan meldingen lukkes? Bør den da skjules ved neste besøk?"),"\n"),"\n",r.createElement(t.p,null,"Om meldingen er helt selvstendig (ikke tilknyttet noe av innholdet på siden) skal vi bruke ",r.createElement(t.a,{href:"/preview/feat/context-menu-toggle/komponenter/alertmessage"},"AlertMessage"),"."),"\n",r.createElement(s,null,r.createElement(i,{type:"do",description:"Vis meldingen i kontekst av innholdet",image:"/assets/do-donts/alert-message-dont-1.png"})))}var B=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(V,e)):V(e)};function O(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var F=n(72285),G=n(22756),R=n(95573),P=n(1634);const W=e=>{let{pageContext:t}=e;return r.createElement(G.p,{title:t.title})},C=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:s}=n.page,{types:i}=l;return r.createElement(P.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(R.M1,Object.assign({},s,{versions:l.versions})),r.createElement(R.w5,s),a,i&&r.createElement(F.l,{types:i}))};function T(e){return r.createElement(C,e,r.createElement(B,e))}},72285:function(e,t,n){n.d(t,{l:function(){return p}});var l=n(78217),r=n(41994),a=n(87505),s=n(70079);const i=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),o=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,s=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",s)},d=e=>{const t=e.target,n=t.parentElement;m(t,n)},u=e=>{let{props:t}=e;const n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var l},p=e=>{let{types:t}=e;return s.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},s.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),s.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(l.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(c):[],a=n.props?Object.values(n.props).filter(o):[];return s.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},l.length>0&&s.createElement(u,{props:l}),a.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(u,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return o}});var l=n(26372),r=n.n(l),a=n(49597),s=n(70079),i=n(34044);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,s.useContext)(i.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||o?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return s}});var l=n(26372),r=n.n(l),a=n(70079);const s=e=>{let{className:t,density:n,...l}=e;return a.createElement("div",{"data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,...l})}},41994:function(e,t,n){n.d(t,{Q:function(){return c}});var l=n(53484),r=n(3438),a=n(84490),s=n(26372),i=n.n(s),o=n(70079);const c=e=>{let{children:t,title:n,className:s,startExpanded:c=!1,onClick:m,...d}=e;const u=(0,r.M)("title"),p=(0,r.M)("content"),{0:g,1:k}=(0,o.useState)(c),[v]=(0,a.v)(g,{easing:"exit",timing:"expressive"});return o.createElement("div",{"data-testid":"jkl-accordion-item",...d,className:i()("jkl-accordion-item",s,{"jkl-accordion-item--expanded":g})},o.createElement("button",{id:u,className:"jkl-accordion-item__title",type:"button","aria-expanded":g,"aria-controls":p,onClick:e=>{const t=!g;k(t),m&&m(e,t)}},n,o.createElement(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!g,bold:g})),o.createElement("div",{id:p,ref:v,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":u,hidden:!g},o.createElement("div",{className:"jkl-accordion-item__content"},t)))}},41992:function(e,t,n){n.d(t,{O:function(){return s}});var l=n(26372),r=n.n(l),a=n(70079);const s=e=>{let{active:t=!1,back:n=!1,className:l,children:s,...i}=e;return a.createElement("a",{className:r()("jkl-nav-link",{"jkl-nav-link--active":t,"jkl-nav-link--back":n},l),...i},s)}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var l=n(70079),r=n(41699),a=n(65174),s=n(6914),i=n(82546),o=n(39126),c=n(66169),m=n(94509);const d=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:u,rows:p,verticalAlign:g,...k}=e;return l.createElement(r.i,{fullWidth:!0,...k,ref:t},n&&l.createElement(s.R,{srOnly:!0},n),l.createElement(o.s,null,l.createElement(m.S,null,d.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&u&&l.createElement(m.S,null,l.createElement(i.p,{colSpan:d.length},u)),p.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":d[t],verticalAlign:g},e))))))))}));d.displayName="DataTable"}}]);