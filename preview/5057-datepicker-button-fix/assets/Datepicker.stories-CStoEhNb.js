import{c as qe}from"./clsx-B-dksMZM.js";import{r as f,R as i}from"./index-siqcju79.js";import{r as de}from"./index-BdKvcPYQ.js";import{I as Ae}from"./IconButton-BsqD9nTf.js";import{C as Le}from"./CalendarIcon-DraQng1d.js";import{I as Ue}from"./InputGroup-BJwbXp8L.js";import{P as ue}from"./Popover-CSZryDT8.js";import{B as Ye}from"./BaseTextInput-BcWqlF22.js";import{u as We}from"./useId-CahK3IZ3.js";import{B as ke}from"./Button-Bm5jRD6q.js";import{A as xe}from"./ArrowLeftIcon-q0dn7XH1.js";import{A as $e}from"./ArrowRightIcon-DtWkyDKW.js";import{C as ye}from"./ChevronDownIcon-fl1APhkk.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./index-yL1brwCS.js";import"./Icon-mINJCSxV.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./WarningIcon-CnuYLHnq.js";import"./getThemeAndDensity-Dbk6h1cS.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";function ce(e){"@babel/helpers - typeof";return ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ce(e)}function Ke(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function L(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function Y(e){L(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||ce(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Z(e,t){L(2,arguments);var n=Y(e),a=Ke(t);return isNaN(a)?new Date(NaN):(a&&n.setDate(n.getDate()+a),n)}function B(e){L(1,arguments);var t=Y(e);return t.setHours(0,0,0,0),t}function He(e,t){L(2,arguments);var n=B(e),a=B(t);return n.getTime()===a.getTime()}function Ee(e,t){L(2,arguments);var n=Y(e),a=Y(t),r=n.getFullYear()-a.getFullYear(),l=n.getMonth()-a.getMonth();return r*12+l}function W(e,t){L(2,arguments);var n=Y(e),a=Y(t);return n.getTime()<a.getTime()}function Ve(e){return L(1,arguments),He(e,Date.now())}const Ge=(e,t)=>{let n;switch(t.type){case"SET_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+t.newOffset),{...e,offset:t.newOffset,shownDate:n};case"ADD_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+e.offset+t.addedOffset),{...e,offset:e.offset+t.addedOffset,shownDate:n};case"SET_SELECTED_DATE":return we(t.newDate);default:return e}},we=e=>({selectedDate:e,offset:0,shownDate:e}),ze=/^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/,Je=/^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;function Qe(e){const t=`${e.getDate()}`.padStart(2,"0"),n=`${e.getMonth()+1}`.padStart(2,"0");return`${t}.${n}.${e.getFullYear()}`}const Xe=e=>{const t=ze.exec(e);if(t)return t.slice(1,4);const n=Je.exec(e);if(!n)return;const a=n.slice(1,4);return a.reverse(),a};function A(e){if(!e)return;const t=Xe(e);if(!t)return;const n=Number.parseInt(new Date().toLocaleString("no-NB",{year:"2-digit"})),a=p=>p>n?p+1900:p+2e3,r=Number.parseInt(t[0],10),l=Number.parseInt(t[1],10)-1,o=Number.parseInt(t[2],10),c=o>99?o:a(o),u=new Date(c,l,r,0,0,0);return u.getMonth()===l&&u.getFullYear()===c?u:void 0}function fe(...e){return t=>e.some(n=>(n?.(t),t.defaultPrevented))}function Oe({calendars:e,offset:t,minDate:n}){if(t>1&&n){const{firstDayOfMonth:a}=e[0],r=Ee(a,n);r<t&&(t=r)}return t}const me=3;function Ze(e,t,n,a){if(t&&t.getFullYear()>e)return[t.getFullYear().toString()];if(n&&n.getFullYear()<e)return[n.getFullYear().toString()];let r=!1,l,o;a==="all"?(r=!0,l=me,o=me):(l=typeof a=="number"?a:a.previous,o=typeof a=="number"?a:a.coming);let c=e-l;if(t){const g=r?t.getFullYear():c;c=Math.max(t.getFullYear(),g)}let u=e+o;if(n){const g=r?n.getFullYear():u;u=Math.min(n.getFullYear(),g)}const p=Math.max(u-c+1,1);return[...Array(p).keys()].map(g=>g+c).map(g=>g.toString())}function et(e,t,n,a){const r=n?.getFullYear()||e,l=n?.getMonth()===void 0?0:n.getMonth(),o=a?.getFullYear()||e,c=a?.getMonth()===void 0?11:a.getMonth();let u=0,p=11;return r===e&&(u=l),o===e&&(p=c),t.map((k,g)=>({value:g.toString(),label:k})).filter(({value:k})=>Number.parseInt(k)>=u&&Number.parseInt(k)<=p)}function Te({calendars:e,offset:t,maxDate:n}){if(t>1&&n){const{lastDayOfMonth:a}=e[e.length-1],r=Ee(n,a);r<t&&(t=r)}return t}function Me({calendars:e,minDate:t}){if(!t)return!1;const{firstDayOfMonth:n}=e[0],a=Z(n,-1);return!!W(a,t)}function Se({calendars:e,maxDate:t}){if(!t)return!1;const{lastDayOfMonth:n}=e[e.length-1],a=Z(n,1);return!!W(t,a)}function tt({date:e,selected:t,monthsToDisplay:n,offset:a,minDate:r,maxDate:l,firstDayOfWeek:o,showOutsideDays:c}){const u=[],p=nt(e,r,l);for(let b=0;b<n;b++){const k=at({month:p.getMonth()+b+a,year:p.getFullYear(),selectedDates:t,minDate:r,maxDate:l,firstDayOfWeek:o,showOutsideDays:c});u.push(k)}return u}function nt(e,t,n){let a=B(e);if(t){const r=B(t);W(a,r)&&(a=r)}if(n){const r=B(n);W(r,a)&&(a=r)}return a}function at({month:e,year:t,selectedDates:n,minDate:a,maxDate:r,firstDayOfWeek:l,showOutsideDays:o}){const c=ot(e,t),u=c.daysInMonth;e=c.month,t=c.year;const p=[];for(let T=1;T<=u;T++){const O=new Date(t,e,T),y={date:O,selected:pe(n,O),selectable:ge(a,r,O),today:Ve(O),prevMonth:!1,nextMonth:!1};p.push(y)}const b=new Date(t,e,1),k=new Date(t,e,u),g=rt({firstDayOfMonth:b,minDate:a,maxDate:r,selectedDates:n,firstDayOfWeek:l,showOutsideDays:o}),w=lt({lastDayOfMonth:k,minDate:a,maxDate:r,selectedDates:n,firstDayOfWeek:l,showOutsideDays:o});p.unshift(...g),p.push(...w);const M=st(p);return{firstDayOfMonth:b,lastDayOfMonth:k,month:e,year:t,weeks:M}}function rt({firstDayOfMonth:e,minDate:t,maxDate:n,selectedDates:a,firstDayOfWeek:r,showOutsideDays:l}){const o=[];let c=(e.getDay()+7-r)%7;if(l){const u=Z(e,-1),p=u.getDate(),b=u.getMonth(),k=u.getFullYear();let g=0;for(;g<c;){const w=new Date(k,b,p-g),M={date:w,selected:pe(a,w),selectable:ge(t,n,w),today:!1,prevMonth:!0,nextMonth:!1};o.unshift(M),g++}}else for(;c>0;)o.unshift(""),c--;return o}function lt({lastDayOfMonth:e,minDate:t,maxDate:n,selectedDates:a,firstDayOfWeek:r,showOutsideDays:l}){const o=[];let c=(e.getDay()+7-r)%7;if(l){const u=Z(e,1),p=u.getMonth(),b=u.getFullYear();let k=0;for(;k<6-c;){const g=new Date(b,p,1+k),w={date:g,selected:pe(a,g),selectable:ge(t,n,g),today:!1,prevMonth:!1,nextMonth:!0};o.push(w),k++}}else for(;c<6;)o.push(""),c++;return o}function ot(e,t){const n=new Date(t,e,1),a=n.getMonth(),r=n.getFullYear();return{daysInMonth:32-new Date(r,a,32).getDate(),month:a,year:r}}function st(e){const t=Math.ceil(e.length/7),n=[];for(let a=0;a<t;a++){n[a]=[];for(let r=0;r<7;r++)n[a].push(e[a*7+r])}return n}function pe(e,t){return e?(Array.isArray(e)?e:[e]).some(a=>a instanceof Date&&B(a).getTime()===B(t).getTime()):!1}function ge(e,t,n){return!(e&&W(n,e)||t&&W(t,n))}function be(e,t,n){return!!(n&&e>n||t&&e<t)}function it(e,t,n,a){const r=A(e),l=A(t);return r?be(r,n,a)?null:r:l?be(l,n,a)?null:l:null}function De(e,t,n,a){let r=e||t||new Date;return n&&(r=n>r?n:r),a&&(r=a<r?a:r),r}function Fe(e){return e!==void 0}function ut(e,t){return Fe(e)?e:t}function dt(e,{onClick:t,dateObj:n}){return{onClick:fe(t,a=>{e(n,a)}),disabled:!n.selectable,"aria-pressed":n.selected,role:"button"}}function ct({minDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:a,offset:r=1,calendars:l}){const o=`Gå tilbake ${r} måned${r===1?"":"er"}`;return{onClick:fe(a,()=>{n(t-Oe({calendars:l,offset:r,minDate:e}))}),disabled:Me({calendars:l,minDate:e}),"aria-label":o,title:o}}function mt({maxDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:a,offset:r=1,calendars:l}){const o=`Gå frem ${r} måned${r===1?"":"er"}`;return{onClick:fe(a,()=>{n(t+Te({calendars:l,offset:r,maxDate:e}))}),disabled:Se({calendars:l,maxDate:e}),"aria-label":o,title:o}}function ft({date:e=B(new Date),maxDate:t,minDate:n,monthsToDisplay:a=1,firstDayOfWeek:r=0,showOutsideDays:l=!0,offset:o,onDateSelected:c,onOffsetChanged:u,selected:p}){const[b,k]=f.useState(0),g=ut(o,b);function w(T){Fe(o)||k(T),u(T)}return{calendars:tt({date:e,selected:p,monthsToDisplay:a,minDate:n,maxDate:t,offset:g,firstDayOfWeek:r,showOutsideDays:l}),getDateProps:dt.bind(null,c),getBackProps:ct.bind(null,{minDate:n,offsetMonth:g,handleOffsetChanged:w}),getForwardProps:mt.bind(null,{maxDate:t,offsetMonth:g,handleOffsetChanged:w}),handleOffsetChanged:w}}const pt=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],gt=["man","tir","ons","tor","fre","lør","søn"],ve=f.forwardRef((e,t)=>{const{date:n,defaultSelected:a,density:r,minDate:l,maxDate:o,days:c=gt,months:u=pt,monthLabel:p="Velg måned",yearLabel:b="Velg år",yearsToShow:k=me,onTabOutside:g,...w}=e,M=We("jkl-calendar"),[{offset:T,selectedDate:O,shownDate:y},U]=f.useReducer(Ge,De(n,a,l,o),we),ee=y.getMonth(),x=y.getFullYear();f.useEffect(()=>{U({type:"SET_SELECTED_DATE",newDate:De(n,a,l,o)})},[n,a,l,o]);const te=f.useCallback(s=>{U({type:"SET_OFFSET",newOffset:s})},[]),{calendars:C,getBackProps:ne,getDateProps:P,getForwardProps:$,handleOffsetChanged:R}=ft({date:O,selected:O,minDate:l,maxDate:o,offset:T,onOffsetChanged:te,firstDayOfWeek:1,...w}),I=f.useRef(null),S=f.useCallback(s=>{if(!I.current)return;const d=document.activeElement,v=I.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),h=async F=>{d?.setAttribute("tabindex","-1"),F.setAttribute("tabindex","0"),F.focus()};v.forEach((F,j)=>{const D=j+s;if(F===d)if(D<=v.length-1&&D>=0)h(v[D]);else if(s<0){if(Me({calendars:C,minDate:l})||(de.flushSync(()=>{R(T-Oe({calendars:C,offset:1,minDate:l}))}),!I.current))return;const E=I.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');E[E.length+D]&&(E[0].setAttribute("tabindex","-1"),h(E[E.length+D]))}else{if(Se({calendars:C,maxDate:o})||(de.flushSync(()=>{R(T+Te({calendars:C,offset:1,maxDate:o}))}),!I.current))return;const E=I.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');E[D-v.length]&&(E[0].setAttribute("tabindex","-1"),h(E[D-v.length]))}})},[R,T,C,o,l]),ae=f.useCallback(s=>{switch(s.key){case"ArrowUp":S(-7),s.preventDefault();break;case"ArrowRight":S(1),s.preventDefault();break;case"ArrowDown":S(7),s.preventDefault();break;case"ArrowLeft":S(-1),s.preventDefault();break}},[S]),re=f.useCallback(s=>{if(s.key!=="Tab")return;const d=I.current?.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!d)return;const v=d[0],h=d[d.length-1];!s.shiftKey&&document.activeElement===h?(v.focus(),s.preventDefault()):s.shiftKey&&document.activeElement===v&&(h.focus(),s.preventDefault())},[]),le=f.useCallback(s=>{const{date:d,selected:v,selectable:h,prevMonth:F,nextMonth:j}=s;return h?!!(v||d.toString()===l?.toString()||!F&&!j&&y.getFullYear()===d.getFullYear()&&O.getMonth()!==d.getMonth()&&d.getDate()===1):!1},[y,l,O]),H=f.useCallback(()=>{l&&y.getFullYear()-l.getFullYear()===0&&y.getMonth()-l.getMonth()===1?document.querySelector(`[data-testid="${M}-forward-button"]`)?.focus():o&&o.getFullYear()-y.getFullYear()===0&&o.getMonth()-y.getMonth()===1&&document.querySelector(`[data-testid="${M}-back-button"]`)?.focus()},[l,o,y,M]),oe=f.useCallback(s=>{if(s.target.value.length!==4)return;const d=Number.parseInt(s.target.value);if(Number.isNaN(d))return;let v=(d-y.getFullYear())*12;const h=new Date(y.getFullYear(),y.getMonth()+v,y.getDate());o&&o.getFullYear()===h.getFullYear()&&o.getMonth()<h.getMonth()?v-=h.getMonth()-o.getMonth():l&&l.getFullYear()===h.getFullYear()&&l.getMonth()>h.getMonth()&&(v+=l.getMonth()-h.getMonth()),U({type:"ADD_OFFSET",addedOffset:v})},[y,l,o]),se=f.useCallback(s=>{if(!O&&!n)return;const d=y.getFullYear()-(O||new Date).getFullYear(),v=Number.parseInt(s.target.value)-(O||new Date).getMonth();U({type:"SET_OFFSET",newOffset:d*12+v})},[O,n,y]),V=Ze(x,l,o,k),q=et(x,u,l,o);return i.createElement("div",{ref:t,id:M,className:"jkl-calendar","data-testid":"jkl-calendar"},i.createElement("div",{className:"jkl-calendar__padding",ref:I,onKeyDown:re},i.createElement("fieldset",{className:"jkl-calendar-navigation"},i.createElement("div",null,i.createElement(ke,{...ne({calendars:C,onClick:H}),"data-testid":`${M}-back-button`,variant:"ghost",icon:i.createElement(xe,{variant:"medium",bold:!0})}),i.createElement(ke,{...$({calendars:C,onClick:H}),variant:"ghost","data-testid":`${M}-forward-button`,icon:i.createElement($e,{variant:"medium",bold:!0})})),i.createElement("div",null,i.createElement("div",{className:"jkl-calendar-navigation-dropdown"},i.createElement("select",{onChange:se,className:"jkl-calendar-navigation-dropdown__select","aria-label":p,value:ee.toString()},q.map(({label:s,value:d})=>i.createElement("option",{key:d,value:d},s))),i.createElement(ye,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})),i.createElement("div",{className:"jkl-calendar-navigation-dropdown"},i.createElement("select",{onChange:oe,className:"jkl-calendar-navigation-dropdown__select","aria-label":b,value:x.toString()},V.map(s=>i.createElement("option",{key:s,value:s},s))),i.createElement(ye,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})))),C.map(s=>i.createElement("table",{className:"jkl-calendar-table",key:`${s.month}${s.year}`,"data-testid":"jkl-datepicker-calendar"},i.createElement("caption",{className:"jkl-sr-only"},u[s.month],", ",s.year),i.createElement("thead",null,i.createElement("tr",null,c.map(d=>i.createElement("th",{key:`${s.month}${s.year}${d}`},d)))),i.createElement("tbody",{"data-testid":"jkl-datepicker-dates"},s.weeks.map((d,v)=>i.createElement("tr",{key:`${s.month}${s.year}${v}`},d.map((h,F)=>{const j=`${s.month}${s.year}${v}${F}`;if(typeof h=="string")return i.createElement("td",{className:"jkl-calendar__date jkl-calendar__date--empty",key:j},h);const{date:D,selectable:E,today:G,prevMonth:K,nextMonth:ie}=h;return i.createElement("td",{key:j},i.createElement("button",{...P({dateObj:h}),type:"button",className:"jkl-calendar-date-button",tabIndex:le(h)?0:-1,"aria-label":`${D.getDate()}. ${u[D.getMonth()].toLowerCase()}`,"aria-current":G?"date":void 0,"data-adjacent":K||ie?"true":void 0,disabled:!E,onKeyDown:ae},i.createElement("span",{"aria-hidden":"true"},D.getDate())))}))))))))});ve.displayName="Calendar";ve.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{date:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},defaultSelected:{required:!1,tsType:{name:"Date"},description:""},days:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},months:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},monthLabel:{required:!1,tsType:{name:"string"},description:""},yearLabel:{required:!1,tsType:{name:"string"},description:""},yearsToShow:{required:!1,tsType:{name:"union",raw:'number | "all" | { previous: number; coming: number }',elements:[{name:"number"},{name:"literal",value:'"all"'},{name:"signature",type:"object",raw:"{ previous: number; coming: number }",signature:{properties:[{key:"previous",value:{name:"number",required:!0}},{key:"coming",value:{name:"number",required:!0}}]}}]},description:""},onTabOutside:{required:!0,tsType:{name:"ReactKeyboardEventHandler",raw:"React.KeyboardEventHandler"},description:""}},composes:["Omit"]};function vt(e,t,n={inclusive:!1}){const a=typeof e=="string"?A(e):e;return a?n.inclusive?a>=t:a>t:!1}function ht(e,t,n={inclusive:!1}){const a=typeof e=="string"?A(e):e;return a?n.inclusive?a<=t:a<t:!1}const he=f.forwardRef((e,t)=>{const{"data-testautoid":n,id:a,className:r="",label:l="Velg dato",labelProps:o,defaultValue:c,defaultShow:u=!1,value:p,disableBeforeDate:b,disableAfterDate:k,yearsToShow:g,name:w,helpLabel:M,errorLabel:T,invalid:O,density:y,days:U,months:ee,monthLabel:x,yearLabel:te,placeholder:C="dd.mm.åååå",width:ne="11.25rem",onChange:P,onBlur:$,onFocus:R,onKeyDown:I,action:S,showCalendarLabel:ae="Åpne kalender",hideCalendarLabel:re="Lukk kalender",supportLabelProps:le,tooltip:H,textInputProps:oe,...se}=e,V=A(b),q=V?B(V):void 0,s=A(k),d=s?B(s):void 0,[v,h]=f.useState(it(p,c,q,d)),[F,j]=f.useState(null),[D,E]=f.useState(u),G=f.useRef(null),K=f.useRef(null),ie=f.useRef(null),z=f.useRef(null),_e=f.useCallback(m=>{z.current=m,t&&(typeof t=="function"?t(m):t.current=m)},[t]),Ne=f.useCallback(m=>{if(!R||!K.current)return;K.current.contains(m.relatedTarget)||R(m,v,{error:F,value:m.target.value})},[R,v,F]),Ce=f.useCallback(m=>{$&&$(m,v,{error:F,value:m.target.value})},[$,v,F]),Be=f.useCallback(m=>{m.key==="Escape"&&(E(!1),m.preventDefault(),m.stopPropagation()),S?.onKeyDown&&S.onKeyDown(m)},[S]),Ie=f.useCallback(m=>{let _=null,N=null;if(m.target.value){const J=A(m.target.value);J?q&&!vt(J,q)?N="OUTSIDE_LOWER_BOUND":d&&!ht(J,d)?N="OUTSIDE_UPPER_BOUND":E(!1):N="WRONG_FORMAT",_=J||null}j(N),h(_),P&&P(m,_,{error:N,value:m.target.value})},[P,q,d]),Pe=f.useCallback(m=>{de.flushSync(()=>{E(!D)});const _=G.current,N=_&&_.querySelector('[aria-pressed="true"]');window.requestAnimationFrame(()=>N?.focus()),S?.onClick&&S.onClick(m)},[D,S]),je=f.useCallback(({date:m})=>{if(E(!1),h(m),z.current){const _=z.current;_.value=Qe(m);const N=document.createEvent("HTMLEvents");N.initEvent("input",!0,!1),_.dispatchEvent(N),_.focus(),P&&P(N,m,{error:null,value:_.value})}},[P]),Re=f.useCallback(m=>{m.preventDefault(),E(!1),ie.current?.focus()},[]);return i.createElement(Ue,{id:a,className:qe("jkl-datepicker",r),...se,ref:K,label:l,labelProps:o,density:y,helpLabel:M,errorLabel:T,supportLabelProps:le,tooltip:H,render:m=>i.createElement(Ye,{"data-focused":D?"true":void 0,ref:_e,"data-testid":"jkl-datepicker__input","data-testautoid":n,className:"jkl-datepicker__input",name:w,defaultValue:c,density:y,value:p,type:"text",placeholder:C,width:ne,onFocus:Ne,onBlur:Ce,onChange:Ie,actionButton:i.createElement(ue,{positionReference:z,open:D,onOpenChange:()=>E(!D),offset:8},i.createElement(ue.Trigger,{...S,"data-testid":"jkl-datepicker__trigger",className:"jkl-text-input-action-button",title:D?re:ae,tabIndex:0,onClick:Pe,onKeyDown:Be,asChild:!0},i.createElement(Ae,null,i.createElement(Le,null))),i.createElement(ue.Content,{initialFocus:-1,padding:24},i.createElement(ve,{ref:G,density:y,date:v,minDate:q,maxDate:d,days:U,months:ee,monthLabel:x,yearLabel:te,yearsToShow:g,onDateSelected:je,onTabOutside:Re}))),...oe,...m,"aria-invalid":O||!!T})})});he.displayName="DatePicker";he.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},className:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},label:{required:!1,tsType:{name:"string"},description:'@default "Velg dato"'},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"LabelProps"},{name:"literal",value:'"children"'}],raw:'Omit<LabelProps, "children">'},description:"Bruk labelProps for å sette props som `variant` og `srOnly`.\n\n@example\n ```tsx\n <DatePicker\n     labelProps={{ srOnly: true }}\n />\n ```"},defaultValue:{required:!1,tsType:{name:"string"},description:`dd.mm.åååå

Dersom komponenten ikke er _controlled_, send inn ønsket standardverdi her (hvis noen).

@default undefined // tomt skjemafelt`},defaultShow:{required:!1,tsType:{name:"boolean"},description:`Styr om du vil at kalenderen skal starte åpen.
@default false`},value:{required:!1,tsType:{name:"string"},description:`dd.mm.åååå

Verdien til inputfeltet.`},disableBeforeDate:{required:!1,tsType:{name:"string"},description:`dd.mm.åååå

Skru av knapper i kalenderen før denne datoen,
og gi valideringsfeil om dato som har blitt skrevet inn er utenfor.`},disableAfterDate:{required:!1,tsType:{name:"string"},description:`dd.mm.åååå

Skru av knapper i kalenderen etter denne datoen,
og gi valideringsfeil om dato som har blitt skrevet inn er utenfor.`},yearsToShow:{required:!1,tsType:{name:"union",raw:'number | "all" | { previous: number; coming: number }',elements:[{name:"number"},{name:"literal",value:'"all"'},{name:"signature",type:"object",raw:"{ previous: number; coming: number }",signature:{properties:[{key:"previous",value:{name:"number",required:!0}},{key:"coming",value:{name:"number",required:!0}}]}}]},description:`Angir hvor mange år som skal vises i nedtrekkslisten i kalenderen. Du kan angi samme verdi
for kommende og foregående år ved å sende inn et tall, eller sende inn et objekt med separate
verdier for kommende og foregående år. Hvis du sender inn "all" vil alle år mellom min. og
maks. dato vises i listen (eller default antall år hvis ikke min./maks. dato er angitt).
@default 3`},name:{required:!1,tsType:{name:"string"},description:"Settes på inputfeltet."},helpLabel:{required:!1,tsType:{name:"string"},description:"Hjelpetekst som vises under inputfeltet."},errorLabel:{required:!1,tsType:{name:"string"},description:`Hvis datovelgeren har valideringsfeil må dette feltet settes. Inputfeltet
merkes som ugyldig og teksten erstatter en eventuell hjelpetekst.`},invalid:{required:!1,tsType:{name:"boolean"},description:`Merk som ugyldig uten å sende inn en errorLabel.
NB! Brukes kun i tilfeller der valideringsfeil dukker opp andre steder, for eksempel i en FieldGroup.`},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},extended:{required:!1,tsType:{name:"boolean"},description:`@deprecated Kalenderen viser nå alltid kontroller for å navigere mellom år og måneder.
Denne prop'en gjør ikke lenger noe og kan fjernes.`},days:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Om du ønsker andre labels for ukedagene kan du gi de her."},months:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Om du ønsker andre labels for måneder kan du gi de her."},monthLabel:{required:!1,tsType:{name:"string"},description:`Overstyr hvordan vi omtaler "Måned".
@default "Måned"`},yearLabel:{required:!1,tsType:{name:"string"},description:`Overstyr hvordan vi omtaler "År".
@default "År"`},placeholder:{required:!1,tsType:{name:"string"},description:`Vises i inputfeltet hvis det ikke har noen input, som hint for datoformat.
@default "dd.mm.åååå"`},width:{required:!1,tsType:{name:"string"},description:'Bredden på inputfeltet, tilpasset typisk bredde for en dato i formatet `dd.mm.åååå`.\n@default "10ch"'},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
    e: ChangeEvent<HTMLInputElement>,
    date: Date | null,
    meta: DatePickerMetadata,
) => void`,signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"},{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"},{type:{name:"signature",type:"object",raw:`{
    error: DateValidationError | null;
    /** Samme som event.target.value */
    value: string;
}`,signature:{properties:[{key:"error",value:{name:"union",raw:"DateValidationError | null",elements:[{name:"union",raw:`| "WRONG_FORMAT"
| "OUTSIDE_LOWER_BOUND"
| "OUTSIDE_UPPER_BOUND"`,elements:[{name:"literal",value:'"WRONG_FORMAT"'},{name:"literal",value:'"OUTSIDE_LOWER_BOUND"'},{name:"literal",value:'"OUTSIDE_UPPER_BOUND"'}]},{name:"null"}],required:!0}},{key:"value",value:{name:"string",required:!0},description:"Samme som event.target.value"}]}},name:"meta"}],return:{name:"void"}}},description:`Kalles ved change-event fra datovelgerens inputfelt. Verdien fra selve eventet vil
alltid være teksten fra inputfeltet.

