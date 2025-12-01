import{j as r}from"./jsx-runtime-BOJBhsC5.js";import{C as n}from"./Countdown-D5ykWu3c.js";import{r as a}from"./index-Bv6P490N.js";import{P as m}from"./Button-7xZWz2K4.js";import{F as p}from"./Flex-DAYRz_h9.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-CFxVqUaX.js";import"./Loader-DU6KErPQ.js";import"./useDelayedRender-CuF3W8uc.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-CgJtPkTS.js";import"./mergeRefs-BP-F_O_W.js";const E={title:"Komponenter/Countdown",component:n,parameters:{layout:"centered"},tags:["autodocs"]},i=({children:t})=>{const[e,s]=a.useState(0);return r.jsxs(p,{style:{width:500},direction:"column",gap:"m",children:[r.jsx("div",{children:t},e),r.jsx(m,{onClick:()=>s(Date.now()),style:{width:200},children:"Restart"})]})},o={args:{from:5e3},decorators:t=>r.jsx(i,{children:r.jsx(t,{})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    from: 5000
  },
  decorators: Story => <Wrapper>
            <Story />
        </Wrapper>
}`,...o.parameters?.docs?.source}}};const W=["Countdown"];export{o as Countdown,W as __namedExportsOrder,E as default};
