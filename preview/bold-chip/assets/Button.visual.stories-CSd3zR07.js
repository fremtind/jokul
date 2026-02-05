import{j as t}from"./iframe-BeW8231r.js";import{B as n}from"./Button-DPqz5f50.js";/* empty css               */import{F as e}from"./Flex-CD48eqwi.js";import{C as s}from"./CopyIcon-ByPeI4Db.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-1e7mNHur.js";import"./Loader-Cf2ZtL_N.js";import"./useDelayedRender-Dz_JPkhN.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-CLc-BvzD.js";import"./mergeRefs-CqsBF_-Y.js";import"./Icon-C2YR2oDk.js";const f={title:"Visuelle regresjonstester/Button",component:n},a={type:"button",children:"Kopier",loader:{showLoader:!1,textDescription:"laster inn"}},i={args:a,render:r=>t.jsx(e,{direction:"column",gap:"m",style:{width:"100%"},children:["primary","secondary","tertiary","ghost"].map(o=>t.jsxs(e,{gap:"xs",children:[t.jsx(n,{...r,variant:o}),t.jsx(n,{...r,variant:o,icon:t.jsx(s,{})}),t.jsx(n,{...r,variant:o,icon:t.jsx(s,{}),iconPosition:"right"}),t.jsx(n,{...r,variant:o,icon:t.jsx(s,{}),iconPosition:"right",children:null})]},o))})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: baseArgs,
  render: args => <Flex direction="column" gap="m" style={{
    width: "100%"
  }}>
            {["primary", "secondary", "tertiary", "ghost"].map(variant => <Flex key={variant} gap="xs">
                    <Button {...args} variant={variant as ButtonVariant} />
                    <Button {...args} variant={variant as ButtonVariant} icon={<CopyIcon />} />
                    <Button {...args} variant={variant as ButtonVariant} icon={<CopyIcon />} iconPosition="right" />
                    <Button {...args} variant={variant as ButtonVariant} icon={<CopyIcon />} iconPosition="right"
      // biome-ignore lint/correctness/noChildrenProp: kun overstyring av args
      children={null} />
                </Flex>)}
        </Flex>
}`,...i.parameters?.docs?.source}}};const C=["IconPlacements"];export{i as IconPlacements,C as __namedExportsOrder,f as default};
