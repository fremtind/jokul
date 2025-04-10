"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4114],{29315:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return b},Head:function(){return E},default:function(){return h}});var l=t(33156),r=t(7378),a=t(94332),i=t(49263);const o={};var s=()=>r.createElement("div",null,r.createElement("p",{className:"jkl-heading-4"},"Vedlegg til saken"),r.createElement("ul",{style:{listStyle:"none",margin:0,padding:0}},[{name:"icon.png",type:"image/png",size:12128,publicPath:"/assets/icon.png"}].map((e=>r.createElement("li",{key:e.name},r.createElement(i.Z,{fileName:e.name,fileType:e.type,fileSize:e.size,path:e.publicPath}))))));const c=()=>'\ntype File = {\n    name: string;\n    type: string;\n    size: number;\n    publicPath: string;\n};\n\nconst files: File[] = [\n    {\n        name: "icon.png",\n        type: "image/png",\n        size: 12_128,\n        publicPath: "/assets/icon.png",\n    },\n];\n\nreturn (\n    <p className="jkl-heading-4">Vedlegg til saken</p>\n    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>\n        {files.map((file) => (\n            <li key={file.name}>\n                <File fileName={file.name} fileType={file.type} fileSize={file.size} path={file.publicPath} />\n            </li>\n        ))}\n    </ul>\n);\n';function m(e){const n=Object.assign({p:"p",ol:"ol",li:"li",code:"code",h2:"h2",ul:"ul",a:"a",em:"em"},(0,l.RP)(),e.components),{Ingress:t,ComponentExample:i}=n;return i||d("ComponentExample",!0),t||d("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(t,null,r.createElement(n.p,null,"Filinput lar brukeren dele filer med oss, for eksempel dokumentasjon i en\nsak.")),"\n",r.createElement(i,{component:a.Ay,codeExample:a.K0,knobs:a.IG}),"\n",r.createElement(n.p,null,"Opplasting av filer skjer i to trinn:"),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"Brukeren velger filer, enten med ved å dra de inn i slippfeltet, eller med filutforskeren som er innebygget i nettlesseren."),"\n",r.createElement(n.li,null,"En handling fra brukeren starter selve opplastingen av filer."),"\n"),"\n",r.createElement(n.p,null,"Komponenten tar seg av punkt 1. Å starte selve opplastingen er opp til deg, men det finnes en ",r.createElement(n.code,null,"upload"),"-funksjon du kan importere for å få hjelp med å sende filene til backend og beregne fremdriften."),"\n",r.createElement(n.h2,null,"Hjelp brukeren finne riktig fil"),"\n",r.createElement(n.p,null,"Ofte ønsker vi at brukeren skal kunne dele bilder og PDF."),"\n",r.createElement(n.p,null,"Komponenten bør konfigureres slik at kun filer av ønsket type kan markeres i filvelgeren."),"\n",r.createElement("figure",null,r.createElement("picture",{className:"jkl-portal-image"},r.createElement("source",{media:"(prefers-color-scheme: dark)",srcset:"/assets/documentation/file-uploader/macos-filvelger-morkt.png"}),r.createElement("img",{className:"jkl-portal-image__img",alt:"",loading:"lazy",decoding:"async",src:"/assets/documentation/file-uploader/macos-filvelger-lyst.png"})),r.createElement("figcaption",null,r.createElement(n.p,null,"Filvelgeren på macOS. I dette tilfellet kan ikke det komprimerte arkivet\nvelges."))),"\n",r.createElement(n.p,null,"Merk at dette ikke vil hindre en bruker i å dra en vilkårlig fil inn i slippfeltet i komponenten. Hvis dette skjer vil komponenten automatisk merke filen med valideringsfeil."),"\n",r.createElement(n.h2,null,"Håndtering av delte filer"),"\n",r.createElement(n.p,null,"Hva skjer når brukeren starter opplastingen av filer? Detaljene er opp til hvert enkelt team, men grovt sett trengs:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Et endepunkt som leser ",r.createElement(n.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data#a_special_case_sending_files"},r.createElement(n.em,null,"multi-part form data")),", og som klarer dekode filinformasjonen i skjemaet."),"\n",r.createElement(n.li,null,"Et sted å lagre filene på disk. Dette trenger ikke være samme maskin som endepunktet."),"\n",r.createElement(n.li,null,"Ett eller flere endepunkt som kan spørres for å se filer brukeren har delt med oss tidligere, for eksempel tilknyttet en sak."),"\n"),"\n",r.createElement(n.p,null,"Det finnes en ",r.createElement(n.code,null,"upload"),"-funksjon du kan importere fra denne pakka for å få hjelp med å sende filene til backend og beregne fremdriften."),"\n",r.createElement(n.p,null,"Det finnes også ",r.createElement(n.a,{href:"https://github.com/fremtind/jkl-file-input-demo"},"en eksempelapp som inkluderer en backend")," som du kan se på, men sørg for å lese disclaimeren i README-filen først."),"\n",r.createElement(n.h2,null,"Visning av filer brukeren har lastet opp tidligere"),"\n",r.createElement(n.p,null,"Bruk gjerne samme komponent til forhåndsvisning av filer på siden for øvrig, som i filopplasteren."),"\n",r.createElement(i,{title:"Gjenbruk av forhåndsvisning",component:s,codeExample:c,knobs:o}),"\n",r.createElement(n.p,null,"Gitt en URL vil komponenten rendres som en lenke, slik at brukeren kan klikke seg videre til å se selve filen i en ny fane."))}var p=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.RP)(),e.components);return n?r.createElement(n,e,r.createElement(m,e)):m(e)};function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=t(68888),f=t(47672),k=t(52948),g=t(38776),v=t(20919);const E=e=>{let{pageContext:n}=e;return r.createElement(f.G,{title:n.title})},b=e=>{let{location:n,data:t,pageContext:l,children:a}=e;const{frontmatter:i}=t.page,{types:o}=l;return r.createElement(v.D,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(g.Ao,Object.assign({},i,{versions:l.versions})),n.pathname.includes("komponenter")&&r.createElement(k.A,{variant:"komponent",component:i.title}),r.createElement(g.f6,i),a,o&&r.createElement(u.N,{types:o}))};function h(e){return r.createElement(b,e,r.createElement(p,e))}},68888:function(e,n,t){t.d(n,{N:function(){return f}});var l=t(88635),r=t(24408),a=t(78022),i=t(7378),o=t(45371);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},m=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},p=(e,n)=>{const{scrollLeft:t,scrollWidth:l}=e,{clientWidth:r}=n,a=t>0,i=l-t>r;n.classList.toggle("left-shadow",a),n.classList.toggle("right-shadow",i)},d=e=>{const n=e.target,t=n.parentElement;p(n,t)},u=e=>{let{props:n}=e;const t=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&p(n,e)}}))})),l=t.current.parentElement.parentElement;n.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=n,l.map((e=>{var n,t;return[e.name?s(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?s(e.type.name):""]})))})));var l},f=e=>{let{types:n}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const l=t.props?Object.values(t.props).filter(m):[],a=t.props?Object.values(t.props).filter(c):[],s=(e=>{var n,t,l,r,a,i;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return i.createElement(r.A,{title:n,key:n,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.NG,{className:"jkl-portal-code-block"},s),l.length>0&&i.createElement(u,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(u,{props:a})))}))))}},52948:function(e,n,t){t.d(n,{A:function(){return o}});var l=t(77800),r=t(38316),a=t(7378),i=t(45371);const o=e=>{let{variant:n,component:t}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(r.u,null),a.createElement(i.fz,null,s[n].text)),a.createElement(l.N,{href:s[n].link+"+<"+t+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,n,t){t.d(n,{D:function(){return s}});var l=t(3698),r=t.n(l),a=t(94270),i=t(7378),o=t(79197);const s=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:l}=(0,i.useContext)(o.M),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.P.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",n),id:"innhold"},t)}},88635:function(e,n,t){t.d(n,{n:function(){return s}});var l=t(45271),r=t(86106),a=t(3698),i=t.n(a);const o=["className","density","id"],s=e=>{let{className:n,density:t,id:a}=e,s=(0,l.A)(e,o);return(0,r.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:i()("jkl-accordion",n),"data-density":t,id:a},s))}},24408:function(e,n,t){t.d(n,{A:function(){return p}});var l=t(45271),r=t(86106),a=t(21197),i=t(82455),o=t(3698),s=t.n(o),c=t(7378);const m=["children","title","className","startExpanded","onClick","id"],p=e=>{let{children:n,title:t,className:o,startExpanded:p=!1,onClick:d,id:u}=e,f=(0,l.A)(e,m);const[k,g]=(0,c.useState)(p),[v]=(0,c.useState)((()=>p)),{detailsRef:E,summaryRef:b,contentRef:h,onSummaryClick:y}=(0,i.$)({onOpenChange:(e,n)=>{g(e),d&&d(n,e)},isExpanded:v});return(0,r.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},f,{className:s()("jkl-accordion-item",o),ref:E,id:u,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:y,ref:b,children:[t,(0,r.jsx)(a.l,{className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]}))}},38316:function(e,n,t){t.d(n,{u:function(){return m}});var l=t(7378),r=t(19767),a=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const m=e=>l.createElement(r.I,((e,n)=>{for(var t in n||(n={}))o.call(n,t)&&c(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&c(e,t,n[t]);return e})({},e),"");m.displayName="QuestionIcon"},78022:function(e,n,t){t.d(n,{b:function(){return E}});var l=t(7378),r=t(10494),a=t(75374),i=t(82462),o=t(60630),s=t(94624),c=t(65759),m=t(21664),p=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,n,t)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const E=(0,l.forwardRef)(((e,n)=>{var t,p=e,{caption:E,columns:b,emptyTableText:h,rows:y,verticalAlign:j}=p,_=((e,n)=>{var t={};for(var l in e)k.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&f)for(var l of f(e))n.indexOf(l)<0&&g.call(e,l)&&(t[l]=e[l]);return t})(p,["caption","columns","emptyTableText","rows","verticalAlign"]);return l.createElement(r.X,(t=((e,n)=>{for(var t in n||(n={}))k.call(n,t)&&v(e,t,n[t]);if(f)for(var t of f(n))g.call(n,t)&&v(e,t,n[t]);return e})({fullWidth:!0},_),d(t,u({ref:n}))),E&&l.createElement(i.r,{srOnly:!0},E),l.createElement(s.n,null,l.createElement(m.H,null,b.map(((e,n)=>l.createElement(c.A,{key:n,density:"compact",bold:!0},e))))),l.createElement(a.B,null,0===y.length&&h&&l.createElement(m.H,null,l.createElement(o.n,{colSpan:b.length},h)),y.map(((e,n)=>l.createElement(m.H,{key:n},e.map(((e,n)=>l.createElement(o.n,{key:n,"data-th":b[n],verticalAlign:j},e))))))))}));E.displayName="DataTable"},60948:function(e,n,t){var l=t(75834),r=t(68347),a=Math.floor,i=l("".charAt),o=l("".replace),s=l("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,m=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,n,t,l,p,d){var u=t+e.length,f=l.length,k=m;return void 0!==p&&(p=r(p),k=c),o(d,k,(function(r,o){var c;switch(i(o,0)){case"$":return"$";case"&":return e;case"`":return s(n,0,t);case"'":return s(n,u);case"<":c=p[s(o,1,-1)];break;default:var m=+o;if(0===m)return r;if(m>f){var d=a(m/10);return 0===d?r:d<=f?void 0===l[d-1]?i(o,1):l[d-1]+i(o,1):r}c=l[m-1]}return void 0===c?"":c}))}},66370:function(e,n,t){var l=t(840),r=t(95390),a=t(59073)("match");e.exports=function(e){var n;return l(e)&&(void 0!==(n=e[a])?!!n:"RegExp"===r(e))}},70461:function(e,n,t){var l=t(92517);e.exports=function(){var e=l(this),n="";return e.hasIndices&&(n+="d"),e.global&&(n+="g"),e.ignoreCase&&(n+="i"),e.multiline&&(n+="m"),e.dotAll&&(n+="s"),e.unicode&&(n+="u"),e.unicodeSets&&(n+="v"),e.sticky&&(n+="y"),n}},46952:function(e,n,t){var l=t(17855),r=t(14171),a=t(87583),i=t(70461),o=RegExp.prototype;e.exports=function(e){var n=e.flags;return void 0!==n||"flags"in o||r(e,"flags")||!a(o,e)?n:l(i,e)}},70341:function(e,n,t){var l=t(42673),r=String;e.exports=function(e){if("Symbol"===l(e))throw new TypeError("Cannot convert a Symbol value to a string");return r(e)}},20760:function(e,n,t){var l=t(18036),r=t(17855),a=t(75834),i=t(19248),o=t(79611),s=t(17247),c=t(66370),m=t(70341),p=t(50692),d=t(46952),u=t(60948),f=t(59073),k=t(29589),g=f("replace"),v=TypeError,E=a("".indexOf),b=a("".replace),h=a("".slice),y=Math.max;l({target:"String",proto:!0},{replaceAll:function(e,n){var t,l,a,f,j,_,N,w,x,O,P=i(this),A=0,S="";if(!s(e)){if((t=c(e))&&(l=m(i(d(e))),!~E(l,"g")))throw new v("`.replaceAll` does not allow non-global regexes");if(a=p(e,g))return r(a,e,P,n);if(k&&t)return b(m(P),e,n)}for(f=m(P),j=m(e),(_=o(n))||(n=m(n)),N=j.length,w=y(1,N),x=E(f,j);-1!==x;)O=_?m(n(j,x,f)):u(j,f,x,[],void 0,n),S+=h(f,A,x)+O,A=x+N,x=x+w>f.length?-1:E(f,j,x+w);return A<f.length&&(S+=h(f,A)),S}})},84355:function(e,n,t){t(20760)}}]);