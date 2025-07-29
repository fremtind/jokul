import{B as e}from"./Button-Bm5jRD6q.js";/* empty css               */import{F as a}from"./Flex-CLtnP1gB.js";import{C as o}from"./CopyIcon-V1dXprj3.js";import"./clsx-B-dksMZM.js";import"./index-siqcju79.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./tokens-CvksrKef.js";import"./Icon-mINJCSxV.js";const v={title:"Visuelle regresjonstester/Button",component:e,parameters:{layout:"centered"},tags:["visual"]},i={type:"button",children:"Kopier",loader:{showLoader:!1,textDescription:"laster inn"}},r={args:i,render:n=>React.createElement(a,{direction:"column",gap:24,style:{width:"100%"}},["primary","secondary","tertiary","ghost"].map(t=>React.createElement(a,{key:t,gap:8},React.createElement(e,{...n,variant:t}),React.createElement(e,{...n,variant:t,icon:React.createElement(o,null)}),React.createElement(e,{...n,variant:t,icon:React.createElement(o,null),iconPosition:"right"}),React.createElement(e,{...n,variant:t,icon:React.createElement(o,null),iconPosition:"right",children:null}))))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const R=["IconPlacements"];export{r as IconPlacements,R as __namedExportsOrder,v as default};
