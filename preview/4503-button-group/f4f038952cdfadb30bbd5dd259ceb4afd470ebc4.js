"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9662],{12077:function(e,t,n){n.d(t,{Kk:function(){return y},gj:function(){return b},ZP:function(){return v}});var l=n(92379),a=n(99767),r=n(6690),i=n(98960),s=n(28443),o=n(91455),c=n(57535),d=n(34734),u=n(71488);const m=["caption","columns","emptyTableText","rows","verticalAlign"],p=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:p,emptyTableText:b,rows:f,verticalAlign:k}=e,v=(0,a.Z)(e,m);return l.createElement(r.i,Object.assign({fullWidth:!0},v,{ref:t}),n&&l.createElement(s.R,{srOnly:!0},n),l.createElement(c.s,null,l.createElement(u.S,null,p.map(((e,t)=>l.createElement(d.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(i.R,null,0===f.length&&b&&l.createElement(u.S,null,l.createElement(o.p,{colSpan:p.length},b)),f.map(((e,t)=>l.createElement(u.S,{key:t},e.map(((e,t)=>l.createElement(o.p,{key:t,"data-th":p[t],verticalAlign:k},e))))))))}));p.displayName="DataTable";const b={boolProps:[],choiceProps:[{name:"Mobilvisning",values:["Tabell","Liste"],defaultValue:0}]},f=["Dato","Kundenavn","Milepæl","Følger saken"],k=[["24.02.2020","Ola Nordmann","Opprettet","Siri Saksbehandler"],["13.04.2019","Kari Nordkvinne","Opprettet","Siri Saksbehandler"],["31.07.2017","Kari Nordkvinne","Opprettet","Per Persen"]];var v=e=>{let{choiceValues:t}=e;const n="Liste"===(null==t?void 0:t.Mobilvisning)?{"data-collapse":"true",collapseToList:!0}:{};return l.createElement(p,Object.assign({caption:"Saksliste",columns:f,rows:k},n))};const y=e=>{let{choiceValues:t}=e;return'\n<DataTable\n    caption="Saksliste"\n    collapseToList={'+("Liste"===(null==t?void 0:t.Mobilvisning))+"}\n    columns={columns}\n    rows={rows}\n/>\n"}},6690:function(e,t,n){n.d(t,{i:function(){return c}});var l=n(99767),a=n(80324),r=n.n(a),i=n(92379),s=n(93878);const o=["className","density","collapseToList","fullWidth","tabIndex"],c=(0,i.forwardRef)(((e,t)=>{let{className:n,density:a,collapseToList:c=!1,fullWidth:d=!1,tabIndex:u}=e,m=(0,l.Z)(e,o);const{0:p,1:b}=(0,i.useState)(!1);return i.createElement(s.W,{state:{density:a,collapseToList:c,setHasStickyHead:b}},i.createElement("table",Object.assign({className:r()("jkl-table",n,{"jkl-table--full-width":d,"jkl-table--collapse-to-list":c})},m,{tabIndex:p?0:u,ref:t})))}));c.displayName="Table"},98960:function(e,t,n){n.d(t,{R:function(){return r}});var l=n(92379),a=n(1740);const r=(0,l.forwardRef)(((e,t)=>l.createElement(a.L,{state:{isTableHead:!1,isTableBody:!0,isTableFooter:!1}},l.createElement("tbody",Object.assign({},e,{ref:t})))));r.displayName="TableBody"},28443:function(e,t,n){n.d(t,{R:function(){return o}});var l=n(99767),a=n(80324),r=n.n(a),i=n(92379);const s=["srOnly"],o=(0,i.forwardRef)(((e,t)=>{let{srOnly:n=!0}=e,a=(0,l.Z)(e,s);return i.createElement("caption",Object.assign({className:r()("jkl-table-caption",{"jkl-table-caption--sr-only":n})},a,{ref:t}))}));o.displayName="TableCaption"},91455:function(e,t,n){n.d(t,{p:function(){return c}});var l=n(99767),a=n(80324),r=n.n(a),i=n(92379),s=n(93878);const o=["align","verticalAlign","className","density"],c=(0,i.forwardRef)(((e,t)=>{let{align:n="left",verticalAlign:a="top",className:c,density:d}=e,u=(0,l.Z)(e,o);const{density:m}=(0,s.S)();return i.createElement("td",Object.assign({className:r()("jkl-table-cell",c,{"jkl-table-cell--align-right":"right"===n,"jkl-table-cell--align-center":"center"===n,"jkl-table-cell--vertical-align-center":"center"===a})},u,{"data-density":d||m,ref:t}))}));c.displayName="TableCell"},57535:function(e,t,n){n.d(t,{s:function(){return d}});var l=n(99767),a=n(80324),r=n.n(a),i=n(92379),s=n(93878),o=n(1740);const c=["className","srOnly","sticky"],d=(0,i.forwardRef)(((e,t)=>{let{className:n,srOnly:a,sticky:d}=e,u=(0,l.Z)(e,c);const{setHasStickyHead:m}=(0,s.S)();return m(d),i.createElement(o.L,{state:{isTableHead:!0,isTableBody:!1,isTableFooter:!1}},i.createElement("thead",Object.assign({className:r()("jkl-table-head",n,{"jkl-table-head--sr-only":a,"jkl-table-head--sticky":d})},u,{ref:t})))}));d.displayName="TableHead"},34734:function(e,t,n){n.d(t,{x:function(){return d}});var l=n(99767),a=n(42054),r=n(80324),i=n.n(r),s=n(92379),o=n(93878);const c=["bold","density","sortable","className","scope","srOnly","align","children","onClick"],d=(0,s.forwardRef)(((e,t)=>{const{bold:n=!0,density:r,sortable:d,className:u,scope:m="col",srOnly:p,align:b="left",children:f,onClick:k}=e,v=(0,l.Z)(e,c),{density:y}=(0,o.S)();return s.createElement("th",Object.assign({className:i()("jkl-table-header",u,{"jkl-table-header--bold":n,"jkl-table-header--align-right":"right"===b,"jkl-table-header--align-center":"center"===b,"jkl-table-header--sr-only":p,"jkl-table-header--sortable":void 0!==d}),scope:m,onClick:e=>{null==k||k(e),null==d||d.onClick()}},v,{"data-density":r||y,ref:t}),f,d&&s.createElement("div",{className:i()("jkl-table-header__arrows",{"jkl-table-header__arrows--active":Boolean(d.direction)})},d.direction&&s.createElement(a.K,{pointingDown:"desc"===d.direction,bold:!0})))}));d.displayName="TableHeader"},71488:function(e,t,n){n.d(t,{S:function(){return d}});var l=n(99767),a=n(80324),r=n.n(a),i=n(92379),s=n(93878),o=n(1740);const c=["className","clickable","children"],d=(0,i.forwardRef)(((e,t)=>{let{className:n,clickable:a,children:d}=e,u=(0,l.Z)(e,c);const{density:m}=(0,s.S)(),{isTableBody:p}=(0,o.o)(),{0:b,1:f}=(0,i.useState)((null==a?void 0:a.isClicked)||!1);return(0,i.useEffect)((()=>{f((e=>void 0!==(null==a?void 0:a.isClicked)?a.isClicked:e))}),[null==a?void 0:a.isClicked]),p&&a?i.createElement("tr",Object.assign({onClick:function(e){f(!b),a.onClick(e)},onKeyPress:function(e){" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),f(!b),a.onClick(e))},"data-testid":"jkl-clickable-table-row",className:r()("jkl-table-row","jkl-table-row--clickable",n,{"jkl-table-row--clicked":(null==a?void 0:a.markClickedRows)&&b}),"aria-label":"Klikkbar rad","aria-pressed":null!=a&&a.markClickedRows?b?"true":"false":void 0,tabIndex:0},u,{"data-density":m,ref:t}),d):i.createElement("tr",Object.assign({className:r()("jkl-table-row",n)},u,{ref:t,"data-density":m}),d)}));d.displayName="TableRow"},93878:function(e,t,n){n.d(t,{S:function(){return r},W:function(){return i}});var l=n(92379);const a=(0,l.createContext)({density:void 0,collapseToList:!1,setHasStickyHead:()=>{}}),r=()=>(0,l.useContext)(a),i=e=>{let{state:t,children:n}=e;return l.createElement(a.Provider,{value:t},n)}},1740:function(e,t,n){n.d(t,{L:function(){return i},o:function(){return r}});var l=n(92379);const a=(0,l.createContext)({isTableHead:!1,isTableBody:!1,isTableFooter:!1}),r=()=>(0,l.useContext)(a),i=e=>{let{state:t,children:n}=e;return l.createElement(a.Provider,{value:t},n)}},75482:function(e,t,n){n.d(t,{l:function(){return b}});var l=n(96845),a=n(41162),r=n(74797),i=n(92379),s=n(25329);const o=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:a}=t,r=n>0,i=l-n>a;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",i)},m=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var l},b=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(d):[],r=n.props?Object.values(n.props).filter(c):[],o=(e=>{var t,n,l,a,r,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(r=a.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&i.createElement(s.dn,{className:"jkl-portal-code-block"},o),l.length>0&&i.createElement(p,{props:l}),r.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:r})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return s}});var l=n(48467),a=n(58990),r=n(92379),i=n(25329);const s=e=>{let{variant:t,component:n}=e;return r.createElement("section",{className:"suggestion-block"},r.createElement("div",{className:"suggestion-block__content"},r.createElement(a.U,null),r.createElement(i.nv,null,o[t].text)),r.createElement(l.r,{href:o[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},o={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,t,n){n.d(t,{M:function(){return o}});var l=n(80324),a=n.n(l),r=n(24157),i=n(92379),s=n(69215);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,i.useContext)(s.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(r.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||o?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},96845:function(e,t,n){n.d(t,{U:function(){return o}});var l=n(99767),a=n(651),r=n(80324),i=n.n(r);const s=["className","density","id"],o=e=>{let{className:t,density:n,id:r}=e,o=(0,l.Z)(e,s);return(0,a.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:i()("jkl-accordion",t),"data-density":n,id:r},o))}},41162:function(e,t,n){n.d(t,{Q:function(){return u}});var l=n(99767),a=n(651),r=n(42054),i=n(95020),s=n(80324),o=n.n(s),c=n(92379);const d=["children","title","className","startExpanded","onClick","id"],u=e=>{let{children:t,title:n,className:s,startExpanded:u=!1,onClick:m,id:p}=e,b=(0,l.Z)(e,d);const[f,k]=(0,c.useState)(u),[v]=(0,c.useState)((()=>u)),{detailsRef:y,summaryRef:j,contentRef:g,onSummaryClick:h}=(0,i.E)({onOpenChange:(e,t)=>{k(e),m&&m(t,e)},isExpanded:v});return(0,a.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},b,{className:o()("jkl-accordion-item",s),ref:y,id:p,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:j,children:[n,(0,a.jsx)(r.K,{className:"jkl-accordion-item__arrow",pointingDown:!f,bold:f})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:g,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},58990:function(e,t,n){n.d(t,{U:function(){return d}});var l=n(92379),a=n(55650),r=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const d=e=>l.createElement(a.J,((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))o.call(t,n)&&c(e,n,t[n]);return e})({},e),"");d.displayName="QuestionIcon"},74797:function(e,t,n){n.d(t,{w:function(){return y}});var l=n(92379),a=n(94207),r=n(49309),i=n(36774),s=n(64081),o=n(64483),c=n(42104),d=n(98746),u=Object.defineProperty,m=Object.defineProperties,p=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const y=(0,l.forwardRef)(((e,t)=>{var n,u=e,{caption:y,columns:j,emptyTableText:g,rows:h,verticalAlign:E}=u,N=((e,t)=>{var n={};for(var l in e)f.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&b)for(var l of b(e))t.indexOf(l)<0&&k.call(e,l)&&(n[l]=e[l]);return n})(u,["caption","columns","emptyTableText","rows","verticalAlign"]);return l.createElement(a.i,(n=((e,t)=>{for(var n in t||(t={}))f.call(t,n)&&v(e,n,t[n]);if(b)for(var n of b(t))k.call(t,n)&&v(e,n,t[n]);return e})({fullWidth:!0},N),m(n,p({ref:t}))),y&&l.createElement(i.R,{srOnly:!0},y),l.createElement(o.s,null,l.createElement(d.S,null,j.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(r.R,null,0===h.length&&g&&l.createElement(d.S,null,l.createElement(s.p,{colSpan:j.length},g)),h.map(((e,t)=>l.createElement(d.S,{key:t},e.map(((e,t)=>l.createElement(s.p,{key:t,"data-th":j[t],verticalAlign:E},e))))))))}));y.displayName="DataTable"}}]);