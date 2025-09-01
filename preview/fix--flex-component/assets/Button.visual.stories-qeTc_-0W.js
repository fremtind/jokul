import{R as t}from"./index-siqcju79.js";import{B as n}from"./Button-DwJi6NKm.js";/* empty css               */import{F as i}from"./Flex-L8nj3CvD.js";import{C as a}from"./CopyIcon-B4kXENSb.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./SlotComponent-CWN6EcE2.js";import"./Icon-Crh-gXYv.js";const v={title:"Visuelle regresjonstester/Button",component:n,parameters:{layout:"centered"},tags:["visual"]},s={type:"button",children:"Kopier",loader:{showLoader:!1,textDescription:"laster inn"}},o={args:s,render:r=>t.createElement(i,{direction:"column",gap:"md",style:{width:"100%"}},["primary","secondary","tertiary","ghost"].map(e=>t.createElement(i,{key:e,gap:"xs"},t.createElement(n,{...r,variant:e}),t.createElement(n,{...r,variant:e,icon:t.createElement(a,null)}),t.createElement(n,{...r,variant:e,icon:t.createElement(a,null),iconPosition:"right"}),t.createElement(n,{...r,variant:e,icon:t.createElement(a,null),iconPosition:"right",children:null}))))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: baseArgs,
  render: args => <Flex direction="column" gap="md" style={{
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
}`,...o.parameters?.docs?.source}}};const P=["IconPlacements"];export{o as IconPlacements,P as __namedExportsOrder,v as default};
