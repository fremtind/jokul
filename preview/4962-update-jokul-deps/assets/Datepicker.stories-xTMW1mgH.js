import{j as i}from"./jsx-runtime-CfatFE5O.js";import{c as Le}from"./clsx-B-dksMZM.js";import{r as f}from"./index-ClcD9ViR.js";import{r as ue}from"./index-CN14f-u1.js";import{I as Ue}from"./IconButton-B0Cys9hZ.js";import{C as Ye}from"./CalendarIcon-C7KTHzT7.js";import{I as We}from"./InputGroup-DFfTEKFS.js";import{P as ie}from"./Popover-DKeg6Jtt.js";import{B as $e}from"./BaseTextInput-BPcs2g6x.js";import{u as Ke}from"./useId-qNfMkXex.js";import{B as he}from"./Button-2w50jndb.js";import{A as He}from"./ArrowLeftIcon-gJYkIaYH.js";import{A as Ve}from"./ArrowRightIcon-D9T8crU1.js";import{C as ve}from"./ChevronDownIcon-BSI7mPkm.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Icon-Op3enNBI.js";import"./Label-BDcVZu8F.js";import"./SupportLabel-BpzEFUnb.js";import"./ErrorIcon-DmY0yKY6.js";import"./WarningIcon-CN0Khs_4.js";import"./getThemeAndDensity-BSLHRK6G.js";import"./usePreviousValue-D76q0nBx.js";import"./Loader-CKZhAlI9.js";import"./useDelayedRender-CJkH27Ob.js";const ke=Symbol.for("constructDateFrom");function $(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&ke in e?e[ke](t):e instanceof Date?new e.constructor(t):new Date(t)}function Q(e,t){return $(e,e)}function X(e,t,n){const r=Q(e);return isNaN(t)?$(e,NaN):(t&&r.setDate(r.getDate()+t),r)}function Me(e,...t){const n=$.bind(null,t.find(r=>typeof r=="object"));return t.map(n)}function C(e,t){const n=Q(e);return n.setHours(0,0,0,0),n}function Ge(e){return $(e,Date.now())}function ze(e,t,n){const[r,a]=Me(n==null?void 0:n.in,e,t);return+C(r)==+C(a)}function Te(e,t,n){const[r,a]=Me(n==null?void 0:n.in,e,t),l=r.getFullYear()-a.getFullYear(),s=r.getMonth()-a.getMonth();return l*12+s}function L(e,t){return+Q(e)<+Q(t)}function Je(e,t){return ze($(e,e),Ge(e))}const Qe=(e,t)=>{let n;switch(t.type){case"SET_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+t.newOffset),{...e,offset:t.newOffset,shownDate:n};case"ADD_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+e.offset+t.addedOffset),{...e,offset:e.offset+t.addedOffset,shownDate:n};case"SET_SELECTED_DATE":return Ee(t.newDate);default:return e}},Ee=e=>({selectedDate:e,offset:0,shownDate:e}),Xe=/^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/,Ze=/^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;function et(e){const t=`${e.getDate()}`.padStart(2,"0"),n=`${e.getMonth()+1}`.padStart(2,"0");return`${t}.${n}.${e.getFullYear()}`}const tt=e=>{const t=Xe.exec(e);if(t)return t.slice(1,4);const n=Ze.exec(e);if(!n)return;const r=n.slice(1,4);return r.reverse(),r};function R(e){if(!e)return;const t=tt(e);if(!t)return;const n=Number.parseInt(new Date().toLocaleString("no-NB",{year:"2-digit"})),r=p=>p>n?p+1900:p+2e3,a=Number.parseInt(t[0],10),l=Number.parseInt(t[1],10)-1,s=Number.parseInt(t[2],10),c=s>99?s:r(s),d=new Date(c,l,a,0,0,0);return d.getMonth()===l&&d.getFullYear()===c?d:void 0}function ce(...e){return t=>e.some(n=>(n==null||n(t),t.defaultPrevented))}function je({calendars:e,offset:t,minDate:n}){if(t>1&&n){const{firstDayOfMonth:r}=e[0],a=Te(r,n);a<t&&(t=a)}return t}const de=3;function nt(e,t,n,r){if(t&&t.getFullYear()>e)return[t.getFullYear().toString()];if(n&&n.getFullYear()<e)return[n.getFullYear().toString()];let a=!1,l,s;r==="all"?(a=!0,l=de,s=de):(l=typeof r=="number"?r:r.previous,s=typeof r=="number"?r:r.coming);let c=e-l;if(t){const g=a?t.getFullYear():c;c=Math.max(t.getFullYear(),g)}let d=e+s;if(n){const g=a?n.getFullYear():d;d=Math.min(n.getFullYear(),g)}const p=Math.max(d-c+1,1);return[...Array(p).keys()].map(g=>g+c).map(g=>g.toString())}function rt(e,t,n,r){const a=(n==null?void 0:n.getFullYear())||e,l=(n==null?void 0:n.getMonth())===void 0?0:n.getMonth(),s=(r==null?void 0:r.getFullYear())||e,c=(r==null?void 0:r.getMonth())===void 0?11:r.getMonth();let d=0,p=11;return a===e&&(d=l),s===e&&(p=c),t.map((k,g)=>({value:g.toString(),label:k})).filter(({value:k})=>Number.parseInt(k)>=d&&Number.parseInt(k)<=p)}function _e({calendars:e,offset:t,maxDate:n}){if(t>1&&n){const{lastDayOfMonth:r}=e[e.length-1],a=Te(n,r);a<t&&(t=a)}return t}function Fe({calendars:e,minDate:t}){if(!t)return!1;const{firstDayOfMonth:n}=e[0],r=X(n,-1);return!!L(r,t)}function Se({calendars:e,maxDate:t}){if(!t)return!1;const{lastDayOfMonth:n}=e[e.length-1],r=X(n,1);return!!L(t,r)}function at({date:e,selected:t,monthsToDisplay:n,offset:r,minDate:a,maxDate:l,firstDayOfWeek:s,showOutsideDays:c}){const d=[],p=lt(e,a,l);for(let b=0;b<n;b++){const k=st({month:p.getMonth()+b+r,year:p.getFullYear(),selectedDates:t,minDate:a,maxDate:l,firstDayOfWeek:s,showOutsideDays:c});d.push(k)}return d}function lt(e,t,n){let r=C(e);if(t){const a=C(t);L(r,a)&&(r=a)}if(n){const a=C(n);L(a,r)&&(r=a)}return r}function st({month:e,year:t,selectedDates:n,minDate:r,maxDate:a,firstDayOfWeek:l,showOutsideDays:s}){const c=ut(e,t),d=c.daysInMonth;e=c.month,t=c.year;const p=[];for(let _=1;_<=d;_++){const E=new Date(t,e,_),y={date:E,selected:me(n,E),selectable:fe(r,a,E),today:Je(E),prevMonth:!1,nextMonth:!1};p.push(y)}const b=new Date(t,e,1),k=new Date(t,e,d),g=ot({firstDayOfMonth:b,minDate:r,maxDate:a,selectedDates:n,firstDayOfWeek:l,showOutsideDays:s}),T=it({lastDayOfMonth:k,minDate:r,maxDate:a,selectedDates:n,firstDayOfWeek:l,showOutsideDays:s});p.unshift(...g),p.push(...T);const B=dt(p);return{firstDayOfMonth:b,lastDayOfMonth:k,month:e,year:t,weeks:B}}function ot({firstDayOfMonth:e,minDate:t,maxDate:n,selectedDates:r,firstDayOfWeek:a,showOutsideDays:l}){const s=[];let c=(e.getDay()+7-a)%7;if(l){const d=X(e,-1),p=d.getDate(),b=d.getMonth(),k=d.getFullYear();let g=0;for(;g<c;){const T=new Date(k,b,p-g),B={date:T,selected:me(r,T),selectable:fe(t,n,T),today:!1,prevMonth:!0,nextMonth:!1};s.unshift(B),g++}}else for(;c>0;)s.unshift(""),c--;return s}function it({lastDayOfMonth:e,minDate:t,maxDate:n,selectedDates:r,firstDayOfWeek:a,showOutsideDays:l}){const s=[];let c=(e.getDay()+7-a)%7;if(l){const d=X(e,1),p=d.getMonth(),b=d.getFullYear();let k=0;for(;k<6-c;){const g=new Date(b,p,1+k),T={date:g,selected:me(r,g),selectable:fe(t,n,g),today:!1,prevMonth:!1,nextMonth:!0};s.push(T),k++}}else for(;c<6;)s.push(""),c++;return s}function ut(e,t){const n=new Date(t,e,1),r=n.getMonth(),a=n.getFullYear();return{daysInMonth:32-new Date(a,r,32).getDate(),month:r,year:a}}function dt(e){const t=Math.ceil(e.length/7),n=[];for(let r=0;r<t;r++){n[r]=[];for(let a=0;a<7;a++)n[r].push(e[r*7+a])}return n}function me(e,t){return e?(Array.isArray(e)?e:[e]).some(r=>r instanceof Date&&C(r).getTime()===C(t).getTime()):!1}function fe(e,t,n){return!(e&&L(n,e)||t&&L(t,n))}function ye(e,t,n){return!!(n&&e>n||t&&e<t)}function ct(e,t,n,r){const a=R(e),l=R(t);return a?ye(a,n,r)?null:a:l?ye(l,n,r)?null:l:null}function be(e,t,n,r){let a=e||t||new Date;return n&&(a=n>a?n:a),r&&(a=r<a?r:a),a}function Ce(e){return e!==void 0}function mt(e,t){return Ce(e)?e:t}function ft(e,{onClick:t,dateObj:n}){return{onClick:ce(t,r=>{e(n,r)}),disabled:!n.selectable,"aria-pressed":n.selected,role:"button"}}function pt({minDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:r,offset:a=1,calendars:l}){const s=`Gå tilbake ${a} måned${a===1?"":"er"}`;return{onClick:ce(r,()=>{n(t-je({calendars:l,offset:a,minDate:e}))}),disabled:Fe({calendars:l,minDate:e}),"aria-label":s,title:s}}function gt({maxDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:r,offset:a=1,calendars:l}){const s=`Gå frem ${a} måned${a===1?"":"er"}`;return{onClick:ce(r,()=>{n(t+_e({calendars:l,offset:a,maxDate:e}))}),disabled:Se({calendars:l,maxDate:e}),"aria-label":s,title:s}}function ht({date:e=C(new Date),maxDate:t,minDate:n,monthsToDisplay:r=1,firstDayOfWeek:a=0,showOutsideDays:l=!0,offset:s,onDateSelected:c,onOffsetChanged:d,selected:p}){const[b,k]=f.useState(0),g=mt(s,b);function T(_){Ce(s)||k(_),d(_)}return{calendars:at({date:e,selected:p,monthsToDisplay:r,minDate:n,maxDate:t,offset:g,firstDayOfWeek:a,showOutsideDays:l}),getDateProps:ft.bind(null,c),getBackProps:pt.bind(null,{minDate:n,offsetMonth:g,handleOffsetChanged:T}),getForwardProps:gt.bind(null,{maxDate:t,offsetMonth:g,handleOffsetChanged:T}),handleOffsetChanged:T}}const vt=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],kt=["man","tir","ons","tor","fre","lør","søn"],pe=f.forwardRef((e,t)=>{const{date:n,defaultSelected:r,density:a,minDate:l,maxDate:s,days:c=kt,months:d=vt,monthLabel:p="Velg måned",yearLabel:b="Velg år",yearsToShow:k=de,onTabOutside:g,...T}=e,B=Ke("jkl-calendar"),[{offset:_,selectedDate:E,shownDate:y},A]=f.useReducer(Qe,be(n,r,l,s),Ee),Z=y.getMonth(),U=y.getFullYear();f.useEffect(()=>{A({type:"SET_SELECTED_DATE",newDate:be(n,r,l,s)})},[n,r,l,s]);const ee=f.useCallback(o=>{A({type:"SET_OFFSET",newOffset:o})},[]),{calendars:S,getBackProps:te,getDateProps:I,getForwardProps:Y,handleOffsetChanged:x}=ht({date:E,selected:E,minDate:l,maxDate:s,offset:_,onOffsetChanged:ee,firstDayOfWeek:1,...T}),N=f.useRef(null),O=f.useCallback(o=>{if(!N.current)return;const u=document.activeElement,h=N.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),v=async M=>{u==null||u.setAttribute("tabindex","-1"),M.setAttribute("tabindex","0"),M.focus()};h.forEach((M,P)=>{const D=P+o;if(M===u)if(D<=h.length-1&&D>=0)v(h[D]);else if(o<0){if(Fe({calendars:S,minDate:l})||(ue.flushSync(()=>{x(_-je({calendars:S,offset:1,minDate:l}))}),!N.current))return;const w=N.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');w[w.length+D]&&(w[0].setAttribute("tabindex","-1"),v(w[w.length+D]))}else{if(Se({calendars:S,maxDate:s})||(ue.flushSync(()=>{x(_+_e({calendars:S,offset:1,maxDate:s}))}),!N.current))return;const w=N.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');w[D-h.length]&&(w[0].setAttribute("tabindex","-1"),v(w[D-h.length]))}})},[x,_,S,s,l]),ne=f.useCallback(o=>{switch(o.key){case"ArrowUp":O(-7),o.preventDefault();break;case"ArrowRight":O(1),o.preventDefault();break;case"ArrowDown":O(7),o.preventDefault();break;case"ArrowLeft":O(-1),o.preventDefault();break}},[O]),re=f.useCallback(o=>{var M;if(o.key!=="Tab")return;const u=(M=N.current)==null?void 0:M.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!u)return;const h=u[0],v=u[u.length-1];!o.shiftKey&&document.activeElement===v?(h.focus(),o.preventDefault()):o.shiftKey&&document.activeElement===h&&(v.focus(),o.preventDefault())},[]),ae=f.useCallback(o=>{const{date:u,selected:h,selectable:v,prevMonth:M,nextMonth:P}=o;return v?!!(h||u.toString()===(l==null?void 0:l.toString())||!M&&!P&&y.getFullYear()===u.getFullYear()&&E.getMonth()!==u.getMonth()&&u.getDate()===1):!1},[y,l,E]),K=f.useCallback(()=>{l&&y.getFullYear()-l.getFullYear()===0&&y.getMonth()-l.getMonth()===1?document.querySelectorAll(".jkl-calendar-navigation__arrow")[1].focus():s&&s.getFullYear()-y.getFullYear()===0&&s.getMonth()-y.getMonth()===1&&document.querySelectorAll(".jkl-calendar-navigation__arrow")[0].focus()},[l,s,y]),le=f.useCallback(o=>{if(o.target.value.length!==4)return;const u=Number.parseInt(o.target.value);if(Number.isNaN(u))return;let h=(u-y.getFullYear())*12;const v=new Date(y.getFullYear(),y.getMonth()+h,y.getDate());s&&s.getFullYear()===v.getFullYear()&&s.getMonth()<v.getMonth()?h-=v.getMonth()-s.getMonth():l&&l.getFullYear()===v.getFullYear()&&l.getMonth()>v.getMonth()&&(h+=l.getMonth()-v.getMonth()),A({type:"ADD_OFFSET",addedOffset:h})},[y,l,s]),se=f.useCallback(o=>{if(!E&&!n)return;const u=y.getFullYear()-(E||new Date).getFullYear(),h=Number.parseInt(o.target.value)-(E||new Date).getMonth();A({type:"SET_OFFSET",newOffset:u*12+h})},[E,n,y]),H=nt(U,l,s,k),q=rt(U,d,l,s);return i.jsx("div",{ref:t,id:B,className:"jkl-calendar","data-testid":"jkl-calendar",children:i.jsxs("div",{className:"jkl-calendar__padding",ref:N,onKeyDown:re,children:[i.jsxs("fieldset",{className:"jkl-calendar-navigation",children:[i.jsxs("div",{children:[i.jsx(he,{...te({calendars:S,onClick:K}),variant:"ghost",icon:i.jsx(He,{variant:"medium",bold:!0})}),i.jsx(he,{...Y({calendars:S,onClick:K}),variant:"ghost",icon:i.jsx(Ve,{variant:"medium",bold:!0})})]}),i.jsxs("div",{children:[i.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[i.jsx("select",{onChange:se,className:"jkl-calendar-navigation-dropdown__select","aria-label":p,value:Z.toString(),children:q.map(({label:o,value:u})=>i.jsx("option",{value:u,children:o},u))}),i.jsx(ve,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]}),i.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[i.jsx("select",{onChange:le,className:"jkl-calendar-navigation-dropdown__select","aria-label":b,value:U.toString(),children:H.map(o=>i.jsx("option",{value:o,children:o},o))}),i.jsx(ve,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]})]})]}),S.map(o=>i.jsxs("table",{className:"jkl-calendar-table","data-testid":"jkl-datepicker-calendar",children:[i.jsxs("caption",{className:"jkl-sr-only",children:[d[o.month],", ",o.year]}),i.jsx("thead",{children:i.jsx("tr",{children:c.map(u=>i.jsx("th",{children:u},`${o.month}${o.year}${u}`))})}),i.jsx("tbody",{"data-testid":"jkl-datepicker-dates",children:o.weeks.map((u,h)=>i.jsx("tr",{children:u.map((v,M)=>{const P=`${o.month}${o.year}${h}${M}`;if(typeof v=="string")return i.jsx("td",{className:"jkl-calendar__date jkl-calendar__date--empty",children:v},P);const{date:D,selectable:w,today:V,prevMonth:W,nextMonth:oe}=v;return i.jsx("td",{children:i.jsx("button",{...I({dateObj:v}),type:"button",className:"jkl-calendar-date-button",tabIndex:ae(v)?0:-1,"aria-label":`${D.getDate()}. ${d[D.getMonth()].toLowerCase()}`,"aria-current":V?"date":void 0,"data-adjacent":W||oe?"true":void 0,disabled:!w,onKeyDown:ne,children:i.jsx("span",{"aria-hidden":"true",children:D.getDate()})})},P)})},`${o.month}${o.year}${h}`))})]},`${o.month}${o.year}`))]})})});pe.displayName="Calendar";pe.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{date:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},defaultSelected:{required:!1,tsType:{name:"Date"},description:""},days:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},months:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},monthLabel:{required:!1,tsType:{name:"string"},description:""},yearLabel:{required:!1,tsType:{name:"string"},description:""},yearsToShow:{required:!1,tsType:{name:"union",raw:'number | "all" | { previous: number; coming: number }',elements:[{name:"number"},{name:"literal",value:'"all"'},{name:"signature",type:"object",raw:"{ previous: number; coming: number }",signature:{properties:[{key:"previous",value:{name:"number",required:!0}},{key:"coming",value:{name:"number",required:!0}}]}}]},description:""},onTabOutside:{required:!0,tsType:{name:"ReactKeyboardEventHandler",raw:"React.KeyboardEventHandler"},description:""}},composes:["Omit"]};function yt(e,t,n={inclusive:!1}){const r=typeof e=="string"?R(e):e;return r?n.inclusive?r>=t:r>t:!1}function bt(e,t,n={inclusive:!1}){const r=typeof e=="string"?R(e):e;return r?n.inclusive?r<=t:r<t:!1}const ge=f.forwardRef((e,t)=>{const{"data-testautoid":n,id:r,className:a="",label:l="Velg dato",labelProps:s,defaultValue:c,defaultShow:d=!1,value:p,disableBeforeDate:b,disableAfterDate:k,yearsToShow:g,name:T,helpLabel:B,errorLabel:_,invalid:E,density:y,days:A,months:Z,monthLabel:U,yearLabel:ee,placeholder:S="dd.mm.åååå",width:te="11.25rem",onChange:I,onBlur:Y,onFocus:x,onKeyDown:N,action:O,showCalendarLabel:ne="Åpne kalender",hideCalendarLabel:re="Lukk kalender",supportLabelProps:ae,tooltip:K,textInputProps:le,...se}=e,H=R(b),q=H?C(H):void 0,o=R(k),u=o?C(o):void 0,[h,v]=f.useState(ct(p,c,q,u)),[M,P]=f.useState(null),[D,w]=f.useState(d),V=f.useRef(null),W=f.useRef(null),oe=f.useRef(null),G=f.useRef(null),Ne=f.useCallback(m=>{G.current=m,t&&(typeof t=="function"?t(m):t.current=m)},[t]),Be=f.useCallback(m=>{if(!x||!W.current)return;W.current.contains(m.relatedTarget)||x(m,h,{error:M,value:m.target.value})},[x,h,M]),Ie=f.useCallback(m=>{Y&&Y(m,h,{error:M,value:m.target.value})},[Y,h,M]),Pe=f.useCallback(m=>{m.key==="Escape"&&(w(!1),m.preventDefault(),m.stopPropagation()),O!=null&&O.onKeyDown&&O.onKeyDown(m)},[O]),xe=f.useCallback(m=>{let j=null,F=null;if(m.target.value){const z=R(m.target.value);z?q&&!yt(z,q)?F="OUTSIDE_LOWER_BOUND":u&&!bt(z,u)?F="OUTSIDE_UPPER_BOUND":w(!1):F="WRONG_FORMAT",j=z||null}P(F),v(j),I&&I(m,j,{error:F,value:m.target.value})},[I,q,u]),qe=f.useCallback(m=>{ue.flushSync(()=>{w(!D)});const j=V.current,F=j&&j.querySelector('[aria-pressed="true"]');window.requestAnimationFrame(()=>F==null?void 0:F.focus()),O!=null&&O.onClick&&O.onClick(m)},[D,O]),Re=f.useCallback(({date:m})=>{if(w(!1),v(m),G.current){const j=G.current;j.value=et(m);const F=document.createEvent("HTMLEvents");F.initEvent("input",!0,!1),j.dispatchEvent(F),j.focus(),I&&I(F,m,{error:null,value:j.value})}},[I]),Ae=f.useCallback(m=>{var j;m.preventDefault(),w(!1),(j=oe.current)==null||j.focus()},[]);return i.jsx(We,{id:r,className:Le("jkl-datepicker",a),...se,ref:W,label:l,labelProps:s,density:y,helpLabel:B,errorLabel:_,supportLabelProps:ae,tooltip:K,render:m=>i.jsx($e,{"data-focused":D?"true":void 0,ref:Ne,"data-testid":"jkl-datepicker__input","data-testautoid":n,className:"jkl-datepicker__input",name:T,defaultValue:c,density:y,value:p,type:"text",placeholder:S,width:te,onFocus:Be,onBlur:Ie,onChange:xe,actionButton:i.jsxs(ie,{positionReference:G,open:D,onOpenChange:()=>w(!D),offset:8,children:[i.jsx(ie.Trigger,{...O,"data-testid":"jkl-datepicker__trigger",className:"jkl-text-input-action-button",title:D?re:ne,tabIndex:0,onClick:qe,onKeyDown:Pe,asChild:!0,children:i.jsx(Ue,{children:i.jsx(Ye,{})})}),i.jsx(ie.Content,{initialFocus:-1,padding:24,children:i.jsx(pe,{ref:V,density:y,date:h,minDate:q,maxDate:u,days:A,months:Z,monthLabel:U,yearLabel:ee,yearsToShow:g,onDateSelected:Re,onTabOutside:Ae})})]}),...le,...m,"aria-invalid":E||!!_})})});ge.displayName="DatePicker";ge.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},className:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},label:{required:!1,tsType:{name:"string"},description:'@default "Velg dato"'},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"LabelProps"},{name:"literal",value:'"children"'}],raw:'Omit<LabelProps, "children">'},description:"Bruk labelProps for å sette props som `variant` og `srOnly`.\n\n@example\n ```tsx\n <DatePicker\n     labelProps={{ srOnly: true }}\n />\n ```"},defaultValue:{required:!1,tsType:{name:"string"},description:`dd.mm.åååå

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
>`},description:"Props som sendes direkte til komponentens TextInput"}},composes:["Omit"]};const Kt={title:"Komponenter/DatePicker",component:ge,parameters:{layout:"padded"},tags:["autodocs"]},J={args:{}};var De,we,Oe;J.parameters={...J.parameters,docs:{...(De=J.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {}
}`,...(Oe=(we=J.parameters)==null?void 0:we.docs)==null?void 0:Oe.source}}};const Ht=["DatePicker"];export{J as DatePicker,Ht as __namedExportsOrder,Kt as default};
