import{j as e}from"./jsx-runtime-BbjHj44Y.js";import"./index-C6mWTJJr.js";import{F as L}from"./Flex-Bxl3x-bI.js";import{a as u,L as l,O as v,U as f,C as o,b as i}from"./ListItem-kfsrXGn4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tokens-DyQL8Q6a.js";import"./clsx-B-dksMZM.js";const U={title:"Komponenter/List",component:u,subcomponents:{ListItem:l},tags:["autodocs"]},x=["Planlegg turen og meld fra hvor du går","Tilpass turen etter evne og forhold","Ta hensyn til vær- og skredvarsel","Vær forberedt på uvær og kulde, selv på korte turer","Ta med nødvendig utstyr for å kunne hjelpe deg selv og andre","Ta trygge veivalg. Gjenkjenn skredfarlig terreng og usikker is","Bruk kart og kompass. Vit alltid hvor du er","Vend i tide, det er ingen skam å snu","Spar på kreftene og søk ly om nødvendig"],y=["Regntøy (jakke og bukse)","Tynn vindjakke og turbukse (med god fukttransport)","Undertøy i ull/ullblanding + ekstra skift","Sokker med mye ull og god passform + ekstra skift","Ullgenser/jakke eller tynn dunjakke","Ekstra lue","Ullvotter eller andre vanter/votter som er varme selv når de er våte","Lette innesko/inneklær","Fjellstøvler og gjerne gamasjer","Shorts og t-skjorte (ull/kunstfiber) hvis det er meldt varmt vær"],t={name:"OrderedList",render:()=>e.jsxs(L,{gap:24,direction:"column",children:[e.jsx("h2",{children:"Fjellvettreglene"}),e.jsxs("p",{children:["Liste fra"," ",e.jsx("a",{href:"https://www.dnt.no/fjellvettreglene/",children:"DNTs side om fjellvettreglene"})]}),e.jsx(v,{"aria-label":"Fjellvettreglene",children:x.map(r=>e.jsx(l,{children:r},r))})]})},s={name:"UnorderedList",render:()=>e.jsxs(L,{gap:24,direction:"column",children:[e.jsx("h2",{children:"Pakkeliste (bekledning)"}),e.jsxs("p",{children:["Liste fra"," ",e.jsx("a",{href:"https://www.dnt.no/fjellvettreglene/",children:"DNTs pakkeliste for sommerturer"})]}),e.jsx(f,{"aria-label":"Fjellvettreglene",children:y.map(r=>e.jsx(l,{children:r},r))})]})},n={name:"Coverage List",render:r=>e.jsxs(u,{children:[e.jsx(o,{children:"Dekkes"}),e.jsx(o,{children:"Dekkes også"}),e.jsx(i,{children:"Dekkes ikke :("}),e.jsx(i,{children:"Dekkes heller ikke :("})]})};var a,d,k;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(k=(d=t.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};var m,g,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(g=s.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var p,j,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Coverage List",
  render: args => <List>
            <CheckListItem>Dekkes</CheckListItem>
            <CheckListItem>Dekkes også</CheckListItem>
            <CrossListItem>Dekkes ikke :(</CrossListItem>
            <CrossListItem>Dekkes heller ikke :(</CrossListItem>
        </List>
}`,...(h=(j=n.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};const O=["OrderedListStory","UnorderedListStory","CoverageListStory"];export{n as CoverageListStory,t as OrderedListStory,s as UnorderedListStory,O as __namedExportsOrder,U as default};
