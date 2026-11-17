import{j as e}from"./iframe-DfRMJqQG.js";import{S as m,a}from"./SegmentedControlButton-C70vxelX.js";/* empty css               *//* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-DUtejXFM.js";import"./useId-9euHN0Lj.js";import"./Label-Df5eJIpF.js";import"./SupportLabel-CvXUfG2K.js";import"./SuccessIcon-DAlEwuTK.js";import"./Icon-Bb1JmFOR.js";import"./types-BlFGa32c.js";import"./WarningIcon-CoACJujz.js";import"./RadioButton-DNggyI5I.js";import"./BaseRadioButton-BvU0y2nn.js";const k={title:"Komponenter/SegmentedControl/SegmentedControlButton",component:m,args:{separated:!0,value:"Auto",children:"Auto"},decorators:[t=>e.jsx(a,{legend:"Temavelger",children:e.jsx(t,{})})]},s=["Light","Dark"],o={name:"Segmented Control Button"},r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(m,{...t,name:"temavalg",children:t.value}),s.map(n=>e.jsx(m,{value:n,name:"temavalg",children:n},n))]})},A=["SegmentedControlStory","Temavelger"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};export{o as SegmentedControlStory,r as Temavelger,A as __namedExportsOrder,k as default};
