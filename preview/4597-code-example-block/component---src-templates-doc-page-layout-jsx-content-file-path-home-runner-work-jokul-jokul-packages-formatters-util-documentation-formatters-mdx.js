(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7745],{42371:function(e,t,n){var r=n(80764),l=n(44247),i=Math.floor,a=r("".charAt),o=r("".replace),s=r("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,m=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,u,p){var d=n+e.length,f=r.length,v=m;return void 0!==u&&(u=l(u),v=c),o(p,v,(function(l,o){var c;switch(a(o,0)){case"$":return"$";case"&":return e;case"`":return s(t,0,n);case"'":return s(t,d);case"<":c=u[s(o,1,-1)];break;default:var m=+o;if(0===m)return l;if(m>f){var p=i(m/10);return 0===p?l:p<=f?void 0===r[p-1]?a(o,1):r[p-1]+a(o,1):l}c=r[m-1]}return void 0===c?"":c}))}},75863:function(e,t,n){var r=n(12465),l=n(956),i=n(19163)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==l(e))}},68811:function(e,t,n){"use strict";var r=n(76824);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},46059:function(e,t,n){var r=n(51568),l=n(4778),i=n(42378),a=n(68811),o=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in o||l(e,"flags")||!i(o,e)?t:r(a,e)}},38943:function(e,t,n){var r=n(9909),l=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return l(e)}},18961:function(e,t,n){"use strict";var r=n(46367),l=n(51568),i=n(80764),a=n(28466),o=n(17389),s=n(82109),c=n(75863),m=n(38943),u=n(28453),p=n(46059),d=n(42371),f=n(19163),v=n(33709),k=f("replace"),g=TypeError,D=i("".indexOf),E=i("".replace),b=i("".slice),j=Math.max,h=function(e,t,n){return n>e.length?-1:""===t?n:D(e,t,n)};r({target:"String",proto:!0},{replaceAll:function(e,t){var n,r,i,f,y,x,_,w,N,O=a(this),T=0,M=0,P="";if(!s(e)){if((n=c(e))&&(r=m(a(p(e))),!~D(r,"g")))throw g("`.replaceAll` does not allow non-global regexes");if(i=u(e,k))return l(i,e,O,t);if(v&&n)return E(m(O),e,t)}for(f=m(O),y=m(e),(x=o(t))||(t=m(t)),_=y.length,w=j(1,_),T=h(f,y,0);-1!==T;)N=x?m(t(y,T,f)):d(y,f,T,[],void 0,t),P+=b(f,M,T)+N,M=T+_,T=h(f,y,T+w);return M<f.length&&(P+=b(f,M)),P}})},31369:function(e,t,n){n(18961)},65123:function(e,t,n){"use strict";n.r(t),n.d(t,{DocPageLayout:function(){return P},Head:function(){return M},default:function(){return F}});var r=n(64717),l=n(92379),i=n(2361),a=n(20288),o=n(41587),s=n(78926),c=n(97260),m=n(99767),u=n(92022),p=n(77126);const d=["suffix"],f={style:"unit",unit:"kilometer"};function v(e,t){const n=(0,p.p)(e);if(!n)return e.toString();const r=Object.assign({},f,t),{suffix:l}=r,i=(0,m.Z)(r,d);return[(0,u.u)(n,i),l].join("")}var k=n(84929),g=n(55393),D=n(18564),E=n(24398);var b=()=>l.createElement(i.o6,null,l.createElement(i.iV,null,"Fødselsnummer"),l.createElement(i.uM,null,(0,a.X)("01065100203")),l.createElement(i.iV,null,"Kortnummer"),l.createElement(i.uM,null,(0,o.U)("5457623898234113")),l.createElement(i.iV,null,"Kontonummer"),l.createElement(i.uM,null,(0,s.F)("44441155546")),l.createElement(i.uM,null,(0,s.F)("44441155546",{separator:"."})),l.createElement(i.iV,null,"Telefonnummer"),l.createElement(i.uM,null,(0,c.P)("98651731")),l.createElement(i.uM,null,(0,c.P)("22438634")),l.createElement(i.uM,null,(0,c.P)("81549300")),l.createElement(i.uM,null,(0,c.P)("98651731",{countryCode:"47"})),l.createElement(i.uM,null,(0,c.P)("22438634",{countryCode:"47"})),l.createElement(i.uM,null,(0,c.P)("81549300",{countryCode:"47"})),l.createElement(i.iV,null,"Avstand"),l.createElement(i.uM,null,v("12000")),l.createElement(i.uM,null,v("8000",{suffix:" per år"})),l.createElement(i.uM,null,v("9,81",{unit:"meter",suffix:"/s"})),l.createElement(i.iV,null,"Valuta"),l.createElement(i.uM,null,(0,k._)("127,5")),l.createElement(i.uM,null,(0,k._)("5000",{suffix:"kr per måned"})),l.createElement(i.uM,null,(0,k._)("859",{prefix:"kr",suffix:"",minimumFractionDigits:2})),l.createElement(i.iV,null,"Generelle tall"),l.createElement(i.uM,null,(0,u.u)("123")),l.createElement(i.uM,null,(0,u.u)("12345")),l.createElement(i.uM,null,(0,u.u)("1234567")),l.createElement(i.uM,null,(0,u.u)("12345,67")),l.createElement(i.iV,null,"Dato"),l.createElement(i.uM,null,(0,g.p6)(new Date)),l.createElement(i.iV,null,"Organisasjonsnummer"),l.createElement(i.uM,null,(0,D.a)("915651232")),l.createElement(i.iV,null,"Bytes"),l.createElement(i.uM,null,(0,E.t)(8888e6)));var j=n(79072);function h(e){const t=Object.assign({p:"p",h2:"h2",a:"a",code:"code"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:i}=t;return i||x("ComponentExample",!0),n||x("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Bruk formatterere når du ønsker å vise et tall med et spesifikt format; for\neksempel et telefonnummer, et personnummer, eller et beløp.")),"\n",l.createElement(i,{title:"Eksempler på bruk",component:b,codeExample:'\n<DescriptionList>\n    <DescriptionTerm>Fødselsnummer</DescriptionTerm>\n    <DescriptionDetail>{formatFodselsnummer("01065100203")}</DescriptionDetail>\n    <DescriptionTerm>Kortnummer</DescriptionTerm>\n    <DescriptionDetail>{formatKortnummer("5457623898234113")}</DescriptionDetail>\n    <DescriptionTerm>Kontonummer</DescriptionTerm>\n    <DescriptionDetail>{formatKontonummer("44441155546")}</DescriptionDetail>\n    <DescriptionDetail>{formatKontonummer("44441155546", { separator: "." })}</DescriptionDetail>\n    <DescriptionTerm>Telefonnummer</DescriptionTerm>\n    <DescriptionDetail>{formatTelefonnummer("98651731")}</DescriptionDetail>\n    <DescriptionDetail>{formatTelefonnummer("22438634")}</DescriptionDetail>\n    <DescriptionDetail>{formatTelefonnummer("81549300")}</DescriptionDetail>\n    <DescriptionTerm>Avstand</DescriptionTerm>\n    <DescriptionDetail>{formatAvstand("12000")}</DescriptionDetail>\n    <DescriptionDetail>{formatAvstand("8000", { suffix: " per år" })}</DescriptionDetail>\n    <DescriptionDetail>{formatAvstand("9,81", { unit: "meter", suffix: "/s" })}</DescriptionDetail>\n    <DescriptionTerm>Valuta</DescriptionTerm>\n    <DescriptionDetail>{formatValuta("127,5")}</DescriptionDetail>\n    <DescriptionDetail>{formatValuta("5000")}</DescriptionDetail>\n    <DescriptionDetail>\n        {formatValuta("859", { prefix: "kr", suffix: "", minimumFractionDigits: 2 })}\n    </DescriptionDetail>\n    <DescriptionTerm>Generelle tall</DescriptionTerm>\n    <DescriptionDetail>{formatNumber("123")}</DescriptionDetail>\n    <DescriptionDetail>{formatNumber("12345")}</DescriptionDetail>\n    <DescriptionDetail>{formatNumber("1234567")}</DescriptionDetail>\n    <DescriptionDetail>{formatNumber("12345,67")}</DescriptionDetail>\n    <DescriptionTerm>Dato</DescriptionTerm>\n    <DescriptionDetail>{formatDate(new Date())}</DescriptionDetail>\n    <DescriptionTerm>Organisasjonsnummer</DescriptionTerm>\n    <DescriptionDetail>{formatOrganisasjonsnummer("915651232")}</DescriptionDetail>\n    <DescriptionTerm>Bytes</DescriptionTerm>\n    <DescriptionDetail>{formatBytes(8_888_000_000)}</DescriptionDetail>\n</DescriptionList>\n'}),"\n",l.createElement(t.p,null,"Formatterere fungerer bra alle steder der du vil vise tallinformasjon på en måte som er enklere å lese for brukeren. Det kan være i løpende tekst, tabeller, lister, eller liknende. Ved å bruke formatererene fra Jøkul sikrer du at tallinformasjon representeres likt på tvers av løsningene våre. Det skaper gjenkjennelighet for brukeren!"),"\n",l.createElement(t.h2,null,"Maskering av skjemafelter"),"\n",l.createElement(t.p,null,"Noen av formatererne kan også med fordel brukes til ",l.createElement(t.a,{href:"https://en.wikipedia.org/wiki/Input_mask"},"maskering")," av skjemafelter. Det kan gjøre det lettere for brukeren å se at de har skrevet inn lange verdier (som kort- og kontonummer) riktig."),"\n",l.createElement(t.p,null,"For å gjøre implementeringen av dette enklere tilbyr ",l.createElement(t.code,null,"jkl-formatters-util")," hjelpefunksjoner for ",l.createElement(t.code,null,"react-hook-form")," (kun for v7 eller nyere) som setter maske på feltet for deg:"),"\n",l.createElement(i,{title:"Bruk med formaterer",component:j.ZP,codeExample:j.Uo}),"\n",l.createElement(t.p,null,"Hjelpefunksjonene brukes på samme måte som ",l.createElement(t.code,null,"register")," fra ",l.createElement(t.code,null,"react-hook-form"),", men du må sende inn ",l.createElement(t.code,null,"form"),"-objektet fra ",l.createElement(t.code,null,"useForm")," som første argument. Det legges ikke til validering, så om du ønsker dette må du legge det inn selv. Bruk gjerne ",l.createElement(t.a,{href:"/preview/4597-code-example-block/komponenter/validators"},"validatorene i Jøkul"),"!"))}var y=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(h,e)):h(e)};function x(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var _=n(75482),w=n(96036),N=n(59001),O=n(65458),T=n(79379);const M=e=>{let{pageContext:t}=e;return l.createElement(w.p,{title:t.title})},P=e=>{let{location:t,data:n,pageContext:r,children:i}=e;const{frontmatter:a}=n.page,{types:o}=r;return l.createElement(T.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(O.M1,Object.assign({},a,{versions:r.versions})),t.pathname.includes("komponenter")&&l.createElement(N.c,{variant:"komponent",component:a.title}),l.createElement(O.w5,a),i,o&&l.createElement(_.l,{types:o}))};function F(e){return l.createElement(P,e,l.createElement(y,e))}},24398:function(e,t,n){"use strict";n.d(t,{t:function(){return i}});var r=n(74756),l=n(92022);function i(e,t){return e>=1e5?""+(0,l.u)(Number(e/1e3/1e3),Object.assign({maximumFractionDigits:1},t))+r.vk+"MB":""+(0,l.u)(e/1e3,Object.assign({maximumFractionDigits:2},t))+r.vk+"KB"}},84929:function(e,t,n){"use strict";n.d(t,{_:function(){return c}});var r=n(99767),l=n(74756),i=n(92022),a=n(77126);const o=["prefix"],s={locale:"no-NB",minimumFractionDigits:0,maximumFractionDigits:2,suffix:"kr"};function c(e,t){const n=(0,a.p)(e);if(isNaN(n))return e.toString();const c=Number.isInteger(n)?{}:{minimumFractionDigits:2,maximumFractionDigits:2},m=void 0!==(null==t?void 0:t.suffix)?t.suffix:s.suffix,u=Object.assign({},s,c,t),{prefix:p}=u,d=(0,r.Z)(u,o),f=null!=p&&p.length?""+p+l.vk:"",v=null!=m&&m.length?""+l.vk+m:"";return""+f+(0,i.u)(n,d)+v}},75482:function(e,t,n){"use strict";n.d(t,{l:function(){return f}});var r=n(96845),l=n(41162),i=n(74797),a=n(92379),o=n(25329);const s=e=>a.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,i=n>0,a=r-n>l;t.classList.toggle("left-shadow",i),t.classList.toggle("right-shadow",a)},p=e=>{const t=e.target,n=t.parentElement;u(t,n)},d=e=>{let{props:t}=e;const n=(0,a.useRef)(null);return(0,a.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),a.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},a.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},a.createElement(i.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},f=e=>{let{types:t}=e;return a.createElement("section",{className:"mb-104 jkl-portal-paragraph"},a.createElement("h2",{className:"heading-1 mt-104"},"React API"),a.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),a.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],i=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,l,i,a;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(i=l.param)||void 0===i?void 0:i.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(a=e.tags)&&void 0!==a&&a.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return a.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&a.createElement(o.dn,{className:"jkl-portal-code-block"},s),r.length>0&&a.createElement(d,{props:r}),i.length>0&&a.createElement(a.Fragment,null,a.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),a.createElement(d,{props:i})))}))))}},59001:function(e,t,n){"use strict";n.d(t,{c:function(){return o}});var r=n(48467),l=n(58990),i=n(92379),a=n(25329);const o=e=>{let{variant:t,component:n}=e;return i.createElement("section",{className:"suggestion-block"},i.createElement("div",{className:"suggestion-block__content"},i.createElement(l.U,null),i.createElement(a.nv,null,s[t].text)),i.createElement(r.r,{href:s[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},96845:function(e,t,n){"use strict";n.d(t,{U:function(){return s}});var r=n(99767),l=n(651),i=n(80324),a=n.n(i);const o=["className","density","id"],s=e=>{let{className:t,density:n,id:i}=e,s=(0,r.Z)(e,o);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:i},s))}},41162:function(e,t,n){"use strict";n.d(t,{Q:function(){return u}});var r=n(99767),l=n(651),i=n(42054),a=n(95020),o=n(80324),s=n.n(o),c=n(92379);const m=["children","title","className","startExpanded","onClick","id"],u=e=>{let{children:t,title:n,className:o,startExpanded:u=!1,onClick:p,id:d}=e,f=(0,r.Z)(e,m);const[v,k]=(0,c.useState)(u),[g]=(0,c.useState)((()=>u)),{detailsRef:D,summaryRef:E,contentRef:b,onSummaryClick:j}=(0,a.E)({onOpenChange:(e,t)=>{k(e),p&&p(t,e)},isExpanded:g});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},f,{className:s()("jkl-accordion-item",o),ref:D,id:d,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:E,children:[n,(0,l.jsx)(i.K,{className:"jkl-accordion-item__arrow",pointingDown:!v,bold:v})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:b,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},904:function(e,t,n){"use strict";n.d(t,{H:function(){return r}});const r=e=>{if(!e)return{};const t=getComputedStyle(e);return{theme:parseInt(t.getPropertyValue("--jkl-background-color").replace("#",""),16)<8388607.5?"dark":"light",density:'"compact"'===t.getPropertyValue("--jkl-density")?"compact":"comfortable"}}},58990:function(e,t,n){"use strict";n.d(t,{U:function(){return m}});var r=n(92379),l=n(55650),i=Object.defineProperty,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>r.createElement(l.J,((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(a)for(var n of a(t))s.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},74797:function(e,t,n){"use strict";n.d(t,{w:function(){return D}});var r=n(92379),l=n(94207),i=n(49309),a=n(36774),o=n(64081),s=n(64483),c=n(42104),m=n(98746),u=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const D=(0,r.forwardRef)(((e,t)=>{var n,u=e,{caption:D,columns:E,emptyTableText:b,rows:j,verticalAlign:h}=u,y=((e,t)=>{var n={};for(var r in e)v.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(u,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(l.i,(n=((e,t)=>{for(var n in t||(t={}))v.call(t,n)&&g(e,n,t[n]);if(f)for(var n of f(t))k.call(t,n)&&g(e,n,t[n]);return e})({fullWidth:!0},y),p(n,d({ref:t}))),D&&r.createElement(a.R,{srOnly:!0},D),r.createElement(s.s,null,r.createElement(m.S,null,E.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(i.R,null,0===j.length&&b&&r.createElement(m.S,null,r.createElement(o.p,{colSpan:E.length},b)),j.map(((e,t)=>r.createElement(m.S,{key:t},e.map(((e,t)=>r.createElement(o.p,{key:t,"data-th":E[t],verticalAlign:h},e))))))))}));D.displayName="DataTable"}}]);