import{g as Ve,r as T,j as f,R as me}from"./iframe-CieSfS-s.js";import{c as Ke}from"./clsx-B-dksMZM.js";import{r as pe}from"./index-k82ZZK1m.js";import{I as Ge}from"./IconButton-7Vc5_Ymn.js";import{C as ze}from"./CalendarIcon-Xm9lI7W5.js";import{I as Je}from"./InputGroup-DWocAQ3w.js";import{P as fe}from"./Popover-Cjv7Fd6p.js";import{B as Ze}from"./BaseTextInput-CRlhPBvk.js";import{u as Qe}from"./useId-wNnCf9NV.js";import{B as we}from"./Button-1RO0JexK.js";import{A as Xe,a as et}from"./ArrowRightIcon-DGtjLc85.js";import{C as Me}from"./ChevronDownIcon-D4NkYGkP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BLOBn5gj.js";import"./Icon-YECgz6N-.js";import"./Label-CHaHdk_c.js";import"./SupportLabel-D8vc4u7I.js";import"./WarningIcon-DLZF4wih.js";import"./floating-ui.react-gAsUJTFX.js";import"./getThemeAndSize-CIzqY74s.js";import"./usePreviousValue-DNJDyo_-.js";import"./Loader-mCg85FsZ.js";import"./useDelayedRender-BcBjfM_T.js";const Te={full:/^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])(\d{2}|\d{4})$/,partial:/^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])?(\d{1,4})?$/};function ge(e,t){const n=e.replace(/\D/g,""),a=t?.partial?Te.partial:Te.full,r=n.match(a);return r?r.slice(1).filter(Boolean).join("."):e}var ue={exports:{}},tt=ue.exports,Oe;function nt(){return Oe||(Oe=1,(function(e,t){(function(n,a){e.exports=a()})(tt,(function(){var n=1e3,a=6e4,r=36e5,u="millisecond",p="second",y="minute",b="hour",D="day",E="week",w="month",M="quarter",O="year",A="date",B="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,V=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ne={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(m){var l=["th","st","nd","rd"],i=m%100;return"["+m+(l[(i-20)%10]||l[i]||l[0])+"]"}},Z=function(m,l,i){var d=String(m);return!d||d.length>=l?m:""+Array(l+1-d.length).join(i)+m},ae={s:Z,z:function(m){var l=-m.utcOffset(),i=Math.abs(l),d=Math.floor(i/60),o=i%60;return(l<=0?"+":"-")+Z(d,2,"0")+":"+Z(o,2,"0")},m:function m(l,i){if(l.date()<i.date())return-m(i,l);var d=12*(i.year()-l.year())+(i.month()-l.month()),o=l.clone().add(d,w),h=i-o<0,s=l.clone().add(d+(h?-1:1),w);return+(-(d+(i-o)/(h?o-s:s-o))||0)},a:function(m){return m<0?Math.ceil(m)||0:Math.floor(m)},p:function(m){return{M:w,y:O,w:E,d:D,D:A,h:b,m:y,s:p,ms:u,Q:M}[m]||String(m||"").toLowerCase().replace(/s$/,"")},u:function(m){return m===void 0}},N="en",H={};H[N]=ne;var W="$isDayjsObject",Q=function(m){return m instanceof X||!(!m||!m[W])},Y=function m(l,i,d){var o;if(!l)return N;if(typeof l=="string"){var h=l.toLowerCase();H[h]&&(o=h),i&&(H[h]=i,o=h);var s=l.split("-");if(!o&&s.length>1)return m(s[0])}else{var c=l.name;H[c]=l,o=c}return!d&&o&&(N=o),o||!d&&N},x=function(m,l){if(Q(m))return m.clone();var i=typeof l=="object"?l:{};return i.date=m,i.args=arguments,new X(i)},k=ae;k.l=Y,k.i=Q,k.w=function(m,l){return x(m,{locale:l.$L,utc:l.$u,x:l.$x,$offset:l.$offset})};var X=(function(){function m(i){this.$L=Y(i.locale,null,!0),this.parse(i),this.$x=this.$x||i.x||{},this[W]=!0}var l=m.prototype;return l.parse=function(i){this.$d=(function(d){var o=d.date,h=d.utc;if(o===null)return new Date(NaN);if(k.u(o))return new Date;if(o instanceof Date)return new Date(o);if(typeof o=="string"&&!/Z$/i.test(o)){var s=o.match($);if(s){var c=s[2]-1||0,g=(s[7]||"0").substring(0,3);return h?new Date(Date.UTC(s[1],c,s[3]||1,s[4]||0,s[5]||0,s[6]||0,g)):new Date(s[1],c,s[3]||1,s[4]||0,s[5]||0,s[6]||0,g)}}return new Date(o)})(i),this.init()},l.init=function(){var i=this.$d;this.$y=i.getFullYear(),this.$M=i.getMonth(),this.$D=i.getDate(),this.$W=i.getDay(),this.$H=i.getHours(),this.$m=i.getMinutes(),this.$s=i.getSeconds(),this.$ms=i.getMilliseconds()},l.$utils=function(){return k},l.isValid=function(){return this.$d.toString()!==B},l.isSame=function(i,d){var o=x(i);return this.startOf(d)<=o&&o<=this.endOf(d)},l.isAfter=function(i,d){return x(i)<this.startOf(d)},l.isBefore=function(i,d){return this.endOf(d)<x(i)},l.$g=function(i,d,o){return k.u(i)?this[d]:this.set(o,i)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(i,d){var o=this,h=!!k.u(d)||d,s=k.p(i),c=function(U,F){var K=k.w(o.$u?Date.UTC(o.$y,F,U):new Date(o.$y,F,U),o);return h?K:K.endOf(D)},g=function(U,F){return k.w(o.toDate()[U].apply(o.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(F)),o)},v=this.$W,C=this.$M,_=this.$D,I="set"+(this.$u?"UTC":"");switch(s){case O:return h?c(1,0):c(31,11);case w:return h?c(1,C):c(0,C+1);case E:var j=this.$locale().weekStart||0,L=(v<j?v+7:v)-j;return c(h?_-L:_+(6-L),C);case D:case A:return g(I+"Hours",0);case b:return g(I+"Minutes",1);case y:return g(I+"Seconds",2);case p:return g(I+"Milliseconds",3);default:return this.clone()}},l.endOf=function(i){return this.startOf(i,!1)},l.$set=function(i,d){var o,h=k.p(i),s="set"+(this.$u?"UTC":""),c=(o={},o[D]=s+"Date",o[A]=s+"Date",o[w]=s+"Month",o[O]=s+"FullYear",o[b]=s+"Hours",o[y]=s+"Minutes",o[p]=s+"Seconds",o[u]=s+"Milliseconds",o)[h],g=h===D?this.$D+(d-this.$W):d;if(h===w||h===O){var v=this.clone().set(A,1);v.$d[c](g),v.init(),this.$d=v.set(A,Math.min(this.$D,v.daysInMonth())).$d}else c&&this.$d[c](g);return this.init(),this},l.set=function(i,d){return this.clone().$set(i,d)},l.get=function(i){return this[k.p(i)]()},l.add=function(i,d){var o,h=this;i=Number(i);var s=k.p(d),c=function(C){var _=x(h);return k.w(_.date(_.date()+Math.round(C*i)),h)};if(s===w)return this.set(w,this.$M+i);if(s===O)return this.set(O,this.$y+i);if(s===D)return c(1);if(s===E)return c(7);var g=(o={},o[y]=a,o[b]=r,o[p]=n,o)[s]||1,v=this.$d.getTime()+i*g;return k.w(v,this)},l.subtract=function(i,d){return this.add(-1*i,d)},l.format=function(i){var d=this,o=this.$locale();if(!this.isValid())return o.invalidDate||B;var h=i||"YYYY-MM-DDTHH:mm:ssZ",s=k.z(this),c=this.$H,g=this.$m,v=this.$M,C=o.weekdays,_=o.months,I=o.meridiem,j=function(F,K,G,ee){return F&&(F[K]||F(d,h))||G[K].slice(0,ee)},L=function(F){return k.s(c%12||12,F,"0")},U=I||function(F,K,G){var ee=F<12?"AM":"PM";return G?ee.toLowerCase():ee};return h.replace(V,(function(F,K){return K||(function(G){switch(G){case"YY":return String(d.$y).slice(-2);case"YYYY":return k.s(d.$y,4,"0");case"M":return v+1;case"MM":return k.s(v+1,2,"0");case"MMM":return j(o.monthsShort,v,_,3);case"MMMM":return j(_,v);case"D":return d.$D;case"DD":return k.s(d.$D,2,"0");case"d":return String(d.$W);case"dd":return j(o.weekdaysMin,d.$W,C,2);case"ddd":return j(o.weekdaysShort,d.$W,C,3);case"dddd":return C[d.$W];case"H":return String(c);case"HH":return k.s(c,2,"0");case"h":return L(1);case"hh":return L(2);case"a":return U(c,g,!0);case"A":return U(c,g,!1);case"m":return String(g);case"mm":return k.s(g,2,"0");case"s":return String(d.$s);case"ss":return k.s(d.$s,2,"0");case"SSS":return k.s(d.$ms,3,"0");case"Z":return s}return null})(F)||s.replace(":","")}))},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(i,d,o){var h,s=this,c=k.p(d),g=x(i),v=(g.utcOffset()-this.utcOffset())*a,C=this-g,_=function(){return k.m(s,g)};switch(c){case O:h=_()/12;break;case w:h=_();break;case M:h=_()/3;break;case E:h=(C-v)/6048e5;break;case D:h=(C-v)/864e5;break;case b:h=C/r;break;case y:h=C/a;break;case p:h=C/n;break;default:h=C}return o?h:k.a(h)},l.daysInMonth=function(){return this.endOf(w).$D},l.$locale=function(){return H[this.$L]},l.locale=function(i,d){if(!i)return this.$L;var o=this.clone(),h=Y(i,d,!0);return h&&(o.$L=h),o},l.clone=function(){return k.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},m})(),te=X.prototype;return x.prototype=te,[["$ms",u],["$s",p],["$m",y],["$H",b],["$W",D],["$M",w],["$y",O],["$D",A]].forEach((function(m){te[m[1]]=function(l){return this.$g(l,m[0],m[1])}})),x.extend=function(m,l){return m.$i||(m(l,X,x),m.$i=!0),x},x.locale=Y,x.isDayjs=Q,x.unix=function(m){return x(1e3*m)},x.en=H[N],x.Ls=H,x.p={},x}))})(ue)),ue.exports}var at=nt();const P=Ve(at),rt=(e,t)=>{let n;switch(t.type){case"SET_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+t.newOffset),{...e,offset:t.newOffset,shownDate:n};case"ADD_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+e.offset+t.addedOffset),{...e,offset:e.offset+t.addedOffset,shownDate:n};case"SET_SELECTED_DATE":return Ee(t.newDate);default:return e}},Ee=e=>({selectedDate:e,offset:0,shownDate:e}),st=/^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/,it=/^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;function re(e){const t=`${e.getDate()}`.padStart(2,"0"),n=`${e.getMonth()+1}`.padStart(2,"0");return`${t}.${n}.${e.getFullYear()}`}const ot=e=>{const t=st.exec(e);if(t)return t.slice(1,4);const n=it.exec(e);if(!n)return;const a=n.slice(1,4);return a.reverse(),a};function J(e){if(!e)return;const t=ot(e);if(!t)return;const n=Number.parseInt(new Date().toLocaleString("no-NB",{year:"2-digit"})),a=D=>D>n?D+1900:D+2e3,r=Number.parseInt(t[0],10),u=Number.parseInt(t[1],10)-1,p=Number.parseInt(t[2],10),y=p>99?p:a(p),b=new Date(y,u,r,0,0,0);return b.getMonth()===u&&b.getFullYear()===y?b:void 0}function ve(...e){return t=>e.some(n=>(n?.(t),t.defaultPrevented))}function je({calendars:e,offset:t,minDate:n}){if(t>1&&n){const{firstDayOfMonth:a}=e[0],r=P(n).diff(a,"months");r<t&&(t=r)}return t}const he=3;function lt(e,t,n,a){if(t&&t.getFullYear()>e)return[t.getFullYear().toString()];if(n&&n.getFullYear()<e)return[n.getFullYear().toString()];let r=!1,u,p;a==="all"?(r=!0,u=he,p=he):(u=typeof a=="number"?a:a.previous,p=typeof a=="number"?a:a.coming);let y=e-u;if(t){const M=r?t.getFullYear():y;y=Math.max(t.getFullYear(),M)}let b=e+p;if(n){const M=r?n.getFullYear():b;b=Math.min(n.getFullYear(),M)}const D=Math.max(b-y+1,1);return[...Array(D).keys()].map(M=>M+y).map(M=>M.toString())}function ut(e,t,n,a){const r=n?.getFullYear()||e,u=n?.getMonth()===void 0?0:n.getMonth(),p=a?.getFullYear()||e,y=a?.getMonth()===void 0?11:a.getMonth();let b=0,D=11;return r===e&&(b=u),p===e&&(D=y),t.map((w,M)=>({value:M.toString(),label:w})).filter(({value:w})=>Number.parseInt(w)>=b&&Number.parseInt(w)<=D)}function $e({calendars:e,offset:t,maxDate:n}){if(t>1&&n){const{lastDayOfMonth:a}=e[e.length-1],r=P(n).diff(a,"months");r<t&&(t=r)}return t}function _e({calendars:e,minDate:t}){return t?P(e[0].firstDayOfMonth).subtract(1,"day").isBefore(t):!1}function Be({calendars:e,maxDate:t}){return t?P(e.at(-1)?.lastDayOfMonth).add(1,"day").isAfter(t):!1}function dt({date:e,selected:t,monthsToDisplay:n,offset:a,minDate:r,maxDate:u,firstDayOfWeek:p,showOutsideDays:y}){const b=[],D=ct(e,r,u);for(let E=0;E<n;E++){const w=mt({month:D.getMonth()+E+a,year:D.getFullYear(),selectedDates:t,minDate:r,maxDate:u,firstDayOfWeek:p,showOutsideDays:y});b.push(w)}return b}function ct(e,t,n){let a=P(e).startOf("day");if(t){const r=P(t).startOf("day");a.isBefore(r)&&(a=r)}if(n){const r=P(n).startOf("day");a.isAfter(r)&&(a=r)}return a.toDate()}function mt({month:e,year:t,selectedDates:n,minDate:a,maxDate:r,firstDayOfWeek:u,showOutsideDays:p}){const y=gt(e,t),b=y.daysInMonth;e=y.month,t=y.year;const D=[];for(let B=1;B<=b;B++){const $=new Date(t,e,B),V={date:$,selected:ye(n,$),selectable:ke(a,r,$),today:P().isSame($,"day"),prevMonth:!1,nextMonth:!1};D.push(V)}const E=new Date(t,e,1),w=new Date(t,e,b),M=ft({firstDayOfMonth:E,minDate:a,maxDate:r,selectedDates:n,firstDayOfWeek:u,showOutsideDays:p}),O=pt({lastDayOfMonth:w,minDate:a,maxDate:r,selectedDates:n,firstDayOfWeek:u,showOutsideDays:p});D.unshift(...M),D.push(...O);const A=ht(D);return{firstDayOfMonth:E,lastDayOfMonth:w,month:e,year:t,weeks:A}}function ft({firstDayOfMonth:e,minDate:t,maxDate:n,selectedDates:a,firstDayOfWeek:r,showOutsideDays:u}){const p=[];let y=(e.getDay()+7-r)%7;if(u){const b=P(e).subtract(1,"day"),D=b.date(),E=b.month(),w=b.year();let M=0;for(;M<y;){const O=new Date(w,E,D-M),A={date:O,selected:ye(a,O),selectable:ke(t,n,O),today:!1,prevMonth:!0,nextMonth:!1};p.unshift(A),M++}}else for(;y>0;)p.unshift(""),y--;return p}function pt({lastDayOfMonth:e,minDate:t,maxDate:n,selectedDates:a,firstDayOfWeek:r,showOutsideDays:u}){const p=[];let y=(e.getDay()+7-r)%7;if(u){const b=P(e).add(1,"day"),D=b.month(),E=b.year();let w=0;for(;w<6-y;){const M=new Date(E,D,1+w),O={date:M,selected:ye(a,M),selectable:ke(t,n,M),today:!1,prevMonth:!1,nextMonth:!0};p.push(O),w++}}else for(;y<6;)p.push(""),y++;return p}function gt(e,t){const n=new Date(t,e,1),a=n.getMonth(),r=n.getFullYear();return{daysInMonth:32-new Date(r,a,32).getDate(),month:a,year:r}}function ht(e){const t=Math.ceil(e.length/7),n=[];for(let a=0;a<t;a++){n[a]=[];for(let r=0;r<7;r++)n[a].push(e[a*7+r])}return n}function ye(e,t){return e?(Array.isArray(e)?e:[e]).some(a=>a instanceof Date&&P(a).startOf("day").valueOf()===P(t).startOf("day").valueOf()):!1}function ke(e,t,n){return!(e&&P(n).isBefore(e)||t&&P(n).isAfter(t))}function Se(e,t,n){return!!(n&&e>n||t&&e<t)}function vt(e,t,n,a){const r=J(e),u=J(t);return r?Se(r,n,a)?null:r:u?Se(u,n,a)?null:u:null}function xe(e,t,n,a){let r=e||t||new Date;return n&&(r=n>r?n:r),a&&(r=a<r?a:r),r}function Ie(e){return e!==void 0}function yt(e,t){return Ie(e)?e:t}function kt(e,{onClick:t,dateObj:n}){return{onClick:ve(t,a=>{e(n,a)}),disabled:!n.selectable,"aria-pressed":n.selected,role:"button"}}function Dt({minDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:a,offset:r=1,calendars:u}){const p=`Gå tilbake ${r} måned${r===1?"":"er"}`;return{onClick:ve(a,()=>{n(t-je({calendars:u,offset:r,minDate:e}))}),disabled:_e({calendars:u,minDate:e}),"aria-label":p,title:p}}function bt({maxDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:a,offset:r=1,calendars:u}){const p=`Gå frem ${r} måned${r===1?"":"er"}`;return{onClick:ve(a,()=>{n(t+$e({calendars:u,offset:r,maxDate:e}))}),disabled:Be({calendars:u,maxDate:e}),"aria-label":p,title:p}}function wt({date:e=P().startOf("day").toDate(),maxDate:t,minDate:n,monthsToDisplay:a=1,firstDayOfWeek:r=0,showOutsideDays:u=!0,offset:p,onDateSelected:y,onOffsetChanged:b,selected:D}){const[E,w]=T.useState(0),M=yt(p,E);function O(B){Ie(p)||w(B),b(B)}return{calendars:dt({date:e,selected:D,monthsToDisplay:a,minDate:n,maxDate:t,offset:M,firstDayOfWeek:r,showOutsideDays:u}),getDateProps:kt.bind(null,y),getBackProps:Dt.bind(null,{minDate:n,offsetMonth:M,handleOffsetChanged:O}),getForwardProps:bt.bind(null,{maxDate:t,offsetMonth:M,handleOffsetChanged:O}),handleOffsetChanged:O}}const Mt=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],Tt=["man","tir","ons","tor","fre","lør","søn"],De=T.forwardRef((e,t)=>{const{date:n,defaultSelected:a,minDate:r,maxDate:u,days:p=Tt,months:y=Mt,monthLabel:b="Velg måned",yearLabel:D="Velg år",yearsToShow:E=he,onTabOutside:w,...M}=e,O=Qe("jkl-calendar"),[{offset:A,selectedDate:B,shownDate:$},V]=T.useReducer(rt,xe(n,a,r,u),Ee),ne=$.getMonth(),Z=$.getFullYear();T.useEffect(()=>{V({type:"SET_SELECTED_DATE",newDate:xe(n,a,r,u)})},[n,a,r,u]);const ae=T.useCallback(s=>{V({type:"SET_OFFSET",newOffset:s})},[]),{calendars:N,getBackProps:H,getDateProps:W,getForwardProps:Q,handleOffsetChanged:Y}=wt({date:B,selected:B,minDate:r,maxDate:u,offset:A,onOffsetChanged:ae,firstDayOfWeek:1,...M}),x=T.useRef(null),k=T.useCallback(s=>{if(!x.current)return;const c=document.activeElement,g=x.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),v=async C=>{c?.setAttribute("tabindex","-1"),C.setAttribute("tabindex","0"),C.focus()};g.forEach((C,_)=>{const I=_+s;if(C===c)if(I<=g.length-1&&I>=0)v(g[I]);else if(s<0){if(_e({calendars:N,minDate:r})||(pe.flushSync(()=>{Y(A-je({calendars:N,offset:1,minDate:r}))}),!x.current))return;const j=x.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');j[j.length+I]&&(j[0].setAttribute("tabindex","-1"),v(j[j.length+I]))}else{if(Be({calendars:N,maxDate:u})||(pe.flushSync(()=>{Y(A+$e({calendars:N,offset:1,maxDate:u}))}),!x.current))return;const j=x.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');j[I-g.length]&&(j[0].setAttribute("tabindex","-1"),v(j[I-g.length]))}})},[Y,A,N,u,r]),X=T.useCallback(s=>{switch(s.key){case"ArrowUp":k(-7),s.preventDefault();break;case"ArrowRight":k(1),s.preventDefault();break;case"ArrowDown":k(7),s.preventDefault();break;case"ArrowLeft":k(-1),s.preventDefault();break}},[k]),te=T.useCallback(s=>{if(s.key!=="Tab")return;const c=x.current?.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!c)return;const g=c[0],v=c[c.length-1];!s.shiftKey&&document.activeElement===v?(g.focus(),s.preventDefault()):s.shiftKey&&document.activeElement===g&&(v.focus(),s.preventDefault())},[]),m=T.useCallback(s=>{const{date:c,selected:g,selectable:v,prevMonth:C,nextMonth:_}=s;return v?!!(g||c.toString()===r?.toString()||!C&&!_&&$.getFullYear()===c.getFullYear()&&B.getMonth()!==c.getMonth()&&c.getDate()===1):!1},[$,r,B]),l=T.useCallback(()=>{r&&$.getFullYear()-r.getFullYear()===0&&$.getMonth()-r.getMonth()===1?document.querySelector(`[data-testid="${O}-forward-button"]`)?.focus():u&&u.getFullYear()-$.getFullYear()===0&&u.getMonth()-$.getMonth()===1&&document.querySelector(`[data-testid="${O}-back-button"]`)?.focus()},[r,u,$,O]),i=T.useCallback(s=>{if(s.target.value.length!==4)return;const c=Number.parseInt(s.target.value);if(Number.isNaN(c))return;let g=(c-$.getFullYear())*12;const v=new Date($.getFullYear(),$.getMonth()+g,$.getDate());u&&u.getFullYear()===v.getFullYear()&&u.getMonth()<v.getMonth()?g-=v.getMonth()-u.getMonth():r&&r.getFullYear()===v.getFullYear()&&r.getMonth()>v.getMonth()&&(g+=r.getMonth()-v.getMonth()),V({type:"ADD_OFFSET",addedOffset:g})},[$,r,u]),d=T.useCallback(s=>{if(!B&&!n)return;const c=$.getFullYear()-(B||new Date).getFullYear(),g=Number.parseInt(s.target.value)-(B||new Date).getMonth();V({type:"SET_OFFSET",newOffset:c*12+g})},[B,n,$]),o=lt(Z,r,u,E),h=ut(Z,y,r,u);return f.jsx("div",{ref:t,id:O,className:"jkl-calendar","data-testid":"jkl-calendar",children:f.jsxs("div",{className:"jkl-calendar__padding",ref:x,onKeyDown:te,children:[f.jsxs("fieldset",{className:"jkl-calendar-navigation",children:[f.jsxs("div",{children:[f.jsx(we,{...H({calendars:N,onClick:l}),"data-testid":`${O}-back-button`,variant:"ghost",icon:f.jsx(Xe,{variant:"medium",bold:!0})}),f.jsx(we,{...Q({calendars:N,onClick:l}),variant:"ghost","data-testid":`${O}-forward-button`,icon:f.jsx(et,{variant:"medium",bold:!0})})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[f.jsx("select",{onChange:d,className:"jkl-calendar-navigation-dropdown__select","aria-label":b,value:ne.toString(),children:h.map(({label:s,value:c})=>f.jsx("option",{value:c,children:s},c))}),f.jsx(Me,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]}),f.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[f.jsx("select",{onChange:i,className:"jkl-calendar-navigation-dropdown__select","aria-label":D,value:Z.toString(),children:o.map(s=>f.jsx("option",{value:s,children:s},s))}),f.jsx(Me,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]})]})]}),N.map(s=>f.jsxs("table",{className:"jkl-calendar-table","data-testid":"jkl-datepicker-calendar",children:[f.jsxs("caption",{className:"jkl-sr-only",children:[y[s.month],", ",s.year]}),f.jsx("thead",{children:f.jsx("tr",{children:p.map(c=>f.jsx("th",{children:c},`${s.month}${s.year}${c}`))})}),f.jsx("tbody",{"data-testid":"jkl-datepicker-dates",children:s.weeks.map((c,g)=>f.jsx("tr",{children:c.map((v,C)=>{const _=`${s.month}${s.year}${g}${C}`;if(typeof v=="string")return f.jsx("td",{className:"jkl-calendar__date jkl-calendar__date--empty",children:v},_);const{date:I,selectable:j,today:L,prevMonth:U,nextMonth:F}=v;return f.jsx("td",{children:f.jsx("button",{...W({dateObj:v}),type:"button",className:"jkl-calendar-date-button",tabIndex:m(v)?0:-1,"aria-label":`${I.getDate()}. ${y[I.getMonth()].toLowerCase()}`,"aria-current":L?"date":void 0,"data-adjacent":U||F?"true":void 0,disabled:!j,onKeyDown:X,children:f.jsx("span",{"aria-hidden":"true",children:I.getDate()})})},_)})},`${s.month}${s.year}${g}`))})]},`${s.month}${s.year}`))]})})});De.displayName="Calendar";De.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{date:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},defaultSelected:{required:!1,tsType:{name:"Date"},description:""},days:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},months:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},monthLabel:{required:!1,tsType:{name:"string"},description:""},yearLabel:{required:!1,tsType:{name:"string"},description:""},yearsToShow:{required:!1,tsType:{name:"union",raw:'number | "all" | { previous: number; coming: number }',elements:[{name:"number"},{name:"literal",value:'"all"'},{name:"signature",type:"object",raw:"{ previous: number; coming: number }",signature:{properties:[{key:"previous",value:{name:"number",required:!0}},{key:"coming",value:{name:"number",required:!0}}]}}]},description:""},onTabOutside:{required:!0,tsType:{name:"ReactKeyboardEventHandler",raw:"React.KeyboardEventHandler"},description:""}},composes:["Omit"]};function Ot(e,t,n={inclusive:!1}){const a=typeof e=="string"?J(e):e;return a?n.inclusive?a>=t:a>t:!1}function St(e,t,n={inclusive:!1}){const a=typeof e=="string"?J(e):e;return a?n.inclusive?a<=t:a<t:!1}const xt=(e,t)=>{const n=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value")?.set;n?n.call(e,t):e.value=t},Ct=(e,t)=>{const n=e.replace(/\D/g,""),a=ge(n,{partial:!0}),r=e.replace(/\D+$/,""),u=n.length===8?ge(n):e,p=J(u)?u:null,y=t&&e!==n&&r===a&&J(e)===void 0&&p===null;return p??(y?n:e)},Et=({value:e,minDate:t,maxDate:n})=>{if(!e)return{date:null,error:null};const a=J(e);return a?t&&!Ot(a,t)?{date:a,error:"OUTSIDE_LOWER_BOUND"}:n&&!St(a,n)?{date:a,error:"OUTSIDE_UPPER_BOUND"}:{date:a,error:null}:{date:null,error:"WRONG_FORMAT"}},se=T.forwardRef((e,t)=>{const{"data-testautoid":n,id:a,className:r="",label:u="Velg dato",labelProps:p,defaultValue:y,defaultShow:b=!1,value:D,disableBeforeDate:E,disableAfterDate:w,yearsToShow:M,name:O,helpLabel:A,errorLabel:B,invalid:$,days:V,months:ne,monthLabel:Z,yearLabel:ae,placeholder:N="dd.mm.åååå",width:H="11.25rem",onChange:W,onBlur:Q,onFocus:Y,onKeyDown:x,action:k,showCalendarLabel:X="Åpne kalender",hideCalendarLabel:te="Lukk kalender",supportLabelProps:m,tooltip:l,textInputProps:i,description:d,...o}=e,h=J(E),s=h?P(h).startOf("day").toDate():void 0,c=J(w),g=c?P(c).startOf("day").toDate():void 0,[v,C]=T.useState(vt(D,y,s,g)),[_,I]=T.useState(null),[j,L]=T.useState(b),U=T.useRef(null),F=T.useRef(null),K=T.useRef(null),G=T.useRef(null),ee=T.useRef(!1),Ne=T.useCallback(S=>{G.current=S,t&&(typeof t=="function"?t(S):t.current=S)},[t]),Le=T.useCallback(S=>{if(!Y||!F.current)return;F.current.contains(S.relatedTarget)||Y(S,v,{error:_,value:S.target.value})},[Y,v,_]),Re=T.useCallback(S=>{Q&&Q(S,v,{error:_,value:S.target.value})},[Q,v,_]),qe=T.useCallback(S=>{S.key==="Escape"&&(L(!1),S.preventDefault(),S.stopPropagation()),k?.onKeyDown&&k.onKeyDown(S)},[k]),Ye=T.useCallback(S=>{const R=S.currentTarget.value,q=Ct(R,ee.current);q!==R&&xt(S.currentTarget,q);const be=R.replace(/\D/g,"");ee.current=R===be&&q===ge(be)&&q!==R&&J(q)!==void 0;const{date:de,error:ce}=Et({value:q,minDate:s,maxDate:g});de&&!ce&&L(!1),I(ce),C(de),W&&W(S,de,{error:ce,value:q})},[W,s,g]),Ue=T.useCallback(S=>{pe.flushSync(()=>{L(!j)});const R=U.current,q=R&&R.querySelector('[aria-pressed="true"]');window.requestAnimationFrame(()=>q?.focus()),k?.onClick&&k.onClick(S)},[j,k]),He=T.useCallback(({date:S})=>{if(L(!1),C(S),G.current){const R=G.current;ee.current=!1,R.value=re(S);const q=document.createEvent("HTMLEvents");q.initEvent("input",!0,!1),R.dispatchEvent(q),R.focus(),W&&W(q,S,{error:null,value:R.value})}},[W]),We=T.useCallback(S=>{S.preventDefault(),L(!1),K.current?.focus()},[]);return f.jsx(Je,{id:a,className:Ke("jkl-datepicker",r),...o,ref:F,label:u,labelProps:p,helpLabel:A,errorLabel:B,supportLabelProps:m,tooltip:l,description:d,render:S=>f.jsx(Ze,{"data-focused":j?"true":void 0,ref:Ne,"data-testid":"jkl-datepicker__input","data-testautoid":n,className:"jkl-datepicker__input",name:O,defaultValue:y,value:D,type:"text",placeholder:N,width:H,onFocus:Le,onBlur:Re,onChange:Ye,actionButton:f.jsxs(fe,{positionReference:G,open:j,onOpenChange:()=>L(!j),offset:8,children:[f.jsx(fe.Trigger,{...k,"data-testid":"jkl-datepicker__trigger",className:"jkl-text-input-action-button",title:j?te:X,tabIndex:0,onClick:Ue,onKeyDown:qe,asChild:!0,children:f.jsx(Ge,{children:f.jsx(ze,{})})}),f.jsx(fe.Content,{initialFocus:-1,padding:24,children:f.jsx(De,{ref:U,date:v,minDate:s,maxDate:g,days:V,months:ne,monthLabel:Z,yearLabel:ae,yearsToShow:M,onDateSelected:He,onTabOutside:We})})]}),...i,...S,"aria-invalid":$||!!B})})});se.displayName="DatePicker";se.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},className:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},label:{required:!1,tsType:{name:"string"},description:'@default "Velg dato"'},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"LabelProps"},{name:"literal",value:'"children"'}],raw:'Omit<LabelProps, "children">'},description:"Bruk labelProps for å sette props som `variant` og `srOnly`.\n\n@example\n ```tsx\n <DatePicker\n     labelProps={{ srOnly: true }}\n />\n ```"},defaultValue:{required:!1,tsType:{name:"string"},description:`dd.mm.åååå

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
>`},description:"Props som sendes direkte til komponentens TextInput"}},composes:["Omit"]};const{expect:z,fn:Fe,screen:Ce,waitFor:jt,within:Ae}=__STORYBOOK_MODULE_TEST__,en={title:"Komponenter/DatePicker",component:se,args:{action:{disabled:!1},days:["M","T","O","T","F","L","S"],defaultShow:!1,defaultValue:re(new Date),disableBeforeDate:re(new Date(new Date().setDate(new Date().getDate()-14))),disableAfterDate:re(new Date(new Date().setDate(new Date().getDate()+14))),description:"Kortet er gyldig i 3 måneder fra denne datoen",label:"Når skal du reise?",labelProps:{srOnly:!1,variant:"small"},hideCalendarLabel:"Lukk kalender",showCalendarLabel:"Åpne kalender",invalid:!1,months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],monthLabel:"Måned",placeholder:"dd.mm.åååå",yearsToShow:new Date().getFullYear(),yearLabel:"År",textInputProps:{disabled:!1,readOnly:!1}}};function Pe({args:e,initialValue:t=""}){const[n,a]=me.useState(t),[r,u]=me.useState(""),[p,y]=me.useState("");return f.jsxs("div",{style:{display:"grid",gap:"16px",width:"20rem"},children:[f.jsx(se,{...e,value:n,defaultValue:void 0,disableBeforeDate:void 0,disableAfterDate:void 0,onChange:(b,D,E)=>{a(b.target.value),u(D?re(D):""),y(E.value),e.onChange?.(b,D,E)}}),f.jsxs("dl",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"4px 12px",margin:0},children:[f.jsx("dt",{children:"event.target.value"}),f.jsx("dd",{"data-testid":"event-target-value",style:{margin:0},children:n||"(tom)"}),f.jsx("dt",{children:"date"}),f.jsx("dd",{"data-testid":"date-value",style:{margin:0},children:r||"(tom)"}),f.jsx("dt",{children:"meta.value"}),f.jsx("dd",{"data-testid":"meta-value",style:{margin:0},children:p||"(tom)"})]})]})}const ie={args:{},render:e=>f.jsx(se,{...e,disableBeforeDate:e.disableBeforeDate,disableAfterDate:e.disableAfterDate})},oe={name:"API ved kalenderklikk",args:{onChange:Fe()},render:e=>f.jsx(Pe,{args:e,initialValue:"10.11.2022"}),play:async({args:e,canvasElement:t,userEvent:n,step:a})=>{const r=Ae(t);await a("Velg dato i kalenderen",async()=>{await n.click(r.getByRole("button",{name:/åpne kalender/i})),await jt(()=>{z(Ce.getByTestId("jkl-calendar")).toBeInTheDocument()}),await n.click(Ce.getByLabelText("11. november"))}),await a("Vis at vanlig onChange-bruk fortsatt fungerer",async()=>{await z(r.getByTestId("event-target-value")).toHaveTextContent("11.11.2022"),await z(r.getByTestId("date-value")).toHaveTextContent("11.11.2022"),await z(r.getByTestId("meta-value")).toHaveTextContent("11.11.2022"),await z(e.onChange).toHaveBeenCalled()})}},le={name:"API ved kompakt input",args:{onChange:Fe()},render:e=>f.jsx(Pe,{args:e}),play:async({args:e,canvasElement:t,userEvent:n,step:a})=>{const r=Ae(t),u=r.getByRole("textbox",{name:/når skal du reise/i});await a('Skriv "11112022" i feltet',async()=>{await n.clear(u),await n.type(u,"11112022")}),await a("Vis at kontrollert bruk via event.target.value er uendret",async()=>{await z(u).toHaveValue("11.11.2022"),await z(r.getByTestId("event-target-value")).toHaveTextContent("11.11.2022"),await z(r.getByTestId("date-value")).toHaveTextContent("11.11.2022"),await z(r.getByTestId("meta-value")).toHaveTextContent("11.11.2022"),await z(e.onChange).toHaveBeenCalled()})}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
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
}`,...le.parameters?.docs?.source}}};const tn=["DatePicker","CalendarSelectionApiCompatibility","CompactInputApiCompatibility"];export{oe as CalendarSelectionApiCompatibility,le as CompactInputApiCompatibility,ie as DatePicker,tn as __namedExportsOrder,en as default};
