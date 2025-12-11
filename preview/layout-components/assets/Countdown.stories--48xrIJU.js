import{j as r}from"./jsx-runtime-D9p_MChh.js";import{C as p}from"./Countdown-Bqq8HT9V.js";import{r as i}from"./index-CRL2yuNo.js";import{P as c}from"./Button-BPhaSTk9.js";import{F as d}from"./Flex-C2kqvdXP.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-B4HAJZS8.js";import"./Loader-BBBxl9FC.js";import"./useDelayedRender-ClAGw7sE.js";import"./tokens-NmszT_nq.js";const W={title:"Komponenter/Countdown",component:p,parameters:{layout:"centered"},tags:["autodocs"]},u=({children:t})=>{const[a,m]=i.useState(0);return r.jsxs(d,{style:{width:500},direction:"column",gap:24,children:[r.jsx("div",{children:t},a),r.jsx(c,{onClick:()=>m(Date.now()),style:{width:200},children:"Restart"})]})},o={args:{from:5e3},decorators:t=>r.jsx(u,{children:r.jsx(t,{})})};var e,s,n;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    from: 5000
  },
  decorators: Story => <Wrapper>
            <Story />
        </Wrapper>
}`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const k=["Countdown"];export{o as Countdown,k as __namedExportsOrder,W as default};
