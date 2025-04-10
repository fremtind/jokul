"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7461],{42980:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return p},Head:function(){return d},default:function(){return k}});var l=n(47160),r=n(70079),a=n(696);function i(e){const t=Object.assign({p:"p",ul:"ul",li:"li",a:"a",code:"code",em:"em",h2:"h2",img:"img",h3:"h3",ol:"ol"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"Det har skjedd en hel del i Jøkul i februar! Noen høydepunkter:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Figma-biblioteket har fått en stor overhaling med:","\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"ny onboarding"),"\n",r.createElement(t.li,null,"interaktive komponenter"),"\n",r.createElement(t.li,null,"én komponent per side"),"\n",r.createElement(t.li,null,"alfabetisk sortering av komponenter i biblioteket"),"\n",r.createElement(t.li,null,"labels til skjemafelter er nå bare varianter, ikke egne komponenter"),"\n"),"\n"),"\n",r.createElement(t.li,null,"Nytt design på skjemakomponenter"),"\n",r.createElement(t.li,null,"Ny majorversjon av core: oppdaterte breakpoints, og dropping av støtte for Internet Explorer"),"\n",r.createElement(t.li,null,"Ny komponent: ",r.createElement(t.a,{href:"/preview/fix/system-message-docs/komponenter/breadcrumb"},"Brødsmulesti")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/fix/system-message-docs/komponenter/card"},"Card")," har blitt helt ny"),"\n",r.createElement(t.li,null,"MessageBox har fått en ",r.createElement(t.code,null,"forceCompact"),"-prop"),"\n",r.createElement(t.li,null,"Formateringsfunksjoner og maskering av inputfelter"),"\n",r.createElement(t.li,null,"Unicode-tegnet ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2696/files"},"ZERO_WIDTH_SPACE")," har blitt lagt til i ",r.createElement(t.code,null,"constants-util"),". Bruk det til ordbryting!"),"\n",r.createElement(t.li,null,"Bloggen har fått RSS"),"\n",r.createElement(t.li,null,"I toppmenyen her i portalen har sidetitler blitt til ",r.createElement(t.em,null,"lenker")," (de var ",r.createElement(t.em,null,"knapper"),"), som betyr at du lettere kan åpne i nye faner"),"\n",r.createElement(t.li,null,"Select har fått støtte for custom søk"),"\n"),"\n",r.createElement(t.h2,null,"Figma"),"\n",r.createElement(t.p,null,"Etter en storopprydding har Figma-biblioteket blitt en del mer oversiktlig. Hver komponent har sin egen ",r.createElement(t.em,null,"page"),", sortert alfabetisk. Det gjør det raskere å finne fram til oversikten over variants, siden du ikke trenger å gjette på hvilken kategori en ",r.createElement(t.code,null,"Link")," hører til. Den er på ",r.createElement(t.code,null,"Link"),"-siden, ferdig."),"\n",r.createElement(t.p,null,"Forresten, om du savner labels til skjemaer så finner en ",r.createElement(t.em,null,"variant")," av skjemafeltene som har den."),"\n",r.createElement(t.p,null,r.createElement(t.img,{src:"/assets/blog/updates/februar-2022/form-label-variants.gif",alt:""})),"\n",r.createElement(t.p,null,"Det har også kommet en onboarding med de viktigste tingene du trenger å vite for å bruke og ",r.createElement(t.em,null,"endre")," Figma-biblioteket. Sjekk ",r.createElement(t.code,null,"Introduction")," om du ikke har lest den allerede."),"\n",r.createElement(t.h2,null,"Nytt design på skjemakomponenter"),"\n",r.createElement(t.p,null,"Skjemafelter med valideringsfeil har fått et nytt design, hvor en viktig del er at vi har en tydelig visuell indikator som ",r.createElement(t.em,null,"ikke er en farge"),". Valideringsfeil vises nå sammen med en varseltrekant, og selve skjemafeltet fylles med feilfargen vår."),"\n",r.createElement(t.p,null,r.createElement(t.img,{src:"/assets/blog/updates/februar-2022/form-error-state.gif",alt:""})),"\n",r.createElement(t.p,null,"Du kan teste et skjema med det nye designet ",r.createElement(t.a,{href:"/preview/fix/system-message-docs/demoer/skjemavalidering/"},"her i portalen"),", eller se komponentdokumentasjonen til de forskjellige skjemakomponentene våre."),"\n",r.createElement(t.h2,null,"Ny majorversjon av core"),"\n",r.createElement(t.p,null,"Du finner de tekniske detaljene i ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/packages/core/MIGRATION.md#til-jkl-core900"},"migrasjonsguiden på GitHub"),"."),"\n",r.createElement(t.h3,null,"Oppdaterte breakpoints"),"\n",r.createElement(t.p,null,"Vi ble enige om nye verdier for breakpoints i Jøkul i fjor høst. I februar ble de oppdatert i kode! Du finner de nye breakpointsene ",r.createElement(t.a,{href:"/preview/fix/system-message-docs/universell-utforming/responsivt-design#breakpoints-vi-bruker-i-j%C3%B8kul"},"på siden om responsivt design"),"."),"\n",r.createElement(t.h3,null,"Droppet støtte for IE11"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"/preview/fix/system-message-docs/blog/jokul-dropper-ie-stotte/"},"Som varslet i november")," har Jøkul fjernet gammel kode som utelukkende var for å støtte Internet Explorer 11. Ingen av Fremtind sine løsninger støtter den nettleseren lenger, så da kunne vi ta en vårrengjøring i koden."),"\n",r.createElement(t.h2,null,"Breadcrumb"),"\n",r.createElement(t.p,null,"Basert på et førsteutkast fra BM-teamet og justert litt underveis, ",r.createElement(t.a,{href:"/preview/fix/system-message-docs/komponenter/breadcrumb"},"Breadcrumb")," er nå tilgjengelig i Jøkul."),"\n",r.createElement(t.h2,null,"Card"),"\n",r.createElement(t.p,null,"En flott gruppe Fremtindere har jobbet lenge og grundig med ",r.createElement(t.a,{href:"/preview/fix/system-message-docs/komponenter/card"},"Card"),", og i februar ble det lansert helt nye kort. Det er delt inn i tre typer:"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"Navikasjonskort"),"\n",r.createElement(t.li,null,"Oppgavekort"),"\n",r.createElement(t.li,null,"Infokort"),"\n"),"\n",r.createElement(t.p,null,"Ta en titt på de ulike variantene og bruken av dem i Figma eller i ",r.createElement(t.a,{href:"/preview/fix/system-message-docs/komponenter/card"},"komponentdokumentasjonen"),"."),"\n",r.createElement(t.h2,null,"MessageBox"),"\n",r.createElement(t.p,null,"MessageBox har hatt en kompaktvariant i Figma lenge, men den har manglet i kode. ",r.createElement(t.em,null,"Nå er den her!")),"\n",r.createElement(a.uj,{role:"none presentation",forceCompact:!0},r.createElement("p",{className:"small"},r.createElement(t.p,null,"Hvis du setter tekststørrelsen på innholdet selv får du best effekt ved å bruke ",r.createElement("code",null,"small")," som\ntekststørrelse!"))),"\n",r.createElement(t.h2,null,"Formateringsfunksjoner og maskering"),"\n",r.createElement(t.p,null,"En ny pakke har blitt lansert med ",r.createElement(t.a,{href:"/preview/fix/system-message-docs/komponenter/formatters"},"en samling formateringsfunksjoner")," som du kan bruke når du skal vise avstander, valuta, telefon-, kort-, fødsels- eller kontonummer."),"\n",r.createElement(t.p,null,"Flere av disse formateringsfunksjonene gjør seg også fint til ",r.createElement(t.a,{href:"/preview/fix/system-message-docs/komponenter/formatters#maskering-av-skjemafelter"},"maskering av skjemafelter"),". Om du bruker versjon 7 av ",r.createElement(t.code,null,"react-hook-form")," er det noen ferdiglagede støttefunksjoner i biblioteket som gjør det enkelt å ta i bruk."),"\n",r.createElement(t.p,null,r.createElement(t.img,{src:"/assets/blog/updates/februar-2022/input-masks.gif",alt:""})),"\n",r.createElement(t.h2,null,"Portalen"),"\n",r.createElement(t.p,null,"Om du er en av de som aldri helt ga slipp på RSS, eller en av de som nylig (gjen)oppdaget denne fantasiske teknologien – denne er for deg:"),"\n",r.createElement(t.p,null,"Jøkul-bloggen har endelig fått en RSS-feed!"),"\n",r.createElement(t.p,null,"Du skal kunne peke RSS-leseren din på ",r.createElement(t.a,{href:"https://jokul.fremtind.no"},"jokul.fremtind.no"),", men hvis du trenger en direktelenke til feeden så er den ",r.createElement(t.a,{href:"https://jokul.fremtind.no/blog/rss.xml"},"jokul.fremtind.no/blog/rss.xml"),"."),"\n",r.createElement("iframe",{src:"https://giphy.com/embed/J5k8XuTKXiaMye1row",width:"480",height:"270",frameBorder:"0",class:"giphy-embed",allowFullScreen:!0}),"\n",r.createElement("p",null,r.createElement("a",{href:"https://giphy.com/gifs/nasa-nasareactions-J5k8XuTKXiaMye1row"},"via GIPHY")),"\n",r.createElement(t.h2,null,"Custom søk i Select"),"\n",r.createElement(t.p,null,"Select har fått utvided sin ",r.createElement(t.code,null,"searchable")," prop til å kunne ta en funksjon som filtrer en string eller et ",r.createElement(t.code,null,"ValuePair")," mot en string. Dette kan brukes til å for eksempel søke etter organisasjonsnummer i en select som egentlig bare vise navn på bedrifter."),"\n",r.createElement(t.h2,null,"Bugfikser"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Fjernet unødvendige marginer i ExpandButton (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/2737"},"#2737"),")"),"\n",r.createElement(t.li,null,"Fikset visning av årstall i utvidet datovelger (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/2707"},"#2707"),")"),"\n",r.createElement(t.li,null,"Unødvendig alt-tekst leses ikke lenger opp for ikoner (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/2679"},"#2679"),")"),"\n",r.createElement(t.li,null,"TextArea har fått flere bugfikser (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/2634"},"#2634"),", ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/2717"},"#2717"),", ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/2721"},"#2721"),", ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/2751"},"#2751"),", ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/2752"},"#2752"),")"),"\n",r.createElement(t.li,null,"Select kan styres med ",r.createElement(t.code,null,"value"),"-prop (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/2589"},"#2589"),")"),"\n",r.createElement(t.li,null,"Klikk på tekstfelt i søkbar Select lukker ikke menyen lenger (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/2400"},"#2400"),")"),"\n"),"\n",r.createElement(t.h2,null,"Takk"),"\n",r.createElement(t.p,null,"Takk til alle bidragsytere, både på GitHub og i Figma!"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"BjorneOmaFremtind"),"\n",r.createElement(t.li,null,"hjellek"),"\n",r.createElement(t.li,null,"JoMs"),"\n",r.createElement(t.li,null,"kennidenni"),"\n",r.createElement(t.li,null,"Murstam"),"\n",r.createElement(t.li,null,"SercanSercan"),"\n"))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(i,e)):i(e)},o=n(72285),m=n(22756),c=n(95573),u=n(1634);const d=e=>{let{pageContext:t}=e;return r.createElement(m.p,{title:t.title})},p=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:i}=n.page,{types:s}=l;return r.createElement(u.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(c.M1,Object.assign({},i,{versions:l.versions})),r.createElement(c.w5,i),a,s&&r.createElement(o.l,{types:s}))};function k(e){return r.createElement(p,e,r.createElement(s,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var l=n(58820),r=n(63571),a=n(87505),i=n(70079),s=n(54656);const o=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,i=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var l},k=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(c):[],a=n.props?Object.values(n.props).filter(m):[],o=(e=>{var t,n,l,r,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&i.createElement(s.dn,{className:"jkl-portal-code-block"},o),l.length>0&&i.createElement(p,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return o}});var l=n(26372),r=n.n(l),a=n(49597),i=n(70079),s=n(34044);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,i.useContext)(s.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||o?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return i}});var l=n(35250),r=n(26372),a=n.n(r);const i=e=>{let{className:t,density:n,id:r,...i}=e;return(0,l.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:r,...i})}},63571:function(e,t,n){n.d(t,{Q:function(){return m}});var l=n(35250),r=n(68998),a=n(1386),i=n(26372),s=n.n(i),o=n(70079);const m=e=>{let{children:t,title:n,className:i,startExpanded:m=!1,onClick:c,id:u,...d}=e;const[p,k]=(0,o.useState)(m),[f]=(0,o.useState)((()=>m)),{detailsRef:g,summaryRef:E,contentRef:h,onSummaryClick:v}=(0,a.E)({onOpenChange:(e,t)=>{k(e),c&&c(t,e)},isExpanded:f});return(0,l.jsxs)("details",{"data-testid":"jkl-accordion-item",...d,className:s()("jkl-accordion-item",i),ref:g,id:u,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:v,ref:E,children:[n,(0,l.jsx)(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return u}});var l=n(70079),r=n(41699),a=n(65174),i=n(6914),s=n(82546),o=n(39126),m=n(66169),c=n(94509);const u=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:d,rows:p,verticalAlign:k,...f}=e;return l.createElement(r.i,{fullWidth:!0,...f,ref:t},n&&l.createElement(i.R,{srOnly:!0},n),l.createElement(o.s,null,l.createElement(c.S,null,u.map(((e,t)=>l.createElement(m.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&d&&l.createElement(c.S,null,l.createElement(s.p,{colSpan:u.length},d)),p.map(((e,t)=>l.createElement(c.S,{key:t},e.map(((e,t)=>l.createElement(s.p,{key:t,"data-th":u[t],verticalAlign:k},e))))))))}));u.displayName="DataTable"}}]);