"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7704],{79779:function(e,t,n){n.d(t,{iN:function(){return j},V7:function(){return g},UO:function(){return k}});var a=n(92379),l=n(23035),r=n(99767),i=n(80324),o=n.n(i),c=n(75246),s=n(50082);const d=["className","pointingDown","variant","bold"],m=e=>{let{className:t,pointingDown:n,variant:l,bold:i=!1}=e,m=(0,r.Z)(e,d);return a.createElement("div",Object.assign({},m,{className:o()("jkl-icon","jkl-icon--animated",{"jkl-icon--bold":i,["jkl-icon--"+l]:!!l},"jkl-animated-vertical-arrows",t)}),a.createElement("div",{className:"jkl-animated-vertical-arrows__slider","data-show":n?"down":"up"},a.createElement(s.H,{className:"jkl-animated-vertical-arrows__arrow",variant:l,bold:i}),a.createElement(c.v,{className:"jkl-animated-vertical-arrows__arrow",variant:l,bold:i})))};m.displayName="ArrowVerticalAnimated";var u=n(40018),p=n(2555);const v=["className","pointingRight","variant","bold"],b=e=>{let{className:t,pointingRight:n,variant:l,bold:i=!1}=e,c=(0,r.Z)(e,v);return a.createElement("div",Object.assign({},c,{className:o()("jkl-icon","jkl-icon--animated",{"jkl-icon--bold":i,["jkl-icon--"+l]:!!l},"jkl-animated-horizontal-arrows",t)}),a.createElement("div",{className:"jkl-animated-horizontal-arrows__slider","data-show":n?"right":"left"},a.createElement(u.Y,{className:"jkl-animated-horizontal-arrows__arrow",variant:l,bold:i}),a.createElement(p.L,{className:"jkl-animated-horizontal-arrows__arrow",variant:l,bold:i})))};b.displayName="ArrowHorizontalAnimated";var f=n(68181);const N=["className","isPlus","variant","bold"],y=e=>{let{className:t,isPlus:n,variant:l,bold:i=!1}=e,c=(0,r.Z)(e,N);return a.createElement("div",Object.assign({},c,{className:o()("jkl-icon","jkl-icon--animated",{"jkl-icon--bold":i,["jkl-icon--"+l]:!!l},t)}),a.createElement(f.p,{variant:l,bold:i,className:o()("jkl-icons-animated__plus","jkl-icons-animated__plus--"+(n?"plus":"close"))}))};y.displayName="PlusRemoveAnimated";const E=e=>{let{renderIcon:t,iconName:n}=e;const[l,r]=a.useState(!1);return a.createElement(a.Fragment,null,a.createElement("div",{title:n||t.name},t(l)),a.createElement("div",{style:{textAlign:"right"}},a.createElement("button",{"data-density":"compact",className:"jkl-button jkl-button--tertiary jkl-spacing-2xl--left",onClick:()=>r(!l)},"Animér ",a.createElement("span",{className:"jkl-sr-only"},n))))};var h=n(20213);const k={boolProps:["Bold"],choiceProps:[{name:"Variant",values:["inherit","medium","small"],defaultValue:1}]},j=e=>{let{choiceValues:t,boolValues:n}=e;const r=t?t.Variant:"small",i=(null==n?void 0:n.Bold)||!1,{0:o,1:c}=(0,a.useState)("1rem");return a.createElement("div",{style:{width:"100%"}},"inherit"===r&&a.createElement(l.o,{label:"Fontstørrelse",className:"jkl-spacing-24--bottom",value:o,onChange:e=>c(e.target.value),width:"10ch"}),a.createElement(h.e,{style:{fontSize:o},columns:"two"},a.createElement(E,{renderIcon:e=>a.createElement(m,{bold:i,pointingDown:e,variant:r}),iconName:m.displayName}),a.createElement(E,{renderIcon:e=>a.createElement(b,{bold:i,pointingRight:e,variant:r}),iconName:b.displayName}),a.createElement(E,{renderIcon:e=>a.createElement(y,{bold:i,isPlus:e,variant:r}),iconName:y.displayName})))},g=e=>{let{boolValues:t,choiceValues:n}=e;return'\n<ArrowVerticalAnimated variant="'+(null==n?void 0:n.Variant)+'"'+(null!=t&&t.Bold?" bold":"")+' pointingDown={isPointingDown} />\n<ArrowHorizontalAnimated variant="'+(null==n?void 0:n.Variant)+'"'+(null!=t&&t.Bold?" bold":"")+' pointingRight={isPointingRight} />\n<PlusRemoveAnimated variant="'+(null==n?void 0:n.Variant)+'"'+(null!=t&&t.Bold?" bold":"")+" isPlus={isPlus} />\n"}},58714:function(e,t,n){n.d(t,{Nf:function(){return Q},dQ:function(){return Y},oD:function(){return M}});var a=n(92379),l=n(23035),r=n(75246),i=n(40018),o=n(51060);const c=e=>a.createElement(o.J,e,"");c.displayName="ArrowNorthEastIcon";var s=n(2555),d=n(50082);const m=e=>a.createElement(o.J,e,"");m.displayName="CalendarIcon";const u=e=>a.createElement(o.J,e,"");u.displayName="CheckIcon";const p=e=>a.createElement(o.J,e,"");p.displayName="ChevronDownIcon";var v=n(96697),b=n(82764);const f=e=>a.createElement(o.J,e,"");f.displayName="ChevronUpIcon";const N=e=>a.createElement(o.J,e,"");N.displayName="CloseIcon";var y=n(3140);const E=e=>a.createElement(o.J,e,"");E.displayName="DotsIcon";const h=e=>a.createElement(o.J,e,"");h.displayName="DragIcon";const k=e=>a.createElement(o.J,Object.assign({bold:!0,filled:!0},e),"");k.displayName="ErrorIcon";var j=n(99767),g=n(80324),w=n.n(g);const _=["as","bold","className","variant","data-testid","style"],x=e=>{let{as:t="div",bold:n=!1,className:l,variant:r="inherit","data-testid":i,style:o}=e,c=(0,j.Z)(e,_);const s=t;return a.createElement(s,Object.assign({className:w()(l,"jkl-icon","jkl-icon-green-check","jkl-icon--"+r,{"jkl-icon--bold":n}),"aria-hidden":"true",style:o,"data-testid":i},c),a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px"},a.createElement("circle",{cx:"12",cy:"12",r:"10"}),a.createElement("path",{fillRule:"evenodd",d:"M17.52 9.54 10.7 16.2l-4.21-4.1 1.04-1.08 3.17 3.09 5.79-5.65 1.04 1.08Z",clipRule:"evenodd"})))};x.displayName="GreenCheckIcon";const I=e=>a.createElement(o.J,e,"");I.displayName="HamburgerIcon";const O=e=>a.createElement(o.J,Object.assign({bold:!0,filled:!0},e),"");O.displayName="InfoIcon";const J=e=>a.createElement(o.J,e,"");J.displayName="LinkIcon";const P=e=>a.createElement(o.J,e,"");P.displayName="MinusIcon";const C=e=>a.createElement(o.J,e,"");C.displayName="OpenInNewIcon";const R=e=>a.createElement(o.J,e,"");R.displayName="PenIcon";var A=n(68181);const V=e=>a.createElement(o.J,e,"");V.displayName="QuestionIcon";const L=["as","bold","className","variant","data-testid","style"],B=e=>{let{as:t="div",bold:n=!1,className:l,variant:r="inherit","data-testid":i,style:o}=e,c=(0,j.Z)(e,L);const s=t;return a.createElement(s,Object.assign({className:w()(l,"jkl-icon","jkl-icon-red-cross","jkl-icon--"+r,{"jkl-icon--bold":n}),"aria-hidden":"true",style:o,"data-testid":i},c),a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px"},a.createElement("circle",{cx:"12",cy:"12",r:"10"}),a.createElement("path",{d:"m15.71 7.23 1.06 1.06-8.48 8.48-1.06-1.06 8.48-8.48Z"}),a.createElement("path",{d:"m8.29 7.23 8.48 8.48-1.06 1.06L7.23 8.3l1.06-1.06Z"})))};B.displayName="RedCrossIcon";var S=n(49095);const D=e=>a.createElement(o.J,Object.assign({bold:!0,filled:!0},e),"");D.displayName="SuccessIcon";const Z=e=>a.createElement(o.J,e,"");Z.displayName="ThumbDownIcon";const T=e=>a.createElement(o.J,e,"");T.displayName="ThumbUpIcon";const F=e=>a.createElement(o.J,e,"");F.displayName="TrashCanIcon";const z=e=>a.createElement(o.J,Object.assign({bold:!0,filled:!0},e),"");z.displayName="WarningIcon";const H=e=>{let{name:t,renderIcon:n}=e;return a.createElement("div",{title:t||n.name},n())};var U=n(20213);const M={boolProps:["Bold"],choiceProps:[{name:"Variant",values:["inherit","medium","small"],defaultValue:1}]},W=[r.v,i.Y,c,s.L,d.H,m,u,p,v.w,b.X,f,N,y.T,E,h,k,x,I,O,J,P,C,R,A.p,V,B,S.W,D,Z,T,F,z],Q=e=>{let{choiceValues:t,boolValues:n}=e;const r=t?t.Variant:"small",i=(null==n?void 0:n.Bold)||!1,{0:o,1:c}=(0,a.useState)("1rem");return a.createElement("div",{style:{width:"100%"}},"inherit"===r&&a.createElement(l.o,{label:"Fontstørrelse",className:"jkl-spacing-24--bottom",value:o,onChange:e=>c(e.target.value),width:"10ch"}),a.createElement(U.e,{style:{fontSize:o},columns:"four"},W.map((e=>a.createElement(H,{key:e.displayName,renderIcon:()=>a.createElement(e,{bold:i,variant:r}),name:e.displayName})))))},Y=e=>{let{boolValues:t,choiceValues:n}=e;return W.map((e=>"<"+e.displayName+' variant="'+(null==n?void 0:n.Variant)+'"'+(null!=t&&t.Bold?" bold":"")+" />")).join("\n")}},20213:function(e,t,n){n.d(t,{e:function(){return i}});var a=n(99767),l=n(92379);const r=["columns","children"],i=e=>{let{columns:t,children:n}=e,i=(0,a.Z)(e,r);return l.createElement("div",Object.assign({className:"jkl-example-grid jkl-example-grid--"+t+"-columns"},i),n)}},51060:function(e,t,n){n.d(t,{J:function(){return c}});var a=n(99767),l=n(80324),r=n.n(l),i=n(92379);const o=["bold","children","className","filled","variant"],c=i.forwardRef((function(e,t){const{bold:n,children:l,className:c,filled:s,variant:d}=e,m=(0,a.Z)(e,o);return i.createElement("span",Object.assign({"aria-hidden":!0,ref:t,className:r()("jkl-icon",c,{"jkl-icon--filled":s,"jkl-icon--bold":n,["jkl-icon--"+d]:!!d})},m),l)}))},75246:function(e,t,n){n.d(t,{v:function(){return r}});var a=n(92379),l=n(51060);const r=e=>a.createElement(l.J,e,"");r.displayName="ArrowDownIcon"},40018:function(e,t,n){n.d(t,{Y:function(){return r}});var a=n(92379),l=n(51060);const r=e=>a.createElement(l.J,e,"");r.displayName="ArrowLeftIcon"},2555:function(e,t,n){n.d(t,{L:function(){return r}});var a=n(92379),l=n(51060);const r=e=>a.createElement(l.J,e,"");r.displayName="ArrowRightIcon"},50082:function(e,t,n){n.d(t,{H:function(){return r}});var a=n(92379),l=n(51060);const r=e=>a.createElement(l.J,e,"");r.displayName="ArrowUpIcon"},96697:function(e,t,n){n.d(t,{w:function(){return r}});var a=n(92379),l=n(51060);const r=e=>a.createElement(l.J,e,"");r.displayName="ChevronLeftIcon"},82764:function(e,t,n){n.d(t,{X:function(){return r}});var a=n(92379),l=n(51060);const r=e=>a.createElement(l.J,e,"");r.displayName="ChevronRightIcon"},3140:function(e,t,n){n.d(t,{T:function(){return r}});var a=n(92379),l=n(51060);const r=e=>a.createElement(l.J,e,"");r.displayName="CopyIcon"},68181:function(e,t,n){n.d(t,{p:function(){return r}});var a=n(92379),l=n(51060);const r=e=>a.createElement(l.J,e,"");r.displayName="PlusIcon"},49095:function(e,t,n){n.d(t,{W:function(){return r}});var a=n(92379),l=n(51060);const r=e=>a.createElement(l.J,e,"");r.displayName="SearchIcon"},87951:function(e,t,n){n.d(t,{J:function(){return d}});var a=n(99767),l=n(55086),r=n(80324),i=n.n(r),o=n(92379);const c=["action","align","aria-invalid","className","density","maxLength","style","type","unit","width","actionButton"];function s(e,t){if(e)return{width:e};if(t){return{width:"calc("+(Math.min(t,40)+"ch")+" + "+"24px"+")"}}}const d=(0,o.forwardRef)(((e,t)=>{const{action:n,align:r="left","aria-invalid":d,className:m="",density:u,maxLength:p,style:v,type:b="text",unit:f,width:N,actionButton:y}=e,E=(0,a.Z)(e,c);return o.createElement("div",{className:"jkl-text-input-wrapper","data-invalid":d,style:Object.assign({},v,s(N,p))},o.createElement("input",Object.assign({"aria-invalid":d,ref:t,className:i()("jkl-text-input__input",m,{"jkl-text-input__input--align-right":"right"===r}),maxLength:p,type:b},E)),f&&o.createElement("span",{className:"jkl-text-input__unit"},f),!n&&y&&o.cloneElement(y,{className:i()("jkl-text-input-action-button",y.props.className)}),n&&!y&&o.createElement(l.h,{density:u,className:i()("jkl-text-input-action-button",n.className),title:n.label,onClick:n.onClick,onFocus:n.onFocus,onBlur:n.onBlur,ref:n.buttonRef,type:n.type||"button"},n.icon))}));d.displayName="BaseInputField"},23035:function(e,t,n){n.d(t,{o:function(){return d}});var a=n(99767),l=n(29311),r=n(80324),i=n.n(r),o=n(92379),c=n(87951);const s=["label","className","density","errorLabel","helpLabel","inline","inputClassName","labelProps","supportLabelProps","tooltip"],d=(0,o.forwardRef)(((e,t)=>{const{label:n,className:r,density:d,errorLabel:m,helpLabel:u,inline:p,inputClassName:v,labelProps:b,supportLabelProps:f,tooltip:N}=e,y=(0,a.Z)(e,s),E={label:n,density:d,errorLabel:m,helpLabel:u,labelProps:b,inline:p,supportLabelProps:f,tooltip:N};return o.createElement(l.B,Object.assign({},E,{className:i()(r,"jkl-text-input",{"jkl-text-input--inline":p}),"data-testid":"jkl-text-input",density:p?"compact":d}),o.createElement(c.J,Object.assign({ref:t},y,{className:v})))}));d.displayName="TextInput"},75482:function(e,t,n){n.d(t,{l:function(){return v}});var a=n(96845),l=n(41162),r=n(74797),i=n(92379),o=n(25329);const c=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:l}=t,r=n>0,i=a-n>l;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",i)},u=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var a},v=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(d):[],r=n.props?Object.values(n.props).filter(s):[],c=(e=>{var t,n,a,l,r,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(r=l.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&i.createElement(o.dn,{className:"jkl-portal-code-block"},c),a.length>0&&i.createElement(p,{props:a}),r.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:r})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return o}});var a=n(48467),l=n(58990),r=n(92379),i=n(25329);const o=e=>{let{variant:t,component:n}=e;return r.createElement("section",{className:"suggestion-block"},r.createElement("div",{className:"suggestion-block__content"},r.createElement(l.U,null),r.createElement(i.nv,null,c[t].text)),r.createElement(a.r,{href:c[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},c={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,t,n){n.d(t,{M:function(){return c}});var a=n(80324),l=n.n(a),r=n(24157),i=n(92379),o=n(69215);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,i.useContext)(o.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(r.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||c?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},96845:function(e,t,n){n.d(t,{U:function(){return c}});var a=n(99767),l=n(651),r=n(80324),i=n.n(r);const o=["className","density","id"],c=e=>{let{className:t,density:n,id:r}=e,c=(0,a.Z)(e,o);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:i()("jkl-accordion",t),"data-density":n,id:r},c))}},41162:function(e,t,n){n.d(t,{Q:function(){return m}});var a=n(99767),l=n(651),r=n(42054),i=n(95020),o=n(80324),c=n.n(o),s=n(92379);const d=["children","title","className","startExpanded","onClick","id"],m=e=>{let{children:t,title:n,className:o,startExpanded:m=!1,onClick:u,id:p}=e,v=(0,a.Z)(e,d);const[b,f]=(0,s.useState)(m),[N]=(0,s.useState)((()=>m)),{detailsRef:y,summaryRef:E,contentRef:h,onSummaryClick:k}=(0,i.E)({onOpenChange:(e,t)=>{f(e),u&&u(t,e)},isExpanded:N});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},v,{className:c()("jkl-accordion-item",o),ref:y,id:p,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:k,ref:E,children:[n,(0,l.jsx)(r.K,{className:"jkl-accordion-item__arrow",pointingDown:!b,bold:b})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},58990:function(e,t,n){n.d(t,{U:function(){return d}});var a=n(92379),l=n(55650),r=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const d=e=>a.createElement(l.J,((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&s(e,n,t[n]);return e})({},e),"");d.displayName="QuestionIcon"},74797:function(e,t,n){n.d(t,{w:function(){return y}});var a=n(92379),l=n(94207),r=n(49309),i=n(36774),o=n(64081),c=n(64483),s=n(42104),d=n(98746),m=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const y=(0,a.forwardRef)(((e,t)=>{var n,m=e,{caption:y,columns:E,emptyTableText:h,rows:k,verticalAlign:j}=m,g=((e,t)=>{var n={};for(var a in e)b.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&v)for(var a of v(e))t.indexOf(a)<0&&f.call(e,a)&&(n[a]=e[a]);return n})(m,["caption","columns","emptyTableText","rows","verticalAlign"]);return a.createElement(l.i,(n=((e,t)=>{for(var n in t||(t={}))b.call(t,n)&&N(e,n,t[n]);if(v)for(var n of v(t))f.call(t,n)&&N(e,n,t[n]);return e})({fullWidth:!0},g),u(n,p({ref:t}))),y&&a.createElement(i.R,{srOnly:!0},y),a.createElement(c.s,null,a.createElement(d.S,null,E.map(((e,t)=>a.createElement(s.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(r.R,null,0===k.length&&h&&a.createElement(d.S,null,a.createElement(o.p,{colSpan:E.length},h)),k.map(((e,t)=>a.createElement(d.S,{key:t},e.map(((e,t)=>a.createElement(o.p,{key:t,"data-th":E[t],verticalAlign:j},e))))))))}));y.displayName="DataTable"}}]);