"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3219],{46193:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return C},Head:function(){return B},default:function(){return D}});var a=t(47160),l=t(70079),r=t(84490),o=t(90637),s=t(53484),i=t(26372),d=t.n(i);const c=e=>{let{className:n,children:t,density:a,expandDirection:r="down",isExpanded:i=!1,hideLabel:c=!1,...p}=e;const m=c?o.u:l.Fragment,u="down"===r?!i:i;return l.createElement("button",Object.assign({"aria-expanded":i,"data-testid":"jkl-expand-button",type:"button",className:d()("jkl-expand-button",n,{"jkl-expand-button--expanded":i,"jkl-expand-button--icon-only":!t})},p,{"data-density":a}),t&&l.createElement(m,null,l.createElement("span",{className:"jkl-expand-button__text"},t)),l.createElement(s.K,{className:"jkl-expand-button__arrow",pointingDown:u}))},p=(0,l.forwardRef)(((e,n)=>{let{...t}=e;return l.createElement("div",Object.assign({ref:n,className:"jkl-expand-section__content-wrapper",role:"group"},t),l.createElement("div",{className:"jkl-expand-section__content"},l.createElement("p",{className:"jkl-heading-4 jkl-spacing-xl--bottom"},"Skjult seksjon"),l.createElement("p",{className:"jkl-spacing-l--bottom"},"For at dette skal fungere på en god måte må man huske på ",l.createElement("code",null,"aria-controls"),". Denne komponenten kan være nyttig i for eksempel ekspanderbare tabellrader.")))}));p.displayName="ExpandSection";const m=e=>{let{choiceValues:n}=e;const{0:t,1:a}=(0,l.useState)(!1),[o]=(0,r.v)(t),s="jkl-example-expand-button",i="jkl-example-expand-content",d="Oppover"===(null==n?void 0:n["Ekspander i retning (kun frittstående)"])?"up":"down";return l.createElement("div",null,l.createElement("p",{className:"jkl-spacing-l--bottom"},"Noen ganger trenger vi å gi brukerne som ønsker det litt mer informasjon."),"up"===d&&l.createElement(l.Fragment,null,l.createElement(p,{ref:o,"aria-labelledby":s,id:i,hidden:!t}),l.createElement("p",{className:"jkl-spacing-l--bottom"},"Jeg er ikke styrt av ExpandButton. Jeg illustrerer muligheten for å kontrollere deler av siden som ikke er direkte under ExpandButton.")),l.createElement(c,{"aria-controls":i,id:s,className:"jkl-spacing-l--bottom",expandDirection:d,isExpanded:t,onClick:()=>{a(!t)}},t?"Skjul seksjonen igjen":"Vis den skjulte seksjonen"),"down"===d&&l.createElement(l.Fragment,null,l.createElement("p",{className:"jkl-spacing-l--bottom"},"Jeg er ikke styrt av ExpandButton. Jeg illustrerer muligheten for å kontrollere deler av siden som ikke er direkte under ExpandButton."),l.createElement(p,{ref:o,"aria-labelledby":s,id:i,hidden:!t})))};const u=e=>{let{choiceValues:n}=e;const t="Oppover"===(null==n?void 0:n["Ekspander i retning (kun frittstående)"])?"up":"down",a='\n        <div\n            ref={elementRef}\n            aria-labelledby={expandButtonId}\n            id={expandedContentId}\n            role="group"\n            hidden={!isExpanded}\n            className="jkl-expand-section__content-wrapper"\n        >\n            <div className="jkl-expand-section__content">\n                <p className="jkl-heading-4 jkl-spacing-xl--bottom">Skjult seksjon</p>\n                <p className="jkl-spacing-l--bottom">\n                    For at dette skal fungere på en god måte må man huske på <code>aria-controls</code>. Denne\n                    komponenten kan være nyttig i for eksempel ekspanderbare tabellrader.\n                </p>\n            </div>\n        </div>\n';return'\nconst [isExpanded, setIsExpanded] = useState(false);\nconst [elementRef] = useAnimatedHeight<HTMLDivElement>(isExpanded);\nconst expandButtonId = "jkl-example-expand-button";\nconst expandedContentId = "jkl-example-expand-content";\n\nconst onClick = () => {\n    setIsExpanded(!isExpanded);\n};\n\n\nreturn (\n    <div>\n        <p className="jkl-spacing-l--bottom">\n            Noen ganger trenger vi å gi brukerne som ønsker det litt mer informasjon.\n        </p>\n        '+("up"===t?a+'\n        <p className="jkl-spacing-l--bottom">\n            Jeg er ikke styrt av ExpandButton. Jeg illustrerer muligheten for å kontrollere deler av siden som ikke\n            er direkte under ExpandButton.\n        </p>\n        ':"")+'\n        <ExpandButton\n            aria-controls={expandedContentId}\n            id={expandButtonId}\n            className="jkl-spacing-l--bottom"\n            expandDirection={expandDirection}\n            isExpanded={isExpanded}\n            onClick={onClick}\n        >\n            {isExpanded ? "Skjul seksjonen igjen" : "Vis den skjulte seksjonen"}\n        </ExpandButton>\n        '+("down"===t?'\n        <p className="jkl-spacing-l--bottom">\n            Jeg er ikke styrt av ExpandButton. Jeg illustrerer muligheten for å kontrollere deler av siden som ikke\n            er direkte under ExpandButton.\n        </p>\n        '+a:"")+"\n    </div>\n);\n    "};var k=t(3438);const E=e=>{let{children:n,className:t,expandButtonProps:a,isExpanded:o=!1,density:s,onClick:i,title:p,useAnimatedHeightOptions:m,...u}=e;const E=(0,k.M)("button"),g=(0,k.M)("content"),{0:v,1:j}=(0,l.useState)(o),[x]=(0,r.v)(v,m);(0,l.useEffect)((()=>{j(o)}),[o]);return l.createElement("div",Object.assign({className:d()("jkl-expand-section",t)},u),l.createElement(c,Object.assign({},a,{id:E,"aria-controls":g,density:s,isExpanded:v,onClick:e=>{const n=!v;j(n),i&&i(e,n)}}),p),l.createElement("div",{id:g,ref:x,"data-testid":"jkl-expand-section__content-wrapper",className:"jkl-expand-section__content-wrapper",hidden:!v,role:"group","aria-labelledby":E},l.createElement("div",{className:"jkl-expand-section__content"},n)))},g=()=>{const{0:e,1:n}=(0,l.useState)(!1);return l.createElement("div",null,l.createElement("p",{className:"jkl-spacing-l--bottom"},"Noen ganger trenger vi å gi brukerne som ønsker det litt mer informasjon."),l.createElement(E,{title:e?"Skjul seksjonen igjen":"Vis den skjulte seksjonen",onClick:(e,t)=>{n(t)}},l.createElement("p",{className:"jkl-heading-4 jkl-spacing-xl--bottom"},"Skjult seksjon"),l.createElement("p",{className:"jkl-spacing-l--bottom"},"Her kommer det masse informasjon som er relevant, men ikke så relevant at vi alltid vil vise det."),l.createElement("p",{className:"jkl-spacing-l--bottom"},"Vi kunne kanskje brukt en Accordion, men vi har ikke ",l.createElement("em",null,"flere")," ting vi vil strukturere på denne måten. Det ser litt rart ut med ett AccordionItem, så da bruker vi heller en ExpandButton")))};const v={choiceProps:[{name:"Innhold",values:["Integrert","Frittstående"],defaultValue:0},{name:"Ekspander i retning (kun frittstående)",values:["Nedover","Oppover"],defaultValue:0}]},j=e=>{let{boolValues:n,choiceValues:t}=e;const a="Frittstående"===(null==t?void 0:t.Innhold);let r=g;return a&&(r=m),l.createElement(r,{boolValues:n,choiceValues:t})};const x=e=>{let{boolValues:n,choiceValues:t}=e;return"Frittstående"===(null==t?void 0:t.Innhold)?u({boolValues:n,choiceValues:t}):'\nconst [isExpanded, setIsExpanded] = useState(false);\n\nreturn (\n    <ExpandSection\n        title={isExpanded ? "Skjul seksjonen igjen" : "Vis den skjulte seksjonen"}\n        onClick={(e, expanded) => {\n            setIsExpanded(expanded);\n        }}\n    >\n        <p className="jkl-heading-4 jkl-spacing-xl--bottom">Skjult seksjon</p>\n        <p className="jkl-spacing-l--bottom">\n            Her kommer det masse informasjon som er relevant, men ikke så relevant at vi alltid vil vise\n            det.\n        </p>\n        <p className="jkl-spacing-l--bottom">\n            Vi kunne kanskje brukt en Accordion, men vi har ikke <em>flere</em> ting vi vil strukturere på\n            denne måten. Det ser litt rart ut med ett AccordionItem, så da bruker vi heller en ExpandButton\n        </p>\n    </ExpandSection>\n);\n'},b={choiceProps:[{name:"Variant",values:["heading-3","heading-2","heading-1"],defaultValue:1}]},h=e=>{let{choiceValues:n}=e;const{0:t,1:a}=(0,l.useState)(!1),[o]=(0,r.v)(t),s="jkl-example-expand-button-2",i="jkl-example-expand-content-2";return l.createElement("div",null,l.createElement(c,{"aria-controls":i,id:s,className:"jkl-spacing-l--bottom "+(null!=n&&n.Variant?"jkl-"+(null==n?void 0:n.Variant):""),expandDirection:"down",isExpanded:t,onClick:()=>{a(!t)}},t?"Skjul seksjonen igjen":"Vis den skjulte seksjonen"),l.createElement("div",{ref:o,className:"jkl-expand-section__content-wrapper",role:"group","aria-labelledby":s,id:i,hidden:!t},l.createElement("div",{className:"jkl-expand-section__content"},l.createElement("p",{className:"jkl-heading-4 jkl-spacing-xl--bottom"},"Skjult seksjon"),l.createElement("p",{className:"jkl-spacing-l--bottom"},"For at dette skal fungere på en god måte må man huske på ",l.createElement("code",null,"aria-controls"),". Denne komponenten kan være nyttig i for eksempel ekspanderbare tabellrader."))))},f=e=>{let{choiceValues:n}=e;return'const [isExpanded, setIsExpanded] = useState(false);\nconst [elementRef] = useAnimatedHeight<HTMLDivElement>(isExpanded);\nconst expandButtonId = "jkl-example-expand-button-2";\nconst expandedContentId = "jkl-example-expand-content-2";\n\nconst onClick = () => {\n  setIsExpanded(!isExpanded);\n};\n\nreturn (\n  <div>\n    <ExpandButton\n      aria-controls={expandedContentId}\n      id={expandButtonId}\n      className={`jkl-spacing-l--bottom '+(null!=n&&n.Variant?"jkl-"+(null==n?void 0:n.Variant):"")+'`}\n      expandDirection="down"\n      isExpanded={isExpanded}\n      onClick={onClick}\n    >\n      {isExpanded ? "Skjul seksjonen igjen" : "Vis den skjulte seksjonen"}\n    </ExpandButton>\n    <div\n      ref={elementRef}\n      className="jkl-expand-section__content-wrapper"\n      role="group"\n      aria-labelledby={expandButtonId}\n      id={expandedContentId}\n      hidden={!isExpanded}\n    >\n      <div className="jkl-expand-section__content">\n        <p className="jkl-heading-4 jkl-spacing-xl--bottom">Skjult seksjon</p>\n        <p className="jkl-spacing-l--bottom">\n          For at dette skal fungere på en god måte må man huske på <code>aria-controls</code>. Denne\n          komponenten kan være nyttig i for eksempel ekspanderbare tabellrader.\n        </p>\n      </div>\n    </div>\n  </div>\n);'};function N(e){const n=Object.assign({p:"p",a:"a",h2:"h2",code:"code",h3:"h3",ul:"ul",li:"li"},(0,a.ah)(),e.components),{Ingress:t,ComponentExample:r,PortalImage:o}=n;return r||_("ComponentExample",!0),t||_("Ingress",!0),o||_("PortalImage",!0),l.createElement(l.Fragment,null,l.createElement(t,null,l.createElement(n.p,null,"Med en ExpandButton kan vi presentere mye innhold på liten plass. Knappen kan brukes frittstående, og styre\nekspandering av innhold som ikke er direkte under komponenten.")),"\n",l.createElement(r,{title:"ExpandButton",component:j,knobs:v,codeExample:x}),"\n",l.createElement(n.p,null,"Denne komponenten skal ikke brukes i en liste under hverandre. Om du har flere seksjoner med innhold du vil at skal vises og skjules uavhengig av hverandre bruker du en ",l.createElement(n.a,{href:"/preview/fix/text-alignment/komponenter/accordion"},"Accordion"),"."),"\n",l.createElement(n.p,null,"Viktig informasjon bør alltid ligge synlig, ikke skjult bak en ExpandButton."),"\n",l.createElement(n.p,null,"Knappen bør ha en tekst som beskriver hva som skjules. Om det er tydelig fra sammenhengen hva knappen er til, for eksempel ved ekspandering av en tabellrad, kan den skjules visuelt."),"\n",l.createElement(n.h2,null,"Varianter"),"\n",l.createElement(n.p,null,"Som hovedregel skal ekspanderingen av innhold skje i retning nedover. Et unntak er dersom du har innhold i en bunnmeny som skal ekspanderes oppover. I de tilfellene kan ",l.createElement(n.code,null,"ExpandButton")," brukes med pila pekende i retningen innholdet kommer til å ekspandere, altså motsatt retning av det vanlige."),"\n",l.createElement(o,{src:"/assets/documentation/expand-button/expand-button-footer-expand-up.png",caption:"Et eksempel på en footer med innhold som kan ekspanderes. Øverst ser vi lukket tilstand, med pil pekende oppover. Under ser vi åpen tilstand, med pilen pekende nedover."}),"\n",l.createElement(n.h3,null,"Andre fonstørrelser"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"ExpandButton")," arver størrelsen sin fra omgivelsene. Om du ønsker kan du sette en annen fontstørrelse, enten med en egen klasse, eller med en av utility-klassene i Jøkul."),"\n",l.createElement(r,{title:"Ulike størrelser",component:h,knobs:b,codeExample:f}),"\n",l.createElement(n.h2,null,"Tilgjengelighet"),"\n",l.createElement(n.p,null,"Det er viktig å hjelpe skjermlesere med å forstå at det er en knapp som kommer til å påvirke annet innhold. Inspisér gjerne HTMLen som genereres av eksempelet og se hvilke attributter som settes, og hvilken verdi de har i åpen og lukket tilstand."),"\n",l.createElement(n.p,null,"På selve knappen ser du sannsynligvis:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.code,null,"id")),"\n",l.createElement(n.li,null,l.createElement(n.code,null,'aria-expanded="false"')," når lukket og ",l.createElement(n.code,null,'aria-expanded="true"')," når åpen (styres av ",l.createElement(n.code,null,"isExpanded"),"-propen)"),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"aria-controls")," med en ID som peker på innholdet som styres av knappen"),"\n"),"\n",l.createElement(n.p,null,"På innholdet som styres av knappen ser du sannsynligvis:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.code,null,"id")),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"aria-labelledby")," med en ID som peker tilbake på knappen"),"\n",l.createElement(n.li,null,l.createElement(n.code,null,'role="group"')),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"hidden")," hvis innholdet er skjult"),"\n"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"ExpandSection"),"-komponenten håndterer alt dette, men den plasserer alltid innholdet som ekspanderes direkte under knappen. Om du trenger en annen layout må du bruke ",l.createElement(n.code,null,"ExpandButton")," direkte, og sørge for å teste med skjermleser."))}var y=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(N,e)):N(e)};function _(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var w=t(72285),I=t(22756),S=t(95573),V=t(1634);const B=e=>{let{pageContext:n}=e;return l.createElement(I.p,{title:n.title})},C=e=>{let{location:n,data:t,pageContext:a,children:r}=e;const{frontmatter:o}=t.page,{types:s}=a;return l.createElement(V.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(S.M1,Object.assign({},o,{versions:a.versions})),l.createElement(S.w5,o),r,s&&l.createElement(w.l,{types:s}))};function D(e){return l.createElement(C,e,l.createElement(y,e))}},72285:function(e,n,t){t.d(n,{l:function(){return k}});var a=t(78217),l=t(41994),r=t(87505),o=t(70079),s=t(54656);const i=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),d=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},p=(e,n)=>{const{scrollLeft:t,scrollWidth:a}=e,{clientWidth:l}=n,r=t>0,o=a-t>l;n.classList.toggle("left-shadow",r),n.classList.toggle("right-shadow",o)},m=e=>{const n=e.target,t=n.parentElement;p(n,t)},u=e=>{let{props:n}=e;const t=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&p(n,e)}}))})),a=t.current.parentElement.parentElement;n.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=n,a.map((e=>{var n,t;return[e.name?i(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?i(e.type.name):""]})))})));var a},k=e=>{let{types:n}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const a=t.props?Object.values(t.props).filter(c):[],r=t.props?Object.values(t.props).filter(d):[],i=(e=>{var n,t,a,l,r,o;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(r=l.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return o.createElement(l.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},i&&o.createElement(s.dn,{className:"jkl-portal-code-block"},i),a.length>0&&o.createElement(u,{props:a}),r.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:r})))}))))}},1634:function(e,n,t){t.d(n,{M:function(){return i}});var a=t(26372),l=t.n(a),r=t(49597),o=t(70079),s=t(34044);const i=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:a}=(0,o.useContext)(s.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(r.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||i?0:.35},className:l()("jkl-portal__main",n),id:"innhold"},t)}},78217:function(e,n,t){t.d(n,{U:function(){return o}});var a=t(26372),l=t.n(a),r=t(70079);const o=e=>{let{className:n,density:t,...a}=e;return r.createElement("div",{"data-testid":"jkl-accordion",className:l()("jkl-accordion",n),"data-density":t,...a})}},41994:function(e,n,t){t.d(n,{Q:function(){return d}});var a=t(53484),l=t(3438),r=t(84490),o=t(26372),s=t.n(o),i=t(70079);const d=e=>{let{children:n,title:t,className:o,startExpanded:d=!1,onClick:c,...p}=e;const m=(0,l.M)("title"),u=(0,l.M)("content"),{0:k,1:E}=(0,i.useState)(d),[g]=(0,r.v)(k,{easing:"exit",timing:"expressive"});return i.createElement("div",{"data-testid":"jkl-accordion-item",...p,className:s()("jkl-accordion-item",o,{"jkl-accordion-item--expanded":k})},i.createElement("button",{id:m,className:"jkl-accordion-item__title",type:"button","aria-expanded":k,"aria-controls":u,onClick:e=>{const n=!k;E(n),c&&c(e,n)}},t,i.createElement(a.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})),i.createElement("div",{id:u,ref:g,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":m,hidden:!k},i.createElement("div",{className:"jkl-accordion-item__content"},n)))}},87505:function(e,n,t){t.d(n,{w:function(){return p}});var a=t(70079),l=t(41699),r=t(65174),o=t(6914),s=t(82546),i=t(39126),d=t(66169),c=t(94509);const p=(0,a.forwardRef)(((e,n)=>{let{caption:t,columns:p,emptyTableText:m,rows:u,verticalAlign:k,...E}=e;return a.createElement(l.i,{fullWidth:!0,...E,ref:n},t&&a.createElement(o.R,{srOnly:!0},t),a.createElement(i.s,null,a.createElement(c.S,null,p.map(((e,n)=>a.createElement(d.x,{key:n,density:"compact",bold:!0},e))))),a.createElement(r.R,null,0===u.length&&m&&a.createElement(c.S,null,a.createElement(s.p,{colSpan:p.length},m)),u.map(((e,n)=>a.createElement(c.S,{key:n},e.map(((e,n)=>a.createElement(s.p,{key:n,"data-th":p[n],verticalAlign:k},e))))))))}));p.displayName="DataTable"}}]);