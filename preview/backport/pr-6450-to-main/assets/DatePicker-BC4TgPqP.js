import{g as Ne,r as O,j as b}from"./iframe-EPvOlv_F.js";import{c as Be}from"./clsx-B-dksMZM.js";import{r as oe}from"./index-KBhU08Hy.js";import{f as le}from"./formatDate-hwqa_80k.js";import{I as Pe}from"./IconButton-Ci1WmaR-.js";import{C as Le}from"./CalendarIcon-B2D8fdaM.js";import{I as Ae}from"./InputGroup-CU__7S7F.js";import{P as ie}from"./Popover-BKAWMyYI.js";import{B as Ye}from"./BaseTextInput-DvJ1CZnW.js";import{u as Re}from"./useId-CqIl3Kfh.js";import{B as ge}from"./Button-I5dUsh7u.js";import{A as qe,a as Ue}from"./ArrowRightIcon-CA7kkYmj.js";import{C as he}from"./ChevronDownIcon-O4FEjsLT.js";var re={exports:{}},We=re.exports,ve;function He(){return ve||(ve=1,(function(e,t){(function(n,r){e.exports=r()})(We,(function(){var n=1e3,r=6e4,s=36e5,u="millisecond",h="second",y="minute",k="hour",D="day",F="week",M="month",w="quarter",T="year",B="date",x="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,V=/\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,te={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(f){var l=["th","st","nd","rd"],i=f%100;return"["+f+(l[(i-20)%10]||l[i]||l[0])+"]"}},J=function(f,l,i){var d=String(f);return!d||d.length>=l?f:""+Array(l+1-d.length).join(i)+f},ne={s:J,z:function(f){var l=-f.utcOffset(),i=Math.abs(l),d=Math.floor(i/60),o=i%60;return(l<=0?"+":"-")+J(d,2,"0")+":"+J(o,2,"0")},m:function f(l,i){if(l.date()<i.date())return-f(i,l);var d=12*(i.year()-l.year())+(i.month()-l.month()),o=l.clone().add(d,M),p=i-o<0,a=l.clone().add(d+(p?-1:1),M);return+(-(d+(i-o)/(p?o-a:a-o))||0)},a:function(f){return f<0?Math.ceil(f)||0:Math.floor(f)},p:function(f){return{M,y:T,w:F,d:D,D:B,h:k,m:y,s:h,ms:u,Q:w}[f]||String(f||"").toLowerCase().replace(/s$/,"")},u:function(f){return f===void 0}},L="en",W={};W[L]=te;var H="$isDayjsObject",Z=function(f){return f instanceof Q||!(!f||!f[H])},q=function f(l,i,d){var o;if(!l)return L;if(typeof l=="string"){var p=l.toLowerCase();W[p]&&(o=p),i&&(W[p]=i,o=p);var a=l.split("-");if(!o&&a.length>1)return f(a[0])}else{var c=l.name;W[c]=l,o=c}return!d&&o&&(L=o),o||!d&&L},$=function(f,l){if(Z(f))return f.clone();var i=typeof l=="object"?l:{};return i.date=f,i.args=arguments,new Q(i)},v=ne;v.l=q,v.i=Z,v.w=function(f,l){return $(f,{locale:l.$L,utc:l.$u,x:l.$x,$offset:l.$offset})};var Q=(function(){function f(i){this.$L=q(i.locale,null,!0),this.parse(i),this.$x=this.$x||i.x||{},this[H]=!0}var l=f.prototype;return l.parse=function(i){this.$d=(function(d){var o=d.date,p=d.utc;if(o===null)return new Date(NaN);if(v.u(o))return new Date;if(o instanceof Date)return new Date(o);if(typeof o=="string"&&!/Z$/i.test(o)){var a=o.match(_);if(a){var c=a[2]-1||0,m=(a[7]||"0").substring(0,3);return p?new Date(Date.UTC(a[1],c,a[3]||1,a[4]||0,a[5]||0,a[6]||0,m)):new Date(a[1],c,a[3]||1,a[4]||0,a[5]||0,a[6]||0,m)}}return new Date(o)})(i),this.init()},l.init=function(){var i=this.$d;this.$y=i.getFullYear(),this.$M=i.getMonth(),this.$D=i.getDate(),this.$W=i.getDay(),this.$H=i.getHours(),this.$m=i.getMinutes(),this.$s=i.getSeconds(),this.$ms=i.getMilliseconds()},l.$utils=function(){return v},l.isValid=function(){return this.$d.toString()!==x},l.isSame=function(i,d){var o=$(i);return this.startOf(d)<=o&&o<=this.endOf(d)},l.isAfter=function(i,d){return $(i)<this.startOf(d)},l.isBefore=function(i,d){return this.endOf(d)<$(i)},l.$g=function(i,d,o){return v.u(i)?this[d]:this.set(o,i)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(i,d){var o=this,p=!!v.u(d)||d,a=v.p(i),c=function(U,N){var K=v.w(o.$u?Date.UTC(o.$y,N,U):new Date(o.$y,N,U),o);return p?K:K.endOf(D)},m=function(U,N){return v.w(o.toDate()[U].apply(o.toDate("s"),(p?[0,0,0,0]:[23,59,59,999]).slice(N)),o)},g=this.$W,E=this.$M,C=this.$D,I="set"+(this.$u?"UTC":"");switch(a){case T:return p?c(1,0):c(31,11);case M:return p?c(1,E):c(0,E+1);case F:var j=this.$locale().weekStart||0,A=(g<j?g+7:g)-j;return c(p?C-A:C+(6-A),E);case D:case B:return m(I+"Hours",0);case k:return m(I+"Minutes",1);case y:return m(I+"Seconds",2);case h:return m(I+"Milliseconds",3);default:return this.clone()}},l.endOf=function(i){return this.startOf(i,!1)},l.$set=function(i,d){var o,p=v.p(i),a="set"+(this.$u?"UTC":""),c=(o={},o[D]=a+"Date",o[B]=a+"Date",o[M]=a+"Month",o[T]=a+"FullYear",o[k]=a+"Hours",o[y]=a+"Minutes",o[h]=a+"Seconds",o[u]=a+"Milliseconds",o)[p],m=p===D?this.$D+(d-this.$W):d;if(p===M||p===T){var g=this.clone().set(B,1);g.$d[c](m),g.init(),this.$d=g.set(B,Math.min(this.$D,g.daysInMonth())).$d}else c&&this.$d[c](m);return this.init(),this},l.set=function(i,d){return this.clone().$set(i,d)},l.get=function(i){return this[v.p(i)]()},l.add=function(i,d){var o,p=this;i=Number(i);var a=v.p(d),c=function(E){var C=$(p);return v.w(C.date(C.date()+Math.round(E*i)),p)};if(a===M)return this.set(M,this.$M+i);if(a===T)return this.set(T,this.$y+i);if(a===D)return c(1);if(a===F)return c(7);var m=(o={},o[y]=r,o[k]=s,o[h]=n,o)[a]||1,g=this.$d.getTime()+i*m;return v.w(g,this)},l.subtract=function(i,d){return this.add(-1*i,d)},l.format=function(i){var d=this,o=this.$locale();if(!this.isValid())return o.invalidDate||x;var p=i||"YYYY-MM-DDTHH:mm:ssZ",a=v.z(this),c=this.$H,m=this.$m,g=this.$M,E=o.weekdays,C=o.months,I=o.meridiem,j=function(N,K,G,X){return N&&(N[K]||N(d,p))||G[K].slice(0,X)},A=function(N){return v.s(c%12||12,N,"0")},U=I||function(N,K,G){var X=N<12?"AM":"PM";return G?X.toLowerCase():X};return p.replace(V,(function(N,K){return K||(function(G){switch(G){case"YY":return String(d.$y).slice(-2);case"YYYY":return v.s(d.$y,4,"0");case"M":return g+1;case"MM":return v.s(g+1,2,"0");case"MMM":return j(o.monthsShort,g,C,3);case"MMMM":return j(C,g);case"D":return d.$D;case"DD":return v.s(d.$D,2,"0");case"d":return String(d.$W);case"dd":return j(o.weekdaysMin,d.$W,E,2);case"ddd":return j(o.weekdaysShort,d.$W,E,3);case"dddd":return E[d.$W];case"H":return String(c);case"HH":return v.s(c,2,"0");case"h":return A(1);case"hh":return A(2);case"a":return U(c,m,!0);case"A":return U(c,m,!1);case"m":return String(m);case"mm":return v.s(m,2,"0");case"s":return String(d.$s);case"ss":return v.s(d.$s,2,"0");case"SSS":return v.s(d.$ms,3,"0");case"Z":return a}return null})(N)||a.replace(":","")}))},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(i,d,o){var p,a=this,c=v.p(d),m=$(i),g=(m.utcOffset()-this.utcOffset())*r,E=this-m,C=function(){return v.m(a,m)};switch(c){case T:p=C()/12;break;case M:p=C();break;case w:p=C()/3;break;case F:p=(E-g)/6048e5;break;case D:p=(E-g)/864e5;break;case k:p=E/s;break;case y:p=E/r;break;case h:p=E/n;break;default:p=E}return o?p:v.a(p)},l.daysInMonth=function(){return this.endOf(M).$D},l.$locale=function(){return W[this.$L]},l.locale=function(i,d){if(!i)return this.$L;var o=this.clone(),p=q(i,d,!0);return p&&(o.$L=p),o},l.clone=function(){return v.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},f})(),ee=Q.prototype;return $.prototype=ee,[["$ms",u],["$s",h],["$m",y],["$H",k],["$W",D],["$M",M],["$y",T],["$D",B]].forEach((function(f){ee[f[1]]=function(l){return this.$g(l,f[0],f[1])}})),$.extend=function(f,l){return f.$i||(f(l,Q,$),f.$i=!0),$},$.locale=q,$.isDayjs=Z,$.unix=function(f){return $(1e3*f)},$.en=W[L],$.Ls=W,$.p={},$}))})(re)),re.exports}var Ve=He();const P=Ne(Ve),Ke=(e,t)=>{let n;switch(t.type){case"SET_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+t.newOffset),{...e,offset:t.newOffset,shownDate:n};case"ADD_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+e.offset+t.addedOffset),{...e,offset:e.offset+t.addedOffset,shownDate:n};case"SET_SELECTED_DATE":return De(t.newDate);default:return e}},De=e=>({selectedDate:e,offset:0,shownDate:e}),Ge=/^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/,ze=/^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;function Je(e){const t=`${e.getDate()}`.padStart(2,"0"),n=`${e.getMonth()+1}`.padStart(2,"0");return`${t}.${n}.${e.getFullYear()}`}const Ze=e=>{const t=Ge.exec(e);if(t)return t.slice(1,4);const n=ze.exec(e);if(!n)return;const r=n.slice(1,4);return r.reverse(),r};function z(e){if(!e)return;const t=Ze(e);if(!t)return;const n=Number.parseInt(new Date().toLocaleString("no-NB",{year:"2-digit"})),r=D=>D>n?D+1900:D+2e3,s=Number.parseInt(t[0],10),u=Number.parseInt(t[1],10)-1,h=Number.parseInt(t[2],10),y=h>99?h:r(h),k=new Date(y,u,s,0,0,0);return k.getMonth()===u&&k.getFullYear()===y?k:void 0}function de(...e){return t=>e.some(n=>(n?.(t),t.defaultPrevented))}function be({calendars:e,offset:t,minDate:n}){if(t>1&&n){const{firstDayOfMonth:r}=e[0],s=P(n).diff(r,"months");s<t&&(t=s)}return t}const ue=3;function Qe(e,t,n,r){if(t&&t.getFullYear()>e)return[t.getFullYear().toString()];if(n&&n.getFullYear()<e)return[n.getFullYear().toString()];let s=!1,u,h;r==="all"?(s=!0,u=ue,h=ue):(u=typeof r=="number"?r:r.previous,h=typeof r=="number"?r:r.coming);let y=e-u;if(t){const w=s?t.getFullYear():y;y=Math.max(t.getFullYear(),w)}let k=e+h;if(n){const w=s?n.getFullYear():k;k=Math.min(n.getFullYear(),w)}const D=Math.max(k-y+1,1);return[...Array(D).keys()].map(w=>w+y).map(w=>w.toString())}function Xe(e,t,n,r){const s=n?.getFullYear()||e,u=n?.getMonth()===void 0?0:n.getMonth(),h=r?.getFullYear()||e,y=r?.getMonth()===void 0?11:r.getMonth();let k=0,D=11;return s===e&&(k=u),h===e&&(D=y),t.map((M,w)=>({value:w.toString(),label:M})).filter(({value:M})=>Number.parseInt(M)>=k&&Number.parseInt(M)<=D)}function Me({calendars:e,offset:t,maxDate:n}){if(t>1&&n){const{lastDayOfMonth:r}=e[e.length-1],s=P(n).diff(r,"months");s<t&&(t=s)}return t}function we({calendars:e,minDate:t}){return t?P(e[0].firstDayOfMonth).subtract(1,"day").isBefore(t):!1}function Oe({calendars:e,maxDate:t}){return t?P(e.at(-1)?.lastDayOfMonth).add(1,"day").isAfter(t):!1}function et({date:e,selected:t,monthsToDisplay:n,offset:r,minDate:s,maxDate:u,firstDayOfWeek:h,showOutsideDays:y}){const k=[],D=tt(e,s,u);for(let F=0;F<n;F++){const M=nt({month:D.getMonth()+F+r,year:D.getFullYear(),selectedDates:t,minDate:s,maxDate:u,firstDayOfWeek:h,showOutsideDays:y});k.push(M)}return k}function tt(e,t,n){let r=P(e).startOf("day");if(t){const s=P(t).startOf("day");r.isBefore(s)&&(r=s)}if(n){const s=P(n).startOf("day");r.isAfter(s)&&(r=s)}return r.toDate()}function nt({month:e,year:t,selectedDates:n,minDate:r,maxDate:s,firstDayOfWeek:u,showOutsideDays:h}){const y=st(e,t),k=y.daysInMonth;e=y.month,t=y.year;const D=[];for(let x=1;x<=k;x++){const _=new Date(t,e,x),V={date:_,selected:ce(n,_),selectable:fe(r,s,_),today:P().isSame(_,"day"),prevMonth:!1,nextMonth:!1};D.push(V)}const F=new Date(t,e,1),M=new Date(t,e,k),w=rt({firstDayOfMonth:F,minDate:r,maxDate:s,selectedDates:n,firstDayOfWeek:u,showOutsideDays:h}),T=at({lastDayOfMonth:M,minDate:r,maxDate:s,selectedDates:n,firstDayOfWeek:u,showOutsideDays:h});D.unshift(...w),D.push(...T);const B=it(D);return{firstDayOfMonth:F,lastDayOfMonth:M,month:e,year:t,weeks:B}}function rt({firstDayOfMonth:e,minDate:t,maxDate:n,selectedDates:r,firstDayOfWeek:s,showOutsideDays:u}){const h=[];let y=(e.getDay()+7-s)%7;if(u){const k=P(e).subtract(1,"day"),D=k.date(),F=k.month(),M=k.year();let w=0;for(;w<y;){const T=new Date(M,F,D-w),B={date:T,selected:ce(r,T),selectable:fe(t,n,T),today:!1,prevMonth:!0,nextMonth:!1};h.unshift(B),w++}}else for(;y>0;)h.unshift(""),y--;return h}function at({lastDayOfMonth:e,minDate:t,maxDate:n,selectedDates:r,firstDayOfWeek:s,showOutsideDays:u}){const h=[];let y=(e.getDay()+7-s)%7;if(u){const k=P(e).add(1,"day"),D=k.month(),F=k.year();let M=0;for(;M<6-y;){const w=new Date(F,D,1+M),T={date:w,selected:ce(r,w),selectable:fe(t,n,w),today:!1,prevMonth:!1,nextMonth:!0};h.push(T),M++}}else for(;y<6;)h.push(""),y++;return h}function st(e,t){const n=new Date(t,e,1),r=n.getMonth(),s=n.getFullYear();return{daysInMonth:32-new Date(s,r,32).getDate(),month:r,year:s}}function it(e){const t=Math.ceil(e.length/7),n=[];for(let r=0;r<t;r++){n[r]=[];for(let s=0;s<7;s++)n[r].push(e[r*7+s])}return n}function ce(e,t){return e?(Array.isArray(e)?e:[e]).some(r=>r instanceof Date&&P(r).startOf("day").valueOf()===P(t).startOf("day").valueOf()):!1}function fe(e,t,n){return!(e&&P(n).isBefore(e)||t&&P(n).isAfter(t))}function ye(e,t,n){return!!(n&&e>n||t&&e<t)}function ot(e,t,n,r){const s=z(e),u=z(t);return s?ye(s,n,r)?null:s:u?ye(u,n,r)?null:u:null}function ke(e,t,n,r){let s=e||t||new Date;return n&&(s=n>s?n:s),r&&(s=r<s?r:s),s}function Te(e){return e!==void 0}function lt(e,t){return Te(e)?e:t}function ut(e,{onClick:t,dateObj:n}){return{onClick:de(t,r=>{e(n,r)}),disabled:!n.selectable,"aria-pressed":n.selected,role:"button"}}function dt({minDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:r,offset:s=1,calendars:u}){const h=`Gå tilbake ${s} måned${s===1?"":"er"}`;return{onClick:de(r,()=>{n(t-be({calendars:u,offset:s,minDate:e}))}),disabled:we({calendars:u,minDate:e}),"aria-label":h,title:h}}function ct({maxDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:r,offset:s=1,calendars:u}){const h=`Gå frem ${s} måned${s===1?"":"er"}`;return{onClick:de(r,()=>{n(t+Me({calendars:u,offset:s,maxDate:e}))}),disabled:Oe({calendars:u,maxDate:e}),"aria-label":h,title:h}}function ft({date:e=P().startOf("day").toDate(),maxDate:t,minDate:n,monthsToDisplay:r=1,firstDayOfWeek:s=0,showOutsideDays:u=!0,offset:h,onDateSelected:y,onOffsetChanged:k,selected:D}){const[F,M]=O.useState(0),w=lt(h,F);function T(x){Te(h)||M(x),k(x)}return{calendars:et({date:e,selected:D,monthsToDisplay:r,minDate:n,maxDate:t,offset:w,firstDayOfWeek:s,showOutsideDays:u}),getDateProps:ut.bind(null,y),getBackProps:dt.bind(null,{minDate:n,offsetMonth:w,handleOffsetChanged:T}),getForwardProps:ct.bind(null,{maxDate:t,offsetMonth:w,handleOffsetChanged:T}),handleOffsetChanged:T}}const mt=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],pt=["man","tir","ons","tor","fre","lør","søn"],me=O.forwardRef((e,t)=>{const{date:n,defaultSelected:r,minDate:s,maxDate:u,days:h=pt,months:y=mt,monthLabel:k="Velg måned",yearLabel:D="Velg år",yearsToShow:F=ue,onTabOutside:M,...w}=e,T=Re("jkl-calendar"),[{offset:B,selectedDate:x,shownDate:_},V]=O.useReducer(Ke,ke(n,r,s,u),De),te=_.getMonth(),J=_.getFullYear();O.useEffect(()=>{V({type:"SET_SELECTED_DATE",newDate:ke(n,r,s,u)})},[n,r,s,u]);const ne=O.useCallback(a=>{V({type:"SET_OFFSET",newOffset:a})},[]),{calendars:L,getBackProps:W,getDateProps:H,getForwardProps:Z,handleOffsetChanged:q}=ft({date:x,selected:x,minDate:s,maxDate:u,offset:B,onOffsetChanged:ne,firstDayOfWeek:1,...w}),$=O.useRef(null),v=O.useCallback(a=>{if(!$.current)return;const c=document.activeElement,m=$.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),g=async E=>{c?.setAttribute("tabindex","-1"),E.setAttribute("tabindex","0"),E.focus()};m.forEach((E,C)=>{const I=C+a;if(E===c)if(I<=m.length-1&&I>=0)g(m[I]);else if(a<0){if(we({calendars:L,minDate:s})||(oe.flushSync(()=>{q(B-be({calendars:L,offset:1,minDate:s}))}),!$.current))return;const j=$.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');j[j.length+I]&&(j[0].setAttribute("tabindex","-1"),g(j[j.length+I]))}else{if(Oe({calendars:L,maxDate:u})||(oe.flushSync(()=>{q(B+Me({calendars:L,offset:1,maxDate:u}))}),!$.current))return;const j=$.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');j[I-m.length]&&(j[0].setAttribute("tabindex","-1"),g(j[I-m.length]))}})},[q,B,L,u,s]),Q=O.useCallback(a=>{switch(a.key){case"ArrowUp":v(-7),a.preventDefault();break;case"ArrowRight":v(1),a.preventDefault();break;case"ArrowDown":v(7),a.preventDefault();break;case"ArrowLeft":v(-1),a.preventDefault();break}},[v]),ee=O.useCallback(a=>{if(a.key!=="Tab")return;const c=$.current?.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!c)return;const m=c[0],g=c[c.length-1];!a.shiftKey&&document.activeElement===g?(m.focus(),a.preventDefault()):a.shiftKey&&document.activeElement===m&&(g.focus(),a.preventDefault())},[]),f=O.useCallback(a=>{const{date:c,selected:m,selectable:g,prevMonth:E,nextMonth:C}=a;return g?!!(m||c.toString()===s?.toString()||!E&&!C&&_.getFullYear()===c.getFullYear()&&x.getMonth()!==c.getMonth()&&c.getDate()===1):!1},[_,s,x]),l=O.useCallback(()=>{s&&_.getFullYear()-s.getFullYear()===0&&_.getMonth()-s.getMonth()===1?document.querySelector(`[data-testid="${T}-forward-button"]`)?.focus():u&&u.getFullYear()-_.getFullYear()===0&&u.getMonth()-_.getMonth()===1&&document.querySelector(`[data-testid="${T}-back-button"]`)?.focus()},[s,u,_,T]),i=O.useCallback(a=>{if(a.target.value.length!==4)return;const c=Number.parseInt(a.target.value);if(Number.isNaN(c))return;let m=(c-_.getFullYear())*12;const g=new Date(_.getFullYear(),_.getMonth()+m,_.getDate());u&&u.getFullYear()===g.getFullYear()&&u.getMonth()<g.getMonth()?m-=g.getMonth()-u.getMonth():s&&s.getFullYear()===g.getFullYear()&&s.getMonth()>g.getMonth()&&(m+=s.getMonth()-g.getMonth()),V({type:"ADD_OFFSET",addedOffset:m})},[_,s,u]),d=O.useCallback(a=>{if(!x&&!n)return;const c=_.getFullYear()-(x||new Date).getFullYear(),m=Number.parseInt(a.target.value)-(x||new Date).getMonth();V({type:"SET_OFFSET",newOffset:c*12+m})},[x,n,_]),o=Qe(J,s,u,F),p=Xe(J,y,s,u);return b.jsx("div",{ref:t,id:T,className:"jkl-calendar","data-testid":"jkl-calendar",children:b.jsxs("div",{className:"jkl-calendar__padding",ref:$,onKeyDown:ee,children:[b.jsxs("fieldset",{className:"jkl-calendar-navigation",children:[b.jsxs("div",{children:[b.jsx(ge,{...W({calendars:L,onClick:l}),"data-testid":`${T}-back-button`,variant:"ghost",icon:b.jsx(qe,{variant:"medium",bold:!0})}),b.jsx(ge,{...Z({calendars:L,onClick:l}),variant:"ghost","data-testid":`${T}-forward-button`,icon:b.jsx(Ue,{variant:"medium",bold:!0})})]}),b.jsxs("div",{children:[b.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[b.jsx("select",{onChange:d,className:"jkl-calendar-navigation-dropdown__select","aria-label":k,value:te.toString(),children:p.map(({label:a,value:c})=>b.jsx("option",{value:c,children:a},c))}),b.jsx(he,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]}),b.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[b.jsx("select",{onChange:i,className:"jkl-calendar-navigation-dropdown__select","aria-label":D,value:J.toString(),children:o.map(a=>b.jsx("option",{value:a,children:a},a))}),b.jsx(he,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]})]})]}),L.map(a=>b.jsxs("table",{className:"jkl-calendar-table","data-testid":"jkl-datepicker-calendar",children:[b.jsxs("caption",{className:"jkl-sr-only",children:[y[a.month],", ",a.year]}),b.jsx("thead",{children:b.jsx("tr",{children:h.map(c=>b.jsx("th",{children:c},`${a.month}${a.year}${c}`))})}),b.jsx("tbody",{"data-testid":"jkl-datepicker-dates",children:a.weeks.map((c,m)=>b.jsx("tr",{children:c.map((g,E)=>{const C=`${a.month}${a.year}${m}${E}`;if(typeof g=="string")return b.jsx("td",{className:"jkl-calendar__date jkl-calendar__date--empty",children:g},C);const{date:I,selectable:j,today:A,prevMonth:U,nextMonth:N}=g;return b.jsx("td",{children:b.jsx("button",{...H({dateObj:g}),type:"button",className:"jkl-calendar-date-button",tabIndex:f(g)?0:-1,"aria-label":`${I.getDate()}. ${y[I.getMonth()].toLowerCase()}`,"aria-current":A?"date":void 0,"data-adjacent":U||N?"true":void 0,disabled:!j,onKeyDown:Q,children:b.jsx("span",{"aria-hidden":"true",children:I.getDate()})})},C)})},`${a.month}${a.year}${m}`))})]},`${a.month}${a.year}`))]})})});me.displayName="Calendar";me.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{date:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},defaultSelected:{required:!1,tsType:{name:"Date"},description:""},days:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},months:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},monthLabel:{required:!1,tsType:{name:"string"},description:""},yearLabel:{required:!1,tsType:{name:"string"},description:""},yearsToShow:{required:!1,tsType:{name:"union",raw:'number | "all" | { previous: number; coming: number }',elements:[{name:"number"},{name:"literal",value:'"all"'},{name:"signature",type:"object",raw:"{ previous: number; coming: number }",signature:{properties:[{key:"previous",value:{name:"number",required:!0}},{key:"coming",value:{name:"number",required:!0}}]}}]},description:""},onTabOutside:{required:!0,tsType:{name:"ReactKeyboardEventHandler",raw:"React.KeyboardEventHandler"},description:""}},composes:["Omit"]};function gt(e,t,n={inclusive:!1}){const r=typeof e=="string"?z(e):e;return r?n.inclusive?r>=t:r>t:!1}function ht(e,t,n={inclusive:!1}){const r=typeof e=="string"?z(e):e;return r?n.inclusive?r<=t:r<t:!1}const vt=(e,t)=>{const n=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value")?.set;n?n.call(e,t):e.value=t},yt=(e,t)=>{const n=e.replace(/\D/g,""),r=le(n,{partial:!0}),s=e.replace(/\D+$/,""),u=n.length===8?le(n):e,h=z(u)?u:null,y=t&&e!==n&&s===r&&z(e)===void 0&&h===null;return h??(y?n:e)},kt=({value:e,minDate:t,maxDate:n})=>{if(!e)return{date:null,error:null};const r=z(e);return r?t&&!gt(r,t)?{date:r,error:"OUTSIDE_LOWER_BOUND"}:n&&!ht(r,n)?{date:r,error:"OUTSIDE_UPPER_BOUND"}:{date:r,error:null}:{date:null,error:"WRONG_FORMAT"}},Se=O.forwardRef((e,t)=>{const{"data-testautoid":n,id:r,className:s="",label:u="Velg dato",labelProps:h,defaultValue:y,defaultShow:k=!1,value:D,disableBeforeDate:F,disableAfterDate:M,yearsToShow:w,name:T,helpLabel:B,errorLabel:x,invalid:_,days:V,months:te,monthLabel:J,yearLabel:ne,placeholder:L="dd.mm.åååå",width:W="11.25rem",onChange:H,onBlur:Z,onFocus:q,onKeyDown:$,action:v,showCalendarLabel:Q="Åpne kalender",hideCalendarLabel:ee="Lukk kalender",supportLabelProps:f,tooltip:l,textInputProps:i,description:d,...o}=e,p=z(F),a=p?P(p).startOf("day").toDate():void 0,c=z(M),m=c?P(c).startOf("day").toDate():void 0,[g,E]=O.useState(ot(D,y,a,m)),[C,I]=O.useState(null),[j,A]=O.useState(k),U=O.useRef(null),N=O.useRef(null),K=O.useRef(null),G=O.useRef(null),X=O.useRef(!1),$e=O.useCallback(S=>{G.current=S,t&&(typeof t=="function"?t(S):t.current=S)},[t]),Ee=O.useCallback(S=>{if(!q||!N.current)return;N.current.contains(S.relatedTarget)||q(S,g,{error:C,value:S.target.value})},[q,g,C]),je=O.useCallback(S=>{Z&&Z(S,g,{error:C,value:S.target.value})},[Z,g,C]),_e=O.useCallback(S=>{S.key==="Escape"&&(A(!1),S.preventDefault(),S.stopPropagation()),v?.onKeyDown&&v.onKeyDown(S)},[v]),Ce=O.useCallback(S=>{const Y=S.currentTarget.value,R=yt(Y,X.current);R!==Y&&vt(S.currentTarget,R);const pe=Y.replace(/\D/g,"");X.current=Y===pe&&R===le(pe)&&R!==Y&&z(R)!==void 0;const{date:ae,error:se}=kt({value:R,minDate:a,maxDate:m});ae&&!se&&A(!1),I(se),E(ae),H&&H(S,ae,{error:se,value:R})},[H,a,m]),Fe=O.useCallback(S=>{oe.flushSync(()=>{A(!j)});const Y=U.current,R=Y&&Y.querySelector('[aria-pressed="true"]');window.requestAnimationFrame(()=>R?.focus()),v?.onClick&&v.onClick(S)},[j,v]),xe=O.useCallback(({date:S})=>{if(A(!1),E(S),G.current){const Y=G.current;X.current=!1,Y.value=Je(S);const R=document.createEvent("HTMLEvents");R.initEvent("input",!0,!1),Y.dispatchEvent(R),Y.focus(),H&&H(R,S,{error:null,value:Y.value})}},[H]),Ie=O.useCallback(S=>{S.preventDefault(),A(!1),K.current?.focus()},[]);return b.jsx(Ae,{id:r,className:Be("jkl-datepicker",s),...o,ref:N,label:u,labelProps:h,helpLabel:B,errorLabel:x,supportLabelProps:f,tooltip:l,description:d,render:S=>b.jsx(Ye,{"data-focused":j?"true":void 0,ref:$e,"data-testid":"jkl-datepicker__input","data-testautoid":n,className:"jkl-datepicker__input",name:T,defaultValue:y,value:D,type:"text",placeholder:L,width:W,onFocus:Ee,onBlur:je,onChange:Ce,actionButton:b.jsxs(ie,{positionReference:G,open:j,onOpenChange:()=>A(!j),offset:8,children:[b.jsx(ie.Trigger,{...v,"data-testid":"jkl-datepicker__trigger",className:"jkl-text-input-action-button",title:j?ee:Q,tabIndex:0,onClick:Fe,onKeyDown:_e,asChild:!0,children:b.jsx(Pe,{children:b.jsx(Le,{})})}),b.jsx(ie.Content,{initialFocus:-1,padding:24,children:b.jsx(me,{ref:U,date:g,minDate:a,maxDate:m,days:V,months:te,monthLabel:J,yearLabel:ne,yearsToShow:w,onDateSelected:xe,onTabOutside:Ie})})]}),...i,...S,"aria-invalid":_||!!x})})});Se.displayName="DatePicker";Se.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},className:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},label:{required:!1,tsType:{name:"string"},description:'@default "Velg dato"'},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"LabelProps"},{name:"literal",value:'"children"'}],raw:'Omit<LabelProps, "children">'},description:"Bruk labelProps for å sette props som `variant` og `srOnly`.\n\n@example\n ```tsx\n <DatePicker\n     labelProps={{ srOnly: true }}\n />\n ```"},defaultValue:{required:!1,tsType:{name:"string"},description:`dd.mm.åååå

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
>`},description:"Props som sendes direkte til komponentens TextInput"}},composes:["Omit"]};export{Se as D,Je as f};
