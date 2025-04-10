"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3890],{45685:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return Y},Head:function(){return X},default:function(){return $}});var l=n(64717),a=n(92379),r=n(99767),s=n(80324),i=n.n(s);function o(e){const{0:t,1:n}=(0,a.useState)(0===e);return(0,a.useEffect)((()=>{if(0===e)return;const t=setTimeout((()=>n(!0)),e);return()=>clearTimeout(t)}),[e,n]),t}const c=["delay","variant","textDescription","className","dataTestAutoId","inline"],m=e=>{let{delay:t=0,variant:n="large",textDescription:l,className:s,dataTestAutoId:m="jkl-loader",inline:d=!1}=e,p=(0,r.Z)(e,c);const u=o(t);if(t&&!u)return null;const k=i()("jkl-loader",s,{"jkl-loader--medium":"medium"===n,"jkl-loader--small":"small"===n,"jkl-loader--inline":d});return a.createElement("span",Object.assign({"aria-busy":"true",className:k,"data-testautoid":m,"data-testid":"jkl-loader",title:l},p),a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--left"}),a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--middle"}),a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--right"}),a.createElement("span",{className:"jkl-sr-only"},l))},d={choiceProps:[{name:"Variant",values:["Large","Medium","Small"],defaultValue:0}]},p=e=>{let{choiceValues:t}=e;return a.createElement("div",{className:"jkl-loader-example"},a.createElement("div",null,a.createElement(m,{role:"none presentation",variant:String(null==t?void 0:t.Variant).toLowerCase(),textDescription:"Eksempelbeskrivelse for en loader"})))},u=e=>{let{choiceValues:t}=e;return'\n<Loader\n    variant="'+String(null==t?void 0:t.Variant).toLowerCase()+'"\n    textDescription="Eksempelbeskrivelse for en loader"\n/>\n'},k=250,E=e=>{let{delay:t}=e;const{0:n,1:l}=(0,a.useState)(!0);return(0,a.useEffect)((()=>{const e=setTimeout((()=>{l(!1)}),k);return()=>clearTimeout(e)}),[]),a.createElement("div",{className:"jkl-loader-example"},a.createElement("div",{className:"jkl-card jkl-spacing-l--bottom"},a.createElement("div",{style:{minHeight:"3rem"}},n&&a.createElement(m,{role:"none presentation",textDescription:"Laster eksempel på rask loader",delay:t}),!n&&a.createElement("p",null,"Denne informasjonen tok ",k," millisekunder å hente inn"))),a.createElement("div",null,a.createElement("button",{className:"jkl-button jkl-button--tertiary",onClick:()=>{l(!0),setTimeout((()=>{l(!1)}),k)}},"Last på nytt (",k,"ms)")))},h=()=>a.createElement(E,{delay:1e3}),g=()=>a.createElement(E,{delay:0}),b=["className","delay","density","textDescription"],v=e=>{let{className:t,delay:n=0,density:l,textDescription:s="Vennligst vent"}=e,c=(0,r.Z)(e,b);const m=o(n);return n&&!m?null:a.createElement("div",Object.assign({className:i()("jkl-skeleton-animation",t),"aria-busy":"true","aria-label":s},c,{"data-density":l}))},f=["shape","width","height","style","className"],y=e=>{let{shape:t="rect",width:n,height:l,style:s,className:o}=e,c=(0,r.Z)(e,f);return a.createElement("div",Object.assign({className:i()("jkl-skeleton-element","jkl-skeleton-element--"+t,o),style:Object.assign({width:n,height:l},s)},c))},j=["density"],w=e=>{let{density:t}=e,n=(0,r.Z)(e,j);const l="compact"===t;return a.createElement(y,Object.assign({},n,{width:l?100:115,height:l?12:16}))},N=["className","density","labelProps","inputProps"],x=e=>{let{className:t,density:n,labelProps:l,inputProps:s}=e,o=(0,r.Z)(e,N);const c="compact"===n;return a.createElement("div",Object.assign({className:i()("jkl-skeleton-input",t)},o),a.createElement(w,Object.assign({density:n},l)),a.createElement(y,Object.assign({width:c?301:316,height:c?32:48},s)))},_=["className","density","labelProps","inputProps"],O=e=>{let{className:t,density:n,labelProps:l,inputProps:s}=e,o=(0,r.Z)(e,_);const c="compact"===n;return a.createElement("div",Object.assign({className:i()("jkl-skeleton-input",t)},o,{"data-density":n}),a.createElement(w,Object.assign({density:n},l)),a.createElement(y,Object.assign({width:c?301:316,height:c?148:168},s)))},S=["className","checkboxes","density","labelProps","inputProps"],P=e=>{let{className:t,checkboxes:n,density:l,labelProps:s,inputProps:o}=e,c=(0,r.Z)(e,S);const m="compact"===l;return a.createElement("div",Object.assign({className:i()("jkl-skeleton-input",t)},c),a.createElement(w,Object.assign({density:l},s)),Array.from(Array(n)).map(((e,t)=>a.createElement("div",{key:"jkl-skeleton-checkbox-"+t,className:"jkl-skeleton-input__checkbox"},a.createElement(y,{width:m?22:24,height:m?22:24}),a.createElement(y,Object.assign({width:m?201:216,height:m?22:24},o))))))},D=["className","radioButtons","density","labelProps","inputProps"],A=e=>{let{className:t,radioButtons:n,density:l,labelProps:s,inputProps:o}=e,c=(0,r.Z)(e,D);const m="compact"===l;return a.createElement("div",Object.assign({className:i()("jkl-skeleton-input",t)},c),a.createElement(w,Object.assign({density:l},s)),Array.from(Array(n)).map(((e,t)=>a.createElement("div",{key:"jkl-skeleton-checkbox-"+t,className:"jkl-skeleton-input__checkbox"},a.createElement(y,{width:m?22:24,height:m?22:24,style:{borderRadius:"50%"}}),a.createElement(y,Object.assign({width:m?201:216,height:m?22:24},o))))))},T=["style","density"],C=e=>{let{style:t,density:n}=e,l=(0,r.Z)(e,T);return a.createElement(y,Object.assign({},l,{height:"compact"===n?24:40,style:Object.assign({borderRadius:"999px"},t)}))},R=["className","density","width","style"],L=["className"],Z=["className"],B=e=>{let{className:t,density:n,width:l,style:s}=e,o=(0,r.Z)(e,R);return a.createElement("div",Object.assign({className:i()("jkl-skeleton-table",t),style:Object.assign({width:l},s)},o,{"data-density":n}))},I=e=>{let{className:t}=e,n=(0,r.Z)(e,L);return a.createElement("div",Object.assign({className:i()("jkl-skeleton-table__header",t)},n))},H=e=>{let{className:t}=e,n=(0,r.Z)(e,Z);return a.createElement("div",Object.assign({className:i()("jkl-skeleton-table__row",t)},n))},V={},F=()=>a.createElement(v,{role:"none presentation"},a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:40}},a.createElement(y,{width:350,height:32}),a.createElement(x,null),a.createElement(O,null),a.createElement(P,{checkboxes:3}),a.createElement(A,{radioButtons:3}),a.createElement(C,{width:225}),a.createElement(B,null,a.createElement(I,null,a.createElement("div",{style:{width:215}},a.createElement(y,{width:115,height:16})),a.createElement("div",{style:{width:115}},a.createElement(y,{width:115,height:16}))),Array.from(Array(5)).map(((e,t)=>a.createElement(H,{key:t},a.createElement("div",{style:{width:215}},a.createElement(y,{width:t%2?115:185,height:19})),a.createElement("div",{style:{width:115}},a.createElement(y,{width:24,height:24,shape:"circle"})))))))),M=()=>'<SkeletonAnimation\n    role="none presentation" // Kun for eksempelet, ellers blir det mange alerts på siden\n>\n    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>\n        <SkeletonElement width={350} height={32} />\n        <SkeletonInput />\n        <SkeletonTextArea />\n        <SkeletonCheckboxGroup checkboxes={3} />\n        <SkeletonRadioButtonGroup radioButtons={3} />\n        <SkeletonButton width={225} />\n        <SkeletonTable>\n            <SkeletonTableHeader>\n                <div style={{ width: 215 }}>\n                    <SkeletonElement width={115} height={16} />\n                </div>\n                <div style={{ width: 115 }}>\n                    <SkeletonElement width={115} height={16} />\n                </div>\n            </SkeletonTableHeader>\n            {Array.from(Array(5)).map((_, index) => (\n                <SkeletonTableRow key={index}>\n                    <div style={{ width: 215 }}>\n                        <SkeletonElement width={index % 2 ? 115 : 185} height={19} />\n                    </div>\n                    <div style={{ width: 115 }}>\n                        <SkeletonElement width={24} height={24} shape="circle" />\n                    </div>\n                </SkeletonTableRow>\n            ))}\n        </SkeletonTable>\n    </div>\n</SkeletonAnimation>';function G(e){const t=Object.assign({p:"p",em:"em",a:"a",h2:"h2",ol:"ol",li:"li",code:"code",ul:"ul"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:r,Grid:s,DoDontExample:i}=t;return r||Q("ComponentExample",!0),i||Q("DoDontExample",!0),s||Q("Grid",!0),n||Q("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"En lasteindikator viser brukeren at systemet jobber. Vi bruker\nlasteindikatoren når vi har handlinger eller prosesser som tar lengre tid\nenn ett sekund. For større seksjoner anbefaler vi ",a.createElement("em",null,"skeleton loaders"),",\nheller enn én stor lasteindikator.")),"\n",a.createElement(r,{title:"Loader",component:p,knobs:d,codeExample:u}),"\n",a.createElement(t.p,null,"Plasser lasteindikatoren sammen med handlingen som utløser den. Den kan ha ulik posisjon og størrelse, avhengig av konteksten den skal fungere i. Lasteindikatoren tar farge etter teksten rundt."),"\n",a.createElement(s,{className:"jkl-spacing-l--bottom"},a.createElement(i,{type:"do",description:"Bruk passende størrelse",content:a.createElement(t.p,{className:"jkl-small"},"Foreløpig beregnet pris:",a.createElement(m,{className:"jkl-spacing-s--left",variant:"small",inline:!0,textDescription:"Laster eksempel på passende størrelse"}))}),a.createElement(i,{type:"dont",description:"Bruk upassende størrelse",content:a.createElement(t.p,{className:"jkl-small"},"Foreløpig beregnet pris:",a.createElement(m,{className:"jkl-spacing-s--left",variant:"large",inline:!0,textDescription:"Laster eksempel på upassende størrelse"}))})),"\n",a.createElement(t.p,null,"Dersom handlingen vanligvis tar under et halvt sekund, men ",a.createElement(t.em,null,"kan")," ta lenger tid enn ett sekund, er det lurt å vente med å vise loaderen til vi ser at den trengs tilbakemelding til brukeren."),"\n",a.createElement(s,null,a.createElement(i,{type:"do",description:"Hopp over loader for raske handlinger",content:a.createElement(h)}),a.createElement(i,{type:"dont",description:"Vis et kort glimt av en loader",content:a.createElement(g)})),"\n",a.createElement(t.p,null,"Gi brukeren tilbakemelding dersom handlingen tar lang tid (over fem sekunder). Om du har en målbar prosess, for eksempel ",a.createElement(t.a,{href:"/preview/4503-button-group/komponenter/fileinput"},"filopplasting"),", bør du gi brukeren tilbakemelding på hvor langt prosessen har kommet, og hvor langt de har igjen. Se ",a.createElement(t.a,{href:"/preview/4503-button-group/komponenter/progressbar"},"ProgressBar"),"."),"\n",a.createElement(t.h2,null,"Skeleton loader"),"\n",a.createElement(t.p,null,"En ",a.createElement(t.em,null,"skeleton loader")," er egentlig en samling med omriss som likner noenlunde på hva som vil vises når lastingen er ferdig. Her trenger det ikke være pixelperfekt. Poenget er at man skal få en bedre brukeropplevelse når siden etter hvert bytter ut lasteindikatoren med innholdet."),"\n",a.createElement(r,{title:"Skeleton loader",component:F,knobs:V,codeExample:M}),"\n",a.createElement(t.p,null,"For at animasjonen skal fungere best mulig er det to CSS-variabler det er greit å ha et forhold til:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,a.createElement(t.code,null,"--jkl-skeleton-sweeper-color")),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"--jkl-skeleton-sweep-duration")),"\n"),"\n",a.createElement(t.p,null,"Animasjonens effekt blir penest om ",a.createElement(t.code,null,"--jkl-skeleton-sweeper-color")," er lik bakgrunnsfargen til innholdet. Som standard er den satt til snøhvit i lyst tema og granitt i mørkt tema, det vil si likt standard bakgrunnsfarge. Om du skal ha en ",a.createElement(t.em,null,"skeleton loader")," på en annen bakgrunnsfarge bør du sette ",a.createElement(t.code,null,"--jkl-skeleton-sweeper-color")," lik den bakgrunnsfargen med CSS i ditt eget prosjekt."),"\n",a.createElement(t.p,null,"Hurtigheten på animasjonen avhenger av bredden på innholdet. Derfor kan det være lurt å justere standardverdien med ",a.createElement(t.code,null,"--jkl-skeleton-sweep-duration"),"."),"\n",a.createElement(t.h2,null,"Hvor bruker vi loaders?"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"I ",a.createElement(t.a,{href:"/preview/4503-button-group/komponenter/buttons/"},"knapper")," som brukeren har klikket på"),"\n",a.createElement(t.li,null,"På et ",a.createElement(t.a,{href:"/preview/4503-button-group/komponenter/card/"},"kort")," eller i felt der noe blir beregnet før innholdet vises."),"\n"),"\n",a.createElement(t.h2,null,"Hvor bruker vi skeleton loaders?"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"For å vise omriss av tabeller vi er i ferd med å laste inn"),"\n",a.createElement(t.li,null,"Som overgang mellom sider hvor vi ikke har noe innhold å vise uten å vente"),"\n"))}var U=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(G,e)):G(e)};function Q(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var W=n(75482),q=n(96036),K=n(59001),J=n(65458),z=n(79379);const X=e=>{let{pageContext:t}=e;return a.createElement(q.p,{title:t.title})},Y=e=>{let{location:t,data:n,pageContext:l,children:r}=e;const{frontmatter:s}=n.page,{types:i}=l;return a.createElement(z.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(J.M1,Object.assign({},s,{versions:l.versions})),t.pathname.includes("komponenter")&&a.createElement(K.c,{variant:"komponent",component:s.title}),a.createElement(J.w5,s),r,i&&a.createElement(W.l,{types:i}))};function $(e){return a.createElement(Y,e,a.createElement(U,e))}},75482:function(e,t,n){n.d(t,{l:function(){return k}});var l=n(96845),a=n(41162),r=n(74797),s=n(92379),i=n(25329);const o=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:a}=t,r=n>0,s=l-n>a;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",s)},p=e=>{const t=e.target,n=t.parentElement;d(t,n)},u=e=>{let{props:t}=e;const n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var l},k=e=>{let{types:t}=e;return s.createElement("section",{className:"mb-104 jkl-portal-paragraph"},s.createElement("h2",{className:"heading-1 mt-104"},"React API"),s.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],r=n.props?Object.values(n.props).filter(c):[],o=(e=>{var t,n,l,a,r,s;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(r=a.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(s=e.tags)&&void 0!==s&&s.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return s.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&s.createElement(i.dn,{className:"jkl-portal-code-block"},o),l.length>0&&s.createElement(u,{props:l}),r.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(u,{props:r})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return i}});var l=n(48467),a=n(58990),r=n(92379),s=n(25329);const i=e=>{let{variant:t,component:n}=e;return r.createElement("section",{className:"suggestion-block"},r.createElement("div",{className:"suggestion-block__content"},r.createElement(a.U,null),r.createElement(s.nv,null,o[t].text)),r.createElement(l.r,{href:o[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},o={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,t,n){n.d(t,{M:function(){return o}});var l=n(80324),a=n.n(l),r=n(24157),s=n(92379),i=n(69215);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,s.useContext)(i.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(r.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||o?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},96845:function(e,t,n){n.d(t,{U:function(){return o}});var l=n(99767),a=n(651),r=n(80324),s=n.n(r);const i=["className","density","id"],o=e=>{let{className:t,density:n,id:r}=e,o=(0,l.Z)(e,i);return(0,a.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:s()("jkl-accordion",t),"data-density":n,id:r},o))}},41162:function(e,t,n){n.d(t,{Q:function(){return d}});var l=n(99767),a=n(651),r=n(42054),s=n(95020),i=n(80324),o=n.n(i),c=n(92379);const m=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:n,className:i,startExpanded:d=!1,onClick:p,id:u}=e,k=(0,l.Z)(e,m);const[E,h]=(0,c.useState)(d),[g]=(0,c.useState)((()=>d)),{detailsRef:b,summaryRef:v,contentRef:f,onSummaryClick:y}=(0,s.E)({onOpenChange:(e,t)=>{h(e),p&&p(t,e)},isExpanded:g});return(0,a.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:o()("jkl-accordion-item",i),ref:b,id:u,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:y,ref:v,children:[n,(0,a.jsx)(r.K,{className:"jkl-accordion-item__arrow",pointingDown:!E,bold:E})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:f,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},58990:function(e,t,n){n.d(t,{U:function(){return m}});var l=n(92379),a=n(55650),r=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>l.createElement(a.J,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))o.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},74797:function(e,t,n){n.d(t,{w:function(){return b}});var l=n(92379),a=n(94207),r=n(49309),s=n(36774),i=n(64081),o=n(64483),c=n(42104),m=n(98746),d=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const b=(0,l.forwardRef)(((e,t)=>{var n,d=e,{caption:b,columns:v,emptyTableText:f,rows:y,verticalAlign:j}=d,w=((e,t)=>{var n={};for(var l in e)E.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&k)for(var l of k(e))t.indexOf(l)<0&&h.call(e,l)&&(n[l]=e[l]);return n})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return l.createElement(a.i,(n=((e,t)=>{for(var n in t||(t={}))E.call(t,n)&&g(e,n,t[n]);if(k)for(var n of k(t))h.call(t,n)&&g(e,n,t[n]);return e})({fullWidth:!0},w),p(n,u({ref:t}))),b&&l.createElement(s.R,{srOnly:!0},b),l.createElement(o.s,null,l.createElement(m.S,null,v.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(r.R,null,0===y.length&&f&&l.createElement(m.S,null,l.createElement(i.p,{colSpan:v.length},f)),y.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":v[t],verticalAlign:j},e))))))))}));b.displayName="DataTable"}}]);