"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2012],{65366:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return k},Head:function(){return g},default:function(){return f}});var r=n(47160),l=n(70079),a=n(91517),o=n(69169);function i(e){const t=Object.assign({p:"p",a:"a",h2:"h2"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:i,Grid:s,DoDontExample:u}=t;return i||c("ComponentExample",!0),u||c("DoDontExample",!0),s||c("Grid",!0),n||c("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Datovelgeren gir brukerne mulighet til å skrive inn eller velge en dato.\nLedeteksten beskriver hvilken dato brukeren skal fylle inn. To datovelgere\nkan brukes sammen for å angi perioder.")),"\n",l.createElement(i,{title:"DatePicker",component:o.xM,knobs:o.o9,codeExample:o.bK}),"\n",l.createElement(t.p,null,"Du finner et ",l.createElement(t.a,{href:"/demoer/skjemavalidering/"},"eksempel på datovelger brukt i skjemakontekst")," under Demoer. ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/portal/src/pages/demoer/skjemavalidering.tsx"},"Koden til eksempelet")," finner du på GitHub."),"\n",l.createElement(t.h2,null,"Bruk"),"\n",l.createElement(t.p,null,"Bruk datovelgeren når du vil be om en spesifikk dato. Datoen kan skrives inn eller velges fra en kalender."),"\n",l.createElement(t.p,null,'Vi kan også bruke to datovelgere, når vi vil at brukeren skal angi en periode med fra- og tildato. For eksempel "Hvor lenge var du syk da du var på ferie? Velg dato fra og til".'),"\n",l.createElement(t.h2,null,"Tekst og validering"),"\n",l.createElement(t.p,null,"Velg størrelse på ledeteksten etter prinsippene for skjemadesign. Bruk en kort og tydelig ledetekst, som forteller hva brukeren skal velge. Hvis det trengs, kan du også gi mer forklaring med en hjelpetekst under feltet."),"\n",l.createElement(t.p,null,"Hvis datovelgeren ikke validerer, vises en feilmelding, som forteller hva som er galt. Merk at feilmeldingen erstatter en eventuell hjelpetekst, slik at den feilmeldingen du lager også må fortelle hva hjelpeteksten var."),"\n",l.createElement(s,null,l.createElement(u,{type:"do",description:"Hjelpetekst i feilmelding",content:l.createElement(a.M,{label:"Fra dato",errorLabel:"Du må velge datoen da du først ble syk"})}),l.createElement(u,{type:"dont",description:"Feilmelding uten hjelp",content:l.createElement(a.M,{label:"Fra dato",errorLabel:"Du må velge dato"})})))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(i,e)):i(e)};function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=n(72285),d=n(22756),p=n(95573),m=n(1634);const g=e=>{let{pageContext:t}=e;return l.createElement(d.p,{title:t.title})},k=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:i}=r;return l.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(p.M1,Object.assign({},o,{versions:r.versions})),l.createElement(p.w5,o),a,i&&l.createElement(u.l,{types:i}))};function f(e){return l.createElement(k,e,l.createElement(s,e))}},69169:function(e,t,n){n.d(t,{bK:function(){return u},o9:function(){return i},xM:function(){return c}});var r=n(70079),l=n(55208),a=n(91517),o=n(39065);const i={boolProps:["Med hjelpetekst","Med feil","Med tooltip"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},s=e=>{const t=864e5*(30*e-5);return t<0?12+t:t},c=e=>{let{boolValues:t,choiceValues:n}=e;const i=t&&t["Med hjelpetekst"]?"Du vil være forsikret fra denne datoen":void 0,c=t&&t["Med feil"]?"Du kan ikke velge en dato som har vært":void 0,u=n&&n.Variant,d=null!=t&&t["Med tooltip"]?r.createElement(l.d,{content:"Du vil være forsikret fra denne datoen. Du kan ikke velge en dato som har vært."}):void 0,{0:p,1:m}=(0,r.useState)("");return r.createElement(a.M,{label:"Velg startdato for forsikringen",labelProps:{variant:u},tooltip:d,errorLabel:c,name:"datepicker",helpLabel:i,disableBeforeDate:(0,o.Bb)(new Date(Date.now()-s(14))),disableAfterDate:(0,o.Bb)(new Date(Date.now()+s(14))),value:p,onFocus:(e,t,n)=>{console.log("onFocus",{event:e,date:t,meta:n})},onBlur:(e,t,n)=>{(0,o.j3)(e)&&console.log("onBlur",{event:e,date:t,meta:n})},onChange:(e,t,n)=>{m(e.target.value),console.log("onChange",{event:e,date:t,meta:n})},action:{onBlur:e=>{(0,o.j3)(e)&&console.log("action.onBlur",{event:e})},onClick:e=>{console.log("action.onClick",{event:e})}}})},u=e=>{let{boolValues:t,choiceValues:n}=e;return'\n<DatePicker\n    label="Velg startdato for forsikringen"\n    variant="'+((null==n?void 0:n.Variant)||"small")+'"'+(null!=t&&t["Med feil"]?'\n    errorLabel="Du kan ikke velge en dato som har vært"':"")+(null!=t&&t["Med hjelpetekst"]?'\n    helpLabel="Du vil være forsikret fra denne datoen"':"")+(null!=t&&t["Med tooltip"]?'\n    tooltip={\n        <PopupTip content="Du vil være forsikret fra denne datoen. Du kan ikke velge en dato som har vært." />\n    }':"")+"\n/>\n"}},55208:function(e,t,n){n.d(t,{d:function(){return u}});var r=n(19794),l=n(26372),a=n.n(l),o=n(70079),i=n(79117),s=n(56189),c=n(5847);const u=e=>{let{content:t,triggerProps:n,...l}=e;const{0:u,1:d}=(0,o.useState)(!1);return o.createElement(i.u,Object.assign({onOpenChange:d,triggerOn:"click"},l),o.createElement(c.a,null,o.createElement("button",Object.assign({},n,{type:"button",className:a()("jkl-tooltip-question-button",null==n?void 0:n.className),"data-testid":"jkl-tooltip-question-button"}),o.createElement(r.U,{variant:"inherit",bold:u}),o.createElement("span",{className:"jkl-sr-only"},"Vis hjelpetekst"),o.createElement("span",{className:"jkl-sr-only","aria-live":"polite","data-testid":"popuptip-content"},u?t:""))),o.createElement(s._,{"data-ispopup":!0},t))}},79117:function(e,t,n){n.d(t,{nr:function(){return u},u:function(){return d}});var r=n(57579),l=n(88905),a=n(84256),o=n(26893),i=n(70079);const s=(0,i.createContext)(null),c=s.Provider,u=()=>{const e=(0,i.useContext)(s);if(null===e)throw new Error("Tooltip-komponentene kan kun brukes inne i <Tooltip />");return e},d=e=>{let{children:t,...n}=e;const s=(e=>{let{initialOpen:t=!1,placement:n="top",delay:s=250,triggerOn:c="hover",onOpenChange:u}=e;const{0:d,1:p}=(0,i.useState)(t),m=(0,i.useRef)(null),g=(0,i.useRef)(null),k=(0,r.YF)({open:d,onOpenChange:e=>{null==u||u(e),p(e)},placement:n,whileElementsMounted:l.Me,middleware:[(0,a.cv)(16),(0,a.RR)(),(0,a.uY)({padding:16}),(0,o.x7)({element:m,padding:8})]}),f=(0,r.qs)(k.context,{role:"tooltip"}),v=(0,r.bQ)(k.context),b=(0,r.eS)(k.context,{enabled:"click"===c}),h=(0,r.XI)(k.context,{enabled:"hover"===c,delay:d?0:s}),E=(0,r.KK)(k.context,{enabled:"click"!==c||d}),j=(0,r.NI)([v,E,f,b,h]);return{triggerOn:c,isOpen:d,setOpen:p,arrowElement:m,...k,refs:{...k.refs,description:g,setDescription:e=>g.current=e},...j}})(n);return i.createElement(c,{value:s},t)}},56189:function(e,t,n){n.d(t,{_:function(){return p}});var r=n(57579),l=n(17050),a=n(3438),o=n(45901),i=n(26372),s=n.n(i),c=n(70079),u=n(79117);function d(e,t){switch(void 0===t&&(t=0),e){case"top":default:return"0 "+t+"px";case"left":return t+"px 0";case"bottom":return"0 "+-t+"px";case"right":return-t+"px 0"}}const p=(0,c.forwardRef)((function(e,t){let{className:n,children:i,"data-ispopup":p,...m}=e;const{context:g,triggerOn:k,arrowElement:f,getFloatingProps:v,placement:b,floatingStyles:h,refs:E}=(0,u.nr)(),j=(0,r.qq)([t,E.setFloating]),y=(0,a.M)("jkl-tooltip-content"),{prefersReducedMotion:D}=(0,o.c)(),{isMounted:x,styles:w}=(0,r.Y_)(g,{duration:{open:D?0:250,close:D?0:150},initial:e=>{let{side:t}=e;return{opacity:0,translate:d(t,5)}},open:e=>{let{side:t}=e;return{opacity:1,translate:d(t,0)}},close:e=>{let{side:t}=e;return{opacity:0,translate:d(t,-5)}}}),{density:M,theme:O}=(0,l.H)(E.reference.current);return c.createElement(r.ll,null,"hover"===k&&c.createElement("span",{ref:E.setDescription,hidden:!0,key:y+"-trigger"},i),x&&c.createElement("span",{className:"jkl",key:y+"-wrapper"},c.createElement("span",Object.assign({key:y,ref:j,"data-placement":b,"aria-hidden":p,"data-testid":"tooltip-content","data-theme":O,"data-layout-density":M,className:s()("jkl-tooltip-content",n)},v({...m,id:y}),{style:{...h,...w}}),i,c.createElement(r.Y$,{context:g,ref:f,width:24,height:12,fill:"var(--background-color)"}))))}))},5847:function(e,t,n){n.d(t,{a:function(){return s}});n(31369);var r=n(57579),l=n(26372),a=n.n(l),o=n(70079),i=n(79117);const s=(0,o.forwardRef)((function(e,t){var n,l;let{children:s,className:c,...u}=e;const{isOpen:d,getReferenceProps:p,refs:m,triggerOn:g}=(0,i.nr)(),k=s.ref,f=(0,r.qq)([k,m.setReference,t]),v=[null===(n=m.reference.current)||void 0===n?void 0:n.textContent,null===(l=m.description.current)||void 0===l?void 0:l.textContent].map((e=>null==e?void 0:e.replaceAll(/[\ue003-\uf8aa]/g,""))).filter(Boolean).join(". ");return o.isValidElement(s)?o.cloneElement(s,p({ref:f,"aria-label":v,...s.props,...u,className:a()(s.props.className,c),"data-tooltip-shown":d,style:{...s.props.style},tabIndex:"click"===g?0:void 0})):o.createElement("button",Object.assign({"data-tooltip-shown":d},p({className:a()(c,"jkl-tooltip-trigger"),type:"button",ref:f,"aria-label":v,...u})),s)}))},19794:function(e,t,n){n.d(t,{U:function(){return a}});var r=n(70079),l=n(31787);const a=e=>r.createElement(l.J,{...e},"");a.displayName="QuestionIcon"}}]);