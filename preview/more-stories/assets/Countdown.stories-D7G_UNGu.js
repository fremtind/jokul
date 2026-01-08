import{j as r,r as n}from"./iframe-CKDgsx_0.js";import{C as a}from"./Countdown-CmHdzd9c.js";import{P as m}from"./Button-BWWECJPW.js";import{F as p}from"./Flex-B0oQsAvs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-BFOLxISJ.js";import"./Loader-BtO_BahY.js";import"./useDelayedRender-Cr77zqS6.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-AbK3tEB5.js";import"./mergeRefs-BeOoAoNI.js";const S={title:"Komponenter/Countdown",component:a},i=({children:t})=>{const[e,s]=n.useState(0);return r.jsxs(p,{style:{width:500},direction:"column",gap:"m",children:[r.jsx("div",{children:t},e),r.jsx(m,{onClick:()=>s(Date.now()),style:{width:200},children:"Restart"})]})},o={args:{from:5e3},decorators:t=>r.jsx(i,{children:r.jsx(t,{})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    from: 5000
  },
  decorators: Story => <Wrapper>
            <Story />
        </Wrapper>
}`,...o.parameters?.docs?.source}}};const E=["Countdown"];export{o as Countdown,E as __namedExportsOrder,S as default};
