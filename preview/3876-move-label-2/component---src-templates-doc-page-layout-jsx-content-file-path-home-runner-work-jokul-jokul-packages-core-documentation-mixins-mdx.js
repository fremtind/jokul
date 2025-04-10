"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9710],{92858:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return d},default:function(){return p}});var l=n(47160),r=n(70079);function a(e){const t=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre"},(0,l.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Vi bruker Sass for å lage CSSen i Jøkul, og har etter hvert fått et større bibliotek med mixins og funksjoner.")),"\n",r.createElement(t.p,null,"Mange av disse hjelperne er generiske nok til å være nyttige også i egne applikasjoner. Hvis prosjektet ditt bruker Sass er det lurt å ta en nærmere titt på hva Jøkul har å tilby."),"\n",r.createElement(t.p,null,"Vi har for øvrig en guide for ",r.createElement(t.a,{href:"/preview/3876-move-label-2/guider/sass"},"Hvordan skrive Sass i Jøkul")," som kan være en inspirasjon til hvordan dere skriver Sass i egne prosjekter."),"\n",r.createElement(t.h2,null,"Hvilke mixins finnes?"),"\n",r.createElement(t.p,null,"For en fullstendig oversikt er det best å ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/tree/main/packages/core/jkl"},"se på kildekoden"),"."),"\n",r.createElement(t.p,null,"Et utvalg av de mest brukte internt i Jøkul:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Funksjonen ",r.createElement(t.code,null,"rem()")," hjelper med å oversette et design i pixler til ",r.createElement(t.code,null,"rem"),"."),"\n",r.createElement(t.li,null,"Mixinene ",r.createElement(t.code,null,"small-screen")," og ",r.createElement(t.code,null,"from-medium-screen")," er nyttige for responsiv design."),"\n",r.createElement(t.li,null,"Det samme er ",r.createElement(t.code,null,"screen-from()"),", ",r.createElement(t.code,null,"screen-to()"),", og ",r.createElement(t.code,null,"screen-between()"),"."),"\n",r.createElement(t.li,null,"Mixen ",r.createElement(t.code,null,"motion()")," hjelper deg med å få animert ting med samme easing og timing som Jøkul."),"\n",r.createElement(t.li,null,r.createElement(t.code,null,"light-mode-variables")," og ",r.createElement(t.code,null,"dark-mode-variables")," hjelper med å støtte begge temaene."),"\n"),"\n",r.createElement(t.h2,null,"Hvordan bruker jeg dem?"),"\n",r.createElement(t.p,null,"Alle hjelperne finnes i ",r.createElement(t.code,null,"jkl"),"-modulen i ",r.createElement(t.code,null,"@fremtind/jkl-core"),"."),"\n",r.createElement(t.p,null,"Om du har en editor med god code completion for Sass får du en oversikt over alt som er tilgjengelig etter å ha skrevet ",r.createElement(t.code,null,"jkl."),". Hvis du bruker Visual Studio Code er extensionen ",r.createElement(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=SomewhatStationery.some-sass"},"Some Sass")," anbefalt. Med den får du code suggestions for moduler og visning av SassDoc ved hover, blant annet."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-scss"},'@use "@fremtind/jkl-core/jkl";\n\n.min-custom-ting {\n    min-width: jkl.rem(280px);\n\n    @include jkl.screen-from(4096px) {\n        padding: jkl.$spacing-3xl;\n    }\n}\n')))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)};var i=n(72285),s=n(22756),c=n(95573),m=n(1634);const d=e=>{let{pageContext:t}=e;return r.createElement(s.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:o}=n.page,{types:s}=l;return r.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(c.M1,Object.assign({},o,{versions:l.versions})),r.createElement(c.w5,o),a,s&&r.createElement(i.l,{types:s}))};function p(e){return r.createElement(u,e,r.createElement(o,e))}},72285:function(e,t,n){n.d(t,{l:function(){return v}});var l=n(78217),r=n(41994),a=n(87505),o=n(70079),i=n(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,o=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},v=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,l,r,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),l.length>0&&o.createElement(p,{props:l}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var l=n(26372),r=n.n(l),a=n(49597),o=n(70079),i=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return o}});var l=n(26372),r=n.n(l),a=n(70079);const o=e=>{let{className:t,density:n,id:l,...o}=e;return a.createElement("section",{role:"group","data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,id:l,...o})}},41994:function(e,t,n){n.d(t,{Q:function(){return s}});var l=n(53484),r=n(1386),a=n(26372),o=n.n(a),i=n(70079);const s=e=>{let{children:t,title:n,className:a,startExpanded:s=!1,onClick:c,id:m,...d}=e;const{0:u,1:p}=(0,i.useState)(s),{0:v}=(0,i.useState)((()=>s)),{detailsRef:E,summaryRef:k,contentRef:f,onSummaryClick:g}=(0,r.E)({onOpenChange:(e,t)=>{p(e),c&&c(t,e)},isExpanded:v});return i.createElement("details",{"data-testid":"jkl-accordion-item",...d,className:o()("jkl-accordion-item",a),ref:E,id:m},i.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:g,ref:k},n,i.createElement(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})),i.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:f},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var l=n(70079),r=n(41699),a=n(65174),o=n(6914),i=n(82546),s=n(39126),c=n(66169),m=n(94509);const d=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:u,rows:p,verticalAlign:v,...E}=e;return l.createElement(r.i,{fullWidth:!0,...E,ref:t},n&&l.createElement(o.R,{srOnly:!0},n),l.createElement(s.s,null,l.createElement(m.S,null,d.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&u&&l.createElement(m.S,null,l.createElement(i.p,{colSpan:d.length},u)),p.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":d[t],verticalAlign:v},e))))))))}));d.displayName="DataTable"}}]);