import{j as i}from"./jsx-runtime-BbjHj44Y.js";import{c as Ae}from"./clsx-B-dksMZM.js";import{r as f}from"./index-C6mWTJJr.js";import{r as ue}from"./index-zunobDwC.js";import{I as Le}from"./IconButton-DhDUYojH.js";import{C as Ue}from"./CalendarIcon-CPkPK-ck.js";import{I as Ye}from"./InputGroup-CWudQnz8.js";import{P as ie}from"./Popover-CeCk011M.js";import{B as We}from"./BaseTextInput-InIjd_IJ.js";import{u as $e}from"./useId-Cim48cX5.js";import{B as ve}from"./Button-V_7JZhcr.js";import{A as Ke}from"./ArrowLeftIcon-DflDjibC.js";import{A as He}from"./ArrowRightIcon-BDFxSAq-.js";import{C as ke}from"./ChevronDownIcon-Cfz6obIC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Icon-CZwjvlw8.js";import"./Label-BPOuC4mL.js";import"./SupportLabel-uWZp44mj.js";import"./ErrorIcon-B0wgdey8.js";import"./WarningIcon-B6VvEiHT.js";import"./getThemeAndDensity-BFFxI1sw.js";import"./usePreviousValue-ByfnePFg.js";import"./Loader-BdwWmQR7.js";import"./useDelayedRender-B8sMdCvv.js";function de(e){"@babel/helpers - typeof";return de=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},de(e)}function Ve(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function A(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function U(e){A(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||de(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function X(e,t){A(2,arguments);var n=U(e),r=Ve(t);return isNaN(r)?new Date(NaN):(r&&n.setDate(n.getDate()+r),n)}function N(e){A(1,arguments);var t=U(e);return t.setHours(0,0,0,0),t}function Ge(e,t){A(2,arguments);var n=N(e),r=N(t);return n.getTime()===r.getTime()}function Te(e,t){A(2,arguments);var n=U(e),r=U(t),a=n.getFullYear()-r.getFullYear(),l=n.getMonth()-r.getMonth();return a*12+l}function Y(e,t){A(2,arguments);var n=U(e),r=U(t);return n.getTime()<r.getTime()}function ze(e){return A(1,arguments),Ge(e,Date.now())}const Je=(e,t)=>{let n;switch(t.type){case"SET_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+t.newOffset),{...e,offset:t.newOffset,shownDate:n};case"ADD_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+e.offset+t.addedOffset),{...e,offset:e.offset+t.addedOffset,shownDate:n};case"SET_SELECTED_DATE":return Me(t.newDate);default:return e}},Me=e=>({selectedDate:e,offset:0,shownDate:e}),Qe=/^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/,Xe=/^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;function Ze(e){const t=`${e.getDate()}`.padStart(2,"0"),n=`${e.getMonth()+1}`.padStart(2,"0");return`${t}.${n}.${e.getFullYear()}`}const et=e=>{const t=Qe.exec(e);if(t)return t.slice(1,4);const n=Xe.exec(e);if(!n)return;const r=n.slice(1,4);return r.reverse(),r};function R(e){if(!e)return;const t=et(e);if(!t)return;const n=Number.parseInt(new Date().toLocaleString("no-NB",{year:"2-digit"})),r=p=>p>n?p+1900:p+2e3,a=Number.parseInt(t[0],10),l=Number.parseInt(t[1],10)-1,s=Number.parseInt(t[2],10),c=s>99?s:r(s),d=new Date(c,l,a,0,0,0);return d.getMonth()===l&&d.getFullYear()===c?d:void 0}function me(...e){return t=>e.some(n=>(n==null||n(t),t.defaultPrevented))}function Ee({calendars:e,offset:t,minDate:n}){if(t>1&&n){const{firstDayOfMonth:r}=e[0],a=Te(r,n);a<t&&(t=a)}return t}const ce=3;function tt(e,t,n,r){if(t&&t.getFullYear()>e)return[t.getFullYear().toString()];if(n&&n.getFullYear()<e)return[n.getFullYear().toString()];let a=!1,l,s;r==="all"?(a=!0,l=ce,s=ce):(l=typeof r=="number"?r:r.previous,s=typeof r=="number"?r:r.coming);let c=e-l;if(t){const g=a?t.getFullYear():c;c=Math.max(t.getFullYear(),g)}let d=e+s;if(n){const g=a?n.getFullYear():d;d=Math.min(n.getFullYear(),g)}const p=Math.max(d-c+1,1);return[...Array(p).keys()].map(g=>g+c).map(g=>g.toString())}function nt(e,t,n,r){const a=(n==null?void 0:n.getFullYear())||e,l=(n==null?void 0:n.getMonth())===void 0?0:n.getMonth(),s=(r==null?void 0:r.getFullYear())||e,c=(r==null?void 0:r.getMonth())===void 0?11:r.getMonth();let d=0,p=11;return a===e&&(d=l),s===e&&(p=c),t.map((k,g)=>({value:g.toString(),label:k})).filter(({value:k})=>Number.parseInt(k)>=d&&Number.parseInt(k)<=p)}function je({calendars:e,offset:t,maxDate:n}){if(t>1&&n){const{lastDayOfMonth:r}=e[e.length-1],a=Te(n,r);a<t&&(t=a)}return t}function Se({calendars:e,minDate:t}){if(!t)return!1;const{firstDayOfMonth:n}=e[0],r=X(n,-1);return!!Y(r,t)}function _e({calendars:e,maxDate:t}){if(!t)return!1;const{lastDayOfMonth:n}=e[e.length-1],r=X(n,1);return!!Y(t,r)}function rt({date:e,selected:t,monthsToDisplay:n,offset:r,minDate:a,maxDate:l,firstDayOfWeek:s,showOutsideDays:c}){const d=[],p=at(e,a,l);for(let b=0;b<n;b++){const k=lt({month:p.getMonth()+b+r,year:p.getFullYear(),selectedDates:t,minDate:a,maxDate:l,firstDayOfWeek:s,showOutsideDays:c});d.push(k)}return d}function at(e,t,n){let r=N(e);if(t){const a=N(t);Y(r,a)&&(r=a)}if(n){const a=N(n);Y(a,r)&&(r=a)}return r}function lt({month:e,year:t,selectedDates:n,minDate:r,maxDate:a,firstDayOfWeek:l,showOutsideDays:s}){const c=it(e,t),d=c.daysInMonth;e=c.month,t=c.year;const p=[];for(let S=1;S<=d;S++){const E=new Date(t,e,S),y={date:E,selected:fe(n,E),selectable:pe(r,a,E),today:ze(E),prevMonth:!1,nextMonth:!1};p.push(y)}const b=new Date(t,e,1),k=new Date(t,e,d),g=st({firstDayOfMonth:b,minDate:r,maxDate:a,selectedDates:n,firstDayOfWeek:l,showOutsideDays:s}),M=ot({lastDayOfMonth:k,minDate:r,maxDate:a,selectedDates:n,firstDayOfWeek:l,showOutsideDays:s});p.unshift(...g),p.push(...M);const B=ut(p);return{firstDayOfMonth:b,lastDayOfMonth:k,month:e,year:t,weeks:B}}function st({firstDayOfMonth:e,minDate:t,maxDate:n,selectedDates:r,firstDayOfWeek:a,showOutsideDays:l}){const s=[];let c=(e.getDay()+7-a)%7;if(l){const d=X(e,-1),p=d.getDate(),b=d.getMonth(),k=d.getFullYear();let g=0;for(;g<c;){const M=new Date(k,b,p-g),B={date:M,selected:fe(r,M),selectable:pe(t,n,M),today:!1,prevMonth:!0,nextMonth:!1};s.unshift(B),g++}}else for(;c>0;)s.unshift(""),c--;return s}function ot({lastDayOfMonth:e,minDate:t,maxDate:n,selectedDates:r,firstDayOfWeek:a,showOutsideDays:l}){const s=[];let c=(e.getDay()+7-a)%7;if(l){const d=X(e,1),p=d.getMonth(),b=d.getFullYear();let k=0;for(;k<6-c;){const g=new Date(b,p,1+k),M={date:g,selected:fe(r,g),selectable:pe(t,n,g),today:!1,prevMonth:!1,nextMonth:!0};s.push(M),k++}}else for(;c<6;)s.push(""),c++;return s}function it(e,t){const n=new Date(t,e,1),r=n.getMonth(),a=n.getFullYear();return{daysInMonth:32-new Date(a,r,32).getDate(),month:r,year:a}}function ut(e){const t=Math.ceil(e.length/7),n=[];for(let r=0;r<t;r++){n[r]=[];for(let a=0;a<7;a++)n[r].push(e[r*7+a])}return n}function fe(e,t){return e?(Array.isArray(e)?e:[e]).some(r=>r instanceof Date&&N(r).getTime()===N(t).getTime()):!1}function pe(e,t,n){return!(e&&Y(n,e)||t&&Y(t,n))}function ye(e,t,n){return!!(n&&e>n||t&&e<t)}function dt(e,t,n,r){const a=R(e),l=R(t);return a?ye(a,n,r)?null:a:l?ye(l,n,r)?null:l:null}function be(e,t,n,r){let a=e||t||new Date;return n&&(a=n>a?n:a),r&&(a=r<a?r:a),a}function Fe(e){return e!==void 0}function ct(e,t){return Fe(e)?e:t}function mt(e,{onClick:t,dateObj:n}){return{onClick:me(t,r=>{e(n,r)}),disabled:!n.selectable,"aria-pressed":n.selected,role:"button"}}function ft({minDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:r,offset:a=1,calendars:l}){const s=`Gå tilbake ${a} måned${a===1?"":"er"}`;return{onClick:me(r,()=>{n(t-Ee({calendars:l,offset:a,minDate:e}))}),disabled:Se({calendars:l,minDate:e}),"aria-label":s,title:s}}function pt({maxDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:r,offset:a=1,calendars:l}){const s=`Gå frem ${a} måned${a===1?"":"er"}`;return{onClick:me(r,()=>{n(t+je({calendars:l,offset:a,maxDate:e}))}),disabled:_e({calendars:l,maxDate:e}),"aria-label":s,title:s}}function gt({date:e=N(new Date),maxDate:t,minDate:n,monthsToDisplay:r=1,firstDayOfWeek:a=0,showOutsideDays:l=!0,offset:s,onDateSelected:c,onOffsetChanged:d,selected:p}){const[b,k]=f.useState(0),g=ct(s,b);function M(S){Fe(s)||k(S),d(S)}return{calendars:rt({date:e,selected:p,monthsToDisplay:r,minDate:n,maxDate:t,offset:g,firstDayOfWeek:a,showOutsideDays:l}),getDateProps:mt.bind(null,c),getBackProps:ft.bind(null,{minDate:n,offsetMonth:g,handleOffsetChanged:M}),getForwardProps:pt.bind(null,{maxDate:t,offsetMonth:g,handleOffsetChanged:M}),handleOffsetChanged:M}}const ht=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],vt=["man","tir","ons","tor","fre","lør","søn"],ge=f.forwardRef((e,t)=>{const{date:n,defaultSelected:r,density:a,minDate:l,maxDate:s,days:c=vt,months:d=ht,monthLabel:p="Velg måned",yearLabel:b="Velg år",yearsToShow:k=ce,onTabOutside:g,...M}=e,B=$e("jkl-calendar"),[{offset:S,selectedDate:E,shownDate:y},L]=f.useReducer(Je,be(n,r,l,s),Me),Z=y.getMonth(),W=y.getFullYear();f.useEffect(()=>{L({type:"SET_SELECTED_DATE",newDate:be(n,r,l,s)})},[n,r,l,s]);const ee=f.useCallback(o=>{L({type:"SET_OFFSET",newOffset:o})},[]),{calendars:F,getBackProps:te,getDateProps:I,getForwardProps:$,handleOffsetChanged:x}=gt({date:E,selected:E,minDate:l,maxDate:s,offset:S,onOffsetChanged:ee,firstDayOfWeek:1,...M}),C=f.useRef(null),O=f.useCallback(o=>{if(!C.current)return;const u=document.activeElement,h=C.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),v=async T=>{u==null||u.setAttribute("tabindex","-1"),T.setAttribute("tabindex","0"),T.focus()};h.forEach((T,P)=>{const D=P+o;if(T===u)if(D<=h.length-1&&D>=0)v(h[D]);else if(o<0){if(Se({calendars:F,minDate:l})||(ue.flushSync(()=>{x(S-Ee({calendars:F,offset:1,minDate:l}))}),!C.current))return;const w=C.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');w[w.length+D]&&(w[0].setAttribute("tabindex","-1"),v(w[w.length+D]))}else{if(_e({calendars:F,maxDate:s})||(ue.flushSync(()=>{x(S+je({calendars:F,offset:1,maxDate:s}))}),!C.current))return;const w=C.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');w[D-h.length]&&(w[0].setAttribute("tabindex","-1"),v(w[D-h.length]))}})},[x,S,F,s,l]),ne=f.useCallback(o=>{switch(o.key){case"ArrowUp":O(-7),o.preventDefault();break;case"ArrowRight":O(1),o.preventDefault();break;case"ArrowDown":O(7),o.preventDefault();break;case"ArrowLeft":O(-1),o.preventDefault();break}},[O]),re=f.useCallback(o=>{var T;if(o.key!=="Tab")return;const u=(T=C.current)==null?void 0:T.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!u)return;const h=u[0],v=u[u.length-1];!o.shiftKey&&document.activeElement===v?(h.focus(),o.preventDefault()):o.shiftKey&&document.activeElement===h&&(v.focus(),o.preventDefault())},[]),ae=f.useCallback(o=>{const{date:u,selected:h,selectable:v,prevMonth:T,nextMonth:P}=o;return v?!!(h||u.toString()===(l==null?void 0:l.toString())||!T&&!P&&y.getFullYear()===u.getFullYear()&&E.getMonth()!==u.getMonth()&&u.getDate()===1):!1},[y,l,E]),H=f.useCallback(()=>{l&&y.getFullYear()-l.getFullYear()===0&&y.getMonth()-l.getMonth()===1?document.querySelectorAll(".jkl-calendar-navigation__arrow")[1].focus():s&&s.getFullYear()-y.getFullYear()===0&&s.getMonth()-y.getMonth()===1&&document.querySelectorAll(".jkl-calendar-navigation__arrow")[0].focus()},[l,s,y]),le=f.useCallback(o=>{if(o.target.value.length!==4)return;const u=Number.parseInt(o.target.value);if(Number.isNaN(u))return;let h=(u-y.getFullYear())*12;const v=new Date(y.getFullYear(),y.getMonth()+h,y.getDate());s&&s.getFullYear()===v.getFullYear()&&s.getMonth()<v.getMonth()?h-=v.getMonth()-s.getMonth():l&&l.getFullYear()===v.getFullYear()&&l.getMonth()>v.getMonth()&&(h+=l.getMonth()-v.getMonth()),L({type:"ADD_OFFSET",addedOffset:h})},[y,l,s]),se=f.useCallback(o=>{if(!E&&!n)return;const u=y.getFullYear()-(E||new Date).getFullYear(),h=Number.parseInt(o.target.value)-(E||new Date).getMonth();L({type:"SET_OFFSET",newOffset:u*12+h})},[E,n,y]),V=tt(W,l,s,k),q=nt(W,d,l,s);return i.jsx("div",{ref:t,id:B,className:"jkl-calendar","data-testid":"jkl-calendar",children:i.jsxs("div",{className:"jkl-calendar__padding",ref:C,onKeyDown:re,children:[i.jsxs("fieldset",{className:"jkl-calendar-navigation",children:[i.jsxs("div",{children:[i.jsx(ve,{...te({calendars:F,onClick:H}),variant:"ghost",icon:i.jsx(Ke,{variant:"medium",bold:!0})}),i.jsx(ve,{...$({calendars:F,onClick:H}),variant:"ghost",icon:i.jsx(He,{variant:"medium",bold:!0})})]}),i.jsxs("div",{children:[i.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[i.jsx("select",{onChange:se,className:"jkl-calendar-navigation-dropdown__select","aria-label":p,value:Z.toString(),children:q.map(({label:o,value:u})=>i.jsx("option",{value:u,children:o},u))}),i.jsx(ke,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]}),i.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[i.jsx("select",{onChange:le,className:"jkl-calendar-navigation-dropdown__select","aria-label":b,value:W.toString(),children:V.map(o=>i.jsx("option",{value:o,children:o},o))}),i.jsx(ke,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]})]})]}),F.map(o=>i.jsxs("table",{className:"jkl-calendar-table","data-testid":"jkl-datepicker-calendar",children:[i.jsxs("caption",{className:"jkl-sr-only",children:[d[o.month],", ",o.year]}),i.jsx("thead",{children:i.jsx("tr",{children:c.map(u=>i.jsx("th",{children:u},`${o.month}${o.year}${u}`))})}),i.jsx("tbody",{"data-testid":"jkl-datepicker-dates",children:o.weeks.map((u,h)=>i.jsx("tr",{children:u.map((v,T)=>{const P=`${o.month}${o.year}${h}${T}`;if(typeof v=="string")return i.jsx("td",{className:"jkl-calendar__date jkl-calendar__date--empty",children:v},P);const{date:D,selectable:w,today:G,prevMonth:K,nextMonth:oe}=v;return i.jsx("td",{children:i.jsx("button",{...I({dateObj:v}),type:"button",className:"jkl-calendar-date-button",tabIndex:ae(v)?0:-1,"aria-label":`${D.getDate()}. ${d[D.getMonth()].toLowerCase()}`,"aria-current":G?"date":void 0,"data-adjacent":K||oe?"true":void 0,disabled:!w,onKeyDown:ne,children:i.jsx("span",{"aria-hidden":"true",children:D.getDate()})})},P)})},`${o.month}${o.year}${h}`))})]},`${o.month}${o.year}`))]})})});ge.displayName="Calendar";ge.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{date:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},defaultSelected:{required:!1,tsType:{name:"Date"},description:""},days:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},months:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},monthLabel:{required:!1,tsType:{name:"string"},description:""},yearLabel:{required:!1,tsType:{name:"string"},description:""},yearsToShow:{required:!1,tsType:{name:"union",raw:'number | "all" | { previous: number; coming: number }',elements:[{name:"number"},{name:"literal",value:'"all"'},{name:"signature",type:"object",raw:"{ previous: number; coming: number }",signature:{properties:[{key:"previous",value:{name:"number",required:!0}},{key:"coming",value:{name:"number",required:!0}}]}}]},description:""},onTabOutside:{required:!0,tsType:{name:"ReactKeyboardEventHandler",raw:"React.KeyboardEventHandler"},description:""}},composes:["Omit"]};function kt(e,t,n={inclusive:!1}){const r=typeof e=="string"?R(e):e;return r?n.inclusive?r>=t:r>t:!1}function yt(e,t,n={inclusive:!1}){const r=typeof e=="string"?R(e):e;return r?n.inclusive?r<=t:r<t:!1}const he=f.forwardRef((e,t)=>{const{"data-testautoid":n,id:r,className:a="",label:l="Velg dato",labelProps:s,defaultValue:c,defaultShow:d=!1,value:p,disableBeforeDate:b,disableAfterDate:k,yearsToShow:g,name:M,helpLabel:B,errorLabel:S,invalid:E,density:y,days:L,months:Z,monthLabel:W,yearLabel:ee,placeholder:F="dd.mm.åååå",width:te="11.25rem",onChange:I,onBlur:$,onFocus:x,onKeyDown:C,action:O,showCalendarLabel:ne="Åpne kalender",hideCalendarLabel:re="Lukk kalender",supportLabelProps:ae,tooltip:H,textInputProps:le,...se}=e,V=R(b),q=V?N(V):void 0,o=R(k),u=o?N(o):void 0,[h,v]=f.useState(dt(p,c,q,u)),[T,P]=f.useState(null),[D,w]=f.useState(d),G=f.useRef(null),K=f.useRef(null),oe=f.useRef(null),z=f.useRef(null),Ne=f.useCallback(m=>{z.current=m,t&&(typeof t=="function"?t(m):t.current=m)},[t]),Ce=f.useCallback(m=>{if(!x||!K.current)return;K.current.contains(m.relatedTarget)||x(m,h,{error:T,value:m.target.value})},[x,h,T]),Be=f.useCallback(m=>{$&&$(m,h,{error:T,value:m.target.value})},[$,h,T]),Ie=f.useCallback(m=>{m.key==="Escape"&&(w(!1),m.preventDefault(),m.stopPropagation()),O!=null&&O.onKeyDown&&O.onKeyDown(m)},[O]),Pe=f.useCallback(m=>{let j=null,_=null;if(m.target.value){const J=R(m.target.value);J?q&&!kt(J,q)?_="OUTSIDE_LOWER_BOUND":u&&!yt(J,u)?_="OUTSIDE_UPPER_BOUND":w(!1):_="WRONG_FORMAT",j=J||null}P(_),v(j),I&&I(m,j,{error:_,value:m.target.value})},[I,q,u]),xe=f.useCallback(m=>{ue.flushSync(()=>{w(!D)});const j=G.current,_=j&&j.querySelector('[aria-pressed="true"]');window.requestAnimationFrame(()=>_==null?void 0:_.focus()),O!=null&&O.onClick&&O.onClick(m)},[D,O]),qe=f.useCallback(({date:m})=>{if(w(!1),v(m),z.current){const j=z.current;j.value=Ze(m);const _=document.createEvent("HTMLEvents");_.initEvent("input",!0,!1),j.dispatchEvent(_),j.focus(),I&&I(_,m,{error:null,value:j.value})}},[I]),Re=f.useCallback(m=>{var j;m.preventDefault(),w(!1),(j=oe.current)==null||j.focus()},[]);return i.jsx(Ye,{id:r,className:Ae("jkl-datepicker",a),...se,ref:K,label:l,labelProps:s,density:y,helpLabel:B,errorLabel:S,supportLabelProps:ae,tooltip:H,render:m=>i.jsx(We,{"data-focused":D?"true":void 0,ref:Ne,"data-testid":"jkl-datepicker__input","data-testautoid":n,className:"jkl-datepicker__input",name:M,defaultValue:c,density:y,value:p,type:"text",placeholder:F,width:te,onFocus:Ce,onBlur:Be,onChange:Pe,actionButton:i.jsxs(ie,{positionReference:z,open:D,onOpenChange:()=>w(!D),offset:8,children:[i.jsx(ie.Trigger,{...O,"data-testid":"jkl-datepicker__trigger",className:"jkl-text-input-action-button",title:D?re:ne,tabIndex:0,onClick:xe,onKeyDown:Ie,asChild:!0,children:i.jsx(Le,{children:i.jsx(Ue,{})})}),i.jsx(ie.Content,{initialFocus:-1,padding:24,children:i.jsx(ge,{ref:G,density:y,date:h,minDate:q,maxDate:u,days:L,months:Z,monthLabel:W,yearLabel:ee,yearsToShow:g,onDateSelected:qe,onTabOutside:Re})})]}),...le,...m,"aria-invalid":E||!!S})})});he.displayName="DatePicker";he.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},className:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},label:{required:!1,tsType:{name:"string"},description:'@default "Velg dato"'},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"LabelProps"},{name:"literal",value:'"children"'}],raw:'Omit<LabelProps, "children">'},description:"Bruk labelProps for å sette props som `variant` og `srOnly`.\n\n@example\n ```tsx\n <DatePicker\n     labelProps={{ srOnly: true }}\n />\n ```"},defaultValue:{required:!1,tsType:{name:"string"},description:`dd.mm.åååå

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
>`},description:"Props som sendes direkte til komponentens TextInput"}},composes:["Omit"]};const $t={title:"Komponenter/DatePicker",component:he,parameters:{layout:"padded"},tags:["autodocs"]},Q={args:{}};var De,we,Oe;Q.parameters={...Q.parameters,docs:{...(De=Q.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {}
}`,...(Oe=(we=Q.parameters)==null?void 0:we.docs)==null?void 0:Oe.source}}};const Kt=["DatePicker"];export{Q as DatePicker,Kt as __namedExportsOrder,$t as default};
