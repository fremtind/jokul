"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[662],{58750:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return M},Head:function(){return x},default:function(){return D}});var l=n(47160),r=n(70079),a=n(54790),o=n(86710),s=n(81159),i=n(26372),m=n.n(i);const u=(0,r.forwardRef)(((e,t)=>{const{autoExpand:n,counter:l,onBlur:a,onFocus:o,rows:s=7,placeholder:i=" ",startOpen:m,style:u,value:d,"aria-invalid":p,onChange:c,...k}=e,{0:g,1:v}=(0,r.useState)((()=>void 0===d?0:"number"==typeof d?String(d).length:d.length)),{0:f,1:h}=(0,r.useState)(!1),b=(0,r.useRef)(null),E=t||b;(0,r.useEffect)((()=>{const e=E.current;if(e){if(!n)return void(e.style.height="");f||d?(e.style.height="auto",e.style.height=e.scrollHeight+"px"):e.style.height=""}}),[n,E,d,f]);const j=(null==l?void 0:l.maxLength)||0,y=j-g;const x=Boolean(p||(l&&g>j?"Du har skrevet "+(g-j)+" tegn for mye":void 0)),M={overflowX:n?"hidden":void 0};return r.createElement("div",{className:"jkl-text-input-wrapper","data-invalid":x,"data-has-content":g>0},r.createElement("textarea",Object.assign({"aria-invalid":x,className:"jkl-text-area__text-area jkl-text-area__text-area--"+s+"-rows",onBlur:function(e){h(!1),a&&a(e)},onFocus:function(e){h(!0),o&&o(e)},onChange:function(e){v(e.target.value.length),c&&c(e)},ref:E,style:{...u,...M},placeholder:i,value:d},k)),l&&r.createElement("div",{className:"jkl-text-area__counter","aria-hidden":"true"},r.createElement("div",{className:"jkl-text-area__counter-count"},g," / ",j),!l.hideProgress&&r.createElement("div",{className:"jkl-text-area__counter-progress",style:{"--progress-width":(D=y,w=j,(D<=0||0===w?0:100*D/w)+"%")}})));var D,w}));u.displayName="BaseTextArea";const d=(0,r.forwardRef)(((e,t)=>{const{autoExpand:n,className:l,counter:a,density:o,errorLabel:i,helpLabel:d,inline:p,label:c,labelProps:k,startOpen:g,supportLabelProps:v,tooltipProps:f,...h}=e,b={label:c,density:o,errorLabel:i,helpLabel:d,labelProps:k,inline:p,supportLabelProps:v,tooltipProps:f},E={autoExpand:n,counter:a,startOpen:g};return r.createElement(s.B,Object.assign({className:m()("jkl-text-area",l,{"jkl-text-area--start-open":g,"jkl-text-area--auto-expand":n}),"data-testid":"jkl-text-area"},b),r.createElement(u,Object.assign({ref:t},h,E)))}));d.displayName="TextArea";const p={boolProps:["Ekspanderende","Starter åpen","Med teller","Skjul progress","Med hjelpetekst","Med feil","Med tooltip"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},c=e=>{let{choiceValues:t,boolValues:n}=e;const{0:l,1:a}=(0,r.useState)(""),o=null==t?void 0:t.Variant,s=null==n?void 0:n.Ekspanderende,i=null==n?void 0:n["Starter åpen"],m=null==n?void 0:n["Med teller"],u=null==n?void 0:n["Skjul progress"],p=null!=n&&n["Med hjelpetekst"]?"Beskriv så utfyllende som mulig":void 0,c=null!=n&&n["Med feil"]?"Du må fylle ut en beskrivelse. Beskriv så utfyllende som mulig.":void 0,k=null!=n&&n["Med tooltip"]?{content:"Beskriv så utfyllende som mulig."}:void 0;return r.createElement(d,{className:"jkl-spacing-xl--top",label:"Beskrivelse",name:"beskrivelse",helpLabel:p,errorLabel:c,tooltipProps:k,autoExpand:s,startOpen:i,counter:m?{maxLength:200,hideProgress:u}:void 0,labelProps:{variant:o},value:l,onChange:e=>a(e.target.value)})},k=e=>{let{choiceValues:t,boolValues:n}=e;return'\n<TextArea\n    label="Beskrivelse"\n    name="beskrivelse"\n    helpLabel='+(null!=n&&n["Med hjelpetekst"]?'"Beskriv så utfyllende som mulig"':"{undefined}")+"\n    errorLabel="+(null!=n&&n["Med feil"]?'"Du må fylle ut en beskrivelse. Beskriv så utfyllende som mulig."':"{undefined}")+(null!=n&&n["Med tooltip"]?'\n    tooltipProps={{ content: "Beskriv så utfyllende som mulig." }}':"")+"\n    autoExpand={"+(null==n?void 0:n.Ekspanderende)+"}\n    startOpen={"+(null==n?void 0:n["Starter åpen"])+"}\n    counter={"+(null!=n&&n["Med teller"]?"{ maxLength: 200, hideProgress: "+(null==n?void 0:n["Skjul progress"])+" }":void 0)+'}\n    variant="'+(null==t?void 0:t.Variant)+'"\n/>\n'};var g=n(11527);function v(e){const t=Object.assign({p:"p",strong:"strong",a:"a",em:"em",h2:"h2",ul:"ul",li:"li"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:s,Grid:i,DoDontExample:m}=t;return s||h("ComponentExample",!0),m||h("DoDontExample",!0),i||h("Grid",!0),n||h("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Vi bruker tekstfelt og tekstområder når vi vil at brukerne skal legge inn informasjon som tekst eller tall hvor vi\nikke gir brukeren forhåndsvalg.")),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"Tekstfelt:")," brukes for eksempel til navn, e-postadresser, fødselsnummer og andre typer informasjon som får plass på én linje."),"\n",r.createElement(s,{title:"TextInput",component:o.xr,knobs:o.bq,codeExample:o.gc}),"\n",r.createElement(t.p,null,"Innholdet i tekstfelt kan være fritekst eller begrenses til et fast format, for eksempel fire siffer for postnummer eller at en e-postadresse må ha en alfakrøll og et toppdomene.\nVi har en variant av tekstfelt kalt ",r.createElement("i",null,"inline"),". Denne er til spesialtilfeller, hvis vi for eksempel trenger å plassere et tekstfelt i en setning."),"\n",r.createElement(t.p,null,"Du finner et ",r.createElement(t.a,{href:"/preview/menu/demoer/skjemavalidering/"},"eksempel på tekstfelt brukt i skjemakontekst")," under Demoer. ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/portal/src/pages/demoer/skjemavalidering.tsx"},"Koden til eksempelet")," finner du på GitHub."),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"Tekstområder:")," brukes til fritekstfelter hvor det forventes å kunne komme mer enn én setning."),"\n",r.createElement(s,{title:"TextArea",component:c,knobs:p,codeExample:k}),"\n",r.createElement(t.p,null,"Vanligvis starter tekstområdet minimert og likner et vanlig tekstfelt. Når det får fokus vil feltet ekspandere. Du kan styre antall rader feltet skal ekspanderes til for å tilpasse til forventet lengde. Om innholdet blir lenger enn oppgitt antall rader vil feltet scrolle."),"\n",r.createElement(t.p,null,"Du kan velge om feltet alltid skal ekspanderes til å vise alt innhold. Eventuell scrolling flyttes da til siden. Innhold under skjemafeltet vil dyttes nedover."),"\n",r.createElement(t.p,null,"Dersom du har begrensninger på antall tegn kan du velge å vise en teller. Telleren vil ha en standard hjelpetekst om feltet går over grensen. Teksten kan overstyres. Det er ingen blokkering som hindrer brukeren å gå over grensen. Brukeren skal få fullføre tankerekken sin før hen redigerer teksten til å være innenfor grensen. Dersom feltet har en teller vises som standard en ",r.createElement(t.em,null,"progress bar")," som krymper etter hvert som teksten blir lenger. Denne kan du velge å skru av og bare vise telleren."),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"Maskert input:")," Brukes til å håndtere lange tall som kan være vanskelige å lese."),"\n",r.createElement(t.p,null,"Eksempler på tilfeller hvor en maskert input kan være nyttig er når brukeren skal skrive inn fødselsnummer, kortnummer, kontonummer eller andre lange tall. Dette gjør at tallene blir enklere å lese, og gjør det lettere for brukeren å være sikre på at de har skrevet inn riktig informasjon."),"\n",r.createElement(s,{title:"Bruk med formaterer",component:g.We,codeExample:g.Uo}),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"/preview/menu/komponenter/formatters#maskering-av-skjemafelter"},"Les mer om formattering og maskering av input")),"\n",r.createElement(t.h2,null,"Bruk"),"\n",r.createElement(t.p,null,"Før du velger et tekstfelt eller tekstområde kan det være greit å ha vurdert de andre skjemakomponentene vi har:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"For datoer skal vi bruke ",r.createElement(t.a,{href:"/preview/menu/komponenter/datepicker"},"Datepicker")),"\n",r.createElement(t.li,null,"Om vi har forhåndsdefinerte valg å gi brukeren er det flere alternativer","\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/menu/komponenter/radiobutton"},"RadioButton")," for mellom to og fem valg"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/menu/komponenter/select"},"Select")," dersom vi har mange nok valg til at radioknapper ikke fungerer"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/menu/komponenter/checkbox"},"Checkbox")," dersom det kan gjøres flere valg"),"\n"),"\n"),"\n",r.createElement(t.li,null,"Om vi har forhåndsvalg, men også må kunne hente inn fritekst, se til ",r.createElement(t.a,{href:"/preview/menu/komponenter/autosuggest"},"Autosuggest")),"\n"),"\n",r.createElement(t.p,null,"Det er noen faste regler som gjelder for både tekstfelt og tekstområder:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Hvert skjemafelt skal ha en ledetekst som forteller brukeren hva de skal oppgi av informasjon i feltet. Teksten kan skjules visuelt, men da må det være tydelig fra sammenhengen hva feltet gjelder (for eksempel et søk eller som en del av en setning)."),"\n",r.createElement(t.li,null,"Hvis skjemafeltet ikke validerer vises en feilmelding som forteller hva som er galt. Essensen i en eventuell hjelpetekst må komme fram også i feilmeldingen."),"\n"),"\n",r.createElement(i,null,r.createElement(m,{type:"do",description:"Hjelpetekst i feilmelding",content:r.createElement(a.o,{name:"hjelpriktig",label:"Fødselsnummer",errorLabel:"Du må fylle ut fødselsnummer, 11 siffer"})}),r.createElement(m,{type:"dont",description:"Feilmelding uten hjelp",content:r.createElement(a.o,{name:"hjelpfeil",label:"Fødselsnummer",errorLabel:"Du må fylle ut fødselsnummer"})})),"\n",r.createElement(t.p,null,"Det er også noen felles anbefalinger:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholders_are_not_accessible"},"Placeholdertekst bør unngås"),". Den er ikke tilgjengelig for skjermlesere. Informasjonen forsvinner for brukeren og gjør seg sannsynligvis bedre som en ledetekst eller hjelpetekst."),"\n",r.createElement(t.li,null,"Størrelsen på skjemafeltet bør passe til typen data brukerne skal legge inn, både i bredden (tekstfelt) og høyden (tekstområde)."),"\n",r.createElement(t.li,null,"Størrelsen på ledeteksten bør stå i forhold til innholdet rundt. Standard i et skjema er liten størrelse."),"\n"),"\n",r.createElement(i,null,r.createElement(m,{type:"do",description:"Informasjon i hjelpetekst",content:r.createElement(a.o,{name:"placeholderriktig",label:"Fødselsnummer",helpLabel:"Fødselsnummer består av 11 siffer"})}),r.createElement(m,{type:"dont",description:"Hjelpetekst som forsvinner",content:r.createElement(a.o,{name:"placeholderfeil",label:"Fødselsnummer",placeholder:"11 siffer"})})),"\n",r.createElement(i,null,r.createElement(m,{type:"do",description:"Bredde tilpasset innhold",content:r.createElement(a.o,{name:"bredderiktig",label:"Postnummer",width:"4.5rem",maxlength:"4"})}),r.createElement(m,{type:"dont",description:"Standardbredde selv hvor bredden er kjent",content:r.createElement(a.o,{name:"breddefeil",label:"Postnummer"})})))}var f=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(v,e)):v(e)};function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var b=n(72285),E=n(22756),j=n(95573),y=n(1634);const x=e=>{let{pageContext:t}=e;return r.createElement(E.p,{title:t.title})},M=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:o}=n.page,{types:s}=l;return r.createElement(y.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(j.M1,Object.assign({},o,{versions:l.versions})),r.createElement(j.w5,o),a,s&&r.createElement(b.l,{types:s}))};function D(e){return r.createElement(M,e,r.createElement(f,e))}},86710:function(e,t,n){n.d(t,{bq:function(){return s},gc:function(){return m},xr:function(){return i}});var l=n(94989),r=n(79661),a=n(70079),o=n(54790);const s={boolProps:["Med hjelpetekst","Med feil","Med tooltip","Med handling","Med benevnelse","Inline"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},i=e=>{let{choiceValues:t,boolValues:n}=e;const{0:s,1:i}=(0,a.useState)(""),m=e=>i(e.target.value),u=null!=n&&n["Med hjelpetekst"]?"Boareal er innvendig bruksareal unntatt bodarealet":void 0,d=null!=n&&n["Med feil"]?a.createElement(a.Fragment,null,"Du må fylle ut boarealet. Se ",a.createElement(l.r,{href:""},"guiden vår")," hvis du er usikker på hvordan du finner riktig areal."):void 0,p=null!=n&&n["Med tooltip"]?{content:a.createElement(a.Fragment,null,"Boareal måles i kvadratmeter (m",a.createElement("sup",null,"2"),"). Hvis du ikke vet boarealet ditt kan du lese guiden vi lenker til under.")}:void 0,c=null!=n&&n["Med benevnelse"]?a.createElement(a.Fragment,null,"m",a.createElement("sup",null,"2")):void 0,k=null==n?void 0:n.Inline,g=null==t?void 0:t.Variant,v=null!=n&&n["Med handling"]?{icon:a.createElement(r.T,null),label:"Nullstill feltet",onClick:()=>i("")}:void 0;return k?a.createElement("div",null,"Jeg er"," ",a.createElement(o.o,{value:s,onChange:m,inline:!0,label:"Alder",maxLength:3,width:"2rem",errorLabel:d,action:v})," ","år gammel"):a.createElement(o.o,{label:"Boareal",name:"boareal",helpLabel:u,errorLabel:d,labelProps:{variant:g},tooltipProps:p,value:s,onChange:m,onKeyDown:()=>console.log("onKeyDown event"),inline:k,action:v,unit:c,align:"right",width:"min(10rem, 100%)"})},m=e=>{let{choiceValues:t,boolValues:n}=e;return(null==n?void 0:n.Inline)?'\n<div>\n    Jeg er <TextInput inline label="Alder" width="3rem" errorLabel='+(null!=n&&n["Med feil"]?'"Du må fylle ut alder"':"{undefined}")+" /> år gammel\n</div>\n":'\n<TextInput\n    label="Boareal"\n    name="boareal"\n    align="right"\n    labelProps={{ variant: "'+(null==t?void 0:t.Variant)+'" }}'+(null!=n&&n["Med hjelpetekst"]?'\n    helpLabel="Boareal er innvendig bruksareal unntatt bodarealet"':"")+(null!=n&&n["Med feil"]?'\n    errorLabel={<>Du må fylle ut boarealet. Se <a href="#">guiden vår</a> hvis du er usikker på hvordan du finner riktig areal.</>}':"")+(null!=n&&n["Med tooltip"]?"\n    tooltipProps={{ content: (\n        <>\n            Boareal måles i kvadratmeter (m<sup>2</sup>). Hvis du ikke vet boarealet ditt kan du lese guiden\n            vi lenker til under.\n        </>\n    )}}":"")+(null!=n&&n["Med handling"]?'\n    action={{\n        icon: <CloseIcon />,\n        label: "Nullstill feltet",\n        onClick: () => setValue(""),\n    }}':"")+(null!=n&&n["Med benevnelse"]?"\n    unit={<>m<sup>2</sup></>}":"")+"\n/>\n"}}}]);