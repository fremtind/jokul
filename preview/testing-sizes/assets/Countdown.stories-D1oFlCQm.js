import{j as r,r as n}from"./iframe-XXWDj_k0.js";import{C as a}from"./Countdown-CyRjY7Zo.js";import{P as m}from"./Button-BqE5XfOP.js";import{F as p}from"./Flex-D2TCajRY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-BM4IPd0t.js";import"./Loader-B-6tRH1P.js";import"./useDelayedRender-CK5k7ifp.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-YW0u6-qR.js";import"./mergeRefs-nXp4u0MO.js";const S={title:"Komponenter/Countdown",component:a},i=({children:t})=>{const[e,s]=n.useState(0);return r.jsxs(p,{style:{width:500},direction:"column",gap:"m",children:[r.jsx("div",{children:t},e),r.jsx(m,{onClick:()=>s(Date.now()),style:{width:200},children:"Restart"})]})},o={args:{from:5e3},decorators:t=>r.jsx(i,{children:r.jsx(t,{})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    from: 5000
  },
  decorators: Story => <Wrapper>
            <Story />
        </Wrapper>
}`,...o.parameters?.docs?.source}}};const E=["Countdown"];export{o as Countdown,E as __namedExportsOrder,S as default};
