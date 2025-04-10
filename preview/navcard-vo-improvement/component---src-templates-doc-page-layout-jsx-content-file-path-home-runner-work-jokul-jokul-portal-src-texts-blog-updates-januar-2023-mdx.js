"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5608],{657:function(e,n,l){l.r(n),l.d(n,{DocPageLayout:function(){return k},Head:function(){return d},default:function(){return g}});var t=l(47160),r=l(70079),a=l(35246),i=l(86710);function o(e){const n=Object.assign({p:"p",ul:"ul",li:"li",em:"em",h2:"h2",a:"a",code:"code",h3:"h3"},(0,t.ah)(),e.components),{ComponentExample:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ComponentExample",!0),r.createElement(r.Fragment,null,r.createElement(n.p,null,"Vi avsluttet januar med Jøkuluka, så oppsummeringen ble litt forsinket denne gangen."),"\n",r.createElement(n.p,null,"Her er måneden kort oppsummert:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Nye ikoner"),"\n",r.createElement(n.li,null,"Enklere å bruke Tooltip i skjemafelter"),"\n",r.createElement(n.li,null,"Tabellkomponenter for sortering og paginering"),"\n"),"\n",r.createElement(n.p,null,"I tillegg var det en masse som ble gjort under Jøkuluka som ikke er ",r.createElement(n.em,null,"helt")," klar ennå. Her er det bare å glede seg 😄"),"\n",r.createElement(n.h2,null,"Nye ikoner"),"\n",r.createElement(n.p,null,"Vi har fått flunka nye ikoner!"),"\n",r.createElement(l,{title:"Ikoner",component:a.Nf,knobs:a.oD}),"\n",r.createElement(n.p,null,"Du kan lese mer om ikonene under ",r.createElement(n.a,{href:"/preview/navcard-vo-improvement/profil/ikoner"},"Profil"),", og under ",r.createElement(n.a,{href:"/preview/navcard-vo-improvement/komponenter/icons"},"Komponenter"),"."),"\n",r.createElement(n.p,null,"Vi jobber med å bruke disse ikonene i de ulike komponentene også."),"\n",r.createElement(n.p,null,"Relaterte issues og pull requests:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://github.com/fremtind/jokul/issues/3066"},"#3066")),"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://github.com/fremtind/jokul/issues/3345"},"#3345")),"\n"),"\n",r.createElement(n.h2,null,"Forenkle bruken av Tooltip med skjemakomponenter"),"\n",r.createElement(n.p,null,"Et vanlig scenarie for bruken av ",r.createElement(n.a,{href:"/preview/navcard-vo-improvement/komponenter/tooltip"},"tooltip")," er å beskrive mer om et skjemafelt, men hvor vanlig hjelpetekst ikke strekker til. Det var lettere sagt enn gjort å få til med Jøkul-komponenter, men har blitt lettere i den nyeste versjonen."),"\n",r.createElement(n.p,null,"Nå er det enklere å få til i kode, og Figma-forbedringene ligger klare i en branch."),"\n",r.createElement(l,{title:"TextExample med støtte for tooltip",component:i.xr,knobs:{boolProps:[{prop:"Med tooltip",defaultValue:!0}],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]}}),"\n",r.createElement(n.p,null,"I kode har hvert skjemafelt fått en ny prop: ",r.createElement(n.code,null,"tooltipProps"),". Den speiler alle mulige props fra ",r.createElement(n.code,null,"Tooltip"),"-komponenten."),"\n",r.createElement(n.p,null,"Relaterte issues og pull requests:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://github.com/fremtind/jokul/issues/3367"},"#3367")),"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://github.com/fremtind/jokul/pull/3251"},"#3251")),"\n"),"\n",r.createElement(n.h2,null,"Nye muligheter med tabeller"),"\n",r.createElement(n.p,null,"Det har kommet inn mulighet for å indikere sortering med tabelloverskrifter (pil opp og ned). Dette styrer du med en property på ",r.createElement(n.code,null,"TableHeader"),"."),"\n",r.createElement(n.p,null,"Det har også kommet en første versjon av ",r.createElement(n.em,null,"paginering"),"."),"\n",r.createElement(n.p,null,"Eksempler på begge tabelltyper finner du på ",r.createElement(n.a,{href:"/preview/navcard-vo-improvement/komponenter/table"},"komponentsiden om tabeller")," ved å scrolle deg til bunnen."),"\n",r.createElement(n.p,null,"Relaterte issues og pull requests:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://github.com/fremtind/jokul/issues/3060"},"#3060")),"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://github.com/fremtind/jokul/pull/3369"},"#3369")),"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://github.com/fremtind/jokul/pull/3371"},"#3371")),"\n"),"\n",r.createElement(n.h2,null,"Diverse bugfikser og forbedringer"),"\n",r.createElement(n.h3,null,"Figma"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Navneendring og rekkefølge på fonter i Figmabiblioteket (",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/issues/3337"},"#3337"),")"),"\n",r.createElement(n.li,null,"Tooltip i Group Title (",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/issues/3367"},"#3367"),")"),"\n"),"\n",r.createElement(n.p,null,"I tillegg ligger en rekke ting på vent i branches. Vi prøver å finne måter å rulle ut endringene på en god måte."),"\n",r.createElement(n.h3,null,"GitHub"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Rett en feil i bruken av ",r.createElement(n.code,null,"aria-label")," i ",r.createElement(n.code,null,"Loader")," (",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/pull/3347"},"#3347"),")"),"\n",r.createElement(n.li,null,"Rett et par edge cases i ",r.createElement(n.code,null,"Select")," (",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/pull/3351"},"#3351"),", ",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/pull/3372"},"#3372"),")"),"\n",r.createElement(n.li,null,"Gjør det lettere å finne fram til enkelte sider i portalen (",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/pull/3354"},"#3354"),", ",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/pull/3361"},"#3361"),")"),"\n",r.createElement(n.li,null,"Fiks en bug der ekspandering av ",r.createElement(n.code,null,"TextArea")," ikke lenger ble animert (",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/pull/3362"},"#3362"),")"),"\n",r.createElement(n.li,null,"Fiks en bug der bredden på ",r.createElement(n.code,null,"TextInput")," ikke ble satt (",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/pull/3365"},"#3365"),")"),"\n",r.createElement(n.li,null,"Tillat MutableRefObject som target i ",r.createElement(n.code,null,"useIntersectionObserver")," (",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/pull/3357"},"#3357"),")"),"\n",r.createElement(n.li,null,"Støtt innliming av andre datoformater (",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/pull/3381"},"#3381"),")"),"\n"),"\n",r.createElement(n.h2,null,"Takk"),"\n",r.createElement(n.p,null,"Takk til alle som var med, både på Jøkuluka, Designsystemforum, GitHub og Figma!"))}var u=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?r.createElement(n,e,r.createElement(o,e)):o(e)};var m=l(72285),c=l(22756),s=l(95573),p=l(1634);const d=e=>{let{pageContext:n}=e;return r.createElement(c.p,{title:n.title})},k=e=>{let{location:n,data:l,pageContext:t,children:a}=e;const{frontmatter:i}=l.page,{types:o}=t;return r.createElement(p.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(s.M1,Object.assign({},i,{versions:t.versions})),r.createElement(s.w5,i),a,o&&r.createElement(m.l,{types:o}))};function g(e){return r.createElement(k,e,r.createElement(u,e))}},86710:function(e,n,l){l.d(n,{bq:function(){return o},gc:function(){return m},xr:function(){return u}});var t=l(94989),r=l(79661),a=l(70079),i=l(54790);const o={boolProps:["Med hjelpetekst","Med feil","Med tooltip","Med handling","Med benevnelse","Inline"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},u=e=>{let{choiceValues:n,boolValues:l}=e;const{0:o,1:u}=(0,a.useState)(""),m=e=>u(e.target.value),c=null!=l&&l["Med hjelpetekst"]?"Boareal er innvendig bruksareal unntatt bodarealet":void 0,s=null!=l&&l["Med feil"]?a.createElement(a.Fragment,null,"Du må fylle ut boarealet. Se ",a.createElement(t.r,{href:""},"guiden vår")," hvis du er usikker på hvordan du finner riktig areal."):void 0,p=null!=l&&l["Med tooltip"]?{content:a.createElement(a.Fragment,null,"Boareal måles i kvadratmeter (m",a.createElement("sup",null,"2"),"). Hvis du ikke vet boarealet ditt kan du lese guiden vi lenker til under.")}:void 0,d=null!=l&&l["Med benevnelse"]?a.createElement(a.Fragment,null,"m",a.createElement("sup",null,"2")):void 0,k=null==l?void 0:l.Inline,g=null==n?void 0:n.Variant,h=null!=l&&l["Med handling"]?{icon:a.createElement(r.T,null),label:"Nullstill feltet",onClick:()=>u("")}:void 0;return k?a.createElement("div",null,"Jeg er"," ",a.createElement(i.o,{value:o,onChange:m,inline:!0,label:"Alder",maxLength:3,width:"2rem",errorLabel:s,action:h})," ","år gammel"):a.createElement(i.o,{label:"Boareal",name:"boareal",helpLabel:c,errorLabel:s,labelProps:{variant:g},tooltipProps:p,value:o,onChange:m,onKeyDown:()=>console.log("onKeyDown event"),inline:k,action:h,unit:d,align:"right",width:"min(10rem, 100%)"})},m=e=>{let{choiceValues:n,boolValues:l}=e;return(null==l?void 0:l.Inline)?'\n<div>\n    Jeg er <TextInput inline label="Alder" width="3rem" errorLabel='+(null!=l&&l["Med feil"]?'"Du må fylle ut alder"':"{undefined}")+" /> år gammel\n</div>\n":'\n<TextInput\n    label="Boareal"\n    name="boareal"\n    align="right"\n    labelProps={{ variant: "'+(null==n?void 0:n.Variant)+'" }}'+(null!=l&&l["Med hjelpetekst"]?'\n    helpLabel="Boareal er innvendig bruksareal unntatt bodarealet"':"")+(null!=l&&l["Med feil"]?'\n    errorLabel={<>Du må fylle ut boarealet. Se <a href="#">guiden vår</a> hvis du er usikker på hvordan du finner riktig areal.</>}':"")+(null!=l&&l["Med tooltip"]?"\n    tooltipProps={{ content: (\n        <>\n            Boareal måles i kvadratmeter (m<sup>2</sup>). Hvis du ikke vet boarealet ditt kan du lese guiden\n            vi lenker til under.\n        </>\n    )}}":"")+(null!=l&&l["Med handling"]?'\n    action={{\n        icon: <CloseIcon />,\n        label: "Nullstill feltet",\n        onClick: () => setValue(""),\n    }}':"")+(null!=l&&l["Med benevnelse"]?"\n    unit={<>m<sup>2</sup></>}":"")+"\n/>\n"}}}]);