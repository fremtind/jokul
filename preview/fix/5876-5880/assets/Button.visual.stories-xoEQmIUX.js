import{j as t}from"./iframe-DzdEdhGJ.js";import{B as o}from"./Button-CekJ-YDq.js";/* empty css               */import{F as e}from"./Flex-Dgx8uUWI.js";import{C as s}from"./CopyIcon-yA17nJxD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-HPQJB4Ob.js";import"./Loader-FKCDd8Z6.js";import"./useDelayedRender-B4f7Shc1.js";import"./SlotComponent-DIFO0-Ux.js";import"./mergeRefs-BVcExBtn.js";import"./Icon-CIyquo7v.js";const P={title:"Visuelle regresjonstester/Button",component:o},a={type:"button",children:"Kopier",loader:{showLoader:!1,textDescription:"laster inn"}},i={args:a,render:r=>t.jsx(e,{direction:"column",gap:"m",style:{width:"100%"},children:["primary","secondary","tertiary","ghost"].map(n=>t.jsxs(e,{gap:"xs",children:[t.jsx(o,{...r,variant:n}),t.jsx(o,{...r,variant:n,icon:t.jsx(s,{})}),t.jsx(o,{...r,variant:n,icon:t.jsx(s,{}),iconPosition:"right"}),t.jsx(o,{...r,variant:n,icon:t.jsx(s,{}),iconPosition:"right",children:null})]},n))})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const f=["IconPlacements"];export{i as IconPlacements,f as __namedExportsOrder,P as default};
