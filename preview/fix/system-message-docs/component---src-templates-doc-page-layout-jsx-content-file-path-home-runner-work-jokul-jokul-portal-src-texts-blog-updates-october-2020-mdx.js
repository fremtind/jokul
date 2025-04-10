"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2903],{67386:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return m},default:function(){return p}});var r=n(47160),l=n(70079);function a(e){const t=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"Den forrige måneden var kanskje ikke den mest spennende for Jøkul sin del.\nDet har stort sett være finpuss og bugfixer som har blitt publisert. Sånn sett ser oktober ut til å bli en mer spennede måned.\nOktober er også ",l.createElement(t.a,{href:"https://hacktoberfest.digitalocean.com/"},"hacktober"),", og siden Jøkul er open source kvalifiserer alle PRer i oktober.\nDet ligger saker og ting i issuelisten om du har lyst å bidra, du kan feks starte ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%A7%B8+good+first+issue%22"},"her"),"u\nEllers så står Dependabot på som en helt og holder dependenciene våre oppdatert."),"\n",l.createElement(t.h2,null,"🌱 Releaser"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"💥 Button har hatt en breaking change med ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1370"},"forwardRef"),".\nI praksis skal ikke det bety så mye i de aller fleste tilfeller. ",l.createElement(t.a,{href:"https://reactjs.org/docs/forwarding-refs.html"},"Les mer")),"\n"),"\n",l.createElement(t.h2,null,"📰 Oppdateringer"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Vi kan ønske @Mikaila94 velkommen som ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1335"},"bidragsyter"),"!"),"\n",l.createElement(t.li,null,"Vi har endelig fått på plass en fullverdi ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1295"},"font stack")),"\n",l.createElement(t.li,null,"@piofinn forklarer hvordan ",l.createElement(t.a,{href:"/preview/fix/system-message-docs/blog/darkmode/"},"dark mode funker")),"\n",l.createElement(t.li,null,"@Steinop gikk i dybden på ",l.createElement(t.a,{href:"/preview/fix/system-message-docs/blog/ikoner_sept2020/"},"ikoner")),"\n"),"\n",l.createElement(t.h2,null,"🔮 Kommende"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Komponent for å laste bilder i ulik størrelse for ulike dingser, med blur up for hurtigere oppleved ytelse"),"\n",l.createElement(t.li,null,"Hovedmenyen til portalen er på vei inn som komponent"),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},o=n(72285),s=n(22756),c=n(95573),d=n(1634);const m=e=>{let{pageContext:t}=e;return l.createElement(s.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:i}=n.page,{types:s}=r;return l.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(c.M1,Object.assign({},i,{versions:r.versions})),l.createElement(c.w5,i),a,s&&l.createElement(o.l,{types:s}))};function p(e){return l.createElement(u,e,l.createElement(i,e))}},72285:function(e,t,n){n.d(t,{l:function(){return f}});var r=n(58820),l=n(63571),a=n(87505),i=n(70079),o=n(54656);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,i=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},u=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},f=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(d):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,l,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),r.length>0&&i.createElement(p,{props:r}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(26372),l=n.n(r),a=n(49597),i=n(70079),o=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return i}});var r=n(35250),l=n(26372),a=n.n(l);const i=e=>{let{className:t,density:n,id:l,...i}=e;return(0,r.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:l,...i})}},63571:function(e,t,n){n.d(t,{Q:function(){return c}});var r=n(35250),l=n(68998),a=n(1386),i=n(26372),o=n.n(i),s=n(70079);const c=e=>{let{children:t,title:n,className:i,startExpanded:c=!1,onClick:d,id:m,...u}=e;const[p,f]=(0,s.useState)(c),[k]=(0,s.useState)((()=>c)),{detailsRef:h,summaryRef:E,contentRef:v,onSummaryClick:g}=(0,a.E)({onOpenChange:(e,t)=>{f(e),d&&d(t,e)},isExpanded:k});return(0,r.jsxs)("details",{"data-testid":"jkl-accordion-item",...u,className:o()("jkl-accordion-item",i),ref:h,id:m,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:g,ref:E,children:[n,(0,r.jsx)(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:v,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var r=n(70079),l=n(41699),a=n(65174),i=n(6914),o=n(82546),s=n(39126),c=n(66169),d=n(94509);const m=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:u,rows:p,verticalAlign:f,...k}=e;return r.createElement(l.i,{fullWidth:!0,...k,ref:t},n&&r.createElement(i.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(d.S,null,m.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===p.length&&u&&r.createElement(d.S,null,r.createElement(o.p,{colSpan:m.length},u)),p.map(((e,t)=>r.createElement(d.S,{key:t},e.map(((e,t)=>r.createElement(o.p,{key:t,"data-th":m[t],verticalAlign:f},e))))))))}));m.displayName="DataTable"}}]);