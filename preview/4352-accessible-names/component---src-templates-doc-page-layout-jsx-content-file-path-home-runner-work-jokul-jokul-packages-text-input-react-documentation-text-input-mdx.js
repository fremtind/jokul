"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[662],{58750:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return M},Head:function(){return w},default:function(){return B}});var l=n(47160),r=n(70079),a=n(54790),o=n(86710),s=n(55208),i=n(81159),u=n(26372),d=n.n(u);const m=(0,r.forwardRef)(((e,t)=>{const{autoExpand:n,counter:l,onBlur:a,onFocus:o,rows:s=7,placeholder:i=" ",startOpen:u,style:d,value:m,"aria-invalid":c,onChange:p,...k}=e,{0:f,1:g}=(0,r.useState)((()=>void 0===m?0:"number"==typeof m?String(m).length:m.length)),{0:v,1:h}=(0,r.useState)(!1),b=(0,r.useRef)(null),E=t||b;(0,r.useEffect)((()=>{const e=E.current;if(e){if(!n)return void(e.style.height="");v||m?(e.style.height="auto",e.style.height=e.scrollHeight+"px"):e.style.height=""}}),[n,E,m,v]);const j=(null==l?void 0:l.maxLength)||0,y=j-f;const x=Boolean(c||(l&&f>j?"Du har skrevet "+(f-j)+" tegn for mye":void 0)),w={overflowX:n?"hidden":void 0};return r.createElement("div",{className:"jkl-text-input-wrapper","data-invalid":x,"data-has-content":f>0},r.createElement("textarea",Object.assign({"aria-invalid":x,className:"jkl-text-area__text-area jkl-text-area__text-area--"+s+"-rows",onBlur:function(e){h(!1),a&&a(e)},onFocus:function(e){h(!0),o&&o(e)},onChange:function(e){g(e.target.value.length),p&&p(e)},ref:E,style:{...d,...w},placeholder:i,value:m},k)),l&&r.createElement("div",{className:"jkl-text-area__counter","aria-hidden":"true"},r.createElement("div",{className:"jkl-text-area__counter-count"},f," / ",j),!l.hideProgress&&r.createElement("div",{className:"jkl-text-area__counter-progress",style:{"--progress-width":(M=y,B=j,(M<=0||0===B?0:100*M/B)+"%")}})));var M,B}));m.displayName="BaseTextArea";const c=(0,r.forwardRef)(((e,t)=>{const{autoExpand:n,className:l,counter:a,density:o,errorLabel:s,helpLabel:u,inline:c,label:p,labelProps:k,startOpen:f,supportLabelProps:g,tooltip:v,...h}=e,b={label:p,density:o,errorLabel:s,helpLabel:u,labelProps:k,inline:c,supportLabelProps:g,tooltip:v},E={autoExpand:n,counter:a,startOpen:f};return r.createElement(i.B,Object.assign({className:d()("jkl-text-area",l,{"jkl-text-area--start-open":f,"jkl-text-area--auto-expand":n}),"data-testid":"jkl-text-area"},b),r.createElement(m,Object.assign({ref:t},h,E)))}));c.displayName="TextArea";const p={boolProps:["Ekspanderende","Starter åpen","Med teller","Skjul progress","Med hjelpetekst","Med feil","Med tooltip"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},k=e=>{let{choiceValues:t,boolValues:n}=e;const{0:l,1:a}=(0,r.useState)(""),o=null==t?void 0:t.Variant,i=null==n?void 0:n.Ekspanderende,u=null==n?void 0:n["Starter åpen"],d=null==n?void 0:n["Med teller"],m=null==n?void 0:n["Skjul progress"],p=null!=n&&n["Med hjelpetekst"]?"Beskriv så utfyllende som mulig":void 0,k=null!=n&&n["Med feil"]?"Du må fylle ut en beskrivelse. Beskriv så utfyllende som mulig.":void 0,f=null!=n&&n["Med tooltip"]?r.createElement(s.d,{content:"Beskriv så utfyllende som mulig."}):void 0;return r.createElement(c,{className:"jkl-spacing-xl--top",label:"Beskrivelse",name:"beskrivelse",helpLabel:p,errorLabel:k,tooltip:f,autoExpand:i,startOpen:u,counter:d?{maxLength:200,hideProgress:m}:void 0,labelProps:{variant:o},value:l,onChange:e=>a(e.target.value)})},f=e=>{let{choiceValues:t,boolValues:n}=e;return'\n<TextArea\n    label="Beskrivelse"\n    name="beskrivelse"\n    helpLabel='+(null!=n&&n["Med hjelpetekst"]?'"Beskriv så utfyllende som mulig"':"{undefined}")+"\n    errorLabel="+(null!=n&&n["Med feil"]?'"Du må fylle ut en beskrivelse. Beskriv så utfyllende som mulig."':"{undefined}")+(null!=n&&n["Med tooltip"]?'\n    tooltip={\n        <PopupTip content="Beskriv så utfyllende som mulig." />\n    }':"")+"\n    autoExpand={"+(null==n?void 0:n.Ekspanderende)+"}\n    startOpen={"+(null==n?void 0:n["Starter åpen"])+"}\n    counter={"+(null!=n&&n["Med teller"]?"{ maxLength: 200, hideProgress: "+(null==n?void 0:n["Skjul progress"])+" }":void 0)+'}\n    variant="'+(null==t?void 0:t.Variant)+'"\n/>\n'};var g=n(11527);function v(e){const t=Object.assign({p:"p",strong:"strong",a:"a",em:"em",h2:"h2",ul:"ul",li:"li"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:s,Grid:i,DoDontExample:u}=t;return s||b("ComponentExample",!0),u||b("DoDontExample",!0),i||b("Grid",!0),n||b("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Vi bruker tekstfelt og tekstområder når vi vil at brukerne skal legge inn\ninformasjon som tekst eller tall hvor vi ikke gir brukeren forhåndsvalg.")),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"Tekstfelt:")," brukes for eksempel til navn, e-postadresser, fødselsnummer og andre typer informasjon som får plass på én linje."),"\n",r.createElement(s,{title:"TextInput",component:o.xr,knobs:o.bq,codeExample:o.gc}),"\n",r.createElement(t.p,null,"Innholdet i tekstfelt kan være fritekst eller begrenses til et fast format, for eksempel fire siffer for postnummer eller at en e-postadresse må ha en alfakrøll og et toppdomene.\nVi har en variant av tekstfelt kalt ",r.createElement("i",null,"inline"),". Denne er til spesialtilfeller, hvis vi for eksempel trenger å plassere et tekstfelt i en setning."),"\n",r.createElement(t.p,null,"Du finner et ",r.createElement(t.a,{href:"/preview/4352-accessible-names/demoer/skjemavalidering/"},"eksempel på tekstfelt brukt i skjemakontekst")," under Demoer. ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/portal/src/pages/demoer/skjemavalidering.tsx"},"Koden til eksempelet")," finner du på GitHub."),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"Tekstområder:")," brukes til fritekstfelter hvor det forventes å kunne komme mer enn én setning."),"\n",r.createElement(s,{title:"TextArea",component:k,knobs:p,codeExample:f}),"\n",r.createElement(t.p,null,"Vanligvis starter tekstområdet minimert og likner et vanlig tekstfelt. Når det får fokus vil feltet ekspandere. Du kan styre antall rader feltet skal ekspanderes til for å tilpasse til forventet lengde. Om innholdet blir lenger enn oppgitt antall rader vil feltet scrolle."),"\n",r.createElement(t.p,null,"Du kan velge om feltet alltid skal ekspanderes til å vise alt innhold. Eventuell scrolling flyttes da til siden. Innhold under skjemafeltet vil dyttes nedover."),"\n",r.createElement(t.p,null,"Dersom du har begrensninger på antall tegn kan du velge å vise en teller. Telleren vil ha en standard hjelpetekst om feltet går over grensen. Teksten kan overstyres. Det er ingen blokkering som hindrer brukeren å gå over grensen. Brukeren skal få fullføre tankerekken sin før hen redigerer teksten til å være innenfor grensen. Dersom feltet har en teller vises som standard en ",r.createElement(t.em,null,"progress bar")," som krymper etter hvert som teksten blir lenger. Denne kan du velge å skru av og bare vise telleren."),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"Maskert input:")," Brukes til å håndtere lange tall som kan være vanskelige å lese."),"\n",r.createElement(t.p,null,"Eksempler på tilfeller hvor en maskert input kan være nyttig er når brukeren skal skrive inn fødselsnummer, kortnummer, kontonummer eller andre lange tall. Dette gjør at tallene blir enklere å lese, og gjør det lettere for brukeren å være sikre på at de har skrevet inn riktig informasjon."),"\n",r.createElement(s,{title:"Bruk med formaterer",component:g.We,codeExample:g.Uo}),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"/preview/4352-accessible-names/komponenter/formatters#maskering-av-skjemafelter"},"Les mer om formattering og maskering av input")),"\n",r.createElement(t.h2,null,"Bruk"),"\n",r.createElement(t.p,null,"Før du velger et tekstfelt eller tekstområde kan det være greit å ha vurdert de andre skjemakomponentene vi har:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"For datoer skal vi bruke ",r.createElement(t.a,{href:"/preview/4352-accessible-names/komponenter/datepicker"},"Datepicker")),"\n",r.createElement(t.li,null,"Om vi har forhåndsdefinerte valg å gi brukeren er det flere alternativer","\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/4352-accessible-names/komponenter/radiobutton"},"RadioButton")," for mellom to og fem valg"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/4352-accessible-names/komponenter/select"},"Select")," dersom vi har mange nok valg til at radioknapper ikke fungerer"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/4352-accessible-names/komponenter/checkbox"},"Checkbox")," dersom det kan gjøres flere valg"),"\n"),"\n"),"\n",r.createElement(t.li,null,"Om vi har forhåndsvalg, men også må kunne hente inn fritekst, se til ",r.createElement(t.a,{href:"/preview/4352-accessible-names/komponenter/autosuggest"},"Autosuggest")),"\n"),"\n",r.createElement(t.p,null,"Det er noen faste regler som gjelder for både tekstfelt og tekstområder:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Hvert skjemafelt skal ha en ledetekst som forteller brukeren hva de skal oppgi av informasjon i feltet. Teksten kan skjules visuelt, men da må det være tydelig fra sammenhengen hva feltet gjelder (for eksempel et søk eller som en del av en setning)."),"\n",r.createElement(t.li,null,"Hvis skjemafeltet ikke validerer vises en feilmelding som forteller hva som er galt. Essensen i en eventuell hjelpetekst må komme fram også i feilmeldingen."),"\n"),"\n",r.createElement(i,null,r.createElement(u,{type:"do",description:"Hjelpetekst i feilmelding",content:r.createElement(a.o,{name:"hjelpriktig",label:"Fødselsnummer",errorLabel:"Du må fylle ut fødselsnummer, 11 siffer"})}),r.createElement(u,{type:"dont",description:"Feilmelding uten hjelp",content:r.createElement(a.o,{name:"hjelpfeil",label:"Fødselsnummer",errorLabel:"Du må fylle ut fødselsnummer"})})),"\n",r.createElement(t.p,null,"Det er også noen felles anbefalinger:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholders_are_not_accessible"},"Placeholdertekst bør unngås"),". Den er ikke tilgjengelig for skjermlesere. Informasjonen forsvinner for brukeren og gjør seg sannsynligvis bedre som en ledetekst eller hjelpetekst."),"\n",r.createElement(t.li,null,"Størrelsen på skjemafeltet bør passe til typen data brukerne skal legge inn, både i bredden (tekstfelt) og høyden (tekstområde)."),"\n",r.createElement(t.li,null,"Størrelsen på ledeteksten bør stå i forhold til innholdet rundt. Standard i et skjema er liten størrelse."),"\n"),"\n",r.createElement(i,null,r.createElement(u,{type:"do",description:"Informasjon i hjelpetekst",content:r.createElement(a.o,{name:"placeholderriktig",label:"Fødselsnummer",helpLabel:"Fødselsnummer består av 11 siffer"})}),r.createElement(u,{type:"dont",description:"Hjelpetekst som forsvinner",content:r.createElement(a.o,{name:"placeholderfeil",label:"Fødselsnummer",placeholder:"11 siffer"})})),"\n",r.createElement(i,null,r.createElement(u,{type:"do",description:"Bredde tilpasset innhold",content:r.createElement(a.o,{name:"bredderiktig",label:"Postnummer",width:"4.5rem",maxlength:"4"})}),r.createElement(u,{type:"dont",description:"Standardbredde selv hvor bredden er kjent",content:r.createElement(a.o,{name:"breddefeil",label:"Postnummer"})})))}var h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(v,e)):v(e)};function b(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var E=n(72285),j=n(22756),y=n(95573),x=n(1634);const w=e=>{let{pageContext:t}=e;return r.createElement(j.p,{title:t.title})},M=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:o}=n.page,{types:s}=l;return r.createElement(x.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(y.M1,Object.assign({},o,{versions:l.versions})),r.createElement(y.w5,o),a,s&&r.createElement(E.l,{types:s}))};function B(e){return r.createElement(M,e,r.createElement(h,e))}},68805:function(e,t,n){n.d(t,{h:function(){return o}});var l=n(26372),r=n.n(l),a=n(70079);const o=(0,a.forwardRef)(((e,t)=>{const{className:n,children:l,density:o,...s}=e;return a.createElement("button",Object.assign({ref:t,type:"button",className:r()("jkl-icon-button",n),"data-testid":"jkl-icon-button","data-density":o},s),l)}));o.displayName="IconButton"},86710:function(e,t,n){n.d(t,{bq:function(){return u},gc:function(){return m},xr:function(){return d}});var l=n(94989),r=n(79661),a=n(70079),o=n(68805),s=n(55208),i=n(54790);const u={boolProps:["Med hjelpetekst","Med feil","Med tooltip","Med handling","Med benevnelse","Inline"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},d=e=>{let{choiceValues:t,boolValues:n}=e;const{0:u,1:d}=(0,a.useState)(""),m=e=>d(e.target.value),c=null!=n&&n["Med hjelpetekst"]?"Boareal er innvendig bruksareal unntatt bodarealet":void 0,p=null!=n&&n["Med feil"]?a.createElement(a.Fragment,null,"Du må fylle ut boarealet. Se ",a.createElement(l.r,{href:""},"guiden vår")," hvis du er usikker på hvordan du finner riktig areal."):void 0,k=null!=n&&n["Med tooltip"]?a.createElement(s.d,{content:a.createElement(a.Fragment,null,"Boareal måles i kvadratmeter (m",a.createElement("sup",null,"2"),"). Hvis du ikke vet boarealet ditt kan du lese guiden vi lenker til under.")}):void 0,f=null!=n&&n["Med benevnelse"]?a.createElement(a.Fragment,null,"m",a.createElement("sup",null,"2")):void 0,g=null==n?void 0:n.Inline,v=null==t?void 0:t.Variant,h=null!=n&&n["Med handling"]?a.createElement(o.h,{title:"Nullstill feltet",onClick:()=>d("")},a.createElement(r.T,null)):void 0;return g?a.createElement("div",null,"Jeg er"," ",a.createElement(i.o,{value:u,onChange:m,inline:!0,label:"Alder",maxLength:3,width:"2rem",errorLabel:p,actionButton:h})," ","år gammel"):a.createElement(i.o,{label:"Boareal",name:"boareal",helpLabel:c,errorLabel:p,labelProps:{variant:v},tooltip:k,value:u,onChange:m,onKeyDown:()=>console.log("onKeyDown event"),inline:g,actionButton:h,unit:f,align:"right",width:"min(10rem, 100%)"})},m=e=>{let{choiceValues:t,boolValues:n}=e;return(null==n?void 0:n.Inline)?'\n<div>\n    Jeg er <TextInput inline label="Alder" width="3rem" errorLabel='+(null!=n&&n["Med feil"]?'"Du må fylle ut alder"':"{undefined}")+" /> år gammel\n</div>\n":'\n<TextInput\n    label="Boareal"\n    name="boareal"\n    align="right"\n    labelProps={{ variant: "'+(null==t?void 0:t.Variant)+'" }}'+(null!=n&&n["Med hjelpetekst"]?'\n    helpLabel="Boareal er innvendig bruksareal unntatt bodarealet"':"")+(null!=n&&n["Med feil"]?'\n    errorLabel={<>Du må fylle ut boarealet. Se <a href="#">guiden vår</a> hvis du er usikker på hvordan du finner riktig areal.</>}':"")+(null!=n&&n["Med tooltip"]?"\n    tooltip={\n        <PopupTip\n            content={\n                <>\n                    Boareal måles i kvadratmeter (m<sup>2</sup>). Hvis du ikke\n                    vet boarealet ditt kan du lese guiden vi lenker til under.\n                </>\n            }\n        />\n    }":"")+(null!=n&&n["Med handling"]?'\n    actionButton={\n        <IconButton title="Nullstill feltet" onClick={() => setValue("")}>\n            <CloseIcon />\n        </IconButton>    \n    }':"")+(null!=n&&n["Med benevnelse"]?"\n    unit={<>m<sup>2</sup></>}":"")+"\n/>\n"}},55208:function(e,t,n){n.d(t,{d:function(){return d}});var l=n(19794),r=n(26372),a=n.n(r),o=n(70079),s=n(79117),i=n(56189),u=n(5847);const d=e=>{let{content:t,triggerProps:n,...r}=e;const{0:d,1:m}=(0,o.useState)(!1);return o.createElement(s.u,Object.assign({onOpenChange:m,triggerOn:"click"},r),o.createElement(u.a,null,o.createElement("button",Object.assign({},n,{type:"button",className:a()("jkl-tooltip-question-button",null==n?void 0:n.className),"data-testid":"jkl-tooltip-question-button"}),o.createElement(l.U,{variant:"inherit",bold:d}),o.createElement("span",{className:"jkl-sr-only"},"Vis hjelpetekst"),o.createElement("span",{className:"jkl-sr-only","aria-live":"polite","data-testid":"popuptip-content"},d?t:""))),o.createElement(i._,{"data-ispopup":!0},t))}},79117:function(e,t,n){n.d(t,{nr:function(){return d},u:function(){return m}});var l=n(57579),r=n(88905),a=n(84256),o=n(26893),s=n(70079);const i=(0,s.createContext)(null),u=i.Provider,d=()=>{const e=(0,s.useContext)(i);if(null===e)throw new Error("Tooltip-komponentene kan kun brukes inne i <Tooltip />");return e},m=e=>{let{children:t,...n}=e;const i=(e=>{let{initialOpen:t=!1,placement:n="top",delay:i=250,triggerOn:u="hover",onOpenChange:d}=e;const{0:m,1:c}=(0,s.useState)(t),p=(0,s.useRef)(null),k=(0,s.useRef)(null),f=(0,l.YF)({open:m,onOpenChange:e=>{null==d||d(e),c(e)},placement:n,whileElementsMounted:r.Me,middleware:[(0,a.cv)(16),(0,a.RR)(),(0,a.uY)({padding:16}),(0,o.x7)({element:p,padding:8})]}),g=(0,l.qs)(f.context,{role:"tooltip"}),v=(0,l.bQ)(f.context),h=(0,l.eS)(f.context,{enabled:"click"===u}),b=(0,l.XI)(f.context,{enabled:"hover"===u,delay:m?0:i}),E=(0,l.KK)(f.context,{enabled:"click"!==u||m}),j=(0,l.NI)([v,E,g,h,b]);return{triggerOn:u,isOpen:m,setOpen:c,arrowElement:p,...f,refs:{...f.refs,description:k,setDescription:e=>k.current=e},...j}})(n);return s.createElement(u,{value:i},t)}},56189:function(e,t,n){n.d(t,{_:function(){return c}});var l=n(57579),r=n(17050),a=n(3438),o=n(45901),s=n(26372),i=n.n(s),u=n(70079),d=n(79117);function m(e,t){switch(void 0===t&&(t=0),e){case"top":default:return"0 "+t+"px";case"left":return t+"px 0";case"bottom":return"0 "+-t+"px";case"right":return-t+"px 0"}}const c=(0,u.forwardRef)((function(e,t){let{className:n,children:s,"data-ispopup":c,...p}=e;const{context:k,triggerOn:f,arrowElement:g,getFloatingProps:v,placement:h,floatingStyles:b,refs:E}=(0,d.nr)(),j=(0,l.qq)([t,E.setFloating]),y=(0,a.M)("jkl-tooltip-content"),{prefersReducedMotion:x}=(0,o.c)(),{isMounted:w,styles:M}=(0,l.Y_)(k,{duration:{open:x?0:250,close:x?0:150},initial:e=>{let{side:t}=e;return{opacity:0,translate:m(t,5)}},open:e=>{let{side:t}=e;return{opacity:1,translate:m(t,0)}},close:e=>{let{side:t}=e;return{opacity:0,translate:m(t,-5)}}}),{density:B,theme:D}=(0,r.H)(E.reference.current);return u.createElement(l.ll,null,"hover"===f&&u.createElement("span",{ref:E.setDescription,hidden:!0,key:y+"-trigger"},s),w&&u.createElement("span",{className:"jkl",key:y+"-wrapper"},u.createElement("span",Object.assign({key:y,ref:j,"data-placement":h,"aria-hidden":c,"data-testid":"tooltip-content","data-theme":D,"data-layout-density":B,className:i()("jkl-tooltip-content",n)},v({...p,id:y}),{style:{...b,...M}}),s,u.createElement(l.Y$,{context:k,ref:g,width:24,height:12,fill:"var(--background-color)"}))))}))},5847:function(e,t,n){n.d(t,{a:function(){return i}});n(31369);var l=n(57579),r=n(26372),a=n.n(r),o=n(70079),s=n(79117);const i=(0,o.forwardRef)((function(e,t){var n,r;let{children:i,className:u,...d}=e;const{isOpen:m,getReferenceProps:c,refs:p,triggerOn:k}=(0,s.nr)(),f=i.ref,g=(0,l.qq)([f,p.setReference,t]),v=[null===(n=p.reference.current)||void 0===n?void 0:n.textContent,null===(r=p.description.current)||void 0===r?void 0:r.textContent].map((e=>null==e?void 0:e.replaceAll(/[\ue003-\uf8aa]/g,""))).filter(Boolean).join(". ");return o.isValidElement(i)?o.cloneElement(i,c({ref:g,"aria-label":v,...i.props,...d,className:a()(i.props.className,u),"data-tooltip-shown":m,style:{...i.props.style},tabIndex:"click"===k?0:void 0})):o.createElement("button",Object.assign({"data-tooltip-shown":m},c({className:a()(u,"jkl-tooltip-trigger"),type:"button",ref:g,"aria-label":v,...d})),i)}))},19794:function(e,t,n){n.d(t,{U:function(){return a}});var l=n(70079),r=n(31787);const a=e=>l.createElement(r.J,{...e},"");a.displayName="QuestionIcon"}}]);