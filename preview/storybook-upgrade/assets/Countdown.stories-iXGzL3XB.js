import{j as r,r as n}from"./iframe-Cc5g7YQN.js";import{C as a}from"./Countdown-eAGJA4cR.js";import{P as m}from"./Button-M86RfuDl.js";import{F as p}from"./Flex-C9VTv9Zc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-cwOukogo.js";import"./Loader-DLYHhMXX.js";import"./useDelayedRender-BT1-1TY5.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-DkG8Cj17.js";import"./mergeRefs-C9wjjF-Q.js";const S={title:"Komponenter/Countdown",component:a},i=({children:t})=>{const[e,s]=n.useState(0);return r.jsxs(p,{style:{width:500},direction:"column",gap:"m",children:[r.jsx("div",{children:t},e),r.jsx(m,{onClick:()=>s(Date.now()),style:{width:200},children:"Restart"})]})},o={args:{from:5e3},decorators:t=>r.jsx(i,{children:r.jsx(t,{})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    from: 5000
  },
  decorators: Story => <Wrapper>
            <Story />
        </Wrapper>
}`,...o.parameters?.docs?.source}}};const E=["Countdown"];export{o as Countdown,E as __namedExportsOrder,S as default};
