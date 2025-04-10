"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[274],{83:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return Q},Head:function(){return z},default:function(){return W}});var l=t(64717),a=t(92379),r=t(41046),o=t(99767),i=t(49995);const u=(0,a.createContext)({name:void 0,value:void 0,onChange:()=>{},inline:!1,density:void 0,invalid:!1}),s=e=>{let{state:n,children:t}=e;return a.createElement(u.Provider,{value:n},t)},d=["name","value","onChange","errorLabel","inline","density","labelProps"],c=e=>{const{name:n,value:t,onChange:l,errorLabel:r,inline:u=!1,density:c,labelProps:m={variant:"medium"}}=e,p=(0,o.Z)(e,d);return a.createElement(s,{state:{onChange:l,value:t,name:n,invalid:Boolean(r),inline:u,density:c}},a.createElement(i.N,Object.assign({errorLabel:r,labelProps:m,"data-testid":"jkl-radio-button-group",density:c},p,{role:"radiogroup","aria-invalid":Boolean(r)})))};var m=t(69314),p=t(38475),v=t(80324),k=t.n(v);const g=["id","className","checked","children","label","density","inline","invalid","name","value","onChange"],b=(0,a.forwardRef)(((e,n)=>{const{id:t,className:l,checked:r,children:i,label:u,density:s,inline:d,invalid:c,name:m,value:v,onChange:b}=e,f=(0,o.Z)(e,g),h=(0,p.M)(t||"jkl-radio-button",{generateSuffix:!t});return a.createElement("div",{className:k()("jkl-radio-button",l,{"jkl-radio-button--inline":d,"jkl-radio-button--error":c}),"data-density":s},a.createElement("input",Object.assign({name:m,ref:n},f,{id:h,className:"jkl-radio-button__input",type:"radio",onChange:b,value:v,checked:r})),a.createElement("label",{"data-testid":"jkl-radio-button__label-tag",htmlFor:h,className:"jkl-radio-button__label"},a.createElement("span",{"aria-hidden":!0,className:"jkl-radio-button__dot"}),a.createElement("span",{className:"jkl-radio-button__text"},u||i)))}));b.displayName="BaseRadioButton";const f=["checked","value","supportLabelProps","helpLabel"],h=["value","density"],E=(0,a.forwardRef)(((e,n)=>{const{checked:t,value:l,supportLabelProps:r,helpLabel:i}=e,s=(0,o.Z)(e,f),d=(0,a.useContext)(u),{value:c,density:v}=d,k=(0,o.Z)(d,h),g=(0,p.M)("jkl-support-label");return a.createElement(a.Fragment,null,a.createElement(b,Object.assign({},k,s,{ref:n,checked:void 0!==t?t:void 0!==c?l===c:void 0,value:l,"aria-describedby":i?g:void 0})),a.createElement(m.A,Object.assign({},r,{label:i,labelType:"help",id:g,density:v})))}));E.displayName="RadioButton";const j={boolProps:["Med hjelpetekst","Med feil","Med tooltip"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},y=e=>{let{boolValues:n,choiceValues:t}=e;const[l,o]=a.useState("Yes"),i=null!=n&&n["Med hjelpetekst"]?"Ved å velge e-post får du beskjed raskest mulig":void 0,u=null!=n&&n["Med feil"]?"Du må velge hvordan du vil bli kontaktet. Ved å velge e-post får du beskjed raskest mulig.":void 0,s=null!=t&&t.Variant?t.Variant:"medium",d=null!=n&&n["Med tooltip"]?a.createElement(r.d,{content:"Dette burde kanskje vært en FieldGroup med Checkbox, og ikke en RadioButtonGroup? 🤔"}):void 0;return a.createElement(c,{legend:"Hvordan vil du bli kontaktet?",name:"kontaktmetode",labelProps:{variant:s},helpLabel:i,errorLabel:u,tooltip:d,value:l,onChange:e=>o(e.target.value)},["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"].map((e=>a.createElement(E,{key:e,value:e},e))))},B=e=>{let{boolValues:n,choiceValues:t}=e;return'\n<RadioButtonGroup\n    legend="Hvordan vil du bli kontaktet?"\n    name="kontaktmetode"\n    labelProps={{ variant: "'+((null==t?void 0:t.Variant)||"medium")+'" }}'+(null!=n&&n["Med hjelpetekst"]?'\n            helpLabel="Ved å velge e-post får du beskjed raskest mulig"':"")+(null!=n&&n["Med feil"]?'\n    errorLabel="Du må velge hvordan du vil bli kontaktet. Ved å velge e-post får du beskjed raskest mulig."':"")+(null!=n&&n["Med tooltip"]?'\n    tooltip={\n        <PopupTip\n            content="Dette burde kanskje vært en FieldGroup med Checkbox, og ikke en RadioButtonGroup? 🤔"\n        />\n    }':"")+"\n    value={selectedValue}\n    onChange={(e) => setSelectedValue(e.target.value)}\n>\n    {choices.map((value) => (\n        <RadioButton key={value} value={value}>\n            {value}\n        </RadioButton>\n    ))}\n</RadioButtonGroup>\n"},V=e=>{let{boolValues:n,choiceValues:t}=e;const[l,r]=a.useState(""),o=t&&t.Variant?t.Variant:"medium";return a.createElement(c,{legend:"Fikk du gjort det du skulle?",name:"fant-du-fram",inline:n&&n.Inline,labelProps:{variant:o},value:l,onChange:e=>r(e.target.value)},a.createElement(E,{value:"y"},"Ja"),a.createElement(E,{value:"n"},"Nei"))},R=e=>{let{boolValues:n,choiceValues:t}=e;return'\n<RadioButtonGroup\n    legend="Fikk du gjort det du skulle?"\n    name="fant-du-fram"\n    inline={'+!(null==n||!n.Inline)+'}\n    labelProps={{ variant: "'+((null==t?void 0:t.Variant)||"medium")+'" }}\n    value={selectedValue}\n    onChange={(e) => setSelectedValue(e.target.value)}\n>\n    <RadioButton value="y">Ja</RadioButton>\n    <RadioButton value="n">Nei</RadioButton>\n</RadioButtonGroup>\n'},O=e=>{let{boolValues:n}=e;const[t,l]=a.useState("Månedspris");return a.createElement(c,{legend:"Velg prisvisning",name:"prisvisning",inline:n&&n.Inline,labelProps:{srOnly:!0},value:t,onChange:e=>l(e.target.value)},["Månedspris","Årspris"].map((e=>a.createElement(E,{key:e,value:e},e))))},x=e=>{let{boolValues:n}=e;return'\n<RadioButtonGroup\n    legend="Velg prisvisning"\n    name="prisvisning"\n    inline={'+!(null==n||!n.Inline)+"}\n    labelProps={{ srOnly: true }}\n    value={selectedValue}\n    onChange={(e) => setSelectedValue(e.target.value)}\n>\n    {choices.map((value) => (\n        <RadioButton key={value} value={value}>{value}</RadioButton>\n    ))}\n</RadioButtonGroup>\n"};var C=t(74756),P=t(41526),N=t(14779),S=Object.defineProperty,_=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,G=(e,n,t)=>n in e?S(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,L=(e,n)=>{for(var t in n||(n={}))D.call(n,t)&&G(e,t,n[t]);if(_)for(var t of _(n))F.call(n,t)&&G(e,t,n[t]);return e};const w={locale:"no-NB",minimumFractionDigits:0,maximumFractionDigits:2,suffix:"kr"};function H(e,n){const t=(0,N.p)(e);if(isNaN(t))return e.toString();const l=Number.isInteger(t)?{}:{minimumFractionDigits:2,maximumFractionDigits:2},a=void 0!==(null==n?void 0:n.suffix)?n.suffix:w.suffix,r=L(L(L({},w),l),n),{prefix:o}=r,i=((e,n)=>{var t={};for(var l in e)D.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&_)for(var l of _(e))n.indexOf(l)<0&&F.call(e,l)&&(t[l]=e[l]);return t})(r,["prefix"]),u=(null==o?void 0:o.length)?"".concat(o).concat(C.vk):"",s=(null==a?void 0:a.length)?"".concat(C.vk).concat(a):"",d=(0,P.u)(t,i);return"".concat(u).concat(d).concat(s)}const I=e=>{let{boolValues:n}=e;const[t,l]=a.useState("gjeldplus1");return a.createElement(c,{legend:"Forsikringssum",name:"forsikringssum",value:t,onChange:e=>l(e.target.value)},a.createElement(E,{value:"gjeldplus1",helpLabel:"Hele boliggjelden pluss en årsinntekt"},H(27e5)," (anbefalt)"),a.createElement(E,{value:"gjeld",helpLabel:"Hele boliggjelden"},H(2e6)),a.createElement(E,{value:"annen"},"Annen sum"))},M=()=>'\n<RadioButtonGroup\n    legend="Forsikringssum"\n    name="forsikringssum"\n    value={selectedValue}\n    onChange={(e) => setSelectedValue(e.target.value)}\n>\n    <RadioButton value="gjeldplus1" helpLabel="Hele boliggjelden pluss en årsinntekt">\n        {formatValuta(2_700_000)} (anbefalt)\n    </RadioButton>\n    <RadioButton value="gjeld" helpLabel="Hele boliggjelden">\n        {formatValuta(2_000_000)}\n    </RadioButton>\n    <RadioButton value="annen">Annen sum</RadioButton>\n</RadioButtonGroup>\n';function A(e){const n=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li",strong:"strong",em:"em",h3:"h3",code:"code",pre:"pre"},(0,l.ah)(),e.components),{Ingress:t,ComponentExample:r}=n;return r||Z("ComponentExample",!0),t||Z("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(t,null,a.createElement(n.p,null,"Vi bruker radioknapper når vi vil at brukeren skal velge ett av flere\nalternativ. Bruk helst radioknapper for inntil fire alternativ. Hvis du\ntrenger å gi brukeren flere muligheter enn det, er det ofte bedre med en\nnedtrekksliste.")),"\n",a.createElement(r,{title:"RadioButton",component:y,knobs:j,codeExample:B}),"\n",a.createElement(n.p,null,"Over radioknappene setter vi normalt inn en tydelig overskrift, som forteller hva det er brukeren skal velge mellom. Radioknappene skal alltid beskrives med en slik overskrift, men den kan i noen tilfeller skjules visuelt. I tillegg skal hver radioknapp alltid ha en kort og tydelig ledetekst til høyre for knappen, som beskriver alternativet."),"\n",a.createElement(n.p,null,"Du finner et ",a.createElement(n.a,{href:"/preview/4597-code-example-block/demoer/skjemavalidering/"},"eksempel på radioknapper brukt i skjemakontekst her")," under Demoer. ",a.createElement(n.a,{href:"https://github.com/fremtind/jokul/blob/main/portal/src/pages/demoer/skjemavalidering.tsx"},"Koden til eksempelet")," finner du på GitHub."),"\n",a.createElement(n.h2,null,"Bruk"),"\n",a.createElement(n.p,null,"En gruppe radioknapper kan enten settes opp under eller ved siden av hverandre. Det er mest brukervennlig å sette dem opp vertikalt."),"\n",a.createElement(n.p,null,"I mange tilfeller er det viktig at brukeren selv velger, uten å bli påvirket av et forhåndsvalg. Da kan vi sette opp radioknapper uten forhåndsvalg."),"\n",a.createElement(r,{title:"Uten forhåndsvalg",component:V,knobs:{boolProps:["Inline"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},codeExample:R}),"\n",a.createElement(n.p,null,"Der hvor det er mindre viktig at brukeren velger selv bør en av radioknappene alltid være valgt på forhånd. Det kan være det alternativet som de fleste vil velge, eller det som har minst følger for brukeren."),"\n",a.createElement(r,{title:"Forhåndsvalgt og visuelt skjult label",component:O,knobs:{boolProps:["Inline"]},codeExample:x}),"\n",a.createElement(n.h2,null,"Tekst og validering"),"\n",a.createElement(n.p,null,"Bruk prinsippene for skjemadesign når du velger størrelse på overskriften til en gruppe radioknapper. Skriv en kort og tydelig overskrift, som forteller hva brukeren skal velge. Hvis det er behov for det, kan vi legge inn en hjelpetekst under gruppen, for å forklare mer."),"\n",a.createElement(n.p,null,"Hvis radioknappene ikke validerer, viser systemet en feilmelding som forklarer hva som er galt. Feilmeldingen erstatter en eventuell hjelpetekst, så den må eventuelt gjenta det viktigste fra hjelpeteksten."),"\n",a.createElement(n.p,null,"Eksempel fra helsevurdering:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Hjelpetekst"),": ",a.createElement(n.em,null,"Velg om du har hatt diagnosen de siste 5, 10 eller 15 årene"),"."),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Feilmelding"),": ",a.createElement(n.em,null,"Du har ikke valgt hvor lenge du har hatt diagnosen"),"."),"\n"),"\n",a.createElement(n.h3,null,"Hjelpetekst for en individuell radioknapp"),"\n",a.createElement(n.p,null,"Valgene i en gruppe med radioknapper bør helst være selvforklarende og korte, men det er ikke alltid mulig. I de tilfellene er det mulig å sette en hjelpetekst på de individuelle radioknappene."),"\n",a.createElement(r,{title:"Hjelpetekst på en individuell radioknapp",component:I,codeExample:M}),"\n",a.createElement(n.h2,null,"Flere kodeeksempler"),"\n",a.createElement(n.p,null,"Om du bruker ",a.createElement(n.code,null,"react-hook-form")," vil bruken kunne se slik ut:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-tsx"},'<RadioButtonGroup legend="Hvilken dekning ønsker du?">\n    <RadioButton\n        {...register("coverage", { required: true })}\n        label="Delkasko"\n        value="del"\n    />\n    <RadioButton\n        {...register("coverage", { required: true })}\n        label="Fullkasko"\n        value="full"\n    />\n</RadioButtonGroup>\n')),"\n",a.createElement(n.p,null,"En mer manuell variant kan se slik ut:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-tsx"},'const choices = [\n    "Jeg vil at dere skal ringe meg",\n    "Jeg vil at dere skal sende en e-post",\n];\nconst [selectedValue, setSelectedValue] = useState("");\n\nreturn (\n    <RadioButtonGroup\n        legend="Hvordan vil du bli kontaktet?"\n        name="kontaktmetode"\n        value={selectedValue}\n        onChange={(e) => setSelectedValue(e.target.value)}\n    >\n        {choices.map((value) => (\n            <RadioButton key={value} label={value} value={value} />\n        ))}\n    </RadioButtonGroup>\n);\n')),"\n",a.createElement(n.p,null,a.createElement(n.code,null,"RadioButtonGroup")," tar imot hjelpe- og feilmeldinger gjennom ",a.createElement(n.code,null,"helpLabel")," og ",a.createElement(n.code,null,"errorLabel"),". Dersom ",a.createElement(n.code,null,"errorLabel")," finnes vises ",a.createElement(n.em,null,"kun")," denne, og skjemafeltene markeres som ugyldige."),"\n",a.createElement(n.h3,null,"Frittstående radioknapper"),"\n",a.createElement(n.p,null,"Om du er i en situasjon hvor du må ha radioknapper på ulike steder i DOMen kan du bruke ",a.createElement(n.code,null,"BaseRadioButton"),". Om du skal bruke denne er det opp til deg å gjøre jobben som vanligvis gjøres av ",a.createElement(n.code,null,"RadioButtonGroup")," og dens ",a.createElement(n.code,null,"context"),". Sørg for å teste skjemaet ditt grundig med skjermleser."))}var q=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(A,e)):A(e)};function Z(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var J=t(75482),T=t(96036),U=t(59001),K=t(65458),Y=t(79379);const z=e=>{let{pageContext:n}=e;return a.createElement(T.p,{title:n.title})},Q=e=>{let{location:n,data:t,pageContext:l,children:r}=e;const{frontmatter:o}=t.page,{types:i}=l;return a.createElement(Y.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(K.M1,Object.assign({},o,{versions:l.versions})),n.pathname.includes("komponenter")&&a.createElement(U.c,{variant:"komponent",component:o.title}),a.createElement(K.w5,o),r,i&&a.createElement(J.l,{types:i}))};function W(e){return a.createElement(Q,e,a.createElement(q,e))}},41046:function(e,n,t){t.d(n,{d:function(){return m}});var l=t(99767),a=t(58990),r=t(80324),o=t.n(r),i=t(92379),u=t(16965),s=t(6854),d=t(27547);const c=["content","triggerProps"],m=e=>{let{content:n,triggerProps:t}=e,r=(0,l.Z)(e,c);const{0:m,1:p}=(0,i.useState)(!1);return i.createElement(u.u,Object.assign({onOpenChange:p,triggerOn:"click"},r),i.createElement(d.a,null,i.createElement("button",Object.assign({},t,{type:"button",className:o()("jkl-tooltip-question-button",null==t?void 0:t.className),"data-testid":"jkl-tooltip-question-button"}),i.createElement(a.U,{variant:"inherit",bold:m}),i.createElement("span",{className:"jkl-sr-only"},"Vis hjelpetekst"),i.createElement("span",{className:"jkl-sr-only","aria-live":"polite","data-testid":"popuptip-content"},m?n:""))),i.createElement(s._,{"data-ispopup":!0},n))}},74756:function(e,n,t){t.d(n,{qD:function(){return l},vk:function(){return a}});const l=" ",a=l},41526:function(e,n,t){t.d(n,{u:function(){return m}});var l=t(14779),a=Object.defineProperty,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))o.call(n,t)&&u(e,t,n[t]);if(r)for(var t of r(n))i.call(n,t)&&u(e,t,n[t]);return e},d=(e,n)=>{var t={};for(var l in e)o.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&r)for(var l of r(e))n.indexOf(l)<0&&i.call(e,l)&&(t[l]=e[l]);return t};const c={locale:"no-NB"};function m(e,n){const t=(0,l.p)(e);if(!t)return e.toString();const a=s(s({},c),n),{locale:r}=a,o=d(a,["locale"]);return new Intl.NumberFormat(r,o).format(t)}},14779:function(e,n,t){t.d(n,{p:function(){return a}});t(31369);const l=(e,n)=>{const t=Array.isArray(e)?e:e.split(""),l=t.lastIndexOf(n);return t.filter(((e,t)=>e!==n||t===l)).join("")};function a(e){if("number"==typeof e)return e;const n=e.replaceAll(/\s/g,"").split(""),t=n.reduce(((e,n)=>","===n||"."===n?n:e),null);return Number("."===t?l(n,".").replace(",",""):","===t?l(n,",").replace(".","").replace(",","."):n.join(""))}}}]);