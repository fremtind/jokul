import{C as n}from"./Countdown-Ca7xhRuQ.js";import{R as t,r as s}from"./index-siqcju79.js";import{P as m}from"./Button-DwJi6NKm.js";import{F as c}from"./Flex-BxJRczDo.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";const g={title:"Komponenter/Countdown",component:n,parameters:{layout:"centered"},tags:["autodocs"]},p=({children:r})=>{const[o,a]=s.useState(0);return t.createElement(c,{style:{width:500},direction:"column",gap:"md"},t.createElement("div",{key:o},r),t.createElement(m,{onClick:()=>a(Date.now()),style:{width:200}},"Restart"))},e={args:{from:5e3},decorators:r=>t.createElement(p,null,t.createElement(r,null))};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    from: 5000
  },
  decorators: Story => <Wrapper>
            <Story />
        </Wrapper>
}`,...e.parameters?.docs?.source}}};const x=["Countdown"];export{e as Countdown,x as __namedExportsOrder,g as default};
