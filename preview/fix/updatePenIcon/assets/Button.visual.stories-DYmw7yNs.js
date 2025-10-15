import{R as t}from"./index-siqcju79.js";import{B as n}from"./Button-Dng0c-UK.js";/* empty css               */import{F as i}from"./Flex-BJkkUza_.js";import{C as a}from"./CopyIcon-V1dXprj3.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./tokens-CmXyXTIM.js";import"./SlotComponent-DjLpilNT.js";import"./mergeRefs-CYSLoF3z.js";import"./Icon-mINJCSxV.js";const f={title:"Visuelle regresjonstester/Button",component:n,parameters:{layout:"centered"},tags:["visual"]},s={type:"button",children:"Kopier",loader:{showLoader:!1,textDescription:"laster inn"}},o={args:s,render:r=>t.createElement(i,{direction:"column",gap:24,style:{width:"100%"}},["primary","secondary","tertiary","ghost"].map(e=>t.createElement(i,{key:e,gap:8},t.createElement(n,{...r,variant:e}),t.createElement(n,{...r,variant:e,icon:t.createElement(a,null)}),t.createElement(n,{...r,variant:e,icon:t.createElement(a,null),iconPosition:"right"}),t.createElement(n,{...r,variant:e,icon:t.createElement(a,null),iconPosition:"right",children:null}))))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const C=["IconPlacements"];export{o as IconPlacements,C as __namedExportsOrder,f as default};
