import{j as r}from"./jsx-runtime-DqZpzl9T.js";import{C as n}from"./Countdown-z0gW7Gcf.js";import{r as a}from"./index-siqcju79.js";import{P as m}from"./Button-fpmiG8ZH.js";import{F as p}from"./Flex-4pIEM4q7.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-CDpFE6wc.js";import"./useDelayedRender-CQprwS1c.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-DNbIHoXc.js";import"./mergeRefs-DouPjScu.js";const E={title:"Komponenter/Countdown",component:n,parameters:{layout:"centered"},tags:["autodocs"]},i=({children:t})=>{const[e,s]=a.useState(0);return r.jsxs(p,{style:{width:500},direction:"column",gap:"m",children:[r.jsx("div",{children:t},e),r.jsx(m,{onClick:()=>s(Date.now()),style:{width:200},children:"Restart"})]})},o={args:{from:5e3},decorators:t=>r.jsx(i,{children:r.jsx(t,{})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    from: 5000
  },
  decorators: Story => <Wrapper>
            <Story />
        </Wrapper>
}`,...o.parameters?.docs?.source}}};const W=["Countdown"];export{o as Countdown,W as __namedExportsOrder,E as default};
