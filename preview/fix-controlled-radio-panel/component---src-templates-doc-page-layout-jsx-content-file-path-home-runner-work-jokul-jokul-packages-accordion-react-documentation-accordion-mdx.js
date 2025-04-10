"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[751],{7848:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return _},Head:function(){return N},default:function(){return w}});var r=t(47160),a=t(70079),i=t(56733),l=t(74016),o=t(26372),s=t.n(o);const m=e=>{let{className:n,density:t,id:r,...i}=e;return a.createElement("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:s()("jkl-accordion",n),"data-density":t,id:r},i))};var c=t(68998),d=t(1386);const p=e=>{let{children:n,title:t,className:r,startExpanded:i=!1,onClick:l,id:o,...m}=e;const{0:p,1:k}=(0,a.useState)(i),{0:u}=(0,a.useState)((()=>i)),{detailsRef:f,summaryRef:g,contentRef:v,onSummaryClick:E}=(0,d.E)({onOpenChange:(e,n)=>{k(e),l&&l(n,e)},isExpanded:u});return a.createElement("details",Object.assign({"data-testid":"jkl-accordion-item"},m,{className:s()("jkl-accordion-item",r),ref:f,id:o}),a.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:E,ref:g},t,a.createElement(c.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})),a.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:v},a.createElement("div",{className:"jkl-accordion-item__content"},n)))},k={},u=()=>{const e=(0,a.useId)();return a.createElement(a.Fragment,null,a.createElement("h2",{className:"jkl-portal-heading-medium",id:e,style:{textAlign:"center",marginBottom:24,width:"100%"}},"Noen spørsmål"),a.createElement(m,{"aria-labelledby":e},a.createElement(p,{title:"Hvem kan kjøpe livsforsikring?",onClick:(e,n)=>{n?console.log("Opening first accordion item"):console.log("Closing first accordion item")}},a.createElement(i.QI,null,a.createElement(l.HC,null,"Personer med et norsk fødselsnummer."),a.createElement(l.HC,null,"Personer som har vært bosatt i Norge i minst de fem siste årene før avtalen inngås."),a.createElement(l.HC,null,"Livsforsikring kan kjøpes på nett av personer mellom 18 og 79 år.")),"Ønsker du en forsikringssum på mer enn 3 millioner trenger vi ekstra økonomiske opplysninger. Da må du ta kontakt med banken din."),a.createElement(p,{title:"Hvem kan kjøpe kritisk sykdom?"},"Personer med et norsk fødselsnummer. Personer som har vært bosatt i Norge i minst de fem siste årene før avtalen inngås. Kritisk sykdom kan kjøpes på nett av personer mellom 18 og 58 år. Ønsker du en forsikringssum på mer enn 1,1 millioner trenger vi ekstra økonomiske opplysninger. Da må du ta kontakt med banken din."),a.createElement(p,{title:"Hvem kan kjøpe uførepensjon?"},"Personer med et norsk fødselsnummer. Personer som har vært bosatt i Norge i minst de fem siste årene før avtalen inngås. Uførepensjon kan kjøpes på nett av personer mellom 18 og 60 år. Ønsker du en forsikringssum på mer enn 96 000 trenger vi ekstra økonomiske opplysninger. Da må du ta kontakt med banken din.")))},f=()=>'\n<>\n    <h2\n        className="jkl-portal-heading-medium"\n        id={id}\n        style={{ textAlign: "center", marginBottom: 24, width: "100%" }}\n    >\n        Noen spørsmål\n    </h2>\n    <Accordion aria-labelledby={id}>\n        <AccordionItem\n            title="Hvem kan kjøpe livsforsikring?"\n            onClick={(e, isOpen) => {\n                isOpen\n                    ? console.log("Opening first accordion item")\n                    : console.log("Closing first accordion item");\n            }}\n        >\n            <UnorderedList>\n                <ListItem>Personer med et norsk fødselsnummer.</ListItem>\n                <ListItem>\n                    Personer som har vært bosatt i Norge i minst de fem siste årene før avtalen inngås.\n                </ListItem>\n                <ListItem>Livsforsikring kan kjøpes på nett av personer mellom 18 og 79 år.</ListItem>\n            </UnorderedList>\n            Ønsker du en forsikringssum på mer enn 3 millioner trenger vi ekstra økonomiske opplysninger. Da må\n            du ta kontakt med banken din.\n        </AccordionItem>\n        <AccordionItem title="Hvem kan kjøpe kritisk sykdom?">\n            Personer med et norsk fødselsnummer. Personer som har vært bosatt i Norge i minst de fem siste årene\n            før avtalen inngås. Kritisk sykdom kan kjøpes på nett av personer mellom 18 og 58 år. Ønsker du en\n            forsikringssum på mer enn 1,1 millioner trenger vi ekstra økonomiske opplysninger. Da må du ta\n            kontakt med banken din.\n        </AccordionItem>\n        <AccordionItem title="Hvem kan kjøpe uførepensjon?">\n            Personer med et norsk fødselsnummer. Personer som har vært bosatt i Norge i minst de fem siste årene\n            før avtalen inngås. Uførepensjon kan kjøpes på nett av personer mellom 18 og 60 år. Ønsker du en\n            forsikringssum på mer enn 96 000 trenger vi ekstra økonomiske opplysninger. Da må du ta kontakt med\n            banken din.\n        </AccordionItem>\n    </Accordion>\n</>\n';function g(e){const n=Object.assign({p:"p",a:"a",h2:"h2",em:"em",ul:"ul",li:"li",h3:"h3"},(0,r.ah)(),e.components),{Ingress:t,ComponentExample:i,PortalImage:l}=n;return i||E("ComponentExample",!0),t||E("Ingress",!0),l||E("PortalImage",!0),a.createElement(a.Fragment,null,a.createElement(t,null,a.createElement(n.p,null,"Med trekkspillister kan vi presentere mye innhold på liten plass. En trekkspilliste har én eller flere rader, som\nbrukeren kan klikke på for å vise eller skjule informasjon.")),"\n",a.createElement(i,{title:"Accordion",component:u,knobs:k,codeExample:f}),"\n",a.createElement(n.p,null,"En trekkspilliste med én rad fungerer ikke alltid like bra. Hvis du ønsker et alternativ kan du vurdere å ta i bruk ",a.createElement(n.a,{href:"/preview/fix-controlled-radio-panel/komponenter/expandbutton"},"ExpandButton"),"."),"\n",a.createElement(n.h2,null,"Når bruker vi en Accordion?"),"\n",a.createElement(n.p,null,"Viktig informasjon bør alltid ligge synlig, ikke skjult i en trekkspilliste. Hvilken informasjon som er viktig kommer an på situasjonen din. Om du er i tvil, velg å ",a.createElement(n.em,null,"ikke")," bruke Accordion."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Trekkspillister passer godt til tilleggsinformasjon som kan være til hjelp for brukerne."),"\n",a.createElement(n.li,null,'Teksten på hver rad i listen må være tydelig, og må beskrive innholdet for brukeren. "Vis mer" er ikke en god nok tittel.'),"\n",a.createElement(n.li,null,"Du kan sette en overskrift for hele trekkspillisten om du ønsker."),"\n"),"\n",a.createElement(n.h3,null,"Eksempler på bruk"),"\n",a.createElement(l,{src:"/assets/documentation/accordion/accordion-betaling-faktura.png",caption:"Visning av fakturadetaljer på en detaljside."}),"\n",a.createElement(l,{src:"/assets/documentation/accordion/accordion-fakturaarkiv.gif",caption:"Visning av detaljer om fakturaer fra et arkiv."}))}var v=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?a.createElement(n,e,a.createElement(g,e)):g(e)};function E(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var j=t(72285),h=t(22756),b=t(95573),y=t(1634);const N=e=>{let{pageContext:n}=e;return a.createElement(h.p,{title:n.title})},_=e=>{let{location:n,data:t,pageContext:r,children:i}=e;const{frontmatter:l}=t.page,{types:o}=r;return a.createElement(y.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(b.M1,Object.assign({},l,{versions:r.versions})),a.createElement(b.w5,l),i,o&&a.createElement(j.l,{types:o}))};function w(e){return a.createElement(_,e,a.createElement(v,e))}},72285:function(e,n,t){t.d(n,{l:function(){return u}});var r=t(58820),a=t(63571),i=t(87505),l=t(70079),o=t(54656);const s=e=>l.createElement("code",{className:"jkl-portal-inline-code"},e),m=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},d=(e,n)=>{const{scrollLeft:t,scrollWidth:r}=e,{clientWidth:a}=n,i=t>0,l=r-t>a;n.classList.toggle("left-shadow",i),n.classList.toggle("right-shadow",l)},p=e=>{const n=e.target,t=n.parentElement;d(n,t)},k=e=>{let{props:n}=e;const t=(0,l.useRef)(null);return(0,l.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&d(n,e)}}))})),r=t.current.parentElement.parentElement;n.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),l.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},l.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},l.createElement(i.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=n,r.map((e=>{var n,t;return[e.name?s(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?s(e.type.name):""]})))})));var r},u=e=>{let{types:n}=e;return l.createElement("section",{className:"mb-104 jkl-portal-paragraph"},l.createElement("h2",{className:"heading-1 mt-104"},"React API"),l.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),l.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const r=t.props?Object.values(t.props).filter(c):[],i=t.props?Object.values(t.props).filter(m):[],s=(e=>{var n,t,r,a,i,l;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(i=a.param)||void 0===i?void 0:i.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(l=e.tags)&&void 0!==l&&l.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return l.createElement(a.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},s&&l.createElement(o.dn,{className:"jkl-portal-code-block"},s),r.length>0&&l.createElement(k,{props:r}),i.length>0&&l.createElement(l.Fragment,null,l.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),l.createElement(k,{props:i})))}))))}},1634:function(e,n,t){t.d(n,{M:function(){return s}});var r=t(26372),a=t.n(r),i=t(49597),l=t(70079),o=t(34044);const s=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:r}=(0,l.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return l.createElement(i.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:a()("jkl-portal__main",n),id:"innhold"},t)}},58820:function(e,n,t){t.d(n,{U:function(){return l}});var r=t(35250),a=t(26372),i=t.n(a);const l=e=>{let{className:n,density:t,id:a,...l}=e;return(0,r.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:i()("jkl-accordion",n),"data-density":t,id:a,...l})}},63571:function(e,n,t){t.d(n,{Q:function(){return m}});var r=t(35250),a=t(68998),i=t(1386),l=t(26372),o=t.n(l),s=t(70079);const m=e=>{let{children:n,title:t,className:l,startExpanded:m=!1,onClick:c,id:d,...p}=e;const[k,u]=(0,s.useState)(m),[f]=(0,s.useState)((()=>m)),{detailsRef:g,summaryRef:v,contentRef:E,onSummaryClick:j}=(0,i.E)({onOpenChange:(e,n)=>{u(e),c&&c(n,e)},isExpanded:f});return(0,r.jsxs)("details",{"data-testid":"jkl-accordion-item",...p,className:o()("jkl-accordion-item",l),ref:g,id:d,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:v,children:[t,(0,r.jsx)(a.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]})}},87505:function(e,n,t){t.d(n,{w:function(){return d}});var r=t(70079),a=t(41699),i=t(65174),l=t(6914),o=t(82546),s=t(39126),m=t(66169),c=t(94509);const d=(0,r.forwardRef)(((e,n)=>{let{caption:t,columns:d,emptyTableText:p,rows:k,verticalAlign:u,...f}=e;return r.createElement(a.i,{fullWidth:!0,...f,ref:n},t&&r.createElement(l.R,{srOnly:!0},t),r.createElement(s.s,null,r.createElement(c.S,null,d.map(((e,n)=>r.createElement(m.x,{key:n,density:"compact",bold:!0},e))))),r.createElement(i.R,null,0===k.length&&p&&r.createElement(c.S,null,r.createElement(o.p,{colSpan:d.length},p)),k.map(((e,n)=>r.createElement(c.S,{key:n},e.map(((e,n)=>r.createElement(o.p,{key:n,"data-th":d[n],verticalAlign:u},e))))))))}));d.displayName="DataTable"}}]);