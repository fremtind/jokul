"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2012],{65366:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return g},Head:function(){return f},default:function(){return k}});var r=n(47160),l=n(70079),o=n(91517),a=n(69169);function i(e){const t=Object.assign({p:"p",a:"a",h2:"h2"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:i,Grid:s,DoDontExample:u}=t;return i||c("ComponentExample",!0),u||c("DoDontExample",!0),s||c("Grid",!0),n||c("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Datovelgeren gir brukerne mulighet til å skrive inn eller velge en dato.\nLedeteksten beskriver hvilken dato brukeren skal fylle inn. To datovelgere\nkan brukes sammen for å angi perioder.")),"\n",l.createElement(i,{title:"DatePicker",component:a.xM,knobs:a.o9,codeExample:a.bK}),"\n",l.createElement(t.p,null,"Du finner et ",l.createElement(t.a,{href:"/preview/4371-select-focus/demoer/skjemavalidering/"},"eksempel på datovelger brukt i skjemakontekst")," under Demoer. ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/portal/src/pages/demoer/skjemavalidering.tsx"},"Koden til eksempelet")," finner du på GitHub."),"\n",l.createElement(t.h2,null,"Bruk"),"\n",l.createElement(t.p,null,"Bruk datovelgeren når du vil be om en spesifikk dato. Datoen kan skrives inn eller velges fra en kalender."),"\n",l.createElement(t.p,null,'Vi kan også bruke to datovelgere, når vi vil at brukeren skal angi en periode med fra- og tildato. For eksempel "Hvor lenge var du syk da du var på ferie? Velg dato fra og til".'),"\n",l.createElement(t.h2,null,"Tekst og validering"),"\n",l.createElement(t.p,null,"Velg størrelse på ledeteksten etter prinsippene for skjemadesign. Bruk en kort og tydelig ledetekst, som forteller hva brukeren skal velge. Hvis det trengs, kan du også gi mer forklaring med en hjelpetekst under feltet."),"\n",l.createElement(t.p,null,"Hvis datovelgeren ikke validerer, vises en feilmelding, som forteller hva som er galt. Merk at feilmeldingen erstatter en eventuell hjelpetekst, slik at den feilmeldingen du lager også må fortelle hva hjelpeteksten var."),"\n",l.createElement(s,null,l.createElement(u,{type:"do",description:"Hjelpetekst i feilmelding",content:l.createElement(o.M,{label:"Fra dato",errorLabel:"Du må velge datoen da du først ble syk"})}),l.createElement(u,{type:"dont",description:"Feilmelding uten hjelp",content:l.createElement(o.M,{label:"Fra dato",errorLabel:"Du må velge dato"})})))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(i,e)):i(e)};function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=n(72285),d=n(22756),p=n(95573),m=n(1634);const f=e=>{let{pageContext:t}=e;return l.createElement(d.p,{title:t.title})},g=e=>{let{location:t,data:n,pageContext:r,children:o}=e;const{frontmatter:a}=n.page,{types:i}=r;return l.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(p.M1,Object.assign({},a,{versions:r.versions})),l.createElement(p.w5,a),o,i&&l.createElement(u.l,{types:i}))};function k(e){return l.createElement(g,e,l.createElement(s,e))}},69169:function(e,t,n){n.d(t,{bK:function(){return u},o9:function(){return i},xM:function(){return c}});var r=n(70079),l=n(55208),o=n(91517),a=n(39065);const i={boolProps:["Med hjelpetekst","Med feil","Med tooltip"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},s=e=>{const t=864e5*(30*e-5);return t<0?12+t:t},c=e=>{let{boolValues:t,choiceValues:n}=e;const i=t&&t["Med hjelpetekst"]?"Du vil være forsikret fra denne datoen":void 0,c=t&&t["Med feil"]?"Du kan ikke velge en dato som har vært":void 0,u=n&&n.Variant,d=null!=t&&t["Med tooltip"]?r.createElement(l.d,{content:"Du vil være forsikret fra denne datoen. Du kan ikke velge en dato som har vært."}):void 0,{0:p,1:m}=(0,r.useState)("");return r.createElement(o.M,{label:"Velg startdato for forsikringen",labelProps:{variant:u},tooltip:d,errorLabel:c,name:"datepicker",helpLabel:i,disableBeforeDate:(0,a.Bb)(new Date(Date.now()-s(14))),disableAfterDate:(0,a.Bb)(new Date(Date.now()+s(14))),value:p,onFocus:(e,t,n)=>{console.log("onFocus",{event:e,date:t,meta:n})},onBlur:(e,t,n)=>{(0,a.j3)(e)&&console.log("onBlur",{event:e,date:t,meta:n})},onChange:(e,t,n)=>{m(e.target.value),console.log("onChange",{event:e,date:t,meta:n})},action:{onBlur:e=>{(0,a.j3)(e)&&console.log("action.onBlur",{event:e})},onClick:e=>{console.log("action.onClick",{event:e})}}})},u=e=>{let{boolValues:t,choiceValues:n}=e;return'\n<DatePicker\n    label="Velg startdato for forsikringen"\n    variant="'+((null==n?void 0:n.Variant)||"small")+'"'+(null!=t&&t["Med feil"]?'\n    errorLabel="Du kan ikke velge en dato som har vært"':"")+(null!=t&&t["Med hjelpetekst"]?'\n    helpLabel="Du vil være forsikret fra denne datoen"':"")+(null!=t&&t["Med tooltip"]?'\n    tooltip={\n        <PopupTip content="Du vil være forsikret fra denne datoen. Du kan ikke velge en dato som har vært." />\n    }':"")+"\n/>\n"}},55208:function(e,t,n){n.d(t,{d:function(){return u}});var r=n(19794),l=n(26372),o=n.n(l),a=n(70079),i=n(79117),s=n(56189),c=n(5847);const u=e=>{let{content:t,triggerProps:n,...l}=e;const{0:u,1:d}=(0,a.useState)(!1);return a.createElement(i.u,Object.assign({onOpenChange:d,triggerOn:"click"},l),a.createElement(c.a,null,a.createElement("button",Object.assign({},n,{type:"button",className:o()("jkl-tooltip-question-button",null==n?void 0:n.className),"data-testid":"jkl-tooltip-question-button"}),a.createElement(r.U,{variant:"inherit",bold:u}),a.createElement("span",{className:"jkl-sr-only"},"Vis hjelpetekst"))),a.createElement(s._,null,t))}},79117:function(e,t,n){n.d(t,{nr:function(){return u},u:function(){return d}});var r=n(57579),l=n(88905),o=n(84256),a=n(26893),i=n(70079);const s=(0,i.createContext)(null),c=s.Provider,u=()=>{const e=(0,i.useContext)(s);if(null===e)throw new Error("Tooltip-komponentene kan kun brukes inne i <Tooltip />");return e},d=e=>{let{children:t,...n}=e;const s=(e=>{let{initialOpen:t=!1,placement:n="top",delay:s=250,triggerOn:c="hover",onOpenChange:u}=e;const{0:d,1:p}=(0,i.useState)(t),m=(0,i.useRef)(null),f=(0,i.useRef)(null),g=(0,r.YF)({open:d,onOpenChange:e=>{null==u||u(e),p(e)},placement:n,whileElementsMounted:l.Me,middleware:[(0,o.cv)(16),(0,o.RR)(),(0,o.uY)({padding:16}),(0,a.x7)({element:m,padding:8})]}),k=(0,r.qs)(g.context,{role:"tooltip"}),v=(0,r.bQ)(g.context),b=(0,r.eS)(g.context,{enabled:"click"===c}),h=(0,r.XI)(g.context,{enabled:"hover"===c,delay:d?0:s}),E=(0,r.KK)(g.context,{enabled:"click"!==c||d}),j=(0,r.NI)([v,E,k,b,h]);return{triggerOn:c,isOpen:d,setOpen:p,arrowElement:m,...g,refs:{...g.refs,description:f,setDescription:e=>f.current=e},...j}})(n);return i.createElement(c,{value:s},t)}},56189:function(e,t,n){n.d(t,{_:function(){return p}});var r=n(57579),l=n(17050),o=n(3438),a=n(45901),i=n(26372),s=n.n(i),c=n(70079),u=n(79117);function d(e,t){switch(void 0===t&&(t=0),e){case"top":default:return"0 "+t+"px";case"left":return t+"px 0";case"bottom":return"0 "+-t+"px";case"right":return-t+"px 0"}}const p=(0,c.forwardRef)((function(e,t){let{className:n,children:i,...p}=e;const{context:m,triggerOn:f,arrowElement:g,getFloatingProps:k,placement:v,floatingStyles:b,refs:h}=(0,u.nr)(),E=(0,r.qq)([t,h.setFloating]),j=(0,o.M)("jkl-tooltip-content"),{prefersReducedMotion:y}=(0,a.c)(),{isMounted:D,styles:x}=(0,r.Y_)(m,{duration:{open:y?0:250,close:y?0:150},initial:e=>{let{side:t}=e;return{opacity:0,translate:d(t,5)}},open:e=>{let{side:t}=e;return{opacity:1,translate:d(t,0)}},close:e=>{let{side:t}=e;return{opacity:0,translate:d(t,-5)}}}),{density:w,theme:M}=(0,l.H)(h.reference.current);return c.createElement(r.ll,null,"hover"===f&&c.createElement("span",{ref:h.setDescription,hidden:!0,key:j+"-trigger"},i),D&&c.createElement("span",{className:"jkl",key:j+"-wrapper"},c.createElement("span",Object.assign({key:j,ref:E,"data-placement":v,"aria-live":"click"===f?"assertive":void 0,"data-theme":M,"data-layout-density":w,className:s()("jkl-tooltip-content",n)},k({...p,id:j}),{style:{...b,...x}}),i,c.createElement(r.Y$,{context:m,ref:g,width:24,height:12,fill:"var(--background-color)"}))))}))},5847:function(e,t,n){n.d(t,{a:function(){return s}});n(31369);var r=n(57579),l=n(26372),o=n.n(l),a=n(70079),i=n(79117);const s=(0,a.forwardRef)((function(e,t){var n,l;let{children:s,className:c,...u}=e;const{isOpen:d,getReferenceProps:p,refs:m,triggerOn:f}=(0,i.nr)(),g=s.ref,k=(0,r.qq)([g,m.setReference,t]),v=[null===(n=m.reference.current)||void 0===n?void 0:n.textContent,null===(l=m.description.current)||void 0===l?void 0:l.textContent].map((e=>null==e?void 0:e.replaceAll(/[\ue003-\uf8aa]/g,""))).filter(Boolean).join(". ");return a.isValidElement(s)?a.cloneElement(s,p({ref:k,"aria-label":v,...s.props,...u,className:o()(s.props.className,c),"data-tooltip-shown":d,style:{...s.props.style},tabIndex:"click"===f?0:void 0})):a.createElement("button",Object.assign({"data-tooltip-shown":d},p({className:o()(c,"jkl-tooltip-trigger"),type:"button",ref:k,"aria-label":v,...u})),s)}))},19794:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(70079),l=n(31787);const o=e=>r.createElement(l.J,{...e},"");o.displayName="QuestionIcon"}}]);