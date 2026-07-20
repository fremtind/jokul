import{g as Ve,r as M,j as f,R as me}from"./iframe-BfR9NbKK.js";import{c as We}from"./clsx-B-dksMZM.js";import{r as pe}from"./index-vdpP2YZ-.js";import{f as ge}from"./formatDate-hwqa_80k.js";import{I as Ke}from"./IconButton-BIHTQ1GY.js";import{C as Ge}from"./CalendarIcon-Cr01maSc.js";import{I as ze}from"./InputGroup-BgLWHP-8.js";import{P as fe}from"./Popover-DE9Skw_-.js";import{B as Je}from"./BaseTextInput-CioF01aN.js";import{u as Ze}from"./useId-BttXqTMK.js";import{B as we}from"./Button-CcOEx2NX.js";import{A as Qe,a as Xe}from"./ArrowRightIcon-CuK4PPZk.js";import{C as Te}from"./ChevronDownIcon-B-amI_oE.js";import{p as J,f as re}from"./utils-BJNJLcJU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CoNYykt1.js";import"./Icon-DC4OOp0H.js";import"./Label-klYfu7sg.js";import"./SupportLabel-47eNgv_G.js";import"./SuccessIcon-LuNM0v2k.js";import"./WarningIcon-Drkn0AOx.js";import"./floating-ui.react-DbdVf1l8.js";import"./getThemeAndSize-CZAj3IXt.js";import"./usePreviousValue-DxfEukvp.js";import"./Loader-z-cE-fqQ.js";import"./useDelayedRender-Cr4_I6RD.js";var ue={exports:{}},et=ue.exports,Me;function tt(){return Me||(Me=1,(function(e,n){(function(t,r){e.exports=r()})(et,(function(){var t=1e3,r=6e4,a=36e5,u="millisecond",v="second",k="minute",D="hour",b="day",x="week",w="month",T="quarter",O="year",A="date",B="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,W=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ne={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(m){var o=["th","st","nd","rd"],i=m%100;return"["+m+(o[(i-20)%10]||o[i]||o[0])+"]"}},Z=function(m,o,i){var d=String(m);return!d||d.length>=o?m:""+Array(o+1-d.length).join(i)+m},ae={s:Z,z:function(m){var o=-m.utcOffset(),i=Math.abs(o),d=Math.floor(i/60),l=i%60;return(o<=0?"+":"-")+Z(d,2,"0")+":"+Z(l,2,"0")},m:function m(o,i){if(o.date()<i.date())return-m(i,o);var d=12*(i.year()-o.year())+(i.month()-o.month()),l=o.clone().add(d,w),g=i-l<0,s=o.clone().add(d+(g?-1:1),w);return+(-(d+(i-l)/(g?l-s:s-l))||0)},a:function(m){return m<0?Math.ceil(m)||0:Math.floor(m)},p:function(m){return{M:w,y:O,w:x,d:b,D:A,h:D,m:k,s:v,ms:u,Q:T}[m]||String(m||"").toLowerCase().replace(/s$/,"")},u:function(m){return m===void 0}},L="en",H={};H[L]=ne;var V="$isDayjsObject",Q=function(m){return m instanceof X||!(!m||!m[V])},U=function m(o,i,d){var l;if(!o)return L;if(typeof o=="string"){var g=o.toLowerCase();H[g]&&(l=g),i&&(H[g]=i,l=g);var s=o.split("-");if(!l&&s.length>1)return m(s[0])}else{var c=o.name;H[c]=o,l=c}return!d&&l&&(L=l),l||!d&&L},S=function(m,o){if(Q(m))return m.clone();var i=typeof o=="object"?o:{};return i.date=m,i.args=arguments,new X(i)},y=ae;y.l=U,y.i=Q,y.w=function(m,o){return S(m,{locale:o.$L,utc:o.$u,x:o.$x,$offset:o.$offset})};var X=(function(){function m(i){this.$L=U(i.locale,null,!0),this.parse(i),this.$x=this.$x||i.x||{},this[V]=!0}var o=m.prototype;return o.parse=function(i){this.$d=(function(d){var l=d.date,g=d.utc;if(l===null)return new Date(NaN);if(y.u(l))return new Date;if(l instanceof Date)return new Date(l);if(typeof l=="string"&&!/Z$/i.test(l)){var s=l.match(_);if(s){var c=s[2]-1||0,p=(s[7]||"0").substring(0,3);return g?new Date(Date.UTC(s[1],c,s[3]||1,s[4]||0,s[5]||0,s[6]||0,p)):new Date(s[1],c,s[3]||1,s[4]||0,s[5]||0,s[6]||0,p)}}return new Date(l)})(i),this.init()},o.init=function(){var i=this.$d;this.$y=i.getFullYear(),this.$M=i.getMonth(),this.$D=i.getDate(),this.$W=i.getDay(),this.$H=i.getHours(),this.$m=i.getMinutes(),this.$s=i.getSeconds(),this.$ms=i.getMilliseconds()},o.$utils=function(){return y},o.isValid=function(){return this.$d.toString()!==B},o.isSame=function(i,d){var l=S(i);return this.startOf(d)<=l&&l<=this.endOf(d)},o.isAfter=function(i,d){return S(i)<this.startOf(d)},o.isBefore=function(i,d){return this.endOf(d)<S(i)},o.$g=function(i,d,l){return y.u(i)?this[d]:this.set(l,i)},o.unix=function(){return Math.floor(this.valueOf()/1e3)},o.valueOf=function(){return this.$d.getTime()},o.startOf=function(i,d){var l=this,g=!!y.u(d)||d,s=y.p(i),c=function(Y,F){var K=y.w(l.$u?Date.UTC(l.$y,F,Y):new Date(l.$y,F,Y),l);return g?K:K.endOf(b)},p=function(Y,F){return y.w(l.toDate()[Y].apply(l.toDate("s"),(g?[0,0,0,0]:[23,59,59,999]).slice(F)),l)},h=this.$W,E=this.$M,$=this.$D,I="set"+(this.$u?"UTC":"");switch(s){case O:return g?c(1,0):c(31,11);case w:return g?c(1,E):c(0,E+1);case x:var j=this.$locale().weekStart||0,N=(h<j?h+7:h)-j;return c(g?$-N:$+(6-N),E);case b:case A:return p(I+"Hours",0);case D:return p(I+"Minutes",1);case k:return p(I+"Seconds",2);case v:return p(I+"Milliseconds",3);default:return this.clone()}},o.endOf=function(i){return this.startOf(i,!1)},o.$set=function(i,d){var l,g=y.p(i),s="set"+(this.$u?"UTC":""),c=(l={},l[b]=s+"Date",l[A]=s+"Date",l[w]=s+"Month",l[O]=s+"FullYear",l[D]=s+"Hours",l[k]=s+"Minutes",l[v]=s+"Seconds",l[u]=s+"Milliseconds",l)[g],p=g===b?this.$D+(d-this.$W):d;if(g===w||g===O){var h=this.clone().set(A,1);h.$d[c](p),h.init(),this.$d=h.set(A,Math.min(this.$D,h.daysInMonth())).$d}else c&&this.$d[c](p);return this.init(),this},o.set=function(i,d){return this.clone().$set(i,d)},o.get=function(i){return this[y.p(i)]()},o.add=function(i,d){var l,g=this;i=Number(i);var s=y.p(d),c=function(E){var $=S(g);return y.w($.date($.date()+Math.round(E*i)),g)};if(s===w)return this.set(w,this.$M+i);if(s===O)return this.set(O,this.$y+i);if(s===b)return c(1);if(s===x)return c(7);var p=(l={},l[k]=r,l[D]=a,l[v]=t,l)[s]||1,h=this.$d.getTime()+i*p;return y.w(h,this)},o.subtract=function(i,d){return this.add(-1*i,d)},o.format=function(i){var d=this,l=this.$locale();if(!this.isValid())return l.invalidDate||B;var g=i||"YYYY-MM-DDTHH:mm:ssZ",s=y.z(this),c=this.$H,p=this.$m,h=this.$M,E=l.weekdays,$=l.months,I=l.meridiem,j=function(F,K,G,ee){return F&&(F[K]||F(d,g))||G[K].slice(0,ee)},N=function(F){return y.s(c%12||12,F,"0")},Y=I||function(F,K,G){var ee=F<12?"AM":"PM";return G?ee.toLowerCase():ee};return g.replace(W,(function(F,K){return K||(function(G){switch(G){case"YY":return String(d.$y).slice(-2);case"YYYY":return y.s(d.$y,4,"0");case"M":return h+1;case"MM":return y.s(h+1,2,"0");case"MMM":return j(l.monthsShort,h,$,3);case"MMMM":return j($,h);case"D":return d.$D;case"DD":return y.s(d.$D,2,"0");case"d":return String(d.$W);case"dd":return j(l.weekdaysMin,d.$W,E,2);case"ddd":return j(l.weekdaysShort,d.$W,E,3);case"dddd":return E[d.$W];case"H":return String(c);case"HH":return y.s(c,2,"0");case"h":return N(1);case"hh":return N(2);case"a":return Y(c,p,!0);case"A":return Y(c,p,!1);case"m":return String(p);case"mm":return y.s(p,2,"0");case"s":return String(d.$s);case"ss":return y.s(d.$s,2,"0");case"SSS":return y.s(d.$ms,3,"0");case"Z":return s}return null})(F)||s.replace(":","")}))},o.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},o.diff=function(i,d,l){var g,s=this,c=y.p(d),p=S(i),h=(p.utcOffset()-this.utcOffset())*r,E=this-p,$=function(){return y.m(s,p)};switch(c){case O:g=$()/12;break;case w:g=$();break;case T:g=$()/3;break;case x:g=(E-h)/6048e5;break;case b:g=(E-h)/864e5;break;case D:g=E/a;break;case k:g=E/r;break;case v:g=E/t;break;default:g=E}return l?g:y.a(g)},o.daysInMonth=function(){return this.endOf(w).$D},o.$locale=function(){return H[this.$L]},o.locale=function(i,d){if(!i)return this.$L;var l=this.clone(),g=U(i,d,!0);return g&&(l.$L=g),l},o.clone=function(){return y.w(this.$d,this)},o.toDate=function(){return new Date(this.valueOf())},o.toJSON=function(){return this.isValid()?this.toISOString():null},o.toISOString=function(){return this.$d.toISOString()},o.toString=function(){return this.$d.toUTCString()},m})(),te=X.prototype;return S.prototype=te,[["$ms",u],["$s",v],["$m",k],["$H",D],["$W",b],["$M",w],["$y",O],["$D",A]].forEach((function(m){te[m[1]]=function(o){return this.$g(o,m[0],m[1])}})),S.extend=function(m,o){return m.$i||(m(o,X,S),m.$i=!0),S},S.locale=U,S.isDayjs=Q,S.unix=function(m){return S(1e3*m)},S.en=H[L],S.Ls=H,S.p={},S}))})(ue)),ue.exports}var nt=tt();const P=Ve(nt),at=(e,n)=>{let t;switch(n.type){case"SET_OFFSET":return t=new Date(e.selectedDate),t.setMonth(e.selectedDate.getMonth()+n.newOffset),{...e,offset:n.newOffset,shownDate:t};case"ADD_OFFSET":return t=new Date(e.selectedDate),t.setMonth(e.selectedDate.getMonth()+e.offset+n.addedOffset),{...e,offset:e.offset+n.addedOffset,shownDate:t};case"SET_SELECTED_DATE":return Ee(n.newDate);default:return e}},Ee=e=>({selectedDate:e,offset:0,shownDate:e});function ve(...e){return n=>e.some(t=>(t?.(n),n.defaultPrevented))}function xe({calendars:e,offset:n,minDate:t}){if(n>1&&t){const{firstDayOfMonth:r}=e[0],a=P(t).diff(r,"months");a<n&&(n=a)}return n}const he=3;function rt(e,n,t,r){if(n&&n.getFullYear()>e)return[n.getFullYear().toString()];if(t&&t.getFullYear()<e)return[t.getFullYear().toString()];let a=!1,u,v;r==="all"?(a=!0,u=he,v=he):(u=typeof r=="number"?r:r.previous,v=typeof r=="number"?r:r.coming);let k=e-u;if(n){const T=a?n.getFullYear():k;k=Math.max(n.getFullYear(),T)}let D=e+v;if(t){const T=a?t.getFullYear():D;D=Math.min(t.getFullYear(),T)}const b=Math.max(D-k+1,1);return[...Array(b).keys()].map(T=>T+k).map(T=>T.toString())}function st(e,n,t,r){const a=t?.getFullYear()||e,u=t?.getMonth()===void 0?0:t.getMonth(),v=r?.getFullYear()||e,k=r?.getMonth()===void 0?11:r.getMonth();let D=0,b=11;return a===e&&(D=u),v===e&&(b=k),n.map((w,T)=>({value:T.toString(),label:w})).filter(({value:w})=>Number.parseInt(w)>=D&&Number.parseInt(w)<=b)}function je({calendars:e,offset:n,maxDate:t}){if(n>1&&t){const{lastDayOfMonth:r}=e[e.length-1],a=P(t).diff(r,"months");a<n&&(n=a)}return n}function _e({calendars:e,minDate:n}){return n?P(e[0].firstDayOfMonth).subtract(1,"day").isBefore(n):!1}function $e({calendars:e,maxDate:n}){return n?P(e.at(-1)?.lastDayOfMonth).add(1,"day").isAfter(n):!1}function it({date:e,selected:n,monthsToDisplay:t,offset:r,minDate:a,maxDate:u,firstDayOfWeek:v,showOutsideDays:k}){const D=[],b=lt(e,a,u);for(let x=0;x<t;x++){const w=ot({month:b.getMonth()+x+r,year:b.getFullYear(),selectedDates:n,minDate:a,maxDate:u,firstDayOfWeek:v,showOutsideDays:k});D.push(w)}return D}function lt(e,n,t){let r=P(e).startOf("day");if(n){const a=P(n).startOf("day");r.isBefore(a)&&(r=a)}if(t){const a=P(t).startOf("day");r.isAfter(a)&&(r=a)}return r.toDate()}function ot({month:e,year:n,selectedDates:t,minDate:r,maxDate:a,firstDayOfWeek:u,showOutsideDays:v}){const k=ct(e,n),D=k.daysInMonth;e=k.month,n=k.year;const b=[];for(let B=1;B<=D;B++){const _=new Date(n,e,B),W={date:_,selected:ye(t,_),selectable:ke(r,a,_),today:P().isSame(_,"day"),prevMonth:!1,nextMonth:!1};b.push(W)}const x=new Date(n,e,1),w=new Date(n,e,D),T=ut({firstDayOfMonth:x,minDate:r,maxDate:a,selectedDates:t,firstDayOfWeek:u,showOutsideDays:v}),O=dt({lastDayOfMonth:w,minDate:r,maxDate:a,selectedDates:t,firstDayOfWeek:u,showOutsideDays:v});b.unshift(...T),b.push(...O);const A=mt(b);return{firstDayOfMonth:x,lastDayOfMonth:w,month:e,year:n,weeks:A}}function ut({firstDayOfMonth:e,minDate:n,maxDate:t,selectedDates:r,firstDayOfWeek:a,showOutsideDays:u}){const v=[];let k=(e.getDay()+7-a)%7;if(u){const D=P(e).subtract(1,"day"),b=D.date(),x=D.month(),w=D.year();let T=0;for(;T<k;){const O=new Date(w,x,b-T),A={date:O,selected:ye(r,O),selectable:ke(n,t,O),today:!1,prevMonth:!0,nextMonth:!1};v.unshift(A),T++}}else for(;k>0;)v.unshift(""),k--;return v}function dt({lastDayOfMonth:e,minDate:n,maxDate:t,selectedDates:r,firstDayOfWeek:a,showOutsideDays:u}){const v=[];let k=(e.getDay()+7-a)%7;if(u){const D=P(e).add(1,"day"),b=D.month(),x=D.year();let w=0;for(;w<6-k;){const T=new Date(x,b,1+w),O={date:T,selected:ye(r,T),selectable:ke(n,t,T),today:!1,prevMonth:!1,nextMonth:!0};v.push(O),w++}}else for(;k<6;)v.push(""),k++;return v}function ct(e,n){const t=new Date(n,e,1),r=t.getMonth(),a=t.getFullYear();return{daysInMonth:32-new Date(a,r,32).getDate(),month:r,year:a}}function mt(e){const n=Math.ceil(e.length/7),t=[];for(let r=0;r<n;r++){t[r]=[];for(let a=0;a<7;a++)t[r].push(e[r*7+a])}return t}function ye(e,n){return e?(Array.isArray(e)?e:[e]).some(r=>r instanceof Date&&P(r).startOf("day").valueOf()===P(n).startOf("day").valueOf()):!1}function ke(e,n,t){return!(e&&P(t).isBefore(e)||n&&P(t).isAfter(n))}function Oe(e,n,t){return!!(t&&e>t||n&&e<n)}function ft(e,n,t,r){const a=J(e),u=J(n);return a?Oe(a,t,r)?null:a:u?Oe(u,t,r)?null:u:null}function Ce(e,n,t,r){let a=e||n||new Date;return t&&(a=t>a?t:a),r&&(a=r<a?r:a),a}function Be(e){return e!==void 0}function pt(e,n){return Be(e)?e:n}function gt(e,{onClick:n,dateObj:t}){return{onClick:ve(n,r=>{e(t,r)}),disabled:!t.selectable,"aria-pressed":t.selected,role:"button"}}function ht({minDate:e,offsetMonth:n,handleOffsetChanged:t},{onClick:r,offset:a=1,calendars:u}){const v=`Gå tilbake ${a} måned${a===1?"":"er"}`;return{onClick:ve(r,()=>{t(n-xe({calendars:u,offset:a,minDate:e}))}),disabled:_e({calendars:u,minDate:e}),"aria-label":v,title:v}}function vt({maxDate:e,offsetMonth:n,handleOffsetChanged:t},{onClick:r,offset:a=1,calendars:u}){const v=`Gå frem ${a} måned${a===1?"":"er"}`;return{onClick:ve(r,()=>{t(n+je({calendars:u,offset:a,maxDate:e}))}),disabled:$e({calendars:u,maxDate:e}),"aria-label":v,title:v}}function yt({date:e=P().startOf("day").toDate(),maxDate:n,minDate:t,monthsToDisplay:r=1,firstDayOfWeek:a=0,showOutsideDays:u=!0,offset:v,onDateSelected:k,onOffsetChanged:D,selected:b}){const[x,w]=M.useState(0),T=pt(v,x);function O(B){Be(v)||w(B),D(B)}return{calendars:it({date:e,selected:b,monthsToDisplay:r,minDate:t,maxDate:n,offset:T,firstDayOfWeek:a,showOutsideDays:u}),getDateProps:gt.bind(null,k),getBackProps:ht.bind(null,{minDate:t,offsetMonth:T,handleOffsetChanged:O}),getForwardProps:vt.bind(null,{maxDate:n,offsetMonth:T,handleOffsetChanged:O}),handleOffsetChanged:O}}const kt=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],bt=["man","tir","ons","tor","fre","lør","søn"],be=M.forwardRef((e,n)=>{const{date:t,defaultSelected:r,minDate:a,maxDate:u,days:v=bt,months:k=kt,monthLabel:D="Velg måned",yearLabel:b="Velg år",yearsToShow:x=he,onTabOutside:w,...T}=e,O=Ze("jkl-calendar"),[{offset:A,selectedDate:B,shownDate:_},W]=M.useReducer(at,Ce(t,r,a,u),Ee),ne=_.getMonth(),Z=_.getFullYear();M.useEffect(()=>{W({type:"SET_SELECTED_DATE",newDate:Ce(t,r,a,u)})},[t,r,a,u]);const ae=M.useCallback(s=>{W({type:"SET_OFFSET",newOffset:s})},[]),{calendars:L,getBackProps:H,getDateProps:V,getForwardProps:Q,handleOffsetChanged:U}=yt({date:B,selected:B,minDate:a,maxDate:u,offset:A,onOffsetChanged:ae,firstDayOfWeek:1,...T}),S=M.useRef(null),y=M.useCallback(s=>{if(!S.current)return;const c=document.activeElement,p=S.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),h=async E=>{c?.setAttribute("tabindex","-1"),E.setAttribute("tabindex","0"),E.focus()};p.forEach((E,$)=>{const I=$+s;if(E===c)if(I<=p.length-1&&I>=0)h(p[I]);else if(s<0){if(_e({calendars:L,minDate:a})||(pe.flushSync(()=>{U(A-xe({calendars:L,offset:1,minDate:a}))}),!S.current))return;const j=S.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');j[j.length+I]&&(j[0].setAttribute("tabindex","-1"),h(j[j.length+I]))}else{if($e({calendars:L,maxDate:u})||(pe.flushSync(()=>{U(A+je({calendars:L,offset:1,maxDate:u}))}),!S.current))return;const j=S.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');j[I-p.length]&&(j[0].setAttribute("tabindex","-1"),h(j[I-p.length]))}})},[U,A,L,u,a]),X=M.useCallback(s=>{switch(s.key){case"ArrowUp":y(-7),s.preventDefault();break;case"ArrowRight":y(1),s.preventDefault();break;case"ArrowDown":y(7),s.preventDefault();break;case"ArrowLeft":y(-1),s.preventDefault();break}},[y]),te=M.useCallback(s=>{if(s.key!=="Tab")return;const c=S.current?.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!c)return;const p=c[0],h=c[c.length-1];!s.shiftKey&&document.activeElement===h?(p.focus(),s.preventDefault()):s.shiftKey&&document.activeElement===p&&(h.focus(),s.preventDefault())},[]),m=M.useCallback(s=>{const{date:c,selected:p,selectable:h,prevMonth:E,nextMonth:$}=s;return h?!!(p||c.toString()===a?.toString()||!E&&!$&&_.getFullYear()===c.getFullYear()&&B.getMonth()!==c.getMonth()&&c.getDate()===1):!1},[_,a,B]),o=M.useCallback(()=>{a&&_.getFullYear()-a.getFullYear()===0&&_.getMonth()-a.getMonth()===1?document.querySelector(`[data-testid="${O}-forward-button"]`)?.focus():u&&u.getFullYear()-_.getFullYear()===0&&u.getMonth()-_.getMonth()===1&&document.querySelector(`[data-testid="${O}-back-button"]`)?.focus()},[a,u,_,O]),i=M.useCallback(s=>{if(s.target.value.length!==4)return;const c=Number.parseInt(s.target.value);if(Number.isNaN(c))return;let p=(c-_.getFullYear())*12;const h=new Date(_.getFullYear(),_.getMonth()+p,_.getDate());u&&u.getFullYear()===h.getFullYear()&&u.getMonth()<h.getMonth()?p-=h.getMonth()-u.getMonth():a&&a.getFullYear()===h.getFullYear()&&a.getMonth()>h.getMonth()&&(p+=a.getMonth()-h.getMonth()),W({type:"ADD_OFFSET",addedOffset:p})},[_,a,u]),d=M.useCallback(s=>{if(!B&&!t)return;const c=_.getFullYear()-(B||new Date).getFullYear(),p=Number.parseInt(s.target.value)-(B||new Date).getMonth();W({type:"SET_OFFSET",newOffset:c*12+p})},[B,t,_]),l=rt(Z,a,u,x),g=st(Z,k,a,u);return f.jsx("div",{ref:n,id:O,className:"jkl-calendar","data-testid":"jkl-calendar",children:f.jsxs("div",{className:"jkl-calendar__padding",ref:S,onKeyDown:te,children:[f.jsxs("fieldset",{className:"jkl-calendar-navigation",children:[f.jsxs("div",{children:[f.jsx(we,{...H({calendars:L,onClick:o}),"data-testid":`${O}-back-button`,variant:"ghost",icon:f.jsx(Qe,{variant:"medium",bold:!0})}),f.jsx(we,{...Q({calendars:L,onClick:o}),variant:"ghost","data-testid":`${O}-forward-button`,icon:f.jsx(Xe,{variant:"medium",bold:!0})})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[f.jsx("select",{onChange:d,className:"jkl-calendar-navigation-dropdown__select","aria-label":D,value:ne.toString(),children:g.map(({label:s,value:c})=>f.jsx("option",{value:c,children:s},c))}),f.jsx(Te,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]}),f.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[f.jsx("select",{onChange:i,className:"jkl-calendar-navigation-dropdown__select","aria-label":b,value:Z.toString(),children:l.map(s=>f.jsx("option",{value:s,children:s},s))}),f.jsx(Te,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]})]})]}),L.map(s=>f.jsxs("table",{className:"jkl-calendar-table","data-testid":"jkl-datepicker-calendar",children:[f.jsxs("caption",{className:"jkl-sr-only",children:[k[s.month],", ",s.year]}),f.jsx("thead",{children:f.jsx("tr",{children:v.map(c=>f.jsx("th",{children:c},`${s.month}${s.year}${c}`))})}),f.jsx("tbody",{"data-testid":"jkl-datepicker-dates",children:s.weeks.map((c,p)=>f.jsx("tr",{children:c.map((h,E)=>{const $=`${s.month}${s.year}${p}${E}`;if(typeof h=="string")return f.jsx("td",{className:"jkl-calendar__date jkl-calendar__date--empty",children:h},$);const{date:I,selectable:j,today:N,prevMonth:Y,nextMonth:F}=h;return f.jsx("td",{children:f.jsx("button",{...V({dateObj:h}),type:"button",className:"jkl-calendar-date-button",tabIndex:m(h)?0:-1,"aria-label":`${I.getDate()}. ${k[I.getMonth()].toLowerCase()}`,"aria-current":N?"date":void 0,"data-adjacent":Y||F?"true":void 0,disabled:!j,onKeyDown:X,children:f.jsx("span",{"aria-hidden":"true",children:I.getDate()})})},$)})},`${s.month}${s.year}${p}`))})]},`${s.month}${s.year}`))]})})});be.displayName="Calendar";be.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{date:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},defaultSelected:{required:!1,tsType:{name:"Date"},description:""},days:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},months:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},monthLabel:{required:!1,tsType:{name:"string"},description:""},yearLabel:{required:!1,tsType:{name:"string"},description:""},yearsToShow:{required:!1,tsType:{name:"union",raw:'number | "all" | { previous: number; coming: number }',elements:[{name:"number"},{name:"literal",value:'"all"'},{name:"signature",type:"object",raw:"{ previous: number; coming: number }",signature:{properties:[{key:"previous",value:{name:"number",required:!0}},{key:"coming",value:{name:"number",required:!0}}]}}]},description:""},onTabOutside:{required:!0,tsType:{name:"ReactKeyboardEventHandler",raw:"React.KeyboardEventHandler"},description:""}},composes:["Omit"]};function Dt(e,n,t={inclusive:!1}){const r=typeof e=="string"?J(e):e;return r?t.inclusive?r>=n:r>n:!1}function wt(e,n,t={inclusive:!1}){const r=typeof e=="string"?J(e):e;return r?t.inclusive?r<=n:r<n:!1}const Tt=(e,n)=>{const t=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value")?.set;t?t.call(e,n):e.value=n},Mt=(e,n)=>{const t=e.replace(/\D/g,""),r=ge(t,{partial:!0}),a=e.replace(/\D+$/,""),u=t.length===8?ge(t):e,v=J(u)?u:null,k=n&&e!==t&&a===r&&J(e)===void 0&&v===null;return v??(k?t:e)},Ot=({value:e,minDate:n,maxDate:t})=>{if(!e)return{date:null,error:null};const r=J(e);return r?n&&!Dt(r,n)?{date:r,error:"OUTSIDE_LOWER_BOUND"}:t&&!wt(r,t)?{date:r,error:"OUTSIDE_UPPER_BOUND"}:{date:r,error:null}:{date:null,error:"WRONG_FORMAT"}},se=M.forwardRef((e,n)=>{const{"data-testautoid":t,id:r,className:a="",label:u="Velg dato",labelProps:v,defaultValue:k,defaultShow:D=!1,value:b,disableBeforeDate:x,disableAfterDate:w,yearsToShow:T,name:O,helpLabel:A,errorLabel:B,invalid:_,days:W,months:ne,monthLabel:Z,yearLabel:ae,placeholder:L="dd.mm.åååå",width:H="11.25rem",onChange:V,onBlur:Q,onFocus:U,onKeyDown:S,action:y,showCalendarLabel:X="Åpne kalender",hideCalendarLabel:te="Lukk kalender",supportLabelProps:m,tooltip:o,textInputProps:i,description:d,...l}=e,g=J(x),s=g?P(g).startOf("day").toDate():void 0,c=J(w),p=c?P(c).startOf("day").toDate():void 0,[h,E]=M.useState(ft(b,k,s,p)),[$,I]=M.useState(null),[j,N]=M.useState(D),Y=M.useRef(null),F=M.useRef(null),K=M.useRef(null),G=M.useRef(null),ee=M.useRef(!1),Pe=M.useCallback(C=>{G.current=C,n&&(typeof n=="function"?n(C):n.current=C)},[n]),Le=M.useCallback(C=>{if(!U||!F.current)return;F.current.contains(C.relatedTarget)||U(C,h,{error:$,value:C.target.value})},[U,h,$]),Ne=M.useCallback(C=>{Q&&Q(C,h,{error:$,value:C.target.value})},[Q,h,$]),Re=M.useCallback(C=>{C.key==="Escape"&&(N(!1),C.preventDefault(),C.stopPropagation()),y?.onKeyDown&&y.onKeyDown(C)},[y]),qe=M.useCallback(C=>{const R=C.currentTarget.value,q=Mt(R,ee.current);q!==R&&Tt(C.currentTarget,q);const De=R.replace(/\D/g,"");ee.current=R===De&&q===ge(De)&&q!==R&&J(q)!==void 0;const{date:de,error:ce}=Ot({value:q,minDate:s,maxDate:p});de&&!ce&&N(!1),I(ce),E(de),V&&V(C,de,{error:ce,value:q})},[V,s,p]),Ue=M.useCallback(C=>{pe.flushSync(()=>{N(!j)});const R=Y.current,q=R&&R.querySelector('[aria-pressed="true"]');window.requestAnimationFrame(()=>q?.focus()),y?.onClick&&y.onClick(C)},[j,y]),Ye=M.useCallback(({date:C})=>{if(N(!1),E(C),G.current){const R=G.current;ee.current=!1,R.value=re(C);const q=document.createEvent("HTMLEvents");q.initEvent("input",!0,!1),R.dispatchEvent(q),R.focus(),V&&V(q,C,{error:null,value:R.value})}},[V]),He=M.useCallback(C=>{C.preventDefault(),N(!1),K.current?.focus()},[]);return f.jsx(ze,{id:r,className:We("jkl-datepicker",a),...l,ref:F,label:u,labelProps:v,helpLabel:A,errorLabel:B,supportLabelProps:m,tooltip:o,description:d,render:C=>f.jsx(Je,{"data-focused":j?"true":void 0,ref:Pe,"data-testid":"jkl-datepicker__input","data-testautoid":t,className:"jkl-datepicker__input",name:O,defaultValue:k,value:b,type:"text",placeholder:L,width:H,onFocus:Le,onBlur:Ne,onChange:qe,actionButton:f.jsxs(fe,{positionReference:G,open:j,onOpenChange:()=>N(!j),offset:8,children:[f.jsx(fe.Trigger,{...y,"data-testid":"jkl-datepicker__trigger",className:"jkl-text-input-action-button",title:j?te:X,tabIndex:0,onClick:Ue,onKeyDown:Re,asChild:!0,children:f.jsx(Ke,{children:f.jsx(Ge,{})})}),f.jsx(fe.Content,{initialFocus:-1,padding:24,children:f.jsx(be,{ref:Y,date:h,minDate:s,maxDate:p,days:W,months:ne,monthLabel:Z,yearLabel:ae,yearsToShow:T,onDateSelected:Ye,onTabOutside:He})})]}),...i,...C,"aria-invalid":_||!!B})})});se.displayName="DatePicker";se.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},className:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},label:{required:!1,tsType:{name:"string"},description:'@default "Velg dato"'},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"LabelProps"},{name:"literal",value:'"children"'}],raw:'Omit<LabelProps, "children">'},description:"Bruk labelProps for å sette props som `variant` og `srOnly`.\n\n@example\n ```tsx\n <DatePicker\n     labelProps={{ srOnly: true }}\n />\n ```"},defaultValue:{required:!1,tsType:{name:"string"},description:`dd.mm.åååå

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
>`},description:"Props som sendes direkte til komponentens TextInput"}},composes:["Omit"]};const{expect:z,fn:Ie,screen:Se,waitFor:Ct,within:Fe}=__STORYBOOK_MODULE_TEST__,Xt={title:"Komponenter/DatePicker",component:se,args:{action:{disabled:!1},days:["M","T","O","T","F","L","S"],defaultShow:!1,defaultValue:re(new Date),disableBeforeDate:re(new Date(new Date().setDate(new Date().getDate()-14))),disableAfterDate:re(new Date(new Date().setDate(new Date().getDate()+14))),description:"Kortet er gyldig i 3 måneder fra denne datoen",label:"Når skal du reise?",labelProps:{srOnly:!1,variant:"small"},hideCalendarLabel:"Lukk kalender",showCalendarLabel:"Åpne kalender",invalid:!1,months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],monthLabel:"Måned",placeholder:"dd.mm.åååå",yearsToShow:new Date().getFullYear(),yearLabel:"År",textInputProps:{disabled:!1,readOnly:!1}}};function Ae({args:e,initialValue:n=""}){const[t,r]=me.useState(n),[a,u]=me.useState(""),[v,k]=me.useState("");return f.jsxs("div",{style:{display:"grid",gap:"16px",width:"20rem"},children:[f.jsx(se,{...e,value:t,defaultValue:void 0,disableBeforeDate:void 0,disableAfterDate:void 0,onChange:(D,b,x)=>{r(D.target.value),u(b?re(b):""),k(x.value),e.onChange?.(D,b,x)}}),f.jsxs("dl",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"4px 12px",margin:0},children:[f.jsx("dt",{children:"event.target.value"}),f.jsx("dd",{"data-testid":"event-target-value",style:{margin:0},children:t||"(tom)"}),f.jsx("dt",{children:"date"}),f.jsx("dd",{"data-testid":"date-value",style:{margin:0},children:a||"(tom)"}),f.jsx("dt",{children:"meta.value"}),f.jsx("dd",{"data-testid":"meta-value",style:{margin:0},children:v||"(tom)"})]})]})}const ie={args:{},render:e=>f.jsx(se,{...e,disableBeforeDate:e.disableBeforeDate,disableAfterDate:e.disableAfterDate})},le={name:"API ved kalenderklikk",args:{onChange:Ie()},render:e=>f.jsx(Ae,{args:e,initialValue:"10.11.2022"}),play:async({args:e,canvasElement:n,userEvent:t,step:r})=>{const a=Fe(n);await r("Velg dato i kalenderen",async()=>{await t.click(a.getByRole("button",{name:/åpne kalender/i})),await Ct(()=>{z(Se.getByTestId("jkl-calendar")).toBeInTheDocument()}),await t.click(Se.getByLabelText("11. november"))}),await r("Vis at vanlig onChange-bruk fortsatt fungerer",async()=>{await z(a.getByTestId("event-target-value")).toHaveTextContent("11.11.2022"),await z(a.getByTestId("date-value")).toHaveTextContent("11.11.2022"),await z(a.getByTestId("meta-value")).toHaveTextContent("11.11.2022"),await z(e.onChange).toHaveBeenCalled()})}},oe={name:"API ved kompakt input",args:{onChange:Ie()},render:e=>f.jsx(Ae,{args:e}),play:async({args:e,canvasElement:n,userEvent:t,step:r})=>{const a=Fe(n),u=a.getByRole("textbox",{name:/når skal du reise/i});await r('Skriv "11112022" i feltet',async()=>{await t.clear(u),await t.type(u,"11112022")}),await r("Vis at kontrollert bruk via event.target.value er uendret",async()=>{await z(u).toHaveValue("11.11.2022"),await z(a.getByTestId("event-target-value")).toHaveTextContent("11.11.2022"),await z(a.getByTestId("date-value")).toHaveTextContent("11.11.2022"),await z(a.getByTestId("meta-value")).toHaveTextContent("11.11.2022"),await z(e.onChange).toHaveBeenCalled()})}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <DatePickerComponent {...args} disableBeforeDate={args.disableBeforeDate} disableAfterDate={args.disableAfterDate} />
}`,...ie.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
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
}`,...le.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
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
}`,...oe.parameters?.docs?.source}}};const en=["DatePicker","CalendarSelectionApiCompatibility","CompactInputApiCompatibility"];export{le as CalendarSelectionApiCompatibility,oe as CompactInputApiCompatibility,ie as DatePicker,en as __namedExportsOrder,Xt as default};
