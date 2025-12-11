import{r as m,j as i}from"./iframe-R6aOaHTp.js";import{c as Ae}from"./clsx-B-dksMZM.js";import{r as de}from"./index-Bsq0_OXg.js";import{I as qe}from"./IconButton-CFeFpgTl.js";import{C as Re}from"./CalendarIcon-D4E2jFmX.js";import{I as Ue}from"./InputGroup-CC2tJpd7.js";import{P as ue}from"./Popover-BZI3TCw5.js";import{B as Ye}from"./BaseTextInput-Bp-ifYh-.js";import{u as We}from"./useId-BUKv216K.js";import{B as he}from"./Button-C0SOP0LI.js";import{A as $e}from"./ArrowLeftIcon-CgdnJYcQ.js";import{A as Ke}from"./ArrowRightIcon-DZzficvA.js";import{C as ve}from"./ChevronDownIcon-C12FInFu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CbWzkF4J.js";import"./Icon-C_eqd1IE.js";import"./Label-DcGKuD_n.js";import"./SupportLabel-BXNMeyuh.js";import"./WarningIcon-BajwyuyY.js";import"./floating-ui.react-BHeceSTM.js";import"./usePreviousValue-CCARFBdV.js";import"./Loader-QOLoLy5_.js";import"./useDelayedRender-BujkK-5i.js";const ke=Symbol.for("constructDateFrom");function $(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&ke in e?e[ke](t):e instanceof Date?new e.constructor(t):new Date(t)}function Q(e,t){return $(e,e)}function X(e,t,n){const a=Q(e);return isNaN(t)?$(e,NaN):(t&&a.setDate(a.getDate()+t),a)}function ye(e,...t){const n=$.bind(null,t.find(a=>typeof a=="object"));return t.map(n)}function B(e,t){const n=Q(e);return n.setHours(0,0,0,0),n}function He(e){return $(e,Date.now())}function Ve(e,t,n){const[a,r]=ye(n?.in,e,t);return+B(a)==+B(r)}function we(e,t,n){const[a,r]=ye(n?.in,e,t),l=a.getFullYear()-r.getFullYear(),o=a.getMonth()-r.getMonth();return l*12+o}function R(e,t){return+Q(e)<+Q(t)}function Ge(e,t){return Ve($(e,e),He(e))}const ze=(e,t)=>{let n;switch(t.type){case"SET_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+t.newOffset),{...e,offset:t.newOffset,shownDate:n};case"ADD_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+e.offset+t.addedOffset),{...e,offset:e.offset+t.addedOffset,shownDate:n};case"SET_SELECTED_DATE":return Oe(t.newDate);default:return e}},Oe=e=>({selectedDate:e,offset:0,shownDate:e}),Je=/^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/,Qe=/^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;function Xe(e){const t=`${e.getDate()}`.padStart(2,"0"),n=`${e.getMonth()+1}`.padStart(2,"0");return`${t}.${n}.${e.getFullYear()}`}const Ze=e=>{const t=Je.exec(e);if(t)return t.slice(1,4);const n=Qe.exec(e);if(!n)return;const a=n.slice(1,4);return a.reverse(),a};function A(e){if(!e)return;const t=Ze(e);if(!t)return;const n=Number.parseInt(new Date().toLocaleString("no-NB",{year:"2-digit"})),a=p=>p>n?p+1900:p+2e3,r=Number.parseInt(t[0],10),l=Number.parseInt(t[1],10)-1,o=Number.parseInt(t[2],10),d=o>99?o:a(o),u=new Date(d,l,r,0,0,0);return u.getMonth()===l&&u.getFullYear()===d?u:void 0}function me(...e){return t=>e.some(n=>(n?.(t),t.defaultPrevented))}function Me({calendars:e,offset:t,minDate:n}){if(t>1&&n){const{firstDayOfMonth:a}=e[0],r=we(a,n);r<t&&(t=r)}return t}const ce=3;function et(e,t,n,a){if(t&&t.getFullYear()>e)return[t.getFullYear().toString()];if(n&&n.getFullYear()<e)return[n.getFullYear().toString()];let r=!1,l,o;a==="all"?(r=!0,l=ce,o=ce):(l=typeof a=="number"?a:a.previous,o=typeof a=="number"?a:a.coming);let d=e-l;if(t){const h=r?t.getFullYear():d;d=Math.max(t.getFullYear(),h)}let u=e+o;if(n){const h=r?n.getFullYear():u;u=Math.min(n.getFullYear(),h)}const p=Math.max(u-d+1,1);return[...Array(p).keys()].map(h=>h+d).map(h=>h.toString())}function tt(e,t,n,a){const r=n?.getFullYear()||e,l=n?.getMonth()===void 0?0:n.getMonth(),o=a?.getFullYear()||e,d=a?.getMonth()===void 0?11:a.getMonth();let u=0,p=11;return r===e&&(u=l),o===e&&(p=d),t.map((k,h)=>({value:h.toString(),label:k})).filter(({value:k})=>Number.parseInt(k)>=u&&Number.parseInt(k)<=p)}function Te({calendars:e,offset:t,maxDate:n}){if(t>1&&n){const{lastDayOfMonth:a}=e[e.length-1],r=we(n,a);r<t&&(t=r)}return t}function Ee({calendars:e,minDate:t}){if(!t)return!1;const{firstDayOfMonth:n}=e[0],a=X(n,-1);return!!R(a,t)}function Se({calendars:e,maxDate:t}){if(!t)return!1;const{lastDayOfMonth:n}=e[e.length-1],a=X(n,1);return!!R(t,a)}function nt({date:e,selected:t,monthsToDisplay:n,offset:a,minDate:r,maxDate:l,firstDayOfWeek:o,showOutsideDays:d}){const u=[],p=at(e,r,l);for(let b=0;b<n;b++){const k=rt({month:p.getMonth()+b+a,year:p.getFullYear(),selectedDates:t,minDate:r,maxDate:l,firstDayOfWeek:o,showOutsideDays:d});u.push(k)}return u}function at(e,t,n){let a=B(e);if(t){const r=B(t);R(a,r)&&(a=r)}if(n){const r=B(n);R(r,a)&&(a=r)}return a}function rt({month:e,year:t,selectedDates:n,minDate:a,maxDate:r,firstDayOfWeek:l,showOutsideDays:o}){const d=st(e,t),u=d.daysInMonth;e=d.month,t=d.year;const p=[];for(let M=1;M<=u;M++){const O=new Date(t,e,M),D={date:O,selected:fe(n,O),selectable:pe(a,r,O),today:Ge(O),prevMonth:!1,nextMonth:!1};p.push(D)}const b=new Date(t,e,1),k=new Date(t,e,u),h=lt({firstDayOfMonth:b,minDate:a,maxDate:r,selectedDates:n,firstDayOfWeek:l,showOutsideDays:o}),w=ot({lastDayOfMonth:k,minDate:a,maxDate:r,selectedDates:n,firstDayOfWeek:l,showOutsideDays:o});p.unshift(...h),p.push(...w);const T=it(p);return{firstDayOfMonth:b,lastDayOfMonth:k,month:e,year:t,weeks:T}}function lt({firstDayOfMonth:e,minDate:t,maxDate:n,selectedDates:a,firstDayOfWeek:r,showOutsideDays:l}){const o=[];let d=(e.getDay()+7-r)%7;if(l){const u=X(e,-1),p=u.getDate(),b=u.getMonth(),k=u.getFullYear();let h=0;for(;h<d;){const w=new Date(k,b,p-h),T={date:w,selected:fe(a,w),selectable:pe(t,n,w),today:!1,prevMonth:!0,nextMonth:!1};o.unshift(T),h++}}else for(;d>0;)o.unshift(""),d--;return o}function ot({lastDayOfMonth:e,minDate:t,maxDate:n,selectedDates:a,firstDayOfWeek:r,showOutsideDays:l}){const o=[];let d=(e.getDay()+7-r)%7;if(l){const u=X(e,1),p=u.getMonth(),b=u.getFullYear();let k=0;for(;k<6-d;){const h=new Date(b,p,1+k),w={date:h,selected:fe(a,h),selectable:pe(t,n,h),today:!1,prevMonth:!1,nextMonth:!0};o.push(w),k++}}else for(;d<6;)o.push(""),d++;return o}function st(e,t){const n=new Date(t,e,1),a=n.getMonth(),r=n.getFullYear();return{daysInMonth:32-new Date(r,a,32).getDate(),month:a,year:r}}function it(e){const t=Math.ceil(e.length/7),n=[];for(let a=0;a<t;a++){n[a]=[];for(let r=0;r<7;r++)n[a].push(e[a*7+r])}return n}function fe(e,t){return e?(Array.isArray(e)?e:[e]).some(a=>a instanceof Date&&B(a).getTime()===B(t).getTime()):!1}function pe(e,t,n){return!(e&&R(n,e)||t&&R(t,n))}function De(e,t,n){return!!(n&&e>n||t&&e<t)}function ut(e,t,n,a){const r=A(e),l=A(t);return r?De(r,n,a)?null:r:l?De(l,n,a)?null:l:null}function be(e,t,n,a){let r=e||t||new Date;return n&&(r=n>r?n:r),a&&(r=a<r?a:r),r}function je(e){return e!==void 0}function dt(e,t){return je(e)?e:t}function ct(e,{onClick:t,dateObj:n}){return{onClick:me(t,a=>{e(n,a)}),disabled:!n.selectable,"aria-pressed":n.selected,role:"button"}}function mt({minDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:a,offset:r=1,calendars:l}){const o=`Gå tilbake ${r} måned${r===1?"":"er"}`;return{onClick:me(a,()=>{n(t-Me({calendars:l,offset:r,minDate:e}))}),disabled:Ee({calendars:l,minDate:e}),"aria-label":o,title:o}}function ft({maxDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:a,offset:r=1,calendars:l}){const o=`Gå frem ${r} måned${r===1?"":"er"}`;return{onClick:me(a,()=>{n(t+Te({calendars:l,offset:r,maxDate:e}))}),disabled:Se({calendars:l,maxDate:e}),"aria-label":o,title:o}}function pt({date:e=B(new Date),maxDate:t,minDate:n,monthsToDisplay:a=1,firstDayOfWeek:r=0,showOutsideDays:l=!0,offset:o,onDateSelected:d,onOffsetChanged:u,selected:p}){const[b,k]=m.useState(0),h=dt(o,b);function w(M){je(o)||k(M),u(M)}return{calendars:nt({date:e,selected:p,monthsToDisplay:a,minDate:n,maxDate:t,offset:h,firstDayOfWeek:r,showOutsideDays:l}),getDateProps:ct.bind(null,d),getBackProps:mt.bind(null,{minDate:n,offsetMonth:h,handleOffsetChanged:w}),getForwardProps:ft.bind(null,{maxDate:t,offsetMonth:h,handleOffsetChanged:w}),handleOffsetChanged:w}}const gt=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],ht=["man","tir","ons","tor","fre","lør","søn"],ge=m.forwardRef((e,t)=>{const{date:n,defaultSelected:a,density:r,minDate:l,maxDate:o,days:d=ht,months:u=gt,monthLabel:p="Velg måned",yearLabel:b="Velg år",yearsToShow:k=ce,onTabOutside:h,...w}=e,T=We("jkl-calendar"),[{offset:M,selectedDate:O,shownDate:D},q]=m.useReducer(ze,be(n,a,l,o),Oe),ee=D.getMonth(),U=D.getFullYear();m.useEffect(()=>{q({type:"SET_SELECTED_DATE",newDate:be(n,a,l,o)})},[n,a,l,o]);const te=m.useCallback(s=>{q({type:"SET_OFFSET",newOffset:s})},[]),{calendars:N,getBackProps:ne,getDateProps:I,getForwardProps:Y,handleOffsetChanged:L}=pt({date:O,selected:O,minDate:l,maxDate:o,offset:M,onOffsetChanged:te,firstDayOfWeek:1,...w}),x=m.useRef(null),E=m.useCallback(s=>{if(!x.current)return;const f=document.activeElement,v=x.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),g=async F=>{f?.setAttribute("tabindex","-1"),F.setAttribute("tabindex","0"),F.focus()};v.forEach((F,_)=>{const S=_+s;if(F===f)if(S<=v.length-1&&S>=0)g(v[S]);else if(s<0){if(Ee({calendars:N,minDate:l})||(de.flushSync(()=>{L(M-Me({calendars:N,offset:1,minDate:l}))}),!x.current))return;const y=x.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');y[y.length+S]&&(y[0].setAttribute("tabindex","-1"),g(y[y.length+S]))}else{if(Se({calendars:N,maxDate:o})||(de.flushSync(()=>{L(M+Te({calendars:N,offset:1,maxDate:o}))}),!x.current))return;const y=x.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');y[S-v.length]&&(y[0].setAttribute("tabindex","-1"),g(y[S-v.length]))}})},[L,M,N,o,l]),ae=m.useCallback(s=>{switch(s.key){case"ArrowUp":E(-7),s.preventDefault();break;case"ArrowRight":E(1),s.preventDefault();break;case"ArrowDown":E(7),s.preventDefault();break;case"ArrowLeft":E(-1),s.preventDefault();break}},[E]),re=m.useCallback(s=>{if(s.key!=="Tab")return;const f=x.current?.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!f)return;const v=f[0],g=f[f.length-1];!s.shiftKey&&document.activeElement===g?(v.focus(),s.preventDefault()):s.shiftKey&&document.activeElement===v&&(g.focus(),s.preventDefault())},[]),le=m.useCallback(s=>{const{date:f,selected:v,selectable:g,prevMonth:F,nextMonth:_}=s;return g?!!(v||f.toString()===l?.toString()||!F&&!_&&D.getFullYear()===f.getFullYear()&&O.getMonth()!==f.getMonth()&&f.getDate()===1):!1},[D,l,O]),K=m.useCallback(()=>{l&&D.getFullYear()-l.getFullYear()===0&&D.getMonth()-l.getMonth()===1?document.querySelector(`[data-testid="${T}-forward-button"]`)?.focus():o&&o.getFullYear()-D.getFullYear()===0&&o.getMonth()-D.getMonth()===1&&document.querySelector(`[data-testid="${T}-back-button"]`)?.focus()},[l,o,D,T]),oe=m.useCallback(s=>{if(s.target.value.length!==4)return;const f=Number.parseInt(s.target.value);if(Number.isNaN(f))return;let v=(f-D.getFullYear())*12;const g=new Date(D.getFullYear(),D.getMonth()+v,D.getDate());o&&o.getFullYear()===g.getFullYear()&&o.getMonth()<g.getMonth()?v-=g.getMonth()-o.getMonth():l&&l.getFullYear()===g.getFullYear()&&l.getMonth()>g.getMonth()&&(v+=l.getMonth()-g.getMonth()),q({type:"ADD_OFFSET",addedOffset:v})},[D,l,o]),se=m.useCallback(s=>{if(!O&&!n)return;const f=D.getFullYear()-(O||new Date).getFullYear(),v=Number.parseInt(s.target.value)-(O||new Date).getMonth();q({type:"SET_OFFSET",newOffset:f*12+v})},[O,n,D]),ie=et(U,l,o,k),H=tt(U,u,l,o);return i.jsx("div",{ref:t,id:T,className:"jkl-calendar","data-testid":"jkl-calendar",children:i.jsxs("div",{className:"jkl-calendar__padding",ref:x,onKeyDown:re,children:[i.jsxs("fieldset",{className:"jkl-calendar-navigation",children:[i.jsxs("div",{children:[i.jsx(he,{...ne({calendars:N,onClick:K}),"data-testid":`${T}-back-button`,variant:"ghost",icon:i.jsx($e,{variant:"medium",bold:!0})}),i.jsx(he,{...Y({calendars:N,onClick:K}),variant:"ghost","data-testid":`${T}-forward-button`,icon:i.jsx(Ke,{variant:"medium",bold:!0})})]}),i.jsxs("div",{children:[i.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[i.jsx("select",{onChange:se,className:"jkl-calendar-navigation-dropdown__select","aria-label":p,value:ee.toString(),children:H.map(({label:s,value:f})=>i.jsx("option",{value:f,children:s},f))}),i.jsx(ve,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]}),i.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[i.jsx("select",{onChange:oe,className:"jkl-calendar-navigation-dropdown__select","aria-label":b,value:U.toString(),children:ie.map(s=>i.jsx("option",{value:s,children:s},s))}),i.jsx(ve,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]})]})]}),N.map(s=>i.jsxs("table",{className:"jkl-calendar-table","data-testid":"jkl-datepicker-calendar",children:[i.jsxs("caption",{className:"jkl-sr-only",children:[u[s.month],", ",s.year]}),i.jsx("thead",{children:i.jsx("tr",{children:d.map(f=>i.jsx("th",{children:f},`${s.month}${s.year}${f}`))})}),i.jsx("tbody",{"data-testid":"jkl-datepicker-dates",children:s.weeks.map((f,v)=>i.jsx("tr",{children:f.map((g,F)=>{const _=`${s.month}${s.year}${v}${F}`;if(typeof g=="string")return i.jsx("td",{className:"jkl-calendar__date jkl-calendar__date--empty",children:g},_);const{date:S,selectable:y,today:P,prevMonth:V,nextMonth:W}=g;return i.jsx("td",{children:i.jsx("button",{...I({dateObj:g}),type:"button",className:"jkl-calendar-date-button",tabIndex:le(g)?0:-1,"aria-label":`${S.getDate()}. ${u[S.getMonth()].toLowerCase()}`,"aria-current":P?"date":void 0,"data-adjacent":V||W?"true":void 0,disabled:!y,onKeyDown:ae,children:i.jsx("span",{"aria-hidden":"true",children:S.getDate()})})},_)})},`${s.month}${s.year}${v}`))})]},`${s.month}${s.year}`))]})})});ge.displayName="Calendar";ge.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{date:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},defaultSelected:{required:!1,tsType:{name:"Date"},description:""},days:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},months:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},monthLabel:{required:!1,tsType:{name:"string"},description:""},yearLabel:{required:!1,tsType:{name:"string"},description:""},yearsToShow:{required:!1,tsType:{name:"union",raw:'number | "all" | { previous: number; coming: number }',elements:[{name:"number"},{name:"literal",value:'"all"'},{name:"signature",type:"object",raw:"{ previous: number; coming: number }",signature:{properties:[{key:"previous",value:{name:"number",required:!0}},{key:"coming",value:{name:"number",required:!0}}]}}]},description:""},onTabOutside:{required:!0,tsType:{name:"ReactKeyboardEventHandler",raw:"React.KeyboardEventHandler"},description:""}},composes:["Omit"]};function vt(e,t,n={inclusive:!1}){const a=typeof e=="string"?A(e):e;return a?n.inclusive?a>=t:a>t:!1}function kt(e,t,n={inclusive:!1}){const a=typeof e=="string"?A(e):e;return a?n.inclusive?a<=t:a<t:!1}const Z=m.forwardRef((e,t)=>{const{"data-testautoid":n,id:a,className:r="",label:l="Velg dato",labelProps:o,defaultValue:d,defaultShow:u=!1,value:p,disableBeforeDate:b,disableAfterDate:k,yearsToShow:h,name:w,helpLabel:T,errorLabel:M,invalid:O,density:D,days:q,months:ee,monthLabel:U,yearLabel:te,placeholder:N="dd.mm.åååå",width:ne="11.25rem",onChange:I,onBlur:Y,onFocus:L,onKeyDown:x,action:E,showCalendarLabel:ae="Åpne kalender",hideCalendarLabel:re="Lukk kalender",supportLabelProps:le,tooltip:K,textInputProps:oe,description:se,...ie}=e,H=A(b),s=H?B(H):void 0,f=A(k),v=f?B(f):void 0,[g,F]=m.useState(ut(p,d,s,v)),[_,S]=m.useState(null),[y,P]=m.useState(u),V=m.useRef(null),W=m.useRef(null),Fe=m.useRef(null),G=m.useRef(null),_e=m.useCallback(c=>{G.current=c,t&&(typeof t=="function"?t(c):t.current=c)},[t]),Ce=m.useCallback(c=>{if(!L||!W.current)return;W.current.contains(c.relatedTarget)||L(c,g,{error:_,value:c.target.value})},[L,g,_]),Ne=m.useCallback(c=>{Y&&Y(c,g,{error:_,value:c.target.value})},[Y,g,_]),Be=m.useCallback(c=>{c.key==="Escape"&&(P(!1),c.preventDefault(),c.stopPropagation()),E?.onKeyDown&&E.onKeyDown(c)},[E]),xe=m.useCallback(c=>{let j=null,C=null;if(c.target.value){const z=A(c.target.value);z?s&&!vt(z,s)?C="OUTSIDE_LOWER_BOUND":v&&!kt(z,v)?C="OUTSIDE_UPPER_BOUND":P(!1):C="WRONG_FORMAT",j=z||null}S(C),F(j),I&&I(c,j,{error:C,value:c.target.value})},[I,s,v]),Ie=m.useCallback(c=>{de.flushSync(()=>{P(!y)});const j=V.current,C=j&&j.querySelector('[aria-pressed="true"]');window.requestAnimationFrame(()=>C?.focus()),E?.onClick&&E.onClick(c)},[y,E]),Pe=m.useCallback(({date:c})=>{if(P(!1),F(c),G.current){const j=G.current;j.value=Xe(c);const C=document.createEvent("HTMLEvents");C.initEvent("input",!0,!1),j.dispatchEvent(C),j.focus(),I&&I(C,c,{error:null,value:j.value})}},[I]),Le=m.useCallback(c=>{c.preventDefault(),P(!1),Fe.current?.focus()},[]);return i.jsx(Ue,{id:a,className:Ae("jkl-datepicker",r),...ie,ref:W,label:l,labelProps:o,density:D,helpLabel:T,errorLabel:M,supportLabelProps:le,tooltip:K,description:se,render:c=>i.jsx(Ye,{"data-focused":y?"true":void 0,ref:_e,"data-testid":"jkl-datepicker__input","data-testautoid":n,className:"jkl-datepicker__input",name:w,defaultValue:d,density:D,value:p,type:"text",placeholder:N,width:ne,onFocus:Ce,onBlur:Ne,onChange:xe,actionButton:i.jsxs(ue,{positionReference:G,open:y,onOpenChange:()=>P(!y),offset:8,children:[i.jsx(ue.Trigger,{...E,"data-testid":"jkl-datepicker__trigger",className:"jkl-text-input-action-button",title:y?re:ae,tabIndex:0,onClick:Ie,onKeyDown:Be,asChild:!0,children:i.jsx(qe,{children:i.jsx(Re,{})})}),i.jsx(ue.Content,{initialFocus:-1,padding:24,children:i.jsx(ge,{ref:V,density:D,date:g,minDate:s,maxDate:v,days:q,months:ee,monthLabel:U,yearLabel:te,yearsToShow:h,onDateSelected:Pe,onTabOutside:Le})})]}),...oe,...c,"aria-invalid":O||!!M})})});Z.displayName="DatePicker";Z.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},className:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},label:{required:!1,tsType:{name:"string"},description:'@default "Velg dato"'},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"LabelProps"},{name:"literal",value:'"children"'}],raw:'Omit<LabelProps, "children">'},description:"Bruk labelProps for å sette props som `variant` og `srOnly`.\n\n@example\n ```tsx\n <DatePicker\n     labelProps={{ srOnly: true }}\n />\n ```"},defaultValue:{required:!1,tsType:{name:"string"},description:`dd.mm.åååå

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
>`},description:"Props som sendes direkte til komponentens TextInput"}},composes:["Omit"]};const Yt={title:"Komponenter/DatePicker",component:Z,args:{action:{disabled:!1},days:["M","T","O","T","F","L","S"],defaultShow:!1,defaultValue:new Date().toLocaleDateString("no",{day:"2-digit",month:"2-digit",year:"numeric"}),disableBeforeDate:new Date(new Date().setDate(new Date().getDate()-14)).toLocaleDateString("en-US"),disableAfterDate:new Date(new Date().setDate(new Date().getDate()+14)).toLocaleDateString("en-US"),description:"Kortet er gyldig i 3 måneder fra denne datoen",label:"Når skal du reise?",labelProps:{srOnly:!1,variant:"small"},hideCalendarLabel:"Lukk kalender",showCalendarLabel:"Åpne kalender",invalid:!1,months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],monthLabel:"Måned",placeholder:"dd.mm.åååå",yearsToShow:new Date().getFullYear(),yearLabel:"År",textInputProps:{disabled:!1,readOnly:!1}}},J={args:{},render:e=>i.jsx(Z,{...e,disableBeforeDate:new Date(e.disableBeforeDate||new Date).toLocaleDateString("no"),disableAfterDate:new Date(e.disableAfterDate||new Date).toLocaleDateString("no")})};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <DatePickerComponent {...args} disableBeforeDate={new Date(args.disableBeforeDate || new Date()).toLocaleDateString("no")} disableAfterDate={new Date(args.disableAfterDate || new Date()).toLocaleDateString("no")} />
}`,...J.parameters?.docs?.source}}};const Wt=["DatePicker"];export{J as DatePicker,Wt as __namedExportsOrder,Yt as default};
