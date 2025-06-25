import{j as r}from"./jsx-runtime-BbgvZ3_S.js";import{C as p}from"./Countdown-Bi9iLjcQ.js";import{r as i}from"./index-C67T7Eu_.js";import{P as c}from"./Button-Cq5kUIvL.js";import{F as d}from"./Flex-BLRmRFQf.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-DG-T-Dnv.js";import"./Loader-DabjGMr_.js";import"./useDelayedRender-BrrlN5Nt.js";import"./tokens-CvksrKef.js";const W={title:"Komponenter/Countdown",component:p,parameters:{layout:"centered"},tags:["autodocs"]},u=({children:t})=>{const[a,m]=i.useState(0);return r.jsxs(d,{style:{width:500},direction:"column",gap:24,children:[r.jsx("div",{children:t},a),r.jsx(c,{onClick:()=>m(Date.now()),style:{width:200},children:"Restart"})]})},o={args:{from:5e3},decorators:t=>r.jsx(u,{children:r.jsx(t,{})})};var e,s,n;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    from: 5000
  },
  decorators: Story => <Wrapper>
            <Story />
        </Wrapper>
}`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const k=["Countdown"];export{o as Countdown,k as __namedExportsOrder,W as default};
