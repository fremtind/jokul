import{j as t}from"./iframe-CZL5QpJP.js";import{B as o}from"./Button-CjOz-OeH.js";/* empty css               */import{F as e}from"./Flex-QllCuGFI.js";import{C as s}from"./CopyIcon-nFgjIf-G.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-BiI-VvQ8.js";import"./Loader-Co7O7Ovp.js";import"./useDelayedRender-Cyink7Ym.js";import"./SlotComponent-DSKINQt4.js";import"./mergeRefs-y38XBLs0.js";import"./Icon-_0Rb8KBj.js";const P={title:"Visuelle regresjonstester/Button",component:o},a={type:"button",children:"Kopier",loader:{showLoader:!1,textDescription:"laster inn"}},i={args:a,render:r=>t.jsx(e,{direction:"column",gap:"m",style:{width:"100%"},children:["primary","secondary","tertiary","ghost"].map(n=>t.jsxs(e,{gap:"xs",children:[t.jsx(o,{...r,variant:n}),t.jsx(o,{...r,variant:n,icon:t.jsx(s,{})}),t.jsx(o,{...r,variant:n,icon:t.jsx(s,{}),iconPosition:"right"}),t.jsx(o,{...r,variant:n,icon:t.jsx(s,{}),iconPosition:"right",children:null})]},n))})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
