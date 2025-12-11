import{j as t}from"./jsx-runtime-D9p_MChh.js";import{B as n}from"./Button-BPhaSTk9.js";/* empty css               */import{F as a}from"./Flex-C2kqvdXP.js";import{C as e}from"./CopyIcon-Dfi9KXmr.js";import"./index-CRL2yuNo.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-B4HAJZS8.js";import"./Loader-BBBxl9FC.js";import"./useDelayedRender-ClAGw7sE.js";import"./tokens-NmszT_nq.js";import"./Icon-BsB2AusX.js";const F={title:"Visuelle regresjonstester/Button",component:n,parameters:{layout:"centered"},tags:["visual"]},m={type:"button",children:"Kopier",loader:{showLoader:!1,textDescription:"laster inn"}},i={args:m,render:o=>t.jsx(a,{direction:"column",gap:24,style:{width:"100%"},children:["primary","secondary","tertiary","ghost"].map(r=>t.jsxs(a,{gap:8,children:[t.jsx(n,{...o,variant:r}),t.jsx(n,{...o,variant:r,icon:t.jsx(e,{})}),t.jsx(n,{...o,variant:r,icon:t.jsx(e,{}),iconPosition:"right"}),t.jsx(n,{...o,variant:r,icon:t.jsx(e,{}),iconPosition:"right",children:null})]},r))})};var s,c,p;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: baseArgs,
  render: args => <Flex direction="column" gap={24} style={{
    width: "100%"
  }}>
            {["primary", "secondary", "tertiary", "ghost"].map(variant => <Flex key={variant} gap={8}>
                    <Button {...args} variant={variant as ButtonVariant} />
                    <Button {...args} variant={variant as ButtonVariant} icon={<CopyIcon />} />
                    <Button {...args} variant={variant as ButtonVariant} icon={<CopyIcon />} iconPosition="right" />
                    <Button {...args} variant={variant as ButtonVariant} icon={<CopyIcon />} iconPosition="right"
      // biome-ignore lint/correctness/noChildrenProp: kun overstyring av args
      children={null} />
                </Flex>)}
        </Flex>
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const I=["IconPlacements"];export{i as IconPlacements,I as __namedExportsOrder,F as default};
