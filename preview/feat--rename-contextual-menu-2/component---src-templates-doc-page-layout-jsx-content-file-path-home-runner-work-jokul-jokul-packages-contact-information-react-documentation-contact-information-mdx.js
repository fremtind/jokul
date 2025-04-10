"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[698],{73785:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return O},Head:function(){return A},default:function(){return I}});var a=t(47160),l=t(70079),r=t(94989),o=t(41992),i=t(15089),c=t(10793);const s={mobil:/^([8]\d{2})(\d{2})(\d{3})$/,fast:/^([2-9]\d)(\d{2})(\d{2})(\d{2})$/,mobilPartial:/^([8]\d{2})(\d{1,2})?(\d{1,3})?$/,fastPartial:/^([2-9]\d)(\d{1,2})?(\d{1,2})?(\d{1,2})?$/};var d=t(26372),m=t.n(d);const u=e=>{let{headingComponent:n,className:t,density:a,children:r,...o}=e;return l.createElement("div",Object.assign({className:m()("jkl-contact-info",t),"data-density":a},o),n,r)},p=e=>{let{heading:n="Trenger du hjelp med forsikring?",children:t}=e;return l.createElement("div",{className:"jkl-contact-info__heading"},l.createElement("p",{className:"jkl-heading-2"},n),t&&t)},f=e=>{let{children:n}=e;return l.createElement("div",{className:"jkl-contact-info__content"},n)},v=e=>{let{children:n}=e;return l.createElement("div",{className:"jkl-contact-info__column"},n)},k=e=>{let{phone:n,openingHours:t}=e;return l.createElement(v,null,l.createElement("p",null,"Telefon ",l.createElement(r.r,{href:"tel:"+n.replace(/\s/g,"")},function(e,n){const t=e.replace(/\W/g,""),a=(null==n?void 0:n.partial)?s.mobilPartial:s.mobil,l=(null==n?void 0:n.partial)?s.fastPartial:s.fast,r=t.match(a)||t.match(l);return r?[(null==n?void 0:n.countryCode)?"+".concat(n.countryCode):void 0].concat((0,i.Z)(r.slice(1))).filter(Boolean).join(c.qD):e}(n))),t&&l.createElement("p",null,t))},E=e=>{let{chat:n,email:t}=e;return l.createElement(v,null,l.createElement("p",null,l.createElement(r.r,{onClick:n},"Chat")," med rådgiver"),t&&l.createElement(r.r,{href:"mailto:"+t},t))},g=e=>{let{qAndA:n}=e;return l.createElement(v,null,l.createElement(o.O,{onClick:n},"Spørsmål og svar"))},h={boolProps:[{prop:"Mobil",defaultValue:!0},{prop:"Med navn",defaultValue:!0},{prop:"Med telefon",defaultValue:!0},{prop:"Med chat og mail",defaultValue:!0},{prop:"Med QnA",defaultValue:!0}]};var b=e=>{let{boolValues:n}=e;const t=null==n?void 0:n.Mobil,a=null==n?void 0:n["Med navn"],r=null==n?void 0:n["Med telefon"],o=null==n?void 0:n["Med chat og mail"],i=null==n?void 0:n["Med QnA"];return l.createElement("div",Object.assign({},t?{style:{width:"21rem"}}:{style:{minWidth:"64rem"}},{"data-simulate-mobile":t?"true":void 0}),l.createElement(u,{headingComponent:l.createElement(p,null,a&&l.createElement("p",{className:"jkl-body"},"Ta kontakt med din rådgiver Ola Nordmann"))},l.createElement(f,null,r&&l.createElement(k,{phone:"900 90 900",openingHours:"07:00 - 24:00"}),o&&l.createElement(E,{chat:()=>alert("open chat"),email:"fremtind@fremtind.no"}),i&&l.createElement(g,{qAndA:()=>alert("open link")}))))};const j=e=>{let{boolValues:n}=e;const t=null==n?void 0:n["Med navn"],a=null==n?void 0:n["Med telefon"],l=null==n?void 0:n["Med chat og mail"],r=null==n?void 0:n["Med QnA"];return"<ContactInformation\n  headingComponent={\n    "+(t?'<ContactInformationHeading>\n        <p className="jkl-body">Ta kontakt med din rådgiver Ola Nordmann</p>\n    </ContactInformationHeading>':"<ContactInformationHeading />")+"\n  }\n>\n"+(a||l||r?"  <Content>\n    "+(a?'<PhoneColumn phone={"900 90 900"} openingHours={"07:00 - 24:00"} />':"")+"\n    "+(l?'<ChatAndMailColumn chat={() => alert("open chat")} email={"fremtind@fremtind.no"} />':"")+"\n    "+(r?'<QAndAColumn qAndA={() => alert("open link")} />':"")+"\n  </Content>":"")+"\n</ContactInformation>\n"};function y(e){const n=Object.assign({p:"p",a:"a",h2:"h2"},(0,a.ah)(),e.components),{Ingress:t,ComponentExample:r}=n;return r||_("ComponentExample",!0),t||_("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(t,null,l.createElement(n.p,null,"Kontaktinformasjon brukes i løsninger der vi trenger å oppgi kontaktinformasjon til oss selv eller til en\ndistributør.")),"\n",l.createElement(r,{scrollable:!0,component:b,codeExample:j,knobs:h}),"\n",l.createElement(n.p,null,"Komponenten brukes gjerne i sammenheng med ",l.createElement(n.a,{href:"/preview/feat--rename-contextual-menu-2/komponenter/footer"},"Footer"),"."),"\n",l.createElement(n.p,null,"Kontaktinformasjon-komponenten er ment som et utgangspunkt og har et par komponenter som du kan bruke for å få den mest vanlige standarden. Om du ønsker å legge inn en annen type informasjon så kan du bruke InfoColumn for å legge inn det du selv vil."),"\n",l.createElement(n.h2,null,"Når bruker vi ContactInformation?"),"\n",l.createElement(n.p,null,"ContactInformation brukes når vi skal vise frem kontaktinformasjon til brukerene av løsningene vi lager."))}var N=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(y,e)):y(e)};function _(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var C=t(72285),w=t(22756),M=t(95573),x=t(1634);const A=e=>{let{pageContext:n}=e;return l.createElement(w.p,{title:n.title})},O=e=>{let{location:n,data:t,pageContext:a,children:r}=e;const{frontmatter:o}=t.page,{types:i}=a;return l.createElement(x.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(M.M1,Object.assign({},o,{versions:a.versions})),l.createElement(M.w5,o),r,i&&l.createElement(C.l,{types:i}))};function I(e){return l.createElement(O,e,l.createElement(N,e))}},72285:function(e,n,t){t.d(n,{l:function(){return f}});var a=t(58820),l=t(63571),r=t(87505),o=t(70079),i=t(54656);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},d=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},m=(e,n)=>{const{scrollLeft:t,scrollWidth:a}=e,{clientWidth:l}=n,r=t>0,o=a-t>l;n.classList.toggle("left-shadow",r),n.classList.toggle("right-shadow",o)},u=e=>{const n=e.target,t=n.parentElement;m(n,t)},p=e=>{let{props:n}=e;const t=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&m(n,e)}}))})),a=t.current.parentElement.parentElement;n.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=n,a.map((e=>{var n,t;return[e.name?c(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?c(e.type.name):""]})))})));var a},f=e=>{let{types:n}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const a=t.props?Object.values(t.props).filter(d):[],r=t.props?Object.values(t.props).filter(s):[],c=(e=>{var n,t,a,l,r,o;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(r=l.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return o.createElement(l.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},c&&o.createElement(i.dn,{className:"jkl-portal-code-block"},c),a.length>0&&o.createElement(p,{props:a}),r.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:r})))}))))}},1634:function(e,n,t){t.d(n,{M:function(){return c}});var a=t(26372),l=t.n(a),r=t(49597),o=t(70079),i=t(34044);const c=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:a}=(0,o.useContext)(i.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(r.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||c?0:.35},className:l()("jkl-portal__main",n),id:"innhold"},t)}},58820:function(e,n,t){t.d(n,{U:function(){return o}});var a=t(35250),l=t(26372),r=t.n(l);const o=e=>{let{className:n,density:t,id:l,...o}=e;return(0,a.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:r()("jkl-accordion",n),"data-density":t,id:l,...o})}},63571:function(e,n,t){t.d(n,{Q:function(){return s}});var a=t(35250),l=t(68998),r=t(1386),o=t(26372),i=t.n(o),c=t(70079);const s=e=>{let{children:n,title:t,className:o,startExpanded:s=!1,onClick:d,id:m,...u}=e;const[p,f]=(0,c.useState)(s),[v]=(0,c.useState)((()=>s)),{detailsRef:k,summaryRef:E,contentRef:g,onSummaryClick:h}=(0,r.E)({onOpenChange:(e,n)=>{f(e),d&&d(n,e)},isExpanded:v});return(0,a.jsxs)("details",{"data-testid":"jkl-accordion-item",...u,className:i()("jkl-accordion-item",o),ref:k,id:m,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:E,children:[t,(0,a.jsx)(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:g,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]})}},10793:function(e,n,t){t.d(n,{qD:function(){return a},vk:function(){return l}});const a=" ",l=a},41992:function(e,n,t){t.d(n,{O:function(){return o}});var a=t(26372),l=t.n(a),r=t(70079);const o=r.forwardRef((function(e,n){const{active:t=!1,back:a=!1,className:o,children:i,as:c="a",...s}=e,d=c;return r.createElement(d,{ref:n,className:l()("jkl-nav-link",{"jkl-nav-link--active":t,"jkl-nav-link--back":a},o),...s},i)}))},87505:function(e,n,t){t.d(n,{w:function(){return m}});var a=t(70079),l=t(41699),r=t(65174),o=t(6914),i=t(82546),c=t(39126),s=t(66169),d=t(94509);const m=(0,a.forwardRef)(((e,n)=>{let{caption:t,columns:m,emptyTableText:u,rows:p,verticalAlign:f,...v}=e;return a.createElement(l.i,{fullWidth:!0,...v,ref:n},t&&a.createElement(o.R,{srOnly:!0},t),a.createElement(c.s,null,a.createElement(d.S,null,m.map(((e,n)=>a.createElement(s.x,{key:n,density:"compact",bold:!0},e))))),a.createElement(r.R,null,0===p.length&&u&&a.createElement(d.S,null,a.createElement(i.p,{colSpan:m.length},u)),p.map(((e,n)=>a.createElement(d.S,{key:n},e.map(((e,n)=>a.createElement(i.p,{key:n,"data-th":m[n],verticalAlign:f},e))))))))}));m.displayName="DataTable"}}]);