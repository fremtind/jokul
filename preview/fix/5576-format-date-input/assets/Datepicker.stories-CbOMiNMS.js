import{g as Ue,r as S,j as p,R as fe}from"./iframe-D47ECc-i.js";import{c as He}from"./clsx-B-dksMZM.js";import{r as ge}from"./index-CWHWAS-l.js";import{I as We}from"./IconButton-BdyMMUdQ.js";import{C as Ve}from"./CalendarIcon-D6A17wKy.js";import{I as Ke}from"./InputGroup-SazPxoRr.js";import{P as pe}from"./Popover-C-dCkz_U.js";import{B as Ge}from"./BaseTextInput-DeNZNuOi.js";import{u as Je}from"./useId-4j4sAaIk.js";import{B as be}from"./Button-CnI4vRnR.js";import{A as ze,a as Ze}from"./ArrowRightIcon-ByOrNMvH.js";import{C as we}from"./ChevronDownIcon-CTPK2fwM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQMb8qd8.js";import"./Icon-25eR-AS8.js";import"./Label-DzB9zIsI.js";import"./SupportLabel-Ck7P2EuR.js";import"./WarningIcon-DZ1D_bMR.js";import"./floating-ui.react-DDCfHLfL.js";import"./getThemeAndSize-CIzqY74s.js";import"./usePreviousValue-D3cNjnJq.js";import"./Loader-Do-rj7G9.js";import"./useDelayedRender-DVxEpbgn.js";const Qe={full:/^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])(\d{2}|\d{4})$/};function Xe(e,t){const n=e.replace(/\D/g,""),r=Qe.full,a=n.match(r);return a?a.slice(1).filter(Boolean).join("."):e}var ce={exports:{}},et=ce.exports,Me;function tt(){return Me||(Me=1,(function(e,t){(function(n,r){e.exports=r()})(et,(function(){var n=1e3,r=6e4,a=36e5,u="millisecond",v="second",k="minute",b="hour",D="day",C="week",w="month",M="quarter",T="year",A="date",B="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,V=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ne={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(m){var o=["th","st","nd","rd"],i=m%100;return"["+m+(o[(i-20)%10]||o[i]||o[0])+"]"}},z=function(m,o,i){var d=String(m);return!d||d.length>=o?m:""+Array(o+1-d.length).join(i)+m},ae={s:z,z:function(m){var o=-m.utcOffset(),i=Math.abs(o),d=Math.floor(i/60),l=i%60;return(o<=0?"+":"-")+z(d,2,"0")+":"+z(l,2,"0")},m:function m(o,i){if(o.date()<i.date())return-m(i,o);var d=12*(i.year()-o.year())+(i.month()-o.month()),l=o.clone().add(d,w),g=i-l<0,s=o.clone().add(d+(g?-1:1),w);return+(-(d+(i-l)/(g?l-s:s-l))||0)},a:function(m){return m<0?Math.ceil(m)||0:Math.floor(m)},p:function(m){return{M:w,y:T,w:C,d:D,D:A,h:b,m:k,s:v,ms:u,Q:M}[m]||String(m||"").toLowerCase().replace(/s$/,"")},u:function(m){return m===void 0}},P="en",U={};U[P]=ne;var H="$isDayjsObject",Z=function(m){return m instanceof Q||!(!m||!m[H])},q=function m(o,i,d){var l;if(!o)return P;if(typeof o=="string"){var g=o.toLowerCase();U[g]&&(l=g),i&&(U[g]=i,l=g);var s=o.split("-");if(!l&&s.length>1)return m(s[0])}else{var c=o.name;U[c]=o,l=c}return!d&&l&&(P=l),l||!d&&P},x=function(m,o){if(Z(m))return m.clone();var i=typeof o=="object"?o:{};return i.date=m,i.args=arguments,new Q(i)},y=ae;y.l=q,y.i=Z,y.w=function(m,o){return x(m,{locale:o.$L,utc:o.$u,x:o.$x,$offset:o.$offset})};var Q=(function(){function m(i){this.$L=q(i.locale,null,!0),this.parse(i),this.$x=this.$x||i.x||{},this[H]=!0}var o=m.prototype;return o.parse=function(i){this.$d=(function(d){var l=d.date,g=d.utc;if(l===null)return new Date(NaN);if(y.u(l))return new Date;if(l instanceof Date)return new Date(l);if(typeof l=="string"&&!/Z$/i.test(l)){var s=l.match($);if(s){var c=s[2]-1||0,f=(s[7]||"0").substring(0,3);return g?new Date(Date.UTC(s[1],c,s[3]||1,s[4]||0,s[5]||0,s[6]||0,f)):new Date(s[1],c,s[3]||1,s[4]||0,s[5]||0,s[6]||0,f)}}return new Date(l)})(i),this.init()},o.init=function(){var i=this.$d;this.$y=i.getFullYear(),this.$M=i.getMonth(),this.$D=i.getDate(),this.$W=i.getDay(),this.$H=i.getHours(),this.$m=i.getMinutes(),this.$s=i.getSeconds(),this.$ms=i.getMilliseconds()},o.$utils=function(){return y},o.isValid=function(){return this.$d.toString()!==B},o.isSame=function(i,d){var l=x(i);return this.startOf(d)<=l&&l<=this.endOf(d)},o.isAfter=function(i,d){return x(i)<this.startOf(d)},o.isBefore=function(i,d){return this.endOf(d)<x(i)},o.$g=function(i,d,l){return y.u(i)?this[d]:this.set(l,i)},o.unix=function(){return Math.floor(this.valueOf()/1e3)},o.valueOf=function(){return this.$d.getTime()},o.startOf=function(i,d){var l=this,g=!!y.u(d)||d,s=y.p(i),c=function(Y,F){var K=y.w(l.$u?Date.UTC(l.$y,F,Y):new Date(l.$y,F,Y),l);return g?K:K.endOf(D)},f=function(Y,F){return y.w(l.toDate()[Y].apply(l.toDate("s"),(g?[0,0,0,0]:[23,59,59,999]).slice(F)),l)},h=this.$W,E=this.$M,_=this.$D,I="set"+(this.$u?"UTC":"");switch(s){case T:return g?c(1,0):c(31,11);case w:return g?c(1,E):c(0,E+1);case C:var j=this.$locale().weekStart||0,L=(h<j?h+7:h)-j;return c(g?_-L:_+(6-L),E);case D:case A:return f(I+"Hours",0);case b:return f(I+"Minutes",1);case k:return f(I+"Seconds",2);case v:return f(I+"Milliseconds",3);default:return this.clone()}},o.endOf=function(i){return this.startOf(i,!1)},o.$set=function(i,d){var l,g=y.p(i),s="set"+(this.$u?"UTC":""),c=(l={},l[D]=s+"Date",l[A]=s+"Date",l[w]=s+"Month",l[T]=s+"FullYear",l[b]=s+"Hours",l[k]=s+"Minutes",l[v]=s+"Seconds",l[u]=s+"Milliseconds",l)[g],f=g===D?this.$D+(d-this.$W):d;if(g===w||g===T){var h=this.clone().set(A,1);h.$d[c](f),h.init(),this.$d=h.set(A,Math.min(this.$D,h.daysInMonth())).$d}else c&&this.$d[c](f);return this.init(),this},o.set=function(i,d){return this.clone().$set(i,d)},o.get=function(i){return this[y.p(i)]()},o.add=function(i,d){var l,g=this;i=Number(i);var s=y.p(d),c=function(E){var _=x(g);return y.w(_.date(_.date()+Math.round(E*i)),g)};if(s===w)return this.set(w,this.$M+i);if(s===T)return this.set(T,this.$y+i);if(s===D)return c(1);if(s===C)return c(7);var f=(l={},l[k]=r,l[b]=a,l[v]=n,l)[s]||1,h=this.$d.getTime()+i*f;return y.w(h,this)},o.subtract=function(i,d){return this.add(-1*i,d)},o.format=function(i){var d=this,l=this.$locale();if(!this.isValid())return l.invalidDate||B;var g=i||"YYYY-MM-DDTHH:mm:ssZ",s=y.z(this),c=this.$H,f=this.$m,h=this.$M,E=l.weekdays,_=l.months,I=l.meridiem,j=function(F,K,G,te){return F&&(F[K]||F(d,g))||G[K].slice(0,te)},L=function(F){return y.s(c%12||12,F,"0")},Y=I||function(F,K,G){var te=F<12?"AM":"PM";return G?te.toLowerCase():te};return g.replace(V,(function(F,K){return K||(function(G){switch(G){case"YY":return String(d.$y).slice(-2);case"YYYY":return y.s(d.$y,4,"0");case"M":return h+1;case"MM":return y.s(h+1,2,"0");case"MMM":return j(l.monthsShort,h,_,3);case"MMMM":return j(_,h);case"D":return d.$D;case"DD":return y.s(d.$D,2,"0");case"d":return String(d.$W);case"dd":return j(l.weekdaysMin,d.$W,E,2);case"ddd":return j(l.weekdaysShort,d.$W,E,3);case"dddd":return E[d.$W];case"H":return String(c);case"HH":return y.s(c,2,"0");case"h":return L(1);case"hh":return L(2);case"a":return Y(c,f,!0);case"A":return Y(c,f,!1);case"m":return String(f);case"mm":return y.s(f,2,"0");case"s":return String(d.$s);case"ss":return y.s(d.$s,2,"0");case"SSS":return y.s(d.$ms,3,"0");case"Z":return s}return null})(F)||s.replace(":","")}))},o.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},o.diff=function(i,d,l){var g,s=this,c=y.p(d),f=x(i),h=(f.utcOffset()-this.utcOffset())*r,E=this-f,_=function(){return y.m(s,f)};switch(c){case T:g=_()/12;break;case w:g=_();break;case M:g=_()/3;break;case C:g=(E-h)/6048e5;break;case D:g=(E-h)/864e5;break;case b:g=E/a;break;case k:g=E/r;break;case v:g=E/n;break;default:g=E}return l?g:y.a(g)},o.daysInMonth=function(){return this.endOf(w).$D},o.$locale=function(){return U[this.$L]},o.locale=function(i,d){if(!i)return this.$L;var l=this.clone(),g=q(i,d,!0);return g&&(l.$L=g),l},o.clone=function(){return y.w(this.$d,this)},o.toDate=function(){return new Date(this.valueOf())},o.toJSON=function(){return this.isValid()?this.toISOString():null},o.toISOString=function(){return this.$d.toISOString()},o.toString=function(){return this.$d.toUTCString()},m})(),ee=Q.prototype;return x.prototype=ee,[["$ms",u],["$s",v],["$m",k],["$H",b],["$W",D],["$M",w],["$y",T],["$D",A]].forEach((function(m){ee[m[1]]=function(o){return this.$g(o,m[0],m[1])}})),x.extend=function(m,o){return m.$i||(m(o,Q,x),m.$i=!0),x},x.locale=q,x.isDayjs=Z,x.unix=function(m){return x(1e3*m)},x.en=U[P],x.Ls=U,x.p={},x}))})(ce)),ce.exports}var nt=tt();const N=Ue(nt),at=(e,t)=>{let n;switch(t.type){case"SET_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+t.newOffset),{...e,offset:t.newOffset,shownDate:n};case"ADD_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+e.offset+t.addedOffset),{...e,offset:e.offset+t.addedOffset,shownDate:n};case"SET_SELECTED_DATE":return xe(t.newDate);default:return e}},xe=e=>({selectedDate:e,offset:0,shownDate:e}),rt=/^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/,st=/^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;function se(e){const t=`${e.getDate()}`.padStart(2,"0"),n=`${e.getMonth()+1}`.padStart(2,"0");return`${t}.${n}.${e.getFullYear()}`}const it=e=>{const t=rt.exec(e);if(t)return t.slice(1,4);const n=st.exec(e);if(!n)return;const r=n.slice(1,4);return r.reverse(),r};function X(e){if(!e)return;const t=it(e);if(!t)return;const n=Number.parseInt(new Date().toLocaleString("no-NB",{year:"2-digit"})),r=D=>D>n?D+1900:D+2e3,a=Number.parseInt(t[0],10),u=Number.parseInt(t[1],10)-1,v=Number.parseInt(t[2],10),k=v>99?v:r(v),b=new Date(k,u,a,0,0,0);return b.getMonth()===u&&b.getFullYear()===k?b:void 0}function ve(...e){return t=>e.some(n=>(n?.(t),t.defaultPrevented))}function Ee({calendars:e,offset:t,minDate:n}){if(t>1&&n){const{firstDayOfMonth:r}=e[0],a=N(n).diff(r,"months");a<t&&(t=a)}return t}const he=3;function lt(e,t,n,r){if(t&&t.getFullYear()>e)return[t.getFullYear().toString()];if(n&&n.getFullYear()<e)return[n.getFullYear().toString()];let a=!1,u,v;r==="all"?(a=!0,u=he,v=he):(u=typeof r=="number"?r:r.previous,v=typeof r=="number"?r:r.coming);let k=e-u;if(t){const M=a?t.getFullYear():k;k=Math.max(t.getFullYear(),M)}let b=e+v;if(n){const M=a?n.getFullYear():b;b=Math.min(n.getFullYear(),M)}const D=Math.max(b-k+1,1);return[...Array(D).keys()].map(M=>M+k).map(M=>M.toString())}function ot(e,t,n,r){const a=n?.getFullYear()||e,u=n?.getMonth()===void 0?0:n.getMonth(),v=r?.getFullYear()||e,k=r?.getMonth()===void 0?11:r.getMonth();let b=0,D=11;return a===e&&(b=u),v===e&&(D=k),t.map((w,M)=>({value:M.toString(),label:w})).filter(({value:w})=>Number.parseInt(w)>=b&&Number.parseInt(w)<=D)}function Ce({calendars:e,offset:t,maxDate:n}){if(t>1&&n){const{lastDayOfMonth:r}=e[e.length-1],a=N(n).diff(r,"months");a<t&&(t=a)}return t}function je({calendars:e,minDate:t}){return t?N(e[0].firstDayOfMonth).subtract(1,"day").isBefore(t):!1}function $e({calendars:e,maxDate:t}){return t?N(e.at(-1)?.lastDayOfMonth).add(1,"day").isAfter(t):!1}function ut({date:e,selected:t,monthsToDisplay:n,offset:r,minDate:a,maxDate:u,firstDayOfWeek:v,showOutsideDays:k}){const b=[],D=dt(e,a,u);for(let C=0;C<n;C++){const w=ct({month:D.getMonth()+C+r,year:D.getFullYear(),selectedDates:t,minDate:a,maxDate:u,firstDayOfWeek:v,showOutsideDays:k});b.push(w)}return b}function dt(e,t,n){let r=N(e).startOf("day");if(t){const a=N(t).startOf("day");r.isBefore(a)&&(r=a)}if(n){const a=N(n).startOf("day");r.isAfter(a)&&(r=a)}return r.toDate()}function ct({month:e,year:t,selectedDates:n,minDate:r,maxDate:a,firstDayOfWeek:u,showOutsideDays:v}){const k=pt(e,t),b=k.daysInMonth;e=k.month,t=k.year;const D=[];for(let B=1;B<=b;B++){const $=new Date(t,e,B),V={date:$,selected:ye(n,$),selectable:ke(r,a,$),today:N().isSame($,"day"),prevMonth:!1,nextMonth:!1};D.push(V)}const C=new Date(t,e,1),w=new Date(t,e,b),M=mt({firstDayOfMonth:C,minDate:r,maxDate:a,selectedDates:n,firstDayOfWeek:u,showOutsideDays:v}),T=ft({lastDayOfMonth:w,minDate:r,maxDate:a,selectedDates:n,firstDayOfWeek:u,showOutsideDays:v});D.unshift(...M),D.push(...T);const A=gt(D);return{firstDayOfMonth:C,lastDayOfMonth:w,month:e,year:t,weeks:A}}function mt({firstDayOfMonth:e,minDate:t,maxDate:n,selectedDates:r,firstDayOfWeek:a,showOutsideDays:u}){const v=[];let k=(e.getDay()+7-a)%7;if(u){const b=N(e).subtract(1,"day"),D=b.date(),C=b.month(),w=b.year();let M=0;for(;M<k;){const T=new Date(w,C,D-M),A={date:T,selected:ye(r,T),selectable:ke(t,n,T),today:!1,prevMonth:!0,nextMonth:!1};v.unshift(A),M++}}else for(;k>0;)v.unshift(""),k--;return v}function ft({lastDayOfMonth:e,minDate:t,maxDate:n,selectedDates:r,firstDayOfWeek:a,showOutsideDays:u}){const v=[];let k=(e.getDay()+7-a)%7;if(u){const b=N(e).add(1,"day"),D=b.month(),C=b.year();let w=0;for(;w<6-k;){const M=new Date(C,D,1+w),T={date:M,selected:ye(r,M),selectable:ke(t,n,M),today:!1,prevMonth:!1,nextMonth:!0};v.push(T),w++}}else for(;k<6;)v.push(""),k++;return v}function pt(e,t){const n=new Date(t,e,1),r=n.getMonth(),a=n.getFullYear();return{daysInMonth:32-new Date(a,r,32).getDate(),month:r,year:a}}function gt(e){const t=Math.ceil(e.length/7),n=[];for(let r=0;r<t;r++){n[r]=[];for(let a=0;a<7;a++)n[r].push(e[r*7+a])}return n}function ye(e,t){return e?(Array.isArray(e)?e:[e]).some(r=>r instanceof Date&&N(r).startOf("day").valueOf()===N(t).startOf("day").valueOf()):!1}function ke(e,t,n){return!(e&&N(n).isBefore(e)||t&&N(n).isAfter(t))}function Te(e,t,n){return!!(n&&e>n||t&&e<t)}function ht(e,t,n,r){const a=X(e),u=X(t);return a?Te(a,n,r)?null:a:u?Te(u,n,r)?null:u:null}function Oe(e,t,n,r){let a=e||t||new Date;return n&&(a=n>a?n:a),r&&(a=r<a?r:a),a}function _e(e){return e!==void 0}function vt(e,t){return _e(e)?e:t}function yt(e,{onClick:t,dateObj:n}){return{onClick:ve(t,r=>{e(n,r)}),disabled:!n.selectable,"aria-pressed":n.selected,role:"button"}}function kt({minDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:r,offset:a=1,calendars:u}){const v=`Gå tilbake ${a} måned${a===1?"":"er"}`;return{onClick:ve(r,()=>{n(t-Ee({calendars:u,offset:a,minDate:e}))}),disabled:je({calendars:u,minDate:e}),"aria-label":v,title:v}}function Dt({maxDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:r,offset:a=1,calendars:u}){const v=`Gå frem ${a} måned${a===1?"":"er"}`;return{onClick:ve(r,()=>{n(t+Ce({calendars:u,offset:a,maxDate:e}))}),disabled:$e({calendars:u,maxDate:e}),"aria-label":v,title:v}}function bt({date:e=N().startOf("day").toDate(),maxDate:t,minDate:n,monthsToDisplay:r=1,firstDayOfWeek:a=0,showOutsideDays:u=!0,offset:v,onDateSelected:k,onOffsetChanged:b,selected:D}){const[C,w]=S.useState(0),M=vt(v,C);function T(B){_e(v)||w(B),b(B)}return{calendars:ut({date:e,selected:D,monthsToDisplay:r,minDate:n,maxDate:t,offset:M,firstDayOfWeek:a,showOutsideDays:u}),getDateProps:yt.bind(null,k),getBackProps:kt.bind(null,{minDate:n,offsetMonth:M,handleOffsetChanged:T}),getForwardProps:Dt.bind(null,{maxDate:t,offsetMonth:M,handleOffsetChanged:T}),handleOffsetChanged:T}}const wt=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],Mt=["man","tir","ons","tor","fre","lør","søn"],De=S.forwardRef((e,t)=>{const{date:n,defaultSelected:r,minDate:a,maxDate:u,days:v=Mt,months:k=wt,monthLabel:b="Velg måned",yearLabel:D="Velg år",yearsToShow:C=he,onTabOutside:w,...M}=e,T=Je("jkl-calendar"),[{offset:A,selectedDate:B,shownDate:$},V]=S.useReducer(at,Oe(n,r,a,u),xe),ne=$.getMonth(),z=$.getFullYear();S.useEffect(()=>{V({type:"SET_SELECTED_DATE",newDate:Oe(n,r,a,u)})},[n,r,a,u]);const ae=S.useCallback(s=>{V({type:"SET_OFFSET",newOffset:s})},[]),{calendars:P,getBackProps:U,getDateProps:H,getForwardProps:Z,handleOffsetChanged:q}=bt({date:B,selected:B,minDate:a,maxDate:u,offset:A,onOffsetChanged:ae,firstDayOfWeek:1,...M}),x=S.useRef(null),y=S.useCallback(s=>{if(!x.current)return;const c=document.activeElement,f=x.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),h=async E=>{c?.setAttribute("tabindex","-1"),E.setAttribute("tabindex","0"),E.focus()};f.forEach((E,_)=>{const I=_+s;if(E===c)if(I<=f.length-1&&I>=0)h(f[I]);else if(s<0){if(je({calendars:P,minDate:a})||(ge.flushSync(()=>{q(A-Ee({calendars:P,offset:1,minDate:a}))}),!x.current))return;const j=x.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');j[j.length+I]&&(j[0].setAttribute("tabindex","-1"),h(j[j.length+I]))}else{if($e({calendars:P,maxDate:u})||(ge.flushSync(()=>{q(A+Ce({calendars:P,offset:1,maxDate:u}))}),!x.current))return;const j=x.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');j[I-f.length]&&(j[0].setAttribute("tabindex","-1"),h(j[I-f.length]))}})},[q,A,P,u,a]),Q=S.useCallback(s=>{switch(s.key){case"ArrowUp":y(-7),s.preventDefault();break;case"ArrowRight":y(1),s.preventDefault();break;case"ArrowDown":y(7),s.preventDefault();break;case"ArrowLeft":y(-1),s.preventDefault();break}},[y]),ee=S.useCallback(s=>{if(s.key!=="Tab")return;const c=x.current?.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!c)return;const f=c[0],h=c[c.length-1];!s.shiftKey&&document.activeElement===h?(f.focus(),s.preventDefault()):s.shiftKey&&document.activeElement===f&&(h.focus(),s.preventDefault())},[]),m=S.useCallback(s=>{const{date:c,selected:f,selectable:h,prevMonth:E,nextMonth:_}=s;return h?!!(f||c.toString()===a?.toString()||!E&&!_&&$.getFullYear()===c.getFullYear()&&B.getMonth()!==c.getMonth()&&c.getDate()===1):!1},[$,a,B]),o=S.useCallback(()=>{a&&$.getFullYear()-a.getFullYear()===0&&$.getMonth()-a.getMonth()===1?document.querySelector(`[data-testid="${T}-forward-button"]`)?.focus():u&&u.getFullYear()-$.getFullYear()===0&&u.getMonth()-$.getMonth()===1&&document.querySelector(`[data-testid="${T}-back-button"]`)?.focus()},[a,u,$,T]),i=S.useCallback(s=>{if(s.target.value.length!==4)return;const c=Number.parseInt(s.target.value);if(Number.isNaN(c))return;let f=(c-$.getFullYear())*12;const h=new Date($.getFullYear(),$.getMonth()+f,$.getDate());u&&u.getFullYear()===h.getFullYear()&&u.getMonth()<h.getMonth()?f-=h.getMonth()-u.getMonth():a&&a.getFullYear()===h.getFullYear()&&a.getMonth()>h.getMonth()&&(f+=a.getMonth()-h.getMonth()),V({type:"ADD_OFFSET",addedOffset:f})},[$,a,u]),d=S.useCallback(s=>{if(!B&&!n)return;const c=$.getFullYear()-(B||new Date).getFullYear(),f=Number.parseInt(s.target.value)-(B||new Date).getMonth();V({type:"SET_OFFSET",newOffset:c*12+f})},[B,n,$]),l=lt(z,a,u,C),g=ot(z,k,a,u);return p.jsx("div",{ref:t,id:T,className:"jkl-calendar","data-testid":"jkl-calendar",children:p.jsxs("div",{className:"jkl-calendar__padding",ref:x,onKeyDown:ee,children:[p.jsxs("fieldset",{className:"jkl-calendar-navigation",children:[p.jsxs("div",{children:[p.jsx(be,{...U({calendars:P,onClick:o}),"data-testid":`${T}-back-button`,variant:"ghost",icon:p.jsx(ze,{variant:"medium",bold:!0})}),p.jsx(be,{...Z({calendars:P,onClick:o}),variant:"ghost","data-testid":`${T}-forward-button`,icon:p.jsx(Ze,{variant:"medium",bold:!0})})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[p.jsx("select",{onChange:d,className:"jkl-calendar-navigation-dropdown__select","aria-label":b,value:ne.toString(),children:g.map(({label:s,value:c})=>p.jsx("option",{value:c,children:s},c))}),p.jsx(we,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]}),p.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[p.jsx("select",{onChange:i,className:"jkl-calendar-navigation-dropdown__select","aria-label":D,value:z.toString(),children:l.map(s=>p.jsx("option",{value:s,children:s},s))}),p.jsx(we,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]})]})]}),P.map(s=>p.jsxs("table",{className:"jkl-calendar-table","data-testid":"jkl-datepicker-calendar",children:[p.jsxs("caption",{className:"jkl-sr-only",children:[k[s.month],", ",s.year]}),p.jsx("thead",{children:p.jsx("tr",{children:v.map(c=>p.jsx("th",{children:c},`${s.month}${s.year}${c}`))})}),p.jsx("tbody",{"data-testid":"jkl-datepicker-dates",children:s.weeks.map((c,f)=>p.jsx("tr",{children:c.map((h,E)=>{const _=`${s.month}${s.year}${f}${E}`;if(typeof h=="string")return p.jsx("td",{className:"jkl-calendar__date jkl-calendar__date--empty",children:h},_);const{date:I,selectable:j,today:L,prevMonth:Y,nextMonth:F}=h;return p.jsx("td",{children:p.jsx("button",{...H({dateObj:h}),type:"button",className:"jkl-calendar-date-button",tabIndex:m(h)?0:-1,"aria-label":`${I.getDate()}. ${k[I.getMonth()].toLowerCase()}`,"aria-current":L?"date":void 0,"data-adjacent":Y||F?"true":void 0,disabled:!j,onKeyDown:Q,children:p.jsx("span",{"aria-hidden":"true",children:I.getDate()})})},_)})},`${s.month}${s.year}${f}`))})]},`${s.month}${s.year}`))]})})});De.displayName="Calendar";De.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{date:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},defaultSelected:{required:!1,tsType:{name:"Date"},description:""},days:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},months:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},monthLabel:{required:!1,tsType:{name:"string"},description:""},yearLabel:{required:!1,tsType:{name:"string"},description:""},yearsToShow:{required:!1,tsType:{name:"union",raw:'number | "all" | { previous: number; coming: number }',elements:[{name:"number"},{name:"literal",value:'"all"'},{name:"signature",type:"object",raw:"{ previous: number; coming: number }",signature:{properties:[{key:"previous",value:{name:"number",required:!0}},{key:"coming",value:{name:"number",required:!0}}]}}]},description:""},onTabOutside:{required:!0,tsType:{name:"ReactKeyboardEventHandler",raw:"React.KeyboardEventHandler"},description:""}},composes:["Omit"]};function Tt(e,t,n={inclusive:!1}){const r=typeof e=="string"?X(e):e;return r?n.inclusive?r>=t:r>t:!1}function Ot(e,t,n={inclusive:!1}){const r=typeof e=="string"?X(e):e;return r?n.inclusive?r<=t:r<t:!1}const ie=S.forwardRef((e,t)=>{const{"data-testautoid":n,id:r,className:a="",label:u="Velg dato",labelProps:v,defaultValue:k,defaultShow:b=!1,value:D,disableBeforeDate:C,disableAfterDate:w,yearsToShow:M,name:T,helpLabel:A,errorLabel:B,invalid:$,days:V,months:ne,monthLabel:z,yearLabel:ae,placeholder:P="dd.mm.åååå",width:U="11.25rem",onChange:H,onBlur:Z,onFocus:q,onKeyDown:x,action:y,showCalendarLabel:Q="Åpne kalender",hideCalendarLabel:ee="Lukk kalender",supportLabelProps:m,tooltip:o,textInputProps:i,description:d,...l}=e,g=X(C),s=g?N(g).startOf("day").toDate():void 0,c=X(w),f=c?N(c).startOf("day").toDate():void 0,[h,E]=S.useState(ht(D,k,s,f)),[_,I]=S.useState(null),[j,L]=S.useState(b),Y=S.useRef(null),F=S.useRef(null),K=S.useRef(null),G=S.useRef(null),te=S.useCallback(O=>{G.current=O,t&&(typeof t=="function"?t(O):t.current=O)},[t]),Ae=S.useCallback(O=>{if(!q||!F.current)return;F.current.contains(O.relatedTarget)||q(O,h,{error:_,value:O.target.value})},[q,h,_]),Ne=S.useCallback(O=>{Z&&Z(O,h,{error:_,value:O.target.value})},[Z,h,_]),Pe=S.useCallback(O=>{O.key==="Escape"&&(L(!1),O.preventDefault(),O.stopPropagation()),y?.onKeyDown&&y.onKeyDown(O)},[y]),Le=S.useCallback(O=>{const R=O.currentTarget.value,W=/^\d{6}(\d{2})?$/.test(R)?Xe(R):R;W!==R&&(O.currentTarget.value=W);let me=null,re=null;if(W){const le=X(W);le?s&&!Tt(le,s)?re="OUTSIDE_LOWER_BOUND":f&&!Ot(le,f)?re="OUTSIDE_UPPER_BOUND":L(!1):re="WRONG_FORMAT",me=le||null}I(re),E(me),H&&H(O,me,{error:re,value:W})},[H,s,f]),Re=S.useCallback(O=>{ge.flushSync(()=>{L(!j)});const R=Y.current,W=R&&R.querySelector('[aria-pressed="true"]');window.requestAnimationFrame(()=>W?.focus()),y?.onClick&&y.onClick(O)},[j,y]),qe=S.useCallback(({date:O})=>{if(L(!1),E(O),G.current){const R=G.current;R.value=se(O);const W=document.createEvent("HTMLEvents");W.initEvent("input",!0,!1),R.dispatchEvent(W),R.focus(),H&&H(W,O,{error:null,value:R.value})}},[H]),Ye=S.useCallback(O=>{O.preventDefault(),L(!1),K.current?.focus()},[]);return p.jsx(Ke,{id:r,className:He("jkl-datepicker",a),...l,ref:F,label:u,labelProps:v,helpLabel:A,errorLabel:B,supportLabelProps:m,tooltip:o,description:d,render:O=>p.jsx(Ge,{"data-focused":j?"true":void 0,ref:te,"data-testid":"jkl-datepicker__input","data-testautoid":n,className:"jkl-datepicker__input",name:T,defaultValue:k,value:D,type:"text",placeholder:P,width:U,onFocus:Ae,onBlur:Ne,onChange:Le,actionButton:p.jsxs(pe,{positionReference:G,open:j,onOpenChange:()=>L(!j),offset:8,children:[p.jsx(pe.Trigger,{...y,"data-testid":"jkl-datepicker__trigger",className:"jkl-text-input-action-button",title:j?ee:Q,tabIndex:0,onClick:Re,onKeyDown:Pe,asChild:!0,children:p.jsx(We,{children:p.jsx(Ve,{})})}),p.jsx(pe.Content,{initialFocus:-1,padding:24,children:p.jsx(De,{ref:Y,date:h,minDate:s,maxDate:f,days:V,months:ne,monthLabel:z,yearLabel:ae,yearsToShow:M,onDateSelected:qe,onTabOutside:Ye})})]}),...i,...O,"aria-invalid":$||!!B})})});ie.displayName="DatePicker";ie.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},className:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},label:{required:!1,tsType:{name:"string"},description:'@default "Velg dato"'},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"LabelProps"},{name:"literal",value:'"children"'}],raw:'Omit<LabelProps, "children">'},description:"Bruk labelProps for å sette props som `variant` og `srOnly`.\n\n@example\n ```tsx\n <DatePicker\n     labelProps={{ srOnly: true }}\n />\n ```"},defaultValue:{required:!1,tsType:{name:"string"},description:`dd.mm.åååå

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
>`},description:"Props som sendes direkte til komponentens TextInput"}},composes:["Omit"]};const{expect:J,fn:Be,screen:Se,waitFor:St,within:Ie}=__STORYBOOK_MODULE_TEST__,zt={title:"Komponenter/DatePicker",component:ie,args:{action:{disabled:!1},days:["M","T","O","T","F","L","S"],defaultShow:!1,defaultValue:se(new Date),disableBeforeDate:se(new Date(new Date().setDate(new Date().getDate()-14))),disableAfterDate:se(new Date(new Date().setDate(new Date().getDate()+14))),description:"Kortet er gyldig i 3 måneder fra denne datoen",label:"Når skal du reise?",labelProps:{srOnly:!1,variant:"small"},hideCalendarLabel:"Lukk kalender",showCalendarLabel:"Åpne kalender",invalid:!1,months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],monthLabel:"Måned",placeholder:"dd.mm.åååå",yearsToShow:new Date().getFullYear(),yearLabel:"År",textInputProps:{disabled:!1,readOnly:!1}}};function Fe({args:e,initialValue:t=""}){const[n,r]=fe.useState(t),[a,u]=fe.useState(""),[v,k]=fe.useState("");return p.jsxs("div",{style:{display:"grid",gap:"16px",width:"20rem"},children:[p.jsx(ie,{...e,value:n,defaultValue:void 0,disableBeforeDate:void 0,disableAfterDate:void 0,onChange:(b,D,C)=>{r(b.target.value),u(D?se(D):""),k(C.value),e.onChange?.(b,D,C)}}),p.jsxs("dl",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"4px 12px",margin:0},children:[p.jsx("dt",{children:"event.target.value"}),p.jsx("dd",{"data-testid":"event-target-value",style:{margin:0},children:n||"(tom)"}),p.jsx("dt",{children:"date"}),p.jsx("dd",{"data-testid":"date-value",style:{margin:0},children:a||"(tom)"}),p.jsx("dt",{children:"meta.value"}),p.jsx("dd",{"data-testid":"meta-value",style:{margin:0},children:v||"(tom)"})]})]})}const oe={args:{},render:e=>p.jsx(ie,{...e,disableBeforeDate:e.disableBeforeDate,disableAfterDate:e.disableAfterDate})},ue={name:"API ved kalenderklikk",args:{onChange:Be()},render:e=>p.jsx(Fe,{args:e,initialValue:"10.11.2022"}),play:async({args:e,canvasElement:t,userEvent:n,step:r})=>{const a=Ie(t);await r("Velg dato i kalenderen",async()=>{await n.click(a.getByRole("button",{name:/åpne kalender/i})),await St(()=>{J(Se.getByTestId("jkl-calendar")).toBeInTheDocument()}),await n.click(Se.getByLabelText("11. november"))}),await r("Vis at vanlig onChange-bruk fortsatt fungerer",async()=>{await J(a.getByTestId("event-target-value")).toHaveTextContent("11.11.2022"),await J(a.getByTestId("date-value")).toHaveTextContent("11.11.2022"),await J(a.getByTestId("meta-value")).toHaveTextContent("11.11.2022"),await J(e.onChange).toHaveBeenCalled()})}},de={name:"API ved kompakt input",args:{onChange:Be()},render:e=>p.jsx(Fe,{args:e}),play:async({args:e,canvasElement:t,userEvent:n,step:r})=>{const a=Ie(t),u=a.getByRole("textbox",{name:/når skal du reise/i});await r('Skriv "11112022" i feltet',async()=>{await n.clear(u),await n.type(u,"11112022")}),await r("Vis at kontrollert bruk via event.target.value er uendret",async()=>{await J(u).toHaveValue("11.11.2022"),await J(a.getByTestId("event-target-value")).toHaveTextContent("11.11.2022"),await J(a.getByTestId("date-value")).toHaveTextContent("11.11.2022"),await J(a.getByTestId("meta-value")).toHaveTextContent("11.11.2022"),await J(e.onChange).toHaveBeenCalled()})}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <DatePickerComponent {...args} disableBeforeDate={args.disableBeforeDate} disableAfterDate={args.disableAfterDate} />
}`,...oe.parameters?.docs?.source}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`{
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
}`,...ue.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
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
}`,...de.parameters?.docs?.source}}};const Zt=["DatePicker","CalendarSelectionApiCompatibility","CompactInputApiCompatibility"];export{ue as CalendarSelectionApiCompatibility,de as CompactInputApiCompatibility,oe as DatePicker,Zt as __namedExportsOrder,zt as default};
