import{j as t}from"./iframe-CFpyWcZO.js";import{B as o}from"./Button-BnGrkcCb.js";/* empty css               */import{F as e}from"./Flex-v3ieCz0Q.js";import{C as s}from"./CopyIcon-DjUecmSR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-gmcPI170.js";import"./Loader-Da2q4OXK.js";import"./useDelayedRender-cLVI01gf.js";import"./SlotComponent-BwJbg2S0.js";import"./mergeRefs-CemUoRzq.js";import"./Icon-DsczttUB.js";const P={title:"Visuelle regresjonstester/Button",component:o},a={type:"button",children:"Kopier",loader:{showLoader:!1,textDescription:"laster inn"}},i={args:a,render:r=>t.jsx(e,{direction:"column",gap:"m",style:{width:"100%"},children:["primary","secondary","tertiary","ghost"].map(n=>t.jsxs(e,{gap:"xs",children:[t.jsx(o,{...r,variant:n}),t.jsx(o,{...r,variant:n,icon:t.jsx(s,{})}),t.jsx(o,{...r,variant:n,icon:t.jsx(s,{}),iconPosition:"right"}),t.jsx(o,{...r,variant:n,icon:t.jsx(s,{}),iconPosition:"right",children:null})]},n))})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
