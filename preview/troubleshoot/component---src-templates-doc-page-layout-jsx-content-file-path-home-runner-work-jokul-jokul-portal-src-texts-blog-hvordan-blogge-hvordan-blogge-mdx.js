"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1546],{14498:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return m},default:function(){return p}});var l=n(47160),r=n(70079);function a(e){const t=Object.assign({p:"p",a:"a",h2:"h2",ol:"ol",li:"li",code:"code",em:"em",img:"img",pre:"pre",h3:"h3",h4:"h4"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"Portalen i Jøkul er ikke bare et komponentbibliotek eller statisk dokumentasjon, det er en portal for alt vi syns hører hjemme her. Og nå inklurerer det en blog.\nHva innholdet skal være her er opp til alle som vil bidra. Denne posten skal prøve å ta for seg hvordan du kan bidra med en post, enten du er utvikler, designer, prosjektleder eller noe annet med noe å dele."),"\n",r.createElement(t.p,null,"Kort teknisk, Portalen er basert på ",r.createElement(t.a,{href:""},"gatsby"),", en statisk side generator, som baserer seg på ",r.createElement(t.a,{href:""},"markdown"),". Blogposter skiller seg sånn sett veldig lite ut ifra resten av dokumentasjonen i portalen,\nså er du komfortabel med å lage dokumentasjon der, så er du veldig nære å kunne lage din blogpost."),"\n",r.createElement(t.h2,null,"Min første blogpost"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"Naviger deg inn til ",r.createElement(t.code,null,"/portal/src/texts/blog/")," i din IDE, eller gå inn på ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/tree/main/portal/src/texts/blog"},"github her")),"\n",r.createElement(t.li,null,"I din IDE, lag en ny fil, gi den et fornuftig navn med filendelsen ",r.createElement(t.code,null,".mdx"),".",r.createElement("br"),"På github kan du trykke på ",r.createElement(t.code,null,"Create new file"),". Det er veldig viktig at fila slutter på ",r.createElement(t.em,null,".mdx"),", gatsby plukker bare opp filer med denne endelsen.\n",r.createElement(t.img,{src:"/assets/blog/hvordanBlogge/createFile.jpg",alt:""})),"\n",r.createElement(t.li,null,"I fila må du legge inn litt metadata om posten din.","\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-mdx"},'---\ntitle: Min første bloggpost\nauthor: Forfatter Forfattersen\ndescription: En setning eller to om innholdet i bloggposten, denne vises på forsiden når din post er den nyeste\npublishDate: "2020.06.05"\n---\n')),"\n"),"\n",r.createElement(t.li,null,"Resten av fila fyller du med ditt innhold i markdown-format.",r.createElement("br"),"Du kan lese mer om hvordan du gjør det ",r.createElement(t.a,{href:"/preview/troubleshoot/guider/portalen"},"her i portalen")),"\n",r.createElement(t.li,null,"Så lager du pull request, resten skjer av seg selv!"),"\n"),"\n",r.createElement(t.h3,null,"Hvordan legge til bilde"),"\n",r.createElement(t.p,null,"Bare tekst kan jo bli litt kjederlig. Du trenger kanskje et bilde for å forklare noe, eller bare et meme for å vise at du følger med i tiden."),"\n",r.createElement(t.h4,null,"Bruke bilde fra internet"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"Legg bildet direkte inn i ",r.createElement(t.code,null,".mdx")," fila med ",r.createElement(t.code,null,"![](https://adressen-til-bildet.com/bildet.png)")),"\n"),"\n",r.createElement(t.h4,null,"Laste opp eget bilde"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"Naviger deg til ",r.createElement(t.code,null,"/portal/static/assets/blog/")," i din IDE,",r.createElement("br"),"eller gå inn på ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/tree/main/portal/static/assets/blog"},"github her")),"\n",r.createElement(t.li,null,"Legg inn fila di, eller trykk på last opp fil i Github.",r.createElement("br"),"Jobber du lokalt må du restarte gatsby før du ser bildet, siden gatsby bare leser statiske assets ved oppstart."),"\n",r.createElement(t.li,null,"For å få bildet inn i posten din gjør du det med standard markdown,",r.createElement("br"),r.createElement(t.code,null,"![](/assets/blog/ditt-bilde.jpg)")),"\n"),"\n",r.createElement(t.h4,null,"Du kan litt React"),"\n",r.createElement(t.p,null,"Jeg lister ikke opp noe steg her, men avslører heller direkte den ikke så hemmelige hemmeligheten, at du kan putte React kode rett inn i mdx fila. Så vil du ha inn et bilde, gjør ",r.createElement(t.code,null,'import someAsset from "./someAsset.svg"'),",\nog ",r.createElement(t.code,null,'<img src={someAsset} alt="Husk alt tekst, det er vanlig høflighet" />'),"."),"\n",r.createElement(t.h2,null,"Oppsummering"),"\n",r.createElement(t.p,null,"Så, det er ikke så vanskelig, om du er usikker så kan du se på de eksisterende postene og få inspirasjon av de,\nfeks kan du ta en titt på ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/tree/main/portal/src/texts/blog/hvordanBlogge/hvordanBlogge.mdx"},"denne posten"),"."))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},o=n(72285),s=n(22756),d=n(95573),c=n(1634);const m=e=>{let{pageContext:t}=e;return r.createElement(s.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:i}=n.page,{types:s}=l;return r.createElement(c.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(d.M1,Object.assign({},i,{versions:l.versions})),r.createElement(d.w5,i),a,s&&r.createElement(o.l,{types:s}))};function p(e){return r.createElement(u,e,r.createElement(i,e))}},72285:function(e,t,n){n.d(t,{l:function(){return g}});var l=n(58820),r=n(63571),a=n(87505),i=n(70079),o=n(54656);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,i=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},u=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},g=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(c):[],a=n.props?Object.values(n.props).filter(d):[],s=(e=>{var t,n,l,r,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),l.length>0&&i.createElement(p,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var l=n(26372),r=n.n(l),a=n(49597),i=n(70079),o=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return i}});var l=n(35250),r=n(26372),a=n.n(r);const i=e=>{let{className:t,density:n,id:r,...i}=e;return(0,l.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:r,...i})}},63571:function(e,t,n){n.d(t,{Q:function(){return d}});var l=n(35250),r=n(68998),a=n(1386),i=n(26372),o=n.n(i),s=n(70079);const d=e=>{let{children:t,title:n,className:i,startExpanded:d=!1,onClick:c,id:m,...u}=e;const[p,g]=(0,s.useState)(d),[k]=(0,s.useState)((()=>d)),{detailsRef:f,summaryRef:E,contentRef:h,onSummaryClick:v}=(0,a.E)({onOpenChange:(e,t)=>{g(e),c&&c(t,e)},isExpanded:k});return(0,l.jsxs)("details",{"data-testid":"jkl-accordion-item",...u,className:o()("jkl-accordion-item",i),ref:f,id:m,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:v,ref:E,children:[n,(0,l.jsx)(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var l=n(70079),r=n(41699),a=n(65174),i=n(6914),o=n(82546),s=n(39126),d=n(66169),c=n(94509);const m=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:u,rows:p,verticalAlign:g,...k}=e;return l.createElement(r.i,{fullWidth:!0,...k,ref:t},n&&l.createElement(i.R,{srOnly:!0},n),l.createElement(s.s,null,l.createElement(c.S,null,m.map(((e,t)=>l.createElement(d.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&u&&l.createElement(c.S,null,l.createElement(o.p,{colSpan:m.length},u)),p.map(((e,t)=>l.createElement(c.S,{key:t},e.map(((e,t)=>l.createElement(o.p,{key:t,"data-th":m[t],verticalAlign:g},e))))))))}));m.displayName="DataTable"}}]);