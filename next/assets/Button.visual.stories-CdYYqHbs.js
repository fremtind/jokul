import{j as t}from"./iframe-Pz3CvQ1w.js";import{B as n}from"./Button-CFxPgOyk.js";/* empty css               */import{F as e}from"./Flex-DlQI-SYy.js";import{C as s}from"./CopyIcon-Gm9HCvX4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-zjQRGqy1.js";import"./Loader-C4UXvRMJ.js";import"./types-BlFGa32c.js";import"./useDelayedRender-CrrBdMCB.js";import"./SlotComponent-3v9UArJ6.js";import"./mergeRefs-_7lZvp9j.js";import"./Icon-D_klMMdD.js";const f={title:"Visuelle regresjonstester/Button",component:n},a={type:"button",children:"Kopier",loader:{showLoader:!1,textDescription:"laster inn"}},i={args:a,render:r=>t.jsx(e,{direction:"column",gap:"m",style:{width:"100%"},children:["primary","secondary","tertiary","ghost"].map(o=>t.jsxs(e,{gap:"xs",children:[t.jsx(n,{...r,variant:o}),t.jsx(n,{...r,variant:o,icon:t.jsx(s,{})}),t.jsx(n,{...r,variant:o,icon:t.jsx(s,{}),iconPosition:"right"}),t.jsx(n,{...r,variant:o,icon:t.jsx(s,{}),iconPosition:"right",children:null})]},o))})},C=["IconPlacements"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};export{i as IconPlacements,C as __namedExportsOrder,f as default};
