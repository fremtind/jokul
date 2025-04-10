"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9233],{65703:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return d},Head:function(){return p},default:function(){return k}});var l=n(64717),r=n(92379);function a(e){const t=Object.assign({p:"p",ul:"ul",li:"li",h2:"h2",a:"a",h3:"h3",code:"code"},(0,l.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,"Ikke så lenge siden sist, men det har rukket å skje ting i Jøkul."),"\n",r.createElement(t.p,null,"Her er februar kort oppsummert:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Footer-komponenten er delt i to, og fornyet."),"\n",r.createElement(t.li,null,"Vi jobber med noen løse tråder etter Jøkuluka, blant annet:","\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"DatePicker som slår sammen dagens forenklede og utvidede varianter til én variant."),"\n",r.createElement(t.li,null,"Combobox for å kunne velge flere elementer fra en liste."),"\n",r.createElement(t.li,null,"Kontekstuell meny."),"\n"),"\n"),"\n"),"\n",r.createElement(t.h2,null,"Oppdatert footer"),"\n",r.createElement(t.p,null,"Under Jøkuluka jobbet en gruppe med designere og utviklere på en ny versjon av footerkomponenten i Jøkul. Blant problemene de ønsket å løse var de forskjellige behovene løsningene våre har rundt kontaktinformasjon."),"\n",r.createElement(t.p,null,r.createElement("em",{lang:"en"},"One size does not fit all"),", så komponenten ble delt opp i flere deler:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/4503-button-group/komponenter/contactinformation"},"ContactInformation")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/4503-button-group/komponenter/footer"},"Footer")),"\n"),"\n",r.createElement(t.p,null,"De to komponentene har forskjellige props og hjelpekomponenter som gir høyere fleksibilitet enn tidligere."),"\n",r.createElement("figure",null,r.createElement("picture",{className:"jkl-portal-image"},r.createElement("source",{media:"(prefers-color-scheme: dark)",srcset:"/assets/blog/updates/februar-2023/footer-kontaktinfo-eks-dark.png"}),r.createElement("img",{className:"jkl-portal-image__img",alt:"",loading:"lazy",decoding:"async",src:"/assets/blog/updates/februar-2023/footer-kontaktinfo-eks.png"})),r.createElement("figcaption",null,"Et eksempel på hvordan det kan se ut med de nye komponentene.")),"\n",r.createElement(t.p,null,"Prøv gjerne de nye komponentene og kom med tilbakemelding på Teams."),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3384"},"#3384")),"\n"),"\n",r.createElement(t.h2,null,"Diverse bugfikser og forbedringer"),"\n",r.createElement(t.h3,null,"Figma"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Fikset hover-state i Card (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3401"},"#3401"),")"),"\n",r.createElement(t.li,null,"La til padding 0 i TaskCard (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3283"},"#3283"),")"),"\n",r.createElement(t.li,null,"Gjorde så Accordion tar inn en slot component (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3366"},"#3366"),")"),"\n",r.createElement(t.li,null,"De fleste komponenter og mønstre bruker ",r.createElement(t.a,{href:"/preview/4503-button-group/blog/updates/januar-2023/"},"de nye ikonene")),"\n",r.createElement(t.li,null,"Figma har en ny utilities-kategori for funksjonelle komponenter som ofte brukes i andre komponenter (f. eks. animert pil)"),"\n",r.createElement(t.li,null,"Group Title har fått Tooltip og innebygget spacing"),"\n"),"\n",r.createElement(t.h3,null,"GitHub"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Gjenopprett ekspandering av tekstområde (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3395"},"#3395"),")"),"\n",r.createElement(t.li,null,"Finpuss på dokumentasjonen til TextInput (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3360"},"#3360"),")"),"\n",r.createElement(t.li,null,"Fiks et synkroniseringsproblem i Select som forvirret ",r.createElement(t.code,null,"react-hook-form")," sin ",r.createElement(t.code,null,"required")," (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3402"},"#3402"),")"),"\n",r.createElement(t.li,null,"Oppdater IconButton i Table-pakka for å fikse pagineringsikoner (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3417"},"#3417"),")"),"\n",r.createElement(t.li,null,"Dokumentér at InputGroup sin CSS trengs for komponenter der dette manglet (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3419"},"#3419"),")"),"\n",r.createElement(t.li,null,"Sync tag-spacing med Figma (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3404"},"#3404"),")"),"\n",r.createElement(t.li,null,"Fiks to regresjoner i Select der onChange ble kalt med uventet verdi og kunne starte en render-loop (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3424"},"#3424"),")"),"\n"),"\n",r.createElement(t.h2,null,"Takk"),"\n",r.createElement(t.p,null,"Takk til alle som har vært med å bygge videre på Jøkul, både på GitHub og i Figma!"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"BjorneOma"),"\n",r.createElement(t.li,null,"Chrihenn"),"\n",r.createElement(t.li,null,"joms"),"\n",r.createElement(t.li,null,"kennidenni"),"\n",r.createElement(t.li,null,"maciejost"),"\n"),"\n",r.createElement(t.p,null,"En stor takk også til alle som er med på designsystemforum!"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)};var i=n(75482),c=n(96036),s=n(59001),m=n(65458),u=n(79379);const p=e=>{let{pageContext:t}=e;return r.createElement(c.p,{title:t.title})},d=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:o}=n.page,{types:c}=l;return r.createElement(u.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(m.M1,Object.assign({},o,{versions:l.versions})),t.pathname.includes("komponenter")&&r.createElement(s.c,{variant:"komponent",component:o.title}),r.createElement(m.w5,o),a,c&&r.createElement(i.l,{types:c}))};function k(e){return r.createElement(d,e,r.createElement(o,e))}},75482:function(e,t,n){n.d(t,{l:function(){return k}});var l=n(96845),r=n(41162),a=n(74797),o=n(92379),i=n(25329);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,o=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},p=e=>{const t=e.target,n=t.parentElement;u(t,n)},d=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var l},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(s):[],c=(e=>{var t,n,l,r,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&o.createElement(i.dn,{className:"jkl-portal-code-block"},c),l.length>0&&o.createElement(d,{props:l}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(d,{props:a})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return i}});var l=n(48467),r=n(58990),a=n(92379),o=n(25329);const i=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(r.U,null),a.createElement(o.nv,null,c[t].text)),a.createElement(l.r,{href:c[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},c={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,t,n){n.d(t,{M:function(){return c}});var l=n(80324),r=n.n(l),a=n(24157),o=n(92379),i=n(69215);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,o.useContext)(i.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||c?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},96845:function(e,t,n){n.d(t,{U:function(){return c}});var l=n(99767),r=n(651),a=n(80324),o=n.n(a);const i=["className","density","id"],c=e=>{let{className:t,density:n,id:a}=e,c=(0,l.Z)(e,i);return(0,r.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:a},c))}},41162:function(e,t,n){n.d(t,{Q:function(){return u}});var l=n(99767),r=n(651),a=n(42054),o=n(95020),i=n(80324),c=n.n(i),s=n(92379);const m=["children","title","className","startExpanded","onClick","id"],u=e=>{let{children:t,title:n,className:i,startExpanded:u=!1,onClick:p,id:d}=e,k=(0,l.Z)(e,m);const[f,g]=(0,s.useState)(u),[E]=(0,s.useState)((()=>u)),{detailsRef:b,summaryRef:h,contentRef:v,onSummaryClick:j}=(0,o.E)({onOpenChange:(e,t)=>{g(e),p&&p(t,e)},isExpanded:E});return(0,r.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:c()("jkl-accordion-item",i),ref:b,id:d,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:h,children:[n,(0,r.jsx)(a.K,{className:"jkl-accordion-item__arrow",pointingDown:!f,bold:f})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:v,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},58990:function(e,t,n){n.d(t,{U:function(){return m}});var l=n(92379),r=n(55650),a=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>l.createElement(r.J,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&s(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},74797:function(e,t,n){n.d(t,{w:function(){return b}});var l=n(92379),r=n(94207),a=n(49309),o=n(36774),i=n(64081),c=n(64483),s=n(42104),m=n(98746),u=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,E=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const b=(0,l.forwardRef)(((e,t)=>{var n,u=e,{caption:b,columns:h,emptyTableText:v,rows:j,verticalAlign:y}=u,w=((e,t)=>{var n={};for(var l in e)f.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&k)for(var l of k(e))t.indexOf(l)<0&&g.call(e,l)&&(n[l]=e[l]);return n})(u,["caption","columns","emptyTableText","rows","verticalAlign"]);return l.createElement(r.i,(n=((e,t)=>{for(var n in t||(t={}))f.call(t,n)&&E(e,n,t[n]);if(k)for(var n of k(t))g.call(t,n)&&E(e,n,t[n]);return e})({fullWidth:!0},w),p(n,d({ref:t}))),b&&l.createElement(o.R,{srOnly:!0},b),l.createElement(c.s,null,l.createElement(m.S,null,h.map(((e,t)=>l.createElement(s.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===j.length&&v&&l.createElement(m.S,null,l.createElement(i.p,{colSpan:h.length},v)),j.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":h[t],verticalAlign:y},e))))))))}));b.displayName="DataTable"}}]);