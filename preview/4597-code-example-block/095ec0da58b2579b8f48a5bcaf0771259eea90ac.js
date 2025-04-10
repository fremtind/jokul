"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5862],{12498:function(e,t,n){function a(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:function(){return a}})},64907:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(52688),r=n(12498);function o(e,t){(0,r.Z)(2,arguments);var n=(0,a.Z)(e),o=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}(t);return isNaN(o)?new Date(NaN):o?(n.setDate(n.getDate()+o),n):n}},19305:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(52688),r=n(12498);function o(e,t){(0,r.Z)(2,arguments);var n=(0,a.Z)(e),o=(0,a.Z)(t);return 12*(n.getFullYear()-o.getFullYear())+(n.getMonth()-o.getMonth())}},91866:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(52688),r=n(12498);function o(e,t){(0,r.Z)(2,arguments);var n=(0,a.Z)(e),o=(0,a.Z)(t);return n.getTime()<o.getTime()}},41083:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(9634),r=n(12498);function o(e){return(0,r.Z)(1,arguments),function(e,t){(0,r.Z)(2,arguments);var n=(0,a.Z)(e),o=(0,a.Z)(t);return n.getTime()===o.getTime()}(e,Date.now())}},9634:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(52688),r=n(12498);function o(e){(0,r.Z)(1,arguments);var t=(0,a.Z)(e);return t.setHours(0,0,0,0),t}},52688:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}n.d(t,{Z:function(){return o}});var r=n(12498);function o(e){(0,r.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===a(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}},904:function(e,t,n){n.d(t,{H:function(){return a}});const a=e=>{if(!e)return{};const t=getComputedStyle(e);return{theme:parseInt(t.getPropertyValue("--jkl-background-color").replace("#",""),16)<8388607.5?"dark":"light",density:'"compact"'===t.getPropertyValue("--jkl-density")?"compact":"comfortable"}}},18142:function(e,t,n){n.d(t,{M:function(){return ve}});var a=n(55086),r=n(61127),o=n(29311),l=n(35910),c=n(63639),s=n(80324),u=n.n(s),i=n(9634),d=n(92379),f=n(95295),p=n(40495),m=n(39162),b=n(70434),y=n(38475),g=Object.defineProperty,h=Object.defineProperties,v=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t)=>{for(var n in t||(t={}))O.call(t,n)&&k(e,n,t[n]);if(D)for(var n of D(t))w.call(t,n)&&k(e,n,t[n]);return e},j=(e,t)=>h(e,v(t));const M=(e,t)=>{let n;switch(t.type){case"SET_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+t.newOffset),j(E({},e),{offset:t.newOffset,shownDate:n});case"ADD_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+e.offset+t.addedOffset),j(E({},e),{offset:e.offset+t.addedOffset,shownDate:n});case"SET_SELECTED_DATE":return S(t.newDate);default:return e}},S=e=>({selectedDate:e,offset:0,shownDate:e});var C=n(9222),x=n(64907),F=n(19305),P=n(91866),N=n(41083),Z=n(76914);function _(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>t.some((t=>(t&&t(e),e.defaultPrevented)))}function T(e){let{calendars:t,offset:n,minDate:a}=e;if(n>1&&a){const{firstDayOfMonth:e}=t[0],r=(0,F.Z)(e,a);r<n&&(n=r)}return n}const Y=3;function L(e){let{calendars:t,offset:n,maxDate:a}=e;if(n>1&&a){const{lastDayOfMonth:e}=t[t.length-1],r=(0,F.Z)(a,e);r<n&&(n=r)}return n}function I(e){let{calendars:t,minDate:n}=e;if(!n)return!1;const{firstDayOfMonth:a}=t[0],r=(0,x.Z)(a,-1);return!!(0,P.Z)(r,n)}function A(e){let{calendars:t,maxDate:n}=e;if(!n)return!1;const{lastDayOfMonth:a}=t[t.length-1],r=(0,x.Z)(a,1);return!!(0,P.Z)(n,r)}function R(e){let{date:t,selected:n,monthsToDisplay:a,offset:r,minDate:o,maxDate:l,firstDayOfWeek:c,showOutsideDays:s}=e;const u=[],d=function(e,t,n){let a=(0,i.Z)(e);if(t){const e=(0,i.Z)(t);(0,P.Z)(a,e)&&(a=e)}if(n){const e=(0,i.Z)(n);(0,P.Z)(e,a)&&(a=e)}return a}(t,o,l);for(let i=0;i<a;i++){const e=B({month:d.getMonth()+i+r,year:d.getFullYear(),selectedDates:n,minDate:o,maxDate:l,firstDayOfWeek:c,showOutsideDays:s});u.push(e)}return u}function B(e){let{month:t,year:n,selectedDates:a,minDate:r,maxDate:o,firstDayOfWeek:l,showOutsideDays:c}=e;const s=function(e,t){const n=new Date(t,e,1);e=n.getMonth(),t=n.getFullYear();const a=32-new Date(t,e,32).getDate();return{daysInMonth:a,month:e,year:t}}(t,n),u=s.daysInMonth;t=s.month,n=s.year;const i=[];for(let y=1;y<=u;y++){const e=new Date(n,t,y),l={date:e,selected:W(a,e),selectable:q(r,o,e),today:(0,N.Z)(e),prevMonth:!1,nextMonth:!1};i.push(l)}const d=new Date(n,t,1),f=new Date(n,t,u),p=function(e){let{firstDayOfMonth:t,minDate:n,maxDate:a,selectedDates:r,firstDayOfWeek:o,showOutsideDays:l}=e;const c=[];let s=(t.getDay()+7-o)%7;if(l){const e=(0,x.Z)(t,-1),o=e.getDate(),l=e.getMonth(),u=e.getFullYear();let i=0;for(;i<s;){const e=new Date(u,l,o-i),t={date:e,selected:W(r,e),selectable:q(n,a,e),today:!1,prevMonth:!0,nextMonth:!1};c.unshift(t),i++}}else for(;s>0;)c.unshift(""),s--;return c}({firstDayOfMonth:d,minDate:r,maxDate:o,selectedDates:a,firstDayOfWeek:l,showOutsideDays:c}),m=function(e){let{lastDayOfMonth:t,minDate:n,maxDate:a,selectedDates:r,firstDayOfWeek:o,showOutsideDays:l}=e;const c=[];let s=(t.getDay()+7-o)%7;if(l){const e=(0,x.Z)(t,1),o=e.getMonth(),l=e.getFullYear();let u=0;for(;u<6-s;){const e=new Date(l,o,1+u),t={date:e,selected:W(r,e),selectable:q(n,a,e),today:!1,prevMonth:!1,nextMonth:!0};c.push(t),u++}}else for(;s<6;)c.push(""),s++;return c}({lastDayOfMonth:f,minDate:r,maxDate:o,selectedDates:a,firstDayOfWeek:l,showOutsideDays:c});i.unshift.apply(i,(0,C.Z)(p)),i.push.apply(i,(0,C.Z)(m));const b=function(e){const t=Math.ceil(e.length/7),n=[];for(let a=0;a<t;a++){n[a]=[];for(let t=0;t<7;t++)n[a].push(e[7*a+t])}return n}(i);return{firstDayOfMonth:d,lastDayOfMonth:f,month:t,year:n,weeks:b}}function W(e,t){return!!e&&(e=Array.isArray(e)?e:[e]).some((e=>e instanceof Date&&(0,i.Z)(e).getTime()===(0,i.Z)(t).getTime()))}function q(e,t,n){return!(e&&(0,P.Z)(n,e)||t&&(0,P.Z)(t,n))}function K(e,t,n){return Boolean(n&&e>n||t&&e<t)}function V(e,t,n,a){let r=e||t||new Date;return n&&(r=n>r?n:r),a&&(r=a<r?a:r),r}function J(e){return void 0!==e}function H(e,t){let{onClick:n,dateObj:a}=t;return{onClick:_(n,(t=>{e(a,t)})),disabled:!a.selectable,"aria-pressed":a.selected,role:"button"}}function U(e,t){let{minDate:n,offsetMonth:a,handleOffsetChanged:r}=e,{onClick:o,offset:l=1,calendars:c}=t;const s="Gå tilbake ".concat(l," måned").concat(1===l?"":"er");return{onClick:_(o,(()=>{r(a-T({calendars:c,offset:l,minDate:n}))})),disabled:I({calendars:c,minDate:n}),"aria-label":s,title:s}}function G(e,t){let{maxDate:n,offsetMonth:a,handleOffsetChanged:r}=e,{onClick:o,offset:l=1,calendars:c}=t;const s="Gå frem ".concat(l," måned").concat(1===l?"":"er");return{onClick:_(o,(()=>{r(a+L({calendars:c,offset:l,maxDate:n}))})),disabled:A({calendars:c,maxDate:n}),"aria-label":s,title:s}}function Q(e){let{date:t=(0,i.Z)(new Date),maxDate:n,minDate:a,monthsToDisplay:r=1,firstDayOfWeek:o=0,showOutsideDays:l=!0,offset:c,onDateSelected:s,onOffsetChanged:u,selected:f}=e;const{0:p,1:m}=(0,d.useState)(0),b=(g=p,J(y=c)?y:g);var y,g;function h(e){J(c)||m(e),u(e)}return{calendars:R({date:t,selected:f,monthsToDisplay:r,minDate:a,maxDate:n,offset:b,firstDayOfWeek:o,showOutsideDays:l}),getDateProps:H.bind(null,s),getBackProps:U.bind(null,{minDate:a,offsetMonth:b,handleOffsetChanged:h}),getForwardProps:G.bind(null,{maxDate:n,offsetMonth:b,handleOffsetChanged:h}),handleOffsetChanged:h}}var X=Object.defineProperty,$=Object.defineProperties,z=Object.getOwnPropertyDescriptors,ee=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,ae=(e,t,n)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,re=(e,t)=>{for(var n in t||(t={}))te.call(t,n)&&ae(e,n,t[n]);if(ee)for(var n of ee(t))ne.call(t,n)&&ae(e,n,t[n]);return e},oe=(e,t)=>$(e,z(t));const le=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],ce=["man","tir","ons","tor","fre","lør","søn"],se=(0,d.forwardRef)(((e,t)=>{const n=e,{date:a,defaultSelected:r,density:o,minDate:l,maxDate:c,days:s=ce,months:u=le,monthLabel:i="Velg måned",yearLabel:g="Velg år",yearsToShow:h=Y,onTabOutside:v}=n,D=((e,t)=>{var n={};for(var a in e)te.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&ee)for(var a of ee(e))t.indexOf(a)<0&&ne.call(e,a)&&(n[a]=e[a]);return n})(n,["date","defaultSelected","density","minDate","maxDate","days","months","monthLabel","yearLabel","yearsToShow","onTabOutside"]),O=(0,y.M)("jkl-calendar"),{0:{offset:w,selectedDate:k,shownDate:E},1:j}=(0,d.useReducer)(M,V(a,r,l,c),S),x=E.getMonth(),F=E.getFullYear();(0,d.useEffect)((()=>{j({type:"SET_SELECTED_DATE",newDate:V(a,r,l,c)})}),[a,r,l,c]);const P=(0,d.useCallback)((e=>{j({type:"SET_OFFSET",newOffset:e})}),[]),{calendars:N,getBackProps:Z,getDateProps:_,getForwardProps:R,handleOffsetChanged:B}=Q(re({date:k,selected:k,minDate:l,maxDate:c,offset:w,onOffsetChanged:P,firstDayOfWeek:1},D)),W=(0,d.useRef)(null),q=(0,d.useCallback)((e=>{if(!W.current)return;const t=document.activeElement,n=W.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),a=async e=>{null==t||t.setAttribute("tabindex","-1"),e.setAttribute("tabindex","0"),e.focus()};n.forEach(((r,o)=>{const s=o+e;if(r==t)if(s<=n.length-1&&s>=0)a(n[s]);else if(e<0){if(I({calendars:N,minDate:l}))return;if((0,f.flushSync)((()=>{B(w-T({calendars:N,offset:1,minDate:l}))})),!W.current)return;const e=W.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');e[e.length+s]&&(e[0].setAttribute("tabindex","-1"),a(e[e.length+s]))}else{if(A({calendars:N,maxDate:c}))return;if((0,f.flushSync)((()=>{B(w+L({calendars:N,offset:1,maxDate:c}))})),!W.current)return;const e=W.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');e[s-n.length]&&(e[0].setAttribute("tabindex","-1"),a(e[s-n.length]))}}))}),[B,W,w,N,c,l]),K=(0,d.useCallback)((e=>{switch(e.key){case"ArrowUp":q(-7),e.preventDefault();break;case"ArrowRight":q(1),e.preventDefault();break;case"ArrowDown":q(7),e.preventDefault();break;case"ArrowLeft":q(-1),e.preventDefault()}}),[q]),J=(0,d.useCallback)((e=>{var t;if("Tab"!==e.key)return;const n=null==(t=W.current)?void 0:t.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!n)return;const a=n[0],r=n[n.length-1];e.shiftKey||document.activeElement!==r?e.shiftKey&&document.activeElement===a&&(r.focus(),e.preventDefault()):(a.focus(),e.preventDefault())}),[]),H=(0,d.useCallback)((e=>{const{date:t,selected:n,selectable:a,prevMonth:r,nextMonth:o}=e;return!!a&&(!!n||(t.toString()===(null==l?void 0:l.toString())||!r&&!o&&E.getFullYear()===t.getFullYear()&&k.getMonth()!==t.getMonth()&&1===t.getDate()))}),[E,l,k]),U=(0,d.useCallback)((()=>{l&&E.getFullYear()-l.getFullYear()==0&&E.getMonth()-l.getMonth()==1?document.querySelectorAll(".jkl-calendar-navigation__arrow")[1].focus():c&&c.getFullYear()-E.getFullYear()==0&&c.getMonth()-E.getMonth()==1&&document.querySelectorAll(".jkl-calendar-navigation__arrow")[0].focus()}),[l,c,E]),G=(0,d.useCallback)((e=>{if(4!==e.target.value.length)return;const t=Number.parseInt(e.target.value);if(Number.isNaN(t))return;let n=12*(t-E.getFullYear());const a=new Date(E.getFullYear(),E.getMonth()+n,E.getDate());c&&c.getFullYear()===a.getFullYear()&&c.getMonth()<a.getMonth()?n-=a.getMonth()-c.getMonth():l&&l.getFullYear()===a.getFullYear()&&l.getMonth()>a.getMonth()&&(n+=l.getMonth()-a.getMonth()),j({type:"ADD_OFFSET",addedOffset:n})}),[E,l,c]),X=(0,d.useCallback)((e=>{if(!k&&!a)return;const t=E.getFullYear()-(k||new Date).getFullYear(),n=Number.parseInt(e.target.value)-(k||new Date).getMonth();j({type:"SET_OFFSET",newOffset:12*t+n})}),[k,a,E]),$=function(e,t,n,a){if(t&&t.getFullYear()>e)return[t.getFullYear().toString()];if(n&&n.getFullYear()<e)return[n.getFullYear().toString()];let r,o,l=!1;"all"===a?(l=!0,r=Y,o=Y):(r="number"==typeof a?a:a.previous,o="number"==typeof a?a:a.coming);let c=e-r;if(t){const e=l?t.getFullYear():c;c=Math.max(t.getFullYear(),e)}let s=e+o;if(n){const e=l?n.getFullYear():s;s=Math.min(n.getFullYear(),e)}const u=Math.max(s-c+1,1);return(0,C.Z)(Array(u).keys()).map((e=>e+c)).map((e=>e.toString()))}(F,l,c,h),z=function(e,t,n,a){const r=(null==n?void 0:n.getFullYear())||e,o=void 0===(null==n?void 0:n.getMonth())?0:n.getMonth(),l=(null==a?void 0:a.getFullYear())||e,c=void 0===(null==a?void 0:a.getMonth())?11:a.getMonth();let s=0,u=11;return r===e&&(s=o),l===e&&(u=c),t.map(((e,t)=>({value:t.toString(),label:e}))).filter((e=>{let{value:t}=e;return parseInt(t)>=s&&parseInt(t)<=u}))}(F,u,l,c);return d.createElement("div",{ref:t,id:O,className:"jkl-calendar","data-testid":"jkl-calendar"},d.createElement("div",{className:"jkl-calendar__padding",ref:W,onKeyDown:J},d.createElement("fieldset",{className:"jkl-calendar-navigation"},d.createElement("div",null,d.createElement("button",oe(re({},Z({calendars:N,onClick:U})),{className:"jkl-calendar-navigation__arrow",type:"button"}),d.createElement(p.Y,{variant:"medium",bold:!0})),d.createElement("button",oe(re({},R({calendars:N,onClick:U})),{className:"jkl-calendar-navigation__arrow",type:"button"}),d.createElement(m.L,{variant:"medium",bold:!0}))),d.createElement("div",null,d.createElement("div",{className:"jkl-calendar-navigation-dropdown"},d.createElement("select",{onChange:X,className:"jkl-calendar-navigation-dropdown__select","aria-label":i,value:x.toString()},z.map((e=>{let{label:t,value:n}=e;return d.createElement("option",{key:n,value:n},t)}))),d.createElement(b.v,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})),d.createElement("div",{className:"jkl-calendar-navigation-dropdown"},d.createElement("select",{onChange:G,className:"jkl-calendar-navigation-dropdown__select","aria-label":g,value:F.toString()},$.map((e=>d.createElement("option",{key:e,value:e},e)))),d.createElement(b.v,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})))),N.map((e=>d.createElement("table",{className:"jkl-calendar-table",key:"".concat(e.month).concat(e.year),"data-testid":"jkl-datepicker-calendar"},d.createElement("caption",{className:"jkl-sr-only"},u[e.month],", ",e.year),d.createElement("thead",null,d.createElement("tr",null,s.map((t=>d.createElement("th",{key:"".concat(e.month).concat(e.year).concat(t)},t))))),d.createElement("tbody",{"data-testid":"jkl-datepicker-dates"},e.weeks.map(((t,n)=>d.createElement("tr",{key:"".concat(e.month).concat(e.year).concat(n)},t.map(((t,a)=>{const r="".concat(e.month).concat(e.year).concat(n).concat(a);if("string"==typeof t)return d.createElement("td",{className:"jkl-calendar__date jkl-calendar__date--empty",key:r},t);const{date:o,selectable:l,today:c,prevMonth:s,nextMonth:i}=t;return d.createElement("td",{key:r},d.createElement("button",oe(re({},_({dateObj:t})),{type:"button",className:"jkl-calendar-date-button",tabIndex:H(t)?0:-1,"aria-label":"".concat(o.getDate(),". ").concat(u[o.getMonth()].toLowerCase()),"aria-current":c?"date":void 0,"data-adjacent":s||i?"true":void 0,disabled:!l,onKeyDown:K}),d.createElement("span",{"aria-hidden":"true"},o.getDate())))})))))))))))}));se.displayName="Calendar";var ue=n(15392),ie=Object.defineProperty,de=Object.defineProperties,fe=Object.getOwnPropertyDescriptors,pe=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,ye=(e,t,n)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ge=(e,t)=>{for(var n in t||(t={}))me.call(t,n)&&ye(e,n,t[n]);if(pe)for(var n of pe(t))be.call(t,n)&&ye(e,n,t[n]);return e},he=(e,t)=>de(e,fe(t));const ve=(0,d.forwardRef)(((e,t)=>{const n=e,{"data-testautoid":s,id:p,className:m="",label:b="Velg dato",labelProps:y,defaultValue:g,defaultShow:h=!1,value:v,disableBeforeDate:D,disableAfterDate:O,yearsToShow:w,name:k,helpLabel:E,errorLabel:j,invalid:M,density:S,days:C,months:x,monthLabel:F,yearLabel:P,placeholder:N="dd.mm.åååå",width:_="11.25rem",onChange:T,onBlur:Y,onFocus:L,onKeyDown:I,action:A,showCalendarLabel:R="Åpne kalender",hideCalendarLabel:B="Lukk kalender",supportLabelProps:W,tooltip:q,textInputProps:V}=n,J=((e,t)=>{var n={};for(var a in e)me.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&pe)for(var a of pe(e))t.indexOf(a)<0&&be.call(e,a)&&(n[a]=e[a]);return n})(n,["data-testautoid","id","className","label","labelProps","defaultValue","defaultShow","value","disableBeforeDate","disableAfterDate","yearsToShow","name","helpLabel","errorLabel","invalid","density","days","months","monthLabel","yearLabel","placeholder","width","onChange","onBlur","onFocus","onKeyDown","action","showCalendarLabel","hideCalendarLabel","supportLabelProps","tooltip","textInputProps"]);v&&g&&console.warn("DatePicker må enten være controlled eller uncontrolled. Hvis du bruker defaultValue og value sammen vil defaultValue bli ignorert.");const H=(0,Z.xk)(D),U=H?(0,i.Z)(H):void 0,G=(0,Z.xk)(O),Q=G?(0,i.Z)(G):void 0,{0:X,1:$}=(0,d.useState)(function(e,t,n,a){const r=(0,Z.xk)(e),o=(0,Z.xk)(t);return r?K(r,n,a)?null:r:o?K(o,n,a)?null:o:null}(v,g,U,Q)),{0:z,1:ee}=(0,d.useState)(null),{0:te,1:ne}=(0,d.useState)(h),ae=(0,d.useRef)(null),re=(0,d.useRef)(null),oe=(0,d.useRef)(null),le=(0,d.useRef)(null),ce=(0,d.useCallback)((e=>{le.current=e,t&&("function"==typeof t?t(e):t.current=e)}),[le,t]),ie=(0,d.useCallback)((e=>{if(!L||!re.current)return;re.current.contains(e.relatedTarget)||L(e,X,{error:z,value:e.target.value})}),[L,X,z]),de=(0,d.useCallback)((e=>{Y&&Y(e,X,{error:z,value:e.target.value})}),[Y,X,z]),fe=(0,d.useCallback)((e=>{"Escape"===e.key&&(ne(!1),e.preventDefault(),e.stopPropagation()),(null==A?void 0:A.onKeyDown)&&A.onKeyDown(e)}),[ne,A]),ye=(0,d.useCallback)((e=>{let t=null,n=null;if(e.target.value){const a=(0,Z.xk)(e.target.value);a?U&&!(0,ue.i5)(a,U)?n="OUTSIDE_LOWER_BOUND":Q&&!(0,ue.Xc)(a,Q)?n="OUTSIDE_UPPER_BOUND":ne(!1):n="WRONG_FORMAT",t=a||null}ee(n),$(t),T&&T(e,t,{error:n,value:e.target.value})}),[T,ee,$,ne,U,Q]),ve=(0,d.useCallback)((e=>{(0,f.flushSync)((()=>{ne(!te)}));const t=ae.current,n=t&&t.querySelector('[aria-pressed="true"]');window.requestAnimationFrame((()=>n&&n.focus())),(null==A?void 0:A.onClick)&&A.onClick(e)}),[ne,te,A,ae]),De=(0,d.useCallback)((e=>{let{date:t}=e;if(ne(!1),$(t),le.current){const e=le.current;e.value=(0,Z.Bb)(t);const n=document.createEvent("HTMLEvents");n.initEvent("input",!0,!1),e.dispatchEvent(n),e.focus(),T&&T(n,t,{error:null,value:e.value})}}),[ne,$,T]),Oe=(0,d.useCallback)((e=>{e.preventDefault(),ne(!1),oe.current&&oe.current.focus()}),[ne]);return d.createElement(o.B,he(ge({id:p,className:u()("jkl-datepicker",m,{"jkl-datepicker--open":te})},J),{ref:re,label:b,labelProps:y,density:S,helpLabel:E,errorLabel:j,supportLabelProps:W,tooltip:q,render:e=>d.createElement(c.J,ge(ge({ref:ce,"data-testid":"jkl-datepicker__input","data-testautoid":s,className:"jkl-datepicker__input",name:k,defaultValue:g,density:S,value:v,type:"text",placeholder:N,width:_,onFocus:ie,onBlur:de,onChange:ye,actionButton:d.createElement(l.Z,{positionReference:le,open:te,onOpenChange:()=>ne(!te),offset:8},d.createElement(l.Z.Trigger,he(ge({},A),{"data-testid":"jkl-datepicker__trigger",className:"jkl-text-input-action-button",title:te?B:R,tabIndex:0,onClick:ve,onKeyDown:fe,asChild:!0}),d.createElement(a.h,null,d.createElement(r.Q,null))),d.createElement(l.Z.Content,{initialFocus:-1,padding:24},d.createElement(se,{ref:ae,density:S,date:X,minDate:U,maxDate:Q,days:C,months:x,monthLabel:F,yearLabel:P,yearsToShow:w,onDateSelected:De,onTabOutside:Oe})))},V),e))}))}));ve.displayName="DatePicker"},76914:function(e,t,n){n.d(t,{Bb:function(){return o},j3:function(){return s},my:function(){return a},xk:function(){return c}});const a=/^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/,r=/^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;function o(e){const t="".concat(e.getDate()).padStart(2,"0"),n="".concat(e.getMonth()+1).padStart(2,"0");return"".concat(t,".").concat(n,".").concat(e.getFullYear())}const l=e=>{const t=a.exec(e);if(t)return t.slice(1,4);const n=r.exec(e);if(!n)return;const o=n.slice(1,4);return o.reverse(),o};function c(e){if(!e)return;const t=l(e);if(!t)return;const n=parseInt((new Date).toLocaleString("no-NB",{year:"2-digit"})),a=parseInt(t[0],10),r=parseInt(t[1],10)-1,o=parseInt(t[2],10),c=o>99?o:(s=o)>n?s+1900:s+2e3;var s;const u=new Date(c,r,a,0,0,0);return u.getMonth()===r&&u.getFullYear()===c?u:void 0}function s(e){if(!e.relatedTarget)return!0;const t=e.target.closest(".jkl-datepicker__input-wrapper");return e.relatedTarget.closest(".jkl-datepicker__input-wrapper")!==t}},15392:function(e,t,n){n.d(t,{R0:function(){return r},Xc:function(){return l},i5:function(){return o}});var a=n(76914);function r(e){if(!e)return!1;const t=(0,a.xk)(e);return Boolean(t)}function o(e,t,n){void 0===n&&(n={inclusive:!1});const r="string"==typeof e?(0,a.xk)(e):e;return!!r&&(n.inclusive?r>=t:r>t)}function l(e,t,n){void 0===n&&(n={inclusive:!1});const r="string"==typeof e?(0,a.xk)(e):e;return!!r&&(n.inclusive?r<=t:r<t)}},40495:function(e,t,n){n.d(t,{Y:function(){return i}});var a=n(92379),r=n(55650),o=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const i=e=>a.createElement(r.J,((e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&u(e,n,t[n]);return e})({},e),"");i.displayName="ArrowLeftIcon"},39162:function(e,t,n){n.d(t,{L:function(){return i}});var a=n(92379),r=n(55650),o=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const i=e=>a.createElement(r.J,((e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&u(e,n,t[n]);return e})({},e),"");i.displayName="ArrowRightIcon"},61127:function(e,t,n){n.d(t,{Q:function(){return i}});var a=n(92379),r=n(55650),o=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const i=e=>a.createElement(r.J,((e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&u(e,n,t[n]);return e})({},e),"");i.displayName="CalendarIcon"},70434:function(e,t,n){n.d(t,{v:function(){return i}});var a=n(92379),r=n(55650),o=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const i=e=>a.createElement(r.J,((e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&u(e,n,t[n]);return e})({},e),"");i.displayName="ChevronDownIcon"},35910:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(97498),r=n(60286),o=n(53624),l=n(904),c=n(80324),s=n.n(c),u=n(92379),i=Object.defineProperty,d=Object.defineProperties,f=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&y(e,n,t[n]);if(p)for(var n of p(t))b.call(t,n)&&y(e,n,t[n]);return e},h=(e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&b.call(e,a)&&(n[a]=e[a]);return n};const v=u.createContext(null),D=()=>{const e=u.useContext(v);if(null==e)throw new Error("Popover komponenter må brukes innenfor en <Popover /> komponent");return e},O=e=>{var t=e,{children:n}=t,l=h(t,["children"]);const c=(e=>{let{open:t,onOpenChange:n,placement:l="bottom-start",strategy:c="absolute",modal:s=!0,offset:i=4,positionReference:d,hoverOptions:f,focusOptions:p,clickOptions:m,roleOptions:b,dismissOptions:y}=e;const[h,v]=u.useState(t),D=null!=t?t:h,O=null!=n?n:v,w=(0,a.YF)({open:D,onOpenChange:O,placement:l,strategy:c,middleware:[(0,r.cv)(i),(0,r.RR)({padding:5}),(0,r.uY)({padding:12})],whileElementsMounted:o.Me}),k=w.context,E=(0,a.eS)(k,g({enabled:!1},m)),j=(0,a.XI)(k,g({enabled:!1},f)),M=(0,a.KK)(k,g({enabled:!1},p)),S=(0,a.bQ)(k,y),C=(0,a.qs)(k,b),x=(0,a.NI)([E,S,M,j,C]);return u.useLayoutEffect((()=>{d&&w.refs.setPositionReference(null==d?void 0:d.current)}),[d,w.refs]),u.useMemo((()=>g(g({open:D,onOpenChange:O,modal:s},x),w)),[D,O,s,x,w])})(g({},l));return u.createElement(v.Provider,{value:c},n)},w=u.forwardRef((function(e,t){var n=e,{children:r,asChild:o=!1}=n,l=h(n,["children","asChild"]);const{refs:c,getReferenceProps:s,open:i,onOpenChange:d}=D(),f=r.ref,p=(0,a.qq)([c.setReference,t,f]);return o&&u.isValidElement(r)?u.cloneElement(r,s(g(g({ref:p},r.props),l))):u.createElement("button",g({ref:p,onClick:()=>null==d?void 0:d(!i),"aria-expanded":i},s(l)),r)})),k=u.forwardRef((function(e,t){var n=e,{style:r,className:o,padding:c=0,initialFocus:i=0,returnFocus:p=!0}=n,m=h(n,["style","className","padding","initialFocus","returnFocus"]);const{context:b,modal:y,refs:v,open:O,floatingStyles:w,getFloatingProps:k}=D(),E=(0,a.qq)([v.setFloating,t]),j=v.reference.current,{theme:M,density:S}=(e=>!!e&&"contextElement"in e)(j)?(0,l.H)(j.contextElement):(0,l.H)(j),C=u.useRef(null);return u.useEffect((()=>{var e;C.current=(null==(e=b.elements.domReference)?void 0:e.closest("[data-portal]"))||document.body}),[b.elements.domReference]),O?u.createElement(a.ll,{root:C.current},u.createElement(a.wD,{context:b,modal:y,initialFocus:i,returnFocus:p},u.createElement("div",g({"data-theme":M,"data-layout-density":S,className:s()("jkl jkl-popover",o),ref:E,style:(x=g(g({},r),w),F={"--popover-padding":"var(--jkl-spacing-".concat(c,")")},d(x,f(F)))},k(m)),m.children))):null;var x,F}));O.Trigger=w,O.Content=k;var E=O}}]);