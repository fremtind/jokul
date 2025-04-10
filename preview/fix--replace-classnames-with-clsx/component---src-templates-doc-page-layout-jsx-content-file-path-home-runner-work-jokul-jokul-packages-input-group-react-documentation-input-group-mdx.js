"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7213],{83760:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return w},Head:function(){return N},default:function(){return M}});var l=t(47160),a=t(70079),r=t(72896),o=t(20146),i=t(94989),s=t(73917),c=t(3438),d=t(62309),u=t(53048),m=t(29674),p=t(73110);const k=(0,a.forwardRef)(((e,n)=>{const{className:t,children:l,density:r,errorLabel:o,helpLabel:i,inline:s,label:k,labelProps:f,render:v,supportLabelProps:h,tooltipProps:b,id:E,...g}=e,j=(0,c.M)(E||"jkl-input",{generateSuffix:!E}),y=(0,c.M)("jkl-support-label"),x=o||i,_=o?"error":i?"help":void 0,N={"aria-describedby":x?y:void 0,"aria-invalid":!!Boolean(o)||void 0,id:j},w=v?()=>v(N):()=>{const n=a.Children.toArray(e.children)[0];if(a.isValidElement(n))return a.cloneElement(n,{...N,...n.props})};return a.createElement("div",Object.assign({ref:n,className:(0,u.Z)(t,"jkl-input-group",{"jkl-input-group--inline":s}),"data-density":r},g),a.createElement(m._,Object.assign({standAlone:!0,htmlFor:j,srOnly:s},f,{style:{whiteSpace:b?"nowrap":void 0,...null==f?void 0:f.style},density:r}),!b&&k,b&&a.createElement(a.Fragment,null,a.createElement("span",{style:{whiteSpace:"normal"}},k)," ",a.createElement(d.d,b))),w(),a.createElement(p.A,Object.assign({srOnly:s},h,{label:x,labelType:_,id:y,density:r})))}));k.displayName="InputGroup";const f={boolProps:["Med hjelpetekst","Med feil","Med tooltip"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},v=e=>{let{boolValues:n,choiceValues:t}=e;const l=null!=n&&n["Med hjelpetekst"]?"Fødselsnummer består av 11 siffer":void 0,r=null!=n&&n["Med feil"]?a.createElement(a.Fragment,null,"Du må fylle ut fødelsnummer eller D-nummer. Se ",a.createElement(i.r,{href:""},"guiden vår")," hvis du er usikker på hvordan du finner D-nummer."):void 0,o={variant:null==t?void 0:t.Variant},c=null!=n&&n["Med tooltip"]?{content:a.createElement(a.Fragment,null,"Du må fylle ut fødelsnummer eller D-nummer. Se ",a.createElement(i.r,{href:""},"guiden vår")," hvis du er usikker på hvordan du finner D-nummer.")}:void 0;return a.createElement(k,{label:"Fødselsnummer",errorLabel:r,helpLabel:l,labelProps:o,tooltipProps:c},a.createElement(s.J,null))};const h=e=>{let{boolValues:n}=e;return'\n<InputGroup\n    label="Fødselsnummer"\n    helpLabel='+(null!=n&&n["Med hjelpetekst"]?'"Fødselsnummer består av 11 siffer"':"{undefined}")+"\n    errorLabel="+(null!=n&&n["Med feil"]?'<>\n            Du må fylle ut fødelsnummer eller D-nummer. Se <Link href="">guiden vår</Link> hvis du er usikker på hvordan\n            du finner D-nummer.\n        </>':"{undefined}")+(null!=n&&n["Med tooltip"]?'\n    tooltipProps={{ content: (\n        <>\n            Du må fylle ut fødelsnummer eller D-nummer. Se <Link href="">guiden vår</Link> hvis du er usikker\n            på hvordan Du finner D-nummer.\n        </>\n    )}}':"")+"\n>\n    <BaseTextInput />\n</InputGroup>\n"};function b(e){const n=Object.assign({p:"p",ul:"ul",li:"li",a:"a",h2:"h2"},(0,l.ah)(),e.components),{Ingress:t,ComponentExample:i}=n;return i||g("ComponentExample",!0),t||g("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(t,null,a.createElement(n.p,null,"Skjemafeltene våre har noen felles egenskaper. For å unngå duplisering av kode har vi laget en pakke for delte\nkomponenter.")),"\n",a.createElement(n.p,null,"Pakken har fire komponenter:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#fieldgroup"},"FieldGroup")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#supportlabel"},"SupportLabel")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#inputgroup"},"InputGroup")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#label"},"Label")),"\n"),"\n",a.createElement(n.h2,null,"FieldGroup"),"\n",a.createElement(i,{title:"FieldGroup",component:r.oz,knobs:r.Ts,codeExample:r.ju}),"\n",a.createElement(n.p,null,"FieldGroup er en komponent som brukes for å gruppere skjemafelt under en felles label, med mulighet for tooltip og hjelpetekst."),"\n",a.createElement(n.p,null,"Der du sannsynligvis vil støte på denne er i forbindelse med en liste med ",a.createElement(n.a,{href:"/preview/fix--replace-classnames-with-clsx/komponenter/checkbox"},"Checkbox"),", men den kan brukes med alle skjemafelt hvor du ønsker en felles label."),"\n",a.createElement(n.h2,null,"InputGroup"),"\n",a.createElement(i,{title:"InputGroup",component:v,codeExample:h,knobs:f}),"\n",a.createElement(n.p,null,"InputGroup koordinerer plassering av Label, ",a.createElement(n.a,{href:"#supportlabel"},"SupportLabel")," og ",a.createElement(n.a,{href:"/preview/fix--replace-classnames-with-clsx/komponenter/tooltip"},"Tooltip")," i forhold til skjemafeltet."),"\n",a.createElement(n.p,null,"Annet enn når du importerer CSS skal du vanligvis ikke trenge forholde deg til denne komponenten. InputGroup er mest tiltenkt intern bruk i Jøkul."),"\n",a.createElement(n.h2,null,"SupportLabel"),"\n",a.createElement(i,{title:"SupportLabel",component:o.aG,knobs:{boolProps:[{prop:"Med hjelpetekst",defaultValue:!0},"Med feil"]},codeExample:o.yg}),"\n",a.createElement(n.p,null,"SupportLabel er en komponent som brukes for å vise hjelpetekst og feilmeldinger. Som oftest vil du bruke denne via ",a.createElement(n.a,{href:"#inputgroup"},"InputGroup"),", men det finnes unntak, slik som enkeltstående ",a.createElement(n.a,{href:"/preview/fix--replace-classnames-with-clsx/komponenter/checkbox#enkeltst%C3%A5ende"},"Checkbox"),"."),"\n",a.createElement(n.h2,null,"Label"),"\n",a.createElement(n.p,null,"Label er tilknyttet et skjemafelt via en InputGroup, eller flere skjemafelter via en FieldGroup."))}var E=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(b,e)):b(e)};function g(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var j=t(72285),y=t(22756),x=t(95573),_=t(1634);const N=e=>{let{pageContext:n}=e;return a.createElement(y.p,{title:n.title})},w=e=>{let{location:n,data:t,pageContext:l,children:r}=e;const{frontmatter:o}=t.page,{types:i}=l;return a.createElement(_.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(x.M1,Object.assign({},o,{versions:l.versions})),a.createElement(x.w5,o),r,i&&a.createElement(j.l,{types:i}))};function M(e){return a.createElement(w,e,a.createElement(E,e))}},72896:function(e,n,t){t.d(n,{Ts:function(){return o},ju:function(){return s},oz:function(){return i}});var l=t(68142),a=t(70079),r=t(16514);const o={boolProps:["Med hjelpetekst","Med feil","Med tooltip","Indeterminate state"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},i=e=>{let{boolValues:n,choiceValues:t}=e;const[o,i]=a.useState(!1),[s,c]=a.useState(!1),[d,u]=a.useState(!1),m=null!=t&&t.Variant?t.Variant:"medium",p=null==n?void 0:n["Med hjelpetekst"],k=null==n?void 0:n["Med feil"],f=null==n?void 0:n["Indeterminate state"],v=null!=n&&n["Med tooltip"]?{content:"Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed."}:void 0;return a.createElement(l.N,{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:m},helpLabel:p?"Vi sender viktige beskjeder til deg med de valgte metodene":void 0,errorLabel:k?"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder":void 0,tooltipProps:v},a.createElement(r.X,{name:"checklist",value:"phone",checked:o,invalid:k,onChange:()=>i(!o),indeterminate:f},"Telefon"),a.createElement(r.X,{name:"checklist",value:"email",checked:s,invalid:k,onChange:()=>c(!s),indeterminate:f},"E-post"),a.createElement(r.X,{name:"checklist",value:"snailmail",checked:d,invalid:k,onChange:()=>u(!d),indeterminate:f},"Brev"))},s=e=>{let{boolValues:n,choiceValues:t}=e;const l=null==n?void 0:n["Med hjelpetekst"],a=null==n?void 0:n["Med feil"];return'\n<FieldGroup\n    legend="Hvordan kan vi kontakte deg?"\n    labelProps={{ variant: "'+((null==t?void 0:t.Variant)||"medium")+'" }}\n    helpLabel='+(l?'"Vi sender viktige beskjeder til deg med de valgte metodene"':"{undefined}")+"\n    errorLabel="+(a?'"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder"':"{undefined}")+(null!=n&&n["Med tooltip"]?'\n    tooltipProps={{ content: "Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed." }}':"")+'\n>\n    <Checkbox\n        name="checklist"\n        value="phone"\n        invalid={'+a+'}\n    >\n        Telefon\n    </Checkbox>\n    <Checkbox\n        name="checklist"\n        value="email"\n        invalid={'+a+'}\n    >\n        E-post\n    </Checkbox>\n    <Checkbox\n        name="checklist"\n        value="snailmail"\n        invalid={'+a+"}\n    >\n        Brev\n    </Checkbox>\n</FieldGroup>\n"}},20146:function(e,n,t){t.d(n,{Ru:function(){return i},aG:function(){return s},yg:function(){return c}});var l=t(65975),a=t(3438),r=t(70079),o=t(16514);const i={boolProps:["Med hjelpetekst","Med feil"]},s=e=>{let{boolValues:n}=e;const t=(0,a.M)(),[i,s]=r.useState(!1),c=null==n?void 0:n["Med hjelpetekst"],d=null==n?void 0:n["Med feil"];let u;return c&&(u="Vedlegget har viktig informasjon om forsikringen din"),d&&(u="Du må bekrefte at du har lest vedlegget. Det har viktig informasjon om forsikringen din."),r.createElement("div",null,r.createElement(o.X,{"aria-describedby":t,name:"confirmation",value:"read",checked:i,invalid:d,onChange:()=>s(!i)},"Jeg har lest vedlegget"),r.createElement(l.A,{id:t,label:u,labelType:d?"error":"help"}))},c=e=>{let{boolValues:n,choiceValues:t}=e;return'\n<div>\n  <Checkbox\n    aria-describedby="label-id"\n    name="confirmation"\n    value="read"\n    invalid={error}\n  >\n    Telefon\n  </Checkbox>\n  <SupportLabel\n    id="label-id"\n    label={label}\n    labelType={error ? "error" : "help"}\n  />\n</div>\n'}},16514:function(e,n,t){t.d(n,{X:function(){return o}});var l=t(3438),a=t(53048),r=t(70079);const o=(0,r.forwardRef)(((e,n)=>{const{id:t,children:o,invalid:i,className:s,inline:c=!1,density:d,"data-testautoid":u,checked:m,indeterminate:p,...k}=e,f=(0,r.useRef)(null);(0,r.useImperativeHandle)(n,(()=>f.current),[]);const v=(0,l.M)(t||"jkl-checkbox",{generateSuffix:!t});return(0,r.useEffect)((()=>{f.current&&(f.current.indeterminate=!m&&!!p)}),[m,p]),r.createElement("div",{className:(0,a.Z)("jkl-checkbox",s,{"jkl-checkbox--inline":c,"jkl-checkbox--error":i}),"data-density":d},r.createElement("input",Object.assign({id:v,ref:f,className:"jkl-checkbox__input","data-testid":"jkl-checkbox-input","aria-invalid":i,type:"checkbox","data-testautoid":u,checked:m},k)),r.createElement("label",{htmlFor:v,className:"jkl-checkbox__label"},r.createElement("span",{className:"jkl-checkbox__mark"},r.createElement("span",{className:"jkl-checkbox__indeterminate-mark"}),r.createElement("span",{className:"jkl-checkbox__check-mark"})),r.createElement("span",{className:"jkl-checkbox__text"},o)))}));o.displayName="Checkbox"},29674:function(e,n,t){t.d(n,{_:function(){return r}});var l=t(53048),a=t(70079);const r=e=>{let{variant:n="small",density:t,srOnly:r,children:o,standAlone:i,htmlFor:s,className:c="",...d}=e;const u=(0,l.Z)("jkl-label",c,{["jkl-label--"+n]:n,"jkl-label--sr-only":r}),m=i?"label":"span";return!i&&s&&(s=void 0),a.createElement(m,Object.assign({},d,{className:u,htmlFor:s,"data-density":t}),o)}},73110:function(e,n,t){t.d(n,{A:function(){return s}});var l=t(3133),a=t(91720),r=t(65838),o=t(53048),i=t(70079);const s=e=>{let{id:n,helpLabel:t,errorLabel:s,label:c,labelType:d="help",density:u,className:m,srOnly:p,...k}=e;const f=s||t||c,v="help"===d||t&&!s,h="warning"===d||s,b="error"===d,E="success"===d,g=f?(0,o.Z)("jkl-form-support-label",m,{"jkl-form-support-label--sr-only":p,"jkl-form-support-label--help":v,"jkl-form-support-label--error":b,"jkl-form-support-label--warning":h,"jkl-form-support-label--success":E}):"jkl-dormant-form-support-label",j=f?k:{},y=b?l.P:E?a.t:r.a;return i.createElement("span",Object.assign({id:n,className:g},j,{"data-density":u}),i.createElement(y,{variant:"small",className:"jkl-form-support-label__icon"}),i.createElement("span",null,s||t||c))}},73917:function(e,n,t){t.d(n,{J:function(){return i}});var l=t(10188),a=t(53048),r=t(70079);function o(e,n){if(e)return{width:e};if(n){return{width:"calc("+(Math.min(n,40)+"ch")+" + "+"24px"+")"}}}const i=(0,r.forwardRef)(((e,n)=>{const{action:t,align:i="left","aria-invalid":s,className:c="",density:d,maxLength:u,style:m,type:p="text",unit:k,width:f,...v}=e;return r.createElement("div",{className:"jkl-text-input-wrapper","data-invalid":s,style:{...m,...o(f,u)}},r.createElement("input",Object.assign({"aria-invalid":s,ref:n,className:(0,a.Z)("jkl-text-input__input",c,{"jkl-text-input__input--align-right":"right"===i}),maxLength:u,type:p},v)),k&&r.createElement("span",{className:"jkl-text-input__unit"},k),t&&r.createElement(l.h,{density:d,className:(0,a.Z)("jkl-text-input-action-button",t.className),title:t.label,onClick:t.onClick,onFocus:t.onFocus,onBlur:t.onBlur,ref:t.buttonRef,type:t.type||"button"},t.icon))}));i.displayName="BaseInputField"},72285:function(e,n,t){t.d(n,{l:function(){return k}});var l=t(78217),a=t(41994),r=t(87505),o=t(70079),i=t(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},d=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},u=(e,n)=>{const{scrollLeft:t,scrollWidth:l}=e,{clientWidth:a}=n,r=t>0,o=l-t>a;n.classList.toggle("left-shadow",r),n.classList.toggle("right-shadow",o)},m=e=>{const n=e.target,t=n.parentElement;u(n,t)},p=e=>{let{props:n}=e;const t=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&u(n,e)}}))})),l=t.current.parentElement.parentElement;n.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=n,l.map((e=>{var n,t;return[e.name?s(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?s(e.type.name):""]})))})));var l},k=e=>{let{types:n}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const l=t.props?Object.values(t.props).filter(d):[],r=t.props?Object.values(t.props).filter(c):[],s=(e=>{var n,t,l,a,r,o;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(r=a.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return o.createElement(a.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),l.length>0&&o.createElement(p,{props:l}),r.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:r})))}))))}},1634:function(e,n,t){t.d(n,{M:function(){return s}});var l=t(26372),a=t.n(l),r=t(49597),o=t(70079),i=t(34044);const s=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:l}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(r.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:a()("jkl-portal__main",n),id:"innhold"},t)}},78217:function(e,n,t){t.d(n,{U:function(){return r}});var l=t(53048),a=t(70079);const r=e=>{let{className:n,density:t,id:r,...o}=e;return a.createElement("section",{role:"group","data-testid":"jkl-accordion",className:(0,l.Z)("jkl-accordion",n),"data-density":t,id:r,...o})}},41994:function(e,n,t){t.d(n,{Q:function(){return i}});var l=t(53484),a=t(1386),r=t(53048),o=t(70079);const i=e=>{let{children:n,title:t,className:i,startExpanded:s=!1,onClick:c,id:d,...u}=e;const{0:m,1:p}=(0,o.useState)(s),{0:k}=(0,o.useState)((()=>s)),{detailsRef:f,summaryRef:v,contentRef:h,onSummaryClick:b}=(0,a.E)({onOpenChange:(e,n)=>{p(e),c&&c(n,e)},isExpanded:k});return o.createElement("details",{"data-testid":"jkl-accordion-item",...u,className:(0,r.Z)("jkl-accordion-item",i),ref:f,id:d},o.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:b,ref:v},t,o.createElement(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!m,bold:m})),o.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h},o.createElement("div",{className:"jkl-accordion-item__content"},n)))}},87505:function(e,n,t){t.d(n,{w:function(){return u}});var l=t(70079),a=t(41699),r=t(65174),o=t(6914),i=t(82546),s=t(39126),c=t(66169),d=t(94509);const u=(0,l.forwardRef)(((e,n)=>{let{caption:t,columns:u,emptyTableText:m,rows:p,verticalAlign:k,...f}=e;return l.createElement(a.i,{fullWidth:!0,...f,ref:n},t&&l.createElement(o.R,{srOnly:!0},t),l.createElement(s.s,null,l.createElement(d.S,null,u.map(((e,n)=>l.createElement(c.x,{key:n,density:"compact",bold:!0},e))))),l.createElement(r.R,null,0===p.length&&m&&l.createElement(d.S,null,l.createElement(i.p,{colSpan:u.length},m)),p.map(((e,n)=>l.createElement(d.S,{key:n},e.map(((e,n)=>l.createElement(i.p,{key:n,"data-th":u[n],verticalAlign:k},e))))))))}));u.displayName="DataTable"}}]);