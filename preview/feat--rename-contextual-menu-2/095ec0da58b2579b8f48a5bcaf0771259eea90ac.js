"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5862],{12498:function(e,t,n){function a(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:function(){return a}})},64907:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(92923),r=n(12498);function l(e,t){(0,r.Z)(2,arguments);var n=(0,a.Z)(e),l=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}(t);return isNaN(l)?new Date(NaN):l?(n.setDate(n.getDate()+l),n):n}},19305:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(92923),r=n(12498);function l(e,t){(0,r.Z)(2,arguments);var n=(0,a.Z)(e),l=(0,a.Z)(t);return 12*(n.getFullYear()-l.getFullYear())+(n.getMonth()-l.getMonth())}},91866:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(92923),r=n(12498);function l(e,t){(0,r.Z)(2,arguments);var n=(0,a.Z)(e),l=(0,a.Z)(t);return n.getTime()<l.getTime()}},41083:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(9634),r=n(12498);function l(e){return(0,r.Z)(1,arguments),function(e,t){(0,r.Z)(2,arguments);var n=(0,a.Z)(e),l=(0,a.Z)(t);return n.getTime()===l.getTime()}(e,Date.now())}},9634:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(92923),r=n(12498);function l(e){(0,r.Z)(1,arguments);var t=(0,a.Z)(e);return t.setHours(0,0,0,0),t}},92923:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}n.d(t,{Z:function(){return l}});var r=n(12498);function l(e){(0,r.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===a(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}},90375:function(e,t,n){n.d(t,{M:function(){return G}});var a=n(98129),r=n(81159),l=n(84490),o=n(17149),c=n(24721),s=n(18887),u=n(92326),i=n(26372),d=n.n(i),f=n(9634),m=n(70079),h=n(99581),g=n(6835),p=n(59525),D=n(33378),y=n(3438);const v=(e,t)=>{let n;switch(t.type){case"SET_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+t.newOffset),{...e,offset:t.newOffset,shownDate:n};case"ADD_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+e.offset+t.addedOffset),{...e,offset:e.offset+t.addedOffset,shownDate:n};case"SET_SELECTED_DATE":return b(t.newDate);default:return e}},b=e=>({selectedDate:e,offset:0,shownDate:e});var k=n(15089),w=n(64907),E=n(19305),M=n(91866),O=n(41083),S=n(12867);function _(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>t.some((t=>(t&&t(e),e.defaultPrevented)))}function C(e){let{calendars:t,offset:n,minDate:a}=e;if(n>1&&a){const{firstDayOfMonth:e}=t[0],r=(0,E.Z)(e,a);r<n&&(n=r)}return n}const F=3;function N(e){let{calendars:t,offset:n,maxDate:a}=e;if(n>1&&a){const{lastDayOfMonth:e}=t[t.length-1],r=(0,E.Z)(a,e);r<n&&(n=r)}return n}function Z(e){let{calendars:t,minDate:n}=e;if(!n)return!1;const{firstDayOfMonth:a}=t[0],r=(0,w.Z)(a,-1);return!!(0,M.Z)(r,n)}function j(e){let{calendars:t,maxDate:n}=e;if(!n)return!1;const{lastDayOfMonth:a}=t[t.length-1],r=(0,w.Z)(a,1);return!!(0,M.Z)(n,r)}function x(e){let{date:t,selected:n,monthsToDisplay:a,offset:r,minDate:l,maxDate:o,firstDayOfWeek:c,showOutsideDays:s}=e;const u=[],i=function(e,t,n){let a=(0,f.Z)(e);if(t){const e=(0,f.Z)(t);(0,M.Z)(a,e)&&(a=e)}if(n){const e=(0,f.Z)(n);(0,M.Z)(e,a)&&(a=e)}return a}(t,l,o);for(let d=0;d<a;d++){const e=T({month:i.getMonth()+d+r,year:i.getFullYear(),selectedDates:n,minDate:l,maxDate:o,firstDayOfWeek:c,showOutsideDays:s});u.push(e)}return u}function T(e){let{month:t,year:n,selectedDates:a,minDate:r,maxDate:l,firstDayOfWeek:o,showOutsideDays:c}=e;const s=function(e,t){const n=new Date(t,e,1);e=n.getMonth(),t=n.getFullYear();const a=32-new Date(t,e,32).getDate();return{daysInMonth:a,month:e,year:t}}(t,n),u=s.daysInMonth;t=s.month,n=s.year;const i=[];for(let p=1;p<=u;p++){const e=new Date(n,t,p),o={date:e,selected:Y(a,e),selectable:L(r,l,e),today:(0,O.Z)(e),prevMonth:!1,nextMonth:!1};i.push(o)}const d=new Date(n,t,1),f=new Date(n,t,u),m=function(e){let{firstDayOfMonth:t,minDate:n,maxDate:a,selectedDates:r,firstDayOfWeek:l,showOutsideDays:o}=e;const c=[];let s=(t.getDay()+7-l)%7;if(o){const e=(0,w.Z)(t,-1),l=e.getDate(),o=e.getMonth(),u=e.getFullYear();let i=0;for(;i<s;){const e=new Date(u,o,l-i),t={date:e,selected:Y(r,e),selectable:L(n,a,e),today:!1,prevMonth:!0,nextMonth:!1};c.unshift(t),i++}}else for(;s>0;)c.unshift(""),s--;return c}({firstDayOfMonth:d,minDate:r,maxDate:l,selectedDates:a,firstDayOfWeek:o,showOutsideDays:c}),h=function(e){let{lastDayOfMonth:t,minDate:n,maxDate:a,selectedDates:r,firstDayOfWeek:l,showOutsideDays:o}=e;const c=[];let s=(t.getDay()+7-l)%7;if(o){const e=(0,w.Z)(t,1),l=e.getMonth(),o=e.getFullYear();let u=0;for(;u<6-s;){const e=new Date(o,l,1+u),t={date:e,selected:Y(r,e),selectable:L(n,a,e),today:!1,prevMonth:!1,nextMonth:!0};c.push(t),u++}}else for(;s<6;)c.push(""),s++;return c}({lastDayOfMonth:f,minDate:r,maxDate:l,selectedDates:a,firstDayOfWeek:o,showOutsideDays:c});i.unshift.apply(i,(0,k.Z)(m)),i.push.apply(i,(0,k.Z)(h));const g=function(e){const t=Math.ceil(e.length/7),n=[];for(let a=0;a<t;a++){n[a]=[];for(let t=0;t<7;t++)n[a].push(e[7*a+t])}return n}(i);return{firstDayOfMonth:d,lastDayOfMonth:f,month:t,year:n,weeks:g}}function Y(e,t){return!!e&&(e=Array.isArray(e)?e:[e]).some((e=>e instanceof Date&&(0,f.Z)(e).getTime()===(0,f.Z)(t).getTime()))}function L(e,t,n){return!(e&&(0,M.Z)(n,e)||t&&(0,M.Z)(t,n))}function A(e,t,n){return Boolean(n&&e>n||t&&e<t)}function P(e,t,n,a){let r=e||t||new Date;return n&&(r=n>r?n:r),a&&(r=a<r?a:r),r}function I(e){return void 0!==e}function W(e,t){let{onClick:n,dateObj:a}=t;return{onClick:_(n,(t=>{e(a,t)})),disabled:!a.selectable,"aria-pressed":a.selected,role:"button"}}function R(e,t){let{minDate:n,offsetMonth:a,handleOffsetChanged:r}=e,{onClick:l,offset:o=1,calendars:c}=t;const s="Gå tilbake ".concat(o," måned").concat(1===o?"":"er");return{onClick:_(l,(()=>{r(a-C({calendars:c,offset:o,minDate:n}))})),disabled:Z({calendars:c,minDate:n}),"aria-label":s,title:s}}function B(e,t){let{maxDate:n,offsetMonth:a,handleOffsetChanged:r}=e,{onClick:l,offset:o=1,calendars:c}=t;const s="Gå frem ".concat(o," måned").concat(1===o?"":"er");return{onClick:_(l,(()=>{r(a+N({calendars:c,offset:o,maxDate:n}))})),disabled:j({calendars:c,maxDate:n}),"aria-label":s,title:s}}function K(e){let{date:t=(0,f.Z)(new Date),maxDate:n,minDate:a,monthsToDisplay:r=1,firstDayOfWeek:l=0,showOutsideDays:o=!0,offset:c,onDateSelected:s,onOffsetChanged:u,selected:i}=e;const{0:d,1:h}=(0,m.useState)(0),g=(D=d,I(p=c)?p:D);var p,D;function y(e){I(c)||h(e),u(e)}return{calendars:x({date:t,selected:i,monthsToDisplay:r,minDate:a,maxDate:n,offset:g,firstDayOfWeek:l,showOutsideDays:o}),getDateProps:W.bind(null,s),getBackProps:R.bind(null,{minDate:a,offsetMonth:g,handleOffsetChanged:y}),getForwardProps:B.bind(null,{maxDate:n,offsetMonth:g,handleOffsetChanged:y}),handleOffsetChanged:y}}const q=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],J=["man","tir","ons","tor","fre","lør","søn"],V=(0,m.forwardRef)(((e,t)=>{const{hidden:n,date:a,defaultSelected:r,density:l,minDate:o,maxDate:c,days:s=J,months:u=q,monthLabel:i="Velg måned",yearLabel:f="Velg år",yearsToShow:w=F,onTabOutside:E,...M}=e,O=(0,y.M)("jkl-calendar"),{0:{offset:S,selectedDate:_,shownDate:x},1:T}=(0,m.useReducer)(v,P(a,r,o,c),b),Y=x.getMonth(),L=x.getFullYear();(0,m.useEffect)((()=>{T({type:"SET_SELECTED_DATE",newDate:P(a,r,o,c)})}),[a,r,o,c]);const A=(0,m.useCallback)((e=>{T({type:"SET_OFFSET",newOffset:e})}),[]),{calendars:I,getBackProps:W,getDateProps:R,getForwardProps:B,handleOffsetChanged:V}=K({date:_,selected:_,minDate:o,maxDate:c,offset:S,onOffsetChanged:A,firstDayOfWeek:1,...M}),U=(0,m.useRef)(null),G=(0,m.useCallback)((e=>{if(!U.current)return;const t=document.activeElement,n=U.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),a=async e=>{null==t||t.setAttribute("tabindex","-1"),e.setAttribute("tabindex","0"),e.focus()};n.forEach(((r,l)=>{const s=l+e;if(r==t)if(s<=n.length-1&&s>=0)a(n[s]);else if(e<0){if(Z({calendars:I,minDate:o}))return;if((0,h.flushSync)((()=>{V(S-C({calendars:I,offset:1,minDate:o}))})),!U.current)return;const e=U.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');e[e.length+s]&&(e[0].setAttribute("tabindex","-1"),a(e[e.length+s]))}else{if(j({calendars:I,maxDate:c}))return;if((0,h.flushSync)((()=>{V(S+N({calendars:I,offset:1,maxDate:c}))})),!U.current)return;const e=U.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');e[s-n.length]&&(e[0].setAttribute("tabindex","-1"),a(e[s-n.length]))}}))}),[V,U,S,I,c,o]),H=(0,m.useCallback)((e=>{switch(e.key){case"ArrowUp":G(-7),e.preventDefault();break;case"ArrowRight":G(1),e.preventDefault();break;case"ArrowDown":G(7),e.preventDefault();break;case"ArrowLeft":G(-1),e.preventDefault()}}),[G]),Q=(0,m.useCallback)((e=>{var t;if("Tab"!==e.key)return;const n=null==(t=U.current)?void 0:t.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!n)return;const a=n[0],r=n[n.length-1];e.shiftKey||document.activeElement!==r?e.shiftKey&&document.activeElement===a&&(r.focus(),e.preventDefault()):(a.focus(),e.preventDefault())}),[]),X=(0,m.useCallback)((e=>{const{date:t,selected:n,selectable:a,prevMonth:r,nextMonth:l}=e;return!!a&&(!!n||(t.toString()===(null==o?void 0:o.toString())||!r&&!l&&x.getFullYear()===t.getFullYear()&&_.getMonth()!==t.getMonth()&&1===t.getDate()))}),[x,o,_]),$=(0,m.useCallback)((()=>{o&&x.getFullYear()-o.getFullYear()==0&&x.getMonth()-o.getMonth()==1?document.querySelectorAll(".jkl-calendar-navigation__arrow")[1].focus():c&&c.getFullYear()-x.getFullYear()==0&&c.getMonth()-x.getMonth()==1&&document.querySelectorAll(".jkl-calendar-navigation__arrow")[0].focus()}),[o,c,x]),z=(0,m.useCallback)((e=>{if(4!==e.target.value.length)return;const t=Number.parseInt(e.target.value);if(Number.isNaN(t))return;let n=12*(t-x.getFullYear());const a=new Date(x.getFullYear(),x.getMonth()+n,x.getDate());c&&c.getFullYear()===a.getFullYear()&&c.getMonth()<a.getMonth()?n-=a.getMonth()-c.getMonth():o&&o.getFullYear()===a.getFullYear()&&o.getMonth()>a.getMonth()&&(n+=o.getMonth()-a.getMonth()),T({type:"ADD_OFFSET",addedOffset:n})}),[x,o,c]),ee=(0,m.useCallback)((e=>{if(!_&&!a)return;const t=x.getFullYear()-(_||new Date).getFullYear(),n=Number.parseInt(e.target.value)-(_||new Date).getMonth();T({type:"SET_OFFSET",newOffset:12*t+n})}),[_,a,x]),te=function(e,t,n,a){if(t&&t.getFullYear()>e)return[t.getFullYear().toString()];if(n&&n.getFullYear()<e)return[n.getFullYear().toString()];let r,l,o=!1;"all"===a?(o=!0,r=F,l=F):(r="number"==typeof a?a:a.previous,l="number"==typeof a?a:a.coming);let c=e-r;if(t){const e=o?t.getFullYear():c;c=Math.max(t.getFullYear(),e)}let s=e+l;if(n){const e=o?n.getFullYear():s;s=Math.min(n.getFullYear(),e)}const u=Math.max(s-c+1,1);return(0,k.Z)(Array(u).keys()).map((e=>e+c)).map((e=>e.toString()))}(L,o,c,w),ne=function(e,t,n,a){const r=(null==n?void 0:n.getFullYear())||e,l=void 0===(null==n?void 0:n.getMonth())?0:n.getMonth(),o=(null==a?void 0:a.getFullYear())||e,c=void 0===(null==a?void 0:a.getMonth())?11:a.getMonth();let s=0,u=11;return r===e&&(s=l),o===e&&(u=c),t.map(((e,t)=>({value:t.toString(),label:e}))).filter((e=>{let{value:t}=e;return parseInt(t)>=s&&parseInt(t)<=u}))}(L,u,o,c);return m.createElement("div",{ref:t,id:O,className:d()("jkl-calendar",{"jkl-calendar--hidden":n}),"data-testid":"jkl-calendar"},m.createElement("div",{className:"jkl-calendar__padding",ref:U,onKeyDown:Q},m.createElement("fieldset",{className:"jkl-calendar-navigation"},m.createElement("div",null,m.createElement("button",{...W({calendars:I,onClick:$}),className:"jkl-calendar-navigation__arrow",type:"button"},m.createElement(g.Y,{variant:"medium",bold:!0})),m.createElement("button",{...B({calendars:I,onClick:$}),className:"jkl-calendar-navigation__arrow",type:"button"},m.createElement(p.L,{variant:"medium",bold:!0}))),m.createElement("div",null,m.createElement("div",{className:"jkl-calendar-navigation-dropdown"},m.createElement("select",{onChange:ee,className:"jkl-calendar-navigation-dropdown__select","aria-label":i,value:Y.toString()},ne.map((e=>{let{label:t,value:n}=e;return m.createElement("option",{key:n,value:n},t)}))),m.createElement(D.v,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})),m.createElement("div",{className:"jkl-calendar-navigation-dropdown"},m.createElement("select",{onChange:z,className:"jkl-calendar-navigation-dropdown__select","aria-label":f,value:L.toString()},te.map((e=>m.createElement("option",{key:e,value:e},e)))),m.createElement(D.v,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})))),I.map((e=>m.createElement("table",{className:"jkl-calendar-table",key:"".concat(e.month).concat(e.year),"data-testid":"jkl-datepicker-calendar"},m.createElement("caption",{className:"jkl-sr-only"},u[e.month],", ",e.year),m.createElement("thead",null,m.createElement("tr",null,s.map((t=>m.createElement("th",{key:"".concat(e.month).concat(e.year).concat(t)},t))))),m.createElement("tbody",{"data-testid":"jkl-datepicker-dates"},e.weeks.map(((t,n)=>m.createElement("tr",{key:"".concat(e.month).concat(e.year).concat(n)},t.map(((t,a)=>{const r="".concat(e.month).concat(e.year).concat(n).concat(a);if("string"==typeof t)return m.createElement("td",{className:"jkl-calendar__date jkl-calendar__date--empty",key:r},t);const{date:l,selectable:o,today:c,prevMonth:s,nextMonth:i}=t;return m.createElement("td",{key:r},m.createElement("button",{...R({dateObj:t}),type:"button",className:"jkl-calendar-date-button",tabIndex:X(t)?0:-1,"aria-label":"".concat(l.getDate(),". ").concat(u[l.getMonth()].toLowerCase()),"aria-current":c?"date":void 0,"data-adjacent":s||i?"true":void 0,disabled:!o,onKeyDown:H},m.createElement("span",{"aria-hidden":"true"},l.getDate())))})))))))))))}));V.displayName="Calendar";var U=n(93568);const G=(0,m.forwardRef)(((e,t)=>{const{"data-testautoid":n,id:i,className:g="",label:p="Velg dato",labelProps:D,defaultValue:y,defaultShow:v=!1,value:b,disableBeforeDate:k,disableAfterDate:w,yearsToShow:E,name:M,helpLabel:O,errorLabel:_,invalid:C,density:F,days:N,months:Z,monthLabel:j,yearLabel:x,placeholder:T="dd.mm.åååå",width:Y="11.25rem",onChange:L,onBlur:P,onFocus:I,onKeyDown:W,action:R,showCalendarLabel:B="Åpne kalender",hideCalendarLabel:K="Lukk kalender",supportLabelProps:q,tooltipProps:J,...G}=e;b&&y&&console.warn("DatePicker må enten være controlled eller uncontrolled. Hvis du bruker defaultValue og value sammen vil defaultValue bli ignorert.");const H=(0,S.xk)(k),Q=H?(0,f.Z)(H):void 0,X=(0,S.xk)(w),$=X?(0,f.Z)(X):void 0,{0:z,1:ee}=(0,m.useState)(function(e,t,n,a){const r=(0,S.xk)(e),l=(0,S.xk)(t);return r?A(r,n,a)?null:r:l?A(l,n,a)?null:l:null}(b,y,Q,$)),{0:te,1:ne}=(0,m.useState)(null),{0:ae,1:re}=(0,m.useState)(v),[le]=(0,l.v)(ae),oe=(0,m.useRef)(null),ce=(0,m.useRef)(null),se=(0,m.useCallback)((e=>{ce.current=e,t&&("function"==typeof t?t(e):t.current=e)}),[ce,t]),ue=(0,m.useRef)(null),ie=(0,m.useCallback)((e=>{if(!I||!ue.current)return;ue.current.contains(e.relatedTarget)||I(e,z,{error:te,value:e.target.value})}),[I,z,te]),de=(0,m.useCallback)((e=>{P&&P(e,z,{error:te,value:e.target.value})}),[P,z,te]),fe=(0,m.useCallback)((e=>{"Escape"===e.key&&(re(!1),e.preventDefault(),e.stopPropagation()),(null==R?void 0:R.onKeyDown)&&R.onKeyDown(e)}),[re,R]),me=(0,m.useCallback)((e=>{if("Escape"===e.key&&(re(!1),e.preventDefault(),e.stopPropagation()),W){let t=e.currentTarget.value;/[\d.]/.test(e.key)&&(t+=e.key),W(e,z,{error:te,value:t})}}),[W,re,z,te]),he=(0,m.useCallback)((e=>{let t=null,n=null;if(e.target.value){const a=(0,S.xk)(e.target.value);a?Q&&!(0,U.i5)(a,Q)?n="OUTSIDE_LOWER_BOUND":$&&!(0,U.Xc)(a,$)?n="OUTSIDE_UPPER_BOUND":re(!1):n="WRONG_FORMAT",t=a||null}ne(n),ee(t),L&&L(e,t,{error:n,value:e.target.value})}),[L,ne,ee,re,Q,$]),ge=(0,m.useCallback)((e=>{(0,h.flushSync)((()=>{re(!ae)}));const t=le.current,n=t&&t.querySelector('[aria-pressed="true"]');n&&n.focus(),(null==R?void 0:R.onClick)&&R.onClick(e)}),[re,ae,R,le]),pe=(0,m.useCallback)((()=>{re(!ae)}),[re,ae]),De=(0,m.useCallback)((()=>{re(!1)}),[re]),ye=(0,m.useCallback)((e=>{let{date:t}=e;if(re(!1),ee(t),ce.current){const e=ce.current;e.value=(0,S.Bb)(t);const n=document.createEvent("HTMLEvents");n.initEvent("input",!0,!1),e.dispatchEvent(n),e.focus(),L&&L(n,t,{error:null,value:e.value})}}),[re,ee,L]),ve=(0,m.useCallback)((e=>{e.preventDefault(),re(!1),oe.current&&oe.current.focus()}),[re]);return(0,o.O)(ue,De),(0,c.Z)(ue,De),(0,s.W)(le,["Escape"],(()=>{re(!1),ce.current&&ce.current.focus()})),m.createElement(r.B,{id:i,className:d()("jkl-datepicker",g,{"jkl-datepicker--open":ae}),...G,ref:ue,label:p,labelProps:D,density:F,helpLabel:O,errorLabel:_,supportLabelProps:q,tooltipProps:J,render:e=>m.createElement("div",{"data-testid":"jkl-datepicker__input-wrapper",className:"jkl-datepicker__input-wrapper","data-density":F,tabIndex:-1,onKeyDown:me},m.createElement(u.J,{ref:se,"data-testid":"jkl-datepicker__input","data-testautoid":n,className:"jkl-datepicker__input",name:M,defaultValue:y,density:F,value:b,type:"text",placeholder:T,width:Y,onFocus:ie,onBlur:de,onClick:pe,onChange:he,...e,action:{buttonRef:oe,icon:m.createElement(a.Q,null),label:ae?K:B,...R,onClick:ge,onKeyDown:fe}}),m.createElement("div",{className:"jkl-datepicker__calendar-wrapper"},m.createElement(V,{ref:le,density:F,date:z,minDate:Q,maxDate:$,days:N,months:Z,monthLabel:j,yearLabel:x,yearsToShow:E,hidden:!ae,onDateSelected:ye,onTabOutside:ve})))})}));G.displayName="DatePicker"},12867:function(e,t,n){n.d(t,{Bb:function(){return l},j3:function(){return s},my:function(){return a},xk:function(){return c}});const a=/^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/,r=/^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;function l(e){const t="".concat(e.getDate()).padStart(2,"0"),n="".concat(e.getMonth()+1).padStart(2,"0");return"".concat(t,".").concat(n,".").concat(e.getFullYear())}const o=e=>{const t=a.exec(e);if(t)return t.slice(1,4);const n=r.exec(e);if(!n)return;const l=n.slice(1,4);return l.reverse(),l};function c(e){if(!e)return;const t=o(e);if(!t)return;const n=parseInt((new Date).toLocaleString("no-NB",{year:"2-digit"})),a=parseInt(t[0],10),r=parseInt(t[1],10)-1,l=parseInt(t[2],10),c=l>99?l:(s=l)>n?s+1900:s+2e3;var s;const u=new Date(c,r,a,0,0,0);return u.getMonth()===r&&u.getFullYear()===c?u:void 0}function s(e){if(!e.relatedTarget)return!0;const t=e.target.closest(".jkl-datepicker__input-wrapper");return e.relatedTarget.closest(".jkl-datepicker__input-wrapper")!==t}},93568:function(e,t,n){n.d(t,{R0:function(){return r},Xc:function(){return o},i5:function(){return l}});var a=n(12867);function r(e){if(!e)return!1;const t=(0,a.xk)(e);return Boolean(t)}function l(e,t,n){void 0===n&&(n={inclusive:!1});const r="string"==typeof e?(0,a.xk)(e):e;return!!r&&(n.inclusive?r>=t:r>t)}function o(e,t,n){void 0===n&&(n={inclusive:!1});const r="string"==typeof e?(0,a.xk)(e):e;return!!r&&(n.inclusive?r<=t:r<t)}},6835:function(e,t,n){n.d(t,{Y:function(){return l}});var a=n(70079),r=n(31787);const l=e=>a.createElement(r.J,{...e},"");l.displayName="ArrowLeftIcon"},59525:function(e,t,n){n.d(t,{L:function(){return l}});var a=n(70079),r=n(31787);const l=e=>a.createElement(r.J,{...e},"");l.displayName="ArrowRightIcon"},98129:function(e,t,n){n.d(t,{Q:function(){return l}});var a=n(70079),r=n(31787);const l=e=>a.createElement(r.J,{...e},"");l.displayName="CalendarIcon"},33378:function(e,t,n){n.d(t,{v:function(){return l}});var a=n(70079),r=n(31787);const l=e=>a.createElement(r.J,{...e},"");l.displayName="ChevronDownIcon"},17149:function(e,t,n){n.d(t,{O:function(){return r}});var a=n(70079);function r(e,t){function n(n){(null==e?void 0:e.current)&&!e.current.contains(n.target)&&t()}(0,a.useEffect)((()=>(e&&document&&document.addEventListener("click",n),()=>{document&&document.removeEventListener("click",n)})))}},24721:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(70079);function r(e,t){function n(n){(null==e?void 0:e.current)&&!e.current.contains(n.target)&&t()}(0,a.useEffect)((()=>(e&&document&&document.addEventListener("focusin",n),()=>{document&&document.removeEventListener("focusin",n)})))}}}]);