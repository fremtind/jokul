"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[440],{69459:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return H},Head:function(){return T},default:function(){return B}});var r=t(33156),a=t(7378),l=t(52905),i=t(45271),o=t(3698),s=t.n(o);const c=(0,a.createContext)({open:!1,onToggle:()=>{},onTransitionStart:()=>{},onTransitionEnd:()=>{},setExpanderHeight:()=>{}});var d=t(96113),p=t(84537),u=t(37761);function m(e,n){const t=(0,u.S)(e),r=(null==n?void 0:n.easing)||"standard",l=(null==n?void 0:n.timing)||"productive",i="".concat(d.E[l]," height ").concat(d.l[r]),{prefersReducedMotion:o}=(0,p.e)(),s=(0,a.useRef)(),c=(0,a.useRef)(),m=(0,a.useRef)(null),f=(0,a.useCallback)((t=>{var r;const a=m.current;a&&t.target===a&&(a.removeAttribute("style"),null==(r=null==n?void 0:n.onTransitionEnd)||r.call(n,e,m))}),[n,e]),k=(0,a.useCallback)((()=>{var r,a;const l=m.current;if(l&&(void 0===t&&(l.dataset.expanded=e?"true":"false"),!(!e&&!t||e&&t))){if(null==(r=null==n?void 0:n.onTransitionStart)||r.call(n,e,m),o)return l.removeAttribute("style"),l.dataset.expanded=e?"true":"false",void(null==(a=null==n?void 0:n.onTransitionEnd)||a.call(n,e,m));e?function(e,n,t,r){const a=e.current;if(!a)return;a.removeAttribute("style");const l=a.scrollHeight;t.current=requestAnimationFrame((()=>{a.style.removeProperty("transition"),a.dataset.expanded="false";const e=a.getBoundingClientRect().height;a.style.setProperty("height","".concat(e,"px")),a.style.setProperty("overflow-y","hidden"),r.current=requestAnimationFrame((()=>{a.style.setProperty("transition",n),a.style.setProperty("height","".concat(l,"px")),a.dataset.expanded="true"}))}))}(m,i,s,c):function(e,n,t,r){const a=e.current;if(!a)return;a.removeAttribute("style");const l=a.scrollHeight;t.current=requestAnimationFrame((()=>{a.style.removeProperty("transition"),a.dataset.expanded="false";const e=a.getBoundingClientRect().height;a.dataset.expanded="true",a.style.setProperty("height","".concat(l,"px")),a.style.setProperty("overflow-y","hidden"),r.current=requestAnimationFrame((()=>{a.style.setProperty("transition",n),a.style.setProperty("height","".concat(e,"px")),a.dataset.expanded="false"}))}))}(m,i,s,c)}}),[t,e,n,o,i]);return(0,a.useEffect)((()=>{k()}),[e,k]),(0,a.useEffect)((()=>{const e=m.current;return e&&e.addEventListener("transitionend",f),()=>{e&&e.removeEventListener("transitionend",f)}}),[e]),(0,a.useEffect)((()=>{const e=s.current,n=c.current;return()=>{e&&cancelAnimationFrame(e),n&&cancelAnimationFrame(n)}}),[s,c]),[m,k]}const f=["className","children"],k=["children","as","variant","open","defaultOpen","onOpenChange"],g=Object.assign(a.forwardRef((function(e,n){const{children:t,as:r="details",variant:l="fill",open:o,defaultOpen:d,onOpenChange:p}=e,u=(0,i.A)(e,k),{0:m,1:f}=(0,a.useState)(d||!1),{0:g,1:v}=(0,a.useState)(!1),{0:E,1:b}=(0,a.useState)(0),h=(0,a.useRef)();(0,a.useImperativeHandle)(n,(()=>h.current),[h]);const x=r,y=void 0!==o,j=y?o:m;(0,a.useEffect)((()=>{null==p||p(j)}),[j,p]);return(0,a.useEffect)((()=>{const e=e=>{f("open"===e.newState)},n=h.current;return null==n||n.addEventListener("toggle",e),()=>null==n?void 0:n.removeEventListener("toggle",e)}),[v,f]),a.createElement("div",{className:"jkl-expandable__wrapper"},a.createElement("div",{inert:"true",className:"jkl-expandable__focus-container",style:{height:E}}),a.createElement(x,Object.assign({ref:h,"data-testid":"jkl-expand-section",className:s()("jkl-expandable","jkl-expandable--"+l),open:"details"===r?j||g:void 0,"data-visible-content":j||g},u),a.createElement(c.Provider,{value:{open:j,onToggle:()=>{y||f((e=>!e))},onTransitionEnd:v,onTransitionStart:e=>{e&&v(!0)},setExpanderHeight:b}},t)))})),{Content:e=>{let{className:n,children:t}=e,r=(0,i.A)(e,f);const{open:l,onTransitionStart:o,onTransitionEnd:d}=(0,a.useContext)(c),[p]=m(l,{timing:"snappy",onTransitionStart:o,onTransitionEnd:d});return a.createElement("div",Object.assign({ref:p,className:s()("jkl-expandable__content",n)},r,{"data-expanded":l},l?{}:{inert:"true"}),a.createElement("div",{className:"jkl-expandable__content-wrapper"},t))}});var v=t(44546),E=t(11647);const b=["children","as","open","icon","className","onClick","expandDirection"],h=a.forwardRef((function(e,n){const{children:t,as:r="summary",open:l,icon:o,className:d,onClick:p,expandDirection:u}=e,m=(0,i.A)(e,b),f=r,{open:k,onToggle:g,setExpanderHeight:h}=(0,a.useContext)(c),x=(0,a.useRef)();(0,a.useImperativeHandle)(n,(()=>x.current),[x]);const y=l||k,j="up"===u?v.M:E.D;return(0,a.useEffect)((()=>{const e=new ResizeObserver((function(){h(x.current.offsetHeight)}));return e.observe(x.current),()=>e.disconnect()}),[h]),a.createElement(f,Object.assign({ref:x,className:s()("jkl-expander",{"jkl-expander--open":y},d)},"button"===r?{type:m.type||"button"}:{},{onClick:e=>{e.preventDefault(),g(),null==p||p(e)}},m),o||null,a.createElement("span",{className:"jkl-expander__label"},t),a.createElement(j,{className:"jkl-expander__chevron"}))})),x={boolProps:["icon","flip direction"]},y=e=>{let{boolValues:n}=e;return a.createElement("div",{style:{width:"100%",display:"flex",gap:40,flexDirection:"column"}},a.createElement("div",null,a.createElement(g,null,a.createElement(h,{icon:null!=n&&n.icon?a.createElement(l.N,null):void 0,expandDirection:null!=n&&n["flip direction"]?"up":void 0},"Når er det vi faktisk er åpne?"),a.createElement(g.Content,null,"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!")),a.createElement(g,{style:{marginTop:16}},a.createElement(h,{icon:null!=n&&n.icon?a.createElement(l.N,null):void 0,expandDirection:null!=n&&n["flip direction"]?"up":void 0},"Når er det vi faktisk er åpne?"),a.createElement(g.Content,null,"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!"))),a.createElement("div",null,a.createElement(g,{variant:"stroke"},a.createElement(h,{icon:null!=n&&n.icon?a.createElement(l.N,null):void 0,expandDirection:null!=n&&n["flip direction"]?"up":void 0},"Når er det vi faktisk er åpne?"),a.createElement(g.Content,null,"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!")),a.createElement(g,{variant:"stroke"},a.createElement(h,{icon:null!=n&&n.icon?a.createElement(l.N,null):void 0,expandDirection:null!=n&&n["flip direction"]?"up":void 0},"Når er det vi faktisk er åpne?"),a.createElement(g.Content,null,"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!")),a.createElement(g,{variant:"stroke"},a.createElement(h,{icon:null!=n&&n.icon?a.createElement(l.N,null):void 0,expandDirection:null!=n&&n["flip direction"]?"up":void 0},"Når er det vi faktisk er åpne?"),a.createElement(g.Content,null,"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!"))))},j=e=>{let{boolValues:n}=e;return'\n<div\n    style={{\n        width: "100%",\n        display: "flex",\n        gap: 40,\n        flexDirection: "column",\n    }}\n>\n    <div>\n        <ExpandablePanel>\n            <Expander\n                icon={'+(null!=n&&n.icon?"<GreenCheckIcon />":"undefined")+"}\n                expandDirection={"+(null!=n&&n["flip direction"]?'"up"':"undefined")+"}\n            >\n                Når er det vi faktisk er åpne?\n            </Expander>\n\n            <ExpandablePanel.Content>\n                Velkommen innom når vi faktisk har kaffe! Vi er åpne\n                mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du\n                besøke oss fra 10:00 til 16:00 (vi liker en rolig start\n                på lørdagen). Søndager hviler vi – og det burde du også!\n            </ExpandablePanel.Content>\n        </ExpandablePanel>\n        <ExpandablePanel>\n            <Expander\n                icon={"+(null!=n&&n.icon?"<GreenCheckIcon />":"undefined")+"}\n                expandDirection={"+(null!=n&&n["flip direction"]?'"up"':"undefined")+'}\n            >\n                Når er det vi faktisk er åpne?\n            </Expander>\n\n            <ExpandablePanel.Content>\n                Velkommen innom når vi faktisk har kaffe! Vi er åpne\n                mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du\n                besøke oss fra 10:00 til 16:00 (vi liker en rolig start\n                på lørdagen). Søndager hviler vi – og det burde du også!\n            </ExpandablePanel.Content>\n        </ExpandablePanel>\n    </div>\n    <div>\n        <ExpandablePanel variant="stroke">\n            <Expander\n                icon={'+(null!=n&&n.icon?"<GreenCheckIcon />":"undefined")+"}\n                expandDirection={"+(null!=n&&n["flip direction"]?'"up"':"undefined")+'}\n            >\n                Når er det vi faktisk er åpne?\n            </Expander>\n\n            <ExpandablePanel.Content>\n                Velkommen innom når vi faktisk har kaffe! Vi er åpne\n                mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du\n                besøke oss fra 10:00 til 16:00 (vi liker en rolig start\n                på lørdagen). Søndager hviler vi – og det burde du også!\n            </ExpandablePanel.Content>\n        </ExpandablePanel>\n        <ExpandablePanel variant="stroke">\n            <Expander\n                icon={'+(null!=n&&n.icon?"<GreenCheckIcon />":"undefined")+"}\n                expandDirection={"+(null!=n&&n["flip direction"]?'"up"':"undefined")+'}\n            >\n                Når er det vi faktisk er åpne?\n            </Expander>\n\n            <ExpandablePanel.Content>\n                Velkommen innom når vi faktisk har kaffe! Vi er åpne\n                mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du\n                besøke oss fra 10:00 til 16:00 (vi liker en rolig start\n                på lørdagen). Søndager hviler vi – og det burde du også!\n            </ExpandablePanel.Content>\n        </ExpandablePanel>\n        <ExpandablePanel variant="stroke">\n            <Expander\n                icon={'+(null!=n&&n.icon?"<GreenCheckIcon />":"undefined")+"}\n                expandDirection={"+(null!=n&&n["flip direction"]?'"up"':"undefined")+"}\n            >\n                Når er det vi faktisk er åpne?\n            </Expander>\n\n            <ExpandablePanel.Content>\n                Velkommen innom når vi faktisk har kaffe! Vi er åpne\n                mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du\n                besøke oss fra 10:00 til 16:00 (vi liker en rolig start\n                på lørdagen). Søndager hviler vi – og det burde du også!\n            </ExpandablePanel.Content>\n        </ExpandablePanel>\n    </div>\n</div>    \n    "};var N=t(22290),P=t(86447);const w={},O=()=>{const{0:e,1:n}=(0,a.useState)(!1),t=(0,a.useId)();return a.createElement(g,{as:"div",variant:"stroke",open:e},a.createElement(h,{as:"button","aria-controls":t+"-content","aria-expanded":e,onClick:()=>n((e=>!e))},"Rediger kontakinformasjon"),a.createElement(g.Content,{id:t+"-content"},a.createElement("div",{"aria-hidden":!e,style:{display:"flex",flexDirection:"column",gap:16,width:"fit-content"}},a.createElement(P.k,{defaultValue:"foo.bar@fremtind.no",label:"E-post"}),a.createElement(N.tA,null,"Lagre"))))},C=()=>{const e=Math.random();return'\n        <ExpandablePanel as="div" variant="stroke" open={open}>\n            <Expander\n                as="button"\n                aria-controls={"'+e+'-content"}\n                aria-expanded={open}\n                onClick={() => setOpen((open) => !open)}\n            >\n                Rediger kontakinformasjon\n            </Expander>\n            <ExpandablePanel.Content id={"'+e+'-content"}>\n                <div\n                    aria-hidden={!open}\n                    style={{\n                        display: "flex",\n                        flexDirection: "column",\n                        gap: 16,\n                        width: "fit-content",\n                    }}\n                >\n                    <TextInput\n                        defaultValue={"foo.bar@fremtind.no"}\n                        label="E-post"\n                    />\n                    <SecondaryButton>Lagre</SecondaryButton>\n                </div>\n            </ExpandablePanel.Content>\n        </ExpandablePanel>\n'};function _(e){const n=Object.assign({p:"p",ul:"ul",li:"li",em:"em",h2:"h2",code:"code",pre:"pre",a:"a"},(0,r.RP)(),e.components),{Ingress:t,ComponentExample:l}=n;return l||S("ComponentExample",!0),t||S("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(t,null,a.createElement(n.p,null,"Expandable panel er en komponent som brukes for å vise og skjule\ninformasjon.")),"\n",a.createElement(l,{title:"ExpandablePanel",component:y,knobs:x,codeExample:j}),"\n",a.createElement(n.p,null,"Expandable panel brukes for å vise innhold på liten plass. Den passer godt til\ntilleggsinformasjon og er med på å prioritere og organisere grensesnittet ditt."),"\n",a.createElement(n.p,null,"Komponenten kan brukes alene og i gruppe."),"\n",a.createElement(n.p,null,"Bruk alltid en beskrivende tittel slik at det er lett å forstå hvilken informasjon\nsom skjuler seg bak den. Dette gjør det også lettere for brukere av skjermlesere å\nnavigere innholdet. Ved bruk i gruppe bør man legge til en overskrift, f.eks “Vanlige spørsmål”."),"\n",a.createElement(n.p,null,"Unngå å bruke"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,'Generelle beskrivelser som "Les mer"'),"\n",a.createElement(n.li,null,'Passive setninger som "Du finner mer informasjon ved å klikke her"'),"\n"),"\n",a.createElement(n.p,null,a.createElement(n.em,null,"Obs! Viktig informasjon bør alltid ligge synlig, ikke skjult i en Expandable.")),"\n",a.createElement(n.h2,null,"Varianter"),"\n",a.createElement(n.p,null,"Velg fill eller stroke etter hva som kler løsningen din best, men ",a.createElement(n.em,null,"ved behov for lengre\nlister og inni andre komponenter brukes varianten med stroke"),"."),"\n",a.createElement(n.h2,null,"Oppbygging"),"\n",a.createElement(n.p,null,"Det er laget 3 React-komponenter. ",a.createElement(n.code,null,"ExpandablePanel")," er hele den ekspanderende komponenten og\nden skal igjen inneholde en ",a.createElement(n.code,null,"Expander")," og innhold i ",a.createElement(n.code,null,"ExpandablePanel.Content"),"."),"\n",a.createElement(n.h2,null,"Lag din egen ekspanderbare komponent"),"\n",a.createElement(n.p,null,"Komponentene er polymorfe slik at man også kan bruke dem til å lage custom widgets. Her er det viktig å huske på å bruke riktige ARIA tags."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.code,null,"Expander")," må ha ",a.createElement(n.code,null,"aria-controls")," og ",a.createElement(n.code,null,"aria-expanded"),"."),"\n",a.createElement(n.li,null,a.createElement(n.code,null,"ExpandablePanel.Content")," må ha en ",a.createElement(n.code,null,"id")," og innholdet må merkes med ",a.createElement(n.code,null,"aria-hidden")," når\nden er lukket."),"\n"),"\n",a.createElement(n.p,null,"Ikke lag custom widgets med details/summary elementer. Du risikerer at deler av innholdet\npå siden din vil kunne søkes etter i browseren men ikke være synlig."),"\n",a.createElement(l,{title:"Egen komponent",component:O,knobs:w,codeExample:C}),"\n",a.createElement(n.h2,null,"Bruk ",a.createElement(n.code,null,"Expander")," komponenten alene"),"\n",a.createElement(n.p,null,"Dersom du har veldig spesifikke behov og/eller ønsker et helt annet utseende enn\ndet ",a.createElement(n.code,null,"ExpandablePanel")," har kan du også bruke bare ",a.createElement(n.code,null,"Expander")," knappen og ordne resten selv."),"\n",a.createElement(n.p,null,"Importer knappen fra samme pakke:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-jsx"},'import { Expander } from "@fremtind/jkl-expander-react";\n')),"\n",a.createElement(n.p,null,"Du må da selv sørge for at din komponent vokser og krymper når den åpnes og lukkes.\nDette kan du for eksempel bruke våre custom ",a.createElement(n.a,{href:"https://jokul.fremtind.no/komponenter/animation/"},"hooks")," til."))}var D=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.RP)(),e.components);return n?a.createElement(n,e,a.createElement(_,e)):_(e)};function S(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var A=t(68888),V=t(47672),I=t(52948),R=t(38776),L=t(20919);const T=e=>{let{pageContext:n}=e;return a.createElement(V.G,{title:n.title})},H=e=>{let{location:n,data:t,pageContext:r,children:l}=e;const{frontmatter:i}=t.page,{types:o}=r;return a.createElement(L.D,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(R.Ao,Object.assign({},i,{versions:r.versions})),a.createElement(I.A,{variant:"komponent",component:i.title}),a.createElement(R.f6,i),l,o&&a.createElement(A.N,{types:o}))};function B(e){return a.createElement(H,e,a.createElement(D,e))}},68888:function(e,n,t){t.d(n,{N:function(){return f}});var r=t(88635),a=t(24408),l=t(78022),i=t(7378),o=t(45371);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},d=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},p=(e,n)=>{const{scrollLeft:t,scrollWidth:r}=e,{clientWidth:a}=n,l=t>0,i=r-t>a;n.classList.toggle("left-shadow",l),n.classList.toggle("right-shadow",i)},u=e=>{const n=e.target,t=n.parentElement;p(n,t)},m=e=>{let{props:n}=e;const t=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&p(n,e)}}))})),r=t.current.parentElement.parentElement;n.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(l.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=n,r.map((e=>{var n,t;return[e.name?s(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?s(e.type.name):""]})))})));var r},f=e=>{let{types:n}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(r.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const r=t.props?Object.values(t.props).filter(d):[],l=t.props?Object.values(t.props).filter(c):[],s=(e=>{var n,t,r,a,l,i;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(l=a.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return i.createElement(a.A,{title:n,key:n,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.NG,{className:"jkl-portal-code-block"},s),r.length>0&&i.createElement(m,{props:r}),l.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(m,{props:l})))}))))}},52948:function(e,n,t){t.d(n,{A:function(){return o}});var r=t(77800),a=t(38316),l=t(7378),i=t(45371);const o=e=>{let{variant:n,component:t}=e;return l.createElement("section",{className:"suggestion-block"},l.createElement("div",{className:"suggestion-block__content"},l.createElement(a.u,null),l.createElement(i.fz,null,s[n].text)),l.createElement(r.N,{href:s[n].link+"+<"+t+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,n,t){t.d(n,{D:function(){return s}});var r=t(3698),a=t.n(r),l=t(94270),i=t(7378),o=t(79197);const s=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:r}=(0,i.useContext)(o.M),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(l.P.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:a()("jkl-portal__main",n),id:"innhold"},t)}},88635:function(e,n,t){t.d(n,{n:function(){return s}});var r=t(45271),a=t(86106),l=t(3698),i=t.n(l);const o=["className","density","id"],s=e=>{let{className:n,density:t,id:l}=e,s=(0,r.A)(e,o);return(0,a.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:i()("jkl-accordion",n),"data-density":t,id:l},s))}},24408:function(e,n,t){t.d(n,{A:function(){return p}});var r=t(45271),a=t(86106),l=t(21197),i=t(82455),o=t(3698),s=t.n(o),c=t(7378);const d=["children","title","className","startExpanded","onClick","id"],p=e=>{let{children:n,title:t,className:o,startExpanded:p=!1,onClick:u,id:m}=e,f=(0,r.A)(e,d);const[k,g]=(0,c.useState)(p),[v]=(0,c.useState)((()=>p)),{detailsRef:E,summaryRef:b,contentRef:h,onSummaryClick:x}=(0,i.$)({onOpenChange:(e,n)=>{g(e),u&&u(n,e)},isExpanded:v});return(0,a.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},f,{className:s()("jkl-accordion-item",o),ref:E,id:m,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:x,ref:b,children:[t,(0,a.jsx)(l.l,{className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]}))}},11647:function(e,n,t){t.d(n,{D:function(){return d}});var r=t(7378),a=t(19767),l=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const d=e=>r.createElement(a.I,((e,n)=>{for(var t in n||(n={}))o.call(n,t)&&c(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&c(e,t,n[t]);return e})({},e),"");d.displayName="ChevronDownIcon"},44546:function(e,n,t){t.d(n,{M:function(){return d}});var r=t(7378),a=t(19767),l=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const d=e=>r.createElement(a.I,((e,n)=>{for(var t in n||(n={}))o.call(n,t)&&c(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&c(e,t,n[t]);return e})({},e),"");d.displayName="ChevronUpIcon"},52905:function(e,n,t){t.d(n,{N:function(){return p}});var r=t(3698),a=t.n(r),l=t(7378),i=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const p=e=>{var n=e,{as:t="div",bold:r=!1,className:i,variant:p="inherit","data-testid":u,style:m}=n,f=((e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t})(n,["as","bold","className","variant","data-testid","style"]);const k=t;return l.createElement(k,((e,n)=>{for(var t in n||(n={}))s.call(n,t)&&d(e,t,n[t]);if(o)for(var t of o(n))c.call(n,t)&&d(e,t,n[t]);return e})({className:a()(i,"jkl-icon","jkl-icon-green-check","jkl-icon--".concat(p),{"jkl-icon--bold":r}),"aria-hidden":"true",style:m,"data-testid":u},f),l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px"},l.createElement("circle",{cx:"12",cy:"12",r:"10"}),l.createElement("path",{fillRule:"evenodd",d:"M17.52 9.54 10.7 16.2l-4.21-4.1 1.04-1.08 3.17 3.09 5.79-5.65 1.04 1.08Z",clipRule:"evenodd"})))};p.displayName="GreenCheckIcon"},38316:function(e,n,t){t.d(n,{u:function(){return d}});var r=t(7378),a=t(19767),l=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const d=e=>r.createElement(a.I,((e,n)=>{for(var t in n||(n={}))o.call(n,t)&&c(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&c(e,t,n[t]);return e})({},e),"");d.displayName="QuestionIcon"},78022:function(e,n,t){t.d(n,{b:function(){return E}});var r=t(7378),a=t(10494),l=t(75374),i=t(82462),o=t(60630),s=t(94624),c=t(65759),d=t(21664),p=Object.defineProperty,u=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,n,t)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const E=(0,r.forwardRef)(((e,n)=>{var t,p=e,{caption:E,columns:b,emptyTableText:h,rows:x,verticalAlign:y}=p,j=((e,n)=>{var t={};for(var r in e)k.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&f)for(var r of f(e))n.indexOf(r)<0&&g.call(e,r)&&(t[r]=e[r]);return t})(p,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(a.X,(t=((e,n)=>{for(var t in n||(n={}))k.call(n,t)&&v(e,t,n[t]);if(f)for(var t of f(n))g.call(n,t)&&v(e,t,n[t]);return e})({fullWidth:!0},j),u(t,m({ref:n}))),E&&r.createElement(i.r,{srOnly:!0},E),r.createElement(s.n,null,r.createElement(d.H,null,b.map(((e,n)=>r.createElement(c.A,{key:n,density:"compact",bold:!0},e))))),r.createElement(l.B,null,0===x.length&&h&&r.createElement(d.H,null,r.createElement(o.n,{colSpan:b.length},h)),x.map(((e,n)=>r.createElement(d.H,{key:n},e.map(((e,n)=>r.createElement(o.n,{key:n,"data-th":b[n],verticalAlign:y},e))))))))}));E.displayName="DataTable"}}]);