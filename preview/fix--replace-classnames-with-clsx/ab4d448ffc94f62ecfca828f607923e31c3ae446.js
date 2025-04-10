"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[8125],{12498:function(e,t,n){function a(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:function(){return a}})},64907:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(92923),l=n(12498);function r(e,t){(0,l.Z)(2,arguments);var n=(0,a.Z)(e),r=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}(t);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}},19305:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(92923),l=n(12498);function r(e,t){(0,l.Z)(2,arguments);var n=(0,a.Z)(e),r=(0,a.Z)(t);return 12*(n.getFullYear()-r.getFullYear())+(n.getMonth()-r.getMonth())}},91866:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(92923),l=n(12498);function r(e,t){(0,l.Z)(2,arguments);var n=(0,a.Z)(e),r=(0,a.Z)(t);return n.getTime()<r.getTime()}},41083:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(9634),l=n(12498);function r(e){return(0,l.Z)(1,arguments),function(e,t){(0,l.Z)(2,arguments);var n=(0,a.Z)(e),r=(0,a.Z)(t);return n.getTime()===r.getTime()}(e,Date.now())}},9634:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(92923),l=n(12498);function r(e){(0,l.Z)(1,arguments);var t=(0,a.Z)(e);return t.setHours(0,0,0,0),t}},92923:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}n.d(t,{Z:function(){return r}});var l=n(12498);function r(e){(0,l.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===a(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}},91517:function(e,t,n){n.d(t,{M:function(){return K}});var a=n(20274),l=n(81159),r=n(84490),o=n(17149),s=n(24721),c=n(18887),u=n(92326),i=n(53048),d=n(9634),f=n(70079),m=n(99581),h=n(82400),g=n(18438),v=n(93934),p=n(3438);const w=(e,t)=>{let n;switch(t.type){case"SET_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+t.newOffset),{...e,offset:t.newOffset,shownDate:n};case"ADD_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+e.offset+t.addedOffset),{...e,offset:e.offset+t.addedOffset,shownDate:n};case"SET_SELECTED_DATE":return D(t.newDate);default:return e}},D=e=>({selectedDate:e,offset:0,shownDate:e});var y=n(15089),b=n(64907),M=n(19305),k=n(91866),E=n(41083),x=n(39065);function C(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>t.some((t=>(t&&t(e),e.defaultPrevented)))}function O(e){let{calendars:t,offset:n,minDate:a}=e;if(n>1&&a){const{firstDayOfMonth:e}=t[0],l=(0,M.Z)(e,a);l<n&&(n=l)}return n}const L=3;function z(e){let{calendars:t,offset:n,maxDate:a}=e;if(n>1&&a){const{lastDayOfMonth:e}=t[t.length-1],l=(0,M.Z)(a,e);l<n&&(n=l)}return n}function S(e){let{calendars:t,minDate:n}=e;if(!n)return!1;const{firstDayOfMonth:a}=t[0],l=(0,b.Z)(a,-1);return!!(0,k.Z)(l,n)}function _(e){let{calendars:t,maxDate:n}=e;if(!n)return!1;const{lastDayOfMonth:a}=t[t.length-1],l=(0,b.Z)(a,1);return!!(0,k.Z)(n,l)}function j(e){let{date:t,selected:n,monthsToDisplay:a,offset:l,minDate:r,maxDate:o,firstDayOfWeek:s,showOutsideDays:c}=e;const u=[],i=function(e,t,n){let a=(0,d.Z)(e);if(t){const e=(0,d.Z)(t);(0,k.Z)(a,e)&&(a=e)}if(n){const e=(0,d.Z)(n);(0,k.Z)(e,a)&&(a=e)}return a}(t,r,o);for(let d=0;d<a;d++){const e=Z({month:i.getMonth()+d+l,year:i.getFullYear(),selectedDates:n,minDate:r,maxDate:o,firstDayOfWeek:s,showOutsideDays:c});u.push(e)}return u}function Z(e){let{month:t,year:n,selectedDates:a,minDate:l,maxDate:r,firstDayOfWeek:o,showOutsideDays:s}=e;const c=function(e,t){const n=new Date(t,e,1);e=n.getMonth(),t=n.getFullYear();const a=32-new Date(t,e,32).getDate();return{daysInMonth:a,month:e,year:t}}(t,n),u=c.daysInMonth;t=c.month,n=c.year;const i=[];for(let v=1;v<=u;v++){const e=new Date(n,t,v),o={date:e,selected:F(a,e),selectable:N(l,r,e),today:(0,E.Z)(e),prevMonth:!1,nextMonth:!1};i.push(o)}const d=new Date(n,t,1),f=new Date(n,t,u),m=function(e){let{firstDayOfMonth:t,minDate:n,maxDate:a,selectedDates:l,firstDayOfWeek:r,showOutsideDays:o}=e;const s=[];let c=(t.getDay()+7-r)%7;if(o){const e=(0,b.Z)(t,-1),r=e.getDate(),o=e.getMonth(),u=e.getFullYear();let i=0;for(;i<c;){const e=new Date(u,o,r-i),t={date:e,selected:F(l,e),selectable:N(n,a,e),today:!1,prevMonth:!0,nextMonth:!1};s.unshift(t),i++}}else for(;c>0;)s.unshift(""),c--;return s}({firstDayOfMonth:d,minDate:l,maxDate:r,selectedDates:a,firstDayOfWeek:o,showOutsideDays:s}),h=function(e){let{lastDayOfMonth:t,minDate:n,maxDate:a,selectedDates:l,firstDayOfWeek:r,showOutsideDays:o}=e;const s=[];let c=(t.getDay()+7-r)%7;if(o){const e=(0,b.Z)(t,1),r=e.getMonth(),o=e.getFullYear();let u=0;for(;u<6-c;){const e=new Date(o,r,1+u),t={date:e,selected:F(l,e),selectable:N(n,a,e),today:!1,prevMonth:!1,nextMonth:!0};s.push(t),u++}}else for(;c<6;)s.push(""),c++;return s}({lastDayOfMonth:f,minDate:l,maxDate:r,selectedDates:a,firstDayOfWeek:o,showOutsideDays:s});i.unshift.apply(i,(0,y.Z)(m)),i.push.apply(i,(0,y.Z)(h));const g=function(e){const t=Math.ceil(e.length/7),n=[];for(let a=0;a<t;a++){n[a]=[];for(let t=0;t<7;t++)n[a].push(e[7*a+t])}return n}(i);return{firstDayOfMonth:d,lastDayOfMonth:f,month:t,year:n,weeks:g}}function F(e,t){return!!e&&(e=Array.isArray(e)?e:[e]).some((e=>e instanceof Date&&(0,d.Z)(e).getTime()===(0,d.Z)(t).getTime()))}function N(e,t,n){return!(e&&(0,k.Z)(n,e)||t&&(0,k.Z)(t,n))}function T(e,t,n){return Boolean(n&&e>n||t&&e<t)}function Y(e,t,n,a){let l=e||t||new Date;return n&&(l=n>l?n:l),a&&(l=a<l?a:l),l}function A(e){return void 0!==e}function B(e,t){let{onClick:n,dateObj:a}=t;return{onClick:C(n,(t=>{e(a,t)})),disabled:!a.selectable,"aria-pressed":a.selected,role:"button"}}function H(e,t){let{minDate:n,offsetMonth:a,handleOffsetChanged:l}=e,{onClick:r,offset:o=1,calendars:s}=t;const c="Gå tilbake "+o+" måned"+(1===o?"":"er");return{onClick:C(r,(()=>{l(a-O({calendars:s,offset:o,minDate:n}))})),disabled:S({calendars:s,minDate:n}),"aria-label":c,title:c}}function V(e,t){let{maxDate:n,offsetMonth:a,handleOffsetChanged:l}=e,{onClick:r,offset:o=1,calendars:s}=t;const c="Gå frem "+o+" måned"+(1===o?"":"er");return{onClick:C(r,(()=>{l(a+z({calendars:s,offset:o,maxDate:n}))})),disabled:_({calendars:s,maxDate:n}),"aria-label":c,title:c}}function R(e){let{date:t=(0,d.Z)(new Date),maxDate:n,minDate:a,monthsToDisplay:l=1,firstDayOfWeek:r=0,showOutsideDays:o=!0,offset:s,onDateSelected:c,onOffsetChanged:u,selected:i}=e;const{0:m,1:h}=(0,f.useState)(0),g=(p=m,A(v=s)?v:p);var v,p;function w(e){A(s)||h(e),u(e)}return{calendars:j({date:t,selected:i,monthsToDisplay:l,minDate:a,maxDate:n,offset:g,firstDayOfWeek:r,showOutsideDays:o}),getDateProps:B.bind(null,c),getBackProps:H.bind(null,{minDate:a,offsetMonth:g,handleOffsetChanged:w}),getForwardProps:V.bind(null,{maxDate:n,offsetMonth:g,handleOffsetChanged:w}),handleOffsetChanged:w}}const I=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],P=["man","tir","ons","tor","fre","lør","søn"],W=(0,f.forwardRef)(((e,t)=>{const{hidden:n,date:a,defaultSelected:l,density:r,minDate:o,maxDate:s,days:c=P,months:u=I,monthLabel:d="Velg måned",yearLabel:b="Velg år",yearsToShow:M=L,onTabOutside:k,...E}=e,x=(0,p.M)("jkl-calendar"),{0:{offset:C,selectedDate:j,shownDate:Z},1:F}=(0,f.useReducer)(w,Y(a,l,o,s),D),N=Z.getMonth(),T=Z.getFullYear();(0,f.useEffect)((()=>{F({type:"SET_SELECTED_DATE",newDate:Y(a,l,o,s)})}),[a,l,o,s]);const A=(0,f.useCallback)((e=>{F({type:"SET_OFFSET",newOffset:e})}),[]),{calendars:B,getBackProps:H,getDateProps:V,getForwardProps:W,handleOffsetChanged:K}=R({date:j,selected:j,minDate:o,maxDate:s,offset:C,onOffsetChanged:A,firstDayOfWeek:1,...E}),q=(0,f.useRef)(null),U=(0,f.useCallback)((e=>{if(!q.current)return;const t=document.activeElement,n=q.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),a=async e=>{null==t||t.setAttribute("tabindex","-1"),e.setAttribute("tabindex","0"),e.focus()};n.forEach(((l,r)=>{const c=r+e;if(l==t)if(c<=n.length-1&&c>=0)a(n[c]);else if(e<0){if(S({calendars:B,minDate:o}))return;if((0,m.flushSync)((()=>{K(C-O({calendars:B,offset:1,minDate:o}))})),!q.current)return;const e=q.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');e[e.length+c]&&(e[0].setAttribute("tabindex","-1"),a(e[e.length+c]))}else{if(_({calendars:B,maxDate:s}))return;if((0,m.flushSync)((()=>{K(C+z({calendars:B,offset:1,maxDate:s}))})),!q.current)return;const e=q.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');e[c-n.length]&&(e[0].setAttribute("tabindex","-1"),a(e[c-n.length]))}}))}),[K,q,C,B,s,o]),G=(0,f.useCallback)((e=>{switch(e.key){case"ArrowUp":U(-7),e.preventDefault();break;case"ArrowRight":U(1),e.preventDefault();break;case"ArrowDown":U(7),e.preventDefault();break;case"ArrowLeft":U(-1),e.preventDefault()}}),[U]),J=(0,f.useCallback)((e=>{var t;if("Tab"!==e.key)return;const n=null===(t=q.current)||void 0===t?void 0:t.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!n)return;const a=n[0],l=n[n.length-1];e.shiftKey||document.activeElement!==l?e.shiftKey&&document.activeElement===a&&(l.focus(),e.preventDefault()):(a.focus(),e.preventDefault())}),[]),Q=(0,f.useCallback)((e=>{const{date:t,selected:n,selectable:a,prevMonth:l,nextMonth:r}=e;return!!a&&(!!n||(t.toString()===(null==o?void 0:o.toString())||!l&&!r&&Z.getFullYear()===t.getFullYear()&&j.getMonth()!==t.getMonth()&&1===t.getDate()))}),[Z,o,j]),$=(0,f.useCallback)((()=>{o&&Z.getFullYear()-o.getFullYear()==0&&Z.getMonth()-o.getMonth()==1?document.querySelectorAll(".jkl-calendar-navigation__arrow")[1].focus():s&&s.getFullYear()-Z.getFullYear()==0&&s.getMonth()-Z.getMonth()==1&&document.querySelectorAll(".jkl-calendar-navigation__arrow")[0].focus()}),[o,s,Z]),X=(0,f.useCallback)((e=>{if(4!==e.target.value.length)return;const t=Number.parseInt(e.target.value);if(Number.isNaN(t))return;let n=12*(t-Z.getFullYear());const a=new Date(Z.getFullYear(),Z.getMonth()+n,Z.getDate());s&&s.getFullYear()===a.getFullYear()&&s.getMonth()<a.getMonth()?n-=a.getMonth()-s.getMonth():o&&o.getFullYear()===a.getFullYear()&&o.getMonth()>a.getMonth()&&(n+=o.getMonth()-a.getMonth()),F({type:"ADD_OFFSET",addedOffset:n})}),[Z,o,s]),ee=(0,f.useCallback)((e=>{if(!j&&!a)return;const t=Z.getFullYear()-(j||new Date).getFullYear(),n=Number.parseInt(e.target.value)-(j||new Date).getMonth();F({type:"SET_OFFSET",newOffset:12*t+n})}),[j,a,Z]),te=function(e,t,n,a){if(t&&t.getFullYear()>e)return[t.getFullYear().toString()];if(n&&n.getFullYear()<e)return[n.getFullYear().toString()];let l,r,o=!1;"all"===a?(o=!0,l=L,r=L):(l="number"==typeof a?a:a.previous,r="number"==typeof a?a:a.coming);let s=e-l;if(t){const e=o?t.getFullYear():s;s=Math.max(t.getFullYear(),e)}let c=e+r;if(n){const e=o?n.getFullYear():c;c=Math.min(n.getFullYear(),e)}const u=Math.max(c-s+1,1);return(0,y.Z)(Array(u).keys()).map((e=>e+s)).map((e=>e.toString()))}(T,o,s,M),ne=function(e,t,n,a){const l=(null==n?void 0:n.getFullYear())||e,r=void 0===(null==n?void 0:n.getMonth())?0:n.getMonth(),o=(null==a?void 0:a.getFullYear())||e,s=void 0===(null==a?void 0:a.getMonth())?11:a.getMonth();let c=0,u=11;return l===e&&(c=r),o===e&&(u=s),t.map(((e,t)=>({value:t.toString(),label:e}))).filter((e=>{let{value:t}=e;return parseInt(t)>=c&&parseInt(t)<=u}))}(T,u,o,s);return f.createElement("div",{ref:t,id:x,className:(0,i.Z)("jkl-calendar",{"jkl-calendar--hidden":n}),"data-testid":"jkl-calendar"},f.createElement("div",{className:"jkl-calendar__padding",ref:q,onKeyDown:J},f.createElement("fieldset",{className:"jkl-calendar-navigation"},f.createElement("div",null,f.createElement("button",Object.assign({},H({calendars:B,onClick:$}),{className:"jkl-calendar-navigation__arrow",type:"button"}),f.createElement(h.Y,{variant:"medium",bold:!0})),f.createElement("button",Object.assign({},W({calendars:B,onClick:$}),{className:"jkl-calendar-navigation__arrow",type:"button"}),f.createElement(g.L,{variant:"medium",bold:!0}))),f.createElement("div",null,f.createElement("div",{className:"jkl-calendar-navigation-dropdown"},f.createElement("select",{onChange:ee,className:"jkl-calendar-navigation-dropdown__select","aria-label":d,value:N.toString()},ne.map((e=>{let{label:t,value:n}=e;return f.createElement("option",{key:n,value:n},t)}))),f.createElement(v.v,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})),f.createElement("div",{className:"jkl-calendar-navigation-dropdown"},f.createElement("select",{onChange:X,className:"jkl-calendar-navigation-dropdown__select","aria-label":b,value:T.toString()},te.map((e=>f.createElement("option",{key:e,value:e},e)))),f.createElement(v.v,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})))),B.map((e=>f.createElement("table",{className:"jkl-calendar-table",key:""+e.month+e.year,"data-testid":"jkl-datepicker-calendar"},f.createElement("caption",{className:"jkl-sr-only"},u[e.month],", ",e.year),f.createElement("thead",null,f.createElement("tr",null,c.map((t=>f.createElement("th",{key:""+e.month+e.year+t},t))))),f.createElement("tbody",{"data-testid":"jkl-datepicker-dates"},e.weeks.map(((t,n)=>f.createElement("tr",{key:""+e.month+e.year+n},t.map(((t,a)=>{const l=""+e.month+e.year+n+a;if("string"==typeof t)return f.createElement("td",{className:"jkl-calendar__date jkl-calendar__date--empty",key:l},t);const{date:r,selectable:o,today:s,prevMonth:c,nextMonth:i}=t;return f.createElement("td",{key:l},f.createElement("button",Object.assign({},V({dateObj:t}),{type:"button",className:"jkl-calendar-date-button",tabIndex:Q(t)?0:-1,"aria-label":r.getDate()+". "+u[r.getMonth()].toLowerCase(),"aria-current":s?"date":void 0,"data-adjacent":c||i?"true":void 0,disabled:!o,onKeyDown:G}),f.createElement("span",{"aria-hidden":"true"},r.getDate())))})))))))))))}));W.displayName="Calendar";const K=(0,f.forwardRef)(((e,t)=>{const{"data-testautoid":n,id:h,className:g="",label:v="Velg dato",labelProps:p,defaultValue:w,defaultShow:D=!1,value:y,disableBeforeDate:b,disableAfterDate:M,yearsToShow:k,name:E,helpLabel:C,errorLabel:O,invalid:L,density:z,days:S,months:_,monthLabel:j,yearLabel:Z,placeholder:F="dd.mm.åååå",width:N="11.25rem",onChange:Y,onBlur:A,onFocus:B,onKeyDown:H,action:V,showCalendarLabel:R="Åpne kalender",hideCalendarLabel:I="Lukk kalender",supportLabelProps:P,tooltipProps:K,...q}=e;const U=(0,x.xk)(b),G=U?(0,d.Z)(U):void 0,J=(0,x.xk)(M),Q=J?(0,d.Z)(J):void 0,{0:$,1:X}=(0,f.useState)(function(e,t,n,a){const l=(0,x.xk)(e),r=(0,x.xk)(t);return l?T(l,n,a)?null:l:r?T(r,n,a)?null:r:null}(y,w,G,Q)),{0:ee,1:te}=(0,f.useState)(null),{0:ne,1:ae}=(0,f.useState)(D),[le]=(0,r.v)(ne),re=(0,f.useRef)(null),oe=(0,f.useRef)(null),se=(0,f.useCallback)((e=>{oe.current=e,t&&("function"==typeof t?t(e):t.current=e)}),[oe,t]),ce=(0,f.useRef)(null),ue=(0,f.useCallback)((e=>{if(!B||!ce.current)return;ce.current.contains(e.relatedTarget)||B(e,$,{error:ee,value:e.target.value})}),[B,$,ee]),ie=(0,f.useCallback)((e=>{A&&A(e,$,{error:ee,value:e.target.value})}),[A,$,ee]),de=(0,f.useCallback)((e=>{"Escape"===e.key&&(ae(!1),e.preventDefault(),e.stopPropagation()),null!=V&&V.onKeyDown&&V.onKeyDown(e)}),[ae,V]),fe=(0,f.useCallback)((e=>{if("Escape"===e.key&&(ae(!1),e.preventDefault(),e.stopPropagation()),H){let t=e.currentTarget.value;/[\d.]/.test(e.key)&&(t+=e.key),H(e,$,{error:ee,value:t})}}),[H,ae,$,ee]),me=(0,f.useCallback)((e=>{let t=null,n=null;if(e.target.value){const a=(0,x.xk)(e.target.value);a?G&&!function(e,t,n){void 0===n&&(n={inclusive:!1});const a="string"==typeof e?(0,x.xk)(e):e;return!!a&&(n.inclusive?a>=t:a>t)}(a,G)?n="OUTSIDE_LOWER_BOUND":Q&&!function(e,t,n){void 0===n&&(n={inclusive:!1});const a="string"==typeof e?(0,x.xk)(e):e;return!!a&&(n.inclusive?a<=t:a<t)}(a,Q)?n="OUTSIDE_UPPER_BOUND":ae(!1):n="WRONG_FORMAT",t=a||null}te(n),X(t),Y&&Y(e,t,{error:n,value:e.target.value})}),[Y,te,X,ae,G,Q]),he=(0,f.useCallback)((e=>{(0,m.flushSync)((()=>{ae(!ne)}));const t=le.current,n=t&&t.querySelector('[aria-pressed="true"]');n&&n.focus(),null!=V&&V.onClick&&V.onClick(e)}),[ae,ne,V,le]),ge=(0,f.useCallback)((()=>{ae(!ne)}),[ae,ne]),ve=(0,f.useCallback)((()=>{ae(!1)}),[ae]),pe=(0,f.useCallback)((e=>{let{date:t}=e;if(ae(!1),X(t),oe.current){const e=oe.current;e.value=(0,x.Bb)(t);const n=document.createEvent("HTMLEvents");n.initEvent("input",!0,!1),e.dispatchEvent(n),e.focus(),Y&&Y(n,t,{error:null,value:e.value})}}),[ae,X,Y]),we=(0,f.useCallback)((e=>{e.preventDefault(),ae(!1),re.current&&re.current.focus()}),[ae]);return(0,o.O)(ce,ve),(0,s.Z)(ce,ve),(0,c.W)(le,["Escape"],(()=>{ae(!1),oe.current&&oe.current.focus()})),f.createElement(l.B,Object.assign({id:h,className:(0,i.Z)("jkl-datepicker",g,{"jkl-datepicker--open":ne})},q,{ref:ce,label:v,labelProps:p,density:z,helpLabel:C,errorLabel:O,supportLabelProps:P,tooltipProps:K,render:e=>f.createElement("div",{"data-testid":"jkl-datepicker__input-wrapper",className:"jkl-datepicker__input-wrapper","data-density":z,tabIndex:-1,onKeyDown:fe},f.createElement(u.J,Object.assign({ref:se,"data-testid":"jkl-datepicker__input","data-testautoid":n,className:"jkl-datepicker__input",name:E,defaultValue:w,density:z,value:y,type:"text",placeholder:F,width:N,onFocus:ue,onBlur:ie,onClick:ge,onChange:me},e,{action:{buttonRef:re,icon:f.createElement(a.Q,null),label:ne?I:R,...V,onClick:he,onKeyDown:de}})),f.createElement("div",{className:"jkl-datepicker__calendar-wrapper"},f.createElement(W,{ref:le,density:z,date:$,minDate:G,maxDate:Q,days:S,months:_,monthLabel:j,yearLabel:Z,yearsToShow:k,hidden:!ne,onDateSelected:pe,onTabOutside:we})))}))}));K.displayName="DatePicker"},39065:function(e,t,n){n.d(t,{Bb:function(){return r},j3:function(){return c},xk:function(){return s}});const a=/^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/,l=/^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;function r(e){return(""+e.getDate()).padStart(2,"0")+"."+(""+(e.getMonth()+1)).padStart(2,"0")+"."+e.getFullYear()}const o=e=>{const t=a.exec(e);if(t)return t.slice(1,4);const n=l.exec(e);if(!n)return;const r=n.slice(1,4);return r.reverse(),r};function s(e){if(!e)return;const t=o(e);if(!t)return;const n=parseInt((new Date).toLocaleString("no-NB",{year:"2-digit"})),a=parseInt(t[0],10),l=parseInt(t[1],10)-1,r=parseInt(t[2],10),s=r>99?r:(e=>e>n?e+1900:e+2e3)(r),c=new Date(s,l,a,0,0,0);return c.getMonth()===l&&c.getFullYear()===s?c:void 0}function c(e){if(!e.relatedTarget)return!0;const t=e.target.closest(".jkl-datepicker__input-wrapper");return e.relatedTarget.closest(".jkl-datepicker__input-wrapper")!==t}},82400:function(e,t,n){n.d(t,{Y:function(){return s}});var a=n(3938),l=n(70079);const r=e=>l.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M10.083 7l.79.778-3.889 3.697H18v1.09H7.005l3.867 3.657-.79.778L5 12l5.083-5z",fill:"currentColor"})),o=e=>l.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M10.25 6.5l1.211 1.262-3.396 3.35H18v1.775H8.045l3.416 3.351-1.21 1.262L5 12.02l5.25-5.52z",fill:"currentColor"})),s=(0,a.d)({bold:{small:e=>l.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M8.443 5.25l1.024 1.09-2.874 2.894H15v1.532H6.577l2.89 2.894-1.024 1.09L4 10.017 8.443 5.25z",fill:"currentColor"})),medium:o,inherit:o},regular:{small:e=>l.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M8.3 5.5l.669.7-3.29 3.327H15v.98H5.696L8.97 13.8l-.668.7L4 10l4.3-4.5z",fill:"currentColor"})),medium:r,inherit:r}});s.displayName="ArrowLeftIcon"},18438:function(e,t,n){n.d(t,{L:function(){return s}});var a=n(3938),l=n(70079);const r=e=>l.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M13.917 7l-.79.778 3.889 3.697H6v1.09h10.995l-3.867 3.657.79.778L19 12l-5.083-5z",fill:"currentColor"})),o=e=>l.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M13.75 6.5l-1.211 1.262 3.396 3.35H6v1.775h9.955l-3.416 3.351 1.21 1.262L19 12.02 13.75 6.5z",fill:"currentColor"})),s=(0,a.d)({bold:{small:e=>l.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M11.557 5.25l-1.024 1.09 2.874 2.894H5v1.532h8.423l-2.89 2.894 1.024 1.09L16 10.017 11.557 5.25z",fill:"currentColor"})),medium:o,inherit:o},regular:{small:e=>l.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M11.7 5.5l-.669.7 3.29 3.327H5v.98h9.304L11.03 13.8l.668.7L16 10l-4.3-4.5z",fill:"currentColor"})),medium:r,inherit:r}});s.displayName="ArrowRightIcon"},20274:function(e,t,n){n.d(t,{Q:function(){return s}});var a=n(3938),l=n(70079);const r=e=>l.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 5H3v15h18V5zM2 4v17h20V4H2z",fill:"currentColor"}),l.createElement("path",{d:"M6 9l1-1 1 1-1 1-1-1zM6 13l1-1 1 1-1 1-1-1zM6 17l1-1 1 1-1 1-1-1zM11 9l1-1 1 1-1 1-1-1zM11 13l1-1 1 1-1 1-1-1zM11 17l1-1 1 1-1 1-1-1zM16 9l1-1 1 1-1 1-1-1zM16 13l1-1 1 1-1 1-1-1zM16 17l1-1 1 1-1 1-1-1zM6.5 2h1v4h-1V2zM16.5 2h1v4h-1V2z",fill:"currentColor"})),o=e=>l.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 6H4v14h16V6zM2 4v18h20V4H2z",fill:"currentColor"}),l.createElement("path",{d:"M5.5 11.5L7 10l1.5 1.5L7 13l-1.5-1.5zM10.5 11.5L12 10l1.5 1.5L12 13l-1.5-1.5zM15.5 11.5L17 10l1.5 1.5L17 13l-1.5-1.5zM5.5 16.5L7 15l1.5 1.5L7 18l-1.5-1.5zM10.5 16.5L12 15l1.5 1.5L12 18l-1.5-1.5zM15.5 16.5L17 15l1.5 1.5L17 18l-1.5-1.5zM6 2h2v6H6V2zM16 2h2v6h-2V2z",fill:"currentColor"})),s=(0,a.d)({bold:{small:e=>l.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.5 5.5h-13v11h13v-11zM2 4v14h16V4H2z",fill:"currentColor"}),l.createElement("path",{d:"M5 9.5l1-1 1 1-1 1-1-1zM5 13.5l1-1 1 1-1 1-1-1zM9 9.5l1-1 1 1-1 1-1-1zM9 13.5l1-1 1 1-1 1-1-1zM13 9.5l1-1 1 1-1 1-1-1zM13 13.5l1-1 1 1-1 1-1-1zM5.25 2h1.5v5h-1.5V2zM13.25 2h1.5v5h-1.5V2z",fill:"currentColor"})),medium:o,inherit:o},regular:{small:e=>l.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M3 4h1v13H3V4zM6 2h1v4H6V2zM5.793 8.007L6.5 7.3l.707.707-.707.707-.707-.707zM9.293 8.007L10 7.3l.707.707-.707.707-.707-.707zM12.793 8.007L13.5 7.3l.707.707-.707.707-.707-.707zM5.793 11.007L6.5 10.3l.707.707-.707.707-.707-.707zM9.293 11.007L10 10.3l.707.707-.707.707-.707-.707zM12.793 11.007l.707-.707.707.707-.707.707-.707-.707zM5.793 14.007L6.5 13.3l.707.707-.707.707-.707-.707zM9.293 14.007L10 13.3l.707.707-.707.707-.707-.707zM12.793 14.007l.707-.707.707.707-.707.707-.707-.707z",fill:"currentColor"}),l.createElement("path",{d:"M3 4h14v1H3V4zM3 16h14v1H3v-1z",fill:"currentColor"}),l.createElement("path",{d:"M16 4h1v13h-1V4zM13 2h1v4h-1V2z",fill:"currentColor"})),medium:r,inherit:r}});s.displayName="CalendarIcon"},93934:function(e,t,n){n.d(t,{v:function(){return s}});var a=n(3938),l=n(70079);const r=e=>l.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M5.5 9.701L6.223 9 12 14.598 17.777 9l.723.701L12 16 5.5 9.701z",fill:"currentColor"})),o=e=>l.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M5.25 9.893L6.673 8.5 12 13.714 17.327 8.5l1.423 1.393L12 16.5 5.25 9.893z",fill:"currentColor"})),s=(0,a.d)({bold:{small:e=>l.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M4.5 8.546L5.555 7.5 10 11.908 14.445 7.5 15.5 8.546 10 14 4.5 8.546z",fill:"currentColor"})),medium:o,inherit:o},regular:{small:e=>l.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M4.5 8.2l.726-.7L10 12.1l4.774-4.6.726.7-5.5 5.3-5.5-5.3z",fill:"currentColor"})),medium:r,inherit:r}});s.displayName="ChevronDownIcon"},17149:function(e,t,n){n.d(t,{O:function(){return l}});var a=n(70079);function l(e,t){function n(n){(null==e?void 0:e.current)&&!e.current.contains(n.target)&&t()}(0,a.useEffect)((()=>(e&&document&&document.addEventListener("click",n),()=>{document&&document.removeEventListener("click",n)})))}},24721:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(70079);function l(e,t){function n(n){(null==e?void 0:e.current)&&!e.current.contains(n.target)&&t()}(0,a.useEffect)((()=>(e&&document&&document.addEventListener("focusin",n),()=>{document&&document.removeEventListener("focusin",n)})))}}}]);