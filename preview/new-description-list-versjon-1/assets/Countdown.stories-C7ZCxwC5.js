import{C as n}from"./Countdown-Ca7xhRuQ.js";import{R as t,r as m}from"./index-siqcju79.js";import{P as s}from"./Button-Dng0c-UK.js";import{F as p}from"./Flex-BJkkUza_.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./tokens-CmXyXTIM.js";import"./SlotComponent-DjLpilNT.js";import"./mergeRefs-CYSLoF3z.js";const R={title:"Komponenter/Countdown",component:n,parameters:{layout:"centered"},tags:["autodocs"]},c=({children:e})=>{const[o,a]=m.useState(0);return t.createElement(p,{style:{width:500},direction:"column",gap:24},t.createElement("div",{key:o},e),t.createElement(s,{onClick:()=>a(Date.now()),style:{width:200}},"Restart"))},r={args:{from:5e3},decorators:e=>t.createElement(c,null,t.createElement(e,null))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    from: 5000
  },
  decorators: Story => <Wrapper>
            <Story />
        </Wrapper>
}`,...r.parameters?.docs?.source}}};const W=["Countdown"];export{r as Countdown,W as __namedExportsOrder,R as default};
