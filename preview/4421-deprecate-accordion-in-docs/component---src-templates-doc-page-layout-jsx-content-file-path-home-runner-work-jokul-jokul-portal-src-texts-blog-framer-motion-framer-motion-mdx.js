"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3301],{61471:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return v},Head:function(){return k},default:function(){return g}});var r=n(33156),a=n(7378),l=n(94270);const i=()=>a.createElement("div",{className:"wrapper jkl-portal-paragraph"},a.createElement("div",{className:"example-container"},a.createElement(l.P.div,{whileHover:{scale:1.15},whileTap:{rotate:45,scale:.95}})));function o(e){const t=Object.assign({p:"p",a:"a",pre:"pre",code:"code"},(0,r.RP)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"Bevegelse er et av hovedprinsippene bak profilen til Fremtind. Men animasjon er ikke lett. Frem til nå har vi stort sett basert oss på enkle transformasjoner i ren CSS.\nNår man skal gjøre mer animasjon, på større deler av applikasjonen blir det litt kronglete å gjøre alt for hånd i CSS. Det finnes utallige javascript bibliotek for å forbedre utvikleropplevelsen rundt animasjon.\nEn av de nyere alternativene er ",a.createElement(t.a,{href:"https://www.framer.com/motion/"},"Framer Motion"),". Det er arvtageren til Pose fra Popmotion, en av de mest populære og likte animasjonsbibilotekene der ute. De fleste animasjonsbibilotekene har en tendens til\nå bli veldig imperative, så det parrer ikke så pent med øvrig React kode. Framer Motion derimot er først og fremst deklarativt, selvom du har muligheten til å være imperativ om du må."),"\n","\n",a.createElement(i),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-tsx"},"<motion.div whileHover={{ scale: 1.15 }} whileTap={{ rotate: 45, scale: 0.95 }} />\n")),"\n",a.createElement(t.p,null,"APIet til Framer Motion er relativt enkelt å sette seg inn i, og gir mange mulighter til å lage interaktive animasjoner. I eksemplet over er det enkle bevelgelser på hover og tap.\nDisse blir oversatt til inline style, og så langt det er mulig blir det performant, gpu akselererte, 60 fps css transisjoner. Bibliotektet baserer seg på noen få kompontenter og noen utility hooks.\nStort sett så kan du gjøre det meste du trenger av enkle animasjoner med ",a.createElement(t.code,null,"motion.{htmlElement}"),", og ",a.createElement(t.code,null,"AnimatePresence"),". AnimatePresence gir muligheten til å lage exit animasjoner, noe som alltid har vært en\nutfordring i HTML."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-tsx"},'<AnimatePresence>\n    {isOpen &&\n        filteredItems.map((item) => (\n            <motion.li\n                key={item.title}\n                initial={{ y: -60, opacity: 0 }}\n                animate={{ y: 0, x: 0, opacity: 1, transition: { duration: 0.25, delay: 0.2 } }}\n                exit={{ x: 10, opacity: 0, transition: { duration: 0.25 } }}\n                className="jkl-portal-full-screen-menu-item"\n            >\n                <FullScreenMenuItem path={item.path} title={item.title} />\n            </motion.li>\n        ))}\n</AnimatePresence>\n')),"\n",a.createElement(t.p,null,"Dette er animasjonen til hovedmenyen her i portalen. Initial er ikke overaskende startverdien til animasjonen. Denne kan være false, om du ikke vil at første render skal animere noe.\nAnimate blir overgangen fra intital staten, til elementet er klart. Her er det også spesifisert noe rundt hvor lenge animasjonen skal vare og et lite delay. Exit spesifiserer hvordan\nanimasjonen ut av DOMet skal være. Noen viktige punkter med dette er at ",a.createElement(t.code,null,"motion")," må være første child av ",a.createElement(t.code,null,"AnimatePresence"),", dette kravet kommer nok til å forsvinne etterhvert, men\nsånn React virker per 16.12.0 må AnimatePresence og motion følge etter hverandre. Det er også viktig med unik key, ikke index, for at Framer Motion skal holde kontroll på elementene."),"\n",a.createElement(t.p,null,'Noen ganger så må du programatisk sette igang animasjonen, da må du til med litt imperativitet, men vi kan pakke det inn på en måte som fortsatt gir mening i React-verden. I sidemenyen ønsker vi\nå animere innholdet i menyen ut med det gamle og inn med de nye når du bytter fra feks "Kompontenter" til "Kom i gang".'),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-tsx"},'const controls = useAnimation();\n\nuseEffect(() => {\n    (async () => {\n        await controls.start({ x: 0, opacity: 0, transition: { duration: 0.1 } });\n        await controls.start({ x: -200, opacity: 0, transition: { duration: 0.2 } });\n        await controls.start({ x: 0, opacity: 1, transition: { duration: 0.2 } });\n    })();\n}, [currentSection, controls]);\n\nreturn (\n    <motion.ul animate={controls} className="jkl-portal-sidebar-menu__items">\n        <Menu items={items} />\n    </motion.ul>\n);\n')),"\n",a.createElement(t.p,null,"Så når ",a.createElement(t.code,null,"currentSection")," endrer seg, så sparker vi igang en async funksjon som starter animasjonssekvensen med objektet vi får tilbake fra useAnimation hooken.\nVi kobler den til riktig motion element med å sende inn objektet i animate propen. Det gjør at man kan ganske enkelt orkistrere kompliserte animasjoner."),"\n",a.createElement(t.p,null,"Så langt jeg holdt på med Framer Motion virker det til å være en lovende løsning for å få på plass bevegelsen som Fremtind profilen trenger. Det er fortsatt mye igjen å sette seg inn i,\nfor å se om dette kan være en god løsning for flere av applikasjonene våre, og om vi skal kunne tilby standardiserte varianter igjenom Jøkul feks. God dokumentasjon, god utvikleropplevelse\nog bra resultat, gjør at jeg syns det er verdt å jobbe videre med Framer Motion."))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)},c=n(68888),m=n(47672),d=n(52948),p=n(38776),u=n(20919);const k=e=>{let{pageContext:t}=e;return a.createElement(m.G,{title:t.title})},v=e=>{let{location:t,data:n,pageContext:r,children:l}=e;const{frontmatter:i}=n.page,{types:o}=r;return a.createElement(u.D,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(p.Ao,Object.assign({},i,{versions:r.versions})),a.createElement(d.A,{variant:"komponent",component:i.title}),a.createElement(p.f6,i),l,o&&a.createElement(c.N,{types:o}))};function g(e){return a.createElement(v,e,a.createElement(s,e))}},68888:function(e,t,n){n.d(t,{N:function(){return k}});var r=n(88635),a=n(24408),l=n(78022),i=n(7378),o=n(45371);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,i=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",i)},p=e=>{const t=e.target,n=t.parentElement;d(t,n)},u=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(l.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(r.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],l=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,a,l,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(l=a.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(a.A,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.NG,{className:"jkl-portal-code-block"},s),r.length>0&&i.createElement(u,{props:r}),l.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(u,{props:l})))}))))}},52948:function(e,t,n){n.d(t,{A:function(){return o}});var r=n(77800),a=n(38316),l=n(7378),i=n(45371);const o=e=>{let{variant:t,component:n}=e;return l.createElement("section",{className:"suggestion-block"},l.createElement("div",{className:"suggestion-block__content"},l.createElement(a.u,null),l.createElement(i.fz,null,s[t].text)),l.createElement(r.N,{href:s[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,t,n){n.d(t,{D:function(){return s}});var r=n(3698),a=n.n(r),l=n(94270),i=n(7378),o=n(79197);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,i.useContext)(o.M),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(l.P.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},88635:function(e,t,n){n.d(t,{n:function(){return s}});var r=n(45271),a=n(86106),l=n(3698),i=n.n(l);const o=["className","density","id"],s=e=>{let{className:t,density:n,id:l}=e,s=(0,r.A)(e,o);return(0,a.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:i()("jkl-accordion",t),"data-density":n,id:l},s))}},24408:function(e,t,n){n.d(t,{A:function(){return d}});var r=n(45271),a=n(86106),l=n(21197),i=n(82455),o=n(3698),s=n.n(o),c=n(7378);const m=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:n,className:o,startExpanded:d=!1,onClick:p,id:u}=e,k=(0,r.A)(e,m);const[v,g]=(0,c.useState)(d),[f]=(0,c.useState)((()=>d)),{detailsRef:b,summaryRef:j,contentRef:E,onSummaryClick:y}=(0,i.$)({onOpenChange:(e,t)=>{g(e),p&&p(t,e)},isExpanded:f});return(0,a.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:s()("jkl-accordion-item",o),ref:b,id:u,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:y,ref:j,children:[n,(0,a.jsx)(l.l,{className:"jkl-accordion-item__arrow",pointingDown:!v,bold:v})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},38316:function(e,t,n){n.d(t,{u:function(){return m}});var r=n(7378),a=n(19767),l=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>r.createElement(a.I,((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},78022:function(e,t,n){n.d(t,{b:function(){return b}});var r=n(7378),a=n(10494),l=n(75374),i=n(82462),o=n(60630),s=n(94624),c=n(65759),m=n(21664),d=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const b=(0,r.forwardRef)(((e,t)=>{var n,d=e,{caption:b,columns:j,emptyTableText:E,rows:y,verticalAlign:h}=d,N=((e,t)=>{var n={};for(var r in e)v.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&k)for(var r of k(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(a.X,(n=((e,t)=>{for(var n in t||(t={}))v.call(t,n)&&f(e,n,t[n]);if(k)for(var n of k(t))g.call(t,n)&&f(e,n,t[n]);return e})({fullWidth:!0},N),p(n,u({ref:t}))),b&&r.createElement(i.r,{srOnly:!0},b),r.createElement(s.n,null,r.createElement(m.H,null,j.map(((e,t)=>r.createElement(c.A,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.B,null,0===y.length&&E&&r.createElement(m.H,null,r.createElement(o.n,{colSpan:j.length},E)),y.map(((e,t)=>r.createElement(m.H,{key:t},e.map(((e,t)=>r.createElement(o.n,{key:t,"data-th":j[t],verticalAlign:h},e))))))))}));b.displayName="DataTable"}}]);