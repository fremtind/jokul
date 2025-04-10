"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3219],{46193:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return B},Head:function(){return C},default:function(){return O}});var a=t(47160),l=t(70079),r=t(84490),s=t(90637),o=t(53484),i=t(26372),d=t.n(i);const c=l.forwardRef(((e,n)=>{let{as:t="button",className:a,children:r,density:i,expandDirection:c="down",isExpanded:p=!1,hideLabel:m=!1,...u}=e;const k=m?s.u:l.Fragment,E="down"===c?!p:p,g=t,v="button"===g?"button":void 0;return l.createElement(g,Object.assign({"aria-expanded":p,"data-testid":"jkl-expand-button",type:v,className:d()("jkl-expand-button",a,{"jkl-expand-button--expanded":p,"jkl-expand-button--icon-only":!r})},u,{"data-density":i,ref:n}),r&&l.createElement(k,null,l.createElement("span",{className:"jkl-expand-button__text"},r)),l.createElement(o.K,{className:"jkl-expand-button__arrow",pointingDown:E}))}));c.displayName="ExpandButton";const p=(0,l.forwardRef)(((e,n)=>{let{...t}=e;return l.createElement("div",Object.assign({ref:n,className:"jkl-expand-section__content-wrapper",role:"group"},t),l.createElement("div",{className:"jkl-expand-section__content"},l.createElement("p",{className:"jkl-heading-4 jkl-spacing-xl--bottom"},"Skjult seksjon"),l.createElement("p",{className:"jkl-spacing-l--bottom"},"For at dette skal fungere på en god måte må man huske på ",l.createElement("code",null,"aria-controls"),". Denne komponenten kan være nyttig i for eksempel ekspanderbare tabellrader.")))}));p.displayName="ExpandSection";const m=e=>{let{choiceValues:n}=e;const{0:t,1:a}=(0,l.useState)(!1),[s]=(0,r.v)(t),o="jkl-example-expand-button",i="jkl-example-expand-content",d="Oppover"===(null==n?void 0:n["Ekspander i retning (kun frittstående)"])?"up":"down";return l.createElement("div",null,l.createElement("p",{className:"jkl-spacing-l--bottom"},"Noen ganger trenger vi å gi brukerne som ønsker det litt mer informasjon."),"up"===d&&l.createElement(l.Fragment,null,l.createElement(p,{ref:s,"aria-labelledby":o,id:i,hidden:!t}),l.createElement("p",{className:"jkl-spacing-l--bottom"},"Jeg er ikke styrt av ExpandButton. Jeg illustrerer muligheten for å kontrollere deler av siden som ikke er direkte under ExpandButton.")),l.createElement(c,{"aria-controls":i,id:o,className:"jkl-spacing-l--bottom",expandDirection:d,isExpanded:t,onClick:()=>{a(!t)}},t?"Skjul seksjonen igjen":"Vis den skjulte seksjonen"),"down"===d&&l.createElement(l.Fragment,null,l.createElement("p",{className:"jkl-spacing-l--bottom"},"Jeg er ikke styrt av ExpandButton. Jeg illustrerer muligheten for å kontrollere deler av siden som ikke er direkte under ExpandButton."),l.createElement(p,{ref:s,"aria-labelledby":o,id:i,hidden:!t})))};const u=e=>{let{choiceValues:n}=e;const t="Oppover"===(null==n?void 0:n["Ekspander i retning (kun frittstående)"])?"up":"down",a='\n        <div\n            ref={elementRef}\n            aria-labelledby={expandButtonId}\n            id={expandedContentId}\n            role="group"\n            hidden={!isExpanded}\n            className="jkl-expand-section__content-wrapper"\n        >\n            <div className="jkl-expand-section__content">\n                <p className="jkl-heading-4 jkl-spacing-xl--bottom">Skjult seksjon</p>\n                <p className="jkl-spacing-l--bottom">\n                    For at dette skal fungere på en god måte må man huske på <code>aria-controls</code>. Denne\n                    komponenten kan være nyttig i for eksempel ekspanderbare tabellrader.\n                </p>\n            </div>\n        </div>\n';return'\nconst [isExpanded, setIsExpanded] = useState(false);\nconst [elementRef] = useAnimatedHeight<HTMLDivElement>(isExpanded);\nconst expandButtonId = "jkl-example-expand-button";\nconst expandedContentId = "jkl-example-expand-content";\n\nconst onClick = () => {\n    setIsExpanded(!isExpanded);\n};\n\n\nreturn (\n    <div>\n        <p className="jkl-spacing-l--bottom">\n            Noen ganger trenger vi å gi brukerne som ønsker det litt mer informasjon.\n        </p>\n        '+("up"===t?a+'\n        <p className="jkl-spacing-l--bottom">\n            Jeg er ikke styrt av ExpandButton. Jeg illustrerer muligheten for å kontrollere deler av siden som ikke\n            er direkte under ExpandButton.\n        </p>\n        ':"")+'\n        <ExpandButton\n            aria-controls={expandedContentId}\n            id={expandButtonId}\n            className="jkl-spacing-l--bottom"\n            expandDirection={expandDirection}\n            isExpanded={isExpanded}\n            onClick={onClick}\n        >\n            {isExpanded ? "Skjul seksjonen igjen" : "Vis den skjulte seksjonen"}\n        </ExpandButton>\n        '+("down"===t?'\n        <p className="jkl-spacing-l--bottom">\n            Jeg er ikke styrt av ExpandButton. Jeg illustrerer muligheten for å kontrollere deler av siden som ikke\n            er direkte under ExpandButton.\n        </p>\n        '+a:"")+"\n    </div>\n);\n    "};var k=t(1386);const E=e=>{let{children:n,className:t,expandButtonProps:a,isExpanded:r=!1,density:s,onClick:o,title:i,useAnimatedHeightOptions:p,...m}=e;const{0:u,1:E}=(0,l.useState)(r);(0,l.useEffect)((()=>{E(r)}),[r]);const{detailsRef:g,summaryRef:v,contentRef:j,onSummaryClick:x}=(0,k.E)({onOpenChange:(e,n)=>{E(e),o&&o(n,e)},isExpanded:r});return l.createElement("details",Object.assign({"data-testid":"jkl-expand-section",className:d()("jkl-expand-section",t)},m,{ref:g}),l.createElement(c,Object.assign({as:"summary"},a,{density:s,isExpanded:u,onClick:x,ref:v}),i),l.createElement("div",{"data-testid":"jkl-expand-section__content-wrapper",className:"jkl-expand-section__content-wrapper",ref:j},l.createElement("div",{className:"jkl-expand-section__content"},n)))},g=()=>{const{0:e,1:n}=(0,l.useState)(!1);return l.createElement("div",null,l.createElement("p",{className:"jkl-spacing-l--bottom"},"Noen ganger trenger vi å gi brukerne som ønsker det litt mer informasjon."),l.createElement(E,{title:e?"Skjul seksjonen igjen":"Vis den skjulte seksjonen",onClick:(e,t)=>{n(t)}},l.createElement("p",{className:"jkl-heading-4 jkl-spacing-xl--bottom"},"Skjult seksjon"),l.createElement("p",{className:"jkl-spacing-l--bottom"},"Her kommer det masse informasjon som er relevant, men ikke så relevant at vi alltid vil vise det."),l.createElement("p",{className:"jkl-spacing-l--bottom"},"Vi kunne kanskje brukt en Accordion, men vi har ikke ",l.createElement("em",null,"flere")," ting vi vil strukturere på denne måten. Det ser litt rart ut med ett AccordionItem, så da bruker vi heller en ExpandButton")))};const v={choiceProps:[{name:"Innhold",values:["Integrert","Frittstående"],defaultValue:0},{name:"Ekspander i retning (kun frittstående)",values:["Nedover","Oppover"],defaultValue:0}]},j=e=>{let{boolValues:n,choiceValues:t}=e;const a="Frittstående"===(null==t?void 0:t.Innhold);let r=g;return a&&(r=m),l.createElement(r,{boolValues:n,choiceValues:t})};const x=e=>{let{boolValues:n,choiceValues:t}=e;return"Frittstående"===(null==t?void 0:t.Innhold)?u({boolValues:n,choiceValues:t}):'\nconst [isExpanded, setIsExpanded] = useState(false);\n\nreturn (\n    <ExpandSection\n        title={isExpanded ? "Skjul seksjonen igjen" : "Vis den skjulte seksjonen"}\n        onClick={(e, expanded) => {\n            setIsExpanded(expanded);\n        }}\n    >\n        <p className="jkl-heading-4 jkl-spacing-xl--bottom">Skjult seksjon</p>\n        <p className="jkl-spacing-l--bottom">\n            Her kommer det masse informasjon som er relevant, men ikke så relevant at vi alltid vil vise\n            det.\n        </p>\n        <p className="jkl-spacing-l--bottom">\n            Vi kunne kanskje brukt en Accordion, men vi har ikke <em>flere</em> ting vi vil strukturere på\n            denne måten. Det ser litt rart ut med ett AccordionItem, så da bruker vi heller en ExpandButton\n        </p>\n    </ExpandSection>\n);\n'},b={choiceProps:[{name:"Variant",values:["heading-3","heading-2","heading-1"],defaultValue:1}]},f=e=>{let{choiceValues:n}=e;const{0:t,1:a}=(0,l.useState)(!1),[s]=(0,r.v)(t),o="jkl-example-expand-button-2",i="jkl-example-expand-content-2";return l.createElement("div",null,l.createElement(c,{"aria-controls":i,id:o,className:"jkl-spacing-l--bottom "+(null!=n&&n.Variant?"jkl-"+(null==n?void 0:n.Variant):""),expandDirection:"down",isExpanded:t,onClick:()=>{a(!t)}},t?"Skjul seksjonen igjen":"Vis den skjulte seksjonen"),l.createElement("div",{ref:s,className:"jkl-expand-section__content-wrapper",role:"group","aria-labelledby":o,id:i,hidden:!t},l.createElement("div",{className:"jkl-expand-section__content"},l.createElement("p",{className:"jkl-heading-4 jkl-spacing-xl--bottom"},"Skjult seksjon"),l.createElement("p",{className:"jkl-spacing-l--bottom"},"For at dette skal fungere på en god måte må man huske på ",l.createElement("code",null,"aria-controls"),". Denne komponenten kan være nyttig i for eksempel ekspanderbare tabellrader."))))},h=e=>{let{choiceValues:n}=e;return'const [isExpanded, setIsExpanded] = useState(false);\nconst [elementRef] = useAnimatedHeight<HTMLDivElement>(isExpanded);\nconst expandButtonId = "jkl-example-expand-button-2";\nconst expandedContentId = "jkl-example-expand-content-2";\n\nconst onClick = () => {\n  setIsExpanded(!isExpanded);\n};\n\nreturn (\n  <div>\n    <ExpandButton\n      aria-controls={expandedContentId}\n      id={expandButtonId}\n      className={`jkl-spacing-l--bottom '+(null!=n&&n.Variant?"jkl-"+(null==n?void 0:n.Variant):"")+'`}\n      expandDirection="down"\n      isExpanded={isExpanded}\n      onClick={onClick}\n    >\n      {isExpanded ? "Skjul seksjonen igjen" : "Vis den skjulte seksjonen"}\n    </ExpandButton>\n    <div\n      ref={elementRef}\n      className="jkl-expand-section__content-wrapper"\n      role="group"\n      aria-labelledby={expandButtonId}\n      id={expandedContentId}\n      hidden={!isExpanded}\n    >\n      <div className="jkl-expand-section__content">\n        <p className="jkl-heading-4 jkl-spacing-xl--bottom">Skjult seksjon</p>\n        <p className="jkl-spacing-l--bottom">\n          For at dette skal fungere på en god måte må man huske på <code>aria-controls</code>. Denne\n          komponenten kan være nyttig i for eksempel ekspanderbare tabellrader.\n        </p>\n      </div>\n    </div>\n  </div>\n);'};function N(e){const n=Object.assign({p:"p",a:"a",h2:"h2",code:"code",h3:"h3",ul:"ul",li:"li"},(0,a.ah)(),e.components),{Ingress:t,ComponentExample:r,PortalImage:s}=n;return r||_("ComponentExample",!0),t||_("Ingress",!0),s||_("PortalImage",!0),l.createElement(l.Fragment,null,l.createElement(t,null,l.createElement(n.p,null,"Med en ExpandButton kan vi presentere mye innhold på liten plass. Knappen kan brukes frittstående, og styre\nekspandering av innhold som ikke er direkte under komponenten.")),"\n",l.createElement(r,{title:"ExpandButton",component:j,knobs:v,codeExample:x}),"\n",l.createElement(n.p,null,"Denne komponenten skal ikke brukes i en liste under hverandre. Om du har flere seksjoner med innhold du vil at skal vises og skjules uavhengig av hverandre bruker du en ",l.createElement(n.a,{href:"/preview/3876-move-label-2/komponenter/accordion"},"Accordion"),"."),"\n",l.createElement(n.p,null,"Viktig informasjon bør alltid ligge synlig, ikke skjult bak en ExpandButton."),"\n",l.createElement(n.p,null,"Knappen bør ha en tekst som beskriver hva som skjules. Om det er tydelig fra sammenhengen hva knappen er til, for eksempel ved ekspandering av en tabellrad, kan den skjules visuelt."),"\n",l.createElement(n.h2,null,"Varianter"),"\n",l.createElement(n.p,null,"Som hovedregel skal ekspanderingen av innhold skje i retning nedover. Et unntak er dersom du har innhold i en bunnmeny som skal ekspanderes oppover. I de tilfellene kan ",l.createElement(n.code,null,"ExpandButton")," brukes med pila pekende i retningen innholdet kommer til å ekspandere, altså motsatt retning av det vanlige."),"\n",l.createElement(s,{src:"/assets/documentation/expand-button/expand-button-footer-expand-up.png",caption:"Et eksempel på en footer med innhold som kan ekspanderes. Øverst ser vi lukket tilstand, med pil pekende oppover. Under ser vi åpen tilstand, med pilen pekende nedover."}),"\n",l.createElement(n.h3,null,"Andre fonstørrelser"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"ExpandButton")," arver størrelsen sin fra omgivelsene. Om du ønsker kan du sette en annen fontstørrelse, enten med en egen klasse, eller med en av utility-klassene i Jøkul."),"\n",l.createElement(r,{title:"Ulike størrelser",component:f,knobs:b,codeExample:h}),"\n",l.createElement(n.h2,null,"Tilgjengelighet"),"\n",l.createElement(n.p,null,"Det er viktig å hjelpe skjermlesere med å forstå at det er en knapp som kommer til å påvirke annet innhold. Inspisér gjerne HTMLen som genereres av eksempelet og se hvilke attributter som settes, og hvilken verdi de har i åpen og lukket tilstand."),"\n",l.createElement(n.p,null,"På selve knappen ser du sannsynligvis:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.code,null,"id")),"\n",l.createElement(n.li,null,l.createElement(n.code,null,'aria-expanded="false"')," når lukket og ",l.createElement(n.code,null,'aria-expanded="true"')," når åpen (styres av ",l.createElement(n.code,null,"isExpanded"),"-propen)"),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"aria-controls")," med en ID som peker på innholdet som styres av knappen"),"\n"),"\n",l.createElement(n.p,null,"På innholdet som styres av knappen ser du sannsynligvis:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.code,null,"id")),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"aria-labelledby")," med en ID som peker tilbake på knappen"),"\n",l.createElement(n.li,null,l.createElement(n.code,null,'role="group"')),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"hidden")," hvis innholdet er skjult"),"\n"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"ExpandSection"),"-komponenten håndterer alt dette, men den plasserer alltid innholdet som ekspanderes direkte under knappen. Om du trenger en annen layout må du bruke ",l.createElement(n.code,null,"ExpandButton")," direkte, og sørge for å teste med skjermleser."))}var y=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(N,e)):N(e)};function _(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var w=t(72285),S=t(22756),I=t(95573),V=t(1634);const C=e=>{let{pageContext:n}=e;return l.createElement(S.p,{title:n.title})},B=e=>{let{location:n,data:t,pageContext:a,children:r}=e;const{frontmatter:s}=t.page,{types:o}=a;return l.createElement(V.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(I.M1,Object.assign({},s,{versions:a.versions})),l.createElement(I.w5,s),r,o&&l.createElement(w.l,{types:o}))};function O(e){return l.createElement(B,e,l.createElement(y,e))}},72285:function(e,n,t){t.d(n,{l:function(){return k}});var a=t(78217),l=t(41994),r=t(87505),s=t(70079),o=t(54656);const i=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),d=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},p=(e,n)=>{const{scrollLeft:t,scrollWidth:a}=e,{clientWidth:l}=n,r=t>0,s=a-t>l;n.classList.toggle("left-shadow",r),n.classList.toggle("right-shadow",s)},m=e=>{const n=e.target,t=n.parentElement;p(n,t)},u=e=>{let{props:n}=e;const t=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&p(n,e)}}))})),a=t.current.parentElement.parentElement;n.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=n,a.map((e=>{var n,t;return[e.name?i(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?i(e.type.name):""]})))})));var a},k=e=>{let{types:n}=e;return s.createElement("section",{className:"mb-104 jkl-portal-paragraph"},s.createElement("h2",{className:"heading-1 mt-104"},"React API"),s.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const a=t.props?Object.values(t.props).filter(c):[],r=t.props?Object.values(t.props).filter(d):[],i=(e=>{var n,t,a,l,r,s;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(r=l.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(s=e.tags)&&void 0!==s&&s.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return s.createElement(l.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},i&&s.createElement(o.dn,{className:"jkl-portal-code-block"},i),a.length>0&&s.createElement(u,{props:a}),r.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(u,{props:r})))}))))}},1634:function(e,n,t){t.d(n,{M:function(){return i}});var a=t(26372),l=t.n(a),r=t(49597),s=t(70079),o=t(34044);const i=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:a}=(0,s.useContext)(o.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(r.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||i?0:.35},className:l()("jkl-portal__main",n),id:"innhold"},t)}},78217:function(e,n,t){t.d(n,{U:function(){return s}});var a=t(26372),l=t.n(a),r=t(70079);const s=e=>{let{className:n,density:t,id:a,...s}=e;return r.createElement("section",{role:"group","data-testid":"jkl-accordion",className:l()("jkl-accordion",n),"data-density":t,id:a,...s})}},41994:function(e,n,t){t.d(n,{Q:function(){return i}});var a=t(53484),l=t(1386),r=t(26372),s=t.n(r),o=t(70079);const i=e=>{let{children:n,title:t,className:r,startExpanded:i=!1,onClick:d,id:c,...p}=e;const{0:m,1:u}=(0,o.useState)(i),{0:k}=(0,o.useState)((()=>i)),{detailsRef:E,summaryRef:g,contentRef:v,onSummaryClick:j}=(0,l.E)({onOpenChange:(e,n)=>{u(e),d&&d(n,e)},isExpanded:k});return o.createElement("details",{"data-testid":"jkl-accordion-item",...p,className:s()("jkl-accordion-item",r),ref:E,id:c},o.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:g},t,o.createElement(a.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!m,bold:m})),o.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:v},o.createElement("div",{className:"jkl-accordion-item__content"},n)))}},87505:function(e,n,t){t.d(n,{w:function(){return p}});var a=t(70079),l=t(41699),r=t(65174),s=t(6914),o=t(82546),i=t(39126),d=t(66169),c=t(94509);const p=(0,a.forwardRef)(((e,n)=>{let{caption:t,columns:p,emptyTableText:m,rows:u,verticalAlign:k,...E}=e;return a.createElement(l.i,{fullWidth:!0,...E,ref:n},t&&a.createElement(s.R,{srOnly:!0},t),a.createElement(i.s,null,a.createElement(c.S,null,p.map(((e,n)=>a.createElement(d.x,{key:n,density:"compact",bold:!0},e))))),a.createElement(r.R,null,0===u.length&&m&&a.createElement(c.S,null,a.createElement(o.p,{colSpan:p.length},m)),u.map(((e,n)=>a.createElement(c.S,{key:n},e.map(((e,n)=>a.createElement(o.p,{key:n,"data-th":p[n],verticalAlign:k},e))))))))}));p.displayName="DataTable"}}]);