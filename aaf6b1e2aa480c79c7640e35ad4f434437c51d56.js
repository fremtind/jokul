"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1614],{49467:function(e,t,n){n.d(t,{P:function(){return k}});var a=n(16151),l=n(68998),r=n(81159),o=n(3438),s=n(96820),i=n(84490),c=n(60314),u=n(26372),d=n.n(u),p=n(70079);function m(e){return void 0===e&&(e=""),e.toLowerCase().replace(/[\W_]+/g,"")}function v(e,t){var n,a;let l=null;t&&(l=e.querySelector('[aria-selected="true"]:not([hidden])')),t&&l||(l=e.querySelector('[role="option"]')),null===(n=l)||void 0===n||n.focus(),e.scrollTop=(null===(a=l)||void 0===a?void 0:a.offsetTop)||0}const f=()=>{},k=(0,p.forwardRef)(((e,t)=>{const{id:n,name:u,items:k,value:b,label:y,labelProps:g,onChange:E,onBlur:h,onFocus:_,className:j,helpLabel:w,errorLabel:N,invalid:C,searchable:x=!1,inline:P=!1,defaultPrompt:S="Velg",density:D,width:L,maxShownOptions:R=5,style:T,tooltipProps:O,...F}=e,M=(0,o.M)(n||"jkl-select",{generateSuffix:!n}),A=M+"_label",B=M+"_button",K=M+"_search-input",{0:q,1:V}=(0,p.useState)(!1),I=(0,p.useCallback)((()=>{V((e=>!e))}),[]),W=Boolean(x),U=W&&q,{0:z,1:Q}=(0,p.useState)(""),H=(0,p.useCallback)((e=>!!e.label.toLowerCase().includes(z.toLowerCase())||"function"==typeof x&&x(z,e)),[x,z]),Y=(0,p.useMemo)((()=>k.map(a.Y).map((e=>{const t=!W||""===z||H(e);return{...e,visible:t}}))),[k,W,z,H]),G=(0,p.useMemo)((()=>void 0!==b&&k.some((e=>"string"==typeof e?e===b:e.value===b))),[b,k]),{0:J,1:X}=(0,p.useState)(G&&void 0!==b?b:""),Z=""!==J,$=(0,p.useMemo)((()=>{var e;return(null===(e=Y.find((e=>e.value===J)))||void 0===e?void 0:e.label)||S}),[Y,J,S]),ee=(0,p.useRef)(null),te=(0,p.useCallback)((e=>{ee.current=e,t&&("function"==typeof t?t(e):t.current=e),e&&X(e.value)}),[ee,t]),ne=(0,s.z)(b);(0,p.useEffect)((()=>{b!==ne&&X(void 0!==b&&G?b:"")}),[X,b,ne,G]);const ae=(0,p.useCallback)((e=>{const t=e.value;Q(""),X(t),I()}),[Q,X,I]),le=(0,s.z)(J);(0,p.useEffect)((()=>{void 0!==le&&le!==J&&J!==b&&(E&&E({type:"change",target:{name:u,value:J}}),ee.current&&ee.current.dispatchEvent(new Event("change",{bubbles:!0})))}),[E,u,b,J,le]);const re=(0,p.useRef)(null),oe=(0,p.useRef)(!1),se=(0,p.useRef)(null),ie=(0,p.useRef)(null),ce=(0,p.useCallback)(((e,t)=>{if(e&&!W){const e=t.current;e&&v(e,J)}else e?se.current&&se.current.focus():oe.current&&ie.current&&ie.current.focus()}),[W,J]),[ue]=(0,i.v)(q,{onFirstVisible:ce,onTransitionEnd:ce});(0,c.c)({ref:ue});const de=(0,p.useCallback)((()=>{var e;(W&&Q(""),h)&&(h({type:"blur",target:{name:u,value:J}}),null===(e=ee.current)||void 0===e||e.dispatchEvent(new Event("focusout",{bubbles:!0})));oe.current=!1,V(!1)}),[h,Q,V,W,u,J]),pe=(0,p.useCallback)((e=>{const t=re.current;t&&t.contains(e.relatedTarget)||de()}),[de]),me=(0,p.useCallback)((()=>{oe.current||(_&&_({type:"change",target:{name:u,value:J}}),oe.current=!0)}),[_,J,u]),ve=(0,p.useCallback)((e=>{e.target.focus({preventScroll:!0})}),[]);(0,p.useEffect)((()=>{const e=ee.current,t=se.current,n=ie.current,a=re.current;return null==e||e.addEventListener("focus",(()=>{U?null==t||t.focus():null==n||n.focus()})),null==e||e.addEventListener("blur",(function(e){a&&a.contains(e.relatedTarget)&&e.preventDefault()})),()=>{null==e||e.removeEventListener("focus",(()=>{U?null==t||t.focus():null==n||n.focus()})),null==e||e.removeEventListener("blur",(function(e){a&&a.contains(e.relatedTarget)&&e.preventDefault()}))}}),[U]);const fe=(0,p.useCallback)((e=>{"ArrowDown"!==e.key&&" "!==e.key||q?"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),V(!1)):(e.preventDefault(),e.stopPropagation(),V(!0))}),[V,q]),ke=(0,p.useCallback)((e=>{if("ArrowDown"===e.key){e.preventDefault(),e.stopPropagation();const t=ue.current;t&&v(t,W?void 0:J)}else if("Escape"===e.key)e.preventDefault(),e.stopPropagation(),V(!1);else if("Tab"!==e.key||e.shiftKey)"Enter"===e.key&&q&&(e.preventDefault(),e.stopPropagation());else{const t=ue.current;t&&(e.preventDefault(),e.stopPropagation(),v(t,J))}}),[V,ue,J,W,q]),be=(0,p.useCallback)((e=>{if("Tab"===e.key)e.preventDefault(),e.stopPropagation(),e.shiftKey&&se.current?se.current.focus():ie.current&&(X(e.currentTarget.value),V(!1),ie.current.focus());else if("ArrowUp"===e.key&&ue.current&&se.current){const t=ue.current.querySelector('[role="option"]:not([hidden])');e.currentTarget.id===(null==t?void 0:t.id)&&se.current&&se.current.focus()}}),[V,ue]);return(0,p.useEffect)((()=>{const e=e=>{"Escape"===e.key&&q&&V(!1)};return"undefined"!=typeof window&&q&&window.addEventListener("keydown",e),()=>{"undefined"!=typeof window&&window.removeEventListener("keydown",e)}}),[V,q]),p.createElement(p.Fragment,null,p.createElement("select",{name:u,tabIndex:-1,"data-testid":"jkl-native-select",className:"jkl-sr-only","aria-hidden":!0,ref:te,value:J,onChange:f},p.createElement("option",{value:""})," ",Y.map((e=>p.createElement("option",{key:M+"-opt-"+e.value,hidden:!e.visible,value:e.value},e.label)))),p.createElement(r.B,Object.assign({ref:re,"data-testid":"jkl-select",className:d()("jkl-select",j,{"jkl-select--inline":P,"jkl-select--open":q&&Y.some((e=>e.visible)),"jkl-select--no-value":!Z,"jkl-select--invalid":!!N||C}),tooltipProps:O&&{...O,triggerProps:{...O.triggerProps,onFocus:e=>{var t,n;null===(t=O.triggerProps)||void 0===t||null===(n=t.onFocus)||void 0===n||n.call(t,e),de()}}}},F,{id:W?K:B,style:{"--jkl-select-max-shown-options":R,...T},density:D,label:y,labelProps:{id:A,srOnly:P,...g,htmlFor:W?K:B},helpLabel:w,errorLabel:N,render:e=>{let{"aria-invalid":t,...n}=e;return p.createElement("div",{className:"jkl-select__outer-wrapper",style:{width:L}},W&&p.createElement("input",Object.assign({},n,{"aria-invalid":t,id:K,hidden:!U,ref:se,placeholder:"Søk",value:z,onChange:e=>Q(e.target.value),"data-testid":"jkl-select__search-input",className:"jkl-select__search-input","aria-autocomplete":"list","aria-activedescendant":Z?M+"__"+m(J):void 0,"aria-controls":M,"aria-expanded":q,role:"combobox",onKeyDown:ke,onBlur:pe,onFocus:me,onClick:e=>{e.stopPropagation()}})),p.createElement("button",Object.assign({"aria-invalid":t},n,{id:B,ref:ie,hidden:U,type:"button",name:u+"-btn",className:d()("jkl-select__button",{"jkl-select__button--active-value":!!J}),"data-testid":"jkl-select__button","aria-label":($||"Velg")+","+y,"aria-expanded":q,"aria-controls":M,onBlur:pe,onFocus:me,onKeyDown:fe,onClick:I,onMouseDown:e=>{var t;e.preventDefault(),null===(t=ie.current)||void 0===t||t.focus()}}),$),p.createElement("div",{id:M,ref:ue,role:"listbox",className:"jkl-select__options-menu",hidden:!q||Y.every((e=>!e.visible)),"aria-labelledby":A,tabIndex:-1,"data-focus":"controlled"},Y.map(((e,t)=>e.visible?p.createElement("button",{key:M+"-"+e.value,hidden:!e.visible,type:"button",id:M+"__"+m(e.value),className:"jkl-select__option","data-testid":"jkl-select__option","aria-selected":e.value===J,role:"option",value:e.value,"data-testautoid":"jkl-select__option-"+t,onBlur:pe,onFocus:me,onKeyDown:be,onClick:t=>{t.preventDefault(),ae(e)},onMouseOver:ve},e.label,e.description?p.createElement("span",{className:"jkl-select__option-description"},e.description):null):null))),p.createElement(l.K,{variant:"medium",pointingDown:!q,className:"jkl-select__arrow"}))}})))}));k.displayName="Select"},72285:function(e,t,n){n.d(t,{l:function(){return v}});var a=n(58820),l=n(63571),r=n(87505),o=n(70079),s=n(54656);const i=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},u=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:l}=t,r=n>0,o=a-n>l;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",o)},p=e=>{const t=e.target,n=t.parentElement;d(t,n)},m=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var a},v=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(u):[],r=n.props?Object.values(n.props).filter(c):[],i=(e=>{var t,n,a,l,r,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(r=l.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},i&&o.createElement(s.dn,{className:"jkl-portal-code-block"},i),a.length>0&&o.createElement(m,{props:a}),r.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(m,{props:r})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return i}});var a=n(26372),l=n.n(a),r=n(49597),o=n(70079),s=n(34044);const i=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,o.useContext)(s.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(r.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||i?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var a=n(35250),l=n(26372),r=n.n(l);const o=e=>{let{className:t,density:n,id:l,...o}=e;return(0,a.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,id:l,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return c}});var a=n(35250),l=n(68998),r=n(1386),o=n(26372),s=n.n(o),i=n(70079);const c=e=>{let{children:t,title:n,className:o,startExpanded:c=!1,onClick:u,id:d,...p}=e;const[m,v]=(0,i.useState)(c),[f]=(0,i.useState)((()=>c)),{detailsRef:k,summaryRef:b,contentRef:y,onSummaryClick:g}=(0,r.E)({onOpenChange:(e,t)=>{v(e),u&&u(t,e)},isExpanded:f});return(0,a.jsxs)("details",{"data-testid":"jkl-accordion-item",...p,className:s()("jkl-accordion-item",o),ref:k,id:d,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:g,ref:b,children:[n,(0,a.jsx)(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!m,bold:m})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:y,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var a=n(70079),l=n(41699),r=n(65174),o=n(6914),s=n(82546),i=n(39126),c=n(66169),u=n(94509);const d=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:p,rows:m,verticalAlign:v,...f}=e;return a.createElement(l.i,{fullWidth:!0,...f,ref:t},n&&a.createElement(o.R,{srOnly:!0},n),a.createElement(i.s,null,a.createElement(u.S,null,d.map(((e,t)=>a.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(r.R,null,0===m.length&&p&&a.createElement(u.S,null,a.createElement(s.p,{colSpan:d.length},p)),m.map(((e,t)=>a.createElement(u.S,{key:t},e.map(((e,t)=>a.createElement(s.p,{key:t,"data-th":d[t],verticalAlign:v},e))))))))}));d.displayName="DataTable"}}]);