"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3219],{36339:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return R},Head:function(){return P},default:function(){return A}});var a=t(64717),l=t(92379);var r=t(27685),o=t(99767),s=t(37557),i=t(42054),d=t(80324),c=t.n(d);const p=["as","className","children","density","expandDirection","isExpanded","hideLabel"],m=l.forwardRef(((e,n)=>{let{as:t="button",className:a,children:r,density:d,expandDirection:m="down",isExpanded:u=!1,hideLabel:k=!1}=e,E=(0,o.Z)(e,p);const g=k?s.u:l.Fragment,v="down"===m?!u:u,j=t,b="button"===j?"button":void 0;return l.createElement(j,Object.assign({"aria-expanded":u,"data-testid":"jkl-expand-button",type:b,className:c()("jkl-expand-button",a,{"jkl-expand-button--expanded":u,"jkl-expand-button--icon-only":!r})},E,{"data-density":d,ref:n}),r&&l.createElement(g,null,l.createElement("span",{className:"jkl-expand-button__text"},r)),l.createElement(i.K,{className:"jkl-expand-button__arrow",pointingDown:v,bold:u}))}));m.displayName="ExpandButton";const u=(0,l.forwardRef)(((e,n)=>{let t=Object.assign({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return l.createElement("div",Object.assign({ref:n,className:"jkl-expand-section__content-wrapper",role:"group"},t),l.createElement("div",{className:"jkl-expand-section__content"},l.createElement("p",{className:"jkl-heading-4 jkl-spacing-xl--bottom"},"Skjult seksjon"),l.createElement("p",{className:"jkl-spacing-l--bottom"},"For at dette skal fungere på en god måte må man huske på"," ",l.createElement("code",null,"aria-controls"),". Denne komponenten kan være nyttig i for eksempel ekspanderbare tabellrader.")))}));u.displayName="ExpandSection";const k=e=>{let{choiceValues:n}=e;const{0:t,1:a}=(0,l.useState)(!1),[o]=(0,r.v)(t),s="jkl-example-expand-button",i="jkl-example-expand-content",d="Oppover"===(null==n?void 0:n["Ekspander i retning (kun frittstående)"])?"up":"down";return l.createElement("div",null,l.createElement("p",{className:"jkl-spacing-l--bottom"},"Noen ganger trenger vi å gi brukerne som ønsker det litt mer informasjon."),"up"===d&&l.createElement(l.Fragment,null,l.createElement(u,{ref:o,"aria-labelledby":s,id:i,hidden:!t}),l.createElement("p",{className:"jkl-spacing-l--bottom"},"Jeg er ikke styrt av ExpandButton. Jeg illustrerer muligheten for å kontrollere deler av siden som ikke er direkte under ExpandButton.")),l.createElement(m,{"aria-controls":i,id:s,className:"jkl-spacing-l--bottom",expandDirection:d,isExpanded:t,onClick:()=>{a(!t)}},t?"Skjul seksjonen igjen":"Vis den skjulte seksjonen"),"down"===d&&l.createElement(l.Fragment,null,l.createElement("p",{className:"jkl-spacing-l--bottom"},"Jeg er ikke styrt av ExpandButton. Jeg illustrerer muligheten for å kontrollere deler av siden som ikke er direkte under ExpandButton."),l.createElement(u,{ref:o,"aria-labelledby":s,id:i,hidden:!t})))};const E=e=>{let{choiceValues:n}=e;const t="Oppover"===(null==n?void 0:n["Ekspander i retning (kun frittstående)"])?"up":"down",a='\n        <div\n            ref={elementRef}\n            aria-labelledby={expandButtonId}\n            id={expandedContentId}\n            role="group"\n            hidden={!isExpanded}\n            className="jkl-expand-section__content-wrapper"\n        >\n            <div className="jkl-expand-section__content">\n                <p className="jkl-heading-4 jkl-spacing-xl--bottom">Skjult seksjon</p>\n                <p className="jkl-spacing-l--bottom">\n                    For at dette skal fungere på en god måte må man huske på <code>aria-controls</code>. Denne\n                    komponenten kan være nyttig i for eksempel ekspanderbare tabellrader.\n                </p>\n            </div>\n        </div>\n';return'\nconst [isExpanded, setIsExpanded] = useState(false);\nconst [elementRef] = useAnimatedHeight<HTMLDivElement>(isExpanded);\nconst expandButtonId = "jkl-example-expand-button";\nconst expandedContentId = "jkl-example-expand-content";\n\nconst onClick = () => {\n    setIsExpanded(!isExpanded);\n};\n\n\nreturn (\n    <div>\n        <p className="jkl-spacing-l--bottom">\n            Noen ganger trenger vi å gi brukerne som ønsker det litt mer informasjon.\n        </p>\n        '+("up"===t?a+'\n        <p className="jkl-spacing-l--bottom">\n            Jeg er ikke styrt av ExpandButton. Jeg illustrerer muligheten for å kontrollere deler av siden som ikke\n            er direkte under ExpandButton.\n        </p>\n        ':"")+'\n        <ExpandButton\n            aria-controls={expandedContentId}\n            id={expandButtonId}\n            className="jkl-spacing-l--bottom"\n            expandDirection={expandDirection}\n            isExpanded={isExpanded}\n            onClick={onClick}\n        >\n            {isExpanded ? "Skjul seksjonen igjen" : "Vis den skjulte seksjonen"}\n        </ExpandButton>\n        '+("down"===t?'\n        <p className="jkl-spacing-l--bottom">\n            Jeg er ikke styrt av ExpandButton. Jeg illustrerer muligheten for å kontrollere deler av siden som ikke\n            er direkte under ExpandButton.\n        </p>\n        '+a:"")+"\n    </div>\n);\n    "};var g=t(95020);const v=["children","className","expandButtonProps","isExpanded","density","onClick","title","useAnimatedHeightOptions"],j=e=>{let{children:n,className:t,expandButtonProps:a,isExpanded:r=!1,density:s,onClick:i,title:d}=e,p=(0,o.Z)(e,v);const{0:u,1:k}=(0,l.useState)(r);(0,l.useEffect)((()=>{k(r)}),[r]);const{detailsRef:E,summaryRef:j,contentRef:b,onSummaryClick:x}=(0,g.E)({onOpenChange:(e,n)=>{k(e),i&&i(n,e)},isExpanded:r});return l.createElement("details",Object.assign({"data-testid":"jkl-expand-section",className:c()("jkl-expand-section",t)},p,{ref:E}),l.createElement(m,Object.assign({as:"summary"},a,{density:s,isExpanded:u,onClick:x,ref:j}),d),l.createElement("div",{"data-testid":"jkl-expand-section__content-wrapper",className:"jkl-expand-section__content-wrapper",ref:b},l.createElement("div",{className:"jkl-expand-section__content"},n)))},b=()=>{const{0:e,1:n}=(0,l.useState)(!1);return l.createElement("div",null,l.createElement("p",{className:"jkl-spacing-l--bottom"},"Noen ganger trenger vi å gi brukerne som ønsker det litt mer informasjon."),l.createElement(j,{title:e?"Skjul seksjonen igjen":"Vis den skjulte seksjonen",onClick:(e,t)=>{n(t)}},l.createElement("p",{className:"jkl-heading-4 jkl-spacing-xl--bottom"},"Skjult seksjon"),l.createElement("p",{className:"jkl-spacing-l--bottom"},"Her kommer det masse informasjon som er relevant, men ikke så relevant at vi alltid vil vise det."),l.createElement("p",{className:"jkl-spacing-l--bottom"},"Vi kunne kanskje brukt en Accordion, men vi har ikke"," ",l.createElement("em",null,"flere")," ting vi vil strukturere på denne måten. Det ser litt rart ut med ett AccordionItem, så da bruker vi heller en ExpandButton")))};const x={choiceProps:[{name:"Innhold",values:["Integrert","Frittstående"],defaultValue:0},{name:"Ekspander i retning (kun frittstående)",values:["Nedover","Oppover"],defaultValue:0}]},f=e=>{let{boolValues:n,choiceValues:t}=e;const a="Frittstående"===(null==t?void 0:t.Innhold);let r=b;return a&&(r=k),l.createElement(r,{boolValues:n,choiceValues:t})};const h=e=>{let{boolValues:n,choiceValues:t}=e;return"Frittstående"===(null==t?void 0:t.Innhold)?E({boolValues:n,choiceValues:t}):'\nconst [isExpanded, setIsExpanded] = useState(false);\n\nreturn (\n    <ExpandSection\n        title={isExpanded ? "Skjul seksjonen igjen" : "Vis den skjulte seksjonen"}\n        onClick={(e, expanded) => {\n            setIsExpanded(expanded);\n        }}\n    >\n        <p className="jkl-heading-4 jkl-spacing-xl--bottom">Skjult seksjon</p>\n        <p className="jkl-spacing-l--bottom">\n            Her kommer det masse informasjon som er relevant, men ikke så relevant at vi alltid vil vise\n            det.\n        </p>\n        <p className="jkl-spacing-l--bottom">\n            Vi kunne kanskje brukt en Accordion, men vi har ikke <em>flere</em> ting vi vil strukturere på\n            denne måten. Det ser litt rart ut med ett AccordionItem, så da bruker vi heller en ExpandButton\n        </p>\n    </ExpandSection>\n);\n'},y={choiceProps:[{name:"Variant",values:["heading-3","heading-2","heading-1"],defaultValue:1}]},N=e=>{let{choiceValues:n}=e;const{0:t,1:a}=(0,l.useState)(!1),[o]=(0,r.v)(t),s="jkl-example-expand-button-2",i="jkl-example-expand-content-2";return l.createElement("div",null,l.createElement(m,{"aria-controls":i,id:s,className:"jkl-spacing-l--bottom "+(null!=n&&n.Variant?"jkl-"+(null==n?void 0:n.Variant):""),expandDirection:"down",isExpanded:t,onClick:()=>{a(!t)}},t?"Skjul seksjonen igjen":"Vis den skjulte seksjonen"),l.createElement("div",{ref:o,className:"jkl-expand-section__content-wrapper",role:"group","aria-labelledby":s,id:i,hidden:!t},l.createElement("div",{className:"jkl-expand-section__content"},l.createElement("p",{className:"jkl-heading-4 jkl-spacing-xl--bottom"},"Skjult seksjon"),l.createElement("p",{className:"jkl-spacing-l--bottom"},"For at dette skal fungere på en god måte må man huske på"," ",l.createElement("code",null,"aria-controls"),". Denne komponenten kan være nyttig i for eksempel ekspanderbare tabellrader."))))},_=e=>{let{choiceValues:n}=e;return'const [isExpanded, setIsExpanded] = useState(false);\nconst [elementRef] = useAnimatedHeight<HTMLDivElement>(isExpanded);\nconst expandButtonId = "jkl-example-expand-button-2";\nconst expandedContentId = "jkl-example-expand-content-2";\n\nconst onClick = () => {\n  setIsExpanded(!isExpanded);\n};\n\nreturn (\n  <div>\n    <ExpandButton\n      aria-controls={expandedContentId}\n      id={expandButtonId}\n      className={`jkl-spacing-l--bottom '+(null!=n&&n.Variant?"jkl-"+(null==n?void 0:n.Variant):"")+'`}\n      expandDirection="down"\n      isExpanded={isExpanded}\n      onClick={onClick}\n    >\n      {isExpanded ? "Skjul seksjonen igjen" : "Vis den skjulte seksjonen"}\n    </ExpandButton>\n    <div\n      ref={elementRef}\n      className="jkl-expand-section__content-wrapper"\n      role="group"\n      aria-labelledby={expandButtonId}\n      id={expandedContentId}\n      hidden={!isExpanded}\n    >\n      <div className="jkl-expand-section__content">\n        <p className="jkl-heading-4 jkl-spacing-xl--bottom">Skjult seksjon</p>\n        <p className="jkl-spacing-l--bottom">\n          For at dette skal fungere på en god måte må man huske på <code>aria-controls</code>. Denne\n          komponenten kan være nyttig i for eksempel ekspanderbare tabellrader.\n        </p>\n      </div>\n    </div>\n  </div>\n);'};function w(e){const n=Object.assign({p:"p",a:"a",h2:"h2",code:"code",h3:"h3",ul:"ul",li:"li"},(0,a.ah)(),e.components),{Ingress:t,ComponentExample:r,PortalImage:o}=n;return r||I("ComponentExample",!0),t||I("Ingress",!0),o||I("PortalImage",!0),l.createElement(l.Fragment,null,l.createElement(t,null,l.createElement(n.p,null,"Med en ExpandButton kan vi presentere mye innhold på liten plass. Knappen\nkan brukes frittstående, og styre ekspandering av innhold som ikke er\ndirekte under komponenten.")),"\n",l.createElement(r,{title:"ExpandButton",component:f,knobs:x,codeExample:h}),"\n",l.createElement(n.p,null,"Denne komponenten skal ikke brukes i en liste under hverandre. Om du har flere seksjoner med innhold du vil at skal vises og skjules uavhengig av hverandre bruker du en ",l.createElement(n.a,{href:"/preview/4641-docker-image/komponenter/accordion"},"Accordion"),"."),"\n",l.createElement(n.p,null,"Viktig informasjon bør alltid ligge synlig, ikke skjult bak en ExpandButton."),"\n",l.createElement(n.p,null,"Knappen bør ha en tekst som beskriver hva som skjules. Om det er tydelig fra sammenhengen hva knappen er til, for eksempel ved ekspandering av en tabellrad, kan den skjules visuelt."),"\n",l.createElement(n.h2,null,"Varianter"),"\n",l.createElement(n.p,null,"Som hovedregel skal ekspanderingen av innhold skje i retning nedover. Et unntak er dersom du har innhold i en bunnmeny som skal ekspanderes oppover. I de tilfellene kan ",l.createElement(n.code,null,"ExpandButton")," brukes med pila pekende i retningen innholdet kommer til å ekspandere, altså motsatt retning av det vanlige."),"\n",l.createElement(o,{src:"/assets/documentation/expand-button/expand-button-footer-expand-up.png",caption:"Et eksempel på en footer med innhold som kan ekspanderes. Øverst ser vi lukket tilstand, med pil pekende oppover. Under ser vi åpen tilstand, med pilen pekende nedover."}),"\n",l.createElement(n.h3,null,"Andre fonstørrelser"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"ExpandButton")," arver størrelsen sin fra omgivelsene. Om du ønsker kan du sette en annen fontstørrelse, enten med en egen klasse, eller med en av utility-klassene i Jøkul."),"\n",l.createElement(r,{title:"Ulike størrelser",component:N,knobs:y,codeExample:_}),"\n",l.createElement(n.h2,null,"Tilgjengelighet"),"\n",l.createElement(n.p,null,"Det er viktig å hjelpe skjermlesere med å forstå at det er en knapp som kommer til å påvirke annet innhold. Inspisér gjerne HTMLen som genereres av eksempelet og se hvilke attributter som settes, og hvilken verdi de har i åpen og lukket tilstand."),"\n",l.createElement(n.p,null,"På selve knappen ser du sannsynligvis:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.code,null,"id")),"\n",l.createElement(n.li,null,l.createElement(n.code,null,'aria-expanded="false"')," når lukket og ",l.createElement(n.code,null,'aria-expanded="true"')," når åpen (styres av ",l.createElement(n.code,null,"isExpanded"),"-propen)"),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"aria-controls")," med en ID som peker på innholdet som styres av knappen"),"\n"),"\n",l.createElement(n.p,null,"På innholdet som styres av knappen ser du sannsynligvis:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.code,null,"id")),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"aria-labelledby")," med en ID som peker tilbake på knappen"),"\n",l.createElement(n.li,null,l.createElement(n.code,null,'role="group"')),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"hidden")," hvis innholdet er skjult"),"\n"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"ExpandSection"),"-komponenten håndterer alt dette, men den plasserer alltid innholdet som ekspanderes direkte under knappen. Om du trenger en annen layout må du bruke ",l.createElement(n.code,null,"ExpandButton")," direkte, og sørge for å teste med skjermleser."))}var O=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(w,e)):w(e)};function I(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var S=t(75482),C=t(96036),B=t(59001),V=t(65458),D=t(79379);const P=e=>{let{pageContext:n}=e;return l.createElement(C.p,{title:n.title})},R=e=>{let{location:n,data:t,pageContext:a,children:r}=e;const{frontmatter:o}=t.page,{types:s}=a;return l.createElement(D.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(V.M1,Object.assign({},o,{versions:a.versions})),n.pathname.includes("komponenter")&&l.createElement(B.c,{variant:"komponent",component:o.title}),l.createElement(V.w5,o),r,s&&l.createElement(S.l,{types:s}))};function A(e){return l.createElement(R,e,l.createElement(O,e))}},75482:function(e,n,t){t.d(n,{l:function(){return k}});var a=t(96845),l=t(41162),r=t(74797),o=t(92379),s=t(25329);const i=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),d=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},p=(e,n)=>{const{scrollLeft:t,scrollWidth:a}=e,{clientWidth:l}=n,r=t>0,o=a-t>l;n.classList.toggle("left-shadow",r),n.classList.toggle("right-shadow",o)},m=e=>{const n=e.target,t=n.parentElement;p(n,t)},u=e=>{let{props:n}=e;const t=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&p(n,e)}}))})),a=t.current.parentElement.parentElement;n.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=n,a.map((e=>{var n,t;return[e.name?i(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?i(e.type.name):""]})))})));var a},k=e=>{let{types:n}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const a=t.props?Object.values(t.props).filter(c):[],r=t.props?Object.values(t.props).filter(d):[],i=(e=>{var n,t,a,l,r,o;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(r=l.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return o.createElement(l.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},i&&o.createElement(s.dn,{className:"jkl-portal-code-block"},i),a.length>0&&o.createElement(u,{props:a}),r.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:r})))}))))}},59001:function(e,n,t){t.d(n,{c:function(){return s}});var a=t(48467),l=t(58990),r=t(92379),o=t(25329);const s=e=>{let{variant:n,component:t}=e;return r.createElement("section",{className:"suggestion-block"},r.createElement("div",{className:"suggestion-block__content"},r.createElement(l.U,null),r.createElement(o.nv,null,i[n].text)),r.createElement(a.r,{href:i[n].link+"+<"+t+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},i={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,n,t){t.d(n,{M:function(){return i}});var a=t(80324),l=t.n(a),r=t(24157),o=t(92379),s=t(69215);const i=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:a}=(0,o.useContext)(s.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(r.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||i?0:.35},className:l()("jkl-portal__main",n),id:"innhold"},t)}},96845:function(e,n,t){t.d(n,{U:function(){return i}});var a=t(99767),l=t(651),r=t(80324),o=t.n(r);const s=["className","density","id"],i=e=>{let{className:n,density:t,id:r}=e,i=(0,a.Z)(e,s);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",n),"data-density":t,id:r},i))}},41162:function(e,n,t){t.d(n,{Q:function(){return p}});var a=t(99767),l=t(651),r=t(42054),o=t(95020),s=t(80324),i=t.n(s),d=t(92379);const c=["children","title","className","startExpanded","onClick","id"],p=e=>{let{children:n,title:t,className:s,startExpanded:p=!1,onClick:m,id:u}=e,k=(0,a.Z)(e,c);const[E,g]=(0,d.useState)(p),[v]=(0,d.useState)((()=>p)),{detailsRef:j,summaryRef:b,contentRef:x,onSummaryClick:f}=(0,o.E)({onOpenChange:(e,n)=>{g(e),m&&m(n,e)},isExpanded:v});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:i()("jkl-accordion-item",s),ref:j,id:u,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:f,ref:b,children:[t,(0,l.jsx)(r.K,{className:"jkl-accordion-item__arrow",pointingDown:!E,bold:E})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:x,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]}))}},58990:function(e,n,t){t.d(n,{U:function(){return c}});var a=t(92379),l=t(55650),r=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const c=e=>a.createElement(l.J,((e,n)=>{for(var t in n||(n={}))s.call(n,t)&&d(e,t,n[t]);if(o)for(var t of o(n))i.call(n,t)&&d(e,t,n[t]);return e})({},e),"");c.displayName="QuestionIcon"},74797:function(e,n,t){t.d(n,{w:function(){return j}});var a=t(92379),l=t(94207),r=t(49309),o=t(36774),s=t(64081),i=t(64483),d=t(42104),c=t(98746),p=Object.defineProperty,m=Object.defineProperties,u=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,n,t)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const j=(0,a.forwardRef)(((e,n)=>{var t,p=e,{caption:j,columns:b,emptyTableText:x,rows:f,verticalAlign:h}=p,y=((e,n)=>{var t={};for(var a in e)E.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&k)for(var a of k(e))n.indexOf(a)<0&&g.call(e,a)&&(t[a]=e[a]);return t})(p,["caption","columns","emptyTableText","rows","verticalAlign"]);return a.createElement(l.i,(t=((e,n)=>{for(var t in n||(n={}))E.call(n,t)&&v(e,t,n[t]);if(k)for(var t of k(n))g.call(n,t)&&v(e,t,n[t]);return e})({fullWidth:!0},y),m(t,u({ref:n}))),j&&a.createElement(o.R,{srOnly:!0},j),a.createElement(i.s,null,a.createElement(c.S,null,b.map(((e,n)=>a.createElement(d.x,{key:n,density:"compact",bold:!0},e))))),a.createElement(r.R,null,0===f.length&&x&&a.createElement(c.S,null,a.createElement(s.p,{colSpan:b.length},x)),f.map(((e,n)=>a.createElement(c.S,{key:n},e.map(((e,n)=>a.createElement(s.p,{key:n,"data-th":b[n],verticalAlign:h},e))))))))}));j.displayName="DataTable"}}]);