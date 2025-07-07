import{j as e}from"./jsx-runtime-D9p_MChh.js";import"./index-CRL2yuNo.js";import{F as I}from"./Flex-DXV4vvFO.js";import{c as C}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./tokens-CvksrKef.js";function b(r){return({children:i,className:o,...a})=>{const D=r==="ordered"?"ol":"ul";return e.jsx(D,{className:C("jkl-list",o,{"jkl-list--ordered":r==="ordered"}),"data-testid":"jkl-list",...a,children:i})}}const k=b("unordered");k.displayName="UnorderedList";const F=b("ordered");F.displayName="OrderedList";const c=k;c.displayName="List";function g(r){return({className:i,children:o,...a})=>e.jsx("li",{className:C("jkl-list__item",i,{"jkl-list__item--iconed":r!=="normal","jkl-list__item--check":r==="check","jkl-list__item--cross":r==="cross"}),"data-testid":"jkl-list-item",...a,children:o})}const l=g("normal");l.displayName="ListItem";const d=g("cross");d.displayName="CrossListItem";const m=g("check");m.displayName="CheckListItem";const P={title:"Komponenter/List",component:c,subcomponents:{ListItem:l},tags:["autodocs"]},N=["Planlegg turen og meld fra hvor du går","Tilpass turen etter evne og forhold","Ta hensyn til vær- og skredvarsel","Vær forberedt på uvær og kulde, selv på korte turer","Ta med nødvendig utstyr for å kunne hjelpe deg selv og andre","Ta trygge veivalg. Gjenkjenn skredfarlig terreng og usikker is","Bruk kart og kompass. Vit alltid hvor du er","Vend i tide, det er ingen skam å snu","Spar på kreftene og søk ly om nødvendig"],S=["Regntøy (jakke og bukse)","Tynn vindjakke og turbukse (med god fukttransport)","Undertøy i ull/ullblanding + ekstra skift","Sokker med mye ull og god passform + ekstra skift","Ullgenser/jakke eller tynn dunjakke","Ekstra lue","Ullvotter eller andre vanter/votter som er varme selv når de er våte","Lette innesko/inneklær","Fjellstøvler og gjerne gamasjer","Shorts og t-skjorte (ull/kunstfiber) hvis det er meldt varmt vær"],t={name:"OrderedList",render:()=>e.jsxs(I,{gap:24,direction:"column",children:[e.jsx("h2",{children:"Fjellvettreglene"}),e.jsxs("p",{children:["Liste fra"," ",e.jsx("a",{href:"https://www.dnt.no/fjellvettreglene/",children:"DNTs side om fjellvettreglene"})]}),e.jsx(F,{"aria-label":"Fjellvettreglene",children:N.map(r=>e.jsx(l,{children:r},r))})]})},s={name:"UnorderedList",render:()=>e.jsxs(I,{gap:24,direction:"column",children:[e.jsx("h2",{children:"Pakkeliste (bekledning)"}),e.jsxs("p",{children:["Liste fra"," ",e.jsx("a",{href:"https://www.dnt.no/fjellvettreglene/",children:"DNTs pakkeliste for sommerturer"})]}),e.jsx(k,{"aria-label":"Fjellvettreglene",children:S.map(r=>e.jsx(l,{children:r},r))})]})},n={name:"Coverage List",render:r=>e.jsxs(c,{children:[e.jsx(m,{children:"Dekkes"}),e.jsx(m,{children:"Dekkes også"}),e.jsx(d,{children:"Dekkes ikke :("}),e.jsx(d,{children:"Dekkes heller ikke :("})]})};var p,j,L;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(L=(j=t.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var u,h,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,x,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Coverage List",
  render: args => <List>
            <CheckListItem>Dekkes</CheckListItem>
            <CheckListItem>Dekkes også</CheckListItem>
            <CrossListItem>Dekkes ikke :(</CrossListItem>
            <CrossListItem>Dekkes heller ikke :(</CrossListItem>
        </List>
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const V=["OrderedListStory","UnorderedListStory","CoverageListStory"];export{n as CoverageListStory,t as OrderedListStory,s as UnorderedListStory,V as __namedExportsOrder,P as default};
