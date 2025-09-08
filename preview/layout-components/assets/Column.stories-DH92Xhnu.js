import{j as e}from"./jsx-runtime-BbjHj44Y.js";import{B as i}from"./Button-V_7JZhcr.js";import{P as l}from"./_index-DUgnHLuR.js";import{C as s}from"./_index-CkuPjjiL.js";/* empty css               */import{t as m}from"./tokens-DyQL8Q6a.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-ByfnePFg.js";import"./Loader-BdwWmQR7.js";import"./useDelayedRender-B8sMdCvv.js";const x={title:"Layout/Primitives/Column",component:s,tags:["autodocs"],argTypes:{contentWidth:{table:{defaultValue:{summary:"70ch"}},control:{type:"text"}},position:{table:{defaultValue:{summary:"left"}},options:["left","center"],control:{type:"select"}},gutter:{table:{defaultValue:{summary:"40"}},options:Object.keys(m.unit),control:{type:"select"}},centerWithin:{table:{defaultValue:{summary:"false"}}},ref:{table:{disable:!0}},as:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}}},args:{contentWidth:"70ch",centerWithin:!1,position:"left"}},r={parameters:{layout:"fullscreen"},render:o=>e.jsxs(s,{as:l,...o,style:{marginBlock:"var(--jkl-unit-80)"},children:[e.jsx("h2",{className:"jkl-heading-2",children:"Lag en commit"}),e.jsx("p",{children:"For å dokumentere endringer på en måte som automatiserer versjonering og generering av changelogs, bruker vi verktøyet Changesets."}),e.jsx("p",{children:"Changesets lar oss definere nøyaktig hvilke pakker som er påvirket av en endring og hva slags versjonsoppdatering (major, minor, eller patch) endringen medfører."}),e.jsx(i,{children:"Gå videre"})]})};var t,n,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: props => {
    return <Column as={Prose} {...props} style={{
      marginBlock: "var(--jkl-unit-80)"
    }}>
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
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const C=["Demo"];export{r as Demo,C as __namedExportsOrder,x as default};
