"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4942],{7893:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return s}});var r=n(30808),l=(n(27378),n(81368)),a=n(77309),i=["components"],m={},o={_frontmatter:m},d=a.Z;function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.mdx)(d,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Ny måned, ny oppdateringspost. De fleste er tilbake fra ferie og maskineriet fyrer på alle sylindere. Ergo har det skjedd en hel del. Heldigvis, ",(0,l.mdx)("strong",{parentName:"p"},"ingen breaking changes")," eller noe som krever noe annet enn en oppdatering av pakkene. Ellers begynner innrammingsballen å rulle, det betyr at flere team kobler seg på Jøkul, der kommer nok fokuset til å ligge fremover, få disse teamene til å føle seg hjemme og følge opp innrammingsbehovene."),(0,l.mdx)("h2",null,"📰 Oppdateringer"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"Nytt domene!!")," ",(0,l.mdx)("a",{parentName:"li",href:"https://jokul.fremtind.no/"},"https://jokul.fremtind.no/")," er det nye hjemmet til Jøkul. Vi er jo veldig glade i github, men vi hører jo hjemme hos oss selv. Det blir også lettere for de utenfor utvikling å følge med og ta ibruk Jøkul også."),(0,l.mdx)("li",{parentName:"ul"},"Vi har ventet på en del fikser fra core-components, men selvom vi har lagd PRer og de har ligget der en stund, så har det ikke vært fremdrift. En midlertidig løsning på dette var å bruke ",(0,l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1214"},"patch-package")," til å legge våre fikser inn, uten å måtte forke eller andre drastiske tiltak. Kjerneteamet kommer til å fortsette å følge opp core-components situasjonen."),(0,l.mdx)("li",{parentName:"ul"},"Automatiske visuelle regresjonstester er på vei inn i de fleste pakker. Vi ønsker å øke tilliten til at endringer i Jøkul gjør det de skal, og ved å få på plass visuelle regresjonstester håper vi å gjøre akkurat det. Per nå er det Accordion, Button og Checkbox som har disse testene, det vil rulles ut på flere av komponenten og etterhvert settes som krav for å få lov til å merge. Vi har allerede sett en markant forbedring i stabiliteten til Cypress testene, så vi er nok ikke veldig langt unna å sette det som krav."),(0,l.mdx)("li",{parentName:"ul"},"Det er nå støtte for universell dark mode i alle",(0,l.mdx)("em",{parentName:"li"}," komponentene. Det vil si at du slipper å bruke ",(0,l.mdx)("inlineCode",{parentName:"em"},"inverted"),"-propen på komponentene for å få dark mode, med mindre du trenger å støtte IE11. Det fungerer slik at alle komponenter automatisk bytter over til dark mode dersom de er inne i et element med attributten ",(0,l.mdx)("inlineCode",{parentName:"em"},'data-theme="dark"'),". "),(0,l.mdx)("inlineCode",{parentName:"li"},"Card"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"ProgressBar")," og ",(0,l.mdx)("inlineCode",{parentName:"li"},"ToggleSwitch")," har foreløpig ikke denne funksjonaliteten, i påvente av komplett redesign.")),(0,l.mdx)("h2",null,"🌱 Releaser"),(0,l.mdx)("h3",null,"Pakker"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1191"},"✏️ Ikoner"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Samle alle ikonene og eksponer i en pakke"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1154"},"✏️ Accordion"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Oppdatert design"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1208"},"✏️ Linker"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Oppdatert design"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1201"},"💡 Søkbar select"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Ny komponent"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1216"},"💡 NavLink"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Ny komponent for navigeringslenker"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1240"},"💡 Autosuggest"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Ny komponent for tekstfelt med forslag")))),(0,l.mdx)("h3",null,"Portalen"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"💅 ",(0,l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1142"},"Grupering i sidemenyen"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Nå som både utilityklasser, hooks og valideringsregler dokumenteres under komponentersiden, så begynner det bli vanskelig å holde oversikten."))),(0,l.mdx)("li",{parentName:"ul"},"💅 ",(0,l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1241"},"Mobil støtte"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Vi har fått med oss alt folk av og til bruker telefonen sin til å gå på internet. Portalens primærfokus er power users på desktop, men vi bryr oss også om de som bruker telefonen sin. Med denne tar vi enda noen skritt mot en god brukeropplevelse på alle flater.")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-blog-updates-september-2020-mdx-7429f408356591898f7d.js.map