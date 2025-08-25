import{R as e}from"./index-siqcju79.js";import{c as g}from"./cow-CdXr5BwN.js";import{F as a}from"./Flex-DP-fj2ie.js";import{C as f,a as k,b as t}from"./types-CisFmCLD.js";import{c as u}from"./clsx-B-dksMZM.js";import{S as h}from"./SlotComponent-CWN6EcE2.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./tokens-CvksrKef.js";const o=e.forwardRef(function({as:i,asChild:s,className:l,placement:m="top",...d},c){const p=s?h:i||"img";return e.createElement(p,{ref:c,className:u("jkl-card-image",`jkl-card-image--${m}`,l),...d})});o.__docgenInfo={description:"Bildekomponent som kan brukes i `Card` for å sørge for at bildet\nblør helt ut i kantene av kortet. Rendres normalt som et `<img>`-\nelement, men du kan overstyre dette med `as` dersom du f.eks. har\nen egen komponent for å håndtere responsive bilder.",methods:[],displayName:"CardImage",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<ElementType>["ref"]'},description:""},placement:{defaultValue:{value:'"top"',computed:!1},required:!1}}};const D={title:"Komponenter/Card",component:t,parameters:{layout:"centered",docs:{description:{component:"Another description, overriding the comments"}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:k},padding:{control:"select",options:f}}},n={name:"Card med bilde",args:{variant:"high",padding:"m",children:"",clickable:!0,as:"a",href:"#","aria-label":"Se forsikringene mine",style:{maxWidth:"420px"}},render:({...r})=>e.createElement(t,{...r,asChild:!1},e.createElement(o,{src:g,alt:"",style:{overflow:"hidden",objectFit:"cover",aspectRatio:16/9}}),e.createElement(a,{direction:"column",gap:16},e.createElement(a,{direction:"column",gap:8},e.createElement("p",{className:"jkl-heading-2"},"Se forsikringene mine"),e.createElement("p",null,"Du vil alltid ha en oversikt over forsikringene dine på forsikringsoversikten."))))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Card med bilde",
  args: {
    variant: "high",
    padding: "m",
    children: "",
    clickable: true,
    as: "a",
    href: "#",
    "aria-label": "Se forsikringene mine",
    style: {
      maxWidth: "420px"
    }
  },
  render: ({
    ...args
  }) => <Card {...args} asChild={false}>
            <CardImage src={url.default} alt="" style={{
      overflow: "hidden",
      objectFit: "cover",
      aspectRatio: 16 / 9
    }} />

            <Flex direction="column" gap={16}>
                <Flex direction="column" gap={8}>
                    <p className="jkl-heading-2">Se forsikringene mine</p>
                    <p>
                        Du vil alltid ha en oversikt over forsikringene dine på
                        forsikringsoversikten.
                    </p>
                </Flex>
            </Flex>
        </Card>
}`,...n.parameters?.docs?.source}}};const T=["ImageCard"];export{n as ImageCard,T as __namedExportsOrder,D as default};
