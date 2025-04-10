"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5862],{12498:function(e,t,n){function a(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:function(){return a}})},64907:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(92923),r=n(12498);function o(e,t){(0,r.Z)(2,arguments);var n=(0,a.Z)(e),o=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}(t);return isNaN(o)?new Date(NaN):o?(n.setDate(n.getDate()+o),n):n}},19305:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(92923),r=n(12498);function o(e,t){(0,r.Z)(2,arguments);var n=(0,a.Z)(e),o=(0,a.Z)(t);return 12*(n.getFullYear()-o.getFullYear())+(n.getMonth()-o.getMonth())}},91866:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(92923),r=n(12498);function o(e,t){(0,r.Z)(2,arguments);var n=(0,a.Z)(e),o=(0,a.Z)(t);return n.getTime()<o.getTime()}},41083:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(9634),r=n(12498);function o(e){return(0,r.Z)(1,arguments),function(e,t){(0,r.Z)(2,arguments);var n=(0,a.Z)(e),o=(0,a.Z)(t);return n.getTime()===o.getTime()}(e,Date.now())}},9634:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(92923),r=n(12498);function o(e){(0,r.Z)(1,arguments);var t=(0,a.Z)(e);return t.setHours(0,0,0,0),t}},92923:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}n.d(t,{Z:function(){return o}});var r=n(12498);function o(e){(0,r.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===a(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}},90375:function(e,t,n){n.d(t,{M:function(){return V}});var a=n(10188),r=n(98129),o=n(81159),l=n(46842),c=n(92326),s=n(26372),u=n.n(s),i=n(9634),d=n(70079),f=n(99581),m=n(6835),g=n(59525),p=n(33378),h=n(3438);const D=(e,t)=>{let n;switch(t.type){case"SET_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+t.newOffset),{...e,offset:t.newOffset,shownDate:n};case"ADD_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+e.offset+t.addedOffset),{...e,offset:e.offset+t.addedOffset,shownDate:n};case"SET_SELECTED_DATE":return y(t.newDate);default:return e}},y=e=>({selectedDate:e,offset:0,shownDate:e});var b=n(15089),v=n(64907),k=n(19305),w=n(91866),E=n(41083),M=n(12867);function O(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>t.some((t=>(t&&t(e),e.defaultPrevented)))}function C(e){let{calendars:t,offset:n,minDate:a}=e;if(n>1&&a){const{firstDayOfMonth:e}=t[0],r=(0,k.Z)(e,a);r<n&&(n=r)}return n}const S=3;function F(e){let{calendars:t,offset:n,maxDate:a}=e;if(n>1&&a){const{lastDayOfMonth:e}=t[t.length-1],r=(0,k.Z)(a,e);r<n&&(n=r)}return n}function x(e){let{calendars:t,minDate:n}=e;if(!n)return!1;const{firstDayOfMonth:a}=t[0],r=(0,v.Z)(a,-1);return!!(0,w.Z)(r,n)}function N(e){let{calendars:t,maxDate:n}=e;if(!n)return!1;const{lastDayOfMonth:a}=t[t.length-1],r=(0,v.Z)(a,1);return!!(0,w.Z)(n,r)}function Z(e){let{date:t,selected:n,monthsToDisplay:a,offset:r,minDate:o,maxDate:l,firstDayOfWeek:c,showOutsideDays:s}=e;const u=[],d=function(e,t,n){let a=(0,i.Z)(e);if(t){const e=(0,i.Z)(t);(0,w.Z)(a,e)&&(a=e)}if(n){const e=(0,i.Z)(n);(0,w.Z)(e,a)&&(a=e)}return a}(t,o,l);for(let i=0;i<a;i++){const e=_({month:d.getMonth()+i+r,year:d.getFullYear(),selectedDates:n,minDate:o,maxDate:l,firstDayOfWeek:c,showOutsideDays:s});u.push(e)}return u}function _(e){let{month:t,year:n,selectedDates:a,minDate:r,maxDate:o,firstDayOfWeek:l,showOutsideDays:c}=e;const s=function(e,t){const n=new Date(t,e,1);e=n.getMonth(),t=n.getFullYear();const a=32-new Date(t,e,32).getDate();return{daysInMonth:a,month:e,year:t}}(t,n),u=s.daysInMonth;t=s.month,n=s.year;const i=[];for(let h=1;h<=u;h++){const e=new Date(n,t,h),l={date:e,selected:j(a,e),selectable:T(r,o,e),today:(0,E.Z)(e),prevMonth:!1,nextMonth:!1};i.push(l)}const d=new Date(n,t,1),f=new Date(n,t,u),m=function(e){let{firstDayOfMonth:t,minDate:n,maxDate:a,selectedDates:r,firstDayOfWeek:o,showOutsideDays:l}=e;const c=[];let s=(t.getDay()+7-o)%7;if(l){const e=(0,v.Z)(t,-1),o=e.getDate(),l=e.getMonth(),u=e.getFullYear();let i=0;for(;i<s;){const e=new Date(u,l,o-i),t={date:e,selected:j(r,e),selectable:T(n,a,e),today:!1,prevMonth:!0,nextMonth:!1};c.unshift(t),i++}}else for(;s>0;)c.unshift(""),s--;return c}({firstDayOfMonth:d,minDate:r,maxDate:o,selectedDates:a,firstDayOfWeek:l,showOutsideDays:c}),g=function(e){let{lastDayOfMonth:t,minDate:n,maxDate:a,selectedDates:r,firstDayOfWeek:o,showOutsideDays:l}=e;const c=[];let s=(t.getDay()+7-o)%7;if(l){const e=(0,v.Z)(t,1),o=e.getMonth(),l=e.getFullYear();let u=0;for(;u<6-s;){const e=new Date(l,o,1+u),t={date:e,selected:j(r,e),selectable:T(n,a,e),today:!1,prevMonth:!1,nextMonth:!0};c.push(t),u++}}else for(;s<6;)c.push(""),s++;return c}({lastDayOfMonth:f,minDate:r,maxDate:o,selectedDates:a,firstDayOfWeek:l,showOutsideDays:c});i.unshift.apply(i,(0,b.Z)(m)),i.push.apply(i,(0,b.Z)(g));const p=function(e){const t=Math.ceil(e.length/7),n=[];for(let a=0;a<t;a++){n[a]=[];for(let t=0;t<7;t++)n[a].push(e[7*a+t])}return n}(i);return{firstDayOfMonth:d,lastDayOfMonth:f,month:t,year:n,weeks:p}}function j(e,t){return!!e&&(e=Array.isArray(e)?e:[e]).some((e=>e instanceof Date&&(0,i.Z)(e).getTime()===(0,i.Z)(t).getTime()))}function T(e,t,n){return!(e&&(0,w.Z)(n,e)||t&&(0,w.Z)(t,n))}function Y(e,t,n){return Boolean(n&&e>n||t&&e<t)}function A(e,t,n,a){let r=e||t||new Date;return n&&(r=n>r?n:r),a&&(r=a<r?a:r),r}function R(e){return void 0!==e}function L(e,t){let{onClick:n,dateObj:a}=t;return{onClick:O(n,(t=>{e(a,t)})),disabled:!a.selectable,"aria-pressed":a.selected,role:"button"}}function P(e,t){let{minDate:n,offsetMonth:a,handleOffsetChanged:r}=e,{onClick:o,offset:l=1,calendars:c}=t;const s="Gå tilbake ".concat(l," måned").concat(1===l?"":"er");return{onClick:O(o,(()=>{r(a-C({calendars:c,offset:l,minDate:n}))})),disabled:x({calendars:c,minDate:n}),"aria-label":s,title:s}}function I(e,t){let{maxDate:n,offsetMonth:a,handleOffsetChanged:r}=e,{onClick:o,offset:l=1,calendars:c}=t;const s="Gå frem ".concat(l," måned").concat(1===l?"":"er");return{onClick:O(o,(()=>{r(a+F({calendars:c,offset:l,maxDate:n}))})),disabled:N({calendars:c,maxDate:n}),"aria-label":s,title:s}}function W(e){let{date:t=(0,i.Z)(new Date),maxDate:n,minDate:a,monthsToDisplay:r=1,firstDayOfWeek:o=0,showOutsideDays:l=!0,offset:c,onDateSelected:s,onOffsetChanged:u,selected:f}=e;const{0:m,1:g}=(0,d.useState)(0),p=(D=m,R(h=c)?h:D);var h,D;function y(e){R(c)||g(e),u(e)}return{calendars:Z({date:t,selected:f,monthsToDisplay:r,minDate:a,maxDate:n,offset:p,firstDayOfWeek:o,showOutsideDays:l}),getDateProps:L.bind(null,s),getBackProps:P.bind(null,{minDate:a,offsetMonth:p,handleOffsetChanged:y}),getForwardProps:I.bind(null,{maxDate:n,offsetMonth:p,handleOffsetChanged:y}),handleOffsetChanged:y}}const q=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],B=["man","tir","ons","tor","fre","lør","søn"],K=(0,d.forwardRef)(((e,t)=>{const{date:n,defaultSelected:a,density:r,minDate:o,maxDate:l,days:c=B,months:s=q,monthLabel:u="Velg måned",yearLabel:i="Velg år",yearsToShow:v=S,onTabOutside:k,...w}=e,E=(0,h.M)("jkl-calendar"),{0:{offset:M,selectedDate:O,shownDate:Z},1:_}=(0,d.useReducer)(D,A(n,a,o,l),y),j=Z.getMonth(),T=Z.getFullYear();(0,d.useEffect)((()=>{_({type:"SET_SELECTED_DATE",newDate:A(n,a,o,l)})}),[n,a,o,l]);const Y=(0,d.useCallback)((e=>{_({type:"SET_OFFSET",newOffset:e})}),[]),{calendars:R,getBackProps:L,getDateProps:P,getForwardProps:I,handleOffsetChanged:K}=W({date:O,selected:O,minDate:o,maxDate:l,offset:M,onOffsetChanged:Y,firstDayOfWeek:1,...w}),J=(0,d.useRef)(null),V=(0,d.useCallback)((e=>{if(!J.current)return;const t=document.activeElement,n=J.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),a=async e=>{null==t||t.setAttribute("tabindex","-1"),e.setAttribute("tabindex","0"),e.focus()};n.forEach(((r,c)=>{const s=c+e;if(r==t)if(s<=n.length-1&&s>=0)a(n[s]);else if(e<0){if(x({calendars:R,minDate:o}))return;if((0,f.flushSync)((()=>{K(M-C({calendars:R,offset:1,minDate:o}))})),!J.current)return;const e=J.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');e[e.length+s]&&(e[0].setAttribute("tabindex","-1"),a(e[e.length+s]))}else{if(N({calendars:R,maxDate:l}))return;if((0,f.flushSync)((()=>{K(M+F({calendars:R,offset:1,maxDate:l}))})),!J.current)return;const e=J.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');e[s-n.length]&&(e[0].setAttribute("tabindex","-1"),a(e[s-n.length]))}}))}),[K,J,M,R,l,o]),U=(0,d.useCallback)((e=>{switch(e.key){case"ArrowUp":V(-7),e.preventDefault();break;case"ArrowRight":V(1),e.preventDefault();break;case"ArrowDown":V(7),e.preventDefault();break;case"ArrowLeft":V(-1),e.preventDefault()}}),[V]),H=(0,d.useCallback)((e=>{var t;if("Tab"!==e.key)return;const n=null==(t=J.current)?void 0:t.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!n)return;const a=n[0],r=n[n.length-1];e.shiftKey||document.activeElement!==r?e.shiftKey&&document.activeElement===a&&(r.focus(),e.preventDefault()):(a.focus(),e.preventDefault())}),[]),G=(0,d.useCallback)((e=>{const{date:t,selected:n,selectable:a,prevMonth:r,nextMonth:l}=e;return!!a&&(!!n||(t.toString()===(null==o?void 0:o.toString())||!r&&!l&&Z.getFullYear()===t.getFullYear()&&O.getMonth()!==t.getMonth()&&1===t.getDate()))}),[Z,o,O]),Q=(0,d.useCallback)((()=>{o&&Z.getFullYear()-o.getFullYear()==0&&Z.getMonth()-o.getMonth()==1?document.querySelectorAll(".jkl-calendar-navigation__arrow")[1].focus():l&&l.getFullYear()-Z.getFullYear()==0&&l.getMonth()-Z.getMonth()==1&&document.querySelectorAll(".jkl-calendar-navigation__arrow")[0].focus()}),[o,l,Z]),X=(0,d.useCallback)((e=>{if(4!==e.target.value.length)return;const t=Number.parseInt(e.target.value);if(Number.isNaN(t))return;let n=12*(t-Z.getFullYear());const a=new Date(Z.getFullYear(),Z.getMonth()+n,Z.getDate());l&&l.getFullYear()===a.getFullYear()&&l.getMonth()<a.getMonth()?n-=a.getMonth()-l.getMonth():o&&o.getFullYear()===a.getFullYear()&&o.getMonth()>a.getMonth()&&(n+=o.getMonth()-a.getMonth()),_({type:"ADD_OFFSET",addedOffset:n})}),[Z,o,l]),$=(0,d.useCallback)((e=>{if(!O&&!n)return;const t=Z.getFullYear()-(O||new Date).getFullYear(),a=Number.parseInt(e.target.value)-(O||new Date).getMonth();_({type:"SET_OFFSET",newOffset:12*t+a})}),[O,n,Z]),z=function(e,t,n,a){if(t&&t.getFullYear()>e)return[t.getFullYear().toString()];if(n&&n.getFullYear()<e)return[n.getFullYear().toString()];let r,o,l=!1;"all"===a?(l=!0,r=S,o=S):(r="number"==typeof a?a:a.previous,o="number"==typeof a?a:a.coming);let c=e-r;if(t){const e=l?t.getFullYear():c;c=Math.max(t.getFullYear(),e)}let s=e+o;if(n){const e=l?n.getFullYear():s;s=Math.min(n.getFullYear(),e)}const u=Math.max(s-c+1,1);return(0,b.Z)(Array(u).keys()).map((e=>e+c)).map((e=>e.toString()))}(T,o,l,v),ee=function(e,t,n,a){const r=(null==n?void 0:n.getFullYear())||e,o=void 0===(null==n?void 0:n.getMonth())?0:n.getMonth(),l=(null==a?void 0:a.getFullYear())||e,c=void 0===(null==a?void 0:a.getMonth())?11:a.getMonth();let s=0,u=11;return r===e&&(s=o),l===e&&(u=c),t.map(((e,t)=>({value:t.toString(),label:e}))).filter((e=>{let{value:t}=e;return parseInt(t)>=s&&parseInt(t)<=u}))}(T,s,o,l);return d.createElement("div",{ref:t,id:E,className:"jkl-calendar","data-testid":"jkl-calendar"},d.createElement("div",{className:"jkl-calendar__padding",ref:J,onKeyDown:H},d.createElement("fieldset",{className:"jkl-calendar-navigation"},d.createElement("div",null,d.createElement("button",{...L({calendars:R,onClick:Q}),className:"jkl-calendar-navigation__arrow",type:"button"},d.createElement(m.Y,{variant:"medium",bold:!0})),d.createElement("button",{...I({calendars:R,onClick:Q}),className:"jkl-calendar-navigation__arrow",type:"button"},d.createElement(g.L,{variant:"medium",bold:!0}))),d.createElement("div",null,d.createElement("div",{className:"jkl-calendar-navigation-dropdown"},d.createElement("select",{onChange:$,className:"jkl-calendar-navigation-dropdown__select","aria-label":u,value:j.toString()},ee.map((e=>{let{label:t,value:n}=e;return d.createElement("option",{key:n,value:n},t)}))),d.createElement(p.v,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})),d.createElement("div",{className:"jkl-calendar-navigation-dropdown"},d.createElement("select",{onChange:X,className:"jkl-calendar-navigation-dropdown__select","aria-label":i,value:T.toString()},z.map((e=>d.createElement("option",{key:e,value:e},e)))),d.createElement(p.v,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})))),R.map((e=>d.createElement("table",{className:"jkl-calendar-table",key:"".concat(e.month).concat(e.year),"data-testid":"jkl-datepicker-calendar"},d.createElement("caption",{className:"jkl-sr-only"},s[e.month],", ",e.year),d.createElement("thead",null,d.createElement("tr",null,c.map((t=>d.createElement("th",{key:"".concat(e.month).concat(e.year).concat(t)},t))))),d.createElement("tbody",{"data-testid":"jkl-datepicker-dates"},e.weeks.map(((t,n)=>d.createElement("tr",{key:"".concat(e.month).concat(e.year).concat(n)},t.map(((t,a)=>{const r="".concat(e.month).concat(e.year).concat(n).concat(a);if("string"==typeof t)return d.createElement("td",{className:"jkl-calendar__date jkl-calendar__date--empty",key:r},t);const{date:o,selectable:l,today:c,prevMonth:u,nextMonth:i}=t;return d.createElement("td",{key:r},d.createElement("button",{...P({dateObj:t}),type:"button",className:"jkl-calendar-date-button",tabIndex:G(t)?0:-1,"aria-label":"".concat(o.getDate(),". ").concat(s[o.getMonth()].toLowerCase()),"aria-current":c?"date":void 0,"data-adjacent":u||i?"true":void 0,disabled:!l,onKeyDown:U},d.createElement("span",{"aria-hidden":"true"},o.getDate())))})))))))))))}));K.displayName="Calendar";var J=n(93568);const V=(0,d.forwardRef)(((e,t)=>{const{"data-testautoid":n,id:s,className:m="",label:g="Velg dato",labelProps:p,defaultValue:h,defaultShow:D=!1,value:y,disableBeforeDate:b,disableAfterDate:v,yearsToShow:k,name:w,helpLabel:E,errorLabel:O,invalid:C,density:S,days:F,months:x,monthLabel:N,yearLabel:Z,placeholder:_="dd.mm.åååå",width:j="11.25rem",onChange:T,onBlur:A,onFocus:R,onKeyDown:L,action:P,showCalendarLabel:I="Åpne kalender",hideCalendarLabel:W="Lukk kalender",supportLabelProps:q,tooltipProps:B,...V}=e;y&&h&&console.warn("DatePicker må enten være controlled eller uncontrolled. Hvis du bruker defaultValue og value sammen vil defaultValue bli ignorert.");const U=(0,M.xk)(b),H=U?(0,i.Z)(U):void 0,G=(0,M.xk)(v),Q=G?(0,i.Z)(G):void 0,{0:X,1:$}=(0,d.useState)(function(e,t,n,a){const r=(0,M.xk)(e),o=(0,M.xk)(t);return r?Y(r,n,a)?null:r:o?Y(o,n,a)?null:o:null}(y,h,H,Q)),{0:z,1:ee}=(0,d.useState)(null),{0:te,1:ne}=(0,d.useState)(D),ae=(0,d.useRef)(null),re=(0,d.useRef)(null),oe=(0,d.useRef)(null),le=(0,d.useRef)(null),ce=(0,d.useCallback)((e=>{le.current=e,t&&("function"==typeof t?t(e):t.current=e)}),[le,t]),se=(0,d.useCallback)((e=>{if(!R||!re.current)return;re.current.contains(e.relatedTarget)||R(e,X,{error:z,value:e.target.value})}),[R,X,z]),ue=(0,d.useCallback)((e=>{A&&A(e,X,{error:z,value:e.target.value})}),[A,X,z]),ie=(0,d.useCallback)((e=>{"Escape"===e.key&&(ne(!1),e.preventDefault(),e.stopPropagation()),(null==P?void 0:P.onKeyDown)&&P.onKeyDown(e)}),[ne,P]),de=(0,d.useCallback)((e=>{let t=null,n=null;if(e.target.value){const a=(0,M.xk)(e.target.value);a?H&&!(0,J.i5)(a,H)?n="OUTSIDE_LOWER_BOUND":Q&&!(0,J.Xc)(a,Q)?n="OUTSIDE_UPPER_BOUND":ne(!1):n="WRONG_FORMAT",t=a||null}ee(n),$(t),T&&T(e,t,{error:n,value:e.target.value})}),[T,ee,$,ne,H,Q]),fe=(0,d.useCallback)((e=>{(0,f.flushSync)((()=>{ne(!te)}));const t=ae.current,n=t&&t.querySelector('[aria-pressed="true"]');window.requestAnimationFrame((()=>n&&n.focus())),(null==P?void 0:P.onClick)&&P.onClick(e)}),[ne,te,P,ae]),me=(0,d.useCallback)((e=>{let{date:t}=e;if(ne(!1),$(t),le.current){const e=le.current;e.value=(0,M.Bb)(t);const n=document.createEvent("HTMLEvents");n.initEvent("input",!0,!1),e.dispatchEvent(n),e.focus(),T&&T(n,t,{error:null,value:e.value})}}),[ne,$,T]),ge=(0,d.useCallback)((e=>{e.preventDefault(),ne(!1),oe.current&&oe.current.focus()}),[ne]);return d.createElement(o.B,{id:s,className:u()("jkl-datepicker",m,{"jkl-datepicker--open":te}),...V,ref:re,label:g,labelProps:p,density:S,helpLabel:E,errorLabel:O,supportLabelProps:q,tooltipProps:B,render:e=>d.createElement(c.J,{ref:ce,"data-testid":"jkl-datepicker__input","data-testautoid":n,className:"jkl-datepicker__input",name:w,defaultValue:h,density:S,value:y,type:"text",placeholder:_,width:j,onFocus:se,onBlur:ue,onChange:de,actionButton:d.createElement(l.Z,{positionReference:le,open:te,onOpenChange:()=>ne(!te),offset:8},d.createElement(l.Z.Trigger,{...P,"data-testid":"jkl-datepicker__trigger",className:"jkl-text-input-action-button",title:te?W:I,tabIndex:0,onClick:fe,onKeyDown:ie,asChild:!0},d.createElement(a.h,null,d.createElement(r.Q,null))),d.createElement(l.Z.Content,{initialFocus:-1,padding:24},d.createElement(K,{ref:ae,density:S,date:X,minDate:H,maxDate:Q,days:F,months:x,monthLabel:N,yearLabel:Z,yearsToShow:k,onDateSelected:me,onTabOutside:ge}))),...e})})}));V.displayName="DatePicker"},12867:function(e,t,n){n.d(t,{Bb:function(){return o},j3:function(){return s},my:function(){return a},xk:function(){return c}});const a=/^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/,r=/^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;function o(e){const t="".concat(e.getDate()).padStart(2,"0"),n="".concat(e.getMonth()+1).padStart(2,"0");return"".concat(t,".").concat(n,".").concat(e.getFullYear())}const l=e=>{const t=a.exec(e);if(t)return t.slice(1,4);const n=r.exec(e);if(!n)return;const o=n.slice(1,4);return o.reverse(),o};function c(e){if(!e)return;const t=l(e);if(!t)return;const n=parseInt((new Date).toLocaleString("no-NB",{year:"2-digit"})),a=parseInt(t[0],10),r=parseInt(t[1],10)-1,o=parseInt(t[2],10),c=o>99?o:(s=o)>n?s+1900:s+2e3;var s;const u=new Date(c,r,a,0,0,0);return u.getMonth()===r&&u.getFullYear()===c?u:void 0}function s(e){if(!e.relatedTarget)return!0;const t=e.target.closest(".jkl-datepicker__input-wrapper");return e.relatedTarget.closest(".jkl-datepicker__input-wrapper")!==t}},93568:function(e,t,n){n.d(t,{R0:function(){return r},Xc:function(){return l},i5:function(){return o}});var a=n(12867);function r(e){if(!e)return!1;const t=(0,a.xk)(e);return Boolean(t)}function o(e,t,n){void 0===n&&(n={inclusive:!1});const r="string"==typeof e?(0,a.xk)(e):e;return!!r&&(n.inclusive?r>=t:r>t)}function l(e,t,n){void 0===n&&(n={inclusive:!1});const r="string"==typeof e?(0,a.xk)(e):e;return!!r&&(n.inclusive?r<=t:r<t)}},6835:function(e,t,n){n.d(t,{Y:function(){return o}});var a=n(70079),r=n(31787);const o=e=>a.createElement(r.J,{...e},"");o.displayName="ArrowLeftIcon"},59525:function(e,t,n){n.d(t,{L:function(){return o}});var a=n(70079),r=n(31787);const o=e=>a.createElement(r.J,{...e},"");o.displayName="ArrowRightIcon"},98129:function(e,t,n){n.d(t,{Q:function(){return o}});var a=n(70079),r=n(31787);const o=e=>a.createElement(r.J,{...e},"");o.displayName="CalendarIcon"},33378:function(e,t,n){n.d(t,{v:function(){return o}});var a=n(70079),r=n(31787);const o=e=>a.createElement(r.J,{...e},"");o.displayName="ChevronDownIcon"},46842:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(57579),r=n(84256),o=n(88905),l=n(17050),c=n(80324),s=n.n(c),u=n(70079);const i=u.createContext(null),d=()=>{const e=u.useContext(i);if(null==e)throw new Error("Popover komponenter må brukes innenfor en <Popover /> komponent");return e},f=e=>{let{children:t,...n}=e;const l=(e=>{let{open:t,onOpenChange:n,placement:l="bottom-start",strategy:c="absolute",modal:s=!0,offset:i=4,positionReference:d,hoverOptions:f,focusOptions:m,clickOptions:g,roleOptions:p,dismissOptions:h}=e;const[D,y]=u.useState(t),b=null!=t?t:D,v=null!=n?n:y,k=(0,a.YF)({open:b,onOpenChange:v,placement:l,strategy:c,middleware:[(0,r.cv)(i),(0,r.RR)({padding:5}),(0,r.uY)({padding:12})],whileElementsMounted:o.Me}),w=k.context,E=(0,a.eS)(w,{enabled:!1,...g}),M=(0,a.XI)(w,{enabled:!1,...f}),O=(0,a.KK)(w,{enabled:!1,...m}),C=(0,a.bQ)(w,h),S=(0,a.qs)(w,p),F=(0,a.NI)([E,C,O,M,S]);return u.useLayoutEffect((()=>{d&&k.refs.setPositionReference(null==d?void 0:d.current)}),[d,k.refs]),u.useMemo((()=>({open:b,onOpenChange:v,modal:s,...F,...k})),[b,v,s,F,k])})({...n});return u.createElement(i.Provider,{value:l},t)},m=u.forwardRef((function(e,t){let{children:n,asChild:r=!1,...o}=e;const{refs:l,getReferenceProps:c,open:s,onOpenChange:i}=d(),f=n.ref,m=(0,a.qq)([l.setReference,t,f]);return r&&u.isValidElement(n)?u.cloneElement(n,c({ref:m,...n.props,...o})):u.createElement("button",{ref:m,onClick:()=>null==i?void 0:i(!s),"aria-expanded":s,...c(o)},n)})),g=u.forwardRef((function(e,t){let{style:n,className:r,padding:o=0,initialFocus:c=0,returnFocus:i=!0,...f}=e;const{context:m,modal:g,refs:p,open:h,floatingStyles:D,getFloatingProps:y}=d(),b=(0,a.qq)([p.setFloating,t]),v=p.reference.current,{theme:k,density:w}=(e=>!!e&&"contextElement"in e)(v)?(0,l.H)(v.contextElement):(0,l.H)(v),E=u.useRef(null);return u.useEffect((()=>{var e;E.current=(null==(e=m.elements.domReference)?void 0:e.closest("[data-portal]"))||null}),[m.elements.domReference]),h?u.createElement(a.ll,{root:E.current},u.createElement(a.wD,{context:m,modal:g,initialFocus:c,returnFocus:i},u.createElement("div",{"data-theme":k,"data-layout-density":w,className:s()("jkl jkl-popover",r),ref:b,style:{...n,...D,"--popover-padding":"var(--jkl-spacing-".concat(o,")")},...y(f)},f.children))):null}));f.Trigger=m,f.Content=g;var p=f}}]);