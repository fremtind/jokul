"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9279],{40584:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return ue},Head:function(){return me},default:function(){return pe}});var r=n(75615),l=n(70079),a=n(42864),i=n(74083),o=n(66811),s=n(45813);const c=new WeakMap;let d;function m({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=c.get(e))||void 0===r||r.forEach((r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){const{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})}))}function u(e){e.forEach(m)}function p(e,t){d||"undefined"!=typeof ResizeObserver&&(d=new ResizeObserver(u));const n=function(e,t){var n;return"string"==typeof e?t?(null!==(n=t[e])&&void 0!==n||(t[e]=document.querySelectorAll(e)),e=t[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}(e);return n.forEach((e=>{let n=c.get(e);n||(n=new Set,c.set(e,n)),n.add(t),null==d||d.observe(e)})),()=>{n.forEach((e=>{const n=c.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==d||d.unobserve(e)}))}}const g=new Set;let f;function A(e){return g.add(e),f||(f=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};g.forEach((e=>e(t)))},window.addEventListener("resize",f)),()=>{g.delete(e),!g.size&&f&&(f=void 0)}}const k=e=>"function"==typeof e;const v=(e,t,n)=>t-e==0?1:(n-e)/(t-e);const h={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function b(e,t,n,r){const l=n[t],{length:a,position:i}=h[t],o=l.current,s=n.time;l.current=e["scroll"+i],l.scrollLength=e["scroll"+a]-e["client"+a],l.offset.length=0,l.offset[0]=0,l.offset[1]=l.scrollLength,l.progress=v(0,l.scrollLength,l.current);const c=r-s;var d,m;l.velocity=c>50?0:(d=l.current-o,(m=c)?d*(1e3/m):0)}const E=e=>e,j=(e,t,n)=>-n*e+n*t+e;function y(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const l=v(0,t,r);e.push(j(n,1,l))}}function w(e){const t=[0];return y(t,e-1),t}const x=e=>"number"==typeof e;function B(e,t){return(e=>Array.isArray(e)&&!x(e[0]))(e)?e[((e,t,n)=>{const r=t-e;return((n-e)%r+r)%r+e})(0,e.length,t)]:e}function N(e,t=w(e.length),n=E){const r=e.length,l=r-t.length;return l>0&&y(t,l),l=>{let a=0;for(;a<r-2&&!(l<t[a+1]);a++);let i=(o=0,s=1,c=v(t[a],t[a+1],l),Math.min(Math.max(c,o),s));var o,s,c;return i=B(n,a)(i),j(e[a],e[a+1],i)}}const _={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},L=e=>"string"==typeof e,S={start:0,center:.5,end:1};function Q(e,t,n=0){let r=0;if(void 0!==S[e]&&(e=S[e]),L(e)){const t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return x(e)&&(r=t*e),n+r}const F=[0,0];function M(e,t,n,r){let l=Array.isArray(e)?e:F,a=0,i=0;return x(e)?l=[e,e]:L(e)&&(l=(e=e.trim()).includes(" ")?e.split(" "):[e,S[e]?e:"0"]),a=Q(l[0],n,r),i=Q(l[1],t),a-i}const R={x:0,y:0};function D(e,t,n){let{offset:r=_.All}=n;const{target:l=e,axis:a="y"}=n,i="y"===a?"height":"width",o=l!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r instanceof SVGGraphicsElement&&"getBBox"in r){const{top:e,left:t}=r.getBBox();for(n.x+=t,n.y+=e;r&&"svg"!==r.tagName;)r=r.parentNode}return n}(l,e):R,s=l===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:l.clientWidth,height:l.clientHeight},c={width:e.clientWidth,height:e.clientHeight};t[a].offset.length=0;let d=!t[a].interpolate;const m=r.length;for(let u=0;u<m;u++){const e=M(r[u],c[i],s[i],o[a]);d||e===t[a].interpolatorOffsets[u]||(d=!0),t[a].offset[u]=e}d&&(t[a].interpolate=N(w(m),t[a].offset),t[a].interpolatorOffsets=[...t[a].offset]),t[a].progress=t[a].interpolate(t[a].current)}function Y(e,t,n,r={}){const l=r.axis||"y";return{measure:()=>function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!=e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}(e,r.target,n),update:t=>{!function(e,t,n){b(e,"x",t,n),b(e,"y",t,n),t.time=n}(e,n,t),(r.offset||r.target)&&D(e,n,r)},notify:k(t)?()=>t(n):O(t,n[l])}}function O(e,t){return e.pause(),e.forEachNative(((e,{easing:t})=>{var n,r;if(e.updateDuration)t||(e.easing=E),e.updateDuration(1);else{const l={duration:1e3};t||(l.easing="linear"),null===(r=null===(n=e.effect)||void 0===n?void 0:n.updateTiming)||void 0===r||r.call(n,l)}})),()=>{e.currentTime=t.progress}}const P=new WeakMap,W=new WeakMap,C=new WeakMap,H=e=>e===document.documentElement?window:e;function V(e,t={}){var{container:n=document.documentElement}=t,r=(0,s._T)(t,["container"]);let l=C.get(n);l||(l=new Set,C.set(n,l));const a=Y(n,e,{time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}},r);if(l.add(a),!P.has(n)){const e=()=>{const e=performance.now();for(const t of l)t.measure();for(const t of l)t.update(e);for(const t of l)t.notify()};P.set(n,e);const t=H(n);window.addEventListener("resize",e,{passive:!0}),n!==document.documentElement&&W.set(n,(o=e,k(i=n)?A(i):p(i,o))),t.addEventListener("scroll",e,{passive:!0})}var i,o;const c=P.get(n),d=requestAnimationFrame(c);return()=>{var t;"function"!=typeof e&&e.stop(),cancelAnimationFrame(d);const r=C.get(n);if(!r)return;if(r.delete(a),r.size)return;const l=P.get(n);P.delete(n),l&&(H(n).removeEventListener("scroll",l),null===(t=W.get(n))||void 0===t||t(),window.removeEventListener("resize",l))}}var z=n(81732),I=n(19782),T=n(94637);const G=()=>({scrollX:(0,z.B)(0),scrollY:(0,z.B)(0),scrollXProgress:(0,z.B)(0),scrollYProgress:(0,z.B)(0)});var q=n(61469);var K=n(85274);var X=n(49298);function U(e,t){const n=function(e){const t=(0,I.h)((()=>(0,z.B)(e))),{isStatic:n}=(0,l.useContext)(K._);if(n){const[,n]=(0,l.useState)(e);(0,l.useEffect)((()=>t.onChange(n)),[])}return t}(t()),r=()=>n.set(t());return r(),function(e,t,n){(0,T.L)((()=>{const r=e.map((e=>e.onChange(t)));return()=>{r.forEach((e=>e())),n()}}))}(e,(()=>X.ZP.update(r,!1,!0)),(()=>X.qY.update(r))),n}function Z(e,t,n,r){const l="function"==typeof t?t:function(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],l=e[1+n],a=e[2+n],i=e[3+n],o=(0,q.s)(l,a,{mixer:(s=a[0],(e=>"object"==typeof e&&e.mix)(s)?s.mix:void 0),...i});var s;return t?o(r):o}(t,n,r);return Array.isArray(e)?J(e,l):J([e],(([e])=>l(e)))}function J(e,t){const n=(0,I.h)((()=>[]));return U(e,(()=>{n.length=0;const r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)}))}var $=n(79363),ee=n(56024);var te=e=>{let{media:t,rightAlign:n,caption:r,children:a}=e;const{prefersReducedMotion:i}=(0,l.useContext)(ee.R),{0:s,1:c}=(0,l.useState)(0),{0:d,1:m}=(0,l.useState)(!1),u=(0,l.useRef)(null),p=(0,l.useRef)(null),{scrollY:g}=function({container:e,target:t,layoutEffect:n=!0,...r}={}){const a=(0,I.h)(G);return(n?T.L:l.useEffect)((()=>V((({x:e,y:t})=>{a.scrollX.set(e.current),a.scrollXProgress.set(e.progress),a.scrollY.set(t.current),a.scrollYProgress.set(t.progress)}),{...r,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[]),a}();(0,l.useEffect)((()=>{const e=u.current;e&&c(e.offsetTop)}),[u]),(0,o.S)(p,(e=>m(e.some((e=>e.isIntersecting)))),(()=>{}),{rootMargin:"-175px 0px",threshold:[0,1]});const f=Z(g,[s,s+1],[0,-.3],{clamp:!1});return l.createElement("div",{ref:u,className:"jkl-portal-media-box "+(n?"jkl-portal-media-box--right":"")},l.createElement($.E.figure,{ref:p,className:"jkl-portal-media-box__media "+(d?"jkl-portal-media-box__media--in-view":"")},t,r&&l.createElement("figcaption",{className:"jkl-micro jkl-portal-media-box__caption"},r)),l.createElement($.E.div,{style:{y:i?0:f},className:"jkl-portal-media-box__card jkl-portal-media-box__card--long-text"},l.createElement("p",{className:"jkl-body"},a)))};var ne=e=>{let{asset:t,alt:n,...r}=e;const o=(0,a.useStaticQuery)("1756004727").allImageSharp.nodes.find((e=>e.gatsbyImageData.images.fallback.src.includes(t)));return o?l.createElement(te,Object.assign({media:l.createElement(i.G,{image:o.gatsbyImageData,alt:n,loading:"lazy",decoding:"async"})},r)):null};var re=e=>{let{title:t,children:r}=e;return l.createElement("div",{className:"jkl-portal-fullView"},l.createElement("div",{className:"jkl-portal-hero"},l.createElement(i.S,{src:"./Assets/mountain.jpg",placeholder:"blurred",className:"",alt:"Fjellandskap",__imageData:n(22283)}),l.createElement("button",{onClick:()=>{var e;return null===(e=window)||void 0===e?void 0:e.scrollBy({top:window.innerHeight,behavior:"smooth"})},className:"jkl-portal-hero__card"},l.createElement("h1",{className:"jkl-title jkl-spacing-40--bottom"},t),l.createElement("p",{className:"jkl-body"},r),l.createElement("div",{className:"jkl-portal-hero__card__arrow jkl-title-small jkl-spacing-24--top"},"↓"))))};var le=e=>{let{src:t,placeholder:n,...r}=e;return l.createElement(te,Object.assign({media:l.createElement("video",{className:"jkl-portal-media-box__video",src:(0,a.withPrefix)(t),poster:(0,a.withPrefix)(n),autoPlay:!0,muted:!0,loop:!0,tabIndex:-1})},r))};function ae(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(re,{title:"Bildebruk"},l.createElement(t.p,null,"Vi bruker bilder som virkemidler til å skape en stemning, understreke et poeng eller hjelpe brukeren med å navigere\ni våre løsninger. Vi skal bruke bilder fremfor illustrasjoner og ikoner. Bruk bilder fra vår bildebank når du skal\nbruke bilder i våre løsninger eller i en presentasjon.")),"\n",l.createElement(t.h2,null,"Dette bør du tenke gjennom når du velger et bilde:"),"\n",l.createElement(t.p,null,"Passer bildet med Fremtinds visjon? Hjelper bildet brukeren å forstå det du kommuniserer? Viser bildet produktet\neller tjenesten på en god måte? Tilfører bildet verdi til innholdet? Hva slags virkning har bildet på\nmottakeren?"),"\n",l.createElement("div",{style:{paddingBottom:"15vh"}}),"\n",l.createElement(t.h2,null,"Fotostil"),"\n",l.createElement(t.p,null,"Fremtind har en todelt fotostil. Vi står enten på toppen av tinden, med full oversikt, eller på bakkeplan sammen med menneskene. Fotostilen er ærlig, ekte og upolert. Den er hverdagslig og jordnær, nettopp for å gi brukerne våre noe de kan kjenne seg igjen i. Fordi fargene vi bruker er nøkterne og stilrene, vil fotografier utdype identiteten med varme og følelser. Bruk gjerne bilder som henter farger fra Fremtinds støttefargepallett."),"\n",l.createElement(t.p,null,"Bildene viser landskap eller situasjoner med mennesker i vante omgivelser. Vi unngår å bruke stockfoto eller oppstilte bilder, og vi bruker bilder av produkter med omhu."),"\n",l.createElement(t.p,null,"I all hovedsak:"),"\n",l.createElement(ne,{alt:"Fugleperspektiv av blåturkis sjø som bryter inn mot sandstrand",asset:"beach.jpg",caption:"Husk å kreditere rettighetseier"},l.createElement(t.p,null,"Bruk bilder tatt rett ovenfra eller rett forfra.")),"\n",l.createElement(ne,{alt:"Mennesker i retromoderne og industrielt kaféinteriør",asset:"cafe.jpg",rightAlign:!0},l.createElement(t.p,null,"Velg upolerte og hverdagslige bilder.")),"\n",l.createElement(ne,{alt:"Sommerfoto. Smilende mørkhåret jente med rosa blomster uskarpt i bakgrunnen.",asset:"kid.jpg"},l.createElement(t.p,null,"Formidle varme og følelser.")),"\n",l.createElement(ne,{alt:"Fargerike golfballer og golfkølle på grønt gress",asset:"minigolf.jpg",rightAlign:!0},l.createElement(t.p,null,"Bruk foto fremfor illustrasjoner og ikoner.")),"\n",l.createElement(ne,{alt:"Mor og baby mot naturbakgrunn ved soloppgang",asset:"mom.jpg"},l.createElement(t.p,null,"Velg landskap eller mennesker i omgivelser folk kan kjenne seg igjen i.")),"\n",l.createElement("div",{style:{paddingBottom:"15vh"}}),"\n",l.createElement(t.h2,null,"Hvordan velge bilde?"),"\n",l.createElement(t.p,null,"Når vi snakker om et konkret forsikringsprodukt, kan det være vanskelig å finne bilder som passer perfekt. Her er noen tips og retningslinjer for de ulike forsikringene. Felles for kategoribildene er at vi ønsker å fokusere på en situasjon som oppstår rundt eller i samspill med produktet, i stedet for selve produktet."),"\n",l.createElement("div",{style:{paddingBottom:"15vh"}}),"\n",l.createElement(ne,{alt:"Interiørfoto av gutt som ser på smarttelefon foran PC og nettbrett",asset:"schoolkid.jpg"},l.createElement("b",null,"Skadeforsikring"),l.createElement("br"),l.createElement(t.p,null,"Vi viser folk og tingene deres i samspill, heller enn å ta bilde av et produkt.")),"\n",l.createElement(ne,{alt:"Bilinteriør.Kvinne som kjører bil i by. Øynene vises i bakspeilet",asset:"driver.jpg",rightAlign:!0},l.createElement("b",null,"Bilforsikring"),l.createElement("br"),l.createElement(t.p,null,"Bruk bilder av situasjoner i og rundt bilen. I trafikken, ved av- og pålessing, av folk og ting i nærheten av bilen,\neller når de steller bilen sin. Kan hende pakker de til ferie, henter på trening, er på handletur eller vasker\nbilen. Situasjonen er viktigere enn bilen, bildet skal ikke oppfattes som reklame for en bestemt biltype. Vær\noppmerksom på at bilen skal kjøre på norske veier.")),"\n",l.createElement(ne,{alt:"Kvinne med trillekoffert foran rødt tog på jernbanestasjon",asset:"togpendler.jpg"},l.createElement("b",null,"Reiseforsikring"),l.createElement("br"),l.createElement(t.p,null,"Når det gjelder reiseforsikring kan vi bruke bilder fra utlandet, men da gjerne i typiske situasjoner man havner i\nsom turist. Her kan vi appellere til ulike typer, for eksempel den eventyrlystne, storbyturisten, solslikkeren eller\nden lokale turisten."),l.createElement("br"),l.createElement(t.p,null,l.createElement("br")," Merk: Fremtind er et bærekraftig selskap og vi unngår å bruke bilder av fly, cruiseskip eller aktiviteter som\nødelegger natur eller lokalsamfunn.")),"\n",l.createElement(ne,{alt:"Hundevalp på et pledd i en sofa",asset:"dogs.jpg",rightAlign:!0},l.createElement("b",null,"Dyreforsikring"),l.createElement("br"),l.createElement(t.p,null,"Dyr har sin egen personlighet og de kan gjerne eie bildet alene, men det er også fint å vise samspillet mellom dyr\nog mennesker. Dyr egner seg fint til bilder tatt “rett ovenfra”.")),"\n",l.createElement("div",{style:{paddingBottom:"15vh"}}),"\n",l.createElement(t.h2,null,"Lys og farger"),"\n",l.createElement(t.p,null,"Vi vil at atmosfæren i bildene skal virke inviterende og virkelighetsnær. For å skape det bruker vi dagslys, eller naturlig lyssetting og fargekorrigering. Vi bruker ikke effekter eller filtre på bildene våre. Alle bildene i Fremtinds bildedatabase er redigert og fargekorrigert, slik at de oppfyller kravene til bildestilen. De skal oppleves som like"),"\n",l.createElement("div",{style:{paddingBottom:"15vh"}}),"\n",l.createElement(le,{src:"/assets/video/marius-compressed.mp4",placeholder:"/assets/img/marius.jpg"},l.createElement(t.p,null,l.createElement("b",null,"Bevegelse"),"\n",l.createElement("br")," For å skape ekstra liv kan man legge på enkle effekter som parallakse, uskarphet og elevasjon. Vi kan også bruke\nanimerte bilder, så lenge animasjonen tilfører noe og ikke oppleves som forstyrrende.")),"\n",l.createElement("div",{style:{paddingBottom:"15vh"}}),"\n",l.createElement(t.h2,null,"Responsivitet"),"\n",l.createElement(t.p,null,"Bildene vil ofte brukes på responsive nettsider. Det betyr at både format og størrelse kan bli endret, og andre elementer kan bytte plass i forhold til bildet. Hvis vi bruker godt med rom rundt hovedmotivet i bildet, blir det lettere å plassere designelementer over bildet. Da får vi også et sikkerhetsrom rundt hovedmotivet, slik at det ikke blir beskåret når vi skalerer."),"\n",l.createElement(t.h3,null,"Overlappende elementer"),"\n",l.createElement(t.p,null,"Vi kan legge andre elementer oppå bilder så lenge vi sørger for at kontrasten er ivaretatt. Pass på at det elementet som overlapper bildet ikke dekker over hovedmotivet."),"\n",l.createElement(t.h2,null,"Bildebank"),"\n",l.createElement(t.p,null,"I Fremtind har vi en bildebank, den finner du på intranettet. Ikke bruk bilder vi ikke har lisens på og husk fotokreditering der det kreves."))}var ie=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(ae,e)):ae(e)},oe=n(71111),se=n(16569),ce=n(72892),de=n(479);const me=e=>{let{pageContext:t}=e;return l.createElement(se.p,{title:t.title})},ue=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:i}=n.page,{types:o}=r;return l.createElement(de.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(ce.M1,Object.assign({},i,{versions:r.versions})),l.createElement(ce.w5,i),a,o&&l.createElement(oe.l,{types:o}))};function pe(e){return l.createElement(ue,e,l.createElement(ie,e))}},71111:function(e,t,n){n.d(t,{l:function(){return p}});var r=n(57986),l=n(80252),a=n(50601),i=n(70079);const o=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,i=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},m=e=>{const t=e.target,n=t.parentElement;d(t,n)},u=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var r},p=e=>{let{types:t}=e;return i.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},i.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),i.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(r.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(c):[],a=n.props?Object.values(n.props).filter(s):[];return i.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},r.length>0&&i.createElement(u,{props:r}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(u,{props:a})))}))))}},479:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(26372),l=n.n(r),a=n(79363),i=n(70079),o=n(56024);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},57986:function(e,t,n){n.d(t,{U:function(){return i}});var r=n(26372),l=n.n(r),a=n(70079);const i=e=>{let{className:t,density:n,...r}=e;return a.createElement("div",{"data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,...r})}},80252:function(e,t,n){n.d(t,{Q:function(){return c}});var r=n(14092),l=n(89292),a=n(26372),i=n.n(a),o=n(70079);const s=e=>{let{expanded:t=!1,className:n}=e;return o.createElement("span",{className:i()("jkl-accordion-item__arrow",n,{"jkl-accordion-item__arrow--expanded":t})},o.createElement("svg",{className:"jkl-accordion-item__arrow-down",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M11.15 8.51998L10.35 7.73998L6.54999 11.58L6.55 0.699982L5.43 0.699982L5.43 11.56L1.67 7.73998L0.869995 8.51998L6.01 13.54L11.15 8.51998Z",fill:"currentColor"})),o.createElement("svg",{className:"jkl-accordion-item__arrow-up",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M0.940002 5.71998L1.74 6.49998L5.54 2.65998V13.54H6.66V2.67998L10.42 6.49998L11.22 5.71998L6.08 0.699982L0.940002 5.71998Z",fill:"currentColor"})))},c=e=>{let{children:t,title:n,className:a,startExpanded:c=!1,onClick:d,...m}=e;const u=(0,r.M)("title"),p=(0,r.M)("content"),{0:g,1:f}=(0,o.useState)(c),[A]=(0,l.v)(g,{easing:"exit",timing:"expressive"});return o.createElement("div",{"data-testid":"jkl-accordion-item",...m,className:i()("jkl-accordion-item",a,{"jkl-accordion-item--expanded":g})},o.createElement("button",{id:u,className:"jkl-accordion-item__title",type:"button","aria-expanded":g,"aria-controls":p,onClick:e=>{const t=!g;f(t),d&&d(e,t)}},n,o.createElement(s,{expanded:g})),o.createElement("div",{id:p,ref:A,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":u,hidden:!g},o.createElement("div",{className:"jkl-accordion-item__content"},t)))}},50601:function(e,t,n){n.d(t,{w:function(){return m}});var r=n(70079),l=n(64327),a=n(1807),i=n(11348),o=n(12675),s=n(14687),c=n(61211),d=n(39666);const m=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:u,rows:p,verticalAlign:g,...f}=e;return r.createElement(l.i,{fullWidth:!0,...f,ref:t},n&&r.createElement(i.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(d.S,null,m.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===p.length&&u&&r.createElement(d.S,null,r.createElement(o.p,{colSpan:m.length},u)),p.map(((e,t)=>r.createElement(d.S,{key:t},e.map(((e,t)=>r.createElement(o.p,{key:t,"data-th":m[t],verticalAlign:g},e))))))))}));m.displayName="DataTable"},22283:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFAv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAFmY77KRHD/xAAYEAADAQEAAAAAAAAAAAAAAAAAAQITA//aAAgBAQABBQLSRdjWBWTbobR//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8BJ//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/AVf/xAAYEAADAQEAAAAAAAAAAAAAAAABECEAIv/aAAgBAQAGPwLdB0xf/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAERITFxQf/aAAgBAQABPyFKqG+Fzx8gcmjdYxdfBL0//9oADAMBAAIAAwAAABDDz//EABcRAQEBAQAAAAAAAAAAAAAAAAEAEUH/2gAIAQMBAT8QB2wv/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARQf/aAAgBAgEBPxBXlq//xAAdEAACAgEFAAAAAAAAAAAAAAABEQAhMVFhcYHB/9oACAEBAAE/EFIWkKewN6NWz3CSQVVgxlpKwWQpjMElLPMe2O6n/9k="},"images":{"fallback":{"src":"/static/ec44054f6fd522cbf45b10f313888672/459d8/mountain.jpg","srcSet":"/static/ec44054f6fd522cbf45b10f313888672/fd980/mountain.jpg 900w,\\n/static/ec44054f6fd522cbf45b10f313888672/144ac/mountain.jpg 1800w,\\n/static/ec44054f6fd522cbf45b10f313888672/459d8/mountain.jpg 3600w","sizes":"(min-width: 3600px) 3600px, 100vw"},"sources":[{"srcSet":"/static/ec44054f6fd522cbf45b10f313888672/b19f4/mountain.webp 900w,\\n/static/ec44054f6fd522cbf45b10f313888672/a966b/mountain.webp 1800w,\\n/static/ec44054f6fd522cbf45b10f313888672/f2810/mountain.webp 3600w","type":"image/webp","sizes":"(min-width: 3600px) 3600px, 100vw"}]},"width":3600,"height":2700}')}}]);