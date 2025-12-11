import{j as r,r as n}from"./iframe-Bv7LMU6l.js";import{C as a}from"./Countdown-D50Iwmw-.js";import{P as m}from"./Button-CFJ4hIao.js";import{F as p}from"./Flex-DEGsCmqw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-IE3jCIN5.js";import"./Loader-C0GjiYkN.js";import"./useDelayedRender-CkibMecQ.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-C4FUfkUa.js";import"./mergeRefs-NE9DwXo1.js";const S={title:"Komponenter/Countdown",component:a},i=({children:t})=>{const[e,s]=n.useState(0);return r.jsxs(p,{style:{width:500},direction:"column",gap:"m",children:[r.jsx("div",{children:t},e),r.jsx(m,{onClick:()=>s(Date.now()),style:{width:200},children:"Restart"})]})},o={args:{from:5e3},decorators:t=>r.jsx(i,{children:r.jsx(t,{})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    from: 5000
  },
  decorators: Story => <Wrapper>
            <Story />
        </Wrapper>
}`,...o.parameters?.docs?.source}}};const E=["Countdown"];export{o as Countdown,E as __namedExportsOrder,S as default};
