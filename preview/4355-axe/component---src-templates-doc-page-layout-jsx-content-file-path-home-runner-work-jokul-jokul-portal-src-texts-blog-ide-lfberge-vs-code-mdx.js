"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2168],{48131:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return d},default:function(){return p}});var r=n(47160),l=n(70079);function a(e){const t=Object.assign({p:"p",a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",pre:"pre",h3:"h3"},(0,r.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"For å skrive kode trenger vi noe å skrive kode i, for de fleste av oss utviklere betyr det en IDE. Og i mitt\ntilfelle har det vært ",l.createElement(t.a,{href:"https://code.visualstudio.com/"},"VSCode")," de siste ca 5 årene. I en Fremtindsk deleånd, skal\njeg prøve å dele noe av det jeg gjør for å customize min VSCode.")),"\n",l.createElement(t.p,null,"Litt bakgrunn først, VSCode er utviklet av et lite amerikansk firma Microsoft. Den startet livet sitt som en liten enkel editor for Azure, men etterhvert ble den såpass komplett at Microsoft stappet den inn i et Electron skall og begynte å shippe den som en desktop app også. Så i bunn så bygger den på webteknologi, typescript, html og css. Grunntanken er en lettvekst teksteditor med støtte for plugins for å bygge IDEen du trenger. Liten aside, VSCode er på god vei tilbake til weben, feks ",l.createElement(t.a,{href:"https://codesandbox.io"},"CodeSanbox")," bruker Monaco (grunnlaget til VSCode) og mye tyder på at Github Codespaces blir VSCode (med litt ekstra snacks) som skytjeneste."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Prøv ",l.createElement(t.code,null,"ctrl+shift+I"),"."),"\n"),"\n",l.createElement(t.h2,null,"Min IDE"),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/assets/blog/ide/vs-code-1.png",alt:""})),"\n",l.createElement(t.p,null,"La oss starte med det obligatoriske bilde. Jeg bruker ",l.createElement(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=jolaleye.horizon-theme-vscode"},"Horizon")," som theme. ",l.createElement(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=arcticicestudio.nord-visual-studio-code"},"Nord")," og ",l.createElement(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=dustinsanders.an-old-hope-theme-vscode"},"An Old Hope Theme")," er også i rotasjonen. For ikoner i explorer-taben bruker jeg ",l.createElement(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons"},"vscode-icons"),"."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Kodeblokkene her referer til settings.json fila du finner ved ",l.createElement(t.code,null,"ctrl + p")," og Settings(JSON)"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-json"},'"workbench.colorTheme": "Horizon",\n"workbench.iconTheme": "vscode-icons",\n')),"\n",l.createElement(t.p,null,"Annet visuelt jeg har tweeket på er fonten, ",l.createElement(t.a,{href:"https://github.com/tonsky/FiraCode"},"Fira Code")," med font ligatures og ",l.createElement(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2"},"Brackets Pair Colorizer 2")," som fargelegger tilhørende paranteser."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-json"},'"editor.fontFamily": "Fira Code Retina",\n"editor.fontLigatures": true,\n"terminal.integrated.fontFamily": "Fira Code Retina",\n')),"\n",l.createElement(t.p,null,"Ellers av opinionated ting jeg har gjort med utsenede er å flytte hele aktivitetsbaren til høyre. Jeg toggler den inn og ut (",l.createElement(t.code,null,"ctrl + b"),") hundrevis av ganger hver dag, og når den er der så flytter ikke koden på seg, imotsetning til når den er til venstre."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-json"},'"workbench.sideBar.location": "right"\n')),"\n",l.createElement(t.p,null,"Som en av de som lider av ",l.createElement(t.a,{href:"https://bundlephobia.com/"},"bundlephobia")," så har jeg ",l.createElement(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost"},"Import Cost"),", som legger til størrelsen på importen i grønntekst etter importen. Desuten driver ",l.createElement(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"},"GitLens")," å strør litt om seg i UIet med info om repositoryet. Den er også ganske fin til å visualisere git historiken iforhold til den innebygde i VSCode, dog ikke i nærheten av Intellij sin fantastiske git merge editor sak."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Prøv ",l.createElement(t.code,null,"ctrl + shift + p")," og skriv ",l.createElement(t.code,null,"git")," så ser du alle mulighetene GitLens tilbyr"),"\n"),"\n",l.createElement(t.p,null,"Jeg setter veldig pris på det minimalistiske utrykket, jeg vil at IDEen ikke skal være i veien for koden. Så aktivitetsbaren går vekk når den ikke trengs (",l.createElement(t.code,null,"ctrl + b"),"), terminalen går vekk med ",l.createElement(t.code,null,"ctrl + shift \\"),". Og alt er modifisertbart, så om du kommer fra en annen IDE, så finnes det sannsynligvis en keymap som gjør at du kan bruke hurtigtastene du er vant med, eller du kan enkelt lage din egen. Vim og Emacs er støttet også om man er en sånn en, ellers så anbefaller jeg å skrive ut denne ",l.createElement(t.a,{href:"https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf"},"VSCode Cheet Sheet")," og begynne å bruke mest mulig at keyboardet isteden for musa. Og gå til innkjøp av et ordentlig keyboard (just saying, hvor mange ganger klikker du ikke på tastaturet ditt iløpet av en dag...)."),"\n",l.createElement(t.h2,null,"Tips og triks"),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"ctrl + p"),", om ikke du vil lære noen shortcuts, lær hvertfall denne. Der har du tilgang til mer eller mindre alt VSCode kan gjøre. Den starter med hurtig åpning av filer."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/assets/blog/ide/file.png",alt:""})),"\n",l.createElement(t.p,null,"Her kan du søke og åpne filer fra det åpne prosjektet ditt, og skriver du inn ",l.createElement(t.code,null,">")," så kommer du inn i ",l.createElement(t.code,null,"Command palette"),". Evt ",l.createElement(t.code,null,"ctrl + shift + p")," for å gå dit direkte. Det er utgangspunktet for det meste av det kule i VSCode. Bli venn med Command Palette! Husker du ikke hotkeys for operasjonen du vil gjøre, så ligger den her, og lister ut hva hotkeysa er til neste gang du trenger å gjøre den operasjonen."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/assets/blog/ide/command-palett.png",alt:""})),"\n",l.createElement(t.h3,null,"Flere prosjekt"),"\n",l.createElement(t.p,null,"De fleste av oss jobber vel fort vekk med mer enn et prosjekt, så ",l.createElement(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager"},"Project Manager")," er helt essensiell for meg. ",l.createElement(t.code,null,"alt + shift + p")," gir meg en liste av mine prosjekter og kan enkelt hoppe mellom de. For de som sliter med å skille prosjekt fra hverandre, så kan det være smart å sette ulike themes per prosjekt, ved å sette i workspace settings.json isteden for den globale. Eventuel ",l.createElement(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock"},"Peacock")," løser samme problem på en litt annen måte."),"\n",l.createElement(t.h3,null,"Snippets"),"\n",l.createElement(t.p,null,"Snippets er forkortelser for ting du ofte skriver. Feks ",l.createElement(t.code,null,"imr")," blir til ",l.createElement(t.code,null,"import React from 'react';"),", skriv forkortelsen og tab eller enter for å ekspandere teksten. Du kan skrive disse selv, feks jeg har ",l.createElement(t.code,null,"jklhl")," som lager ",l.createElement(t.code,null,'<h$1 className=\\"title-large\\">$2</h$1>'),", ",l.createElement(t.code,null,"$1")," er der cursoren starter, tab tar meg til ",l.createElement(t.code,null,"$2"),". Hvis du vil ha min Jøkul snippets, så ligger de som en Gist på min ",l.createElement(t.a,{href:"https://gist.github.com/lfbergee/b4c928728b1e736ca111a82ec064bc28"},"github"),", ",l.createElement(t.code,null,"ctrl + shift + p")," ",l.createElement(t.code,null,"Configure User Snippets")," og lag en ny snippets vil med det scopet du syns er fornuftig."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/assets/blog/ide/animation.gif",alt:""})),"\n",l.createElement(t.p,null,"Du kan også laste ned andres snippets, feks ",l.createElement(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"},"denne")," for react, graphql og javascript. Hvis du mister autocomplete, så du har skrevet inn ",l.createElement(t.code,null,"imr"),", men listen med valg er borte, sett cursoren på slutten av ordet og trykk ",l.createElement(t.code,null,"ctrl + space"),", så får du forslagslista tilbake."),"\n",l.createElement(t.h3,null,"One more thing"),"\n",l.createElement(t.p,null,"Vel egentlig så er det en haug flere ting. Eslint-integrasjon, Prettier som kodeformaterer, formater kun endra linjer(ny funksjonalitet i 1.49!!), Jest-integrasjon, fornuftig git-integrasjon, LiveShare, IntelliCode, Quokka..\nMen for å avslutte med en siste liten sak, ",l.createElement(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker"},"Code Spell Check"),", med den så kan jeg lure de fleste med at jeg faktisk kan skrive på engelsk."),"\n",l.createElement(t.h2,null,"Oppsummering"),"\n",l.createElement(t.p,null,"Men litt av poenget med VSCode sånn jeg ser det, er å vokse inn i IDEen din. Du må installere en god del plugins for å få en komplett opplevelse, mens andre alternativ kommer ferdig ut av boksen. Men det gjør også at du i din takt lærer deg funksjoner, legger til plugins som løser dine problem, isteden for å fullstendig overvelde deg med alle funksjonene med en gang. For Java utvikling så har jeg fortsatt ikke kommet i mål med VSCode, det blir litt tungt og kronglete iforhold til Intellij, men for javascript, typescript, html, css og det meste annet du kan tenke på som er relevant for web, så er VSCode goto for meg. Samtidig er det bare et verktøy og jeg syns man bør være villig til å prøve andre vertøy også, så om noe som passer deg bedre dukker opp så kan man bruke det isteden."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"I deleånden, så sender jeg ballen over til ",l.createElement(t.a,{href:"https://github.com/piofinn"},"@Piofinn")," til å dele noe fra sin workflow!"),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)};var s=n(72285),i=n(22756),c=n(95573),m=n(1634);const d=e=>{let{pageContext:t}=e;return l.createElement(i.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:i}=r;return l.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(c.M1,Object.assign({},o,{versions:r.versions})),l.createElement(c.w5,o),a,i&&l.createElement(s.l,{types:i}))};function p(e){return l.createElement(u,e,l.createElement(o,e))}},72285:function(e,t,n){n.d(t,{l:function(){return g}});var r=n(58820),l=n(63571),a=n(87505),o=n(70079),s=n(54656);const i=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var r},g=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],i=(e=>{var t,n,r,l,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},i&&o.createElement(s.dn,{className:"jkl-portal-code-block"},i),r.length>0&&o.createElement(p,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return i}});var r=n(26372),l=n.n(r),a=n(49597),o=n(70079),s=n(34044);const i=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(s.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||i?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(35250),l=n(26372),a=n.n(l);const o=e=>{let{className:t,density:n,id:l,...o}=e;return(0,r.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:l,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return c}});var r=n(35250),l=n(68998),a=n(1386),o=n(26372),s=n.n(o),i=n(70079);const c=e=>{let{children:t,title:n,className:o,startExpanded:c=!1,onClick:m,id:d,...u}=e;const[p,g]=(0,i.useState)(c),[k]=(0,i.useState)((()=>c)),{detailsRef:f,summaryRef:v,contentRef:h,onSummaryClick:E}=(0,a.E)({onOpenChange:(e,t)=>{g(e),m&&m(t,e)},isExpanded:k});return(0,r.jsxs)("details",{"data-testid":"jkl-accordion-item",...u,className:s()("jkl-accordion-item",o),ref:f,id:d,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:E,ref:v,children:[n,(0,r.jsx)(l.K,{className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var r=n(70079),l=n(41699),a=n(65174),o=n(6914),s=n(82546),i=n(39126),c=n(66169),m=n(94509);const d=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:u,rows:p,verticalAlign:g,...k}=e;return r.createElement(l.i,{fullWidth:!0,...k,ref:t},n&&r.createElement(o.R,{srOnly:!0},n),r.createElement(i.s,null,r.createElement(m.S,null,d.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===p.length&&u&&r.createElement(m.S,null,r.createElement(s.p,{colSpan:d.length},u)),p.map(((e,t)=>r.createElement(m.S,{key:t},e.map(((e,t)=>r.createElement(s.p,{key:t,"data-th":d[t],verticalAlign:g},e))))))))}));d.displayName="DataTable"}}]);