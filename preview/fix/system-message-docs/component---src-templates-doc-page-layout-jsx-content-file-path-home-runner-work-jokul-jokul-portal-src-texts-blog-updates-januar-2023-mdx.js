"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5608],{657:function(e,l,t){t.r(l),t.d(l,{DocPageLayout:function(){return k},Head:function(){return d},default:function(){return g}});var n=t(47160),r=t(70079),a=t(35246),i=t(86710);function o(e){const l=Object.assign({p:"p",ul:"ul",li:"li",em:"em",h2:"h2",a:"a",code:"code",h3:"h3"},(0,n.ah)(),e.components),{ComponentExample:t}=l;return t||function(e,l){throw new Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ComponentExample",!0),r.createElement(r.Fragment,null,r.createElement(l.p,null,"Vi avsluttet januar med Jøkuluka, så oppsummeringen ble litt forsinket denne gangen."),"\n",r.createElement(l.p,null,"Her er måneden kort oppsummert:"),"\n",r.createElement(l.ul,null,"\n",r.createElement(l.li,null,"Nye ikoner"),"\n",r.createElement(l.li,null,"Enklere å bruke Tooltip i skjemafelter"),"\n",r.createElement(l.li,null,"Tabellkomponenter for sortering og paginering"),"\n"),"\n",r.createElement(l.p,null,"I tillegg var det en masse som ble gjort under Jøkuluka som ikke er ",r.createElement(l.em,null,"helt")," klar ennå. Her er det bare å glede seg 😄"),"\n",r.createElement(l.h2,null,"Nye ikoner"),"\n",r.createElement(l.p,null,"Vi har fått flunka nye ikoner!"),"\n",r.createElement(t,{title:"Ikoner",component:a.Nf,knobs:a.oD}),"\n",r.createElement(l.p,null,"Du kan lese mer om ikonene under ",r.createElement(l.a,{href:"/preview/fix/system-message-docs/profil/ikoner"},"Profil"),", og under ",r.createElement(l.a,{href:"/preview/fix/system-message-docs/komponenter/icons"},"Komponenter"),"."),"\n",r.createElement(l.p,null,"Vi jobber med å bruke disse ikonene i de ulike komponentene også."),"\n",r.createElement(l.p,null,"Relaterte issues og pull requests:"),"\n",r.createElement(l.ul,null,"\n",r.createElement(l.li,null,r.createElement(l.a,{href:"https://github.com/fremtind/jokul/issues/3066"},"#3066")),"\n",r.createElement(l.li,null,r.createElement(l.a,{href:"https://github.com/fremtind/jokul/issues/3345"},"#3345")),"\n"),"\n",r.createElement(l.h2,null,"Forenkle bruken av Tooltip med skjemakomponenter"),"\n",r.createElement(l.p,null,"Et vanlig scenarie for bruken av ",r.createElement(l.a,{href:"/preview/fix/system-message-docs/komponenter/tooltip"},"tooltip")," er å beskrive mer om et skjemafelt, men hvor vanlig hjelpetekst ikke strekker til. Det var lettere sagt enn gjort å få til med Jøkul-komponenter, men har blitt lettere i den nyeste versjonen."),"\n",r.createElement(l.p,null,"Nå er det enklere å få til i kode, og Figma-forbedringene ligger klare i en branch."),"\n",r.createElement(t,{title:"TextExample med støtte for tooltip",component:i.xr,knobs:{boolProps:[{prop:"Med tooltip",defaultValue:!0}],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]}}),"\n",r.createElement(l.p,null,"I kode har hvert skjemafelt fått en ny prop: ",r.createElement(l.code,null,"tooltipProps"),". Den speiler alle mulige props fra ",r.createElement(l.code,null,"Tooltip"),"-komponenten."),"\n",r.createElement(l.p,null,"Relaterte issues og pull requests:"),"\n",r.createElement(l.ul,null,"\n",r.createElement(l.li,null,r.createElement(l.a,{href:"https://github.com/fremtind/jokul/issues/3367"},"#3367")),"\n",r.createElement(l.li,null,r.createElement(l.a,{href:"https://github.com/fremtind/jokul/pull/3251"},"#3251")),"\n"),"\n",r.createElement(l.h2,null,"Nye muligheter med tabeller"),"\n",r.createElement(l.p,null,"Det har kommet inn mulighet for å indikere sortering med tabelloverskrifter (pil opp og ned). Dette styrer du med en property på ",r.createElement(l.code,null,"TableHeader"),"."),"\n",r.createElement(l.p,null,"Det har også kommet en første versjon av ",r.createElement(l.em,null,"paginering"),"."),"\n",r.createElement(l.p,null,"Eksempler på begge tabelltyper finner du på ",r.createElement(l.a,{href:"/preview/fix/system-message-docs/komponenter/table"},"komponentsiden om tabeller")," ved å scrolle deg til bunnen."),"\n",r.createElement(l.p,null,"Relaterte issues og pull requests:"),"\n",r.createElement(l.ul,null,"\n",r.createElement(l.li,null,r.createElement(l.a,{href:"https://github.com/fremtind/jokul/issues/3060"},"#3060")),"\n",r.createElement(l.li,null,r.createElement(l.a,{href:"https://github.com/fremtind/jokul/pull/3369"},"#3369")),"\n",r.createElement(l.li,null,r.createElement(l.a,{href:"https://github.com/fremtind/jokul/pull/3371"},"#3371")),"\n"),"\n",r.createElement(l.h2,null,"Diverse bugfikser og forbedringer"),"\n",r.createElement(l.h3,null,"Figma"),"\n",r.createElement(l.ul,null,"\n",r.createElement(l.li,null,"Navneendring og rekkefølge på fonter i Figmabiblioteket (",r.createElement(l.a,{href:"https://github.com/fremtind/jokul/issues/3337"},"#3337"),")"),"\n",r.createElement(l.li,null,"Tooltip i Group Title (",r.createElement(l.a,{href:"https://github.com/fremtind/jokul/issues/3367"},"#3367"),")"),"\n"),"\n",r.createElement(l.p,null,"I tillegg ligger en rekke ting på vent i branches. Vi prøver å finne måter å rulle ut endringene på en god måte."),"\n",r.createElement(l.h3,null,"GitHub"),"\n",r.createElement(l.ul,null,"\n",r.createElement(l.li,null,"Rett en feil i bruken av ",r.createElement(l.code,null,"aria-label")," i ",r.createElement(l.code,null,"Loader")," (",r.createElement(l.a,{href:"https://github.com/fremtind/jokul/pull/3347"},"#3347"),")"),"\n",r.createElement(l.li,null,"Rett et par edge cases i ",r.createElement(l.code,null,"Select")," (",r.createElement(l.a,{href:"https://github.com/fremtind/jokul/pull/3351"},"#3351"),", ",r.createElement(l.a,{href:"https://github.com/fremtind/jokul/pull/3372"},"#3372"),")"),"\n",r.createElement(l.li,null,"Gjør det lettere å finne fram til enkelte sider i portalen (",r.createElement(l.a,{href:"https://github.com/fremtind/jokul/pull/3354"},"#3354"),", ",r.createElement(l.a,{href:"https://github.com/fremtind/jokul/pull/3361"},"#3361"),")"),"\n",r.createElement(l.li,null,"Fiks en bug der ekspandering av ",r.createElement(l.code,null,"TextArea")," ikke lenger ble animert (",r.createElement(l.a,{href:"https://github.com/fremtind/jokul/pull/3362"},"#3362"),")"),"\n",r.createElement(l.li,null,"Fiks en bug der bredden på ",r.createElement(l.code,null,"TextInput")," ikke ble satt (",r.createElement(l.a,{href:"https://github.com/fremtind/jokul/pull/3365"},"#3365"),")"),"\n",r.createElement(l.li,null,"Tillat MutableRefObject som target i ",r.createElement(l.code,null,"useIntersectionObserver")," (",r.createElement(l.a,{href:"https://github.com/fremtind/jokul/pull/3357"},"#3357"),")"),"\n",r.createElement(l.li,null,"Støtt innliming av andre datoformater (",r.createElement(l.a,{href:"https://github.com/fremtind/jokul/pull/3381"},"#3381"),")"),"\n"),"\n",r.createElement(l.h2,null,"Takk"),"\n",r.createElement(l.p,null,"Takk til alle som var med, både på Jøkuluka, Designsystemforum, GitHub og Figma!"))}var u=function(e){void 0===e&&(e={});const{wrapper:l}=Object.assign({},(0,n.ah)(),e.components);return l?r.createElement(l,e,r.createElement(o,e)):o(e)};var m=t(72285),s=t(22756),c=t(95573),p=t(1634);const d=e=>{let{pageContext:l}=e;return r.createElement(s.p,{title:l.title})},k=e=>{let{location:l,data:t,pageContext:n,children:a}=e;const{frontmatter:i}=t.page,{types:o}=n;return r.createElement(p.M,{className:"/profil/bildebruk"===l.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(c.M1,Object.assign({},i,{versions:n.versions})),r.createElement(c.w5,i),a,o&&r.createElement(m.l,{types:o}))};function g(e){return r.createElement(k,e,r.createElement(u,e))}},86710:function(e,l,t){t.d(l,{bq:function(){return o},gc:function(){return m},xr:function(){return u}});var n=t(94989),r=t(79661),a=t(70079),i=t(54790);const o={boolProps:["Med hjelpetekst","Med feil","Med tooltip","Med handling","Med benevnelse","Inline"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},u=e=>{let{choiceValues:l,boolValues:t}=e;const{0:o,1:u}=(0,a.useState)(""),m=e=>u(e.target.value),s=null!=t&&t["Med hjelpetekst"]?"Boareal er innvendig bruksareal unntatt bodarealet":void 0,c=null!=t&&t["Med feil"]?a.createElement(a.Fragment,null,"Du må fylle ut boarealet. Se ",a.createElement(n.r,{href:""},"guiden vår")," hvis du er usikker på hvordan du finner riktig areal."):void 0,p=null!=t&&t["Med tooltip"]?{content:a.createElement(a.Fragment,null,"Boareal måles i kvadratmeter (m",a.createElement("sup",null,"2"),"). Hvis du ikke vet boarealet ditt kan du lese guiden vi lenker til under.")}:void 0,d=null!=t&&t["Med benevnelse"]?a.createElement(a.Fragment,null,"m",a.createElement("sup",null,"2")):void 0,k=null==t?void 0:t.Inline,g=null==l?void 0:l.Variant,h=null!=t&&t["Med handling"]?{icon:a.createElement(r.T,null),label:"Nullstill feltet",onClick:()=>u("")}:void 0;return k?a.createElement("div",null,"Jeg er"," ",a.createElement(i.o,{value:o,onChange:m,inline:!0,label:"Alder",maxLength:3,width:"2rem",errorLabel:c,action:h})," ","år gammel"):a.createElement(i.o,{label:"Boareal",name:"boareal",helpLabel:s,errorLabel:c,labelProps:{variant:g},tooltipProps:p,value:o,onChange:m,onKeyDown:()=>console.log("onKeyDown event"),inline:k,action:h,unit:d,align:"right",width:"min(10rem, 100%)"})},m=e=>{let{choiceValues:l,boolValues:t}=e;return(null==t?void 0:t.Inline)?'\n<div>\n    Jeg er <TextInput inline label="Alder" width="3rem" errorLabel='+(null!=t&&t["Med feil"]?'"Du må fylle ut alder"':"{undefined}")+" /> år gammel\n</div>\n":'\n<TextInput\n    label="Boareal"\n    name="boareal"\n    align="right"\n    labelProps={{ variant: "'+(null==l?void 0:l.Variant)+'" }}'+(null!=t&&t["Med hjelpetekst"]?'\n    helpLabel="Boareal er innvendig bruksareal unntatt bodarealet"':"")+(null!=t&&t["Med feil"]?'\n    errorLabel={<>Du må fylle ut boarealet. Se <a href="#">guiden vår</a> hvis du er usikker på hvordan du finner riktig areal.</>}':"")+(null!=t&&t["Med tooltip"]?"\n    tooltipProps={{ content: (\n        <>\n            Boareal måles i kvadratmeter (m<sup>2</sup>). Hvis du ikke vet boarealet ditt kan du lese guiden\n            vi lenker til under.\n        </>\n    )}}":"")+(null!=t&&t["Med handling"]?'\n    action={{\n        icon: <CloseIcon />,\n        label: "Nullstill feltet",\n        onClick: () => setValue(""),\n    }}':"")+(null!=t&&t["Med benevnelse"]?"\n    unit={<>m<sup>2</sup></>}":"")+"\n/>\n"}}}]);