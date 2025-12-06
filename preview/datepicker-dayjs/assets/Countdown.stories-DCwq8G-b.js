import{j as r,r as n}from"./iframe-s-7ILYx9.js";import{C as a}from"./Countdown-BAw2L95z.js";import{P as m}from"./Button-CwWO_8QQ.js";import{F as p}from"./Flex-B1t02KUV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-Fp5c39wE.js";import"./Loader-B2fug2BN.js";import"./useDelayedRender-CVV9hUGd.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-Dl6dp0n5.js";import"./mergeRefs-Dk1aLC7W.js";const S={title:"Komponenter/Countdown",component:a},i=({children:t})=>{const[e,s]=n.useState(0);return r.jsxs(p,{style:{width:500},direction:"column",gap:"m",children:[r.jsx("div",{children:t},e),r.jsx(m,{onClick:()=>s(Date.now()),style:{width:200},children:"Restart"})]})},o={args:{from:5e3},decorators:t=>r.jsx(i,{children:r.jsx(t,{})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    from: 5000
  },
  decorators: Story => <Wrapper>
            <Story />
        </Wrapper>
}`,...o.parameters?.docs?.source}}};const E=["Countdown"];export{o as Countdown,E as __namedExportsOrder,S as default};