Det er _ikke_ garantert at verdien fra \`event.target.value\` er en
gyldig dato, eller i datoformat. Andre parameter vil enten være en gyldig
\`Date\` eller \`null\`. Tredje parameter har informasjon om validering,
men du kan også gjøre validering selv rett på \`event.target.value\`
med utility-funksjoner som eksporteres fra pakka (se eksempel lenger ned).

Kalles også når brukeren velger en dato fra kalendervisningen. Kallet
prøver å simulere et vanlig change-event så nært som mulig.

Bruk meta-objektet for å se om det er valideringsfeil, og i så fal hvilken type feil:

 - ugyldig format på tekst
 - dato utenfor minimum tillatte dato (satt med \`disableBeforeDate\`)
 - dato utenfor maksimum tillatte dato (satt med \`disableAfterDate\`)

@example

 \`\`\`tsx
 <DatePicker
     value={value}
     onChange={(e, date, meta) => {
         setValue(e.target.value);

         console.log("onChange", {
             event: e,
             date,
             meta,
         });
     }}
 />
 \`\`\`

@example

 \`\`\`tsx
 import {
     DatePicker,
     formatInput,
     isCorrectFormat,
     isWithinUpperBound,
     isWithinLowerBound,
     parseDateString
 } from "@fremtind/jkl-datepicker-react";
 import { formatDate } from "@fremtind/jkl-formatters-util";

 <DatePicker
     label="Fødselsdato"
     errorLabel={formState.errors.fodselsdato?.message}
     disableBefore="01.01.1970"
     disableAfter={formatInput(new Date())}
     {...register("fodselsdato", {
         required: "Du må fylle ut fødselsdato",
         validate: {
             isCorrectFormat: (v) =>
                 isCorrectFormat(v) ||
                 \`Datoen må være skrevet i formen \${formatDate(new Date())} eller kortformat\`,
             withinLowerBound: (v) =>
                 isWithinLowerBound(v, parseDateString("01.01.1970") || "Datoen må være før 01.01.1970"",
             withinUpperBound: (v) =>
                 isWithinUpperBound(v, new Date()) || \`Datoen må være før \${formatDate(new Date())}\`,
         },
     })}
 />
 \`\`\``},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:`(
    e: FocusEvent<HTMLInputElement>,
    date: Date | null,
    meta: DatePickerMetadata,
) => void`,signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"e"},{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"},{type:{name:"signature",type:"object",raw:`{
    error: DateValidationError | null;
    /** Samme som event.target.value */
    value: string;
}`,signature:{properties:[{key:"error",value:{name:"union",raw:"DateValidationError | null",elements:[{name:"union",raw:`| "WRONG_FORMAT"
| "OUTSIDE_LOWER_BOUND"
| "OUTSIDE_UPPER_BOUND"`,elements:[{name:"literal",value:'"WRONG_FORMAT"'},{name:"literal",value:'"OUTSIDE_LOWER_BOUND"'},{name:"literal",value:'"OUTSIDE_UPPER_BOUND"'}]},{name:"null"}],required:!0}},{key:"value",value:{name:"string",required:!0},description:"Samme som event.target.value"}]}},name:"meta"}],return:{name:"void"}}},description:`Kalles ved focus-event fra datovelgerens inputfelt.

