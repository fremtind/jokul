import{j as t}from"./jsx-runtime-BOJBhsC5.js";import"./index-Bv6P490N.js";import{B as o}from"./Button-7xZWz2K4.js";/* empty css               */import{F as a}from"./Flex-DAYRz_h9.js";import{C as e}from"./CopyIcon-CTiS2n6z.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-CFxVqUaX.js";import"./Loader-DU6KErPQ.js";import"./useDelayedRender-CuF3W8uc.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-CgJtPkTS.js";import"./mergeRefs-BP-F_O_W.js";import"./Icon-DYEEOjBa.js";const C={title:"Visuelle regresjonstester/Button",component:o,parameters:{layout:"centered"},tags:["visual"]},s={type:"button",children:"Kopier",loader:{showLoader:!1,textDescription:"laster inn"}},i={args:s,render:n=>t.jsx(a,{direction:"column",gap:"m",style:{width:"100%"},children:["primary","secondary","tertiary","ghost"].map(r=>t.jsxs(a,{gap:"xs",children:[t.jsx(o,{...n,variant:r}),t.jsx(o,{...n,variant:r,icon:t.jsx(e,{})}),t.jsx(o,{...n,variant:r,icon:t.jsx(e,{}),iconPosition:"right"}),t.jsx(o,{...n,variant:r,icon:t.jsx(e,{}),iconPosition:"right",children:null})]},r))})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const F=["IconPlacements"];export{i as IconPlacements,F as __namedExportsOrder,C as default};
