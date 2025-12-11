import{R as e}from"./index-siqcju79.js";import{B as a}from"./Button-Dng0c-UK.js";import{P as o}from"./_index-CpRA1-4K.js";import{C as n}from"./_index-Doy8Vjfg.js";/* empty css               */import{t as s}from"./tokens-CmXyXTIM.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";const y={title:"Layout/Primitives/Center",component:n,tags:["autodocs"],argTypes:{contentWidth:{table:{defaultValue:{summary:"70ch"}},control:{type:"text"}},position:{table:{defaultValue:{summary:"center"}},options:["left","center"],control:{type:"select"}},gutter:{table:{defaultValue:{summary:"32"}},options:Object.keys(s.spacing),control:{type:"select"}},centerWithin:{table:{defaultValue:{summary:"false"}}},ref:{table:{disable:!0}},as:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}}},args:{contentWidth:"70ch",centerWithin:!1,position:"center"}},r={parameters:{layout:"fullscreen"},decorators:[t=>e.createElement("div",{style:{paddingBlock:"var(--jkl-unit-130)"}},e.createElement(t,null))],render:t=>e.createElement(n,{as:o,...t},e.createElement("h2",{className:"jkl-heading-2"},"Lag en commit"),e.createElement("p",null,"For å dokumentere endringer på en måte som automatiserer versjonering og generering av changelogs, bruker vi verktøyet Changesets."),e.createElement("p",null,"Changesets lar oss definere nøyaktig hvilke pakker som er påvirket av en endring og hva slags versjonsoppdatering (major, minor, eller patch) endringen medfører."),e.createElement(a,null,"Gå videre"))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  decorators: [Story => <div style={{
    paddingBlock: "var(--jkl-unit-130)"
  }}>
                <Story />
            </div>],
  render: props => {
    return <Center as={Prose} {...props}>
                <h2 className="jkl-heading-2">Lag en commit</h2>
                <p>
                    For å dokumentere endringer på en måte som automatiserer
                    versjonering og generering av changelogs, bruker vi
                    verktøyet Changesets.
                </p>

                <p>
                    Changesets lar oss definere nøyaktig hvilke pakker som er
                    påvirket av en endring og hva slags versjonsoppdatering
                    (major, minor, eller patch) endringen medfører.
                </p>
                <Button>Gå videre</Button>
            </Center>;
  }
}`,...r.parameters?.docs?.source}}};const f=["Demo"];export{r as Demo,f as __namedExportsOrder,y as default};
