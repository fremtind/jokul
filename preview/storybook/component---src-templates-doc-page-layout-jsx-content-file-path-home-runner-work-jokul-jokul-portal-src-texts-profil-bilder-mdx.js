"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3654],{88106:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return Ae},Head:function(){return ge},default:function(){return ke}});var r=n(33156),l=n(7378),a=n(45271),o=n(28914),i=n(70251),s=n(81217),c=n(56636);const d=new WeakMap;let m;function u({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=d.get(e))||void 0===r||r.forEach((r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){const{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})}))}function p(e){e.forEach(u)}function f(e,t){m||"undefined"!=typeof ResizeObserver&&(m=new ResizeObserver(p));const n=function(e,t){var n;return"string"==typeof e?t?(null!==(n=t[e])&&void 0!==n||(t[e]=document.querySelectorAll(e)),e=t[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}(e);return n.forEach((e=>{let n=d.get(e);n||(n=new Set,d.set(e,n)),n.add(t),null==m||m.observe(e)})),()=>{n.forEach((e=>{const n=d.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==m||m.unobserve(e)}))}}const g=new Set;let A;function k(e){return g.add(e),A||(A=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};g.forEach((e=>e(t)))},window.addEventListener("resize",A)),()=>{g.delete(e),!g.size&&A&&(A=void 0)}}const v=e=>"function"==typeof e;const b=(e,t,n)=>t-e==0?1:(n-e)/(t-e);const h={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function E(e,t,n,r){const l=n[t],{length:a,position:o}=h[t],i=l.current,s=n.time;l.current=e[`scroll${o}`],l.scrollLength=e[`scroll${a}`]-e[`client${a}`],l.offset.length=0,l.offset[0]=0,l.offset[1]=l.scrollLength,l.progress=b(0,l.scrollLength,l.current);const c=r-s;var d,m;l.velocity=c>50?0:(d=l.current-i,(m=c)?d*(1e3/m):0)}const y=e=>e,j=(e,t,n)=>-n*e+n*t+e;function w(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const l=b(0,t,r);e.push(j(n,1,l))}}function x(e){const t=[0];return w(t,e-1),t}const B=e=>"number"==typeof e;function N(e,t){return(e=>Array.isArray(e)&&!B(e[0]))(e)?e[((e,t,n)=>{const r=t-e;return((n-e)%r+r)%r+e})(0,e.length,t)]:e}function O(e,t=x(e.length),n=y){const r=e.length,l=r-t.length;return l>0&&w(t,l),l=>{let a=0;for(;a<r-2&&!(l<t[a+1]);a++);let o=(i=0,s=1,c=b(t[a],t[a+1],l),Math.min(Math.max(c,i),s));var i,s,c;return o=N(n,a)(o),j(e[a],e[a+1],o)}}const _={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},S=e=>"string"==typeof e,P={start:0,center:.5,end:1};function D(e,t,n=0){let r=0;if(void 0!==P[e]&&(e=P[e]),S(e)){const t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return B(e)&&(r=t*e),n+r}const F=[0,0];function Q(e,t,n,r){let l=Array.isArray(e)?e:F,a=0,o=0;return B(e)?l=[e,e]:S(e)&&(l=(e=e.trim()).includes(" ")?e.split(" "):[e,P[e]?e:"0"]),a=D(l[0],n,r),o=D(l[1],t),a-o}const R={x:0,y:0};function L(e,t,n){let{offset:r=_.All}=n;const{target:l=e,axis:a="y"}=n,o="y"===a?"height":"width",i=l!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r instanceof SVGGraphicsElement&&"getBBox"in r){const{top:e,left:t}=r.getBBox();for(n.x+=t,n.y+=e;r&&"svg"!==r.tagName;)r=r.parentNode}return n}(l,e):R,s=l===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:l.clientWidth,height:l.clientHeight},c={width:e.clientWidth,height:e.clientHeight};t[a].offset.length=0;let d=!t[a].interpolate;const m=r.length;for(let u=0;u<m;u++){const e=Q(r[u],c[o],s[o],i[a]);d||e===t[a].interpolatorOffsets[u]||(d=!0),t[a].offset[u]=e}d&&(t[a].interpolate=O(x(m),t[a].offset),t[a].interpolatorOffsets=[...t[a].offset]),t[a].progress=t[a].interpolate(t[a].current)}function M(e,t,n,r={}){const l=r.axis||"y";return{measure:()=>function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!=e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}(e,r.target,n),update:t=>{!function(e,t,n){E(e,"x",t,n),E(e,"y",t,n),t.time=n}(e,n,t),(r.offset||r.target)&&L(e,n,r)},notify:v(t)?()=>t(n):H(t,n[l])}}function H(e,t){return e.pause(),e.forEachNative(((e,{easing:t})=>{var n,r;if(e.updateDuration)t||(e.easing=y),e.updateDuration(1);else{const l={duration:1e3};t||(l.easing="linear"),null===(r=null===(n=e.effect)||void 0===n?void 0:n.updateTiming)||void 0===r||r.call(n,l)}})),()=>{e.currentTime=t.progress}}const Y=new WeakMap,I=new WeakMap,W=new WeakMap,C=e=>e===document.documentElement?window:e;function V(e,t={}){var{container:n=document.documentElement}=t,r=(0,c.Tt)(t,["container"]);let l=W.get(n);l||(l=new Set,W.set(n,l));const a=M(n,e,{time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}},r);if(l.add(a),!Y.has(n)){const e=()=>{const e=performance.now();for(const t of l)t.measure();for(const t of l)t.update(e);for(const t of l)t.notify()};Y.set(n,e);const t=C(n);window.addEventListener("resize",e,{passive:!0}),n!==document.documentElement&&I.set(n,(i=e,v(o=n)?k(o):f(o,i))),t.addEventListener("scroll",e,{passive:!0})}var o,i;const s=Y.get(n),d=requestAnimationFrame(s);return()=>{var t;"function"!=typeof e&&e.stop(),cancelAnimationFrame(d);const r=W.get(n);if(!r)return;if(r.delete(a),r.size)return;const l=Y.get(n);Y.delete(n),l&&(C(n).removeEventListener("scroll",l),null===(t=I.get(n))||void 0===t||t(),window.removeEventListener("resize",l))}}var z=n(73843),T=n(84059),G=n(77882);const X=()=>({scrollX:(0,z.O)(0),scrollY:(0,z.O)(0),scrollXProgress:(0,z.O)(0),scrollYProgress:(0,z.O)(0)});var q=n(21080);var K=n(8144);var U=n(15568);function $(e,t){const n=function(e){const t=(0,T.M)((()=>(0,z.O)(e))),{isStatic:n}=(0,l.useContext)(K.Q);if(n){const[,n]=(0,l.useState)(e);(0,l.useEffect)((()=>t.on("change",n)),[])}return t}(t()),r=()=>n.set(t());return r(),function(e,t,n){(0,G.E)((()=>{const r=e.map((e=>e.on("change",t)));return()=>{r.forEach((e=>e())),n()}}))}(e,(()=>U.OH.update(r,!1,!0)),(()=>U.eO.update(r))),n}function J(e,t,n,r){const l="function"==typeof t?t:function(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],l=e[1+n],a=e[2+n],o=e[3+n],i=(0,q.G)(l,a,{mixer:(s=a[0],(e=>"object"==typeof e&&e.mix)(s)?s.mix:void 0),...o});var s;return t?i(r):i}(t,n,r);return Array.isArray(e)?Z(e,l):Z([e],(([e])=>l(e)))}function Z(e,t){const n=(0,T.M)((()=>[]));return $(e,(()=>{n.length=0;const r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)}))}var ee=n(94270),te=n(79197);var ne=e=>{let{media:t,rightAlign:n,caption:r,children:a}=e;const{prefersReducedMotion:o}=(0,l.useContext)(te.M),{0:i,1:c}=(0,l.useState)(0),{0:d,1:m}=(0,l.useState)(!1),u=(0,l.useRef)(null),p=(0,l.useRef)(null),{scrollY:f}=function({container:e,target:t,layoutEffect:n=!0,...r}={}){const a=(0,T.M)(X);return(n?G.E:l.useEffect)((()=>V((({x:e,y:t})=>{a.scrollX.set(e.current),a.scrollXProgress.set(e.progress),a.scrollY.set(t.current),a.scrollYProgress.set(t.progress)}),{...r,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[]),a}();(0,l.useEffect)((()=>{const e=u.current;e&&c(e.offsetTop)}),[u]),(0,s.B)(p,(e=>m(e.some((e=>e.isIntersecting)))),(()=>{}),{rootMargin:"-175px 0px",threshold:[0,1]});const g=J(f,[i,i+1],[0,-.3],{clamp:!1});return l.createElement("div",{ref:u,className:"jkl-portal-media-box "+(n?"jkl-portal-media-box--right":"")},l.createElement(ee.P.figure,{ref:p,className:"jkl-portal-media-box__media "+(d?"jkl-portal-media-box__media--in-view":"")},t,r&&l.createElement("figcaption",{className:"jkl-micro jkl-portal-media-box__caption"},r)),l.createElement(ee.P.div,{style:{y:o?0:g},className:"jkl-portal-media-box__card jkl-portal-media-box__card--long-text"},l.createElement("p",{className:"body"},a)))};const re=["asset","alt"];var le=e=>{let{asset:t,alt:n}=e,r=(0,a.A)(e,re);const s=(0,o.useStaticQuery)("1756004727").allImageSharp.nodes.find((e=>e.gatsbyImageData.images.fallback.src.includes(t)));return s?l.createElement(ne,Object.assign({media:l.createElement(i.G,{image:s.gatsbyImageData,alt:n,loading:"lazy",decoding:"async"})},r)):null};var ae=e=>{let{title:t,children:r}=e;return l.createElement("div",{className:"jkl-portal-fullView"},l.createElement("div",{className:"jkl-portal-hero"},l.createElement(i.S,{src:"./Assets/mountain.jpg",placeholder:"blurred",className:"",alt:"Fjellandskap",__imageData:n(57369)}),l.createElement("button",{onClick:()=>{var e;return null===(e=window)||void 0===e?void 0:e.scrollBy({top:window.innerHeight,behavior:"smooth"})},className:"jkl-portal-hero__card"},l.createElement("h1",{className:"title mb-40"},t),l.createElement("p",{className:"body"},r),l.createElement("div",{className:"jkl-portal-hero__card__arrow title-small mt-24"},"↓"))))};const oe=["src","placeholder"];var ie=e=>{let{src:t,placeholder:n}=e,r=(0,a.A)(e,oe);return l.createElement(ne,Object.assign({media:l.createElement("video",{className:"jkl-portal-media-box__video",src:(0,o.withPrefix)(t),poster:(0,o.withPrefix)(n),autoPlay:!0,muted:!0,loop:!0,tabIndex:-1})},r))};function se(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3"},(0,r.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(ae,{title:"Bilder"},l.createElement(t.p,null,"Vi bruker bilder som virkemidler til å skape en stemning, understreke et poeng eller hjelpe brukeren med å navigere\ni våre løsninger. Vi skal bruke bilder fremfor illustrasjoner og ikoner. Bruk bilder fra vår bildebank når du skal\nbruke bilder i våre løsninger eller i en presentasjon.")),"\n",l.createElement(t.h2,null,"Dette bør du tenke gjennom når du velger et bilde:"),"\n",l.createElement(t.p,null,"Passer bildet med Fremtinds visjon? Hjelper bildet brukeren å forstå det du kommuniserer? Viser bildet produktet\neller tjenesten på en god måte? Tilfører bildet verdi til innholdet? Hva slags virkning har bildet på\nmottakeren?"),"\n",l.createElement("div",{style:{paddingBottom:"15vh"}}),"\n",l.createElement(t.h2,null,"Fotostil"),"\n",l.createElement(t.p,null,"Fremtind har en todelt fotostil. Vi står enten på toppen av tinden, med full oversikt, eller på bakkeplan sammen med menneskene. Fotostilen er ærlig, ekte og upolert. Den er hverdagslig og jordnær, nettopp for å gi brukerne våre noe de kan kjenne seg igjen i. Fordi fargene vi bruker er nøkterne og stilrene, vil fotografier utdype identiteten med varme og følelser. Bruk gjerne bilder som henter farger fra Fremtinds støttefargepallett."),"\n",l.createElement(t.p,null,"Bildene viser landskap eller situasjoner med mennesker i vante omgivelser. Vi unngår å bruke stockfoto eller oppstilte bilder, og vi bruker bilder av produkter med omhu."),"\n",l.createElement(t.p,null,"I all hovedsak:"),"\n",l.createElement(le,{alt:"Fugleperspektiv av blåturkis sjø som bryter inn mot sandstrand",asset:"beach.jpg",caption:"Husk å kreditere rettighetseier"},l.createElement(t.p,null,"Bruk bilder tatt rett ovenfra eller rett forfra.")),"\n",l.createElement(le,{alt:"Mennesker i retromoderne og industrielt kaféinteriør",asset:"cafe.jpg",rightAlign:!0},l.createElement(t.p,null,"Velg upolerte og hverdagslige bilder.")),"\n",l.createElement(le,{alt:"Sommerfoto. Smilende mørkhåret jente med rosa blomster uskarpt i bakgrunnen.",asset:"kid.jpg"},l.createElement(t.p,null,"Formidle varme og følelser.")),"\n",l.createElement(le,{alt:"Fargerike golfballer og golfkølle på grønt gress",asset:"minigolf.jpg",rightAlign:!0},l.createElement(t.p,null,"Bruk foto fremfor illustrasjoner og ikoner.")),"\n",l.createElement(le,{alt:"Mor og baby mot naturbakgrunn ved soloppgang",asset:"mom.jpg"},l.createElement(t.p,null,"Velg landskap eller mennesker i omgivelser folk kan kjenne seg igjen i.")),"\n",l.createElement("div",{style:{paddingBottom:"15vh"}}),"\n",l.createElement(t.h2,null,"Hvordan velge bilde?"),"\n",l.createElement(t.p,null,"Når vi snakker om et konkret forsikringsprodukt, kan det være vanskelig å finne bilder som passer perfekt. Her er noen tips og retningslinjer for de ulike forsikringene. Felles for kategoribildene er at vi ønsker å fokusere på en situasjon som oppstår rundt eller i samspill med produktet, i stedet for selve produktet."),"\n",l.createElement("div",{style:{paddingBottom:"15vh"}}),"\n",l.createElement(le,{alt:"Interiørfoto av gutt som ser på smarttelefon foran PC og nettbrett",asset:"schoolkid.jpg"},l.createElement("b",null,"Skadeforsikring"),l.createElement("br"),l.createElement(t.p,null,"Vi viser folk og tingene deres i samspill, heller enn å ta bilde av et produkt.")),"\n",l.createElement(le,{alt:"Bilinteriør.Kvinne som kjører bil i by. Øynene vises i bakspeilet",asset:"driver.jpg",rightAlign:!0},l.createElement("b",null,"Bilforsikring"),l.createElement("br"),l.createElement(t.p,null,"Bruk bilder av situasjoner i og rundt bilen. I trafikken, ved av- og pålessing, av folk og ting i nærheten av bilen,\neller når de steller bilen sin. Kanskje pakker de til ferie, henter på trening, er på handletur eller vasker bilen.\nSituasjonen er viktigere enn bilen, bildet skal ikke oppfattes som reklame for en bestemt biltype. Vær oppmerksom på\nat bilen skal kjøre på norske veier.")),"\n",l.createElement(le,{alt:"Kvinne med trillekoffert foran rødt tog på jernbanestasjon",asset:"togpendler.jpg"},l.createElement("b",null,"Reiseforsikring"),l.createElement("br"),l.createElement(t.p,null,"Når det gjelder reiseforsikring kan vi bruke bilder fra utlandet, men da gjerne i typiske situasjoner man havner i\nsom turist. Her kan vi appellere til ulike typer, for eksempel den eventyrlystne, storbyturisten, solslikkeren eller\nden lokale turisten."),l.createElement("br"),l.createElement(t.p,null,l.createElement("br")," Merk: Fremtind er et bærekraftig selskap og vi unngår å bruke bilder av fly, cruiseskip eller aktiviteter som\nødelegger natur eller lokalsamfunn.")),"\n",l.createElement(le,{alt:"Hundevalp på et pledd i en sofa",asset:"dogs.jpg",rightAlign:!0},l.createElement("b",null,"Dyreforsikring"),l.createElement("br"),l.createElement(t.p,null,"Dyr har sin egen personlighet og de kan gjerne eie bildet alene, men det er også fint å vise samspillet mellom dyr\nog mennesker. Dyr egner seg fint til bilder tatt “rett ovenfra”.")),"\n",l.createElement("div",{style:{paddingBottom:"15vh"}}),"\n",l.createElement(t.h2,null,"Lys og farger"),"\n",l.createElement(t.p,null,"Vi vil at atmosfæren i bildene skal virke inviterende og virkelighetsnær. For å skape det bruker vi dagslys, eller naturlig lyssetting og fargekorrigering. Vi bruker ikke effekter eller filtre på bildene våre. Alle bildene i Fremtinds bildedatabase er redigert og fargekorrigert, slik at de oppfyller kravene til bildestilen. De skal oppleves som like"),"\n",l.createElement("div",{style:{paddingBottom:"15vh"}}),"\n",l.createElement(ie,{src:"/assets/video/marius-compressed.mp4",placeholder:"/assets/img/marius.jpg"},l.createElement(t.p,null,l.createElement("b",null,"Bevegelse"),"\n",l.createElement("br")," For å skape ekstra liv kan man legge på enkle effekter som parallakse, uskarphet og elevasjon. Vi kan også bruke\nanimerte bilder, så lenge animasjonen tilfører noe og ikke oppleves som forstyrrende.")),"\n",l.createElement("div",{style:{paddingBottom:"15vh"}}),"\n",l.createElement(t.h2,null,"Responsivitet"),"\n",l.createElement(t.p,null,"Bildene vil ofte brukes på responsive nettsider. Det betyr at både format og størrelse kan bli endret, og andre elementer kan bytte plass i forhold til bildet. Hvis vi bruker godt med rom rundt hovedmotivet i bildet, blir det lettere å plassere designelementer over bildet. Da får vi også et sikkerhetsrom rundt hovedmotivet, slik at det ikke blir beskåret når vi skalerer."),"\n",l.createElement(t.h3,null,"Overlappende elementer"),"\n",l.createElement(t.p,null,"Vi kan legge andre elementer oppå bilder så lenge vi sørger for at kontrasten er ivaretatt. Pass på at det elementet som overlapper bildet ikke dekker over hovedmotivet."),"\n",l.createElement(t.h2,null,"Bildebank"),"\n",l.createElement(t.p,null,"I Fremtind har vi en bildebank, den finner du på intranettet. Ikke bruk bilder vi ikke har lisens på og husk fotokreditering der det kreves."))}var ce=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?l.createElement(t,e,l.createElement(se,e)):se(e)},de=n(68888),me=n(47672),ue=n(52948),pe=n(38776),fe=n(20919);const ge=e=>{let{pageContext:t}=e;return l.createElement(me.G,{title:t.title})},Ae=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:i}=r;return l.createElement(fe.D,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(pe.Ao,Object.assign({},o,{versions:r.versions})),t.pathname.includes("komponenter")&&l.createElement(ue.A,{variant:"komponent",component:o.title}),l.createElement(pe.f6,o),a,i&&l.createElement(de.N,{types:i}))};function ke(e){return l.createElement(Ae,e,l.createElement(ce,e))}},68888:function(e,t,n){n.d(t,{N:function(){return f}});var r=n(88635),l=n(24408),a=n(78022),o=n(7378),i=n(45371);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},f=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(d):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,l,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(l.A,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.NG,{className:"jkl-portal-code-block"},s),r.length>0&&o.createElement(p,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},52948:function(e,t,n){n.d(t,{A:function(){return i}});var r=n(77800),l=n(38316),a=n(7378),o=n(45371);const i=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(l.u,null),a.createElement(o.fz,null,s[t].text)),a.createElement(r.N,{href:s[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,t,n){n.d(t,{D:function(){return s}});var r=n(3698),l=n.n(r),a=n(94270),o=n(7378),i=n(79197);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.M),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.P.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},88635:function(e,t,n){n.d(t,{n:function(){return s}});var r=n(45271),l=n(86106),a=n(3698),o=n.n(a);const i=["className","density","id"],s=e=>{let{className:t,density:n,id:a}=e,s=(0,r.A)(e,i);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:a},s))}},24408:function(e,t,n){n.d(t,{A:function(){return m}});var r=n(45271),l=n(86106),a=n(21197),o=n(82455),i=n(3698),s=n.n(i),c=n(7378);const d=["children","title","className","startExpanded","onClick","id"],m=e=>{let{children:t,title:n,className:i,startExpanded:m=!1,onClick:u,id:p}=e,f=(0,r.A)(e,d);const[g,A]=(0,c.useState)(m),[k]=(0,c.useState)((()=>m)),{detailsRef:v,summaryRef:b,contentRef:h,onSummaryClick:E}=(0,o.$)({onOpenChange:(e,t)=>{A(e),u&&u(t,e)},isExpanded:k});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},f,{className:s()("jkl-accordion-item",i),ref:v,id:p,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:E,ref:b,children:[n,(0,l.jsx)(a.l,{className:"jkl-accordion-item__arrow",pointingDown:!g,bold:g})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},38316:function(e,t,n){n.d(t,{u:function(){return d}});var r=n(7378),l=n(19767),a=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const d=e=>r.createElement(l.I,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e})({},e),"");d.displayName="QuestionIcon"},78022:function(e,t,n){n.d(t,{b:function(){return v}});var r=n(7378),l=n(10494),a=n(75374),o=n(82462),i=n(60630),s=n(94624),c=n(65759),d=n(21664),m=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const v=(0,r.forwardRef)(((e,t)=>{var n,m=e,{caption:v,columns:b,emptyTableText:h,rows:E,verticalAlign:y}=m,j=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&A.call(e,r)&&(n[r]=e[r]);return n})(m,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(l.X,(n=((e,t)=>{for(var n in t||(t={}))g.call(t,n)&&k(e,n,t[n]);if(f)for(var n of f(t))A.call(t,n)&&k(e,n,t[n]);return e})({fullWidth:!0},j),u(n,p({ref:t}))),v&&r.createElement(o.r,{srOnly:!0},v),r.createElement(s.n,null,r.createElement(d.H,null,b.map(((e,t)=>r.createElement(c.A,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.B,null,0===E.length&&h&&r.createElement(d.H,null,r.createElement(i.n,{colSpan:b.length},h)),E.map(((e,t)=>r.createElement(d.H,{key:t},e.map(((e,t)=>r.createElement(i.n,{key:t,"data-th":b[t],verticalAlign:y},e))))))))}));v.displayName="DataTable"},56636:function(e,t,n){n.d(t,{Cl:function(){return r},Tt:function(){return l}});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},r.apply(this,arguments)};function l(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError},57369:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFAv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAFmY77KRHD/xAAYEAADAQEAAAAAAAAAAAAAAAAAAQITA//aAAgBAQABBQLSRdjWBWTbobR//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8BJ//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/AVf/xAAYEAADAQEAAAAAAAAAAAAAAAABECEAIv/aAAgBAQAGPwLdB0xf/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAERITFxQf/aAAgBAQABPyFKqG+Fzx8gcmjdYxdfBL0//9oADAMBAAIAAwAAABDDz//EABcRAQEBAQAAAAAAAAAAAAAAAAEAEUH/2gAIAQMBAT8QB2wv/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARQf/aAAgBAgEBPxBXlq//xAAdEAACAgEFAAAAAAAAAAAAAAABEQAhMVFhcYHB/9oACAEBAAE/EFIWkKewN6NWz3CSQVVgxlpKwWQpjMElLPMe2O6n/9k="},"images":{"fallback":{"src":"/preview/storybook/static/ec44054f6fd522cbf45b10f313888672/459d8/mountain.jpg","srcSet":"/preview/storybook/static/ec44054f6fd522cbf45b10f313888672/fd980/mountain.jpg 900w,\\n/preview/storybook/static/ec44054f6fd522cbf45b10f313888672/144ac/mountain.jpg 1800w,\\n/preview/storybook/static/ec44054f6fd522cbf45b10f313888672/459d8/mountain.jpg 3600w","sizes":"(min-width: 3600px) 3600px, 100vw"},"sources":[{"srcSet":"/preview/storybook/static/ec44054f6fd522cbf45b10f313888672/b19f4/mountain.webp 900w,\\n/preview/storybook/static/ec44054f6fd522cbf45b10f313888672/a966b/mountain.webp 1800w,\\n/preview/storybook/static/ec44054f6fd522cbf45b10f313888672/f2810/mountain.webp 3600w","type":"image/webp","sizes":"(min-width: 3600px) 3600px, 100vw"}]},"width":3600,"height":2700}')}}]);