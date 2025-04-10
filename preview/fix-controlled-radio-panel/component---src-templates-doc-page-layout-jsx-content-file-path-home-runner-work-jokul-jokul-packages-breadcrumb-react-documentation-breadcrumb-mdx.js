"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3777],{66939:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return f},Head:function(){return h},default:function(){return g}});var r=n(47160),a=n(70079),l=n(26372),o=n.n(l);const s=e=>{let{className:t,children:n,density:r,...l}=e;const s=a.Children.count(n);return a.createElement("nav",Object.assign({"aria-label":"Sti",className:o()("jkl-breadcrumb",t),"data-layout-density":r},l),a.createElement("ol",{className:"jkl-breadcrumb__list"},a.Children.map(n,((e,t)=>{const n=t+1===s;return a.createElement(a.Fragment,null,a.isValidElement(e)?a.cloneElement(e,{isLastElement:n}):e,!n&&a.createElement("span",{className:"jkl-breadcrumb__item-separator","aria-hidden":"true"},"›"))}))))},i=e=>{let{className:t,children:n,isLastElement:r,...l}=e;return a.createElement("li",Object.assign({className:o()("jkl-breadcrumb__item",t)},l),a.Children.map(n,(e=>a.isValidElement(e)?a.cloneElement(e,{"aria-current":r?"page":void 0,className:"jkl-link"}):e)))};var c=()=>a.createElement(s,null,a.createElement(i,null,a.createElement("a",{href:"/"},"Hjem")),a.createElement(i,null,a.createElement("a",{href:"/komponenter/accordion"},"Komponenter")),a.createElement(i,null,a.createElement("a",{href:"/komponenter/breadcrumb"},"Breadcrumb")));const m=()=>'\n<Breadcrumb>\n    <BreadcrumbItem>\n        <a href="/">Hjem</a>\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n        <a href="/komponenter/accordion">Komponenter</a>\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n        <a href="/komponenter/breadcrumb">Breadcrumb</a>\n    </BreadcrumbItem>\n</Breadcrumb>\n';function u(e){const t=Object.assign({p:"p",h2:"h2",a:"a",strong:"strong",em:"em",code:"code",h3:"h3",pre:"pre"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:l}=t;return l||p("ComponentExample",!0),n||p("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"En brødsmulesti brukes der man har en trestruktur i navigasjonen, og det er behov for å synliggjøre hvor i denne\nstrukturen brukeren befinner seg.")),"\n",a.createElement(l,{component:c,codeExample:m}),"\n",a.createElement(t.p,null,"Brødsmulestien vises typisk høyt oppe på siden, gjerne rett under headeren. Dersom en brødsmulesti brukes i applikasjonen skal den vises på alle sider som ikke er forsiden. Alle elementene i brødsmulestien skal være klikkbare lenker, men den nåværende siden skal se ut som vanlig tekst."),"\n",a.createElement(t.h2,null,"Tilgjengelighet"),"\n",a.createElement(t.p,null,"En brødsmulesti har potensielt mange interaktive elementer som en tastaturbruker lett må komme seg forbi. Det er derfor viktig at ",a.createElement(t.a,{href:"/preview/fix-controlled-radio-panel/universell-utforming/guide#uu/hoppe-over-blokker"},"skip-link")," til hovedinnholdet også hopper over brødsmulestien."),"\n",a.createElement(t.h2,null,"Når bruker vi Breadcrumb?"),"\n",a.createElement(t.p,null,"Vi bruker en brødsmulesti når det er en trestruktur i navigasjonen – tenk mapper."),"\n",a.createElement(t.p,null,"Det blir typisk et behov først når det er tre eller flere nivåer. Likevel, dersom en brødsmulesti brukes i applikasjonen overhode skal den vises på alle sider som ikke er forsiden – altså selv på nivå to."),"\n",a.createElement(t.p,null,"Vi bruker ",a.createElement(t.strong,null,"ikke")," brødsmulestier når det er en lineær navigasjon, for eksempel for de ulike stegene i en kjøpsflyt eller et oppsigelsesskjema."),"\n",a.createElement(t.p,null,"Om det bare er to nivåer i strukturen bruker vi typisk en ",a.createElement(t.em,null,"back"),"-variant av ",a.createElement(t.a,{href:"/preview/fix-controlled-radio-panel/komponenter/link"},"NavLink"),"."),"\n",a.createElement(t.h2,null,"Eksempel med router"),"\n",a.createElement(t.p,null,"Jøkul-komponentene er uavhengige av ",a.createElement(t.em,null,"router"),". Et tips er å lage en komponent i ditt eget prosjekt som bruker Jøkul-komponenter sammen med eventuelle ",a.createElement(t.code,null,"Link"),"-komponenter og ",a.createElement(t.em,null,"smartness")," som tilbys av ",a.createElement(t.em,null,"router"),"-biblioteket du bruker."),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Del ditt eksempel!")," Om du har et eksempel for en annen ",a.createElement(t.em,null,"router"),", eller for annen major-versjon, så er det en stor hjelp for kollegene dine om du deler. Åpne en pull request og vis fram hvordan du har gjort det."),"\n",a.createElement(t.h3,null,"React Router DOM"),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Versjon 6")),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-tsx"},'import React, { useMemo } from "react";\nimport type { RouteObject } from "react-router-dom";\nimport { Link, matchRoutes, useMatch, useLocation } from "react-router-dom";\nimport { Breadcrumb, BreadcrumbItem } from "@fremtind/jkl-breadcrumb-react";\n\nexport interface MyBreadcrumbProps {\n    routes: RouteObject[];\n}\n\nexport const MyBreadcrumb = ({ routes }: MyBreadcrumbProps) => {\n    const location = useLocation();\n\n    const matches = useMemo(() => {\n        const routeMatches = matchRoutes(routes, location);\n        return [{ pathname: "/", route: { element: "Hjem" } }, ...routeMatches];\n    }, [location]);\n\n    const isHjem = useMatch("/");\n\n    if (isHjem) {\n        return null;\n    }\n\n    return (\n        <Breadcrumb>\n            {matches.map((match, i) => {\n                return (\n                    <BreadcrumbItem key={match.pathname}>\n                        <Link to={match.pathname}>{match.route.element}</Link>\n                    </BreadcrumbItem>\n                );\n            })}\n        </Breadcrumb>\n    );\n};\n')))}var d=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(u,e)):u(e)};function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var k=n(72285),b=n(22756),E=n(95573),v=n(1634);const h=e=>{let{pageContext:t}=e;return a.createElement(b.p,{title:t.title})},f=e=>{let{location:t,data:n,pageContext:r,children:l}=e;const{frontmatter:o}=n.page,{types:s}=r;return a.createElement(v.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(E.M1,Object.assign({},o,{versions:r.versions})),a.createElement(E.w5,o),l,s&&a.createElement(k.l,{types:s}))};function g(e){return a.createElement(f,e,a.createElement(d,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var r=n(58820),a=n(63571),l=n(87505),o=n(70079),s=n(54656);const i=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,o=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],l=n.props?Object.values(n.props).filter(c):[],i=(e=>{var t,n,r,a,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(l=a.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},i&&o.createElement(s.dn,{className:"jkl-portal-code-block"},i),r.length>0&&o.createElement(p,{props:r}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return i}});var r=n(26372),a=n.n(r),l=n(49597),o=n(70079),s=n(34044);const i=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(s.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||i?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(35250),a=n(26372),l=n.n(a);const o=e=>{let{className:t,density:n,id:a,...o}=e;return(0,r.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,id:a,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return c}});var r=n(35250),a=n(68998),l=n(1386),o=n(26372),s=n.n(o),i=n(70079);const c=e=>{let{children:t,title:n,className:o,startExpanded:c=!1,onClick:m,id:u,...d}=e;const[p,k]=(0,i.useState)(c),[b]=(0,i.useState)((()=>c)),{detailsRef:E,summaryRef:v,contentRef:h,onSummaryClick:f}=(0,l.E)({onOpenChange:(e,t)=>{k(e),m&&m(t,e)},isExpanded:b});return(0,r.jsxs)("details",{"data-testid":"jkl-accordion-item",...d,className:s()("jkl-accordion-item",o),ref:E,id:u,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:f,ref:v,children:[n,(0,r.jsx)(a.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return u}});var r=n(70079),a=n(41699),l=n(65174),o=n(6914),s=n(82546),i=n(39126),c=n(66169),m=n(94509);const u=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:d,rows:p,verticalAlign:k,...b}=e;return r.createElement(a.i,{fullWidth:!0,...b,ref:t},n&&r.createElement(o.R,{srOnly:!0},n),r.createElement(i.s,null,r.createElement(m.S,null,u.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.R,null,0===p.length&&d&&r.createElement(m.S,null,r.createElement(s.p,{colSpan:u.length},d)),p.map(((e,t)=>r.createElement(m.S,{key:t},e.map(((e,t)=>r.createElement(s.p,{key:t,"data-th":u[t],verticalAlign:k},e))))))))}));u.displayName="DataTable"}}]);