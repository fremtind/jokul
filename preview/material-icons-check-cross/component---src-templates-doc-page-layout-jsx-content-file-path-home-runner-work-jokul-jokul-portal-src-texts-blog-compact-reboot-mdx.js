"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[293],{94511:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return p},Head:function(){return u},default:function(){return k}});var r=n(33156),l=n(7378);function a(e){const t=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li",img:"img",h3:"h3",code:"code",pre:"pre",h4:"h4",strong:"strong"},(0,r.RP)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,"Både Figma og kode har fått oppdaterte kompaktvarianter denne uka. La oss ta en titt på detaljene."),"\n",l.createElement(t.p,null,'Tidligere har kompakt gjerne vært som å si "tving mobilstørrelse på desktop". Vi ble enige før sommeren om et ',l.createElement(t.a,{href:"/preview/material-icons-check-cross/blog/updates/august-2022/#:~:text=Rendyrking%20av%20Compact"},"nytt rendyrket konsept for Compact"),". I august kom Mobile-størrelsene i Figma, og nå er nye Compact ute i både Figma og kode."),"\n",l.createElement(t.h2,null,"Kult, hvordan bruker jeg de nye variantene?"),"\n",l.createElement(t.p,null,"For Figma-brukerne våre er det en Size-prop for hver komponent som nå har tre valg:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Desktop"),"\n",l.createElement(t.li,null,"Mobile"),"\n",l.createElement(t.li,null,"Compact"),"\n"),"\n",l.createElement(t.p,null,"Desktop og mobile brukes for de respektive skjermstørrelsene, og er hovedsakelig like med unntak av typografi."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/assets/blog/compact-reboot-component-prop.png",alt:"Skjermbilde fra Figma som viser hvor du finner Compact-varianten."})),"\n",l.createElement(t.p,null,"Compact brukes i informasjonstette skjermbilder. Hovedsakelig vil dette gjelde for interne verktøy for proffe brukere."),"\n",l.createElement(t.h2,null,"Og hvis jeg er utvikler?"),"\n",l.createElement(t.p,null,"Som utvikler har du to metoder for å styre om komponenter skal være kompakte eller ikke."),"\n",l.createElement(t.h3,null,"Gjør hele seksjoner av sider kompakte"),"\n",l.createElement(t.p,null,"Tidligere har du kunnet sette attributtet ",l.createElement(t.code,null,"data-compactlayout")," på et element i DOMen for å gjøre alle children kompakte. Det samme prinsippet kan fortsatt brukes, men det har fått et nytt navn."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-diff"},'- <div data-compactlayout>\n+ <div data-layout-density="compact">\n')),"\n",l.createElement(t.h4,null,"Reverser for deler av siden"),"\n",l.createElement(t.p,null,"Nytt fra ",l.createElement(t.code,null,"@fremtind/jkl-core@11.0.0")," og nyere er at du også kan ",l.createElement(t.strong,null,"reversere")," dette."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<div data-layout-density="compact">\n    \x3c!-- Alle Jøkul-komponenter inni her blir kompakte. --\x3e\n\n    <div data-layout-density="comfortable">\n        \x3c!-- Alle Jøkul-komponenter inni her får standardstørrelsen. --\x3e\n    </div>\n</div>\n')),"\n",l.createElement(t.p,null,"Dette kan nøstes så mange nivåer du bare vil, men bruk med omhu."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<div data-layout-density="compact">\n    \x3c!-- Alle Jøkul-komponenter inni her blir kompakte. --\x3e\n\n    <div data-layout-density="comfortable">\n        \x3c!-- Alle Jøkul-komponenter inni her får standardstørrelsen. --\x3e\n\n        <div data-layout-density="compact">\n            \x3c!-- Hmm? --\x3e\n\n            <div data-layout-density="comfortable">\n                \x3c!-- Send hjelp! --\x3e\n            </div>\n        </div>\n    </div>\n</div>\n')),"\n",l.createElement(t.h3,null,"Gjør enkeltkomponenter kompakte"),"\n",l.createElement(t.p,null,"Alle komponenter med en kompaktvariant (skal være alle med unntak av Logo) kan styres individuelt med propen ",l.createElement(t.code,null,"density"),"."),"\n",l.createElement(t.p,null,"For eksempel:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-tsx"},'<SecondaryButton density="compact">Hent på nytt</SecondaryButton>\n')),"\n",l.createElement(t.p,null,"Om du ikke bruker React-komponentene kan du oppnå det samme med å sette attributtet ",l.createElement(t.code,null,"data-density"),"."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<button data-density="compact" class="jkl-button jkl-button--primary">\n    <div class="jkl-button__content">\n        <div class="jkl-button__slider">\n            <span className="jkl-button__children">Lagre</span>\n            \x3c!-- Forenklet uten loader for eksempelets skyld --\x3e\n        </div>\n    </div>\n</button>\n')),"\n",l.createElement(t.h4,null,"Reverser for en enkeltkomponent"),"\n",l.createElement(t.p,null,"Hvis du er i en seksjon av siden med ",l.createElement(t.code,null,'data-layout-density="compact"')," vil du kanskje gjøre så en enkeltkomponent får sin vanlige størrelse:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-tsx"},'<PrimaryButton density="comfortable">Lagre</PrimaryButton>\n')),"\n",l.createElement(t.h2,null,"Kult, men noe ser litt rart ut her"),"\n",l.createElement(t.p,null,"Det har vært store endringer på tvers av hele biblioteket så sjansen er der for at noe enten ikke fungerer helt optimalt, eller rett og slett er feil."),"\n",l.createElement(t.p,null,"Det er viktig at du sier i fra om ting du finner etter hvert som du tar i bruk nye Compact. Du kan gi tilbakemelding på et par måter:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Dele noe på Teams i Support Designsystem."),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/new/choose"},"Åpne et issue på GitHub"),"."),"\n"),"\n",l.createElement(t.p,null,"Takk for at du er med på å forbedre Jøkul for alle sammen!"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)};var i=n(68888),s=n(47672),c=n(52948),m=n(38776),d=n(20919);const u=e=>{let{pageContext:t}=e;return l.createElement(s.G,{title:t.title})},p=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:s}=r;return l.createElement(d.D,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(m.Ao,Object.assign({},o,{versions:r.versions})),t.pathname.includes("komponenter")&&l.createElement(c.A,{variant:"komponent",component:o.title}),l.createElement(m.f6,o),a,s&&l.createElement(i.N,{types:s}))};function k(e){return l.createElement(p,e,l.createElement(o,e))}},68888:function(e,t,n){n.d(t,{N:function(){return k}});var r=n(88635),l=n(24408),a=n(78022),o=n(7378),i=n(45371);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,l,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(l.A,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.NG,{className:"jkl-portal-code-block"},s),r.length>0&&o.createElement(p,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},52948:function(e,t,n){n.d(t,{A:function(){return i}});var r=n(77800),l=n(38316),a=n(7378),o=n(45371);const i=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(l.u,null),a.createElement(o.fz,null,s[t].text)),a.createElement(r.N,{href:s[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,t,n){n.d(t,{D:function(){return s}});var r=n(3698),l=n.n(r),a=n(94270),o=n(7378),i=n(79197);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.M),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.P.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},88635:function(e,t,n){n.d(t,{n:function(){return s}});var r=n(45271),l=n(86106),a=n(3698),o=n.n(a);const i=["className","density","id"],s=e=>{let{className:t,density:n,id:a}=e,s=(0,r.A)(e,i);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:a},s))}},24408:function(e,t,n){n.d(t,{A:function(){return d}});var r=n(45271),l=n(86106),a=n(21197),o=n(82455),i=n(3698),s=n.n(i),c=n(7378);const m=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:n,className:i,startExpanded:d=!1,onClick:u,id:p}=e,k=(0,r.A)(e,m);const[v,f]=(0,c.useState)(d),[g]=(0,c.useState)((()=>d)),{detailsRef:b,summaryRef:E,contentRef:y,onSummaryClick:h}=(0,o.$)({onOpenChange:(e,t)=>{f(e),u&&u(t,e)},isExpanded:g});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:s()("jkl-accordion-item",i),ref:b,id:p,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:E,children:[n,(0,l.jsx)(a.l,{className:"jkl-accordion-item__arrow",pointingDown:!v,bold:v})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:y,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},38316:function(e,t,n){n.d(t,{u:function(){return m}});var r=n(7378),l=n(19767),a=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>r.createElement(l.I,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},78022:function(e,t,n){n.d(t,{b:function(){return b}});var r=n(7378),l=n(10494),a=n(75374),o=n(82462),i=n(60630),s=n(94624),c=n(65759),m=n(21664),d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const b=(0,r.forwardRef)(((e,t)=>{var n,d=e,{caption:b,columns:E,emptyTableText:y,rows:h,verticalAlign:j}=d,N=((e,t)=>{var n={};for(var r in e)v.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&k)for(var r of k(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(l.X,(n=((e,t)=>{for(var n in t||(t={}))v.call(t,n)&&g(e,n,t[n]);if(k)for(var n of k(t))f.call(t,n)&&g(e,n,t[n]);return e})({fullWidth:!0},N),u(n,p({ref:t}))),b&&r.createElement(o.r,{srOnly:!0},b),r.createElement(s.n,null,r.createElement(m.H,null,E.map(((e,t)=>r.createElement(c.A,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.B,null,0===h.length&&y&&r.createElement(m.H,null,r.createElement(i.n,{colSpan:E.length},y)),h.map(((e,t)=>r.createElement(m.H,{key:t},e.map(((e,t)=>r.createElement(i.n,{key:t,"data-th":E[t],verticalAlign:j},e))))))))}));b.displayName="DataTable"}}]);