"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9233],{64219:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return p},Head:function(){return u},default:function(){return d}});var l=n(47160),r=n(70079);function a(e){const t=Object.assign({p:"p",ul:"ul",li:"li",h2:"h2",a:"a",h3:"h3",code:"code"},(0,l.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,"Ikke så lenge siden sist, men det har rukket å skje ting i Jøkul."),"\n",r.createElement(t.p,null,"Her er februar kort oppsummert:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Footer-komponenten er delt i to, og fornyet."),"\n",r.createElement(t.li,null,"Vi jobber med noen løse tråder etter Jøkuluka, blant annet:","\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"DatePicker som slår sammen dagens forenklede og utvidede varianter til én variant."),"\n",r.createElement(t.li,null,"Combobox for å kunne velge flere elementer fra en liste."),"\n",r.createElement(t.li,null,"Kontekstuell meny."),"\n"),"\n"),"\n"),"\n",r.createElement(t.h2,null,"Oppdatert footer"),"\n",r.createElement(t.p,null,"Under Jøkuluka jobbet en gruppe med designere og utviklere på en ny versjon av footerkomponenten i Jøkul. Blant problemene de ønsket å løse var de forskjellige behovene løsningene våre har rundt kontaktinformasjon."),"\n",r.createElement(t.p,null,r.createElement("em",{lang:"en"},"One size does not fit all"),", så komponenten ble delt opp i flere deler:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/fix--replace-classnames-with-clsx/komponenter/contactinformation"},"ContactInformation")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/fix--replace-classnames-with-clsx/komponenter/footer"},"Footer")),"\n"),"\n",r.createElement(t.p,null,"De to komponentene har forskjellige props og hjelpekomponenter som gir høyere fleksibilitet enn tidligere."),"\n",r.createElement("figure",null,r.createElement("picture",{className:"jkl-portal-image"},r.createElement("source",{media:"(prefers-color-scheme: dark)",srcset:"/assets/blog/updates/februar-2023/footer-kontaktinfo-eks-dark.png"}),r.createElement("img",{className:"jkl-portal-image__img",alt:"",loading:"lazy",decoding:"async",src:"/assets/blog/updates/februar-2023/footer-kontaktinfo-eks.png"})),r.createElement("figcaption",null,"Et eksempel på hvordan det kan se ut med de nye komponentene.")),"\n",r.createElement(t.p,null,"Prøv gjerne de nye komponentene og kom med tilbakemelding på Teams."),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3384"},"#3384")),"\n"),"\n",r.createElement(t.h2,null,"Diverse bugfikser og forbedringer"),"\n",r.createElement(t.h3,null,"Figma"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Fikset hover-state i Card (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3401"},"#3401"),")"),"\n",r.createElement(t.li,null,"La til padding 0 i TaskCard (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3283"},"#3283"),")"),"\n",r.createElement(t.li,null,"Gjorde så Accordion tar inn en slot component (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3366"},"#3366"),")"),"\n",r.createElement(t.li,null,"De fleste komponenter og mønstre bruker ",r.createElement(t.a,{href:"/preview/fix--replace-classnames-with-clsx/blog/updates/januar-2023/"},"de nye ikonene")),"\n",r.createElement(t.li,null,"Figma har en ny utilities-kategori for funksjonelle komponenter som ofte brukes i andre komponenter (f. eks. animert pil)"),"\n",r.createElement(t.li,null,"Group Title har fått Tooltip og innebygget spacing"),"\n"),"\n",r.createElement(t.h3,null,"GitHub"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Gjenopprett ekspandering av tekstområde (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3395"},"#3395"),")"),"\n",r.createElement(t.li,null,"Finpuss på dokumentasjonen til TextInput (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3360"},"#3360"),")"),"\n",r.createElement(t.li,null,"Fiks et synkroniseringsproblem i Select som forvirret ",r.createElement(t.code,null,"react-hook-form")," sin ",r.createElement(t.code,null,"required")," (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3402"},"#3402"),")"),"\n",r.createElement(t.li,null,"Oppdater IconButton i Table-pakka for å fikse pagineringsikoner (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3417"},"#3417"),")"),"\n",r.createElement(t.li,null,"Dokumentér at InputGroup sin CSS trengs for komponenter der dette manglet (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3419"},"#3419"),")"),"\n",r.createElement(t.li,null,"Sync tag-spacing med Figma (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3404"},"#3404"),")"),"\n",r.createElement(t.li,null,"Fiks to regresjoner i Select der onChange ble kalt med uventet verdi og kunne starte en render-loop (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3424"},"#3424"),")"),"\n"),"\n",r.createElement(t.h2,null,"Takk"),"\n",r.createElement(t.p,null,"Takk til alle som har vært med å bygge videre på Jøkul, både på GitHub og i Figma!"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"BjorneOma"),"\n",r.createElement(t.li,null,"Chrihenn"),"\n",r.createElement(t.li,null,"joms"),"\n",r.createElement(t.li,null,"kennidenni"),"\n",r.createElement(t.li,null,"maciejost"),"\n"),"\n",r.createElement(t.p,null,"En stor takk også til alle som er med på designsystemforum!"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)};var i=n(72285),c=n(22756),s=n(95573),m=n(1634);const u=e=>{let{pageContext:t}=e;return r.createElement(c.p,{title:t.title})},p=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:o}=n.page,{types:c}=l;return r.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(s.M1,Object.assign({},o,{versions:l.versions})),r.createElement(s.w5,o),a,c&&r.createElement(i.l,{types:c}))};function d(e){return r.createElement(p,e,r.createElement(o,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var l=n(78217),r=n(41994),a=n(87505),o=n(70079),i=n(54656);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,o=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},p=e=>{const t=e.target,n=t.parentElement;u(t,n)},d=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var l},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(s):[],c=(e=>{var t,n,l,r,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&o.createElement(i.dn,{className:"jkl-portal-code-block"},c),l.length>0&&o.createElement(d,{props:l}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(d,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return c}});var l=n(26372),r=n.n(l),a=n(49597),o=n(70079),i=n(34044);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,o.useContext)(i.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||c?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return a}});var l=n(53048),r=n(70079);const a=e=>{let{className:t,density:n,id:a,...o}=e;return r.createElement("section",{role:"group","data-testid":"jkl-accordion",className:(0,l.Z)("jkl-accordion",t),"data-density":n,id:a,...o})}},41994:function(e,t,n){n.d(t,{Q:function(){return i}});var l=n(53484),r=n(1386),a=n(53048),o=n(70079);const i=e=>{let{children:t,title:n,className:i,startExpanded:c=!1,onClick:s,id:m,...u}=e;const{0:p,1:d}=(0,o.useState)(c),{0:k}=(0,o.useState)((()=>c)),{detailsRef:f,summaryRef:E,contentRef:g,onSummaryClick:h}=(0,r.E)({onOpenChange:(e,t)=>{d(e),s&&s(t,e)},isExpanded:k});return o.createElement("details",{"data-testid":"jkl-accordion-item",...u,className:(0,a.Z)("jkl-accordion-item",i),ref:f,id:m},o.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:E},n,o.createElement(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})),o.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:g},o.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return u}});var l=n(70079),r=n(41699),a=n(65174),o=n(6914),i=n(82546),c=n(39126),s=n(66169),m=n(94509);const u=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:p,rows:d,verticalAlign:k,...f}=e;return l.createElement(r.i,{fullWidth:!0,...f,ref:t},n&&l.createElement(o.R,{srOnly:!0},n),l.createElement(c.s,null,l.createElement(m.S,null,u.map(((e,t)=>l.createElement(s.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===d.length&&p&&l.createElement(m.S,null,l.createElement(i.p,{colSpan:u.length},p)),d.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":u[t],verticalAlign:k},e))))))))}));u.displayName="DataTable"}}]);