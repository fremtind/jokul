/*! For license information please see 7e4a2e8643a28824c58a3730c39ba7e47cfa4170.js.LICENSE.txt */
"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[593],{86733:function(e,t,n){n.d(t,{gL:function(){return g},e_:function(){return E},KE:function(){return f},ZP:function(){return w}});var l=n(10188),r=n(33368),o=n(36090),a=n(98509),i=n(70079),c=n(43187),m=n(26372),s=n.n(m);const u=e=>{const{className:t,...n}=e;return i.createElement("hr",Object.assign({className:s()("jkl-contextual-menu-divider",t)},n))};var d=n(18829),v=n(68134);const p=(0,i.forwardRef)(((e,t)=>{const{className:n,children:l,icon:r,expandable:o=!1,external:a=!1,...c}=e;return i.createElement("button",Object.assign({ref:t,type:"button",role:"menuitem",className:s()("jkl-contextual-menu-item",n)},c),r&&i.createElement("span",{className:"jkl-contextual-menu-item__icon"},r),i.createElement("div",{className:"jkl-contextual-menu-item__content"},l,a&&i.createElement("div",{className:"jkl-contextual-menu-item__arrow"},i.createElement(d.w,null))),o&&i.createElement(v.X,{className:"jkl-contextual-menu-item__chevron",bold:!0}))}));p.displayName="ContextualMenuItem";const f={choiceProps:[{name:"isOpen",values:["true","false","tom"],defaultValue:2}],boolProps:["Ikke lukk ved klikk utenfor"]},g=e=>{let{boolValues:t,choiceValues:n,displayValues:m}=e;const s="tom"!==(null==n?void 0:n.isOpen)?"true"===(null==n?void 0:n.isOpen):void 0,d=(null==m?void 0:m.theme)||"none"+(null==m?void 0:m.density)||0;return i.createElement("div",{style:{width:"500px"}},i.createElement(c.r,{id:d,initialPlacement:"bottom-start",isOpen:s,keepOpenOnClickOutside:null==t?void 0:t["Ikke lukk ved klikk utenfor"],triggerElement:i.createElement(l.h,{"data-testid":"trigger-contextual-menu",title:"En kontekstuell meny med eksempelvalg for å demonstrere mulighetene i komponenten"},i.createElement(r.Y,{bold:!0}))},i.createElement(p,{icon:i.createElement(o.s,null)},"Menyvalg 1"),i.createElement(p,{onClick:()=>console.log("Hei fra Menyvalg 2")},"Menyvalg 2"),i.createElement(u,null),i.createElement(c.r,{openOnHover:!0,triggerElement:i.createElement(p,{expandable:!0},"Ekspanderende menyvalg med veldig lang tekst")},i.createElement(p,{icon:i.createElement(o.s,null)},"Ekspandert menyvalg"),i.createElement(p,null,"Ekspandert menyvalg med mer tekst")),i.createElement(c.r,{openOnHover:!0,triggerElement:i.createElement(p,{expandable:!0},"Ekspanderende menyvalg")},i.createElement(p,{icon:i.createElement(a.T,null)},"Ekspandert menyvalg"),i.createElement(p,null,"Ekspandert menyvalg med mer tekst"))))};var w=g;const E=e=>{let{boolValues:t,choiceValues:n}=e;return'\n<ContextualMenu\n    initialPlacement="bottom-start"'+(n&&"tom"!==n.isOpen?"\n    isOpen={"+n.isOpen+"}":"")+(null!=t&&t["Ikke lukk ved klikk utenfor"]?"\n    keepOpenOnClickOutside":"")+'\n    triggerElement={\n        <IconButton title="En kontekstuell meny med eksempelvalg for å demonstrere mulighetene i komponenten">\n            <DotsIcon bold />\n        </IconButton>\n    }\n>\n    <ContextualMenuItem icon={<InfoIcon />}>Menyvalg 1</ContextualMenuItem>\n    <ContextualMenuItem onClick={() => console.log("Hei fra Menyvalg 2")}>Menyvalg 2</ContextualMenuItem>\n    <ContextualMenuDivider />\n    <ContextualMenu\n        openOnHover\n        triggerElement={\n            <ContextualMenuItem expandable>Ekspanderende menyvalg med veldig lang tekst</ContextualMenuItem>\n        }\n    >\n        <ContextualMenuItem icon={<InfoIcon />}>Ekspandert menyvalg</ContextualMenuItem>\n        <ContextualMenuItem>Ekspandert menyvalg med mer tekst</ContextualMenuItem>\n    </ContextualMenu>\n    <ContextualMenu\n        openOnHover\n        triggerElement={<ContextualMenuItem expandable>Ekspanderende menyvalg</ContextualMenuItem>}\n    >\n        <ContextualMenuItem icon={<CopyIcon />}>Ekspandert menyvalg</ContextualMenuItem>\n        <ContextualMenuItem>Ekspandert menyvalg med mer tekst</ContextualMenuItem>\n    </ContextualMenu>\n</ContextualMenu>\n'}},43187:function(e,t,n){n.d(t,{r:function(){return p}});var l=n(57579),r=n(84256),o=n(88905),a=n(3438),i=n(26372),c=n.n(i),m=n(48365),s=n(89300),u=n(70079),d=n(72037);const v=(0,u.forwardRef)(((e,t)=>{const{children:n,className:i,initialPlacement:v,openOnHover:p=!1,keepOpenOnClickOutside:f=!1,triggerElement:g,isOpen:w,onToggle:E,...h}=e,x=(0,a.M)("jkl-contextual-menu"),k=(0,l.ay)(),y=(0,l.jV)(),C=(0,l.Zm)(),M=null!=C,b=(0,u.useRef)([]),{0:I,1:O}=(0,u.useState)(null),{allowHover:V,isOpen:H,setIsOpen:R}=((e,t,n)=>{const{0:l,1:r}=(0,u.useState)(!1),{0:o,1:a}=(0,u.useState)(!1);return(0,u.useEffect)((()=>{if(e)return e.events.on("click",l),e.events.on("menuopen",r),()=>{e.events.off("click",l),e.events.off("menuopen",r)};function l(){a(!1)}function r(e){e.nodeId!==t&&e.parentId===n&&a(!1)}}),[e,t,n,a]),(0,u.useEffect)((()=>{o&&e&&e.events.emit("menuopen",{parentId:n,nodeId:t})}),[e,o,t,n]),(0,u.useEffect)((()=>{function e(e){let{pointerType:t}=e;"touch"!==t&&r(!0)}function t(){r(!1)}return window.addEventListener("pointermove",e,{once:!0,capture:!0}),window.addEventListener("keydown",t,!0),()=>{window.removeEventListener("pointermove",e,{capture:!0}),window.removeEventListener("keydown",t,!0)}}),[l]),{allowHover:l,isOpen:o,setIsOpen:a}})(k,y,C),z=(0,u.useRef)(null),N=void 0!==w?w:H;(0,u.useEffect)((()=>null==E?void 0:E(N)),[N,E]);const{x:S,y:B,refs:j,placement:L,strategy:_,context:P}=(0,l.YF)({nodeId:y,open:N,onOpenChange:R,placement:v||(M?"right-start":"bottom-start"),middleware:[(0,r.cv)(2),(0,r.RR)({fallbackAxisSideDirection:"end",crossAxis:!1}),(0,r.uY)({padding:8})],whileElementsMounted:o.Me}),{getReferenceProps:Z,getFloatingProps:F,getItemProps:D}=(0,l.NI)([(0,l.XI)(P,{enabled:p&&V,delay:{open:75},handleClose:(0,l.xp)({requireIntent:!0,blockPointerEvents:!0})}),(0,l.eS)(P,{event:"mousedown"}),(0,l.bQ)(P,{outsidePress:!f}),(0,l.qs)(P,{role:"menu"}),(0,l.c0)(P,{listRef:b,activeIndex:I,nested:M,onNavigate:O})]),T=(0,l.qq)([j.setReference,t]);let q,Y;if(j.reference.current){const e=getComputedStyle(j.reference.current);q=parseInt(e.getPropertyValue("--jkl-background-color").replace("#",""),16)<8388607.5?"dark":"light",Y='"compact"'===e.getPropertyValue("--jkl-density")?"compact":"comfortable"}return u.createElement(l.mN,{id:y},u.isValidElement(g)&&("button"===g.type||d.isForwardRef(g))?u.cloneElement(g,{...Z({...h,ref:T,role:M?"menuitem":void 0,"aria-controls":x,onClick(e){e.stopPropagation()}})}):g,u.createElement(m.M,null,N&&u.createElement("div",{ref:z},u.createElement(l.ll,null,u.createElement(l.wD,{context:P,modal:!1,initialFocus:M?-1:0,returnFocus:!M},u.createElement(s.E.div,Object.assign({className:c()("jkl jkl-contextual-menu",i),"data-theme":q,"data-layout-density":Y,role:"menu",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:"easeIn",duration:.1},"data-placement":L,"aria-live":"assertive","aria-hidden":!N,ref:j.setFloating},F({id:x,style:{position:_,top:null!=B?B:"",left:null!=S?S:""}})),u.Children.map(n,((e,t)=>u.isValidElement(e)&&d.isForwardRef(e)?u.cloneElement(e,D({...e.props,tabIndex:I===t?0:-1,role:"menuitem",ref(e){b.current[t]=e},onClick(t){var n,l;null===(n=(l=e.props).onClick)||void 0===n||n.call(l,t),t.defaultPrevented||null==k||k.events.emit("click")},onKeyDown(t){var n,l;null===(n=(l=e.props).onKeyDown)||void 0===n||n.call(l,t),t.defaultPrevented||(null==k||k.events.emit("keydown"),"menuitemcheckbox"===t.currentTarget.role&&"Enter"===t.key&&R(!1))},onMouseEnter(){V&&N&&O(t)}})):e))))))))}));v.displayName="ContextualMenuComponent";const p=(0,u.forwardRef)(((e,t)=>null===(0,l.Zm)()?u.createElement(l.RB,null,u.createElement(v,Object.assign({ref:t},e))):u.createElement(v,Object.assign({ref:t},e))));p.displayName="ContextualMenu"},18829:function(e,t,n){n.d(t,{w:function(){return i}});var l=n(3938),r=n(70079);const o=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M9.598 7.402L9.59 8.51l5.363-.135-7.789 7.79.77.77L15.71 9.16l-.148 5.32 1.108-.007.059-7.13-7.13.059z",fill:"currentColor"})),a=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M9.23 7.02l.036 1.748 4.771-.032-7.025 7.026 1.254 1.254 7.04-7.039-.046 4.785 1.748.037-.163-7.588-7.615-.19z",fill:"currentColor"})),i=(0,l.d)({bold:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M7.387 5.863l.046 1.495 4.079.014-5.945 5.945L6.65 14.4l5.957-5.956.003 4.09 1.494.047-.205-6.488-6.512-.23z",fill:"currentColor"})),medium:a,inherit:a},regular:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M7.737 5.97l.023.968 4.678.026-6.59 6.59.693.694L13.12 7.67l.013 4.642.968.023-.14-6.223-6.224-.141z",fill:"currentColor"})),medium:o,inherit:o}});i.displayName="ArrowNorthEastIcon"},68134:function(e,t,n){n.d(t,{X:function(){return i}});var l=n(3938),r=n(70079);const o=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M9.201 6l-.701.723 5.598 5.777L8.5 18.277l.701.723 6.299-6.5L9.201 6z",fill:"currentColor"})),a=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M9.393 5.75L8 7.173l5.214 5.327L8 17.827l1.393 1.423L16 12.5 9.393 5.75z",fill:"currentColor"})),i=(0,l.d)({bold:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M7.796 4.75L6.75 5.805l4.408 4.445-4.408 4.445 1.046 1.055 5.454-5.5-5.454-5.5z",fill:"currentColor"})),medium:a,inherit:a},regular:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M7.7 5l-.7.726 4.6 4.774L7 15.274l.7.726 5.3-5.5L7.7 5z",fill:"currentColor"})),medium:o,inherit:o}});i.displayName="ChevronRightIcon"},98509:function(e,t,n){n.d(t,{T:function(){return i}});var l=n(3938),r=n(70079);const o=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 2h10v16h-3v3H6V5h3V2zm1 1h8v14h-8V3zM9 6H7v14h8v-2H9V6z",fill:"currentColor"})),a=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 2h11v16h-4v4H4V6h4V2zm2 2h7v12h-7V4zM8 8H6v12h7v-2H8V8z",fill:"currentColor"})),i=(0,l.d)({bold:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M11.5 16.5h-6v-10H7V5H4v13h9v-3h-1.5v1.5z",fill:"currentColor"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 5v13h9v-3h3V2H7v3H4zm1.5 1.5v10h6V15H7V6.5H5.5zm3 7h6v-10h-6v10z",fill:"currentColor"})),medium:a,inherit:a},regular:{small:e=>r.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 3H8v11h7V3zM7 2v13h9V2H7z",fill:"currentColor"}),r.createElement("path",{d:"M13 18v-3h-1v2H5V6h2V5H4v13h9z",fill:"currentColor"})),medium:o,inherit:o}});i.displayName="CopyIcon"},33368:function(e,t,n){n.d(t,{Y:function(){return i}});var l=n(3938),r=n(70079);const o=e=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",...e},r.createElement("path",{fill:"currentColor",d:"M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm7 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-14 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})),a=e=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",...e},r.createElement("path",{fill:"currentColor",d:"M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"})),i=(0,l.d)({bold:{small:e=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",...e},r.createElement("path",{fill:"currentColor",d:"M6 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"})),medium:a,inherit:a},regular:{small:e=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",...e},r.createElement("path",{fill:"currentColor",d:"M11.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})),medium:o,inherit:o}});i.displayName="DotsIcon"},92810:function(e,t){var n,l=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),m=Symbol.for("react.context"),s=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case l:switch(e=e.type){case o:case i:case a:case d:case v:return e;default:switch(e=e&&e.$$typeof){case s:case m:case u:case f:case p:case c:return e;default:return t}}case r:return t}}}n=Symbol.for("react.module.reference"),t.isForwardRef=function(e){return w(e)===u}},72037:function(e,t,n){e.exports=n(92810)}}]);