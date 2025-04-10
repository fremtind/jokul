"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5267],{58115:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return u},Head:function(){return p},default:function(){return g}});var l=t(64717),r=t(92379);function a(e){const n=Object.assign({p:"p",ul:"ul",li:"li",a:"a",img:"img",h2:"h2",code:"code",pre:"pre"},(0,l.ah)(),e.components),{Ingress:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(t,null,r.createElement(n.p,null,"Internet Explorer (IE) har vært med oss i mange år, men nå kan vi endelig si ha det bra! I denne artikkelen vil jeg\nkomme med et forslag til en implementasjon av en sperre du kan bruke i din applikasjon slik at vi kan fjerne støtten\ni Jøkul.")),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Oppdatert 2021.11.11: ",r.createElement(n.a,{href:"/preview/4503-button-group/blog/jokul-dropper-ie-stotte/"},"IE-støtte droppes i Jøkul"),"."),"\n"),"\n",r.createElement(n.p,null,"Med mindre du har levd under en stein har du sikkert fått med deg at ",r.createElement(n.a,{href:"https://techcommunity.microsoft.com/t5/microsoft-365-blog/microsoft-365-apps-say-farewell-to-internet-explorer-11-and/ba-p/1591666"},"støtte for IE sakte men sikkert forsvinner"),".\nEdge har vært basert på Chromium fra mars 2021 så derfor kan du også legge inn en melding om dette. Teamene må selv bestemme hva de ønsker å gjøre med Edge, men vi anbefaler alle å legge inn melding om IE. Meldingen for IE vil bli seende slik ut:"),"\n",r.createElement(n.p,null,r.createElement(n.img,{src:"/assets/blog/bye-ie.png",alt:"Bilde av IE-sperre"})),"\n",r.createElement(n.p,null,"Microsoft ",r.createElement(n.a,{href:"https://docs.microsoft.com/en-us/microsoft-edge/web-platform/ie-to-microsoft-edge-redirection"},"tilbyr funksjonalitet")," for automatisk videresending av brukere fra IE til Edge dersom nettstedet er registrert hos Microsoft som inkompatibelt med IE.\nVi i kundeklienter for privatmarkedet har tatt dette i bruk, men det ser av en eller annen grunn ikke ut som det fungerer. Du kan søke om å komme med på den listen, men jeg kan ikke love at det fungerer bra."),"\n",r.createElement(n.p,null,"Under kan du se implementasjonen av begge sperrene. Ta gjerne kontakt med meg dersom det er noe du lurer på, så skal jeg prøve å hjelpe :) Jeg kan også sende deg logo av typen SVG av Chrome, Firefox, Edge og Fremtind dersom du trenger det."),"\n",r.createElement(n.h2,null,"Oppskrift"),"\n",r.createElement(n.p,null,"Først legger du inn referanse til CSS- og JS-filene som en del av ",r.createElement(n.code,null,"<head>")," i ",r.createElement(n.code,null,"index_template.html")," eller tilsvarende:"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-html"},'<html lang="no">\n    <head>\n        {...}\n\n        <link rel="stylesheet" href="/styles/ie-melding.css" />\n        <script src="/scripts/ie-melding.js"><\/script>\n    </head>\n    <body>\n        <div id="root" class="jkl root-container">{...}</div>\n    </body>\n</html>\n')),"\n",r.createElement(n.p,null,"Og så oppretter du en JS-fil som heter ",r.createElement(n.code,null,"ie-melding.js"),":"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-js"},'const isIe = window.navigator.userAgent.match(/(MSIE|Trident)/);\n\nconst ieMelding = `\n    <header>\n        <img alt="" src="/images/fremtind.svg" />\n    </header>\n    <main>\n        <h1\n            class="title-small title-text"\n        >\n            Vennligst benytt en annen nettleser\n        </h1>\n        <p class="jkl-lead lead-text">\n            Denne løsningen støtter ikke lenger Internet Explorer av hensyn til sikkerhet.\n            Hvis du ikke har en annen nettleser installert, kan du laste ned en av disse:\n        </p>\n        <ul class="browser-list">\n            <li class="browser-list__item">\n                <a href="https://www.google.com/chrome/" title="Google Chrome">\n                    <img alt="" src="/images/chrome.svg" />\n                    <span class="jkl-link">Google Chrome</span>\n                </a>\n            </li>\n            <li class="browser-list__item">\n                <a href="https://www.mozilla.org/firefox/new/" title="Mozilla Firefox">\n                    <img alt="" src="/images/firefox.svg" />\n                    <span class="jkl-link">Mozilla Firefox</span>\n                </a>\n            </li>\n            <li class="browser-list__item">\n                <a href="https://www.microsoft.com/nb-no/edge/" class="Microsoft Edge">\n                    <img alt="" src="/images/edge.svg" />\n                    <span class="jkl-link">Microsoft Edge</span>\n                </a>\n            </li>\n        </ul>\n    </main>\n    <footer>\n        <a\n            target="_blank"\n            href="https://kundeforsikring.sparebank1.no/privat/forsikring/open/selskapsinformasjon"\n            class="jkl-link jkl-link--negative jkl-desktop-small footer-link"\n            >© Fremtind Forsikring</a\n        >\n        <a\n            target="_blank"\n            href="https://www.fremtind.no/personvern/"\n            class="jkl-link jkl-link--negative jkl-desktop-small footer-link"\n            >Personvern og vilkår for bruk av nettsiden</a\n        >\n    </footer>\n`;\n\nconst isOldEdge = window.navigator.userAgent.toLowerCase().indexOf("edge") > -1; // old MS edge\n\nconst oldEdgeMelding = `\n    <header>\n        <img alt="" src="/images/fremtind.svg" />\n    </header>\n    <main>\n        <h1 class="title-small title-text">\n            Vi ser at du bruker en utdatert nettleser\n        </h1>\n        <p class="jkl-lead lead-text">\n            Nettleseren er dataprogrammet du bruker når du besøker denne siden. Du bruker en\n            versjon av nettleseren Edge som er utdatert, og ikke lenger anses å være sikker. Denne siden vil derfor\n            ikke fungere i denne nettleseren. Vi anbefaler at du oppdaterer den eller bytter til en annen, som\n            Google Chrome eller Mozilla Firefox. Du kan laste ned siste versjon av disse nettleserne her:\n        </p>\n        <ul class="browser-list">\n            <li class="browser-list__item">\n                <a href="https://www.microsoft.com/nb-no/edge/" class="Microsoft Edge">\n                    <img alt="" src="/images/edge.svg" />\n                    <span class="jkl-link">Microsoft Edge</span>\n                </a>\n            </li>\n            <li class="browser-list__item">\n                <a href="https://www.google.com/chrome/" title="Google Chrome">\n                    <img alt="" src="/images/chrome.svg" />\n                    <span class="jkl-link">Google Chrome</span>\n                </a>\n            </li>\n            <li class="browser-list__item">\n                <a href="https://www.mozilla.org/firefox/new/" title="Mozilla Firefox">\n                    <img alt="" src="/images/firefox.svg" />\n                    <span class="jkl-link">Mozilla Firefox</span>\n                </a>\n            </li>\n        </ul>\n    </main>\n\n`;\n\nconst callback = function () {\n    if (isIe || isOldEdge) {\n        const appRoot = document.getElementById("root");\n        appRoot.classList.add("hide-app");\n\n        const ieRoot = document.getElementById("ie-melding");\n        if (isIe) {\n            ieRoot.innerHTML += ieMelding;\n        }\n        if (isOldEdge) {\n            ieRoot.innerHTML += oldEdgeMelding;\n        }\n        ieRoot.classList.add("vis-ie");\n    }\n};\n\nif (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {\n    callback();\n} else {\n    document.addEventListener("DOMContentLoaded", callback);\n}\n')),"\n",r.createElement(n.p,null,"og en CSS fil som heter ",r.createElement(n.code,null,"ie-melding.css"),":"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-css"},"body {\n    margin: 0;\n}\n\n#root.hide-app {\n    display: none !important;\n}\n\n#ie-melding {\n    height: 100vh;\n    flex-direction: column;\n}\n\n#ie-melding.vis-ie {\n    display: flex !important;\n}\n\n#ie-melding header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 81px;\n}\n\n#ie-melding.ie-melding--dnb header,\n#ie-melding.ie-melding--sb1 header {\n    border-bottom: 1px solid #b8b8b8;\n}\n\n#ie-melding main {\n    flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    max-width: 92ch;\n    min-height: 500px;\n    padding-left: 104px;\n}\n\n#ie-melding footer {\n    background-color: black;\n    min-height: 152px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#ie-melding footer .footer-link {\n    margin-right: 24px;\n    color: white;\n}\n\n#ie-melding .title-text {\n    padding-bottom: 24px;\n    padding-top: 64px;\n}\n\n#ie-melding .lead-text {\n    padding-bottom: 40px;\n}\n\n#ie-melding .browser-list {\n    padding-inline-start: 0;\n    display: flex;\n    list-style: none;\n    width: 100%;\n}\n\n#ie-melding .browser-list__item {\n    padding-right: 64px;\n}\n\n#ie-melding .browser-list__item a {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: inherit;\n    text-decoration: inherit;\n}\n\n#ie-melding .browser-list__item img {\n    height: 80px;\n    width: 80px;\n    margin-bottom: 21px;\n}\n")))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(a,e)):a(e)};var o=t(75482),s=t(96036),c=t(59001),d=t(65458),m=t(79379);const p=e=>{let{pageContext:n}=e;return r.createElement(s.p,{title:n.title})},u=e=>{let{location:n,data:t,pageContext:l,children:a}=e;const{frontmatter:i}=t.page,{types:s}=l;return r.createElement(m.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(d.M1,Object.assign({},i,{versions:l.versions})),n.pathname.includes("komponenter")&&r.createElement(c.c,{variant:"komponent",component:i.title}),r.createElement(d.w5,i),a,s&&r.createElement(o.l,{types:s}))};function g(e){return r.createElement(u,e,r.createElement(i,e))}},75482:function(e,n,t){t.d(n,{l:function(){return g}});var l=t(96845),r=t(41162),a=t(74797),i=t(92379),o=t(25329);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},d=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},m=(e,n)=>{const{scrollLeft:t,scrollWidth:l}=e,{clientWidth:r}=n,a=t>0,i=l-t>r;n.classList.toggle("left-shadow",a),n.classList.toggle("right-shadow",i)},p=e=>{const n=e.target,t=n.parentElement;m(n,t)},u=e=>{let{props:n}=e;const t=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&m(n,e)}}))})),l=t.current.parentElement.parentElement;n.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=n,l.map((e=>{var n,t;return[e.name?s(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?s(e.type.name):""]})))})));var l},g=e=>{let{types:n}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const l=t.props?Object.values(t.props).filter(d):[],a=t.props?Object.values(t.props).filter(c):[],s=(e=>{var n,t,l,r,a,i;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return i.createElement(r.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),l.length>0&&i.createElement(u,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(u,{props:a})))}))))}},59001:function(e,n,t){t.d(n,{c:function(){return o}});var l=t(48467),r=t(58990),a=t(92379),i=t(25329);const o=e=>{let{variant:n,component:t}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(r.U,null),a.createElement(i.nv,null,s[n].text)),a.createElement(l.r,{href:s[n].link+"+<"+t+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,n,t){t.d(n,{M:function(){return s}});var l=t(80324),r=t.n(l),a=t(24157),i=t(92379),o=t(69215);const s=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:l}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",n),id:"innhold"},t)}},96845:function(e,n,t){t.d(n,{U:function(){return s}});var l=t(99767),r=t(651),a=t(80324),i=t.n(a);const o=["className","density","id"],s=e=>{let{className:n,density:t,id:a}=e,s=(0,l.Z)(e,o);return(0,r.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:i()("jkl-accordion",n),"data-density":t,id:a},s))}},41162:function(e,n,t){t.d(n,{Q:function(){return m}});var l=t(99767),r=t(651),a=t(42054),i=t(95020),o=t(80324),s=t.n(o),c=t(92379);const d=["children","title","className","startExpanded","onClick","id"],m=e=>{let{children:n,title:t,className:o,startExpanded:m=!1,onClick:p,id:u}=e,g=(0,l.Z)(e,d);const[f,k]=(0,c.useState)(m),[h]=(0,c.useState)((()=>m)),{detailsRef:v,summaryRef:b,contentRef:E,onSummaryClick:j}=(0,i.E)({onOpenChange:(e,n)=>{k(e),p&&p(n,e)},isExpanded:h});return(0,r.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},g,{className:s()("jkl-accordion-item",o),ref:v,id:u,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:b,children:[t,(0,r.jsx)(a.K,{className:"jkl-accordion-item__arrow",pointingDown:!f,bold:f})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]}))}},58990:function(e,n,t){t.d(n,{U:function(){return d}});var l=t(92379),r=t(55650),a=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const d=e=>l.createElement(r.J,((e,n)=>{for(var t in n||(n={}))o.call(n,t)&&c(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&c(e,t,n[t]);return e})({},e),"");d.displayName="QuestionIcon"},74797:function(e,n,t){t.d(n,{w:function(){return v}});var l=t(92379),r=t(94207),a=t(49309),i=t(36774),o=t(64081),s=t(64483),c=t(42104),d=t(98746),m=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,h=(e,n,t)=>n in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const v=(0,l.forwardRef)(((e,n)=>{var t,m=e,{caption:v,columns:b,emptyTableText:E,rows:j,verticalAlign:w}=m,y=((e,n)=>{var t={};for(var l in e)f.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&g)for(var l of g(e))n.indexOf(l)<0&&k.call(e,l)&&(t[l]=e[l]);return t})(m,["caption","columns","emptyTableText","rows","verticalAlign"]);return l.createElement(r.i,(t=((e,n)=>{for(var t in n||(n={}))f.call(n,t)&&h(e,t,n[t]);if(g)for(var t of g(n))k.call(n,t)&&h(e,t,n[t]);return e})({fullWidth:!0},y),p(t,u({ref:n}))),v&&l.createElement(i.R,{srOnly:!0},v),l.createElement(s.s,null,l.createElement(d.S,null,b.map(((e,n)=>l.createElement(c.x,{key:n,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===j.length&&E&&l.createElement(d.S,null,l.createElement(o.p,{colSpan:b.length},E)),j.map(((e,n)=>l.createElement(d.S,{key:n},e.map(((e,n)=>l.createElement(o.p,{key:n,"data-th":b[n],verticalAlign:w},e))))))))}));v.displayName="DataTable"}}]);