import{R as e}from"./index-siqcju79.js";import{F as t}from"./Flex-CB0XPCq0.js";import{L as n}from"./Link-Dwdm3rDB.js";import{L as y}from"./Logo-jk6PFf05.js";import{C}from"./_index-Doy8Vjfg.js";import{P as b}from"./_index-CpRA1-4K.js";import{c}from"./clsx-B-dksMZM.js";import{t as o}from"./tokens-CmXyXTIM.js";/* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./SlotComponent-CWN6EcE2.js";import"./useId-CahK3IZ3.js";const v=e.forwardRef(function(l,d){const{as:p="div",className:m,minHeight:g="100dvh",gap:r,padding:k,style:u,...h}=l,f=p;return e.createElement(f,{"data-testid":"jkl-cover",className:c("jkl-cover",m),style:{...u,"--min-height":g,"--padding":k?o.spacing[k]:0,"--gap":r?o.spacing[r]:0},...h,ref:d})}),j=e.forwardRef(function(l,d){const{as:p="div",className:m,...g}=l,r=p;return e.createElement(r,{"data-testid":"jkl-cover__content",className:c("jkl-cover__content",m),...g,ref:d})}),s=Object.assign(v,{Content:j});v.__docgenInfo={description:`Lar deg sentrere hovedinnholdet i en blokk vertikalt på siden,
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
Du kan bruke \`tokens.spacing\` for å velge avstand, eller sette gap
til \`undefined\` hvis du ikke ønsker avstand.
@default 20`},padding:{required:!1,tsType:{name:"unknown"},description:"Padding for hele komponenten. La være `undefined` hvis du ikke\nønsker padding.\n@default undefined"}}};const V={title:"Layout/Primitives/Cover",component:s,subcomponents:{Content:s.Content},tags:["autodocs"],argTypes:{minHeight:{table:{defaultValue:{summary:"100dvh"}},control:{type:"text"}},padding:{table:{defaultValue:{summary:"16"}},options:[...Object.keys(o.spacing),void 0],control:{type:"select"}},gap:{table:{defaultValue:{summary:"undefined"}},options:[...Object.keys(o.spacing),void 0],control:{type:"select"}},ref:{table:{disable:!0}},as:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}}},args:{minHeight:"100dvh",padding:16,gap:void 0}},a={parameters:{layout:"fullscreen"},args:{padding:void 0},render:i=>e.createElement(s,{...i},e.createElement(t,{as:"header",wrap:!0,gap:16,justifyContent:"space-between",alignItems:"center",style:{padding:"var(--jkl-unit-30)"}},e.createElement(y,{style:{height:"20px",flexShrink:0}}),e.createElement(t,{wrap:!0,gap:16},e.createElement(n,{href:"#"},"Skadesaker"),e.createElement(n,{href:"#"},"Forsikringer"),e.createElement(n,{href:"#"},"Min side"))),e.createElement(s.Content,{as:"main"},e.createElement(C,{position:"center",as:b},e.createElement("h1",null,"Velkommen 👋"),e.createElement("p",null,"For å dokumentere endringer på en måte som automatiserer versjonering og generering av changelogs, bruker vi verktøyet Changesets."),e.createElement("p",null,"Changesets lar oss definere nøyaktig hvilke pakker som er påvirket av en endring og hva slags versjonsoppdatering (major, minor, eller patch) endringen medfører."))),e.createElement(t,{as:"footer",direction:"column",gap:24,style:{padding:"var(--jkl-unit-30)",backgroundColor:"var(--jkl-color-background-container-high)"}},e.createElement("p",null,"Denne siden er laget av Jøkul designsystem for å vise hvordan Cover kan brukes."),e.createElement(t,{gap:16},e.createElement(n,{href:"#"},"Bruk av informasjonskapsler"),e.createElement(n,{external:!0,href:"#"},"Personverneklæring"))))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
                    <Center position="center" as={Prose}>
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
                    </Center>
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
}`,...a.parameters?.docs?.source}}};const S=["Demo"];export{a as Demo,S as __namedExportsOrder,V as default};
