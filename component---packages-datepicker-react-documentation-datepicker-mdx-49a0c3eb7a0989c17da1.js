"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9525],{1346:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return le},default:function(){return pe}});var r=n(808),a=n(7378),o=n(9089),i=n(2803),l=n(6328),d=n(5197),c=n(3804),u=n(2384),s=n(6647),f=n.n(s);var p,m=(p=n(7378))&&"object"==typeof p&&"default"in p?p.default:p;function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function k(e,t,n){return(k=b()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&y(a,n.prototype),a}).apply(null,arguments)}function w(e){var t="function"==typeof Map?new Map:void 0;return(w=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return k(e,arguments,g(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),y(r,e)})(e)}function E(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var _="undefined"!=typeof window;_&&/(android)/i.test(navigator.userAgent),_&&/iPad|iPhone|iPod/.test(String(navigator.platform));_||n.g.HTMLElement||(n.g.HTMLElement=function(){return function e(){h(this,e)}}());var j,D,C=(j="undefined"==typeof window?{}:window.Element.prototype,D=j.matches||j.msMatchesSelector||j.webkitMatchesSelector,j.closest?function(e,t){return e.closest(t)}:function(e,t){for(e.correspondingUseElement&&(e=e.correspondingUseElement);e;e=e.parentElement)if(D.call(e,t))return e;return null});function x(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a="prevent_recursive_dispatch_maximum_callstack".concat(t);if(e[a])return!0;e[a]=!0,"function"==typeof window.CustomEvent?n=new window.CustomEvent(t,{bubbles:!0,cancelable:!0,detail:r}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,r);var o=e.dispatchEvent(n);return e[a]=null,o}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(e){if(e.nodeType)return[e];if("string"==typeof e)return[].slice.call(t.querySelectorAll(e));if(e.length)return[].slice.call(e)}return[]}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self&&self;var L,A=(function(e,t){var n,r,a,o;e.exports=(n={year:"FullYear",month:"Month",week:"Date",day:"Date",hour:"Hours",minute:"Minutes",second:"Seconds"},r=/([+-]\s*\d+)\s*(second|minute|hour|day|week|month|year)|(mon)|(tue)|(wed)|(thu)|(fri)|(sat)|(sun)/g,a=/([-\dy]+)[-/.]([\dm]+)[-/.]([\dd]+)/,o=/([\dh]+):([\dm]+):?([\ds]+)?/,function(e,t){if(isFinite(e))return new Date(Number(e));var i=String(e).toLowerCase(),l=new Date(isFinite(t)&&-1===i.indexOf("now")?Number(t):Date.now()),d=i.match(a)||[],c=d[1];void 0===c&&(c="y");var u=d[2];void 0===u&&(u="m");var s=d[3];void 0===s&&(s="d");var f=i.match(o)||[],p=f[1];void 0===p&&(p="h");var m=f[2];void 0===m&&(m="m");var h=f[3];void 0===h&&(h="s");var v={year:c,month:u,day:s,hour:p,minute:m,second:h};Object.keys(v).forEach((function(e){var t="month"===e?1:0,r=String(l["get"+n[e]]()+t);v[e]=v[e].replace(/[^-\d]+/g,(function(e,t,n){return t?r.substr(r.length-n.length+t,e.length):r.substr(0,Math.max(0,r.length-n.length+e.length))}))-t}));var g=new Date(v.year,Math.min(12,v.month+1),0).getDate();for(l.setFullYear(v.year,Math.min(11,v.month),Math.max(1,Math.min(g,v.day))),l.setHours(Math.min(24,v.hour),Math.min(59,v.minute),Math.min(59,v.second));null!==(v=r.exec(i));){var y=v[2],b=String(v[1]).replace(/\s/g,"")*("week"===y?7:1),k=v.slice(2).indexOf(v[0]),w=l.getDate();y?l["set"+n[y]](l["get"+n[y]]()+b):l.setDate(l.getDate()-(l.getDay()||7)+k),"month"!==y&&"year"!==y||w===l.getDate()||l.setDate(0)}return l})}(L={exports:{}},L.exports),L.exports),M={month:function(e,t){return e.disabled(t)&&V(e.parse(t)).filter((function(t){return!e.disabled(t)}))[0]||t},null:function(e,t){return t}},S={month:function(e,t){return V(e.parse(t)).map((function(t){return e.disabled(t)})).reduce((function(e,t){return e&&t}))},null:function(e,t){return e.disabled(t)}},T={year:"*-m-d",month:"y-*-d",day:"y-m-*",hour:"*:m",minute:"h:*",second:"h:m:*",timestamp:"*",null:"*"},N={33:"-1month",34:"+1month",35:"y-m-99",36:"y-m-1",37:"-1day",38:"-1week",39:"+1day",40:"+1week"},H=function(e){function t(){return h(this,t),E(this,g(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,a=[{key:"observedAttributes",get:function(){return["timestamp","months","days"]}}],(r=[{key:"connectedCallback",value:function(){var e,t,n,r,a=this;this._date=this.date,document.addEventListener("click",this),document.addEventListener("change",this),document.addEventListener("keydown",this),setTimeout((function(){return a.attributeChangedCallback()})),e=this.nodeName,t="".concat(this.nodeName,"{display:block}"),n="style-".concat(e.toLowerCase()),r=t.replace(/\/\*[^!][^*]*\*\//g,"").replace(/\s*(^|[:;,{}]|$)\s*/g,"$1"),document.getElementById(n)||document.head.insertAdjacentHTML("afterbegin",'<style id="'.concat(n,'">').concat(r,"</style>"))}},{key:"disconnectedCallback",value:function(){this._date=this._disabled=null,document.removeEventListener("click",this),document.removeEventListener("change",this),document.removeEventListener("keydown",this)}},{key:"attributeChangedCallback",value:function(){if(this._date){if(this.disabled(this.date)&&!this.disabled(this._date))return this.date=this._date;this.diff(this.date)&&x(this,"datepicker.change",this._date=this.date),R("button",this,F),R("select",this,G),R("input",this,B),R("table",this,U)}}},{key:"handleEvent",value:function(e){if(!(e.defaultPrevented||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||"keydown"===e.type&&!N[e.keyCode])&&(this.contains(e.target)||C(e.target,'[for="'.concat(this.id,'"]').concat(', [data-for="'.concat(this.id,'"]')))))if("change"===e.type){var t=T[e.target.getAttribute("data-type")].replace("*",e.target.value);this.date=M[e.target.getAttribute("data-fill")](this,t)}else if("click"===e.type){var n=C(e.target,"button[value]"),r=C(e.target,"table");if(n){t=T[n.getAttribute("data-type")].replace("*",n.value);var a=n.value.match(new RegExp(Object.keys(M).filter((function(e){return"null"!==e})).join("|"))),o=a&&a[0];t=M[o](this,t),this.date=t}n&&r&&x(this,"datepicker.click.day")}else"keydown"===e.type&&C(e.target,"table")&&(this.date=N[e.keyCode],this.querySelector("[autofocus]").focus(),e.preventDefault())}},{key:"diff",value:function(e){return this.parse(e).getTime()-this.timestamp}},{key:"parse",value:function(e,t){return A(e,t||this._date)}},{key:"disabled",get:function(){return this._disabled||Function.prototype},set:function(e){var t=this;this._disabled="function"==typeof e?function(n){return e(t.parse(n),t)}:function(){return e},this.attributeChangedCallback()}},{key:"timestamp",get:function(){return String(this._date.getTime())}},{key:"year",get:function(){return String(this._date.getFullYear())}},{key:"month",get:function(){return P(this._date.getMonth()+1)}},{key:"day",get:function(){return P(this._date.getDate())}},{key:"hour",get:function(){return P(this._date.getHours())}},{key:"minute",get:function(){return P(this._date.getMinutes())}},{key:"second",get:function(){return P(this._date.getSeconds())}},{key:"date",get:function(){return A(this.getAttribute("timestamp")||this._date||Date.now())},set:function(e){return this.setAttribute("timestamp",this.parse(e).getTime())}},{key:"months",set:function(e){this.setAttribute("months",[].concat(e).join(","))},get:function(){return(this.getAttribute("months")||"januar,februar,mars,april,mai,juni,juli,august,september,oktober,november,desember").split(/\s*,\s*/)}},{key:"days",set:function(e){this.setAttribute("days",[].concat(e).join(","))},get:function(){return(this.getAttribute("days")||"man,tirs,ons,tors,fre,lør,søn").split(/\s*,\s*/)}}])&&v(n.prototype,r),a&&v(n,a),t}(w(HTMLElement)),P=function(e){return"0".concat(e).slice(-2)},R=function(e,t,n){return[].forEach.call(document.getElementsByTagName(e),(function(e){(t.contains(e)||t.id===e.getAttribute(t.external))&&n(t,e)}))};function F(e,t){if(t.value){t.type="button";var n=t.value.match(new RegExp(Object.keys(S).filter((function(e){return"null"!==e})).join("|"))),r=n&&n[0];t.disabled=S[r](e,t.value)}}function B(e,t){var n=t.getAttribute("data-type")||t.getAttribute("type");"radio"===n||"checkbox"===n?(t.disabled=e.disabled(t.value),t.checked=!e.diff(t.value)):T[n]&&(t.setAttribute("type","number"),t.setAttribute("data-type",n),t.value=e[n])}function U(e,t){t.firstElementChild||(t.innerHTML="\n    <caption></caption><thead><tr>".concat(Array(8).join("</th><th>"),"</tr></thead>\n    <tbody>").concat(Array(7).join("<tr>".concat(Array(8).join('<td><button type="button"></button></td>'),"</tr>")),"</tbody>"));var n=new Date,r=e.date.getMonth(),a=e.parse("y-m-1 mon");t.caption.textContent="".concat(e.months[r],", ").concat(e.year),O("th",t).forEach((function(t,n){return t.textContent=e.days[n]})),O("button",t).forEach((function(t){var o=!e.diff(a),i=a.getDate(),l=a.getMonth();t.textContent=i,t.value="".concat(a.getFullYear(),"-").concat(l+1,"-").concat(i),t.disabled=e.disabled(a),t.tabIndex=o-1,t.setAttribute("data-adjacent",r!==l),t.setAttribute("aria-label","".concat(i,". ").concat(e.months[l])),t.setAttribute("aria-current",a.getDate()===n.getDate()&&a.getMonth()===n.getMonth()&&a.getFullYear()===n.getFullYear()&&"date"),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!this.hasAttribute(t);!n===e.hasAttribute(t)&&e[n?"setAttribute":"removeAttribute"](t,"")}(t,"autofocus",o),a.setDate(i+1)}))}function G(e,t){t.firstElementChild||(t._autofill=!0,t.setAttribute("data-fill","month"),t.innerHTML=e.months.map((function(e,t){return'<option value="y-'.concat(t+1,'-d"></option>')})).join(""));var n=S[t.getAttribute("data-fill")];O(t.children).forEach((function(r,a){t._autofill&&(r.textContent=e.months[a]),r.disabled=n(e,r.value),r.selected=!e.diff(r.value)}))}function V(e){var t=new Date(e);t.setDate(1);for(var n=t.getMonth(),r=[];t.getMonth()===n;)r.push(new Date(t)),t.setDate(t.getDate()+1);return r}var I=function(){var e="undefined"==typeof window?{}:window.Element.prototype,t=e.matches||e.msMatchesSelector||e.webkitMatchesSelector;return e.closest?function(e,t){return e.closest(t)}:function(e,n){for(;e;e=e.parentElement)if(t.call(e,n))return e;return null}}();var Y=function(e,t){void 0===t&&(t={});var n=((t.name||e.name||String(e).match(/function ([^(]+)/)[1])+"-"+(Date.now().toString(36)+Math.random().toString(36).slice(2,5))).replace(/.[A-Z]/g,(function(e){return e[0]+"-"+e[1]})),r=t.props||[],a=t.customEvents||[],o=a.reduce((function(e,t){return e[t]="on"+t.replace(/(^|\.)./g,(function(e){return e.slice(-1).toUpperCase()})),e}),{}),i=r.concat("forwardRef",Object.keys(o).map((function(e){return o[e]}))),l=(n+"-"+(t.suffix||"react")).replace(/\W+/g,"-").toLowerCase();return function(t){function n(e){var n=this;t.call(this,e),this.ref=function(e){return"function"==typeof n.props.forwardRef?n.props.forwardRef(e):n.props.forwardRef&&(n.props.forwardRef.current=e),n.el=e},Object.keys(o).forEach((function(e){var t=o[e];n[e]=function(e){n.props[t]&&I(e.target,n.el.nodeName)===n.el&&n.props[t](e)}}))}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n.prototype.componentDidMount=function(){var t=this;window.customElements.get(l)||window.customElements.define(l,e),r.forEach((function(e){e in t.props&&(t.el[e]=t.props[e])})),a.forEach((function(e){t.el.addEventListener(e,t[e])}))},n.prototype.componentDidUpdate=function(e){var t=this;r.forEach((function(n){e[n]!==t.props[n]&&(t.el[n]=t.props[n])}))},n.prototype.componentWillUnmount=function(){var e=this;a.forEach((function(t){e.el.removeEventListener(t,e[t])}))},n.prototype.render=function(){var e=this;return m.createElement(l,Object.keys(this.props).reduce((function(t,n){return-1===i.indexOf(n)&&("className"===n?t.class=e.props[n]:!0===e.props[n]?t[n]="":!1!==e.props[n]&&(t[n]=e.props[n])),t}),{ref:this.ref}))},n}(m.Component)}(H,{name:"CoreDatepicker",props:["disabled"],customEvents:["datepicker.change","datepicker.click.day"],suffix:"3.0.8"}),K=n(2863),Z=(0,a.forwardRef)((function(e,t){var n=e.hidden,r=e.extended,o=e.forceCompact,i=e.inverted,l=e.onClickDate,d=e.currentDate,c=e.monthLabel,s=void 0===c?"Måned":c,p=e.yearLabel,m=void 0===p?"År":p,h=e.days,v=e.months,g=e.disableDate,y=f()("jkl-calendar",{"jkl-calendar--hidden":n,"jkl-calendar--extended":r,"jkl-calendar--inverted":i});return a.createElement(Y,{timestamp:d?d.getTime():new Date,months:v,days:h,onDatepickerClickDay:l,disabled:g,forwardRef:t,className:y,"data-testid":"jkl-calendar__core-datepicker"},a.createElement("div",{className:"jkl-calendar__padding"},r&&a.createElement("div",{className:"jkl-calendar__navigation"},a.createElement(u.oi,{inverted:i,label:m,type:"year",className:"jkl-calendar__year-selector",width:"5rem",variant:"small",forceCompact:o}),a.createElement(K.p,{inverted:i,className:"jkl-calendar__month-selector",label:s,items:[],variant:"small",forceCompact:o,width:"auto"})),!r&&a.createElement("fieldset",{className:"jkl-calendar__month-navigation"},a.createElement("button",{title:"forrige måned","aria-label":"forrige måned",className:"jkl-calendar__month-button",value:"- 1 month"},"←"),a.createElement("button",{title:"neste måned","aria-label":"neste måned",className:"jkl-calendar__month-button jkl-calendar__month-button--right",value:"+ 1 month"},"→")),a.createElement("table",{"data-testid":"jkl-datepicker-calendar"})))}));Z.displayName="Calendar";var q=/^(\d\d)[\.-](\d\d)[\.-](\d{4}|\d{2})$/;function W(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function X(e){return(""+e.getDate()).padStart(2,"0")+"."+(""+(e.getMonth()+1)).padStart(2,"0")+"."+e.getFullYear()}function $(e){var t=q.exec(e);if(t){var n=parseInt((new Date).toLocaleString("no-NB",{year:"2-digit"})),r=parseInt(t[1],10),a=parseInt(t[2],10)-1,o=parseInt(t[3],10),i=o>99?o:function(e){return e>n?e+1900:e+2e3}(o),l=new Date(i,a,r,0,0,0);return l.getMonth()===a&&l.getFullYear()===i?l:void 0}}var J=n(2537),z=n(4649);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){(0,z.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function te(e,t){return function(n,r){switch(r.type){case"INPUT_CHANGE":var a=$(r.payload);return a&&function(e,t){return!e||!W(e,t)}(n.date,a)?ee(ee({},n),{},{date:a,dateString:r.payload,calendarHidden:!0}):ee(ee({},n),{},{date:void 0,dateString:r.payload});case"SET_VALUE_ON_BLUR":var o=$(r.payload);return ee(ee({},n),{},{date:o,dateString:r.payload});case"TOGGLE":if(n.calendarHidden&&n.date){if(e&&n.date<e)return ee(ee({},n),{},{date:void 0,dateString:"",calendarHidden:!n.calendarHidden});if(t&&n.date>t)return ee(ee({},n),{},{date:void 0,dateString:"",calendarHidden:!n.calendarHidden})}return ee(ee({},n),{},{calendarHidden:!n.calendarHidden});case"SELECT_DATE_IN_CALENDAR":return ee(ee({},n),{},{date:r.payload,dateString:X(r.payload),calendarHidden:!0});case"VALUE_PROP_CHANGED":return void 0===n.date&&void 0===r.payload||n.date&&r.payload&&W(n.date,r.payload)?n:ee(ee({},n),{},{date:r.payload,dateString:r.payload?X(r.payload):""});default:throw new Error}}}var ne=["name","label","placeholder","calendarButtonTitle","showCalendarLabel","hideCalendarLabel","initialDate","value","onChange","onBlur","onFocus","initialShow","className","forceCompact","inverted","disableBeforeDate","disableAfterDate","variant","helpLabel","errorLabel","width","data-testautoid"],re=(0,a.forwardRef)((function(e,t){var n=e.name,o=e.label,i=void 0===o?"Velg dato":o,s=e.placeholder,p=void 0===s?"dd.mm.åååå":s,m=e.calendarButtonTitle,h=e.showCalendarLabel,v=void 0===h?m||"Åpne kalender":h,g=e.hideCalendarLabel,y=void 0===g?m||"Lukk kalender":g,b=e.initialDate,k=e.value,w=e.onChange,E=e.onBlur,_=e.onFocus,j=e.initialShow,D=void 0!==j&&j,C=e.className,x=void 0===C?"":C,O=e.forceCompact,L=e.inverted,A=e.disableBeforeDate,M=e.disableAfterDate,S=e.variant,T=e.helpLabel,N=e.errorLabel,H=e.width,P=void 0===H?"11.5rem":H,R=e["data-testautoid"],F=(0,r.Z)(e,ne);var B=function(e,t){return(0,a.useCallback)((function(n){return r=n,a=e,(o=t)&&r>o||a&&r<a;var r,a,o}),[e,t])}(A,M),U=function(){var e=(0,a.useState)("jkl-datepicker-"+(0,J.x0)(8))[0];return[e,e+"-label"]}(),G=U[0],V=U[1],I=(0,a.useMemo)((function(){return te(A,M)}),[A,M]),Y=function(e,t,n){return e?n(e)?void 0:e:t?n(t)?void 0:t:void 0}(k,b,B),K=(0,a.useReducer)(I,{date:Y,calendarHidden:!D,dateString:Y?X(Y):""}),q=K[0],W=K[1],$=f()("jkl-datepicker",{"jkl-datepicker--open":!q.calendarHidden,"jkl-datepicker--inverted":L},x),z=f()("jkl-datepicker__input-wrapper jkl-text-input__input-wrapper",{"jkl-text-input--compact":O,"jkl-text-input--inverted":L}),Q=(0,a.useRef)(null),ee=(0,a.useRef)(null),re=t||ee,ae=(0,c.vD)(!q.calendarHidden)[0],oe=(0,a.useRef)(!0),ie=function(e){return function(t){var n=Q.current&&Q.current.contains(t.relatedTarget);e&&!n&&e(q.date,t)}};return(0,c.O8)(Q,(function(){return!q.calendarHidden&&W({type:"TOGGLE"})})),(0,c.Zk)(Q,(function(){return!q.calendarHidden&&W({type:"TOGGLE"})})),(0,c.WJ)(ae,["Escape"],(function(){!q.calendarHidden&&W({type:"TOGGLE"}),re.current&&re.current.focus()})),(0,a.useEffect)((function(){!oe.current&&w&&w(q.date)}),[q.date,w]),(0,a.useEffect)((function(){oe.current||W({type:"VALUE_PROP_CHANGED",payload:k})}),[k]),(0,a.useEffect)((function(){oe.current=!1}),[]),a.createElement("div",{className:$},a.createElement(l.__,{standAlone:!0,htmlFor:G,variant:S},i),a.createElement("div",{className:z,ref:Q},a.createElement(u.U7,{id:G,ref:re,name:n,describedBy:T||N?V:void 0,invalid:!!N,className:"jkl-datepicker__input jkl-text-input__input","data-testid":"jkl-datepicker__input",value:q.dateString,onFocus:ie(_),onBlur:function(e){return function(t){W({type:"SET_VALUE_ON_BLUR",payload:t.target.value}),ie(e)(t)}}(E),onClick:function(){W({type:"TOGGLE"})},onChange:function(e){W({type:"INPUT_CHANGE",payload:e.target.value})},placeholder:p,width:P,type:"text","data-testautoid":R}),a.createElement(d.h,{className:"jkl-text-input__action-button",iconType:"calendar",buttonTitle:q.calendarHidden?v:y,onClick:function(){if(W({type:"TOGGLE"}),q.calendarHidden){var e=ae.current,t=e&&e.querySelector("[autofocus]");t&&setTimeout((function(){return t.focus()}),100)}},onFocus:ie(_),onBlur:ie(E)}),a.createElement("div",{className:"jkl-datepicker__calendar-wrapper"},a.createElement(Z,Object.assign({currentDate:q.date,onClickDate:function(e){W({type:"SELECT_DATE_IN_CALENDAR",payload:e.target.date}),re.current&&re.current.focus()},disableDate:B,hidden:q.calendarHidden,inverted:L,forceCompact:O,ref:ae},F)))),a.createElement(l.Aq,{inverted:L,id:V,helpLabel:T,errorLabel:N}))})),ae=function(e){var t=864e5*(30*e-5);return t<0?12+t:t},oe=function(e){var t=e.boolValues,n=e.choiceValues,r=t&&t["Med hjelpetekst"]?"Du vil være forsikret fra denne datoen":void 0,o=t&&t["Med feil"]?"Du kan ikke velge en dato som har vært":void 0,i=n&&n.Variant,l=function(e){return function(t){return console.log(e,t)}};return a.createElement(re,{label:"Velg startdato for forsikringen",extended:t&&t["Utvidet velger"],forceCompact:t&&t.Kompakt,inverted:t&&t.Invertert,variant:i,errorLabel:o,helpLabel:r,disableBeforeDate:new Date(Date.now()-ae(2)),disableAfterDate:new Date(Date.now()+ae(5)),onFocus:l("hello from onFocus"),onBlur:l("hello from onBlur"),onChange:l("hello from onChange")})},ie=["components"],le={},de=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",t)}},ce=de("Ingress"),ue=de("ComponentExample"),se={_frontmatter:le},fe=i.Z;function pe(e){var t=e.components,n=(0,r.Z)(e,ie);return(0,o.mdx)(fe,Object.assign({},se,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(ce,{mdxType:"Ingress"},'Vi bruker datovelgeren til å gi brukerne mulighet til å skrive inn eller velge en dato. Ledeteksten beskriver hvilken dato brukeren skal fylle inn, for eksempel: "Oppgi datoen da skaden skjedde".'),(0,o.mdx)(ue,{component:oe,knobs:{boolProps:["Utvidet velger","Kompakt","Med feil","Med hjelpetekst","Invertert"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},mdxType:"ComponentExample"}),(0,o.mdx)("h2",null,"Typer og bruk"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Enkel datovelger:")," Når brukeren skal velge en dato, som er nær dagens dato."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Utvidet datovelger:")," Når brukeren skal velge en dato som ligger mer enn ett år frem eller tilbake i tid."),(0,o.mdx)("p",null,'Vi kan også bruke to datovelgere, når vi vil at brukeren skal angi en periode med fra- og tildato.\nEksempel: "Hvor lenge var du syk da du var på ferie? Velg dato fra og til".'),(0,o.mdx)("h2",null,"Tekst og validering"),(0,o.mdx)("p",null,"Velg størrelse på ledeteksten etter prinsippene for skjemadesign. Bruk en kort og tydelig ledetekst, som forteller hva brukeren skal velge. Hvis det trengs, kan du også gi mer forklaring med en hjelpetekst under feltet."),(0,o.mdx)("p",null,"Hvis datovelgeren ikke validerer, vises en feilmelding, som forteller hva som er galt. Merk at feilmeldingen erstatter en eventuell hjelpetekst, slik at den feilmeldingen du lager også må fortelle hva hjelpeteksten var."),(0,o.mdx)("p",null,'Eksempel:\nHjelpetekst for første kalender i en periode:\n"Velg datoen da du først ble syk". Feilmelding: "Du må velge datoen da du først ble syk."'))}pe.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-datepicker-react-documentation-datepicker-mdx-49a0c3eb7a0989c17da1.js.map