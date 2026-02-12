import{g as xe,r as S,j as k}from"./iframe-CSTzEXoh.js";import{c as Be}from"./clsx-B-dksMZM.js";import{r as ue}from"./index-DHZ0Sy9l.js";import{I as Ne}from"./IconButton-Bzt_nsIy.js";import{C as Ie}from"./CalendarIcon-BmHvo69I.js";import{I as Pe}from"./InputGroup-Bb0NlIz6.js";import{P as oe}from"./Popover-40RFnJP-.js";import{B as Le}from"./BaseTextInput-C1kkf0KP.js";import{u as Ae}from"./useId-BxdmbWnT.js";import{B as he}from"./Button-9SzHTb0C.js";import{A as qe,a as Re}from"./ArrowRightIcon-DpSGjTD1.js";import{C as ge}from"./ChevronDownIcon-BnbIsTZ7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CNlMPt7t.js";import"./Icon-Da9FFZGt.js";import"./Label-YNmO3Qbj.js";import"./SupportLabel-CCUIEp-p.js";import"./WarningIcon-aj0pRQ7F.js";import"./floating-ui.react-Dnpkq5wZ.js";import"./getThemeAndSize-CIzqY74s.js";import"./usePreviousValue-B3WJqRKy.js";import"./Loader-CY9CJVC3.js";import"./useDelayedRender-CQNibv3z.js";var se={exports:{}},Ye=se.exports,ve;function Ue(){return ve||(ve=1,(function(e,t){(function(n,s){e.exports=s()})(Ye,(function(){var n=1e3,s=6e4,a=36e5,d="millisecond",g="second",y="minute",b="hour",D="day",F="week",w="month",M="quarter",T="year",I="date",x="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,V=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,te={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(m){var o=["th","st","nd","rd"],l=m%100;return"["+m+(o[(l-20)%10]||o[l]||o[0])+"]"}},J=function(m,o,l){var u=String(m);return!u||u.length>=o?m:""+Array(o+1-u.length).join(l)+m},ne={s:J,z:function(m){var o=-m.utcOffset(),l=Math.abs(o),u=Math.floor(l/60),i=l%60;return(o<=0?"+":"-")+J(u,2,"0")+":"+J(i,2,"0")},m:function m(o,l){if(o.date()<l.date())return-m(l,o);var u=12*(l.year()-o.year())+(l.month()-o.month()),i=o.clone().add(u,w),p=l-i<0,r=o.clone().add(u+(p?-1:1),w);return+(-(u+(l-i)/(p?i-r:r-i))||0)},a:function(m){return m<0?Math.ceil(m)||0:Math.floor(m)},p:function(m){return{M:w,y:T,w:F,d:D,D:I,h:b,m:y,s:g,ms:d,Q:M}[m]||String(m||"").toLowerCase().replace(/s$/,"")},u:function(m){return m===void 0}},L="en",U={};U[L]=te;var W="$isDayjsObject",z=function(m){return m instanceof Z||!(!m||!m[W])},q=function m(o,l,u){var i;if(!o)return L;if(typeof o=="string"){var p=o.toLowerCase();U[p]&&(i=p),l&&(U[p]=l,i=p);var r=o.split("-");if(!i&&r.length>1)return m(r[0])}else{var c=o.name;U[c]=o,i=c}return!u&&i&&(L=i),i||!u&&L},$=function(m,o){if(z(m))return m.clone();var l=typeof o=="object"?o:{};return l.date=m,l.args=arguments,new Z(l)},v=ne;v.l=q,v.i=z,v.w=function(m,o){return $(m,{locale:o.$L,utc:o.$u,x:o.$x,$offset:o.$offset})};var Z=(function(){function m(l){this.$L=q(l.locale,null,!0),this.parse(l),this.$x=this.$x||l.x||{},this[W]=!0}var o=m.prototype;return o.parse=function(l){this.$d=(function(u){var i=u.date,p=u.utc;if(i===null)return new Date(NaN);if(v.u(i))return new Date;if(i instanceof Date)return new Date(i);if(typeof i=="string"&&!/Z$/i.test(i)){var r=i.match(_);if(r){var c=r[2]-1||0,f=(r[7]||"0").substring(0,3);return p?new Date(Date.UTC(r[1],c,r[3]||1,r[4]||0,r[5]||0,r[6]||0,f)):new Date(r[1],c,r[3]||1,r[4]||0,r[5]||0,r[6]||0,f)}}return new Date(i)})(l),this.init()},o.init=function(){var l=this.$d;this.$y=l.getFullYear(),this.$M=l.getMonth(),this.$D=l.getDate(),this.$W=l.getDay(),this.$H=l.getHours(),this.$m=l.getMinutes(),this.$s=l.getSeconds(),this.$ms=l.getMilliseconds()},o.$utils=function(){return v},o.isValid=function(){return this.$d.toString()!==x},o.isSame=function(l,u){var i=$(l);return this.startOf(u)<=i&&i<=this.endOf(u)},o.isAfter=function(l,u){return $(l)<this.startOf(u)},o.isBefore=function(l,u){return this.endOf(u)<$(l)},o.$g=function(l,u,i){return v.u(l)?this[u]:this.set(i,l)},o.unix=function(){return Math.floor(this.valueOf()/1e3)},o.valueOf=function(){return this.$d.getTime()},o.startOf=function(l,u){var i=this,p=!!v.u(u)||u,r=v.p(l),c=function(R,N){var K=v.w(i.$u?Date.UTC(i.$y,N,R):new Date(i.$y,N,R),i);return p?K:K.endOf(D)},f=function(R,N){return v.w(i.toDate()[R].apply(i.toDate("s"),(p?[0,0,0,0]:[23,59,59,999]).slice(N)),i)},h=this.$W,E=this.$M,C=this.$D,B="set"+(this.$u?"UTC":"");switch(r){case T:return p?c(1,0):c(31,11);case w:return p?c(1,E):c(0,E+1);case F:var j=this.$locale().weekStart||0,A=(h<j?h+7:h)-j;return c(p?C-A:C+(6-A),E);case D:case I:return f(B+"Hours",0);case b:return f(B+"Minutes",1);case y:return f(B+"Seconds",2);case g:return f(B+"Milliseconds",3);default:return this.clone()}},o.endOf=function(l){return this.startOf(l,!1)},o.$set=function(l,u){var i,p=v.p(l),r="set"+(this.$u?"UTC":""),c=(i={},i[D]=r+"Date",i[I]=r+"Date",i[w]=r+"Month",i[T]=r+"FullYear",i[b]=r+"Hours",i[y]=r+"Minutes",i[g]=r+"Seconds",i[d]=r+"Milliseconds",i)[p],f=p===D?this.$D+(u-this.$W):u;if(p===w||p===T){var h=this.clone().set(I,1);h.$d[c](f),h.init(),this.$d=h.set(I,Math.min(this.$D,h.daysInMonth())).$d}else c&&this.$d[c](f);return this.init(),this},o.set=function(l,u){return this.clone().$set(l,u)},o.get=function(l){return this[v.p(l)]()},o.add=function(l,u){var i,p=this;l=Number(l);var r=v.p(u),c=function(E){var C=$(p);return v.w(C.date(C.date()+Math.round(E*l)),p)};if(r===w)return this.set(w,this.$M+l);if(r===T)return this.set(T,this.$y+l);if(r===D)return c(1);if(r===F)return c(7);var f=(i={},i[y]=s,i[b]=a,i[g]=n,i)[r]||1,h=this.$d.getTime()+l*f;return v.w(h,this)},o.subtract=function(l,u){return this.add(-1*l,u)},o.format=function(l){var u=this,i=this.$locale();if(!this.isValid())return i.invalidDate||x;var p=l||"YYYY-MM-DDTHH:mm:ssZ",r=v.z(this),c=this.$H,f=this.$m,h=this.$M,E=i.weekdays,C=i.months,B=i.meridiem,j=function(N,K,G,ee){return N&&(N[K]||N(u,p))||G[K].slice(0,ee)},A=function(N){return v.s(c%12||12,N,"0")},R=B||function(N,K,G){var ee=N<12?"AM":"PM";return G?ee.toLowerCase():ee};return p.replace(V,(function(N,K){return K||(function(G){switch(G){case"YY":return String(u.$y).slice(-2);case"YYYY":return v.s(u.$y,4,"0");case"M":return h+1;case"MM":return v.s(h+1,2,"0");case"MMM":return j(i.monthsShort,h,C,3);case"MMMM":return j(C,h);case"D":return u.$D;case"DD":return v.s(u.$D,2,"0");case"d":return String(u.$W);case"dd":return j(i.weekdaysMin,u.$W,E,2);case"ddd":return j(i.weekdaysShort,u.$W,E,3);case"dddd":return E[u.$W];case"H":return String(c);case"HH":return v.s(c,2,"0");case"h":return A(1);case"hh":return A(2);case"a":return R(c,f,!0);case"A":return R(c,f,!1);case"m":return String(f);case"mm":return v.s(f,2,"0");case"s":return String(u.$s);case"ss":return v.s(u.$s,2,"0");case"SSS":return v.s(u.$ms,3,"0");case"Z":return r}return null})(N)||r.replace(":","")}))},o.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},o.diff=function(l,u,i){var p,r=this,c=v.p(u),f=$(l),h=(f.utcOffset()-this.utcOffset())*s,E=this-f,C=function(){return v.m(r,f)};switch(c){case T:p=C()/12;break;case w:p=C();break;case M:p=C()/3;break;case F:p=(E-h)/6048e5;break;case D:p=(E-h)/864e5;break;case b:p=E/a;break;case y:p=E/s;break;case g:p=E/n;break;default:p=E}return i?p:v.a(p)},o.daysInMonth=function(){return this.endOf(w).$D},o.$locale=function(){return U[this.$L]},o.locale=function(l,u){if(!l)return this.$L;var i=this.clone(),p=q(l,u,!0);return p&&(i.$L=p),i},o.clone=function(){return v.w(this.$d,this)},o.toDate=function(){return new Date(this.valueOf())},o.toJSON=function(){return this.isValid()?this.toISOString():null},o.toISOString=function(){return this.$d.toISOString()},o.toString=function(){return this.$d.toUTCString()},m})(),X=Z.prototype;return $.prototype=X,[["$ms",d],["$s",g],["$m",y],["$H",b],["$W",D],["$M",w],["$y",T],["$D",I]].forEach((function(m){X[m[1]]=function(o){return this.$g(o,m[0],m[1])}})),$.extend=function(m,o){return m.$i||(m(o,Z,$),m.$i=!0),$},$.locale=q,$.isDayjs=z,$.unix=function(m){return $(1e3*m)},$.en=U[L],$.Ls=U,$.p={},$}))})(se)),se.exports}var We=Ue();const P=xe(We),He=(e,t)=>{let n;switch(t.type){case"SET_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+t.newOffset),{...e,offset:t.newOffset,shownDate:n};case"ADD_OFFSET":return n=new Date(e.selectedDate),n.setMonth(e.selectedDate.getMonth()+e.offset+t.addedOffset),{...e,offset:e.offset+t.addedOffset,shownDate:n};case"SET_SELECTED_DATE":return be(t.newDate);default:return e}},be=e=>({selectedDate:e,offset:0,shownDate:e}),Ve=/^(\d\d?)[\W](\d\d?)[\W](\d{4}|\d{2})$/,Ke=/^(\d{4}|\d{2})[\W](\d\d?)[\W](\d\d?)$/;function le(e){const t=`${e.getDate()}`.padStart(2,"0"),n=`${e.getMonth()+1}`.padStart(2,"0");return`${t}.${n}.${e.getFullYear()}`}const Ge=e=>{const t=Ve.exec(e);if(t)return t.slice(1,4);const n=Ke.exec(e);if(!n)return;const s=n.slice(1,4);return s.reverse(),s};function Q(e){if(!e)return;const t=Ge(e);if(!t)return;const n=Number.parseInt(new Date().toLocaleString("no-NB",{year:"2-digit"})),s=D=>D>n?D+1900:D+2e3,a=Number.parseInt(t[0],10),d=Number.parseInt(t[1],10)-1,g=Number.parseInt(t[2],10),y=g>99?g:s(g),b=new Date(y,d,a,0,0,0);return b.getMonth()===d&&b.getFullYear()===y?b:void 0}function ce(...e){return t=>e.some(n=>(n?.(t),t.defaultPrevented))}function De({calendars:e,offset:t,minDate:n}){if(t>1&&n){const{firstDayOfMonth:s}=e[0],a=P(n).diff(s,"months");a<t&&(t=a)}return t}const de=3;function Je(e,t,n,s){if(t&&t.getFullYear()>e)return[t.getFullYear().toString()];if(n&&n.getFullYear()<e)return[n.getFullYear().toString()];let a=!1,d,g;s==="all"?(a=!0,d=de,g=de):(d=typeof s=="number"?s:s.previous,g=typeof s=="number"?s:s.coming);let y=e-d;if(t){const M=a?t.getFullYear():y;y=Math.max(t.getFullYear(),M)}let b=e+g;if(n){const M=a?n.getFullYear():b;b=Math.min(n.getFullYear(),M)}const D=Math.max(b-y+1,1);return[...Array(D).keys()].map(M=>M+y).map(M=>M.toString())}function ze(e,t,n,s){const a=n?.getFullYear()||e,d=n?.getMonth()===void 0?0:n.getMonth(),g=s?.getFullYear()||e,y=s?.getMonth()===void 0?11:s.getMonth();let b=0,D=11;return a===e&&(b=d),g===e&&(D=y),t.map((w,M)=>({value:M.toString(),label:w})).filter(({value:w})=>Number.parseInt(w)>=b&&Number.parseInt(w)<=D)}function we({calendars:e,offset:t,maxDate:n}){if(t>1&&n){const{lastDayOfMonth:s}=e[e.length-1],a=P(n).diff(s,"months");a<t&&(t=a)}return t}function Me({calendars:e,minDate:t}){return t?P(e[0].firstDayOfMonth).subtract(1,"day").isBefore(t):!1}function Oe({calendars:e,maxDate:t}){return t?P(e.at(-1)?.lastDayOfMonth).add(1,"day").isAfter(t):!1}function Ze({date:e,selected:t,monthsToDisplay:n,offset:s,minDate:a,maxDate:d,firstDayOfWeek:g,showOutsideDays:y}){const b=[],D=Qe(e,a,d);for(let F=0;F<n;F++){const w=Xe({month:D.getMonth()+F+s,year:D.getFullYear(),selectedDates:t,minDate:a,maxDate:d,firstDayOfWeek:g,showOutsideDays:y});b.push(w)}return b}function Qe(e,t,n){let s=P(e).startOf("day");if(t){const a=P(t).startOf("day");s.isBefore(a)&&(s=a)}if(n){const a=P(n).startOf("day");s.isAfter(a)&&(s=a)}return s.toDate()}function Xe({month:e,year:t,selectedDates:n,minDate:s,maxDate:a,firstDayOfWeek:d,showOutsideDays:g}){const y=nt(e,t),b=y.daysInMonth;e=y.month,t=y.year;const D=[];for(let x=1;x<=b;x++){const _=new Date(t,e,x),V={date:_,selected:me(n,_),selectable:fe(s,a,_),today:P().isSame(_,"day"),prevMonth:!1,nextMonth:!1};D.push(V)}const F=new Date(t,e,1),w=new Date(t,e,b),M=et({firstDayOfMonth:F,minDate:s,maxDate:a,selectedDates:n,firstDayOfWeek:d,showOutsideDays:g}),T=tt({lastDayOfMonth:w,minDate:s,maxDate:a,selectedDates:n,firstDayOfWeek:d,showOutsideDays:g});D.unshift(...M),D.push(...T);const I=rt(D);return{firstDayOfMonth:F,lastDayOfMonth:w,month:e,year:t,weeks:I}}function et({firstDayOfMonth:e,minDate:t,maxDate:n,selectedDates:s,firstDayOfWeek:a,showOutsideDays:d}){const g=[];let y=(e.getDay()+7-a)%7;if(d){const b=P(e).subtract(1,"day"),D=b.date(),F=b.month(),w=b.year();let M=0;for(;M<y;){const T=new Date(w,F,D-M),I={date:T,selected:me(s,T),selectable:fe(t,n,T),today:!1,prevMonth:!0,nextMonth:!1};g.unshift(I),M++}}else for(;y>0;)g.unshift(""),y--;return g}function tt({lastDayOfMonth:e,minDate:t,maxDate:n,selectedDates:s,firstDayOfWeek:a,showOutsideDays:d}){const g=[];let y=(e.getDay()+7-a)%7;if(d){const b=P(e).add(1,"day"),D=b.month(),F=b.year();let w=0;for(;w<6-y;){const M=new Date(F,D,1+w),T={date:M,selected:me(s,M),selectable:fe(t,n,M),today:!1,prevMonth:!1,nextMonth:!0};g.push(T),w++}}else for(;y<6;)g.push(""),y++;return g}function nt(e,t){const n=new Date(t,e,1),s=n.getMonth(),a=n.getFullYear();return{daysInMonth:32-new Date(a,s,32).getDate(),month:s,year:a}}function rt(e){const t=Math.ceil(e.length/7),n=[];for(let s=0;s<t;s++){n[s]=[];for(let a=0;a<7;a++)n[s].push(e[s*7+a])}return n}function me(e,t){return e?(Array.isArray(e)?e:[e]).some(s=>s instanceof Date&&P(s).startOf("day").valueOf()===P(t).startOf("day").valueOf()):!1}function fe(e,t,n){return!(e&&P(n).isBefore(e)||t&&P(n).isAfter(t))}function ye(e,t,n){return!!(n&&e>n||t&&e<t)}function at(e,t,n,s){const a=Q(e),d=Q(t);return a?ye(a,n,s)?null:a:d?ye(d,n,s)?null:d:null}function ke(e,t,n,s){let a=e||t||new Date;return n&&(a=n>a?n:a),s&&(a=s<a?s:a),a}function Te(e){return e!==void 0}function st(e,t){return Te(e)?e:t}function lt(e,{onClick:t,dateObj:n}){return{onClick:ce(t,s=>{e(n,s)}),disabled:!n.selectable,"aria-pressed":n.selected,role:"button"}}function it({minDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:s,offset:a=1,calendars:d}){const g=`Gå tilbake ${a} måned${a===1?"":"er"}`;return{onClick:ce(s,()=>{n(t-De({calendars:d,offset:a,minDate:e}))}),disabled:Me({calendars:d,minDate:e}),"aria-label":g,title:g}}function ot({maxDate:e,offsetMonth:t,handleOffsetChanged:n},{onClick:s,offset:a=1,calendars:d}){const g=`Gå frem ${a} måned${a===1?"":"er"}`;return{onClick:ce(s,()=>{n(t+we({calendars:d,offset:a,maxDate:e}))}),disabled:Oe({calendars:d,maxDate:e}),"aria-label":g,title:g}}function ut({date:e=P().startOf("day").toDate(),maxDate:t,minDate:n,monthsToDisplay:s=1,firstDayOfWeek:a=0,showOutsideDays:d=!0,offset:g,onDateSelected:y,onOffsetChanged:b,selected:D}){const[F,w]=S.useState(0),M=st(g,F);function T(x){Te(g)||w(x),b(x)}return{calendars:Ze({date:e,selected:D,monthsToDisplay:s,minDate:n,maxDate:t,offset:M,firstDayOfWeek:a,showOutsideDays:d}),getDateProps:lt.bind(null,y),getBackProps:it.bind(null,{minDate:n,offsetMonth:M,handleOffsetChanged:T}),getForwardProps:ot.bind(null,{maxDate:t,offsetMonth:M,handleOffsetChanged:T}),handleOffsetChanged:T}}const dt=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],ct=["man","tir","ons","tor","fre","lør","søn"],pe=S.forwardRef((e,t)=>{const{date:n,defaultSelected:s,minDate:a,maxDate:d,days:g=ct,months:y=dt,monthLabel:b="Velg måned",yearLabel:D="Velg år",yearsToShow:F=de,onTabOutside:w,...M}=e,T=Ae("jkl-calendar"),[{offset:I,selectedDate:x,shownDate:_},V]=S.useReducer(He,ke(n,s,a,d),be),te=_.getMonth(),J=_.getFullYear();S.useEffect(()=>{V({type:"SET_SELECTED_DATE",newDate:ke(n,s,a,d)})},[n,s,a,d]);const ne=S.useCallback(r=>{V({type:"SET_OFFSET",newOffset:r})},[]),{calendars:L,getBackProps:U,getDateProps:W,getForwardProps:z,handleOffsetChanged:q}=ut({date:x,selected:x,minDate:a,maxDate:d,offset:I,onOffsetChanged:ne,firstDayOfWeek:1,...M}),$=S.useRef(null),v=S.useCallback(r=>{if(!$.current)return;const c=document.activeElement,f=$.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]'),h=async E=>{c?.setAttribute("tabindex","-1"),E.setAttribute("tabindex","0"),E.focus()};f.forEach((E,C)=>{const B=C+r;if(E===c)if(B<=f.length-1&&B>=0)h(f[B]);else if(r<0){if(Me({calendars:L,minDate:a})||(ue.flushSync(()=>{q(I-De({calendars:L,offset:1,minDate:a}))}),!$.current))return;const j=$.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');j[j.length+B]&&(j[0].setAttribute("tabindex","-1"),h(j[j.length+B]))}else{if(Oe({calendars:L,maxDate:d})||(ue.flushSync(()=>{q(I+we({calendars:L,offset:1,maxDate:d}))}),!$.current))return;const j=$.current.querySelectorAll('button.jkl-calendar-date-button:not([data-adjacent="true"]');j[B-f.length]&&(j[0].setAttribute("tabindex","-1"),h(j[B-f.length]))}})},[q,I,L,d,a]),Z=S.useCallback(r=>{switch(r.key){case"ArrowUp":v(-7),r.preventDefault();break;case"ArrowRight":v(1),r.preventDefault();break;case"ArrowDown":v(7),r.preventDefault();break;case"ArrowLeft":v(-1),r.preventDefault();break}},[v]),X=S.useCallback(r=>{if(r.key!=="Tab")return;const c=$.current?.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), select');if(!c)return;const f=c[0],h=c[c.length-1];!r.shiftKey&&document.activeElement===h?(f.focus(),r.preventDefault()):r.shiftKey&&document.activeElement===f&&(h.focus(),r.preventDefault())},[]),m=S.useCallback(r=>{const{date:c,selected:f,selectable:h,prevMonth:E,nextMonth:C}=r;return h?!!(f||c.toString()===a?.toString()||!E&&!C&&_.getFullYear()===c.getFullYear()&&x.getMonth()!==c.getMonth()&&c.getDate()===1):!1},[_,a,x]),o=S.useCallback(()=>{a&&_.getFullYear()-a.getFullYear()===0&&_.getMonth()-a.getMonth()===1?document.querySelector(`[data-testid="${T}-forward-button"]`)?.focus():d&&d.getFullYear()-_.getFullYear()===0&&d.getMonth()-_.getMonth()===1&&document.querySelector(`[data-testid="${T}-back-button"]`)?.focus()},[a,d,_,T]),l=S.useCallback(r=>{if(r.target.value.length!==4)return;const c=Number.parseInt(r.target.value);if(Number.isNaN(c))return;let f=(c-_.getFullYear())*12;const h=new Date(_.getFullYear(),_.getMonth()+f,_.getDate());d&&d.getFullYear()===h.getFullYear()&&d.getMonth()<h.getMonth()?f-=h.getMonth()-d.getMonth():a&&a.getFullYear()===h.getFullYear()&&a.getMonth()>h.getMonth()&&(f+=a.getMonth()-h.getMonth()),V({type:"ADD_OFFSET",addedOffset:f})},[_,a,d]),u=S.useCallback(r=>{if(!x&&!n)return;const c=_.getFullYear()-(x||new Date).getFullYear(),f=Number.parseInt(r.target.value)-(x||new Date).getMonth();V({type:"SET_OFFSET",newOffset:c*12+f})},[x,n,_]),i=Je(J,a,d,F),p=ze(J,y,a,d);return k.jsx("div",{ref:t,id:T,className:"jkl-calendar","data-testid":"jkl-calendar",children:k.jsxs("div",{className:"jkl-calendar__padding",ref:$,onKeyDown:X,children:[k.jsxs("fieldset",{className:"jkl-calendar-navigation",children:[k.jsxs("div",{children:[k.jsx(he,{...U({calendars:L,onClick:o}),"data-testid":`${T}-back-button`,variant:"ghost",icon:k.jsx(qe,{variant:"medium",bold:!0})}),k.jsx(he,{...z({calendars:L,onClick:o}),variant:"ghost","data-testid":`${T}-forward-button`,icon:k.jsx(Re,{variant:"medium",bold:!0})})]}),k.jsxs("div",{children:[k.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[k.jsx("select",{onChange:u,className:"jkl-calendar-navigation-dropdown__select","aria-label":b,value:te.toString(),children:p.map(({label:r,value:c})=>k.jsx("option",{value:c,children:r},c))}),k.jsx(ge,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]}),k.jsxs("div",{className:"jkl-calendar-navigation-dropdown",children:[k.jsx("select",{onChange:l,className:"jkl-calendar-navigation-dropdown__select","aria-label":D,value:J.toString(),children:i.map(r=>k.jsx("option",{value:r,children:r},r))}),k.jsx(ge,{bold:!0,className:"jkl-calendar-navigation-dropdown__chevron"})]})]})]}),L.map(r=>k.jsxs("table",{className:"jkl-calendar-table","data-testid":"jkl-datepicker-calendar",children:[k.jsxs("caption",{className:"jkl-sr-only",children:[y[r.month],", ",r.year]}),k.jsx("thead",{children:k.jsx("tr",{children:g.map(c=>k.jsx("th",{children:c},`${r.month}${r.year}${c}`))})}),k.jsx("tbody",{"data-testid":"jkl-datepicker-dates",children:r.weeks.map((c,f)=>k.jsx("tr",{children:c.map((h,E)=>{const C=`${r.month}${r.year}${f}${E}`;if(typeof h=="string")return k.jsx("td",{className:"jkl-calendar__date jkl-calendar__date--empty",children:h},C);const{date:B,selectable:j,today:A,prevMonth:R,nextMonth:N}=h;return k.jsx("td",{children:k.jsx("button",{...W({dateObj:h}),type:"button",className:"jkl-calendar-date-button",tabIndex:m(h)?0:-1,"aria-label":`${B.getDate()}. ${y[B.getMonth()].toLowerCase()}`,"aria-current":A?"date":void 0,"data-adjacent":R||N?"true":void 0,disabled:!j,onKeyDown:Z,children:k.jsx("span",{"aria-hidden":"true",children:B.getDate()})})},C)})},`${r.month}${r.year}${f}`))})]},`${r.month}${r.year}`))]})})});pe.displayName="Calendar";pe.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{date:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},defaultSelected:{required:!1,tsType:{name:"Date"},description:""},days:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},months:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},monthLabel:{required:!1,tsType:{name:"string"},description:""},yearLabel:{required:!1,tsType:{name:"string"},description:""},yearsToShow:{required:!1,tsType:{name:"union",raw:'number | "all" | { previous: number; coming: number }',elements:[{name:"number"},{name:"literal",value:'"all"'},{name:"signature",type:"object",raw:"{ previous: number; coming: number }",signature:{properties:[{key:"previous",value:{name:"number",required:!0}},{key:"coming",value:{name:"number",required:!0}}]}}]},description:""},onTabOutside:{required:!0,tsType:{name:"ReactKeyboardEventHandler",raw:"React.KeyboardEventHandler"},description:""}},composes:["Omit"]};function mt(e,t,n={inclusive:!1}){const s=typeof e=="string"?Q(e):e;return s?n.inclusive?s>=t:s>t:!1}function ft(e,t,n={inclusive:!1}){const s=typeof e=="string"?Q(e):e;return s?n.inclusive?s<=t:s<t:!1}const ie=S.forwardRef((e,t)=>{const{"data-testautoid":n,id:s,className:a="",label:d="Velg dato",labelProps:g,defaultValue:y,defaultShow:b=!1,value:D,disableBeforeDate:F,disableAfterDate:w,yearsToShow:M,name:T,helpLabel:I,errorLabel:x,invalid:_,days:V,months:te,monthLabel:J,yearLabel:ne,placeholder:L="dd.mm.åååå",width:U="11.25rem",onChange:W,onBlur:z,onFocus:q,onKeyDown:$,action:v,showCalendarLabel:Z="Åpne kalender",hideCalendarLabel:X="Lukk kalender",supportLabelProps:m,tooltip:o,textInputProps:l,description:u,...i}=e,p=Q(F),r=p?P(p).startOf("day").toDate():void 0,c=Q(w),f=c?P(c).startOf("day").toDate():void 0,[h,E]=S.useState(at(D,y,r,f)),[C,B]=S.useState(null),[j,A]=S.useState(b),R=S.useRef(null),N=S.useRef(null),K=S.useRef(null),G=S.useRef(null),ee=S.useCallback(O=>{G.current=O,t&&(typeof t=="function"?t(O):t.current=O)},[t]),Se=S.useCallback(O=>{if(!q||!N.current)return;N.current.contains(O.relatedTarget)||q(O,h,{error:C,value:O.target.value})},[q,h,C]),$e=S.useCallback(O=>{z&&z(O,h,{error:C,value:O.target.value})},[z,h,C]),Ee=S.useCallback(O=>{O.key==="Escape"&&(A(!1),O.preventDefault(),O.stopPropagation()),v?.onKeyDown&&v.onKeyDown(O)},[v]),je=S.useCallback(O=>{let Y=null,H=null;if(O.target.value){const re=Q(O.target.value);re?r&&!mt(re,r)?H="OUTSIDE_LOWER_BOUND":f&&!ft(re,f)?H="OUTSIDE_UPPER_BOUND":A(!1):H="WRONG_FORMAT",Y=re||null}B(H),E(Y),W&&W(O,Y,{error:H,value:O.target.value})},[W,r,f]),_e=S.useCallback(O=>{ue.flushSync(()=>{A(!j)});const Y=R.current,H=Y&&Y.querySelector('[aria-pressed="true"]');window.requestAnimationFrame(()=>H?.focus()),v?.onClick&&v.onClick(O)},[j,v]),Ce=S.useCallback(({date:O})=>{if(A(!1),E(O),G.current){const Y=G.current;Y.value=le(O);const H=document.createEvent("HTMLEvents");H.initEvent("input",!0,!1),Y.dispatchEvent(H),Y.focus(),W&&W(H,O,{error:null,value:Y.value})}},[W]),Fe=S.useCallback(O=>{O.preventDefault(),A(!1),K.current?.focus()},[]);return k.jsx(Pe,{id:s,className:Be("jkl-datepicker",a),...i,ref:N,label:d,labelProps:g,helpLabel:I,errorLabel:x,supportLabelProps:m,tooltip:o,description:u,render:O=>k.jsx(Le,{"data-focused":j?"true":void 0,ref:ee,"data-testid":"jkl-datepicker__input","data-testautoid":n,className:"jkl-datepicker__input",name:T,defaultValue:y,value:D,type:"text",placeholder:L,width:U,onFocus:Se,onBlur:$e,onChange:je,actionButton:k.jsxs(oe,{positionReference:G,open:j,onOpenChange:()=>A(!j),offset:8,children:[k.jsx(oe.Trigger,{...v,"data-testid":"jkl-datepicker__trigger",className:"jkl-text-input-action-button",title:j?X:Z,tabIndex:0,onClick:_e,onKeyDown:Ee,asChild:!0,children:k.jsx(Ne,{children:k.jsx(Ie,{})})}),k.jsx(oe.Content,{initialFocus:-1,padding:24,children:k.jsx(pe,{ref:R,date:h,minDate:r,maxDate:f,days:V,months:te,monthLabel:J,yearLabel:ne,yearsToShow:M,onDateSelected:Ce,onTabOutside:Fe})})]}),...l,...O,"aria-invalid":_||!!x})})});ie.displayName="DatePicker";ie.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{"data-testautoid":{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},className:{required:!1,tsType:{name:"string"},description:"Settes på rotnivå."},label:{required:!1,tsType:{name:"string"},description:'@default "Velg dato"'},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"intersection",raw:`ComponentPropsWithoutRef<T> &
WithChildren & {
    as?: Exclude<T, "label">;
    variant?: LabelVariant;
    srOnly?: boolean;
}`,elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"T"}],raw:"ComponentPropsWithoutRef<T>"},{name:"WithChildren"},{name:"signature",type:"object",raw:`{
    as?: Exclude<T, "label">;
    variant?: LabelVariant;
    srOnly?: boolean;
}`,signature:{properties:[{key:"as",value:{name:"Exclude",elements:[{name:"T"},{name:"literal",value:'"label"'}],raw:'Exclude<T, "label">',required:!1}},{key:"variant",value:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}],required:!1}},{key:"srOnly",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"children" | "as" | "htmlFor"',elements:[{name:"literal",value:'"children"'},{name:"literal",value:'"as"'},{name:"literal",value:'"htmlFor"'}]}],raw:'Omit<LabelProps, "children" | "as" | "htmlFor">'},description:"Bruk labelProps for å sette props som `variant` og `srOnly`.\n\n@example\n ```tsx\n <DatePicker\n     labelProps={{ srOnly: true }}\n />\n ```"},defaultValue:{required:!1,tsType:{name:"string"},description:`dd.mm.åååå

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
>`},description:"Props som sendes direkte til komponentens TextInput"}},composes:["Omit"]};const Pt={title:"Komponenter/DatePicker",component:ie,args:{action:{disabled:!1},days:["M","T","O","T","F","L","S"],defaultShow:!1,defaultValue:le(new Date),disableBeforeDate:le(new Date(new Date().setDate(new Date().getDate()-14))),disableAfterDate:le(new Date(new Date().setDate(new Date().getDate()+14))),description:"Kortet er gyldig i 3 måneder fra denne datoen",label:"Når skal du reise?",labelProps:{srOnly:!1,variant:"small"},hideCalendarLabel:"Lukk kalender",showCalendarLabel:"Åpne kalender",invalid:!1,months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],monthLabel:"Måned",placeholder:"dd.mm.åååå",yearsToShow:new Date().getFullYear(),yearLabel:"År",textInputProps:{disabled:!1,readOnly:!1}}},ae={args:{},render:e=>k.jsx(ie,{...e,disableBeforeDate:e.disableBeforeDate,disableAfterDate:e.disableAfterDate})};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <DatePickerComponent {...args} disableBeforeDate={args.disableBeforeDate} disableAfterDate={args.disableAfterDate} />
}`,...ae.parameters?.docs?.source}}};const Lt=["DatePicker"];export{ae as DatePicker,Lt as __namedExportsOrder,Pt as default};
