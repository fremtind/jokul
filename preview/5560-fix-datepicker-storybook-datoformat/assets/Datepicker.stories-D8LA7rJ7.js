import{g as xe,r as S,j as k}from"./iframe-DjGGBRHa.js";import{c as Be}from"./clsx-B-dksMZM.js";import{r as ue}from"./index-BvNdNSgG.js";import{I as Ne}from"./IconButton-A_btpkPC.js";import{C as Ie}from"./CalendarIcon-drZVy9kY.js";import{I as Ae}from"./InputGroup-BSynNQF1.js";import{P as oe}from"./Popover-BG0uWnRV.js";import{B as Le}from"./BaseTextInput-Do2-oz12.js";import{u as Pe}from"./useId-D7PxPySb.js";import{B as ge}from"./Button-DIGiyr_3.js";import{A as qe,a as Ye}from"./ArrowRightIcon-CGuGPZ1g.js";import{C as he}from"./ChevronDownIcon-Dfw1QLau.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RRRSgMzJ.js";import"./Icon-DguMtUG2.js";import"./Label-Dl1rztBl.js";import"./SupportLabel-B8vWOWmi.js";import"./WarningIcon-Dwa2HNUU.js";import"./floating-ui.react-BZoDgqi5.js";import"./getThemeAndSize-CIzqY74s.js";import"./usePreviousValue-DkKfi6zq.js";import"./Loader-BEp1eekZ.js";import"./useDelayedRender-BXKEAQuK.js";var se={exports:{}},Re=se.exports,ve;function Ue(){return ve||(ve=1,(function(e,t){(function(n,s){e.exports=s()})(Re,(function(){var n=1e3,s=6e4,a=36e5,d="millisecond",h="second",y="minute",D="hour",b="day",C="week",w="month",M="quarter",T="year",I="date",x="Invalid Date",j=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,K=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,te={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(f){var o=["th","st","nd","rd"],i=f%100;return"["+f+(o[(i-20)%10]||o[i]||o[0])+"]"}},J=function(f,o,i){var u=String(f);return!u||u.length>=o?f:""+Array(o+1-u.length).join(i)+f},ne={s:J,z:function(f){var o=-f.utcOffset(),i=Math.abs(o),u=Math.floor(i/60),l=i%60;return(o<=0?"+":"-")+J(u,2,"0")+":"+J(l,2,"0")},m:function f(o,i){if(o.date()<i.date())return-f(i,o);var u=12*(i.year()-o.year())+(i.month()-o.month()),l=o.clone().add(u,w),p=i-l<0,r=o.clone().add(u+(p?-1:1),w);return+(-(u+(i-l)/(p?l-r:r-l))||0)},a:function(f){return f<0?Math.ceil(f)||0:Math.floor(f)},p:function(f){return{M:w,y:T,w:C,d:b,D:I,h:D,m:y,s:h,ms:d,Q:M}[f]||String(f||"").toLowerCase().replace(/s$/,"")},u:function(f){return f===void 0}},L="en",U={};U[L]=te;var W="$isDayjsObject",z=function(f){return f instanceof Z||!(!f||!f[W])},q=function f(o,i,u){var l;if(!o)return L;if(typeof o=="string"){var p=o.toLowerCase();U[p]&&(l=p),i&&(U[p]=i,l=p);var r=o.split("-");if(!l&&r.length>1)return f(r[0])}else{var c=o.name;U[c]=o,l=c}return!u&&l&&(L=l),l||!u&&L},$=function(f,o){if(z(f))return f.clone();var i=typeof o=="object"?o:{};return i.date=f,i.args=arguments,new Z(i)},v=ne;v.l=q,v.i=z,v.w=function(f,o){return $(f,{locale:o.$L,utc:o.$u,x:o.$x,$offset:o.$offset})};var Z=(function(){function f(i){this.$L=q(i.locale,null,!0),this.parse(i),this.$x=this.$x||i.x||{},this[W]=!0}var o=f.prototype;return o.parse=function(i){this.$d=(function(u){var l=u.date,p=u.utc;if(l===null)return new Date(NaN);if(v.u(l))return new Date;if(l instanceof Date)return new Date(l);if(typeof l=="string"&&!/Z$/i.test(l)){var r=l.match(j);if(r){var c=r[2]-1||0,m=(r[7]||"0").substring(0,3);return p?new Date(Date.UTC(r[1],c,r[3]||1,r[4]||0,r[5]||0,r[6]||0,m)):new Date(r[1],c,r[3]||1,r[4]||0,r[5]||0,r[6]||0,m)}}return new Date(l)})(i),this.init()},o.init=function(){var i=this.$d;this.$y=i.getFullYear(),this.$M=i.getMonth(),this.$D=i.getDate(),this.$W=i.getDay(),this.$H=i.getHours(),this.$m=i.getMinutes(),this.$s=i.getSeconds(),this.$ms=i.getMilliseconds()},o.$utils=function(){return v},o.isValid=function(){return this.$d.toString()!==x},o.isSame=function(i,u){var l=$(i);return this.startOf(u)<=l&&l<=this.endOf(u)},o.isAfter=function(i,u){return $(i)<this.startOf(u)},o.isBefore=function(i,u){return this.endOf(u)<$(i)},o.$g=function(i,u,l){return v.u(i)?this[u]:this.set(l,i)},o.unix=function(){return Math.floor(this.valueOf()/1e3)},o.valueOf=function(){return this.$d.getTime()},o.startOf=function(i,u){var l=this,p=!!v.u(u)||u,r=v.p(i),c=function(Y,N){var V=v.w(l.$u?Date.UTC(l.$y,N,Y):new Date(l.$y,N,Y),l);return p?V:V.endOf(b)},m=function(Y,N){return v.w(l.toDate()[Y].apply(l.toDate("s"),(p?[0,0,0,0]:[23,59,59,999]).slice(N)),l)},g=this.$W,E=this.$M,F=this.$D,B="set"+(this.$u?"UTC":"");switch(r){case T:return p?c(1,0):c(31,11);case w:return p?c(1,E):c(0,E+1);case C:var _=this.$locale().weekStart||0,P=(g<_?g+7:g)-_;return c(p?F-P:F+(6-P),E);case b:case I:return m(B+"Hours",0);case D:return m(B+"Minutes",1);case y:return m(B+"Seconds",2);case h:return m(B+"Milliseconds",3);default:return this.clone()}},o.endOf=function(i){return this.startOf(i,!1)},o.$set=function(i,u){var l,p=v.p(i),r="set"+(this.$u?"UTC":""),c=(l={},l[b]=r+"Date",l[I]=r+"Date",l[w]=r+"Month",l[T]=r+"FullYear",l[D]=r+"Hours",l[y]=r+"Minutes",l[h]=r+"Seconds",l[d]=r+"Milliseconds",l)[p],m=p===b?this.$D+(u-this.$W):u;if(p===w||p===T){var g=this.clone().set(I,1);g.$d[c](m),g.init(),this.$d=g.set(I,Math.min(this.$D,g.daysInMonth())).$d}else c&&this.$d[c](m);return this.init(),this},o.set=function(i,u){return this.clone().$set(i,u)},o.get=function(i){return this[v.p(i)]()},o.add=function(i,u){var l,p=this;i=Number(i);var r=v.p(u),c=function(E){var F=$(p);return v.w(F.date(F.date()+Math.round(E*i)),p)};if(r===w)return this.set(w,this.$M+i);if(r===T)return this.set(T,this.$y+i);if(r===b)return c(1);if(r===C)return c(7);var m=(l={},l[y]=s,l[D]=a,l[h]=n,l)[r]||1,g=this.$d.getTime()+i*m;return v.w(g,this)},o.subtract=function(i,u){return this.add(-1*i,u)},o.format=function(i){var u=this,l=this.$locale();if(!this.isValid())return l.invalidDate||x;var p=i||"YYYY-MM-DDTHH:mm:ssZ",r=v.z(this),c=this.$H,m=this.$m,g=this.$M,E=l.weekdays,F=l.months,B=l.meridiem,_=function(N,V,G,ee){return N&&(N[V]||N(u,p))||G[V].slice(0,ee)},P=function(N){return v.s(c%12||12,N,"0")},Y=B||function(N,V,G){var ee=N<12?"AM":"PM";return G?ee.toLowerCase():ee};return p.replace(K,(function(N,V){return V||(function(G){switch(G){case"YY":return String(u.$y).slice(-2);case"YYYY":return v.s(u.$y,4,"0");case"M":return g+1;case"MM":return v.s(g+1,2,"0");case"MMM":return _(l.monthsShort,g,F,3);case"MMMM":return _(F,g);case"D":return u.$D;case"DD":return v.s(u.$D,2,"0");case"d":return String(u.$W);case"dd":return _(l.weekdaysMin,u.$W,E,2);case"ddd":return _(l.weekdaysShort,u.$W,E,3);case"dddd":return E[u.$W];case"H":return String(c);case"HH":return v.s(c,2,"0");case"h":return P(1);case"hh":return P(2);case"a":return Y(c,m,!0);case"A":return Y(c,m,!1);case"m":return String(m);case"mm":return v.s(m,2,"0");case"s":return String(u.$s);case"ss":return v.s(u.$s,2,"0");case"SSS":return v.s(u.$ms,3,"0");case"Z":return r}return null})(N)||r.replace(":","")}))},o.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},o.diff=function(i,u,l){var p,r=this,c=v.p(u),m=$(i),g=(m.utcOffset()-this.utcOffset())*s,E=this-m,F=function(){return v.m(r,m)};switch(c){case T:p=F()/12;break;case w:p=F();break;case M:p=F()/3;break;case C:p=(E-g)/6048e5;break;case b:p=(E-g)/864e5;break;case D:p=E/a;break;case y:p=E/s;break;case h:p=E/n;break;default:p=E}return l?p:v.a(p)},o.daysInMonth=function(){return this.endOf(w).$D},o.$locale=function(){return U[this.$L]},o.locale=function(i,u){if(!i)return this.$L;var l=this.clone(),p=q(i,u,!0);return p&&(l.$L=p),l},o.clone=function(){return v.w(this.$d,this)},o.toDate=function(){return new Date(this.valueOf())},o.toJSON=function(){return this.isValid()?this.toISOString():null},o.toISOString=function(){return this.$d.toISOString()},o.toString=function(){return this.$d.toUTCString()},f})(),X=Z.prototype;return $.prototype=X,[["$ms",d],["$s",h],["$m",y],["$H",D],["$W",b],["$M",w],["$y",T],["$D",I]].forEach((function(f){X[f[1]]=function(o){return this.$g(o,f[0],f[1])}})),$.extend=function(f,o){return f.$i||(f(o,Z,$),f.$i=!0),$},$.locale=q,$.isDayjs=z,$.unix=function(f){return $(1e3*f)},$.en=U[L],$.Ls=U,$.p={},$}))})(se)),se.exports}var We=Ue();const A=xe(We),He=(e,t)=>{let n;switch(t.type){case"SET_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+t.newOffset),{...e,offset:t.newOffset,shownDate:n};case"ADD_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+e.offset+t.addedOffset),{...e,offset:e.offset+t.addedOffset,shownDate:n};case"SET_SELECTED_DATE":return De(t.newDate);default:return e}},De=e=>({selectedDate:e,offset:0,shownDate:e}),Ke=/^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/,Ve=/^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;function ie(e){const t=`${e.getDate()}`.padStart(2,"0"),n=`${e.getMonth()+1}`.padStart(2,"0");return`${t}.${n}.${e.getFullYear()}`}const Ge=e=>{const t=Ke.exec(e);if(t)return t.slice(1,4);const n=Ve.exec(e);if(!n)return;const s=n.slice(1,4);return s.reverse(),s};function Q(e){if(!e)return;const t=Ge(e);if(!t)return;const n=Number.parseInt(new Date().toLocaleString("no-NB",{year:"2-digit"})),s=b=>b>n?b+1900:b+2e3,a=Number.parseInt(t[0],10),d=Number.parseInt(t[1],10)-1,h=Number.parseInt(t[2],10),y=h>99?h:s(h),D=new Date(y,d,a,0,0,0);return D.getMonth()===d&&D.getFullYear()===y?D:void 0}function ce(...e){return t=>e.some(n=>(n?.(t),t.defaultPrevented))}function be({calendars:e,offset:t,minDate:n}){if(t>1&&n){const{firstDayOfMonth:s}=e[0],a=A(n).diff(s,"months");a<t&&(t=a)}return t}const de=3;function Je(e,t,n,s){if(t&&t.getFullYear()>e)return[t.getFullYear().toString()];if(n&&n.getFullYear()<e)return[n.getFullYear().toString()];let a=!1,d,h;s==="all"?(a=!0,d=de,h=de):(d=typeof s=="number"?s:s.previous,h=typeof s=="number"?s:s.coming);let y=e-d;if(t){const M=a?t.getFullYear():y;y=Math.max(t.getFullYear(),M)}let D=e+h;if(n){const M=a?n.getFullYear():D;D=Math.min(n.getFullYear(),M)}const b=Math.max(D-y+1,1);return[...Array(b).keys()].map(M=>M+y).map(M=>M.toString())}function ze(e,t,n,s){const a=n?.getFullYear()||e,d=n?.getMonth()===void 0?0:n.getMonth(),h=s?.getFullYear()||e,y=s?.getMonth()===void 0?11:s.getMonth();let D=0,b=11;return a===e&&(D=d),h===e&&(b=y),t.map((w,M)=>({value:M.toString(),label:w})).filter(({value:w})=>Number.parseInt(w)>=D&&Number.parseInt(w)<=b)}function we({calendars:e,offset:t,maxDate:n}){if(t>1&&n){const{lastDayOfMonth:s}=e[e.length-1],a=A(n).diff(s,"months");a<t&&(t=a)}return t}function Me({calendars:e,minDate:t}){return t?A(e[0].firstDayOfMonth).subtract(1,"day").isBefore(t):!1}function Oe({calendars:e,maxDate:t}){return t?A(e.at(-1)?.lastDayOfMonth).add(1,"day").isAfter(t):!1}function Ze({date:e,selected:t,monthsToDisplay:n,offset:s,minDate:a,maxDate:d,firstDayOfWeek:h,showOutsideDays:y}){const D=[],b=Qe(e,a,d);for(let C=0;C<n;C++){const w=Xe({month:b.getMonth()+C+s,year:b.getFullYear(),selectedDates:t,minDate:a,maxDate:d,firstDayOfWeek:h,showOutsideDays:y});D.push(w)}return D}function Qe(e,t,n){let s=A(e).startOf("day");if(t){const a=A(t).startOf("day");s.isBefore(a)&&(s=a)}if(n){const a=A(n).startOf("day");s.isAfter(a)&&(s=a)}return s.toDate()}function Xe({month:e,year:t,selectedDates:n,minDate:s,maxDate:a,firstDayOfWeek:d,showOutsideDays:h}){const y=nt(e,t),D=y.daysInMonth;e=y.month,t=y.year;const b=[];for(let x=1;x<=D;x++){const j=new Date(t,e,x),K={date:j,selected:fe(n,j),selectable:me(s,a,j),today:A().isSame(j,"day"),prevMonth:!1,nextMonth:!1};b.push(K)}const C=new Date(t,e,1),w=new Date(t,e,D),M=et({firstDayOfMonth:C,minDate:s,maxDate:a,selectedDates:n,firstDayOfWeek:d,showOutsideDays:h}),T=tt({lastDayOfMonth:w,minDate:s,maxDate:a,selectedDates:n,firstDayOfWeek:d,showOutsideDays:h});b.unshift(...M),b.push(...T);const I=rt(b);return{firstDayOfMonth:C,lastDayOfMonth:w,month:e,year:t,weeks:I}}function et({firstDayOfMonth:e,minDate:t,maxDate:n,selectedDates:s,firstDayOfWeek:a,showOutsideDays:d}){const h=[];let y=(e.getDay()+7-a)%7;if(d){const D=A(e).subtract(1,"day"),b=D.date(),C=D.month(),w=D.year();let M=0;for(;M<y;){const T=new Date(w,C,b-M),I={date:T,selected:fe(s,T),selectable:me(t,n,T),today:!1,prevMonth:!0,nextMonth:!1};h.unshift(I),M++}}else for(;y>0;)h.unshift(""),y--;return h}function tt({lastDayOfMonth:e,minDate:t,maxDate:n,selectedDates:s,firstDayOfWeek:a,showOutsideDays:d}){const h=[];let y=(e.getDay()+7-a)%7;if(d){const D=A(e).add(1,"day"),b=D.month(),C=D.year();let w=0;for(;w<6-y;){const M=new Date(C,b,1+w),T={date:M,selected:fe(s,M),selectable:me(t,n,M),today:!1,prevMonth:!1,nextMonth:!0};h.push(T),w++}}else for(;y<6;)h.push(""),y++;return h}function nt(e,t){const n=new Date(t,e,1),s=n.getMonth(),a=n.getFullYear();return{daysInMonth:32-new Date(a,s,32).getDate(),month:s,year:a}}function rt(e){const t=Math.ceil(e.length/7),n=[];for(let s=0;s<t;s++){n[s]=[];for(let a=0;a<7;a++)n[s].push(e[s*7+a])}return n}function fe(e,t){return e?(Array.isArray(e)?e:[e]).some(s=>s instanceof Date&&A(s).startOf("day").valueOf()===A(t).startOf("day").valueOf()):!1}function me(e,t,n){return!(e&&A(n).isBefore(e)||t&&A(n).isAfter(t))}function ye(e,t,n){return!!(n&&e>n||t&&e<t)}function at(e,t,n,s){const a=Q(e),d=Q(t);return a?ye(a,n,s)?null:a:d?ye(d,n,s)?null:d:null}function ke(e,t,n,s){let a=e||t||new Date;return n&&(a=n>a?n:a),s&&(a=s<a?s:a),a}function Te(e){return e!==void 0}function st(e,t){return Te(e)?e:t}function it(e,{onClick:t,dateObj:n}){return{onClick:ce(t,s=>{e(n,s)}),disabled:!n.selectable,"aria-pressed":n.selected,role:"button"}}function lt({minDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:s,offset:a=1,calendars:d}){const h=`Gå tilbake ${a} måned${a===1?"":"er"}`;return{onClick:ce(s,()=>{n(t-be({calendars:d,offset:a,minDate:e}))}),disabled:Me({calendars:d,minDate:e}),"aria-label":h,title:h}}function ot({maxDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:s,offset:a=1,calendars:d}){const h=`Gå frem ${a} måned${a===1?"":"er"}`;return{onClick:ce(s,()=>{n(t+we({calendars:d,offset:a,maxDate:e}))}),disabled:Oe({calendars:d,maxDate:e}),"aria-label":h,title:h}}function ut({date:e=A().startOf("day").toDate(),maxDate:t,minDate:n,monthsToDisplay:s=1,firstDayOfWeek:a=0,showOutsideDays:d=!0,offset:h,onDateSelected:y,onOffsetChanged:D,selected:b}){const[C,w]=S.useState(0),M=st(h,C);function T(x){Te(h)||w(x),D(x)}return{calendars:Ze({date:e,selected:b,monthsToDisplay:s,minDate:n,maxDate:t,offset:M,firstDayOfWeek:a,showOutsideDays:d}),getDateProps:it.bind(null,y),getBackProps:lt.bind(null,{minDate:n,offsetMonth:M,handleOffsetChanged:T}),getForwardProps:ot.bind(null,{maxDate:t,offsetMonth:M,handleOffsetChanged:T}),handleOffsetChanged:T}}const dt=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],ct=["man","tir","ons","tor","fre","lør","søn"],pe=S.forwardRef((e,t)=>{const{date:n,defaultSelected:s,minDate:a,maxDate:d,days:h=ct,months:y=dt,monthLabel:D="Velg måned",yearLabel:b="Velg år",yearsToShow:C=de,onTabOutside:w,...M}=e,T=Pe("jkl-calendar"),[{offset:I,selectedDate:x,shownDate:j},K]=S.useReducer(He,ke(n,s,a,d),De),te=j.getMonth(),J=j.getFullYear();S.useEffect(()=>{K({type:"SET_SELECTED_DATE",newDate:ke(n,s,a,d)})},[n,s,a,d]);const ne=S.useCallback(r=>{K({type:"SET_OFFSET",newOffset:r})},[]),{calendars:L,getBackProps:U,getDateProps:W,getForwardProps:z,handleOffsetChanged:q}=ut({date:x,selected:x,minDate:a,maxDate:d,offset:I,onOffsetChanged:ne,firstDayOfWeek:1,...M}),$=S.useRef(null),v=S.useCallback(r=>{if(!$.current)return;const c=document.activeElement,m=$.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),g=async E=>{c?.setAttribute("tabindex","-1"),E.setAttribute("tabindex","0"),E.focus()};m.forEach((E,F)=>{const B=F+r;if(E===c)if(B<=m.length-1&&B>=0)g(m[B]);else if(r<0){if(Me({calendars:L,minDate:a})||(ue.flushSync(()=>{q(I-be({calendars:L,offset:1,minDate:a}))}),!$.current))return;const _=$.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');_[_.length+B]&&(_[0].setAttribute("tabindex","-1"),g(_[_.length+B]))}else{if(Oe({calendars:L,maxDate:d})||(ue.flushSync(()=>{q(I+we({calendars:L,offset:1,maxDate:d}))}),!$.current))return;const _=$.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');_[B-m.length]&&(_[0].setAttribute("tabindex","-1"),g(_[B-m.length]))}})},[q,I,L,d,a]),Z=S.useCallback(r=>{switch(r.key){case"ArrowUp":v(-7),r.preventDefault();break;case"ArrowRight":v(1),r.preventDefault();break;case"ArrowDown":v(7),r.preventDefault();break;case"ArrowLeft":v(-1),r.preventDefault();break}},[v]),X=S.useCallback(r=>{if(r.key!=="Tab")return;const c=$.current?.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!c)return;const m=c[0],g=c[c.length-1];!r.shiftKey&&document.activeElement===g?(m.focus(),r.preventDefault()):r.shiftKey&&document.activeElement===m&&(g.focus(),r.preventDefault())},[]),f=S.useCallback(r=>{const{date:c,selected:m,selectable:g,prevMonth:E,nextMonth:F}=r;return g?!!(m||c.toString()===a?.toString()||!E&&!F&&j.getFullYear()===c.getFullYear()&&x.getMonth()!==c.getMonth()&&c.getDate()===1):!1},[j,a,x]),o=S.useCallback(()=>{a&&j.getFullYear()-a.getFullYear()===0&&j.getMonth()-a.getMonth()===1?document.querySelector(`[data-testid="${T}-forward-button"]`)?.focus():d&&d.getFullYear()-j.getFullYear()===0&&d.getMonth()-j.getMonth()===1&&document.querySelector(`[data-testid="${T}-back-button"]`)?.focus()},[a,d,j,T]),i=S.useCallback(r=>{if(r.target.value.length!==4)return;const c=Number.parseInt(r.target.value);if(Number.isNaN(c))return;let m=(c-j.getFullYear())*12;const g=new Date(j.getFullYear(),j.getMonth()+m,j.getDate());d&&d.getFullYear()===g.getFullYear()&&d.getMonth()<g.getMonth()?m-=g.getMonth()-d.getMonth():a&&a.getFullYear()===g.getFullYear()&&a.getMonth()>g.getMonth()&&(m+=a.getMonth()-g.getMonth()),K({type:"ADD_OFFSET",addedOffset:m})},[j,a,d]),u=S.useCallback(r=>{if(!x&&!n)return;const c=j.getFullYear()-(x||new Date).getFullYear(),m=Number.parseInt(r.target.value)-(x||new Date).getMonth();K({type:"SET_OFFSET",newOffset:c*12+m})},[x,n,j]),l=Je(J,a,d,C),p=ze(J,y,a,d);return k.jsx("div",{ref:t,id:T,className:"jkl-calendar","data-testid":"jkl-calendar",children:k.jsxs("div",{className:"jkl-calendar__padding",ref:$,onKeyDown:X,children:[k.jsxs("fieldset",{className:"jkl-calendar-navigation",children:[k.jsxs("div",{children:[k.jsx(ge,{...U({calendars:L,onClick:o}),"data-testid":`${T}-back-button`,variant:"ghost",icon:k.jsx(qe,{variant:"medium",bold:!0})}),k.jsx(ge,{...z({calendars:L,onClick:o}),variant:"ghost","data-testid":`${T}-forward-button`,icon:k.jsx(Ye,{variant:"medium",bold:!0})})]}),k.jsxs("div",{children:[k.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[k.jsx("select",{onChange:u,className:"jkl-calendar-navigation-dropdown__select","aria-label":D,value:te.toString(),children:p.map(({label:r,value:c})=>k.jsx("option",{value:c,children:r},c))}),k.jsx(he,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]}),k.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[k.jsx("select",{onChange:i,className:"jkl-calendar-navigation-dropdown__select","aria-label":b,value:J.toString(),children:l.map(r=>k.jsx("option",{value:r,children:r},r))}),k.jsx(he,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]})]})]}),L.map(r=>k.jsxs("table",{className:"jkl-calendar-table","data-testid":"jkl-datepicker-calendar",children:[k.jsxs("caption",{className:"jkl-sr-only",children:[y[r.month],", ",r.year]}),k.jsx("thead",{children:k.jsx("tr",{children:h.map(c=>k.jsx("th",{children:c},`${r.month}${r.year}${c}`))})}),k.jsx("tbody",{"data-testid":"jkl-datepicker-dates",children:r.weeks.map((c,m)=>k.jsx("tr",{children:c.map((g,E)=>{const F=`${r.month}${r.year}${m}${E}`;if(typeof g=="string")return k.jsx("td",{className:"jkl-calendar__date jkl-calendar__date--empty",children:g},F);const{date:B,selectable:_,today:P,prevMonth:Y,nextMonth:N}=g;return k.jsx("td",{children:k.jsx("button",{...W({dateObj:g}),type:"button",className:"jkl-calendar-date-button",tabIndex:f(g)?0:-1,"aria-label":`${B.getDate()}. ${y[B.getMonth()].toLowerCase()}`,"aria-current":P?"date":void 0,"data-adjacent":Y||N?"true":void 0,disabled:!_,onKeyDown:Z,children:k.jsx("span",{"aria-hidden":"true",children:B.getDate()})})},F)})},`${r.month}${r.year}${m}`))})]},`${r.month}${r.year}`))]})})});pe.displayName="Calendar";pe.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{date:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},defaultSelected:{required:!1,tsType:{name:"Date"},description:""},days:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},months:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},monthLabel:{required:!1,tsType:{name:"string"},description:""},yearLabel:{required:!1,tsType:{name:"string"},description:""},yearsToShow:{required:!1,tsType:{name:"union",raw:'number | "all" | { previous: number; coming: number }',elements:[{name:"number"},{name:"literal",value:'"all"'},{name:"signature",type:"object",raw:"{ previous: number; coming: number }",signature:{properties:[{key:"previous",value:{name:"number",required:!0}},{key:"coming",value:{name:"number",required:!0}}]}}]},description:""},onTabOutside:{required:!0,tsType:{name:"ReactKeyboardEventHandler",raw:"React.KeyboardEventHandler"},description:""}},composes:["Omit"]};function ft(e,t,n={inclusive:!1}){const s=typeof e=="string"?Q(e):e;return s?n.inclusive?s>=t:s>t:!1}function mt(e,t,n={inclusive:!1}){const s=typeof e=="string"?Q(e):e;return s?n.inclusive?s<=t:s<t:!1}const le=S.forwardRef((e,t)=>{const{"data-testautoid":n,id:s,className:a="",label:d="Velg dato",labelProps:h,defaultValue:y,defaultShow:D=!1,value:b,disableBeforeDate:C,disableAfterDate:w,yearsToShow:M,name:T,helpLabel:I,errorLabel:x,invalid:j,days:K,months:te,monthLabel:J,yearLabel:ne,placeholder:L="dd.mm.åååå",width:U="11.25rem",onChange:W,onBlur:z,onFocus:q,onKeyDown:$,action:v,showCalendarLabel:Z="Åpne kalender",hideCalendarLabel:X="Lukk kalender",supportLabelProps:f,tooltip:o,textInputProps:i,description:u,...l}=e,p=Q(C),r=p?A(p).startOf("day").toDate():void 0,c=Q(w),m=c?A(c).startOf("day").toDate():void 0,[g,E]=S.useState(at(b,y,r,m)),[F,B]=S.useState(null),[_,P]=S.useState(D),Y=S.useRef(null),N=S.useRef(null),V=S.useRef(null),G=S.useRef(null),ee=S.useCallback(O=>{G.current=O,t&&(typeof t=="function"?t(O):t.current=O)},[t]),Se=S.useCallback(O=>{if(!q||!N.current)return;N.current.contains(O.relatedTarget)||q(O,g,{error:F,value:O.target.value})},[q,g,F]),$e=S.useCallback(O=>{z&&z(O,g,{error:F,value:O.target.value})},[z,g,F]),Ee=S.useCallback(O=>{O.key==="Escape"&&(P(!1),O.preventDefault(),O.stopPropagation()),v?.onKeyDown&&v.onKeyDown(O)},[v]),_e=S.useCallback(O=>{let R=null,H=null;if(O.target.value){const re=Q(O.target.value);re?r&&!ft(re,r)?H="OUTSIDE_LOWER_BOUND":m&&!mt(re,m)?H="OUTSIDE_UPPER_BOUND":P(!1):H="WRONG_FORMAT",R=re||null}B(H),E(R),W&&W(O,R,{error:H,value:O.target.value})},[W,r,m]),je=S.useCallback(O=>{ue.flushSync(()=>{P(!_)});const R=Y.current,H=R&&R.querySelector('[aria-pressed="true"]');window.requestAnimationFrame(()=>H?.focus()),v?.onClick&&v.onClick(O)},[_,v]),Fe=S.useCallback(({date:O})=>{if(P(!1),E(O),G.current){const R=G.current;R.value=ie(O);const H=document.createEvent("HTMLEvents");H.initEvent("input",!0,!1),R.dispatchEvent(H),R.focus(),W&&W(H,O,{error:null,value:R.value})}},[W]),Ce=S.useCallback(O=>{O.preventDefault(),P(!1),V.current?.focus()},[]);return k.jsx(Ae,{id:s,className:Be("jkl-datepicker",a),...l,ref:N,label:d,labelProps:h,helpLabel:I,errorLabel:x,supportLabelProps:f,tooltip:o,description:u,render:O=>k.jsx(Le,{"data-focused":_?"true":void 0,ref:ee,"data-testid":"jkl-datepicker__input","data-testautoid":n,className:"jkl-datepicker__input",name:T,defaultValue:y,value:b,type:"text",placeholder:L,width:U,onFocus:Se,onBlur:$e,onChange:_e,actionButton:k.jsxs(oe,{positionReference:G,open:_,onOpenChange:()=>P(!_),offset:8,children:[k.jsx(oe.Trigger,{...v,"data-testid":"jkl-datepicker__trigger",className:"jkl-text-input-action-button",title:_?X:Z,tabIndex:0,onClick:je,onKeyDown:Ee,asChild:!0,children:k.jsx(Ne,{children:k.jsx(Ie,{})})}),k.jsx(oe.Content,{initialFocus:-1,padding:24,children:k.jsx(pe,{ref:Y,date:g,minDate:r,maxDate:m,days:K,months:te,monthLabel:J,yearLabel:ne,yearsToShow:M,onDateSelected:Fe,onTabOutside:Ce})})]}),...i,...O,"aria-invalid":j||!!x})})});le.displayName="DatePicker";le.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},className:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},label:{required:!1,tsType:{name:"string"},description:'@default "Velg dato"'},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"LabelProps"},{name:"literal",value:'"children"'}],raw:'Omit<LabelProps, "children">'},description:"Bruk labelProps for å sette props som `variant` og `srOnly`.\n\n@example\n ```tsx\n <DatePicker\n     labelProps={{ srOnly: true }}\n />\n ```"},defaultValue:{required:!1,tsType:{name:"string"},description:`dd.mm.åååå

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
>`},description:"Props som sendes direkte til komponentens TextInput"}},composes:["Omit"]};const At={title:"Komponenter/DatePicker",component:le,args:{action:{disabled:!1},days:["M","T","O","T","F","L","S"],defaultShow:!1,defaultValue:ie(new Date),disableBeforeDate:ie(new Date(new Date().setDate(new Date().getDate()-14))),disableAfterDate:ie(new Date(new Date().setDate(new Date().getDate()+14))),description:"Kortet er gyldig i 3 måneder fra denne datoen",label:"Når skal du reise?",labelProps:{srOnly:!1,variant:"small"},hideCalendarLabel:"Lukk kalender",showCalendarLabel:"Åpne kalender",invalid:!1,months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],monthLabel:"Måned",placeholder:"dd.mm.åååå",yearsToShow:new Date().getFullYear(),yearLabel:"År",textInputProps:{disabled:!1,readOnly:!1}}},ae={args:{},render:e=>k.jsx(le,{...e,disableBeforeDate:e.disableBeforeDate,disableAfterDate:e.disableAfterDate})};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <DatePickerComponent {...args} disableBeforeDate={args.disableBeforeDate} disableAfterDate={args.disableAfterDate} />
}`,...ae.parameters?.docs?.source}}};const Lt=["DatePicker"];export{ae as DatePicker,Lt as __namedExportsOrder,At as default};
