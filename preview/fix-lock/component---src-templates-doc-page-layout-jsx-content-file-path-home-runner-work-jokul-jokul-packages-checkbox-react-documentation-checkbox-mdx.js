"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[6062],{21031:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return g},Head:function(){return f},default:function(){return h}});var r=n(47160),a=n(70079),l=n(68142),i=n(16514),o=n(72896),c=n(20146);function s(e){const t=Object.assign({p:"p",a:"a",em:"em",h2:"h2"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:s,Grid:d,DoDontExample:u}=t;return s||m("ComponentExample",!0),u||m("DoDontExample",!0),d||m("Grid",!0),n||m("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"Vi bruker avmerkingsbokser når vi vil gi brukerne en liste med valg, der de kan velge ett eller flere alternativer.\nVi bruker også enkeltstående avmerkingsbokser der brukere må bekrefte noe.")),"\n",a.createElement(s,{title:"Checkbox",component:o.oz,knobs:o.Ts,codeExample:o.ju}),"\n",a.createElement(t.p,null,"Vi bruker flere avmerkingsbokser sammen i en ",a.createElement(t.a,{href:"/preview/fix-lock/komponenter/inputgroup"},"FieldGroup")," når vi vil gi brukerne en liste med valg, der de kan velge etter eller flere alternativer. Vi anbefaler at du plasserer valgene under hverandre. Standard tilstand for avmerkingsbokser er ",a.createElement(t.em,null,"ikke valgt"),"."),"\n",a.createElement(t.p,null,"En gruppe avmerkingsbokser må ha en god overskrift, og ledeteksten til hver avmerkingsboks må beskrive alternativet."),"\n",a.createElement(t.p,null,"Du finner et ",a.createElement(t.a,{href:"/preview/fix-lock/demoer/skjemavalidering/"},"eksempel på en sjekkboks brukt i skjemakontekst")," under Demoer. ",a.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/portal/src/pages/demoer/skjemavalidering.tsx"},"Koden til eksempelet")," finner du på GitHub."),"\n",a.createElement(t.h2,null,"Enkeltstående"),"\n",a.createElement(s,{title:"Enkeltstående checkbox",component:c.aG,knobs:c.Ru,codeExample:c.yg}),"\n",a.createElement(t.p,null,'En avmerkingsboks som står alene trenger ikke noen overskrift, så lenge ledeteksten er god og beskrivende. Når en avmerkingsboks står alene, er det gjerne for å bekrefte noe, for eksempel: "Jeg bekrefter at opplysningene jeg har gitt er riktige".'),"\n",a.createElement(d,null,a.createElement(u,{type:"do",description:"Enkeltstående avmerkingsboks med beskrivende ledetekst",content:a.createElement(i.X,{name:"singledo",value:"confirm"},"Jeg har lest vedlegget")}),a.createElement(u,{type:"dont",description:"Lite beskrivende ledetekst uten overskrift",content:a.createElement(i.X,{name:"singledont",value:"confirm"},"Bekreft")})),"\n",a.createElement(t.h2,null,"Tekst og validering"),"\n",a.createElement(t.p,null,"Velg størrelse på overskriften til en gruppe avmerkingsbokser etter ",a.createElement(t.a,{href:"/preview/fix-lock/guider/skjemadesign"},"prinsippene for skjemadesign"),". Ha en kort og tydelig overskrift, som beskriver hva brukeren skal velge. Hvis du trenger å gi mer forklaring, kan du sette en hjelpetekst under gruppen."),"\n",a.createElement(t.p,null,"Hvis avmerkingsboksene ikke validerer, vises det en feilmelding som forklarer hva som er galt. Denne feilmeldingen erstatter en eventuell hjelpetekst du har der fra før, og bør formuleres slik at brukeren både får viktig informasjon fra hjelpeteksten, og får vite hva som er feil."),"\n",a.createElement(d,null,a.createElement(u,{type:"do",description:"Informasjon i hjelpetekst",content:a.createElement(l.N,{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:"small"},errorLabel:"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder"},a.createElement(i.X,{name:"infodo",value:"phone",invalid:!0},"Telefon"),a.createElement(i.X,{name:"infodo",value:"email",invalid:!0},"E-post"),a.createElement(i.X,{name:"infodo",value:"snailmail",invalid:!0},"Brev"))}),a.createElement(u,{type:"dont",description:"Lite hjelp å få fra feilmeldingen",content:a.createElement(l.N,{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:"small"},errorLabel:"Du må velge"},a.createElement(i.X,{name:"infodont",value:"phone",invalid:!0},"Telefon"),a.createElement(i.X,{name:"infodont",value:"email",invalid:!0},"E-post"),a.createElement(i.X,{name:"infodont",value:"snailmail",invalid:!0},"Brev"))})))}var d=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(s,e)):s(e)};function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=n(72285),p=n(22756),k=n(95573),v=n(1634);const f=e=>{let{pageContext:t}=e;return a.createElement(p.p,{title:t.title})},g=e=>{let{location:t,data:n,pageContext:r,children:l}=e;const{frontmatter:i}=n.page,{types:o}=r;return a.createElement(v.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(k.M1,Object.assign({},i,{versions:r.versions})),a.createElement(k.w5,i),l,o&&a.createElement(u.l,{types:o}))};function h(e){return a.createElement(g,e,a.createElement(d,e))}},72896:function(e,t,n){n.d(t,{Ts:function(){return i},ju:function(){return c},oz:function(){return o}});var r=n(68142),a=n(70079),l=n(16514);const i={boolProps:["Med hjelpetekst","Med feil","Med tooltip","Indeterminate state"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},o=e=>{let{boolValues:t,choiceValues:n}=e;const[i,o]=a.useState(!1),[c,s]=a.useState(!1),[d,m]=a.useState(!1),u=null!=n&&n.Variant?n.Variant:"medium",p=null==t?void 0:t["Med hjelpetekst"],k=null==t?void 0:t["Med feil"],v=null==t?void 0:t["Indeterminate state"],f=null!=t&&t["Med tooltip"]?{content:"Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed."}:void 0;return a.createElement(r.N,{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:u},helpLabel:p?"Vi sender viktige beskjeder til deg med de valgte metodene":void 0,errorLabel:k?"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder":void 0,tooltipProps:f},a.createElement(l.X,{name:"checklist",value:"phone",checked:i,invalid:k,onChange:()=>o(!i),indeterminate:v},"Telefon"),a.createElement(l.X,{name:"checklist",value:"email",checked:c,invalid:k,onChange:()=>s(!c),indeterminate:v},"E-post"),a.createElement(l.X,{name:"checklist",value:"snailmail",checked:d,invalid:k,onChange:()=>m(!d),indeterminate:v},"Brev"))},c=e=>{let{boolValues:t,choiceValues:n}=e;const r=null==t?void 0:t["Med hjelpetekst"],a=null==t?void 0:t["Med feil"];return'\n<FieldGroup\n    legend="Hvordan kan vi kontakte deg?"\n    labelProps={{ variant: "'+((null==n?void 0:n.Variant)||"medium")+'" }}\n    helpLabel='+(r?'"Vi sender viktige beskjeder til deg med de valgte metodene"':"{undefined}")+"\n    errorLabel="+(a?'"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder"':"{undefined}")+(null!=t&&t["Med tooltip"]?'\n    tooltipProps={{ content: "Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed." }}':"")+'\n>\n    <Checkbox\n        name="checklist"\n        value="phone"\n        invalid={'+a+'}\n    >\n        Telefon\n    </Checkbox>\n    <Checkbox\n        name="checklist"\n        value="email"\n        invalid={'+a+'}\n    >\n        E-post\n    </Checkbox>\n    <Checkbox\n        name="checklist"\n        value="snailmail"\n        invalid={'+a+"}\n    >\n        Brev\n    </Checkbox>\n</FieldGroup>\n"}},20146:function(e,t,n){n.d(t,{Ru:function(){return o},aG:function(){return c},yg:function(){return s}});var r=n(65975),a=n(3438),l=n(70079),i=n(16514);const o={boolProps:["Med hjelpetekst","Med feil"]},c=e=>{let{boolValues:t}=e;const n=(0,a.M)(),[o,c]=l.useState(!1),s=null==t?void 0:t["Med hjelpetekst"],d=null==t?void 0:t["Med feil"];let m;return s&&(m="Vedlegget har viktig informasjon om forsikringen din"),d&&(m="Du må bekrefte at du har lest vedlegget. Det har viktig informasjon om forsikringen din."),l.createElement("div",null,l.createElement(i.X,{"aria-describedby":n,name:"confirmation",value:"read",checked:o,invalid:d,onChange:()=>c(!o)},"Jeg har lest vedlegget"),l.createElement(r.A,{id:n,label:m,labelType:d?"error":"help"}))},s=e=>{let{boolValues:t,choiceValues:n}=e;return'\n<div>\n  <Checkbox\n    aria-describedby="label-id"\n    name="confirmation"\n    value="read"\n    invalid={error}\n  >\n    Telefon\n  </Checkbox>\n  <SupportLabel\n    id="label-id"\n    label={label}\n    labelType={error ? "error" : "help"}\n  />\n</div>\n'}},16514:function(e,t,n){n.d(t,{X:function(){return o}});var r=n(3438),a=n(26372),l=n.n(a),i=n(70079);const o=(0,i.forwardRef)(((e,t)=>{const{id:n,children:a,invalid:o,className:c,inline:s=!1,density:d,"data-testautoid":m,checked:u,indeterminate:p,...k}=e,v=(0,i.useRef)(null);(0,i.useImperativeHandle)(t,(()=>v.current),[]);const f=(0,r.M)(n||"jkl-checkbox",{generateSuffix:!n});return(0,i.useEffect)((()=>{v.current&&(v.current.indeterminate=!u&&!!p)}),[u,p]),i.createElement("div",{className:l()("jkl-checkbox",c,{"jkl-checkbox--inline":s,"jkl-checkbox--error":o}),"data-density":d},i.createElement("input",Object.assign({id:f,ref:v,className:"jkl-checkbox__input","data-testid":"jkl-checkbox-input","aria-invalid":o,type:"checkbox","data-testautoid":m,checked:u},k)),i.createElement("label",{htmlFor:f,className:"jkl-checkbox__label"},i.createElement("span",{className:"jkl-checkbox__mark"},i.createElement("span",{className:"jkl-checkbox__indeterminate-mark"}),i.createElement("span",{className:"jkl-checkbox__check-mark"})),i.createElement("span",{className:"jkl-checkbox__text"},a)))}));o.displayName="Checkbox"},72285:function(e,t,n){n.d(t,{l:function(){return k}});var r=n(78217),a=n(76802),l=n(87505),i=n(70079),o=n(54656);const c=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,i=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",i)},u=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(d):[],l=n.props?Object.values(n.props).filter(s):[],c=(e=>{var t,n,r,a,l,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(l=a.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&i.createElement(o.dn,{className:"jkl-portal-code-block"},c),r.length>0&&i.createElement(p,{props:r}),l.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return c}});var r=n(26372),a=n.n(r),l=n(49597),i=n(70079),o=n(34044);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,i.useContext)(o.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(l.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||c?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return i}});var r=n(26372),a=n.n(r),l=n(70079);const i=e=>{let{className:t,density:n,...r}=e;return l.createElement("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,...r})}},76802:function(e,t,n){n.d(t,{Q:function(){return c}});var r=n(53484),a=n(26372),l=n.n(a),i=n(70079);const o=e=>{let{onOpenChange:t,startExpanded:n}=e;const r=(0,i.useRef)(null),a=(0,i.useRef)(null),l=(0,i.useRef)(null),o=(0,i.useRef)(null),{0:c,1:s}=(0,i.useState)(!1),{0:d,1:m}=(0,i.useState)(!1);(0,i.useEffect)((()=>{r.current&&(r.current.open=n)}),[]);const u=e=>{r.current&&a.current&&(r.current.open=e,o.current=null,s(!1),m(!1),r.current.style.overflow="",r.current.style.height="")};return{detailsRef:r,summaryRef:a,contentRef:l,onSummaryClick:e=>{e.preventDefault(),r.current&&a.current&&(r.current.style.overflow="hidden",c||!r.current.open?(e=>{r.current&&a.current&&(r.current.style.height="".concat(r.current.offsetHeight,"px"),r.current.open=!0,requestAnimationFrame((()=>{if(r.current&&a.current&&l.current){m(!0),t(!0,e);const n=r.current.offsetHeight,i=a.current.offsetHeight+l.current.offsetHeight;o.current&&o.current.cancel(),r.current.animate&&(o.current=r.current.animate({height:["".concat(n,"px"),"".concat(i,"px")]},{duration:150,easing:"ease"}),o.current.onfinish=()=>u(!0),o.current.oncancel=()=>m(!1))}})))})(e):(d||r.current.open)&&(e=>{if(r.current&&a.current){s(!0),t(!1,e);const n=r.current.offsetHeight,l=a.current.offsetHeight;o.current&&o.current.cancel(),r.current.animate&&(o.current=r.current.animate({height:["".concat(n,"px"),"".concat(l,"px")]},{duration:150,easing:"ease"}),o.current.onfinish=()=>u(!1),o.current.oncancel=()=>s(!1))}})(e))}}},c=e=>{let{children:t,title:n,className:a,startExpanded:c=!1,onClick:s,...d}=e;const{0:m,1:u}=(0,i.useState)(c),{detailsRef:p,summaryRef:k,contentRef:v,onSummaryClick:f}=o({onOpenChange:(e,t)=>{u(e),s&&s(t,e)},startExpanded:c});return i.createElement("details",{"data-testid":"jkl-accordion-item",...d,className:l()("jkl-accordion-item",a),ref:p},i.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:f,ref:k},n,i.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!m,bold:m})),i.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:v},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var r=n(70079),a=n(41699),l=n(65174),i=n(6914),o=n(82546),c=n(39126),s=n(66169),d=n(94509);const m=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:u,rows:p,verticalAlign:k,...v}=e;return r.createElement(a.i,{fullWidth:!0,...v,ref:t},n&&r.createElement(i.R,{srOnly:!0},n),r.createElement(c.s,null,r.createElement(d.S,null,m.map(((e,t)=>r.createElement(s.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.R,null,0===p.length&&u&&r.createElement(d.S,null,r.createElement(o.p,{colSpan:m.length},u)),p.map(((e,t)=>r.createElement(d.S,{key:t},e.map(((e,t)=>r.createElement(o.p,{key:t,"data-th":m[t],verticalAlign:k},e))))))))}));m.displayName="DataTable"}}]);