import{g as xe,r as T,j as b}from"./iframe-BDteYe4r.js";import{c as Be}from"./clsx-B-dksMZM.js";import{r as le}from"./index-DI22hcey.js";import{I as Ne}from"./IconButton-DMFHS_s1.js";import{C as Le}from"./CalendarIcon-di1vPGSd.js";import{I as Ie}from"./InputGroup-sOPSIUsZ.js";import{P as oe}from"./Popover-BHZIEAyd.js";import{B as Ae}from"./BaseTextInput-DBafR1uJ.js";import{u as Pe}from"./useId-soo04-hG.js";import{B as pe}from"./Button-B47ON0qC.js";import{A as qe}from"./ArrowLeftIcon-BDowhJMb.js";import{A as Ye}from"./ArrowRightIcon-DxaLBgN_.js";import{C as ge}from"./ChevronDownIcon-BUFa_3R4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DxMWaXgD.js";import"./Icon-BG_QQN4a.js";import"./Label-BiCUA10s.js";import"./SupportLabel-D8b5jrJf.js";import"./WarningIcon-DWCyfn23.js";import"./floating-ui.react-CC7_ZCL4.js";import"./usePreviousValue-Bnl-GKqF.js";import"./Loader-Dqdi1LjX.js";import"./useDelayedRender-DY1qqq9W.js";var se={exports:{}},Re=se.exports,he;function Ue(){return he||(he=1,(function(e,t){(function(n,r){e.exports=r()})(Re,(function(){var n=1e3,r=6e4,l=36e5,d="millisecond",u="second",k="minute",y="hour",w="day",C="week",M="month",S="quarter",E="year",B="date",P="Invalid Date",q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,z={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(f){var o=["th","st","nd","rd"],a=f%100;return"["+f+(o[(a-20)%10]||o[a]||o[0])+"]"}},Z=function(f,o,a){var c=String(f);return!c||c.length>=o?f:""+Array(o+1-c.length).join(a)+f},Q={s:Z,z:function(f){var o=-f.utcOffset(),a=Math.abs(o),c=Math.floor(a/60),i=a%60;return(o<=0?"+":"-")+Z(c,2,"0")+":"+Z(i,2,"0")},m:function f(o,a){if(o.date()<a.date())return-f(a,o);var c=12*(a.year()-o.year())+(a.month()-o.month()),i=o.clone().add(c,M),g=a-i<0,p=o.clone().add(c+(g?-1:1),M);return+(-(c+(a-i)/(g?i-p:p-i))||0)},a:function(f){return f<0?Math.ceil(f)||0:Math.floor(f)},p:function(f){return{M,y:E,w:C,d:w,D:B,h:y,m:k,s:u,ms:d,Q:S}[f]||String(f||"").toLowerCase().replace(/s$/,"")},u:function(f){return f===void 0}},G="en",L={};L[G]=z;var te="$isDayjsObject",W=function(f){return f instanceof I||!(!f||!f[te])},V=function f(o,a,c){var i;if(!o)return G;if(typeof o=="string"){var g=o.toLowerCase();L[g]&&(i=g),a&&(L[g]=a,i=g);var p=o.split("-");if(!i&&p.length>1)return f(p[0])}else{var s=o.name;L[s]=o,i=s}return!c&&i&&(G=i),i||!c&&G},$=function(f,o){if(W(f))return f.clone();var a=typeof o=="object"?o:{};return a.date=f,a.args=arguments,new I(a)},D=Q;D.l=V,D.i=W,D.w=function(f,o){return $(f,{locale:o.$L,utc:o.$u,x:o.$x,$offset:o.$offset})};var I=(function(){function f(a){this.$L=V(a.locale,null,!0),this.parse(a),this.$x=this.$x||a.x||{},this[te]=!0}var o=f.prototype;return o.parse=function(a){this.$d=(function(c){var i=c.date,g=c.utc;if(i===null)return new Date(NaN);if(D.u(i))return new Date;if(i instanceof Date)return new Date(i);if(typeof i=="string"&&!/Z$/i.test(i)){var p=i.match(q);if(p){var s=p[2]-1||0,m=(p[7]||"0").substring(0,3);return g?new Date(Date.UTC(p[1],s,p[3]||1,p[4]||0,p[5]||0,p[6]||0,m)):new Date(p[1],s,p[3]||1,p[4]||0,p[5]||0,p[6]||0,m)}}return new Date(i)})(a),this.init()},o.init=function(){var a=this.$d;this.$y=a.getFullYear(),this.$M=a.getMonth(),this.$D=a.getDate(),this.$W=a.getDay(),this.$H=a.getHours(),this.$m=a.getMinutes(),this.$s=a.getSeconds(),this.$ms=a.getMilliseconds()},o.$utils=function(){return D},o.isValid=function(){return this.$d.toString()!==P},o.isSame=function(a,c){var i=$(a);return this.startOf(c)<=i&&i<=this.endOf(c)},o.isAfter=function(a,c){return $(a)<this.startOf(c)},o.isBefore=function(a,c){return this.endOf(c)<$(a)},o.$g=function(a,c,i){return D.u(a)?this[c]:this.set(i,a)},o.unix=function(){return Math.floor(this.valueOf()/1e3)},o.valueOf=function(){return this.$d.getTime()},o.startOf=function(a,c){var i=this,g=!!D.u(c)||c,p=D.p(a),s=function(R,N){var U=D.w(i.$u?Date.UTC(i.$y,N,R):new Date(i.$y,N,R),i);return g?U:U.endOf(w)},m=function(R,N){return D.w(i.toDate()[R].apply(i.toDate("s"),(g?[0,0,0,0]:[23,59,59,999]).slice(N)),i)},h=this.$W,v=this.$M,j=this.$D,A="set"+(this.$u?"UTC":"");switch(p){case E:return g?s(1,0):s(31,11);case M:return g?s(1,v):s(0,v+1);case C:var x=this.$locale().weekStart||0,F=(h<x?h+7:h)-x;return s(g?j-F:j+(6-F),v);case w:case B:return m(A+"Hours",0);case y:return m(A+"Minutes",1);case k:return m(A+"Seconds",2);case u:return m(A+"Milliseconds",3);default:return this.clone()}},o.endOf=function(a){return this.startOf(a,!1)},o.$set=function(a,c){var i,g=D.p(a),p="set"+(this.$u?"UTC":""),s=(i={},i[w]=p+"Date",i[B]=p+"Date",i[M]=p+"Month",i[E]=p+"FullYear",i[y]=p+"Hours",i[k]=p+"Minutes",i[u]=p+"Seconds",i[d]=p+"Milliseconds",i)[g],m=g===w?this.$D+(c-this.$W):c;if(g===M||g===E){var h=this.clone().set(B,1);h.$d[s](m),h.init(),this.$d=h.set(B,Math.min(this.$D,h.daysInMonth())).$d}else s&&this.$d[s](m);return this.init(),this},o.set=function(a,c){return this.clone().$set(a,c)},o.get=function(a){return this[D.p(a)]()},o.add=function(a,c){var i,g=this;a=Number(a);var p=D.p(c),s=function(v){var j=$(g);return D.w(j.date(j.date()+Math.round(v*a)),g)};if(p===M)return this.set(M,this.$M+a);if(p===E)return this.set(E,this.$y+a);if(p===w)return s(1);if(p===C)return s(7);var m=(i={},i[k]=r,i[y]=l,i[u]=n,i)[p]||1,h=this.$d.getTime()+a*m;return D.w(h,this)},o.subtract=function(a,c){return this.add(-1*a,c)},o.format=function(a){var c=this,i=this.$locale();if(!this.isValid())return i.invalidDate||P;var g=a||"YYYY-MM-DDTHH:mm:ssZ",p=D.z(this),s=this.$H,m=this.$m,h=this.$M,v=i.weekdays,j=i.months,A=i.meridiem,x=function(N,U,X,J){return N&&(N[U]||N(c,g))||X[U].slice(0,J)},F=function(N){return D.s(s%12||12,N,"0")},R=A||function(N,U,X){var J=N<12?"AM":"PM";return X?J.toLowerCase():J};return g.replace(_,(function(N,U){return U||(function(X){switch(X){case"YY":return String(c.$y).slice(-2);case"YYYY":return D.s(c.$y,4,"0");case"M":return h+1;case"MM":return D.s(h+1,2,"0");case"MMM":return x(i.monthsShort,h,j,3);case"MMMM":return x(j,h);case"D":return c.$D;case"DD":return D.s(c.$D,2,"0");case"d":return String(c.$W);case"dd":return x(i.weekdaysMin,c.$W,v,2);case"ddd":return x(i.weekdaysShort,c.$W,v,3);case"dddd":return v[c.$W];case"H":return String(s);case"HH":return D.s(s,2,"0");case"h":return F(1);case"hh":return F(2);case"a":return R(s,m,!0);case"A":return R(s,m,!1);case"m":return String(m);case"mm":return D.s(m,2,"0");case"s":return String(c.$s);case"ss":return D.s(c.$s,2,"0");case"SSS":return D.s(c.$ms,3,"0");case"Z":return p}return null})(N)||p.replace(":","")}))},o.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},o.diff=function(a,c,i){var g,p=this,s=D.p(c),m=$(a),h=(m.utcOffset()-this.utcOffset())*r,v=this-m,j=function(){return D.m(p,m)};switch(s){case E:g=j()/12;break;case M:g=j();break;case S:g=j()/3;break;case C:g=(v-h)/6048e5;break;case w:g=(v-h)/864e5;break;case y:g=v/l;break;case k:g=v/r;break;case u:g=v/n;break;default:g=v}return i?g:D.a(g)},o.daysInMonth=function(){return this.endOf(M).$D},o.$locale=function(){return L[this.$L]},o.locale=function(a,c){if(!a)return this.$L;var i=this.clone(),g=V(a,c,!0);return g&&(i.$L=g),i},o.clone=function(){return D.w(this.$d,this)},o.toDate=function(){return new Date(this.valueOf())},o.toJSON=function(){return this.isValid()?this.toISOString():null},o.toISOString=function(){return this.$d.toISOString()},o.toString=function(){return this.$d.toUTCString()},f})(),ne=I.prototype;return $.prototype=ne,[["$ms",d],["$s",u],["$m",k],["$H",y],["$W",w],["$M",M],["$y",E],["$D",B]].forEach((function(f){ne[f[1]]=function(o){return this.$g(o,f[0],f[1])}})),$.extend=function(f,o){return f.$i||(f(o,I,$),f.$i=!0),$},$.locale=V,$.isDayjs=W,$.unix=function(f){return $(1e3*f)},$.en=L[G],$.Ls=L,$.p={},$}))})(se)),se.exports}var We=Ue();const Y=xe(We),He=(e,t)=>{let n;switch(t.type){case"SET_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+t.newOffset),{...e,offset:t.newOffset,shownDate:n};case"ADD_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+e.offset+t.addedOffset),{...e,offset:e.offset+t.addedOffset,shownDate:n};case"SET_SELECTED_DATE":return De(t.newDate);default:return e}},De=e=>({selectedDate:e,offset:0,shownDate:e}),Ke=/^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/,Ve=/^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;function Ge(e){const t=`${e.getDate()}`.padStart(2,"0"),n=`${e.getMonth()+1}`.padStart(2,"0");return`${t}.${n}.${e.getFullYear()}`}const Je=e=>{const t=Ke.exec(e);if(t)return t.slice(1,4);const n=Ve.exec(e);if(!n)return;const r=n.slice(1,4);return r.reverse(),r};function ee(e){if(!e)return;const t=Je(e);if(!t)return;const n=Number.parseInt(new Date().toLocaleString("no-NB",{year:"2-digit"})),r=w=>w>n?w+1900:w+2e3,l=Number.parseInt(t[0],10),d=Number.parseInt(t[1],10)-1,u=Number.parseInt(t[2],10),k=u>99?u:r(u),y=new Date(k,d,l,0,0,0);return y.getMonth()===d&&y.getFullYear()===k?y:void 0}function de(...e){return t=>e.some(n=>(n?.(t),t.defaultPrevented))}function ke({calendars:e,offset:t,minDate:n}){if(t>1&&n){const{firstDayOfMonth:r}=e[0],l=Y(n).diff(r,"months");l<t&&(t=l)}return t}const ue=3;function ze(e,t,n,r){if(t&&t.getFullYear()>e)return[t.getFullYear().toString()];if(n&&n.getFullYear()<e)return[n.getFullYear().toString()];let l=!1,d,u;r==="all"?(l=!0,d=ue,u=ue):(d=typeof r=="number"?r:r.previous,u=typeof r=="number"?r:r.coming);let k=e-d;if(t){const S=l?t.getFullYear():k;k=Math.max(t.getFullYear(),S)}let y=e+u;if(n){const S=l?n.getFullYear():y;y=Math.min(n.getFullYear(),S)}const w=Math.max(y-k+1,1);return[...Array(w).keys()].map(S=>S+k).map(S=>S.toString())}function Ze(e,t,n,r){const l=n?.getFullYear()||e,d=n?.getMonth()===void 0?0:n.getMonth(),u=r?.getFullYear()||e,k=r?.getMonth()===void 0?11:r.getMonth();let y=0,w=11;return l===e&&(y=d),u===e&&(w=k),t.map((M,S)=>({value:S.toString(),label:M})).filter(({value:M})=>Number.parseInt(M)>=y&&Number.parseInt(M)<=w)}function be({calendars:e,offset:t,maxDate:n}){if(t>1&&n){const{lastDayOfMonth:r}=e[e.length-1],l=Y(n).diff(r,"months");l<t&&(t=l)}return t}function we({calendars:e,minDate:t}){return t?Y(e[0].firstDayOfMonth).subtract(1,"day").isBefore(t):!1}function Me({calendars:e,maxDate:t}){return t?Y(e.at(-1)?.lastDayOfMonth).add(1,"day").isAfter(t):!1}function Qe({date:e,selected:t,monthsToDisplay:n,offset:r,minDate:l,maxDate:d,firstDayOfWeek:u,showOutsideDays:k}){const y=[],w=Xe(e,l,d);for(let C=0;C<n;C++){const M=et({month:w.getMonth()+C+r,year:w.getFullYear(),selectedDates:t,minDate:l,maxDate:d,firstDayOfWeek:u,showOutsideDays:k});y.push(M)}return y}function Xe(e,t,n){let r=Y(e).startOf("day");if(t){const l=Y(t).startOf("day");r.isBefore(l)&&(r=l)}if(n){const l=Y(n).startOf("day");r.isAfter(l)&&(r=l)}return r.toDate()}function et({month:e,year:t,selectedDates:n,minDate:r,maxDate:l,firstDayOfWeek:d,showOutsideDays:u}){const k=rt(e,t),y=k.daysInMonth;e=k.month,t=k.year;const w=[];for(let P=1;P<=y;P++){const q=new Date(t,e,P),_={date:q,selected:ce(n,q),selectable:me(r,l,q),today:Y().isSame(q,"day"),prevMonth:!1,nextMonth:!1};w.push(_)}const C=new Date(t,e,1),M=new Date(t,e,y),S=tt({firstDayOfMonth:C,minDate:r,maxDate:l,selectedDates:n,firstDayOfWeek:d,showOutsideDays:u}),E=nt({lastDayOfMonth:M,minDate:r,maxDate:l,selectedDates:n,firstDayOfWeek:d,showOutsideDays:u});w.unshift(...S),w.push(...E);const B=at(w);return{firstDayOfMonth:C,lastDayOfMonth:M,month:e,year:t,weeks:B}}function tt({firstDayOfMonth:e,minDate:t,maxDate:n,selectedDates:r,firstDayOfWeek:l,showOutsideDays:d}){const u=[];let k=(e.getDay()+7-l)%7;if(d){const y=Y(e).subtract(1,"day"),w=y.date(),C=y.month(),M=y.year();let S=0;for(;S<k;){const E=new Date(M,C,w-S),B={date:E,selected:ce(r,E),selectable:me(t,n,E),today:!1,prevMonth:!0,nextMonth:!1};u.unshift(B),S++}}else for(;k>0;)u.unshift(""),k--;return u}function nt({lastDayOfMonth:e,minDate:t,maxDate:n,selectedDates:r,firstDayOfWeek:l,showOutsideDays:d}){const u=[];let k=(e.getDay()+7-l)%7;if(d){const y=Y(e).add(1,"day"),w=y.month(),C=y.year();let M=0;for(;M<6-k;){const S=new Date(C,w,1+M),E={date:S,selected:ce(r,S),selectable:me(t,n,S),today:!1,prevMonth:!1,nextMonth:!0};u.push(E),M++}}else for(;k<6;)u.push(""),k++;return u}function rt(e,t){const n=new Date(t,e,1),r=n.getMonth(),l=n.getFullYear();return{daysInMonth:32-new Date(l,r,32).getDate(),month:r,year:l}}function at(e){const t=Math.ceil(e.length/7),n=[];for(let r=0;r<t;r++){n[r]=[];for(let l=0;l<7;l++)n[r].push(e[r*7+l])}return n}function ce(e,t){return e?(Array.isArray(e)?e:[e]).some(r=>r instanceof Date&&Y(r).startOf("day").valueOf()===Y(t).startOf("day").valueOf()):!1}function me(e,t,n){return!(e&&Y(n).isBefore(e)||t&&Y(n).isAfter(t))}function ve(e,t,n){return!!(n&&e>n||t&&e<t)}function st(e,t,n,r){const l=ee(e),d=ee(t);return l?ve(l,n,r)?null:l:d?ve(d,n,r)?null:d:null}function ye(e,t,n,r){let l=e||t||new Date;return n&&(l=n>l?n:l),r&&(l=r<l?r:l),l}function Oe(e){return e!==void 0}function it(e,t){return Oe(e)?e:t}function ot(e,{onClick:t,dateObj:n}){return{onClick:de(t,r=>{e(n,r)}),disabled:!n.selectable,"aria-pressed":n.selected,role:"button"}}function lt({minDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:r,offset:l=1,calendars:d}){const u=`Gå tilbake ${l} måned${l===1?"":"er"}`;return{onClick:de(r,()=>{n(t-ke({calendars:d,offset:l,minDate:e}))}),disabled:we({calendars:d,minDate:e}),"aria-label":u,title:u}}function ut({maxDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:r,offset:l=1,calendars:d}){const u=`Gå frem ${l} måned${l===1?"":"er"}`;return{onClick:de(r,()=>{n(t+be({calendars:d,offset:l,maxDate:e}))}),disabled:Me({calendars:d,maxDate:e}),"aria-label":u,title:u}}function dt({date:e=Y().startOf("day").toDate(),maxDate:t,minDate:n,monthsToDisplay:r=1,firstDayOfWeek:l=0,showOutsideDays:d=!0,offset:u,onDateSelected:k,onOffsetChanged:y,selected:w}){const[C,M]=T.useState(0),S=it(u,C);function E(P){Oe(u)||M(P),y(P)}return{calendars:Qe({date:e,selected:w,monthsToDisplay:r,minDate:n,maxDate:t,offset:S,firstDayOfWeek:l,showOutsideDays:d}),getDateProps:ot.bind(null,k),getBackProps:lt.bind(null,{minDate:n,offsetMonth:S,handleOffsetChanged:E}),getForwardProps:ut.bind(null,{maxDate:t,offsetMonth:S,handleOffsetChanged:E}),handleOffsetChanged:E}}const ct=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],mt=["man","tir","ons","tor","fre","lør","søn"],fe=T.forwardRef((e,t)=>{const{date:n,defaultSelected:r,density:l,minDate:d,maxDate:u,days:k=mt,months:y=ct,monthLabel:w="Velg måned",yearLabel:C="Velg år",yearsToShow:M=ue,onTabOutside:S,...E}=e,B=Pe("jkl-calendar"),[{offset:P,selectedDate:q,shownDate:_},z]=T.useReducer(He,ye(n,r,d,u),De),Z=_.getMonth(),Q=_.getFullYear();T.useEffect(()=>{z({type:"SET_SELECTED_DATE",newDate:ye(n,r,d,u)})},[n,r,d,u]);const G=T.useCallback(s=>{z({type:"SET_OFFSET",newOffset:s})},[]),{calendars:L,getBackProps:te,getDateProps:W,getForwardProps:V,handleOffsetChanged:$}=dt({date:q,selected:q,minDate:d,maxDate:u,offset:P,onOffsetChanged:G,firstDayOfWeek:1,...E}),D=T.useRef(null),I=T.useCallback(s=>{if(!D.current)return;const m=document.activeElement,h=D.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),v=async j=>{m?.setAttribute("tabindex","-1"),j.setAttribute("tabindex","0"),j.focus()};h.forEach((j,A)=>{const x=A+s;if(j===m)if(x<=h.length-1&&x>=0)v(h[x]);else if(s<0){if(we({calendars:L,minDate:d})||(le.flushSync(()=>{$(P-ke({calendars:L,offset:1,minDate:d}))}),!D.current))return;const F=D.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');F[F.length+x]&&(F[0].setAttribute("tabindex","-1"),v(F[F.length+x]))}else{if(Me({calendars:L,maxDate:u})||(le.flushSync(()=>{$(P+be({calendars:L,offset:1,maxDate:u}))}),!D.current))return;const F=D.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');F[x-h.length]&&(F[0].setAttribute("tabindex","-1"),v(F[x-h.length]))}})},[$,P,L,u,d]),ne=T.useCallback(s=>{switch(s.key){case"ArrowUp":I(-7),s.preventDefault();break;case"ArrowRight":I(1),s.preventDefault();break;case"ArrowDown":I(7),s.preventDefault();break;case"ArrowLeft":I(-1),s.preventDefault();break}},[I]),f=T.useCallback(s=>{if(s.key!=="Tab")return;const m=D.current?.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!m)return;const h=m[0],v=m[m.length-1];!s.shiftKey&&document.activeElement===v?(h.focus(),s.preventDefault()):s.shiftKey&&document.activeElement===h&&(v.focus(),s.preventDefault())},[]),o=T.useCallback(s=>{const{date:m,selected:h,selectable:v,prevMonth:j,nextMonth:A}=s;return v?!!(h||m.toString()===d?.toString()||!j&&!A&&_.getFullYear()===m.getFullYear()&&q.getMonth()!==m.getMonth()&&m.getDate()===1):!1},[_,d,q]),a=T.useCallback(()=>{d&&_.getFullYear()-d.getFullYear()===0&&_.getMonth()-d.getMonth()===1?document.querySelector(`[data-testid="${B}-forward-button"]`)?.focus():u&&u.getFullYear()-_.getFullYear()===0&&u.getMonth()-_.getMonth()===1&&document.querySelector(`[data-testid="${B}-back-button"]`)?.focus()},[d,u,_,B]),c=T.useCallback(s=>{if(s.target.value.length!==4)return;const m=Number.parseInt(s.target.value);if(Number.isNaN(m))return;let h=(m-_.getFullYear())*12;const v=new Date(_.getFullYear(),_.getMonth()+h,_.getDate());u&&u.getFullYear()===v.getFullYear()&&u.getMonth()<v.getMonth()?h-=v.getMonth()-u.getMonth():d&&d.getFullYear()===v.getFullYear()&&d.getMonth()>v.getMonth()&&(h+=d.getMonth()-v.getMonth()),z({type:"ADD_OFFSET",addedOffset:h})},[_,d,u]),i=T.useCallback(s=>{if(!q&&!n)return;const m=_.getFullYear()-(q||new Date).getFullYear(),h=Number.parseInt(s.target.value)-(q||new Date).getMonth();z({type:"SET_OFFSET",newOffset:m*12+h})},[q,n,_]),g=ze(Q,d,u,M),p=Ze(Q,y,d,u);return b.jsx("div",{ref:t,id:B,className:"jkl-calendar","data-testid":"jkl-calendar",children:b.jsxs("div",{className:"jkl-calendar__padding",ref:D,onKeyDown:f,children:[b.jsxs("fieldset",{className:"jkl-calendar-navigation",children:[b.jsxs("div",{children:[b.jsx(pe,{...te({calendars:L,onClick:a}),"data-testid":`${B}-back-button`,variant:"ghost",icon:b.jsx(qe,{variant:"medium",bold:!0})}),b.jsx(pe,{...V({calendars:L,onClick:a}),variant:"ghost","data-testid":`${B}-forward-button`,icon:b.jsx(Ye,{variant:"medium",bold:!0})})]}),b.jsxs("div",{children:[b.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[b.jsx("select",{onChange:i,className:"jkl-calendar-navigation-dropdown__select","aria-label":w,value:Z.toString(),children:p.map(({label:s,value:m})=>b.jsx("option",{value:m,children:s},m))}),b.jsx(ge,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]}),b.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[b.jsx("select",{onChange:c,className:"jkl-calendar-navigation-dropdown__select","aria-label":C,value:Q.toString(),children:g.map(s=>b.jsx("option",{value:s,children:s},s))}),b.jsx(ge,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]})]})]}),L.map(s=>b.jsxs("table",{className:"jkl-calendar-table","data-testid":"jkl-datepicker-calendar",children:[b.jsxs("caption",{className:"jkl-sr-only",children:[y[s.month],", ",s.year]}),b.jsx("thead",{children:b.jsx("tr",{children:k.map(m=>b.jsx("th",{children:m},`${s.month}${s.year}${m}`))})}),b.jsx("tbody",{"data-testid":"jkl-datepicker-dates",children:s.weeks.map((m,h)=>b.jsx("tr",{children:m.map((v,j)=>{const A=`${s.month}${s.year}${h}${j}`;if(typeof v=="string")return b.jsx("td",{className:"jkl-calendar__date jkl-calendar__date--empty",children:v},A);const{date:x,selectable:F,today:R,prevMonth:N,nextMonth:U}=v;return b.jsx("td",{children:b.jsx("button",{...W({dateObj:v}),type:"button",className:"jkl-calendar-date-button",tabIndex:o(v)?0:-1,"aria-label":`${x.getDate()}. ${y[x.getMonth()].toLowerCase()}`,"aria-current":R?"date":void 0,"data-adjacent":N||U?"true":void 0,disabled:!F,onKeyDown:ne,children:b.jsx("span",{"aria-hidden":"true",children:x.getDate()})})},A)})},`${s.month}${s.year}${h}`))})]},`${s.month}${s.year}`))]})})});fe.displayName="Calendar";fe.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{date:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},defaultSelected:{required:!1,tsType:{name:"Date"},description:""},days:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},months:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},monthLabel:{required:!1,tsType:{name:"string"},description:""},yearLabel:{required:!1,tsType:{name:"string"},description:""},yearsToShow:{required:!1,tsType:{name:"union",raw:'number | "all" | { previous: number; coming: number }',elements:[{name:"number"},{name:"literal",value:'"all"'},{name:"signature",type:"object",raw:"{ previous: number; coming: number }",signature:{properties:[{key:"previous",value:{name:"number",required:!0}},{key:"coming",value:{name:"number",required:!0}}]}}]},description:""},onTabOutside:{required:!0,tsType:{name:"ReactKeyboardEventHandler",raw:"React.KeyboardEventHandler"},description:""}},composes:["Omit"]};function ft(e,t,n={inclusive:!1}){const r=typeof e=="string"?ee(e):e;return r?n.inclusive?r>=t:r>t:!1}function pt(e,t,n={inclusive:!1}){const r=typeof e=="string"?ee(e):e;return r?n.inclusive?r<=t:r<t:!1}const ie=T.forwardRef((e,t)=>{const{"data-testautoid":n,id:r,className:l="",label:d="Velg dato",labelProps:u,defaultValue:k,defaultShow:y=!1,value:w,disableBeforeDate:C,disableAfterDate:M,yearsToShow:S,name:E,helpLabel:B,errorLabel:P,invalid:q,density:_,days:z,months:Z,monthLabel:Q,yearLabel:G,placeholder:L="dd.mm.åååå",width:te="11.25rem",onChange:W,onBlur:V,onFocus:$,onKeyDown:D,action:I,showCalendarLabel:ne="Åpne kalender",hideCalendarLabel:f="Lukk kalender",supportLabelProps:o,tooltip:a,textInputProps:c,description:i,...g}=e,p=ee(C),s=p?Y(p).startOf("day").toDate():void 0,m=ee(M),h=m?Y(m).startOf("day").toDate():void 0,[v,j]=T.useState(st(w,k,s,h)),[A,x]=T.useState(null),[F,R]=T.useState(y),N=T.useRef(null),U=T.useRef(null),X=T.useRef(null),J=T.useRef(null),Se=T.useCallback(O=>{J.current=O,t&&(typeof t=="function"?t(O):t.current=O)},[t]),Te=T.useCallback(O=>{if(!$||!U.current)return;U.current.contains(O.relatedTarget)||$(O,v,{error:A,value:O.target.value})},[$,v,A]),$e=T.useCallback(O=>{V&&V(O,v,{error:A,value:O.target.value})},[V,v,A]),Ee=T.useCallback(O=>{O.key==="Escape"&&(R(!1),O.preventDefault(),O.stopPropagation()),I?.onKeyDown&&I.onKeyDown(O)},[I]),_e=T.useCallback(O=>{let H=null,K=null;if(O.target.value){const re=ee(O.target.value);re?s&&!ft(re,s)?K="OUTSIDE_LOWER_BOUND":h&&!pt(re,h)?K="OUTSIDE_UPPER_BOUND":R(!1):K="WRONG_FORMAT",H=re||null}x(K),j(H),W&&W(O,H,{error:K,value:O.target.value})},[W,s,h]),je=T.useCallback(O=>{le.flushSync(()=>{R(!F)});const H=N.current,K=H&&H.querySelector('[aria-pressed="true"]');window.requestAnimationFrame(()=>K?.focus()),I?.onClick&&I.onClick(O)},[F,I]),Fe=T.useCallback(({date:O})=>{if(R(!1),j(O),J.current){const H=J.current;H.value=Ge(O);const K=document.createEvent("HTMLEvents");K.initEvent("input",!0,!1),H.dispatchEvent(K),H.focus(),W&&W(K,O,{error:null,value:H.value})}},[W]),Ce=T.useCallback(O=>{O.preventDefault(),R(!1),X.current?.focus()},[]);return b.jsx(Ie,{id:r,className:Be("jkl-datepicker",l),...g,ref:U,label:d,labelProps:u,density:_,helpLabel:B,errorLabel:P,supportLabelProps:o,tooltip:a,description:i,render:O=>b.jsx(Ae,{"data-focused":F?"true":void 0,ref:Se,"data-testid":"jkl-datepicker__input","data-testautoid":n,className:"jkl-datepicker__input",name:E,defaultValue:k,density:_,value:w,type:"text",placeholder:L,width:te,onFocus:Te,onBlur:$e,onChange:_e,actionButton:b.jsxs(oe,{positionReference:J,open:F,onOpenChange:()=>R(!F),offset:8,children:[b.jsx(oe.Trigger,{...I,"data-testid":"jkl-datepicker__trigger",className:"jkl-text-input-action-button",title:F?f:ne,tabIndex:0,onClick:je,onKeyDown:Ee,asChild:!0,children:b.jsx(Ne,{children:b.jsx(Le,{})})}),b.jsx(oe.Content,{initialFocus:-1,padding:24,children:b.jsx(fe,{ref:N,density:_,date:v,minDate:s,maxDate:h,days:z,months:Z,monthLabel:Q,yearLabel:G,yearsToShow:S,onDateSelected:Fe,onTabOutside:Ce})})]}),...c,...O,"aria-invalid":q||!!P})})});ie.displayName="DatePicker";ie.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},className:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},label:{required:!1,tsType:{name:"string"},description:'@default "Velg dato"'},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"LabelProps"},{name:"literal",value:'"children"'}],raw:'Omit<LabelProps, "children">'},description:"Bruk labelProps for å sette props som `variant` og `srOnly`.\n\n@example\n ```tsx\n <DatePicker\n     labelProps={{ srOnly: true }}\n />\n ```"},defaultValue:{required:!1,tsType:{name:"string"},description:`dd.mm.åååå

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
>`},description:"Props som sendes direkte til komponentens TextInput"}},composes:["Omit"]};const At={title:"Komponenter/DatePicker",component:ie,args:{action:{disabled:!1},days:["M","T","O","T","F","L","S"],defaultShow:!1,defaultValue:new Date().toLocaleDateString("no",{day:"2-digit",month:"2-digit",year:"numeric"}),disableBeforeDate:new Date(new Date().setDate(new Date().getDate()-14)).toLocaleDateString("en-US"),disableAfterDate:new Date(new Date().setDate(new Date().getDate()+14)).toLocaleDateString("en-US"),description:"Kortet er gyldig i 3 måneder fra denne datoen",label:"Når skal du reise?",labelProps:{srOnly:!1,variant:"small"},hideCalendarLabel:"Lukk kalender",showCalendarLabel:"Åpne kalender",invalid:!1,months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],monthLabel:"Måned",placeholder:"dd.mm.åååå",yearsToShow:new Date().getFullYear(),yearLabel:"År",textInputProps:{disabled:!1,readOnly:!1}}},ae={args:{},render:e=>b.jsx(ie,{...e,disableBeforeDate:new Date(e.disableBeforeDate||new Date).toLocaleDateString("no"),disableAfterDate:new Date(e.disableAfterDate||new Date).toLocaleDateString("no")})};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <DatePickerComponent {...args} disableBeforeDate={new Date(args.disableBeforeDate || new Date()).toLocaleDateString("no")} disableAfterDate={new Date(args.disableAfterDate || new Date()).toLocaleDateString("no")} />
}`,...ae.parameters?.docs?.source}}};const Pt=["DatePicker"];export{ae as DatePicker,Pt as __namedExportsOrder,At as default};
