import{j as r,r as n}from"./iframe-BbCvJXdR.js";import{C as a}from"./Countdown-DqNZKjaW.js";import{P as m}from"./Button-CSjAPB4S.js";import{F as p}from"./Flex-DNlNnz2r.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-Fc6ouFXC.js";import"./Loader-DSiXNnx8.js";import"./useDelayedRender-b-LpG6Jy.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-B8marEvI.js";import"./mergeRefs-BQJi4Po9.js";const S={title:"Komponenter/Countdown",component:a},i=({children:t})=>{const[e,s]=n.useState(0);return r.jsxs(p,{style:{width:500},direction:"column",gap:"m",children:[r.jsx("div",{children:t},e),r.jsx(m,{onClick:()=>s(Date.now()),style:{width:200},children:"Restart"})]})},o={args:{from:5e3},decorators:t=>r.jsx(i,{children:r.jsx(t,{})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    from: 5000
  },
  decorators: Story => <Wrapper>
            <Story />
        </Wrapper>
}`,...o.parameters?.docs?.source}}};const E=["Countdown"];export{o as Countdown,E as __namedExportsOrder,S as default};
