"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4003],{90749:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return g},Head:function(){return p},default:function(){return k}});var l=n(47160),r=n(70079),a=n(14549);function i(e){const t=Object.assign({ul:"ul",li:"li",a:"a",em:"em",p:"p",strong:"strong",h2:"h2",h3:"h3",code:"code",pre:"pre"},(0,l.ah)(),e.components),{Ingress:n,PortalImage:i,NavCard:o}=t;return n||s("Ingress",!0),o||s("NavCard",!0),i||s("PortalImage",!0),r.createElement(r.Fragment,null,r.createElement(n,null,"Her er høydepunktene fra Jøkul i april."),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Et skikkelig løft ble gjort for å få Jøkul til å funke i ",r.createElement(t.a,{href:"https://www.smashingmagazine.com/2022/03/windows-high-contrast-colors-mode-css-custom-properties/"},"høykontrastmodus")),"\n",r.createElement(t.li,null,"Portalen har fått en ",r.createElement(t.a,{href:"/preview/3876-move-label-2/kom-i-gang/introduksjon"},"ny onboardingflyt")),"\n",r.createElement(t.li,null,"Vi samlet det vi har av guider for litt mer viderekomne under et ",r.createElement(t.a,{href:"/preview/3876-move-label-2/guider/hvordan-endre-jokul"},"eget menypunkt")),"\n",r.createElement(t.li,null,"Noen bugs i Figma-biblioteket har blitt retta","\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"TextInput og TextArea er responsive igjen"),"\n",r.createElement(t.li,null,"Ditto navigasjonskort"),"\n"),"\n"),"\n",r.createElement(t.li,null,"Støtte for React 18 og server-side rendering"),"\n",r.createElement(t.li,null,"Mulig å skjule ",r.createElement(t.em,null,"labels")," for alle skjemafelter visuelt"),"\n"),"\n",r.createElement(t.p,null,"Ellers pågår det en viktig diskusjon om ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/discussions/2843"},"compact og mobil i Figma-skisser"),". Om du har vært frustrert med tingenes tilstand er ",r.createElement(t.strong,null,"nå")," tiden for å si ifra."),"\n",r.createElement(t.h2,null,"Høykontrastmodus og Jøkul"),"\n",r.createElement(t.p,null,"Vi ble oppmerksomme på at Jøkul hadde ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/2812"},"mange kritiske mangler")," som gjorde løsningene våre utilgjengelige for brukere av høykontrastmodus (forced colors). Disse er rettet, og det er ",r.createElement(t.strong,null,"viktig at alle oppdaterer")," til nyeste versjon."),"\n",r.createElement(i,{src:"/assets/blog/updates/april-2022/failing-high-contrast.png",caption:"Et bilde fra før feilrettingen. Her er det egentlig to radioknapper, en sjekkboks, to tekstfelt og en datovelger. Ser du dem?"}),"\n",r.createElement(t.h3,null,"Design for høykontrastmodus"),"\n",r.createElement(t.p,null,"Høykontrastmodus legger noen begrensninger på design:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Vi har kun åtte farger"),"\n",r.createElement(t.li,null,"Alle åtte fargene er styrt av brukeren selv"),"\n",r.createElement(t.li,null,"Fargene er funksjonelle - aldri dekorative"),"\n",r.createElement(t.li,null,"Skygger finnes ikke"),"\n",r.createElement(t.li,null,"Bilder må antas å være visuelt utilgjengelige for brukeren"),"\n"),"\n",r.createElement(t.p,null,"Dette gir noen spennende utfordringer både på komponentnivå og høyere, for eksempel:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Er animasjoner og ulike tilstander synlige nok når vi ikke har skygger eller kan animere mellom farger?"),"\n",r.createElement(t.li,null,"Hvordan kan vi tydeliggjøre hvilken av knappene våre som er primær og sekundær?"),"\n",r.createElement(t.li,null,"Er det mulig å forstå innholdet på siden uten å se bilder, eller bruke skjermleser?"),"\n",r.createElement(t.li,null,"Hvordan skiller vi på ulike typer ",r.createElement(t.a,{href:"/preview/3876-move-label-2/komponenter/tag"},"tags")," når vi ikke har farger?"),"\n"),"\n",r.createElement(t.p,null,"Enn så lenge har fokuset til Jøkul-teamet vært på å få komponentene til å fungere overhode i høykontrastmodus. Om du vil bryne deg på denne designutfordringen, si i fra på designsystemforum så hjelper noen fra Jøkul-teamet deg i gang!"),"\n",r.createElement(i,{src:"/assets/blog/updates/april-2022/working-high-contrast.png",caption:"Etter feilrettingen er skjemakomponentene synlige, blant mye annet."}),"\n",r.createElement(t.h3,null,"Sjekk deres egen kode også"),"\n",r.createElement(t.p,null,"Ta en sjekk på teamets egen kode også, for å se om dere har noen av de samme feilene vi gjorde i Jøkul."),"\n",r.createElement(t.p,null,"De groveste feilene skjedde der vi skrudde av ",r.createElement(t.code,null,"border")," og ",r.createElement(t.code,null,"outline")," for å bruke ",r.createElement(t.code,null,"box-shadow")," til å lage designet vi var ute etter. I høykontrastmodus skrus ",r.createElement(t.em,null,"alt")," av ",r.createElement(t.code,null,"box-shadow")," helt av. Om du da ikke har ",r.createElement(t.code,null,"border")," eller ",r.createElement(t.code,null,"outline")," blir tingene dine usynlige."),"\n",r.createElement(t.p,null,"Du finner to nye mixins i Jøkul som kan være til hjelp:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/148148f1e450666caa9da5d4714bbb0b44199446/packages/core/mixins/_helpers.scss#L40"},"forced-colors-mode")," er en ",r.createElement(t.em,null,"media query"),"-hjelper for å gjøre ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/148148f1e450666caa9da5d4714bbb0b44199446/packages/radio-button/radio-button.scss#L181"},"resets som dette")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/148148f1e450666caa9da5d4714bbb0b44199446/packages/core/mixins/_helpers.scss#L63"},"forced-colors-svg-fallback")," er en workaround for en browserbug i Chromium hvor SVGer som bruker ",r.createElement(t.code,null,"currentColor")," ikke får riktig farge"),"\n"),"\n",r.createElement(t.p,null,"Vi har skrevet noe om hvordan du kan teste i ",r.createElement(t.a,{href:"/preview/3876-move-label-2/universell-utforming/testguide"},"testguiden vår")," under Universell utforming."),"\n",r.createElement(t.h2,null,"Ny onboarding"),"\n",r.createElement(t.p,null,"Jøkul-teamet har brukt april til å designe et nytt onboardingløp for designsystemet. En del av det er synlig her i portalen. På landingssiden finner du tre navigasjonskort som peker til en flunkende ny ",r.createElement(t.em,null,"Kom i gang"),"-seksjon. Ta en titt, og kom gjerne med tilbakemeldinger!"),"\n",r.createElement(o,{title:"Introduksjon",to:"/kom-i-gang/introduksjon",component:a.Link,description:"Start her om Jøkul er nytt for deg.",style:{maxWidth:"300px"}}),"\n",r.createElement(t.h2,null,"Nytt sted for guider"),"\n",r.createElement(t.p,null,"Med en ny ",r.createElement(t.em,null,"Kom i gang"),"-seksjon endte vi opp med noe innhold som ikke helt passet inn, men som vi likevel ville ta vare på. De har fått et nytt hjem under ",r.createElement(t.a,{href:"/preview/3876-move-label-2/guider/hvordan-endre-jokul"},"Guider"),"."),"\n",r.createElement(t.p,null,"Sitter du inne med noen ",r.createElement(t.em,null,"hvordan kan jeg"),"-spørsmål som kunne trengt en guide? Gi lyd, så kanskje det dukker opp en guide etter hvert."),"\n",r.createElement(t.h2,null,"React 18 og server-side rendering"),"\n",r.createElement(t.p,null,"React 18 ble ",r.createElement(t.a,{href:"https://reactjs.org/blog/2022/03/29/react-v18.html"},"lansert 29. mars"),", og Jøkul ble ferdig migrert 8. april. I forbindelse med oppgraderingen, nå som Reacts egen ",r.createElement(t.code,null,"useId")," er tilgjengelig i versjon 18, har Jøkul fått støtte for ",r.createElement(t.em,null,"server-side rendering")," og hydrering i klienten. Om du for eksempel vil bruke Jøkul i Remix skal det være mulig."),"\n",r.createElement(t.p,null,"Jøkul støtter fortsatt React 17. Om du skulle støte på noen problemer med å bruke Jøkul på versjon 17 så si ifra!"),"\n",r.createElement(t.h2,null,"Skjule labels visuelt"),"\n",r.createElement(t.p,null,"Nå er det mulig å gjøre så labels på skjemafelter bare dukker opp for skjermlesere. Alle skjemafelter har fått propen ",r.createElement(t.code,null,"labelProps"),", som du kan bruke til å sette ",r.createElement(t.code,null,"labelProps.srOnly"),"."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-tsx"},'<TextInput label="Godt navn" labelProps={{ srOnly: true }} />\n')),"\n",r.createElement(t.h2,null,"Diverse bugfikser"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"David Aasterud gjorde så den nye ",r.createElement(t.code,null,"useId")," med støtte for React 18 også fungerte riktig i React 17 (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2833"},"#2833"),")"),"\n",r.createElement(t.li,null,"Kenneth Apeland fikset en feil med tekstfarge i ",r.createElement(t.em,null,"dark mode")," på landingssiden (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2841"},"#2841"),")"),"\n"),"\n",r.createElement(t.h2,null,"Takk"),"\n",r.createElement(t.p,null,"Takk til alle bidragsytere, både på GitHub og i Figma!"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"daa1"),"\n",r.createElement(t.li,null,"kennidenni"),"\n"),"\n",r.createElement(t.p,null,"En stor takk også til alle som er med på designsystemforum!"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(i,e)):i(e)};function s(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=n(72285),c=n(22756),u=n(95573),d=n(1634);const p=e=>{let{pageContext:t}=e;return r.createElement(c.p,{title:t.title})},g=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:i}=n.page,{types:o}=l;return r.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(u.M1,Object.assign({},i,{versions:l.versions})),r.createElement(u.w5,i),a,o&&r.createElement(m.l,{types:o}))};function k(e){return r.createElement(g,e,r.createElement(o,e))}},72285:function(e,t,n){n.d(t,{l:function(){return g}});var l=n(78217),r=n(41994),a=n(87505),i=n(70079),o=n(54656);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,i=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},g=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(c):[],a=n.props?Object.values(n.props).filter(m):[],s=(e=>{var t,n,l,r,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),l.length>0&&i.createElement(p,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var l=n(26372),r=n.n(l),a=n(49597),i=n(70079),o=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return i}});var l=n(26372),r=n.n(l),a=n(70079);const i=e=>{let{className:t,density:n,id:l,...i}=e;return a.createElement("section",{role:"group","data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,id:l,...i})}},41994:function(e,t,n){n.d(t,{Q:function(){return s}});var l=n(53484),r=n(1386),a=n(26372),i=n.n(a),o=n(70079);const s=e=>{let{children:t,title:n,className:a,startExpanded:s=!1,onClick:m,id:c,...u}=e;const{0:d,1:p}=(0,o.useState)(s),{0:g}=(0,o.useState)((()=>s)),{detailsRef:k,summaryRef:f,contentRef:E,onSummaryClick:v}=(0,r.E)({onOpenChange:(e,t)=>{p(e),m&&m(t,e)},isExpanded:g});return o.createElement("details",{"data-testid":"jkl-accordion-item",...u,className:i()("jkl-accordion-item",a),ref:k,id:c},o.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:v,ref:f},n,o.createElement(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!d,bold:d})),o.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E},o.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return u}});var l=n(70079),r=n(41699),a=n(65174),i=n(6914),o=n(82546),s=n(39126),m=n(66169),c=n(94509);const u=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:d,rows:p,verticalAlign:g,...k}=e;return l.createElement(r.i,{fullWidth:!0,...k,ref:t},n&&l.createElement(i.R,{srOnly:!0},n),l.createElement(s.s,null,l.createElement(c.S,null,u.map(((e,t)=>l.createElement(m.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&d&&l.createElement(c.S,null,l.createElement(o.p,{colSpan:u.length},d)),p.map(((e,t)=>l.createElement(c.S,{key:t},e.map(((e,t)=>l.createElement(o.p,{key:t,"data-th":u[t],verticalAlign:g},e))))))))}));u.displayName="DataTable"}}]);