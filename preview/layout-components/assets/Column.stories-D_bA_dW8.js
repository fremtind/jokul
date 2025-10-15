import{j as e}from"./jsx-runtime-D9p_MChh.js";import{B as i}from"./Button-BPhaSTk9.js";import{P as l}from"./_index-Drc7fH7a.js";import{C as s}from"./_index-DywzdJ60.js";/* empty css               */import{t as m}from"./tokens-NmszT_nq.js";import"./index-CRL2yuNo.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-B4HAJZS8.js";import"./Loader-BBBxl9FC.js";import"./useDelayedRender-ClAGw7sE.js";const x={title:"Layout/Primitives/Column",component:s,tags:["autodocs"],argTypes:{contentWidth:{table:{defaultValue:{summary:"70ch"}},control:{type:"text"}},position:{table:{defaultValue:{summary:"left"}},options:["left","center"],control:{type:"select"}},gutter:{table:{defaultValue:{summary:"40"}},options:Object.keys(m.unit),control:{type:"select"}},centerWithin:{table:{defaultValue:{summary:"false"}}},ref:{table:{disable:!0}},as:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}}},args:{contentWidth:"70ch",centerWithin:!1,position:"left"}},r={parameters:{layout:"fullscreen"},decorators:[t=>e.jsx("div",{style:{paddingBlock:"var(--jkl-unit-130)"},children:e.jsx(t,{})})],render:t=>e.jsxs(s,{as:l,...t,children:[e.jsx("h2",{className:"jkl-heading-2",children:"Lag en commit"}),e.jsx("p",{children:"For å dokumentere endringer på en måte som automatiserer versjonering og generering av changelogs, bruker vi verktøyet Changesets."}),e.jsx("p",{children:"Changesets lar oss definere nøyaktig hvilke pakker som er påvirket av en endring og hva slags versjonsoppdatering (major, minor, eller patch) endringen medfører."}),e.jsx(i,{children:"Gå videre"})]})};var n,o,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  decorators: [Story => <div style={{
    paddingBlock: "var(--jkl-unit-130)"
  }}>
                <Story />
            </div>],
  render: props => {
    return <Column as={Prose} {...props}>
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
            </Column>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const C=["Demo"];export{r as Demo,C as __namedExportsOrder,x as default};
