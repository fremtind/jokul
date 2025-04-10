"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[6062],{63121:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return f},Head:function(){return b},default:function(){return h}});var l=t(64717),r=t(92379),a=t(49995),i=t(49143),o=t(57068),s=t(74571);function d(e){const n=Object.assign({p:"p",a:"a",em:"em",h2:"h2"},(0,l.ah)(),e.components),{Ingress:t,ComponentExample:d,Grid:c,DoDontExample:k}=n;return d||m("ComponentExample",!0),k||m("DoDontExample",!0),c||m("Grid",!0),t||m("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(t,null,r.createElement(n.p,null,"Vi bruker avmerkingsbokser når vi vil gi brukerne en liste med valg, der de\nkan velge ett eller flere alternativer. Vi bruker også enkeltstående\navmerkingsbokser der brukere må bekrefte noe.")),"\n",r.createElement(d,{title:"Checkbox",component:o.oz,knobs:o.Ts,codeExample:o.ju}),"\n",r.createElement(n.p,null,"Vi bruker flere avmerkingsbokser sammen i en ",r.createElement(n.a,{href:"/preview/4673-checklistitem-wrap-alignment/komponenter/inputgroup"},"FieldGroup")," når vi vil gi brukerne en liste med valg, der de kan velge etter eller flere alternativer. Vi anbefaler at du plasserer valgene under hverandre. Standard tilstand for avmerkingsbokser er ",r.createElement(n.em,null,"ikke valgt"),"."),"\n",r.createElement(n.p,null,"En gruppe avmerkingsbokser må ha en god overskrift, og ledeteksten til hver avmerkingsboks må beskrive alternativet."),"\n",r.createElement(n.p,null,"Du finner et ",r.createElement(n.a,{href:"/preview/4673-checklistitem-wrap-alignment/demoer/skjemavalidering/"},"eksempel på en sjekkboks brukt i skjemakontekst")," under Demoer. ",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/blob/main/portal/src/pages/demoer/skjemavalidering.tsx"},"Koden til eksempelet")," finner du på GitHub."),"\n",r.createElement(n.h2,null,"Enkeltstående"),"\n",r.createElement(d,{title:"Enkeltstående checkbox",component:s.aG,knobs:s.Ru,codeExample:s.yg}),"\n",r.createElement(n.p,null,'En avmerkingsboks som står alene trenger ikke noen overskrift, så lenge ledeteksten er god og beskrivende. Når en avmerkingsboks står alene, er det gjerne for å bekrefte noe, for eksempel: "Jeg bekrefter at opplysningene jeg har gitt er riktige".'),"\n",r.createElement(c,null,r.createElement(k,{type:"do",description:"Enkeltstående avmerkingsboks med beskrivende ledetekst",content:r.createElement(i.X,{name:"singledo",value:"confirm"},"Jeg har lest vedlegget")}),r.createElement(k,{type:"dont",description:"Lite beskrivende ledetekst uten overskrift",content:r.createElement(i.X,{name:"singledont",value:"confirm"},"Bekreft")})),"\n",r.createElement(n.h2,null,"Tekst og validering"),"\n",r.createElement(n.p,null,"Velg størrelse på overskriften til en gruppe avmerkingsbokser etter ",r.createElement(n.a,{href:"/preview/4673-checklistitem-wrap-alignment/guider/skjemadesign"},"prinsippene for skjemadesign"),". Ha en kort og tydelig overskrift, som beskriver hva brukeren skal velge. Hvis du trenger å gi mer forklaring, kan du sette en hjelpetekst under gruppen."),"\n",r.createElement(n.p,null,"Hvis avmerkingsboksene ikke validerer, vises det en feilmelding som forklarer hva som er galt. Denne feilmeldingen erstatter en eventuell hjelpetekst du har der fra før, og bør formuleres slik at brukeren både får viktig informasjon fra hjelpeteksten, og får vite hva som er feil."),"\n",r.createElement(c,null,r.createElement(k,{type:"do",description:"Informasjon i hjelpetekst",content:r.createElement(a.N,{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:"small"},errorLabel:"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder"},r.createElement(i.X,{name:"infodo",value:"phone",invalid:!0},"Telefon"),r.createElement(i.X,{name:"infodo",value:"email",invalid:!0},"E-post"),r.createElement(i.X,{name:"infodo",value:"snailmail",invalid:!0},"Brev"))}),r.createElement(k,{type:"dont",description:"Lite hjelp å få fra feilmeldingen",content:r.createElement(a.N,{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:"small"},errorLabel:"Du må velge"},r.createElement(i.X,{name:"infodont",value:"phone",invalid:!0},"Telefon"),r.createElement(i.X,{name:"infodont",value:"email",invalid:!0},"E-post"),r.createElement(i.X,{name:"infodont",value:"snailmail",invalid:!0},"Brev"))})))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(d,e)):d(e)};function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var k=t(75482),u=t(96036),v=t(59001),p=t(65458),g=t(79379);const b=e=>{let{pageContext:n}=e;return r.createElement(u.p,{title:n.title})},f=e=>{let{location:n,data:t,pageContext:l,children:a}=e;const{frontmatter:i}=t.page,{types:o}=l;return r.createElement(g.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(p.M1,Object.assign({},i,{versions:l.versions})),n.pathname.includes("komponenter")&&r.createElement(v.c,{variant:"komponent",component:i.title}),r.createElement(p.w5,i),a,o&&r.createElement(k.l,{types:o}))};function h(e){return r.createElement(f,e,r.createElement(c,e))}},57068:function(e,n,t){t.d(n,{Ts:function(){return o},ju:function(){return d},oz:function(){return s}});var l=t(49995),r=t(92379),a=t(41046),i=t(49143);const o={boolProps:["Med hjelpetekst","Med feil","Med tooltip","Indeterminate state"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},s=e=>{let{boolValues:n,choiceValues:t}=e;const[o,s]=r.useState(!1),[d,c]=r.useState(!1),[m,k]=r.useState(!1),u=null!=t&&t.Variant?t.Variant:"medium",v=null==n?void 0:n["Med hjelpetekst"],p=null==n?void 0:n["Med feil"],g=null==n?void 0:n["Indeterminate state"],b=null!=n&&n["Med tooltip"]?r.createElement(a.d,{content:"Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed."}):void 0;return r.createElement(l.N,{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:u},helpLabel:v?"Vi sender viktige beskjeder til deg med de valgte metodene":void 0,errorLabel:p?"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder":void 0,tooltip:b},r.createElement(i.X,{name:"checklist",value:"phone",checked:o,invalid:p,onChange:()=>s(!o),indeterminate:g},"Telefon"),r.createElement(i.X,{name:"checklist",value:"email",checked:d,invalid:p,onChange:()=>c(!d),indeterminate:g},"E-post"),r.createElement(i.X,{name:"checklist",value:"snailmail",checked:m,invalid:p,onChange:()=>k(!m),indeterminate:g},"Brev"))},d=e=>{let{boolValues:n,choiceValues:t}=e;const l=null==n?void 0:n["Med hjelpetekst"],r=null==n?void 0:n["Med feil"];return'\n<FieldGroup\n    legend="Hvordan kan vi kontakte deg?"\n    labelProps={{ variant: "'+((null==t?void 0:t.Variant)||"medium")+'" }}\n    helpLabel='+(l?'"Vi sender viktige beskjeder til deg med de valgte metodene"':"{undefined}")+"\n    errorLabel="+(r?'"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder"':"{undefined}")+(null!=n&&n["Med tooltip"]?'\n    tooltip={\n        <PopupTip content="Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed." />\n    }':"")+'\n>\n    <Checkbox\n        name="checklist"\n        value="phone"\n        invalid={'+r+'}\n    >\n        Telefon\n    </Checkbox>\n    <Checkbox\n        name="checklist"\n        value="email"\n        invalid={'+r+'}\n    >\n        E-post\n    </Checkbox>\n    <Checkbox\n        name="checklist"\n        value="snailmail"\n        invalid={'+r+"}\n    >\n        Brev\n    </Checkbox>\n</FieldGroup>\n"}},74571:function(e,n,t){t.d(n,{Ru:function(){return o},aG:function(){return s},yg:function(){return d}});var l=t(69314),r=t(38475),a=t(92379),i=t(49143);const o={boolProps:["Med hjelpetekst","Med feil"]},s=e=>{let{boolValues:n}=e;const t=(0,r.M)(),[o,s]=a.useState(!1),d=null==n?void 0:n["Med hjelpetekst"],c=null==n?void 0:n["Med feil"];let m;return d&&(m="Vedlegget har viktig informasjon om forsikringen din"),c&&(m="Du må bekrefte at du har lest vedlegget. Det har viktig informasjon om forsikringen din."),a.createElement("div",null,a.createElement(i.X,{"aria-describedby":t,name:"confirmation",value:"read",checked:o,invalid:c,onChange:()=>s(!o)},"Jeg har lest vedlegget"),a.createElement(l.A,{id:t,label:m,labelType:c?"error":"help"}))},d=e=>{let{boolValues:n,choiceValues:t}=e;return'\n<div>\n  <Checkbox\n    aria-describedby="label-id"\n    name="confirmation"\n    value="read"\n    invalid={error}\n  >\n    Telefon\n  </Checkbox>\n  <SupportLabel\n    id="label-id"\n    label={label}\n    labelType={error ? "error" : "help"}\n  />\n</div>\n'}},49143:function(e,n,t){t.d(n,{X:function(){return d}});var l=t(99767),r=t(38475),a=t(80324),i=t.n(a),o=t(92379);const s=["id","children","invalid","className","inline","density","data-testautoid","checked","indeterminate"],d=(0,o.forwardRef)(((e,n)=>{const{id:t,children:a,invalid:d,className:c,inline:m=!1,density:k,"data-testautoid":u,checked:v,indeterminate:p}=e,g=(0,l.Z)(e,s),b=(0,o.useRef)(null);(0,o.useImperativeHandle)(n,(()=>b.current),[]);const f=(0,r.M)(t||"jkl-checkbox",{generateSuffix:!t});return(0,o.useEffect)((()=>{b.current&&(b.current.indeterminate=!v&&!!p)}),[v,p]),o.createElement("div",{className:i()("jkl-checkbox",c,{"jkl-checkbox--inline":m,"jkl-checkbox--error":d}),"data-density":k},o.createElement("input",Object.assign({id:f,ref:b,className:"jkl-checkbox__input","data-testid":"jkl-checkbox-input","aria-invalid":d,type:"checkbox","data-testautoid":u,checked:v},g)),o.createElement("label",{htmlFor:f,className:"jkl-checkbox__label"},o.createElement("span",{className:"jkl-checkbox__mark"},o.createElement("span",{className:"jkl-checkbox__indeterminate-mark"}),o.createElement("span",{className:"jkl-checkbox__check-mark"})),o.createElement("span",{className:"jkl-checkbox__text"},a)))}));d.displayName="Checkbox"},41046:function(e,n,t){t.d(n,{d:function(){return k}});var l=t(99767),r=t(58990),a=t(80324),i=t.n(a),o=t(92379),s=t(16965),d=t(6854),c=t(27547);const m=["content","triggerProps"],k=e=>{let{content:n,triggerProps:t}=e,a=(0,l.Z)(e,m);const{0:k,1:u}=(0,o.useState)(!1);return o.createElement(s.u,Object.assign({onOpenChange:u,triggerOn:"click"},a),o.createElement(c.a,null,o.createElement("button",Object.assign({},t,{type:"button",className:i()("jkl-tooltip-question-button",null==t?void 0:t.className),"data-testid":"jkl-tooltip-question-button"}),o.createElement(r.U,{variant:"inherit",bold:k}),o.createElement("span",{className:"jkl-sr-only"},"Vis hjelpetekst"),o.createElement("span",{className:"jkl-sr-only","aria-live":"polite","data-testid":"popuptip-content"},k?n:""))),o.createElement(d._,{"data-ispopup":!0},n))}}}]);