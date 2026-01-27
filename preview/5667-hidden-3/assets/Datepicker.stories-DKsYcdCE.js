import{g as Ce,r as T,j as y}from"./iframe-CIR2GNTq.js";import{c as xe}from"./clsx-B-dksMZM.js";import{r as le}from"./index-CW1Reyb_.js";import{I as Be}from"./IconButton-D95R_mMp.js";import{C as Ne}from"./CalendarIcon-B7p_9-Y_.js";import{I as Le}from"./InputGroup-C9t7vySA.js";import{P as oe}from"./Popover-C4P31zsC.js";import{B as Ie}from"./BaseTextInput-BDO6hPAX.js";import{u as Ae}from"./useId-DHIRJo7F.js";import{B as pe}from"./Button-DOXj6JmJ.js";import{A as Pe,a as qe}from"./ArrowRightIcon-CpTXSevM.js";import{C as ge}from"./ChevronDownIcon-Cj235-SV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dq8dUmYR.js";import"./Icon-DRsGYZKV.js";import"./Label-UITE9Syh.js";import"./SupportLabel-BnetiMwE.js";import"./WarningIcon-Cesxs-ot.js";import"./floating-ui.react-CfinGKs6.js";import"./getThemeAndSize-CIzqY74s.js";import"./usePreviousValue-DFUtRWzY.js";import"./Loader-CoRIjNv2.js";import"./useDelayedRender-C3Jtx_BD.js";var se={exports:{}},Ye=se.exports,he;function Re(){return he||(he=1,(function(e,t){(function(n,s){e.exports=s()})(Ye,(function(){var n=1e3,s=6e4,a=36e5,d="millisecond",h="second",D="minute",k="hour",b="day",C="week",w="month",M="quarter",S="year",L="date",x="Invalid Date",j=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,K=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,te={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(f){var l=["th","st","nd","rd"],i=f%100;return"["+f+(l[(i-20)%10]||l[i]||l[0])+"]"}},J=function(f,l,i){var u=String(f);return!u||u.length>=l?f:""+Array(l+1-u.length).join(i)+f},ne={s:J,z:function(f){var l=-f.utcOffset(),i=Math.abs(l),u=Math.floor(i/60),o=i%60;return(l<=0?"+":"-")+J(u,2,"0")+":"+J(o,2,"0")},m:function f(l,i){if(l.date()<i.date())return-f(i,l);var u=12*(i.year()-l.year())+(i.month()-l.month()),o=l.clone().add(u,w),p=i-o<0,r=l.clone().add(u+(p?-1:1),w);return+(-(u+(i-o)/(p?o-r:r-o))||0)},a:function(f){return f<0?Math.ceil(f)||0:Math.floor(f)},p:function(f){return{M:w,y:S,w:C,d:b,D:L,h:k,m:D,s:h,ms:d,Q:M}[f]||String(f||"").toLowerCase().replace(/s$/,"")},u:function(f){return f===void 0}},A="en",U={};U[A]=te;var W="$isDayjsObject",z=function(f){return f instanceof Z||!(!f||!f[W])},q=function f(l,i,u){var o;if(!l)return A;if(typeof l=="string"){var p=l.toLowerCase();U[p]&&(o=p),i&&(U[p]=i,o=p);var r=l.split("-");if(!o&&r.length>1)return f(r[0])}else{var c=l.name;U[c]=l,o=c}return!u&&o&&(A=o),o||!u&&A},$=function(f,l){if(z(f))return f.clone();var i=typeof l=="object"?l:{};return i.date=f,i.args=arguments,new Z(i)},v=ne;v.l=q,v.i=z,v.w=function(f,l){return $(f,{locale:l.$L,utc:l.$u,x:l.$x,$offset:l.$offset})};var Z=(function(){function f(i){this.$L=q(i.locale,null,!0),this.parse(i),this.$x=this.$x||i.x||{},this[W]=!0}var l=f.prototype;return l.parse=function(i){this.$d=(function(u){var o=u.date,p=u.utc;if(o===null)return new Date(NaN);if(v.u(o))return new Date;if(o instanceof Date)return new Date(o);if(typeof o=="string"&&!/Z$/i.test(o)){var r=o.match(j);if(r){var c=r[2]-1||0,m=(r[7]||"0").substring(0,3);return p?new Date(Date.UTC(r[1],c,r[3]||1,r[4]||0,r[5]||0,r[6]||0,m)):new Date(r[1],c,r[3]||1,r[4]||0,r[5]||0,r[6]||0,m)}}return new Date(o)})(i),this.init()},l.init=function(){var i=this.$d;this.$y=i.getFullYear(),this.$M=i.getMonth(),this.$D=i.getDate(),this.$W=i.getDay(),this.$H=i.getHours(),this.$m=i.getMinutes(),this.$s=i.getSeconds(),this.$ms=i.getMilliseconds()},l.$utils=function(){return v},l.isValid=function(){return this.$d.toString()!==x},l.isSame=function(i,u){var o=$(i);return this.startOf(u)<=o&&o<=this.endOf(u)},l.isAfter=function(i,u){return $(i)<this.startOf(u)},l.isBefore=function(i,u){return this.endOf(u)<$(i)},l.$g=function(i,u,o){return v.u(i)?this[u]:this.set(o,i)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(i,u){var o=this,p=!!v.u(u)||u,r=v.p(i),c=function(Y,N){var V=v.w(o.$u?Date.UTC(o.$y,N,Y):new Date(o.$y,N,Y),o);return p?V:V.endOf(b)},m=function(Y,N){return v.w(o.toDate()[Y].apply(o.toDate("s"),(p?[0,0,0,0]:[23,59,59,999]).slice(N)),o)},g=this.$W,E=this.$M,F=this.$D,B="set"+(this.$u?"UTC":"");switch(r){case S:return p?c(1,0):c(31,11);case w:return p?c(1,E):c(0,E+1);case C:var _=this.$locale().weekStart||0,P=(g<_?g+7:g)-_;return c(p?F-P:F+(6-P),E);case b:case L:return m(B+"Hours",0);case k:return m(B+"Minutes",1);case D:return m(B+"Seconds",2);case h:return m(B+"Milliseconds",3);default:return this.clone()}},l.endOf=function(i){return this.startOf(i,!1)},l.$set=function(i,u){var o,p=v.p(i),r="set"+(this.$u?"UTC":""),c=(o={},o[b]=r+"Date",o[L]=r+"Date",o[w]=r+"Month",o[S]=r+"FullYear",o[k]=r+"Hours",o[D]=r+"Minutes",o[h]=r+"Seconds",o[d]=r+"Milliseconds",o)[p],m=p===b?this.$D+(u-this.$W):u;if(p===w||p===S){var g=this.clone().set(L,1);g.$d[c](m),g.init(),this.$d=g.set(L,Math.min(this.$D,g.daysInMonth())).$d}else c&&this.$d[c](m);return this.init(),this},l.set=function(i,u){return this.clone().$set(i,u)},l.get=function(i){return this[v.p(i)]()},l.add=function(i,u){var o,p=this;i=Number(i);var r=v.p(u),c=function(E){var F=$(p);return v.w(F.date(F.date()+Math.round(E*i)),p)};if(r===w)return this.set(w,this.$M+i);if(r===S)return this.set(S,this.$y+i);if(r===b)return c(1);if(r===C)return c(7);var m=(o={},o[D]=s,o[k]=a,o[h]=n,o)[r]||1,g=this.$d.getTime()+i*m;return v.w(g,this)},l.subtract=function(i,u){return this.add(-1*i,u)},l.format=function(i){var u=this,o=this.$locale();if(!this.isValid())return o.invalidDate||x;var p=i||"YYYY-MM-DDTHH:mm:ssZ",r=v.z(this),c=this.$H,m=this.$m,g=this.$M,E=o.weekdays,F=o.months,B=o.meridiem,_=function(N,V,G,ee){return N&&(N[V]||N(u,p))||G[V].slice(0,ee)},P=function(N){return v.s(c%12||12,N,"0")},Y=B||function(N,V,G){var ee=N<12?"AM":"PM";return G?ee.toLowerCase():ee};return p.replace(K,(function(N,V){return V||(function(G){switch(G){case"YY":return String(u.$y).slice(-2);case"YYYY":return v.s(u.$y,4,"0");case"M":return g+1;case"MM":return v.s(g+1,2,"0");case"MMM":return _(o.monthsShort,g,F,3);case"MMMM":return _(F,g);case"D":return u.$D;case"DD":return v.s(u.$D,2,"0");case"d":return String(u.$W);case"dd":return _(o.weekdaysMin,u.$W,E,2);case"ddd":return _(o.weekdaysShort,u.$W,E,3);case"dddd":return E[u.$W];case"H":return String(c);case"HH":return v.s(c,2,"0");case"h":return P(1);case"hh":return P(2);case"a":return Y(c,m,!0);case"A":return Y(c,m,!1);case"m":return String(m);case"mm":return v.s(m,2,"0");case"s":return String(u.$s);case"ss":return v.s(u.$s,2,"0");case"SSS":return v.s(u.$ms,3,"0");case"Z":return r}return null})(N)||r.replace(":","")}))},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(i,u,o){var p,r=this,c=v.p(u),m=$(i),g=(m.utcOffset()-this.utcOffset())*s,E=this-m,F=function(){return v.m(r,m)};switch(c){case S:p=F()/12;break;case w:p=F();break;case M:p=F()/3;break;case C:p=(E-g)/6048e5;break;case b:p=(E-g)/864e5;break;case k:p=E/a;break;case D:p=E/s;break;case h:p=E/n;break;default:p=E}return o?p:v.a(p)},l.daysInMonth=function(){return this.endOf(w).$D},l.$locale=function(){return U[this.$L]},l.locale=function(i,u){if(!i)return this.$L;var o=this.clone(),p=q(i,u,!0);return p&&(o.$L=p),o},l.clone=function(){return v.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},f})(),X=Z.prototype;return $.prototype=X,[["$ms",d],["$s",h],["$m",D],["$H",k],["$W",b],["$M",w],["$y",S],["$D",L]].forEach((function(f){X[f[1]]=function(l){return this.$g(l,f[0],f[1])}})),$.extend=function(f,l){return f.$i||(f(l,Z,$),f.$i=!0),$},$.locale=q,$.isDayjs=z,$.unix=function(f){return $(1e3*f)},$.en=U[A],$.Ls=U,$.p={},$}))})(se)),se.exports}var Ue=Re();const I=Ce(Ue),We=(e,t)=>{let n;switch(t.type){case"SET_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+t.newOffset),{...e,offset:t.newOffset,shownDate:n};case"ADD_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+e.offset+t.addedOffset),{...e,offset:e.offset+t.addedOffset,shownDate:n};case"SET_SELECTED_DATE":return ye(t.newDate);default:return e}},ye=e=>({selectedDate:e,offset:0,shownDate:e}),He=/^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/,Ke=/^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;function Ve(e){const t=`${e.getDate()}`.padStart(2,"0"),n=`${e.getMonth()+1}`.padStart(2,"0");return`${t}.${n}.${e.getFullYear()}`}const Ge=e=>{const t=He.exec(e);if(t)return t.slice(1,4);const n=Ke.exec(e);if(!n)return;const s=n.slice(1,4);return s.reverse(),s};function Q(e){if(!e)return;const t=Ge(e);if(!t)return;const n=Number.parseInt(new Date().toLocaleString("no-NB",{year:"2-digit"})),s=b=>b>n?b+1900:b+2e3,a=Number.parseInt(t[0],10),d=Number.parseInt(t[1],10)-1,h=Number.parseInt(t[2],10),D=h>99?h:s(h),k=new Date(D,d,a,0,0,0);return k.getMonth()===d&&k.getFullYear()===D?k:void 0}function de(...e){return t=>e.some(n=>(n?.(t),t.defaultPrevented))}function ke({calendars:e,offset:t,minDate:n}){if(t>1&&n){const{firstDayOfMonth:s}=e[0],a=I(n).diff(s,"months");a<t&&(t=a)}return t}const ue=3;function Je(e,t,n,s){if(t&&t.getFullYear()>e)return[t.getFullYear().toString()];if(n&&n.getFullYear()<e)return[n.getFullYear().toString()];let a=!1,d,h;s==="all"?(a=!0,d=ue,h=ue):(d=typeof s=="number"?s:s.previous,h=typeof s=="number"?s:s.coming);let D=e-d;if(t){const M=a?t.getFullYear():D;D=Math.max(t.getFullYear(),M)}let k=e+h;if(n){const M=a?n.getFullYear():k;k=Math.min(n.getFullYear(),M)}const b=Math.max(k-D+1,1);return[...Array(b).keys()].map(M=>M+D).map(M=>M.toString())}function ze(e,t,n,s){const a=n?.getFullYear()||e,d=n?.getMonth()===void 0?0:n.getMonth(),h=s?.getFullYear()||e,D=s?.getMonth()===void 0?11:s.getMonth();let k=0,b=11;return a===e&&(k=d),h===e&&(b=D),t.map((w,M)=>({value:M.toString(),label:w})).filter(({value:w})=>Number.parseInt(w)>=k&&Number.parseInt(w)<=b)}function be({calendars:e,offset:t,maxDate:n}){if(t>1&&n){const{lastDayOfMonth:s}=e[e.length-1],a=I(n).diff(s,"months");a<t&&(t=a)}return t}function we({calendars:e,minDate:t}){return t?I(e[0].firstDayOfMonth).subtract(1,"day").isBefore(t):!1}function Me({calendars:e,maxDate:t}){return t?I(e.at(-1)?.lastDayOfMonth).add(1,"day").isAfter(t):!1}function Ze({date:e,selected:t,monthsToDisplay:n,offset:s,minDate:a,maxDate:d,firstDayOfWeek:h,showOutsideDays:D}){const k=[],b=Qe(e,a,d);for(let C=0;C<n;C++){const w=Xe({month:b.getMonth()+C+s,year:b.getFullYear(),selectedDates:t,minDate:a,maxDate:d,firstDayOfWeek:h,showOutsideDays:D});k.push(w)}return k}function Qe(e,t,n){let s=I(e).startOf("day");if(t){const a=I(t).startOf("day");s.isBefore(a)&&(s=a)}if(n){const a=I(n).startOf("day");s.isAfter(a)&&(s=a)}return s.toDate()}function Xe({month:e,year:t,selectedDates:n,minDate:s,maxDate:a,firstDayOfWeek:d,showOutsideDays:h}){const D=nt(e,t),k=D.daysInMonth;e=D.month,t=D.year;const b=[];for(let x=1;x<=k;x++){const j=new Date(t,e,x),K={date:j,selected:ce(n,j),selectable:fe(s,a,j),today:I().isSame(j,"day"),prevMonth:!1,nextMonth:!1};b.push(K)}const C=new Date(t,e,1),w=new Date(t,e,k),M=et({firstDayOfMonth:C,minDate:s,maxDate:a,selectedDates:n,firstDayOfWeek:d,showOutsideDays:h}),S=tt({lastDayOfMonth:w,minDate:s,maxDate:a,selectedDates:n,firstDayOfWeek:d,showOutsideDays:h});b.unshift(...M),b.push(...S);const L=rt(b);return{firstDayOfMonth:C,lastDayOfMonth:w,month:e,year:t,weeks:L}}function et({firstDayOfMonth:e,minDate:t,maxDate:n,selectedDates:s,firstDayOfWeek:a,showOutsideDays:d}){const h=[];let D=(e.getDay()+7-a)%7;if(d){const k=I(e).subtract(1,"day"),b=k.date(),C=k.month(),w=k.year();let M=0;for(;M<D;){const S=new Date(w,C,b-M),L={date:S,selected:ce(s,S),selectable:fe(t,n,S),today:!1,prevMonth:!0,nextMonth:!1};h.unshift(L),M++}}else for(;D>0;)h.unshift(""),D--;return h}function tt({lastDayOfMonth:e,minDate:t,maxDate:n,selectedDates:s,firstDayOfWeek:a,showOutsideDays:d}){const h=[];let D=(e.getDay()+7-a)%7;if(d){const k=I(e).add(1,"day"),b=k.month(),C=k.year();let w=0;for(;w<6-D;){const M=new Date(C,b,1+w),S={date:M,selected:ce(s,M),selectable:fe(t,n,M),today:!1,prevMonth:!1,nextMonth:!0};h.push(S),w++}}else for(;D<6;)h.push(""),D++;return h}function nt(e,t){const n=new Date(t,e,1),s=n.getMonth(),a=n.getFullYear();return{daysInMonth:32-new Date(a,s,32).getDate(),month:s,year:a}}function rt(e){const t=Math.ceil(e.length/7),n=[];for(let s=0;s<t;s++){n[s]=[];for(let a=0;a<7;a++)n[s].push(e[s*7+a])}return n}function ce(e,t){return e?(Array.isArray(e)?e:[e]).some(s=>s instanceof Date&&I(s).startOf("day").valueOf()===I(t).startOf("day").valueOf()):!1}function fe(e,t,n){return!(e&&I(n).isBefore(e)||t&&I(n).isAfter(t))}function ve(e,t,n){return!!(n&&e>n||t&&e<t)}function at(e,t,n,s){const a=Q(e),d=Q(t);return a?ve(a,n,s)?null:a:d?ve(d,n,s)?null:d:null}function De(e,t,n,s){let a=e||t||new Date;return n&&(a=n>a?n:a),s&&(a=s<a?s:a),a}function Oe(e){return e!==void 0}function st(e,t){return Oe(e)?e:t}function it(e,{onClick:t,dateObj:n}){return{onClick:de(t,s=>{e(n,s)}),disabled:!n.selectable,"aria-pressed":n.selected,role:"button"}}function ot({minDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:s,offset:a=1,calendars:d}){const h=`Gå tilbake ${a} måned${a===1?"":"er"}`;return{onClick:de(s,()=>{n(t-ke({calendars:d,offset:a,minDate:e}))}),disabled:we({calendars:d,minDate:e}),"aria-label":h,title:h}}function lt({maxDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:s,offset:a=1,calendars:d}){const h=`Gå frem ${a} måned${a===1?"":"er"}`;return{onClick:de(s,()=>{n(t+be({calendars:d,offset:a,maxDate:e}))}),disabled:Me({calendars:d,maxDate:e}),"aria-label":h,title:h}}function ut({date:e=I().startOf("day").toDate(),maxDate:t,minDate:n,monthsToDisplay:s=1,firstDayOfWeek:a=0,showOutsideDays:d=!0,offset:h,onDateSelected:D,onOffsetChanged:k,selected:b}){const[C,w]=T.useState(0),M=st(h,C);function S(x){Oe(h)||w(x),k(x)}return{calendars:Ze({date:e,selected:b,monthsToDisplay:s,minDate:n,maxDate:t,offset:M,firstDayOfWeek:a,showOutsideDays:d}),getDateProps:it.bind(null,D),getBackProps:ot.bind(null,{minDate:n,offsetMonth:M,handleOffsetChanged:S}),getForwardProps:lt.bind(null,{maxDate:t,offsetMonth:M,handleOffsetChanged:S}),handleOffsetChanged:S}}const dt=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],ct=["man","tir","ons","tor","fre","lør","søn"],me=T.forwardRef((e,t)=>{const{date:n,defaultSelected:s,minDate:a,maxDate:d,days:h=ct,months:D=dt,monthLabel:k="Velg måned",yearLabel:b="Velg år",yearsToShow:C=ue,onTabOutside:w,...M}=e,S=Ae("jkl-calendar"),[{offset:L,selectedDate:x,shownDate:j},K]=T.useReducer(We,De(n,s,a,d),ye),te=j.getMonth(),J=j.getFullYear();T.useEffect(()=>{K({type:"SET_SELECTED_DATE",newDate:De(n,s,a,d)})},[n,s,a,d]);const ne=T.useCallback(r=>{K({type:"SET_OFFSET",newOffset:r})},[]),{calendars:A,getBackProps:U,getDateProps:W,getForwardProps:z,handleOffsetChanged:q}=ut({date:x,selected:x,minDate:a,maxDate:d,offset:L,onOffsetChanged:ne,firstDayOfWeek:1,...M}),$=T.useRef(null),v=T.useCallback(r=>{if(!$.current)return;const c=document.activeElement,m=$.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),g=async E=>{c?.setAttribute("tabindex","-1"),E.setAttribute("tabindex","0"),E.focus()};m.forEach((E,F)=>{const B=F+r;if(E===c)if(B<=m.length-1&&B>=0)g(m[B]);else if(r<0){if(we({calendars:A,minDate:a})||(le.flushSync(()=>{q(L-ke({calendars:A,offset:1,minDate:a}))}),!$.current))return;const _=$.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');_[_.length+B]&&(_[0].setAttribute("tabindex","-1"),g(_[_.length+B]))}else{if(Me({calendars:A,maxDate:d})||(le.flushSync(()=>{q(L+be({calendars:A,offset:1,maxDate:d}))}),!$.current))return;const _=$.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');_[B-m.length]&&(_[0].setAttribute("tabindex","-1"),g(_[B-m.length]))}})},[q,L,A,d,a]),Z=T.useCallback(r=>{switch(r.key){case"ArrowUp":v(-7),r.preventDefault();break;case"ArrowRight":v(1),r.preventDefault();break;case"ArrowDown":v(7),r.preventDefault();break;case"ArrowLeft":v(-1),r.preventDefault();break}},[v]),X=T.useCallback(r=>{if(r.key!=="Tab")return;const c=$.current?.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!c)return;const m=c[0],g=c[c.length-1];!r.shiftKey&&document.activeElement===g?(m.focus(),r.preventDefault()):r.shiftKey&&document.activeElement===m&&(g.focus(),r.preventDefault())},[]),f=T.useCallback(r=>{const{date:c,selected:m,selectable:g,prevMonth:E,nextMonth:F}=r;return g?!!(m||c.toString()===a?.toString()||!E&&!F&&j.getFullYear()===c.getFullYear()&&x.getMonth()!==c.getMonth()&&c.getDate()===1):!1},[j,a,x]),l=T.useCallback(()=>{a&&j.getFullYear()-a.getFullYear()===0&&j.getMonth()-a.getMonth()===1?document.querySelector(`[data-testid="${S}-forward-button"]`)?.focus():d&&d.getFullYear()-j.getFullYear()===0&&d.getMonth()-j.getMonth()===1&&document.querySelector(`[data-testid="${S}-back-button"]`)?.focus()},[a,d,j,S]),i=T.useCallback(r=>{if(r.target.value.length!==4)return;const c=Number.parseInt(r.target.value);if(Number.isNaN(c))return;let m=(c-j.getFullYear())*12;const g=new Date(j.getFullYear(),j.getMonth()+m,j.getDate());d&&d.getFullYear()===g.getFullYear()&&d.getMonth()<g.getMonth()?m-=g.getMonth()-d.getMonth():a&&a.getFullYear()===g.getFullYear()&&a.getMonth()>g.getMonth()&&(m+=a.getMonth()-g.getMonth()),K({type:"ADD_OFFSET",addedOffset:m})},[j,a,d]),u=T.useCallback(r=>{if(!x&&!n)return;const c=j.getFullYear()-(x||new Date).getFullYear(),m=Number.parseInt(r.target.value)-(x||new Date).getMonth();K({type:"SET_OFFSET",newOffset:c*12+m})},[x,n,j]),o=Je(J,a,d,C),p=ze(J,D,a,d);return y.jsx("div",{ref:t,id:S,className:"jkl-calendar","data-testid":"jkl-calendar",children:y.jsxs("div",{className:"jkl-calendar__padding",ref:$,onKeyDown:X,children:[y.jsxs("fieldset",{className:"jkl-calendar-navigation",children:[y.jsxs("div",{children:[y.jsx(pe,{...U({calendars:A,onClick:l}),"data-testid":`${S}-back-button`,variant:"ghost",icon:y.jsx(Pe,{variant:"medium",bold:!0})}),y.jsx(pe,{...z({calendars:A,onClick:l}),variant:"ghost","data-testid":`${S}-forward-button`,icon:y.jsx(qe,{variant:"medium",bold:!0})})]}),y.jsxs("div",{children:[y.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[y.jsx("select",{onChange:u,className:"jkl-calendar-navigation-dropdown__select","aria-label":k,value:te.toString(),children:p.map(({label:r,value:c})=>y.jsx("option",{value:c,children:r},c))}),y.jsx(ge,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]}),y.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[y.jsx("select",{onChange:i,className:"jkl-calendar-navigation-dropdown__select","aria-label":b,value:J.toString(),children:o.map(r=>y.jsx("option",{value:r,children:r},r))}),y.jsx(ge,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]})]})]}),A.map(r=>y.jsxs("table",{className:"jkl-calendar-table","data-testid":"jkl-datepicker-calendar",children:[y.jsxs("caption",{className:"jkl-sr-only",children:[D[r.month],", ",r.year]}),y.jsx("thead",{children:y.jsx("tr",{children:h.map(c=>y.jsx("th",{children:c},`${r.month}${r.year}${c}`))})}),y.jsx("tbody",{"data-testid":"jkl-datepicker-dates",children:r.weeks.map((c,m)=>y.jsx("tr",{children:c.map((g,E)=>{const F=`${r.month}${r.year}${m}${E}`;if(typeof g=="string")return y.jsx("td",{className:"jkl-calendar__date jkl-calendar__date--empty",children:g},F);const{date:B,selectable:_,today:P,prevMonth:Y,nextMonth:N}=g;return y.jsx("td",{children:y.jsx("button",{...W({dateObj:g}),type:"button",className:"jkl-calendar-date-button",tabIndex:f(g)?0:-1,"aria-label":`${B.getDate()}. ${D[B.getMonth()].toLowerCase()}`,"aria-current":P?"date":void 0,"data-adjacent":Y||N?"true":void 0,disabled:!_,onKeyDown:Z,children:y.jsx("span",{"aria-hidden":"true",children:B.getDate()})})},F)})},`${r.month}${r.year}${m}`))})]},`${r.month}${r.year}`))]})})});me.displayName="Calendar";me.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{date:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},defaultSelected:{required:!1,tsType:{name:"Date"},description:""},days:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},months:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},monthLabel:{required:!1,tsType:{name:"string"},description:""},yearLabel:{required:!1,tsType:{name:"string"},description:""},yearsToShow:{required:!1,tsType:{name:"union",raw:'number | "all" | { previous: number; coming: number }',elements:[{name:"number"},{name:"literal",value:'"all"'},{name:"signature",type:"object",raw:"{ previous: number; coming: number }",signature:{properties:[{key:"previous",value:{name:"number",required:!0}},{key:"coming",value:{name:"number",required:!0}}]}}]},description:""},onTabOutside:{required:!0,tsType:{name:"ReactKeyboardEventHandler",raw:"React.KeyboardEventHandler"},description:""}},composes:["Omit"]};function ft(e,t,n={inclusive:!1}){const s=typeof e=="string"?Q(e):e;return s?n.inclusive?s>=t:s>t:!1}function mt(e,t,n={inclusive:!1}){const s=typeof e=="string"?Q(e):e;return s?n.inclusive?s<=t:s<t:!1}const ie=T.forwardRef((e,t)=>{const{"data-testautoid":n,id:s,className:a="",label:d="Velg dato",labelProps:h,defaultValue:D,defaultShow:k=!1,value:b,disableBeforeDate:C,disableAfterDate:w,yearsToShow:M,name:S,helpLabel:L,errorLabel:x,invalid:j,days:K,months:te,monthLabel:J,yearLabel:ne,placeholder:A="dd.mm.åååå",width:U="11.25rem",onChange:W,onBlur:z,onFocus:q,onKeyDown:$,action:v,showCalendarLabel:Z="Åpne kalender",hideCalendarLabel:X="Lukk kalender",supportLabelProps:f,tooltip:l,textInputProps:i,description:u,...o}=e,p=Q(C),r=p?I(p).startOf("day").toDate():void 0,c=Q(w),m=c?I(c).startOf("day").toDate():void 0,[g,E]=T.useState(at(b,D,r,m)),[F,B]=T.useState(null),[_,P]=T.useState(k),Y=T.useRef(null),N=T.useRef(null),V=T.useRef(null),G=T.useRef(null),ee=T.useCallback(O=>{G.current=O,t&&(typeof t=="function"?t(O):t.current=O)},[t]),Se=T.useCallback(O=>{if(!q||!N.current)return;N.current.contains(O.relatedTarget)||q(O,g,{error:F,value:O.target.value})},[q,g,F]),Te=T.useCallback(O=>{z&&z(O,g,{error:F,value:O.target.value})},[z,g,F]),$e=T.useCallback(O=>{O.key==="Escape"&&(P(!1),O.preventDefault(),O.stopPropagation()),v?.onKeyDown&&v.onKeyDown(O)},[v]),Ee=T.useCallback(O=>{let R=null,H=null;if(O.target.value){const re=Q(O.target.value);re?r&&!ft(re,r)?H="OUTSIDE_LOWER_BOUND":m&&!mt(re,m)?H="OUTSIDE_UPPER_BOUND":P(!1):H="WRONG_FORMAT",R=re||null}B(H),E(R),W&&W(O,R,{error:H,value:O.target.value})},[W,r,m]),_e=T.useCallback(O=>{le.flushSync(()=>{P(!_)});const R=Y.current,H=R&&R.querySelector('[aria-pressed="true"]');window.requestAnimationFrame(()=>H?.focus()),v?.onClick&&v.onClick(O)},[_,v]),je=T.useCallback(({date:O})=>{if(P(!1),E(O),G.current){const R=G.current;R.value=Ve(O);const H=document.createEvent("HTMLEvents");H.initEvent("input",!0,!1),R.dispatchEvent(H),R.focus(),W&&W(H,O,{error:null,value:R.value})}},[W]),Fe=T.useCallback(O=>{O.preventDefault(),P(!1),V.current?.focus()},[]);return y.jsx(Le,{id:s,className:xe("jkl-datepicker",a),...o,ref:N,label:d,labelProps:h,helpLabel:L,errorLabel:x,supportLabelProps:f,tooltip:l,description:u,render:O=>y.jsx(Ie,{"data-focused":_?"true":void 0,ref:ee,"data-testid":"jkl-datepicker__input","data-testautoid":n,className:"jkl-datepicker__input",name:S,defaultValue:D,value:b,type:"text",placeholder:A,width:U,onFocus:Se,onBlur:Te,onChange:Ee,actionButton:y.jsxs(oe,{positionReference:G,open:_,onOpenChange:()=>P(!_),offset:8,children:[y.jsx(oe.Trigger,{...v,"data-testid":"jkl-datepicker__trigger",className:"jkl-text-input-action-button",title:_?X:Z,tabIndex:0,onClick:_e,onKeyDown:$e,asChild:!0,children:y.jsx(Be,{children:y.jsx(Ne,{})})}),y.jsx(oe.Content,{initialFocus:-1,padding:24,children:y.jsx(me,{ref:Y,date:g,minDate:r,maxDate:m,days:K,months:te,monthLabel:J,yearLabel:ne,yearsToShow:M,onDateSelected:je,onTabOutside:Fe})})]}),...i,...O,"aria-invalid":j||!!x})})});ie.displayName="DatePicker";ie.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},className:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},label:{required:!1,tsType:{name:"string"},description:'@default "Velg dato"'},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"LabelProps"},{name:"literal",value:'"children"'}],raw:'Omit<LabelProps, "children">'},description:"Bruk labelProps for å sette props som `variant` og `srOnly`.\n\n@example\n ```tsx\n <DatePicker\n     labelProps={{ srOnly: true }}\n />\n ```"},defaultValue:{required:!1,tsType:{name:"string"},description:`dd.mm.åååå

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
NB! Brukes kun i tilfeller der valideringsfeil dukker opp andre steder, for eksempel i en FieldGroup.`},extended:{required:!1,tsType:{name:"boolean"},description:`@deprecated Kalenderen viser nå alltid kontroller for å navigere mellom år og måneder.
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
>`},description:"Props som sendes direkte til komponentens TextInput"}},composes:["Omit"]};const It={title:"Komponenter/DatePicker",component:ie,args:{action:{disabled:!1},days:["M","T","O","T","F","L","S"],defaultShow:!1,defaultValue:new Date().toLocaleDateString("no",{day:"2-digit",month:"2-digit",year:"numeric"}),disableBeforeDate:new Date(new Date().setDate(new Date().getDate()-14)).toLocaleDateString("en-US"),disableAfterDate:new Date(new Date().setDate(new Date().getDate()+14)).toLocaleDateString("en-US"),description:"Kortet er gyldig i 3 måneder fra denne datoen",label:"Når skal du reise?",labelProps:{srOnly:!1,variant:"small"},hideCalendarLabel:"Lukk kalender",showCalendarLabel:"Åpne kalender",invalid:!1,months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],monthLabel:"Måned",placeholder:"dd.mm.åååå",yearsToShow:new Date().getFullYear(),yearLabel:"År",textInputProps:{disabled:!1,readOnly:!1}}},ae={args:{},render:e=>y.jsx(ie,{...e,disableBeforeDate:new Date(e.disableBeforeDate||new Date).toLocaleDateString("no"),disableAfterDate:new Date(e.disableAfterDate||new Date).toLocaleDateString("no")})};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <DatePickerComponent {...args} disableBeforeDate={new Date(args.disableBeforeDate || new Date()).toLocaleDateString("no")} disableAfterDate={new Date(args.disableAfterDate || new Date()).toLocaleDateString("no")} />
}`,...ae.parameters?.docs?.source}}};const At=["DatePicker"];export{ae as DatePicker,At as __namedExportsOrder,It as default};
