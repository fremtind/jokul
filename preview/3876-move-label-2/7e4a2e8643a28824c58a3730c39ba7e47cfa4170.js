/*! For license information please see 7e4a2e8643a28824c58a3730c39ba7e47cfa4170.js.LICENSE.txt */
"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[593],{86733:function(e,t,n){n.d(t,{gL:function(){return g},e_:function(){return w},KE:function(){return f},ZP:function(){return E}});var l=n(10188),r=n(33368),a=n(36090),o=n(98509),i=n(70079),c=n(43187),s=n(26372),m=n.n(s);const u=e=>{const{className:t,...n}=e;return i.createElement("hr",Object.assign({className:m()("jkl-contextual-menu-divider",t)},n))};var d=n(18829),p=n(68134);const v=(0,i.forwardRef)(((e,t)=>{const{className:n,children:l,icon:r,expandable:a=!1,external:o=!1,...c}=e;return i.createElement("button",Object.assign({ref:t,type:"button",role:"menuitem",className:m()("jkl-contextual-menu-item",n)},c),r&&i.createElement("span",{className:"jkl-contextual-menu-item__icon"},r),i.createElement("div",{className:"jkl-contextual-menu-item__content"},l,o&&i.createElement("div",{className:"jkl-contextual-menu-item__arrow"},i.createElement(d.w,null))),a&&i.createElement(p.X,{className:"jkl-contextual-menu-item__chevron",bold:!0}))}));v.displayName="ContextualMenuItem";const f={choiceProps:[{name:"isOpen",values:["true","false","tom"],defaultValue:2}],boolProps:["Ikke lukk ved klikk utenfor"]},g=e=>{let{boolValues:t,choiceValues:n,displayValues:s}=e;const m="tom"!==(null==n?void 0:n.isOpen)?"true"===(null==n?void 0:n.isOpen):void 0,d=(null==s?void 0:s.theme)||"none"+(null==s?void 0:s.density)||0;return i.createElement("div",{style:{width:"500px"}},i.createElement(c.r,{id:d,initialPlacement:"bottom-start",isOpen:m,keepOpenOnClickOutside:null==t?void 0:t["Ikke lukk ved klikk utenfor"],triggerElement:i.createElement(l.h,{"data-testid":"trigger-contextual-menu",title:"En kontekstuell meny med eksempelvalg for å demonstrere mulighetene i komponenten"},i.createElement(r.Y,{bold:!0}))},i.createElement(v,{icon:i.createElement(a.s,null)},"Menyvalg 1"),i.createElement(v,{onClick:()=>console.log("Hei fra Menyvalg 2")},"Menyvalg 2"),i.createElement(u,null),i.createElement(c.r,{openOnHover:!0,triggerElement:i.createElement(v,{expandable:!0},"Ekspanderende menyvalg med veldig lang tekst")},i.createElement(v,{icon:i.createElement(a.s,null)},"Ekspandert menyvalg"),i.createElement(v,null,"Ekspandert menyvalg med mer tekst")),i.createElement(c.r,{openOnHover:!0,triggerElement:i.createElement(v,{expandable:!0},"Ekspanderende menyvalg")},i.createElement(v,{icon:i.createElement(o.T,null)},"Ekspandert menyvalg"),i.createElement(v,null,"Ekspandert menyvalg med mer tekst"))))};var E=g;const w=e=>{let{boolValues:t,choiceValues:n}=e;return'\n<ContextualMenu\n    initialPlacement="bottom-start"'+(n&&"tom"!==n.isOpen?"\n    isOpen={"+n.isOpen+"}":"")+(null!=t&&t["Ikke lukk ved klikk utenfor"]?"\n    keepOpenOnClickOutside":"")+'\n    triggerElement={\n        <IconButton title="En kontekstuell meny med eksempelvalg for å demonstrere mulighetene i komponenten">\n            <DotsIcon bold />\n        </IconButton>\n    }\n>\n    <ContextualMenuItem icon={<InfoIcon />}>Menyvalg 1</ContextualMenuItem>\n    <ContextualMenuItem onClick={() => console.log("Hei fra Menyvalg 2")}>Menyvalg 2</ContextualMenuItem>\n    <ContextualMenuDivider />\n    <ContextualMenu\n        openOnHover\n        triggerElement={\n            <ContextualMenuItem expandable>Ekspanderende menyvalg med veldig lang tekst</ContextualMenuItem>\n        }\n    >\n        <ContextualMenuItem icon={<InfoIcon />}>Ekspandert menyvalg</ContextualMenuItem>\n        <ContextualMenuItem>Ekspandert menyvalg med mer tekst</ContextualMenuItem>\n    </ContextualMenu>\n    <ContextualMenu\n        openOnHover\n        triggerElement={<ContextualMenuItem expandable>Ekspanderende menyvalg</ContextualMenuItem>}\n    >\n        <ContextualMenuItem icon={<CopyIcon />}>Ekspandert menyvalg</ContextualMenuItem>\n        <ContextualMenuItem>Ekspandert menyvalg med mer tekst</ContextualMenuItem>\n    </ContextualMenu>\n</ContextualMenu>\n'}},43187:function(e,t,n){n.d(t,{r:function(){return v}});var l=n(57579),r=n(84256),a=n(88905),o=n(3438),i=n(26372),c=n.n(i),s=n(48365),m=n(89300),u=n(70079),d=n(72037);const p=(0,u.forwardRef)(((e,t)=>{const{children:n,className:i,initialPlacement:p,openOnHover:v=!1,keepOpenOnClickOutside:f=!1,triggerElement:g,isOpen:E,onToggle:w,...k}=e,h=(0,o.M)("jkl-contextual-menu"),y=(0,l.ay)(),x=(0,l.jV)(),b=(0,l.Zm)(),C=null!=b,M=(0,u.useRef)([]),{0:I,1:N}=(0,u.useState)(null),{allowHover:j,isOpen:_,setIsOpen:O}=((e,t,n)=>{const{0:l,1:r}=(0,u.useState)(!1),{0:a,1:o}=(0,u.useState)(!1);return(0,u.useEffect)((()=>{if(e)return e.events.on("click",l),e.events.on("menuopen",r),()=>{e.events.off("click",l),e.events.off("menuopen",r)};function l(){o(!1)}function r(e){e.nodeId!==t&&e.parentId===n&&o(!1)}}),[e,t,n,o]),(0,u.useEffect)((()=>{a&&e&&e.events.emit("menuopen",{parentId:n,nodeId:t})}),[e,a,t,n]),(0,u.useEffect)((()=>{function e(e){let{pointerType:t}=e;"touch"!==t&&r(!0)}function t(){r(!1)}return window.addEventListener("pointermove",e,{once:!0,capture:!0}),window.addEventListener("keydown",t,!0),()=>{window.removeEventListener("pointermove",e,{capture:!0}),window.removeEventListener("keydown",t,!0)}}),[l]),{allowHover:l,isOpen:a,setIsOpen:o}})(y,x,b),R=void 0!==E?E:_;(0,u.useEffect)((()=>null==w?void 0:w(R)),[R,w]);const{x:S,y:V,refs:H,placement:z,strategy:B,context:L}=(0,l.YF)({nodeId:x,open:R,onOpenChange:O,placement:p||(C?"right-start":"bottom-start"),middleware:[(0,r.cv)(2),(0,r.RR)({fallbackAxisSideDirection:"end",crossAxis:!1}),(0,r.uY)({padding:8})],whileElementsMounted:a.Me}),{getReferenceProps:P,getFloatingProps:Z,getItemProps:F}=(0,l.NI)([(0,l.XI)(L,{enabled:v&&j,delay:{open:75},handleClose:(0,l.xp)({requireIntent:!0,blockPointerEvents:!0})}),(0,l.eS)(L,{event:"mousedown"}),(0,l.bQ)(L,{outsidePress:!f}),(0,l.qs)(L,{role:"menu"}),(0,l.c0)(L,{listRef:M,activeIndex:I,nested:C,onNavigate:N})]),D=(0,l.qq)([H.setReference,t]);let T,A;if(H.reference.current){const e=getComputedStyle(H.reference.current);T=parseInt(e.getPropertyValue("--jkl-background-color").replace("#",""),16)<8388607.5?"dark":"light",A='"compact"'===e.getPropertyValue("--jkl-density")?"compact":"comfortable"}return u.createElement(l.mN,{id:x},u.isValidElement(g)&&("button"===g.type||d.isForwardRef(g))?u.cloneElement(g,{...P({...k,ref:D,role:C?"menuitem":void 0,"aria-controls":h,onClick(e){e.stopPropagation()}})}):g,u.createElement(s.M,null,R&&u.createElement(l.ll,null,u.createElement(l.wD,{context:L,modal:!1,initialFocus:C?-1:0,returnFocus:!C},u.createElement(m.E.div,Object.assign({className:c()("jkl jkl-contextual-menu",i),"data-theme":T,"data-layout-density":A,role:"menu",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:"easeIn",duration:.1},"data-placement":z,"aria-live":"assertive","aria-hidden":!R,ref:H.setFloating},Z({id:h,style:{position:B,top:null!=V?V:"",left:null!=S?S:""}})),u.Children.map(n,((e,t)=>u.isValidElement(e)&&d.isForwardRef(e)?u.cloneElement(e,F({...e.props,tabIndex:I===t?0:-1,role:"menuitem",ref(e){M.current[t]=e},onClick(t){var n,l;null===(n=(l=e.props).onClick)||void 0===n||n.call(l,t),t.defaultPrevented||null==y||y.events.emit("click")},onKeyDown(t){var n,l;null===(n=(l=e.props).onKeyDown)||void 0===n||n.call(l,t),t.defaultPrevented||(null==y||y.events.emit("keydown"),"menuitemcheckbox"===t.currentTarget.role&&"Enter"===t.key&&O(!1))},onMouseEnter(){j&&R&&N(t)}})):e)))))))}));p.displayName="ContextualMenuComponent";const v=(0,u.forwardRef)(((e,t)=>null===(0,l.Zm)()?u.createElement(l.RB,null,u.createElement(p,Object.assign({ref:t},e))):u.createElement(p,Object.assign({ref:t},e))));v.displayName="ContextualMenu"},72285:function(e,t,n){n.d(t,{l:function(){return v}});var l=n(78217),r=n(41994),a=n(87505),o=n(70079),i=n(54656);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,o=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var l},v=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(s):[],c=(e=>{var t,n,l,r,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&o.createElement(i.dn,{className:"jkl-portal-code-block"},c),l.length>0&&o.createElement(p,{props:l}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return c}});var l=n(26372),r=n.n(l),a=n(49597),o=n(70079),i=n(34044);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,o.useContext)(i.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||c?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return o}});var l=n(26372),r=n.n(l),a=n(70079);const o=e=>{let{className:t,density:n,id:l,...o}=e;return a.createElement("section",{role:"group","data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,id:l,...o})}},41994:function(e,t,n){n.d(t,{Q:function(){return c}});var l=n(53484),r=n(1386),a=n(26372),o=n.n(a),i=n(70079);const c=e=>{let{children:t,title:n,className:a,startExpanded:c=!1,onClick:s,id:m,...u}=e;const{0:d,1:p}=(0,i.useState)(c),{0:v}=(0,i.useState)((()=>c)),{detailsRef:f,summaryRef:g,contentRef:E,onSummaryClick:w}=(0,r.E)({onOpenChange:(e,t)=>{p(e),s&&s(t,e)},isExpanded:v});return i.createElement("details",{"data-testid":"jkl-accordion-item",...u,className:o()("jkl-accordion-item",a),ref:f,id:m},i.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:w,ref:g},n,i.createElement(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!d,bold:d})),i.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},18829:function(e,t,n){n.d(t,{w:function(){return i}});var l=n(3938),r=n(70079);const a=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M9.598 7.402L9.59 8.51l5.363-.135-7.789 7.79.77.77L15.71 9.16l-.148 5.32 1.108-.007.059-7.13-7.13.059z",fill:"currentColor"})),o=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M9.23 7.02l.036 1.748 4.771-.032-7.025 7.026 1.254 1.254 7.04-7.039-.046 4.785 1.748.037-.163-7.588-7.615-.19z",fill:"currentColor"})),i=(0,l.d)({bold:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M7.387 5.863l.046 1.495 4.079.014-5.945 5.945L6.65 14.4l5.957-5.956.003 4.09 1.494.047-.205-6.488-6.512-.23z",fill:"currentColor"})),medium:o,inherit:o},regular:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M7.737 5.97l.023.968 4.678.026-6.59 6.59.693.694L13.12 7.67l.013 4.642.968.023-.14-6.223-6.224-.141z",fill:"currentColor"})),medium:a,inherit:a}});i.displayName="ArrowNorthEastIcon"},68134:function(e,t,n){n.d(t,{X:function(){return i}});var l=n(3938),r=n(70079);const a=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M9.201 6l-.701.723 5.598 5.777L8.5 18.277l.701.723 6.299-6.5L9.201 6z",fill:"currentColor"})),o=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M9.393 5.75L8 7.173l5.214 5.327L8 17.827l1.393 1.423L16 12.5 9.393 5.75z",fill:"currentColor"})),i=(0,l.d)({bold:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M7.796 4.75L6.75 5.805l4.408 4.445-4.408 4.445 1.046 1.055 5.454-5.5-5.454-5.5z",fill:"currentColor"})),medium:o,inherit:o},regular:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M7.7 5l-.7.726 4.6 4.774L7 15.274l.7.726 5.3-5.5L7.7 5z",fill:"currentColor"})),medium:a,inherit:a}});i.displayName="ChevronRightIcon"},98509:function(e,t,n){n.d(t,{T:function(){return i}});var l=n(3938),r=n(70079);const a=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 2h10v16h-3v3H6V5h3V2zm1 1h8v14h-8V3zM9 6H7v14h8v-2H9V6z",fill:"currentColor"})),o=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 2h11v16h-4v4H4V6h4V2zm2 2h7v12h-7V4zM8 8H6v12h7v-2H8V8z",fill:"currentColor"})),i=(0,l.d)({bold:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M11.5 16.5h-6v-10H7V5H4v13h9v-3h-1.5v1.5z",fill:"currentColor"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 5v13h9v-3h3V2H7v3H4zm1.5 1.5v10h6V15H7V6.5H5.5zm3 7h6v-10h-6v10z",fill:"currentColor"})),medium:o,inherit:o},regular:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 3H8v11h7V3zM7 2v13h9V2H7z",fill:"currentColor"}),r.createElement("path",{d:"M13 18v-3h-1v2H5V6h2V5H4v13h9z",fill:"currentColor"})),medium:a,inherit:a}});i.displayName="CopyIcon"},33368:function(e,t,n){n.d(t,{Y:function(){return i}});var l=n(3938),r=n(70079);const a=e=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",...e},r.createElement("path",{fill:"currentColor",d:"M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm7 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-14 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})),o=e=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",...e},r.createElement("path",{fill:"currentColor",d:"M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"})),i=(0,l.d)({bold:{small:e=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",...e},r.createElement("path",{fill:"currentColor",d:"M6 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"})),medium:o,inherit:o},regular:{small:e=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",...e},r.createElement("path",{fill:"currentColor",d:"M11.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})),medium:a,inherit:a}});i.displayName="DotsIcon"},87505:function(e,t,n){n.d(t,{w:function(){return u}});var l=n(70079),r=n(41699),a=n(65174),o=n(6914),i=n(82546),c=n(39126),s=n(66169),m=n(94509);const u=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:d,rows:p,verticalAlign:v,...f}=e;return l.createElement(r.i,{fullWidth:!0,...f,ref:t},n&&l.createElement(o.R,{srOnly:!0},n),l.createElement(c.s,null,l.createElement(m.S,null,u.map(((e,t)=>l.createElement(s.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&d&&l.createElement(m.S,null,l.createElement(i.p,{colSpan:u.length},d)),p.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":u[t],verticalAlign:v},e))))))))}));u.displayName="DataTable"},92810:function(e,t){var n,l=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),s=Symbol.for("react.context"),m=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case l:switch(e=e.type){case a:case i:case o:case d:case p:return e;default:switch(e=e&&e.$$typeof){case m:case s:case u:case f:case v:case c:return e;default:return t}}case r:return t}}}n=Symbol.for("react.module.reference"),t.isForwardRef=function(e){return E(e)===u}},72037:function(e,t,n){e.exports=n(92810)}}]);