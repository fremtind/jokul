"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[6062],{21031:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return f},Head:function(){return g},default:function(){return b}});var a=n(47160),r=n(70079),l=n(68142),i=n(16514),o=n(72896),s=n(20146);function c(e){const t=Object.assign({p:"p",a:"a",em:"em",h2:"h2"},(0,a.ah)(),e.components),{Ingress:n,ComponentExample:c,Grid:d,DoDontExample:u}=t;return c||m("ComponentExample",!0),u||m("DoDontExample",!0),d||m("Grid",!0),n||m("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Vi bruker avmerkingsbokser når vi vil gi brukerne en liste med valg, der de kan velge ett eller flere alternativer.\nVi bruker også enkeltstående avmerkingsbokser der brukere må bekrefte noe.")),"\n",r.createElement(c,{title:"Checkbox",component:o.oz,knobs:o.Ts,codeExample:o.ju}),"\n",r.createElement(t.p,null,"Vi bruker flere avmerkingsbokser sammen i en ",r.createElement(t.a,{href:"/preview/feat/comboboxCtrl+A/komponenter/inputgroup"},"FieldGroup")," når vi vil gi brukerne en liste med valg, der de kan velge etter eller flere alternativer. Vi anbefaler at du plasserer valgene under hverandre. Standard tilstand for avmerkingsbokser er ",r.createElement(t.em,null,"ikke valgt"),"."),"\n",r.createElement(t.p,null,"En gruppe avmerkingsbokser må ha en god overskrift, og ledeteksten til hver avmerkingsboks må beskrive alternativet."),"\n",r.createElement(t.p,null,"Du finner et ",r.createElement(t.a,{href:"/preview/feat/comboboxCtrl+A/demoer/skjemavalidering/"},"eksempel på en sjekkboks brukt i skjemakontekst")," under Demoer. ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/portal/src/pages/demoer/skjemavalidering.tsx"},"Koden til eksempelet")," finner du på GitHub."),"\n",r.createElement(t.h2,null,"Enkeltstående"),"\n",r.createElement(c,{title:"Enkeltstående checkbox",component:s.aG,knobs:s.Ru,codeExample:s.yg}),"\n",r.createElement(t.p,null,'En avmerkingsboks som står alene trenger ikke noen overskrift, så lenge ledeteksten er god og beskrivende. Når en avmerkingsboks står alene, er det gjerne for å bekrefte noe, for eksempel: "Jeg bekrefter at opplysningene jeg har gitt er riktige".'),"\n",r.createElement(d,null,r.createElement(u,{type:"do",description:"Enkeltstående avmerkingsboks med beskrivende ledetekst",content:r.createElement(i.X,{name:"singledo",value:"confirm"},"Jeg har lest vedlegget")}),r.createElement(u,{type:"dont",description:"Lite beskrivende ledetekst uten overskrift",content:r.createElement(i.X,{name:"singledont",value:"confirm"},"Bekreft")})),"\n",r.createElement(t.h2,null,"Tekst og validering"),"\n",r.createElement(t.p,null,"Velg størrelse på overskriften til en gruppe avmerkingsbokser etter ",r.createElement(t.a,{href:"/preview/feat/comboboxCtrl+A/guider/skjemadesign"},"prinsippene for skjemadesign"),". Ha en kort og tydelig overskrift, som beskriver hva brukeren skal velge. Hvis du trenger å gi mer forklaring, kan du sette en hjelpetekst under gruppen."),"\n",r.createElement(t.p,null,"Hvis avmerkingsboksene ikke validerer, vises det en feilmelding som forklarer hva som er galt. Denne feilmeldingen erstatter en eventuell hjelpetekst du har der fra før, og bør formuleres slik at brukeren både får viktig informasjon fra hjelpeteksten, og får vite hva som er feil."),"\n",r.createElement(d,null,r.createElement(u,{type:"do",description:"Informasjon i hjelpetekst",content:r.createElement(l.N,{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:"small"},errorLabel:"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder"},r.createElement(i.X,{name:"infodo",value:"phone",invalid:!0},"Telefon"),r.createElement(i.X,{name:"infodo",value:"email",invalid:!0},"E-post"),r.createElement(i.X,{name:"infodo",value:"snailmail",invalid:!0},"Brev"))}),r.createElement(u,{type:"dont",description:"Lite hjelp å få fra feilmeldingen",content:r.createElement(l.N,{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:"small"},errorLabel:"Du må velge"},r.createElement(i.X,{name:"infodont",value:"phone",invalid:!0},"Telefon"),r.createElement(i.X,{name:"infodont",value:"email",invalid:!0},"E-post"),r.createElement(i.X,{name:"infodont",value:"snailmail",invalid:!0},"Brev"))})))}var d=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(c,e)):c(e)};function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=n(72285),k=n(22756),p=n(95573),v=n(1634);const g=e=>{let{pageContext:t}=e;return r.createElement(k.p,{title:t.title})},f=e=>{let{location:t,data:n,pageContext:a,children:l}=e;const{frontmatter:i}=n.page,{types:o}=a;return r.createElement(v.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(p.M1,Object.assign({},i,{versions:a.versions})),r.createElement(p.w5,i),l,o&&r.createElement(u.l,{types:o}))};function b(e){return r.createElement(f,e,r.createElement(d,e))}},72896:function(e,t,n){n.d(t,{Ts:function(){return i},ju:function(){return s},oz:function(){return o}});var a=n(68142),r=n(70079),l=n(16514);const i={boolProps:["Med hjelpetekst","Med feil","Med tooltip","Indeterminate state"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},o=e=>{let{boolValues:t,choiceValues:n}=e;const[i,o]=r.useState(!1),[s,c]=r.useState(!1),[d,m]=r.useState(!1),u=null!=n&&n.Variant?n.Variant:"medium",k=null==t?void 0:t["Med hjelpetekst"],p=null==t?void 0:t["Med feil"],v=null==t?void 0:t["Indeterminate state"],g=null!=t&&t["Med tooltip"]?{content:"Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed."}:void 0;return r.createElement(a.N,{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:u},helpLabel:k?"Vi sender viktige beskjeder til deg med de valgte metodene":void 0,errorLabel:p?"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder":void 0,tooltipProps:g},r.createElement(l.X,{name:"checklist",value:"phone",checked:i,invalid:p,onChange:()=>o(!i),indeterminate:v},"Telefon"),r.createElement(l.X,{name:"checklist",value:"email",checked:s,invalid:p,onChange:()=>c(!s),indeterminate:v},"E-post"),r.createElement(l.X,{name:"checklist",value:"snailmail",checked:d,invalid:p,onChange:()=>m(!d),indeterminate:v},"Brev"))},s=e=>{let{boolValues:t,choiceValues:n}=e;const a=null==t?void 0:t["Med hjelpetekst"],r=null==t?void 0:t["Med feil"];return'\n<FieldGroup\n    legend="Hvordan kan vi kontakte deg?"\n    labelProps={{ variant: "'+((null==n?void 0:n.Variant)||"medium")+'" }}\n    helpLabel='+(a?'"Vi sender viktige beskjeder til deg med de valgte metodene"':"{undefined}")+"\n    errorLabel="+(r?'"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder"':"{undefined}")+(null!=t&&t["Med tooltip"]?'\n    tooltipProps={{ content: "Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed." }}':"")+'\n>\n    <Checkbox\n        name="checklist"\n        value="phone"\n        invalid={'+r+'}\n    >\n        Telefon\n    </Checkbox>\n    <Checkbox\n        name="checklist"\n        value="email"\n        invalid={'+r+'}\n    >\n        E-post\n    </Checkbox>\n    <Checkbox\n        name="checklist"\n        value="snailmail"\n        invalid={'+r+"}\n    >\n        Brev\n    </Checkbox>\n</FieldGroup>\n"}},20146:function(e,t,n){n.d(t,{Ru:function(){return o},aG:function(){return s},yg:function(){return c}});var a=n(65975),r=n(3438),l=n(70079),i=n(16514);const o={boolProps:["Med hjelpetekst","Med feil"]},s=e=>{let{boolValues:t}=e;const n=(0,r.M)(),[o,s]=l.useState(!1),c=null==t?void 0:t["Med hjelpetekst"],d=null==t?void 0:t["Med feil"];let m;return c&&(m="Vedlegget har viktig informasjon om forsikringen din"),d&&(m="Du må bekrefte at du har lest vedlegget. Det har viktig informasjon om forsikringen din."),l.createElement("div",null,l.createElement(i.X,{"aria-describedby":n,name:"confirmation",value:"read",checked:o,invalid:d,onChange:()=>s(!o)},"Jeg har lest vedlegget"),l.createElement(a.A,{id:n,label:m,labelType:d?"error":"help"}))},c=e=>{let{boolValues:t,choiceValues:n}=e;return'\n<div>\n  <Checkbox\n    aria-describedby="label-id"\n    name="confirmation"\n    value="read"\n    invalid={error}\n  >\n    Telefon\n  </Checkbox>\n  <SupportLabel\n    id="label-id"\n    label={label}\n    labelType={error ? "error" : "help"}\n  />\n</div>\n'}},16514:function(e,t,n){n.d(t,{X:function(){return o}});var a=n(3438),r=n(26372),l=n.n(r),i=n(70079);const o=(0,i.forwardRef)(((e,t)=>{const{id:n,children:r,invalid:o,className:s,inline:c=!1,density:d,"data-testautoid":m,checked:u,indeterminate:k,...p}=e,v=(0,i.useRef)(null);(0,i.useImperativeHandle)(t,(()=>v.current),[]);const g=(0,a.M)(n||"jkl-checkbox",{generateSuffix:!n});return(0,i.useEffect)((()=>{v.current&&(v.current.indeterminate=!u&&!!k)}),[u,k]),i.createElement("div",{className:l()("jkl-checkbox",s,{"jkl-checkbox--inline":c,"jkl-checkbox--error":o}),"data-density":d},i.createElement("input",Object.assign({id:g,ref:v,className:"jkl-checkbox__input","data-testid":"jkl-checkbox-input","aria-invalid":o,type:"checkbox","data-testautoid":m,checked:u},p)),i.createElement("label",{htmlFor:g,className:"jkl-checkbox__label"},i.createElement("span",{className:"jkl-checkbox__mark"},i.createElement("span",{className:"jkl-checkbox__indeterminate-mark"}),i.createElement("span",{className:"jkl-checkbox__check-mark"})),i.createElement("span",{className:"jkl-checkbox__text"},r)))}));o.displayName="Checkbox"},72285:function(e,t,n){n.d(t,{l:function(){return p}});var a=n(78217),r=n(41994),l=n(87505),i=n(70079),o=n(54656);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:r}=t,l=n>0,i=a-n>r;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",i)},u=e=>{const t=e.target,n=t.parentElement;m(t,n)},k=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var a},p=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(d):[],l=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,a,r,l,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(l=r.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),a.length>0&&i.createElement(k,{props:a}),l.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(k,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var a=n(26372),r=n.n(a),l=n(49597),i=n(70079),o=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(l.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return i}});var a=n(26372),r=n.n(a),l=n(70079);const i=e=>{let{className:t,density:n,...a}=e;return l.createElement("div",{"data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,...a})}},41994:function(e,t,n){n.d(t,{Q:function(){return c}});var a=n(53484),r=n(3438),l=n(84490),i=n(26372),o=n.n(i),s=n(70079);const c=e=>{let{children:t,title:n,className:i,startExpanded:c=!1,onClick:d,...m}=e;const u=(0,r.M)("title"),k=(0,r.M)("content"),{0:p,1:v}=(0,s.useState)(c),[g]=(0,l.v)(p,{easing:"exit",timing:"expressive"});return s.createElement("div",{"data-testid":"jkl-accordion-item",...m,className:o()("jkl-accordion-item",i,{"jkl-accordion-item--expanded":p})},s.createElement("button",{id:u,className:"jkl-accordion-item__title",type:"button","aria-expanded":p,"aria-controls":k,onClick:e=>{const t=!p;v(t),d&&d(e,t)}},n,s.createElement(a.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})),s.createElement("div",{id:k,ref:g,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":u,hidden:!p},s.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var a=n(70079),r=n(41699),l=n(65174),i=n(6914),o=n(82546),s=n(39126),c=n(66169),d=n(94509);const m=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:u,rows:k,verticalAlign:p,...v}=e;return a.createElement(r.i,{fullWidth:!0,...v,ref:t},n&&a.createElement(i.R,{srOnly:!0},n),a.createElement(s.s,null,a.createElement(d.S,null,m.map(((e,t)=>a.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(l.R,null,0===k.length&&u&&a.createElement(d.S,null,a.createElement(o.p,{colSpan:m.length},u)),k.map(((e,t)=>a.createElement(d.S,{key:t},e.map(((e,t)=>a.createElement(o.p,{key:t,"data-th":m[t],verticalAlign:p},e))))))))}));m.displayName="DataTable"}}]);