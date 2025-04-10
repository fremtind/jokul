"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2771],{34927:function(e,l,t){t.d(l,{IX:function(){return v},hW:function(){return f},cN:function(){return d}});var n=t(70079),a=t(16151),o=t(68998),r=t(81159),s=t(26372),u=t.n(s);const i=(0,n.forwardRef)(((e,l)=>{const{label:t,className:s,density:i,errorLabel:c,helpLabel:d,inline:p,invalid:v,items:f,labelProps:b,placeholder:m="Velg",selectClassName:k,supportLabelProps:g,tooltipProps:h,value:y,width:_,...j}=e,w={label:t,density:i,errorLabel:c,helpLabel:d,labelProps:b,inline:p,supportLabelProps:g,tooltipProps:h};return n.createElement(r.B,Object.assign({},w,{"data-testid":"jkl-select",className:u()("jkl-select",s,{"jkl-select--inline":p,"jkl-select--invalid":!!c||v}),render:e=>n.createElement("div",{className:"jkl-select__outer-wrapper",style:{width:_}},n.createElement("select",Object.assign({ref:l,className:u()("jkl-select__button",k,{"jkl-select__button--active-value":!!y}),defaultValue:y?void 0:"",value:y},e,j),m&&!y&&n.createElement("option",{disabled:!0,value:""},m),f.map(a.Y).map((e=>n.createElement("option",{"data-testid":"jkl-select__option",className:"jkl-select__option",key:e.value,value:e.value},e.label)))),n.createElement(o.K,{variant:"medium",pointingDown:!0,className:"jkl-select__arrow"}))}))}));i.displayName="NativeSelect";var c=t(49467);const d={boolProps:["Native","Med hjelpetekst","Med feil","Med tooltip","Med søk","Med sekundærtekst"],choiceProps:[{name:"Maks. viste valg",values:["3","Default (5)","8","Mange"],defaultValue:1},{name:"Variant",values:["small","medium","large"],defaultValue:0}]},p=e=>{switch(e){case"3":return 3;case"Default (5)":return 5;case"8":return 8;case"Mange":return 100;default:return}},v=e=>{let{boolValues:l,choiceValues:t}=e;const a=l&&l.Native,o=a?i:c.P,r=[{value:"1",label:"Google Pixel",description:null!=l&&l["Med sekundærtekst"]?"Gjelder også Nexus-serien":void 0},{value:"2",label:"Apple"},{value:"3",label:"Samsung"},{value:"4",label:"LG"},{value:"5",label:"Huawei"},{value:"6",label:"OnePlus"},{value:"7",label:"XiaoMi"},{value:"8",label:"Nokia"},{value:"9",label:"Sony"},{value:"10",label:"Doro"}],{0:s,1:u}=(0,n.useState)(""),d=l&&l["Med feil"]?"Du må velge merket til telefonen, for eksempel Apple.":void 0,v=l&&l["Med hjelpetekst"]?"Med merke mener vi for eksempel Apple eller Samsung.":void 0,f=t&&t.Variant,b=l&&l["Med søk"],m=p(null==t?void 0:t["Maks. viste valg"]),k=null!=l&&l["Med tooltip"]?{content:"Vi spør om merket på telefonen for å finne riktig reperatør for deg."}:void 0;return n.createElement(o,Object.assign({id:"produsent",name:"produsent",label:"Hvilket merke er telefonen?",labelProps:{variant:f},items:r,value:s,helpLabel:v,errorLabel:d,tooltipProps:k,onChange:e=>{u(e.target.value),console.log("Change: ",e)},searchable:b?(e,l)=>"object"==typeof l?l.value.includes(e):l.includes(l):void 0,onFocus:e=>{console.log("Focus: ",e)},onBlur:e=>{console.log("Blur: ",e)}},a?{}:{maxShownOptions:m}))},f=e=>{let{boolValues:l,choiceValues:t}=e;return"\n<"+(null!=l&&l.Native?"NativeSelect":"Select")+'\n    ref={selectRef}\n    id="produsent"\n    name="produsent"\n    variant="'+(null==t?void 0:t.Variant)+'"\n    label="Hvilket merke er telefonen?"\n    helpLabel='+(null!=l&&l["Med hjelpetekst"]?'"Hjelpsom beskjed"':"{undefined}")+"\n    errorLabel="+(null!=l&&l["Med feil"]?'"Beskrivende feilmelding"':"{undefined}")+(null!=l&&l["Med tooltip"]?'\n    tooltipProps={{ content: "Vi spør om merket på telefonen for å finne riktig reperatør for deg." }}':"")+'\n    items={[\n        { value: "google", label: "Google og noen flere" },\n        { value: "apple", label: "Apple" },\n        { value: "samsung", label: "Samsung" },\n        { value: "LG", label: "LG" },\n    ]}\n    value={value}\n    onChange={setValue}\n    searchable={'+!(null==l||!l["Med søk"])+"}\n    onFocus={onFocus}\n    onBlur={onBlur}\n    maxShownOptions={"+p(null==t?void 0:t["Maks. viste valg"])+"}\n/>\n"}},49467:function(e,l,t){t.d(l,{P:function(){return m}});var n=t(16151),a=t(68998),o=t(81159),r=t(3438),s=t(96820),u=t(84490),i=t(60314),c=t(26372),d=t.n(c),p=t(70079);function v(e){return void 0===e&&(e=""),e.toLowerCase().replace(/[\W_]+/g,"")}function f(e,l){var t,n;let a=null;l&&(a=e.querySelector('[aria-selected="true"]:not([hidden])')),l&&a||(a=e.querySelector('[role="option"]')),null===(t=a)||void 0===t||t.focus(),e.scrollTop=(null===(n=a)||void 0===n?void 0:n.offsetTop)||0}const b=()=>{},m=(0,p.forwardRef)(((e,l)=>{const{id:t,name:c,items:m,value:k,label:g,labelProps:h,onChange:y,onBlur:_,onFocus:j,className:w,helpLabel:E,errorLabel:P,invalid:C,searchable:M=!1,inline:N=!1,defaultPrompt:L="Velg",density:D,width:S,maxShownOptions:V=5,style:x,tooltipProps:F,...B}=e,O=(0,r.M)(t||"jkl-select",{generateSuffix:!t}),T=O+"_label",R=O+"_button",A=O+"_search-input",{0:K,1:G}=(0,p.useState)(!1),H=(0,p.useCallback)((()=>{G((e=>!e))}),[]),q=Boolean(M),I=q&&K,{0:z,1:W}=(0,p.useState)(""),X=(0,p.useCallback)((e=>!!e.label.toLowerCase().includes(z.toLowerCase())||"function"==typeof M&&M(z,e)),[M,z]),Y=(0,p.useMemo)((()=>m.map(n.Y).map((e=>{const l=!q||""===z||X(e);return{...e,visible:l}}))),[m,q,z,X]),U=(0,p.useMemo)((()=>void 0!==k&&m.some((e=>"string"==typeof e?e===k:e.value===k))),[k,m]),{0:J,1:Q}=(0,p.useState)(U&&void 0!==k?k:""),Z=""!==J,$=(0,p.useMemo)((()=>{var e;return(null===(e=Y.find((e=>e.value===J)))||void 0===e?void 0:e.label)||L}),[Y,J,L]),ee=(0,p.useRef)(null),le=(0,p.useCallback)((e=>{ee.current=e,l&&("function"==typeof l?l(e):l.current=e),e&&Q(e.value)}),[ee,l]),te=(0,s.z)(k);(0,p.useEffect)((()=>{k!==te&&Q(void 0!==k&&U?k:"")}),[Q,k,te,U]);const ne=(0,p.useCallback)((e=>{const l=e.value;W(""),Q(l),H()}),[W,Q,H]),ae=(0,s.z)(J);(0,p.useEffect)((()=>{void 0!==ae&&ae!==J&&J!==k&&(y&&y({type:"change",target:{name:c,value:J}}),ee.current&&ee.current.dispatchEvent(new Event("change",{bubbles:!0})))}),[y,c,k,J,ae]);const oe=(0,p.useRef)(null),re=(0,p.useRef)(!1),se=(0,p.useRef)(null),ue=(0,p.useRef)(null),ie=(0,p.useCallback)(((e,l)=>{if(e&&!q){const e=l.current;e&&f(e,J)}else e?se.current&&se.current.focus():re.current&&ue.current&&ue.current.focus()}),[q,J]),[ce]=(0,u.v)(K,{onFirstVisible:ie,onTransitionEnd:ie});(0,i.c)({ref:ce});const de=(0,p.useCallback)((()=>{var e;(q&&W(""),_)&&(_({type:"blur",target:{name:c,value:J}}),null===(e=ee.current)||void 0===e||e.dispatchEvent(new Event("focusout",{bubbles:!0})));re.current=!1,G(!1)}),[_,W,G,q,c,J]),pe=(0,p.useCallback)((e=>{const l=oe.current;l&&l.contains(e.relatedTarget)||de()}),[de]),ve=(0,p.useCallback)((()=>{re.current||(j&&j({type:"change",target:{name:c,value:J}}),re.current=!0)}),[j,J,c]),fe=(0,p.useCallback)((e=>{e.target.focus({preventScroll:!0})}),[]);(0,p.useEffect)((()=>{const e=ee.current,l=se.current,t=ue.current,n=oe.current;return null==e||e.addEventListener("focus",(()=>{I?null==l||l.focus():null==t||t.focus()})),null==e||e.addEventListener("blur",(function(e){n&&n.contains(e.relatedTarget)&&e.preventDefault()})),()=>{null==e||e.removeEventListener("focus",(()=>{I?null==l||l.focus():null==t||t.focus()})),null==e||e.removeEventListener("blur",(function(e){n&&n.contains(e.relatedTarget)&&e.preventDefault()}))}}),[I]);const be=(0,p.useCallback)((e=>{"ArrowDown"!==e.key&&" "!==e.key||K?"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),G(!1)):(e.preventDefault(),e.stopPropagation(),G(!0))}),[G,K]),me=(0,p.useCallback)((e=>{if("ArrowDown"===e.key){e.preventDefault(),e.stopPropagation();const l=ce.current;l&&f(l,q?void 0:J)}else if("Escape"===e.key)e.preventDefault(),e.stopPropagation(),G(!1);else if("Tab"!==e.key||e.shiftKey)"Enter"===e.key&&K&&(e.preventDefault(),e.stopPropagation());else{const l=ce.current;l&&(e.preventDefault(),e.stopPropagation(),f(l,J))}}),[G,ce,J,q,K]),ke=(0,p.useCallback)((e=>{if("Tab"===e.key)e.preventDefault(),e.stopPropagation(),e.shiftKey&&se.current?se.current.focus():ue.current&&(Q(e.currentTarget.value),G(!1),ue.current.focus());else if("ArrowUp"===e.key&&ce.current&&se.current){const l=ce.current.querySelector('[role="option"]:not([hidden])');e.currentTarget.id===(null==l?void 0:l.id)&&se.current&&se.current.focus()}}),[G,ce]);return(0,p.useEffect)((()=>{const e=e=>{"Escape"===e.key&&K&&G(!1)};return"undefined"!=typeof window&&K&&window.addEventListener("keydown",e),()=>{"undefined"!=typeof window&&window.removeEventListener("keydown",e)}}),[G,K]),p.createElement(p.Fragment,null,p.createElement("select",{name:c,tabIndex:-1,"data-testid":"jkl-native-select",className:"jkl-sr-only","aria-hidden":!0,ref:le,value:J,onChange:b},p.createElement("option",{value:""})," ",Y.map((e=>p.createElement("option",{key:O+"-opt-"+e.value,hidden:!e.visible,value:e.value},e.label)))),p.createElement(o.B,Object.assign({ref:oe,"data-testid":"jkl-select",className:d()("jkl-select",w,{"jkl-select--inline":N,"jkl-select--open":K&&Y.some((e=>e.visible)),"jkl-select--no-value":!Z,"jkl-select--invalid":!!P||C}),tooltipProps:F&&{...F,triggerProps:{...F.triggerProps,onFocus:e=>{var l,t;null===(l=F.triggerProps)||void 0===l||null===(t=l.onFocus)||void 0===t||t.call(l,e),de()}}}},B,{id:q?A:R,style:{"--jkl-select-max-shown-options":V,...x},density:D,label:g,labelProps:{id:T,srOnly:N,...h,htmlFor:q?A:R},helpLabel:E,errorLabel:P,render:e=>p.createElement("div",{className:"jkl-select__outer-wrapper",style:{width:S}},q&&p.createElement("input",Object.assign({},e,{id:A,hidden:!I,ref:se,placeholder:"Søk",value:z,onChange:e=>W(e.target.value),"data-testid":"jkl-select__search-input",className:"jkl-select__search-input","aria-autocomplete":"list","aria-activedescendant":Z?O+"__"+v(J):void 0,"aria-controls":O,"aria-expanded":K,role:"combobox",onKeyDown:me,onBlur:pe,onFocus:ve,onClick:e=>{e.stopPropagation()}})),p.createElement("button",Object.assign({},e,{id:R,ref:ue,hidden:I,type:"button",name:c+"-btn",className:d()("jkl-select__button",{"jkl-select__button--active-value":!!J}),"data-testid":"jkl-select__button","aria-label":($||"Velg")+","+g,"aria-expanded":K,"aria-controls":O,onBlur:pe,onFocus:ve,onKeyDown:be,onClick:H,onMouseDown:e=>{var l;e.preventDefault(),null===(l=ue.current)||void 0===l||l.focus()}}),$),p.createElement("div",{id:O,ref:ce,role:"listbox",className:"jkl-select__options-menu",hidden:!K||Y.every((e=>!e.visible)),"aria-labelledby":T,tabIndex:-1,"data-focus":"controlled"},Y.map(((e,l)=>e.visible?p.createElement("button",{key:O+"-"+e.value,hidden:!e.visible,type:"button",id:O+"__"+v(e.value),className:"jkl-select__option","data-testid":"jkl-select__option","aria-selected":e.value===J,role:"option",value:e.value,"data-testautoid":"jkl-select__option-"+l,onBlur:pe,onFocus:ve,onKeyDown:ke,onClick:l=>{l.preventDefault(),ne(e)},onMouseOver:fe},e.label,e.description?p.createElement("span",{className:"jkl-select__option-description"},e.description):null):null))),p.createElement(a.K,{variant:"medium",pointingDown:!K,className:"jkl-select__arrow"}))})))}));m.displayName="Select"}}]);