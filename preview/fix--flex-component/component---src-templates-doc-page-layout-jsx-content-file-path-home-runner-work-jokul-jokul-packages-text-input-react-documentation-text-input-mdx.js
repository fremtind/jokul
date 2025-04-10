"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[662],{57346:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return P},Head:function(){return w},default:function(){return N}});var l=n(64717),r=n(92379),a=n(23035),o=n(9019),s=n(41046),i=n(99767),u=n(29311),m=n(80324),d=n.n(m);const c=["autoExpand","counter","onBlur","onFocus","rows","placeholder","startOpen","style","value","aria-invalid","onChange"],p=(0,r.forwardRef)(((e,t)=>{const{autoExpand:n,counter:l,onBlur:a,onFocus:o,rows:s=7,placeholder:u=" ",style:m,value:d,"aria-invalid":p,onChange:k}=e,f=(0,i.Z)(e,c),{0:g,1:v}=(0,r.useState)((()=>void 0===d?0:"number"==typeof d?String(d).length:d.length)),{0:h,1:b}=(0,r.useState)(!1),E=(0,r.useRef)(null),j=t||E;(0,r.useEffect)((()=>{const e=j.current;if(e){if(!n)return void(e.style.height="");h||d?(e.style.height="auto",e.style.height=e.scrollHeight+"px"):e.style.height=""}}),[n,j,d,h]);const x=(null==l?void 0:l.maxLength)||0,y=x-g;const B=Boolean(p||(l&&g>x?"Du har skrevet "+(g-x)+" tegn for mye":void 0)),M={overflowX:n?"hidden":void 0};return r.createElement("div",{className:"jkl-text-input-wrapper","data-invalid":B,"data-has-content":g>0},r.createElement("textarea",Object.assign({"aria-invalid":B,className:"jkl-text-area__text-area jkl-text-area__text-area--"+s+"-rows",onBlur:function(e){b(!1),a&&a(e)},onFocus:function(e){b(!0),o&&o(e)},onChange:function(e){v(e.target.value.length),k&&k(e)},ref:j,style:Object.assign({},m,M),placeholder:u,value:d},f)),l&&r.createElement("div",{className:"jkl-text-area__counter","aria-hidden":"true"},r.createElement("div",{className:"jkl-text-area__counter-count"},g," / ",x),!l.hideProgress&&r.createElement("div",{className:"jkl-text-area__counter-progress",style:{"--progress-width":(D=y,L=x,(D<=0||0===L?0:100*D/L)+"%")}})));var D,L}));p.displayName="BaseTextArea";const k=["autoExpand","className","counter","density","errorLabel","helpLabel","inline","label","labelProps","startOpen","supportLabelProps","tooltip"],f=(0,r.forwardRef)(((e,t)=>{const{autoExpand:n,className:l,counter:a,density:o,errorLabel:s,helpLabel:m,inline:c,label:f,labelProps:g,startOpen:v,supportLabelProps:h,tooltip:b}=e,E=(0,i.Z)(e,k),j={label:f,density:o,errorLabel:s,helpLabel:m,labelProps:g,inline:c,supportLabelProps:h,tooltip:b},x={autoExpand:n,counter:a,startOpen:v};return r.createElement(u.B,Object.assign({className:d()("jkl-text-area",l,{"jkl-text-area--start-open":v,"jkl-text-area--auto-expand":n}),"data-testid":"jkl-text-area"},j),r.createElement(p,Object.assign({ref:t},E,x)))}));f.displayName="TextArea";const g={boolProps:["Ekspanderende","Starter åpen","Med teller","Skjul progress","Med hjelpetekst","Med feil","Med tooltip"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},v=e=>{let{choiceValues:t,boolValues:n}=e;const{0:l,1:a}=(0,r.useState)(""),o=null==t?void 0:t.Variant,i=null==n?void 0:n.Ekspanderende,u=null==n?void 0:n["Starter åpen"],m=null==n?void 0:n["Med teller"],d=null==n?void 0:n["Skjul progress"],c=null!=n&&n["Med hjelpetekst"]?"Beskriv så utfyllende som mulig":void 0,p=null!=n&&n["Med feil"]?"Du må fylle ut en beskrivelse. Beskriv så utfyllende som mulig.":void 0,k=null!=n&&n["Med tooltip"]?r.createElement(s.d,{content:"Beskriv så utfyllende som mulig."}):void 0;return r.createElement(f,{className:"jkl-spacing-xl--top",label:"Beskrivelse",name:"beskrivelse",helpLabel:c,errorLabel:p,tooltip:k,autoExpand:i,startOpen:u,counter:m?{maxLength:200,hideProgress:d}:void 0,labelProps:{variant:o},value:l,onChange:e=>a(e.target.value)})},h=e=>{let{choiceValues:t,boolValues:n}=e;return'\n<TextArea\n    label="Beskrivelse"\n    name="beskrivelse"\n    helpLabel='+(null!=n&&n["Med hjelpetekst"]?'"Beskriv så utfyllende som mulig"':"{undefined}")+"\n    errorLabel="+(null!=n&&n["Med feil"]?'"Du må fylle ut en beskrivelse. Beskriv så utfyllende som mulig."':"{undefined}")+(null!=n&&n["Med tooltip"]?'\n    tooltip={\n        <PopupTip content="Beskriv så utfyllende som mulig." />\n    }':"")+"\n    autoExpand={"+(null==n?void 0:n.Ekspanderende)+"}\n    startOpen={"+(null==n?void 0:n["Starter åpen"])+"}\n    counter={"+(null!=n&&n["Med teller"]?"{ maxLength: 200, hideProgress: "+(null==n?void 0:n["Skjul progress"])+" }":void 0)+'}\n    variant="'+(null==t?void 0:t.Variant)+'"\n/>\n'};var b=n(79072);function E(e){const t=Object.assign({p:"p",strong:"strong",a:"a",em:"em",h2:"h2",ul:"ul",li:"li"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:s,Grid:i,DoDontExample:u}=t;return s||x("ComponentExample",!0),u||x("DoDontExample",!0),i||x("Grid",!0),n||x("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Vi bruker tekstfelt og tekstområder når vi vil at brukerne skal legge inn\ninformasjon som tekst eller tall hvor vi ikke gir brukeren forhåndsvalg.")),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"Tekstfelt:")," brukes for eksempel til navn, e-postadresser, fødselsnummer og andre typer informasjon som får plass på én linje."),"\n",r.createElement(s,{title:"TextInput",component:o.xr,knobs:o.bq,codeExample:o.gc}),"\n",r.createElement(t.p,null,"Innholdet i tekstfelt kan være fritekst eller begrenses til et fast format, for eksempel fire siffer for postnummer eller at en e-postadresse må ha en alfakrøll og et toppdomene.\nVi har en variant av tekstfelt kalt ",r.createElement("i",null,"inline"),". Denne er til spesialtilfeller, hvis vi for eksempel trenger å plassere et tekstfelt i en setning."),"\n",r.createElement(t.p,null,"Du finner et ",r.createElement(t.a,{href:"/preview/fix--flex-component/demoer/skjemavalidering/"},"eksempel på tekstfelt brukt i skjemakontekst")," under Demoer. ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/portal/src/pages/demoer/skjemavalidering.tsx"},"Koden til eksempelet")," finner du på GitHub."),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"Tekstområder:")," brukes til fritekstfelter hvor det forventes å kunne komme mer enn én setning."),"\n",r.createElement(s,{title:"TextArea",component:v,knobs:g,codeExample:h}),"\n",r.createElement(t.p,null,"Vanligvis starter tekstområdet minimert og likner et vanlig tekstfelt. Når det får fokus vil feltet ekspandere. Du kan styre antall rader feltet skal ekspanderes til for å tilpasse til forventet lengde. Om innholdet blir lenger enn oppgitt antall rader vil feltet scrolle."),"\n",r.createElement(t.p,null,"Du kan velge om feltet alltid skal ekspanderes til å vise alt innhold. Eventuell scrolling flyttes da til siden. Innhold under skjemafeltet vil dyttes nedover."),"\n",r.createElement(t.p,null,"Dersom du har begrensninger på antall tegn kan du velge å vise en teller. Telleren vil ha en standard hjelpetekst om feltet går over grensen. Teksten kan overstyres. Det er ingen blokkering som hindrer brukeren å gå over grensen. Brukeren skal få fullføre tankerekken sin før hen redigerer teksten til å være innenfor grensen. Dersom feltet har en teller vises som standard en ",r.createElement(t.em,null,"progress bar")," som krymper etter hvert som teksten blir lenger. Denne kan du velge å skru av og bare vise telleren."),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"Maskert input:")," Brukes til å håndtere lange tall som kan være vanskelige å lese."),"\n",r.createElement(t.p,null,"Eksempler på tilfeller hvor en maskert input kan være nyttig er når brukeren skal skrive inn fødselsnummer, kortnummer, kontonummer eller andre lange tall. Dette gjør at tallene blir enklere å lese, og gjør det lettere for brukeren å være sikre på at de har skrevet inn riktig informasjon."),"\n",r.createElement(s,{title:"Bruk med formaterer",component:b.We,codeExample:b.Uo}),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"/preview/fix--flex-component/komponenter/formatters#maskering-av-skjemafelter"},"Les mer om formattering og maskering av input")),"\n",r.createElement(t.h2,null,"Bruk"),"\n",r.createElement(t.p,null,"Før du velger et tekstfelt eller tekstområde kan det være greit å ha vurdert de andre skjemakomponentene vi har:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"For datoer skal vi bruke ",r.createElement(t.a,{href:"/preview/fix--flex-component/komponenter/datepicker"},"Datepicker")),"\n",r.createElement(t.li,null,"Om vi har forhåndsdefinerte valg å gi brukeren er det flere alternativer","\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/fix--flex-component/komponenter/radiobutton"},"RadioButton")," for mellom to og fem valg"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/fix--flex-component/komponenter/select"},"Select")," dersom vi har mange nok valg til at radioknapper ikke fungerer"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/fix--flex-component/komponenter/checkbox"},"Checkbox")," dersom det kan gjøres flere valg"),"\n"),"\n"),"\n",r.createElement(t.li,null,"Om vi har forhåndsvalg, men også må kunne hente inn fritekst, se til ",r.createElement(t.a,{href:"/preview/fix--flex-component/komponenter/autosuggest"},"Autosuggest")),"\n"),"\n",r.createElement(t.p,null,"Det er noen faste regler som gjelder for både tekstfelt og tekstområder:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Hvert skjemafelt skal ha en ledetekst som forteller brukeren hva de skal oppgi av informasjon i feltet. Teksten kan skjules visuelt, men da må det være tydelig fra sammenhengen hva feltet gjelder (for eksempel et søk eller som en del av en setning)."),"\n",r.createElement(t.li,null,"Hvis skjemafeltet ikke validerer vises en feilmelding som forteller hva som er galt. Essensen i en eventuell hjelpetekst må komme fram også i feilmeldingen."),"\n"),"\n",r.createElement(i,null,r.createElement(u,{type:"do",description:"Hjelpetekst i feilmelding",content:r.createElement(a.o,{name:"hjelpriktig",label:"Fødselsnummer",errorLabel:"Du må fylle ut fødselsnummer, 11 siffer"})}),r.createElement(u,{type:"dont",description:"Feilmelding uten hjelp",content:r.createElement(a.o,{name:"hjelpfeil",label:"Fødselsnummer",errorLabel:"Du må fylle ut fødselsnummer"})})),"\n",r.createElement(t.p,null,"Det er også noen felles anbefalinger:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholders_are_not_accessible"},"Placeholdertekst bør unngås"),". Den er ikke tilgjengelig for skjermlesere. Informasjonen forsvinner for brukeren og gjør seg sannsynligvis bedre som en ledetekst eller hjelpetekst."),"\n",r.createElement(t.li,null,"Størrelsen på skjemafeltet bør passe til typen data brukerne skal legge inn, både i bredden (tekstfelt) og høyden (tekstområde)."),"\n",r.createElement(t.li,null,"Størrelsen på ledeteksten bør stå i forhold til innholdet rundt. Standard i et skjema er liten størrelse."),"\n"),"\n",r.createElement(i,null,r.createElement(u,{type:"do",description:"Informasjon i hjelpetekst",content:r.createElement(a.o,{name:"placeholderriktig",label:"Fødselsnummer",helpLabel:"Fødselsnummer består av 11 siffer"})}),r.createElement(u,{type:"dont",description:"Hjelpetekst som forsvinner",content:r.createElement(a.o,{name:"placeholderfeil",label:"Fødselsnummer",placeholder:"11 siffer"})})),"\n",r.createElement(i,null,r.createElement(u,{type:"do",description:"Bredde tilpasset innhold",content:r.createElement(a.o,{name:"bredderiktig",label:"Postnummer",width:"4.5rem",maxlength:"4"})}),r.createElement(u,{type:"dont",description:"Standardbredde selv hvor bredden er kjent",content:r.createElement(a.o,{name:"breddefeil",label:"Postnummer"})})))}var j=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(E,e)):E(e)};function x(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var y=n(75482),B=n(96036),M=n(59001),D=n(65458),L=n(79379);const w=e=>{let{pageContext:t}=e;return r.createElement(B.p,{title:t.title})},P=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:o}=n.page,{types:s}=l;return r.createElement(L.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(D.M1,Object.assign({},o,{versions:l.versions})),t.pathname.includes("komponenter")&&r.createElement(M.c,{variant:"komponent",component:o.title}),r.createElement(D.w5,o),a,s&&r.createElement(y.l,{types:s}))};function N(e){return r.createElement(P,e,r.createElement(j,e))}},94726:function(e,t,n){n.d(t,{h:function(){return i}});var l=n(99767),r=n(80324),a=n.n(r),o=n(92379);const s=["className","children","density"],i=(0,o.forwardRef)(((e,t)=>{const{className:n,children:r,density:i}=e,u=(0,l.Z)(e,s);return o.createElement("button",Object.assign({ref:t,type:"button",className:a()("jkl-icon-button",n),"data-testid":"jkl-icon-button","data-density":i},u),r)}));i.displayName="IconButton"},9019:function(e,t,n){n.d(t,{bq:function(){return u},gc:function(){return d},xr:function(){return m}});var l=n(48467),r=n(46835),a=n(92379),o=n(94726),s=n(41046),i=n(23035);const u={boolProps:["Med hjelpetekst","Med feil","Med tooltip","Med handling","Med benevnelse","Inline"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},m=e=>{let{choiceValues:t,boolValues:n}=e;const{0:u,1:m}=(0,a.useState)(""),d=e=>m(e.target.value),c=null!=n&&n["Med hjelpetekst"]?"Boareal er innvendig bruksareal unntatt bodarealet":void 0,p=null!=n&&n["Med feil"]?a.createElement(a.Fragment,null,"Du må fylle ut boarealet. Se ",a.createElement(l.r,{href:""},"guiden vår")," hvis du er usikker på hvordan du finner riktig areal."):void 0,k=null!=n&&n["Med tooltip"]?a.createElement(s.d,{content:a.createElement(a.Fragment,null,"Boareal måles i kvadratmeter (m",a.createElement("sup",null,"2"),"). Hvis du ikke vet boarealet ditt kan du lese guiden vi lenker til under.")}):void 0,f=null!=n&&n["Med benevnelse"]?a.createElement(a.Fragment,null,"m",a.createElement("sup",null,"2")):void 0,g=null==n?void 0:n.Inline,v=null==t?void 0:t.Variant,h=null!=n&&n["Med handling"]?a.createElement(o.h,{title:"Nullstill feltet",onClick:()=>m("")},a.createElement(r.T,null)):void 0;return g?a.createElement("div",null,"Jeg er"," ",a.createElement(i.o,{value:u,onChange:d,inline:!0,label:"Alder",maxLength:3,width:"2rem",errorLabel:p,actionButton:h})," ","år gammel"):a.createElement(i.o,{label:"Boareal",name:"boareal",helpLabel:c,errorLabel:p,labelProps:{variant:v},tooltip:k,value:u,onChange:d,onKeyDown:()=>console.log("onKeyDown event"),inline:g,actionButton:h,unit:f,align:"right",width:"min(10rem, 100%)"})},d=e=>{let{choiceValues:t,boolValues:n}=e;return(null==n?void 0:n.Inline)?'\n<div>\n    Jeg er <TextInput inline label="Alder" width="3rem" errorLabel='+(null!=n&&n["Med feil"]?'"Du må fylle ut alder"':"{undefined}")+" /> år gammel\n</div>\n":'\n<TextInput\n    label="Boareal"\n    name="boareal"\n    align="right"\n    labelProps={{ variant: "'+(null==t?void 0:t.Variant)+'" }}'+(null!=n&&n["Med hjelpetekst"]?'\n    helpLabel="Boareal er innvendig bruksareal unntatt bodarealet"':"")+(null!=n&&n["Med feil"]?'\n    errorLabel={<>Du må fylle ut boarealet. Se <a href="#">guiden vår</a> hvis du er usikker på hvordan du finner riktig areal.</>}':"")+(null!=n&&n["Med tooltip"]?"\n    tooltip={\n        <PopupTip\n            content={\n                <>\n                    Boareal måles i kvadratmeter (m<sup>2</sup>). Hvis du ikke\n                    vet boarealet ditt kan du lese guiden vi lenker til under.\n                </>\n            }\n        />\n    }":"")+(null!=n&&n["Med handling"]?'\n    actionButton={\n        <IconButton title="Nullstill feltet" onClick={() => setValue("")}>\n            <CloseIcon />\n        </IconButton>    \n    }':"")+(null!=n&&n["Med benevnelse"]?"\n    unit={<>m<sup>2</sup></>}":"")+"\n/>\n"}},41046:function(e,t,n){n.d(t,{d:function(){return c}});var l=n(99767),r=n(58990),a=n(80324),o=n.n(a),s=n(92379),i=n(16965),u=n(6854),m=n(27547);const d=["content","triggerProps"],c=e=>{let{content:t,triggerProps:n}=e,a=(0,l.Z)(e,d);const{0:c,1:p}=(0,s.useState)(!1);return s.createElement(i.u,Object.assign({onOpenChange:p,triggerOn:"click"},a),s.createElement(m.a,null,s.createElement("button",Object.assign({},n,{type:"button",className:o()("jkl-tooltip-question-button",null==n?void 0:n.className),"data-testid":"jkl-tooltip-question-button"}),s.createElement(r.U,{variant:"inherit",bold:c}),s.createElement("span",{className:"jkl-sr-only"},"Vis hjelpetekst"),s.createElement("span",{className:"jkl-sr-only","aria-live":"polite","data-testid":"popuptip-content"},c?t:""))),s.createElement(u._,{"data-ispopup":!0},t))}}}]);