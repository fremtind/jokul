"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7213],{84540:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return F},Head:function(){return V},default:function(){return O}});var l=t(64717),a=t(92379),r=t(57068),i=t(74571),o=t(48467),s=t(87951),c=t(41046),u=t(99767),d=t(38475),m=t(80324),p=t.n(m),k=t(82707),b=t(72363);const h=["className","children","density","errorLabel","helpLabel","inline","label","labelProps","render","supportLabelProps","tooltip","id"],f=(0,a.forwardRef)(((e,n)=>{const{className:t,density:l,errorLabel:r,helpLabel:i,inline:o,label:s,labelProps:c,render:m,supportLabelProps:f,tooltip:v,id:g}=e,E=(0,u.Z)(e,h),j=(0,d.M)(g||"jkl-input",{generateSuffix:!g}),y=(0,d.M)("jkl-support-label"),x=r||i,N=r?"error":i?"help":void 0,L={"aria-describedby":x?y:void 0,"aria-invalid":!!Boolean(r)||void 0,id:j},M=m?()=>m(L):()=>{const n=a.Children.toArray(e.children)[0];if(a.isValidElement(n))return a.cloneElement(n,Object.assign({},L,n.props))};return a.createElement("div",Object.assign({ref:n,className:p()(t,"jkl-input-group",{"jkl-input-group--inline":o}),"data-density":l},E),a.createElement(k._,Object.assign({standAlone:!0,htmlFor:j,srOnly:o},c,{style:Object.assign({whiteSpace:v?"nowrap":void 0},null==c?void 0:c.style),density:l}),v?a.createElement(a.Fragment,null,a.createElement("span",{style:{whiteSpace:"normal"}},s)," ",v):s),M(),a.createElement(b.A,Object.assign({srOnly:o},f,{label:x,labelType:N,id:y,density:l})))}));f.displayName="InputGroup";const v={boolProps:["Med hjelpetekst","Med feil","Med tooltip"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},g=e=>{let{boolValues:n,choiceValues:t}=e;const l=null!=n&&n["Med hjelpetekst"]?"Fødselsnummer består av 11 siffer":void 0,r=null!=n&&n["Med feil"]?a.createElement(a.Fragment,null,"Du må fylle ut fødelsnummer eller D-nummer. Se"," ",a.createElement(o.r,{href:""},"guiden vår")," hvis du er usikker på hvordan du finner D-nummer."):void 0,i={variant:null==t?void 0:t.Variant},u=null!=n&&n["Med tooltip"]?a.createElement(c.d,{content:a.createElement(a.Fragment,null,"Du må fylle ut fødelsnummer eller D-nummer. Se"," ",a.createElement(o.r,{href:""},"guiden vår")," hvis du er usikker på hvordan du finner D-nummer.")}):void 0;return a.createElement(f,{label:"Fødselsnummer",errorLabel:r,helpLabel:l,labelProps:i,tooltip:u},a.createElement(s.J,null))};const E=e=>{let{boolValues:n}=e;return'\n<InputGroup\n    label="Fødselsnummer"\n    helpLabel='+(null!=n&&n["Med hjelpetekst"]?'"Fødselsnummer består av 11 siffer"':"{undefined}")+"\n    errorLabel="+(null!=n&&n["Med feil"]?'<>\n            Du må fylle ut fødelsnummer eller D-nummer. Se <Link href="">guiden vår</Link> hvis du er usikker på hvordan\n            du finner D-nummer.\n        </>':"{undefined}")+(null!=n&&n["Med tooltip"]?'\n    tooltip={\n        <PopupTip\n            content={\n                <>\n                    Du må fylle ut fødelsnummer eller D-nummer. Se{" "}\n                    <Link href="">guiden vår</Link> hvis du er usikker på\n                    hvordan du finner D-nummer.\n                </>\n            }\n        />\n    }':"")+"\n>\n    <BaseTextInput />\n</InputGroup>\n"};function j(e){const n=Object.assign({p:"p",ul:"ul",li:"li",a:"a",h2:"h2"},(0,l.ah)(),e.components),{Ingress:t,ComponentExample:o}=n;return o||x("ComponentExample",!0),t||x("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(t,null,a.createElement(n.p,null,"Skjemafeltene våre har noen felles egenskaper. For å unngå duplisering av\nkode har vi laget en pakke for delte komponenter.")),"\n",a.createElement(n.p,null,"Pakken har fire komponenter:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#fieldgroup"},"FieldGroup")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#supportlabel"},"SupportLabel")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#inputgroup"},"InputGroup")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#label"},"Label")),"\n"),"\n",a.createElement(n.h2,null,"FieldGroup"),"\n",a.createElement(o,{title:"FieldGroup",component:r.oz,knobs:r.Ts,codeExample:r.ju}),"\n",a.createElement(n.p,null,"FieldGroup er en komponent som brukes for å gruppere skjemafelt under en felles label, med mulighet for tooltip og hjelpetekst."),"\n",a.createElement(n.p,null,"Der du sannsynligvis vil støte på denne er i forbindelse med en liste med ",a.createElement(n.a,{href:"/preview/4597-code-example-block/komponenter/checkbox"},"Checkbox"),", men den kan brukes med alle skjemafelt hvor du ønsker en felles label."),"\n",a.createElement(n.h2,null,"InputGroup"),"\n",a.createElement(o,{title:"InputGroup",component:g,codeExample:E,knobs:v}),"\n",a.createElement(n.p,null,"InputGroup koordinerer plassering av Label, ",a.createElement(n.a,{href:"#supportlabel"},"SupportLabel")," og ",a.createElement(n.a,{href:"/preview/4597-code-example-block/komponenter/tooltip"},"Tooltip")," i forhold til skjemafeltet."),"\n",a.createElement(n.p,null,"Annet enn når du importerer CSS skal du vanligvis ikke trenge forholde deg til denne komponenten. InputGroup er mest tiltenkt intern bruk i Jøkul."),"\n",a.createElement(n.h2,null,"SupportLabel"),"\n",a.createElement(o,{title:"SupportLabel",component:i.aG,knobs:{boolProps:[{prop:"Med hjelpetekst",defaultValue:!0},"Med feil"]},codeExample:i.yg}),"\n",a.createElement(n.p,null,"SupportLabel er en komponent som brukes for å vise hjelpetekst og feilmeldinger. Som oftest vil du bruke denne via ",a.createElement(n.a,{href:"#inputgroup"},"InputGroup"),", men det finnes unntak, slik som enkeltstående ",a.createElement(n.a,{href:"/preview/4597-code-example-block/komponenter/checkbox#enkeltst%C3%A5ende"},"Checkbox"),"."),"\n",a.createElement(n.h2,null,"Label"),"\n",a.createElement(n.p,null,"Label er tilknyttet et skjemafelt via en InputGroup, eller flere skjemafelter via en FieldGroup."))}var y=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(j,e)):j(e)};function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var N=t(75482),L=t(96036),M=t(59001),_=t(65458),C=t(79379);const V=e=>{let{pageContext:n}=e;return a.createElement(L.p,{title:n.title})},F=e=>{let{location:n,data:t,pageContext:l,children:r}=e;const{frontmatter:i}=t.page,{types:o}=l;return a.createElement(C.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(_.M1,Object.assign({},i,{versions:l.versions})),n.pathname.includes("komponenter")&&a.createElement(M.c,{variant:"komponent",component:i.title}),a.createElement(_.w5,i),r,o&&a.createElement(N.l,{types:o}))};function O(e){return a.createElement(F,e,a.createElement(y,e))}},57068:function(e,n,t){t.d(n,{Ts:function(){return o},ju:function(){return c},oz:function(){return s}});var l=t(49995),a=t(92379),r=t(41046),i=t(49143);const o={boolProps:["Med hjelpetekst","Med feil","Med tooltip","Indeterminate state"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},s=e=>{let{boolValues:n,choiceValues:t}=e;const[o,s]=a.useState(!1),[c,u]=a.useState(!1),[d,m]=a.useState(!1),p=null!=t&&t.Variant?t.Variant:"medium",k=null==n?void 0:n["Med hjelpetekst"],b=null==n?void 0:n["Med feil"],h=null==n?void 0:n["Indeterminate state"],f=null!=n&&n["Med tooltip"]?a.createElement(r.d,{content:"Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed."}):void 0;return a.createElement(l.N,{legend:"Hvordan kan vi kontakte deg?",labelProps:{variant:p},helpLabel:k?"Vi sender viktige beskjeder til deg med de valgte metodene":void 0,errorLabel:b?"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder":void 0,tooltip:f},a.createElement(i.X,{name:"checklist",value:"phone",checked:o,invalid:b,onChange:()=>s(!o),indeterminate:h},"Telefon"),a.createElement(i.X,{name:"checklist",value:"email",checked:c,invalid:b,onChange:()=>u(!c),indeterminate:h},"E-post"),a.createElement(i.X,{name:"checklist",value:"snailmail",checked:d,invalid:b,onChange:()=>m(!d),indeterminate:h},"Brev"))},c=e=>{let{boolValues:n,choiceValues:t}=e;const l=null==n?void 0:n["Med hjelpetekst"],a=null==n?void 0:n["Med feil"];return'\n<FieldGroup\n    legend="Hvordan kan vi kontakte deg?"\n    labelProps={{ variant: "'+((null==t?void 0:t.Variant)||"medium")+'" }}\n    helpLabel='+(l?'"Vi sender viktige beskjeder til deg med de valgte metodene"':"{undefined}")+"\n    errorLabel="+(a?'"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder"':"{undefined}")+(null!=n&&n["Med tooltip"]?'\n    tooltip={\n        <PopupTip content="Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed." />\n    }':"")+'\n>\n    <Checkbox\n        name="checklist"\n        value="phone"\n        invalid={'+a+'}\n    >\n        Telefon\n    </Checkbox>\n    <Checkbox\n        name="checklist"\n        value="email"\n        invalid={'+a+'}\n    >\n        E-post\n    </Checkbox>\n    <Checkbox\n        name="checklist"\n        value="snailmail"\n        invalid={'+a+"}\n    >\n        Brev\n    </Checkbox>\n</FieldGroup>\n"}},74571:function(e,n,t){t.d(n,{Ru:function(){return o},aG:function(){return s},yg:function(){return c}});var l=t(69314),a=t(38475),r=t(92379),i=t(49143);const o={boolProps:["Med hjelpetekst","Med feil"]},s=e=>{let{boolValues:n}=e;const t=(0,a.M)(),[o,s]=r.useState(!1),c=null==n?void 0:n["Med hjelpetekst"],u=null==n?void 0:n["Med feil"];let d;return c&&(d="Vedlegget har viktig informasjon om forsikringen din"),u&&(d="Du må bekrefte at du har lest vedlegget. Det har viktig informasjon om forsikringen din."),r.createElement("div",null,r.createElement(i.X,{"aria-describedby":t,name:"confirmation",value:"read",checked:o,invalid:u,onChange:()=>s(!o)},"Jeg har lest vedlegget"),r.createElement(l.A,{id:t,label:d,labelType:u?"error":"help"}))},c=e=>{let{boolValues:n,choiceValues:t}=e;return'\n<div>\n  <Checkbox\n    aria-describedby="label-id"\n    name="confirmation"\n    value="read"\n    invalid={error}\n  >\n    Telefon\n  </Checkbox>\n  <SupportLabel\n    id="label-id"\n    label={label}\n    labelType={error ? "error" : "help"}\n  />\n</div>\n'}},49143:function(e,n,t){t.d(n,{X:function(){return c}});var l=t(99767),a=t(38475),r=t(80324),i=t.n(r),o=t(92379);const s=["id","children","invalid","className","inline","density","data-testautoid","checked","indeterminate"],c=(0,o.forwardRef)(((e,n)=>{const{id:t,children:r,invalid:c,className:u,inline:d=!1,density:m,"data-testautoid":p,checked:k,indeterminate:b}=e,h=(0,l.Z)(e,s),f=(0,o.useRef)(null);(0,o.useImperativeHandle)(n,(()=>f.current),[]);const v=(0,a.M)(t||"jkl-checkbox",{generateSuffix:!t});return(0,o.useEffect)((()=>{f.current&&(f.current.indeterminate=!k&&!!b)}),[k,b]),o.createElement("div",{className:i()("jkl-checkbox",u,{"jkl-checkbox--inline":d,"jkl-checkbox--error":c}),"data-density":m},o.createElement("input",Object.assign({id:v,ref:f,className:"jkl-checkbox__input","data-testid":"jkl-checkbox-input","aria-invalid":c,type:"checkbox","data-testautoid":p,checked:k},h)),o.createElement("label",{htmlFor:v,className:"jkl-checkbox__label"},o.createElement("span",{className:"jkl-checkbox__mark"},o.createElement("span",{className:"jkl-checkbox__indeterminate-mark"}),o.createElement("span",{className:"jkl-checkbox__check-mark"})),o.createElement("span",{className:"jkl-checkbox__text"},r)))}));c.displayName="Checkbox"},82707:function(e,n,t){t.d(n,{_:function(){return s}});var l=t(99767),a=t(80324),r=t.n(a),i=t(92379);const o=["variant","density","srOnly","children","standAlone","htmlFor","className"],s=e=>{let{variant:n="small",density:t,srOnly:a,children:s,standAlone:c,htmlFor:u,className:d=""}=e,m=(0,l.Z)(e,o);const p=r()("jkl-label",d,{["jkl-label--"+n]:n,"jkl-label--sr-only":a}),k=c?"label":"span";return!c&&u&&(u=void 0),i.createElement(k,Object.assign({},m,{className:p,htmlFor:u,"data-density":t}),s)}},72363:function(e,n,t){t.d(n,{A:function(){return d}});var l=t(99767),a=t(10056),r=t(92541),i=t(64160),o=t(80324),s=t.n(o),c=t(92379);const u=["id","helpLabel","errorLabel","label","labelType","density","className","srOnly"],d=e=>{let{id:n,helpLabel:t,errorLabel:o,label:d,labelType:m="help",density:p,className:k,srOnly:b}=e,h=(0,l.Z)(e,u);const f=o||t||d,v="help"===m||t&&!o,g="warning"===m||o,E="error"===m,j="success"===m,y=f?s()("jkl-form-support-label",k,{"jkl-form-support-label--sr-only":b,"jkl-form-support-label--help":v,"jkl-form-support-label--error":E,"jkl-form-support-label--warning":g,"jkl-form-support-label--success":j}):"jkl-dormant-form-support-label",x=f?h:{},N=E?a.P:j?r.t:i.a;return c.createElement("span",Object.assign({id:n,className:y},x,{"data-density":p}),c.createElement(N,{variant:"small",className:"jkl-form-support-label__icon"}),c.createElement("span",null,o||t||d))}},87951:function(e,n,t){t.d(n,{J:function(){return u}});var l=t(99767),a=t(55086),r=t(80324),i=t.n(r),o=t(92379);const s=["action","align","aria-invalid","className","density","maxLength","style","type","unit","width","actionButton"];function c(e,n){if(e)return{width:e};if(n){return{width:"calc("+(Math.min(n,40)+"ch")+" + "+"24px"+")"}}}const u=(0,o.forwardRef)(((e,n)=>{const{action:t,align:r="left","aria-invalid":u,className:d="",density:m,maxLength:p,style:k,type:b="text",unit:h,width:f,actionButton:v}=e,g=(0,l.Z)(e,s);return o.createElement("div",{className:"jkl-text-input-wrapper","data-invalid":u,style:Object.assign({},k,c(f,p))},o.createElement("input",Object.assign({"aria-invalid":u,ref:n,className:i()("jkl-text-input__input",d,{"jkl-text-input__input--align-right":"right"===r}),maxLength:p,type:b},g)),h&&o.createElement("span",{className:"jkl-text-input__unit"},h),!t&&v&&o.cloneElement(v,{className:i()("jkl-text-input-action-button",v.props.className),"data-theme":u?"light":void 0}),t&&!v&&o.createElement(a.h,{"data-theme":u?"light":void 0,density:m,className:i()("jkl-text-input-action-button",t.className),title:t.label,onClick:t.onClick,onFocus:t.onFocus,onBlur:t.onBlur,ref:t.buttonRef,type:t.type||"button"},t.icon))}));u.displayName="BaseInputField"},41046:function(e,n,t){t.d(n,{d:function(){return m}});var l=t(99767),a=t(58990),r=t(80324),i=t.n(r),o=t(92379),s=t(16965),c=t(6854),u=t(27547);const d=["content","triggerProps"],m=e=>{let{content:n,triggerProps:t}=e,r=(0,l.Z)(e,d);const{0:m,1:p}=(0,o.useState)(!1);return o.createElement(s.u,Object.assign({onOpenChange:p,triggerOn:"click"},r),o.createElement(u.a,null,o.createElement("button",Object.assign({},t,{type:"button",className:i()("jkl-tooltip-question-button",null==t?void 0:t.className),"data-testid":"jkl-tooltip-question-button"}),o.createElement(a.U,{variant:"inherit",bold:m}),o.createElement("span",{className:"jkl-sr-only"},"Vis hjelpetekst"),o.createElement("span",{className:"jkl-sr-only","aria-live":"polite","data-testid":"popuptip-content"},m?n:""))),o.createElement(c._,{"data-ispopup":!0},n))}}}]);