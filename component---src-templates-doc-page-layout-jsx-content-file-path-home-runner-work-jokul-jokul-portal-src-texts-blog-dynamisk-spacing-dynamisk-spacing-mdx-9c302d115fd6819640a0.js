"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3009],{46279:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return k},Head:function(){return g},default:function(){return v}});var a=t(75615),r=t(70079),l=t(50601);const s=[["spacing-3xs","spacing-2"],["spacing-2xs","spacing-4"],["spacing-xs","spacing-8"],["spacing-s","spacing-12"],["spacing-m","spacing-16"],["spacing-l","spacing-24"],["(fantes ikke)","spacing-32"],["spacing-xl","spacing-40"],["spacing-2xl","spacing-64"],["spacing-3xl","spacing-104"],["spacing-4xl","spacing-168"]],i=()=>r.createElement(l.w,{columns:["Gammelt steg","Nytt steg"],rows:s});function o(e){const n=Object.assign({p:"p",code:"code",strong:"strong",h2:"h2",pre:"pre",h3:"h3"},(0,a.ah)(),e.components),{Ingress:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(t,null,r.createElement(n.p,null,"Med siste versjon av ",r.createElement(n.code,null,"jkl-core")," har vi gått over til en ny spacing-skala basert på pikselverdier, og det er lagt\nbedre til rette for spacing som endrer seg etter skjermstørrelse. Her er noen tips til hvordan du kommer i gang med\nde nye funksjonene.")),"\n",r.createElement("picture",{className:"jkl-portal-image"},r.createElement("img",{className:"jkl-portal-image__img jkl-spacing-40--bottom",alt:"",loading:"lazy",decoding:"async",src:"/assets/blog/updates/november-2022/nov-dynamisk-spacing.png"})),"\n",r.createElement(n.p,null,"Aller først: ",r.createElement(n.strong,null,"Endringene er ikke breaking"),". Det vil si at du fortsatt kan bruke spacing-verdiene og -klassene du allerede har i koden din. De gamle verdiene vil imidlertid kunne bli avviklet helt på et senere tidspunkt, så vi anbefaler uansett at du bytter ut gamle verdier når du kommer over dem i koden din."),"\n",r.createElement(n.h2,null,"Gamle og nye verdier"),"\n",r.createElement(n.p,null,"Alle stegene i spacing-skalaen har nå navn etter pikselverdien de representerer. Det har også kommet inn et nytt steg i skalaen, ",r.createElement(n.code,null,"spacing-32"),". Bruk tabellen under for å oversette fra de gamle til de nye stegene."),"\n",r.createElement(i),"\n",r.createElement(n.h2,null,"Nye Sass- og CSS-variabler"),"\n",r.createElement(n.p,null,"Alle de nye spacingstegene er tilgjengelige som variabler i Sass når du har tatt i bruk ",r.createElement(n.code,null,"@fremtind/jkl-core/jkl"),", og som CSS-variabler dersom core-stilarket er lastet inn på siden. Hvis du tidligere har brukt Sass-variablene kan du enkelt gjøre en search and replace fra tabellen over for å oppgradere til de nye verdiene."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},'// For å bruke Sass-variablene må du ta inn jkl-biblioteket\n@use "~@fremtind/jkl-core/jkl";\n\n.min-komponent {\n    padding-top: jkl.$spacing-16;\n}\n\n// CSS-variablene kan brukes direkte\n.min-andre-komponent {\n    margin-block: var(--jkl-spacing-64);\n}\n')),"\n",r.createElement(n.h2,null,"Nye nytteklasser og ny Sass-mixin"),"\n",r.createElement(n.p,null,"Nytteklassene for spacing setter en spacing-verdi som margin på en eller flere sider av et element, og kan brukes direkte i HTML- eller JSX-koden din. Den nye Sass-mixinen fungerer på samme måte, og kan inkluderes i klassene du skriver for komponentene dine."),"\n",r.createElement(n.h3,null,"Nytteklasser"),"\n",r.createElement(n.p,null,"Disse fungerer som før, ved at de setter en verdi fra spacingskalaene som margin på elementet som har klassen. Det finnes varianter for å sette margin på ",r.createElement(n.code,null,"top"),", ",r.createElement(n.code,null,"right"),", ",r.createElement(n.code,null,"bottom")," og ",r.createElement(n.code,null,"left"),", samt for ",r.createElement(n.code,null,"all"),"e sider. Klassene kan brukes slik:"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-html"},'<div class="jkl-spacing-64--top jkl-spacing-64--bottom">\n    <span class="jkl-spacing-16--all">Hei, verden!</span>\n</div>\n')),"\n",r.createElement(n.p,null,"Du kan enkelt konvertere fra de gamle til de nye nytteklassene ved å gjøre en search and replace fra tabellen over."),"\n",r.createElement(n.h3,null,"Sass-mixin"),"\n",r.createElement(n.p,null,"Dette er en helt ny mixin som kommer med ",r.createElement(n.code,null,"jkl"),"-biblioteket. Akkurat som nytteklassene setter den marginer i klassen de er en del av. Du bruker mixinen slik:"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},'@use "~@fremtind/jkl-core/jkl";\n\n.min-komponent {\n    @include jkl-spacing("64"); // Setter spacingen på alle sider, lik margin: jkl.$spacing-64;\n}\n\n.min-andre-komponent {\n    @include jkl-spacing("64", "left"); // Setter spacing kun på venstre side\n}\n')),"\n",r.createElement(n.h2,null,"Dynamisk spacing"),"\n",r.createElement(n.p,null,"Den største nyheten med de nye spacing-verdiene er at vi også legger bedre til rette for spacinger som endrer seg ut fra skjermstørrelse. Dette er ganske vanlig på for eksempel layout-komponenter, og vi har derfor laget CSS-variabler og nytteklasser for de vanligste kombinasjonene. Trenger du andre kombinasjoner av verdier kan du bruke Sass-mixinen."),"\n",r.createElement(n.p,null,"Det finnes variabler og nytteklasser med både to og tre steg: Det første steget brukes fra små skjermer, det andre steget brukes fra mellomstore skjermer, og det tredje steget (hvis det finnes) brukes fra store skjermer. Utiver at de har flere steg i seg brukes variablene og nytteklassene på samme måte som sine statiske varianter:"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-html"},'<div class="jkl-spacing-64-104--top">\n    <span class="jkl-spacing-16-24-32--all">Hei, verden!</span>\n</div>\n')),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-css"},".min-komponent {\n    margin-block: var(--jkl-spacing-40-64);\n}\n")),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},'@use "~@fremtind/jkl-core/jkl";\n\n.min-komponent {\n    @include jkl-spacing("64/104");\n}\n\n.min-andre-komponent {\n    @include jkl-spacing("16/24/32", "bottom");\n}\n')),"\n",r.createElement(n.p,null,"Hvis du vil ha samme spacing på små og mellomstore skjermer bruker du varianten med tre steg, og skriver samme verdi for de to første stegene: ",r.createElement(n.code,null,"var(--jkl-spacing-16-16-24)"),", ",r.createElement(n.code,null,'jkl.spacing("64/64/104")')," eller ",r.createElement(n.code,null,'class="jkl-spacing-24-24-40"')),"\n",r.createElement(n.h2,null,"Jøkul-teamet hjelper deg gjerne!"),"\n",r.createElement(n.p,null,"Vi har forsøkt å gjøre det så enkelt som mulig å ta i bruk den nye spacing-skalaen, men hvis noe er uklart eller du står fast på noen måte er det bare å ta kontakt med oss i Jøkul-teamet! Vi hjelper deg gjerne med å komme i gang eller å finne ut av feil."),"\n",r.createElement(n.p,null,"God spacing!"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?r.createElement(n,e,r.createElement(o,e)):o(e)};var m=t(71111),d=t(16569),p=t(72892),u=t(479);const g=e=>{let{pageContext:n}=e;return r.createElement(d.p,{title:n.title})},k=e=>{let{location:n,data:t,pageContext:a,children:l}=e;const{frontmatter:s}=t.page,{types:i}=a;return r.createElement(u.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(p.M1,Object.assign({},s,{versions:a.versions})),r.createElement(p.w5,s),l,i&&r.createElement(m.l,{types:i}))};function v(e){return r.createElement(k,e,r.createElement(c,e))}},71111:function(e,n,t){t.d(n,{l:function(){return u}});var a=t(57986),r=t(80252),l=t(50601),s=t(70079);const i=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),o=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},m=(e,n)=>{const{scrollLeft:t,scrollWidth:a}=e,{clientWidth:r}=n,l=t>0,s=a-t>r;n.classList.toggle("left-shadow",l),n.classList.toggle("right-shadow",s)},d=e=>{const n=e.target,t=n.parentElement;m(n,t)},p=e=>{let{props:n}=e;const t=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&m(n,e)}}))})),a=t.current.parentElement.parentElement;n.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=n,a.map((e=>{var n,t;return[e.name?i(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?i(e.type.name):""]})))})));var a},u=e=>{let{types:n}=e;return s.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},s.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),s.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(a.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const a=t.props?Object.values(t.props).filter(c):[],l=t.props?Object.values(t.props).filter(o):[];return s.createElement(r.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},a.length>0&&s.createElement(p,{props:a}),l.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(p,{props:l})))}))))}},479:function(e,n,t){t.d(n,{M:function(){return o}});var a=t(26372),r=t.n(a),l=t(79363),s=t(70079),i=t(56024);const o=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:a}=(0,s.useContext)(i.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(l.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||o?0:.35},className:r()("jkl-portal__main",n),id:"innhold"},t)}},57986:function(e,n,t){t.d(n,{U:function(){return s}});var a=t(26372),r=t.n(a),l=t(70079);const s=e=>{let{className:n,density:t,...a}=e;return l.createElement("div",{"data-testid":"jkl-accordion",className:r()("jkl-accordion",n),"data-density":t,...a})}},80252:function(e,n,t){t.d(n,{Q:function(){return c}});var a=t(14092),r=t(89292),l=t(26372),s=t.n(l),i=t(70079);const o=e=>{let{expanded:n=!1,className:t}=e;return i.createElement("span",{className:s()("jkl-accordion-item__arrow",t,{"jkl-accordion-item__arrow--expanded":n})},i.createElement("svg",{className:"jkl-accordion-item__arrow-down",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M11.15 8.51998L10.35 7.73998L6.54999 11.58L6.55 0.699982L5.43 0.699982L5.43 11.56L1.67 7.73998L0.869995 8.51998L6.01 13.54L11.15 8.51998Z",fill:"currentColor"})),i.createElement("svg",{className:"jkl-accordion-item__arrow-up",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M0.940002 5.71998L1.74 6.49998L5.54 2.65998V13.54H6.66V2.67998L10.42 6.49998L11.22 5.71998L6.08 0.699982L0.940002 5.71998Z",fill:"currentColor"})))},c=e=>{let{children:n,title:t,className:l,startExpanded:c=!1,onClick:m,...d}=e;const p=(0,a.M)("title"),u=(0,a.M)("content"),{0:g,1:k}=(0,i.useState)(c),[v]=(0,r.v)(g,{easing:"exit",timing:"expressive"});return i.createElement("div",{"data-testid":"jkl-accordion-item",...d,className:s()("jkl-accordion-item",l,{"jkl-accordion-item--expanded":g})},i.createElement("button",{id:p,className:"jkl-accordion-item__title",type:"button","aria-expanded":g,"aria-controls":u,onClick:e=>{const n=!g;k(n),m&&m(e,n)}},t,i.createElement(o,{expanded:g})),i.createElement("div",{id:u,ref:v,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":p,hidden:!g},i.createElement("div",{className:"jkl-accordion-item__content"},n)))}},50601:function(e,n,t){t.d(n,{w:function(){return d}});var a=t(70079),r=t(64327),l=t(1807),s=t(11348),i=t(12675),o=t(14687),c=t(61211),m=t(39666);const d=(0,a.forwardRef)(((e,n)=>{let{caption:t,columns:d,emptyTableText:p,rows:u,verticalAlign:g,...k}=e;return a.createElement(r.i,{fullWidth:!0,...k,ref:n},t&&a.createElement(s.R,{srOnly:!0},t),a.createElement(o.s,null,a.createElement(m.S,null,d.map(((e,n)=>a.createElement(c.x,{key:n,density:"compact",bold:!0},e))))),a.createElement(l.R,null,0===u.length&&p&&a.createElement(m.S,null,a.createElement(i.p,{colSpan:d.length},p)),u.map(((e,n)=>a.createElement(m.S,{key:n},e.map(((e,n)=>a.createElement(i.p,{key:n,"data-th":d[n],verticalAlign:g},e))))))))}));d.displayName="DataTable"}}]);