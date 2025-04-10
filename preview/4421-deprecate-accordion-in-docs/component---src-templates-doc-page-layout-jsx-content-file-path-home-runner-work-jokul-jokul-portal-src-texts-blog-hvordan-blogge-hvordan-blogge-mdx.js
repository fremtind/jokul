"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1705],{25301:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return p},Head:function(){return u},default:function(){return g}});var l=n(33156),r=n(7378);function a(e){const t=Object.assign({p:"p",a:"a",h2:"h2",ol:"ol",li:"li",code:"code",em:"em",img:"img",pre:"pre",h3:"h3",h4:"h4"},(0,l.RP)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"Portalen i Jøkul er ikke bare et komponentbibliotek eller statisk dokumentasjon, det er en portal for alt vi syns hører hjemme her. Og nå inklurerer det en blog.\nHva innholdet skal være her er opp til alle som vil bidra. Denne posten skal prøve å ta for seg hvordan du kan bidra med en post, enten du er utvikler, designer, prosjektleder eller noe annet med noe å dele."),"\n",r.createElement(t.p,null,"Kort teknisk, Portalen er basert på ",r.createElement(t.a,{href:""},"gatsby"),", en statisk side generator, som baserer seg på ",r.createElement(t.a,{href:""},"markdown"),". Blogposter skiller seg sånn sett veldig lite ut ifra resten av dokumentasjonen i portalen,\nså er du komfortabel med å lage dokumentasjon der, så er du veldig nære å kunne lage din blogpost."),"\n",r.createElement(t.h2,null,"Min første blogpost"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"Naviger deg inn til ",r.createElement(t.code,null,"/portal/src/texts/blog/")," i din IDE, eller gå inn på ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/tree/main/portal/src/texts/blog"},"github her")),"\n",r.createElement(t.li,null,"I din IDE, lag en ny fil, gi den et fornuftig navn med filendelsen ",r.createElement(t.code,null,".mdx"),".",r.createElement("br"),"På github kan du trykke på ",r.createElement(t.code,null,"Create new file"),". Det er veldig viktig at fila slutter på ",r.createElement(t.em,null,".mdx"),", gatsby plukker bare opp filer med denne endelsen.\n",r.createElement(t.img,{src:"/assets/blog/hvordanBlogge/createFile.jpg",alt:""})),"\n",r.createElement(t.li,null,"I fila må du legge inn litt metadata om posten din.","\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-mdx"},'---\ntitle: Min første bloggpost\nauthor: Forfatter Forfattersen\ndescription: En setning eller to om innholdet i bloggposten, denne vises på forsiden når din post er den nyeste\npublishDate: "2020.06.05"\n---\n')),"\n"),"\n",r.createElement(t.li,null,"Resten av fila fyller du med ditt innhold i markdown-format.",r.createElement("br"),"Du kan lese mer om hvordan du gjør det ",r.createElement(t.a,{href:"/preview/4421-deprecate-accordion-in-docs/guider/portalen"},"her i portalen")),"\n",r.createElement(t.li,null,"Så lager du pull request, resten skjer av seg selv!"),"\n"),"\n",r.createElement(t.h3,null,"Hvordan legge til bilde"),"\n",r.createElement(t.p,null,"Bare tekst kan jo bli litt kjederlig. Du trenger kanskje et bilde for å forklare noe, eller bare et meme for å vise at du følger med i tiden."),"\n",r.createElement(t.h4,null,"Bruke bilde fra internet"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"Legg bildet direkte inn i ",r.createElement(t.code,null,".mdx")," fila med ",r.createElement(t.code,null,"![](https://adressen-til-bildet.com/bildet.png)")),"\n"),"\n",r.createElement(t.h4,null,"Laste opp eget bilde"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"Naviger deg til ",r.createElement(t.code,null,"/portal/static/assets/blog/")," i din IDE,",r.createElement("br"),"eller gå inn på ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/tree/main/portal/static/assets/blog"},"github her")),"\n",r.createElement(t.li,null,"Legg inn fila di, eller trykk på last opp fil i Github.",r.createElement("br"),"Jobber du lokalt må du restarte gatsby før du ser bildet, siden gatsby bare leser statiske assets ved oppstart."),"\n",r.createElement(t.li,null,"For å få bildet inn i posten din gjør du det med standard markdown,",r.createElement("br"),r.createElement(t.code,null,"![](/assets/blog/ditt-bilde.jpg)")),"\n"),"\n",r.createElement(t.h4,null,"Du kan litt React"),"\n",r.createElement(t.p,null,"Jeg lister ikke opp noe steg her, men avslører heller direkte den ikke så hemmelige hemmeligheten, at du kan putte React kode rett inn i mdx fila. Så vil du ha inn et bilde, gjør ",r.createElement(t.code,null,'import someAsset from "./someAsset.svg"'),",\nog ",r.createElement(t.code,null,'<img src={someAsset} alt="Husk alt tekst, det er vanlig høflighet" />'),"."),"\n",r.createElement(t.h2,null,"Oppsummering"),"\n",r.createElement(t.p,null,"Så, det er ikke så vanskelig, om du er usikker så kan du se på de eksisterende postene og få inspirasjon av de,\nfeks kan du ta en titt på ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/tree/main/portal/src/texts/blog/hvordanBlogge/hvordanBlogge.mdx"},"denne posten"),"."))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.RP)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},o=n(68888),s=n(47672),c=n(52948),d=n(38776),m=n(20919);const u=e=>{let{pageContext:t}=e;return r.createElement(s.G,{title:t.title})},p=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:i}=n.page,{types:s}=l;return r.createElement(m.D,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(d.Ao,Object.assign({},i,{versions:l.versions})),r.createElement(c.A,{variant:"komponent",component:i.title}),r.createElement(d.f6,i),a,s&&r.createElement(o.N,{types:s}))};function g(e){return r.createElement(p,e,r.createElement(i,e))}},68888:function(e,t,n){n.d(t,{N:function(){return g}});var l=n(88635),r=n(24408),a=n(78022),i=n(7378),o=n(45371);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,i=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},u=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},g=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(d):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,l,r,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(r.A,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.NG,{className:"jkl-portal-code-block"},s),l.length>0&&i.createElement(p,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},52948:function(e,t,n){n.d(t,{A:function(){return o}});var l=n(77800),r=n(38316),a=n(7378),i=n(45371);const o=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(r.u,null),a.createElement(i.fz,null,s[t].text)),a.createElement(l.N,{href:s[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,t,n){n.d(t,{D:function(){return s}});var l=n(3698),r=n.n(l),a=n(94270),i=n(7378),o=n(79197);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,i.useContext)(o.M),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.P.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},88635:function(e,t,n){n.d(t,{n:function(){return s}});var l=n(45271),r=n(86106),a=n(3698),i=n.n(a);const o=["className","density","id"],s=e=>{let{className:t,density:n,id:a}=e,s=(0,l.A)(e,o);return(0,r.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:i()("jkl-accordion",t),"data-density":n,id:a},s))}},24408:function(e,t,n){n.d(t,{A:function(){return m}});var l=n(45271),r=n(86106),a=n(21197),i=n(82455),o=n(3698),s=n.n(o),c=n(7378);const d=["children","title","className","startExpanded","onClick","id"],m=e=>{let{children:t,title:n,className:o,startExpanded:m=!1,onClick:u,id:p}=e,g=(0,l.A)(e,d);const[f,k]=(0,c.useState)(m),[b]=(0,c.useState)((()=>m)),{detailsRef:E,summaryRef:v,contentRef:h,onSummaryClick:j}=(0,i.$)({onOpenChange:(e,t)=>{k(e),u&&u(t,e)},isExpanded:b});return(0,r.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},g,{className:s()("jkl-accordion-item",o),ref:E,id:p,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:v,children:[n,(0,r.jsx)(a.l,{className:"jkl-accordion-item__arrow",pointingDown:!f,bold:f})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},38316:function(e,t,n){n.d(t,{u:function(){return d}});var l=n(7378),r=n(19767),a=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const d=e=>l.createElement(r.I,((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e})({},e),"");d.displayName="QuestionIcon"},78022:function(e,t,n){n.d(t,{b:function(){return E}});var l=n(7378),r=n(10494),a=n(75374),i=n(82462),o=n(60630),s=n(94624),c=n(65759),d=n(21664),m=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const E=(0,l.forwardRef)(((e,t)=>{var n,m=e,{caption:E,columns:v,emptyTableText:h,rows:j,verticalAlign:y}=m,N=((e,t)=>{var n={};for(var l in e)f.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&g)for(var l of g(e))t.indexOf(l)<0&&k.call(e,l)&&(n[l]=e[l]);return n})(m,["caption","columns","emptyTableText","rows","verticalAlign"]);return l.createElement(r.X,(n=((e,t)=>{for(var n in t||(t={}))f.call(t,n)&&b(e,n,t[n]);if(g)for(var n of g(t))k.call(t,n)&&b(e,n,t[n]);return e})({fullWidth:!0},N),u(n,p({ref:t}))),E&&l.createElement(i.r,{srOnly:!0},E),l.createElement(s.n,null,l.createElement(d.H,null,v.map(((e,t)=>l.createElement(c.A,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.B,null,0===j.length&&h&&l.createElement(d.H,null,l.createElement(o.n,{colSpan:v.length},h)),j.map(((e,t)=>l.createElement(d.H,{key:t},e.map(((e,t)=>l.createElement(o.n,{key:t,"data-th":v[t],verticalAlign:y},e))))))))}));E.displayName="DataTable"}}]);