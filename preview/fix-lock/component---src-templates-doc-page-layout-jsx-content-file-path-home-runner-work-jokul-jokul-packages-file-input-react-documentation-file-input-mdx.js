"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5714],{29243:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return v},Head:function(){return E},default:function(){return h}});var l=t(47160),r=t(70079),i=t(62991),a=t(68185);const s={};var o=()=>r.createElement("div",null,r.createElement("p",{className:"jkl-heading-4"},"Vedlegg til saken"),r.createElement("ul",{style:{listStyle:"none",margin:0,padding:0}},[{name:"icon.png",type:"image/png",size:12128,publicPath:"/assets/icon.png"}].map((e=>r.createElement("li",{key:e.name},r.createElement(a.$,{fileName:e.name,fileType:e.type,fileSize:e.size,path:e.publicPath}))))));const m=()=>'\ntype File = {\n    name: string;\n    type: string;\n    size: number;\n    publicPath: string;\n};\n\nconst files: File[] = [\n    {\n        name: "icon.png",\n        type: "image/png",\n        size: 12_128,\n        publicPath: "/assets/icon.png",\n    },\n];\n\nreturn (\n    <p className="jkl-heading-4">Vedlegg til saken</p>\n    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>\n        {files.map((file) => (\n            <li key={file.name}>\n                <File fileName={file.name} fileType={file.type} fileSize={file.size} path={file.publicPath} />\n            </li>\n        ))}\n    </ul>\n);\n';function p(e){const n=Object.assign({p:"p",ol:"ol",li:"li",code:"code",h2:"h2",ul:"ul",a:"a",em:"em"},(0,l.ah)(),e.components),{Ingress:t,ComponentExample:a}=n;return a||u("ComponentExample",!0),t||u("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(t,null,"Filinput lar brukeren dele filer med oss, for eksempel dokumentasjon i en sak."),"\n",r.createElement(a,{component:i.ZP,codeExample:i.LC,knobs:i.Lr}),"\n",r.createElement(n.p,null,"Opplasting av filer skjer i to trinn:"),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"Brukeren velger filer, enten med ved å dra de inn i slippfeltet, eller med filutforskeren som er innebygget i nettlesseren."),"\n",r.createElement(n.li,null,"En handling fra brukeren starter selve opplastingen av filer."),"\n"),"\n",r.createElement(n.p,null,"Komponenten tar seg av punkt 1. Å starte selve opplastingen er opp til deg, men det finnes en ",r.createElement(n.code,null,"upload"),"-funksjon du kan importere for å få hjelp med å sende filene til backend og beregne fremdriften."),"\n",r.createElement(n.h2,null,"Hjelp brukeren finne riktig fil"),"\n",r.createElement(n.p,null,"Ofte ønsker vi at brukeren skal kunne dele bilder og PDF."),"\n",r.createElement(n.p,null,"Komponenten bør konfigureres slik at kun filer av ønsket type kan markeres i filvelgeren."),"\n",r.createElement("figure",null,r.createElement("picture",{className:"jkl-portal-image"},r.createElement("source",{media:"(prefers-color-scheme: dark)",srcset:"/assets/documentation/file-uploader/macos-filvelger-morkt.png"}),r.createElement("img",{className:"jkl-portal-image__img",alt:"",loading:"lazy",decoding:"async",src:"/assets/documentation/file-uploader/macos-filvelger-lyst.png"})),r.createElement("figcaption",null,"Filvelgeren på macOS. I dette tilfellet kan ikke det komprimerte arkivet velges.")),"\n",r.createElement(n.p,null,"Merk at dette ikke vil hindre en bruker i å dra en vilkårlig fil inn i slippfeltet i komponenten. Hvis dette skjer vil komponenten automatisk merke filen med valideringsfeil."),"\n",r.createElement(n.h2,null,"Håndtering av delte filer"),"\n",r.createElement(n.p,null,"Hva skjer når brukeren starter opplastingen av filer? Detaljene er opp til hvert enkelt team, men grovt sett trengs:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Et endepunkt som leser ",r.createElement(n.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data#a_special_case_sending_files"},r.createElement(n.em,null,"multi-part form data")),", og som klarer dekode filinformasjonen i skjemaet."),"\n",r.createElement(n.li,null,"Et sted å lagre filene på disk. Dette trenger ikke være samme maskin som endepunktet."),"\n",r.createElement(n.li,null,"Ett eller flere endepunkt som kan spørres for å se filer brukeren har delt med oss tidligere, for eksempel tilknyttet en sak."),"\n"),"\n",r.createElement(n.p,null,"Det finnes en ",r.createElement(n.code,null,"upload"),"-funksjon du kan importere fra denne pakka for å få hjelp med å sende filene til backend og beregne fremdriften."),"\n",r.createElement(n.p,null,"Det finnes også ",r.createElement(n.a,{href:"https://github.com/fremtind/jkl-file-input-demo"},"en eksempelapp som inkluderer en backend")," som du kan se på, men sørg for å lese disclaimeren i README-filen først."),"\n",r.createElement(n.h2,null,"Visning av filer brukeren har lastet opp tidligere"),"\n",r.createElement(n.p,null,"Bruk gjerne samme komponent til forhåndsvisning av filer på siden for øvrig, som i filopplasteren."),"\n",r.createElement(a,{title:"Gjenbruk av forhåndsvisning",component:o,codeExample:m,knobs:s}),"\n",r.createElement(n.p,null,"Gitt en URL vil komponenten rendres som en lenke, slik at brukeren kan klikke seg videre til å se selve filen i en ny fane."))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(p,e)):p(e)};function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var d=t(72285),f=t(22756),k=t(95573),g=t(1634);const E=e=>{let{pageContext:n}=e;return r.createElement(f.p,{title:n.title})},v=e=>{let{location:n,data:t,pageContext:l,children:i}=e;const{frontmatter:a}=t.page,{types:s}=l;return r.createElement(g.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(k.M1,Object.assign({},a,{versions:l.versions})),r.createElement(k.w5,a),i,s&&r.createElement(d.l,{types:s}))};function h(e){return r.createElement(v,e,r.createElement(c,e))}}}]);