@example
 \`\`\`tsx
 <DatePicker
     onFocus={(e, date, meta) => {
         console.log("onFocus", {
             event: e,
             date,
             meta,
         });
     }}
 />
 \`\`\``},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(
    e: FocusEvent<HTMLInputElement>,
    date: Date | null,
    meta: DatePickerMetadata,
) => void`,signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"e"},{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"},{type:{name:"signature",type:"object",raw:`{
    error: DateValidationError | null;
    /** Samme som event.target.value */
    value: string;
}`,signature:{properties:[{key:"error",value:{name:"union",raw:"DateValidationError | null",elements:[{name:"union",raw:`| "WRONG_FORMAT"
| "OUTSIDE_LOWER_BOUND"
| "OUTSIDE_UPPER_BOUND"`,elements:[{name:"literal",value:'"WRONG_FORMAT"'},{name:"literal",value:'"OUTSIDE_LOWER_BOUND"'},{name:"literal",value:'"OUTSIDE_UPPER_BOUND"'}]},{name:"null"}],required:!0}},{key:"value",value:{name:"string",required:!0},description:"Samme som event.target.value"}]}},name:"meta"}],return:{name:"void"}}},description:`Kalles ved blur-event fra datovelgerens inputfelt, og kommer når fokus flyttes ut
av skjemaelementet.

