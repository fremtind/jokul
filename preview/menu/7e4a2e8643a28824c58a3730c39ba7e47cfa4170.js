/*! For license information please see 7e4a2e8643a28824c58a3730c39ba7e47cfa4170.js.LICENSE.txt */
"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[593],{41880:function(e,t,n){n.d(t,{gL:function(){return f},e_:function(){return k},KE:function(){return p},ZP:function(){return v}});var a=n(33378),r=n(46746),l=n(70079),o=n(20204),i=n(43187),c=n(6078),s=n(43973),u=n(26372),m=n.n(u);const d=(0,l.forwardRef)(((e,t)=>{const{className:n,children:a,icon:r,expandable:o=!1,external:i=!1,...u}=e;return l.createElement("button",Object.assign({ref:t,type:"button",role:"menuitem",className:m()("jkl-contextual-menu-item",n)},u),r&&l.createElement("span",{className:"jkl-contextual-menu-item__icon"},r),l.createElement("div",{className:"jkl-contextual-menu-item__content"},a,i&&l.createElement("div",{className:"jkl-contextual-menu-item__arrow"},l.createElement(c.w,null))),o&&l.createElement(s.X,{className:"jkl-contextual-menu-item__chevron",bold:!0}))}));d.displayName="ContextualMenuItem";const p={choiceProps:[{name:"isOpen",values:["true","false","tom"],defaultValue:2}],boolProps:["Ikke lukk ved klikk utenfor"]},f=e=>{let{boolValues:t,choiceValues:n,displayValues:c}=e;const s="tom"!==(null==n?void 0:n.isOpen)?"true"===(null==n?void 0:n.isOpen):void 0,u=(null==c?void 0:c.theme)||"none"+(null==c?void 0:c.density)||0;return l.createElement("div",{style:{width:"500px",textAlign:"center"}},l.createElement(i.r,{id:u,initialPlacement:"bottom-end",isOpen:s,keepOpenOnClickOutside:null==t?void 0:t["Ikke lukk ved klikk utenfor"],triggerElement:l.createElement(o.zx,{variant:"ghost",iconRight:l.createElement(a.v,{bold:!0})},"Ola Nordmann")},l.createElement(d,null,"Forsikringsprofil"),l.createElement(d,{onClick:()=>console.log("Hei fra Dokumenter")},"Dokumenter"),l.createElement(d,{icon:l.createElement(r.P,null)},"Skadesaker")))};var v=f;const k=e=>{let{boolValues:t,choiceValues:n}=e;return'\n<ContextualMenu\n    initialPlacement="bottom-end"'+(n&&"tom"!==n.isOpen?"\n    isOpen={"+n.isOpen+"}":"")+(null!=t&&t["Ikke lukk ved klikk utenfor"]?"\n    keepOpenOnClickOutside":"")+'\n    triggerElement={\n        <Button variant="ghost" iconRight={<ChevronDownIcon bold />}>\n            Ola Nordmann\n        </Button>\n    }\n>\n    <ContextualMenuItem>Forsikringsprofil</ContextualMenuItem>\n    <ContextualMenuItem onClick={() => console.log("Hei fra Skadesaker")}>Dokumenter</ContextualMenuItem>\n    <ContextualMenuItem icon={<ErrorIcon />}>Skadesaker</ContextualMenuItem>\n</ContextualMenu>\n'}},43187:function(e,t,n){n.d(t,{r:function(){return k}});var a=n(57579),r=n(84256),l=n(88905),o=n(3438),i=n(26372),c=n.n(i),s=n(19028),u=n(12884),m=n(11346),d=n(40688),p=n(70079),f=n(72037);const v=(0,p.forwardRef)(((e,t)=>{const{children:n,className:i,initialPlacement:v,openOnHover:k=!1,keepOpenOnClickOutside:E=!1,triggerElement:y,isOpen:b,onToggle:g,...h}=e,w=(0,o.M)("jkl-contextual-menu"),j=(0,a.ay)(),x=(0,a.jV)(),N=(0,a.Zm)(),_=null!=N,O=(0,p.useRef)([]),{0:S,1:C}=(0,p.useState)(null),{allowHover:I,isOpen:R,setIsOpen:P}=((e,t,n)=>{const{0:a,1:r}=(0,p.useState)(!1),{0:l,1:o}=(0,p.useState)(!1);return(0,p.useEffect)((()=>{if(e)return e.events.on("click",a),e.events.on("menuopen",r),()=>{e.events.off("click",a),e.events.off("menuopen",r)};function a(){o(!1)}function r(e){e.nodeId!==t&&e.parentId===n&&o(!1)}}),[e,t,n,o]),(0,p.useEffect)((()=>{l&&e&&e.events.emit("menuopen",{parentId:n,nodeId:t})}),[e,l,t,n]),(0,p.useEffect)((()=>{function e(e){let{pointerType:t}=e;"touch"!==t&&r(!0)}function t(){r(!1)}return window.addEventListener("pointermove",e,{once:!0,capture:!0}),window.addEventListener("keydown",t,!0),()=>{window.removeEventListener("pointermove",e,{capture:!0}),window.removeEventListener("keydown",t,!0)}}),[a]),{allowHover:a,isOpen:l,setIsOpen:o}})(j,x,N),M=void 0!==b?b:R;(0,p.useEffect)((()=>null==g?void 0:g(M)),[M,g]);const{x:V,y:F,refs:D,placement:A,strategy:L,context:H}=(0,a.YF)({nodeId:x,open:M,onOpenChange:P,placement:v||(_?"right-start":"bottom-start"),middleware:[(0,r.cv)(2),(0,r.RR)({fallbackAxisSideDirection:"end",crossAxis:!1}),(0,r.uY)({padding:8})],whileElementsMounted:l.Me}),{getReferenceProps:T,getFloatingProps:q,getItemProps:B}=(0,a.NI)([(0,a.XI)(H,{enabled:k&&I,delay:{open:75},handleClose:(0,a.xp)({requireIntent:!0,blockPointerEvents:!0})}),(0,a.eS)(H,{event:"mousedown"}),(0,a.bQ)(H,{outsidePress:!E}),(0,a.qs)(H,{role:"menu"}),(0,a.c0)(H,{listRef:O,activeIndex:S,nested:_,onNavigate:C})]),K=(0,a.qq)([D.setReference,t]);let X,$;if(D.reference.current){const e=getComputedStyle(D.reference.current);X=parseInt(e.getPropertyValue("--jkl-background-color").replace("#",""),16)<8388607.5?"dark":"light",$='"compact"'===e.getPropertyValue("--jkl-density")?"compact":"comfortable"}return p.createElement(a.mN,{id:x},p.isValidElement(y)&&("button"===y.type||f.isForwardRef(y))?p.cloneElement(y,{...T({...h,ref:K,role:_?"menuitem":void 0,"aria-controls":w,onClick(e){e.stopPropagation()}})}):y,p.createElement(s.X,{features:u.H},p.createElement(m.M,null,M&&p.createElement(a.ll,null,p.createElement(a.wD,{context:H,modal:!1,initialFocus:_?-1:0,returnFocus:!_},p.createElement(d.m.div,Object.assign({className:c()("jkl jkl-contextual-menu",i),"data-theme":X,"data-layout-density":$,role:"menu",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:"easeIn",duration:.1},"data-placement":A,"aria-live":"assertive","aria-hidden":!M,ref:D.setFloating},q({id:w,style:{position:L,top:null!=F?F:"",left:null!=V?V:""}})),p.Children.map(n,((e,t)=>p.isValidElement(e)&&f.isForwardRef(e)?p.cloneElement(e,B({...e.props,tabIndex:S===t?0:-1,role:"menuitem",ref(e){O.current[t]=e},onClick(t){var n,a;null===(n=(a=e.props).onClick)||void 0===n||n.call(a,t),t.defaultPrevented||null==j||j.events.emit("click")},onKeyDown(t){var n,a;null===(n=(a=e.props).onKeyDown)||void 0===n||n.call(a,t),t.defaultPrevented||(null==j||j.events.emit("keydown"),"menuitemcheckbox"===t.currentTarget.role&&"Enter"===t.key&&P(!1))},onMouseEnter(){I&&M&&C(t)}})):e))))))))}));v.displayName="ContextualMenuComponent";const k=(0,p.forwardRef)(((e,t)=>null===(0,a.Zm)()?p.createElement(a.RB,null,p.createElement(v,Object.assign({ref:t},e))):p.createElement(v,Object.assign({ref:t},e))));k.displayName="ContextualMenu"},72285:function(e,t,n){n.d(t,{l:function(){return f}});var a=n(58820),r=n(63571),l=n(87505),o=n(70079),i=n(54656);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},u=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:r}=t,l=n>0,o=a-n>r;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},d=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var a},f=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(u):[],l=n.props?Object.values(n.props).filter(s):[],c=(e=>{var t,n,a,r,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(l=r.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&o.createElement(i.dn,{className:"jkl-portal-code-block"},c),a.length>0&&o.createElement(p,{props:a}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return c}});var a=n(26372),r=n.n(a),l=n(49597),o=n(70079),i=n(34044);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,o.useContext)(i.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||c?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var a=n(35250),r=n(26372),l=n.n(r);const o=e=>{let{className:t,density:n,id:r,...o}=e;return(0,a.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,id:r,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return s}});var a=n(35250),r=n(68998),l=n(1386),o=n(26372),i=n.n(o),c=n(70079);const s=e=>{let{children:t,title:n,className:o,startExpanded:s=!1,onClick:u,id:m,...d}=e;const[p,f]=(0,c.useState)(s),[v]=(0,c.useState)((()=>s)),{detailsRef:k,summaryRef:E,contentRef:y,onSummaryClick:b}=(0,l.E)({onOpenChange:(e,t)=>{f(e),u&&u(t,e)},isExpanded:v});return(0,a.jsxs)("details",{"data-testid":"jkl-accordion-item",...d,className:i()("jkl-accordion-item",o),ref:k,id:m,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:b,ref:E,children:[n,(0,a.jsx)(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:y,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},6078:function(e,t,n){n.d(t,{w:function(){return l}});var a=n(70079),r=n(31787);const l=e=>a.createElement(r.J,{...e},"");l.displayName="ArrowNorthEastIcon"},43973:function(e,t,n){n.d(t,{X:function(){return l}});var a=n(70079),r=n(31787);const l=e=>a.createElement(r.J,{...e},"");l.displayName="ChevronRightIcon"},87505:function(e,t,n){n.d(t,{w:function(){return m}});var a=n(70079),r=n(41699),l=n(65174),o=n(6914),i=n(82546),c=n(39126),s=n(66169),u=n(94509);const m=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:d,rows:p,verticalAlign:f,...v}=e;return a.createElement(r.i,{fullWidth:!0,...v,ref:t},n&&a.createElement(o.R,{srOnly:!0},n),a.createElement(c.s,null,a.createElement(u.S,null,m.map(((e,t)=>a.createElement(s.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(l.R,null,0===p.length&&d&&a.createElement(u.S,null,a.createElement(i.p,{colSpan:m.length},d)),p.map(((e,t)=>a.createElement(u.S,{key:t},e.map(((e,t)=>a.createElement(i.p,{key:t,"data-th":m[t],verticalAlign:f},e))))))))}));m.displayName="DataTable"},92810:function(e,t){var n,a=Symbol.for("react.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.server_context"),m=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),k=Symbol.for("react.offscreen");function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case l:case i:case o:case d:case p:return e;default:switch(e=e&&e.$$typeof){case u:case s:case m:case v:case f:case c:return e;default:return t}}case r:return t}}}n=Symbol.for("react.module.reference"),t.isForwardRef=function(e){return E(e)===m}},72037:function(e,t,n){e.exports=n(92810)}}]);