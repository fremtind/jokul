import{j as r,r as n}from"./iframe-BkUFrIqG.js";import{C as a}from"./Countdown-xEEZGvNT.js";import{P as m}from"./Button-31nSmsNB.js";import{F as p}from"./Flex-DSQ_lNiu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-CA7Tdj9w.js";import"./Loader-CQHzec3M.js";import"./useDelayedRender-DFFzekKL.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent--24fpIl6.js";import"./mergeRefs-iP8VcI2O.js";const S={title:"Komponenter/Countdown",component:a},i=({children:t})=>{const[e,s]=n.useState(0);return r.jsxs(p,{style:{width:500},direction:"column",gap:"m",children:[r.jsx("div",{children:t},e),r.jsx(m,{onClick:()=>s(Date.now()),style:{width:200},children:"Restart"})]})},o={args:{from:5e3},decorators:t=>r.jsx(i,{children:r.jsx(t,{})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    from: 5000
  },
  decorators: Story => <Wrapper>
            <Story />
        </Wrapper>
}`,...o.parameters?.docs?.source}}};const E=["Countdown"];export{o as Countdown,E as __namedExportsOrder,S as default};
