"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9254],{49494:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return B},Head:function(){return M},default:function(){return V}});var l=n(47160),r=n(70079),a=n(56180),o=n(15522),i=n(33392),s=n(66596),c=n(39190),m=n(57579),u=n(84256),p=n(88905),d=n(80324),g=n.n(d);const E=r.createContext(null),v=()=>{const e=r.useContext(E);if(null==e)throw new Error("Popover komponenter må brukes innenfor en <Popover /> komponent");return e},k=e=>{let{children:t,...n}=e;const l=(e=>{let{open:t,onOpenChange:n,placement:l="bottom-start",strategy:a="absolute",modal:o=!0,offset:i=4,hoverOptions:s,focusOptions:c,clickOptions:d,roleOptions:g,dismissOptions:E}=e;const[v,k]=r.useState(t),f=null!=t?t:v,b=null!=n?n:k,h=(0,m.YF)({open:f,onOpenChange:b,placement:l,strategy:a,middleware:[(0,u.cv)(i),(0,u.RR)({padding:5,fallbackPlacements:["bottom","top"]}),(0,u.uY)({padding:12})],whileElementsMounted:p.Me}),y=h.context,j=(0,m.eS)(y,{enabled:!1,...d}),x=(0,m.XI)(y,{enabled:!1,...s}),N=(0,m.KK)(y,{enabled:!1,...c}),S=(0,m.bQ)(y,E),C=(0,m.qs)(y,g),O=(0,m.NI)([j,S,N,x,C]);return r.useMemo((()=>({open:f,onOpenChange:b,modal:o,...O,...h})),[f,b,o,O,h])})({...n});return r.createElement(E.Provider,{value:l},t)},f=r.forwardRef((function(e,t){let{children:n,asChild:l=!1,...a}=e;const{refs:o,getReferenceProps:i,open:s,onOpenChange:c}=v(),u=n.ref,p=(0,m.qq)([o.setReference,t,u]);return l&&r.isValidElement(n)?r.cloneElement(n,i({ref:p,...a,...n.props})):r.createElement("button",Object.assign({ref:p,onClick:()=>null==c?void 0:c(!s),"aria-expanded":s},i(a)),n)})),b=r.forwardRef((function(e,t){let{style:n,className:l,padding:a,...o}=e;const{context:i,modal:s,refs:c,open:u,floatingStyles:p,getFloatingProps:d}=v(),E=(0,m.qq)([c.setFloating,t]),{theme:k,density:f}=(e=>{if(!e)return{};const t=getComputedStyle(e);return{theme:parseInt(t.getPropertyValue("--jkl-background-color").replace("#",""),16)<8388607.5?"dark":"light",density:'"compact"'===t.getPropertyValue("--jkl-density")?"compact":"comfortable"}})(c.reference.current);return u?r.createElement(m.ll,null,r.createElement(m.wD,{context:i,modal:s},r.createElement("div",Object.assign({"data-theme":k,"data-layout-density":f,className:g()("jkl jkl-popover",l),ref:E,style:{...n,...p,"--popover-padding":"var(--jkl-spacing-"+a+")"}},d(o)),o.children))):null}));k.Trigger=f,k.Content=b;var h=k;const y={},j=e=>{let{children:t}=e;return r.createElement("section",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2em",lineHeight:"2",marginTop:"1em"}},t)},x=()=>r.createElement(o.m,null,r.createElement(i.t,{"aria-label":"tabs"},r.createElement(s.O,null,"Brev"),r.createElement(s.O,null,"SMS"),r.createElement(s.O,null,"Notat"),r.createElement(s.O,null,"Be om"),r.createElement(s.O,null,"Saksflyt")),r.createElement(c.x,null,r.createElement(j,null,r.createElement("div",null,r.createElement("p",null,"Melding om dødsfall"),r.createElement("p",null,"Politi"),r.createElement("p",null,"Bytte av forsikringstaker og betaler"),r.createElement("p",null,"Avbrutt svangerskap"),r.createElement("p",null,"Fritekstbrev med purring og mulighet for basis-/utvidede fullmakter"),r.createElement("p",null,"Fritekstbrev uten purring (venter på svar)"),r.createElement("p",null,"Statsforvalteren"),r.createElement("p",null,"Lege"),r.createElement("p",null,"Opplysninger fra tingrett/fullmakt fra etterlatte"),r.createElement("p",null,"Samboer"),r.createElement("p",null,"Testamente"),r.createElement("p",null,"Utbetalingsopplysninger utland"),r.createElement("p",null,"Varsel om svik"),r.createElement("p",null,"Lege-TestAuto")),r.createElement("div",null,r.createElement("p",null,"Utbetalingsbrev NSF barn"),r.createElement("p",null,"Fritekstbrev (venter ikke på svar)"),r.createElement("p",null,"Avslag samboervilkår/avbrutt svangerskap"),r.createElement("p",null,"Info til statsforvalteren"),r.createElement("p",null,"Innkreving"),r.createElement("p",null,"Utbetaling gruppeliv"),r.createElement("p",null,"Ingen dekninger"),r.createElement("p",null,"Avslag svik"),r.createElement("p",null,"Avslag annet")))),r.createElement(c.x,null,r.createElement(j,null,r.createElement("div",null,r.createElement("p",null,"SMS sendt om betaling"),r.createElement("p",null,"Bekreftelse på mottatt dokumentasjon"),r.createElement("p",null,"SMS om manglende dokumenter"),r.createElement("p",null,"Påminnelse om innsendelse av erklæring"),r.createElement("p",null,"Viktig informasjon om forsikringen din"),r.createElement("p",null,"Oppfølging av tidligere henvendelse"),r.createElement("p",null,"Statusoppdatering på saken din")),r.createElement("div",null,r.createElement("p",null,"SMS om saksbehandling"),r.createElement("p",null,"Bekreftelse på utbetaling"),r.createElement("p",null,"Varsel om forsinkelse"),r.createElement("p",null,"SMS om avslag på krav"),r.createElement("p",null,"Påminnelse om manglende betaling"),r.createElement("p",null,"SMS med saksnummer"),r.createElement("p",null,"Oppdatering om klageprosess")))),r.createElement(c.x,null,r.createElement(j,null,r.createElement("div",null,r.createElement("p",null,"Intern notat om saksbehandling"),r.createElement("p",null,"Vurdering av medisinsk rapport"),r.createElement("p",null,"Oppdatering om videre fremdrift"),r.createElement("p",null,"Gjennomgang av innsendte dokumenter"),r.createElement("p",null,"Notat om kontakt med kunde"),r.createElement("p",null,"Internt notat om mulig svik")),r.createElement("div",null,r.createElement("p",null,"Vurdering av klage"),r.createElement("p",null,"Notat om utbetaling"),r.createElement("p",null,"Gjennomgang av policydokument"),r.createElement("p",null,"Notat om interne møter"),r.createElement("p",null,"Sammenfatning av saksopplysninger"),r.createElement("p",null,"Intern kommunikasjon om sak")))),r.createElement(c.x,null,r.createElement(j,null,r.createElement("div",null,r.createElement("p",null,"Forespørsel om mer informasjon"),r.createElement("p",null,"Be om ny medisinsk vurdering"),r.createElement("p",null,"Etterspørsel etter manglende dokumentasjon"),r.createElement("p",null,"Tilleggsinformasjon fra kunde"),r.createElement("p",null,"Be om bekreftelse på dekning")),r.createElement("div",null,r.createElement("p",null,"Oppfølging av tidligere forespørsel"),r.createElement("p",null,"Be om spesifisering av skade"),r.createElement("p",null,"Forespørsel om dokumentasjon på utgifter"),r.createElement("p",null,"Avklaring av vilkår"),r.createElement("p",null,"Etterspørsel etter legeerklæring")))),r.createElement(c.x,null,r.createElement(j,null,r.createElement("div",null,r.createElement("p",null,"Sak opprettet"),r.createElement("p",null,"Sak under behandling"),r.createElement("p",null,"Sak avsluttet"),r.createElement("p",null,"Sak eskalert"),r.createElement("p",null,"Venter på tilbakemelding"),r.createElement("p",null,"Saksflyt oppdatert")),r.createElement("div",null,r.createElement("p",null,"Sak på vent"),r.createElement("p",null,"Sak gjenåpnet"),r.createElement("p",null,"Sak avsluttet uten utbetaling"),r.createElement("p",null,"Sak overført til juridisk"),r.createElement("p",null,"Sak sendt til ekstern vurdering"),r.createElement("p",null,"Intern saksvurdering pågår"))))),N=()=>{const[e,t]=r.useState(!1);return r.createElement(h,{open:e,onOpenChange:t,roleOptions:{role:"menu"}},r.createElement(h.Trigger,{onClick:()=>null==t?void 0:t(!e),"aria-expanded":e,asChild:!0},r.createElement(a.zx,{variant:"primary"},"Åpne popover")),r.createElement(h.Content,{padding:24},r.createElement(x,null)))},S=()=>r.createElement(h,{roleOptions:{role:"menu"}},r.createElement(h.Trigger,null,"Åpne popover"),r.createElement(h.Content,{padding:24},r.createElement(x,null))),C=()=>'\nconst [open, setOpen] = React.useState(false);\n\n<Popover\n    open={open}\n    onOpenChange={setOpen}\n    roleOptions={{\n        role: "menu",\n    }}\n>\n    <Popover.Trigger onClick={() => setOpen?.(!open)} aria-expanded={open} asChild>\n        <Button variant="primary">Åpne popover</Button>\n    </Popover.Trigger>\n    <Popover.Content padding={24}>\n        <ExampleTabPanel />\n    </Popover.Content>\n</Popover>\n',O=()=>'\n<Popover\n    roleOptions={{\n        role: "menu",\n    }}\n>\n    <Popover.Trigger>Åpne popover</Popover.Trigger>\n    <Popover.Content padding={24}>\n        <ExampleTabPanel />\n    </Popover.Content>\n</Popover>\n';function P(e){const t=Object.assign({p:"p",h2:"h2",a:"a",pre:"pre",code:"code"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:a}=t;return a||w("ComponentExample",!0),n||w("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Popover brukes til å vise innhold i et flytende vindu og legger seg over alle andre elementer i grensesnittet. Man\nstyrer selv hvordan den vises og interageres med, ofte ved å klikke på et element som en knapp.")),"\n",r.createElement(t.h2,null,"Kontrollert vs Ukontrollert"),"\n",r.createElement(t.p,null,"En kontrollert Popover-komponent gir deg full kontroll over åpning og lukking ved å tillate ekstern håndtering av tilstandene."),"\n",r.createElement(a,{title:"Kontrollert Popover",component:N,codeExample:C,knobs:y}),"\n",r.createElement(t.p,null,"En ukontrollert Popover-komponent håndterer tilstandene selv og åpner og lukker seg basert på interaksjon med trigger-elementet."),"\n",r.createElement(a,{title:"Ukontrollert Popover",component:S,codeExample:O,knobs:y}),"\n",r.createElement(t.h2,null,"Tilgjengelighet"),"\n",r.createElement(t.p,null,"Popover-komponenten tar i bruk useRole-hooken fra ",r.createElement(t.a,{href:"https://floating-ui.com/docs/userole"},"Floating UI")," som automatisk tildeler nødvendige ARIA-roller til trigger- og det flytende elementet."),"\n",r.createElement(t.p,null,'Som default er role satt til "dialog". Er innholdet i Popover foreksempel tiltenkt en meny, bør role-proppen i roleOptions settes til "menu".'),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-tsx"},'<Popover roleOptions={{ role: "menu" }}>{/* Popover innhold */}</Popover>\n')))}var _=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(P,e)):P(e)};function w(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var T=n(72285),R=n(22756),I=n(95573),A=n(1634);const M=e=>{let{pageContext:t}=e;return r.createElement(R.p,{title:t.title})},B=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:o}=n.page,{types:i}=l;return r.createElement(A.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(I.M1,Object.assign({},o,{versions:l.versions})),r.createElement(I.w5,o),a,i&&r.createElement(T.l,{types:i}))};function V(e){return r.createElement(B,e,r.createElement(_,e))}},56180:function(e,t,n){n.d(t,{C9:function(){return u},KM:function(){return c},kq:function(){return m},zx:function(){return s}});var l=n(41886),r=n(80532),a=n(26372),o=n.n(a),i=n(70079);const s=i.forwardRef((function(e,t){const{as:n="button",children:a,className:s,density:c,onTouchStart:m,loader:u,iconLeft:p,iconRight:d,variant:g="secondary",...E}=e,v=n,k=(0,i.useCallback)((e=>{m&&m(e);const t=e.target;if(t&&e.targetTouches.length){const n=e.targetTouches[0].clientX-t.getBoundingClientRect().x,l=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",n.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",l.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((()=>{t.classList.remove("jkl-button--pressed"),t.style.removeProperty("--jkl-touch-xcoord"),t.style.removeProperty("--jkl-touch-ycoord")}),400)}}),[m]),f=(0,r.c)(null==u?void 0:u.showLoader);return i.createElement(v,Object.assign({},f,{"data-density":c,className:o()("jkl-button","jkl-button--"+g,s,{"jkl-button--icon-left":p,"jkl-button--icon-right":d}),disabled:"button"===n?null==u?void 0:u.showLoader:void 0,onTouchStart:k},E,{ref:t}),i.createElement("div",{className:"jkl-button__content"},i.createElement("div",{className:o()("jkl-button__slider",{"jkl-button__slider--show-loader":!(null==u||!u.showLoader)})},p&&i.createElement("span",{className:"jkl-button__icon"},p),i.createElement("span",{className:"jkl-button__children"},a),d&&i.createElement("span",{className:"jkl-button__icon"},d),u&&i.createElement("div",{className:"jkl-button__loader"},i.createElement(l.a,{textDescription:u.textDescription,"aria-hidden":!u.showLoader})))))}));function c(e){const t={...e,variant:"primary"};return i.createElement(s,t)}function m(e){const t={...e,variant:"secondary"};return i.createElement(s,t)}function u(e){const t={...e,variant:"tertiary"};return i.createElement(s,t)}},66596:function(e,t,n){n.d(t,{O:function(){return o}});var l=n(26372),r=n.n(l),a=n(70079);const o=a.forwardRef(((e,t)=>{const n=r()("jkl-tab",e.className);return a.createElement("button",Object.assign({role:"tab",type:"button",ref:t},e,{className:n}))}));o.displayName="Tab"},33392:function(e,t,n){n.d(t,{t:function(){return i}});var l=n(26372),r=n.n(l),a=n(70079),o=n(72841);const i=e=>{let{children:t,className:n,...l}=e;const{activeIndex:i,setActiveIndex:s,tabIDs:c,tabPanelIDs:m,...u}=l,{density:p}=(0,o.g)(),{0:d,1:g}=(0,a.useState)(),{0:E,1:v}=(0,a.useState)(),k=(0,a.useRef)(null),f=(0,a.useRef)(null);(0,a.useEffect)((()=>{k.current&&g(k.current.getBoundingClientRect()),f.current&&v(f.current.getBoundingClientRect())}),[i,p]);const b=(0,a.useCallback)((e=>{if("ArrowLeft"===e.key){const l=e.currentTarget,r=e.currentTarget.previousSibling;var t,n;if(r)r.focus();else(null===(t=l.parentElement)||void 0===t||null===(n=t.lastChild)||void 0===n?void 0:n.previousSibling).focus()}if("ArrowRight"===e.key){const t=e.currentTarget,n=e.currentTarget.nextSibling;var l;if(n&&"BUTTON"===n.nodeName)n.focus();else(null===(l=t.parentElement)||void 0===l?void 0:l.firstChild).focus()}}),[]);return a.createElement("div",Object.assign({role:"tablist",ref:k},u,{className:r()("jkl-tablist",n)}),a.Children.map(t,((e,t)=>{const n=i===t;return a.isValidElement(e)?a.cloneElement(e,{onKeyDown:b,tabIndex:n?void 0:-1,ref:n?f:void 0,onClick:()=>s(t),"aria-selected":n,"aria-controls":m[t],id:c[t]}):null})),a.createElement("span",{className:"jkl-tablist__indicator",style:{left:((null==E?void 0:E.left)||0)-((null==d?void 0:d.left)||0),bottom:-1,width:((null==E?void 0:E.width)||0)-("compact"===p?32:38)}}))}},39190:function(e,t,n){n.d(t,{x:function(){return o}});var l=n(26372),r=n.n(l),a=n(70079);const o=e=>{let{children:t,...n}=e;const l=r()("jkl-tabpanel",n.className);return a.createElement("div",Object.assign({role:"tabpanel"},n,{className:l}),t)}},15522:function(e,t,n){n.d(t,{m:function(){return m}});var l=n(15089),r=n(96820),a=n(26372),o=n.n(a),i=n(21821),s=n(70079),c=n(72841);const m=e=>{let{onChange:t,defaultTab:n,density:a,...m}=e;const{0:u,1:p}=(0,s.useState)(null!=n?n:0),d=(0,r.z)(u);(0,s.useEffect)((()=>{void 0!==d&&d!==u&&t&&t(u)}),[t,d,u]);const{0:g,1:E}=(0,s.useState)([]),{0:v,1:k}=(0,s.useState)([]),f=(0,s.useCallback)((()=>{const e=s.Children.toArray(m.children)[0];s.isValidElement(e)&&s.Children.forEach(e.props.children,(e=>{s.isValidElement(e)&&(E((e=>[].concat((0,l.Z)(e),["jkl-tab-"+(0,i.x0)(8)]))),k((e=>[].concat((0,l.Z)(e),["jkl-tabpanel-"+(0,i.x0)(8)]))))}))}),[m.children]);return(0,s.useEffect)((()=>{f()}),[f]),s.createElement(c.c,{state:{density:a}},s.createElement("div",Object.assign({},m,{className:o()("jkl-tabs",m.className),"data-density":a}),(()=>{const e=s.Children.toArray(m.children)[0];if(s.isValidElement(e))return s.cloneElement(e,{activeIndex:u,setActiveIndex:p,tabIDs:g,tabPanelIDs:v})})(),s.Children.map(m.children,((e,t)=>{if(!s.isValidElement(e)||0===t)return;const n=t-1;return n===u?s.cloneElement(e,{"aria-labelledby":g[n],id:v[n]}):null}))))}},72841:function(e,t,n){n.d(t,{c:function(){return o},g:function(){return a}});var l=n(70079);const r=(0,l.createContext)({density:void 0}),a=()=>(0,l.useContext)(r),o=e=>{let{state:t,children:n}=e;return l.createElement(r.Provider,{value:t},n)}},72285:function(e,t,n){n.d(t,{l:function(){return g}});var l=n(58820),r=n(63571),a=n(87505),o=n(70079),i=n(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,o=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},p=e=>{const t=e.target,n=t.parentElement;u(t,n)},d=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},g=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,l,r,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),l.length>0&&o.createElement(d,{props:l}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(d,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var l=n(26372),r=n.n(l),a=n(49597),o=n(70079),i=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var l=n(35250),r=n(26372),a=n.n(r);const o=e=>{let{className:t,density:n,id:r,...o}=e;return(0,l.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:r,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return c}});var l=n(35250),r=n(68998),a=n(1386),o=n(26372),i=n.n(o),s=n(70079);const c=e=>{let{children:t,title:n,className:o,startExpanded:c=!1,onClick:m,id:u,...p}=e;const[d,g]=(0,s.useState)(c),[E]=(0,s.useState)((()=>c)),{detailsRef:v,summaryRef:k,contentRef:f,onSummaryClick:b}=(0,a.E)({onOpenChange:(e,t)=>{g(e),m&&m(t,e)},isExpanded:E});return(0,l.jsxs)("details",{"data-testid":"jkl-accordion-item",...p,className:i()("jkl-accordion-item",o),ref:v,id:u,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:b,ref:k,children:[n,(0,l.jsx)(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!d,bold:d})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:f,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return u}});var l=n(70079),r=n(41699),a=n(65174),o=n(6914),i=n(82546),s=n(39126),c=n(66169),m=n(94509);const u=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:p,rows:d,verticalAlign:g,...E}=e;return l.createElement(r.i,{fullWidth:!0,...E,ref:t},n&&l.createElement(o.R,{srOnly:!0},n),l.createElement(s.s,null,l.createElement(m.S,null,u.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===d.length&&p&&l.createElement(m.S,null,l.createElement(i.p,{colSpan:u.length},p)),d.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":u[t],verticalAlign:g},e))))))))}));u.displayName="DataTable"}}]);