"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[6242],{95196:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return k},Head:function(){return p},default:function(){return g}});var r=n(47160),l=n(70079),a=n(573);function s(e){const t=Object.assign({p:"p",em:"em",ul:"ul",li:"li",h2:"h2",code:"code",a:"a",img:"img"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:s}=t;return s||o("ComponentExample",!0),n||o("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"I slutten av juni var Jøkul-teamet spredt rundtomkring på kloden, så denne gangen er det en oppsummering av både\njuni og juli.")),"\n",l.createElement(t.p,null,"Det har skjedd ting selv om det var feriesesong."),"\n",l.createElement(t.p,null,"Øyvind jobber på spreng med å ta i bruk de nyeste featurene Figma lanserte i sommer, for å gjøre brukeropplevelsen bedre for dere. Det er ikke helt klart ennå, men du kan ",l.createElement(t.em,null,"tro")," vi kommer til å si ifra når det kan brukes 🤩"),"\n",l.createElement(t.p,null,"Annet enn ",l.createElement(t.em,null,"teasers")," så kan du lese mer om dette i månedens oppsummering:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Tags har mulighet for å fjernes med en ikonknapp"),"\n",l.createElement(t.li,null,"Inputmasker for store tall og organisasjonsnummer"),"\n",l.createElement(t.li,null,"JavaScript-koden fra Jøkul er gjort tree-shakeable så appene deres blir raskere"),"\n",l.createElement(t.li,null,"Jøkul har fått en stilguide for Sass og et tydeligere API"),"\n",l.createElement(t.li,null,"Den vanlige smørbrødlista med feilrettinger og husarbeid"),"\n"),"\n",l.createElement(t.h2,null,"Tags som kan fjernes"),"\n",l.createElement(t.p,null,"Tags kan være nyttige for å vise status og metadata, men et annet scenarie de kan brukes er for å vise aktive filtere i et søk. Et filter bør kunne fjernes, og et naturlig sted å gjøre det er via en knapp på selve tagen. Det er nå mulig å gi en ",l.createElement(t.code,null,"dismissAction")," til tag-komponenten i versjon ",l.createElement(t.code,null,"2.1.0")," av ",l.createElement(t.code,null,"@fremtind/jkl-tag-react"),". Denne fungerer på en liknende måte som MessageBox."),"\n",l.createElement(s,{title:"Tag",component:a.i2,knobs:{boolProps:[{defaultValue:!0,prop:"Dismissable"}]},code:a.IB}),"\n",l.createElement(t.h2,null,"Inputmasker for store tall og organisasjonsnummer"),"\n",l.createElement(t.p,null,"Jo Emil og Kenneth har ordnet nye inputmasker og formateringsfunksjoner for henholdsvis store tall og organisasjonsnummer. Sjekk ",l.createElement(t.a,{href:"/preview/docs/farger/komponenter/formatters"},"Formatters"),"-siden for eksempler og dokumentasjon."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/assets/blog/updates/juni-juli-2022/input-mask-junjul22.gif",alt:"Skjermopptak som viser hvordan de to inputmaskene fungerer. Organisasjonsnummeret vises med tre grupper av tre siffre. For store tall er innholdet i skjemafeltet høyrejustert, og tallet vises med mellomrom som tusenskille."})),"\n",l.createElement(t.p,null,"For store tall er innholdet i skjemafelter høyrejustert. Det er for å ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2898#issuecomment-1143277238"},"unngå at innholdet hopper"),"."),"\n",l.createElement(t.h2,null,"Tree-shaking"),"\n",l.createElement("iframe",{src:"https://giphy.com/embed/UUgZDrVTZhLNiKpAbw",width:"480",height:"270",frameBorder:"0",class:"giphy-embed",allowFullScreen:!0}),"\n",l.createElement("p",null,l.createElement("a",{href:"https://giphy.com/gifs/nintendo-animal-crossing-new-horizons-UUgZDrVTZhLNiKpAbw"},"via GIPHY")),"\n",l.createElement(t.p,null,"Tree-shaking går ",l.createElement(t.em,null,"ikke")," ut på å dra i skogen for å samle greiner. Det er et begrep brukt i JavaScript-verden for å snakke om verktøy som klarer å forstå at deler av koden i et prosjekt ikke er i bruk. Verktøy med tree-shaking vil hoppe over filer som ikke eksplisitt blir nevnt, selv om de måtte ligge i samme mappe som annen kode som ",l.createElement(t.em,null,"blir")," brukt. Sluttresultatet blir en kjappere app uten en masse ubrukt kode."),"\n",l.createElement(t.p,null,"Jøkul har lenge pleid å ",l.createElement(t.em,null,"bundle")," eller slå sammen all koden i hver enkelt pakke. Fordelen med det var at man i teorien kunne sende Jøkul-kode rett i nettleseren uten å tenke på det. Ulempen er at det gjorde det umulig for verktøy å gjøre tree-shaking. Alt var jo i én fil, og den fila var jo i bruk."),"\n",l.createElement(t.p,null,"Fra og med ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2919"},"midten av juni"),", altså etter versjon 10 av core, så bundles ikke lenger JavaScripten i Jøkul. Det vil for de aller aller fleste ikke ha noen annen betydning enn at appene deres automatisk har blitt en del mindre – og dermed raskere."),"\n",l.createElement(t.h2,null,"Stilguide for Sass og tydeligere API"),"\n",l.createElement(t.p,null,"Vi har fått en ny guide: ",l.createElement(t.a,{href:"https://jokul.fremtind.no/guider/sass"},"Hvordan skrive Sass i Jøkul"),". Det er ikke forventet at alle skal kunne denne guiden på rams, men hvis du lurer på noe så er den der som et oppslagsverk."),"\n",l.createElement(t.p,null,"Vi beskriver også hva som er stabilt med tanke på semantisk versjonering. Kort oppsummert:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Hver pakke har ett ingangspunkt. Om du importerer enkeltfiler inne i pakka kan ting brekke uten forvarsel."),"\n",l.createElement(t.li,null,"Navn på Sass-variabler, funksjoner og mixins er stabile om de ikke starter med ",l.createElement(t.code,null,"_"),"."),"\n",l.createElement(t.li,null,"Alle klasser og CSS-variabler starter med ",l.createElement(t.code,null,"jkl"),", og navnet på disse er stabile."),"\n"),"\n",l.createElement(t.h2,null,"Diverse bugfikser og husarbeid"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"DatePicker er skrevet om fra bunnen av for å fikse bugs og gjøre klar til redesign (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2887"},"#2868"),")"),"\n",l.createElement(t.li,null,"Pila etter navigasjonslenker holder seg nå på linje med teksten uansett bredde (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2900"},"#2900"),")"),"\n",l.createElement(t.li,null,"Fjernet Framer Motion fra MessageBox (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2903"},"#2903"),")"),"\n",l.createElement(t.li,null,"Fjernet React Hook Form fra CookieConsent (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2906"},"#2906"),")"),"\n",l.createElement(t.li,null,"Ikke bruk rød bakgrunnsfarge på native select-meny ved valideringsfeil (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2922"},"#2922"),")"),"\n",l.createElement(t.li,null,"Select sin ",l.createElement(t.code,null,"defaultValue")," fungerer med React Hook Form (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2927"},"#2927"),")"),"\n",l.createElement(t.li,null,"Fikset typefeil i register-funksjonen med inputmasker (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2929"},"#2929"),")"),"\n",l.createElement(t.li,null,"Tab-komponenten har fått en prop for å velge hvilken fane som vises som default (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2941"},"#2941"),")"),"\n",l.createElement(t.li,null,"TextArea fungerer nå som tenkt hvis den er inni en del av siden med ",l.createElement(t.code,null,"data-compactlayout")," (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2946"},"#2946"),")"),"\n",l.createElement(t.li,null,"Portalen viser nyeste versjonsummer til pakker på komponentsider (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2951"},"#2951"),")"),"\n",l.createElement(t.li,null,"Alle komponenter skal nå ta i mot rest-props (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2953"},"#2953"),")"),"\n",l.createElement(t.li,null,"Select har fått et par forbedringer i opplevelsen for skjermleserbrukere (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2955"},"#2955"),", ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2972"},"#2972"),")"),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"BaseRadioButton")," er en ny komponent som kan brukes i sjeldne scenarier hvor du har radioknapper spredt rundt i dokumentstrukturen (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2956"},"#2956"),")"),"\n",l.createElement(t.li,null,"IconButton har fått en outline ved tastaturfokus (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2973"},"#2973"),")"),"\n"),"\n",l.createElement(t.h2,null,"Takk"),"\n",l.createElement(t.p,null,"Takk til alle som har hjulpet til i sommer! En stor takk også til alle som er med på designsystemforum!"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"JoMs"),"\n",l.createElement(t.li,null,"henrikhermansen"),"\n",l.createElement(t.li,null,"kennidenni"),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(s,e)):s(e)};function o(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=n(72285),c=n(22756),u=n(95573),d=n(1634);const p=e=>{let{pageContext:t}=e;return l.createElement(c.p,{title:t.title})},k=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:s}=n.page,{types:i}=r;return l.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(u.M1,Object.assign({},s,{versions:r.versions})),l.createElement(u.w5,s),a,i&&l.createElement(m.l,{types:i}))};function g(e){return l.createElement(k,e,l.createElement(i,e))}},573:function(e,t,n){n.d(t,{IB:function(){return o},Wo:function(){return a},i2:function(){return i}});var r=n(70079),l=n(8102);const a={boolProps:["Dismissable"]},s=e=>{let{boolValues:t,variant:n}=e;const{0:a,1:s}=(0,r.useState)(!1),i=(e=>{switch(e){case"Info":return l._1;case"Success":return l.rD;case"Warning":return l.wq;case"Error":return l.nS;default:return l.Vp}})(n),o=null!=t&&t.Dismissable?{onClick:()=>{s(!0),setTimeout((()=>s(!1)),2600)},label:"Fjern filter"}:void 0;return a?null:r.createElement(i,{className:"jkl-spacing-2xs--right jkl-spacing-2xs--top",dismissAction:o},(e=>{switch(e){case"Info":return"Info";case"Success":return"Suksess";case"Warning":return"Advarsel";case"Error":return"Feil";default:return"Emne"}})(n))},i=e=>{let{boolValues:t}=e;return r.createElement("div",null,r.createElement(s,{boolValues:t}),r.createElement(s,{boolValues:t,variant:"Info"}),r.createElement(s,{boolValues:t,variant:"Success"}),r.createElement(s,{boolValues:t,variant:"Warning"}),r.createElement(s,{boolValues:t,variant:"Error"}))},o=e=>{let{boolValues:t}=e;return'\n    <Tag className="jkl-spacing-2xs--right jkl-spacing-2xs--top"'+(null!=t&&t.Dismissable?'{\n        onClick: () => setDismissed(true),\n        label: "Fjern filter",\n    }':"")+'>Emne</Tag>\n    <InfoTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top"'+(null!=t&&t.Dismissable?'{\n        onClick: () => setDismissed(true),\n        label: "Fjern filter",\n    }':"")+'>Info</InfoTag>\n    <SuccessTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top"'+(null!=t&&t.Dismissable?'{\n        onClick: () => setDismissed(true),\n        label: "Fjern filter",\n    }':"")+'>Suksess</SuccessTag>\n    <WarningTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top"'+(null!=t&&t.Dismissable?'{\n        onClick: () => setDismissed(true),\n        label: "Fjern filter",\n    }':"")+'>Advarsel</WarningTag>\n    <ErrorTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top"'+(null!=t&&t.Dismissable?'{\n        onClick: () => setDismissed(true),\n        label: "Fjern filter",\n    }':"")+">Feil</ErrorTag>\n"}},8102:function(e,t,n){n.d(t,{Vp:function(){return m},_1:function(){return c},nS:function(){return u},rD:function(){return p},wq:function(){return d}});var r=n(10188),l=n(95176),a=n(26372),s=n.n(a),i=n(70079);function o(e){const t=t=>{let{className:n,density:a,dismissAction:o,children:m,...c}=t;return i.createElement("span",Object.assign({className:s()("jkl-tag",{"jkl-tag--info":"info"===e,"jkl-tag--error":"error"===e,"jkl-tag--warning":"warning"===e,"jkl-tag--success":"success"===e},n),"data-density":a},c),m,o&&i.createElement(r.h,{className:"jkl-tag__dismiss-action",density:a,title:o.label,onClick:o.onClick,onFocus:o.onFocus,onBlur:o.onBlur},i.createElement(l.T,{variant:"small",bold:!0})))};return t.displayName=function(e){switch(e){case"info":return"InfoTag";case"error":return"ErrorTag";case"warning":return"WarningTag";case"success":return"SuccessTag";default:return"Tag"}}(e),t}const m=o(),c=o("info"),u=o("error"),d=o("warning"),p=o("success")},72285:function(e,t,n){n.d(t,{l:function(){return k}});var r=n(78217),l=n(41994),a=n(87505),s=n(70079),i=n(54656);const o=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,s=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",s)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return s.createElement("section",{className:"mb-104 jkl-portal-paragraph"},s.createElement("h2",{className:"heading-1 mt-104"},"React API"),s.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(c):[],a=n.props?Object.values(n.props).filter(m):[],o=(e=>{var t,n,r,l,a,s;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(s=e.tags)&&void 0!==s&&s.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return s.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&s.createElement(i.dn,{className:"jkl-portal-code-block"},o),r.length>0&&s.createElement(p,{props:r}),a.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return o}});var r=n(26372),l=n.n(r),a=n(49597),s=n(70079),i=n(34044);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,s.useContext)(i.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||o?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return s}});var r=n(26372),l=n.n(r),a=n(70079);const s=e=>{let{className:t,density:n,id:r,...s}=e;return a.createElement("section",{role:"group","data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,id:r,...s})}},41994:function(e,t,n){n.d(t,{Q:function(){return o}});var r=n(53484),l=n(1386),a=n(26372),s=n.n(a),i=n(70079);const o=e=>{let{children:t,title:n,className:a,startExpanded:o=!1,onClick:m,id:c,...u}=e;const{0:d,1:p}=(0,i.useState)(o),{0:k}=(0,i.useState)((()=>o)),{detailsRef:g,summaryRef:f,contentRef:h,onSummaryClick:E}=(0,l.E)({onOpenChange:(e,t)=>{p(e),m&&m(t,e)},isExpanded:k});return i.createElement("details",{"data-testid":"jkl-accordion-item",...u,className:s()("jkl-accordion-item",a),ref:g,id:c},i.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:E,ref:f},n,i.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!d,bold:d})),i.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return u}});var r=n(70079),l=n(41699),a=n(65174),s=n(6914),i=n(82546),o=n(39126),m=n(66169),c=n(94509);const u=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:d,rows:p,verticalAlign:k,...g}=e;return r.createElement(l.i,{fullWidth:!0,...g,ref:t},n&&r.createElement(s.R,{srOnly:!0},n),r.createElement(o.s,null,r.createElement(c.S,null,u.map(((e,t)=>r.createElement(m.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===p.length&&d&&r.createElement(c.S,null,r.createElement(i.p,{colSpan:u.length},d)),p.map(((e,t)=>r.createElement(c.S,{key:t},e.map(((e,t)=>r.createElement(i.p,{key:t,"data-th":u[t],verticalAlign:k},e))))))))}));u.displayName="DataTable"}}]);