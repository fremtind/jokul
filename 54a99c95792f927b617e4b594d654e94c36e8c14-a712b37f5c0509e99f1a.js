"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2981],{39446:function(e,t,n){n.d(t,{y:function(){return o}});var a=n(26372),l=n.n(a),r=n(70079);const o=e=>{let{expanded:t=!1}=e;return r.createElement("span",{className:l()("jkl-select__arrow",{"jkl-select__arrow--expanded":t})},r.createElement("svg",{className:"jkl-select__arrow-down",viewBox:"0 0 13 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M6.90762 13.8828L11.9272 8.86326L12.7093 9.64537L6.35463 16L-1.68645e-06 9.64536L0.782101 8.86326L5.80156 13.8827L5.80156 1.01438e-06L6.90762 1.20777e-06L6.90762 13.8828Z",fill:"currentColor"})),r.createElement("svg",{className:"jkl-select__arrow-up",viewBox:"0 0 13 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M5.80163 2.1172L0.78209 7.13674L-1.29938e-05 6.35464L6.35462 5.14415e-08L12.7093 6.35464L11.9272 7.13674L6.90769 2.11728L6.9077 16L5.80163 16L5.80163 2.1172Z",fill:"currentColor"})))}},45897:function(e,t,n){n.d(t,{P:function(){return b}});var a=n(96189),l=n(13637),r=n(55820),o=n(14092),c=n(89292),s=n(26372),i=n.n(s),u=n(70079),d=n(39446);function p(e){return void 0===e&&(e=""),e.toLowerCase().replace(/[\W_]+/g,"")}function m(e,t){var n,a;let l=null;t&&(l=e.querySelector('[aria-selected="true"]:not([hidden])')),t&&l||(l=e.querySelector('[role="option"]')),null===(n=l)||void 0===n||n.focus(),e.scrollTop=(null===(a=l)||void 0===a?void 0:a.offsetTop)||0}function v(e){let{ref:t}=e;(0,u.useEffect)((()=>{const e={keys:""},n=t.current,a=t=>{n&&function(e){let{list:t,event:n,search:a,searchResetTimer:l}=e;const{key:r,target:o}=n,c={event:n,list:t,currentFocus:o};switch(r){case"ArrowUp":f("prev",c);break;case"ArrowDown":f("next",c);break;case"Home":f("first",c);break;case"End":f("last",c);break;case"Tab":n.preventDefault();break;case"Enter":break;default:if(void 0!==a){const e=function(e){let{list:t,key:n,search:a,searchResetTimer:l}=e;const r=t.querySelectorAll('[role="option"]');if(!r.length)return null;if(a){a.keys=a.keys.concat(n),function(e,t){t&&(clearTimeout(t),t=void 0);t=setTimeout((()=>{e?e.keys="":e={keys:""},t=void 0}),500,e,t)}(a,l);for(let e=0;e<r.length;e++){const t=r[e].innerText;if(t&&0===t.toLowerCase().indexOf(a.keys))return r[e]}}return null}({list:t,key:r,search:a,searchResetTimer:l});e&&e.focus()}}}({list:n,event:t,search:e,searchResetTimer:undefined})};return n&&n.addEventListener("keydown",a),()=>{n&&n.removeEventListener("keydown",a)}}),[t])}function f(e,t){let{event:n,list:a,currentFocus:l}=t;n.preventDefault(),function(e,t,n){const a=n;switch(e){case"prev":const e=a&&a.previousElementSibling;e&&e.focus();break;case"next":const n=a&&a.nextElementSibling;n&&n.focus();break;case"first":const l=t.querySelector('[role="option"]');l&&l.focus();break;case"last":const r=t.querySelectorAll('[role="option"]');r.length&&r[r.length-1].focus()}}(e,a,l)}const k=()=>{},b=(0,u.forwardRef)(((e,t)=>{var n;const{id:s,name:f,items:b,value:w,label:y,labelProps:E,onChange:h,onBlur:g,onFocus:_,className:j,helpLabel:L,errorLabel:N,invalid:x,searchable:C=!1,inline:S=!1,defaultPrompt:T="Velg",variant:D,density:R,width:M,maxShownOptions:A=5,...P}=e,O=(0,o.M)(s||"jkl-select",{generateSuffix:!s}),B=O+"_label",F=O+"_button",q=O+"_search-input",V=O+"_support-label",K=L||N?V:void 0,{0:I,1:U}=(0,u.useState)(!1),W=(0,u.useCallback)((()=>{U((e=>!e))}),[]),Z=Boolean(C),H=Z&&I,{0:Q,1:Y}=(0,u.useState)(""),z=(0,u.useCallback)((e=>!!e.label.toLowerCase().includes(Q.toLowerCase())||"function"==typeof C&&C(Q,e)),[C,Q]),G=(0,u.useMemo)((()=>b.map(a.Y).map((e=>{const t=!Z||""===Q||z(e);return{...e,visible:t}}))),[b,Z,Q,z]),{0:J,1:X}=(0,u.useState)(w||""),$=void 0!==J&&""!==J,ee=(0,u.useMemo)((()=>{var e;return(null===(e=G.find((e=>e.value===J)))||void 0===e?void 0:e.label)||T}),[G,J,T]),te=(0,u.useRef)(null),ne=(0,u.useCallback)((e=>{te.current=e,t&&("function"==typeof t?t(e):t.current=e)}),[te,t]);(0,u.useEffect)((()=>{X(w||"")}),[X,w]),(0,u.useEffect)((()=>{var e;X((null===(e=te.current)||void 0===e?void 0:e.value)||"")}),[null===(n=te.current)||void 0===n?void 0:n.value]);const ae=(0,u.useCallback)((e=>{const t=e.value;Y(""),X(t),h&&h({type:"change",target:{name:f,value:t}}),te.current&&te.current.dispatchEvent(new Event("change",{bubbles:!0})),W()}),[h,Y,X,W,f]),le=(0,u.useRef)(null),re=(0,u.useRef)(!1),oe=(0,u.useRef)(null),ce=(0,u.useRef)(null),se=(0,u.useCallback)(((e,t)=>{if(e&&!Z){const e=t.current;e&&m(e,J)}else e?oe.current&&oe.current.focus():re.current&&ce.current&&ce.current.focus()}),[Z,J]),[ie]=(0,c.v)(I,{onFirstVisible:se,onTransitionEnd:se});v({ref:ie});const ue=(0,u.useCallback)((e=>{const t=le.current;if(!(t&&t.contains(e.relatedTarget))){var n;if(Z&&Y(""),g)g({type:"blur",target:{name:f,value:J||""}}),null===(n=te.current)||void 0===n||n.dispatchEvent(new Event("focusout",{bubbles:!0}));re.current=!1,U(!1)}}),[g,Z,f,J]),de=(0,u.useCallback)((()=>{re.current||(_&&_({type:"change",target:{name:f,value:J||""}}),re.current=!0)}),[_,J,f]),pe=(0,u.useCallback)((e=>{e.target.focus({preventScroll:!0})}),[]);(0,u.useEffect)((()=>{const e=te.current,t=oe.current,n=ce.current,a=le.current;return null==e||e.addEventListener("focus",(()=>{H?null==t||t.focus():null==n||n.focus()})),null==e||e.addEventListener("blur",(function(e){a&&a.contains(e.relatedTarget)&&e.preventDefault()})),()=>{null==e||e.removeEventListener("focus",(()=>{H?null==t||t.focus():null==n||n.focus()})),null==e||e.removeEventListener("blur",(function(e){a&&a.contains(e.relatedTarget)&&e.preventDefault()}))}}),[H]);const me=(0,u.useCallback)((e=>{"ArrowDown"!==e.key&&" "!==e.key||I?"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),U(!1)):(e.preventDefault(),e.stopPropagation(),U(!0))}),[U,I]),ve=(0,u.useCallback)((e=>{if("ArrowDown"===e.key){e.preventDefault(),e.stopPropagation();const t=ie.current;t&&m(t,Z?void 0:J)}else if("Escape"===e.key)e.preventDefault(),e.stopPropagation(),U(!1);else if("Tab"===e.key&&!e.shiftKey){const t=ie.current;t&&(e.preventDefault(),e.stopPropagation(),m(t,J))}}),[U,ie,J,Z]),fe=(0,u.useCallback)((e=>{if("Tab"===e.key)e.preventDefault(),e.stopPropagation(),e.shiftKey&&oe.current?oe.current.focus():ce.current&&(X(e.currentTarget.value),U(!1),ce.current.focus());else if("ArrowUp"===e.key&&ie.current&&oe.current){const t=ie.current.querySelector('[role="option"]:not([hidden])');e.currentTarget.id===(null==t?void 0:t.id)&&oe.current&&oe.current.focus()}}),[U,ie]);return(0,u.useEffect)((()=>{const e=e=>{"Escape"===e.key&&I&&U(!1)};return"undefined"!=typeof window&&I&&window.addEventListener("keydown",e),()=>{"undefined"!=typeof window&&window.removeEventListener("keydown",e)}}),[U,I]),u.createElement("div",Object.assign({"data-testid":"jkl-select",className:i()("jkl-select",j,{"jkl-select--inline":S,"jkl-select--open":I&&G.some((e=>e.visible)),"jkl-select--no-value":!$,"jkl-select--invalid":!!N||x}),ref:le,"data-density":R,style:{"--jkl-select-max-shown-options":A}},P),u.createElement(l._,Object.assign({id:B,variant:D},E,{standAlone:Z,htmlFor:Z?q:null==E?void 0:E.htmlFor,srOnly:S||(null==E?void 0:E.srOnly),density:R}),y),u.createElement("select",{name:f,tabIndex:-1,className:"jkl-sr-only","aria-hidden":!0,ref:ne,value:J,onChange:k},u.createElement("option",{value:""})," ",G.map((e=>u.createElement("option",{key:O+"-opt-"+e.value,hidden:!e.visible,value:e.value},e.label)))),u.createElement("div",{className:"jkl-select__outer-wrapper",style:{width:M}},Z&&u.createElement("input",{id:q,hidden:!H,ref:oe,placeholder:"Søk",value:Q,onChange:e=>Y(e.target.value),"data-testid":"jkl-select__search-input",className:"jkl-select__search-input","aria-autocomplete":"list","aria-activedescendant":$?O+"__"+p(J):void 0,"aria-controls":O,"aria-describedby":K,"aria-labelledby":B,"aria-expanded":I,role:"combobox",onKeyDown:ve,onBlur:ue,onFocus:de,onClick:e=>{e.stopPropagation()}}),u.createElement("button",{id:F,ref:ce,hidden:H,type:"button",name:f+"-btn",className:"jkl-select__button","data-testid":"jkl-select__button","aria-label":(ee||"Velg")+","+y,"aria-expanded":I,"aria-controls":O,"aria-describedby":K,"aria-invalid":Boolean(N),onBlur:ue,onFocus:de,onKeyDown:me,onClick:W,onMouseDown:e=>{var t;e.preventDefault(),null===(t=ce.current)||void 0===t||t.focus()}},ee),u.createElement("div",{id:O,ref:ie,role:"listbox",className:"jkl-select__options-menu",hidden:!I||G.every((e=>!e.visible)),"aria-labelledby":B,tabIndex:-1,"data-focus":"controlled"},G.map(((e,t)=>e.visible?u.createElement("button",{key:O+"-"+e.value,hidden:!e.visible,type:"button",id:O+"__"+p(e.value),className:"jkl-select__option","data-testid":"jkl-select__option","aria-selected":e.value===J,role:"option",value:e.value,"data-testautoid":"jkl-select__option-"+t,onBlur:ue,onFocus:de,onKeyDown:fe,onClick:t=>{t.preventDefault(),ae(e)},onMouseOver:pe},e.label):null))),u.createElement(d.y,{expanded:I})),u.createElement(r.A,{id:V,helpLabel:L,errorLabel:N,density:R}))}));b.displayName="Select"},71111:function(e,t,n){n.d(t,{l:function(){return m}});var a=n(57986),l=n(80252),r=n(50601),o=n(70079);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},i=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:l}=t,r=n>0,o=a-n>l;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",o)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var a},m=e=>{let{types:t}=e;return o.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},o.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),o.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(i):[],r=n.props?Object.values(n.props).filter(s):[];return o.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},a.length>0&&o.createElement(p,{props:a}),r.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:r})))}))))}},479:function(e,t,n){n.d(t,{M:function(){return s}});var a=n(26372),l=n.n(a),r=n(79363),o=n(70079),c=n(56024);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,o.useContext)(c.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(r.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},57986:function(e,t,n){n.d(t,{U:function(){return o}});var a=n(26372),l=n.n(a),r=n(70079);const o=e=>{let{className:t,density:n,...a}=e;return r.createElement("div",{"data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,...a})}},80252:function(e,t,n){n.d(t,{Q:function(){return i}});var a=n(14092),l=n(89292),r=n(26372),o=n.n(r),c=n(70079);const s=e=>{let{expanded:t=!1,className:n}=e;return c.createElement("span",{className:o()("jkl-accordion-item__arrow",n,{"jkl-accordion-item__arrow--expanded":t})},c.createElement("svg",{className:"jkl-accordion-item__arrow-down",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M11.15 8.51998L10.35 7.73998L6.54999 11.58L6.55 0.699982L5.43 0.699982L5.43 11.56L1.67 7.73998L0.869995 8.51998L6.01 13.54L11.15 8.51998Z",fill:"currentColor"})),c.createElement("svg",{className:"jkl-accordion-item__arrow-up",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M0.940002 5.71998L1.74 6.49998L5.54 2.65998V13.54H6.66V2.67998L10.42 6.49998L11.22 5.71998L6.08 0.699982L0.940002 5.71998Z",fill:"currentColor"})))},i=e=>{let{children:t,title:n,className:r,startExpanded:i=!1,onClick:u,...d}=e;const p=(0,a.M)("title"),m=(0,a.M)("content"),{0:v,1:f}=(0,c.useState)(i),[k]=(0,l.v)(v,{easing:"exit",timing:"expressive"});return c.createElement("div",{"data-testid":"jkl-accordion-item",...d,className:o()("jkl-accordion-item",r,{"jkl-accordion-item--expanded":v})},c.createElement("button",{id:p,className:"jkl-accordion-item__title",type:"button","aria-expanded":v,"aria-controls":m,onClick:e=>{const t=!v;f(t),u&&u(e,t)}},n,c.createElement(s,{expanded:v})),c.createElement("div",{id:m,ref:k,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":p,hidden:!v},c.createElement("div",{className:"jkl-accordion-item__content"},t)))}},50601:function(e,t,n){n.d(t,{w:function(){return d}});var a=n(70079),l=n(64327),r=n(1807),o=n(11348),c=n(12675),s=n(14687),i=n(61211),u=n(39666);const d=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:p,rows:m,verticalAlign:v,...f}=e;return a.createElement(l.i,{fullWidth:!0,...f,ref:t},n&&a.createElement(o.R,{srOnly:!0},n),a.createElement(s.s,null,a.createElement(u.S,null,d.map(((e,t)=>a.createElement(i.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(r.R,null,0===m.length&&p&&a.createElement(u.S,null,a.createElement(c.p,{colSpan:d.length},p)),m.map(((e,t)=>a.createElement(u.S,{key:t},e.map(((e,t)=>a.createElement(c.p,{key:t,"data-th":d[t],verticalAlign:v},e))))))))}));d.displayName="DataTable"}}]);