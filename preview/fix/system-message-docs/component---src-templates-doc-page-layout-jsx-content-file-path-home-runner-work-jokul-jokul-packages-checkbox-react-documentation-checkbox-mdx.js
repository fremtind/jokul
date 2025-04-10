"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[6062],{21031:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return g},Head:function(){return f},default:function(){return b}});var a=t(47160),r=t(70079),l=t(68142),i=t(16514),o=t(72896),s=t(20146);function c(e){const n=Object.assign({p:"p",a:"a",em:"em",h2:"h2"},(0,a.ah)(),e.components),{Ingress:t,ComponentExample:c,Grid:d,DoDontExample:u}=n;return c||m("ComponentExample",!0),u||m("DoDontExample",!0),d||m("Grid",!0),t||m("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(t,null,r.createElement(n.p,null,"Vi bruker avmerkingsbokser når vi vil gi brukerne en liste med valg, der de kan velge ett eller flere alternativer.\nVi bruker også enkeltstående avmerkingsbokser der brukere må bekrefte noe.")),"\n",r.createElement(c,{title:"Checkbox",component:o.oz,knobs:o.Ts,codeExample:o.ju}),"\n",r.createElement(n.p,null,"Vi bruker flere avmerkingsbokser sammen i en ",r.createElement(n.a,{href:"/preview/fix/system-message-docs/komponenter/inputgroup"},"FieldGroup")," når vi vil gi brukerne en liste med valg, der de kan velge etter eller flere alternativer. Vi anbefaler at du plasserer valgene under hverandre. Standard tilstand for avmerkingsbokser er ",r.createElement(n.em,null,"ikke valgt"),"."),"\n",r.createElement(n.p,null,"En gruppe avmerkingsbokser må ha en god overskrift, og ledeteksten til hver avmerkingsboks må beskrive alternativet."),"\n",r.createElement(n.p,null,"Du finner et ",r.createElement(n.a,{href:"/preview/fix/system-message-docs/demoer/skjemavalidering/"},"eksempel på en sjekkboks brukt i skjemakontekst")," under Demoer. ",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/blob/main/portal/src/pages/demoer/skjemavalidering.tsx"},"Koden til eksempelet")," finner du på GitHub."),"\n",r.createElement(n.h2,null,"Enkeltstående"),"\n",r.createElement(c,{title:"Enkeltstående checkbox",component:s.aG,knobs:s.Ru,codeExample:s.yg}),"\n",r.createElement(n.p,null,'En avmerkingsboks som står alene trenger ikke noen overskrift, så lenge ledeteksten er god og beskrivende. Når en avmerkingsboks står alene, er det gjerne for å bekrefte noe, for eksempel: "Jeg bekrefter at opplysningene jeg har gitt er riktige".'),"\n",r.createElement(d,null,r.createElement(u,{type:"do",description:"Enkeltstående avmerkingsboks med beskrivende ledetekst",content:r.createElement(i.X,{name:"singledo",value:"confirm"},"Jeg har lest vedlegget")}),r.createElement(u,{type:"dont",description:"Lite beskrivende ledetekst uten overskrift",content:r.createElement(i.X,{name:"singledont",value:"confirm"},"Bekreft")})),"\n",r.createElement(n.h2,null,"Tekst og validering"),"\n",r.createElement(n.p,null,"Velg størrelse på overskriften til en gruppe avmerkingsbokser etter ",r.createElement(n.a,{href:"/preview/fix/system-message-docs/guider/skjemadesign"},"prinsippene for skjemadesign"),". Ha en kort og tydelig overskrift, som beskriver hva brukeren skal velge. Hvis du trenger å gi mer forklaring, kan du sette en hjelpetekst under gruppen."),"\n",r.createElement(n.p,null,"Hvis avmerkingsboksene ikke validerer, vises det en feilmelding som forklarer hva som er galt. Denne feilmeldingen erstatter en eventuell hjelpetekst du har der fra før, og bør formuleres slik at brukeren både får viktig informasjon fra hjelpeteksten, og får vite hva som er feil."),"\n",r.createElement(d,null,r.createElement(u,{type:"do",description:"Informasjon i hjelpetekst",content:r.createElement(l.N,{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:"small"},errorLabel:"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder"},r.createElement(i.X,{name:"infodo",value:"phone",invalid:!0},"Telefon"),r.createElement(i.X,{name:"infodo",value:"email",invalid:!0},"E-post"),r.createElement(i.X,{name:"infodo",value:"snailmail",invalid:!0},"Brev"))}),r.createElement(u,{type:"dont",description:"Lite hjelp å få fra feilmeldingen",content:r.createElement(l.N,{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:"small"},errorLabel:"Du må velge"},r.createElement(i.X,{name:"infodont",value:"phone",invalid:!0},"Telefon"),r.createElement(i.X,{name:"infodont",value:"email",invalid:!0},"E-post"),r.createElement(i.X,{name:"infodont",value:"snailmail",invalid:!0},"Brev"))})))}var d=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?r.createElement(n,e,r.createElement(c,e)):c(e)};function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=t(72285),k=t(22756),p=t(95573),v=t(1634);const f=e=>{let{pageContext:n}=e;return r.createElement(k.p,{title:n.title})},g=e=>{let{location:n,data:t,pageContext:a,children:l}=e;const{frontmatter:i}=t.page,{types:o}=a;return r.createElement(v.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(p.M1,Object.assign({},i,{versions:a.versions})),r.createElement(p.w5,i),l,o&&r.createElement(u.l,{types:o}))};function b(e){return r.createElement(g,e,r.createElement(d,e))}},72896:function(e,n,t){t.d(n,{Ts:function(){return i},ju:function(){return s},oz:function(){return o}});var a=t(68142),r=t(70079),l=t(16514);const i={boolProps:["Med hjelpetekst","Med feil","Med tooltip","Indeterminate state"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},o=e=>{let{boolValues:n,choiceValues:t}=e;const[i,o]=r.useState(!1),[s,c]=r.useState(!1),[d,m]=r.useState(!1),u=null!=t&&t.Variant?t.Variant:"medium",k=null==n?void 0:n["Med hjelpetekst"],p=null==n?void 0:n["Med feil"],v=null==n?void 0:n["Indeterminate state"],f=null!=n&&n["Med tooltip"]?{content:"Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed."}:void 0;return r.createElement(a.N,{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:u},helpLabel:k?"Vi sender viktige beskjeder til deg med de valgte metodene":void 0,errorLabel:p?"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder":void 0,tooltipProps:f},r.createElement(l.X,{name:"checklist",value:"phone",checked:i,invalid:p,onChange:()=>o(!i),indeterminate:v},"Telefon"),r.createElement(l.X,{name:"checklist",value:"email",checked:s,invalid:p,onChange:()=>c(!s),indeterminate:v},"E-post"),r.createElement(l.X,{name:"checklist",value:"snailmail",checked:d,invalid:p,onChange:()=>m(!d),indeterminate:v},"Brev"))},s=e=>{let{boolValues:n,choiceValues:t}=e;const a=null==n?void 0:n["Med hjelpetekst"],r=null==n?void 0:n["Med feil"];return'\n<FieldGroup\n    legend="Hvordan kan vi kontakte deg?"\n    labelProps={{ variant: "'+((null==t?void 0:t.Variant)||"medium")+'" }}\n    helpLabel='+(a?'"Vi sender viktige beskjeder til deg med de valgte metodene"':"{undefined}")+"\n    errorLabel="+(r?'"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder"':"{undefined}")+(null!=n&&n["Med tooltip"]?'\n    tooltipProps={{ content: "Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed." }}':"")+'\n>\n    <Checkbox\n        name="checklist"\n        value="phone"\n        invalid={'+r+'}\n    >\n        Telefon\n    </Checkbox>\n    <Checkbox\n        name="checklist"\n        value="email"\n        invalid={'+r+'}\n    >\n        E-post\n    </Checkbox>\n    <Checkbox\n        name="checklist"\n        value="snailmail"\n        invalid={'+r+"}\n    >\n        Brev\n    </Checkbox>\n</FieldGroup>\n"}},20146:function(e,n,t){t.d(n,{Ru:function(){return o},aG:function(){return s},yg:function(){return c}});var a=t(65975),r=t(3438),l=t(70079),i=t(16514);const o={boolProps:["Med hjelpetekst","Med feil"]},s=e=>{let{boolValues:n}=e;const t=(0,r.M)(),[o,s]=l.useState(!1),c=null==n?void 0:n["Med hjelpetekst"],d=null==n?void 0:n["Med feil"];let m;return c&&(m="Vedlegget har viktig informasjon om forsikringen din"),d&&(m="Du må bekrefte at du har lest vedlegget. Det har viktig informasjon om forsikringen din."),l.createElement("div",null,l.createElement(i.X,{"aria-describedby":t,name:"confirmation",value:"read",checked:o,invalid:d,onChange:()=>s(!o)},"Jeg har lest vedlegget"),l.createElement(a.A,{id:t,label:m,labelType:d?"error":"help"}))},c=e=>{let{boolValues:n,choiceValues:t}=e;return'\n<div>\n  <Checkbox\n    aria-describedby="label-id"\n    name="confirmation"\n    value="read"\n    invalid={error}\n  >\n    Telefon\n  </Checkbox>\n  <SupportLabel\n    id="label-id"\n    label={label}\n    labelType={error ? "error" : "help"}\n  />\n</div>\n'}},16514:function(e,n,t){t.d(n,{X:function(){return o}});var a=t(3438),r=t(26372),l=t.n(r),i=t(70079);const o=(0,i.forwardRef)(((e,n)=>{const{id:t,children:r,invalid:o,className:s,inline:c=!1,density:d,"data-testautoid":m,checked:u,indeterminate:k,...p}=e,v=(0,i.useRef)(null);(0,i.useImperativeHandle)(n,(()=>v.current),[]);const f=(0,a.M)(t||"jkl-checkbox",{generateSuffix:!t});return(0,i.useEffect)((()=>{v.current&&(v.current.indeterminate=!u&&!!k)}),[u,k]),i.createElement("div",{className:l()("jkl-checkbox",s,{"jkl-checkbox--inline":c,"jkl-checkbox--error":o}),"data-density":d},i.createElement("input",Object.assign({id:f,ref:v,className:"jkl-checkbox__input","data-testid":"jkl-checkbox-input","aria-invalid":o,type:"checkbox","data-testautoid":m,checked:u},p)),i.createElement("label",{htmlFor:f,className:"jkl-checkbox__label"},i.createElement("span",{className:"jkl-checkbox__mark"},i.createElement("span",{className:"jkl-checkbox__indeterminate-mark"}),i.createElement("span",{className:"jkl-checkbox__check-mark"})),i.createElement("span",{className:"jkl-checkbox__text"},r)))}));o.displayName="Checkbox"},72285:function(e,n,t){t.d(n,{l:function(){return p}});var a=t(58820),r=t(63571),l=t(87505),i=t(70079),o=t(54656);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},d=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},m=(e,n)=>{const{scrollLeft:t,scrollWidth:a}=e,{clientWidth:r}=n,l=t>0,i=a-t>r;n.classList.toggle("left-shadow",l),n.classList.toggle("right-shadow",i)},u=e=>{const n=e.target,t=n.parentElement;m(n,t)},k=e=>{let{props:n}=e;const t=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&m(n,e)}}))})),a=t.current.parentElement.parentElement;n.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=n,a.map((e=>{var n,t;return[e.name?s(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?s(e.type.name):""]})))})));var a},p=e=>{let{types:n}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const a=t.props?Object.values(t.props).filter(d):[],l=t.props?Object.values(t.props).filter(c):[],s=(e=>{var n,t,a,r,l,i;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(l=r.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return i.createElement(r.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),a.length>0&&i.createElement(k,{props:a}),l.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(k,{props:l})))}))))}},1634:function(e,n,t){t.d(n,{M:function(){return s}});var a=t(26372),r=t.n(a),l=t(49597),i=t(70079),o=t(34044);const s=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:a}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(l.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||s?0:.35},className:r()("jkl-portal__main",n),id:"innhold"},t)}},58820:function(e,n,t){t.d(n,{U:function(){return i}});var a=t(35250),r=t(26372),l=t.n(r);const i=e=>{let{className:n,density:t,id:r,...i}=e;return(0,a.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:l()("jkl-accordion",n),"data-density":t,id:r,...i})}},63571:function(e,n,t){t.d(n,{Q:function(){return c}});var a=t(35250),r=t(68998),l=t(1386),i=t(26372),o=t.n(i),s=t(70079);const c=e=>{let{children:n,title:t,className:i,startExpanded:c=!1,onClick:d,id:m,...u}=e;const[k,p]=(0,s.useState)(c),[v]=(0,s.useState)((()=>c)),{detailsRef:f,summaryRef:g,contentRef:b,onSummaryClick:h}=(0,l.E)({onOpenChange:(e,n)=>{p(e),d&&d(n,e)},isExpanded:v});return(0,a.jsxs)("details",{"data-testid":"jkl-accordion-item",...u,className:o()("jkl-accordion-item",i),ref:f,id:m,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:g,children:[t,(0,a.jsx)(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:b,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]})}},87505:function(e,n,t){t.d(n,{w:function(){return m}});var a=t(70079),r=t(41699),l=t(65174),i=t(6914),o=t(82546),s=t(39126),c=t(66169),d=t(94509);const m=(0,a.forwardRef)(((e,n)=>{let{caption:t,columns:m,emptyTableText:u,rows:k,verticalAlign:p,...v}=e;return a.createElement(r.i,{fullWidth:!0,...v,ref:n},t&&a.createElement(i.R,{srOnly:!0},t),a.createElement(s.s,null,a.createElement(d.S,null,m.map(((e,n)=>a.createElement(c.x,{key:n,density:"compact",bold:!0},e))))),a.createElement(l.R,null,0===k.length&&u&&a.createElement(d.S,null,a.createElement(o.p,{colSpan:m.length},u)),k.map(((e,n)=>a.createElement(d.S,{key:n},e.map(((e,n)=>a.createElement(o.p,{key:n,"data-th":m[n],verticalAlign:p},e))))))))}));m.displayName="DataTable"}}]);