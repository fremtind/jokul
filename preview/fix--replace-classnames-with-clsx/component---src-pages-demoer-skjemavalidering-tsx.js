(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1922],{52921:function(e,t,r){var n=r(19163),l=r(22909),a=r(33015).f,o=n("unscopables"),s=Array.prototype;null==s[o]&&a(s,o,{configurable:!0,value:l(null)}),e.exports=function(e){s[o][e]=!0}},83345:function(e,t,r){var n=r(73012);e.exports=n("document","documentElement")},22909:function(e,t,r){var n,l=r(76824),a=r(70948),o=r(72197),s=r(96508),i=r(83345),c=r(1220),u=r(40019),m="prototype",d="script",f=u("IE_PROTO"),g=function(){},v=function(e){return"<"+d+">"+e+"</"+d+">"},p=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){try{n=new ActiveXObject("htmlfile")}catch(a){}var e,t,r;b="undefined"!=typeof document?document.domain&&n?p(n):(t=c("iframe"),r="java"+d+":",t.style.display="none",i.appendChild(t),t.src=String(r),(e=t.contentWindow.document).open(),e.write(v("document.F=Object")),e.close(),e.F):p(n);for(var l=o.length;l--;)delete b[m][o[l]];return b()};s[f]=!0,e.exports=Object.create||function(e,t){var r;return null!==e?(g[m]=l(e),r=new g,g[m]=null,r[f]=e):r=b(),void 0===t?r:a.f(r,t)}},70948:function(e,t,r){var n=r(12404),l=r(53939),a=r(33015),o=r(76824),s=r(82415),i=r(34329);t.f=n&&!l?Object.defineProperties:function(e,t){o(e);for(var r,n=s(t),l=i(t),c=l.length,u=0;c>u;)a.f(e,r=l[u++],n[r]);return e}},34329:function(e,t,r){var n=r(39814),l=r(72197);e.exports=Object.keys||function(e){return n(e,l)}},13541:function(e,t,r){r(52921)("flatMap")},38552:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return j}});r(13541);var n=r(20204),l=r(88522),a=r(90375),o=r(12867),s=r(93568),i=r(48215),c=r(68142),u=r(99534),m=r(10389),d=r(36016),f=r(30153),g=r(36508),v=r(43336),p=r(40372),b=r(70079),k=r(15364),E=r(22756),y=r(1634);const j=()=>b.createElement(E.p,{title:"Skjemavalideringseksempel"});t.default=()=>{var e,t,r,E,j,h,w;const{0:N,1:C}=(0,b.useState)("Vanlig"),{formState:_,handleSubmit:D,register:O}=(0,k.cI)({shouldFocusError:!1}),{errors:S,isSubmitted:P,isValid:x}=_,F=Object.entries(S).flatMap((e=>{let[,t]=e;return Array.isArray(t)?t.map((e=>e.message)):[t.message]})),L=(0,b.useRef)(null),[M]=(0,f.g)({ref:L,autoScroll:!1});return b.createElement(y.M,{className:"mb-40"},b.createElement("div",{className:"mb-64"},b.createElement("h1",{className:"title mb-40"},"Skjema­validerings­eksempel")),b.createElement("div",null,b.createElement(p.Y,{hideLegend:!0,defaultValue:N,labels:["Vanlig","Kompakt"],onToggle:C},"Velg variant")),b.createElement("div",{"data-layout-density":"Kompakt"===N?"compact":void 0},b.createElement("form",{onSubmit:D((e=>console.table(e)),(()=>{var e;M(),null===(e=L.current)||void 0===e||e.focus()}))},b.createElement("div",{className:"jkl-portal-scroll-anchor",tabIndex:-1,ref:L}),b.createElement(u.y,{className:"jkl-portal-paragraph",errors:F,isSubmitted:P,isValid:x}),b.createElement("p",{className:"heading-4 mb-16"},"Hvem er eier av forsikringen?"),b.createElement(v.o,Object.assign({},O("fodselsnummer",{required:"Du må fylle ut eierens fødselsnummer",pattern:{value:/^\d{11}$/,message:"Fødselsnummeret må bestå av 11 siffer"}}),{className:"mb-24",label:"Fødselsnummer",errorLabel:null===(e=_.errors.fodselsnummer)||void 0===e?void 0:e.message})),b.createElement(v.o,Object.assign({},O("fornavn",{required:"Du må fylle ut eierens fornavn"}),{className:"mb-24",autoComplete:"given-name",label:"Fornavn",errorLabel:null===(t=_.errors.fornavn)||void 0===t?void 0:t.message})),b.createElement(v.o,Object.assign({},O("etternavn",{required:"Du må fylle ut eierens etternavn"}),{className:"mb-24",autoComplete:"family-name",label:"Etternavn",errorLabel:null===(r=_.errors.etternavn)||void 0===r?void 0:r.message})),b.createElement(a.M,Object.assign({className:"mb-24",disableAfterDate:(0,o.Bb)(new Date),errorLabel:null===(E=_.errors.fodselsdato)||void 0===E?void 0:E.message,label:"Fødselsdato"},O("fodselsdato",{required:"Du må fylle ut fødselsdato",validate:{isCorrectFormat:e=>(0,s.R0)(e)||"Datoen må være skrevet i formen "+(0,i.p6)(new Date)+" eller kortformat",withinUpperBound:e=>(0,s.Xc)(e,new Date)||"Datoen må være før "+(0,i.p6)(new Date)}}))),b.createElement(g.P,Object.assign({},O("stilling",{required:"Du må oppgi eierens stilling"}),{className:"mb-40",errorLabel:null===(j=_.errors.stilling)||void 0===j?void 0:j.message,items:["Designer","Utvikler","Tester","Leder","Annet"],label:"Stilling",width:"14rem"})),b.createElement(m.S,{className:"mb-24",labelProps:{variant:"small"},legend:"Under 23",errorLabel:null===(h=_.errors.u23)||void 0===h?void 0:h.message},b.createElement(d.E,Object.assign({},O("u23",{required:"Du må oppgi om eier er under 23 år gammel"}),{label:"Ja",value:"y"})),b.createElement(d.E,Object.assign({},O("u23",{required:"Du må oppgi om eier er under 23 år gammel"}),{label:"Nei",value:"n"}))),b.createElement(c.N,{legend:"Er klient",className:"mb-40",labelProps:{variant:"small"},errorLabel:null===(w=_.errors.klient)||void 0===w?void 0:w.message},b.createElement(l.X,Object.assign({},O("klient"),{value:"ja"}),"Ja")),b.createElement(n.KM,{type:"submit"},"Gå videre"))))}},99534:function(e,t,r){"use strict";r.d(t,{y:function(){return i}});var n=r(84490),l=r(53048),a=r(70079),o=r(696);const s={title:"Feil og mangler i skjemaet"},i=(0,a.forwardRef)(((e,t)=>{const{className:r,errors:i,isSubmitted:c,isValid:u,messageBoxProps:m,...d}=e,f=c&&!u,[g]=(0,n.v)(f,{display:"grid"}),v=(0,a.useRef)(i);(0,a.useEffect)((()=>{v.current=i}),[i]);const p=i.length>v.current.length;return a.createElement("div",{ref:t,className:(0,l.Z)("jkl-form-error-message-box",r),...d},a.createElement(o.cO,{...s,...m,ref:g,role:p?"alert":"presentation"},a.createElement("ul",{className:"jkl-list"},i.filter((e=>void 0!==e)).map((e=>a.createElement("li",{className:"jkl-list__item",key:e},e))))))}));i.displayName="FormErrorMessageBox"},30153:function(e,t,r){"use strict";r.d(t,{g:function(){return l}});var n=r(70079);const l=e=>{let{ref:t,timeout:r=0,autoScroll:l=!0,options:a={behavior:"smooth"}}=e;const o=()=>{(null==t?void 0:t.current)&&t.current.scrollIntoView(a)};return(0,n.useEffect)((()=>{if(!l)return;const e=setTimeout(o,r);return()=>clearTimeout(e)}),[t,r,l]),[o]}},58675:function(e,t,r){"use strict";r.d(t,{J:function(){return a}});var n=r(70079);function l(e){return{x:e.clientX,y:e.clientY}}function a(e){const t=(0,n.useRef)(!1),r=(0,n.useRef)(),{onClick:a,onChange:o,onPointerCancel:s,onPointerDown:i,onPointerMove:c,onPointerUp:u}=e,m=(0,n.useCallback)((e=>{t.current||null==a||a(e),t.current=!1}),[a]),d=(0,n.useCallback)((e=>{var n,a;e.preventDefault(),null==(a=(n=e.target).setPointerCapture)||a.call(n,e.pointerId),r.current=l(e),t.current=!1,null==i||i(e)}),[i]),f=(0,n.useCallback)((e=>{if(e.preventDefault(),!r.current)return;const{x:n}=l(e),{x:a}=r.current;n-a>10&&o&&"on"!==t.current?(o(e,!0),t.current="on",r.current=l(e)):a-n>10&&o&&"off"!==t.current&&(o(e,!1),t.current="off",r.current=l(e)),null==c||c(e)}),[c,o]),g=(0,n.useCallback)((e=>{var t,n;e.preventDefault(),null==(n=(t=e.target).releasePointerCapture)||n.call(t,e.pointerId),r.current=void 0,"pointerup"===e.type?null==u||u(e):null==s||s(e)}),[u,s]);return{swipeHandled:t,gestureHandlers:{onClick:m,onPointerDown:d,onPointerMove:f,onPointerUp:g,onPointerCancel:g}}}},40372:function(e,t,r){"use strict";r.d(t,{Y:function(){return c}});var n=r(3438),l=r(58675),a=r(53048),o=r(70079),s=r(15089);const i=(e,t,r)=>{const{0:n,1:l}=(0,o.useState)(0),{0:a,1:i}=(0,o.useState)(0),c=(0,o.useCallback)((()=>{if(e.current&&e.current.parentElement){l(e.current.clientWidth);const r=t?e.current.parentElement.clientWidth-e.current.clientWidth:0;i(r)}}),[e,t].concat((0,s.Z)(r))),u=(0,o.useMemo)((()=>function(e){let t=!1;return function(){if(t)return;const r=e.apply(void 0,arguments);return t=!0,window.setTimeout((()=>{t=!1}),200),r}}(c)),[c]);return(0,o.useEffect)((()=>(c(),"undefined"!=typeof window&&window.addEventListener("resize",u),()=>{"undefined"!=typeof window&&window.removeEventListener("resize",u)})),[c,u]),{width:n,transform:"translateX(".concat(a,"px)")}},c=e=>{let{children:t,labels:r,className:s="",onToggle:c,defaultValue:u,hideLegend:m=!1,density:d,...f}=e;const{0:g,1:v}=(0,o.useState)(u||r[0]),p=(0,n.M)("jkl-toggle-slider"),b=(0,n.M)("jkl-toggle-slider-legend"),k=(0,o.useRef)(null),E=g===r[1],y=i(k,E,[d]),{gestureHandlers:j}=(0,l.J)({onClick:e=>{const{value:t}=e.currentTarget;v(t),c(t)},onChange:(e,t)=>{v(t?r[1]:r[0]),c(t?r[1]:r[0])}}),{onClick:h,...w}=j;return console.error("WARNING: ToggleSlider component has been deprecated and will be removed in some future version of the library"),o.createElement("fieldset",{...f,className:(0,a.Z)("jkl-toggle-slider",s),"aria-labelledby":b,"data-testid":"jkl-toggle-slider","data-density":d},o.createElement("div",{id:b,className:(0,a.Z)("jkl-toggle-slider__legend",{"jkl-toggle-slider__legend--sr-only":m})},t),o.createElement("div",{className:"jkl-toggle-slider__inputs",...w},r.map((e=>o.createElement(o.Fragment,{key:e},o.createElement("input",{className:"jkl-toggle-slider__input",type:"radio",value:e,checked:e===g,name:p,id:"".concat(e,"-").concat(p),onClick:h,onChange:()=>{}}),o.createElement("label",{className:(0,a.Z)("jkl-toggle-slider__label",{"jkl-toggle-slider__label--selected":e===g}),ref:e===g?k:void 0,htmlFor:"".concat(e,"-").concat(p)},e)))),o.createElement("span",{className:"jkl-toggle-slider__pill",style:y,"aria-hidden":!0})))}}}]);