"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5800],{12498:function(e,t,n){function a(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:function(){return a}})},64907:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(92923),l=n(12498);function r(e,t){(0,l.Z)(2,arguments);var n=(0,a.Z)(e),r=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}(t);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}},19305:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(92923),l=n(12498);function r(e,t){(0,l.Z)(2,arguments);var n=(0,a.Z)(e),r=(0,a.Z)(t);return 12*(n.getFullYear()-r.getFullYear())+(n.getMonth()-r.getMonth())}},91866:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(92923),l=n(12498);function r(e,t){(0,l.Z)(2,arguments);var n=(0,a.Z)(e),r=(0,a.Z)(t);return n.getTime()<r.getTime()}},41083:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(9634),l=n(12498);function r(e){return(0,l.Z)(1,arguments),function(e,t){(0,l.Z)(2,arguments);var n=(0,a.Z)(e),r=(0,a.Z)(t);return n.getTime()===r.getTime()}(e,Date.now())}},9634:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(92923),l=n(12498);function r(e){(0,l.Z)(1,arguments);var t=(0,a.Z)(e);return t.setHours(0,0,0,0),t}},92923:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}n.d(t,{Z:function(){return r}});var l=n(12498);function r(e){(0,l.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===a(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}},69169:function(e,t,n){n.d(t,{bK:function(){return i},o9:function(){return o},xM:function(){return c}});var a=n(70079),l=n(91517),r=n(39065);const o={boolProps:["Med hjelpetekst","Med feil","Med tooltip"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},s=e=>{const t=864e5*(30*e-5);return t<0?12+t:t},c=e=>{let{boolValues:t,choiceValues:n}=e;const o=t&&t["Med hjelpetekst"]?"Du vil være forsikret fra denne datoen":void 0,c=t&&t["Med feil"]?"Du kan ikke velge en dato som har vært":void 0,i=n&&n.Variant,u=null!=t&&t["Med tooltip"]?{content:"Du vil være forsikret fra denne datoen. Du kan ikke velge en dato som har vært."}:void 0,{0:d,1:f}=(0,a.useState)("");return a.createElement(l.M,{label:"Velg startdato for forsikringen",labelProps:{variant:i},tooltipProps:u,errorLabel:c,name:"datepicker",helpLabel:o,disableBeforeDate:(0,r.Bb)(new Date(Date.now()-s(14))),disableAfterDate:(0,r.Bb)(new Date(Date.now()+s(14))),value:d,onFocus:(e,t,n)=>{console.log("onFocus",{event:e,date:t,meta:n})},onBlur:(e,t,n)=>{(0,r.j3)(e)&&console.log("onBlur",{event:e,date:t,meta:n})},onChange:(e,t,n)=>{f(e.target.value),console.log("onChange",{event:e,date:t,meta:n})},action:{onBlur:e=>{(0,r.j3)(e)&&console.log("action.onBlur",{event:e})},onClick:e=>{console.log("action.onClick",{event:e})}}})},i=e=>{let{boolValues:t,choiceValues:n}=e;return'\n<DatePicker\n    label="Velg startdato for forsikringen"\n    variant="'+((null==n?void 0:n.Variant)||"small")+'"'+(null!=t&&t["Med feil"]?'\n    errorLabel="Du kan ikke velge en dato som har vært"':"")+(null!=t&&t["Med hjelpetekst"]?'\n    helpLabel="Du vil være forsikret fra denne datoen"':"")+(null!=t&&t["Med tooltip"]?'\n    tooltipProps={{ content: "Du vil være forsikret fra denne datoen. Du kan ikke velge en dato som har vært." }}':"")+"\n/>\n"}},91517:function(e,t,n){n.d(t,{M:function(){return q}});var a=n(20274),l=n(81159),r=n(84490),o=n(17149),s=n(24721),c=n(18887),i=n(92326),u=n(26372),d=n.n(u),f=n(9634),m=n(70079),p=n(99581),h=n(82400),v=n(18438),g=n(93934),k=n(3438);const b=(e,t)=>{let n;switch(t.type){case"SET_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+t.newOffset),{...e,offset:t.newOffset,shownDate:n};case"ADD_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+e.offset+t.addedOffset),{...e,offset:e.offset+t.addedOffset,shownDate:n};case"SET_SELECTED_DATE":return D(t.newDate);default:return e}},D=e=>({selectedDate:e,offset:0,shownDate:e});var y=n(15089),w=n(64907),M=n(19305),E=n(91866),j=n(41083),_=n(39065);function O(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>t.some((t=>(t&&t(e),e.defaultPrevented)))}function C(e){let{calendars:t,offset:n,minDate:a}=e;if(n>1&&a){const{firstDayOfMonth:e}=t[0],l=(0,M.Z)(e,a);l<n&&(n=l)}return n}const x=3;function N(e){let{calendars:t,offset:n,maxDate:a}=e;if(n>1&&a){const{lastDayOfMonth:e}=t[t.length-1],l=(0,M.Z)(a,e);l<n&&(n=l)}return n}function S(e){let{calendars:t,minDate:n}=e;if(!n)return!1;const{firstDayOfMonth:a}=t[0],l=(0,w.Z)(a,-1);return!!(0,E.Z)(l,n)}function L(e){let{calendars:t,maxDate:n}=e;if(!n)return!1;const{lastDayOfMonth:a}=t[t.length-1],l=(0,w.Z)(a,1);return!!(0,E.Z)(n,l)}function F(e){let{date:t,selected:n,monthsToDisplay:a,offset:l,minDate:r,maxDate:o,firstDayOfWeek:s,showOutsideDays:c}=e;const i=[],u=function(e,t,n){let a=(0,f.Z)(e);if(t){const e=(0,f.Z)(t);(0,E.Z)(a,e)&&(a=e)}if(n){const e=(0,f.Z)(n);(0,E.Z)(e,a)&&(a=e)}return a}(t,r,o);for(let d=0;d<a;d++){const e=z({month:u.getMonth()+d+l,year:u.getFullYear(),selectedDates:n,minDate:r,maxDate:o,firstDayOfWeek:s,showOutsideDays:c});i.push(e)}return i}function z(e){let{month:t,year:n,selectedDates:a,minDate:l,maxDate:r,firstDayOfWeek:o,showOutsideDays:s}=e;const c=function(e,t){const n=new Date(t,e,1);e=n.getMonth(),t=n.getFullYear();const a=32-new Date(t,e,32).getDate();return{daysInMonth:a,month:e,year:t}}(t,n),i=c.daysInMonth;t=c.month,n=c.year;const u=[];for(let v=1;v<=i;v++){const e=new Date(n,t,v),o={date:e,selected:Z(a,e),selectable:T(l,r,e),today:(0,j.Z)(e),prevMonth:!1,nextMonth:!1};u.push(o)}const d=new Date(n,t,1),f=new Date(n,t,i),m=function(e){let{firstDayOfMonth:t,minDate:n,maxDate:a,selectedDates:l,firstDayOfWeek:r,showOutsideDays:o}=e;const s=[];let c=(t.getDay()+7-r)%7;if(o){const e=(0,w.Z)(t,-1),r=e.getDate(),o=e.getMonth(),i=e.getFullYear();let u=0;for(;u<c;){const e=new Date(i,o,r-u),t={date:e,selected:Z(l,e),selectable:T(n,a,e),today:!1,prevMonth:!0,nextMonth:!1};s.unshift(t),u++}}else for(;c>0;)s.unshift(""),c--;return s}({firstDayOfMonth:d,minDate:l,maxDate:r,selectedDates:a,firstDayOfWeek:o,showOutsideDays:s}),p=function(e){let{lastDayOfMonth:t,minDate:n,maxDate:a,selectedDates:l,firstDayOfWeek:r,showOutsideDays:o}=e;const s=[];let c=(t.getDay()+7-r)%7;if(o){const e=(0,w.Z)(t,1),r=e.getMonth(),o=e.getFullYear();let i=0;for(;i<6-c;){const e=new Date(o,r,1+i),t={date:e,selected:Z(l,e),selectable:T(n,a,e),today:!1,prevMonth:!1,nextMonth:!0};s.push(t),i++}}else for(;c<6;)s.push(""),c++;return s}({lastDayOfMonth:f,minDate:l,maxDate:r,selectedDates:a,firstDayOfWeek:o,showOutsideDays:s});u.unshift.apply(u,(0,y.Z)(m)),u.push.apply(u,(0,y.Z)(p));const h=function(e){const t=Math.ceil(e.length/7),n=[];for(let a=0;a<t;a++){n[a]=[];for(let t=0;t<7;t++)n[a].push(e[7*a+t])}return n}(u);return{firstDayOfMonth:d,lastDayOfMonth:f,month:t,year:n,weeks:h}}function Z(e,t){return!!e&&(e=Array.isArray(e)?e:[e]).some((e=>e instanceof Date&&(0,f.Z)(e).getTime()===(0,f.Z)(t).getTime()))}function T(e,t,n){return!(e&&(0,E.Z)(n,e)||t&&(0,E.Z)(t,n))}function V(e,t,n){return Boolean(n&&e>n||t&&e<t)}function Y(e,t,n,a){let l=e||t||new Date;return n&&(l=n>l?n:l),a&&(l=a<l?a:l),l}function A(e){return void 0!==e}function P(e,t){let{onClick:n,dateObj:a}=t;return{onClick:O(n,(t=>{e(a,t)})),disabled:!a.selectable,"aria-pressed":a.selected,role:"button"}}function B(e,t){let{minDate:n,offsetMonth:a,handleOffsetChanged:l}=e,{onClick:r,offset:o=1,calendars:s}=t;const c="Gå tilbake "+o+" måned"+(1===o?"":"er");return{onClick:O(r,(()=>{l(a-C({calendars:s,offset:o,minDate:n}))})),disabled:S({calendars:s,minDate:n}),"aria-label":c,title:c}}function R(e,t){let{maxDate:n,offsetMonth:a,handleOffsetChanged:l}=e,{onClick:r,offset:o=1,calendars:s}=t;const c="Gå frem "+o+" måned"+(1===o?"":"er");return{onClick:O(r,(()=>{l(a+N({calendars:s,offset:o,maxDate:n}))})),disabled:L({calendars:s,maxDate:n}),"aria-label":c,title:c}}function W(e){let{date:t=(0,f.Z)(new Date),maxDate:n,minDate:a,monthsToDisplay:l=1,firstDayOfWeek:r=0,showOutsideDays:o=!0,offset:s,onDateSelected:c,onOffsetChanged:i,selected:u}=e;const{0:d,1:p}=(0,m.useState)(0),h=(g=d,A(v=s)?v:g);var v,g;function k(e){A(s)||p(e),i(e)}return{calendars:F({date:t,selected:u,monthsToDisplay:l,minDate:a,maxDate:n,offset:h,firstDayOfWeek:r,showOutsideDays:o}),getDateProps:P.bind(null,c),getBackProps:B.bind(null,{minDate:a,offsetMonth:h,handleOffsetChanged:k}),getForwardProps:R.bind(null,{maxDate:n,offsetMonth:h,handleOffsetChanged:k}),handleOffsetChanged:k}}const I=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],H=["man","tir","ons","tor","fre","lør","søn"],K=(0,m.forwardRef)(((e,t)=>{const{hidden:n,date:a,defaultSelected:l,density:r,minDate:o,maxDate:s,days:c=H,months:i=I,monthLabel:u="Velg måned",yearLabel:f="Velg år",yearsToShow:w=x,onTabOutside:M,...E}=e,j=(0,k.M)("jkl-calendar"),{0:{offset:_,selectedDate:O,shownDate:F},1:z}=(0,m.useReducer)(b,Y(a,l,o,s),D),Z=F.getMonth(),T=F.getFullYear();(0,m.useEffect)((()=>{z({type:"SET_SELECTED_DATE",newDate:Y(a,l,o,s)})}),[a,l,o,s]);const V=(0,m.useCallback)((e=>{z({type:"SET_OFFSET",newOffset:e})}),[]),{calendars:A,getBackProps:P,getDateProps:B,getForwardProps:R,handleOffsetChanged:K}=W({date:O,selected:O,minDate:o,maxDate:s,offset:_,onOffsetChanged:V,firstDayOfWeek:1,...E}),q=(0,m.useRef)(null),U=(0,m.useCallback)((e=>{if(!q.current)return;const t=document.activeElement,n=q.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),a=async e=>{null==t||t.setAttribute("tabindex","-1"),e.setAttribute("tabindex","0"),e.focus()};n.forEach(((l,r)=>{const c=r+e;if(l==t)if(c<=n.length-1&&c>=0)a(n[c]);else if(e<0){if(S({calendars:A,minDate:o}))return;if((0,p.flushSync)((()=>{K(_-C({calendars:A,offset:1,minDate:o}))})),!q.current)return;const e=q.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');e[e.length+c]&&(e[0].setAttribute("tabindex","-1"),a(e[e.length+c]))}else{if(L({calendars:A,maxDate:s}))return;if((0,p.flushSync)((()=>{K(_+N({calendars:A,offset:1,maxDate:s}))})),!q.current)return;const e=q.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');e[c-n.length]&&(e[0].setAttribute("tabindex","-1"),a(e[c-n.length]))}}))}),[K,q,_,A,s,o]),G=(0,m.useCallback)((e=>{switch(e.key){case"ArrowUp":U(-7),e.preventDefault();break;case"ArrowRight":U(1),e.preventDefault();break;case"ArrowDown":U(7),e.preventDefault();break;case"ArrowLeft":U(-1),e.preventDefault()}}),[U]),J=(0,m.useCallback)((e=>{var t;if("Tab"!==e.key)return;const n=null===(t=q.current)||void 0===t?void 0:t.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!n)return;const a=n[0],l=n[n.length-1];e.shiftKey||document.activeElement!==l?e.shiftKey&&document.activeElement===a&&(l.focus(),e.preventDefault()):(a.focus(),e.preventDefault())}),[]),Q=(0,m.useCallback)((e=>{const{date:t,selected:n,selectable:a,prevMonth:l,nextMonth:r}=e;return!!a&&(!!n||(t.toString()===(null==o?void 0:o.toString())||!l&&!r&&F.getFullYear()===t.getFullYear()&&O.getMonth()!==t.getMonth()&&1===t.getDate()))}),[F,o,O]),$=(0,m.useCallback)((()=>{o&&F.getFullYear()-o.getFullYear()==0&&F.getMonth()-o.getMonth()==1?document.querySelectorAll(".jkl-calendar-navigation__arrow")[1].focus():s&&s.getFullYear()-F.getFullYear()==0&&s.getMonth()-F.getMonth()==1&&document.querySelectorAll(".jkl-calendar-navigation__arrow")[0].focus()}),[o,s,F]),X=(0,m.useCallback)((e=>{if(4!==e.target.value.length)return;const t=Number.parseInt(e.target.value);if(Number.isNaN(t))return;let n=12*(t-F.getFullYear());const a=new Date(F.getFullYear(),F.getMonth()+n,F.getDate());s&&s.getFullYear()===a.getFullYear()&&s.getMonth()<a.getMonth()?n-=a.getMonth()-s.getMonth():o&&o.getFullYear()===a.getFullYear()&&o.getMonth()>a.getMonth()&&(n+=o.getMonth()-a.getMonth()),z({type:"ADD_OFFSET",addedOffset:n})}),[F,o,s]),ee=(0,m.useCallback)((e=>{if(!O&&!a)return;const t=F.getFullYear()-(O||new Date).getFullYear(),n=Number.parseInt(e.target.value)-(O||new Date).getMonth();z({type:"SET_OFFSET",newOffset:12*t+n})}),[O,a,F]),te=function(e,t,n,a){if(t&&t.getFullYear()>e)return[t.getFullYear().toString()];if(n&&n.getFullYear()<e)return[n.getFullYear().toString()];let l,r,o=!1;"all"===a?(o=!0,l=x,r=x):(l="number"==typeof a?a:a.previous,r="number"==typeof a?a:a.coming);let s=e-l;if(t){const e=o?t.getFullYear():s;s=Math.max(t.getFullYear(),e)}let c=e+r;if(n){const e=o?n.getFullYear():c;c=Math.min(n.getFullYear(),e)}const i=Math.max(c-s+1,1);return(0,y.Z)(Array(i).keys()).map((e=>e+s)).map((e=>e.toString()))}(T,o,s,w),ne=function(e,t,n,a){const l=(null==n?void 0:n.getFullYear())||e,r=void 0===(null==n?void 0:n.getMonth())?0:n.getMonth(),o=(null==a?void 0:a.getFullYear())||e,s=void 0===(null==a?void 0:a.getMonth())?11:a.getMonth();let c=0,i=11;return l===e&&(c=r),o===e&&(i=s),t.map(((e,t)=>({value:t.toString(),label:e}))).filter((e=>{let{value:t}=e;return parseInt(t)>=c&&parseInt(t)<=i}))}(T,i,o,s);return m.createElement("div",{ref:t,id:j,className:d()("jkl-calendar",{"jkl-calendar--hidden":n}),"data-testid":"jkl-calendar"},m.createElement("div",{className:"jkl-calendar__padding",ref:q,onKeyDown:J},m.createElement("fieldset",{className:"jkl-calendar-navigation"},m.createElement("div",null,m.createElement("button",Object.assign({},P({calendars:A,onClick:$}),{className:"jkl-calendar-navigation__arrow",type:"button"}),m.createElement(h.Y,{variant:"medium",bold:!0})),m.createElement("button",Object.assign({},R({calendars:A,onClick:$}),{className:"jkl-calendar-navigation__arrow",type:"button"}),m.createElement(v.L,{variant:"medium",bold:!0}))),m.createElement("div",null,m.createElement("div",{className:"jkl-calendar-navigation-dropdown"},m.createElement("select",{onChange:ee,className:"jkl-calendar-navigation-dropdown__select","aria-label":u,value:Z.toString()},ne.map((e=>{let{label:t,value:n}=e;return m.createElement("option",{key:n,value:n},t)}))),m.createElement(g.v,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})),m.createElement("div",{className:"jkl-calendar-navigation-dropdown"},m.createElement("select",{onChange:X,className:"jkl-calendar-navigation-dropdown__select","aria-label":f,value:T.toString()},te.map((e=>m.createElement("option",{key:e,value:e},e)))),m.createElement(g.v,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})))),A.map((e=>m.createElement("table",{className:"jkl-calendar-table",key:""+e.month+e.year,"data-testid":"jkl-datepicker-calendar"},m.createElement("caption",{className:"jkl-sr-only"},i[e.month],", ",e.year),m.createElement("thead",null,m.createElement("tr",null,c.map((t=>m.createElement("th",{key:""+e.month+e.year+t},t))))),m.createElement("tbody",{"data-testid":"jkl-datepicker-dates"},e.weeks.map(((t,n)=>m.createElement("tr",{key:""+e.month+e.year+n},t.map(((t,a)=>{const l=""+e.month+e.year+n+a;if("string"==typeof t)return m.createElement("td",{className:"jkl-calendar__date jkl-calendar__date--empty",key:l},t);const{date:r,selectable:o,today:s,prevMonth:c,nextMonth:u}=t;return m.createElement("td",{key:l},m.createElement("button",Object.assign({},B({dateObj:t}),{type:"button",className:"jkl-calendar-date-button",tabIndex:Q(t)?0:-1,"aria-label":r.getDate()+". "+i[r.getMonth()].toLowerCase(),"aria-current":s?"date":void 0,"data-adjacent":c||u?"true":void 0,disabled:!o,onKeyDown:G}),m.createElement("span",{"aria-hidden":"true"},r.getDate())))})))))))))))}));K.displayName="Calendar";const q=(0,m.forwardRef)(((e,t)=>{const{"data-testautoid":n,id:u,className:h="",label:v="Velg dato",labelProps:g,defaultValue:k,defaultShow:b=!1,value:D,disableBeforeDate:y,disableAfterDate:w,yearsToShow:M,name:E,helpLabel:j,errorLabel:O,invalid:C,density:x,days:N,months:S,monthLabel:L,yearLabel:F,placeholder:z="dd.mm.åååå",width:Z="11.25rem",onChange:T,onBlur:Y,onFocus:A,onKeyDown:P,action:B,showCalendarLabel:R="Åpne kalender",hideCalendarLabel:W="Lukk kalender",supportLabelProps:I,tooltipProps:H,...q}=e;D&&k&&console.warn("DatePicker må enten være controlled eller uncontrolled. Hvis du bruker defaultValue og value sammen vil defaultValue bli ignorert.");const U=(0,_.xk)(y),G=U?(0,f.Z)(U):void 0,J=(0,_.xk)(w),Q=J?(0,f.Z)(J):void 0,{0:$,1:X}=(0,m.useState)(function(e,t,n,a){const l=(0,_.xk)(e),r=(0,_.xk)(t);return l?V(l,n,a)?null:l:r?V(r,n,a)?null:r:null}(D,k,G,Q)),{0:ee,1:te}=(0,m.useState)(null),{0:ne,1:ae}=(0,m.useState)(b),[le]=(0,r.v)(ne),re=(0,m.useRef)(null),oe=(0,m.useRef)(null),se=(0,m.useCallback)((e=>{oe.current=e,t&&("function"==typeof t?t(e):t.current=e)}),[oe,t]),ce=(0,m.useRef)(null),ie=(0,m.useCallback)((e=>{if(!A||!ce.current)return;ce.current.contains(e.relatedTarget)||A(e,$,{error:ee,value:e.target.value})}),[A,$,ee]),ue=(0,m.useCallback)((e=>{Y&&Y(e,$,{error:ee,value:e.target.value})}),[Y,$,ee]),de=(0,m.useCallback)((e=>{"Escape"===e.key&&(ae(!1),e.preventDefault(),e.stopPropagation()),null!=B&&B.onKeyDown&&B.onKeyDown(e)}),[ae,B]),fe=(0,m.useCallback)((e=>{if("Escape"===e.key&&(ae(!1),e.preventDefault(),e.stopPropagation()),P){let t=e.currentTarget.value;/[\d.]/.test(e.key)&&(t+=e.key),P(e,$,{error:ee,value:t})}}),[P,ae,$,ee]),me=(0,m.useCallback)((e=>{let t=null,n=null;if(e.target.value){const a=(0,_.xk)(e.target.value);a?G&&!function(e,t,n){void 0===n&&(n={inclusive:!1});const a="string"==typeof e?(0,_.xk)(e):e;return!!a&&(n.inclusive?a>=t:a>t)}(a,G)?n="OUTSIDE_LOWER_BOUND":Q&&!function(e,t,n){void 0===n&&(n={inclusive:!1});const a="string"==typeof e?(0,_.xk)(e):e;return!!a&&(n.inclusive?a<=t:a<t)}(a,Q)?n="OUTSIDE_UPPER_BOUND":ae(!1):n="WRONG_FORMAT",t=a||null}te(n),X(t),T&&T(e,t,{error:n,value:e.target.value})}),[T,te,X,ae,G,Q]),pe=(0,m.useCallback)((e=>{(0,p.flushSync)((()=>{ae(!ne)}));const t=le.current,n=t&&t.querySelector('[aria-pressed="true"]');n&&n.focus(),null!=B&&B.onClick&&B.onClick(e)}),[ae,ne,B,le]),he=(0,m.useCallback)((()=>{ae(!ne)}),[ae,ne]),ve=(0,m.useCallback)((()=>{ae(!1)}),[ae]),ge=(0,m.useCallback)((e=>{let{date:t}=e;if(ae(!1),X(t),oe.current){const e=oe.current;e.value=(0,_.Bb)(t);const n=document.createEvent("HTMLEvents");n.initEvent("input",!0,!1),e.dispatchEvent(n),e.focus(),T&&T(n,t,{error:null,value:e.value})}}),[ae,X,T]),ke=(0,m.useCallback)((e=>{e.preventDefault(),ae(!1),re.current&&re.current.focus()}),[ae]);return(0,o.O)(ce,ve),(0,s.Z)(ce,ve),(0,c.W)(le,["Escape"],(()=>{ae(!1),oe.current&&oe.current.focus()})),m.createElement(l.B,Object.assign({id:u,className:d()("jkl-datepicker",h,{"jkl-datepicker--open":ne})},q,{ref:ce,label:v,labelProps:g,density:x,helpLabel:j,errorLabel:O,supportLabelProps:I,tooltipProps:H,render:e=>m.createElement("div",{"data-testid":"jkl-datepicker__input-wrapper",className:"jkl-datepicker__input-wrapper","data-density":x,tabIndex:-1,onKeyDown:fe},m.createElement(i.J,Object.assign({ref:se,"data-testid":"jkl-datepicker__input","data-testautoid":n,className:"jkl-datepicker__input",name:E,defaultValue:k,density:x,value:D,type:"text",placeholder:z,width:Z,onFocus:ie,onBlur:ue,onClick:he,onChange:me},e,{action:{buttonRef:re,icon:m.createElement(a.Q,null),label:ne?W:R,...B,onClick:pe,onKeyDown:de}})),m.createElement("div",{className:"jkl-datepicker__calendar-wrapper"},m.createElement(K,{ref:le,density:x,date:$,minDate:G,maxDate:Q,days:N,months:S,monthLabel:L,yearLabel:F,yearsToShow:M,hidden:!ne,onDateSelected:ge,onTabOutside:ke})))}))}));q.displayName="DatePicker"},39065:function(e,t,n){n.d(t,{Bb:function(){return r},j3:function(){return c},xk:function(){return s}});const a=/^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/,l=/^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;function r(e){return(""+e.getDate()).padStart(2,"0")+"."+(""+(e.getMonth()+1)).padStart(2,"0")+"."+e.getFullYear()}const o=e=>{const t=a.exec(e);if(t)return t.slice(1,4);const n=l.exec(e);if(!n)return;const r=n.slice(1,4);return r.reverse(),r};function s(e){if(!e)return;const t=o(e);if(!t)return;const n=parseInt((new Date).toLocaleString("no-NB",{year:"2-digit"})),a=parseInt(t[0],10),l=parseInt(t[1],10)-1,r=parseInt(t[2],10),s=r>99?r:(e=>e>n?e+1900:e+2e3)(r),c=new Date(s,l,a,0,0,0);return c.getMonth()===l&&c.getFullYear()===s?c:void 0}function c(e){if(!e.relatedTarget)return!0;const t=e.target.closest(".jkl-datepicker__input-wrapper");return e.relatedTarget.closest(".jkl-datepicker__input-wrapper")!==t}},72285:function(e,t,n){n.d(t,{l:function(){return m}});var a=n(78217),l=n(41994),r=n(87505),o=n(70079);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},i=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:l}=t,r=n>0,o=a-n>l;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",o)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},f=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var a},m=e=>{let{types:t}=e;return o.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},o.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),o.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(i):[],r=n.props?Object.values(n.props).filter(c):[];return o.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},a.length>0&&o.createElement(f,{props:a}),r.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(f,{props:r})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return c}});var a=n(26372),l=n.n(a),r=n(49597),o=n(70079),s=n(34044);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,o.useContext)(s.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(r.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||c?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return o}});var a=n(26372),l=n.n(a),r=n(70079);const o=e=>{let{className:t,density:n,...a}=e;return r.createElement("div",{"data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,...a})}},41994:function(e,t,n){n.d(t,{Q:function(){return i}});var a=n(53484),l=n(3438),r=n(84490),o=n(26372),s=n.n(o),c=n(70079);const i=e=>{let{children:t,title:n,className:o,startExpanded:i=!1,onClick:u,...d}=e;const f=(0,l.M)("title"),m=(0,l.M)("content"),{0:p,1:h}=(0,c.useState)(i),[v]=(0,r.v)(p,{easing:"exit",timing:"expressive"});return c.createElement("div",{"data-testid":"jkl-accordion-item",...d,className:s()("jkl-accordion-item",o,{"jkl-accordion-item--expanded":p})},c.createElement("button",{id:f,className:"jkl-accordion-item__title",type:"button","aria-expanded":p,"aria-controls":m,onClick:e=>{const t=!p;h(t),u&&u(e,t)}},n,c.createElement(a.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})),c.createElement("div",{id:m,ref:v,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":f,hidden:!p},c.createElement("div",{className:"jkl-accordion-item__content"},t)))}},20274:function(e,t,n){n.d(t,{Q:function(){return s}});var a=n(3938),l=n(70079);const r=e=>l.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 5H3v15h18V5zM2 4v17h20V4H2z",fill:"currentColor"}),l.createElement("path",{d:"M6 9l1-1 1 1-1 1-1-1zM6 13l1-1 1 1-1 1-1-1zM6 17l1-1 1 1-1 1-1-1zM11 9l1-1 1 1-1 1-1-1zM11 13l1-1 1 1-1 1-1-1zM11 17l1-1 1 1-1 1-1-1zM16 9l1-1 1 1-1 1-1-1zM16 13l1-1 1 1-1 1-1-1zM16 17l1-1 1 1-1 1-1-1zM6.5 2h1v4h-1V2zM16.5 2h1v4h-1V2z",fill:"currentColor"})),o=e=>l.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 6H4v14h16V6zM2 4v18h20V4H2z",fill:"currentColor"}),l.createElement("path",{d:"M5.5 11.5L7 10l1.5 1.5L7 13l-1.5-1.5zM10.5 11.5L12 10l1.5 1.5L12 13l-1.5-1.5zM15.5 11.5L17 10l1.5 1.5L17 13l-1.5-1.5zM5.5 16.5L7 15l1.5 1.5L7 18l-1.5-1.5zM10.5 16.5L12 15l1.5 1.5L12 18l-1.5-1.5zM15.5 16.5L17 15l1.5 1.5L17 18l-1.5-1.5zM6 2h2v6H6V2zM16 2h2v6h-2V2z",fill:"currentColor"})),s=(0,a.d)({bold:{small:e=>l.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.5 5.5h-13v11h13v-11zM2 4v14h16V4H2z",fill:"currentColor"}),l.createElement("path",{d:"M5 9.5l1-1 1 1-1 1-1-1zM5 13.5l1-1 1 1-1 1-1-1zM9 9.5l1-1 1 1-1 1-1-1zM9 13.5l1-1 1 1-1 1-1-1zM13 9.5l1-1 1 1-1 1-1-1zM13 13.5l1-1 1 1-1 1-1-1zM5.25 2h1.5v5h-1.5V2zM13.25 2h1.5v5h-1.5V2z",fill:"currentColor"})),medium:o,inherit:o},regular:{small:e=>l.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M3 4h1v13H3V4zM6 2h1v4H6V2zM5.793 8.007L6.5 7.3l.707.707-.707.707-.707-.707zM9.293 8.007L10 7.3l.707.707-.707.707-.707-.707zM12.793 8.007L13.5 7.3l.707.707-.707.707-.707-.707zM5.793 11.007L6.5 10.3l.707.707-.707.707-.707-.707zM9.293 11.007L10 10.3l.707.707-.707.707-.707-.707zM12.793 11.007l.707-.707.707.707-.707.707-.707-.707zM5.793 14.007L6.5 13.3l.707.707-.707.707-.707-.707zM9.293 14.007L10 13.3l.707.707-.707.707-.707-.707zM12.793 14.007l.707-.707.707.707-.707.707-.707-.707z",fill:"currentColor"}),l.createElement("path",{d:"M3 4h14v1H3V4zM3 16h14v1H3v-1z",fill:"currentColor"}),l.createElement("path",{d:"M16 4h1v13h-1V4zM13 2h1v4h-1V2z",fill:"currentColor"})),medium:r,inherit:r}});s.displayName="CalendarIcon"},93934:function(e,t,n){n.d(t,{v:function(){return s}});var a=n(3938),l=n(70079);const r=e=>l.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M5.5 9.701L6.223 9 12 14.598 17.777 9l.723.701L12 16 5.5 9.701z",fill:"currentColor"})),o=e=>l.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M5.25 9.893L6.673 8.5 12 13.714 17.327 8.5l1.423 1.393L12 16.5 5.25 9.893z",fill:"currentColor"})),s=(0,a.d)({bold:{small:e=>l.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M4.5 8.546L5.555 7.5 10 11.908 14.445 7.5 15.5 8.546 10 14 4.5 8.546z",fill:"currentColor"})),medium:o,inherit:o},regular:{small:e=>l.createElement("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M4.5 8.2l.726-.7L10 12.1l4.774-4.6.726.7-5.5 5.3-5.5-5.3z",fill:"currentColor"})),medium:r,inherit:r}});s.displayName="ChevronDownIcon"},17149:function(e,t,n){n.d(t,{O:function(){return l}});var a=n(70079);function l(e,t){function n(n){(null==e?void 0:e.current)&&!e.current.contains(n.target)&&t()}(0,a.useEffect)((()=>(e&&document&&document.addEventListener("click",n),()=>{document&&document.removeEventListener("click",n)})))}},24721:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(70079);function l(e,t){function n(n){(null==e?void 0:e.current)&&!e.current.contains(n.target)&&t()}(0,a.useEffect)((()=>(e&&document&&document.addEventListener("focusin",n),()=>{document&&document.removeEventListener("focusin",n)})))}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var a=n(70079),l=n(41699),r=n(65174),o=n(6914),s=n(82546),c=n(39126),i=n(66169),u=n(94509);const d=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:f,rows:m,verticalAlign:p,...h}=e;return a.createElement(l.i,{fullWidth:!0,...h,ref:t},n&&a.createElement(o.R,{srOnly:!0},n),a.createElement(c.s,null,a.createElement(u.S,null,d.map(((e,t)=>a.createElement(i.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(r.R,null,0===m.length&&f&&a.createElement(u.S,null,a.createElement(s.p,{colSpan:d.length},f)),m.map(((e,t)=>a.createElement(u.S,{key:t},e.map(((e,t)=>a.createElement(s.p,{key:t,"data-th":d[t],verticalAlign:p},e))))))))}));d.displayName="DataTable"}}]);