import{g as He,r as S,j as f,R as me}from"./iframe-Cw_cXWtk.js";import{c as We}from"./clsx-B-dksMZM.js";import{r as pe}from"./index-4y11HJfe.js";import{I as Ve}from"./IconButton-D0AuCslB.js";import{C as Ke}from"./CalendarIcon-BxacIU3c.js";import{I as Ge}from"./InputGroup-BHWirV1l.js";import{P as fe}from"./Popover-BSgQIU3E.js";import{B as ze}from"./BaseTextInput-Bv9S9FqV.js";import{u as Je}from"./useId-O4j-bVKQ.js";import{B as De}from"./Button-D_cgSgo1.js";import{A as Ze,a as Qe}from"./ArrowRightIcon-DVE5l78-.js";import{C as be}from"./ChevronDownIcon-C7AlO3ma.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Yue_wdKb.js";import"./Icon-DOEkfrNC.js";import"./Label-Cl6WyKNe.js";import"./SupportLabel-o3Rb0Ipa.js";import"./WarningIcon-CiE7w4SM.js";import"./floating-ui.react-6ZG8p3No.js";import"./getThemeAndSize-CIzqY74s.js";import"./usePreviousValue-BmElpLSU.js";import"./Loader-Bc6bPkjc.js";import"./useDelayedRender-Dp6hD_aN.js";const we={full:/^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])(\d{2}|\d{4})$/,partial:/^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])?(\d{1,4})?$/};function Me(e,t){const n=e.replace(/\D/g,""),r=t?.partial?we.partial:we.full,a=n.match(r);return a?a.slice(1).filter(Boolean).join("."):e}var ue={exports:{}},Xe=ue.exports,Te;function et(){return Te||(Te=1,(function(e,t){(function(n,r){e.exports=r()})(Xe,(function(){var n=1e3,r=6e4,a=36e5,u="millisecond",g="second",k="minute",b="hour",D="day",E="week",w="month",M="quarter",T="year",A="date",B="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,W=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ne={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(m){var l=["th","st","nd","rd"],i=m%100;return"["+m+(l[(i-20)%10]||l[i]||l[0])+"]"}},J=function(m,l,i){var d=String(m);return!d||d.length>=l?m:""+Array(l+1-d.length).join(i)+m},ae={s:J,z:function(m){var l=-m.utcOffset(),i=Math.abs(l),d=Math.floor(i/60),o=i%60;return(l<=0?"+":"-")+J(d,2,"0")+":"+J(o,2,"0")},m:function m(l,i){if(l.date()<i.date())return-m(i,l);var d=12*(i.year()-l.year())+(i.month()-l.month()),o=l.clone().add(d,w),h=i-o<0,s=l.clone().add(d+(h?-1:1),w);return+(-(d+(i-o)/(h?o-s:s-o))||0)},a:function(m){return m<0?Math.ceil(m)||0:Math.floor(m)},p:function(m){return{M:w,y:T,w:E,d:D,D:A,h:b,m:k,s:g,ms:u,Q:M}[m]||String(m||"").toLowerCase().replace(/s$/,"")},u:function(m){return m===void 0}},N="en",Y={};Y[N]=ne;var U="$isDayjsObject",Z=function(m){return m instanceof X||!(!m||!m[U])},R=function m(l,i,d){var o;if(!l)return N;if(typeof l=="string"){var h=l.toLowerCase();Y[h]&&(o=h),i&&(Y[h]=i,o=h);var s=l.split("-");if(!o&&s.length>1)return m(s[0])}else{var c=l.name;Y[c]=l,o=c}return!d&&o&&(N=o),o||!d&&N},x=function(m,l){if(Z(m))return m.clone();var i=typeof l=="object"?l:{};return i.date=m,i.args=arguments,new X(i)},y=ae;y.l=R,y.i=Z,y.w=function(m,l){return x(m,{locale:l.$L,utc:l.$u,x:l.$x,$offset:l.$offset})};var X=(function(){function m(i){this.$L=R(i.locale,null,!0),this.parse(i),this.$x=this.$x||i.x||{},this[U]=!0}var l=m.prototype;return l.parse=function(i){this.$d=(function(d){var o=d.date,h=d.utc;if(o===null)return new Date(NaN);if(y.u(o))return new Date;if(o instanceof Date)return new Date(o);if(typeof o=="string"&&!/Z$/i.test(o)){var s=o.match($);if(s){var c=s[2]-1||0,p=(s[7]||"0").substring(0,3);return h?new Date(Date.UTC(s[1],c,s[3]||1,s[4]||0,s[5]||0,s[6]||0,p)):new Date(s[1],c,s[3]||1,s[4]||0,s[5]||0,s[6]||0,p)}}return new Date(o)})(i),this.init()},l.init=function(){var i=this.$d;this.$y=i.getFullYear(),this.$M=i.getMonth(),this.$D=i.getDate(),this.$W=i.getDay(),this.$H=i.getHours(),this.$m=i.getMinutes(),this.$s=i.getSeconds(),this.$ms=i.getMilliseconds()},l.$utils=function(){return y},l.isValid=function(){return this.$d.toString()!==B},l.isSame=function(i,d){var o=x(i);return this.startOf(d)<=o&&o<=this.endOf(d)},l.isAfter=function(i,d){return x(i)<this.startOf(d)},l.isBefore=function(i,d){return this.endOf(d)<x(i)},l.$g=function(i,d,o){return y.u(i)?this[d]:this.set(o,i)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(i,d){var o=this,h=!!y.u(d)||d,s=y.p(i),c=function(q,F){var V=y.w(o.$u?Date.UTC(o.$y,F,q):new Date(o.$y,F,q),o);return h?V:V.endOf(D)},p=function(q,F){return y.w(o.toDate()[q].apply(o.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(F)),o)},v=this.$W,C=this.$M,_=this.$D,I="set"+(this.$u?"UTC":"");switch(s){case T:return h?c(1,0):c(31,11);case w:return h?c(1,C):c(0,C+1);case E:var j=this.$locale().weekStart||0,L=(v<j?v+7:v)-j;return c(h?_-L:_+(6-L),C);case D:case A:return p(I+"Hours",0);case b:return p(I+"Minutes",1);case k:return p(I+"Seconds",2);case g:return p(I+"Milliseconds",3);default:return this.clone()}},l.endOf=function(i){return this.startOf(i,!1)},l.$set=function(i,d){var o,h=y.p(i),s="set"+(this.$u?"UTC":""),c=(o={},o[D]=s+"Date",o[A]=s+"Date",o[w]=s+"Month",o[T]=s+"FullYear",o[b]=s+"Hours",o[k]=s+"Minutes",o[g]=s+"Seconds",o[u]=s+"Milliseconds",o)[h],p=h===D?this.$D+(d-this.$W):d;if(h===w||h===T){var v=this.clone().set(A,1);v.$d[c](p),v.init(),this.$d=v.set(A,Math.min(this.$D,v.daysInMonth())).$d}else c&&this.$d[c](p);return this.init(),this},l.set=function(i,d){return this.clone().$set(i,d)},l.get=function(i){return this[y.p(i)]()},l.add=function(i,d){var o,h=this;i=Number(i);var s=y.p(d),c=function(C){var _=x(h);return y.w(_.date(_.date()+Math.round(C*i)),h)};if(s===w)return this.set(w,this.$M+i);if(s===T)return this.set(T,this.$y+i);if(s===D)return c(1);if(s===E)return c(7);var p=(o={},o[k]=r,o[b]=a,o[g]=n,o)[s]||1,v=this.$d.getTime()+i*p;return y.w(v,this)},l.subtract=function(i,d){return this.add(-1*i,d)},l.format=function(i){var d=this,o=this.$locale();if(!this.isValid())return o.invalidDate||B;var h=i||"YYYY-MM-DDTHH:mm:ssZ",s=y.z(this),c=this.$H,p=this.$m,v=this.$M,C=o.weekdays,_=o.months,I=o.meridiem,j=function(F,V,K,te){return F&&(F[V]||F(d,h))||K[V].slice(0,te)},L=function(F){return y.s(c%12||12,F,"0")},q=I||function(F,V,K){var te=F<12?"AM":"PM";return K?te.toLowerCase():te};return h.replace(W,(function(F,V){return V||(function(K){switch(K){case"YY":return String(d.$y).slice(-2);case"YYYY":return y.s(d.$y,4,"0");case"M":return v+1;case"MM":return y.s(v+1,2,"0");case"MMM":return j(o.monthsShort,v,_,3);case"MMMM":return j(_,v);case"D":return d.$D;case"DD":return y.s(d.$D,2,"0");case"d":return String(d.$W);case"dd":return j(o.weekdaysMin,d.$W,C,2);case"ddd":return j(o.weekdaysShort,d.$W,C,3);case"dddd":return C[d.$W];case"H":return String(c);case"HH":return y.s(c,2,"0");case"h":return L(1);case"hh":return L(2);case"a":return q(c,p,!0);case"A":return q(c,p,!1);case"m":return String(p);case"mm":return y.s(p,2,"0");case"s":return String(d.$s);case"ss":return y.s(d.$s,2,"0");case"SSS":return y.s(d.$ms,3,"0");case"Z":return s}return null})(F)||s.replace(":","")}))},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(i,d,o){var h,s=this,c=y.p(d),p=x(i),v=(p.utcOffset()-this.utcOffset())*r,C=this-p,_=function(){return y.m(s,p)};switch(c){case T:h=_()/12;break;case w:h=_();break;case M:h=_()/3;break;case E:h=(C-v)/6048e5;break;case D:h=(C-v)/864e5;break;case b:h=C/a;break;case k:h=C/r;break;case g:h=C/n;break;default:h=C}return o?h:y.a(h)},l.daysInMonth=function(){return this.endOf(w).$D},l.$locale=function(){return Y[this.$L]},l.locale=function(i,d){if(!i)return this.$L;var o=this.clone(),h=R(i,d,!0);return h&&(o.$L=h),o},l.clone=function(){return y.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},m})(),ee=X.prototype;return x.prototype=ee,[["$ms",u],["$s",g],["$m",k],["$H",b],["$W",D],["$M",w],["$y",T],["$D",A]].forEach((function(m){ee[m[1]]=function(l){return this.$g(l,m[0],m[1])}})),x.extend=function(m,l){return m.$i||(m(l,X,x),m.$i=!0),x},x.locale=R,x.isDayjs=Z,x.unix=function(m){return x(1e3*m)},x.en=Y[N],x.Ls=Y,x.p={},x}))})(ue)),ue.exports}var tt=et();const P=He(tt),nt=(e,t)=>{let n;switch(t.type){case"SET_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+t.newOffset),{...e,offset:t.newOffset,shownDate:n};case"ADD_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+e.offset+t.addedOffset),{...e,offset:e.offset+t.addedOffset,shownDate:n};case"SET_SELECTED_DATE":return Ce(t.newDate);default:return e}},Ce=e=>({selectedDate:e,offset:0,shownDate:e}),at=/^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/,rt=/^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;function re(e){const t=`${e.getDate()}`.padStart(2,"0"),n=`${e.getMonth()+1}`.padStart(2,"0");return`${t}.${n}.${e.getFullYear()}`}const st=e=>{const t=at.exec(e);if(t)return t.slice(1,4);const n=rt.exec(e);if(!n)return;const r=n.slice(1,4);return r.reverse(),r};function Q(e){if(!e)return;const t=st(e);if(!t)return;const n=Number.parseInt(new Date().toLocaleString("no-NB",{year:"2-digit"})),r=D=>D>n?D+1900:D+2e3,a=Number.parseInt(t[0],10),u=Number.parseInt(t[1],10)-1,g=Number.parseInt(t[2],10),k=g>99?g:r(g),b=new Date(k,u,a,0,0,0);return b.getMonth()===u&&b.getFullYear()===k?b:void 0}function he(...e){return t=>e.some(n=>(n?.(t),t.defaultPrevented))}function Ee({calendars:e,offset:t,minDate:n}){if(t>1&&n){const{firstDayOfMonth:r}=e[0],a=P(n).diff(r,"months");a<t&&(t=a)}return t}const ge=3;function it(e,t,n,r){if(t&&t.getFullYear()>e)return[t.getFullYear().toString()];if(n&&n.getFullYear()<e)return[n.getFullYear().toString()];let a=!1,u,g;r==="all"?(a=!0,u=ge,g=ge):(u=typeof r=="number"?r:r.previous,g=typeof r=="number"?r:r.coming);let k=e-u;if(t){const M=a?t.getFullYear():k;k=Math.max(t.getFullYear(),M)}let b=e+g;if(n){const M=a?n.getFullYear():b;b=Math.min(n.getFullYear(),M)}const D=Math.max(b-k+1,1);return[...Array(D).keys()].map(M=>M+k).map(M=>M.toString())}function ot(e,t,n,r){const a=n?.getFullYear()||e,u=n?.getMonth()===void 0?0:n.getMonth(),g=r?.getFullYear()||e,k=r?.getMonth()===void 0?11:r.getMonth();let b=0,D=11;return a===e&&(b=u),g===e&&(D=k),t.map((w,M)=>({value:M.toString(),label:w})).filter(({value:w})=>Number.parseInt(w)>=b&&Number.parseInt(w)<=D)}function je({calendars:e,offset:t,maxDate:n}){if(t>1&&n){const{lastDayOfMonth:r}=e[e.length-1],a=P(n).diff(r,"months");a<t&&(t=a)}return t}function $e({calendars:e,minDate:t}){return t?P(e[0].firstDayOfMonth).subtract(1,"day").isBefore(t):!1}function _e({calendars:e,maxDate:t}){return t?P(e.at(-1)?.lastDayOfMonth).add(1,"day").isAfter(t):!1}function lt({date:e,selected:t,monthsToDisplay:n,offset:r,minDate:a,maxDate:u,firstDayOfWeek:g,showOutsideDays:k}){const b=[],D=ut(e,a,u);for(let E=0;E<n;E++){const w=dt({month:D.getMonth()+E+r,year:D.getFullYear(),selectedDates:t,minDate:a,maxDate:u,firstDayOfWeek:g,showOutsideDays:k});b.push(w)}return b}function ut(e,t,n){let r=P(e).startOf("day");if(t){const a=P(t).startOf("day");r.isBefore(a)&&(r=a)}if(n){const a=P(n).startOf("day");r.isAfter(a)&&(r=a)}return r.toDate()}function dt({month:e,year:t,selectedDates:n,minDate:r,maxDate:a,firstDayOfWeek:u,showOutsideDays:g}){const k=ft(e,t),b=k.daysInMonth;e=k.month,t=k.year;const D=[];for(let B=1;B<=b;B++){const $=new Date(t,e,B),W={date:$,selected:ve(n,$),selectable:ye(r,a,$),today:P().isSame($,"day"),prevMonth:!1,nextMonth:!1};D.push(W)}const E=new Date(t,e,1),w=new Date(t,e,b),M=ct({firstDayOfMonth:E,minDate:r,maxDate:a,selectedDates:n,firstDayOfWeek:u,showOutsideDays:g}),T=mt({lastDayOfMonth:w,minDate:r,maxDate:a,selectedDates:n,firstDayOfWeek:u,showOutsideDays:g});D.unshift(...M),D.push(...T);const A=pt(D);return{firstDayOfMonth:E,lastDayOfMonth:w,month:e,year:t,weeks:A}}function ct({firstDayOfMonth:e,minDate:t,maxDate:n,selectedDates:r,firstDayOfWeek:a,showOutsideDays:u}){const g=[];let k=(e.getDay()+7-a)%7;if(u){const b=P(e).subtract(1,"day"),D=b.date(),E=b.month(),w=b.year();let M=0;for(;M<k;){const T=new Date(w,E,D-M),A={date:T,selected:ve(r,T),selectable:ye(t,n,T),today:!1,prevMonth:!0,nextMonth:!1};g.unshift(A),M++}}else for(;k>0;)g.unshift(""),k--;return g}function mt({lastDayOfMonth:e,minDate:t,maxDate:n,selectedDates:r,firstDayOfWeek:a,showOutsideDays:u}){const g=[];let k=(e.getDay()+7-a)%7;if(u){const b=P(e).add(1,"day"),D=b.month(),E=b.year();let w=0;for(;w<6-k;){const M=new Date(E,D,1+w),T={date:M,selected:ve(r,M),selectable:ye(t,n,M),today:!1,prevMonth:!1,nextMonth:!0};g.push(T),w++}}else for(;k<6;)g.push(""),k++;return g}function ft(e,t){const n=new Date(t,e,1),r=n.getMonth(),a=n.getFullYear();return{daysInMonth:32-new Date(a,r,32).getDate(),month:r,year:a}}function pt(e){const t=Math.ceil(e.length/7),n=[];for(let r=0;r<t;r++){n[r]=[];for(let a=0;a<7;a++)n[r].push(e[r*7+a])}return n}function ve(e,t){return e?(Array.isArray(e)?e:[e]).some(r=>r instanceof Date&&P(r).startOf("day").valueOf()===P(t).startOf("day").valueOf()):!1}function ye(e,t,n){return!(e&&P(n).isBefore(e)||t&&P(n).isAfter(t))}function Oe(e,t,n){return!!(n&&e>n||t&&e<t)}function gt(e,t,n,r){const a=Q(e),u=Q(t);return a?Oe(a,n,r)?null:a:u?Oe(u,n,r)?null:u:null}function Se(e,t,n,r){let a=e||t||new Date;return n&&(a=n>a?n:a),r&&(a=r<a?r:a),a}function Be(e){return e!==void 0}function ht(e,t){return Be(e)?e:t}function vt(e,{onClick:t,dateObj:n}){return{onClick:he(t,r=>{e(n,r)}),disabled:!n.selectable,"aria-pressed":n.selected,role:"button"}}function yt({minDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:r,offset:a=1,calendars:u}){const g=`Gå tilbake ${a} måned${a===1?"":"er"}`;return{onClick:he(r,()=>{n(t-Ee({calendars:u,offset:a,minDate:e}))}),disabled:$e({calendars:u,minDate:e}),"aria-label":g,title:g}}function kt({maxDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:r,offset:a=1,calendars:u}){const g=`Gå frem ${a} måned${a===1?"":"er"}`;return{onClick:he(r,()=>{n(t+je({calendars:u,offset:a,maxDate:e}))}),disabled:_e({calendars:u,maxDate:e}),"aria-label":g,title:g}}function Dt({date:e=P().startOf("day").toDate(),maxDate:t,minDate:n,monthsToDisplay:r=1,firstDayOfWeek:a=0,showOutsideDays:u=!0,offset:g,onDateSelected:k,onOffsetChanged:b,selected:D}){const[E,w]=S.useState(0),M=ht(g,E);function T(B){Be(g)||w(B),b(B)}return{calendars:lt({date:e,selected:D,monthsToDisplay:r,minDate:n,maxDate:t,offset:M,firstDayOfWeek:a,showOutsideDays:u}),getDateProps:vt.bind(null,k),getBackProps:yt.bind(null,{minDate:n,offsetMonth:M,handleOffsetChanged:T}),getForwardProps:kt.bind(null,{maxDate:t,offsetMonth:M,handleOffsetChanged:T}),handleOffsetChanged:T}}const bt=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],wt=["man","tir","ons","tor","fre","lør","søn"],ke=S.forwardRef((e,t)=>{const{date:n,defaultSelected:r,minDate:a,maxDate:u,days:g=wt,months:k=bt,monthLabel:b="Velg måned",yearLabel:D="Velg år",yearsToShow:E=ge,onTabOutside:w,...M}=e,T=Je("jkl-calendar"),[{offset:A,selectedDate:B,shownDate:$},W]=S.useReducer(nt,Se(n,r,a,u),Ce),ne=$.getMonth(),J=$.getFullYear();S.useEffect(()=>{W({type:"SET_SELECTED_DATE",newDate:Se(n,r,a,u)})},[n,r,a,u]);const ae=S.useCallback(s=>{W({type:"SET_OFFSET",newOffset:s})},[]),{calendars:N,getBackProps:Y,getDateProps:U,getForwardProps:Z,handleOffsetChanged:R}=Dt({date:B,selected:B,minDate:a,maxDate:u,offset:A,onOffsetChanged:ae,firstDayOfWeek:1,...M}),x=S.useRef(null),y=S.useCallback(s=>{if(!x.current)return;const c=document.activeElement,p=x.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),v=async C=>{c?.setAttribute("tabindex","-1"),C.setAttribute("tabindex","0"),C.focus()};p.forEach((C,_)=>{const I=_+s;if(C===c)if(I<=p.length-1&&I>=0)v(p[I]);else if(s<0){if($e({calendars:N,minDate:a})||(pe.flushSync(()=>{R(A-Ee({calendars:N,offset:1,minDate:a}))}),!x.current))return;const j=x.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');j[j.length+I]&&(j[0].setAttribute("tabindex","-1"),v(j[j.length+I]))}else{if(_e({calendars:N,maxDate:u})||(pe.flushSync(()=>{R(A+je({calendars:N,offset:1,maxDate:u}))}),!x.current))return;const j=x.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');j[I-p.length]&&(j[0].setAttribute("tabindex","-1"),v(j[I-p.length]))}})},[R,A,N,u,a]),X=S.useCallback(s=>{switch(s.key){case"ArrowUp":y(-7),s.preventDefault();break;case"ArrowRight":y(1),s.preventDefault();break;case"ArrowDown":y(7),s.preventDefault();break;case"ArrowLeft":y(-1),s.preventDefault();break}},[y]),ee=S.useCallback(s=>{if(s.key!=="Tab")return;const c=x.current?.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!c)return;const p=c[0],v=c[c.length-1];!s.shiftKey&&document.activeElement===v?(p.focus(),s.preventDefault()):s.shiftKey&&document.activeElement===p&&(v.focus(),s.preventDefault())},[]),m=S.useCallback(s=>{const{date:c,selected:p,selectable:v,prevMonth:C,nextMonth:_}=s;return v?!!(p||c.toString()===a?.toString()||!C&&!_&&$.getFullYear()===c.getFullYear()&&B.getMonth()!==c.getMonth()&&c.getDate()===1):!1},[$,a,B]),l=S.useCallback(()=>{a&&$.getFullYear()-a.getFullYear()===0&&$.getMonth()-a.getMonth()===1?document.querySelector(`[data-testid="${T}-forward-button"]`)?.focus():u&&u.getFullYear()-$.getFullYear()===0&&u.getMonth()-$.getMonth()===1&&document.querySelector(`[data-testid="${T}-back-button"]`)?.focus()},[a,u,$,T]),i=S.useCallback(s=>{if(s.target.value.length!==4)return;const c=Number.parseInt(s.target.value);if(Number.isNaN(c))return;let p=(c-$.getFullYear())*12;const v=new Date($.getFullYear(),$.getMonth()+p,$.getDate());u&&u.getFullYear()===v.getFullYear()&&u.getMonth()<v.getMonth()?p-=v.getMonth()-u.getMonth():a&&a.getFullYear()===v.getFullYear()&&a.getMonth()>v.getMonth()&&(p+=a.getMonth()-v.getMonth()),W({type:"ADD_OFFSET",addedOffset:p})},[$,a,u]),d=S.useCallback(s=>{if(!B&&!n)return;const c=$.getFullYear()-(B||new Date).getFullYear(),p=Number.parseInt(s.target.value)-(B||new Date).getMonth();W({type:"SET_OFFSET",newOffset:c*12+p})},[B,n,$]),o=it(J,a,u,E),h=ot(J,k,a,u);return f.jsx("div",{ref:t,id:T,className:"jkl-calendar","data-testid":"jkl-calendar",children:f.jsxs("div",{className:"jkl-calendar__padding",ref:x,onKeyDown:ee,children:[f.jsxs("fieldset",{className:"jkl-calendar-navigation",children:[f.jsxs("div",{children:[f.jsx(De,{...Y({calendars:N,onClick:l}),"data-testid":`${T}-back-button`,variant:"ghost",icon:f.jsx(Ze,{variant:"medium",bold:!0})}),f.jsx(De,{...Z({calendars:N,onClick:l}),variant:"ghost","data-testid":`${T}-forward-button`,icon:f.jsx(Qe,{variant:"medium",bold:!0})})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[f.jsx("select",{onChange:d,className:"jkl-calendar-navigation-dropdown__select","aria-label":b,value:ne.toString(),children:h.map(({label:s,value:c})=>f.jsx("option",{value:c,children:s},c))}),f.jsx(be,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]}),f.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[f.jsx("select",{onChange:i,className:"jkl-calendar-navigation-dropdown__select","aria-label":D,value:J.toString(),children:o.map(s=>f.jsx("option",{value:s,children:s},s))}),f.jsx(be,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]})]})]}),N.map(s=>f.jsxs("table",{className:"jkl-calendar-table","data-testid":"jkl-datepicker-calendar",children:[f.jsxs("caption",{className:"jkl-sr-only",children:[k[s.month],", ",s.year]}),f.jsx("thead",{children:f.jsx("tr",{children:g.map(c=>f.jsx("th",{children:c},`${s.month}${s.year}${c}`))})}),f.jsx("tbody",{"data-testid":"jkl-datepicker-dates",children:s.weeks.map((c,p)=>f.jsx("tr",{children:c.map((v,C)=>{const _=`${s.month}${s.year}${p}${C}`;if(typeof v=="string")return f.jsx("td",{className:"jkl-calendar__date jkl-calendar__date--empty",children:v},_);const{date:I,selectable:j,today:L,prevMonth:q,nextMonth:F}=v;return f.jsx("td",{children:f.jsx("button",{...U({dateObj:v}),type:"button",className:"jkl-calendar-date-button",tabIndex:m(v)?0:-1,"aria-label":`${I.getDate()}. ${k[I.getMonth()].toLowerCase()}`,"aria-current":L?"date":void 0,"data-adjacent":q||F?"true":void 0,disabled:!j,onKeyDown:X,children:f.jsx("span",{"aria-hidden":"true",children:I.getDate()})})},_)})},`${s.month}${s.year}${p}`))})]},`${s.month}${s.year}`))]})})});ke.displayName="Calendar";ke.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{date:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},defaultSelected:{required:!1,tsType:{name:"Date"},description:""},days:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},months:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},monthLabel:{required:!1,tsType:{name:"string"},description:""},yearLabel:{required:!1,tsType:{name:"string"},description:""},yearsToShow:{required:!1,tsType:{name:"union",raw:'number | "all" | { previous: number; coming: number }',elements:[{name:"number"},{name:"literal",value:'"all"'},{name:"signature",type:"object",raw:"{ previous: number; coming: number }",signature:{properties:[{key:"previous",value:{name:"number",required:!0}},{key:"coming",value:{name:"number",required:!0}}]}}]},description:""},onTabOutside:{required:!0,tsType:{name:"ReactKeyboardEventHandler",raw:"React.KeyboardEventHandler"},description:""}},composes:["Omit"]};function Mt(e,t,n={inclusive:!1}){const r=typeof e=="string"?Q(e):e;return r?n.inclusive?r>=t:r>t:!1}function Tt(e,t,n={inclusive:!1}){const r=typeof e=="string"?Q(e):e;return r?n.inclusive?r<=t:r<t:!1}const Ot=(e,t)=>{const n=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value")?.set;n?n.call(e,t):e.value=t},St=e=>{const t=e.replace(/\D/g,""),n=Me(t,{partial:!0}),r=e.replace(/\D+$/,""),a=t.length===8?Me(t):e,u=Q(a)?a:null,g=e!==t&&r===n&&Q(e)===void 0&&u===null;return u??(g?t:e)},xt=({value:e,minDate:t,maxDate:n})=>{if(!e)return{date:null,error:null};const r=Q(e);return r?t&&!Mt(r,t)?{date:r,error:"OUTSIDE_LOWER_BOUND"}:n&&!Tt(r,n)?{date:r,error:"OUTSIDE_UPPER_BOUND"}:{date:r,error:null}:{date:null,error:"WRONG_FORMAT"}},se=S.forwardRef((e,t)=>{const{"data-testautoid":n,id:r,className:a="",label:u="Velg dato",labelProps:g,defaultValue:k,defaultShow:b=!1,value:D,disableBeforeDate:E,disableAfterDate:w,yearsToShow:M,name:T,helpLabel:A,errorLabel:B,invalid:$,days:W,months:ne,monthLabel:J,yearLabel:ae,placeholder:N="dd.mm.åååå",width:Y="11.25rem",onChange:U,onBlur:Z,onFocus:R,onKeyDown:x,action:y,showCalendarLabel:X="Åpne kalender",hideCalendarLabel:ee="Lukk kalender",supportLabelProps:m,tooltip:l,textInputProps:i,description:d,...o}=e,h=Q(E),s=h?P(h).startOf("day").toDate():void 0,c=Q(w),p=c?P(c).startOf("day").toDate():void 0,[v,C]=S.useState(gt(D,k,s,p)),[_,I]=S.useState(null),[j,L]=S.useState(b),q=S.useRef(null),F=S.useRef(null),V=S.useRef(null),K=S.useRef(null),te=S.useCallback(O=>{K.current=O,t&&(typeof t=="function"?t(O):t.current=O)},[t]),Pe=S.useCallback(O=>{if(!R||!F.current)return;F.current.contains(O.relatedTarget)||R(O,v,{error:_,value:O.target.value})},[R,v,_]),Ne=S.useCallback(O=>{Z&&Z(O,v,{error:_,value:O.target.value})},[Z,v,_]),Le=S.useCallback(O=>{O.key==="Escape"&&(L(!1),O.preventDefault(),O.stopPropagation()),y?.onKeyDown&&y.onKeyDown(O)},[y]),Re=S.useCallback(O=>{const H=O.currentTarget.value,G=St(H);G!==H&&Ot(O.currentTarget,G);const{date:de,error:ce}=xt({value:G,minDate:s,maxDate:p});de&&!ce&&L(!1),I(ce),C(de),U&&U(O,de,{error:ce,value:G})},[U,s,p]),qe=S.useCallback(O=>{pe.flushSync(()=>{L(!j)});const H=q.current,G=H&&H.querySelector('[aria-pressed="true"]');window.requestAnimationFrame(()=>G?.focus()),y?.onClick&&y.onClick(O)},[j,y]),Ye=S.useCallback(({date:O})=>{if(L(!1),C(O),K.current){const H=K.current;H.value=re(O);const G=document.createEvent("HTMLEvents");G.initEvent("input",!0,!1),H.dispatchEvent(G),H.focus(),U&&U(G,O,{error:null,value:H.value})}},[U]),Ue=S.useCallback(O=>{O.preventDefault(),L(!1),V.current?.focus()},[]);return f.jsx(Ge,{id:r,className:We("jkl-datepicker",a),...o,ref:F,label:u,labelProps:g,helpLabel:A,errorLabel:B,supportLabelProps:m,tooltip:l,description:d,render:O=>f.jsx(ze,{"data-focused":j?"true":void 0,ref:te,"data-testid":"jkl-datepicker__input","data-testautoid":n,className:"jkl-datepicker__input",name:T,defaultValue:k,value:D,type:"text",placeholder:N,width:Y,onFocus:Pe,onBlur:Ne,onChange:Re,actionButton:f.jsxs(fe,{positionReference:K,open:j,onOpenChange:()=>L(!j),offset:8,children:[f.jsx(fe.Trigger,{...y,"data-testid":"jkl-datepicker__trigger",className:"jkl-text-input-action-button",title:j?ee:X,tabIndex:0,onClick:qe,onKeyDown:Le,asChild:!0,children:f.jsx(Ve,{children:f.jsx(Ke,{})})}),f.jsx(fe.Content,{initialFocus:-1,padding:24,children:f.jsx(ke,{ref:q,date:v,minDate:s,maxDate:p,days:W,months:ne,monthLabel:J,yearLabel:ae,yearsToShow:M,onDateSelected:Ye,onTabOutside:Ue})})]}),...i,...O,"aria-invalid":$||!!B})})});se.displayName="DatePicker";se.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},className:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},label:{required:!1,tsType:{name:"string"},description:'@default "Velg dato"'},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"LabelProps"},{name:"literal",value:'"children"'}],raw:'Omit<LabelProps, "children">'},description:"Bruk labelProps for å sette props som `variant` og `srOnly`.\n\n@example\n ```tsx\n <DatePicker\n     labelProps={{ srOnly: true }}\n />\n ```"},defaultValue:{required:!1,tsType:{name:"string"},description:`dd.mm.åååå

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
>`},description:"Props som sendes direkte til komponentens TextInput"}},composes:["Omit"]};const{expect:z,fn:Ie,screen:xe,waitFor:Ct,within:Fe}=__STORYBOOK_MODULE_TEST__,Qt={title:"Komponenter/DatePicker",component:se,args:{action:{disabled:!1},days:["M","T","O","T","F","L","S"],defaultShow:!1,defaultValue:re(new Date),disableBeforeDate:re(new Date(new Date().setDate(new Date().getDate()-14))),disableAfterDate:re(new Date(new Date().setDate(new Date().getDate()+14))),description:"Kortet er gyldig i 3 måneder fra denne datoen",label:"Når skal du reise?",labelProps:{srOnly:!1,variant:"small"},hideCalendarLabel:"Lukk kalender",showCalendarLabel:"Åpne kalender",invalid:!1,months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],monthLabel:"Måned",placeholder:"dd.mm.åååå",yearsToShow:new Date().getFullYear(),yearLabel:"År",textInputProps:{disabled:!1,readOnly:!1}}};function Ae({args:e,initialValue:t=""}){const[n,r]=me.useState(t),[a,u]=me.useState(""),[g,k]=me.useState("");return f.jsxs("div",{style:{display:"grid",gap:"16px",width:"20rem"},children:[f.jsx(se,{...e,value:n,defaultValue:void 0,disableBeforeDate:void 0,disableAfterDate:void 0,onChange:(b,D,E)=>{r(b.target.value),u(D?re(D):""),k(E.value),e.onChange?.(b,D,E)}}),f.jsxs("dl",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"4px 12px",margin:0},children:[f.jsx("dt",{children:"event.target.value"}),f.jsx("dd",{"data-testid":"event-target-value",style:{margin:0},children:n||"(tom)"}),f.jsx("dt",{children:"date"}),f.jsx("dd",{"data-testid":"date-value",style:{margin:0},children:a||"(tom)"}),f.jsx("dt",{children:"meta.value"}),f.jsx("dd",{"data-testid":"meta-value",style:{margin:0},children:g||"(tom)"})]})]})}const ie={args:{},render:e=>f.jsx(se,{...e,disableBeforeDate:e.disableBeforeDate,disableAfterDate:e.disableAfterDate})},oe={name:"API ved kalenderklikk",args:{onChange:Ie()},render:e=>f.jsx(Ae,{args:e,initialValue:"10.11.2022"}),play:async({args:e,canvasElement:t,userEvent:n,step:r})=>{const a=Fe(t);await r("Velg dato i kalenderen",async()=>{await n.click(a.getByRole("button",{name:/åpne kalender/i})),await Ct(()=>{z(xe.getByTestId("jkl-calendar")).toBeInTheDocument()}),await n.click(xe.getByLabelText("11. november"))}),await r("Vis at vanlig onChange-bruk fortsatt fungerer",async()=>{await z(a.getByTestId("event-target-value")).toHaveTextContent("11.11.2022"),await z(a.getByTestId("date-value")).toHaveTextContent("11.11.2022"),await z(a.getByTestId("meta-value")).toHaveTextContent("11.11.2022"),await z(e.onChange).toHaveBeenCalled()})}},le={name:"API ved kompakt input",args:{onChange:Ie()},render:e=>f.jsx(Ae,{args:e}),play:async({args:e,canvasElement:t,userEvent:n,step:r})=>{const a=Fe(t),u=a.getByRole("textbox",{name:/når skal du reise/i});await r('Skriv "11112022" i feltet',async()=>{await n.clear(u),await n.type(u,"11112022")}),await r("Vis at kontrollert bruk via event.target.value er uendret",async()=>{await z(u).toHaveValue("11.11.2022"),await z(a.getByTestId("event-target-value")).toHaveTextContent("11.11.2022"),await z(a.getByTestId("date-value")).toHaveTextContent("11.11.2022"),await z(a.getByTestId("meta-value")).toHaveTextContent("11.11.2022"),await z(e.onChange).toHaveBeenCalled()})}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <DatePickerComponent {...args} disableBeforeDate={args.disableBeforeDate} disableAfterDate={args.disableAfterDate} />
}`,...ie.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  name: "API ved kalenderklikk",
  args: {
    onChange: fn()
  },
  render: args => <DatePickerApiCompatibilityExample args={args} initialValue="10.11.2022" />,
  play: async ({
    args,
    canvasElement,
    userEvent,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("Velg dato i kalenderen", async () => {
      await userEvent.click(canvas.getByRole("button", {
        name: /åpne kalender/i
      }));
      await waitFor(() => {
        expect(screen.getByTestId("jkl-calendar")).toBeInTheDocument();
      });
      await userEvent.click(screen.getByLabelText("11. november"));
    });
    await step("Vis at vanlig onChange-bruk fortsatt fungerer", async () => {
      await expect(canvas.getByTestId("event-target-value")).toHaveTextContent("11.11.2022");
      await expect(canvas.getByTestId("date-value")).toHaveTextContent("11.11.2022");
      await expect(canvas.getByTestId("meta-value")).toHaveTextContent("11.11.2022");
      await expect(args.onChange).toHaveBeenCalled();
    });
  }
}`,...oe.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  name: "API ved kompakt input",
  args: {
    onChange: fn()
  },
  render: args => <DatePickerApiCompatibilityExample args={args} />,
  play: async ({
    args,
    canvasElement,
    userEvent,
    step
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", {
      name: /når skal du reise/i
    });
    await step('Skriv "11112022" i feltet', async () => {
      await userEvent.clear(input);
      await userEvent.type(input, "11112022");
    });
    await step("Vis at kontrollert bruk via event.target.value er uendret", async () => {
      await expect(input).toHaveValue("11.11.2022");
      await expect(canvas.getByTestId("event-target-value")).toHaveTextContent("11.11.2022");
      await expect(canvas.getByTestId("date-value")).toHaveTextContent("11.11.2022");
      await expect(canvas.getByTestId("meta-value")).toHaveTextContent("11.11.2022");
      await expect(args.onChange).toHaveBeenCalled();
    });
  }
}`,...le.parameters?.docs?.source}}};const Xt=["DatePicker","CalendarSelectionApiCompatibility","CompactInputApiCompatibility"];export{oe as CalendarSelectionApiCompatibility,le as CompactInputApiCompatibility,ie as DatePicker,Xt as __namedExportsOrder,Qt as default};
