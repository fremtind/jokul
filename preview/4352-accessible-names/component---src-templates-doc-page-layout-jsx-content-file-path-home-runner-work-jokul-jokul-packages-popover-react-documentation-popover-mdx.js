"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9254],{99428:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return V},Head:function(){return F},default:function(){return M}});var l=n(47160),r=n(70079),a=n(56180),o=n(15522),i=n(33392),s=n(66596),c=n(39190),u=n(57579),m=n(84256),p=n(88905),d=n(17050),g=n(80324),v=n.n(g);const E=r.createContext(null),f=()=>{const e=r.useContext(E);if(null==e)throw new Error("Popover komponenter må brukes innenfor en <Popover /> komponent");return e},k=e=>{let{children:t,...n}=e;const l=(e=>{let{open:t,onOpenChange:n,placement:l="bottom-start",strategy:a="absolute",modal:o=!0,offset:i=4,positionReference:s,hoverOptions:c,focusOptions:d,clickOptions:g,roleOptions:v,dismissOptions:E}=e;const[f,k]=r.useState(t),b=null!=t?t:f,h=null!=n?n:k,y=(0,u.YF)({open:b,onOpenChange:h,placement:l,strategy:a,middleware:[(0,m.cv)(i),(0,m.RR)({padding:5}),(0,m.uY)({padding:12})],whileElementsMounted:p.Me}),j=y.context,x=(0,u.eS)(j,{enabled:!1,...g}),S=(0,u.XI)(j,{enabled:!1,...c}),C=(0,u.KK)(j,{enabled:!1,...d}),N=(0,u.bQ)(j,E),P=(0,u.qs)(j,v),O=(0,u.NI)([x,N,C,S,P]);return r.useLayoutEffect((()=>{s&&y.refs.setPositionReference(null==s?void 0:s.current)}),[s,y.refs]),r.useMemo((()=>({open:b,onOpenChange:h,modal:o,...O,...y})),[b,h,o,O,y])})({...n});return r.createElement(E.Provider,{value:l},t)},b=r.forwardRef((function(e,t){let{children:n,asChild:l=!1,...a}=e;const{refs:o,getReferenceProps:i,open:s,onOpenChange:c}=f(),m=n.ref,p=(0,u.qq)([o.setReference,t,m]);return l&&r.isValidElement(n)?r.cloneElement(n,i({ref:p,...n.props,...a})):r.createElement("button",Object.assign({ref:p,onClick:()=>null==c?void 0:c(!s),"aria-expanded":s},i(a)),n)})),h=r.forwardRef((function(e,t){let{style:n,className:l,padding:a=0,initialFocus:o=0,returnFocus:i=!0,...s}=e;const{context:c,modal:m,refs:p,open:g,floatingStyles:E,getFloatingProps:k}=f(),b=(0,u.qq)([p.setFloating,t]),h=p.reference.current,{theme:y,density:j}=(e=>!!e&&"contextElement"in e)(h)?(0,d.H)(h.contextElement):(0,d.H)(h),x=r.useRef(null);return r.useEffect((()=>{var e;x.current=(null===(e=c.elements.domReference)||void 0===e?void 0:e.closest("[data-portal]"))||document.body}),[c.elements.domReference]),g?r.createElement(u.ll,{root:x.current},r.createElement(u.wD,{context:c,modal:m,initialFocus:o,returnFocus:i},r.createElement("div",Object.assign({"data-theme":y,"data-layout-density":j,className:v()("jkl jkl-popover",l),ref:b,style:{...n,...E,"--popover-padding":"var(--jkl-spacing-"+a+")"}},k(s)),s.children))):null}));k.Trigger=b,k.Content=h;var y=k;const j={},x=e=>{let{children:t}=e;return r.createElement("section",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2em",lineHeight:"2",marginTop:"1em"}},t)},S=()=>r.createElement(o.m,null,r.createElement(i.t,{"aria-label":"tabs"},r.createElement(s.O,null,"Brev"),r.createElement(s.O,null,"SMS"),r.createElement(s.O,null,"Notat"),r.createElement(s.O,null,"Be om"),r.createElement(s.O,null,"Saksflyt")),r.createElement(c.x,null,r.createElement(x,null,r.createElement("div",null,r.createElement("p",null,"Melding om dødsfall"),r.createElement("p",null,"Politi"),r.createElement("p",null,"Bytte av forsikringstaker og betaler"),r.createElement("p",null,"Avbrutt svangerskap"),r.createElement("p",null,"Fritekstbrev med purring og mulighet for basis-/utvidede fullmakter"),r.createElement("p",null,"Fritekstbrev uten purring (venter på svar)"),r.createElement("p",null,"Statsforvalteren"),r.createElement("p",null,"Lege"),r.createElement("p",null,"Opplysninger fra tingrett/fullmakt fra etterlatte"),r.createElement("p",null,"Samboer"),r.createElement("p",null,"Testamente"),r.createElement("p",null,"Utbetalingsopplysninger utland"),r.createElement("p",null,"Varsel om svik"),r.createElement("p",null,"Lege-TestAuto")),r.createElement("div",null,r.createElement("p",null,"Utbetalingsbrev NSF barn"),r.createElement("p",null,"Fritekstbrev (venter ikke på svar)"),r.createElement("p",null,"Avslag samboervilkår/avbrutt svangerskap"),r.createElement("p",null,"Info til statsforvalteren"),r.createElement("p",null,"Innkreving"),r.createElement("p",null,"Utbetaling gruppeliv"),r.createElement("p",null,"Ingen dekninger"),r.createElement("p",null,"Avslag svik"),r.createElement("p",null,"Avslag annet")))),r.createElement(c.x,null,r.createElement(x,null,r.createElement("div",null,r.createElement("p",null,"SMS sendt om betaling"),r.createElement("p",null,"Bekreftelse på mottatt dokumentasjon"),r.createElement("p",null,"SMS om manglende dokumenter"),r.createElement("p",null,"Påminnelse om innsendelse av erklæring"),r.createElement("p",null,"Viktig informasjon om forsikringen din"),r.createElement("p",null,"Oppfølging av tidligere henvendelse"),r.createElement("p",null,"Statusoppdatering på saken din")),r.createElement("div",null,r.createElement("p",null,"SMS om saksbehandling"),r.createElement("p",null,"Bekreftelse på utbetaling"),r.createElement("p",null,"Varsel om forsinkelse"),r.createElement("p",null,"SMS om avslag på krav"),r.createElement("p",null,"Påminnelse om manglende betaling"),r.createElement("p",null,"SMS med saksnummer"),r.createElement("p",null,"Oppdatering om klageprosess")))),r.createElement(c.x,null,r.createElement(x,null,r.createElement("div",null,r.createElement("p",null,"Intern notat om saksbehandling"),r.createElement("p",null,"Vurdering av medisinsk rapport"),r.createElement("p",null,"Oppdatering om videre fremdrift"),r.createElement("p",null,"Gjennomgang av innsendte dokumenter"),r.createElement("p",null,"Notat om kontakt med kunde"),r.createElement("p",null,"Internt notat om mulig svik")),r.createElement("div",null,r.createElement("p",null,"Vurdering av klage"),r.createElement("p",null,"Notat om utbetaling"),r.createElement("p",null,"Gjennomgang av policydokument"),r.createElement("p",null,"Notat om interne møter"),r.createElement("p",null,"Sammenfatning av saksopplysninger"),r.createElement("p",null,"Intern kommunikasjon om sak")))),r.createElement(c.x,null,r.createElement(x,null,r.createElement("div",null,r.createElement("p",null,"Forespørsel om mer informasjon"),r.createElement("p",null,"Be om ny medisinsk vurdering"),r.createElement("p",null,"Etterspørsel etter manglende dokumentasjon"),r.createElement("p",null,"Tilleggsinformasjon fra kunde"),r.createElement("p",null,"Be om bekreftelse på dekning")),r.createElement("div",null,r.createElement("p",null,"Oppfølging av tidligere forespørsel"),r.createElement("p",null,"Be om spesifisering av skade"),r.createElement("p",null,"Forespørsel om dokumentasjon på utgifter"),r.createElement("p",null,"Avklaring av vilkår"),r.createElement("p",null,"Etterspørsel etter legeerklæring")))),r.createElement(c.x,null,r.createElement(x,null,r.createElement("div",null,r.createElement("p",null,"Sak opprettet"),r.createElement("p",null,"Sak under behandling"),r.createElement("p",null,"Sak avsluttet"),r.createElement("p",null,"Sak eskalert"),r.createElement("p",null,"Venter på tilbakemelding"),r.createElement("p",null,"Saksflyt oppdatert")),r.createElement("div",null,r.createElement("p",null,"Sak på vent"),r.createElement("p",null,"Sak gjenåpnet"),r.createElement("p",null,"Sak avsluttet uten utbetaling"),r.createElement("p",null,"Sak overført til juridisk"),r.createElement("p",null,"Sak sendt til ekstern vurdering"),r.createElement("p",null,"Intern saksvurdering pågår"))))),C=()=>{const[e,t]=r.useState(!1);return r.createElement(y,{open:e,onOpenChange:t,roleOptions:{role:"menu"}},r.createElement(y.Trigger,{onClick:()=>null==t?void 0:t(!e),"aria-expanded":e,asChild:!0},r.createElement(a.zx,{variant:"primary"},"Åpne popover")),r.createElement(y.Content,{padding:24},r.createElement(S,null)))},N=()=>r.createElement(y,{roleOptions:{role:"menu"}},r.createElement(y.Trigger,null,"Åpne popover"),r.createElement(y.Content,{padding:24},r.createElement(S,null))),P=()=>'\nconst [open, setOpen] = React.useState(false);\n\n<Popover\n    open={open}\n    onOpenChange={setOpen}\n    roleOptions={{\n        role: "menu",\n    }}\n>\n    <Popover.Trigger onClick={() => setOpen?.(!open)} aria-expanded={open} asChild>\n        <Button variant="primary">Åpne popover</Button>\n    </Popover.Trigger>\n    <Popover.Content padding={24}>\n        <ExampleTabPanel />\n    </Popover.Content>\n</Popover>\n',O=()=>'\n<Popover\n    roleOptions={{\n        role: "menu",\n    }}\n>\n    <Popover.Trigger>Åpne popover</Popover.Trigger>\n    <Popover.Content padding={24}>\n        <ExampleTabPanel />\n    </Popover.Content>\n</Popover>\n';function w(e){const t=Object.assign({p:"p",h2:"h2",a:"a",pre:"pre",code:"code"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:a}=t;return a||T("ComponentExample",!0),n||T("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Popover brukes til å vise innhold i et flytende vindu og legger seg over\nalle andre elementer i grensesnittet. Man styrer selv hvordan den vises og\ninterageres med, ofte ved å klikke på et element som en knapp.")),"\n",r.createElement(t.h2,null,"Kontrollert vs Ukontrollert"),"\n",r.createElement(t.p,null,"En kontrollert Popover-komponent gir deg full kontroll over åpning og lukking ved å tillate ekstern håndtering av tilstandene."),"\n",r.createElement(a,{title:"Kontrollert Popover",component:C,codeExample:P,knobs:j}),"\n",r.createElement(t.p,null,"En ukontrollert Popover-komponent håndterer tilstandene selv og åpner og lukker seg basert på interaksjon med trigger-elementet."),"\n",r.createElement(a,{title:"Ukontrollert Popover",component:N,codeExample:O,knobs:j}),"\n",r.createElement(t.h2,null,"Tilgjengelighet"),"\n",r.createElement(t.p,null,"Popover-komponenten tar i bruk useRole-hooken fra ",r.createElement(t.a,{href:"https://floating-ui.com/docs/userole"},"Floating UI")," som automatisk tildeler nødvendige ARIA-roller til trigger- og det flytende elementet."),"\n",r.createElement(t.p,null,'Som default er role satt til "dialog". Er innholdet i Popover foreksempel tiltenkt en meny, bør role-proppen i roleOptions settes til "menu".'),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-tsx"},'<Popover roleOptions={{ role: "menu" }}>{/* Popover innhold */}</Popover>\n')))}var _=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(w,e)):w(e)};function T(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var R=n(72285),I=n(22756),A=n(95573),B=n(1634);const F=e=>{let{pageContext:t}=e;return r.createElement(I.p,{title:t.title})},V=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:o}=n.page,{types:i}=l;return r.createElement(B.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(A.M1,Object.assign({},o,{versions:l.versions})),r.createElement(A.w5,o),a,i&&r.createElement(R.l,{types:i}))};function M(e){return r.createElement(V,e,r.createElement(_,e))}},56180:function(e,t,n){n.d(t,{C9:function(){return m},KM:function(){return c},kq:function(){return u},zx:function(){return s}});var l=n(41886),r=n(80532),a=n(26372),o=n.n(a),i=n(70079);const s=i.forwardRef((function(e,t){const{as:n="button",children:a,className:s,density:c,onTouchStart:u,loader:m,icon:p,iconPosition:d="left",iconLeft:g,iconRight:v,variant:E="secondary",...f}=e,k=n;const b=(0,i.useCallback)((e=>{u&&u(e);const t=e.target;if(t&&!t.disabled&&e.targetTouches.length){const n=e.targetTouches[0].clientX-t.getBoundingClientRect().x,l=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",n.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",l.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((()=>{t.classList.remove("jkl-button--pressed"),t.style.removeProperty("--jkl-touch-xcoord"),t.style.removeProperty("--jkl-touch-ycoord")}),400)}}),[u]),h=(0,r.c)(null==m?void 0:m.showLoader),y=Boolean(a)&&Boolean(null==m?void 0:m.showLoader);return i.createElement(k,Object.assign({},h,{"data-loading":y,"data-density":c,className:o()("jkl-button","jkl-button--"+E,s),disabled:"button"===n?null==m?void 0:m.showLoader:void 0,onTouchStart:b},f,{ref:t}),i.createElement("div",{className:"jkl-button__label"},g&&g,p&&"left"===d&&p,a&&i.createElement("span",{className:"jkl-button__text"},a),v&&v,p&&"right"===d&&p),a&&i.createElement(l.a,{className:"jkl-button__loader",variant:"medium",textDescription:(null==m?void 0:m.textDescription)||"Vennligst vent","aria-hidden":!(null!=m&&m.showLoader)}))}));function c(e){const t={...e,variant:"primary"};return i.createElement(s,t)}function u(e){const t={...e,variant:"secondary"};return i.createElement(s,t)}function m(e){const t={...e,variant:"tertiary"};return i.createElement(s,t)}},66596:function(e,t,n){n.d(t,{O:function(){return o}});var l=n(26372),r=n.n(l),a=n(70079);const o=a.forwardRef(((e,t)=>{const n=r()("jkl-tab",e.className);return a.createElement("button",Object.assign({role:"tab",type:"button",ref:t},e,{className:n}))}));o.displayName="Tab"},33392:function(e,t,n){n.d(t,{t:function(){return i}});var l=n(26372),r=n.n(l),a=n(70079),o=n(72841);const i=e=>{let{children:t,className:n,...l}=e;const{activeIndex:i,setActiveIndex:s,tabIDs:c,tabPanelIDs:u,...m}=l,{density:p}=(0,o.g)(),{0:d,1:g}=(0,a.useState)(),{0:v,1:E}=(0,a.useState)(),f=(0,a.useRef)(null),k=(0,a.useRef)(null);(0,a.useEffect)((()=>{f.current&&g(f.current.getBoundingClientRect()),k.current&&E(k.current.getBoundingClientRect())}),[i,p]);const b=(0,a.useCallback)((e=>{if("ArrowLeft"===e.key){const l=e.currentTarget,r=e.currentTarget.previousSibling;var t,n;if(r)r.focus();else(null===(t=l.parentElement)||void 0===t||null===(n=t.lastChild)||void 0===n?void 0:n.previousSibling).focus()}if("ArrowRight"===e.key){const t=e.currentTarget,n=e.currentTarget.nextSibling;var l;if(n&&"BUTTON"===n.nodeName)n.focus();else(null===(l=t.parentElement)||void 0===l?void 0:l.firstChild).focus()}}),[]);return a.createElement("div",Object.assign({role:"tablist",ref:f},m,{className:r()("jkl-tablist",n)}),a.Children.map(t,((e,t)=>{const n=i===t;return a.isValidElement(e)?a.cloneElement(e,{onKeyDown:b,tabIndex:n?void 0:-1,ref:n?k:void 0,onClick:()=>s(t),"aria-selected":n,"aria-controls":u[t],id:c[t]}):null})),a.createElement("span",{className:"jkl-tablist__indicator",style:{left:((null==v?void 0:v.left)||0)-((null==d?void 0:d.left)||0),bottom:-1,width:((null==v?void 0:v.width)||0)-("compact"===p?32:38)}}))}},39190:function(e,t,n){n.d(t,{x:function(){return o}});var l=n(26372),r=n.n(l),a=n(70079);const o=e=>{let{children:t,...n}=e;const l=r()("jkl-tabpanel",n.className);return a.createElement("div",Object.assign({role:"tabpanel"},n,{className:l}),t)}},15522:function(e,t,n){n.d(t,{m:function(){return u}});var l=n(15089),r=n(96820),a=n(26372),o=n.n(a),i=n(21821),s=n(70079),c=n(72841);const u=e=>{let{onChange:t,defaultTab:n,density:a,...u}=e;const{0:m,1:p}=(0,s.useState)(null!=n?n:0),d=(0,r.z)(m);(0,s.useEffect)((()=>{void 0!==d&&d!==m&&t&&t(m)}),[t,d,m]);const{0:g,1:v}=(0,s.useState)([]),{0:E,1:f}=(0,s.useState)([]),k=(0,s.useCallback)((()=>{const e=s.Children.toArray(u.children)[0];s.isValidElement(e)&&s.Children.forEach(e.props.children,(e=>{s.isValidElement(e)&&(v((e=>[].concat((0,l.Z)(e),["jkl-tab-"+(0,i.x0)(8)]))),f((e=>[].concat((0,l.Z)(e),["jkl-tabpanel-"+(0,i.x0)(8)]))))}))}),[u.children]);return(0,s.useEffect)((()=>{k()}),[k]),s.createElement(c.c,{state:{density:a}},s.createElement("div",Object.assign({},u,{className:o()("jkl-tabs",u.className),"data-density":a}),(()=>{const e=s.Children.toArray(u.children)[0];if(s.isValidElement(e))return s.cloneElement(e,{activeIndex:m,setActiveIndex:p,tabIDs:g,tabPanelIDs:E})})(),s.Children.map(u.children,((e,t)=>{if(!s.isValidElement(e)||0===t)return;const n=t-1;return n===m?s.cloneElement(e,{"aria-labelledby":g[n],id:E[n]}):null}))))}},72841:function(e,t,n){n.d(t,{c:function(){return o},g:function(){return a}});var l=n(70079);const r=(0,l.createContext)({density:void 0}),a=()=>(0,l.useContext)(r),o=e=>{let{state:t,children:n}=e;return l.createElement(r.Provider,{value:t},n)}},72285:function(e,t,n){n.d(t,{l:function(){return g}});var l=n(58820),r=n(63571),a=n(87505),o=n(70079),i=n(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},u=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,o=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},p=e=>{const t=e.target,n=t.parentElement;m(t,n)},d=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},g=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(u):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,l,r,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),l.length>0&&o.createElement(d,{props:l}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(d,{props:a})))}))))}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var l=n(35250),r=n(26372),a=n.n(r);const o=e=>{let{className:t,density:n,id:r,...o}=e;return(0,l.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:r,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return c}});var l=n(35250),r=n(68998),a=n(1386),o=n(26372),i=n.n(o),s=n(70079);const c=e=>{let{children:t,title:n,className:o,startExpanded:c=!1,onClick:u,id:m,...p}=e;const[d,g]=(0,s.useState)(c),[v]=(0,s.useState)((()=>c)),{detailsRef:E,summaryRef:f,contentRef:k,onSummaryClick:b}=(0,a.E)({onOpenChange:(e,t)=>{g(e),u&&u(t,e)},isExpanded:v});return(0,l.jsxs)("details",{"data-testid":"jkl-accordion-item",...p,className:i()("jkl-accordion-item",o),ref:E,id:m,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:b,ref:f,children:[n,(0,l.jsx)(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!d,bold:d})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:k,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},17050:function(e,t,n){n.d(t,{H:function(){return l}});const l=e=>{if(!e)return{};const t=getComputedStyle(e);return{theme:parseInt(t.getPropertyValue("--jkl-background-color").replace("#",""),16)<8388607.5?"dark":"light",density:'"compact"'===t.getPropertyValue("--jkl-density")?"compact":"comfortable"}}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var l=n(70079),r=n(41699),a=n(65174),o=n(6914),i=n(82546),s=n(39126),c=n(66169),u=n(94509);const m=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:p,rows:d,verticalAlign:g,...v}=e;return l.createElement(r.i,{fullWidth:!0,...v,ref:t},n&&l.createElement(o.R,{srOnly:!0},n),l.createElement(s.s,null,l.createElement(u.S,null,m.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===d.length&&p&&l.createElement(u.S,null,l.createElement(i.p,{colSpan:m.length},p)),d.map(((e,t)=>l.createElement(u.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":m[t],verticalAlign:g},e))))))))}));m.displayName="DataTable"}}]);