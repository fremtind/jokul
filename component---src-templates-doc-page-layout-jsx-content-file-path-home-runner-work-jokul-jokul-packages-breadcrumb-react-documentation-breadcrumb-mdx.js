"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3777],{26829:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return N},Head:function(){return y},default:function(){return _}});var r=n(64717),a=n(92379),l=n(99767),o=n(80324),s=n.n(o);const i=["className","children","density"],c=e=>{let{className:t,children:n,density:r}=e,o=(0,l.Z)(e,i);const c=a.Children.count(n);return a.createElement("nav",Object.assign({"aria-label":"Sti",className:s()("jkl-breadcrumb",t),"data-layout-density":r},o),a.createElement("ol",{className:"jkl-breadcrumb__list"},a.Children.map(n,((e,t)=>{const n=t+1===c;return a.createElement(a.Fragment,null,a.isValidElement(e)?a.cloneElement(e,{isLastElement:n}):e,!n&&a.createElement("span",{className:"jkl-breadcrumb__item-separator","aria-hidden":"true"},"›"))}))))},m=["className","children","isLastElement"],u=e=>{let{className:t,children:n,isLastElement:r}=e,o=(0,l.Z)(e,m);return a.createElement("li",Object.assign({className:s()("jkl-breadcrumb__item",t)},o),a.Children.map(n,(e=>a.isValidElement(e)?a.cloneElement(e,{"aria-current":r?"page":void 0,className:"jkl-link"}):e)))};var d=()=>a.createElement(c,null,a.createElement(u,null,a.createElement("a",{href:"/"},"Hjem")),a.createElement(u,null,a.createElement("a",{href:"/komponenter/accordion"},"Komponenter")),a.createElement(u,null,a.createElement("a",{href:"/komponenter/breadcrumb"},"Breadcrumb")));const p=()=>'\n<Breadcrumb>\n    <BreadcrumbItem>\n        <a href="/">Hjem</a>\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n        <a href="/komponenter/accordion">Komponenter</a>\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n        <a href="/komponenter/breadcrumb">Breadcrumb</a>\n    </BreadcrumbItem>\n</Breadcrumb>\n';function k(e){const t=Object.assign({p:"p",h2:"h2",a:"a",strong:"strong",em:"em",code:"code",h3:"h3",pre:"pre"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:l}=t;return l||f("ComponentExample",!0),n||f("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"En brødsmulesti brukes der man har en trestruktur i navigasjonen, og det er\nbehov for å synliggjøre hvor i denne strukturen brukeren befinner seg.")),"\n",a.createElement(l,{component:d,codeExample:p}),"\n",a.createElement(t.p,null,"Brødsmulestien vises typisk høyt oppe på siden, gjerne rett under headeren. Dersom en brødsmulesti brukes i applikasjonen skal den vises på alle sider som ikke er forsiden. Alle elementene i brødsmulestien skal være klikkbare lenker, men den nåværende siden skal se ut som vanlig tekst."),"\n",a.createElement(t.h2,null,"Tilgjengelighet"),"\n",a.createElement(t.p,null,"En brødsmulesti har potensielt mange interaktive elementer som en tastaturbruker lett må komme seg forbi. Det er derfor viktig at ",a.createElement(t.a,{href:"/universell-utforming/guide#uu/hoppe-over-blokker"},"skip-link")," til hovedinnholdet også hopper over brødsmulestien."),"\n",a.createElement(t.h2,null,"Når bruker vi Breadcrumb?"),"\n",a.createElement(t.p,null,"Vi bruker en brødsmulesti når det er en trestruktur i navigasjonen – tenk mapper."),"\n",a.createElement(t.p,null,"Det blir typisk et behov først når det er tre eller flere nivåer. Likevel, dersom en brødsmulesti brukes i applikasjonen overhode skal den vises på alle sider som ikke er forsiden – altså selv på nivå to."),"\n",a.createElement(t.p,null,"Vi bruker ",a.createElement(t.strong,null,"ikke")," brødsmulestier når det er en lineær navigasjon, for eksempel for de ulike stegene i en kjøpsflyt eller et oppsigelsesskjema."),"\n",a.createElement(t.p,null,"Om det bare er to nivåer i strukturen bruker vi typisk en ",a.createElement(t.em,null,"back"),"-variant av ",a.createElement(t.a,{href:"/komponenter/link"},"NavLink"),"."),"\n",a.createElement(t.h2,null,"Eksempel med router"),"\n",a.createElement(t.p,null,"Jøkul-komponentene er uavhengige av ",a.createElement(t.em,null,"router"),". Et tips er å lage en komponent i ditt eget prosjekt som bruker Jøkul-komponenter sammen med eventuelle ",a.createElement(t.code,null,"Link"),"-komponenter og ",a.createElement(t.em,null,"smartness")," som tilbys av ",a.createElement(t.em,null,"router"),"-biblioteket du bruker."),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Del ditt eksempel!")," Om du har et eksempel for en annen ",a.createElement(t.em,null,"router"),", eller for annen major-versjon, så er det en stor hjelp for kollegene dine om du deler. Åpne en pull request og vis fram hvordan du har gjort det."),"\n",a.createElement(t.h3,null,"React Router DOM"),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Versjon 6")),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-tsx"},'import React, { useMemo } from "react";\nimport type { RouteObject } from "react-router-dom";\nimport { Link, matchRoutes, useMatch, useLocation } from "react-router-dom";\nimport { Breadcrumb, BreadcrumbItem } from "@fremtind/jkl-breadcrumb-react";\n\nexport interface MyBreadcrumbProps {\n    routes: RouteObject[];\n}\n\nexport const MyBreadcrumb = ({ routes }: MyBreadcrumbProps) => {\n    const location = useLocation();\n\n    const matches = useMemo(() => {\n        const routeMatches = matchRoutes(routes, location);\n        return [{ pathname: "/", route: { element: "Hjem" } }, ...routeMatches];\n    }, [location]);\n\n    const isHjem = useMatch("/");\n\n    if (isHjem) {\n        return null;\n    }\n\n    return (\n        <Breadcrumb>\n            {matches.map((match, i) => {\n                return (\n                    <BreadcrumbItem key={match.pathname}>\n                        <Link to={match.pathname}>{match.route.element}</Link>\n                    </BreadcrumbItem>\n                );\n            })}\n        </Breadcrumb>\n    );\n};\n')))}var b=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(k,e)):k(e)};function f(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var v=n(75482),E=n(96036),h=n(59001),g=n(65458),j=n(79379);const y=e=>{let{pageContext:t}=e;return a.createElement(E.p,{title:t.title})},N=e=>{let{location:t,data:n,pageContext:r,children:l}=e;const{frontmatter:o}=n.page,{types:s}=r;return a.createElement(j.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(g.M1,Object.assign({},o,{versions:r.versions})),t.pathname.includes("komponenter")&&a.createElement(h.c,{variant:"komponent",component:o.title}),a.createElement(g.w5,o),l,s&&a.createElement(v.l,{types:s}))};function _(e){return a.createElement(N,e,a.createElement(b,e))}},75482:function(e,t,n){n.d(t,{l:function(){return k}});var r=n(96845),a=n(41162),l=n(74797),o=n(92379),s=n(25329);const i=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,o=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],l=n.props?Object.values(n.props).filter(c):[],i=(e=>{var t,n,r,a,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(l=a.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},i&&o.createElement(s.dn,{className:"jkl-portal-code-block"},i),r.length>0&&o.createElement(p,{props:r}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:l})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return s}});var r=n(48467),a=n(58990),l=n(92379),o=n(25329);const s=e=>{let{variant:t,component:n}=e;return l.createElement("section",{className:"suggestion-block"},l.createElement("div",{className:"suggestion-block__content"},l.createElement(a.U,null),l.createElement(o.nv,null,i[t].text)),l.createElement(r.r,{href:i[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},i={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,t,n){n.d(t,{M:function(){return i}});var r=n(80324),a=n.n(r),l=n(24157),o=n(92379),s=n(69215);const i=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(s.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||i?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},96845:function(e,t,n){n.d(t,{U:function(){return i}});var r=n(99767),a=n(651),l=n(80324),o=n.n(l);const s=["className","density","id"],i=e=>{let{className:t,density:n,id:l}=e,i=(0,r.Z)(e,s);return(0,a.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:l},i))}},41162:function(e,t,n){n.d(t,{Q:function(){return u}});var r=n(99767),a=n(651),l=n(42054),o=n(95020),s=n(80324),i=n.n(s),c=n(92379);const m=["children","title","className","startExpanded","onClick","id"],u=e=>{let{children:t,title:n,className:s,startExpanded:u=!1,onClick:d,id:p}=e,k=(0,r.Z)(e,m);const[b,f]=(0,c.useState)(u),[v]=(0,c.useState)((()=>u)),{detailsRef:E,summaryRef:h,contentRef:g,onSummaryClick:j}=(0,o.E)({onOpenChange:(e,t)=>{f(e),d&&d(t,e)},isExpanded:v});return(0,a.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:i()("jkl-accordion-item",s),ref:E,id:p,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:h,children:[n,(0,a.jsx)(l.K,{className:"jkl-accordion-item__arrow",pointingDown:!b,bold:b})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:g,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},58990:function(e,t,n){n.d(t,{U:function(){return m}});var r=n(92379),a=n(55650),l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>r.createElement(a.J,((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))i.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},74797:function(e,t,n){n.d(t,{w:function(){return E}});var r=n(92379),a=n(94207),l=n(49309),o=n(36774),s=n(64081),i=n(64483),c=n(42104),m=n(98746),u=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const E=(0,r.forwardRef)(((e,t)=>{var n,u=e,{caption:E,columns:h,emptyTableText:g,rows:j,verticalAlign:y}=u,N=((e,t)=>{var n={};for(var r in e)b.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&k)for(var r of k(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(u,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(a.i,(n=((e,t)=>{for(var n in t||(t={}))b.call(t,n)&&v(e,n,t[n]);if(k)for(var n of k(t))f.call(t,n)&&v(e,n,t[n]);return e})({fullWidth:!0},N),d(n,p({ref:t}))),E&&r.createElement(o.R,{srOnly:!0},E),r.createElement(i.s,null,r.createElement(m.S,null,h.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.R,null,0===j.length&&g&&r.createElement(m.S,null,r.createElement(s.p,{colSpan:h.length},g)),j.map(((e,t)=>r.createElement(m.S,{key:t},e.map(((e,t)=>r.createElement(s.p,{key:t,"data-th":h[t],verticalAlign:y},e))))))))}));E.displayName="DataTable"}}]);