"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4839],{25286:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return k},Head:function(){return d},default:function(){return p}});var l=t(47160),r=t(70079);function a(e){const n=Object.assign({p:"p",a:"a",code:"code",ul:"ul",li:"li",em:"em",h2:"h2",pre:"pre",strong:"strong"},(0,l.ah)(),e.components),{Ingress:t,PortalImage:a}=n;return t||i("Ingress",!0),a||i("PortalImage",!0),r.createElement(r.Fragment,null,r.createElement(t,null,r.createElement(n.p,null,r.createElement("code",null,"@fremtind/jkl-core")," og pakkene som bruker den har fått en ny majorversjon. Her er en oppsummering av hva\nsom har endret seg, hvordan du kan sjekke om du blir påvirket, og noen tips for å gjøre oppgraderingen enklere.")),"\n",r.createElement(n.p,null,"Jøkul-teamet har tatt en skikkelig vårrengjøring av Sass-kodebasen. Det har blant annet resultert i en ny ",r.createElement(n.a,{href:"/preview/troubleshoot/guider/sass"},"Stilguide for Sass"),". Vårrengjøringen sørger for at Jøkul er klar for fjerningen av den gamle ",r.createElement(n.code,null,"@import"),"-syntaksen i Sass, og at Sass-koden har et tydelig dokumentert API."),"\n",r.createElement(n.p,null,"Endringene i denne versjonen, kort oppsummert:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"✨ ",r.createElement(n.em,null,"Alle")," variabler, mixins og funksjoner i ",r.createElement(n.code,null,"core")," er tilgjengelige via ",r.createElement(n.code,null,"@fremtind/jkl-core/jkl"),"."),"\n",r.createElement(n.li,null,"🛑 Mixins som har hatt prefixet ",r.createElement(n.code,null,"helper-")," har fått dette fjernet."),"\n",r.createElement(n.li,null,"🛑 Variabler, funksjoner og mixins fra pakker ",r.createElement(n.em,null,"annet enn ",r.createElement(n.code,null,"core"))," er gjort private."),"\n",r.createElement(n.li,null,"🛑 CSS-animasjoner er gjort private. ",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/discussions"},"Rop ut")," om du brukte dem, så kan vi finne på noe lurt sammen."),"\n",r.createElement(n.li,null,"🛑 CSS-variabler som manglet ",r.createElement(n.code,null,"jkl-")," prefix har nå fått dette. Legg til prefix om du brukte dem."),"\n",r.createElement(n.li,null,"🛑 ",r.createElement(n.code,null,"jkl-motion"),"-funksjonen (",r.createElement(n.em,null,"ikke")," mixinen ",r.createElement(n.code,null,"motion"),") er renamet til ",r.createElement(n.code,null,"easing"),"."),"\n",r.createElement(n.li,null,"🛑 ",r.createElement(n.code,null,"jkl-timing"),"-funksjonen er renamet til ",r.createElement(n.code,null,"timing"),"."),"\n",r.createElement(n.li,null,"🛑 ",r.createElement(n.code,null,"$jkl--timings")," og ",r.createElement(n.code,null,"$jkl--easings")," er fjernet. Bruk ",r.createElement(n.code,null,'jkl.timing("timing-navn")')," og ",r.createElement(n.code,null,'jkl.easing("easing-navn")')," for å slå opp verdier."),"\n",r.createElement(n.li,null,"📚 Alle funksjoner og mixins i core har blitt dokumentert med SassDoc."),"\n",r.createElement(n.li,null,"👷‍♂️ Ny Sass modulsyntaks brukt internt."),"\n"),"\n",r.createElement(n.p,null,"Se ",r.createElement(n.a,{href:"#hvordan-forenkle-migreringen"},"Hvordan forenkle migreringen")," for noen tips og triks til når du skal oppgradere."),"\n",r.createElement(n.h2,null,"Ikke breaking for alle"),"\n",r.createElement(n.p,null,"Denne versjonen gjør bare navneendringer i Sass-kode, CSS-variabler, og CSS-animasjoner."),"\n",r.createElement(n.p,null,"Hvis du:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"bare importerer CSS eller Sass-",r.createElement(n.em,null,"stilark")," (for eksempel ",r.createElement(n.code,null,"@fremtind/jkl-core/core"),")"),"\n",r.createElement(n.li,null,"ikke bruker CSS-variabler fra Jøkul i egen kode"),"\n",r.createElement(n.li,null,"ikke bruker CSS-animasjoner fra Jøkul i egen kode"),"\n"),"\n",r.createElement(n.p,null,"så er det ",r.createElement(n.em,null,"ingen breaking change")," for deg og du kan bare oppgradere 🥳"),"\n",r.createElement(n.h2,null,"Alle mixins, variabler, og funksjoner tilgjengelige via ",r.createElement(n.code,null,"jkl")),"\n",r.createElement(n.p,null,"Dette skal være alt du trenger fra nå for å bruke mixins, funksjoner og variabler fra Jøkul:"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},'@use "@fremtind/jkl-core/jkl";\n')),"\n",r.createElement(n.p,null,"Har du egne ",r.createElement(n.code,null,"@use")," for mixins, funksjoner eller variabler så bør disse fjernes. ",r.createElement(n.strong,null,"Bare ",r.createElement(n.code,null,'@use "@fremtind/jkl-core/jkl";')," er ansett som et stabilt API.")),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"NB:")," du må fremdeles hente ",r.createElement(n.em,null,"styles")," separat. Dette gjør du typisk én gang der du bygger opp stylesheeten din med alle avhengigheter."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},'@use "@fremtind/jkl-core/core";\n')),"\n",r.createElement(n.h2,null,"Hvordan forenkle migreringen"),"\n",r.createElement(n.p,null,"Basert på erfaringen med å migrere internt i Jøkul:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Begynn med å fjerne alt av ",r.createElement(n.code,null,"@import")," og erstatt med én ",r.createElement(n.code,null,'@use "@fremtind/jkl-core/jkl";')),"\n",r.createElement(n.li,null,"Bruk ",r.createElement(n.em,null,"search and replace")," for alt det er verdt:","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,r.createElement(n.code,null,"helper-")," erstattes av tom string (prefikset brukes ikke lenger i Jøkul)"),"\n",r.createElement(n.li,null,r.createElement(n.code,null," rem(")," erstattes av ",r.createElement(n.code,null," jkl.rem(")),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"#{rem")," erstattes av ",r.createElement(n.code,null,"#{jkl.rem")),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@include light-mode-variables")," erstattes av ",r.createElement(n.code,null,"@include jkl.light-mode-variables")),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@include dark-mode-variables")," erstattes av ",r.createElement(n.code,null,"@include jkl.dark-mode-variables")),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@include motion")," erstattes av ",r.createElement(n.code,null,"@include jkl.motion")),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@include text-style")," erstattes av ",r.createElement(n.code,null,"@include jkl.text-style")),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@include screenreader-only")," erstattes av ",r.createElement(n.code,null,"@include jkl.screenreader-only")),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@include no-grow-bold")," erstattes av ",r.createElement(n.code,null,"@include jkl.no-grow-bold")),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@include small-device")," erstattes av ",r.createElement(n.code,null,"@include jkl.small-device")),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@include medium-device")," erstattes av ",r.createElement(n.code,null,"@include jkl.medium-device")),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@include from-medium-device")," erstattes av ",r.createElement(n.code,null,"@include jkl.from-medium-device")),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@include large-device")," erstattes av ",r.createElement(n.code,null,"@include jkl.large-device")),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@include from-large-device")," erstattes av ",r.createElement(n.code,null,"@include jkl.from-large-device")),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@include xl-device")," erstattes av ",r.createElement(n.code,null,"@include jkl.xl-device")),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@include reset-outline")," erstattes av ",r.createElement(n.code,null,"@include jkl.reset-outline")),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@include keyboard-navigation")," erstattes av ",r.createElement(n.code,null,"@include jkl.keyboard-navigation")),"\n"),"\n"),"\n"),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"NB"),": Det at Sass kompilerer betyr ",r.createElement(n.em,null,"ikke")," at alt er i orden. Særlig funksjonskall som ",r.createElement(n.code,null,"rem()")," kan behandles som ",r.createElement(n.em,null,"strings")," hvis funksjonen ikke blir funnet. Da ender du opp med CSS som ser ut som ",r.createElement(n.code,null,"font-size: rem(20px);")," sendt rett til nettleseren, som ikke funker. Vær ekstra nøye med funksjoner, og test i en nettleser."),"\n",r.createElement(n.h2,null,"Navneendringer"),"\n",r.createElement(n.p,null,"Funksjonen ",r.createElement(n.code,null,"jkl-motion")," har fått navnet ",r.createElement(n.code,null,"easing")," for å skille den fra ",r.createElement(n.code,null,"motion"),'-mixinen og unngå "dobbel Jøkul" i navnet ved bruk av ny modulsyntaks.'),"\n",r.createElement(n.p,null,"Funksjonen ",r.createElement(n.code,null,"jkl-timing")," er nå bare ",r.createElement(n.code,null,"timing"),' for å unngå "dobbel Jøkul" i navnet ved bruk av ny modulsyntaks.'),"\n",r.createElement(n.p,null,"Hvis du har brukt ",r.createElement(n.code,null,"$jkl--timings")," eller ",r.createElement(n.code,null,"$jkl--easings")," direkte for å hente verdier, bruk funksjonene over i stedet."),"\n",r.createElement(n.p,null,"CSS-variabler som blir definert i Jøkul har nå alltid et ",r.createElement(n.code,null,"jkl-")," prefix. Dette manglet en del steder (se commitene for fullstendig oversikt: ",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/pull/2868/commits/500ee0e1050de94d8cda07fb423c33837fbf2faa"},"prefix"),", ",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/pull/2868/commits/83fea35f6076ba908378cbc3c834de559e83c1d5"},"namespacing"),"), så hvis du har egen kode som leser eller overstyrer disse variablene må du legge til dette prefixet også."),"\n",r.createElement(n.h2,null,"Modulsyntaks"),"\n",r.createElement(n.p,null,"Med denne releasen tar Jøkul i bruk Sass Modules (",r.createElement(n.code,null,"@use")," og ",r.createElement(n.code,null,"@forward"),"). Det ",r.createElement(n.strong,null,"anbefales sterkt")," at prosjektet ditt går over til den samme modulsyntaksen om dere ikke bruker den allerede, men det vil fungere å ",r.createElement(n.code,null,"@import"),"ere som før i en periode."),"\n",r.createElement(n.p,null,"Den gamle ",r.createElement(n.code,null,"@import"),'-syntaksen til Sass "frigjøres" til å bli en helt vanlig CSS-import. Med andre ord vil ',r.createElement(n.code,null,"@import")," på sikt slutte å fungere som før. Det er planlagt at ",r.createElement(n.a,{href:"https://github.com/sass/sass/blob/main/accepted/module-system.md#timeline"},"Sass sin støtte for ",r.createElement(n.code,null,"@import")," for å importere Sass fjernes senest 1. oktober 2022"),"."),"\n",r.createElement(n.p,null,"Grunnen til at den nye syntaksen ikke er en ",r.createElement(n.em,null,"drop-in replacement")," ",r.createElement(n.a,{href:"https://www.oddbird.net/2019/10/02/sass-modules/"},"kan du lese mer om i for eksempel denne bloggposten"),". Kort fortalt:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,'alle importer blir eksplisitte – vi får ikke lenger uventede variabler, mixins og funksjoner "med på kjøpet"'),"\n",r.createElement(n.li,null,"alle moduler namespaces, så vi unngår navnekolisjoner"),"\n",r.createElement(n.li,null,"private variabler, funksjoner og mixins blir en feature støttet av selve rammeverket, ikke bare gjennom konvensjoner som ",r.createElement(n.code,null,"_"),"-prefix"),"\n"),"\n",r.createElement(n.p,null,"Om du foretrekker video er ",r.createElement(n.a,{href:"https://www.youtube.com/watch?v=dOnYNEXv9BM"},"denne YouTube-gjennomgangen")," fin."),"\n",r.createElement(n.h2,null,"SassDoc"),"\n",r.createElement(n.p,null,"Funksjoner, mixins, og en del variabler i ",r.createElement(n.code,null,"core")," er dokumentert med ",r.createElement(n.a,{href:"http://sassdoc.com/annotations/"},"SassDoc"),". Hvis du bruker extensionen ",r.createElement(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=SomewhatStationery.some-sass"},"Some Sass")," (erstatter SCSS IntelliSense) kan du få denne dokumentasjonen opp i editoren."),"\n",r.createElement(a,{loading:"lazy",src:"/assets/blog/updates/core-10/core-10-sassdoc-demo.gif",caption:"Her er et eksempel på hvordan det kan se ut med SassDoc i Visual Studio Code."}))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(a,e)):a(e)};function i(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var c=t(72285),s=t(22756),m=t(95573),u=t(1634);const d=e=>{let{pageContext:n}=e;return r.createElement(s.p,{title:n.title})},k=e=>{let{location:n,data:t,pageContext:l,children:a}=e;const{frontmatter:o}=t.page,{types:i}=l;return r.createElement(u.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(m.M1,Object.assign({},o,{versions:l.versions})),r.createElement(m.w5,o),a,i&&r.createElement(c.l,{types:i}))};function p(e){return r.createElement(k,e,r.createElement(o,e))}},72285:function(e,n,t){t.d(n,{l:function(){return p}});var l=t(58820),r=t(63571),a=t(87505),o=t(70079),i=t(54656);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},m=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},u=(e,n)=>{const{scrollLeft:t,scrollWidth:l}=e,{clientWidth:r}=n,a=t>0,o=l-t>r;n.classList.toggle("left-shadow",a),n.classList.toggle("right-shadow",o)},d=e=>{const n=e.target,t=n.parentElement;u(n,t)},k=e=>{let{props:n}=e;const t=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&u(n,e)}}))})),l=t.current.parentElement.parentElement;n.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=n,l.map((e=>{var n,t;return[e.name?c(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?c(e.type.name):""]})))})));var l},p=e=>{let{types:n}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const l=t.props?Object.values(t.props).filter(m):[],a=t.props?Object.values(t.props).filter(s):[],c=(e=>{var n,t,l,r,a,o;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return o.createElement(r.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},c&&o.createElement(i.dn,{className:"jkl-portal-code-block"},c),l.length>0&&o.createElement(k,{props:l}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(k,{props:a})))}))))}},1634:function(e,n,t){t.d(n,{M:function(){return c}});var l=t(26372),r=t.n(l),a=t(49597),o=t(70079),i=t(34044);const c=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:l}=(0,o.useContext)(i.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||c?0:.35},className:r()("jkl-portal__main",n),id:"innhold"},t)}},58820:function(e,n,t){t.d(n,{U:function(){return o}});var l=t(35250),r=t(26372),a=t.n(r);const o=e=>{let{className:n,density:t,id:r,...o}=e;return(0,l.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",n),"data-density":t,id:r,...o})}},63571:function(e,n,t){t.d(n,{Q:function(){return s}});var l=t(35250),r=t(68998),a=t(1386),o=t(26372),i=t.n(o),c=t(70079);const s=e=>{let{children:n,title:t,className:o,startExpanded:s=!1,onClick:m,id:u,...d}=e;const[k,p]=(0,c.useState)(s),[E]=(0,c.useState)((()=>s)),{detailsRef:g,summaryRef:f,contentRef:v,onSummaryClick:j}=(0,a.E)({onOpenChange:(e,n)=>{p(e),m&&m(n,e)},isExpanded:E});return(0,l.jsxs)("details",{"data-testid":"jkl-accordion-item",...d,className:i()("jkl-accordion-item",o),ref:g,id:u,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:f,children:[t,(0,l.jsx)(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:v,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]})}},87505:function(e,n,t){t.d(n,{w:function(){return u}});var l=t(70079),r=t(41699),a=t(65174),o=t(6914),i=t(82546),c=t(39126),s=t(66169),m=t(94509);const u=(0,l.forwardRef)(((e,n)=>{let{caption:t,columns:u,emptyTableText:d,rows:k,verticalAlign:p,...E}=e;return l.createElement(r.i,{fullWidth:!0,...E,ref:n},t&&l.createElement(o.R,{srOnly:!0},t),l.createElement(c.s,null,l.createElement(m.S,null,u.map(((e,n)=>l.createElement(s.x,{key:n,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===k.length&&d&&l.createElement(m.S,null,l.createElement(i.p,{colSpan:u.length},d)),k.map(((e,n)=>l.createElement(m.S,{key:n},e.map(((e,n)=>l.createElement(i.p,{key:n,"data-th":u[n],verticalAlign:p},e))))))))}));u.displayName="DataTable"}}]);