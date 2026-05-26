import{j as e}from"./iframe-C-6dUzrk.js";import{S as m,a}from"./_index-d82Q9Gkx.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-c0QtDG0N.js";import"./useId-D9my0YO8.js";import"./Label-COyaHIf5.js";import"./SupportLabel-Ct-MpkXL.js";import"./WarningIcon-B47msko2.js";import"./Icon-Cxd3B0hj.js";import"./RadioButton-BM30s84L.js";import"./BaseRadioButton-DuCgzP15.js";const f={title:"Komponenter/SegmentedControl/SegmentedControlButton",component:m,args:{separated:!0,value:"Auto",children:"Auto"},decorators:[t=>e.jsx(a,{legend:"Temavelger",children:e.jsx(t,{})})]},s=["Light","Dark"],o={name:"Segmented Control Button"},r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(m,{...t,name:"temavalg",children:t.value}),s.map(n=>e.jsx(m,{value:n,name:"temavalg",children:n},n))]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Segmented Control Button"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <SegmentedControlButton {...args} name="temavalg">
                {args.value}
            </SegmentedControlButton>
            {themeChoices.map(choice => <SegmentedControlButton value={choice} key={choice} name="temavalg">
                    {choice}
                </SegmentedControlButton>)}
        </>
}`,...r.parameters?.docs?.source}}};const y=["SegmentedControlStory","Temavelger"];export{o as SegmentedControlStory,r as Temavelger,y as __namedExportsOrder,f as default};
