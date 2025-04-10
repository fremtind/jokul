"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[751],{60146:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return I},Head:function(){return C},default:function(){return A}});var r=t(64717),a=t(92379),l=t(55293),i=t(61531),o=t(99767),s=t(80324),c=t.n(s);const m=["className","density","id"],d=e=>{let{className:n,density:t,id:r}=e,l=(0,o.Z)(e,m);return a.createElement("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:c()("jkl-accordion",n),"data-density":t,id:r},l))};var p=t(42054),k=t(95020);const u=["children","title","className","startExpanded","onClick","id"],f=e=>{let{children:n,title:t,className:r,startExpanded:l=!1,onClick:i,id:s}=e,m=(0,o.Z)(e,u);const{0:d,1:f}=(0,a.useState)(l),{0:g}=(0,a.useState)((()=>l)),{detailsRef:v,summaryRef:E,contentRef:b,onSummaryClick:j}=(0,k.E)({onOpenChange:(e,n)=>{f(e),i&&i(n,e)},isExpanded:g});return a.createElement("details",Object.assign({"data-testid":"jkl-accordion-item"},m,{className:c()("jkl-accordion-item",r),ref:v,id:s}),a.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:E},t,a.createElement(p.K,{className:"jkl-accordion-item__arrow",pointingDown:!d,bold:d})),a.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:b},a.createElement("div",{className:"jkl-accordion-item__content"},n)))},g={},v=()=>{const e=(0,a.useId)();return a.createElement(a.Fragment,null,a.createElement("h2",{className:"jkl-portal-heading-medium",id:e,style:{textAlign:"center",marginBottom:24,width:"100%"}},"Noen spørsmål"),a.createElement(d,{"aria-labelledby":e},a.createElement(f,{title:"Hvem kan kjøpe livsforsikring?",onClick:(e,n)=>{n?console.log("Opening first accordion item"):console.log("Closing first accordion item")}},a.createElement(l.QI,null,a.createElement(i.HC,null,"Personer med et norsk fødselsnummer."),a.createElement(i.HC,null,"Personer som har vært bosatt i Norge i minst de fem siste årene før avtalen inngås."),a.createElement(i.HC,null,"Livsforsikring kan kjøpes på nett av personer mellom 18 og 79 år.")),"Ønsker du en forsikringssum på mer enn 3 millioner trenger vi ekstra økonomiske opplysninger. Da må du ta kontakt med banken din."),a.createElement(f,{title:"Hvem kan kjøpe kritisk sykdom?"},"Personer med et norsk fødselsnummer. Personer som har vært bosatt i Norge i minst de fem siste årene før avtalen inngås. Kritisk sykdom kan kjøpes på nett av personer mellom 18 og 58 år. Ønsker du en forsikringssum på mer enn 1,1 millioner trenger vi ekstra økonomiske opplysninger. Da må du ta kontakt med banken din."),a.createElement(f,{title:"Hvem kan kjøpe uførepensjon?"},"Personer med et norsk fødselsnummer. Personer som har vært bosatt i Norge i minst de fem siste årene før avtalen inngås. Uførepensjon kan kjøpes på nett av personer mellom 18 og 60 år. Ønsker du en forsikringssum på mer enn 96 000 trenger vi ekstra økonomiske opplysninger. Da må du ta kontakt med banken din.")))},E=()=>'\n<>\n    <h2\n        className="jkl-portal-heading-medium"\n        id={id}\n        style={{ textAlign: "center", marginBottom: 24, width: "100%" }}\n    >\n        Noen spørsmål\n    </h2>\n    <Accordion aria-labelledby={id}>\n        <AccordionItem\n            title="Hvem kan kjøpe livsforsikring?"\n            onClick={(e, isOpen) => {\n                isOpen\n                    ? console.log("Opening first accordion item")\n                    : console.log("Closing first accordion item");\n            }}\n        >\n            <UnorderedList>\n                <ListItem>Personer med et norsk fødselsnummer.</ListItem>\n                <ListItem>\n                    Personer som har vært bosatt i Norge i minst de fem siste årene før avtalen inngås.\n                </ListItem>\n                <ListItem>Livsforsikring kan kjøpes på nett av personer mellom 18 og 79 år.</ListItem>\n            </UnorderedList>\n            Ønsker du en forsikringssum på mer enn 3 millioner trenger vi ekstra økonomiske opplysninger. Da må\n            du ta kontakt med banken din.\n        </AccordionItem>\n        <AccordionItem title="Hvem kan kjøpe kritisk sykdom?">\n            Personer med et norsk fødselsnummer. Personer som har vært bosatt i Norge i minst de fem siste årene\n            før avtalen inngås. Kritisk sykdom kan kjøpes på nett av personer mellom 18 og 58 år. Ønsker du en\n            forsikringssum på mer enn 1,1 millioner trenger vi ekstra økonomiske opplysninger. Da må du ta\n            kontakt med banken din.\n        </AccordionItem>\n        <AccordionItem title="Hvem kan kjøpe uførepensjon?">\n            Personer med et norsk fødselsnummer. Personer som har vært bosatt i Norge i minst de fem siste årene\n            før avtalen inngås. Uførepensjon kan kjøpes på nett av personer mellom 18 og 60 år. Ønsker du en\n            forsikringssum på mer enn 96 000 trenger vi ekstra økonomiske opplysninger. Da må du ta kontakt med\n            banken din.\n        </AccordionItem>\n    </Accordion>\n</>\n';var b=t(90825),j=t(48467);function y(e){const n=Object.assign({p:"p",a:"a",h2:"h2",em:"em",ul:"ul",li:"li",h3:"h3"},(0,r.ah)(),e.components),{Ingress:t,ComponentExample:l,PortalImage:i}=n;return l||N("ComponentExample",!0),t||N("Ingress",!0),i||N("PortalImage",!0),a.createElement(a.Fragment,null,a.createElement("div",{style:{display:"flex",flexDirection:"row",gap:8,marginBottom:16}},a.createElement(b.wq,{lang:"en"},"Deprecated"),a.createElement("p",null,a.createElement(n.p,null,"Bruk heller ",a.createElement(j.r,{href:"/komponenter/expandable"},"ExpandablePanel")))),"\n",a.createElement(t,null,a.createElement(n.p,null,"Med trekkspillister kan vi presentere mye innhold på liten plass. En\ntrekkspilliste har én eller flere rader, som brukeren kan klikke på for å\nvise eller skjule informasjon.")),"\n",a.createElement(l,{title:"Accordion",component:v,knobs:g,codeExample:E}),"\n",a.createElement(n.p,null,"En trekkspilliste med én rad fungerer ikke alltid like bra. Hvis du ønsker et alternativ kan du vurdere å ta i bruk ",a.createElement(n.a,{href:"/preview/feedback-story/komponenter/expandbutton"},"ExpandButton"),"."),"\n",a.createElement(n.h2,null,"Når bruker vi en Accordion?"),"\n",a.createElement(n.p,null,"Viktig informasjon bør alltid ligge synlig, ikke skjult i en trekkspilliste. Hvilken informasjon som er viktig kommer an på situasjonen din. Om du er i tvil, velg å ",a.createElement(n.em,null,"ikke")," bruke Accordion."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Trekkspillister passer godt til tilleggsinformasjon som kan være til hjelp for brukerne."),"\n",a.createElement(n.li,null,'Teksten på hver rad i listen må være tydelig, og må beskrive innholdet for brukeren. "Vis mer" er ikke en god nok tittel.'),"\n",a.createElement(n.li,null,"Du kan sette en overskrift for hele trekkspillisten om du ønsker."),"\n"),"\n",a.createElement(n.h3,null,"Eksempler på bruk"),"\n",a.createElement(i,{src:"/assets/documentation/accordion/accordion-betaling-faktura.png",caption:"Visning av fakturadetaljer på en detaljside."}),"\n",a.createElement(i,{src:"/assets/documentation/accordion/accordion-fakturaarkiv.gif",caption:"Visning av detaljer om fakturaer fra et arkiv."}))}var h=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?a.createElement(n,e,a.createElement(y,e)):y(e)};function N(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var _=t(75482),w=t(96036),O=t(59001),x=t(65458),P=t(79379);const C=e=>{let{pageContext:n}=e;return a.createElement(w.p,{title:n.title})},I=e=>{let{location:n,data:t,pageContext:r,children:l}=e;const{frontmatter:i}=t.page,{types:o}=r;return a.createElement(P.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(x.M1,Object.assign({},i,{versions:r.versions})),n.pathname.includes("komponenter")&&a.createElement(O.c,{variant:"komponent",component:i.title}),a.createElement(x.w5,i),l,o&&a.createElement(_.l,{types:o}))};function A(e){return a.createElement(I,e,a.createElement(h,e))}},75482:function(e,n,t){t.d(n,{l:function(){return u}});var r=t(96845),a=t(41162),l=t(74797),i=t(92379),o=t(25329);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},m=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},d=(e,n)=>{const{scrollLeft:t,scrollWidth:r}=e,{clientWidth:a}=n,l=t>0,i=r-t>a;n.classList.toggle("left-shadow",l),n.classList.toggle("right-shadow",i)},p=e=>{const n=e.target,t=n.parentElement;d(n,t)},k=e=>{let{props:n}=e;const t=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&d(n,e)}}))})),r=t.current.parentElement.parentElement;n.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=n,r.map((e=>{var n,t;return[e.name?s(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?s(e.type.name):""]})))})));var r},u=e=>{let{types:n}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const r=t.props?Object.values(t.props).filter(m):[],l=t.props?Object.values(t.props).filter(c):[],s=(e=>{var n,t,r,a,l,i;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(l=a.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return i.createElement(a.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),r.length>0&&i.createElement(k,{props:r}),l.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(k,{props:l})))}))))}},59001:function(e,n,t){t.d(n,{c:function(){return o}});var r=t(48467),a=t(58990),l=t(92379),i=t(25329);const o=e=>{let{variant:n,component:t}=e;return l.createElement("section",{className:"suggestion-block"},l.createElement("div",{className:"suggestion-block__content"},l.createElement(a.U,null),l.createElement(i.nv,null,s[n].text)),l.createElement(r.r,{href:s[n].link+"+<"+t+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,n,t){t.d(n,{M:function(){return s}});var r=t(80324),a=t.n(r),l=t(24157),i=t(92379),o=t(69215);const s=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:r}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(l.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:a()("jkl-portal__main",n),id:"innhold"},t)}},96845:function(e,n,t){t.d(n,{U:function(){return s}});var r=t(99767),a=t(651),l=t(80324),i=t.n(l);const o=["className","density","id"],s=e=>{let{className:n,density:t,id:l}=e,s=(0,r.Z)(e,o);return(0,a.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:i()("jkl-accordion",n),"data-density":t,id:l},s))}},41162:function(e,n,t){t.d(n,{Q:function(){return d}});var r=t(99767),a=t(651),l=t(42054),i=t(95020),o=t(80324),s=t.n(o),c=t(92379);const m=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:n,title:t,className:o,startExpanded:d=!1,onClick:p,id:k}=e,u=(0,r.Z)(e,m);const[f,g]=(0,c.useState)(d),[v]=(0,c.useState)((()=>d)),{detailsRef:E,summaryRef:b,contentRef:j,onSummaryClick:y}=(0,i.E)({onOpenChange:(e,n)=>{g(e),p&&p(n,e)},isExpanded:v});return(0,a.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},u,{className:s()("jkl-accordion-item",o),ref:E,id:k,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:y,ref:b,children:[t,(0,a.jsx)(l.K,{className:"jkl-accordion-item__arrow",pointingDown:!f,bold:f})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:j,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]}))}},58990:function(e,n,t){t.d(n,{U:function(){return m}});var r=t(92379),a=t(55650),l=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const m=e=>r.createElement(a.J,((e,n)=>{for(var t in n||(n={}))o.call(n,t)&&c(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&c(e,t,n[t]);return e})({},e),"");m.displayName="QuestionIcon"},74797:function(e,n,t){t.d(n,{w:function(){return E}});var r=t(92379),a=t(94207),l=t(49309),i=t(36774),o=t(64081),s=t(64483),c=t(42104),m=t(98746),d=Object.defineProperty,p=Object.defineProperties,k=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,n,t)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const E=(0,r.forwardRef)(((e,n)=>{var t,d=e,{caption:E,columns:b,emptyTableText:j,rows:y,verticalAlign:h}=d,N=((e,n)=>{var t={};for(var r in e)f.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&u)for(var r of u(e))n.indexOf(r)<0&&g.call(e,r)&&(t[r]=e[r]);return t})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(a.i,(t=((e,n)=>{for(var t in n||(n={}))f.call(n,t)&&v(e,t,n[t]);if(u)for(var t of u(n))g.call(n,t)&&v(e,t,n[t]);return e})({fullWidth:!0},N),p(t,k({ref:n}))),E&&r.createElement(i.R,{srOnly:!0},E),r.createElement(s.s,null,r.createElement(m.S,null,b.map(((e,n)=>r.createElement(c.x,{key:n,density:"compact",bold:!0},e))))),r.createElement(l.R,null,0===y.length&&j&&r.createElement(m.S,null,r.createElement(o.p,{colSpan:b.length},j)),y.map(((e,n)=>r.createElement(m.S,{key:n},e.map(((e,n)=>r.createElement(o.p,{key:n,"data-th":b[n],verticalAlign:h},e))))))))}));E.displayName="DataTable"}}]);