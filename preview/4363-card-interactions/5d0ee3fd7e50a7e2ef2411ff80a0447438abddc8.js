"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2771],{34927:function(e,t,n){n.d(t,{IX:function(){return f},hW:function(){return m},cN:function(){return p}});var l=n(70079),a=n(55208),r=n(16151),o=n(68998),s=n(81159),i=n(26372),u=n.n(i);const c=(0,l.forwardRef)(((e,t)=>{const{label:n,className:a,density:i,errorLabel:c,helpLabel:d,inline:p,invalid:v,items:f,labelProps:m,placeholder:b="Velg",selectClassName:k,supportLabelProps:g,tooltip:h,value:y,width:E,...j}=e,w={label:n,density:i,errorLabel:c,helpLabel:d,labelProps:m,inline:p,supportLabelProps:g,tooltip:h};return l.createElement(s.B,Object.assign({},w,{"data-testid":"jkl-select",className:u()("jkl-select",a,{"jkl-select--inline":p,"jkl-select--invalid":!!c||v}),render:e=>l.createElement("div",{className:"jkl-select__outer-wrapper",style:{width:E}},l.createElement("select",Object.assign({ref:t,className:u()("jkl-select__button",k,{"jkl-select__button--active-value":!!y}),defaultValue:y?void 0:"",value:y},e,j),b&&!y&&l.createElement("option",{disabled:!0,value:""},b),f.map(r.Y).map((e=>l.createElement("option",{"data-testid":"jkl-select__option",className:"jkl-select__option",key:e.value,value:e.value},e.label)))),l.createElement(o.K,{variant:"medium",pointingDown:!0,className:"jkl-select__arrow"}))}))}));c.displayName="NativeSelect";var d=n(49467);const p={boolProps:["Native","Med hjelpetekst","Med feil","Med tooltip","Med søk","Med sekundærtekst"],choiceProps:[{name:"Maks. viste valg",values:["3","Default (5)","8","Mange"],defaultValue:1},{name:"Variant",values:["small","medium","large"],defaultValue:0}]},v=e=>{switch(e){case"3":return 3;case"Default (5)":return 5;case"8":return 8;case"Mange":return 100;default:return}},f=e=>{let{boolValues:t,choiceValues:n}=e;const r=t&&t.Native,o=r?c:d.P,s=[{value:"1",label:"Google Pixel",description:null!=t&&t["Med sekundærtekst"]?"Gjelder også Nexus-serien":void 0},{value:"2",label:"Apple"},{value:"3",label:"Samsung"},{value:"4",label:"LG"},{value:"5",label:"Huawei"},{value:"6",label:"OnePlus"},{value:"7",label:"XiaoMi"},{value:"8",label:"Nokia"},{value:"9",label:"Sony"},{value:"10",label:"Doro"}],{0:i,1:u}=(0,l.useState)(""),p=t&&t["Med feil"]?"Du må velge merket til telefonen, for eksempel Apple.":void 0,f=t&&t["Med hjelpetekst"]?"Med merke mener vi for eksempel Apple eller Samsung.":void 0,m=n&&n.Variant,b=t&&t["Med søk"],k=v(null==n?void 0:n["Maks. viste valg"]),g=null!=t&&t["Med tooltip"]?l.createElement(a.d,{content:"Vi spør om merket på telefonen for å finne riktig reperatør for deg."}):void 0;return l.createElement(o,Object.assign({id:"produsent",name:"produsent",label:"Hvilket merke er telefonen?",labelProps:{variant:m},items:s,value:i,helpLabel:f,errorLabel:p,tooltip:g,onChange:e=>{u(e.target.value),console.log("Change: ",e)},searchable:b?(e,t)=>"object"==typeof t?t.value.includes(e):t.includes(t):void 0,onFocus:e=>{console.log("Focus: ",e)},onBlur:e=>{console.log("Blur: ",e)}},r?{}:{maxShownOptions:k}))},m=e=>{let{boolValues:t,choiceValues:n}=e;return"\n<"+(null!=t&&t.Native?"NativeSelect":"Select")+'\n    ref={selectRef}\n    id="produsent"\n    name="produsent"\n    variant="'+(null==n?void 0:n.Variant)+'"\n    label="Hvilket merke er telefonen?"\n    helpLabel='+(null!=t&&t["Med hjelpetekst"]?'"Hjelpsom beskjed"':"{undefined}")+"\n    errorLabel="+(null!=t&&t["Med feil"]?'"Beskrivende feilmelding"':"{undefined}")+(null!=t&&t["Med tooltip"]?'\n    tooltip={\n        <PopupTip content="Vi spør om merket på telefonen for å finne riktig reperatør for deg." />\n    }':"")+'\n    items={[\n        { value: "google", label: "Google og noen flere" },\n        { value: "apple", label: "Apple" },\n        { value: "samsung", label: "Samsung" },\n        { value: "LG", label: "LG" },\n    ]}\n    value={value}\n    onChange={setValue}\n    searchable={'+!(null==t||!t["Med søk"])+"}\n    onFocus={onFocus}\n    onBlur={onBlur}\n    maxShownOptions={"+v(null==n?void 0:n["Maks. viste valg"])+"}\n/>\n"}},49467:function(e,t,n){n.d(t,{P:function(){return b}});var l=n(16151),a=n(68998),r=n(81159),o=n(3438),s=n(96820),i=n(84490),u=n(60314),c=n(26372),d=n.n(c),p=n(70079);function v(e){return void 0===e&&(e=""),e.toLowerCase().replace(/[\W_]+/g,"")}function f(e,t){var n,l;let a=null;t&&(a=e.querySelector('[aria-selected="true"]:not([hidden])')),t&&a||(a=e.querySelector('[role="option"]')),null===(n=a)||void 0===n||n.focus(),e.scrollTop=(null===(l=a)||void 0===l?void 0:l.offsetTop)||0}const m=()=>{},b=(0,p.forwardRef)(((e,t)=>{const{id:n,name:c,items:b,value:k,label:g,labelProps:h,onChange:y,onBlur:E,onFocus:j,className:w,helpLabel:_,errorLabel:N,invalid:C,searchable:M=!1,inline:P=!1,defaultPrompt:x="Velg",density:O,width:L,maxShownOptions:S=5,style:D,tooltip:V,...R}=e,F=(0,o.M)(n||"jkl-select",{generateSuffix:!n}),B=F+"_label",T=F+"_button",q=F+"_search-input",{0:K,1:A}=(0,p.useState)(!1),I=(0,p.useCallback)((()=>{A((e=>!e))}),[]),G=Boolean(M),H=G&&K,{0:Y,1:U}=(0,p.useState)(""),X=(0,p.useCallback)((e=>!!e.label.toLowerCase().includes(Y.toLowerCase())||"function"==typeof M&&M(Y,e)),[M,Y]),z=(0,p.useMemo)((()=>b.map(l.Y).map((e=>{const t=!G||""===Y||X(e);return{...e,visible:t}}))),[b,G,Y,X]),Q=(0,p.useMemo)((()=>void 0!==k&&b.some((e=>"string"==typeof e?e===k:e.value===k))),[k,b]),{0:W,1:J}=(0,p.useState)(Q&&void 0!==k?k:""),$=""!==W,Z=(0,p.useMemo)((()=>{var e;return(null===(e=z.find((e=>e.value===W)))||void 0===e?void 0:e.label)||x}),[z,W,x]),ee=(0,p.useRef)(null),te=(0,p.useCallback)((e=>{ee.current=e,t&&("function"==typeof t?t(e):t.current=e),e&&J(e.value)}),[ee,t]),ne=(0,s.z)(k);(0,p.useEffect)((()=>{k!==ne&&J(void 0!==k&&Q?k:"")}),[J,k,ne,Q]);const le=(0,p.useCallback)((e=>{const t=e.value;U(""),J(t),I()}),[U,J,I]),ae=(0,s.z)(W);(0,p.useEffect)((()=>{void 0!==ae&&ae!==W&&W!==k&&(y&&y({type:"change",target:{name:c,value:W}}),ee.current&&ee.current.dispatchEvent(new Event("change",{bubbles:!0})))}),[y,c,k,W,ae]);const re=(0,p.useRef)(null),oe=(0,p.useRef)(!1),se=(0,p.useRef)(null),ie=(0,p.useRef)(null),ue=(0,p.useCallback)(((e,t)=>{if(e&&!G){const e=t.current;e&&f(e,W)}else e?se.current&&se.current.focus():oe.current&&ie.current&&ie.current.focus()}),[G,W]),[ce]=(0,i.v)(K,{onFirstVisible:ue,onTransitionEnd:ue});(0,u.c)({ref:ce});const de=(0,p.useCallback)((()=>{var e;(G&&U(""),E)&&(E({type:"blur",target:{name:c,value:W}}),null===(e=ee.current)||void 0===e||e.dispatchEvent(new Event("focusout",{bubbles:!0})));oe.current=!1,A(!1)}),[E,U,A,G,c,W]),pe=(0,p.useCallback)((e=>{const t=re.current;t&&t.contains(e.relatedTarget)||de()}),[de]),ve=(0,p.useCallback)((()=>{oe.current||(j&&j({type:"change",target:{name:c,value:W}}),oe.current=!0)}),[j,W,c]),fe=(0,p.useCallback)((e=>{e.target.focus({preventScroll:!0})}),[]);(0,p.useEffect)((()=>{const e=ee.current,t=se.current,n=ie.current,l=re.current;return null==e||e.addEventListener("focus",(()=>{H?null==t||t.focus():null==n||n.focus()})),null==e||e.addEventListener("blur",(function(e){l&&l.contains(e.relatedTarget)&&e.preventDefault()})),()=>{null==e||e.removeEventListener("focus",(()=>{H?null==t||t.focus():null==n||n.focus()})),null==e||e.removeEventListener("blur",(function(e){l&&l.contains(e.relatedTarget)&&e.preventDefault()}))}}),[H]);const me=(0,p.useCallback)((e=>{"ArrowDown"!==e.key&&" "!==e.key||K?"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),A(!1)):(e.preventDefault(),e.stopPropagation(),A(!0))}),[A,K]),be=(0,p.useCallback)((e=>{if("ArrowDown"===e.key){e.preventDefault(),e.stopPropagation();const t=ce.current;t&&f(t,G?void 0:W)}else if("Escape"===e.key)e.preventDefault(),e.stopPropagation(),A(!1);else if("Tab"!==e.key||e.shiftKey)"Enter"===e.key&&K&&(e.preventDefault(),e.stopPropagation());else{const t=ce.current;t&&(e.preventDefault(),e.stopPropagation(),f(t,W))}}),[A,ce,W,G,K]),ke=(0,p.useCallback)((e=>{if("Tab"===e.key)e.preventDefault(),e.stopPropagation(),e.shiftKey&&se.current?se.current.focus():ie.current&&(J(e.currentTarget.value),A(!1),ie.current.focus());else if("ArrowUp"===e.key&&ce.current&&se.current){const t=ce.current.querySelector('[role="option"]:not([hidden])');e.currentTarget.id===(null==t?void 0:t.id)&&se.current&&se.current.focus()}}),[A,ce]);return(0,p.useEffect)((()=>{const e=e=>{"Escape"===e.key&&K&&A(!1)};return"undefined"!=typeof window&&K&&window.addEventListener("keydown",e),()=>{"undefined"!=typeof window&&window.removeEventListener("keydown",e)}}),[A,K]),p.createElement(p.Fragment,null,p.createElement("select",{name:c,tabIndex:-1,"data-testid":"jkl-native-select",className:"jkl-sr-only","aria-hidden":!0,ref:te,value:W,onChange:m},p.createElement("option",{value:""})," ",z.map((e=>p.createElement("option",{key:F+"-opt-"+e.value,hidden:!e.visible,value:e.value},e.label)))),p.createElement(r.B,Object.assign({ref:re,"data-testid":"jkl-select",className:d()("jkl-select",w,{"jkl-select--inline":P,"jkl-select--open":K&&z.some((e=>e.visible)),"jkl-select--no-value":!$,"jkl-select--invalid":!!N||C}),tooltip:V&&p.isValidElement(V)?p.cloneElement(V,{triggerProps:{...V.props.triggerProps,onFocus:e=>{var t,n;null===(t=V.props.triggerProps)||void 0===t||null===(n=t.onFocus)||void 0===n||n.call(t,e),de()}}}):null},R,{id:G?q:T,style:{"--jkl-select-max-shown-options":S,...D},density:O,label:g,labelProps:{id:B,srOnly:P,...h,htmlFor:G?q:T},helpLabel:_,errorLabel:N,render:e=>{let{"aria-invalid":t,...n}=e;return p.createElement("div",{className:"jkl-select__outer-wrapper",style:{width:L}},G&&p.createElement("input",Object.assign({},n,{"aria-invalid":t,id:q,hidden:!H,ref:se,placeholder:"Søk",value:Y,onChange:e=>U(e.target.value),"data-testid":"jkl-select__search-input",className:"jkl-select__search-input","aria-autocomplete":"list","aria-activedescendant":$?F+"__"+v(W):void 0,"aria-controls":F,"aria-expanded":K,role:"combobox",onKeyDown:be,onBlur:pe,onFocus:ve,onClick:e=>{e.stopPropagation()}})),p.createElement("button",Object.assign({"aria-invalid":t},n,{id:T,ref:ie,hidden:H,type:"button",name:c+"-btn",className:d()("jkl-select__button",{"jkl-select__button--active-value":!!W}),"data-testid":"jkl-select__button","aria-label":(Z||"Velg")+","+g,"aria-expanded":K,"aria-controls":F,onBlur:pe,onFocus:ve,onKeyDown:me,onClick:I,onMouseDown:e=>{var t;e.preventDefault(),null===(t=ie.current)||void 0===t||t.focus()}}),Z),p.createElement("div",{id:F,ref:ce,role:"listbox",className:"jkl-select__options-menu",hidden:!K||z.every((e=>!e.visible)),"aria-labelledby":B,tabIndex:-1,"data-focus":"controlled"},z.map(((e,t)=>e.visible?p.createElement("button",{key:F+"-"+e.value,hidden:!e.visible,type:"button",id:F+"__"+v(e.value),className:"jkl-select__option","data-testid":"jkl-select__option","aria-selected":e.value===W,role:"option",value:e.value,"data-testautoid":"jkl-select__option-"+t,onBlur:pe,onFocus:ve,onKeyDown:ke,onClick:t=>{t.preventDefault(),le(e)},onMouseOver:fe},e.label,e.description?p.createElement("span",{className:"jkl-select__option-description"},e.description):null):null))),p.createElement(a.K,{variant:"medium",pointingDown:!K,className:"jkl-select__arrow"}))}})))}));b.displayName="Select"},55208:function(e,t,n){n.d(t,{d:function(){return c}});var l=n(19794),a=n(26372),r=n.n(a),o=n(70079),s=n(79117),i=n(56189),u=n(5847);const c=e=>{let{content:t,triggerProps:n,...a}=e;const{0:c,1:d}=(0,o.useState)(!1);return o.createElement(s.u,Object.assign({onOpenChange:d,triggerOn:"click"},a),o.createElement(u.a,null,o.createElement("button",Object.assign({},n,{type:"button",className:r()("jkl-tooltip-question-button",null==n?void 0:n.className),"data-testid":"jkl-tooltip-question-button"}),o.createElement(l.U,{variant:"inherit",bold:c}),o.createElement("span",{className:"jkl-sr-only"},"Vis hjelpetekst"))),o.createElement(i._,null,t))}},79117:function(e,t,n){n.d(t,{nr:function(){return c},u:function(){return d}});var l=n(57579),a=n(88905),r=n(84256),o=n(26893),s=n(70079);const i=(0,s.createContext)(null),u=i.Provider,c=()=>{const e=(0,s.useContext)(i);if(null===e)throw new Error("Tooltip-komponentene kan kun brukes inne i <Tooltip />");return e},d=e=>{let{children:t,...n}=e;const i=(e=>{let{initialOpen:t=!1,placement:n="top",delay:i=250,triggerOn:u="hover",onOpenChange:c}=e;const{0:d,1:p}=(0,s.useState)(t),v=(0,s.useRef)(null),f=(0,s.useRef)(null),m=(0,l.YF)({open:d,onOpenChange:e=>{null==c||c(e),p(e)},placement:n,whileElementsMounted:a.Me,middleware:[(0,r.cv)(16),(0,r.RR)(),(0,r.uY)({padding:16}),(0,o.x7)({element:v,padding:8})]}),b=(0,l.qs)(m.context,{role:"tooltip"}),k=(0,l.bQ)(m.context),g=(0,l.eS)(m.context,{enabled:"click"===u}),h=(0,l.XI)(m.context,{enabled:"hover"===u,delay:d?0:i}),y=(0,l.KK)(m.context,{enabled:"click"!==u||d}),E=(0,l.NI)([k,y,b,g,h]);return{triggerOn:u,isOpen:d,setOpen:p,arrowElement:v,...m,refs:{...m.refs,description:f,setDescription:e=>f.current=e},...E}})(n);return s.createElement(u,{value:i},t)}},56189:function(e,t,n){n.d(t,{_:function(){return p}});var l=n(57579),a=n(17050),r=n(3438),o=n(45901),s=n(26372),i=n.n(s),u=n(70079),c=n(79117);function d(e,t){switch(void 0===t&&(t=0),e){case"top":default:return"0 "+t+"px";case"left":return t+"px 0";case"bottom":return"0 "+-t+"px";case"right":return-t+"px 0"}}const p=(0,u.forwardRef)((function(e,t){let{className:n,children:s,...p}=e;const{context:v,triggerOn:f,arrowElement:m,getFloatingProps:b,placement:k,floatingStyles:g,refs:h}=(0,c.nr)(),y=(0,l.qq)([t,h.setFloating]),E=(0,r.M)("jkl-tooltip-content"),{prefersReducedMotion:j}=(0,o.c)(),{isMounted:w,styles:_}=(0,l.Y_)(v,{duration:{open:j?0:250,close:j?0:150},initial:e=>{let{side:t}=e;return{opacity:0,translate:d(t,5)}},open:e=>{let{side:t}=e;return{opacity:1,translate:d(t,0)}},close:e=>{let{side:t}=e;return{opacity:0,translate:d(t,-5)}}}),{density:N,theme:C}=(0,a.H)(h.reference.current);return u.createElement(l.ll,null,"hover"===f&&u.createElement("span",{ref:h.setDescription,hidden:!0,key:E+"-trigger"},s),w&&u.createElement("span",{className:"jkl",key:E+"-wrapper"},u.createElement("span",Object.assign({key:E,ref:y,"data-placement":k,"aria-live":"click"===f?"assertive":void 0,"data-theme":C,"data-layout-density":N,className:i()("jkl-tooltip-content",n)},b({...p,id:E}),{style:{...g,..._}}),s,u.createElement(l.Y$,{context:v,ref:m,width:24,height:12,fill:"var(--background-color)"}))))}))},5847:function(e,t,n){n.d(t,{a:function(){return i}});n(31369);var l=n(57579),a=n(26372),r=n.n(a),o=n(70079),s=n(79117);const i=(0,o.forwardRef)((function(e,t){var n,a;let{children:i,className:u,...c}=e;const{isOpen:d,getReferenceProps:p,refs:v,triggerOn:f}=(0,s.nr)(),m=i.ref,b=(0,l.qq)([m,v.setReference,t]),k=[null===(n=v.reference.current)||void 0===n?void 0:n.textContent,null===(a=v.description.current)||void 0===a?void 0:a.textContent].map((e=>null==e?void 0:e.replaceAll(/[\ue003-\uf8aa]/g,""))).filter(Boolean).join(". ");return o.isValidElement(i)?o.cloneElement(i,p({ref:b,"aria-label":k,...i.props,...c,className:r()(i.props.className,u),"data-tooltip-shown":d,style:{...i.props.style},tabIndex:"click"===f?0:void 0})):o.createElement("button",Object.assign({"data-tooltip-shown":d},p({className:r()(u,"jkl-tooltip-trigger"),type:"button",ref:b,"aria-label":k,...c})),i)}))},17050:function(e,t,n){n.d(t,{H:function(){return l}});const l=e=>{if(!e)return{};const t=getComputedStyle(e);return{theme:parseInt(t.getPropertyValue("--jkl-background-color").replace("#",""),16)<8388607.5?"dark":"light",density:'"compact"'===t.getPropertyValue("--jkl-density")?"compact":"comfortable"}}},19794:function(e,t,n){n.d(t,{U:function(){return r}});var l=n(70079),a=n(31787);const r=e=>l.createElement(a.J,{...e},"");r.displayName="QuestionIcon"}}]);