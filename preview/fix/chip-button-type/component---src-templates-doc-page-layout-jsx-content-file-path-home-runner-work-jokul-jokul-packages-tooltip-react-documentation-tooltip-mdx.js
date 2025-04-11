"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[464],{98345:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return w},Head:function(){return P},default:function(){return O}});var r=t(64717),o=t(92379),l=t(9378),i=t(78926),a=t(3140),s=t(16965),c=t(27547),u=t(6854);function p(e){switch(e){case"Right":return"right";case"Left":return"left";case"Top end":return"top-end";case"Top start":return"top-start";default:return"top"}}const m=e=>{let{choiceValues:n}=e;const t=p(null==n?void 0:n.Plassering),r=null!=n&&n["Forsinkelse (ms)"]?parseInt(null==n?void 0:n["Forsinkelse (ms)"]):void 0,{0:m,1:d}=(0,o.useState)(!1),k="16024454979";return o.createElement("p",null,"Kontonummer: ",(0,i.F)(k),o.createElement(s.u,{onOpenChange:function(e){console.log("Tooltip er "+(e?"åpen":"lukket"))},placement:t,delay:r},o.createElement(c.a,{onClick:function(){navigator.clipboard.writeText(k),d(!0),setTimeout((()=>d(!1)),2e3)}},o.createElement(l.zx,{className:"jkl-spacing-8--left","data-density":"compact",variant:"ghost",icon:o.createElement(a.T,null)})),o.createElement(u._,{"data-layout-density":"comfortable"},m?o.createElement("span",{"aria-live":"assertive"},"Kopiert"):"Klikk for å kopiere til utklippstavlen")))},d={choiceProps:[{name:"Plassering",values:["Top","Top start","Top end","Left","Right"],defaultValue:0},{name:"Forsinkelse (ms)",values:["0","150","250","500","1000"],defaultValue:2}]},k=e=>{let{choiceValues:n}=e;return'const [copied, setCopied] = useState(false);\nconst kontonummer = "16024454979";\n\nfunction logState(open: boolean) {\n    console.log(`Tooltip er ${open ? "åpen" : "lukket"}`);\n}\n\nfunction copyToClipboard() {\n    navigator.clipboard.writeText(kontonummer);\n    setCopied(true);\n    setTimeout(() => setCopied(false), 2000);\n}\n\nreturn (\n    <p>\n        Kontonummer:{" "}\n        <Tooltip\n            onOpenChange={logState}\n            placement="'+p(null==n?void 0:n.Plassering)+'"\n            delay={'+((null==n?void 0:n["Forsinkelse (ms)"])||250)+'}\n        >\n            <TooltipTrigger onClick={copyToClipboard}>{formatKontonummer(kontonummer)}</TooltipTrigger>\n            <TooltipContent>\n                {copied ? <span aria-live="assertive">Kopiert</span> : "Klikk for å kopiere til utklippstavlen"}\n            </TooltipContent>\n        </Tooltip>\n    </p>\n);'};var f=t(84929),g=t(41046);const v=e=>{let{choiceValues:n}=e;const t=p(null==n?void 0:n.Plassering);return o.createElement("p",null,"Du betaler 348 kr/mnd"," ",o.createElement(g.d,{placement:t,content:"Månedsprisen vil variere på fakturaen din gjennom året. Årsprisen er "+(0,f._)(4176)+".",triggerProps:{onClick:()=>console.log("PopupTip clicked")}}))},b=e=>{let{choiceValues:n}=e;return'<p>\n    Du betaler 348 kr/mnd{" "}\n    <PopupTip\n        placement="'+p(null==n?void 0:n.Plassering)+'"\n        content={`Månedsprisen vil variere på fakturaen din gjennom året. Årsprisen er ${formatValuta(4176)}.`}\n    />\n</p>\n);'};function E(e){const n=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a",em:"em"},(0,r.ah)(),e.components),{Ingress:t,ComponentExample:l,PortalImage:i}=n;return l||j("ComponentExample",!0),t||j("Ingress",!0),i||j("PortalImage",!0),o.createElement(o.Fragment,null,o.createElement(t,null,o.createElement(n.p,null,"Et tooltip er en kort melding som gir mer informasjon om et interaktivt\nelement på nettsiden.")),"\n",o.createElement(n.p,null,"Interaktive elementer bør ha en selvforklarende funksjon, så i de fleste tilfeller er det bedre å vise\ninformasjonen direkte heller enn å skjule den bak et tooltip. Hvis informasjonen eller handlingen ikke\ner nødvendig for å gjennomføre flyten brukeren er i kan det likevel være fornuftig å bruke et tooltip."),"\n",o.createElement(l,{title:"Tooltip",component:m,codeExample:k,knobs:d}),"\n",o.createElement(n.h2,null,"Informasjons-tooltip"),"\n",o.createElement(n.p,null,"Vi kan også bruke tooltip sammen med et spørsmålstegnikon for å gi brukeren tilleggsinformasjon.\nDette kan være nyttig hvis vi vil forklare mer om noe som et fåtall av brukerne kanskje lurer på."),"\n",o.createElement(n.p,null,"I disse tilfellene skal tooltipet utløses ved klikk, og ikke ved hover. Vi tilbyr en egen\nkomponent, PopupTip, for dette mønsteret."),"\n",o.createElement(l,{title:"PopupTip",component:v,codeExample:b,knobs:d}),"\n",o.createElement(n.h2,null,"Når bruker vi tooltip?"),"\n",o.createElement(n.p,null,"En tooltip kan være nødvendig hvis:"),"\n",o.createElement(n.ul,null,"\n",o.createElement(n.li,null,"Vi bruker et begrep fra forsikringsdomenet som kan være nytt for kunder."),"\n",o.createElement(n.li,null,"Vi vil forklare mer om noe som et fåtall av kundene kanskje lurer på."),"\n",o.createElement(n.li,null,"Vi bruker en forkortelese i et internsystem som kan være ukjent for nye ansatte."),"\n"),"\n",o.createElement(n.p,null,"Et tooltip bør begrenses til maksimalt to setninger. Om du har behov for mer tekst enn det kan det være riktigere å bruke for eksempel:"),"\n",o.createElement(n.ul,null,"\n",o.createElement(n.li,null,o.createElement(n.a,{href:"/preview/fix/chip-button-type/komponenter/expandbutton"},"ExpandButton")),"\n",o.createElement(n.li,null,o.createElement(n.a,{href:"/preview/fix/chip-button-type/komponenter/accordion"},"Accordion")),"\n"),"\n",o.createElement(n.p,null,"En tooltip skal ikke ha lenker eller andre interaktive elementer i seg."),"\n",o.createElement(n.p,null,"En tooltip skal ikke ligge på en egen linje, men være tilknyttet tekst eller et interaktivt element. Bruk ",o.createElement(n.em,null,"non-breaking space")," eller andre metoder for å holde Tooltip på samme linje."),"\n",o.createElement(n.h2,null,"Eksempler på bruk"),"\n",o.createElement(i,{src:"/assets/documentation/tooltip/tooltip-mndpris.png",caption:"Forklare for kunden hvorfor fakturaprisen kan være ulik den som blir vist her."}))}var h=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?o.createElement(n,e,o.createElement(E,e)):E(e)};function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var y=t(75482),T=t(96036),x=t(59001),C=t(65458),N=t(79379);const P=e=>{let{pageContext:n}=e;return o.createElement(T.p,{title:n.title})},w=e=>{let{location:n,data:t,pageContext:r,children:l}=e;const{frontmatter:i}=t.page,{types:a}=r;return o.createElement(N.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},o.createElement(C.M1,Object.assign({},i,{versions:r.versions})),n.pathname.includes("komponenter")&&o.createElement(x.c,{variant:"komponent",component:i.title}),o.createElement(C.w5,i),l,a&&o.createElement(y.l,{types:a}))};function O(e){return o.createElement(w,e,o.createElement(h,e))}},9378:function(e,n,t){t.d(n,{C9:function(){return d},KM:function(){return p},kq:function(){return m},zx:function(){return u}});var r=t(99767),o=t(60894),l=t(40969),i=t(80324),a=t.n(i),s=t(92379);const c=["as","children","className","density","onTouchStart","onAnimationEnd","loader","icon","iconPosition","iconLeft","iconRight","variant"],u=s.forwardRef((function(e,n){const{as:t="button",children:i,className:u,density:p,onTouchStart:m,onAnimationEnd:d,loader:k,icon:f,iconPosition:g="left",iconLeft:v,iconRight:b,variant:E="secondary"}=e,h=(0,r.Z)(e,c),j=t;const y=(0,s.useCallback)((e=>{const n=e.target;if(n&&!n.disabled&&e.targetTouches.length){const t=e.targetTouches[0].clientX-n.getBoundingClientRect().x,r=e.targetTouches[0].clientY-n.getBoundingClientRect().y;n.style.setProperty("--jkl-touch-xcoord",t.toFixed(1)+"px"),n.style.setProperty("--jkl-touch-ycoord",r.toFixed(1)+"px"),n.classList.add("jkl-button--pressed"),setTimeout((()=>{n.classList.remove("jkl-button--pressed"),n.style.removeProperty("--jkl-touch-xcoord"),n.style.removeProperty("--jkl-touch-ycoord")}),400)}}),[]),T=(0,l.c)(null==k?void 0:k.showLoader),x=Boolean(i)&&Boolean(null==k?void 0:k.showLoader);return s.createElement(j,Object.assign({},T,{"data-loading":x,"data-density":p,className:a()("jkl-button","jkl-button--"+E,u),disabled:"button"===t?null==k?void 0:k.showLoader:void 0,onTouchStart:e=>{null==m||m(e),y(e)},onAnimationEnd:e=>{var n;null==d||d(e),(n=e.target).classList.contains("jkl-button--pressed")&&(n.classList.remove("jkl-button--pressed"),n.style.removeProperty("--jkl-touch-xcoord"),n.style.removeProperty("--jkl-touch-ycoord"))}},h,{ref:n}),s.createElement("div",{className:"jkl-button__label"},v&&v,f&&"left"===g&&f,i&&s.createElement("span",{className:"jkl-button__text"},i),b&&b,f&&"right"===g&&f),i&&s.createElement(o.a,{className:"jkl-button__loader",variant:"medium",textDescription:(null==k?void 0:k.textDescription)||"Vennligst vent","aria-hidden":!(null!=k&&k.showLoader)}))}));function p(e){const n=Object.assign({},e,{variant:"primary"});return s.createElement(u,n)}function m(e){const n=Object.assign({},e,{variant:"secondary"});return s.createElement(u,n)}function d(e){const n=Object.assign({},e,{variant:"tertiary"});return s.createElement(u,n)}},78926:function(e,n,t){t.d(n,{F:function(){return l}});var r=t(74756);const o={full:/^(\d{4})(\d{2})(\d{5})$/,partial:/^(\d{4})(\d{1,2})?(\d{1,5})?$/};function l(e,n){const t=e.replace(/\W/g,""),l=null!=n&&n.partial?o.partial:o.full,i=t.match(l);return i?i.slice(1).filter(Boolean).join((null==n?void 0:n.separator)||r.qD):e}},92022:function(e,n,t){t.d(n,{u:function(){return a}});var r=t(99767),o=t(77126);const l=["locale"],i={locale:"no-NB"};function a(e,n){const t=(0,o.p)(e);if(!t)return e.toString();const a=Object.assign({},i,n),{locale:s}=a,c=(0,r.Z)(a,l);return new Intl.NumberFormat(s,c).format(t)}},77126:function(e,n,t){t.d(n,{p:function(){return o}});t(31369);const r=(e,n)=>{const t=Array.isArray(e)?e:e.split(""),r=t.lastIndexOf(n);return t.filter(((e,t)=>e!==n||t===r)).join("")};function o(e){if("number"==typeof e)return e;const n=e.replaceAll(/\s/g,"").split(""),t=n.reduce(((e,n)=>","===n||"."===n?n:e),null);return Number("."===t?r(n,".").replace(",",""):","===t?r(n,",").replace(".","").replace(",","."):n.join(""))}},84929:function(e,n,t){t.d(n,{_:function(){return c}});var r=t(99767),o=t(74756),l=t(92022),i=t(77126);const a=["prefix"],s={locale:"no-NB",minimumFractionDigits:0,maximumFractionDigits:2,suffix:"kr"};function c(e,n){const t=(0,i.p)(e);if(isNaN(t))return e.toString();const c=Number.isInteger(t)?{}:{minimumFractionDigits:2,maximumFractionDigits:2},u=void 0!==(null==n?void 0:n.suffix)?n.suffix:s.suffix,p=Object.assign({},s,c,n),{prefix:m}=p,d=(0,r.Z)(p,a),k=null!=m&&m.length?""+m+o.vk:"",f=null!=u&&u.length?""+o.vk+u:"";return""+k+(0,l.u)(t,d)+f}},51060:function(e,n,t){t.d(n,{J:function(){return s}});var r=t(99767),o=t(80324),l=t.n(o),i=t(92379);const a=["bold","children","className","filled","variant"],s=i.forwardRef((function(e,n){const{bold:t,children:o,className:s,filled:c,variant:u}=e,p=(0,r.Z)(e,a);return i.createElement("span",Object.assign({"aria-hidden":!0,ref:n,className:l()("jkl-icon",s,{"jkl-icon--filled":c,"jkl-icon--bold":t,["jkl-icon--"+u]:!!u})},p),o)}))},3140:function(e,n,t){t.d(n,{T:function(){return l}});var r=t(92379),o=t(51060);const l=e=>r.createElement(o.J,e,"");l.displayName="CopyIcon"},41046:function(e,n,t){t.d(n,{d:function(){return m}});var r=t(99767),o=t(58990),l=t(80324),i=t.n(l),a=t(92379),s=t(16965),c=t(6854),u=t(27547);const p=["content","triggerProps"],m=e=>{let{content:n,triggerProps:t}=e,l=(0,r.Z)(e,p);const{0:m,1:d}=(0,a.useState)(!1);return a.createElement(s.u,Object.assign({onOpenChange:d,triggerOn:"click"},l),a.createElement(u.a,null,a.createElement("button",Object.assign({},t,{type:"button",className:i()("jkl-tooltip-question-button",null==t?void 0:t.className),"data-testid":"jkl-tooltip-question-button"}),a.createElement(o.U,{variant:"inherit",bold:m}),a.createElement("span",{className:"jkl-sr-only"},"Vis hjelpetekst"),a.createElement("span",{className:"jkl-sr-only","aria-live":"polite","data-testid":"popuptip-content"},m?n:""))),a.createElement(c._,{"data-ispopup":!0},n))}},74756:function(e,n,t){t.d(n,{qD:function(){return r},vk:function(){return o}});const r=" ",o=r}}]);