"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5557],{91046:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return p},Head:function(){return m},default:function(){return u}});var r=n(47160),l=n(70079);function a(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",em:"em"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Vår profil"),"\n",l.createElement(t.p,null,"Fremtinds stil er enkel, tydelig og moderne. Vi skal fremstå med nordisk minimalisme og følge klar skandinavisk designtankegang. Visuelt oppnår vi dette gjennom å bruke få farger, stor typografi, naturlige bilder, rikelig med luft og ingen unødvendig dekor. Fremtinds stemme skal være modig, presis og klar."),"\n",l.createElement(t.p,null,"Felles for alt vi lager, er at det følger våre tre hovedprinsipper: bevegelse, elevasjon og klarhet. Hvis du lager noe til vår profil og er usikker på hvordan du skal designe løsningen på best mulig måte, kan det blir lettere om du tenker på disse prinsippene."),"\n",l.createElement(t.h2,null,"Bevegelse"),"\n",l.createElement(t.p,null,"Fremtind skal være et selskap i bevegelse, som tydelig viser veien fremover. I ordet legger vi at vi skal utforske, se fremover og være tilpasningsdyktige."),"\n",l.createElement(t.p,null,"Vi leter stadig etter nye og bedre måter å løse problemer på, og er ikke redde for å utfordre dagens standard. Vi bruker animasjon til å gjøre Fremtind mer synlig, som et selskap som er i bevegelse. Vi passer alltid på at animasjoner har en funksjonell verdi."),"\n",l.createElement(t.h2,null,"Elevasjon"),"\n",l.createElement(t.p,null,"Vi løfter det som er viktig og skaper et naturlig informasjonshierarki. Det gjør vi gjennom å jobbe med nivåer og dybde."),"\n",l.createElement(t.p,null,"Vi bruker skygger og elementer med ulik størrelse for å vise hva som er viktigst på en side. Kontrastene i størrelse gjør at brukerne lettere finner fram til det viktigste innholdet. Det skaper også naturlige pauser i oppsettet."),"\n",l.createElement(t.h2,null,"Klarhet"),"\n",l.createElement(t.p,null,"Fremtind skal fremstå som ærlig og klar, med en tydelig og varm stemme. Vi skaper klarhet gjennom å forenkle, fjerne unødvendig støy og gi brukerne bare relevante valg. Vi overlesser ikke brukeren med informasjon, men skaper god oversikt og rytme i våre løsninger."),"\n",l.createElement(t.p,null,'Språket skal også være tydelig – Fremtind bruker klarspråk. De overordnede prinsippene for hvordan vi skriver finner du i "Stemmen vår". Der finner du også ',l.createElement(t.em,null,"språkprofilen"),', med skriveråd og rettskrivingsregler, og en ordliste med "forsikringske" ord vi helst vil unngå og forslag til alternativer .'))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},o=n(72285),s=n(22756),c=n(95573),d=n(1634);const m=e=>{let{pageContext:t}=e;return l.createElement(s.p,{title:t.title})},p=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:i}=n.page,{types:s}=r;return l.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(c.M1,Object.assign({},i,{versions:r.versions})),l.createElement(c.w5,i),a,s&&l.createElement(o.l,{types:s}))};function u(e){return l.createElement(p,e,l.createElement(i,e))}},72285:function(e,t,n){n.d(t,{l:function(){return g}});var r=n(78217),l=n(41994),a=n(87505),i=n(70079),o=n(54656);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,i=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},p=e=>{const t=e.target,n=t.parentElement;m(t,n)},u=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},g=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(d):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,l,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),r.length>0&&i.createElement(u,{props:r}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(u,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(26372),l=n.n(r),a=n(49597),i=n(70079),o=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return i}});var r=n(26372),l=n.n(r),a=n(70079);const i=e=>{let{className:t,density:n,...r}=e;return a.createElement("div",{"data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,...r})}},41994:function(e,t,n){n.d(t,{Q:function(){return c}});var r=n(53484),l=n(3438),a=n(84490),i=n(26372),o=n.n(i),s=n(70079);const c=e=>{let{children:t,title:n,className:i,startExpanded:c=!1,onClick:d,...m}=e;const p=(0,l.M)("title"),u=(0,l.M)("content"),{0:g,1:v}=(0,s.useState)(c),[k]=(0,a.v)(g,{easing:"exit",timing:"expressive"});return s.createElement("div",{"data-testid":"jkl-accordion-item",...m,className:o()("jkl-accordion-item",i,{"jkl-accordion-item--expanded":g})},s.createElement("button",{id:p,className:"jkl-accordion-item__title",type:"button","aria-expanded":g,"aria-controls":u,onClick:e=>{const t=!g;v(t),d&&d(e,t)}},n,s.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!g,bold:g})),s.createElement("div",{id:u,ref:k,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":p,hidden:!g},s.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var r=n(70079),l=n(41699),a=n(65174),i=n(6914),o=n(82546),s=n(39126),c=n(66169),d=n(94509);const m=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:p,rows:u,verticalAlign:g,...v}=e;return r.createElement(l.i,{fullWidth:!0,...v,ref:t},n&&r.createElement(i.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(d.S,null,m.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===u.length&&p&&r.createElement(d.S,null,r.createElement(o.p,{colSpan:m.length},p)),u.map(((e,t)=>r.createElement(d.S,{key:t},e.map(((e,t)=>r.createElement(o.p,{key:t,"data-th":m[t],verticalAlign:g},e))))))))}));m.displayName="DataTable"}}]);