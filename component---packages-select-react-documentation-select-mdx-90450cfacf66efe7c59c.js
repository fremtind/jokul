(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Dhml:function(e,t,n){"use strict";var r=n("P56o"),a=n("GGqZ"),o=n("wEu9"),i=n("tW8y"),l=n("tjmq"),c=n("+edc"),u=n("E7Vc"),s=n("EusA"),f=n("mvii"),h=n("Sp5b"),v=n("GdbT"),p=n("zIds").f,d=n("U1KF").f,g=n("Pfmf"),m=n("jPEw"),b="prototype",y="Wrong index!",w=r.ArrayBuffer,E=r.DataView,k=r.Math,j=r.RangeError,_=r.Infinity,S=w,A=k.abs,T=k.pow,L=k.floor,O=k.log,x=k.LN2,N=a?"_b":"buffer",C=a?"_l":"byteLength",I=a?"_o":"byteOffset";function F(e,t,n){var r,a,o,i=new Array(n),l=8*n-t-1,c=(1<<l)-1,u=c>>1,s=23===t?T(2,-24)-T(2,-77):0,f=0,h=e<0||0===e&&1/e<0?1:0;for((e=A(e))!=e||e===_?(a=e!=e?1:0,r=c):(r=L(O(e)/x),e*(o=T(2,-r))<1&&(r--,o*=2),(e+=r+u>=1?s/o:s*T(2,1-u))*o>=2&&(r++,o/=2),r+u>=c?(a=0,r=c):r+u>=1?(a=(e*o-1)*T(2,t),r+=u):(a=e*T(2,u-1)*T(2,t),r=0));t>=8;i[f++]=255&a,a/=256,t-=8);for(r=r<<t|a,l+=t;l>0;i[f++]=255&r,r/=256,l-=8);return i[--f]|=128*h,i}function B(e,t,n){var r,a=8*n-t-1,o=(1<<a)-1,i=o>>1,l=a-7,c=n-1,u=e[c--],s=127&u;for(u>>=7;l>0;s=256*s+e[c],c--,l-=8);for(r=s&(1<<-l)-1,s>>=-l,l+=t;l>0;r=256*r+e[c],c--,l-=8);if(0===s)s=1-i;else{if(s===o)return r?NaN:u?-_:_;r+=T(2,t),s-=i}return(u?-1:1)*r*T(2,s-t)}function P(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]}function V(e){return[255&e]}function U(e){return[255&e,e>>8&255]}function R(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]}function W(e){return F(e,52,8)}function D(e){return F(e,23,4)}function q(e,t,n){d(e[b],t,{get:function(){return this[n]}})}function M(e,t,n,r){var a=v(+n);if(a+t>e[C])throw j(y);var o=e[N]._b,i=a+e[I],l=o.slice(i,i+t);return r?l:l.reverse()}function G(e,t,n,r,a,o){var i=v(+n);if(i+t>e[C])throw j(y);for(var l=e[N]._b,c=i+e[I],u=r(+a),s=0;s<t;s++)l[c+s]=u[o?s:t-s-1]}if(i.ABV){if(!u((function(){w(1)}))||!u((function(){new w(-1)}))||u((function(){return new w,new w(1.5),new w(NaN),"ArrayBuffer"!=w.name}))){for(var K,Y=(w=function(e){return s(this,w),new S(v(e))})[b]=S[b],X=p(S),H=0;X.length>H;)(K=X[H++])in w||l(w,K,S[K]);o||(Y.constructor=w)}var J=new E(new w(2)),z=E[b].setInt8;J.setInt8(0,2147483648),J.setInt8(1,2147483649),!J.getInt8(0)&&J.getInt8(1)||c(E[b],{setInt8:function(e,t){z.call(this,e,t<<24>>24)},setUint8:function(e,t){z.call(this,e,t<<24>>24)}},!0)}else w=function(e){s(this,w,"ArrayBuffer");var t=v(e);this._b=g.call(new Array(t),0),this[C]=t},E=function(e,t,n){s(this,E,"DataView"),s(e,w,"DataView");var r=e[C],a=f(t);if(a<0||a>r)throw j("Wrong offset!");if(a+(n=void 0===n?r-a:h(n))>r)throw j("Wrong length!");this[N]=e,this[I]=a,this[C]=n},a&&(q(w,"byteLength","_l"),q(E,"buffer","_b"),q(E,"byteLength","_l"),q(E,"byteOffset","_o")),c(E[b],{getInt8:function(e){return M(this,1,e)[0]<<24>>24},getUint8:function(e){return M(this,1,e)[0]},getInt16:function(e){var t=M(this,2,e,arguments[1]);return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=M(this,2,e,arguments[1]);return t[1]<<8|t[0]},getInt32:function(e){return P(M(this,4,e,arguments[1]))},getUint32:function(e){return P(M(this,4,e,arguments[1]))>>>0},getFloat32:function(e){return B(M(this,4,e,arguments[1]),23,4)},getFloat64:function(e){return B(M(this,8,e,arguments[1]),52,8)},setInt8:function(e,t){G(this,1,e,V,t)},setUint8:function(e,t){G(this,1,e,V,t)},setInt16:function(e,t){G(this,2,e,U,t,arguments[2])},setUint16:function(e,t){G(this,2,e,U,t,arguments[2])},setInt32:function(e,t){G(this,4,e,R,t,arguments[2])},setUint32:function(e,t){G(this,4,e,R,t,arguments[2])},setFloat32:function(e,t){G(this,4,e,D,t,arguments[2])},setFloat64:function(e,t){G(this,8,e,W,t,arguments[2])}});m(w,"ArrayBuffer"),m(E,"DataView"),l(E[b],i.VIEW,!0),t.ArrayBuffer=w,t.DataView=E},FFQr:function(e,t,n){"use strict";n.r(t);n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("5hJT");var r=n("mXGw"),a=n.n(r),o=n("SAVP"),i=n("qE5B"),l=(n("lQyR"),n("YhIr"),n("+jjx"),n("ABKx"),n("4aJ6"),n("Z8gF"),n("GmB8")),c=n.n(l),u=n("bGYK"),s=n.n(u),f=n("+P0C"),h=n("F5Dj");n("nsbO");function v(e,t){var n=t.event,r=t.list,a=t.currentFocus;n.preventDefault(),function(e,t,n){var r=n.parentElement;switch(e){case"prev":var a=r&&r.previousElementSibling;if(a){var o=a.querySelector('[role="option"]');o&&o.focus()}break;case"next":var i=r&&r.nextElementSibling;if(i){var l=i.querySelector('[role="option"]');l&&l.focus()}break;case"first":var c=t.querySelector('[role="option"]');c&&c.focus();break;case"last":var u=t.querySelectorAll('[role="option"]');u.length&&u[u.length-1].focus()}}(e,r,a)}function p(e,t){var n=e.list,r=e.event,a=e.search,o=e.searchResetTimer;void 0===t&&(t=v);var i=r.key,l={event:r,list:n,currentFocus:r.target};switch(i){case"ArrowUp":t("prev",l);break;case"ArrowDown":t("next",l);break;case"Home":t("first",l);break;case"End":t("last",l);break;case"Tab":r.preventDefault();break;case"Enter":break;default:if(void 0!==a){var c=function(e){var t=e.list,n=e.key,r=e.search,a=e.searchResetTimer,o=t.querySelectorAll('[role="option"]');if(!o.length)return null;if(r){r.keys=r.keys.concat(n),function(e,t){t&&(clearTimeout(t),t=void 0);t=setTimeout((function(){e?e.keys="":e={keys:""},t=void 0}),500,e,t)}(r,a);for(var i=0;i<o.length;i++){var l=o[i].innerText;if(l&&0===l.toLowerCase().indexOf(r.keys))return o[i]}}return null}({list:n,key:i,search:a,searchResetTimer:o});c&&c.focus()}}}function d(e){return void 0===e&&(e=""),e.toLowerCase().replace(/[\W_]+/g,"")}function g(e){var t=e.items,n=e.value,o=e.label,i=e.onChange,l=e.className,u=e.helpLabel,v=e.errorLabel,g=e.inline,m=void 0!==g&&g,b=e.defaultPrompt,y=void 0===b?"Velg":b,w=e.variant,E=e.forceCompact,k=(e.initialInputValue,Object(r.useState)(n)),j=k[0],_=k[1],S=void 0!==j&&""!==j;function A(e){var n=t.map(h.a).filter((function(t){return t.value===e}))[0];return n&&n.label}var T=Object(r.useState)(A(n)),L=T[0],O=T[1],x=Object(r.useState)(!1),N=x[0],C=x[1],I=Object(r.useState)("dropdown"+s()(16))[0],F=function(e){void 0===e&&(e=!0);var t,n=Object(r.useRef)(null);return e&&(t={keys:""}),Object(r.useEffect)((function(){var e=n.current;return e&&e.addEventListener("keydown",(function(n){return p({list:e,event:n,search:t,searchResetTimer:void 0})})),function(){e&&e.removeEventListener("keydown",(function(n){return p({list:e,event:n,search:t,searchResetTimer:void 0})}))}}),[]),n}(),B="jkl-select".concat(m?" jkl-select--inline":"",E?" jkl-select--compact":"",N?" jkl-select--open":"",S?"":" jkl-select--no-value",v?" jkl-select--invalid":"",l?" "+l:"");return Object(r.useEffect)((function(){_(n),O(A(n))}),[n]),a.a.createElement("div",{"data-testid":"jkl-select",className:B},a.a.createElement(f.e,{variant:w,forceCompact:E},o),a.a.createElement("div",{className:"jkl-select__outer-wrapper"},a.a.createElement("button",{type:"button",className:"jkl-select__value","data-testid":"jkl-select__value","aria-haspopup":"listbox"},S?L:y),a.a.createElement(c.a,{id:I,role:"listbox",className:"jkl-select__core-toggle",popup:o,hidden:!N,onToggle:function(){var e=F.current;e&&!N&&function(e,t,n){var r;(r=void 0!==n?e.querySelector("#"+t+"__"+d(n)):e.querySelector('[role="option"]'))&&r.focus()}(e,I,j),C(!N)},onToggleSelect:function(e){e.target.hidden=!0,e.target.button.focus(),e.target.value=e.detail;var t=e.detail.value;O(e.detail.textContent),_(t),i&&i(t)},"aria-activedescendant":S&&I+"__"+d(j)},a.a.createElement("ul",{className:"jkl-select__option-wrapper","data-testid":"jkl-select__option-wrapper",tabIndex:-1,ref:F},t.map(h.a).map((function(e){return a.a.createElement("li",{key:e.value},a.a.createElement("button",{type:"button",id:I+"__"+d(e.value),className:"jkl-select__option","data-testid":"jkl-select__option","aria-selected":e.value===j,role:"option",value:e.value},e.label))})))),a.a.createElement("span",{className:"jkl-select__chevron"})),a.a.createElement(f.i,{helpLabel:u,errorLabel:v,forceCompact:E}))}function m(e){var t=e.label,n=e.items,r=e.className,o=void 0===r?"":r,i=e.onChange,l=e.inline,c=void 0!==l&&l,u=e.helpLabel,s=e.errorLabel,v=e.variant,p=e.placeholder,d=e.value,g=e.forceCompact;d||!p&&n.length&&(d=Object(h.a)(n[0]).value);var m="jkl-select".concat(c?" jkl-select--inline":"",g?" jkl-select--compact":"",s?" jkl-select--invalid":"",o?" "+o:""),b=d?void 0:"";return a.a.createElement("label",{"data-testid":"jkl-select",className:m},a.a.createElement(f.e,{variant:v,forceCompact:g},t),a.a.createElement("select",{value:d,defaultValue:b,className:"jkl-select__value",onBlur:i,onChange:i},p&&!d&&a.a.createElement("option",{disabled:!0,value:""},p),n.map(h.a).map((function(e){return a.a.createElement("option",{"data-testid":"jkl-select__option",key:e.value,value:e.value},e.label)}))),a.a.createElement("span",{className:"jkl-select__chevron"}),a.a.createElement(f.i,{helpLabel:u,errorLabel:s,forceCompact:g}))}var b=n("nBO4");n("HrjT"),n("AXu8"),n("HNvF"),n("RlK5");function y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var w=function(){var e=["The flower shop is very far away from here","I have cancer","Throwing the football","ChirpChirpChirp"],t=[{value:"firstvalue",label:"Value 1"},{value:"secondvalue",label:"Value 2"}],n=y(Array(120)).map((function(e,t){return(t+1900).toString()})),o=Object(r.useState)(),i=o[0],l=o[1],c=Object(r.useState)(),u=c[0],s=c[1],f=Object(r.useState)(!1),h=f[0],v=f[1];return a.a.createElement("section",{className:"example-page "+(h?"example-page--dark-mode":"example-page--light-mode")},a.a.createElement(b.a,{className:"toggle-switch",inverted:h,onChange:function(){return v(!h)}},"Dark Mode"),a.a.createElement(g,{forceCompact:!0,inline:!0,className:"jkl-spacing--top-3",label:"The Room scene",defaultPrompt:"Choose your favorite",items:e,onChange:l,value:i,helpLabel:"The room is the greatest movie",errorLabel:i?"You can't pick, they are all the best":void 0,variant:"large"}),a.a.createElement(g,{inline:!0,className:"jkl-spacing--top-3",label:"Fødselsår",items:n,value:"1986",variant:"small",forceCompact:!0}),a.a.createElement(m,{className:"jkl-spacing--top-5",label:"Native select",items:t,onChange:function(e){return s(e.target.value)},value:u,helpLabel:"This uses value/label pairs"}),a.a.createElement(m,{className:"jkl-spacing--top-3",helpLabel:"The room is the greatest movie",errorLabel:i?"You can't pick, they are all the best":void 0,label:"Native select",items:e,onChange:function(e){return l(e.target.value)},placeholder:"Choose your favorite",variant:"large",value:i,forceCompact:!0}),a.a.createElement(g,{className:"jkl-spacing--top-5",label:"Favorite The Room scene",items:e}),a.a.createElement(g,{className:"jkl-spacing--top-3",label:"Value pairs",items:t,onChange:function(e){return console.log(e)},helpLabel:"This uses value/label pairs"}))};n.d(t,"_frontmatter",(function(){return E})),n.d(t,"default",(function(){return _}));var E={},k={_frontmatter:E},j=i.a;function _(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(j,Object.assign({},k,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(w,{mdxType:"Example"}))}_.isMDXComponent=!0},GdbT:function(e,t,n){var r=n("mvii"),a=n("Sp5b");e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=a(t);if(t!==n)throw RangeError("Wrong length!");return n}},JKk3:function(e,t,n){"use strict";var r=n("UnHL"),a=n("BUlT"),o=n("Sp5b");e.exports=[].copyWithin||function(e,t){var n=r(this),i=o(n.length),l=a(e,i),c=a(t,i),u=arguments.length>2?arguments[2]:void 0,s=Math.min((void 0===u?i:a(u,i))-c,i-l),f=1;for(c<l&&l<c+s&&(f=-1,c+=s-1,l+=s-1);s-- >0;)c in n?n[l]=n[c]:delete n[l],l+=f,c+=f;return n}},Pfmf:function(e,t,n){"use strict";var r=n("UnHL"),a=n("BUlT"),o=n("Sp5b");e.exports=function(e){for(var t=r(this),n=o(t.length),i=arguments.length,l=a(i>1?arguments[1]:void 0,n),c=i>2?arguments[2]:void 0,u=void 0===c?n:a(c,n);u>l;)t[l++]=e;return t}},b01t:function(e,t,n){"use strict";if(n("GGqZ")){var r=n("wEu9"),a=n("P56o"),o=n("E7Vc"),i=n("X6VK"),l=n("tW8y"),c=n("Dhml"),u=n("9liC"),s=n("EusA"),f=n("WWmS"),h=n("tjmq"),v=n("+edc"),p=n("mvii"),d=n("Sp5b"),g=n("GdbT"),m=n("BUlT"),b=n("5MU4"),y=n("ezc+"),w=n("OFVL"),E=n("Bsg+"),k=n("UnHL"),j=n("2LOZ"),_=n("Vx+c"),S=n("A1KM"),A=n("zIds").f,T=n("pB2m"),L=n("1Alt"),O=n("9dxi"),x=n("1wfo"),N=n("sdkr"),C=n("5Fu2"),I=n("K/PF"),F=n("Ibj2"),B=n("zlqh"),P=n("E8p1"),V=n("Pfmf"),U=n("JKk3"),R=n("U1KF"),W=n("1Tj+"),D=R.f,q=W.f,M=a.RangeError,G=a.TypeError,K=a.Uint8Array,Y=Array.prototype,X=c.ArrayBuffer,H=c.DataView,J=x(0),z=x(2),Z=x(3),Q=x(4),$=x(5),ee=x(6),te=N(!0),ne=N(!1),re=I.values,ae=I.keys,oe=I.entries,ie=Y.lastIndexOf,le=Y.reduce,ce=Y.reduceRight,ue=Y.join,se=Y.sort,fe=Y.slice,he=Y.toString,ve=Y.toLocaleString,pe=O("iterator"),de=O("toStringTag"),ge=L("typed_constructor"),me=L("def_constructor"),be=l.CONSTR,ye=l.TYPED,we=l.VIEW,Ee=x(1,(function(e,t){return Ae(C(e,e[me]),t)})),ke=o((function(){return 1===new K(new Uint16Array([1]).buffer)[0]})),je=!!K&&!!K.prototype.set&&o((function(){new K(1).set({})})),_e=function(e,t){var n=p(e);if(n<0||n%t)throw M("Wrong offset!");return n},Se=function(e){if(E(e)&&ye in e)return e;throw G(e+" is not a typed array!")},Ae=function(e,t){if(!(E(e)&&ge in e))throw G("It is not a typed array constructor!");return new e(t)},Te=function(e,t){return Le(C(e,e[me]),t)},Le=function(e,t){for(var n=0,r=t.length,a=Ae(e,r);r>n;)a[n]=t[n++];return a},Oe=function(e,t,n){D(e,t,{get:function(){return this._d[n]}})},xe=function(e){var t,n,r,a,o,i,l=k(e),c=arguments.length,s=c>1?arguments[1]:void 0,f=void 0!==s,h=T(l);if(null!=h&&!j(h)){for(i=h.call(l),r=[],t=0;!(o=i.next()).done;t++)r.push(o.value);l=r}for(f&&c>2&&(s=u(s,arguments[2],2)),t=0,n=d(l.length),a=Ae(this,n);n>t;t++)a[t]=f?s(l[t],t):l[t];return a},Ne=function(){for(var e=0,t=arguments.length,n=Ae(this,t);t>e;)n[e]=arguments[e++];return n},Ce=!!K&&o((function(){ve.call(new K(1))})),Ie=function(){return ve.apply(Ce?fe.call(Se(this)):Se(this),arguments)},Fe={copyWithin:function(e,t){return U.call(Se(this),e,t,arguments.length>2?arguments[2]:void 0)},every:function(e){return Q(Se(this),e,arguments.length>1?arguments[1]:void 0)},fill:function(e){return V.apply(Se(this),arguments)},filter:function(e){return Te(this,z(Se(this),e,arguments.length>1?arguments[1]:void 0))},find:function(e){return $(Se(this),e,arguments.length>1?arguments[1]:void 0)},findIndex:function(e){return ee(Se(this),e,arguments.length>1?arguments[1]:void 0)},forEach:function(e){J(Se(this),e,arguments.length>1?arguments[1]:void 0)},indexOf:function(e){return ne(Se(this),e,arguments.length>1?arguments[1]:void 0)},includes:function(e){return te(Se(this),e,arguments.length>1?arguments[1]:void 0)},join:function(e){return ue.apply(Se(this),arguments)},lastIndexOf:function(e){return ie.apply(Se(this),arguments)},map:function(e){return Ee(Se(this),e,arguments.length>1?arguments[1]:void 0)},reduce:function(e){return le.apply(Se(this),arguments)},reduceRight:function(e){return ce.apply(Se(this),arguments)},reverse:function(){for(var e,t=Se(this).length,n=Math.floor(t/2),r=0;r<n;)e=this[r],this[r++]=this[--t],this[t]=e;return this},some:function(e){return Z(Se(this),e,arguments.length>1?arguments[1]:void 0)},sort:function(e){return se.call(Se(this),e)},subarray:function(e,t){var n=Se(this),r=n.length,a=m(e,r);return new(C(n,n[me]))(n.buffer,n.byteOffset+a*n.BYTES_PER_ELEMENT,d((void 0===t?r:m(t,r))-a))}},Be=function(e,t){return Te(this,fe.call(Se(this),e,t))},Pe=function(e){Se(this);var t=_e(arguments[1],1),n=this.length,r=k(e),a=d(r.length),o=0;if(a+t>n)throw M("Wrong length!");for(;o<a;)this[t+o]=r[o++]},Ve={entries:function(){return oe.call(Se(this))},keys:function(){return ae.call(Se(this))},values:function(){return re.call(Se(this))}},Ue=function(e,t){return E(e)&&e[ye]&&"symbol"!=typeof t&&t in e&&String(+t)==String(t)},Re=function(e,t){return Ue(e,t=b(t,!0))?f(2,e[t]):q(e,t)},We=function(e,t,n){return!(Ue(e,t=b(t,!0))&&E(n)&&y(n,"value"))||y(n,"get")||y(n,"set")||n.configurable||y(n,"writable")&&!n.writable||y(n,"enumerable")&&!n.enumerable?D(e,t,n):(e[t]=n.value,e)};be||(W.f=Re,R.f=We),i(i.S+i.F*!be,"Object",{getOwnPropertyDescriptor:Re,defineProperty:We}),o((function(){he.call({})}))&&(he=ve=function(){return ue.call(this)});var De=v({},Fe);v(De,Ve),h(De,pe,Ve.values),v(De,{slice:Be,set:Pe,constructor:function(){},toString:he,toLocaleString:Ie}),Oe(De,"buffer","b"),Oe(De,"byteOffset","o"),Oe(De,"byteLength","l"),Oe(De,"length","e"),D(De,de,{get:function(){return this[ye]}}),e.exports=function(e,t,n,c){var u=e+((c=!!c)?"Clamped":"")+"Array",f="get"+e,v="set"+e,p=a[u],m=p||{},b=p&&S(p),y=!p||!l.ABV,k={},j=p&&p.prototype,T=function(e,n){D(e,n,{get:function(){return function(e,n){var r=e._d;return r.v[f](n*t+r.o,ke)}(this,n)},set:function(e){return function(e,n,r){var a=e._d;c&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),a.v[v](n*t+a.o,r,ke)}(this,n,e)},enumerable:!0})};y?(p=n((function(e,n,r,a){s(e,p,u,"_d");var o,i,l,c,f=0,v=0;if(E(n)){if(!(n instanceof X||"ArrayBuffer"==(c=w(n))||"SharedArrayBuffer"==c))return ye in n?Le(p,n):xe.call(p,n);o=n,v=_e(r,t);var m=n.byteLength;if(void 0===a){if(m%t)throw M("Wrong length!");if((i=m-v)<0)throw M("Wrong length!")}else if((i=d(a)*t)+v>m)throw M("Wrong length!");l=i/t}else l=g(n),o=new X(i=l*t);for(h(e,"_d",{b:o,o:v,l:i,e:l,v:new H(o)});f<l;)T(e,f++)})),j=p.prototype=_(De),h(j,"constructor",p)):o((function(){p(1)}))&&o((function(){new p(-1)}))&&B((function(e){new p,new p(null),new p(1.5),new p(e)}),!0)||(p=n((function(e,n,r,a){var o;return s(e,p,u),E(n)?n instanceof X||"ArrayBuffer"==(o=w(n))||"SharedArrayBuffer"==o?void 0!==a?new m(n,_e(r,t),a):void 0!==r?new m(n,_e(r,t)):new m(n):ye in n?Le(p,n):xe.call(p,n):new m(g(n))})),J(b!==Function.prototype?A(m).concat(A(b)):A(m),(function(e){e in p||h(p,e,m[e])})),p.prototype=j,r||(j.constructor=p));var L=j[pe],O=!!L&&("values"==L.name||null==L.name),x=Ve.values;h(p,ge,!0),h(j,ye,u),h(j,we,!0),h(j,me,p),(c?new p(1)[de]==u:de in j)||D(j,de,{get:function(){return u}}),k[u]=p,i(i.G+i.W+i.F*(p!=m),k),i(i.S,u,{BYTES_PER_ELEMENT:t}),i(i.S+i.F*o((function(){m.of.call(p,1)})),u,{from:xe,of:Ne}),"BYTES_PER_ELEMENT"in j||h(j,"BYTES_PER_ELEMENT",t),i(i.P,u,Fe),P(u),i(i.P+i.F*je,u,{set:Pe}),i(i.P+i.F*!O,u,Ve),r||j.toString==he||(j.toString=he),i(i.P+i.F*o((function(){new p(1).slice()})),u,{slice:Be}),i(i.P+i.F*(o((function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()}))||!o((function(){j.toLocaleString.call([1,2])}))),u,{toLocaleString:Ie}),F[u]=O?L:x,r||O||h(j,pe,x)}}else e.exports=function(){}},bGYK:function(e,t,n){n("nd6X");var r=self.crypto||self.msCrypto;e.exports=function(e){e=e||21;for(var t="",n=r.getRandomValues(new Uint8Array(e));e--;)t+="QLUint8ARdomValuesObj0h6345-79BCrypgJzHKTNYDSMkXPZ_FfG1WcqvwxEI2"[63&n[e]];return t}},nd6X:function(e,t,n){n("b01t")("Uint8",1,(function(e){return function(t,n,r){return e(this,t,n,r)}}))},tW8y:function(e,t,n){for(var r,a=n("P56o"),o=n("tjmq"),i=n("1Alt"),l=i("typed_array"),c=i("view"),u=!(!a.ArrayBuffer||!a.DataView),s=u,f=0,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");f<9;)(r=a[h[f++]])?(o(r.prototype,l,!0),o(r.prototype,c,!0)):s=!1;e.exports={ABV:u,CONSTR:s,TYPED:l,VIEW:c}}}]);
//# sourceMappingURL=component---packages-select-react-documentation-select-mdx-90450cfacf66efe7c59c.js.map