"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7213],{83760:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return C},Head:function(){return w},default:function(){return _}});var l=t(47160),r=t(70079),a=t(72896),o=t(20146),i=t(94989),s=t(73917),c=t(55208),u=t(3438),d=t(26372),p=t.n(d),m=t(29674),k=t(73110);const f=(0,r.forwardRef)(((e,n)=>{const{className:t,children:l,density:a,errorLabel:o,helpLabel:i,inline:s,label:c,labelProps:d,render:f,supportLabelProps:h,tooltip:b,id:v,...g}=e,E=(0,u.M)(v||"jkl-input",{generateSuffix:!v}),j=(0,u.M)("jkl-support-label"),y=o||i,x=o?"error":i?"help":void 0,N={"aria-describedby":y?j:void 0,"aria-invalid":!!Boolean(o)||void 0,id:E},M=f?()=>f(N):()=>{const n=r.Children.toArray(e.children)[0];if(r.isValidElement(n))return r.cloneElement(n,{...N,...n.props})};return r.createElement("div",Object.assign({ref:n,className:p()(t,"jkl-input-group",{"jkl-input-group--inline":s}),"data-density":a},g),r.createElement(m._,Object.assign({standAlone:!0,htmlFor:E,srOnly:s},d,{style:{whiteSpace:b?"nowrap":void 0,...null==d?void 0:d.style},density:a}),b?r.createElement(r.Fragment,null,r.createElement("span",{style:{whiteSpace:"normal"}},c)," ",b):c),M(),r.createElement(k.A,Object.assign({srOnly:s},h,{label:y,labelType:x,id:j,density:a})))}));f.displayName="InputGroup";const h={boolProps:["Med hjelpetekst","Med feil","Med tooltip"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},b=e=>{let{boolValues:n,choiceValues:t}=e;const l=null!=n&&n["Med hjelpetekst"]?"Fødselsnummer består av 11 siffer":void 0,a=null!=n&&n["Med feil"]?r.createElement(r.Fragment,null,"Du må fylle ut fødelsnummer eller D-nummer. Se"," ",r.createElement(i.r,{href:""},"guiden vår")," hvis du er usikker på hvordan du finner D-nummer."):void 0,o={variant:null==t?void 0:t.Variant},u=null!=n&&n["Med tooltip"]?r.createElement(c.d,{content:r.createElement(r.Fragment,null,"Du må fylle ut fødelsnummer eller D-nummer. Se"," ",r.createElement(i.r,{href:""},"guiden vår")," hvis du er usikker på hvordan du finner D-nummer.")}):void 0;return r.createElement(f,{label:"Fødselsnummer",errorLabel:a,helpLabel:l,labelProps:o,tooltip:u},r.createElement(s.J,null))};const v=e=>{let{boolValues:n}=e;return'\n<InputGroup\n    label="Fødselsnummer"\n    helpLabel='+(null!=n&&n["Med hjelpetekst"]?'"Fødselsnummer består av 11 siffer"':"{undefined}")+"\n    errorLabel="+(null!=n&&n["Med feil"]?'<>\n            Du må fylle ut fødelsnummer eller D-nummer. Se <Link href="">guiden vår</Link> hvis du er usikker på hvordan\n            du finner D-nummer.\n        </>':"{undefined}")+(null!=n&&n["Med tooltip"]?'\n    tooltip={\n        <PopupTip\n            content={\n                <>\n                    Du må fylle ut fødelsnummer eller D-nummer. Se{" "}\n                    <Link href="">guiden vår</Link> hvis du er usikker på\n                    hvordan du finner D-nummer.\n                </>\n            }\n        />\n    }':"")+"\n>\n    <BaseTextInput />\n</InputGroup>\n"};function g(e){const n=Object.assign({p:"p",ul:"ul",li:"li",a:"a",h2:"h2"},(0,l.ah)(),e.components),{Ingress:t,ComponentExample:i}=n;return i||j("ComponentExample",!0),t||j("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(t,null,r.createElement(n.p,null,"Skjemafeltene våre har noen felles egenskaper. For å unngå duplisering av\nkode har vi laget en pakke for delte komponenter.")),"\n",r.createElement(n.p,null,"Pakken har fire komponenter:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"#fieldgroup"},"FieldGroup")),"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"#supportlabel"},"SupportLabel")),"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"#inputgroup"},"InputGroup")),"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"#label"},"Label")),"\n"),"\n",r.createElement(n.h2,null,"FieldGroup"),"\n",r.createElement(i,{title:"FieldGroup",component:a.oz,knobs:a.Ts,codeExample:a.ju}),"\n",r.createElement(n.p,null,"FieldGroup er en komponent som brukes for å gruppere skjemafelt under en felles label, med mulighet for tooltip og hjelpetekst."),"\n",r.createElement(n.p,null,"Der du sannsynligvis vil støte på denne er i forbindelse med en liste med ",r.createElement(n.a,{href:"/preview/4371-select-focus/komponenter/checkbox"},"Checkbox"),", men den kan brukes med alle skjemafelt hvor du ønsker en felles label."),"\n",r.createElement(n.h2,null,"InputGroup"),"\n",r.createElement(i,{title:"InputGroup",component:b,codeExample:v,knobs:h}),"\n",r.createElement(n.p,null,"InputGroup koordinerer plassering av Label, ",r.createElement(n.a,{href:"#supportlabel"},"SupportLabel")," og ",r.createElement(n.a,{href:"/preview/4371-select-focus/komponenter/tooltip"},"Tooltip")," i forhold til skjemafeltet."),"\n",r.createElement(n.p,null,"Annet enn når du importerer CSS skal du vanligvis ikke trenge forholde deg til denne komponenten. InputGroup er mest tiltenkt intern bruk i Jøkul."),"\n",r.createElement(n.h2,null,"SupportLabel"),"\n",r.createElement(i,{title:"SupportLabel",component:o.aG,knobs:{boolProps:[{prop:"Med hjelpetekst",defaultValue:!0},"Med feil"]},codeExample:o.yg}),"\n",r.createElement(n.p,null,"SupportLabel er en komponent som brukes for å vise hjelpetekst og feilmeldinger. Som oftest vil du bruke denne via ",r.createElement(n.a,{href:"#inputgroup"},"InputGroup"),", men det finnes unntak, slik som enkeltstående ",r.createElement(n.a,{href:"/preview/4371-select-focus/komponenter/checkbox#enkeltst%C3%A5ende"},"Checkbox"),"."),"\n",r.createElement(n.h2,null,"Label"),"\n",r.createElement(n.p,null,"Label er tilknyttet et skjemafelt via en InputGroup, eller flere skjemafelter via en FieldGroup."))}var E=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(g,e)):g(e)};function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var y=t(72285),x=t(22756),N=t(95573),M=t(1634);const w=e=>{let{pageContext:n}=e;return r.createElement(x.p,{title:n.title})},C=e=>{let{location:n,data:t,pageContext:l,children:a}=e;const{frontmatter:o}=t.page,{types:i}=l;return r.createElement(M.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(N.M1,Object.assign({},o,{versions:l.versions})),r.createElement(N.w5,o),a,i&&r.createElement(y.l,{types:i}))};function _(e){return r.createElement(C,e,r.createElement(E,e))}},72896:function(e,n,t){t.d(n,{Ts:function(){return i},ju:function(){return c},oz:function(){return s}});var l=t(68142),r=t(70079),a=t(55208),o=t(16514);const i={boolProps:["Med hjelpetekst","Med feil","Med tooltip","Indeterminate state"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},s=e=>{let{boolValues:n,choiceValues:t}=e;const[i,s]=r.useState(!1),[c,u]=r.useState(!1),[d,p]=r.useState(!1),m=null!=t&&t.Variant?t.Variant:"medium",k=null==n?void 0:n["Med hjelpetekst"],f=null==n?void 0:n["Med feil"],h=null==n?void 0:n["Indeterminate state"],b=null!=n&&n["Med tooltip"]?r.createElement(a.d,{content:"Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed."}):void 0;return r.createElement(l.N,{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:m},helpLabel:k?"Vi sender viktige beskjeder til deg med de valgte metodene":void 0,errorLabel:f?"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder":void 0,tooltip:b},r.createElement(o.X,{name:"checklist",value:"phone",checked:i,invalid:f,onChange:()=>s(!i),indeterminate:h},"Telefon"),r.createElement(o.X,{name:"checklist",value:"email",checked:c,invalid:f,onChange:()=>u(!c),indeterminate:h},"E-post"),r.createElement(o.X,{name:"checklist",value:"snailmail",checked:d,invalid:f,onChange:()=>p(!d),indeterminate:h},"Brev"))},c=e=>{let{boolValues:n,choiceValues:t}=e;const l=null==n?void 0:n["Med hjelpetekst"],r=null==n?void 0:n["Med feil"];return'\n<FieldGroup\n    legend="Hvordan kan vi kontakte deg?"\n    labelProps={{ variant: "'+((null==t?void 0:t.Variant)||"medium")+'" }}\n    helpLabel='+(l?'"Vi sender viktige beskjeder til deg med de valgte metodene"':"{undefined}")+"\n    errorLabel="+(r?'"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder"':"{undefined}")+(null!=n&&n["Med tooltip"]?'\n    tooltip={\n        <PopupTip content="Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed." />\n    }':"")+'\n>\n    <Checkbox\n        name="checklist"\n        value="phone"\n        invalid={'+r+'}\n    >\n        Telefon\n    </Checkbox>\n    <Checkbox\n        name="checklist"\n        value="email"\n        invalid={'+r+'}\n    >\n        E-post\n    </Checkbox>\n    <Checkbox\n        name="checklist"\n        value="snailmail"\n        invalid={'+r+"}\n    >\n        Brev\n    </Checkbox>\n</FieldGroup>\n"}},20146:function(e,n,t){t.d(n,{Ru:function(){return i},aG:function(){return s},yg:function(){return c}});var l=t(65975),r=t(3438),a=t(70079),o=t(16514);const i={boolProps:["Med hjelpetekst","Med feil"]},s=e=>{let{boolValues:n}=e;const t=(0,r.M)(),[i,s]=a.useState(!1),c=null==n?void 0:n["Med hjelpetekst"],u=null==n?void 0:n["Med feil"];let d;return c&&(d="Vedlegget har viktig informasjon om forsikringen din"),u&&(d="Du må bekrefte at du har lest vedlegget. Det har viktig informasjon om forsikringen din."),a.createElement("div",null,a.createElement(o.X,{"aria-describedby":t,name:"confirmation",value:"read",checked:i,invalid:u,onChange:()=>s(!i)},"Jeg har lest vedlegget"),a.createElement(l.A,{id:t,label:d,labelType:u?"error":"help"}))},c=e=>{let{boolValues:n,choiceValues:t}=e;return'\n<div>\n  <Checkbox\n    aria-describedby="label-id"\n    name="confirmation"\n    value="read"\n    invalid={error}\n  >\n    Telefon\n  </Checkbox>\n  <SupportLabel\n    id="label-id"\n    label={label}\n    labelType={error ? "error" : "help"}\n  />\n</div>\n'}},16514:function(e,n,t){t.d(n,{X:function(){return i}});var l=t(3438),r=t(26372),a=t.n(r),o=t(70079);const i=(0,o.forwardRef)(((e,n)=>{const{id:t,children:r,invalid:i,className:s,inline:c=!1,density:u,"data-testautoid":d,checked:p,indeterminate:m,...k}=e,f=(0,o.useRef)(null);(0,o.useImperativeHandle)(n,(()=>f.current),[]);const h=(0,l.M)(t||"jkl-checkbox",{generateSuffix:!t});return(0,o.useEffect)((()=>{f.current&&(f.current.indeterminate=!p&&!!m)}),[p,m]),o.createElement("div",{className:a()("jkl-checkbox",s,{"jkl-checkbox--inline":c,"jkl-checkbox--error":i}),"data-density":u},o.createElement("input",Object.assign({id:h,ref:f,className:"jkl-checkbox__input","data-testid":"jkl-checkbox-input","aria-invalid":i,type:"checkbox","data-testautoid":d,checked:p},k)),o.createElement("label",{htmlFor:h,className:"jkl-checkbox__label"},o.createElement("span",{className:"jkl-checkbox__mark"},o.createElement("span",{className:"jkl-checkbox__indeterminate-mark"}),o.createElement("span",{className:"jkl-checkbox__check-mark"})),o.createElement("span",{className:"jkl-checkbox__text"},r)))}));i.displayName="Checkbox"},29674:function(e,n,t){t.d(n,{_:function(){return o}});var l=t(26372),r=t.n(l),a=t(70079);const o=e=>{let{variant:n="small",density:t,srOnly:l,children:o,standAlone:i,htmlFor:s,className:c="",...u}=e;const d=r()("jkl-label",c,{["jkl-label--"+n]:n,"jkl-label--sr-only":l}),p=i?"label":"span";return!i&&s&&(s=void 0),a.createElement(p,Object.assign({},u,{className:d,htmlFor:s,"data-density":t}),o)}},73110:function(e,n,t){t.d(n,{A:function(){return c}});var l=t(46746),r=t(52762),a=t(11607),o=t(26372),i=t.n(o),s=t(70079);const c=e=>{let{id:n,helpLabel:t,errorLabel:o,label:c,labelType:u="help",density:d,className:p,srOnly:m,...k}=e;const f=o||t||c,h="help"===u||t&&!o,b="warning"===u||o,v="error"===u,g="success"===u,E=f?i()("jkl-form-support-label",p,{"jkl-form-support-label--sr-only":m,"jkl-form-support-label--help":h,"jkl-form-support-label--error":v,"jkl-form-support-label--warning":b,"jkl-form-support-label--success":g}):"jkl-dormant-form-support-label",j=f?k:{},y=v?l.P:g?r.t:a.a;return s.createElement("span",Object.assign({id:n,className:E},j,{"data-density":d}),s.createElement(y,{variant:"small",className:"jkl-form-support-label__icon"}),s.createElement("span",null,o||t||c))}},73917:function(e,n,t){t.d(n,{J:function(){return s}});var l=t(10188),r=t(26372),a=t.n(r),o=t(70079);function i(e,n){if(e)return{width:e};if(n){return{width:"calc("+(Math.min(n,40)+"ch")+" + "+"24px"+")"}}}const s=(0,o.forwardRef)(((e,n)=>{const{action:t,align:r="left","aria-invalid":s,className:c="",density:u,maxLength:d,style:p,type:m="text",unit:k,width:f,actionButton:h,...b}=e;return o.createElement("div",{className:"jkl-text-input-wrapper","data-invalid":s,style:{...p,...i(f,d)}},o.createElement("input",Object.assign({"aria-invalid":s,ref:n,className:a()("jkl-text-input__input",c,{"jkl-text-input__input--align-right":"right"===r}),maxLength:d,type:m},b)),k&&o.createElement("span",{className:"jkl-text-input__unit"},k),!t&&h&&o.cloneElement(h,{className:a()("jkl-text-input-action-button",h.props.className)}),t&&!h&&o.createElement(l.h,{density:u,className:a()("jkl-text-input-action-button",t.className),title:t.label,onClick:t.onClick,onFocus:t.onFocus,onBlur:t.onBlur,ref:t.buttonRef,type:t.type||"button"},t.icon))}));s.displayName="BaseInputField"},55208:function(e,n,t){t.d(n,{d:function(){return u}});var l=t(19794),r=t(26372),a=t.n(r),o=t(70079),i=t(79117),s=t(56189),c=t(5847);const u=e=>{let{content:n,triggerProps:t,...r}=e;const{0:u,1:d}=(0,o.useState)(!1);return o.createElement(i.u,Object.assign({onOpenChange:d,triggerOn:"click"},r),o.createElement(c.a,null,o.createElement("button",Object.assign({},t,{type:"button",className:a()("jkl-tooltip-question-button",null==t?void 0:t.className),"data-testid":"jkl-tooltip-question-button"}),o.createElement(l.U,{variant:"inherit",bold:u}),o.createElement("span",{className:"jkl-sr-only"},"Vis hjelpetekst"))),o.createElement(s._,null,n))}},79117:function(e,n,t){t.d(n,{nr:function(){return u},u:function(){return d}});var l=t(57579),r=t(88905),a=t(84256),o=t(26893),i=t(70079);const s=(0,i.createContext)(null),c=s.Provider,u=()=>{const e=(0,i.useContext)(s);if(null===e)throw new Error("Tooltip-komponentene kan kun brukes inne i <Tooltip />");return e},d=e=>{let{children:n,...t}=e;const s=(e=>{let{initialOpen:n=!1,placement:t="top",delay:s=250,triggerOn:c="hover",onOpenChange:u}=e;const{0:d,1:p}=(0,i.useState)(n),m=(0,i.useRef)(null),k=(0,i.useRef)(null),f=(0,l.YF)({open:d,onOpenChange:e=>{null==u||u(e),p(e)},placement:t,whileElementsMounted:r.Me,middleware:[(0,a.cv)(16),(0,a.RR)(),(0,a.uY)({padding:16}),(0,o.x7)({element:m,padding:8})]}),h=(0,l.qs)(f.context,{role:"tooltip"}),b=(0,l.bQ)(f.context),v=(0,l.eS)(f.context,{enabled:"click"===c}),g=(0,l.XI)(f.context,{enabled:"hover"===c,delay:d?0:s}),E=(0,l.KK)(f.context,{enabled:"click"!==c||d}),j=(0,l.NI)([b,E,h,v,g]);return{triggerOn:c,isOpen:d,setOpen:p,arrowElement:m,...f,refs:{...f.refs,description:k,setDescription:e=>k.current=e},...j}})(t);return i.createElement(c,{value:s},n)}},56189:function(e,n,t){t.d(n,{_:function(){return p}});var l=t(57579),r=t(17050),a=t(3438),o=t(45901),i=t(26372),s=t.n(i),c=t(70079),u=t(79117);function d(e,n){switch(void 0===n&&(n=0),e){case"top":default:return"0 "+n+"px";case"left":return n+"px 0";case"bottom":return"0 "+-n+"px";case"right":return-n+"px 0"}}const p=(0,c.forwardRef)((function(e,n){let{className:t,children:i,...p}=e;const{context:m,triggerOn:k,arrowElement:f,getFloatingProps:h,placement:b,floatingStyles:v,refs:g}=(0,u.nr)(),E=(0,l.qq)([n,g.setFloating]),j=(0,a.M)("jkl-tooltip-content"),{prefersReducedMotion:y}=(0,o.c)(),{isMounted:x,styles:N}=(0,l.Y_)(m,{duration:{open:y?0:250,close:y?0:150},initial:e=>{let{side:n}=e;return{opacity:0,translate:d(n,5)}},open:e=>{let{side:n}=e;return{opacity:1,translate:d(n,0)}},close:e=>{let{side:n}=e;return{opacity:0,translate:d(n,-5)}}}),{density:M,theme:w}=(0,r.H)(g.reference.current);return c.createElement(l.ll,null,"hover"===k&&c.createElement("span",{ref:g.setDescription,hidden:!0,key:j+"-trigger"},i),x&&c.createElement("span",{className:"jkl",key:j+"-wrapper"},c.createElement("span",Object.assign({key:j,ref:E,"data-placement":b,"aria-live":"click"===k?"assertive":void 0,"data-theme":w,"data-layout-density":M,className:s()("jkl-tooltip-content",t)},h({...p,id:j}),{style:{...v,...N}}),i,c.createElement(l.Y$,{context:m,ref:f,width:24,height:12,fill:"var(--background-color)"}))))}))},5847:function(e,n,t){t.d(n,{a:function(){return s}});t(31369);var l=t(57579),r=t(26372),a=t.n(r),o=t(70079),i=t(79117);const s=(0,o.forwardRef)((function(e,n){var t,r;let{children:s,className:c,...u}=e;const{isOpen:d,getReferenceProps:p,refs:m,triggerOn:k}=(0,i.nr)(),f=s.ref,h=(0,l.qq)([f,m.setReference,n]),b=[null===(t=m.reference.current)||void 0===t?void 0:t.textContent,null===(r=m.description.current)||void 0===r?void 0:r.textContent].map((e=>null==e?void 0:e.replaceAll(/[\ue003-\uf8aa]/g,""))).filter(Boolean).join(". ");return o.isValidElement(s)?o.cloneElement(s,p({ref:h,"aria-label":b,...s.props,...u,className:a()(s.props.className,c),"data-tooltip-shown":d,style:{...s.props.style},tabIndex:"click"===k?0:void 0})):o.createElement("button",Object.assign({"data-tooltip-shown":d},p({className:a()(c,"jkl-tooltip-trigger"),type:"button",ref:h,"aria-label":b,...u})),s)}))},17050:function(e,n,t){t.d(n,{H:function(){return l}});const l=e=>{if(!e)return{};const n=getComputedStyle(e);return{theme:parseInt(n.getPropertyValue("--jkl-background-color").replace("#",""),16)<8388607.5?"dark":"light",density:'"compact"'===n.getPropertyValue("--jkl-density")?"compact":"comfortable"}}},19794:function(e,n,t){t.d(n,{U:function(){return a}});var l=t(70079),r=t(31787);const a=e=>l.createElement(r.J,{...e},"");a.displayName="QuestionIcon"}}]);