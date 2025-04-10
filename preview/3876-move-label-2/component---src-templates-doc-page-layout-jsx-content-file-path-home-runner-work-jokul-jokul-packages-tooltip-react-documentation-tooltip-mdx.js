"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[464],{93059:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return M},Head:function(){return S},default:function(){return q}});var r=n(47160),l=n(70079),o=n(51158),i=n(57579),a=n(88905),s=n(84256),c=n(26893);const u=(0,l.createContext)(null),p=u.Provider,m=()=>{const e=(0,l.useContext)(u);if(null===e)throw new Error("Tooltip-komponentene kan kun brukes inne i <Tooltip />");return e},d=e=>{let{children:t,...n}=e;const r=(e=>{let{initialOpen:t=!1,placement:n="top",delay:r=250,triggerOn:o="hover"}=e;const{0:u,1:p}=(0,l.useState)(t),m=(0,l.useRef)(null),d=(0,l.useRef)(null),f=(0,i.YF)({open:u,onOpenChange:p,placement:n,whileElementsMounted:a.Me,middleware:[(0,s.cv)(16),(0,s.RR)(),(0,s.uY)({padding:16}),(0,c.x7)({element:m,padding:20})]}),k=(0,i.qs)(f.context,{role:"tooltip"}),g=(0,i.bQ)(f.context,{referencePress:!1}),v=(0,i.eS)(f.context,{enabled:"click"===o&&!u}),E=(0,i.XI)(f.context,{enabled:"hover"===o,delay:u?0:r}),b=(0,i.KK)(f.context,{enabled:"click"!==o||u}),h=(0,i.NI)([g,b,k,v,E]);return{triggerOn:o,isOpen:u,setOpen:p,arrowElement:m,...f,refs:{...f.refs,description:d,setDescription:e=>d.current=e},...h}})(n);return l.createElement(p,{value:r},t)};var f=n(26372),k=n.n(f);const g=(0,l.forwardRef)((function(e,t){var n,r;let{children:o,className:a,...s}=e;const{isOpen:c,setOpen:u,getReferenceProps:p,refs:d,triggerOn:f}=m(),g=o.ref,v=(0,i.qq)([g,d.setReference,t]),E=()=>{"click"===f&&u(!1)},b=[null===(n=d.reference.current)||void 0===n?void 0:n.textContent,null===(r=d.description.current)||void 0===r?void 0:r.textContent].filter(Boolean).join(". ");return l.isValidElement(o)?l.cloneElement(o,p({ref:v,...o.props,...s,className:k()(o.props.className,a),"data-tooltip-shown":c,style:{...o.props.style},tabIndex:"click"===f?0:void 0,onBlur:()=>{o.props.onBlur&&o.props.onBlur(),E()}})):l.createElement("button",Object.assign({"data-tooltip-shown":c},p({className:k()(a,"jkl-tooltip-trigger"),type:"button",ref:v,onBlur:E,"aria-label":b,...s})),o)}));var v=n(3438),E=n(48365),b=n(89300);function h(e,t){switch(void 0===t&&(t=8),!0){case e.startsWith("top"):return{top:t};case e.startsWith("left"):return{left:t,right:-t};case e.startsWith("bottom"):return{top:-t};case e.startsWith("right"):return{left:-t,right:t};default:return{top:t}}}const j=(0,l.forwardRef)((function(e,t){let{className:n,children:r,...o}=e;const{triggerOn:a,arrowElement:s,isOpen:c,getFloatingProps:u,placement:p,isPositioned:d,middlewareData:{arrow:f},floatingStyles:g,refs:j}=m(),y=(0,i.qq)([t,j.setFloating]),x=(0,v.M)("jkl-tooltip-content");let T;if(j.reference.current){const e=getComputedStyle(j.reference.current).getPropertyValue("--jkl-background-color");T=parseInt(e.replace("#",""),16)<8388607.5?"dark":"light"}return l.createElement(i.ll,null,l.createElement(E.M,null,"hover"===a&&l.createElement("span",{ref:j.setDescription,hidden:!0},r),c&&l.createElement("span",{className:"jkl"},l.createElement(b.E.span,Object.assign({key:x,ref:y,initial:{opacity:0,...h(p,5)},animate:{opacity:1,...h(p,0)},exit:{opacity:0,...h(p,-5),transition:{ease:"easeIn",duration:.15}},transition:{ease:"easeOut",duration:.25},"data-placement":p,"aria-live":"click"===a?"assertive":void 0,className:k()("jkl-tooltip-content",n)},u({...o,id:x}),{style:{...g},"data-theme":T}),r,l.createElement("span",{"aria-hidden":!0,className:"jkl-tooltip-content__arrow",ref:s,style:{left:d?(null==f?void 0:f.x)+"px":"",top:d?(null==f?void 0:f.y)+"px":""}})))))}));function y(e){switch(e){case"Right":return"right";case"Left":return"left";case"Top end":return"top-end";case"Top start":return"top-start";default:return"top"}}const x=e=>{let{choiceValues:t}=e;const n=y(null==t?void 0:t.Plassering),r=null!=t&&t["Forsinkelse (ms)"]?parseInt(null==t?void 0:t["Forsinkelse (ms)"]):void 0,{0:i,1:a}=(0,l.useState)(!1),s="16024454979";return l.createElement("p",null,"Kontonummer:"," ",l.createElement(d,{placement:n,delay:r},l.createElement(g,{onClick:function(){navigator.clipboard.writeText(s),a(!0),setTimeout((()=>a(!1)),2e3)}},(0,o.F)(s)),l.createElement(j,null,i?l.createElement("span",{"aria-live":"assertive"},"Kopiert"):"Klikk for å kopiere til utklippstavlen")))},T={choiceProps:[{name:"Plassering",values:["Top","Top start","Top end","Left","Right"],defaultValue:0},{name:"Forsinkelse (ms)",values:["0","150","250","500","1000"],defaultValue:2}]},w=e=>{let{choiceValues:t}=e;return'const [copied, setCopied] = useState(false);\nconst kontonummer = "16024454979";\n\nfunction copyToClipboard() {\n    navigator.clipboard.writeText(kontonummer);\n    setCopied(true);\n    setTimeout(() => setCopied(false), 2000);\n}\n\nreturn (\n    <p>\n        Kontonummer:{" "}\n        <Tooltip placement="'+y(null==t?void 0:t.Plassering)+'" delay={'+((null==t?void 0:t["Forsinkelse (ms)"])||250)+'}>\n            <TooltipTrigger onClick={copyToClipboard}>{formatKontonummer(kontonummer)}</TooltipTrigger>\n            <TooltipContent>\n                {copied ? <span aria-live="assertive">Kopiert</span> : "Klikk for å kopiere til utklippstavlen"}\n            </TooltipContent>\n        </Tooltip>\n    </p>\n);'};var C=n(42913),O=n(61808);const N=e=>{let{content:t,triggerProps:n,...r}=e;const{0:o,1:i}=(0,l.useState)(!1);return l.createElement(d,Object.assign({triggerOn:"click"},r),l.createElement(g,null,l.createElement("button",Object.assign({},n,{onFocus:e=>{var t;i(!0),null==n||null===(t=n.onFocus)||void 0===t||t.call(n,e)},onBlur:e=>{var t;i(!1),null==n||null===(t=n.onBlur)||void 0===t||t.call(n,e)},type:"button",className:k()("jkl-tooltip-question-button",null==n?void 0:n.className)}),l.createElement(O.U,{bold:o}),l.createElement("span",{className:"jkl-sr-only"},"Vis hjelpetekst"))),l.createElement(j,null,t))},P=e=>{let{choiceValues:t}=e;const n=y(null==t?void 0:t.Plassering);return l.createElement("p",null,"Du betaler 348 kr/mnd"," ",l.createElement(N,{placement:n,content:"Månedsprisen vil variere på fakturaen din gjennom året. Årsprisen er "+(0,C._)(4176)+".",triggerProps:{onClick:()=>console.log("PopupTip clicked")}}))},F=e=>{let{choiceValues:t}=e;return'<p>\n    Du betaler 348 kr/mnd{" "}\n    <PopupTip\n        placement="'+y(null==t?void 0:t.Plassering)+'"\n        content={`Månedsprisen vil variere på fakturaen din gjennom året. Årsprisen er ${formatValuta(4176)}.`}\n    />\n</p>\n);'};function I(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a",em:"em"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:o,PortalImage:i}=t;return o||B("ComponentExample",!0),n||B("Ingress",!0),i||B("PortalImage",!0),l.createElement(l.Fragment,null,l.createElement(n,null,"Et tooltip er en kort melding som gir mer informasjon om et interaktivt element på nettsiden."),"\n",l.createElement(t.p,null,"Interaktive elementer bør ha en selvforklarende funksjon, så i de fleste tilfeller er det bedre å vise\ninformasjonen direkte heller enn å skjule den bak et tooltip. Hvis informasjonen eller handlingen ikke\ner nødvendig for å gjennomføre flyten brukeren er i kan det likevel være fornuftig å bruke et tooltip."),"\n",l.createElement(o,{title:"Tooltip",component:x,codeExample:w,knobs:T}),"\n",l.createElement(t.h2,null,"Informasjons-tooltip"),"\n",l.createElement(t.p,null,"Vi kan også bruke tooltip sammen med et spørsmålstegnikon for å gi brukeren tilleggsinformasjon.\nDette kan være nyttig hvis vi vil forklare mer om noe som et fåtall av brukerne kanskje lurer på."),"\n",l.createElement(t.p,null,"I disse tilfellene skal tooltipet utløses ved klikk, og ikke ved hover. Vi tilbyr en egen\nkomponent, PopupTip, for dette mønsteret."),"\n",l.createElement(o,{title:"PopupTip",component:P,codeExample:F,knobs:T}),"\n",l.createElement(t.h2,null,"Når bruker vi tooltip?"),"\n",l.createElement(t.p,null,"En tooltip kan være nødvendig hvis:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Vi bruker et begrep fra forsikringsdomenet som kan være nytt for kunder."),"\n",l.createElement(t.li,null,"Vi vil forklare mer om noe som et fåtall av kundene kanskje lurer på."),"\n",l.createElement(t.li,null,"Vi bruker en forkortelese i et internsystem som kan være ukjent for nye ansatte."),"\n"),"\n",l.createElement(t.p,null,"Et tooltip bør begrenses til maksimalt to setninger. Om du har behov for mer tekst enn det kan det være riktigere å bruke for eksempel:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"/preview/3876-move-label-2/komponenter/expandbutton"},"ExpandButton")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"/preview/3876-move-label-2/komponenter/accordion"},"Accordion")),"\n"),"\n",l.createElement(t.p,null,"En tooltip skal ikke ha lenker eller andre interaktive elementer i seg."),"\n",l.createElement(t.p,null,"En tooltip skal ikke ligge på en egen linje, men være tilknyttet tekst eller et interaktivt element. Bruk ",l.createElement(t.em,null,"non-breaking space")," eller andre metoder for å holde Tooltip på samme linje."),"\n",l.createElement(t.h2,null,"Eksempler på bruk"),"\n",l.createElement(i,{src:"/assets/documentation/tooltip/tooltip-mndpris.png",caption:"Forklare for kunden hvorfor fakturaprisen kan være ulik den som blir vist her."}))}var V=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(I,e)):I(e)};function B(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var D=n(72285),R=n(22756),_=n(95573),K=n(1634);const S=e=>{let{pageContext:t}=e;return l.createElement(R.p,{title:t.title})},M=e=>{let{location:t,data:n,pageContext:r,children:o}=e;const{frontmatter:i}=n.page,{types:a}=r;return l.createElement(K.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(_.M1,Object.assign({},i,{versions:r.versions})),l.createElement(_.w5,i),o,a&&l.createElement(D.l,{types:a}))};function q(e){return l.createElement(M,e,l.createElement(V,e))}},51158:function(e,t,n){n.d(t,{F:function(){return o}});var r=n(10793);const l={full:/^(\d{4})(\d{2})(\d{5})$/,partial:/^(\d{4})(\d{1,2})?(\d{1,5})?$/};function o(e,t){const n=e.replace(/\W/g,""),o=null!=t&&t.partial?l.partial:l.full,i=n.match(o);return i?i.slice(1).filter(Boolean).join((null==t?void 0:t.separator)||r.qD):e}},20439:function(e,t,n){n.d(t,{u:function(){return o}});var r=n(44820);const l={locale:"no-NB"};function o(e,t){const n=(0,r.p)(e);if(!n)return e.toString();const{locale:o,...i}={...l,...t};return new Intl.NumberFormat(o,i).format(n)}},44820:function(e,t,n){n.d(t,{p:function(){return l}});n(31369);const r=(e,t)=>{const n=Array.isArray(e)?e:e.split(""),r=n.lastIndexOf(t);return n.filter(((e,n)=>e!==t||n===r)).join("")};function l(e){if("number"==typeof e)return e;const t=e.replaceAll(/\s/g,"").split(""),n=t.reduce(((e,t)=>","===t||"."===t?t:e),null);return Number("."===n?r(t,".").replace(",",""):","===n?r(t,",").replace(".","").replace(",","."):t.join(""))}},42913:function(e,t,n){n.d(t,{_:function(){return a}});var r=n(10793),l=n(20439),o=n(44820);const i={locale:"no-NB",minimumFractionDigits:0,maximumFractionDigits:2,suffix:"kr"};function a(e,t){const n=(0,o.p)(e);if(isNaN(n))return e.toString();const a=Number.isInteger(n)?{}:{minimumFractionDigits:2,maximumFractionDigits:2},s=void 0!==(null==t?void 0:t.suffix)?t.suffix:i.suffix,{prefix:c,...u}={...i,...a,...t},p=null!=c&&c.length?""+c+r.vk:"",m=null!=s&&s.length?""+r.vk+s:"";return""+p+(0,l.u)(n,u)+m}}}]);