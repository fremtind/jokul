"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3890],{98648:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return H},Head:function(){return B},default:function(){return F}});var l=n(47160),a=n(70079),r=n(26372),s=n.n(r);function i(e){const{0:t,1:n}=(0,a.useState)(0===e);return(0,a.useEffect)((()=>{if(0===e)return;const t=setTimeout((()=>n(!0)),e);return()=>clearTimeout(t)}),[e,n]),t}const o=e=>{let{delay:t=0,variant:n="large",textDescription:l,className:r,dataTestAutoId:o="jkl-loader",inline:c=!1,...d}=e;const m=i(t);if(t&&!m)return null;const u=s()("jkl-loader",r,{"jkl-loader--medium":"medium"===n,"jkl-loader--small":"small"===n,"jkl-loader--inline":c});return a.createElement("span",Object.assign({"aria-busy":"true",className:u,"data-testautoid":o,"data-testid":"jkl-loader",title:l},d),a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--left"}),a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--middle"}),a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--right"}),a.createElement("span",{className:"jkl-sr-only"},l))},c={choiceProps:[{name:"Variant",values:["Large","Medium","Small"],defaultValue:0}]},d=e=>{let{choiceValues:t}=e;return a.createElement("div",{className:"jkl-loader-example"},a.createElement("div",null,a.createElement(o,{role:"none presentation",variant:String(null==t?void 0:t.Variant).toLowerCase(),textDescription:"Eksempelbeskrivelse for en loader"})))},m=e=>{let{choiceValues:t}=e;return'\n<Loader\n    variant="'+String(null==t?void 0:t.Variant).toLowerCase()+'"\n    textDescription="Eksempelbeskrivelse for en loader"\n/>\n'},u=250,p=e=>{let{delay:t}=e;const{0:n,1:l}=(0,a.useState)(!0);return(0,a.useEffect)((()=>{const e=setTimeout((()=>{l(!1)}),u);return()=>clearTimeout(e)}),[]),a.createElement("div",{className:"jkl-loader-example"},a.createElement("div",{className:"jkl-card jkl-spacing-l--bottom"},a.createElement("div",{style:{minHeight:"3rem"}},n&&a.createElement(o,{role:"none presentation",textDescription:"Laster eksempel på rask loader",delay:t}),!n&&a.createElement("p",null,"Denne informasjonen tok ",u," millisekunder å hente inn"))),a.createElement("div",null,a.createElement("button",{className:"jkl-button jkl-button--tertiary",onClick:()=>{l(!0),setTimeout((()=>{l(!1)}),u)}},"Last på nytt (",u,"ms)")))},k=()=>a.createElement(p,{delay:1e3}),E=()=>a.createElement(p,{delay:0}),h=e=>{let{className:t,delay:n=0,density:l,textDescription:r="Vennligst vent",...o}=e;const c=i(n);return n&&!c?null:a.createElement("div",Object.assign({className:s()("jkl-skeleton-animation",t),"aria-busy":"true","aria-label":r},o,{"data-density":l}))},g=e=>{let{shape:t="rect",width:n,height:l,style:r,className:i,...o}=e;return a.createElement("div",Object.assign({className:s()("jkl-skeleton-element","jkl-skeleton-element--"+t,i),style:{width:n,height:l,...r}},o))},v=e=>{let{density:t,...n}=e;const l="compact"===t;return a.createElement(g,Object.assign({},n,{width:l?100:115,height:l?12:16}))},b=e=>{let{className:t,density:n,labelProps:l,inputProps:r,...i}=e;const o="compact"===n;return a.createElement("div",Object.assign({className:s()("jkl-skeleton-input",t)},i),a.createElement(v,Object.assign({density:n},l)),a.createElement(g,Object.assign({width:o?301:316,height:o?32:48},r)))},j=e=>{let{className:t,density:n,labelProps:l,inputProps:r,...i}=e;const o="compact"===n;return a.createElement("div",Object.assign({className:s()("jkl-skeleton-input",t)},i,{"data-density":n}),a.createElement(v,Object.assign({density:n},l)),a.createElement(g,Object.assign({width:o?301:316,height:o?148:168},r)))},f=e=>{let{className:t,checkboxes:n,density:l,labelProps:r,inputProps:i,...o}=e;const c="compact"===l;return a.createElement("div",Object.assign({className:s()("jkl-skeleton-input",t)},o),a.createElement(v,Object.assign({density:l},r)),Array.from(Array(n)).map(((e,t)=>a.createElement("div",{key:"jkl-skeleton-checkbox-"+t,className:"jkl-skeleton-input__checkbox"},a.createElement(g,{width:c?22:24,height:c?22:24}),a.createElement(g,Object.assign({width:c?201:216,height:c?22:24},i))))))},y=e=>{let{className:t,radioButtons:n,density:l,labelProps:r,inputProps:i,...o}=e;const c="compact"===l;return a.createElement("div",Object.assign({className:s()("jkl-skeleton-input",t)},o),a.createElement(v,Object.assign({density:l},r)),Array.from(Array(n)).map(((e,t)=>a.createElement("div",{key:"jkl-skeleton-checkbox-"+t,className:"jkl-skeleton-input__checkbox"},a.createElement(g,{width:c?22:24,height:c?22:24,style:{borderRadius:"50%"}}),a.createElement(g,Object.assign({width:c?201:216,height:c?22:24},i))))))},w=e=>{let{style:t,density:n,...l}=e;return a.createElement(g,Object.assign({},l,{height:"compact"===n?24:40,style:{borderRadius:"999px",...t}}))},N=e=>{let{className:t,density:n,width:l,style:r,...i}=e;return a.createElement("div",Object.assign({className:s()("jkl-skeleton-table",t),style:{width:l,...r}},i,{"data-density":n}))},x=e=>{let{className:t,...n}=e;return a.createElement("div",Object.assign({className:s()("jkl-skeleton-table__header",t)},n))},_=e=>{let{className:t,...n}=e;return a.createElement("div",Object.assign({className:s()("jkl-skeleton-table__row",t)},n))},S={},O=()=>a.createElement(h,{role:"none presentation"},a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:40}},a.createElement(g,{width:350,height:32}),a.createElement(b,null),a.createElement(j,null),a.createElement(f,{checkboxes:3}),a.createElement(y,{radioButtons:3}),a.createElement(w,{width:225}),a.createElement(N,null,a.createElement(x,null,a.createElement("div",{style:{width:215}},a.createElement(g,{width:115,height:16})),a.createElement("div",{style:{width:115}},a.createElement(g,{width:115,height:16}))),Array.from(Array(5)).map(((e,t)=>a.createElement(_,{key:t},a.createElement("div",{style:{width:215}},a.createElement(g,{width:t%2?115:185,height:19})),a.createElement("div",{style:{width:115}},a.createElement(g,{width:24,height:24,shape:"circle"})))))))),D=()=>'<SkeletonAnimation\n    role="none presentation" // Kun for eksempelet, ellers blir det mange alerts på siden\n>\n    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>\n        <SkeletonElement width={350} height={32} />\n        <SkeletonInput />\n        <SkeletonTextArea />\n        <SkeletonCheckboxGroup checkboxes={3} />\n        <SkeletonRadioButtonGroup radioButtons={3} />\n        <SkeletonButton width={225} />\n        <SkeletonTable>\n            <SkeletonTableHeader>\n                <div style={{ width: 215 }}>\n                    <SkeletonElement width={115} height={16} />\n                </div>\n                <div style={{ width: 115 }}>\n                    <SkeletonElement width={115} height={16} />\n                </div>\n            </SkeletonTableHeader>\n            {Array.from(Array(5)).map((_, index) => (\n                <SkeletonTableRow key={index}>\n                    <div style={{ width: 215 }}>\n                        <SkeletonElement width={index % 2 ? 115 : 185} height={19} />\n                    </div>\n                    <div style={{ width: 115 }}>\n                        <SkeletonElement width={24} height={24} shape="circle" />\n                    </div>\n                </SkeletonTableRow>\n            ))}\n        </SkeletonTable>\n    </div>\n</SkeletonAnimation>';function A(e){const t=Object.assign({p:"p",em:"em",a:"a",h2:"h2",ol:"ol",li:"li",code:"code",ul:"ul"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:r,Grid:s,DoDontExample:i}=t;return r||C("ComponentExample",!0),i||C("DoDontExample",!0),s||C("Grid",!0),n||C("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"En lasteindikator viser brukeren at systemet jobber. Vi bruker\nlasteindikatoren når vi har handlinger eller prosesser som tar lengre tid\nenn ett sekund. For større seksjoner anbefaler vi ",a.createElement("em",null,"skeleton loaders"),",\nheller enn én stor lasteindikator.")),"\n",a.createElement(r,{title:"Loader",component:d,knobs:c,codeExample:m}),"\n",a.createElement(t.p,null,"Plasser lasteindikatoren sammen med handlingen som utløser den. Den kan ha ulik posisjon og størrelse, avhengig av konteksten den skal fungere i. Lasteindikatoren tar farge etter teksten rundt."),"\n",a.createElement(s,{className:"jkl-spacing-l--bottom"},a.createElement(i,{type:"do",description:"Bruk passende størrelse",content:a.createElement(t.p,{className:"jkl-small"},"Foreløpig beregnet pris:",a.createElement(o,{className:"jkl-spacing-s--left",variant:"small",inline:!0,textDescription:"Laster eksempel på passende størrelse"}))}),a.createElement(i,{type:"dont",description:"Bruk upassende størrelse",content:a.createElement(t.p,{className:"jkl-small"},"Foreløpig beregnet pris:",a.createElement(o,{className:"jkl-spacing-s--left",variant:"large",inline:!0,textDescription:"Laster eksempel på upassende størrelse"}))})),"\n",a.createElement(t.p,null,"Dersom handlingen vanligvis tar under et halvt sekund, men ",a.createElement(t.em,null,"kan")," ta lenger tid enn ett sekund, er det lurt å vente med å vise loaderen til vi ser at den trengs tilbakemelding til brukeren."),"\n",a.createElement(s,null,a.createElement(i,{type:"do",description:"Hopp over loader for raske handlinger",content:a.createElement(k)}),a.createElement(i,{type:"dont",description:"Vis et kort glimt av en loader",content:a.createElement(E)})),"\n",a.createElement(t.p,null,"Gi brukeren tilbakemelding dersom handlingen tar lang tid (over fem sekunder). Om du har en målbar prosess, for eksempel ",a.createElement(t.a,{href:"/preview/4355-axe/komponenter/fileinput"},"filopplasting"),", bør du gi brukeren tilbakemelding på hvor langt prosessen har kommet, og hvor langt de har igjen. Se ",a.createElement(t.a,{href:"/preview/4355-axe/komponenter/progressbar"},"ProgressBar"),"."),"\n",a.createElement(t.h2,null,"Skeleton loader"),"\n",a.createElement(t.p,null,"En ",a.createElement(t.em,null,"skeleton loader")," er egentlig en samling med omriss som likner noenlunde på hva som vil vises når lastingen er ferdig. Her trenger det ikke være pixelperfekt. Poenget er at man skal få en bedre brukeropplevelse når siden etter hvert bytter ut lasteindikatoren med innholdet."),"\n",a.createElement(r,{title:"Skeleton loader",component:O,knobs:S,codeExample:D}),"\n",a.createElement(t.p,null,"For at animasjonen skal fungere best mulig er det to CSS-variabler det er greit å ha et forhold til:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,a.createElement(t.code,null,"--jkl-skeleton-sweeper-color")),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"--jkl-skeleton-sweep-duration")),"\n"),"\n",a.createElement(t.p,null,"Animasjonens effekt blir penest om ",a.createElement(t.code,null,"--jkl-skeleton-sweeper-color")," er lik bakgrunnsfargen til innholdet. Som standard er den satt til snøhvit i lyst tema og granitt i mørkt tema, det vil si likt standard bakgrunnsfarge. Om du skal ha en ",a.createElement(t.em,null,"skeleton loader")," på en annen bakgrunnsfarge bør du sette ",a.createElement(t.code,null,"--jkl-skeleton-sweeper-color")," lik den bakgrunnsfargen med CSS i ditt eget prosjekt."),"\n",a.createElement(t.p,null,"Hurtigheten på animasjonen avhenger av bredden på innholdet. Derfor kan det være lurt å justere standardverdien med ",a.createElement(t.code,null,"--jkl-skeleton-sweep-duration"),"."),"\n",a.createElement(t.h2,null,"Hvor bruker vi loaders?"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"I ",a.createElement(t.a,{href:"/preview/4355-axe/komponenter/buttons/"},"knapper")," som brukeren har klikket på"),"\n",a.createElement(t.li,null,"På et ",a.createElement(t.a,{href:"/preview/4355-axe/komponenter/card/"},"kort")," eller i felt der noe blir beregnet før innholdet vises."),"\n"),"\n",a.createElement(t.h2,null,"Hvor bruker vi skeleton loaders?"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"For å vise omriss av tabeller vi er i ferd med å laste inn"),"\n",a.createElement(t.li,null,"Som overgang mellom sider hvor vi ikke har noe innhold å vise uten å vente"),"\n"))}var P=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(A,e)):A(e)};function C(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var T=n(72285),R=n(22756),L=n(95573),V=n(1634);const B=e=>{let{pageContext:t}=e;return a.createElement(R.p,{title:t.title})},H=e=>{let{location:t,data:n,pageContext:l,children:r}=e;const{frontmatter:s}=n.page,{types:i}=l;return a.createElement(V.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(L.M1,Object.assign({},s,{versions:l.versions})),a.createElement(L.w5,s),r,i&&a.createElement(T.l,{types:i}))};function F(e){return a.createElement(H,e,a.createElement(P,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var l=n(58820),a=n(63571),r=n(87505),s=n(70079),i=n(54656);const o=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:a}=t,r=n>0,s=l-n>a;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",s)},u=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var l},k=e=>{let{types:t}=e;return s.createElement("section",{className:"mb-104 jkl-portal-paragraph"},s.createElement("h2",{className:"heading-1 mt-104"},"React API"),s.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(d):[],r=n.props?Object.values(n.props).filter(c):[],o=(e=>{var t,n,l,a,r,s;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(r=a.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(s=e.tags)&&void 0!==s&&s.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return s.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&s.createElement(i.dn,{className:"jkl-portal-code-block"},o),l.length>0&&s.createElement(p,{props:l}),r.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(p,{props:r})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return o}});var l=n(26372),a=n.n(l),r=n(49597),s=n(70079),i=n(34044);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,s.useContext)(i.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(r.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||o?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return s}});var l=n(35250),a=n(26372),r=n.n(a);const s=e=>{let{className:t,density:n,id:a,...s}=e;return(0,l.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,id:a,...s})}},63571:function(e,t,n){n.d(t,{Q:function(){return c}});var l=n(35250),a=n(68998),r=n(1386),s=n(26372),i=n.n(s),o=n(70079);const c=e=>{let{children:t,title:n,className:s,startExpanded:c=!1,onClick:d,id:m,...u}=e;const[p,k]=(0,o.useState)(c),[E]=(0,o.useState)((()=>c)),{detailsRef:h,summaryRef:g,contentRef:v,onSummaryClick:b}=(0,r.E)({onOpenChange:(e,t)=>{k(e),d&&d(t,e)},isExpanded:E});return(0,l.jsxs)("details",{"data-testid":"jkl-accordion-item",...u,className:i()("jkl-accordion-item",s),ref:h,id:m,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:b,ref:g,children:[n,(0,l.jsx)(a.K,{className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:v,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var l=n(70079),a=n(41699),r=n(65174),s=n(6914),i=n(82546),o=n(39126),c=n(66169),d=n(94509);const m=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:u,rows:p,verticalAlign:k,...E}=e;return l.createElement(a.i,{fullWidth:!0,...E,ref:t},n&&l.createElement(s.R,{srOnly:!0},n),l.createElement(o.s,null,l.createElement(d.S,null,m.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(r.R,null,0===p.length&&u&&l.createElement(d.S,null,l.createElement(i.p,{colSpan:m.length},u)),p.map(((e,t)=>l.createElement(d.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":m[t],verticalAlign:k},e))))))))}));m.displayName="DataTable"}}]);