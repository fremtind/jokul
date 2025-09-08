import{R as e}from"./index-siqcju79.js";/* empty css               */import{F as i}from"./Flex-DP-fj2ie.js";import{L as l,a as d,O as m,U as k,C as a,b as o}from"./ListItem-D6XgKMGd.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./tokens-CvksrKef.js";import"./SlotComponent-CWN6EcE2.js";import"./clsx-B-dksMZM.js";const E={title:"Komponenter/List",component:d,subcomponents:{ListItem:l},tags:["autodocs"]},g=["Planlegg turen og meld fra hvor du går","Tilpass turen etter evne og forhold","Ta hensyn til vær- og skredvarsel","Vær forberedt på uvær og kulde, selv på korte turer","Ta med nødvendig utstyr for å kunne hjelpe deg selv og andre","Ta trygge veivalg. Gjenkjenn skredfarlig terreng og usikker is","Bruk kart og kompass. Vit alltid hvor du er","Vend i tide, det er ingen skam å snu","Spar på kreftene og søk ly om nødvendig"],c=["Regntøy (jakke og bukse)","Tynn vindjakke og turbukse (med god fukttransport)","Undertøy i ull/ullblanding + ekstra skift","Sokker med mye ull og god passform + ekstra skift","Ullgenser/jakke eller tynn dunjakke","Ekstra lue","Ullvotter eller andre vanter/votter som er varme selv når de er våte","Lette innesko/inneklær","Fjellstøvler og gjerne gamasjer","Shorts og t-skjorte (ull/kunstfiber) hvis det er meldt varmt vær"],r={name:"OrderedList",render:()=>e.createElement(i,{gap:24,direction:"column"},e.createElement("h2",null,"Fjellvettreglene"),e.createElement("p",null,"Liste fra"," ",e.createElement("a",{href:"https://www.dnt.no/fjellvettreglene/"},"DNTs side om fjellvettreglene")),e.createElement(m,{"aria-label":"Fjellvettreglene"},g.map(t=>e.createElement(l,{key:t},t))))},n={name:"UnorderedList",render:()=>e.createElement(i,{gap:24,direction:"column"},e.createElement("h2",null,"Pakkeliste (bekledning)"),e.createElement("p",null,"Liste fra"," ",e.createElement("a",{href:"https://www.dnt.no/fjellvettreglene/"},"DNTs pakkeliste for sommerturer")),e.createElement(k,{"aria-label":"Fjellvettreglene"},c.map(t=>e.createElement(l,{key:t},t))))},s={name:"Coverage List",render:t=>e.createElement(d,null,e.createElement(a,null,"Dekkes"),e.createElement(a,null,"Dekkes også"),e.createElement(o,null,"Dekkes ikke :("),e.createElement(o,null,"Dekkes heller ikke :("))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Coverage List",
  render: args => <List>
            <CheckListItem>Dekkes</CheckListItem>
            <CheckListItem>Dekkes også</CheckListItem>
            <CrossListItem>Dekkes ikke :(</CrossListItem>
            <CrossListItem>Dekkes heller ikke :(</CrossListItem>
        </List>
}`,...s.parameters?.docs?.source}}};const b=["OrderedListStory","UnorderedListStory","CoverageListStory"];export{s as CoverageListStory,r as OrderedListStory,n as UnorderedListStory,b as __namedExportsOrder,E as default};