**NB!** Dette inkluderer når fokus flyttes inn i kalenderen, eller til kalenderknappen!

Om du ønsker å gjøre ting når brukeren går videre fra hele DatePicker:
  1. Ha en onBlur på DatePicker, men ignorere events når fokus er inni DatePicker
  2. Ha en onBlur på DatePicker sin action-prop (kalenderknappen), og gjøre det samme

Hjelpefunksjonen isBlurTargetOutside hjelper med detaljene.

@example
 \`\`\`tsx
 import { DatePicker, isBlurTargetOutside } from "@fremtind/jkl-datepicker-react";

 <DatePicker
     onBlur={(e, date, meta) => {
         // Ignorer blurs som går til kalenderknapper
         if (isBlurTargetOutside(e)) {
             console.log("onBlur");
         }
     }}
     action={{
         onBlur: (e) => {
             // Ignorer blurs som går tilbake til inputfeltet
             if (isBlurTargetOutside(e)) {
                 console.log("action.onBlur");
             }
         },
     }}
 />
 \`\`\``},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:`(
    e: KeyboardEvent<HTMLInputElement>,
    date: Date | null,
    meta: DatePickerMetadata,
) => void`,signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLInputElement"}],raw:"KeyboardEvent<HTMLInputElement>"},name:"e"},{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"},{type:{name:"signature",type:"object",raw:`{
    error: DateValidationError | null;
    /** Samme som event.target.value */
    value: string;
}`,signature:{properties:[{key:"error",value:{name:"union",raw:"DateValidationError | null",elements:[{name:"union",raw:`| "WRONG_FORMAT"
| "OUTSIDE_LOWER_BOUND"
| "OUTSIDE_UPPER_BOUND"`,elements:[{name:"literal",value:'"WRONG_FORMAT"'},{name:"literal",value:'"OUTSIDE_LOWER_BOUND"'},{name:"literal",value:'"OUTSIDE_UPPER_BOUND"'}]},{name:"null"}],required:!0}},{key:"value",value:{name:"string",required:!0},description:"Samme som event.target.value"}]}},name:"meta"}],return:{name:"void"}}},description:`Kalles ved onKeyDown på datovelgerens inputfelt. Dersom du trenger å fange opp
alle tastetrykk, inkludert Tab videre til knappen for å åpne/lukke kalenderen,
så kan du bruke dette eventet.

@deprecated Eventet har mye overlapp med onChange, men var tidligere eneste metode for å
få tilbakemelding ved tastetrykk i inputfeltet. Foretrekk onChange for ny kode.`},action:{required:!1,tsType:{name:"DatePickerAction"},description:"Lar deg sette lyttere på kalenderknappen i skjemafeltet."},showCalendarLabel:{required:!1,tsType:{name:"string"},description:""},hideCalendarLabel:{required:!1,tsType:{name:"string"},description:""},textInputProps:{required:!1,tsType:{name:"Omit",elements:[{name:"ComponentProps",elements:[{name:"literal",value:'"input"'}],raw:'ComponentProps<"input">'},{name:"union",raw:`| "type"
| "children"
| "className"
| "name"
| "defaultValue"
| "value"
| "placeholder"
| "width"
| "onFocus"
| "onBlur"
| "onChange"`,elements:[{name:"literal",value:'"type"'},{name:"literal",value:'"children"'},{name:"literal",value:'"className"'},{name:"literal",value:'"name"'},{name:"literal",value:'"defaultValue"'},{name:"literal",value:'"value"'},{name:"literal",value:'"placeholder"'},{name:"literal",value:'"width"'},{name:"literal",value:'"onFocus"'},{name:"literal",value:'"onBlur"'},{name:"literal",value:'"onChange"'}]}],raw:`Omit<
    ComponentProps<"input">,
    | "type"
    | "children"
    | "className"
    | "name"
    | "defaultValue"
    | "value"
    | "placeholder"
    | "width"
    | "onFocus"
    | "onBlur"
    | "onChange"
>`},description:"Props som sendes direkte til komponentens TextInput"}},composes:["Omit"]};const Wt={title:"Komponenter/DatePicker",component:he,parameters:{layout:"padded"},argTypes:{disableAfterDate:{control:{type:"text"}},disableBeforeDate:{control:{type:"text"}}},tags:["autodocs"]},Q={args:{}},X={name:"Datovelger med maks. og min. dato",args:{disableBeforeDate:"2024-01-01",disableAfterDate:"2026-12-31"}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...Q.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Datovelger med maks. og min. dato",
  args: {
    disableBeforeDate: "2024-01-01",
    disableAfterDate: "2026-12-31"
  }
}`,...X.parameters?.docs?.source}}};const xt=["DatePicker","DatePickerWithEndDates"];export{Q as DatePicker,X as DatePickerWithEndDates,xt as __namedExportsOrder,Wt as default};
