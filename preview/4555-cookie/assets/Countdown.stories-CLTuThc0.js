import{C as n}from"./Countdown-Ca7xhRuQ.js";import{R as t,r as s}from"./index-siqcju79.js";import{P as m}from"./Button-Dng0c-UK.js";import{F as p}from"./Flex-B3l4XY1h.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./tokens-CmXyXTIM.js";import"./SlotComponent-CWN6EcE2.js";const S={title:"Komponenter/Countdown",component:n,parameters:{layout:"centered"},tags:["autodocs"]},c=({children:r})=>{const[o,a]=s.useState(0);return t.createElement(p,{style:{width:500},direction:"column",gap:24},t.createElement("div",{key:o},r),t.createElement(m,{onClick:()=>a(Date.now()),style:{width:200}},"Restart"))},e={args:{from:5e3},decorators:r=>t.createElement(c,null,t.createElement(r,null))};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    from: 5000
  },
  decorators: Story => <Wrapper>
            <Story />
        </Wrapper>
}`,...e.parameters?.docs?.source}}};const R=["Countdown"];export{e as Countdown,R as __namedExportsOrder,S as default};
