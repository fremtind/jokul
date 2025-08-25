import{c as Ae}from"./clsx-B-dksMZM.js";import{r as f,R as i}from"./index-siqcju79.js";import{r as de}from"./index-BdKvcPYQ.js";import{I as Le}from"./IconButton-BsqD9nTf.js";import{C as Ue}from"./CalendarIcon-DraQng1d.js";import{I as Ye}from"./InputGroup-BJwbXp8L.js";import{P as ue}from"./Popover-D1i2PgAt.js";import{B as xe}from"./BaseTextInput-BcWqlF22.js";import{u as We}from"./useId-CahK3IZ3.js";import{B as he}from"./Button-Bm5jRD6q.js";import{A as $e}from"./ArrowLeftIcon-q0dn7XH1.js";import{A as Ke}from"./ArrowRightIcon-DtWkyDKW.js";import{C as ke}from"./ChevronDownIcon-fl1APhkk.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./index-yL1brwCS.js";import"./Icon-mINJCSxV.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./WarningIcon-CnuYLHnq.js";import"./getThemeAndDensity-CIeob-5A.js";import"./jsx-runtime-DqZpzl9T.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";const ye=Symbol.for("constructDateFrom");function $(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&ye in e?e[ye](t):e instanceof Date?new e.constructor(t):new Date(t)}function X(e,t){return $(e,e)}function Z(e,t,n){const a=X(e);return isNaN(t)?$(e,NaN):(t&&a.setDate(a.getDate()+t),a)}function Ee(e,...t){const n=$.bind(null,t.find(a=>typeof a=="object"));return t.map(n)}function B(e,t){const n=X(e);return n.setHours(0,0,0,0),n}function He(e){return $(e,Date.now())}function Ve(e,t,n){const[a,r]=Ee(n?.in,e,t);return+B(a)==+B(r)}function we(e,t,n){const[a,r]=Ee(n?.in,e,t),l=a.getFullYear()-r.getFullYear(),o=a.getMonth()-r.getMonth();return l*12+o}function U(e,t){return+X(e)<+X(t)}function Ge(e,t){return Ve($(e,e),He(e))}const ze=(e,t)=>{let n;switch(t.type){case"SET_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+t.newOffset),{...e,offset:t.newOffset,shownDate:n};case"ADD_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+e.offset+t.addedOffset),{...e,offset:e.offset+t.addedOffset,shownDate:n};case"SET_SELECTED_DATE":return Oe(t.newDate);default:return e}},Oe=e=>({selectedDate:e,offset:0,shownDate:e}),Je=/^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/,Qe=/^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;function Xe(e){const t=`${e.getDate()}`.padStart(2,"0"),n=`${e.getMonth()+1}`.padStart(2,"0");return`${t}.${n}.${e.getFullYear()}`}const Ze=e=>{const t=Je.exec(e);if(t)return t.slice(1,4);const n=Qe.exec(e);if(!n)return;const a=n.slice(1,4);return a.reverse(),a};function A(e){if(!e)return;const t=Ze(e);if(!t)return;const n=Number.parseInt(new Date().toLocaleString("no-NB",{year:"2-digit"})),a=p=>p>n?p+1900:p+2e3,r=Number.parseInt(t[0],10),l=Number.parseInt(t[1],10)-1,o=Number.parseInt(t[2],10),c=o>99?o:a(o),u=new Date(c,l,r,0,0,0);return u.getMonth()===l&&u.getFullYear()===c?u:void 0}function me(...e){return t=>e.some(n=>(n?.(t),t.defaultPrevented))}function Me({calendars:e,offset:t,minDate:n}){if(t>1&&n){const{firstDayOfMonth:a}=e[0],r=we(a,n);r<t&&(t=r)}return t}const ce=3;function et(e,t,n,a){if(t&&t.getFullYear()>e)return[t.getFullYear().toString()];if(n&&n.getFullYear()<e)return[n.getFullYear().toString()];let r=!1,l,o;a==="all"?(r=!0,l=ce,o=ce):(l=typeof a=="number"?a:a.previous,o=typeof a=="number"?a:a.coming);let c=e-l;if(t){const g=r?t.getFullYear():c;c=Math.max(t.getFullYear(),g)}let u=e+o;if(n){const g=r?n.getFullYear():u;u=Math.min(n.getFullYear(),g)}const p=Math.max(u-c+1,1);return[...Array(p).keys()].map(g=>g+c).map(g=>g.toString())}function tt(e,t,n,a){const r=n?.getFullYear()||e,l=n?.getMonth()===void 0?0:n.getMonth(),o=a?.getFullYear()||e,c=a?.getMonth()===void 0?11:a.getMonth();let u=0,p=11;return r===e&&(u=l),o===e&&(p=c),t.map((k,g)=>({value:g.toString(),label:k})).filter(({value:k})=>Number.parseInt(k)>=u&&Number.parseInt(k)<=p)}function Te({calendars:e,offset:t,maxDate:n}){if(t>1&&n){const{lastDayOfMonth:a}=e[e.length-1],r=we(n,a);r<t&&(t=r)}return t}function _e({calendars:e,minDate:t}){if(!t)return!1;const{firstDayOfMonth:n}=e[0],a=Z(n,-1);return!!U(a,t)}function Fe({calendars:e,maxDate:t}){if(!t)return!1;const{lastDayOfMonth:n}=e[e.length-1],a=Z(n,1);return!!U(t,a)}function nt({date:e,selected:t,monthsToDisplay:n,offset:a,minDate:r,maxDate:l,firstDayOfWeek:o,showOutsideDays:c}){const u=[],p=at(e,r,l);for(let b=0;b<n;b++){const k=rt({month:p.getMonth()+b+a,year:p.getFullYear(),selectedDates:t,minDate:r,maxDate:l,firstDayOfWeek:o,showOutsideDays:c});u.push(k)}return u}function at(e,t,n){let a=B(e);if(t){const r=B(t);U(a,r)&&(a=r)}if(n){const r=B(n);U(r,a)&&(a=r)}return a}function rt({month:e,year:t,selectedDates:n,minDate:a,maxDate:r,firstDayOfWeek:l,showOutsideDays:o}){const c=st(e,t),u=c.daysInMonth;e=c.month,t=c.year;const p=[];for(let M=1;M<=u;M++){const O=new Date(t,e,M),y={date:O,selected:fe(n,O),selectable:pe(a,r,O),today:Ge(O),prevMonth:!1,nextMonth:!1};p.push(y)}const b=new Date(t,e,1),k=new Date(t,e,u),g=lt({firstDayOfMonth:b,minDate:a,maxDate:r,selectedDates:n,firstDayOfWeek:l,showOutsideDays:o}),w=ot({lastDayOfMonth:k,minDate:a,maxDate:r,selectedDates:n,firstDayOfWeek:l,showOutsideDays:o});p.unshift(...g),p.push(...w);const T=it(p);return{firstDayOfMonth:b,lastDayOfMonth:k,month:e,year:t,weeks:T}}function lt({firstDayOfMonth:e,minDate:t,maxDate:n,selectedDates:a,firstDayOfWeek:r,showOutsideDays:l}){const o=[];let c=(e.getDay()+7-r)%7;if(l){const u=Z(e,-1),p=u.getDate(),b=u.getMonth(),k=u.getFullYear();let g=0;for(;g<c;){const w=new Date(k,b,p-g),T={date:w,selected:fe(a,w),selectable:pe(t,n,w),today:!1,prevMonth:!0,nextMonth:!1};o.unshift(T),g++}}else for(;c>0;)o.unshift(""),c--;return o}function ot({lastDayOfMonth:e,minDate:t,maxDate:n,selectedDates:a,firstDayOfWeek:r,showOutsideDays:l}){const o=[];let c=(e.getDay()+7-r)%7;if(l){const u=Z(e,1),p=u.getMonth(),b=u.getFullYear();let k=0;for(;k<6-c;){const g=new Date(b,p,1+k),w={date:g,selected:fe(a,g),selectable:pe(t,n,g),today:!1,prevMonth:!1,nextMonth:!0};o.push(w),k++}}else for(;c<6;)o.push(""),c++;return o}function st(e,t){const n=new Date(t,e,1),a=n.getMonth(),r=n.getFullYear();return{daysInMonth:32-new Date(r,a,32).getDate(),month:a,year:r}}function it(e){const t=Math.ceil(e.length/7),n=[];for(let a=0;a<t;a++){n[a]=[];for(let r=0;r<7;r++)n[a].push(e[a*7+r])}return n}function fe(e,t){return e?(Array.isArray(e)?e:[e]).some(a=>a instanceof Date&&B(a).getTime()===B(t).getTime()):!1}function pe(e,t,n){return!(e&&U(n,e)||t&&U(t,n))}function be(e,t,n){return!!(n&&e>n||t&&e<t)}function ut(e,t,n,a){const r=A(e),l=A(t);return r?be(r,n,a)?null:r:l?be(l,n,a)?null:l:null}function De(e,t,n,a){let r=e||t||new Date;return n&&(r=n>r?n:r),a&&(r=a<r?a:r),r}function Se(e){return e!==void 0}function dt(e,t){return Se(e)?e:t}function ct(e,{onClick:t,dateObj:n}){return{onClick:me(t,a=>{e(n,a)}),disabled:!n.selectable,"aria-pressed":n.selected,role:"button"}}function mt({minDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:a,offset:r=1,calendars:l}){const o=`Gå tilbake ${r} måned${r===1?"":"er"}`;return{onClick:me(a,()=>{n(t-Me({calendars:l,offset:r,minDate:e}))}),disabled:_e({calendars:l,minDate:e}),"aria-label":o,title:o}}function ft({maxDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:a,offset:r=1,calendars:l}){const o=`Gå frem ${r} måned${r===1?"":"er"}`;return{onClick:me(a,()=>{n(t+Te({calendars:l,offset:r,maxDate:e}))}),disabled:Fe({calendars:l,maxDate:e}),"aria-label":o,title:o}}function pt({date:e=B(new Date),maxDate:t,minDate:n,monthsToDisplay:a=1,firstDayOfWeek:r=0,showOutsideDays:l=!0,offset:o,onDateSelected:c,onOffsetChanged:u,selected:p}){const[b,k]=f.useState(0),g=dt(o,b);function w(M){Se(o)||k(M),u(M)}return{calendars:nt({date:e,selected:p,monthsToDisplay:a,minDate:n,maxDate:t,offset:g,firstDayOfWeek:r,showOutsideDays:l}),getDateProps:ct.bind(null,c),getBackProps:mt.bind(null,{minDate:n,offsetMonth:g,handleOffsetChanged:w}),getForwardProps:ft.bind(null,{maxDate:t,offsetMonth:g,handleOffsetChanged:w}),handleOffsetChanged:w}}const gt=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],vt=["man","tir","ons","tor","fre","lør","søn"],ge=f.forwardRef((e,t)=>{const{date:n,defaultSelected:a,density:r,minDate:l,maxDate:o,days:c=vt,months:u=gt,monthLabel:p="Velg måned",yearLabel:b="Velg år",yearsToShow:k=ce,onTabOutside:g,...w}=e,T=We("jkl-calendar"),[{offset:M,selectedDate:O,shownDate:y},L]=f.useReducer(ze,De(n,a,l,o),Oe),ee=y.getMonth(),Y=y.getFullYear();f.useEffect(()=>{L({type:"SET_SELECTED_DATE",newDate:De(n,a,l,o)})},[n,a,l,o]);const te=f.useCallback(s=>{L({type:"SET_OFFSET",newOffset:s})},[]),{calendars:N,getBackProps:ne,getDateProps:P,getForwardProps:x,handleOffsetChanged:q}=pt({date:O,selected:O,minDate:l,maxDate:o,offset:M,onOffsetChanged:te,firstDayOfWeek:1,...w}),I=f.useRef(null),_=f.useCallback(s=>{if(!I.current)return;const d=document.activeElement,v=I.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),h=async F=>{d?.setAttribute("tabindex","-1"),F.setAttribute("tabindex","0"),F.focus()};v.forEach((F,j)=>{const D=j+s;if(F===d)if(D<=v.length-1&&D>=0)h(v[D]);else if(s<0){if(_e({calendars:N,minDate:l})||(de.flushSync(()=>{q(M-Me({calendars:N,offset:1,minDate:l}))}),!I.current))return;const E=I.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');E[E.length+D]&&(E[0].setAttribute("tabindex","-1"),h(E[E.length+D]))}else{if(Fe({calendars:N,maxDate:o})||(de.flushSync(()=>{q(M+Te({calendars:N,offset:1,maxDate:o}))}),!I.current))return;const E=I.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');E[D-v.length]&&(E[0].setAttribute("tabindex","-1"),h(E[D-v.length]))}})},[q,M,N,o,l]),ae=f.useCallback(s=>{switch(s.key){case"ArrowUp":_(-7),s.preventDefault();break;case"ArrowRight":_(1),s.preventDefault();break;case"ArrowDown":_(7),s.preventDefault();break;case"ArrowLeft":_(-1),s.preventDefault();break}},[_]),re=f.useCallback(s=>{if(s.key!=="Tab")return;const d=I.current?.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!d)return;const v=d[0],h=d[d.length-1];!s.shiftKey&&document.activeElement===h?(v.focus(),s.preventDefault()):s.shiftKey&&document.activeElement===v&&(h.focus(),s.preventDefault())},[]),le=f.useCallback(s=>{const{date:d,selected:v,selectable:h,prevMonth:F,nextMonth:j}=s;return h?!!(v||d.toString()===l?.toString()||!F&&!j&&y.getFullYear()===d.getFullYear()&&O.getMonth()!==d.getMonth()&&d.getDate()===1):!1},[y,l,O]),K=f.useCallback(()=>{l&&y.getFullYear()-l.getFullYear()===0&&y.getMonth()-l.getMonth()===1?document.querySelector(`[data-testid="${T}-forward-button"]`)?.focus():o&&o.getFullYear()-y.getFullYear()===0&&o.getMonth()-y.getMonth()===1&&document.querySelector(`[data-testid="${T}-back-button"]`)?.focus()},[l,o,y,T]),oe=f.useCallback(s=>{if(s.target.value.length!==4)return;const d=Number.parseInt(s.target.value);if(Number.isNaN(d))return;let v=(d-y.getFullYear())*12;const h=new Date(y.getFullYear(),y.getMonth()+v,y.getDate());o&&o.getFullYear()===h.getFullYear()&&o.getMonth()<h.getMonth()?v-=h.getMonth()-o.getMonth():l&&l.getFullYear()===h.getFullYear()&&l.getMonth()>h.getMonth()&&(v+=l.getMonth()-h.getMonth()),L({type:"ADD_OFFSET",addedOffset:v})},[y,l,o]),se=f.useCallback(s=>{if(!O&&!n)return;const d=y.getFullYear()-(O||new Date).getFullYear(),v=Number.parseInt(s.target.value)-(O||new Date).getMonth();L({type:"SET_OFFSET",newOffset:d*12+v})},[O,n,y]),H=et(Y,l,o,k),R=tt(Y,u,l,o);return i.createElement("div",{ref:t,id:T,className:"jkl-calendar","data-testid":"jkl-calendar"},i.createElement("div",{className:"jkl-calendar__padding",ref:I,onKeyDown:re},i.createElement("fieldset",{className:"jkl-calendar-navigation"},i.createElement("div",null,i.createElement(he,{...ne({calendars:N,onClick:K}),"data-testid":`${T}-back-button`,variant:"ghost",icon:i.createElement($e,{variant:"medium",bold:!0})}),i.createElement(he,{...x({calendars:N,onClick:K}),variant:"ghost","data-testid":`${T}-forward-button`,icon:i.createElement(Ke,{variant:"medium",bold:!0})})),i.createElement("div",null,i.createElement("div",{className:"jkl-calendar-navigation-dropdown"},i.createElement("select",{onChange:se,className:"jkl-calendar-navigation-dropdown__select","aria-label":p,value:ee.toString()},R.map(({label:s,value:d})=>i.createElement("option",{key:d,value:d},s))),i.createElement(ke,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})),i.createElement("div",{className:"jkl-calendar-navigation-dropdown"},i.createElement("select",{onChange:oe,className:"jkl-calendar-navigation-dropdown__select","aria-label":b,value:Y.toString()},H.map(s=>i.createElement("option",{key:s,value:s},s))),i.createElement(ke,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})))),N.map(s=>i.createElement("table",{className:"jkl-calendar-table",key:`${s.month}${s.year}`,"data-testid":"jkl-datepicker-calendar"},i.createElement("caption",{className:"jkl-sr-only"},u[s.month],", ",s.year),i.createElement("thead",null,i.createElement("tr",null,c.map(d=>i.createElement("th",{key:`${s.month}${s.year}${d}`},d)))),i.createElement("tbody",{"data-testid":"jkl-datepicker-dates"},s.weeks.map((d,v)=>i.createElement("tr",{key:`${s.month}${s.year}${v}`},d.map((h,F)=>{const j=`${s.month}${s.year}${v}${F}`;if(typeof h=="string")return i.createElement("td",{className:"jkl-calendar__date jkl-calendar__date--empty",key:j},h);const{date:D,selectable:E,today:V,prevMonth:W,nextMonth:ie}=h;return i.createElement("td",{key:j},i.createElement("button",{...P({dateObj:h}),type:"button",className:"jkl-calendar-date-button",tabIndex:le(h)?0:-1,"aria-label":`${D.getDate()}. ${u[D.getMonth()].toLowerCase()}`,"aria-current":V?"date":void 0,"data-adjacent":W||ie?"true":void 0,disabled:!E,onKeyDown:ae},i.createElement("span",{"aria-hidden":"true"},D.getDate())))}))))))))});ge.displayName="Calendar";ge.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{date:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},defaultSelected:{required:!1,tsType:{name:"Date"},description:""},days:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},months:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},monthLabel:{required:!1,tsType:{name:"string"},description:""},yearLabel:{required:!1,tsType:{name:"string"},description:""},yearsToShow:{required:!1,tsType:{name:"union",raw:'number | "all" | { previous: number; coming: number }',elements:[{name:"number"},{name:"literal",value:'"all"'},{name:"signature",type:"object",raw:"{ previous: number; coming: number }",signature:{properties:[{key:"previous",value:{name:"number",required:!0}},{key:"coming",value:{name:"number",required:!0}}]}}]},description:""},onTabOutside:{required:!0,tsType:{name:"ReactKeyboardEventHandler",raw:"React.KeyboardEventHandler"},description:""}},composes:["Omit"]};function ht(e,t,n={inclusive:!1}){const a=typeof e=="string"?A(e):e;return a?n.inclusive?a>=t:a>t:!1}function kt(e,t,n={inclusive:!1}){const a=typeof e=="string"?A(e):e;return a?n.inclusive?a<=t:a<t:!1}const ve=f.forwardRef((e,t)=>{const{"data-testautoid":n,id:a,className:r="",label:l="Velg dato",labelProps:o,defaultValue:c,defaultShow:u=!1,value:p,disableBeforeDate:b,disableAfterDate:k,yearsToShow:g,name:w,helpLabel:T,errorLabel:M,invalid:O,density:y,days:L,months:ee,monthLabel:Y,yearLabel:te,placeholder:N="dd.mm.åååå",width:ne="11.25rem",onChange:P,onBlur:x,onFocus:q,onKeyDown:I,action:_,showCalendarLabel:ae="Åpne kalender",hideCalendarLabel:re="Lukk kalender",supportLabelProps:le,tooltip:K,textInputProps:oe,...se}=e,H=A(b),R=H?B(H):void 0,s=A(k),d=s?B(s):void 0,[v,h]=f.useState(ut(p,c,R,d)),[F,j]=f.useState(null),[D,E]=f.useState(u),V=f.useRef(null),W=f.useRef(null),ie=f.useRef(null),G=f.useRef(null),Ce=f.useCallback(m=>{G.current=m,t&&(typeof t=="function"?t(m):t.current=m)},[t]),Ne=f.useCallback(m=>{if(!q||!W.current)return;W.current.contains(m.relatedTarget)||q(m,v,{error:F,value:m.target.value})},[q,v,F]),Be=f.useCallback(m=>{x&&x(m,v,{error:F,value:m.target.value})},[x,v,F]),Ie=f.useCallback(m=>{m.key==="Escape"&&(E(!1),m.preventDefault(),m.stopPropagation()),_?.onKeyDown&&_.onKeyDown(m)},[_]),Pe=f.useCallback(m=>{let S=null,C=null;if(m.target.value){const z=A(m.target.value);z?R&&!ht(z,R)?C="OUTSIDE_LOWER_BOUND":d&&!kt(z,d)?C="OUTSIDE_UPPER_BOUND":E(!1):C="WRONG_FORMAT",S=z||null}j(C),h(S),P&&P(m,S,{error:C,value:m.target.value})},[P,R,d]),je=f.useCallback(m=>{de.flushSync(()=>{E(!D)});const S=V.current,C=S&&S.querySelector('[aria-pressed="true"]');window.requestAnimationFrame(()=>C?.focus()),_?.onClick&&_.onClick(m)},[D,_]),qe=f.useCallback(({date:m})=>{if(E(!1),h(m),G.current){const S=G.current;S.value=Xe(m);const C=document.createEvent("HTMLEvents");C.initEvent("input",!0,!1),S.dispatchEvent(C),S.focus(),P&&P(C,m,{error:null,value:S.value})}},[P]),Re=f.useCallback(m=>{m.preventDefault(),E(!1),ie.current?.focus()},[]);return i.createElement(Ye,{id:a,className:Ae("jkl-datepicker",r),...se,ref:W,label:l,labelProps:o,density:y,helpLabel:T,errorLabel:M,supportLabelProps:le,tooltip:K,render:m=>i.createElement(xe,{"data-focused":D?"true":void 0,ref:Ce,"data-testid":"jkl-datepicker__input","data-testautoid":n,className:"jkl-datepicker__input",name:w,defaultValue:c,density:y,value:p,type:"text",placeholder:N,width:ne,onFocus:Ne,onBlur:Be,onChange:Pe,actionButton:i.createElement(ue,{positionReference:G,open:D,onOpenChange:()=>E(!D),offset:8},i.createElement(ue.Trigger,{..._,"data-testid":"jkl-datepicker__trigger",className:"jkl-text-input-action-button",title:D?re:ae,tabIndex:0,onClick:je,onKeyDown:Ie,asChild:!0},i.createElement(Le,null,i.createElement(Ue,null))),i.createElement(ue.Content,{initialFocus:-1,padding:24},i.createElement(ge,{ref:V,density:y,date:v,minDate:R,maxDate:d,days:L,months:ee,monthLabel:Y,yearLabel:te,yearsToShow:g,onDateSelected:qe,onTabOutside:Re}))),...oe,...m,"aria-invalid":O||!!M})})});ve.displayName="DatePicker";ve.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},className:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},label:{required:!1,tsType:{name:"string"},description:'@default "Velg dato"'},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"LabelProps"},{name:"literal",value:'"children"'}],raw:'Omit<LabelProps, "children">'},description:"Bruk labelProps for å sette props som `variant` og `srOnly`.\n\n@example\n ```tsx\n <DatePicker\n     labelProps={{ srOnly: true }}\n />\n ```"},defaultValue:{required:!1,tsType:{name:"string"},description:`dd.mm.åååå

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
>`},description:"Props som sendes direkte til komponentens TextInput"}},composes:["Omit"]};const $t={title:"Komponenter/DatePicker",component:ve,parameters:{layout:"padded"},argTypes:{disableAfterDate:{control:{type:"text"}},disableBeforeDate:{control:{type:"text"}}},tags:["autodocs"]},J={args:{}},Q={name:"Datovelger med maks. og min. dato",args:{disableBeforeDate:"2024-01-01",disableAfterDate:"2026-12-31"}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "Datovelger med maks. og min. dato",
  args: {
    disableBeforeDate: "2024-01-01",
    disableAfterDate: "2026-12-31"
  }
}`,...Q.parameters?.docs?.source}}};const Kt=["DatePicker","DatePickerWithEndDates"];export{J as DatePicker,Q as DatePickerWithEndDates,Kt as __namedExportsOrder,$t as default};
