import{R as e}from"./index-siqcju79.js";import{F as u}from"./Flex-CLtnP1gB.js";import{c as p}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./tokens-CvksrKef.js";function L(t){return({children:a,className:o,...i})=>{const j=t==="ordered"?"ol":"ul";return e.createElement(j,{className:p("jkl-list",o,{"jkl-list--ordered":t==="ordered"}),"data-testid":"jkl-list",...i},a)}}const k=L("unordered");k.displayName="UnorderedList";const v=L("ordered");v.displayName="OrderedList";const c=k;c.displayName="List";function g(t){return({className:a,children:o,...i})=>e.createElement("li",{className:p("jkl-list__item",a,{"jkl-list__item--iconed":t!=="normal","jkl-list__item--check":t==="check","jkl-list__item--cross":t==="cross"}),"data-testid":"jkl-list-item",...i},o)}const l=g("normal");l.displayName="ListItem";const d=g("cross");d.displayName="CrossListItem";const m=g("check");m.displayName="CheckListItem";const w={title:"Komponenter/List",component:c,subcomponents:{ListItem:l},tags:["autodocs"]},h=["Planlegg turen og meld fra hvor du går","Tilpass turen etter evne og forhold","Ta hensyn til vær- og skredvarsel","Vær forberedt på uvær og kulde, selv på korte turer","Ta med nødvendig utstyr for å kunne hjelpe deg selv og andre","Ta trygge veivalg. Gjenkjenn skredfarlig terreng og usikker is","Bruk kart og kompass. Vit alltid hvor du er","Vend i tide, det er ingen skam å snu","Spar på kreftene og søk ly om nødvendig"],y=["Regntøy (jakke og bukse)","Tynn vindjakke og turbukse (med god fukttransport)","Undertøy i ull/ullblanding + ekstra skift","Sokker med mye ull og god passform + ekstra skift","Ullgenser/jakke eller tynn dunjakke","Ekstra lue","Ullvotter eller andre vanter/votter som er varme selv når de er våte","Lette innesko/inneklær","Fjellstøvler og gjerne gamasjer","Shorts og t-skjorte (ull/kunstfiber) hvis det er meldt varmt vær"],r={name:"OrderedList",render:()=>e.createElement(u,{gap:24,direction:"column"},e.createElement("h2",null,"Fjellvettreglene"),e.createElement("p",null,"Liste fra"," ",e.createElement("a",{href:"https://www.dnt.no/fjellvettreglene/"},"DNTs side om fjellvettreglene")),e.createElement(v,{"aria-label":"Fjellvettreglene"},h.map(t=>e.createElement(l,{key:t},t))))},s={name:"UnorderedList",render:()=>e.createElement(u,{gap:24,direction:"column"},e.createElement("h2",null,"Pakkeliste (bekledning)"),e.createElement("p",null,"Liste fra"," ",e.createElement("a",{href:"https://www.dnt.no/fjellvettreglene/"},"DNTs pakkeliste for sommerturer")),e.createElement(k,{"aria-label":"Fjellvettreglene"},y.map(t=>e.createElement(l,{key:t},t))))},n={name:"Coverage List",render:t=>e.createElement(c,null,e.createElement(m,null,"Dekkes"),e.createElement(m,null,"Dekkes også"),e.createElement(d,null,"Dekkes ikke :("),e.createElement(d,null,"Dekkes heller ikke :("))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "OrderedList",
  render: () => <Flex gap={24} direction="column">
            <h2>Fjellvettreglene</h2>
            <p>
                Liste fra{" "}
                <a href="https://www.dnt.no/fjellvettreglene/">
                    DNTs side om fjellvettreglene
                </a>
            </p>
            <OrderedList aria-label="Fjellvettreglene">
                {fjellvettreglene.map(regel => <ListItem key={regel}>{regel}</ListItem>)}
            </OrderedList>
        </Flex>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "UnorderedList",
  render: () => <Flex gap={24} direction="column">
            <h2>Pakkeliste (bekledning)</h2>
            <p>
                Liste fra{" "}
                <a href="https://www.dnt.no/fjellvettreglene/">
                    DNTs pakkeliste for sommerturer
                </a>
            </p>
            <UnorderedList aria-label="Fjellvettreglene">
                {bekledningsliste.map(gjenstand => <ListItem key={gjenstand}>{gjenstand}</ListItem>)}
            </UnorderedList>
        </Flex>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Coverage List",
  render: args => <List>
            <CheckListItem>Dekkes</CheckListItem>
            <CheckListItem>Dekkes også</CheckListItem>
            <CrossListItem>Dekkes ikke :(</CrossListItem>
            <CrossListItem>Dekkes heller ikke :(</CrossListItem>
        </List>
}`,...n.parameters?.docs?.source}}};const D=["OrderedListStory","UnorderedListStory","CoverageListStory"];export{n as CoverageListStory,r as OrderedListStory,s as UnorderedListStory,D as __namedExportsOrder,w as default};
