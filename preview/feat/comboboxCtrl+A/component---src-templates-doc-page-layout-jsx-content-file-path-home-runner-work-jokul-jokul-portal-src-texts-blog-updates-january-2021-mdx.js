"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9740],{25873:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return d},Head:function(){return u},default:function(){return p}});var l=n(47160),r=n(70079);function a(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"Nytt år, nye muligheter. Så med det så justerte vi litt på oppdateringspostene, med vilje eller ei, kommer nå januar-oppdateringen etter januar er ferdig. Det går stadig ny kode ut i produksjon i ulike prosjekt som bruker Jøkul, så endelig begynner vi å se fruktene helt ute i PROD av alt arbeidet som er lagt ned i Jøkul. Det arbeides videre med universell utforming, både på komponenter og prosess nivå. Det forventes også nå som flere klienter er ute i produksjon at Jøkul kommer til å få en del nye komponenter og justetering på eksisterende ut i fra behovene til klientene i produksjon."),"\n",r.createElement(t.h2,null,"🌱 Releaser"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Arbeidet med UU går videre, blant annet med flere seksjoner fra ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1705"},"denne PR"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"ToggleSlider fikk et løft for ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1741"},"skjerlesere")),"\n",r.createElement(t.li,null,"Datepicker fikk fikset litt ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1745"},"referanse trøbbel")),"\n"),"\n"),"\n",r.createElement(t.li,null,"Select fikk forwardRef, som betyr ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1689"},"breaking change"),", i praksis er det bare å oppdatere med mindre du gjør bruker referanser inn i select-komponenten"),"\n",r.createElement(t.li,null,"NavLink kan nå også peke ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1733"},"bakover")),"\n",r.createElement(t.li,null,"ToggleSlider fikk også et ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1751"},"visuelt løft")," og tar nå litt mer plass og er lettere å bruke"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1781"},"Feedback")," er blitt skrevet om og har nå litt subtil bevegelse i seg og støtter custom tilbakemelding basert på hva brukeren svarte"),"\n",r.createElement(t.li,null,"Ny ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1807"},"mixin")," for å gjøre det enklere for klienter å ta ibruk keyboard-navigasjon-stil som Jøkul gjør"),"\n",r.createElement(t.li,null,"Button fikk løst en ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1784"},"bug"),", anbefaler ALLE å oppgradere til nyeste versjon asap"),"\n"),"\n",r.createElement(t.h2,null,"📰 Oppdateringer"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Dokumentasjon av ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1765"},"animasjon")," er på plass"),"\n",r.createElement(t.li,null,"Litt mer utfyllende tekst om ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1771/files"},"språk og tone")),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},o=n(72285),s=n(22756),c=n(95573),m=n(1634);const u=e=>{let{pageContext:t}=e;return r.createElement(s.p,{title:t.title})},d=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:i}=n.page,{types:s}=l;return r.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(c.M1,Object.assign({},i,{versions:l.versions})),r.createElement(c.w5,i),a,s&&r.createElement(o.l,{types:s}))};function p(e){return r.createElement(d,e,r.createElement(i,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var l=n(78217),r=n(41994),a=n(87505),i=n(70079),o=n(54656);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,i=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},k=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,l,r,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),l.length>0&&i.createElement(p,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var l=n(26372),r=n.n(l),a=n(49597),i=n(70079),o=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return i}});var l=n(26372),r=n.n(l),a=n(70079);const i=e=>{let{className:t,density:n,...l}=e;return a.createElement("div",{"data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,...l})}},41994:function(e,t,n){n.d(t,{Q:function(){return c}});var l=n(53484),r=n(3438),a=n(84490),i=n(26372),o=n.n(i),s=n(70079);const c=e=>{let{children:t,title:n,className:i,startExpanded:c=!1,onClick:m,...u}=e;const d=(0,r.M)("title"),p=(0,r.M)("content"),{0:k,1:f}=(0,s.useState)(c),[g]=(0,a.v)(k,{easing:"exit",timing:"expressive"});return s.createElement("div",{"data-testid":"jkl-accordion-item",...u,className:o()("jkl-accordion-item",i,{"jkl-accordion-item--expanded":k})},s.createElement("button",{id:d,className:"jkl-accordion-item__title",type:"button","aria-expanded":k,"aria-controls":p,onClick:e=>{const t=!k;f(t),m&&m(e,t)}},n,s.createElement(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})),s.createElement("div",{id:p,ref:g,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":d,hidden:!k},s.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return u}});var l=n(70079),r=n(41699),a=n(65174),i=n(6914),o=n(82546),s=n(39126),c=n(66169),m=n(94509);const u=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:d,rows:p,verticalAlign:k,...f}=e;return l.createElement(r.i,{fullWidth:!0,...f,ref:t},n&&l.createElement(i.R,{srOnly:!0},n),l.createElement(s.s,null,l.createElement(m.S,null,u.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&d&&l.createElement(m.S,null,l.createElement(o.p,{colSpan:u.length},d)),p.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(o.p,{key:t,"data-th":u[t],verticalAlign:k},e))))))))}));u.displayName="DataTable"}}]);