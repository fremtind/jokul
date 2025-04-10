"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1069],{72971:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return d},default:function(){return p}});var a=n(47160),r=n(70079);function l(e){const t=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li",img:"img",h3:"h3",code:"code",pre:"pre",h4:"h4",strong:"strong"},(0,a.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,"Både Figma og kode har fått oppdaterte kompaktvarianter denne uka. La oss ta en titt på detaljene."),"\n",r.createElement(t.p,null,'Tidligere har kompakt gjerne vært som å si "tving mobilstørrelse på desktop". Vi ble enige før sommeren om et ',r.createElement(t.a,{href:"/preview/4363-card-interactions/blog/updates/august-2022/#:~:text=Rendyrking%20av%20Compact"},"nytt rendyrket konsept for Compact"),". I august kom Mobile-størrelsene i Figma, og nå er nye Compact ute i både Figma og kode."),"\n",r.createElement(t.h2,null,"Kult, hvordan bruker jeg de nye variantene?"),"\n",r.createElement(t.p,null,"For Figma-brukerne våre er det en Size-prop for hver komponent som nå har tre valg:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Desktop"),"\n",r.createElement(t.li,null,"Mobile"),"\n",r.createElement(t.li,null,"Compact"),"\n"),"\n",r.createElement(t.p,null,"Desktop og mobile brukes for de respektive skjermstørrelsene, og er hovedsakelig like med unntak av typografi."),"\n",r.createElement(t.p,null,r.createElement(t.img,{src:"/assets/blog/compact-reboot-component-prop.png",alt:"Skjermbilde fra Figma som viser hvor du finner Compact-varianten."})),"\n",r.createElement(t.p,null,"Compact brukes i informasjonstette skjermbilder. Hovedsakelig vil dette gjelde for interne verktøy for proffe brukere."),"\n",r.createElement(t.h2,null,"Og hvis jeg er utvikler?"),"\n",r.createElement(t.p,null,"Som utvikler har du to metoder for å styre om komponenter skal være kompakte eller ikke."),"\n",r.createElement(t.h3,null,"Gjør hele seksjoner av sider kompakte"),"\n",r.createElement(t.p,null,"Tidligere har du kunnet sette attributtet ",r.createElement(t.code,null,"data-compactlayout")," på et element i DOMen for å gjøre alle children kompakte. Det samme prinsippet kan fortsatt brukes, men det har fått et nytt navn."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-diff"},'- <div data-compactlayout>\n+ <div data-layout-density="compact">\n')),"\n",r.createElement(t.h4,null,"Reverser for deler av siden"),"\n",r.createElement(t.p,null,"Nytt fra ",r.createElement(t.code,null,"@fremtind/jkl-core@11.0.0")," og nyere er at du også kan ",r.createElement(t.strong,null,"reversere")," dette."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-html"},'<div data-layout-density="compact">\n    \x3c!-- Alle Jøkul-komponenter inni her blir kompakte. --\x3e\n\n    <div data-layout-density="comfortable">\n        \x3c!-- Alle Jøkul-komponenter inni her får standardstørrelsen. --\x3e\n    </div>\n</div>\n')),"\n",r.createElement(t.p,null,"Dette kan nøstes så mange nivåer du bare vil, men bruk med omhu."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-html"},'<div data-layout-density="compact">\n    \x3c!-- Alle Jøkul-komponenter inni her blir kompakte. --\x3e\n\n    <div data-layout-density="comfortable">\n        \x3c!-- Alle Jøkul-komponenter inni her får standardstørrelsen. --\x3e\n\n        <div data-layout-density="compact">\n            \x3c!-- Hmm? --\x3e\n\n            <div data-layout-density="comfortable">\n                \x3c!-- Send hjelp! --\x3e\n            </div>\n        </div>\n    </div>\n</div>\n')),"\n",r.createElement(t.h3,null,"Gjør enkeltkomponenter kompakte"),"\n",r.createElement(t.p,null,"Alle komponenter med en kompaktvariant (skal være alle med unntak av Logo) kan styres individuelt med propen ",r.createElement(t.code,null,"density"),"."),"\n",r.createElement(t.p,null,"For eksempel:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-tsx"},'<SecondaryButton density="compact">Hent på nytt</SecondaryButton>\n')),"\n",r.createElement(t.p,null,"Om du ikke bruker React-komponentene kan du oppnå det samme med å sette attributtet ",r.createElement(t.code,null,"data-density"),"."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-html"},'<button data-density="compact" class="jkl-button jkl-button--primary">\n    <div class="jkl-button__content">\n        <div class="jkl-button__slider">\n            <span className="jkl-button__children">Lagre</span>\n            \x3c!-- Forenklet uten loader for eksempelets skyld --\x3e\n        </div>\n    </div>\n</button>\n')),"\n",r.createElement(t.h4,null,"Reverser for en enkeltkomponent"),"\n",r.createElement(t.p,null,"Hvis du er i en seksjon av siden med ",r.createElement(t.code,null,'data-layout-density="compact"')," vil du kanskje gjøre så en enkeltkomponent får sin vanlige størrelse:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-tsx"},'<PrimaryButton density="comfortable">Lagre</PrimaryButton>\n')),"\n",r.createElement(t.h2,null,"Kult, men noe ser litt rart ut her"),"\n",r.createElement(t.p,null,"Det har vært store endringer på tvers av hele biblioteket så sjansen er der for at noe enten ikke fungerer helt optimalt, eller rett og slett er feil."),"\n",r.createElement(t.p,null,"Det er viktig at du sier i fra om ting du finner etter hvert som du tar i bruk nye Compact. Du kan gi tilbakemelding på et par måter:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Dele noe på Teams i Support Designsystem."),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/new/choose"},"Åpne et issue på GitHub"),"."),"\n"),"\n",r.createElement(t.p,null,"Takk for at du er med på å forbedre Jøkul for alle sammen!"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)};var i=n(72285),s=n(22756),c=n(95573),m=n(1634);const d=e=>{let{pageContext:t}=e;return r.createElement(s.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:a,children:l}=e;const{frontmatter:o}=n.page,{types:s}=a;return r.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(c.M1,Object.assign({},o,{versions:a.versions})),r.createElement(c.w5,o),l,s&&r.createElement(i.l,{types:s}))};function p(e){return r.createElement(u,e,r.createElement(o,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var a=n(58820),r=n(63571),l=n(87505),o=n(70079),i=n(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:r}=t,l=n>0,o=a-n>r;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var a},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(m):[],l=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,a,r,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(l=r.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),a.length>0&&o.createElement(p,{props:a}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var a=n(26372),r=n.n(a),l=n(49597),o=n(70079),i=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var a=n(35250),r=n(26372),l=n.n(r);const o=e=>{let{className:t,density:n,id:r,...o}=e;return(0,a.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,id:r,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return c}});var a=n(35250),r=n(68998),l=n(1386),o=n(26372),i=n.n(o),s=n(70079);const c=e=>{let{children:t,title:n,className:o,startExpanded:c=!1,onClick:m,id:d,...u}=e;const[p,k]=(0,s.useState)(c),[v]=(0,s.useState)((()=>c)),{detailsRef:g,summaryRef:f,contentRef:E,onSummaryClick:h}=(0,l.E)({onOpenChange:(e,t)=>{k(e),m&&m(t,e)},isExpanded:v});return(0,a.jsxs)("details",{"data-testid":"jkl-accordion-item",...u,className:i()("jkl-accordion-item",o),ref:g,id:d,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:f,children:[n,(0,a.jsx)(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var a=n(70079),r=n(41699),l=n(65174),o=n(6914),i=n(82546),s=n(39126),c=n(66169),m=n(94509);const d=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:u,rows:p,verticalAlign:k,...v}=e;return a.createElement(r.i,{fullWidth:!0,...v,ref:t},n&&a.createElement(o.R,{srOnly:!0},n),a.createElement(s.s,null,a.createElement(m.S,null,d.map(((e,t)=>a.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(l.R,null,0===p.length&&u&&a.createElement(m.S,null,a.createElement(i.p,{colSpan:d.length},u)),p.map(((e,t)=>a.createElement(m.S,{key:t},e.map(((e,t)=>a.createElement(i.p,{key:t,"data-th":d[t],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);