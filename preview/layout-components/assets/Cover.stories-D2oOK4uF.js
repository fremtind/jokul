import{j as e}from"./jsx-runtime-D9p_MChh.js";import{F as t}from"./Flex-C2kqvdXP.js";import{L as n}from"./Link-BJbN6Wxp.js";import{L as b}from"./Logo-QudBFglV.js";import{C as L}from"./_index-DywzdJ60.js";import{P as F}from"./_index-Drc7fH7a.js";import{c as v}from"./clsx-B-dksMZM.js";import{R as f}from"./index-CRL2yuNo.js";import{t as o}from"./tokens-NmszT_nq.js";/* empty css               */import"./useId-BJAJhdYZ.js";import"./_commonjsHelpers-gnU0ypJ3.js";const j=f.forwardRef(function(d,l){const{as:p="div",className:m,minHeight:g="100dvh",gap:r,padding:k,style:y,...x}=d,C=p;return e.jsx(C,{"data-testid":"jkl-cover",className:v("jkl-cover",m),style:{...y,"--min-height":g,"--padding":k?o.unit[k]:0,"--gap":r?o.unit[r]:0},...x,ref:l})}),w=f.forwardRef(function(d,l){const{as:p="div",className:m,...g}=d,r=p;return e.jsx(r,{"data-testid":"jkl-cover__content",className:v("jkl-cover__content",m),...g,ref:l})}),a=Object.assign(j,{Content:w});j.__docgenInfo={description:`Lar deg sentrere hovedinnholdet i en blokk vertikalt på siden,
samtidig som du har eventuelt annet innhold helt i toppen eller bunnen
av blokken. Dette kan være en enkel måte å lage en klassisk layout
med toppmeny og footer, eller en stor "hero"-seksjon på en landingsside.`,methods:[],displayName:"Cover",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<ElementType>["ref"]'},description:""},minHeight:{required:!1,tsType:{name:"string"},description:`Hvor høy Cover-komponenten skal være. Som standard dekker den hele
høyden, men du kan sette den lavere, f.eks. hvis du vil "forhånds-
vise" deler av innholdet lenger ned på siden.
@default "100dvh"`},gap:{required:!1,tsType:{name:"unknown"},description:`Avstand mellom det forskjellige innholdet i Cover-komponenten.
Kan være nyttig hvis du har flere elementer over/under hoved-
innholdet, eller hvis hoverdinnholdet er så høyt at det tar
opp hele høyden av skjermen, f.eks. på små skjermer.
Du kan bruke \`tokens.unit\` for å velge avstand, eller sette gap
til \`undefined\` hvis du ikke ønsker avstand.
@default 20`},padding:{required:!1,tsType:{name:"unknown"},description:"Padding for hele komponenten. La være `undefined` hvis du ikke\nønsker padding.\n@default undefined"}}};const I={title:"Layout/Primitives/Cover",component:a,subcomponents:{Content:a.Content},tags:["autodocs"],argTypes:{minHeight:{table:{defaultValue:{summary:"100dvh"}},control:{type:"text"}},padding:{table:{defaultValue:{summary:"20"}},options:[...Object.keys(o.unit),void 0],control:{type:"select"}},gap:{table:{defaultValue:{summary:"undefined"}},options:[...Object.keys(o.unit),void 0],control:{type:"select"}},ref:{table:{disable:!0}},as:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}}},args:{minHeight:"100dvh",padding:20,gap:void 0}},s={parameters:{layout:"fullscreen"},args:{padding:void 0},render:i=>e.jsxs(a,{...i,children:[e.jsxs(t,{as:"header",wrap:!0,gap:16,justifyContent:"space-between",alignItems:"center",style:{padding:"var(--jkl-unit-30)"},children:[e.jsx(b,{style:{height:"20px",flexShrink:0}}),e.jsxs(t,{wrap:!0,gap:16,children:[e.jsx(n,{href:"#",children:"Skadesaker"}),e.jsx(n,{href:"#",children:"Forsikringer"}),e.jsx(n,{href:"#",children:"Min side"})]})]}),e.jsx(a.Content,{as:"main",children:e.jsxs(L,{position:"center",as:F,children:[e.jsx("h1",{children:"Velkommen 👋"}),e.jsx("p",{children:"For å dokumentere endringer på en måte som automatiserer versjonering og generering av changelogs, bruker vi verktøyet Changesets."}),e.jsx("p",{children:"Changesets lar oss definere nøyaktig hvilke pakker som er påvirket av en endring og hva slags versjonsoppdatering (major, minor, eller patch) endringen medfører."})]})}),e.jsxs(t,{as:"footer",direction:"column",gap:24,style:{padding:"var(--jkl-unit-30)",backgroundColor:"var(--jkl-color-background-container-high)"},children:[e.jsx("p",{children:"Denne siden er laget av Jøkul designsystem for å vise hvordan Cover kan brukes."}),e.jsxs(t,{gap:16,children:[e.jsx(n,{href:"#",children:"Bruk av informasjonskapsler"}),e.jsx(n,{external:!0,href:"#",children:"Personverneklæring"})]})]})]})};var c,h,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  args: {
    padding: undefined
  },
  render: props => {
    return <Cover {...props}>
                <Flex as="header" wrap gap={16} justifyContent="space-between" alignItems="center"
      // Vi trenger en (semantisk?) padding-prop for Flex
      style={{
        padding: "var(--jkl-unit-30)"
      }}>
                    <Logo style={{
          height: "20px",
          flexShrink: 0
        }} />
                    <Flex wrap gap={16}>
                        <Link href="#">Skadesaker</Link>
                        <Link href="#">Forsikringer</Link>
                        <Link href="#">Min side</Link>
                    </Flex>
                </Flex>
                <Cover.Content as="main">
                    <Column position="center" as={Prose}>
                        <h1>Velkommen 👋</h1>
                        <p>
                            For å dokumentere endringer på en måte som
                            automatiserer versjonering og generering av
                            changelogs, bruker vi verktøyet Changesets.
                        </p>
                        <p>
                            Changesets lar oss definere nøyaktig hvilke pakker
                            som er påvirket av en endring og hva slags
                            versjonsoppdatering (major, minor, eller patch)
                            endringen medfører.
                        </p>
                    </Column>
                </Cover.Content>
                <Flex as="footer" direction="column" gap={24}
      // Vi trenger en (semantisk?) padding-prop for Flex
      style={{
        padding: "var(--jkl-unit-30)",
        backgroundColor: "var(--jkl-color-background-container-high)"
      }}>
                    <p>
                        Denne siden er laget av Jøkul designsystem for å vise
                        hvordan Cover kan brukes.
                    </p>
                    <Flex gap={16}>
                        <Link href="#">Bruk av informasjonskapsler</Link>
                        <Link external href="#">
                            Personverneklæring
                        </Link>
                    </Flex>
                </Flex>
            </Cover>;
  }
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const M=["Demo"];export{s as Demo,M as __namedExportsOrder,I as default};
