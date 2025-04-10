(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1934],{29527:function(e,t,r){"use strict";r.r(t),r.d(t,{DocPageLayout:function(){return _},Head:function(){return y},default:function(){return N}});var a=r(33865),l=r(70079),n=(r(36180),r(26372)),o=r.n(n);const s=e=>{let{colorVariable:t,cmyk:r,pantone:a,vertical:n,className:s}=e;const{0:i,1:m}=(0,l.useState)();return l.createElement("article",{className:o()("jkl-portal-color-info",s,{"jkl-portal-color-info--vertical":n})},l.createElement(c,{setColor:m,className:"jkl-portal-color-info__swatch",colorVariable:t}),l.createElement("p",{className:"jkl-portal-color-info__values jkl-small"},i&&3===i.length&&l.createElement(l.Fragment,null,"RGB: "+i[0]+" "+i[1]+" "+i[2]," ",l.createElement("br",null),"HEX: "+p(i)),r&&l.createElement("br",null),r&&"CMYK: "+r,a&&l.createElement("br",null),a))};var i=r(42334);const c=e=>{let{colorVariable:t,className:r,setColor:a}=e;const n=(0,l.useRef)(null);return(0,l.useEffect)((()=>{const e=(0,i.j)(n.current,"color").split(",");"function"==typeof a&&a(e.map((e=>parseInt(e.replace(/[^0-9]/g,""),10))))}),[a]),l.createElement("svg",{ref:n,role:"img","aria-label":"Fargeprøve av fargen "+t,className:o()("jkl-portal-color-swatch","jkl-portal-color-swatch--"+t,r,{"jkl-portal-color-swatch--granitt-stroke":["hvit","sand","dis","snohvit"].includes(t),"jkl-portal-color-swatch--snohvit-stroke":["granitt","svart","skifer"].includes(t)}),viewBox:"0 0 20 20",fill:"none"},l.createElement("title",null,"Fargeprøve av fargen "+t),l.createElement("path",{className:"jkl-portal-color-swatch__diamond",d:"M0.0707109 10L10 0.0707109L19.9293 10L10 19.9293L0.0707109 10Z"}))},m=e=>{let{colorNames:t}=e;const r=t.map((e=>{switch(e){case"Suksess":return{label:e,variable:"suksess--darkbg"};case"Feil":return{label:e,variable:"feil--darkbg"};case"Støttefarge Rød":return{label:e,variable:"feil"};case"Støttefarge Grønn":return{label:e,variable:"suksess"};case"Snøhvit":return{label:e,variable:"snohvit"};case"Fjellgrå":return{label:e,variable:"fjellgra"};default:return{label:e,variable:e.toLowerCase()}}}));return l.createElement("table",{className:"jkl-portal-color-table"},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{className:"jkl-portal-color-table__header"},"Valør"),l.createElement("th",{className:"jkl-portal-color-table__header"},"Navn"),l.createElement("th",{className:"jkl-portal-color-table__header"},"Hex"),l.createElement("th",{className:"jkl-portal-color-table__header"},"RGB"))),l.createElement("tbody",null,r.map((e=>l.createElement(d,{key:e.label,colorName:e.label,colorVariable:e.variable})))))},d=e=>{let{colorName:t,colorVariable:r}=e;const{0:a,1:n}=(0,l.useState)(),{0:o,1:s}=(0,l.useState)("N/A"),{0:i,1:m}=(0,l.useState)("N/A");return(0,l.useEffect)((()=>{a&&3===a.length&&(s(p(a)),m(a[0]+", "+a[1]+", "+a[2]))}),[a]),l.createElement("tr",{className:"jkl-portal-color-table__row"},l.createElement("td",{className:"jkl-portal-color-table__data","data-header":"Valør:"},l.createElement(c,{setColor:n,className:"jkl-portal-color-table__swatch",colorVariable:r})),l.createElement("td",{className:"jkl-portal-color-table__data","data-header":"Variabelnavn:"},t),l.createElement("td",{className:"jkl-portal-color-table__data","data-header":"Hex:"},o),l.createElement("td",{className:"jkl-portal-color-table__data","data-header":"RGB:"},i))},u=e=>{const t=e.toString(16).toUpperCase();return 1===t.length?"0"+t:t},p=e=>u(e[0])+u(e[1])+u(e[2]),k=e=>{let{title:t,className:r,children:a,...n}=e;return l.createElement("article",{className:"jkl-portal-primary-color"},l.createElement("h3",{className:"jkl-portal-primary-color__title jkl-sub-heading-large"},t),l.createElement(s,Object.assign({className:o()("jkl-portal-primary-color__swatch",r)},n)),l.createElement("p",{className:"jkl-portal-primary-color__text jkl-body jkl-portal-paragraph"},a))};function g(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",a:"a"},(0,a.ah)(),e.components),{Ingress:r,Grid:n,PortalImage:o}=t;return n||v("Grid",!0),r||v("Ingress",!0),o||v("PortalImage",!0),l.createElement(l.Fragment,null,l.createElement(r,null,l.createElement(t.p,null,"Farger er en viktig del av Fremtinds identitet. Det etterlatte inntrykket av våre løsninger skal være snøhvit med\ngranitt som profilbærende farger. Profilen støttes av funksjonelle farger, som er inspirert av norsk natur.")),"\n",l.createElement(t.h2,null,"Primærfargene"),"\n",l.createElement(t.p,null,"Disse fargene bruker vi både på trykk og i digitale flater. Disse bærer profilen vår og er de mest gjenkjennelige fargene i vårt uttrykk. Primærfargene våre er:"),"\n",l.createElement(k,{title:"Snøhvit",colorVariable:"snohvit",cmyk:"0 0 0 0"},l.createElement(t.p,null,"Snøhvit bruker vi mest som bakgrunnsfarge, og som tekstfarge der vi har mørke flater. I tillegg er den fokusfarge,\nfor eksempel på kort som er opphøyd over annet innhold, eller på inndataelementer som brukeren har valgt, for\neksempel et felt i et skjema.")),"\n",l.createElement(k,{title:"Granitt",colorVariable:"granitt",cmyk:"15 15 15 100",pantone:"Pantone Black U"},l.createElement(t.p,null,"Granitt bruker vi gjerne i elementer vi vil fremheve. Et godt eksempel er primærknappen. Vi kan bruke store flater\nmed granitt, men de bør ha lite innhold i forhold til størrelsen. Unngå å sette granitt flater nær bakgrunner med\nfargen varde.")),"\n",l.createElement(k,{title:"Varde",colorVariable:"varde",cmyk:"12 13 19 0"},l.createElement(t.p,null,"Varde bruker vi som bakgrunnsfarge eller på elementer for å fremheve innhold. Når vi velger å bruke den på en flate,\nunngår vi å ha mye innhold på den, i forhold til størrelsen. Bruk svart på teksten, for å sikre god kontrast. Ikke\nbruke varde på flater som står nærme grå bakgrunner og elementer, eller svarte flater.")),"\n",l.createElement(t.h2,null,"Fargespektrumet vårt"),"\n",l.createElement(t.p,null,"Vi har et sett av valører som fungerer godt med hverandre. Disse kan vi bruke til å skape nyanser og nivåer i løsningene våre. Vi bruker disse i hovedsak bare på digitale flater."),"\n",l.createElement(t.p,null,"For varde og lavere skal man bruke granitt tekst, og for fjellgrå og høyere skal man bruke snøhvit tekst. Bruk svaberg og stein med omhu."),"\n",l.createElement(t.h3,null,"Farger"),"\n",l.createElement(m,{colorNames:["Hvit","Snøhvit","Sand","Dis","Varde","Svaberg","Stein","Fjellgrå","Skifer","Granitt","Svart"]}),"\n",l.createElement(t.h2,null,"Meldingsfargene"),"\n",l.createElement(t.p,null,"Meldingsfargene bruker vi på digitale flater, for eksempel når vi trenger å gi informasjon fra systemet. Feil, advarsler, informasjonsmeldinger, grafer og fokusringer ved tastaturnavigasjon er eksempler på hva vi bruker meldingsfargene til. Meldingsfargene skal bare brukes funksjonelt, det vil si ikke som rene dekorelementer."),"\n",l.createElement(t.p,null,"Vi bruker de samme fargene for mørk modus og lys modus."),"\n",l.createElement(k,{title:"Suksessfarge",colorVariable:"suksess"},l.createElement(t.p,null,"En grønnfarge som vi bruker til å vise at en handling er vellykket, for eksempel at brukeren er ferdig med noe.")),"\n",l.createElement(k,{title:"Infofarge",colorVariable:"info"},l.createElement(t.p,null,"Blåfargen bruker vi til informasjonsmeldinger.")),"\n",l.createElement(k,{title:"Advarselsfarge",colorVariable:"advarsel"},l.createElement(t.p,null,"Denne gulfargen er til advarsler.")),"\n",l.createElement(k,{title:"Feilfarge",colorVariable:"feil",className:"jkl-spacing-64--bottom"},l.createElement(t.p,null,"En rødfarge som vi bruker til feeilmeldinger eller andre viktige varsler.")),"\n",l.createElement(t.h2,null,"Tilgjengelighet"),"\n",l.createElement(t.p,null,"Tilgjengelighet er noe av det viktigste å tenke på når vi bruker farger i digitale løsninger. Vi skal alltid følge kravene til universell utforming. For farger betyr det AA-kravet for kontrast. Kontrastkravet gjelder ikke bare tekst på bakgrunn, men også komponentenes kontrast mot sin egen bakgrunn, når det har betydning for å forstå funksjonaliteten."),"\n",l.createElement(t.p,null,"I tillegg til å tenke på tekst mot knappebakgrunnen, må vi også tenke på knappebakgrunnen mot sidens bakgrunnsfarge dersom det er viktig for å forstå funksjonen til komponenten."),"\n",l.createElement(t.p,null,"Tekstfargene våre er snøhvit eller granitt. Se fargebeskrivelsene for å finne ut hvilken farge du skal bruke mot hvilken bakgrunn, for å overholde kontrastkravet."),"\n",l.createElement(t.h3,null,"Plugins til Figma"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://www.figma.com/community/plugin/733159460536249875/A11y---Color-Contrast-Checker"},"A11y - Color Contrast Checker")),"\n",l.createElement(t.li,null,"Se også ",l.createElement(t.a,{href:"https://www.figma.com/blog/design-for-everyone-with-these-accessibility-focused-plugins/"},"denne listen")," over nyttige plugins."),"\n"),"\n",l.createElement(t.h3,null,"Andre verktøy"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://webaim.org/resources/contrastchecker/"},"WebAIM Contrast Checker")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://developer.paciellogroup.com/resources/contrastanalyser/"},"Colour Contrast Analyzer")),"\n"),"\n",l.createElement(t.h2,null,"Eksempler"),"\n",l.createElement(t.p,null,"For å skape en varm og hyggelig brukeropplevelse jobber vi med lyse bakgrunnsfarger."),"\n",l.createElement(n,{className:"jkl-spacing-40--bottom"},l.createElement(o,{alt:"Skjermbilde av en detaljside for en bilforsikring",src:"/assets/documentation/farger/bilforsikring_detaljside.png"}),l.createElement(o,{alt:"Skjermbilde av en fakturaoversikt med detaljvisning for en faktura",src:"/assets/documentation/farger/betaling_faktura.png"})),"\n",l.createElement(n,{className:"jkl-spacing-40--bottom"},l.createElement(o,{alt:"Skjermbilde av boligselgerforsikring, som har flere områder med sort kontrastfarge",src:"/assets/documentation/farger/bsf_forside.png"})),"\n",l.createElement(t.p,null,"Vi bruker fire meldingsfarger pluss to ekstra farger i hjelpetekster."),"\n",l.createElement(n,{className:"jkl-spacing-40--bottom"},l.createElement(o,{alt:"Skjermbilde av et skjema for kjøp av hundeforsikring med en valideringsfeil",src:"/assets/documentation/farger/hund_feilmelding.png"})))}var f=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(g,e)):g(e)};function v(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var b=r(6499),E=r(64864),h=r(33226),j=r(51588);const y=e=>{let{pageContext:t}=e;return l.createElement(E.p,{title:t.title})},_=e=>{let{location:t,data:r,pageContext:a,children:n}=e;const{frontmatter:o}=r.page,{types:s}=a;return l.createElement(j.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(h.M1,Object.assign({},o,{versions:a.versions})),l.createElement(h.w5,o),n,s&&l.createElement(b.l,{types:s}))};function N(e){return l.createElement(_,e,l.createElement(f,e))}},6499:function(e,t,r){"use strict";r.d(t,{l:function(){return p}});var a=r(17016),l=r(19775),n=r(50315),o=r(70079);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),i=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:r,scrollWidth:a}=e,{clientWidth:l}=t,n=r>0,o=a-r>l;t.classList.toggle("left-shadow",n),t.classList.toggle("right-shadow",o)},d=e=>{const t=e.target,r=t.parentElement;m(t,r)},u=e=>{let{props:t}=e;const r=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=r.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),a=r.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:r,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(n.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,r;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(r=e.type)&&void 0!==r&&r.name?s(e.type.name):""]})))})));var a},p=e=>{let{types:t}=e;return o.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},o.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),o.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,r]=e;const a=r.props?Object.values(r.props).filter(c):[],n=r.props?Object.values(r.props).filter(i):[];return o.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},a.length>0&&o.createElement(u,{props:a}),n.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:n})))}))))}},36180:function(){},51588:function(e,t,r){"use strict";r.d(t,{M:function(){return i}});var a=r(26372),l=r.n(a),n=r(49597),o=r(70079),s=r(54331);const i=e=>{let{className:t,children:r}=e;const{prefersReducedMotion:a}=(0,o.useContext)(s.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(n.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||i?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},r)}},42334:function(e,t,r){"use strict";r.d(t,{j:function(){return a}});const a=(e,t)=>{var r,a;return e&&(null===(r=window)||void 0===r||null===(a=r.getComputedStyle(e))||void 0===a?void 0:a.getPropertyValue(t))||"N/A"}},17016:function(e,t,r){"use strict";r.d(t,{U:function(){return o}});var a=r(26372),l=r.n(a),n=r(70079);const o=e=>{let{className:t,density:r,...a}=e;return n.createElement("div",{"data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":r,...a})}},19775:function(e,t,r){"use strict";r.d(t,{Q:function(){return c}});var a=r(52455),l=r(31967),n=r(29957),o=r(26372),s=r.n(o),i=r(70079);const c=e=>{let{children:t,title:r,className:o,startExpanded:c=!1,onClick:m,...d}=e;const u=(0,l.M)("title"),p=(0,l.M)("content"),{0:k,1:g}=(0,i.useState)(c),[f]=(0,n.v)(k,{easing:"exit",timing:"expressive"});return i.createElement("div",{"data-testid":"jkl-accordion-item",...d,className:s()("jkl-accordion-item",o,{"jkl-accordion-item--expanded":k})},i.createElement("button",{id:u,className:"jkl-accordion-item__title",type:"button","aria-expanded":k,"aria-controls":p,onClick:e=>{const t=!k;g(t),m&&m(e,t)}},r,i.createElement(a.K,{variant:"medium",className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})),i.createElement("div",{id:p,ref:f,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":u,hidden:!k},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},50315:function(e,t,r){"use strict";r.d(t,{w:function(){return d}});var a=r(70079),l=r(27468),n=r(89948),o=r(76769),s=r(76501),i=r(63551),c=r(93643),m=r(73372);const d=(0,a.forwardRef)(((e,t)=>{let{caption:r,columns:d,emptyTableText:u,rows:p,verticalAlign:k,...g}=e;return a.createElement(l.i,{fullWidth:!0,...g,ref:t},r&&a.createElement(o.R,{srOnly:!0},r),a.createElement(i.s,null,a.createElement(m.S,null,d.map(((e,t)=>a.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(n.R,null,0===p.length&&u&&a.createElement(m.S,null,a.createElement(s.p,{colSpan:d.length},u)),p.map(((e,t)=>a.createElement(m.S,{key:t},e.map(((e,t)=>a.createElement(s.p,{key:t,"data-th":d[t],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);