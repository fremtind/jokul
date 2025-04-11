"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4003],{98339:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return k},Head:function(){return g},default:function(){return f}});var l=n(64717),r=n(92379),a=n(95745);function i(e){const t=Object.assign({ul:"ul",li:"li",a:"a",em:"em",p:"p",strong:"strong",h2:"h2",h3:"h3",code:"code",pre:"pre"},(0,l.ah)(),e.components),{Ingress:n,PortalImage:i,NavCard:o}=t;return n||s("Ingress",!0),o||s("NavCard",!0),i||s("PortalImage",!0),r.createElement(r.Fragment,null,r.createElement(n,null,"Her er høydepunktene fra Jøkul i april."),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Et skikkelig løft ble gjort for å få Jøkul til å funke i ",r.createElement(t.a,{href:"https://www.smashingmagazine.com/2022/03/windows-high-contrast-colors-mode-css-custom-properties/"},"høykontrastmodus")),"\n",r.createElement(t.li,null,"Portalen har fått en ",r.createElement(t.a,{href:"/preview/fix/chip-button-type/kom-i-gang/introduksjon"},"ny onboardingflyt")),"\n",r.createElement(t.li,null,"Vi samlet det vi har av guider for litt mer viderekomne under et ",r.createElement(t.a,{href:"/preview/fix/chip-button-type/guider/hvordan-endre-jokul"},"eget menypunkt")),"\n",r.createElement(t.li,null,"Noen bugs i Figma-biblioteket har blitt retta","\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"TextInput og TextArea er responsive igjen"),"\n",r.createElement(t.li,null,"Ditto navigasjonskort"),"\n"),"\n"),"\n",r.createElement(t.li,null,"Støtte for React 18 og server-side rendering"),"\n",r.createElement(t.li,null,"Mulig å skjule ",r.createElement(t.em,null,"labels")," for alle skjemafelter visuelt"),"\n"),"\n",r.createElement(t.p,null,"Ellers pågår det en viktig diskusjon om ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/discussions/2843"},"compact og mobil i Figma-skisser"),". Om du har vært frustrert med tingenes tilstand er ",r.createElement(t.strong,null,"nå")," tiden for å si ifra."),"\n",r.createElement(t.h2,null,"Høykontrastmodus og Jøkul"),"\n",r.createElement(t.p,null,"Vi ble oppmerksomme på at Jøkul hadde ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/2812"},"mange kritiske mangler")," som gjorde løsningene våre utilgjengelige for brukere av høykontrastmodus (forced colors). Disse er rettet, og det er ",r.createElement(t.strong,null,"viktig at alle oppdaterer")," til nyeste versjon."),"\n",r.createElement(i,{src:"/assets/blog/updates/april-2022/failing-high-contrast.png",caption:"Et bilde fra før feilrettingen. Her er det egentlig to radioknapper, en sjekkboks, to tekstfelt og en datovelger. Ser du dem?"}),"\n",r.createElement(t.h3,null,"Design for høykontrastmodus"),"\n",r.createElement(t.p,null,"Høykontrastmodus legger noen begrensninger på design:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Vi har kun åtte farger"),"\n",r.createElement(t.li,null,"Alle åtte fargene er styrt av brukeren selv"),"\n",r.createElement(t.li,null,"Fargene er funksjonelle - aldri dekorative"),"\n",r.createElement(t.li,null,"Skygger finnes ikke"),"\n",r.createElement(t.li,null,"Bilder må antas å være visuelt utilgjengelige for brukeren"),"\n"),"\n",r.createElement(t.p,null,"Dette gir noen spennende utfordringer både på komponentnivå og høyere, for eksempel:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Er animasjoner og ulike tilstander synlige nok når vi ikke har skygger eller kan animere mellom farger?"),"\n",r.createElement(t.li,null,"Hvordan kan vi tydeliggjøre hvilken av knappene våre som er primær og sekundær?"),"\n",r.createElement(t.li,null,"Er det mulig å forstå innholdet på siden uten å se bilder, eller bruke skjermleser?"),"\n",r.createElement(t.li,null,"Hvordan skiller vi på ulike typer ",r.createElement(t.a,{href:"/preview/fix/chip-button-type/komponenter/tag"},"tags")," når vi ikke har farger?"),"\n"),"\n",r.createElement(t.p,null,"Enn så lenge har fokuset til Jøkul-teamet vært på å få komponentene til å fungere overhode i høykontrastmodus. Om du vil bryne deg på denne designutfordringen, si i fra på designsystemforum så hjelper noen fra Jøkul-teamet deg i gang!"),"\n",r.createElement(i,{src:"/assets/blog/updates/april-2022/working-high-contrast.png",caption:"Etter feilrettingen er skjemakomponentene synlige, blant mye annet."}),"\n",r.createElement(t.h3,null,"Sjekk deres egen kode også"),"\n",r.createElement(t.p,null,"Ta en sjekk på teamets egen kode også, for å se om dere har noen av de samme feilene vi gjorde i Jøkul."),"\n",r.createElement(t.p,null,"De groveste feilene skjedde der vi skrudde av ",r.createElement(t.code,null,"border")," og ",r.createElement(t.code,null,"outline")," for å bruke ",r.createElement(t.code,null,"box-shadow")," til å lage designet vi var ute etter. I høykontrastmodus skrus ",r.createElement(t.em,null,"alt")," av ",r.createElement(t.code,null,"box-shadow")," helt av. Om du da ikke har ",r.createElement(t.code,null,"border")," eller ",r.createElement(t.code,null,"outline")," blir tingene dine usynlige."),"\n",r.createElement(t.p,null,"Du finner to nye mixins i Jøkul som kan være til hjelp:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/148148f1e450666caa9da5d4714bbb0b44199446/packages/core/mixins/_helpers.scss#L40"},"forced-colors-mode")," er en ",r.createElement(t.em,null,"media query"),"-hjelper for å gjøre ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/148148f1e450666caa9da5d4714bbb0b44199446/packages/radio-button/radio-button.scss#L181"},"resets som dette")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/148148f1e450666caa9da5d4714bbb0b44199446/packages/core/mixins/_helpers.scss#L63"},"forced-colors-svg-fallback")," er en workaround for en browserbug i Chromium hvor SVGer som bruker ",r.createElement(t.code,null,"currentColor")," ikke får riktig farge"),"\n"),"\n",r.createElement(t.p,null,"Vi har skrevet noe om hvordan du kan teste i ",r.createElement(t.a,{href:"/preview/fix/chip-button-type/universell-utforming/testguide"},"testguiden vår")," under Universell utforming."),"\n",r.createElement(t.h2,null,"Ny onboarding"),"\n",r.createElement(t.p,null,"Jøkul-teamet har brukt april til å designe et nytt onboardingløp for designsystemet. En del av det er synlig her i portalen. På landingssiden finner du tre navigasjonskort som peker til en flunkende ny ",r.createElement(t.em,null,"Kom i gang"),"-seksjon. Ta en titt, og kom gjerne med tilbakemeldinger!"),"\n",r.createElement(o,{title:"Introduksjon",to:"/kom-i-gang/introduksjon",component:a.Link,description:"Start her om Jøkul er nytt for deg.",style:{maxWidth:"300px"}}),"\n",r.createElement(t.h2,null,"Nytt sted for guider"),"\n",r.createElement(t.p,null,"Med en ny ",r.createElement(t.em,null,"Kom i gang"),"-seksjon endte vi opp med noe innhold som ikke helt passet inn, men som vi likevel ville ta vare på. De har fått et nytt hjem under ",r.createElement(t.a,{href:"/preview/fix/chip-button-type/guider/hvordan-endre-jokul"},"Guider"),"."),"\n",r.createElement(t.p,null,"Sitter du inne med noen ",r.createElement(t.em,null,"hvordan kan jeg"),"-spørsmål som kunne trengt en guide? Gi lyd, så kanskje det dukker opp en guide etter hvert."),"\n",r.createElement(t.h2,null,"React 18 og server-side rendering"),"\n",r.createElement(t.p,null,"React 18 ble ",r.createElement(t.a,{href:"https://reactjs.org/blog/2022/03/29/react-v18.html"},"lansert 29. mars"),", og Jøkul ble ferdig migrert 8. april. I forbindelse med oppgraderingen, nå som Reacts egen ",r.createElement(t.code,null,"useId")," er tilgjengelig i versjon 18, har Jøkul fått støtte for ",r.createElement(t.em,null,"server-side rendering")," og hydrering i klienten. Om du for eksempel vil bruke Jøkul i Remix skal det være mulig."),"\n",r.createElement(t.p,null,"Jøkul støtter fortsatt React 17. Om du skulle støte på noen problemer med å bruke Jøkul på versjon 17 så si ifra!"),"\n",r.createElement(t.h2,null,"Skjule labels visuelt"),"\n",r.createElement(t.p,null,"Nå er det mulig å gjøre så labels på skjemafelter bare dukker opp for skjermlesere. Alle skjemafelter har fått propen ",r.createElement(t.code,null,"labelProps"),", som du kan bruke til å sette ",r.createElement(t.code,null,"labelProps.srOnly"),"."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-tsx"},'<TextInput label="Godt navn" labelProps={{ srOnly: true }} />\n')),"\n",r.createElement(t.h2,null,"Diverse bugfikser"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"David Aasterud gjorde så den nye ",r.createElement(t.code,null,"useId")," med støtte for React 18 også fungerte riktig i React 17 (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2833"},"#2833"),")"),"\n",r.createElement(t.li,null,"Kenneth Apeland fikset en feil med tekstfarge i ",r.createElement(t.em,null,"dark mode")," på landingssiden (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2841"},"#2841"),")"),"\n"),"\n",r.createElement(t.h2,null,"Takk"),"\n",r.createElement(t.p,null,"Takk til alle bidragsytere, både på GitHub og i Figma!"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"daa1"),"\n",r.createElement(t.li,null,"kennidenni"),"\n"),"\n",r.createElement(t.p,null,"En stor takk også til alle som er med på designsystemforum!"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(i,e)):i(e)};function s(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var c=n(75482),m=n(96036),u=n(59001),d=n(65458),p=n(79379);const g=e=>{let{pageContext:t}=e;return r.createElement(m.p,{title:t.title})},k=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:i}=n.page,{types:o}=l;return r.createElement(p.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(d.M1,Object.assign({},i,{versions:l.versions})),t.pathname.includes("komponenter")&&r.createElement(u.c,{variant:"komponent",component:i.title}),r.createElement(d.w5,i),a,o&&r.createElement(c.l,{types:o}))};function f(e){return r.createElement(k,e,r.createElement(o,e))}},75482:function(e,t,n){n.d(t,{l:function(){return g}});var l=n(96845),r=n(41162),a=n(74797),i=n(92379),o=n(25329);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,i=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},g=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,l,r,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),l.length>0&&i.createElement(p,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return o}});var l=n(48467),r=n(58990),a=n(92379),i=n(25329);const o=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(r.U,null),a.createElement(i.nv,null,s[t].text)),a.createElement(l.r,{href:s[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,t,n){n.d(t,{M:function(){return s}});var l=n(80324),r=n.n(l),a=n(24157),i=n(92379),o=n(69215);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},96845:function(e,t,n){n.d(t,{U:function(){return s}});var l=n(99767),r=n(651),a=n(80324),i=n.n(a);const o=["className","density","id"],s=e=>{let{className:t,density:n,id:a}=e,s=(0,l.Z)(e,o);return(0,r.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:i()("jkl-accordion",t),"data-density":n,id:a},s))}},41162:function(e,t,n){n.d(t,{Q:function(){return u}});var l=n(99767),r=n(651),a=n(42054),i=n(95020),o=n(80324),s=n.n(o),c=n(92379);const m=["children","title","className","startExpanded","onClick","id"],u=e=>{let{children:t,title:n,className:o,startExpanded:u=!1,onClick:d,id:p}=e,g=(0,l.Z)(e,m);const[k,f]=(0,c.useState)(u),[E]=(0,c.useState)((()=>u)),{detailsRef:b,summaryRef:v,contentRef:h,onSummaryClick:j}=(0,i.E)({onOpenChange:(e,t)=>{f(e),d&&d(t,e)},isExpanded:E});return(0,r.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},g,{className:s()("jkl-accordion-item",o),ref:b,id:p,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:v,children:[n,(0,r.jsx)(a.K,{className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},58990:function(e,t,n){n.d(t,{U:function(){return m}});var l=n(92379),r=n(55650),a=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>l.createElement(r.J,((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},74797:function(e,t,n){n.d(t,{w:function(){return b}});var l=n(92379),r=n(94207),a=n(49309),i=n(36774),o=n(64081),s=n(64483),c=n(42104),m=n(98746),u=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,E=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const b=(0,l.forwardRef)(((e,t)=>{var n,u=e,{caption:b,columns:v,emptyTableText:h,rows:j,verticalAlign:y}=u,w=((e,t)=>{var n={};for(var l in e)k.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&g)for(var l of g(e))t.indexOf(l)<0&&f.call(e,l)&&(n[l]=e[l]);return n})(u,["caption","columns","emptyTableText","rows","verticalAlign"]);return l.createElement(r.i,(n=((e,t)=>{for(var n in t||(t={}))k.call(t,n)&&E(e,n,t[n]);if(g)for(var n of g(t))f.call(t,n)&&E(e,n,t[n]);return e})({fullWidth:!0},w),d(n,p({ref:t}))),b&&l.createElement(i.R,{srOnly:!0},b),l.createElement(s.s,null,l.createElement(m.S,null,v.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===j.length&&h&&l.createElement(m.S,null,l.createElement(o.p,{colSpan:v.length},h)),j.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(o.p,{key:t,"data-th":v[t],verticalAlign:y},e))))))))}));b.displayName="DataTable"}}]);