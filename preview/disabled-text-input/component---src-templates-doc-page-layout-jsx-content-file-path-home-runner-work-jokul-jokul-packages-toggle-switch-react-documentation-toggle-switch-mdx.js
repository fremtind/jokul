"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4537],{22678:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return f},Head:function(){return k},default:function(){return g}});var r=n(64717),l=n(92379),a=n(70624);function o(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:o,Grid:i,DoDontExample:c}=t;return o||s("ComponentExample",!0),c||s("DoDontExample",!0),i||s("Grid",!0),n||s("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Veksleknapper gir brukerne mulighet til å bytte mellom to tilstander uten å\nmåtte bekrefte valget. Det finnes to varianter: En ren av/på knapp og en\nslider variant der man velger mellom to tilstander.")),"\n",l.createElement(o,{title:"ToggleSwitch",component:a.u$,knobs:a._H,codeExample:a.R_}),"\n",l.createElement(t.h2,null,"Bruk"),"\n",l.createElement(t.p,null,"Bruk veksleknapper dersom du ønsker:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Å skru av/på en funksjonalitet uten bekreftelse fra brukeren. Et godt eksempel på det er når man skrur på Bluetooth på en mobiltelefon. Det aktiveres umiddelbart, altså uten bekreftelse."),"\n",l.createElement(t.li,null,"Å endre visning av innhold. For eksempel så kan man bytte mellom å vise pris per måned eller år. Avhengig av situasjonen, bør man vurdere om andre komponenter som ",l.createElement(t.a,{href:"/preview/disabled-text-input/komponenter/tabs"},"Tabs")," er et bedre valg."),"\n"),"\n",l.createElement(t.p,null,"Ikke bruk veksleknapper dersom brukeren skal bekrefte et valg. Et eksempel på det er når veksleknapper benyttes som en Checkbox i et skjema."),"\n",l.createElement(i,null,l.createElement(c,{type:"do",description:"Skrur av/på mørk modus umidderlbart uten bekreftelse fra brukeren",content:l.createElement(a.u$)}),l.createElement(c,{type:"dont",description:"Ønsker bekreftelse fra brukeren ved å benytte veksleknapp som CheckBox",content:l.createElement(a.zj)})),"\n",l.createElement(t.p,null,"Vi tilbyr andre komponenter som kan brukes dersom man ønsker at brukeren skal bekrefte valget sitt. Under ser du noen eksempler:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"/preview/disabled-text-input/komponenter/checkbox"},"Checkbox"),": I tilfeller der man ønsker å tilby flere valg og skal velge et eller flere valg."),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"/preview/disabled-text-input/komponenter/radiobutton"},"RadioButton"),": I tilfeller der man ønsker å tilby flere valg og skal kun velge ett valg."),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"/preview/disabled-text-input/komponenter/select"},"Select"),": I tilfeller der man ønsker å tilby mange valg og skal kun velge ett valg."),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"/preview/disabled-text-input/komponenter/autosuggest"},"Autosuggest"),": I tilfeller der man ønsker å tilby mange valg som forslag via fritekst og skal kun velge ett."),"\n"),"\n",l.createElement(t.p,null,"I tillegg bør man etterstrebe å følge disse prinsippene:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Bruk korte og beskrivende navn."),"\n",l.createElement(t.li,null,"Mellomrom bør unngås hvis mulig."),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)};function s(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var c=n(75482),u=n(96036),d=n(59001),m=n(65458),p=n(79379);const k=e=>{let{pageContext:t}=e;return l.createElement(u.p,{title:t.title})},f=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:i}=r;return l.createElement(p.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(m.M1,Object.assign({},o,{versions:r.versions})),t.pathname.includes("komponenter")&&l.createElement(d.c,{variant:"komponent",component:o.title}),l.createElement(m.w5,o),a,i&&l.createElement(c.l,{types:i}))};function g(e){return l.createElement(f,e,l.createElement(i,e))}},9378:function(e,t,n){n.d(t,{C9:function(){return p},KM:function(){return d},kq:function(){return m},zx:function(){return u}});var r=n(99767),l=n(60894),a=n(40969),o=n(80324),i=n.n(o),s=n(92379);const c=["as","children","className","density","onTouchStart","loader","icon","iconPosition","iconLeft","iconRight","variant"],u=s.forwardRef((function(e,t){const{as:n="button",children:o,className:u,density:d,onTouchStart:m,loader:p,icon:k,iconPosition:f="left",iconLeft:g,iconRight:v,variant:b="secondary"}=e,E=(0,r.Z)(e,c),h=n;const y=(0,s.useCallback)((e=>{m&&m(e);const t=e.target;if(t&&!t.disabled&&e.targetTouches.length){const n=e.targetTouches[0].clientX-t.getBoundingClientRect().x,r=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",n.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",r.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((()=>{t.classList.remove("jkl-button--pressed"),t.style.removeProperty("--jkl-touch-xcoord"),t.style.removeProperty("--jkl-touch-ycoord")}),400)}}),[m]),j=(0,a.c)(null==p?void 0:p.showLoader),w=Boolean(o)&&Boolean(null==p?void 0:p.showLoader);return s.createElement(h,Object.assign({},j,{"data-loading":w,"data-density":d,className:i()("jkl-button","jkl-button--"+b,u),disabled:"button"===n?null==p?void 0:p.showLoader:void 0,onTouchStart:y},E,{ref:t}),s.createElement("div",{className:"jkl-button__label"},g&&g,k&&"left"===f&&k,o&&s.createElement("span",{className:"jkl-button__text"},o),v&&v,k&&"right"===f&&k),o&&s.createElement(l.a,{className:"jkl-button__loader",variant:"medium",textDescription:(null==p?void 0:p.textDescription)||"Vennligst vent","aria-hidden":!(null!=p&&p.showLoader)}))}));function d(e){const t=Object.assign({},e,{variant:"primary"});return s.createElement(u,t)}function m(e){const t=Object.assign({},e,{variant:"secondary"});return s.createElement(u,t)}function p(e){const t=Object.assign({},e,{variant:"tertiary"});return s.createElement(u,t)}},70624:function(e,t,n){n.d(t,{u$:function(){return f},zj:function(){return v},R_:function(){return g},_H:function(){return k}});var r=n(92379),l=n(9378),a=n(99767),o=n(57193),i=n(38475),s=n(95286),c=n(80324),u=n.n(c);const d=["aria-pressed","children","className","density","id","onChange"],m=["onClick","onPointerCancel","onPointerDown","onPointerMove","onPointerUp"],p=(0,r.forwardRef)(((e,t)=>{let{"aria-pressed":n=!1,children:l,className:c,density:p,id:k,onChange:f}=e,g=(0,a.Z)(e,d);const v=(0,i.M)(k||"jkl-toggle-switch",{generateSuffix:!k}),[b,E]=r.useState(n);r.useEffect((()=>{E(n)}),[n]);const{onClick:h,onPointerCancel:y,onPointerDown:j,onPointerMove:w,onPointerUp:_}=g,x=(0,a.Z)(g,m),{gestureHandlers:N}=(0,s.J)({onClick:e=>{E(!b),null==f||f(e,!b),null==h||h(e)},onChange:(e,t)=>{t!==b&&(E(t),null==f||f(e,t))},onPointerCancel:y,onPointerDown:j,onPointerMove:w,onPointerUp:_});return r.createElement("button",Object.assign({className:u()("jkl-toggle-switch",c),id:v,ref:t,"aria-pressed":b,"data-density":p},x,x.disabled?{}:N),l,r.createElement("div",{"aria-hidden":!0,className:"jkl-toggle-switch-widget"},r.createElement("div",{className:"jkl-toggle-switch-widget__slider"},r.createElement("div",{className:"jkl-toggle-switch-widget__knob"}),r.createElement(o.n,{variant:"small",bold:!0,className:"jkl-toggle-switch-widget__indicator"}))))}));p.displayName="ToggleSwitch";const k={boolProps:["Deaktivert"]},f=e=>{let{boolValues:t}=e;const n=null==t?void 0:t.Deaktivert;return r.createElement(p,{disabled:n,onChange:(e,t)=>console.log("Mørk modus satt til: ",t,e)},"Mørk modus")},g=()=>'\nconst handleToggle: ToggleHandler<HTMLButtonElement> = (event, pressed) =>\n    console.log("Mørk modus satt til: ", pressed, event);\n\n<ToggleSwitch onToggle={handleToggle}>Mørk modus</ToggleSwitch>',v=()=>r.createElement("form",null,r.createElement(p,null,"Jeg samtykker"),r.createElement(l.KM,{type:"submit",className:"jkl-spacing-l--top"},"Send"))},75482:function(e,t,n){n.d(t,{l:function(){return k}});var r=n(96845),l=n(41162),a=n(74797),o=n(92379),i=n(25329);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},u=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},m=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(u):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,l,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),r.length>0&&o.createElement(p,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return i}});var r=n(48467),l=n(58990),a=n(92379),o=n(25329);const i=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(l.U,null),a.createElement(o.nv,null,s[t].text)),a.createElement(r.r,{href:s[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(80324),l=n.n(r),a=n(24157),o=n(92379),i=n(69215);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},96845:function(e,t,n){n.d(t,{U:function(){return s}});var r=n(99767),l=n(651),a=n(80324),o=n.n(a);const i=["className","density","id"],s=e=>{let{className:t,density:n,id:a}=e,s=(0,r.Z)(e,i);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:a},s))}},41162:function(e,t,n){n.d(t,{Q:function(){return d}});var r=n(99767),l=n(651),a=n(42054),o=n(95020),i=n(80324),s=n.n(i),c=n(92379);const u=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:n,className:i,startExpanded:d=!1,onClick:m,id:p}=e,k=(0,r.Z)(e,u);const[f,g]=(0,c.useState)(d),[v]=(0,c.useState)((()=>d)),{detailsRef:b,summaryRef:E,contentRef:h,onSummaryClick:y}=(0,o.E)({onOpenChange:(e,t)=>{g(e),m&&m(t,e)},isExpanded:v});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:s()("jkl-accordion-item",i),ref:b,id:p,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:y,ref:E,children:[n,(0,l.jsx)(a.K,{className:"jkl-accordion-item__arrow",pointingDown:!f,bold:f})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},57193:function(e,t,n){n.d(t,{n:function(){return u}});var r=n(92379),l=n(55650),a=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const u=e=>r.createElement(l.J,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e})({},e),"");u.displayName="CheckIcon"},58990:function(e,t,n){n.d(t,{U:function(){return u}});var r=n(92379),l=n(55650),a=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const u=e=>r.createElement(l.J,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e})({},e),"");u.displayName="QuestionIcon"},95286:function(e,t,n){n.d(t,{J:function(){return a}});var r=n(92379);function l(e){return{x:e.clientX,y:e.clientY}}function a(e){const t=(0,r.useRef)(!1),n=(0,r.useRef)(),{onClick:a,onChange:o,onPointerCancel:i,onPointerDown:s,onPointerMove:c,onPointerUp:u}=e,d=(0,r.useCallback)((e=>{t.current||null==a||a(e),t.current=!1}),[a]),m=(0,r.useCallback)((e=>{var r,a;e.preventDefault(),null==(a=(r=e.target).setPointerCapture)||a.call(r,e.pointerId),n.current=l(e),t.current=!1,null==s||s(e)}),[s]),p=(0,r.useCallback)((e=>{if(e.preventDefault(),!n.current)return;const{x:r}=l(e),{x:a}=n.current;r-a>10&&o&&"on"!==t.current?(o(e,!0),t.current="on",n.current=l(e)):a-r>10&&o&&"off"!==t.current&&(o(e,!1),t.current="off",n.current=l(e)),null==c||c(e)}),[c,o]),k=(0,r.useCallback)((e=>{var t,r;e.preventDefault(),null==(r=(t=e.target).releasePointerCapture)||r.call(t,e.pointerId),n.current=void 0,"pointerup"===e.type?null==u||u(e):null==i||i(e)}),[u,i]);return{swipeHandled:t,gestureHandlers:{onClick:d,onPointerDown:m,onPointerMove:p,onPointerUp:k,onPointerCancel:k}}}},74797:function(e,t,n){n.d(t,{w:function(){return b}});var r=n(92379),l=n(94207),a=n(49309),o=n(36774),i=n(64081),s=n(64483),c=n(42104),u=n(98746),d=Object.defineProperty,m=Object.defineProperties,p=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const b=(0,r.forwardRef)(((e,t)=>{var n,d=e,{caption:b,columns:E,emptyTableText:h,rows:y,verticalAlign:j}=d,w=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&k)for(var r of k(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(l.i,(n=((e,t)=>{for(var n in t||(t={}))f.call(t,n)&&v(e,n,t[n]);if(k)for(var n of k(t))g.call(t,n)&&v(e,n,t[n]);return e})({fullWidth:!0},w),m(n,p({ref:t}))),b&&r.createElement(o.R,{srOnly:!0},b),r.createElement(s.s,null,r.createElement(u.S,null,E.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===y.length&&h&&r.createElement(u.S,null,r.createElement(i.p,{colSpan:E.length},h)),y.map(((e,t)=>r.createElement(u.S,{key:t},e.map(((e,t)=>r.createElement(i.p,{key:t,"data-th":E[t],verticalAlign:j},e))))))))}));b.displayName="DataTable"}}]);