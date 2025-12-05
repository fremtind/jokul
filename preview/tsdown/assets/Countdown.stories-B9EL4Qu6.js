import{j as r,r as n}from"./iframe-Cc8xX6xK.js";import{C as a}from"./Countdown-BhztzP96.js";import{P as m}from"./Button-BNWXP-aH.js";import{F as p}from"./Flex-B90zwNBt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-CWB2JE3l.js";import"./Loader-BQ7ime7V.js";import"./useDelayedRender-CZKWXmRr.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-RJnoMQZv.js";import"./mergeRefs-DI_3XiOy.js";const S={title:"Komponenter/Countdown",component:a},i=({children:t})=>{const[e,s]=n.useState(0);return r.jsxs(p,{style:{width:500},direction:"column",gap:"m",children:[r.jsx("div",{children:t},e),r.jsx(m,{onClick:()=>s(Date.now()),style:{width:200},children:"Restart"})]})},o={args:{from:5e3},decorators:t=>r.jsx(i,{children:r.jsx(t,{})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    from: 5000
  },
  decorators: Story => <Wrapper>
            <Story />
        </Wrapper>
}`,...o.parameters?.docs?.source}}};const E=["Countdown"];export{o as Countdown,E as __namedExportsOrder,S as default};
