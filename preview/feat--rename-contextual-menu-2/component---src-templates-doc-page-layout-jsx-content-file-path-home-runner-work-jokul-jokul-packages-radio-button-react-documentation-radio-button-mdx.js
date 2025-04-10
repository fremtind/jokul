"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[274],{50314:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return M},Head:function(){return L},default:function(){return O}});var l=t(47160),a=t(70079),r=t(68142);const o=(0,a.createContext)({name:void 0,value:void 0,onChange:()=>{},inline:!1,density:void 0,invalid:!1}),i=e=>{let{state:n,children:t}=e;return a.createElement(o.Provider,{value:n},t)},u=e=>{const{name:n,value:t,onChange:l,errorLabel:o,inline:u=!1,density:s,labelProps:d={variant:"medium"},...m}=e;return a.createElement(i,{state:{onChange:l,value:t,name:n,invalid:Boolean(o),inline:u,density:s}},a.createElement(r.N,Object.assign({errorLabel:o,labelProps:d,"data-testid":"jkl-radio-button-group",density:s},m,{role:"radiogroup","aria-invalid":Boolean(o)})))};var s=t(65975),d=t(3438),m=t(26372),c=t.n(m);const p=(0,a.forwardRef)(((e,n)=>{const{id:t,className:l,checked:r,children:o,label:i,density:u,inline:s,invalid:m,name:p,value:v,onChange:k,...g}=e,b=(0,d.M)(t||"jkl-radio-button",{generateSuffix:!t});return a.createElement("div",{className:c()("jkl-radio-button",l,{"jkl-radio-button--inline":s,"jkl-radio-button--error":m}),"data-density":u},a.createElement("input",Object.assign({name:p,ref:n},g,{id:b,className:"jkl-radio-button__input",type:"radio",onChange:k,value:v,checked:r})),a.createElement("label",{"data-testid":"jkl-radio-button__label-tag",htmlFor:b,className:"jkl-radio-button__label"},a.createElement("span",{"aria-hidden":!0,className:"jkl-radio-button__dot"}),a.createElement("span",{className:"jkl-radio-button__text"},i||o)))}));p.displayName="BaseRadioButton";const v=(0,a.forwardRef)(((e,n)=>{const{checked:t,value:l,supportLabelProps:r,helpLabel:i,...u}=e,{value:m,density:c,...v}=(0,a.useContext)(o),k=(0,d.M)("jkl-support-label");return a.createElement(a.Fragment,null,a.createElement(p,Object.assign({},v,u,{ref:n,checked:void 0!==t?t:void 0!==m?l===m:void 0,value:l,"aria-describedby":i?k:void 0})),a.createElement(s.A,Object.assign({},r,{label:i,labelType:"help",id:k,density:c})))}));v.displayName="RadioButton";const k={boolProps:["Med hjelpetekst","Med feil","Med tooltip"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},g=e=>{let{boolValues:n,choiceValues:t}=e;const[l,r]=a.useState("Yes"),o=null!=n&&n["Med hjelpetekst"]?"Ved å velge e-post får du beskjed raskest mulig":void 0,i=null!=n&&n["Med feil"]?"Du må velge hvordan du vil bli kontaktet. Ved å velge e-post får du beskjed raskest mulig.":void 0,s=null!=t&&t.Variant?t.Variant:"medium",d=null!=n&&n["Med tooltip"]?{content:"Dette burde kanskje vært en FieldGroup med Checkbox, og ikke en RadioButtonGroup? 🤔"}:void 0;return a.createElement(u,{legend:"Hvordan vil du bli kontaktet?",name:"kontaktmetode",labelProps:{variant:s},helpLabel:o,errorLabel:i,tooltipProps:d,value:l,onChange:e=>r(e.target.value)},["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"].map((e=>a.createElement(v,{key:e,value:e},e))))},b=e=>{let{boolValues:n,choiceValues:t}=e;return'\n<RadioButtonGroup\n    legend="Hvordan vil du bli kontaktet?"\n    name="kontaktmetode"\n    labelProps={{ variant: "'+((null==t?void 0:t.Variant)||"medium")+'" }}'+(null!=n&&n["Med hjelpetekst"]?'\n            helpLabel="Ved å velge e-post får du beskjed raskest mulig"':"")+(null!=n&&n["Med feil"]?'\n    errorLabel="Du må velge hvordan du vil bli kontaktet. Ved å velge e-post får du beskjed raskest mulig."':"")+(null!=n&&n["Med tooltip"]?'\n    tooltipProps={{ content: "Dette burde kanskje vært en FieldGroup med Checkbox, og ikke en RadioButtonGroup? 🤔" }}':"")+"\n    value={selectedValue}\n    onChange={(e) => setSelectedValue(e.target.value)}\n>\n    {choices.map((value) => (\n        <RadioButton key={value} value={value}>\n            {value}\n        </RadioButton>\n    ))}\n</RadioButtonGroup>\n"},f=e=>{let{boolValues:n,choiceValues:t}=e;const[l,r]=a.useState(""),o=t&&t.Variant?t.Variant:"medium";return a.createElement(u,{legend:"Fikk du gjort det du skulle?",name:"fant-du-fram",inline:n&&n.Inline,labelProps:{variant:o},value:l,onChange:e=>r(e.target.value)},a.createElement(v,{value:"y"},"Ja"),a.createElement(v,{value:"n"},"Nei"))},h=e=>{let{boolValues:n,choiceValues:t}=e;return'\n<RadioButtonGroup\n    legend="Fikk du gjort det du skulle?"\n    name="fant-du-fram"\n    inline={'+!(null==n||!n.Inline)+'}\n    labelProps={{ variant: "'+((null==t?void 0:t.Variant)||"medium")+'" }}\n    value={selectedValue}\n    onChange={(e) => setSelectedValue(e.target.value)}\n>\n    <RadioButton value="y">Ja</RadioButton>\n    <RadioButton value="n">Nei</RadioButton>\n</RadioButtonGroup>\n'},E=e=>{let{boolValues:n}=e;const[t,l]=a.useState("Månedspris");return a.createElement(u,{legend:"Velg prisvisning",name:"prisvisning",inline:n&&n.Inline,labelProps:{srOnly:!0},value:t,onChange:e=>l(e.target.value)},["Månedspris","Årspris"].map((e=>a.createElement(v,{key:e,value:e},e))))},j=e=>{let{boolValues:n}=e;return'\n<RadioButtonGroup\n    legend="Velg prisvisning"\n    name="prisvisning"\n    inline={'+!(null==n||!n.Inline)+"}\n    labelProps={{ srOnly: true }}\n    value={selectedValue}\n    onChange={(e) => setSelectedValue(e.target.value)}\n>\n    {choices.map((value) => (\n        <RadioButton key={value} value={value}>{value}</RadioButton>\n    ))}\n</RadioButtonGroup>\n"};var B=t(10793),V=t(5871),R=t(10286);const y={locale:"no-NB",minimumFractionDigits:0,maximumFractionDigits:2,suffix:"kr"};function x(e,n){const t=(0,R.p)(e);if(isNaN(t))return e.toString();const l=Number.isInteger(t)?{}:{minimumFractionDigits:2,maximumFractionDigits:2},a=void 0!==(null==n?void 0:n.suffix)?n.suffix:y.suffix,{prefix:r,...o}={...y,...l,...n},i=(null==r?void 0:r.length)?"".concat(r).concat(B.vk):"",u=(null==a?void 0:a.length)?"".concat(B.vk).concat(a):"",s=(0,V.u)(t,o);return"".concat(i).concat(s).concat(u)}const C=e=>{let{boolValues:n}=e;const[t,l]=a.useState("gjeldplus1");return a.createElement(u,{legend:"Forsikringssum",name:"forsikringssum",value:t,onChange:e=>l(e.target.value)},a.createElement(v,{value:"gjeldplus1",helpLabel:"Hele boliggjelden pluss en årsinntekt"},x(27e5)," (anbefalt)"),a.createElement(v,{value:"gjeld",helpLabel:"Hele boliggjelden"},x(2e6)),a.createElement(v,{value:"annen"},"Annen sum"))},N=()=>'\n<RadioButtonGroup\n    legend="Forsikringssum"\n    name="forsikringssum"\n    value={selectedValue}\n    onChange={(e) => setSelectedValue(e.target.value)}\n>\n    <RadioButton value="gjeldplus1" helpLabel="Hele boliggjelden pluss en årsinntekt">\n        {formatValuta(2_700_000)} (anbefalt)\n    </RadioButton>\n    <RadioButton value="gjeld" helpLabel="Hele boliggjelden">\n        {formatValuta(2_000_000)}\n    </RadioButton>\n    <RadioButton value="annen">Annen sum</RadioButton>\n</RadioButtonGroup>\n';function F(e){const n=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li",strong:"strong",em:"em",h3:"h3",code:"code",pre:"pre"},(0,l.ah)(),e.components),{Ingress:t,ComponentExample:r}=n;return r||D("ComponentExample",!0),t||D("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(t,null,a.createElement(n.p,null,"Vi bruker radioknapper når vi vil at brukeren skal velge ett av flere alternativ. Bruk helst radioknapper for inntil\nfire alternativ. Hvis du trenger å gi brukeren flere muligheter enn det, er det ofte bedre med en nedtrekksliste.")),"\n",a.createElement(r,{title:"RadioButton",component:g,knobs:k,codeExample:b}),"\n",a.createElement(n.p,null,"Over radioknappene setter vi normalt inn en tydelig overskrift, som forteller hva det er brukeren skal velge mellom. Radioknappene skal alltid beskrives med en slik overskrift, men den kan i noen tilfeller skjules visuelt. I tillegg skal hver radioknapp alltid ha en kort og tydelig ledetekst til høyre for knappen, som beskriver alternativet."),"\n",a.createElement(n.p,null,"Du finner et ",a.createElement(n.a,{href:"/preview/feat--rename-contextual-menu-2/demoer/skjemavalidering/"},"eksempel på radioknapper brukt i skjemakontekst her")," under Demoer. ",a.createElement(n.a,{href:"https://github.com/fremtind/jokul/blob/main/portal/src/pages/demoer/skjemavalidering.tsx"},"Koden til eksempelet")," finner du på GitHub."),"\n",a.createElement(n.h2,null,"Bruk"),"\n",a.createElement(n.p,null,"En gruppe radioknapper kan enten settes opp under eller ved siden av hverandre. Det er mest brukervennlig å sette dem opp vertikalt."),"\n",a.createElement(n.p,null,"I mange tilfeller er det viktig at brukeren selv velger, uten å bli påvirket av et forhåndsvalg. Da kan vi sette opp radioknapper uten forhåndsvalg."),"\n",a.createElement(r,{title:"Uten forhåndsvalg",component:f,knobs:{boolProps:["Inline"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},codeExample:h}),"\n",a.createElement(n.p,null,"Der hvor det er mindre viktig at brukeren velger selv bør en av radioknappene alltid være valgt på forhånd. Det kan være det alternativet som de fleste vil velge, eller det som har minst følger for brukeren."),"\n",a.createElement(r,{title:"Forhåndsvalgt og visuelt skjult label",component:E,knobs:{boolProps:["Inline"]},codeExample:j}),"\n",a.createElement(n.h2,null,"Tekst og validering"),"\n",a.createElement(n.p,null,"Bruk prinsippene for skjemadesign når du velger størrelse på overskriften til en gruppe radioknapper. Skriv en kort og tydelig overskrift, som forteller hva brukeren skal velge. Hvis det er behov for det, kan vi legge inn en hjelpetekst under gruppen, for å forklare mer."),"\n",a.createElement(n.p,null,"Hvis radioknappene ikke validerer, viser systemet en feilmelding som forklarer hva som er galt. Feilmeldingen erstatter en eventuell hjelpetekst, så den må eventuelt gjenta det viktigste fra hjelpeteksten."),"\n",a.createElement(n.p,null,"Eksempel fra helsevurdering:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Hjelpetekst"),": ",a.createElement(n.em,null,"Velg om du har hatt diagnosen de siste 5, 10 eller 15 årene"),"."),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Feilmelding"),": ",a.createElement(n.em,null,"Du har ikke valgt hvor lenge du har hatt diagnosen"),"."),"\n"),"\n",a.createElement(n.h3,null,"Hjelpetekst for en individuell radioknapp"),"\n",a.createElement(n.p,null,"Valgene i en gruppe med radioknapper bør helst være selvforklarende og korte, men det er ikke alltid mulig. I de tilfellene er det mulig å sette en hjelpetekst på de individuelle radioknappene."),"\n",a.createElement(r,{title:"Hjelpetekst på en individuell radioknapp",component:C,codeExample:N}),"\n",a.createElement(n.h2,null,"Flere kodeeksempler"),"\n",a.createElement(n.p,null,"Om du bruker ",a.createElement(n.code,null,"react-hook-form")," vil bruken kunne se slik ut:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-tsx"},'<RadioButtonGroup legend="Hvilken dekning ønsker du?">\n    <RadioButton {...register("coverage", { required: true })} label="Delkasko" value="del" />\n    <RadioButton {...register("coverage", { required: true })} label="Fullkasko" value="full" />\n</RadioButtonGroup>\n')),"\n",a.createElement(n.p,null,"En mer manuell variant kan se slik ut:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-tsx"},'const choices = ["Jeg vil at dere skal ringe meg", "Jeg vil at dere skal sende en e-post"];\nconst [selectedValue, setSelectedValue] = useState("");\n\nreturn (\n    <RadioButtonGroup\n        legend="Hvordan vil du bli kontaktet?"\n        name="kontaktmetode"\n        value={selectedValue}\n        onChange={(e) => setSelectedValue(e.target.value)}\n    >\n        {choices.map((value) => (\n            <RadioButton key={value} label={value} value={value} />\n        ))}\n    </RadioButtonGroup>\n);\n')),"\n",a.createElement(n.p,null,a.createElement(n.code,null,"RadioButtonGroup")," tar imot hjelpe- og feilmeldinger gjennom ",a.createElement(n.code,null,"helpLabel")," og ",a.createElement(n.code,null,"errorLabel"),". Dersom ",a.createElement(n.code,null,"errorLabel")," finnes vises ",a.createElement(n.em,null,"kun")," denne, og skjemafeltene markeres som ugyldige."),"\n",a.createElement(n.h3,null,"Frittstående radioknapper"),"\n",a.createElement(n.p,null,"Om du er i en situasjon hvor du må ha radioknapper på ulike steder i DOMen kan du bruke ",a.createElement(n.code,null,"BaseRadioButton"),". Om du skal bruke denne er det opp til deg å gjøre jobben som vanligvis gjøres av ",a.createElement(n.code,null,"RadioButtonGroup")," og dens ",a.createElement(n.code,null,"context"),". Sørg for å teste skjemaet ditt grundig med skjermleser."))}var _=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(F,e)):F(e)};function D(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var G=t(72285),P=t(22756),S=t(95573),H=t(1634);const L=e=>{let{pageContext:n}=e;return a.createElement(P.p,{title:n.title})},M=e=>{let{location:n,data:t,pageContext:l,children:r}=e;const{frontmatter:o}=t.page,{types:i}=l;return a.createElement(H.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(S.M1,Object.assign({},o,{versions:l.versions})),a.createElement(S.w5,o),r,i&&a.createElement(G.l,{types:i}))};function O(e){return a.createElement(M,e,a.createElement(_,e))}},5871:function(e,n,t){t.d(n,{u:function(){return r}});var l=t(10286);const a={locale:"no-NB"};function r(e,n){const t=(0,l.p)(e);if(!t)return e.toString();const{locale:r,...o}={...a,...n};return new Intl.NumberFormat(r,o).format(t)}},10286:function(e,n,t){t.d(n,{p:function(){return a}});t(31369);const l=(e,n)=>{const t=Array.isArray(e)?e:e.split(""),l=t.lastIndexOf(n);return t.filter(((e,t)=>e!==n||t===l)).join("")};function a(e){if("number"==typeof e)return e;const n=e.replaceAll(/\s/g,"").split(""),t=n.reduce(((e,n)=>","===n||"."===n?n:e),null);return Number("."===t?l(n,".").replace(",",""):","===t?l(n,",").replace(".","").replace(",","."):n.join(""))}}}]);