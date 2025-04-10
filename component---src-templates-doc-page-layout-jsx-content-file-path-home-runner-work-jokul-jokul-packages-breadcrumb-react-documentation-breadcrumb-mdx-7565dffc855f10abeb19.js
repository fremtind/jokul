"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3777],{22523:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return f},Head:function(){return h},default:function(){return g}});var r=n(75615),a=n(70079),l=n(26372),o=n.n(l);const c=e=>{let{className:t,children:n,density:r,...l}=e;const c=a.Children.count(n);return a.createElement("nav",Object.assign({"aria-label":"Sti",className:o()("jkl-breadcrumb",t),"data-layout-density":r},l),a.createElement("ol",{className:"jkl-breadcrumb__list"},a.Children.map(n,((e,t)=>{const n=t+1===c;return a.createElement(a.Fragment,null,a.isValidElement(e)?a.cloneElement(e,{isLastElement:n}):e,!n&&a.createElement("span",{className:"jkl-breadcrumb__item-separator","aria-hidden":"true"},"›"))}))))},s=e=>{let{className:t,children:n,isLastElement:r,...l}=e;return a.createElement("li",Object.assign({className:o()("jkl-breadcrumb__item",t)},l),a.Children.map(n,(e=>a.isValidElement(e)?a.cloneElement(e,{"aria-current":r?"page":void 0,className:"jkl-link"}):e)))};var m=()=>a.createElement(c,null,a.createElement(s,null,a.createElement("a",{href:"/"},"Hjem")),a.createElement(s,null,a.createElement("a",{href:"/komponenter/accordion"},"Komponenter")),a.createElement(s,null,a.createElement("a",{href:"/komponenter/breadcrumb"},"Breadcrumb")));const i=()=>'\n<Breadcrumb>\n    <BreadcrumbItem>\n        <a href="/">Hjem</a>\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n        <a href="/komponenter/accordion">Komponenter</a>\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n        <a href="/komponenter/breadcrumb">Breadcrumb</a>\n    </BreadcrumbItem>\n</Breadcrumb>\n';function u(e){const t=Object.assign({p:"p",h2:"h2",a:"a",strong:"strong",em:"em",code:"code",h3:"h3",pre:"pre"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:l}=t;return l||p("ComponentExample",!0),n||p("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"En brødsmulesti brukes der man har en trestruktur i navigasjonen, og det er behov for å synliggjøre hvor i denne\nstrukturen brukeren befinner seg.")),"\n",a.createElement(l,{component:m,codeExample:i}),"\n",a.createElement(t.p,null,"Brødsmulestien vises typisk høyt oppe på siden, gjerne rett under headeren. Dersom en brødsmulesti brukes i applikasjonen skal den vises på alle sider som ikke er forsiden. Alle elementene i brødsmulestien skal være klikkbare lenker, men den nåværende siden skal se ut som vanlig tekst."),"\n",a.createElement(t.h2,null,"Tilgjengelighet"),"\n",a.createElement(t.p,null,"En brødsmulesti har potensielt mange interaktive elementer som en tastaturbruker lett må komme seg forbi. Det er derfor viktig at ",a.createElement(t.a,{href:"/universell-utforming/guide#uu/hoppe-over-blokker"},"skip-link")," til hovedinnholdet også hopper over brødsmulestien."),"\n",a.createElement(t.h2,null,"Når bruker vi Breadcrumb?"),"\n",a.createElement(t.p,null,"Vi bruker en brødsmulesti når det er en trestruktur i navigasjonen – tenk mapper."),"\n",a.createElement(t.p,null,"Det blir typisk et behov først når det er tre eller flere nivåer. Likevel, dersom en brødsmulesti brukes i applikasjonen overhode skal den vises på alle sider som ikke er forsiden – altså selv på nivå to."),"\n",a.createElement(t.p,null,"Vi bruker ",a.createElement(t.strong,null,"ikke")," brødsmulestier når det er en lineær navigasjon, for eksempel for de ulike stegene i en kjøpsflyt eller et oppsigelsesskjema."),"\n",a.createElement(t.p,null,"Om det bare er to nivåer i strukturen bruker vi typisk en ",a.createElement(t.em,null,"back"),"-variant av ",a.createElement(t.a,{href:"/komponenter/link"},"NavLink"),"."),"\n",a.createElement(t.h2,null,"Eksempel med router"),"\n",a.createElement(t.p,null,"Jøkul-komponentene er uavhengige av ",a.createElement(t.em,null,"router"),". Et tips er å lage en komponent i ditt eget prosjekt som bruker Jøkul-komponenter sammen med eventuelle ",a.createElement(t.code,null,"Link"),"-komponenter og ",a.createElement(t.em,null,"smartness")," som tilbys av ",a.createElement(t.em,null,"router"),"-biblioteket du bruker."),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Del ditt eksempel!")," Om du har et eksempel for en annen ",a.createElement(t.em,null,"router"),", eller for annen major-versjon, så er det en stor hjelp for kollegene dine om du deler. Åpne en pull request og vis fram hvordan du har gjort det."),"\n",a.createElement(t.h3,null,"React Router DOM"),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Versjon 6")),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-tsx"},'import React, { useMemo } from "react";\nimport type { RouteObject } from "react-router-dom";\nimport { Link, matchRoutes, useMatch, useLocation } from "react-router-dom";\nimport { Breadcrumb, BreadcrumbItem } from "@fremtind/jkl-breadcrumb-react";\n\nexport interface MyBreadcrumbProps {\n    routes: RouteObject[];\n}\n\nexport const MyBreadcrumb = ({ routes }: MyBreadcrumbProps) => {\n    const location = useLocation();\n\n    const matches = useMemo(() => {\n        const routeMatches = matchRoutes(routes, location);\n        return [{ pathname: "/", route: { element: "Hjem" } }, ...routeMatches];\n    }, [location]);\n\n    const isHjem = useMatch("/");\n\n    if (isHjem) {\n        return null;\n    }\n\n    return (\n        <Breadcrumb>\n            {matches.map((match, i) => {\n                return (\n                    <BreadcrumbItem key={match.pathname}>\n                        <Link to={match.pathname}>{match.route.element}</Link>\n                    </BreadcrumbItem>\n                );\n            })}\n        </Breadcrumb>\n    );\n};\n')))}var d=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(u,e)):u(e)};function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var k=n(71111),E=n(16569),b=n(72892),v=n(479);const h=e=>{let{pageContext:t}=e;return a.createElement(E.p,{title:t.title})},f=e=>{let{location:t,data:n,pageContext:r,children:l}=e;const{frontmatter:o}=n.page,{types:c}=r;return a.createElement(v.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(b.M1,Object.assign({},o,{versions:r.versions})),a.createElement(b.w5,o),l,c&&a.createElement(k.l,{types:c}))};function g(e){return a.createElement(f,e,a.createElement(d,e))}},71111:function(e,t,n){n.d(t,{l:function(){return p}});var r=n(57986),a=n(80252),l=n(50601),o=n(70079);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},i=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,o=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;i(t,n)},d=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&i(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var r},p=e=>{let{types:t}=e;return o.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},o.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),o.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],l=n.props?Object.values(n.props).filter(s):[];return o.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},r.length>0&&o.createElement(d,{props:r}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(d,{props:l})))}))))}},479:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(26372),a=n.n(r),l=n(79363),o=n(70079),c=n(56024);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(c.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},57986:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(26372),a=n.n(r),l=n(70079);const o=e=>{let{className:t,density:n,...r}=e;return l.createElement("div",{"data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,...r})}},80252:function(e,t,n){n.d(t,{Q:function(){return m}});var r=n(14092),a=n(89292),l=n(26372),o=n.n(l),c=n(70079);const s=e=>{let{expanded:t=!1,className:n}=e;return c.createElement("span",{className:o()("jkl-accordion-item__arrow",n,{"jkl-accordion-item__arrow--expanded":t})},c.createElement("svg",{className:"jkl-accordion-item__arrow-down",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M11.15 8.51998L10.35 7.73998L6.54999 11.58L6.55 0.699982L5.43 0.699982L5.43 11.56L1.67 7.73998L0.869995 8.51998L6.01 13.54L11.15 8.51998Z",fill:"currentColor"})),c.createElement("svg",{className:"jkl-accordion-item__arrow-up",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M0.940002 5.71998L1.74 6.49998L5.54 2.65998V13.54H6.66V2.67998L10.42 6.49998L11.22 5.71998L6.08 0.699982L0.940002 5.71998Z",fill:"currentColor"})))},m=e=>{let{children:t,title:n,className:l,startExpanded:m=!1,onClick:i,...u}=e;const d=(0,r.M)("title"),p=(0,r.M)("content"),{0:k,1:E}=(0,c.useState)(m),[b]=(0,a.v)(k,{easing:"exit",timing:"expressive"});return c.createElement("div",{"data-testid":"jkl-accordion-item",...u,className:o()("jkl-accordion-item",l,{"jkl-accordion-item--expanded":k})},c.createElement("button",{id:d,className:"jkl-accordion-item__title",type:"button","aria-expanded":k,"aria-controls":p,onClick:e=>{const t=!k;E(t),i&&i(e,t)}},n,c.createElement(s,{expanded:k})),c.createElement("div",{id:p,ref:b,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":d,hidden:!k},c.createElement("div",{className:"jkl-accordion-item__content"},t)))}},50601:function(e,t,n){n.d(t,{w:function(){return u}});var r=n(70079),a=n(64327),l=n(1807),o=n(11348),c=n(12675),s=n(14687),m=n(61211),i=n(39666);const u=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:d,rows:p,verticalAlign:k,...E}=e;return r.createElement(a.i,{fullWidth:!0,...E,ref:t},n&&r.createElement(o.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(i.S,null,u.map(((e,t)=>r.createElement(m.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.R,null,0===p.length&&d&&r.createElement(i.S,null,r.createElement(c.p,{colSpan:u.length},d)),p.map(((e,t)=>r.createElement(i.S,{key:t},e.map(((e,t)=>r.createElement(c.p,{key:t,"data-th":u[t],verticalAlign:k},e))))))))}));u.displayName="DataTable"}}]);