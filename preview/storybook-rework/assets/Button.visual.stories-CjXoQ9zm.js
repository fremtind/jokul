import{j as t}from"./iframe-BUprc3LF.js";import{B as o}from"./Button-CClirhQT.js";/* empty css               */import{F as e}from"./Flex-B0VM5WVF.js";import{C as s}from"./CopyIcon-CgpekSjX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-B__mXeix.js";import"./Loader-CBZ6YF35.js";import"./useDelayedRender-ByQywnnt.js";import"./SlotComponent-B6iiGNUn.js";import"./mergeRefs-cfCYCK0R.js";import"./Icon-BSZAwLB9.js";const P={title:"Visuelle regresjonstester/Button",component:o},a={type:"button",children:"Kopier",loader:{showLoader:!1,textDescription:"laster inn"}},i={args:a,render:r=>t.jsx(e,{direction:"column",gap:"m",style:{width:"100%"},children:["primary","secondary","tertiary","ghost"].map(n=>t.jsxs(e,{gap:"xs",children:[t.jsx(o,{...r,variant:n}),t.jsx(o,{...r,variant:n,icon:t.jsx(s,{})}),t.jsx(o,{...r,variant:n,icon:t.jsx(s,{}),iconPosition:"right"}),t.jsx(o,{...r,variant:n,icon:t.jsx(s,{}),iconPosition:"right",children:null})]},n))})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
