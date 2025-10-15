import{r as f,R as i}from"./index-siqcju79.js";import{c as je}from"./clsx-B-dksMZM.js";import{r as de}from"./index-BdKvcPYQ.js";import{I as qe}from"./IconButton-B7cUPyFx.js";import{C as Re}from"./CalendarIcon-DraQng1d.js";import{I as Ue}from"./InputGroup-BJwbXp8L.js";import{P as ue}from"./Popover-BVzkVOIU.js";import{B as Ye}from"./BaseTextInput-Un_Ktj_I.js";import{u as xe}from"./useId-CahK3IZ3.js";import{B as ve}from"./Button-Dng0c-UK.js";import{A as We}from"./ArrowLeftIcon-q0dn7XH1.js";import{A as $e}from"./ArrowRightIcon-DtWkyDKW.js";import{C as he}from"./ChevronDownIcon-fl1APhkk.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./index-yL1brwCS.js";import"./Icon-mINJCSxV.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./WarningIcon-CnuYLHnq.js";import"./getThemeAndDensity-Cbjmkdw-.js";import"./jsx-runtime-DqZpzl9T.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";const ke=Symbol.for("constructDateFrom");function $(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&ke in e?e[ke](t):e instanceof Date?new e.constructor(t):new Date(t)}function Q(e,t){return $(e,e)}function X(e,t,n){const a=Q(e);return isNaN(t)?$(e,NaN):(t&&a.setDate(a.getDate()+t),a)}function ye(e,...t){const n=$.bind(null,t.find(a=>typeof a=="object"));return t.map(n)}function B(e,t){const n=Q(e);return n.setHours(0,0,0,0),n}function Ke(e){return $(e,Date.now())}function He(e,t,n){const[a,r]=ye(n?.in,e,t);return+B(a)==+B(r)}function we(e,t,n){const[a,r]=ye(n?.in,e,t),l=a.getFullYear()-r.getFullYear(),o=a.getMonth()-r.getMonth();return l*12+o}function U(e,t){return+Q(e)<+Q(t)}function Ve(e,t){return He($(e,e),Ke(e))}const Ge=(e,t)=>{let n;switch(t.type){case"SET_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+t.newOffset),{...e,offset:t.newOffset,shownDate:n};case"ADD_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+e.offset+t.addedOffset),{...e,offset:e.offset+t.addedOffset,shownDate:n};case"SET_SELECTED_DATE":return Ee(t.newDate);default:return e}},Ee=e=>({selectedDate:e,offset:0,shownDate:e}),ze=/^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/,Je=/^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;function Qe(e){const t=`${e.getDate()}`.padStart(2,"0"),n=`${e.getMonth()+1}`.padStart(2,"0");return`${t}.${n}.${e.getFullYear()}`}const Xe=e=>{const t=ze.exec(e);if(t)return t.slice(1,4);const n=Je.exec(e);if(!n)return;const a=n.slice(1,4);return a.reverse(),a};function q(e){if(!e)return;const t=Xe(e);if(!t)return;const n=Number.parseInt(new Date().toLocaleString("no-NB",{year:"2-digit"})),a=p=>p>n?p+1900:p+2e3,r=Number.parseInt(t[0],10),l=Number.parseInt(t[1],10)-1,o=Number.parseInt(t[2],10),c=o>99?o:a(o),u=new Date(c,l,r,0,0,0);return u.getMonth()===l&&u.getFullYear()===c?u:void 0}function me(...e){return t=>e.some(n=>(n?.(t),t.defaultPrevented))}function Oe({calendars:e,offset:t,minDate:n}){if(t>1&&n){const{firstDayOfMonth:a}=e[0],r=we(a,n);r<t&&(t=r)}return t}const ce=3;function Ze(e,t,n,a){if(t&&t.getFullYear()>e)return[t.getFullYear().toString()];if(n&&n.getFullYear()<e)return[n.getFullYear().toString()];let r=!1,l,o;a==="all"?(r=!0,l=ce,o=ce):(l=typeof a=="number"?a:a.previous,o=typeof a=="number"?a:a.coming);let c=e-l;if(t){const g=r?t.getFullYear():c;c=Math.max(t.getFullYear(),g)}let u=e+o;if(n){const g=r?n.getFullYear():u;u=Math.min(n.getFullYear(),g)}const p=Math.max(u-c+1,1);return[...Array(p).keys()].map(g=>g+c).map(g=>g.toString())}function et(e,t,n,a){const r=n?.getFullYear()||e,l=n?.getMonth()===void 0?0:n.getMonth(),o=a?.getFullYear()||e,c=a?.getMonth()===void 0?11:a.getMonth();let u=0,p=11;return r===e&&(u=l),o===e&&(p=c),t.map((k,g)=>({value:g.toString(),label:k})).filter(({value:k})=>Number.parseInt(k)>=u&&Number.parseInt(k)<=p)}function Me({calendars:e,offset:t,maxDate:n}){if(t>1&&n){const{lastDayOfMonth:a}=e[e.length-1],r=we(n,a);r<t&&(t=r)}return t}function Te({calendars:e,minDate:t}){if(!t)return!1;const{firstDayOfMonth:n}=e[0],a=X(n,-1);return!!U(a,t)}function Se({calendars:e,maxDate:t}){if(!t)return!1;const{lastDayOfMonth:n}=e[e.length-1],a=X(n,1);return!!U(t,a)}function tt({date:e,selected:t,monthsToDisplay:n,offset:a,minDate:r,maxDate:l,firstDayOfWeek:o,showOutsideDays:c}){const u=[],p=nt(e,r,l);for(let b=0;b<n;b++){const k=at({month:p.getMonth()+b+a,year:p.getFullYear(),selectedDates:t,minDate:r,maxDate:l,firstDayOfWeek:o,showOutsideDays:c});u.push(k)}return u}function nt(e,t,n){let a=B(e);if(t){const r=B(t);U(a,r)&&(a=r)}if(n){const r=B(n);U(r,a)&&(a=r)}return a}function at({month:e,year:t,selectedDates:n,minDate:a,maxDate:r,firstDayOfWeek:l,showOutsideDays:o}){const c=ot(e,t),u=c.daysInMonth;e=c.month,t=c.year;const p=[];for(let M=1;M<=u;M++){const O=new Date(t,e,M),D={date:O,selected:fe(n,O),selectable:pe(a,r,O),today:Ve(O),prevMonth:!1,nextMonth:!1};p.push(D)}const b=new Date(t,e,1),k=new Date(t,e,u),g=rt({firstDayOfMonth:b,minDate:a,maxDate:r,selectedDates:n,firstDayOfWeek:l,showOutsideDays:o}),E=lt({lastDayOfMonth:k,minDate:a,maxDate:r,selectedDates:n,firstDayOfWeek:l,showOutsideDays:o});p.unshift(...g),p.push(...E);const T=st(p);return{firstDayOfMonth:b,lastDayOfMonth:k,month:e,year:t,weeks:T}}function rt({firstDayOfMonth:e,minDate:t,maxDate:n,selectedDates:a,firstDayOfWeek:r,showOutsideDays:l}){const o=[];let c=(e.getDay()+7-r)%7;if(l){const u=X(e,-1),p=u.getDate(),b=u.getMonth(),k=u.getFullYear();let g=0;for(;g<c;){const E=new Date(k,b,p-g),T={date:E,selected:fe(a,E),selectable:pe(t,n,E),today:!1,prevMonth:!0,nextMonth:!1};o.unshift(T),g++}}else for(;c>0;)o.unshift(""),c--;return o}function lt({lastDayOfMonth:e,minDate:t,maxDate:n,selectedDates:a,firstDayOfWeek:r,showOutsideDays:l}){const o=[];let c=(e.getDay()+7-r)%7;if(l){const u=X(e,1),p=u.getMonth(),b=u.getFullYear();let k=0;for(;k<6-c;){const g=new Date(b,p,1+k),E={date:g,selected:fe(a,g),selectable:pe(t,n,g),today:!1,prevMonth:!1,nextMonth:!0};o.push(E),k++}}else for(;c<6;)o.push(""),c++;return o}function ot(e,t){const n=new Date(t,e,1),a=n.getMonth(),r=n.getFullYear();return{daysInMonth:32-new Date(r,a,32).getDate(),month:a,year:r}}function st(e){const t=Math.ceil(e.length/7),n=[];for(let a=0;a<t;a++){n[a]=[];for(let r=0;r<7;r++)n[a].push(e[a*7+r])}return n}function fe(e,t){return e?(Array.isArray(e)?e:[e]).some(a=>a instanceof Date&&B(a).getTime()===B(t).getTime()):!1}function pe(e,t,n){return!(e&&U(n,e)||t&&U(t,n))}function De(e,t,n){return!!(n&&e>n||t&&e<t)}function it(e,t,n,a){const r=q(e),l=q(t);return r?De(r,n,a)?null:r:l?De(l,n,a)?null:l:null}function be(e,t,n,a){let r=e||t||new Date;return n&&(r=n>r?n:r),a&&(r=a<r?a:r),r}function Fe(e){return e!==void 0}function ut(e,t){return Fe(e)?e:t}function dt(e,{onClick:t,dateObj:n}){return{onClick:me(t,a=>{e(n,a)}),disabled:!n.selectable,"aria-pressed":n.selected,role:"button"}}function ct({minDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:a,offset:r=1,calendars:l}){const o=`Gå tilbake ${r} måned${r===1?"":"er"}`;return{onClick:me(a,()=>{n(t-Oe({calendars:l,offset:r,minDate:e}))}),disabled:Te({calendars:l,minDate:e}),"aria-label":o,title:o}}function mt({maxDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:a,offset:r=1,calendars:l}){const o=`Gå frem ${r} måned${r===1?"":"er"}`;return{onClick:me(a,()=>{n(t+Me({calendars:l,offset:r,maxDate:e}))}),disabled:Se({calendars:l,maxDate:e}),"aria-label":o,title:o}}function ft({date:e=B(new Date),maxDate:t,minDate:n,monthsToDisplay:a=1,firstDayOfWeek:r=0,showOutsideDays:l=!0,offset:o,onDateSelected:c,onOffsetChanged:u,selected:p}){const[b,k]=f.useState(0),g=ut(o,b);function E(M){Fe(o)||k(M),u(M)}return{calendars:tt({date:e,selected:p,monthsToDisplay:a,minDate:n,maxDate:t,offset:g,firstDayOfWeek:r,showOutsideDays:l}),getDateProps:dt.bind(null,c),getBackProps:ct.bind(null,{minDate:n,offsetMonth:g,handleOffsetChanged:E}),getForwardProps:mt.bind(null,{maxDate:t,offsetMonth:g,handleOffsetChanged:E}),handleOffsetChanged:E}}const pt=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],gt=["man","tir","ons","tor","fre","lør","søn"],ge=f.forwardRef((e,t)=>{const{date:n,defaultSelected:a,density:r,minDate:l,maxDate:o,days:c=gt,months:u=pt,monthLabel:p="Velg måned",yearLabel:b="Velg år",yearsToShow:k=ce,onTabOutside:g,...E}=e,T=xe("jkl-calendar"),[{offset:M,selectedDate:O,shownDate:D},R]=f.useReducer(Ge,be(n,a,l,o),Ee),ee=D.getMonth(),Y=D.getFullYear();f.useEffect(()=>{R({type:"SET_SELECTED_DATE",newDate:be(n,a,l,o)})},[n,a,l,o]);const te=f.useCallback(s=>{R({type:"SET_OFFSET",newOffset:s})},[]),{calendars:N,getBackProps:ne,getDateProps:L,getForwardProps:x,handleOffsetChanged:A}=ft({date:O,selected:O,minDate:l,maxDate:o,offset:M,onOffsetChanged:te,firstDayOfWeek:1,...E}),I=f.useRef(null),S=f.useCallback(s=>{if(!I.current)return;const d=document.activeElement,v=I.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),h=async F=>{d?.setAttribute("tabindex","-1"),F.setAttribute("tabindex","0"),F.focus()};v.forEach((F,P)=>{const y=P+s;if(F===d)if(y<=v.length-1&&y>=0)h(v[y]);else if(s<0){if(Te({calendars:N,minDate:l})||(de.flushSync(()=>{A(M-Oe({calendars:N,offset:1,minDate:l}))}),!I.current))return;const w=I.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');w[w.length+y]&&(w[0].setAttribute("tabindex","-1"),h(w[w.length+y]))}else{if(Se({calendars:N,maxDate:o})||(de.flushSync(()=>{A(M+Me({calendars:N,offset:1,maxDate:o}))}),!I.current))return;const w=I.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');w[y-v.length]&&(w[0].setAttribute("tabindex","-1"),h(w[y-v.length]))}})},[A,M,N,o,l]),ae=f.useCallback(s=>{switch(s.key){case"ArrowUp":S(-7),s.preventDefault();break;case"ArrowRight":S(1),s.preventDefault();break;case"ArrowDown":S(7),s.preventDefault();break;case"ArrowLeft":S(-1),s.preventDefault();break}},[S]),re=f.useCallback(s=>{if(s.key!=="Tab")return;const d=I.current?.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!d)return;const v=d[0],h=d[d.length-1];!s.shiftKey&&document.activeElement===h?(v.focus(),s.preventDefault()):s.shiftKey&&document.activeElement===v&&(h.focus(),s.preventDefault())},[]),le=f.useCallback(s=>{const{date:d,selected:v,selectable:h,prevMonth:F,nextMonth:P}=s;return h?!!(v||d.toString()===l?.toString()||!F&&!P&&D.getFullYear()===d.getFullYear()&&O.getMonth()!==d.getMonth()&&d.getDate()===1):!1},[D,l,O]),K=f.useCallback(()=>{l&&D.getFullYear()-l.getFullYear()===0&&D.getMonth()-l.getMonth()===1?document.querySelector(`[data-testid="${T}-forward-button"]`)?.focus():o&&o.getFullYear()-D.getFullYear()===0&&o.getMonth()-D.getMonth()===1&&document.querySelector(`[data-testid="${T}-back-button"]`)?.focus()},[l,o,D,T]),oe=f.useCallback(s=>{if(s.target.value.length!==4)return;const d=Number.parseInt(s.target.value);if(Number.isNaN(d))return;let v=(d-D.getFullYear())*12;const h=new Date(D.getFullYear(),D.getMonth()+v,D.getDate());o&&o.getFullYear()===h.getFullYear()&&o.getMonth()<h.getMonth()?v-=h.getMonth()-o.getMonth():l&&l.getFullYear()===h.getFullYear()&&l.getMonth()>h.getMonth()&&(v+=l.getMonth()-h.getMonth()),R({type:"ADD_OFFSET",addedOffset:v})},[D,l,o]),se=f.useCallback(s=>{if(!O&&!n)return;const d=D.getFullYear()-(O||new Date).getFullYear(),v=Number.parseInt(s.target.value)-(O||new Date).getMonth();R({type:"SET_OFFSET",newOffset:d*12+v})},[O,n,D]),H=Ze(Y,l,o,k),j=et(Y,u,l,o);return i.createElement("div",{ref:t,id:T,className:"jkl-calendar","data-testid":"jkl-calendar"},i.createElement("div",{className:"jkl-calendar__padding",ref:I,onKeyDown:re},i.createElement("fieldset",{className:"jkl-calendar-navigation"},i.createElement("div",null,i.createElement(ve,{...ne({calendars:N,onClick:K}),"data-testid":`${T}-back-button`,variant:"ghost",icon:i.createElement(We,{variant:"medium",bold:!0})}),i.createElement(ve,{...x({calendars:N,onClick:K}),variant:"ghost","data-testid":`${T}-forward-button`,icon:i.createElement($e,{variant:"medium",bold:!0})})),i.createElement("div",null,i.createElement("div",{className:"jkl-calendar-navigation-dropdown"},i.createElement("select",{onChange:se,className:"jkl-calendar-navigation-dropdown__select","aria-label":p,value:ee.toString()},j.map(({label:s,value:d})=>i.createElement("option",{key:d,value:d},s))),i.createElement(he,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})),i.createElement("div",{className:"jkl-calendar-navigation-dropdown"},i.createElement("select",{onChange:oe,className:"jkl-calendar-navigation-dropdown__select","aria-label":b,value:Y.toString()},H.map(s=>i.createElement("option",{key:s,value:s},s))),i.createElement(he,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})))),N.map(s=>i.createElement("table",{className:"jkl-calendar-table",key:`${s.month}${s.year}`,"data-testid":"jkl-datepicker-calendar"},i.createElement("caption",{className:"jkl-sr-only"},u[s.month],", ",s.year),i.createElement("thead",null,i.createElement("tr",null,c.map(d=>i.createElement("th",{key:`${s.month}${s.year}${d}`},d)))),i.createElement("tbody",{"data-testid":"jkl-datepicker-dates"},s.weeks.map((d,v)=>i.createElement("tr",{key:`${s.month}${s.year}${v}`},d.map((h,F)=>{const P=`${s.month}${s.year}${v}${F}`;if(typeof h=="string")return i.createElement("td",{className:"jkl-calendar__date jkl-calendar__date--empty",key:P},h);const{date:y,selectable:w,today:V,prevMonth:W,nextMonth:ie}=h;return i.createElement("td",{key:P},i.createElement("button",{...L({dateObj:h}),type:"button",className:"jkl-calendar-date-button",tabIndex:le(h)?0:-1,"aria-label":`${y.getDate()}. ${u[y.getMonth()].toLowerCase()}`,"aria-current":V?"date":void 0,"data-adjacent":W||ie?"true":void 0,disabled:!w,onKeyDown:ae},i.createElement("span",{"aria-hidden":"true"},y.getDate())))}))))))))});ge.displayName="Calendar";ge.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{date:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},defaultSelected:{required:!1,tsType:{name:"Date"},description:""},days:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},months:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},monthLabel:{required:!1,tsType:{name:"string"},description:""},yearLabel:{required:!1,tsType:{name:"string"},description:""},yearsToShow:{required:!1,tsType:{name:"union",raw:'number | "all" | { previous: number; coming: number }',elements:[{name:"number"},{name:"literal",value:'"all"'},{name:"signature",type:"object",raw:"{ previous: number; coming: number }",signature:{properties:[{key:"previous",value:{name:"number",required:!0}},{key:"coming",value:{name:"number",required:!0}}]}}]},description:""},onTabOutside:{required:!0,tsType:{name:"ReactKeyboardEventHandler",raw:"React.KeyboardEventHandler"},description:""}},composes:["Omit"]};function vt(e,t,n={inclusive:!1}){const a=typeof e=="string"?q(e):e;return a?n.inclusive?a>=t:a>t:!1}function ht(e,t,n={inclusive:!1}){const a=typeof e=="string"?q(e):e;return a?n.inclusive?a<=t:a<t:!1}const Z=f.forwardRef((e,t)=>{const{"data-testautoid":n,id:a,className:r="",label:l="Velg dato",labelProps:o,defaultValue:c,defaultShow:u=!1,value:p,disableBeforeDate:b,disableAfterDate:k,yearsToShow:g,name:E,helpLabel:T,errorLabel:M,invalid:O,density:D,days:R,months:ee,monthLabel:Y,yearLabel:te,placeholder:N="dd.mm.åååå",width:ne="11.25rem",onChange:L,onBlur:x,onFocus:A,onKeyDown:I,action:S,showCalendarLabel:ae="Åpne kalender",hideCalendarLabel:re="Lukk kalender",supportLabelProps:le,tooltip:K,textInputProps:oe,...se}=e,H=q(b),j=H?B(H):void 0,s=q(k),d=s?B(s):void 0,[v,h]=f.useState(it(p,c,j,d)),[F,P]=f.useState(null),[y,w]=f.useState(u),V=f.useRef(null),W=f.useRef(null),ie=f.useRef(null),G=f.useRef(null),_e=f.useCallback(m=>{G.current=m,t&&(typeof t=="function"?t(m):t.current=m)},[t]),Ce=f.useCallback(m=>{if(!A||!W.current)return;W.current.contains(m.relatedTarget)||A(m,v,{error:F,value:m.target.value})},[A,v,F]),Ne=f.useCallback(m=>{x&&x(m,v,{error:F,value:m.target.value})},[x,v,F]),Be=f.useCallback(m=>{m.key==="Escape"&&(w(!1),m.preventDefault(),m.stopPropagation()),S?.onKeyDown&&S.onKeyDown(m)},[S]),Ie=f.useCallback(m=>{let _=null,C=null;if(m.target.value){const z=q(m.target.value);z?j&&!vt(z,j)?C="OUTSIDE_LOWER_BOUND":d&&!ht(z,d)?C="OUTSIDE_UPPER_BOUND":w(!1):C="WRONG_FORMAT",_=z||null}P(C),h(_),L&&L(m,_,{error:C,value:m.target.value})},[L,j,d]),Le=f.useCallback(m=>{de.flushSync(()=>{w(!y)});const _=V.current,C=_&&_.querySelector('[aria-pressed="true"]');window.requestAnimationFrame(()=>C?.focus()),S?.onClick&&S.onClick(m)},[y,S]),Pe=f.useCallback(({date:m})=>{if(w(!1),h(m),G.current){const _=G.current;_.value=Qe(m);const C=document.createEvent("HTMLEvents");C.initEvent("input",!0,!1),_.dispatchEvent(C),_.focus(),L&&L(C,m,{error:null,value:_.value})}},[L]),Ae=f.useCallback(m=>{m.preventDefault(),w(!1),ie.current?.focus()},[]);return i.createElement(Ue,{id:a,className:je("jkl-datepicker",r),...se,ref:W,label:l,labelProps:o,density:D,helpLabel:T,errorLabel:M,supportLabelProps:le,tooltip:K,render:m=>i.createElement(Ye,{"data-focused":y?"true":void 0,ref:_e,"data-testid":"jkl-datepicker__input","data-testautoid":n,className:"jkl-datepicker__input",name:E,defaultValue:c,density:D,value:p,type:"text",placeholder:N,width:ne,onFocus:Ce,onBlur:Ne,onChange:Ie,actionButton:i.createElement(ue,{positionReference:G,open:y,onOpenChange:()=>w(!y),offset:8},i.createElement(ue.Trigger,{...S,"data-testid":"jkl-datepicker__trigger",className:"jkl-text-input-action-button",title:y?re:ae,tabIndex:0,onClick:Le,onKeyDown:Be,asChild:!0},i.createElement(qe,null,i.createElement(Re,null))),i.createElement(ue.Content,{initialFocus:-1,padding:24},i.createElement(ge,{ref:V,density:D,date:v,minDate:j,maxDate:d,days:R,months:ee,monthLabel:Y,yearLabel:te,yearsToShow:g,onDateSelected:Pe,onTabOutside:Ae}))),...oe,...m,"aria-invalid":O||!!M})})});Z.displayName="DatePicker";Z.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},className:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},label:{required:!1,tsType:{name:"string"},description:'@default "Velg dato"'},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"LabelProps"},{name:"literal",value:'"children"'}],raw:'Omit<LabelProps, "children">'},description:"Bruk labelProps for å sette props som `variant` og `srOnly`.\n\n@example\n ```tsx\n <DatePicker\n     labelProps={{ srOnly: true }}\n />\n ```"},defaultValue:{required:!1,tsType:{name:"string"},description:`dd.mm.åååå

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
>`},description:"Props som sendes direkte til komponentens TextInput"}},composes:["Omit"]};const Wt={title:"Komponenter/DatePicker",component:Z,parameters:{layout:"centered"},args:{action:{disabled:!1},days:["M","T","O","T","F","L","S"],defaultShow:!1,defaultValue:new Date().toLocaleDateString("no",{day:"2-digit",month:"2-digit",year:"numeric"}),disableBeforeDate:new Date(new Date().setDate(new Date().getDate()-14)).toLocaleDateString("en-US"),disableAfterDate:new Date(new Date().setDate(new Date().getDate()+14)).toLocaleDateString("en-US"),helpLabel:"Kortet er gyldig i 3 måneder fra denne datoen",label:"Når skal du reise?",labelProps:{srOnly:!1,variant:"small"},hideCalendarLabel:"Lukk kalender",showCalendarLabel:"Åpne kalender",invalid:!1,months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],monthLabel:"Måned",placeholder:"dd.mm.åååå",yearsToShow:new Date().getFullYear(),yearLabel:"År",textInputProps:{disabled:!1,readOnly:!1}},tags:["autodocs","forms"]},J={args:{},render:e=>i.createElement(Z,{...e,disableBeforeDate:new Date(e.disableBeforeDate||new Date).toLocaleDateString("no"),disableAfterDate:new Date(e.disableAfterDate||new Date).toLocaleDateString("no")})};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <DatePickerComponent {...args} disableBeforeDate={new Date(args.disableBeforeDate || new Date()).toLocaleDateString("no")} disableAfterDate={new Date(args.disableAfterDate || new Date()).toLocaleDateString("no")} />
}`,...J.parameters?.docs?.source}}};const $t=["DatePicker"];export{J as DatePicker,$t as __namedExportsOrder,Wt as default};
