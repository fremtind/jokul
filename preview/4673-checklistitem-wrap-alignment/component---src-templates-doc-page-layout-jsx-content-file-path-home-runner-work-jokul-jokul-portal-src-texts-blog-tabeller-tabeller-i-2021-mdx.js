"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3164],{52121:function(e,t,l){l.r(t),l.d(t,{DocPageLayout:function(){return p},Head:function(){return E},default:function(){return b}});var n=l(64717),r=l(92379),a=l(12077);function o(e){const t=Object.assign({p:"p",a:"a",h2:"h2",em:"em",ul:"ul",li:"li"},(0,n.ah)(),e.components),{Ingress:l,ComponentExample:o}=t;return o||c("ComponentExample",!0),l||c("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(l,null,r.createElement(t.p,null,"Under en avstemming på\n",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/discussions?discussions_q=label%3A%22%F0%9F%94%8D+inventory%22+sort%3Atop"},"GitHub"),"\ntidligere i høst ble det tydelig at tabellene i Jøkul trengte litt kjærleik. Første versjon av de nye tabellene er\nlaget, og her er hvordan du kan bruke dem.")),"\n",r.createElement(t.h2,null,"Mye større fleksibilitet"),"\n",r.createElement(t.p,null,"Det vi raskt oppdaget var at tabellkomponenten i Jøkul ikke lett lot seg tilpasse til de mange ulike behovene der ute. Det håper vi de nye komponentene kan rette opp i."),"\n",r.createElement(t.p,null,"Nytt fra i dag er at Jøkul tilbyr enkeltkomponenter tilsvarende de du finner i HTML. Hvert tabell-element har sin egen Jøkul-motpart du kan ta i bruk:"),"\n",r.createElement("table",{className:"jkl-layout-spacing--medium-top jkl-layout-spacing--large-bottom"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"HTML"),r.createElement("th",null,"Jøkul"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table",className:"jkl-link jkl-link--external"},r.createElement("code",null,"<table />"))),r.createElement("td",null,r.createElement("code",null,"<Table />"))),r.createElement("tr",null,r.createElement("td",null,r.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead",className:"jkl-link jkl-link--external"},r.createElement("code",null,"<thead />"))),r.createElement("td",null,r.createElement("code",null,"<TableHead />"))),r.createElement("tr",null,r.createElement("td",null,r.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody",className:"jkl-link jkl-link--external"},r.createElement("code",null,"<tbody />"))),r.createElement("td",null,r.createElement("code",null,"<TableBody />"))),r.createElement("tr",null,r.createElement("td",null,r.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot",className:"jkl-link jkl-link--external"},r.createElement("code",null,"<tfoot />"))),r.createElement("td",null,r.createElement("code",null,"<TableFooter />"))),r.createElement("tr",null,r.createElement("td",null,r.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr",className:"jkl-link jkl-link--external"},r.createElement("code",null,"<tr />"))),r.createElement("td",null,r.createElement("code",null,"<TableRow />"))),r.createElement("tr",null,r.createElement("td",null,r.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th",className:"jkl-link jkl-link--external"},r.createElement("code",null,"<th />"))),r.createElement("td",null,r.createElement("code",null,"<TableHeader />"))),r.createElement("tr",null,r.createElement("td",null,r.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td",className:"jkl-link jkl-link--external"},r.createElement("code",null,"<td />"))),r.createElement("td",null,r.createElement("code",null,"<TableCell />"))),r.createElement("tr",null,r.createElement("td",null,r.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption",className:"jkl-link jkl-link--external"},r.createElement("code",null,"<caption />"))),r.createElement("td",null,r.createElement("code",null,"<TableCaption />"))),r.createElement("tr",null,r.createElement("td",null,r.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup",className:"jkl-link jkl-link--external"},r.createElement("code",null,"<colgroup />"))),r.createElement("td",null,r.createElement("code",null,"<TableColumnGroup />"))),r.createElement("tr",null,r.createElement("td",null,r.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col",className:"jkl-link jkl-link--external"},r.createElement("code",null,"<col />"))),r.createElement("td",null,r.createElement("code",null,"<TableColumn />"))))),"\n",r.createElement(t.p,null,"Merk at ikke alle elementene har noen eksplisitt CSS fra Jøkul i dag, men vi anbefaler å bruke\nJøkul-komponentene framfor HTML for å være sikret å få med riktig styling om det skulle komme\nsenere. Det å unngå blanding i koden gir også bedre ",r.createElement(t.em,null,"aesthetics")," 😉 💅"),"\n",r.createElement(t.h2,null,"Eksempler på bruk"),"\n",r.createElement(t.p,null,"Gjennom intervjuer og demoer fikk vi se flere av behovene til Jøkul-brukere som\nvi var nødt til å støtte. Vi har samlet dokumentasjon på flere typer tabeller i\ntillegg til den vanlige datatabellen:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Rader med knapper"),"\n",r.createElement(t.li,null,"Klikkbare rader"),"\n",r.createElement(t.li,null,"Responsive tabeller i to varianter"),"\n"),"\n",r.createElement(t.p,null,"Les igjennom ",r.createElement(t.a,{href:"/preview/4673-checklistitem-wrap-alignment/komponenter/table#eksempler-p%C3%A5-bruk"},"dokumentasjonen for tabellkomponentene")," for å se hvordan du kan lage disse tabellene."),"\n",r.createElement(t.h2,null,"Migrering til nye komponenter"),"\n",r.createElement(t.p,null,"Om du er en av de som brukte den gamle tabellen fra Jøkul har vi fremdeles en variant som fungerer omtrent likt."),"\n",r.createElement(o,{scrollable:!0,title:"DataTable",component:a.ZP,knobs:{boolProps:["Compact"]}}),"\n",r.createElement(t.p,null,"Vi har ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/packages/table-react/MIGRATION.md"},"fjernet muligheten for å merke rader som klikkbare")," i denne komponenten. Om du trenger det kan du se på ",r.createElement(t.a,{href:"/preview/4673-checklistitem-wrap-alignment/komponenter/table#eksempler-p%C3%A5-bruk"},"eksempler på bruk")," for de nye komponentene."),"\n",r.createElement(t.h2,null,"Hva trenger du?"),"\n",r.createElement(t.p,null,"Er det en variant vi har glemt? Er det noe du savner fra dokumentasjonen?\nFortsett gjerne ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/discussions/2333"},"tabelldiskusjonen på GitHub"),"\nog fortell oss mer om hva du trenger."))}var m=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)};function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var i=l(75482),u=l(96036),s=l(59001),d=l(65458),k=l(79379);const E=e=>{let{pageContext:t}=e;return r.createElement(u.p,{title:t.title})},p=e=>{let{location:t,data:l,pageContext:n,children:a}=e;const{frontmatter:o}=l.page,{types:m}=n;return r.createElement(k.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(d.M1,Object.assign({},o,{versions:n.versions})),t.pathname.includes("komponenter")&&r.createElement(s.c,{variant:"komponent",component:o.title}),r.createElement(d.w5,o),a,m&&r.createElement(i.l,{types:m}))};function b(e){return r.createElement(p,e,r.createElement(m,e))}}}]);