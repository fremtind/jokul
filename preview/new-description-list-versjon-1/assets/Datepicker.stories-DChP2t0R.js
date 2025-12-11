import{r as m,R as i}from"./index-siqcju79.js";import{c as qe}from"./clsx-B-dksMZM.js";import{r as de}from"./index-BdKvcPYQ.js";import{I as Re}from"./IconButton-B7cUPyFx.js";import{C as Ue}from"./CalendarIcon-DraQng1d.js";import{I as Ye}from"./InputGroup-jkm-2-wj.js";import{P as ue}from"./Popover-D5d05pSL.js";import{B as xe}from"./BaseTextInput-Un_Ktj_I.js";import{u as We}from"./useId-CahK3IZ3.js";import{B as ve}from"./Button-Dng0c-UK.js";import{A as $e}from"./ArrowLeftIcon-q0dn7XH1.js";import{A as Ke}from"./ArrowRightIcon-DtWkyDKW.js";import{C as he}from"./ChevronDownIcon-fl1APhkk.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./index-yL1brwCS.js";import"./Icon-mINJCSxV.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./WarningIcon-CnuYLHnq.js";import"./floating-ui.react-DOiTYs_Q.js";import"./jsx-runtime-DqZpzl9T.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";const ke=Symbol.for("constructDateFrom");function $(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&ke in e?e[ke](t):e instanceof Date?new e.constructor(t):new Date(t)}function Q(e,t){return $(e,e)}function X(e,t,n){const a=Q(e);return isNaN(t)?$(e,NaN):(t&&a.setDate(a.getDate()+t),a)}function ye(e,...t){const n=$.bind(null,t.find(a=>typeof a=="object"));return t.map(n)}function I(e,t){const n=Q(e);return n.setHours(0,0,0,0),n}function He(e){return $(e,Date.now())}function Ve(e,t,n){const[a,r]=ye(n?.in,e,t);return+I(a)==+I(r)}function we(e,t,n){const[a,r]=ye(n?.in,e,t),l=a.getFullYear()-r.getFullYear(),o=a.getMonth()-r.getMonth();return l*12+o}function U(e,t){return+Q(e)<+Q(t)}function Ge(e,t){return Ve($(e,e),He(e))}const ze=(e,t)=>{let n;switch(t.type){case"SET_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+t.newOffset),{...e,offset:t.newOffset,shownDate:n};case"ADD_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+e.offset+t.addedOffset),{...e,offset:e.offset+t.addedOffset,shownDate:n};case"SET_SELECTED_DATE":return Ee(t.newDate);default:return e}},Ee=e=>({selectedDate:e,offset:0,shownDate:e}),Je=/^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/,Qe=/^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;function Xe(e){const t=`${e.getDate()}`.padStart(2,"0"),n=`${e.getMonth()+1}`.padStart(2,"0");return`${t}.${n}.${e.getFullYear()}`}const Ze=e=>{const t=Je.exec(e);if(t)return t.slice(1,4);const n=Qe.exec(e);if(!n)return;const a=n.slice(1,4);return a.reverse(),a};function q(e){if(!e)return;const t=Ze(e);if(!t)return;const n=Number.parseInt(new Date().toLocaleString("no-NB",{year:"2-digit"})),a=p=>p>n?p+1900:p+2e3,r=Number.parseInt(t[0],10),l=Number.parseInt(t[1],10)-1,o=Number.parseInt(t[2],10),d=o>99?o:a(o),u=new Date(d,l,r,0,0,0);return u.getMonth()===l&&u.getFullYear()===d?u:void 0}function me(...e){return t=>e.some(n=>(n?.(t),t.defaultPrevented))}function Oe({calendars:e,offset:t,minDate:n}){if(t>1&&n){const{firstDayOfMonth:a}=e[0],r=we(a,n);r<t&&(t=r)}return t}const ce=3;function et(e,t,n,a){if(t&&t.getFullYear()>e)return[t.getFullYear().toString()];if(n&&n.getFullYear()<e)return[n.getFullYear().toString()];let r=!1,l,o;a==="all"?(r=!0,l=ce,o=ce):(l=typeof a=="number"?a:a.previous,o=typeof a=="number"?a:a.coming);let d=e-l;if(t){const v=r?t.getFullYear():d;d=Math.max(t.getFullYear(),v)}let u=e+o;if(n){const v=r?n.getFullYear():u;u=Math.min(n.getFullYear(),v)}const p=Math.max(u-d+1,1);return[...Array(p).keys()].map(v=>v+d).map(v=>v.toString())}function tt(e,t,n,a){const r=n?.getFullYear()||e,l=n?.getMonth()===void 0?0:n.getMonth(),o=a?.getFullYear()||e,d=a?.getMonth()===void 0?11:a.getMonth();let u=0,p=11;return r===e&&(u=l),o===e&&(p=d),t.map((k,v)=>({value:v.toString(),label:k})).filter(({value:k})=>Number.parseInt(k)>=u&&Number.parseInt(k)<=p)}function Me({calendars:e,offset:t,maxDate:n}){if(t>1&&n){const{lastDayOfMonth:a}=e[e.length-1],r=we(n,a);r<t&&(t=r)}return t}function Te({calendars:e,minDate:t}){if(!t)return!1;const{firstDayOfMonth:n}=e[0],a=X(n,-1);return!!U(a,t)}function Se({calendars:e,maxDate:t}){if(!t)return!1;const{lastDayOfMonth:n}=e[e.length-1],a=X(n,1);return!!U(t,a)}function nt({date:e,selected:t,monthsToDisplay:n,offset:a,minDate:r,maxDate:l,firstDayOfWeek:o,showOutsideDays:d}){const u=[],p=at(e,r,l);for(let b=0;b<n;b++){const k=rt({month:p.getMonth()+b+a,year:p.getFullYear(),selectedDates:t,minDate:r,maxDate:l,firstDayOfWeek:o,showOutsideDays:d});u.push(k)}return u}function at(e,t,n){let a=I(e);if(t){const r=I(t);U(a,r)&&(a=r)}if(n){const r=I(n);U(r,a)&&(a=r)}return a}function rt({month:e,year:t,selectedDates:n,minDate:a,maxDate:r,firstDayOfWeek:l,showOutsideDays:o}){const d=st(e,t),u=d.daysInMonth;e=d.month,t=d.year;const p=[];for(let O=1;O<=u;O++){const E=new Date(t,e,O),D={date:E,selected:fe(n,E),selectable:pe(a,r,E),today:Ge(E),prevMonth:!1,nextMonth:!1};p.push(D)}const b=new Date(t,e,1),k=new Date(t,e,u),v=lt({firstDayOfMonth:b,minDate:a,maxDate:r,selectedDates:n,firstDayOfWeek:l,showOutsideDays:o}),w=ot({lastDayOfMonth:k,minDate:a,maxDate:r,selectedDates:n,firstDayOfWeek:l,showOutsideDays:o});p.unshift(...v),p.push(...w);const M=it(p);return{firstDayOfMonth:b,lastDayOfMonth:k,month:e,year:t,weeks:M}}function lt({firstDayOfMonth:e,minDate:t,maxDate:n,selectedDates:a,firstDayOfWeek:r,showOutsideDays:l}){const o=[];let d=(e.getDay()+7-r)%7;if(l){const u=X(e,-1),p=u.getDate(),b=u.getMonth(),k=u.getFullYear();let v=0;for(;v<d;){const w=new Date(k,b,p-v),M={date:w,selected:fe(a,w),selectable:pe(t,n,w),today:!1,prevMonth:!0,nextMonth:!1};o.unshift(M),v++}}else for(;d>0;)o.unshift(""),d--;return o}function ot({lastDayOfMonth:e,minDate:t,maxDate:n,selectedDates:a,firstDayOfWeek:r,showOutsideDays:l}){const o=[];let d=(e.getDay()+7-r)%7;if(l){const u=X(e,1),p=u.getMonth(),b=u.getFullYear();let k=0;for(;k<6-d;){const v=new Date(b,p,1+k),w={date:v,selected:fe(a,v),selectable:pe(t,n,v),today:!1,prevMonth:!1,nextMonth:!0};o.push(w),k++}}else for(;d<6;)o.push(""),d++;return o}function st(e,t){const n=new Date(t,e,1),a=n.getMonth(),r=n.getFullYear();return{daysInMonth:32-new Date(r,a,32).getDate(),month:a,year:r}}function it(e){const t=Math.ceil(e.length/7),n=[];for(let a=0;a<t;a++){n[a]=[];for(let r=0;r<7;r++)n[a].push(e[a*7+r])}return n}function fe(e,t){return e?(Array.isArray(e)?e:[e]).some(a=>a instanceof Date&&I(a).getTime()===I(t).getTime()):!1}function pe(e,t,n){return!(e&&U(n,e)||t&&U(t,n))}function De(e,t,n){return!!(n&&e>n||t&&e<t)}function ut(e,t,n,a){const r=q(e),l=q(t);return r?De(r,n,a)?null:r:l?De(l,n,a)?null:l:null}function be(e,t,n,a){let r=e||t||new Date;return n&&(r=n>r?n:r),a&&(r=a<r?a:r),r}function Fe(e){return e!==void 0}function dt(e,t){return Fe(e)?e:t}function ct(e,{onClick:t,dateObj:n}){return{onClick:me(t,a=>{e(n,a)}),disabled:!n.selectable,"aria-pressed":n.selected,role:"button"}}function mt({minDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:a,offset:r=1,calendars:l}){const o=`Gå tilbake ${r} måned${r===1?"":"er"}`;return{onClick:me(a,()=>{n(t-Oe({calendars:l,offset:r,minDate:e}))}),disabled:Te({calendars:l,minDate:e}),"aria-label":o,title:o}}function ft({maxDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:a,offset:r=1,calendars:l}){const o=`Gå frem ${r} måned${r===1?"":"er"}`;return{onClick:me(a,()=>{n(t+Me({calendars:l,offset:r,maxDate:e}))}),disabled:Se({calendars:l,maxDate:e}),"aria-label":o,title:o}}function pt({date:e=I(new Date),maxDate:t,minDate:n,monthsToDisplay:a=1,firstDayOfWeek:r=0,showOutsideDays:l=!0,offset:o,onDateSelected:d,onOffsetChanged:u,selected:p}){const[b,k]=m.useState(0),v=dt(o,b);function w(O){Fe(o)||k(O),u(O)}return{calendars:nt({date:e,selected:p,monthsToDisplay:a,minDate:n,maxDate:t,offset:v,firstDayOfWeek:r,showOutsideDays:l}),getDateProps:ct.bind(null,d),getBackProps:mt.bind(null,{minDate:n,offsetMonth:v,handleOffsetChanged:w}),getForwardProps:ft.bind(null,{maxDate:t,offsetMonth:v,handleOffsetChanged:w}),handleOffsetChanged:w}}const gt=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],vt=["man","tir","ons","tor","fre","lør","søn"],ge=m.forwardRef((e,t)=>{const{date:n,defaultSelected:a,density:r,minDate:l,maxDate:o,days:d=vt,months:u=gt,monthLabel:p="Velg måned",yearLabel:b="Velg år",yearsToShow:k=ce,onTabOutside:v,...w}=e,M=We("jkl-calendar"),[{offset:O,selectedDate:E,shownDate:D},R]=m.useReducer(ze,be(n,a,l,o),Ee),ee=D.getMonth(),Y=D.getFullYear();m.useEffect(()=>{R({type:"SET_SELECTED_DATE",newDate:be(n,a,l,o)})},[n,a,l,o]);const te=m.useCallback(s=>{R({type:"SET_OFFSET",newOffset:s})},[]),{calendars:B,getBackProps:ne,getDateProps:L,getForwardProps:x,handleOffsetChanged:j}=pt({date:E,selected:E,minDate:l,maxDate:o,offset:O,onOffsetChanged:te,firstDayOfWeek:1,...w}),P=m.useRef(null),T=m.useCallback(s=>{if(!P.current)return;const f=document.activeElement,h=P.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),g=async _=>{f?.setAttribute("tabindex","-1"),_.setAttribute("tabindex","0"),_.focus()};h.forEach((_,C)=>{const S=C+s;if(_===f)if(S<=h.length-1&&S>=0)g(h[S]);else if(s<0){if(Te({calendars:B,minDate:l})||(de.flushSync(()=>{j(O-Oe({calendars:B,offset:1,minDate:l}))}),!P.current))return;const y=P.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');y[y.length+S]&&(y[0].setAttribute("tabindex","-1"),g(y[y.length+S]))}else{if(Se({calendars:B,maxDate:o})||(de.flushSync(()=>{j(O+Me({calendars:B,offset:1,maxDate:o}))}),!P.current))return;const y=P.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');y[S-h.length]&&(y[0].setAttribute("tabindex","-1"),g(y[S-h.length]))}})},[j,O,B,o,l]),ae=m.useCallback(s=>{switch(s.key){case"ArrowUp":T(-7),s.preventDefault();break;case"ArrowRight":T(1),s.preventDefault();break;case"ArrowDown":T(7),s.preventDefault();break;case"ArrowLeft":T(-1),s.preventDefault();break}},[T]),re=m.useCallback(s=>{if(s.key!=="Tab")return;const f=P.current?.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!f)return;const h=f[0],g=f[f.length-1];!s.shiftKey&&document.activeElement===g?(h.focus(),s.preventDefault()):s.shiftKey&&document.activeElement===h&&(g.focus(),s.preventDefault())},[]),le=m.useCallback(s=>{const{date:f,selected:h,selectable:g,prevMonth:_,nextMonth:C}=s;return g?!!(h||f.toString()===l?.toString()||!_&&!C&&D.getFullYear()===f.getFullYear()&&E.getMonth()!==f.getMonth()&&f.getDate()===1):!1},[D,l,E]),K=m.useCallback(()=>{l&&D.getFullYear()-l.getFullYear()===0&&D.getMonth()-l.getMonth()===1?document.querySelector(`[data-testid="${M}-forward-button"]`)?.focus():o&&o.getFullYear()-D.getFullYear()===0&&o.getMonth()-D.getMonth()===1&&document.querySelector(`[data-testid="${M}-back-button"]`)?.focus()},[l,o,D,M]),oe=m.useCallback(s=>{if(s.target.value.length!==4)return;const f=Number.parseInt(s.target.value);if(Number.isNaN(f))return;let h=(f-D.getFullYear())*12;const g=new Date(D.getFullYear(),D.getMonth()+h,D.getDate());o&&o.getFullYear()===g.getFullYear()&&o.getMonth()<g.getMonth()?h-=g.getMonth()-o.getMonth():l&&l.getFullYear()===g.getFullYear()&&l.getMonth()>g.getMonth()&&(h+=l.getMonth()-g.getMonth()),R({type:"ADD_OFFSET",addedOffset:h})},[D,l,o]),se=m.useCallback(s=>{if(!E&&!n)return;const f=D.getFullYear()-(E||new Date).getFullYear(),h=Number.parseInt(s.target.value)-(E||new Date).getMonth();R({type:"SET_OFFSET",newOffset:f*12+h})},[E,n,D]),ie=et(Y,l,o,k),H=tt(Y,u,l,o);return i.createElement("div",{ref:t,id:M,className:"jkl-calendar","data-testid":"jkl-calendar"},i.createElement("div",{className:"jkl-calendar__padding",ref:P,onKeyDown:re},i.createElement("fieldset",{className:"jkl-calendar-navigation"},i.createElement("div",null,i.createElement(ve,{...ne({calendars:B,onClick:K}),"data-testid":`${M}-back-button`,variant:"ghost",icon:i.createElement($e,{variant:"medium",bold:!0})}),i.createElement(ve,{...x({calendars:B,onClick:K}),variant:"ghost","data-testid":`${M}-forward-button`,icon:i.createElement(Ke,{variant:"medium",bold:!0})})),i.createElement("div",null,i.createElement("div",{className:"jkl-calendar-navigation-dropdown"},i.createElement("select",{onChange:se,className:"jkl-calendar-navigation-dropdown__select","aria-label":p,value:ee.toString()},H.map(({label:s,value:f})=>i.createElement("option",{key:f,value:f},s))),i.createElement(he,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})),i.createElement("div",{className:"jkl-calendar-navigation-dropdown"},i.createElement("select",{onChange:oe,className:"jkl-calendar-navigation-dropdown__select","aria-label":b,value:Y.toString()},ie.map(s=>i.createElement("option",{key:s,value:s},s))),i.createElement(he,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})))),B.map(s=>i.createElement("table",{className:"jkl-calendar-table",key:`${s.month}${s.year}`,"data-testid":"jkl-datepicker-calendar"},i.createElement("caption",{className:"jkl-sr-only"},u[s.month],", ",s.year),i.createElement("thead",null,i.createElement("tr",null,d.map(f=>i.createElement("th",{key:`${s.month}${s.year}${f}`},f)))),i.createElement("tbody",{"data-testid":"jkl-datepicker-dates"},s.weeks.map((f,h)=>i.createElement("tr",{key:`${s.month}${s.year}${h}`},f.map((g,_)=>{const C=`${s.month}${s.year}${h}${_}`;if(typeof g=="string")return i.createElement("td",{className:"jkl-calendar__date jkl-calendar__date--empty",key:C},g);const{date:S,selectable:y,today:A,prevMonth:V,nextMonth:W}=g;return i.createElement("td",{key:C},i.createElement("button",{...L({dateObj:g}),type:"button",className:"jkl-calendar-date-button",tabIndex:le(g)?0:-1,"aria-label":`${S.getDate()}. ${u[S.getMonth()].toLowerCase()}`,"aria-current":A?"date":void 0,"data-adjacent":V||W?"true":void 0,disabled:!y,onKeyDown:ae},i.createElement("span",{"aria-hidden":"true"},S.getDate())))}))))))))});ge.displayName="Calendar";ge.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{date:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},defaultSelected:{required:!1,tsType:{name:"Date"},description:""},days:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},months:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},monthLabel:{required:!1,tsType:{name:"string"},description:""},yearLabel:{required:!1,tsType:{name:"string"},description:""},yearsToShow:{required:!1,tsType:{name:"union",raw:'number | "all" | { previous: number; coming: number }',elements:[{name:"number"},{name:"literal",value:'"all"'},{name:"signature",type:"object",raw:"{ previous: number; coming: number }",signature:{properties:[{key:"previous",value:{name:"number",required:!0}},{key:"coming",value:{name:"number",required:!0}}]}}]},description:""},onTabOutside:{required:!0,tsType:{name:"ReactKeyboardEventHandler",raw:"React.KeyboardEventHandler"},description:""}},composes:["Omit"]};function ht(e,t,n={inclusive:!1}){const a=typeof e=="string"?q(e):e;return a?n.inclusive?a>=t:a>t:!1}function kt(e,t,n={inclusive:!1}){const a=typeof e=="string"?q(e):e;return a?n.inclusive?a<=t:a<t:!1}const Z=m.forwardRef((e,t)=>{const{"data-testautoid":n,id:a,className:r="",label:l="Velg dato",labelProps:o,defaultValue:d,defaultShow:u=!1,value:p,disableBeforeDate:b,disableAfterDate:k,yearsToShow:v,name:w,helpLabel:M,errorLabel:O,invalid:E,density:D,days:R,months:ee,monthLabel:Y,yearLabel:te,placeholder:B="dd.mm.åååå",width:ne="11.25rem",onChange:L,onBlur:x,onFocus:j,onKeyDown:P,action:T,showCalendarLabel:ae="Åpne kalender",hideCalendarLabel:re="Lukk kalender",supportLabelProps:le,tooltip:K,textInputProps:oe,description:se,...ie}=e,H=q(b),s=H?I(H):void 0,f=q(k),h=f?I(f):void 0,[g,_]=m.useState(ut(p,d,s,h)),[C,S]=m.useState(null),[y,A]=m.useState(u),V=m.useRef(null),W=m.useRef(null),_e=m.useRef(null),G=m.useRef(null),Ce=m.useCallback(c=>{G.current=c,t&&(typeof t=="function"?t(c):t.current=c)},[t]),Ne=m.useCallback(c=>{if(!j||!W.current)return;W.current.contains(c.relatedTarget)||j(c,g,{error:C,value:c.target.value})},[j,g,C]),Be=m.useCallback(c=>{x&&x(c,g,{error:C,value:c.target.value})},[x,g,C]),Ie=m.useCallback(c=>{c.key==="Escape"&&(A(!1),c.preventDefault(),c.stopPropagation()),T?.onKeyDown&&T.onKeyDown(c)},[T]),Pe=m.useCallback(c=>{let F=null,N=null;if(c.target.value){const z=q(c.target.value);z?s&&!ht(z,s)?N="OUTSIDE_LOWER_BOUND":h&&!kt(z,h)?N="OUTSIDE_UPPER_BOUND":A(!1):N="WRONG_FORMAT",F=z||null}S(N),_(F),L&&L(c,F,{error:N,value:c.target.value})},[L,s,h]),Le=m.useCallback(c=>{de.flushSync(()=>{A(!y)});const F=V.current,N=F&&F.querySelector('[aria-pressed="true"]');window.requestAnimationFrame(()=>N?.focus()),T?.onClick&&T.onClick(c)},[y,T]),Ae=m.useCallback(({date:c})=>{if(A(!1),_(c),G.current){const F=G.current;F.value=Xe(c);const N=document.createEvent("HTMLEvents");N.initEvent("input",!0,!1),F.dispatchEvent(N),F.focus(),L&&L(N,c,{error:null,value:F.value})}},[L]),je=m.useCallback(c=>{c.preventDefault(),A(!1),_e.current?.focus()},[]);return i.createElement(Ye,{id:a,className:qe("jkl-datepicker",r),...ie,ref:W,label:l,labelProps:o,density:D,helpLabel:M,errorLabel:O,supportLabelProps:le,tooltip:K,description:se,render:c=>i.createElement(xe,{"data-focused":y?"true":void 0,ref:Ce,"data-testid":"jkl-datepicker__input","data-testautoid":n,className:"jkl-datepicker__input",name:w,defaultValue:d,density:D,value:p,type:"text",placeholder:B,width:ne,onFocus:Ne,onBlur:Be,onChange:Pe,actionButton:i.createElement(ue,{positionReference:G,open:y,onOpenChange:()=>A(!y),offset:8},i.createElement(ue.Trigger,{...T,"data-testid":"jkl-datepicker__trigger",className:"jkl-text-input-action-button",title:y?re:ae,tabIndex:0,onClick:Le,onKeyDown:Ie,asChild:!0},i.createElement(Re,null,i.createElement(Ue,null))),i.createElement(ue.Content,{initialFocus:-1,padding:24},i.createElement(ge,{ref:V,density:D,date:g,minDate:s,maxDate:h,days:R,months:ee,monthLabel:Y,yearLabel:te,yearsToShow:v,onDateSelected:Ae,onTabOutside:je}))),...oe,...c,"aria-invalid":E||!!O})})});Z.displayName="DatePicker";Z.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},className:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},label:{required:!1,tsType:{name:"string"},description:'@default "Velg dato"'},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"LabelProps"},{name:"literal",value:'"children"'}],raw:'Omit<LabelProps, "children">'},description:"Bruk labelProps for å sette props som `variant` og `srOnly`.\n\n@example\n ```tsx\n <DatePicker\n     labelProps={{ srOnly: true }}\n />\n ```"},defaultValue:{required:!1,tsType:{name:"string"},description:`dd.mm.åååå

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
>`},description:"Props som sendes direkte til komponentens TextInput"}},composes:["Omit"]};const $t={title:"Komponenter/DatePicker",component:Z,parameters:{layout:"centered"},args:{action:{disabled:!1},days:["M","T","O","T","F","L","S"],defaultShow:!1,defaultValue:new Date().toLocaleDateString("no",{day:"2-digit",month:"2-digit",year:"numeric"}),disableBeforeDate:new Date(new Date().setDate(new Date().getDate()-14)).toLocaleDateString("en-US"),disableAfterDate:new Date(new Date().setDate(new Date().getDate()+14)).toLocaleDateString("en-US"),description:"Kortet er gyldig i 3 måneder fra denne datoen",label:"Når skal du reise?",labelProps:{srOnly:!1,variant:"small"},hideCalendarLabel:"Lukk kalender",showCalendarLabel:"Åpne kalender",invalid:!1,months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],monthLabel:"Måned",placeholder:"dd.mm.åååå",yearsToShow:new Date().getFullYear(),yearLabel:"År",textInputProps:{disabled:!1,readOnly:!1}},tags:["autodocs","forms"]},J={args:{},render:e=>i.createElement(Z,{...e,disableBeforeDate:new Date(e.disableBeforeDate||new Date).toLocaleDateString("no"),disableAfterDate:new Date(e.disableAfterDate||new Date).toLocaleDateString("no")})};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <DatePickerComponent {...args} disableBeforeDate={new Date(args.disableBeforeDate || new Date()).toLocaleDateString("no")} disableAfterDate={new Date(args.disableAfterDate || new Date()).toLocaleDateString("no")} />
}`,...J.parameters?.docs?.source}}};const Kt=["DatePicker"];export{J as DatePicker,Kt as __namedExportsOrder,$t as default};
