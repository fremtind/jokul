"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7529],{92897:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return p},Head:function(){return d},default:function(){return u}});var r=n(47160),l=n(70079);function a(e){const t=Object.assign({p:"p",ul:"ul",li:"li",code:"code",img:"img",h2:"h2",pre:"pre",a:"a",em:"em"},(0,r.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Jøkul gir deg to hjelpemidler for å jobbe med mørkt tema i hele eller deler av løsningen din. Men hvilket skal du\nbruke når? Og hvordan?")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Oppdatert 2022.02.10: La til tips om ",l.createElement(t.code,null,"jkl"),"-klassen og oppdaterte eksempelkoden"),"\n"),"\n",l.createElement(t.p,null,'Hvis du har sett på komponentsidene i portalen den siste tiden har du sikkert merket at det har kommet et ekstra valg i eksemplene: Valget "Dark mode", under overskriften "Visning", gjør tilsynelatende det samme som valget "Invertert", under overskriften "Egenskaper", har gjort frem til nå.'),"\n",l.createElement(t.p,null,'Nøkkelen til forskjellen ligger i overskriftene: "Invertert" er en egenskap som settes på selve komponenten og kun gjelder den, mens "Dark mode" er en egenskap som settes på eksempelet og gjelder for hele området inne i eksemplet. Dette er også forskjellen på hvordan du bruker dem i utvikling.'),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/assets/blog/dark-mode-inverted.png",alt:'Valgene for "Dark mode" og "Invertert" i et komponenteksempel'})),"\n",l.createElement(t.h2,null,"Mørkt tema for moderne nettlesere"),"\n",l.createElement(t.p,null,"I moderne nettlesere er den beste løsningen for dark mode å benytte seg av attributten ",l.createElement(t.code,null,'data-theme="dark"'),". Alle komponentene i Jøkul vil automatisk bytte til mørkt tema dersom de befinner seg inne i et element med denne attributten satt. Du kan dermed enkelt sette mørkt tema på hele eller deler av løsningen du lager. Attributten endrer ingenting på selve elementet den er satt på, så du må selv velge/endre bakgrunnsfarge og skriftfarge."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-tsx"},'<body class="jkl" data-theme="dark">\n    <InfoMessageBox title="Mørkt tema">Jøkul-komponenter på denne siden vil automatisk få mørkt tema.</InfoMessageBox>\n\n    <div class="jkl" data-theme="light">\n        <InfoMessageBox title="Lyst tema">I denne delen av DOMen er det lyst tema som gjelder</InfoMessageBox>\n    </div>\n</body>\n')),"\n",l.createElement(t.p,null,"Du kan fint sette mørkt tema på kun en liten del av løsningen, og man kan også eksplisitt sette lyst tema med ",l.createElement(t.code,null,'data-theme="light"'),' på samme måte. Eksemplene i portalen er et eksempel på dette, der "Dark mode"-valget styrer ',l.createElement(t.code,null,"data-theme"),"-attributten kun på komponentvinduet. Merk deg at du bør sette ",l.createElement(t.code,null,"jkl"),"-klassen på elementet for å være\nsikret at elementer uten Jøkul-klasser får riktig farge og bakgrunnsfarge."),"\n",l.createElement(t.p,null,"Denne løsningen benytter seg av ",l.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"CSS custom properties"),", og fungerer derfor ikke i IE. I de fleste tilfeller anbefaler vi å ",l.createElement(t.em,null,"ikke")," implementere dark mode for IE, og se på tilbudet om mørkt tema som en form for ",l.createElement(t.a,{href:"https://en.wikipedia.org/wiki/Progressive_enhancement"},"progressive enhanchement"),". Om du likevel har et behov for å bruke mørkt tema på hele eller deler av løsningen din også for IE, kan du lese om dette under."),"\n",l.createElement(t.h2,null,"Mørkt tema for Internet Explorer"),"\n",l.createElement(t.p,null,"Dersom du er nødt til å implementere mørkt tema for Internet Explorer kan man altså ikke bruke den generelle løsningen over, men må i stedet styre temaet per enkelt komponent. Dette gjøres ved å sette prop'en ",l.createElement(t.code,null,"inverted")," til true. Siden dette må gjøres på hver eneste Jøkul-komponent i løsningen vil nok dette best løses ved hjelp av f.eks. en ",l.createElement(t.a,{href:"https://reactjs.org/docs/context.html"},"context")," eller ",l.createElement(t.a,{href:"https://reactjs.org/docs/render-props.html"},"render props"),"."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-tsx"},"<InfoMessageBox inverted>Denne meldingen har mørkt tema</InfoMessageBox>\n<WarningMessageBox>Denne meldingen har lyst tema</WarningMessageBox>\n")),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-tsx"},"const darkTheme = useContext(myThemeContext);\n\n<SuccessMessageBox inverted={darkTheme}>Denne meldingen bytter tema ut fra verdien i myThemeContext</SuccessMessageBox>;\n")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)};var s=n(72285),i=n(22756),m=n(95573),c=n(1634);const d=e=>{let{pageContext:t}=e;return l.createElement(i.p,{title:t.title})},p=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:i}=r;return l.createElement(c.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(m.M1,Object.assign({},o,{versions:r.versions})),l.createElement(m.w5,o),a,i&&l.createElement(s.l,{types:i}))};function u(e){return l.createElement(p,e,l.createElement(o,e))}},72285:function(e,t,n){n.d(t,{l:function(){return u}});var r=n(78217),l=n(41994),a=n(87505),o=n(70079);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),i=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},c=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},d=e=>{const t=e.target,n=t.parentElement;c(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&c(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},u=e=>{let{types:t}=e;return o.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},o.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),o.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(i):[];return o.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},r.length>0&&o.createElement(p,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return i}});var r=n(26372),l=n.n(r),a=n(49597),o=n(70079),s=n(34044);const i=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(s.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||i?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(26372),l=n.n(r),a=n(70079);const o=e=>{let{className:t,density:n,...r}=e;return a.createElement("div",{"data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,...r})}},41994:function(e,t,n){n.d(t,{Q:function(){return m}});var r=n(53484),l=n(3438),a=n(84490),o=n(26372),s=n.n(o),i=n(70079);const m=e=>{let{children:t,title:n,className:o,startExpanded:m=!1,onClick:c,...d}=e;const p=(0,l.M)("title"),u=(0,l.M)("content"),{0:k,1:g}=(0,i.useState)(m),[v]=(0,a.v)(k,{easing:"exit",timing:"expressive"});return i.createElement("div",{"data-testid":"jkl-accordion-item",...d,className:s()("jkl-accordion-item",o,{"jkl-accordion-item--expanded":k})},i.createElement("button",{id:p,className:"jkl-accordion-item__title",type:"button","aria-expanded":k,"aria-controls":u,onClick:e=>{const t=!k;g(t),c&&c(e,t)}},n,i.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})),i.createElement("div",{id:u,ref:v,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":p,hidden:!k},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var r=n(70079),l=n(41699),a=n(65174),o=n(6914),s=n(82546),i=n(39126),m=n(66169),c=n(94509);const d=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:p,rows:u,verticalAlign:k,...g}=e;return r.createElement(l.i,{fullWidth:!0,...g,ref:t},n&&r.createElement(o.R,{srOnly:!0},n),r.createElement(i.s,null,r.createElement(c.S,null,d.map(((e,t)=>r.createElement(m.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===u.length&&p&&r.createElement(c.S,null,r.createElement(s.p,{colSpan:d.length},p)),u.map(((e,t)=>r.createElement(c.S,{key:t},e.map(((e,t)=>r.createElement(s.p,{key:t,"data-th":d[t],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);