"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1546],{14498:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return m},Head:function(){return u},default:function(){return p}});var r=n(47160),l=n(70079);function a(e){const t=Object.assign({p:"p",a:"a",h2:"h2",ol:"ol",li:"li",code:"code",em:"em",img:"img",pre:"pre",h3:"h3",h4:"h4"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"Portalen i Jøkul er ikke bare et komponentbibliotek eller statisk dokumentasjon, det er en portal for alt vi syns hører hjemme her. Og nå inklurerer det en blog.\nHva innholdet skal være her er opp til alle som vil bidra. Denne posten skal prøve å ta for seg hvordan du kan bidra med en post, enten du er utvikler, designer, prosjektleder eller noe annet med noe å dele."),"\n",l.createElement(t.p,null,"Kort teknisk, Portalen er basert på ",l.createElement(t.a,{href:""},"gatsby"),", en statisk side generator, som baserer seg på ",l.createElement(t.a,{href:""},"markdown"),". Blogposter skiller seg sånn sett veldig lite ut ifra resten av dokumentasjonen i portalen,\nså er du komfortabel med å lage dokumentasjon der, så er du veldig nære å kunne lage din blogpost."),"\n",l.createElement(t.h2,null,"Min første blogpost"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Naviger deg inn til ",l.createElement(t.code,null,"/portal/src/texts/blog/")," i din IDE, eller gå inn på ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/tree/main/portal/src/texts/blog"},"github her")),"\n",l.createElement(t.li,null,"I din IDE, lag en ny fil, gi den et fornuftig navn med filendelsen ",l.createElement(t.code,null,".mdx"),".",l.createElement("br"),"På github kan du trykke på ",l.createElement(t.code,null,"Create new file"),". Det er veldig viktig at fila slutter på ",l.createElement(t.em,null,".mdx"),", gatsby plukker bare opp filer med denne endelsen.\n",l.createElement(t.img,{src:"/assets/blog/hvordanBlogge/createFile.jpg",alt:""})),"\n",l.createElement(t.li,null,"I fila må du legge inn litt metadata om posten din.","\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-mdx"},'---\ntitle: Min første bloggpost\nauthor: Forfatter Forfattersen\ndescription: En setning eller to om innholdet i bloggposten, denne vises på forsiden når din post er den nyeste\npublishDate: "2020.06.05"\n---\n')),"\n"),"\n",l.createElement(t.li,null,"Resten av fila fyller du med ditt innhold i markdown-format.",l.createElement("br"),"Du kan lese mer om hvordan du gjør det ",l.createElement(t.a,{href:"/preview/fix-lock/guider/portalen"},"her i portalen")),"\n",l.createElement(t.li,null,"Så lager du pull request, resten skjer av seg selv!"),"\n"),"\n",l.createElement(t.h3,null,"Hvordan legge til bilde"),"\n",l.createElement(t.p,null,"Bare tekst kan jo bli litt kjederlig. Du trenger kanskje et bilde for å forklare noe, eller bare et meme for å vise at du følger med i tiden."),"\n",l.createElement(t.h4,null,"Bruke bilde fra internet"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Legg bildet direkte inn i ",l.createElement(t.code,null,".mdx")," fila med ",l.createElement(t.code,null,"![](https://adressen-til-bildet.com/bildet.png)")),"\n"),"\n",l.createElement(t.h4,null,"Laste opp eget bilde"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Naviger deg til ",l.createElement(t.code,null,"/portal/static/assets/blog/")," i din IDE,",l.createElement("br"),"eller gå inn på ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/tree/main/portal/static/assets/blog"},"github her")),"\n",l.createElement(t.li,null,"Legg inn fila di, eller trykk på last opp fil i Github.",l.createElement("br"),"Jobber du lokalt må du restarte gatsby før du ser bildet, siden gatsby bare leser statiske assets ved oppstart."),"\n",l.createElement(t.li,null,"For å få bildet inn i posten din gjør du det med standard markdown,",l.createElement("br"),l.createElement(t.code,null,"![](/assets/blog/ditt-bilde.jpg)")),"\n"),"\n",l.createElement(t.h4,null,"Du kan litt React"),"\n",l.createElement(t.p,null,"Jeg lister ikke opp noe steg her, men avslører heller direkte den ikke så hemmelige hemmeligheten, at du kan putte React kode rett inn i mdx fila. Så vil du ha inn et bilde, gjør ",l.createElement(t.code,null,'import someAsset from "./someAsset.svg"'),",\nog ",l.createElement(t.code,null,'<img src={someAsset} alt="Husk alt tekst, det er vanlig høflighet" />'),"."),"\n",l.createElement(t.h2,null,"Oppsummering"),"\n",l.createElement(t.p,null,"Så, det er ikke så vanskelig, om du er usikker så kan du se på de eksisterende postene og få inspirasjon av de,\nfeks kan du ta en titt på ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/tree/main/portal/src/texts/blog/hvordanBlogge/hvordanBlogge.mdx"},"denne posten"),"."))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},o=n(72285),s=n(22756),c=n(95573),d=n(1634);const u=e=>{let{pageContext:t}=e;return l.createElement(s.p,{title:t.title})},m=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:i}=n.page,{types:s}=r;return l.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(c.M1,Object.assign({},i,{versions:r.versions})),l.createElement(c.w5,i),a,s&&l.createElement(o.l,{types:s}))};function p(e){return l.createElement(m,e,l.createElement(i,e))}},72285:function(e,t,n){n.d(t,{l:function(){return g}});var r=n(78217),l=n(76802),a=n(87505),i=n(70079),o=n(54656);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,i=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},m=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},g=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(d):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,l,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),r.length>0&&i.createElement(p,{props:r}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(26372),l=n.n(r),a=n(49597),i=n(70079),o=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return i}});var r=n(26372),l=n.n(r),a=n(70079);const i=e=>{let{className:t,density:n,...r}=e;return a.createElement("section",{role:"group","data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,...r})}},76802:function(e,t,n){n.d(t,{Q:function(){return s}});var r=n(53484),l=n(26372),a=n.n(l),i=n(70079);const o=e=>{let{onOpenChange:t,startExpanded:n}=e;const r=(0,i.useRef)(null),l=(0,i.useRef)(null),a=(0,i.useRef)(null),o=(0,i.useRef)(null),{0:s,1:c}=(0,i.useState)(!1),{0:d,1:u}=(0,i.useState)(!1);(0,i.useEffect)((()=>{r.current&&(r.current.open=n)}),[]);const m=e=>{r.current&&l.current&&(r.current.open=e,o.current=null,c(!1),u(!1),r.current.style.overflow="",r.current.style.height="")};return{detailsRef:r,summaryRef:l,contentRef:a,onSummaryClick:e=>{e.preventDefault(),r.current&&l.current&&(r.current.style.overflow="hidden",s||!r.current.open?(e=>{r.current&&l.current&&(r.current.style.height="".concat(r.current.offsetHeight,"px"),r.current.open=!0,requestAnimationFrame((()=>{if(r.current&&l.current&&a.current){u(!0),t(!0,e);const n=r.current.offsetHeight,i=l.current.offsetHeight+a.current.offsetHeight;o.current&&o.current.cancel(),r.current.animate&&(o.current=r.current.animate({height:["".concat(n,"px"),"".concat(i,"px")]},{duration:150,easing:"ease"}),o.current.onfinish=()=>m(!0),o.current.oncancel=()=>u(!1))}})))})(e):(d||r.current.open)&&(e=>{if(r.current&&l.current){c(!0),t(!1,e);const n=r.current.offsetHeight,a=l.current.offsetHeight;o.current&&o.current.cancel(),r.current.animate&&(o.current=r.current.animate({height:["".concat(n,"px"),"".concat(a,"px")]},{duration:150,easing:"ease"}),o.current.onfinish=()=>m(!1),o.current.oncancel=()=>c(!1))}})(e))}}},s=e=>{let{children:t,title:n,className:l,startExpanded:s=!1,onClick:c,...d}=e;const{0:u,1:m}=(0,i.useState)(s),{detailsRef:p,summaryRef:g,contentRef:f,onSummaryClick:k}=o({onOpenChange:(e,t)=>{m(e),c&&c(t,e)},startExpanded:s});return i.createElement("details",{"data-testid":"jkl-accordion-item",...d,className:a()("jkl-accordion-item",l),ref:p},i.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:k,ref:g},n,i.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})),i.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:f},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return u}});var r=n(70079),l=n(41699),a=n(65174),i=n(6914),o=n(82546),s=n(39126),c=n(66169),d=n(94509);const u=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:m,rows:p,verticalAlign:g,...f}=e;return r.createElement(l.i,{fullWidth:!0,...f,ref:t},n&&r.createElement(i.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(d.S,null,u.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===p.length&&m&&r.createElement(d.S,null,r.createElement(o.p,{colSpan:u.length},m)),p.map(((e,t)=>r.createElement(d.S,{key:t},e.map(((e,t)=>r.createElement(o.p,{key:t,"data-th":u[t],verticalAlign:g},e))))))))}));u.displayName="DataTable"}}]);