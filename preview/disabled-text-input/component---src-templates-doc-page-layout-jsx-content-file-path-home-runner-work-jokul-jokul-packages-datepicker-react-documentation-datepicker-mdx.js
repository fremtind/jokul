"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2012],{8453:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return v},Head:function(){return g},default:function(){return f}});var l=n(64717),r=n(92379),a=n(64115),o=n(87042);function i(e){const t=Object.assign({p:"p",a:"a",h2:"h2"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:i,Grid:s,DoDontExample:c}=t;return i||u("ComponentExample",!0),c||u("DoDontExample",!0),s||u("Grid",!0),n||u("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Datovelgeren gir brukerne mulighet til å skrive inn eller velge en dato.\nLedeteksten beskriver hvilken dato brukeren skal fylle inn. To datovelgere\nkan brukes sammen for å angi perioder.")),"\n",r.createElement(i,{title:"DatePicker",component:o.xM,knobs:o.o9,codeExample:o.bK}),"\n",r.createElement(t.p,null,"Du finner et ",r.createElement(t.a,{href:"/preview/disabled-text-input/demoer/skjemavalidering/"},"eksempel på datovelger brukt i skjemakontekst")," under Demoer. ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/portal/src/pages/demoer/skjemavalidering.tsx"},"Koden til eksempelet")," finner du på GitHub."),"\n",r.createElement(t.h2,null,"Bruk"),"\n",r.createElement(t.p,null,"Bruk datovelgeren når du vil be om en spesifikk dato. Datoen kan skrives inn eller velges fra en kalender."),"\n",r.createElement(t.p,null,'Vi kan også bruke to datovelgere, når vi vil at brukeren skal angi en periode med fra- og tildato. For eksempel "Hvor lenge var du syk da du var på ferie? Velg dato fra og til".'),"\n",r.createElement(t.h2,null,"Tekst og validering"),"\n",r.createElement(t.p,null,"Velg størrelse på ledeteksten etter prinsippene for skjemadesign. Bruk en kort og tydelig ledetekst, som forteller hva brukeren skal velge. Hvis det trengs, kan du også gi mer forklaring med en hjelpetekst under feltet."),"\n",r.createElement(t.p,null,"Hvis datovelgeren ikke validerer, vises en feilmelding, som forteller hva som er galt. Merk at feilmeldingen erstatter en eventuell hjelpetekst, slik at den feilmeldingen du lager også må fortelle hva hjelpeteksten var."),"\n",r.createElement(s,null,r.createElement(c,{type:"do",description:"Hjelpetekst i feilmelding",content:r.createElement(a.M,{label:"Fra dato",errorLabel:"Du må velge datoen da du først ble syk"})}),r.createElement(c,{type:"dont",description:"Feilmelding uten hjelp",content:r.createElement(a.M,{label:"Fra dato",errorLabel:"Du må velge dato"})})))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(i,e)):i(e)};function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var c=n(75482),d=n(96036),m=n(59001),p=n(65458),k=n(79379);const g=e=>{let{pageContext:t}=e;return r.createElement(d.p,{title:t.title})},v=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:o}=n.page,{types:i}=l;return r.createElement(k.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(p.M1,Object.assign({},o,{versions:l.versions})),t.pathname.includes("komponenter")&&r.createElement(m.c,{variant:"komponent",component:o.title}),r.createElement(p.w5,o),a,i&&r.createElement(c.l,{types:i}))};function f(e){return r.createElement(v,e,r.createElement(s,e))}},87042:function(e,t,n){n.d(t,{bK:function(){return c},o9:function(){return i},xM:function(){return u}});var l=n(92379),r=n(41046),a=n(64115),o=n(86238);const i={boolProps:["Med hjelpetekst","Med feil","Med tooltip"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},s=e=>{const t=864e5*(30*e-5);return t<0?12+t:t},u=e=>{let{boolValues:t,choiceValues:n}=e;const i=t&&t["Med hjelpetekst"]?"Du vil være forsikret fra denne datoen":void 0,u=t&&t["Med feil"]?"Du kan ikke velge en dato som har vært":void 0,c=n&&n.Variant,d=null!=t&&t["Med tooltip"]?l.createElement(r.d,{content:"Du vil være forsikret fra denne datoen. Du kan ikke velge en dato som har vært."}):void 0,{0:m,1:p}=(0,l.useState)("");return l.createElement(a.M,{label:"Velg startdato for forsikringen",labelProps:{variant:c},tooltip:d,errorLabel:u,name:"datepicker",helpLabel:i,disableBeforeDate:(0,o.Bb)(new Date(Date.now()-s(14))),disableAfterDate:(0,o.Bb)(new Date(Date.now()+s(14))),value:m,onFocus:(e,t,n)=>{console.log("onFocus",{event:e,date:t,meta:n})},onBlur:(e,t,n)=>{(0,o.j3)(e)&&console.log("onBlur",{event:e,date:t,meta:n})},onChange:(e,t,n)=>{p(e.target.value),console.log("onChange",{event:e,date:t,meta:n})},action:{onBlur:e=>{(0,o.j3)(e)&&console.log("action.onBlur",{event:e})},onClick:e=>{console.log("action.onClick",{event:e})}}})},c=e=>{let{boolValues:t,choiceValues:n}=e;return'\n<DatePicker\n    label="Velg startdato for forsikringen"\n    variant="'+((null==n?void 0:n.Variant)||"small")+'"'+(null!=t&&t["Med feil"]?'\n    errorLabel="Du kan ikke velge en dato som har vært"':"")+(null!=t&&t["Med hjelpetekst"]?'\n    helpLabel="Du vil være forsikret fra denne datoen"':"")+(null!=t&&t["Med tooltip"]?'\n    tooltip={\n        <PopupTip content="Du vil være forsikret fra denne datoen. Du kan ikke velge en dato som har vært." />\n    }':"")+"\n/>\n"}},41046:function(e,t,n){n.d(t,{d:function(){return m}});var l=n(99767),r=n(58990),a=n(80324),o=n.n(a),i=n(92379),s=n(16965),u=n(6854),c=n(27547);const d=["content","triggerProps"],m=e=>{let{content:t,triggerProps:n}=e,a=(0,l.Z)(e,d);const{0:m,1:p}=(0,i.useState)(!1);return i.createElement(s.u,Object.assign({onOpenChange:p,triggerOn:"click"},a),i.createElement(c.a,null,i.createElement("button",Object.assign({},n,{type:"button",className:o()("jkl-tooltip-question-button",null==n?void 0:n.className),"data-testid":"jkl-tooltip-question-button"}),i.createElement(r.U,{variant:"inherit",bold:m}),i.createElement("span",{className:"jkl-sr-only"},"Vis hjelpetekst"),i.createElement("span",{className:"jkl-sr-only","aria-live":"polite","data-testid":"popuptip-content"},m?t:""))),i.createElement(u._,{"data-ispopup":!0},t))}}}]);