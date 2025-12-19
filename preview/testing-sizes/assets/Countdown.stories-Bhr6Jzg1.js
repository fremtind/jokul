import{j as r,r as n}from"./iframe-D9oBkFDu.js";import{C as a}from"./Countdown-D4l044Xi.js";import{P as m}from"./Button-DF06GKKE.js";import{F as p}from"./Flex-BSP-HEL-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-D1hWIRBe.js";import"./Loader-BfC39jws.js";import"./useDelayedRender-C2wwzBlT.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-DgZ07_Qg.js";import"./mergeRefs-CY3P0X8Y.js";const S={title:"Komponenter/Countdown",component:a},i=({children:t})=>{const[e,s]=n.useState(0);return r.jsxs(p,{style:{width:500},direction:"column",gap:"m",children:[r.jsx("div",{children:t},e),r.jsx(m,{onClick:()=>s(Date.now()),style:{width:200},children:"Restart"})]})},o={args:{from:5e3},decorators:t=>r.jsx(i,{children:r.jsx(t,{})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    from: 5000
  },
  decorators: Story => <Wrapper>
            <Story />
        </Wrapper>
}`,...o.parameters?.docs?.source}}};const E=["Countdown"];export{o as Countdown,E as __namedExportsOrder,S as default};
