import{R as e}from"./index-siqcju79.js";import{F as r}from"./Flex-DP-fj2ie.js";import{I as l}from"./Tag-5cfiG99-.js";import{C as o,a as i,b as a}from"./types-CisFmCLD.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./tokens-CvksrKef.js";import"./SlotComponent-CWN6EcE2.js";import"./clsx-B-dksMZM.js";const k={title:"Komponenter/Card",component:a,parameters:{layout:"centered",docs:{description:{component:"Another description, overriding the comments"}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:i},padding:{control:"select",options:o}}},n={name:"Card som lenke",args:{padding:"l",variant:"high",children:"e",clickable:!0},render:({...t})=>e.createElement(a,{...t,as:"a",href:"#",asChild:!1,"aria-label":"Husforsikring"},e.createElement(r,{direction:"column",gap:16},e.createElement("div",null,e.createElement(l,null,"Fornyelse")),e.createElement(r,{direction:"column",gap:8},e.createElement("p",{className:"jkl-heading-2"},"Hus"),e.createElement("p",null,"Kittel Nielsens vei 88 1163 Oslo"))),e.createElement("hr",null),e.createElement(r,null,e.createElement("p",null,"311 kr/mnd")))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Card som lenke",
  args: {
    padding: "l",
    variant: "high",
    children: "e",
    clickable: true
  },
  render: ({
    ...args
  }) => <Card {...args} as="a" href="#" asChild={false} aria-label="Husforsikring">
            <Flex direction="column" gap={16}>
                <div>
                    <InfoTag>Fornyelse</InfoTag>
                </div>
                <Flex direction="column" gap={8}>
                    <p className="jkl-heading-2">Hus</p>
                    <p>Kittel Nielsens vei 88 1163 Oslo</p>
                </Flex>
            </Flex>
            <hr />
            <Flex>
                <p>311 kr/mnd</p>
            </Flex>
        </Card>
}`,...n.parameters?.docs?.source}}};const E=["LinkCard"];export{n as LinkCard,E as __namedExportsOrder,k as default};
