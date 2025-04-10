"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5557],{91046:function(e,t,r){r.r(t),r.d(t,{DocPageLayout:function(){return p},Head:function(){return m},default:function(){return u}});var n=r(47160),l=r(70079);function a(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",em:"em"},(0,n.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Vår profil"),"\n",l.createElement(t.p,null,"Fremtinds stil er enkel, tydelig og moderne. Vi skal fremstå med nordisk minimalisme og følge klar skandinavisk designtankegang. Visuelt oppnår vi dette gjennom å bruke få farger, stor typografi, naturlige bilder, rikelig med luft og ingen unødvendig dekor. Fremtinds stemme skal være modig, presis og klar."),"\n",l.createElement(t.p,null,"Felles for alt vi lager, er at det følger våre tre hovedprinsipper: bevegelse, elevasjon og klarhet. Hvis du lager noe til vår profil og er usikker på hvordan du skal designe løsningen på best mulig måte, kan det blir lettere om du tenker på disse prinsippene."),"\n",l.createElement(t.h2,null,"Bevegelse"),"\n",l.createElement(t.p,null,"Fremtind skal være et selskap i bevegelse, som tydelig viser veien fremover. I ordet legger vi at vi skal utforske, se fremover og være tilpasningsdyktige."),"\n",l.createElement(t.p,null,"Vi leter stadig etter nye og bedre måter å løse problemer på, og er ikke redde for å utfordre dagens standard. Vi bruker animasjon til å gjøre Fremtind mer synlig, som et selskap som er i bevegelse. Vi passer alltid på at animasjoner har en funksjonell verdi."),"\n",l.createElement(t.h2,null,"Elevasjon"),"\n",l.createElement(t.p,null,"Vi løfter det som er viktig og skaper et naturlig informasjonshierarki. Det gjør vi gjennom å jobbe med nivåer og dybde."),"\n",l.createElement(t.p,null,"Vi bruker skygger og elementer med ulik størrelse for å vise hva som er viktigst på en side. Kontrastene i størrelse gjør at brukerne lettere finner fram til det viktigste innholdet. Det skaper også naturlige pauser i oppsettet."),"\n",l.createElement(t.h2,null,"Klarhet"),"\n",l.createElement(t.p,null,"Fremtind skal fremstå som ærlig og klar, med en tydelig og varm stemme. Vi skaper klarhet gjennom å forenkle, fjerne unødvendig støy og gi brukerne bare relevante valg. Vi overlesser ikke brukeren med informasjon, men skaper god oversikt og rytme i våre løsninger."),"\n",l.createElement(t.p,null,'Språket skal også være tydelig – Fremtind bruker klarspråk. De overordnede prinsippene for hvordan vi skriver finner du i "Stemmen vår". Der finner du også ',l.createElement(t.em,null,"språkprofilen"),', med skriveråd og rettskrivingsregler, og en ordliste med "forsikringske" ord vi helst vil unngå og forslag til alternativer .'))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},s=r(72285),o=r(22756),d=r(95573),c=r(1634);const m=e=>{let{pageContext:t}=e;return l.createElement(o.p,{title:t.title})},p=e=>{let{location:t,data:r,pageContext:n,children:a}=e;const{frontmatter:i}=r.page,{types:o}=n;return l.createElement(c.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(d.M1,Object.assign({},i,{versions:n.versions})),l.createElement(d.w5,i),a,o&&l.createElement(s.l,{types:o}))};function u(e){return l.createElement(p,e,l.createElement(i,e))}},72285:function(e,t,r){r.d(t,{l:function(){return g}});var n=r(58820),l=r(63571),a=r(87505),i=r(70079),s=r(54656);const o=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:r,scrollWidth:n}=e,{clientWidth:l}=t,a=r>0,i=n-r>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},p=e=>{const t=e.target,r=t.parentElement;m(t,r)},u=e=>{let{props:t}=e;const r=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=r.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),n=r.current.parentElement.parentElement;t.observe(n,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:r,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(n=t,n.map((e=>{var t,r;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(r=e.type)&&void 0!==r&&r.name?o(e.type.name):""]})))})));var n},g=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(n.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,r]=e;const n=r.props?Object.values(r.props).filter(c):[],a=r.props?Object.values(r.props).filter(d):[],o=(e=>{var t,r,n,l,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(r=e.tags)&&void 0!==r&&r.returns?["/**",null===(n=e.description)||void 0===n?void 0:n.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(r);return i.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&i.createElement(s.dn,{className:"jkl-portal-code-block"},o),n.length>0&&i.createElement(u,{props:n}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(u,{props:a})))}))))}},1634:function(e,t,r){r.d(t,{M:function(){return o}});var n=r(26372),l=r.n(n),a=r(49597),i=r(70079),s=r(34044);const o=e=>{let{className:t,children:r}=e;const{prefersReducedMotion:n}=(0,i.useContext)(s.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:n?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:n?0:-20,opacity:0},transition:{duration:n||o?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},r)}},58820:function(e,t,r){r.d(t,{U:function(){return i}});var n=r(35250),l=r(26372),a=r.n(l);const i=e=>{let{className:t,density:r,id:l,...i}=e;return(0,n.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":r,id:l,...i})}},63571:function(e,t,r){r.d(t,{Q:function(){return d}});var n=r(35250),l=r(68998),a=r(1386),i=r(26372),s=r.n(i),o=r(70079);const d=e=>{let{children:t,title:r,className:i,startExpanded:d=!1,onClick:c,id:m,...p}=e;const[u,g]=(0,o.useState)(d),[k]=(0,o.useState)((()=>d)),{detailsRef:v,summaryRef:f,contentRef:E,onSummaryClick:h}=(0,a.E)({onOpenChange:(e,t)=>{g(e),c&&c(t,e)},isExpanded:k});return(0,n.jsxs)("details",{"data-testid":"jkl-accordion-item",...p,className:s()("jkl-accordion-item",i),ref:v,id:m,children:[(0,n.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:f,children:[r,(0,n.jsx)(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})]}),(0,n.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E,children:(0,n.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,r){r.d(t,{w:function(){return m}});var n=r(70079),l=r(41699),a=r(65174),i=r(6914),s=r(82546),o=r(39126),d=r(66169),c=r(94509);const m=(0,n.forwardRef)(((e,t)=>{let{caption:r,columns:m,emptyTableText:p,rows:u,verticalAlign:g,...k}=e;return n.createElement(l.i,{fullWidth:!0,...k,ref:t},r&&n.createElement(i.R,{srOnly:!0},r),n.createElement(o.s,null,n.createElement(c.S,null,m.map(((e,t)=>n.createElement(d.x,{key:t,density:"compact",bold:!0},e))))),n.createElement(a.R,null,0===u.length&&p&&n.createElement(c.S,null,n.createElement(s.p,{colSpan:m.length},p)),u.map(((e,t)=>n.createElement(c.S,{key:t},e.map(((e,t)=>n.createElement(s.p,{key:t,"data-th":m[t],verticalAlign:g},e))))))))}));m.displayName="DataTable"}}]);