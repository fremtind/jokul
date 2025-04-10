"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5267],{65746:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return p},Head:function(){return m},default:function(){return g}});var l=t(47160),r=t(70079);function a(e){const n=Object.assign({p:"p",ul:"ul",li:"li",a:"a",img:"img",h2:"h2",code:"code",pre:"pre"},(0,l.ah)(),e.components),{Ingress:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(t,null,r.createElement(n.p,null,"Internet Explorer (IE) har vært med oss i mange år, men nå kan vi endelig si ha det bra! I denne artikkelen vil jeg\nkomme med et forslag til en implementasjon av en sperre du kan bruke i din applikasjon slik at vi kan fjerne støtten\ni Jøkul.")),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Oppdatert 2021.11.11: ",r.createElement(n.a,{href:"/preview/4363-card-interactions/blog/jokul-dropper-ie-stotte/"},"IE-støtte droppes i Jøkul"),"."),"\n"),"\n",r.createElement(n.p,null,"Med mindre du har levd under en stein har du sikkert fått med deg at ",r.createElement(n.a,{href:"https://techcommunity.microsoft.com/t5/microsoft-365-blog/microsoft-365-apps-say-farewell-to-internet-explorer-11-and/ba-p/1591666"},"støtte for IE sakte men sikkert forsvinner"),".\nEdge har vært basert på Chromium fra mars 2021 så derfor kan du også legge inn en melding om dette. Teamene må selv bestemme hva de ønsker å gjøre med Edge, men vi anbefaler alle å legge inn melding om IE. Meldingen for IE vil bli seende slik ut:"),"\n",r.createElement(n.p,null,r.createElement(n.img,{src:"/assets/blog/bye-ie.png",alt:"Bilde av IE-sperre"})),"\n",r.createElement(n.p,null,"Microsoft ",r.createElement(n.a,{href:"https://docs.microsoft.com/en-us/microsoft-edge/web-platform/ie-to-microsoft-edge-redirection"},"tilbyr funksjonalitet")," for automatisk videresending av brukere fra IE til Edge dersom nettstedet er registrert hos Microsoft som inkompatibelt med IE.\nVi i kundeklienter for privatmarkedet har tatt dette i bruk, men det ser av en eller annen grunn ikke ut som det fungerer. Du kan søke om å komme med på den listen, men jeg kan ikke love at det fungerer bra."),"\n",r.createElement(n.p,null,"Under kan du se implementasjonen av begge sperrene. Ta gjerne kontakt med meg dersom det er noe du lurer på, så skal jeg prøve å hjelpe :) Jeg kan også sende deg logo av typen SVG av Chrome, Firefox, Edge og Fremtind dersom du trenger det."),"\n",r.createElement(n.h2,null,"Oppskrift"),"\n",r.createElement(n.p,null,"Først legger du inn referanse til CSS- og JS-filene som en del av ",r.createElement(n.code,null,"<head>")," i ",r.createElement(n.code,null,"index_template.html")," eller tilsvarende:"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-html"},'<html lang="no">\n    <head>\n        {...}\n\n        <link rel="stylesheet" href="/styles/ie-melding.css" />\n        <script src="/scripts/ie-melding.js"><\/script>\n    </head>\n    <body>\n        <div id="root" class="jkl root-container">{...}</div>\n    </body>\n</html>\n')),"\n",r.createElement(n.p,null,"Og så oppretter du en JS-fil som heter ",r.createElement(n.code,null,"ie-melding.js"),":"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-js"},'const isIe = window.navigator.userAgent.match(/(MSIE|Trident)/);\n\nconst ieMelding = `\n    <header>\n        <img alt="" src="/images/fremtind.svg" />\n    </header>\n    <main>\n        <h1\n            class="title-small title-text"\n        >\n            Vennligst benytt en annen nettleser\n        </h1>\n        <p class="jkl-lead lead-text">\n            Denne løsningen støtter ikke lenger Internet Explorer av hensyn til sikkerhet.\n            Hvis du ikke har en annen nettleser installert, kan du laste ned en av disse:\n        </p>\n        <ul class="browser-list">\n            <li class="browser-list__item">\n                <a href="https://www.google.com/chrome/" title="Google Chrome">\n                    <img alt="" src="/images/chrome.svg" />\n                    <span class="jkl-link">Google Chrome</span>\n                </a>\n            </li>\n            <li class="browser-list__item">\n                <a href="https://www.mozilla.org/firefox/new/" title="Mozilla Firefox">\n                    <img alt="" src="/images/firefox.svg" />\n                    <span class="jkl-link">Mozilla Firefox</span>\n                </a>\n            </li>\n            <li class="browser-list__item">\n                <a href="https://www.microsoft.com/nb-no/edge/" class="Microsoft Edge">\n                    <img alt="" src="/images/edge.svg" />\n                    <span class="jkl-link">Microsoft Edge</span>\n                </a>\n            </li>\n        </ul>\n    </main>\n    <footer>\n        <a\n            target="_blank"\n            href="https://kundeforsikring.sparebank1.no/privat/forsikring/open/selskapsinformasjon"\n            class="jkl-link jkl-link--negative jkl-desktop-small footer-link"\n            >© Fremtind Forsikring</a\n        >\n        <a\n            target="_blank"\n            href="https://www.fremtind.no/personvern/"\n            class="jkl-link jkl-link--negative jkl-desktop-small footer-link"\n            >Personvern og vilkår for bruk av nettsiden</a\n        >\n    </footer>\n`;\n\nconst isOldEdge = window.navigator.userAgent.toLowerCase().indexOf("edge") > -1; // old MS edge\n\nconst oldEdgeMelding = `\n    <header>\n        <img alt="" src="/images/fremtind.svg" />\n    </header>\n    <main>\n        <h1 class="title-small title-text">\n            Vi ser at du bruker en utdatert nettleser\n        </h1>\n        <p class="jkl-lead lead-text">\n            Nettleseren er dataprogrammet du bruker når du besøker denne siden. Du bruker en\n            versjon av nettleseren Edge som er utdatert, og ikke lenger anses å være sikker. Denne siden vil derfor\n            ikke fungere i denne nettleseren. Vi anbefaler at du oppdaterer den eller bytter til en annen, som\n            Google Chrome eller Mozilla Firefox. Du kan laste ned siste versjon av disse nettleserne her:\n        </p>\n        <ul class="browser-list">\n            <li class="browser-list__item">\n                <a href="https://www.microsoft.com/nb-no/edge/" class="Microsoft Edge">\n                    <img alt="" src="/images/edge.svg" />\n                    <span class="jkl-link">Microsoft Edge</span>\n                </a>\n            </li>\n            <li class="browser-list__item">\n                <a href="https://www.google.com/chrome/" title="Google Chrome">\n                    <img alt="" src="/images/chrome.svg" />\n                    <span class="jkl-link">Google Chrome</span>\n                </a>\n            </li>\n            <li class="browser-list__item">\n                <a href="https://www.mozilla.org/firefox/new/" title="Mozilla Firefox">\n                    <img alt="" src="/images/firefox.svg" />\n                    <span class="jkl-link">Mozilla Firefox</span>\n                </a>\n            </li>\n        </ul>\n    </main>\n\n`;\n\nconst callback = function () {\n    if (isIe || isOldEdge) {\n        const appRoot = document.getElementById("root");\n        appRoot.classList.add("hide-app");\n\n        const ieRoot = document.getElementById("ie-melding");\n        if (isIe) {\n            ieRoot.innerHTML += ieMelding;\n        }\n        if (isOldEdge) {\n            ieRoot.innerHTML += oldEdgeMelding;\n        }\n        ieRoot.classList.add("vis-ie");\n    }\n};\n\nif (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {\n    callback();\n} else {\n    document.addEventListener("DOMContentLoaded", callback);\n}\n')),"\n",r.createElement(n.p,null,"og en CSS fil som heter ",r.createElement(n.code,null,"ie-melding.css"),":"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-css"},"body {\n    margin: 0;\n}\n\n#root.hide-app {\n    display: none !important;\n}\n\n#ie-melding {\n    height: 100vh;\n    flex-direction: column;\n}\n\n#ie-melding.vis-ie {\n    display: flex !important;\n}\n\n#ie-melding header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 81px;\n}\n\n#ie-melding.ie-melding--dnb header,\n#ie-melding.ie-melding--sb1 header {\n    border-bottom: 1px solid #b8b8b8;\n}\n\n#ie-melding main {\n    flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    max-width: 92ch;\n    min-height: 500px;\n    padding-left: 104px;\n}\n\n#ie-melding footer {\n    background-color: black;\n    min-height: 152px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#ie-melding footer .footer-link {\n    margin-right: 24px;\n    color: white;\n}\n\n#ie-melding .title-text {\n    padding-bottom: 24px;\n    padding-top: 64px;\n}\n\n#ie-melding .lead-text {\n    padding-bottom: 40px;\n}\n\n#ie-melding .browser-list {\n    padding-inline-start: 0;\n    display: flex;\n    list-style: none;\n    width: 100%;\n}\n\n#ie-melding .browser-list__item {\n    padding-right: 64px;\n}\n\n#ie-melding .browser-list__item a {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: inherit;\n    text-decoration: inherit;\n}\n\n#ie-melding .browser-list__item img {\n    height: 80px;\n    width: 80px;\n    margin-bottom: 21px;\n}\n")))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(a,e)):a(e)};var s=t(72285),o=t(22756),d=t(95573),c=t(1634);const m=e=>{let{pageContext:n}=e;return r.createElement(o.p,{title:n.title})},p=e=>{let{location:n,data:t,pageContext:l,children:a}=e;const{frontmatter:i}=t.page,{types:o}=l;return r.createElement(c.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(d.M1,Object.assign({},i,{versions:l.versions})),r.createElement(d.w5,i),a,o&&r.createElement(s.l,{types:o}))};function g(e){return r.createElement(p,e,r.createElement(i,e))}},72285:function(e,n,t){t.d(n,{l:function(){return u}});var l=t(58820),r=t(63571),a=t(87505),i=t(70079),s=t(54656);const o=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),d=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},m=(e,n)=>{const{scrollLeft:t,scrollWidth:l}=e,{clientWidth:r}=n,a=t>0,i=l-t>r;n.classList.toggle("left-shadow",a),n.classList.toggle("right-shadow",i)},p=e=>{const n=e.target,t=n.parentElement;m(n,t)},g=e=>{let{props:n}=e;const t=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&m(n,e)}}))})),l=t.current.parentElement.parentElement;n.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=n,l.map((e=>{var n,t;return[e.name?o(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?o(e.type.name):""]})))})));var l},u=e=>{let{types:n}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const l=t.props?Object.values(t.props).filter(c):[],a=t.props?Object.values(t.props).filter(d):[],o=(e=>{var n,t,l,r,a,i;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return i.createElement(r.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},o&&i.createElement(s.dn,{className:"jkl-portal-code-block"},o),l.length>0&&i.createElement(g,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(g,{props:a})))}))))}},1634:function(e,n,t){t.d(n,{M:function(){return o}});var l=t(26372),r=t.n(l),a=t(49597),i=t(70079),s=t(34044);const o=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:l}=(0,i.useContext)(s.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||o?0:.35},className:r()("jkl-portal__main",n),id:"innhold"},t)}},58820:function(e,n,t){t.d(n,{U:function(){return i}});var l=t(35250),r=t(26372),a=t.n(r);const i=e=>{let{className:n,density:t,id:r,...i}=e;return(0,l.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",n),"data-density":t,id:r,...i})}},63571:function(e,n,t){t.d(n,{Q:function(){return d}});var l=t(35250),r=t(68998),a=t(1386),i=t(26372),s=t.n(i),o=t(70079);const d=e=>{let{children:n,title:t,className:i,startExpanded:d=!1,onClick:c,id:m,...p}=e;const[g,u]=(0,o.useState)(d),[f]=(0,o.useState)((()=>d)),{detailsRef:k,summaryRef:h,contentRef:v,onSummaryClick:E}=(0,a.E)({onOpenChange:(e,n)=>{u(e),c&&c(n,e)},isExpanded:f});return(0,l.jsxs)("details",{"data-testid":"jkl-accordion-item",...p,className:s()("jkl-accordion-item",i),ref:k,id:m,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:E,ref:h,children:[t,(0,l.jsx)(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!g,bold:g})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:v,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]})}},87505:function(e,n,t){t.d(n,{w:function(){return m}});var l=t(70079),r=t(41699),a=t(65174),i=t(6914),s=t(82546),o=t(39126),d=t(66169),c=t(94509);const m=(0,l.forwardRef)(((e,n)=>{let{caption:t,columns:m,emptyTableText:p,rows:g,verticalAlign:u,...f}=e;return l.createElement(r.i,{fullWidth:!0,...f,ref:n},t&&l.createElement(i.R,{srOnly:!0},t),l.createElement(o.s,null,l.createElement(c.S,null,m.map(((e,n)=>l.createElement(d.x,{key:n,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===g.length&&p&&l.createElement(c.S,null,l.createElement(s.p,{colSpan:m.length},p)),g.map(((e,n)=>l.createElement(c.S,{key:n},e.map(((e,n)=>l.createElement(s.p,{key:n,"data-th":m[n],verticalAlign:u},e))))))))}));m.displayName="DataTable"}}]);