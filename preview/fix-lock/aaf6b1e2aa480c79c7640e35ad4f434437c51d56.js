"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1614],{49467:function(e,t,n){n.d(t,{P:function(){return k}});var r=n(16151),a=n(53484),l=n(81159),o=n(3438),c=n(96820),s=n(84490),i=n(60314),u=n(26372),d=n.n(u),p=n(70079);function m(e){return void 0===e&&(e=""),e.toLowerCase().replace(/[\W_]+/g,"")}function f(e,t){var n,r;let a=null;t&&(a=e.querySelector('[aria-selected="true"]:not([hidden])')),t&&a||(a=e.querySelector('[role="option"]')),null===(n=a)||void 0===n||n.focus(),e.scrollTop=(null===(r=a)||void 0===r?void 0:r.offsetTop)||0}const v=()=>{},k=(0,p.forwardRef)(((e,t)=>{const{id:n,name:u,items:k,value:b,label:h,labelProps:y,onChange:g,onBlur:E,onFocus:_,className:w,helpLabel:j,errorLabel:N,invalid:C,searchable:R=!1,inline:S=!1,defaultPrompt:x="Velg",density:D,width:L,maxShownOptions:P=5,style:O,...T}=e,F=(0,o.M)(n||"jkl-select",{generateSuffix:!n}),M=F+"_label",A=F+"_button",B=F+"_search-input",{0:H,1:K}=(0,p.useState)(!1),q=(0,p.useCallback)((()=>{K((e=>!e))}),[]),V=Boolean(R),I=V&&H,{0:W,1:U}=(0,p.useState)(""),z=(0,p.useCallback)((e=>!!e.label.toLowerCase().includes(W.toLowerCase())||"function"==typeof R&&R(W,e)),[R,W]),Q=(0,p.useMemo)((()=>k.map(r.Y).map((e=>{const t=!V||""===W||z(e);return{...e,visible:t}}))),[k,V,W,z]),Y=(0,p.useMemo)((()=>void 0!==b&&k.some((e=>"string"==typeof e?e===b:e.value===b))),[b,k]),{0:G,1:J}=(0,p.useState)(Y&&void 0!==b?b:""),X=""!==G,Z=(0,p.useMemo)((()=>{var e;return(null===(e=Q.find((e=>e.value===G)))||void 0===e?void 0:e.label)||x}),[Q,G,x]),$=(0,p.useRef)(null),ee=(0,p.useCallback)((e=>{$.current=e,t&&("function"==typeof t?t(e):t.current=e),e&&J(e.value)}),[$,t]),te=(0,c.z)(b);(0,p.useEffect)((()=>{b!==te&&J(void 0!==b&&Y?b:"")}),[J,b,te,Y]);const ne=(0,p.useCallback)((e=>{const t=e.value;U(""),J(t),q()}),[U,J,q]),re=(0,c.z)(G);(0,p.useEffect)((()=>{void 0!==re&&re!==G&&G!==b&&(g&&g({type:"change",target:{name:u,value:G}}),$.current&&$.current.dispatchEvent(new Event("change",{bubbles:!0})))}),[g,u,b,G,re]);const ae=(0,p.useRef)(null),le=(0,p.useRef)(!1),oe=(0,p.useRef)(null),ce=(0,p.useRef)(null),se=(0,p.useCallback)(((e,t)=>{if(e&&!V){const e=t.current;e&&f(e,G)}else e?oe.current&&oe.current.focus():le.current&&ce.current&&ce.current.focus()}),[V,G]),[ie]=(0,s.v)(H,{onFirstVisible:se,onTransitionEnd:se});(0,i.c)({ref:ie});const ue=(0,p.useCallback)((e=>{const t=ae.current;if(!(t&&t.contains(e.relatedTarget))){var n;if(V&&U(""),E)E({type:"blur",target:{name:u,value:G}}),null===(n=$.current)||void 0===n||n.dispatchEvent(new Event("focusout",{bubbles:!0}));le.current=!1,K(!1)}}),[E,V,u,G]),de=(0,p.useCallback)((()=>{le.current||(_&&_({type:"change",target:{name:u,value:G}}),le.current=!0)}),[_,G,u]),pe=(0,p.useCallback)((e=>{e.target.focus({preventScroll:!0})}),[]);(0,p.useEffect)((()=>{const e=$.current,t=oe.current,n=ce.current,r=ae.current;return null==e||e.addEventListener("focus",(()=>{I?null==t||t.focus():null==n||n.focus()})),null==e||e.addEventListener("blur",(function(e){r&&r.contains(e.relatedTarget)&&e.preventDefault()})),()=>{null==e||e.removeEventListener("focus",(()=>{I?null==t||t.focus():null==n||n.focus()})),null==e||e.removeEventListener("blur",(function(e){r&&r.contains(e.relatedTarget)&&e.preventDefault()}))}}),[I]);const me=(0,p.useCallback)((e=>{"ArrowDown"!==e.key&&" "!==e.key||H?"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),K(!1)):(e.preventDefault(),e.stopPropagation(),K(!0))}),[K,H]),fe=(0,p.useCallback)((e=>{if("ArrowDown"===e.key){e.preventDefault(),e.stopPropagation();const t=ie.current;t&&f(t,V?void 0:G)}else if("Escape"===e.key)e.preventDefault(),e.stopPropagation(),K(!1);else if("Tab"===e.key&&!e.shiftKey){const t=ie.current;t&&(e.preventDefault(),e.stopPropagation(),f(t,G))}}),[K,ie,G,V]),ve=(0,p.useCallback)((e=>{if("Tab"===e.key)e.preventDefault(),e.stopPropagation(),e.shiftKey&&oe.current?oe.current.focus():ce.current&&(J(e.currentTarget.value),K(!1),ce.current.focus());else if("ArrowUp"===e.key&&ie.current&&oe.current){const t=ie.current.querySelector('[role="option"]:not([hidden])');e.currentTarget.id===(null==t?void 0:t.id)&&oe.current&&oe.current.focus()}}),[K,ie]);return(0,p.useEffect)((()=>{const e=e=>{"Escape"===e.key&&H&&K(!1)};return"undefined"!=typeof window&&H&&window.addEventListener("keydown",e),()=>{"undefined"!=typeof window&&window.removeEventListener("keydown",e)}}),[K,H]),p.createElement(p.Fragment,null,p.createElement("select",{name:u,tabIndex:-1,"data-testid":"jkl-native-select",className:"jkl-sr-only","aria-hidden":!0,ref:ee,value:G,onChange:v},p.createElement("option",{value:""})," ",Q.map((e=>p.createElement("option",{key:F+"-opt-"+e.value,hidden:!e.visible,value:e.value},e.label)))),p.createElement(l.B,Object.assign({ref:ae,"data-testid":"jkl-select",className:d()("jkl-select",w,{"jkl-select--inline":S,"jkl-select--open":H&&Q.some((e=>e.visible)),"jkl-select--no-value":!X,"jkl-select--invalid":!!N||C})},T,{id:V?B:A,style:{"--jkl-select-max-shown-options":P,...O},density:D,label:h,labelProps:{id:M,srOnly:S,...y,htmlFor:V?B:A},helpLabel:j,errorLabel:N,render:e=>p.createElement("div",{className:"jkl-select__outer-wrapper",style:{width:L}},V&&p.createElement("input",Object.assign({},e,{id:B,hidden:!I,ref:oe,placeholder:"Søk",value:W,onChange:e=>U(e.target.value),"data-testid":"jkl-select__search-input",className:"jkl-select__search-input","aria-autocomplete":"list","aria-activedescendant":X?F+"__"+m(G):void 0,"aria-controls":F,"aria-expanded":H,role:"combobox",onKeyDown:fe,onBlur:ue,onFocus:de,onClick:e=>{e.stopPropagation()}})),p.createElement("button",Object.assign({},e,{id:A,ref:ce,hidden:I,type:"button",name:u+"-btn",className:d()("jkl-select__button",{"jkl-select__button--active-value":!!G}),"data-testid":"jkl-select__button","aria-label":(Z||"Velg")+","+h,"aria-expanded":H,"aria-controls":F,onBlur:ue,onFocus:de,onKeyDown:me,onClick:q,onMouseDown:e=>{var t;e.preventDefault(),null===(t=ce.current)||void 0===t||t.focus()}}),Z),p.createElement("div",{id:F,ref:ie,role:"listbox",className:"jkl-select__options-menu",hidden:!H||Q.every((e=>!e.visible)),"aria-labelledby":M,tabIndex:-1,"data-focus":"controlled"},Q.map(((e,t)=>e.visible?p.createElement("button",{key:F+"-"+e.value,hidden:!e.visible,type:"button",id:F+"__"+m(e.value),className:"jkl-select__option","data-testid":"jkl-select__option","aria-selected":e.value===G,role:"option",value:e.value,"data-testautoid":"jkl-select__option-"+t,onBlur:ue,onFocus:de,onKeyDown:ve,onClick:t=>{t.preventDefault(),ne(e)},onMouseOver:pe},e.label,e.description?p.createElement("span",{className:"jkl-select__option-description"},e.description):null):null))),p.createElement(a.K,{variant:"medium",pointingDown:!H,className:"jkl-select__arrow"}))})))}));k.displayName="Select"},72285:function(e,t,n){n.d(t,{l:function(){return f}});var r=n(78217),a=n(76802),l=n(87505),o=n(70079),c=n(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),i=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},u=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,o=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},p=e=>{const t=e.target,n=t.parentElement;d(t,n)},m=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},f=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(u):[],l=n.props?Object.values(n.props).filter(i):[],s=(e=>{var t,n,r,a,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(l=a.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(c.dn,{className:"jkl-portal-code-block"},s),r.length>0&&o.createElement(m,{props:r}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(m,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(26372),a=n.n(r),l=n(49597),o=n(70079),c=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(c.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(26372),a=n.n(r),l=n(70079);const o=e=>{let{className:t,density:n,...r}=e;return l.createElement("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,...r})}},76802:function(e,t,n){n.d(t,{Q:function(){return s}});var r=n(53484),a=n(26372),l=n.n(a),o=n(70079);const c=e=>{let{onOpenChange:t,startExpanded:n}=e;const r=(0,o.useRef)(null),a=(0,o.useRef)(null),l=(0,o.useRef)(null),c=(0,o.useRef)(null),{0:s,1:i}=(0,o.useState)(!1),{0:u,1:d}=(0,o.useState)(!1);(0,o.useEffect)((()=>{r.current&&(r.current.open=n)}),[]);const p=e=>{r.current&&a.current&&(r.current.open=e,c.current=null,i(!1),d(!1),r.current.style.overflow="",r.current.style.height="")};return{detailsRef:r,summaryRef:a,contentRef:l,onSummaryClick:e=>{e.preventDefault(),r.current&&a.current&&(r.current.style.overflow="hidden",s||!r.current.open?(e=>{r.current&&a.current&&(r.current.style.height="".concat(r.current.offsetHeight,"px"),r.current.open=!0,requestAnimationFrame((()=>{if(r.current&&a.current&&l.current){d(!0),t(!0,e);const n=r.current.offsetHeight,o=a.current.offsetHeight+l.current.offsetHeight;c.current&&c.current.cancel(),r.current.animate&&(c.current=r.current.animate({height:["".concat(n,"px"),"".concat(o,"px")]},{duration:150,easing:"ease"}),c.current.onfinish=()=>p(!0),c.current.oncancel=()=>d(!1))}})))})(e):(u||r.current.open)&&(e=>{if(r.current&&a.current){i(!0),t(!1,e);const n=r.current.offsetHeight,l=a.current.offsetHeight;c.current&&c.current.cancel(),r.current.animate&&(c.current=r.current.animate({height:["".concat(n,"px"),"".concat(l,"px")]},{duration:150,easing:"ease"}),c.current.onfinish=()=>p(!1),c.current.oncancel=()=>i(!1))}})(e))}}},s=e=>{let{children:t,title:n,className:a,startExpanded:s=!1,onClick:i,...u}=e;const{0:d,1:p}=(0,o.useState)(s),{detailsRef:m,summaryRef:f,contentRef:v,onSummaryClick:k}=c({onOpenChange:(e,t)=>{p(e),i&&i(t,e)},startExpanded:s});return o.createElement("details",{"data-testid":"jkl-accordion-item",...u,className:l()("jkl-accordion-item",a),ref:m},o.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:k,ref:f},n,o.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!d,bold:d})),o.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:v},o.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var r=n(70079),a=n(41699),l=n(65174),o=n(6914),c=n(82546),s=n(39126),i=n(66169),u=n(94509);const d=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:p,rows:m,verticalAlign:f,...v}=e;return r.createElement(a.i,{fullWidth:!0,...v,ref:t},n&&r.createElement(o.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(u.S,null,d.map(((e,t)=>r.createElement(i.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.R,null,0===m.length&&p&&r.createElement(u.S,null,r.createElement(c.p,{colSpan:d.length},p)),m.map(((e,t)=>r.createElement(u.S,{key:t},e.map(((e,t)=>r.createElement(c.p,{key:t,"data-th":d[t],verticalAlign:f},e))))))))}));d.displayName="DataTable"}}]);