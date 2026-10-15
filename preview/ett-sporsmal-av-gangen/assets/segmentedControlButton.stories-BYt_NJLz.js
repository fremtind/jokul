import{j as e}from"./iframe-Dj_0KXfL.js";import{a as m,S as a}from"./SegmentedControlButton-C5erqg5K.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-DvEf42vL.js";import"./useId-CiF6n8vQ.js";import"./Label-BW7pe0Q6.js";import"./Title-Dw6GHWGe.js";import"./SupportLabel-GwdTy8cu.js";import"./SuccessIcon-08BHLgdl.js";import"./Icon-DQ2KKCVA.js";import"./WarningIcon-BOII7UWe.js";import"./RadioButton-mzfJxH-2.js";import"./BaseRadioButton-vNCRnSBc.js";const T={title:"Komponenter/SegmentedControl/SegmentedControlButton",component:m,args:{separated:!0,value:"Auto",children:"Auto"},decorators:[t=>e.jsx(a,{legend:"Temavelger",children:e.jsx(t,{})})]},s=["Light","Dark"],o={name:"Segmented Control Button"},r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(m,{...t,name:"temavalg",children:t.value}),s.map(n=>e.jsx(m,{value:n,name:"temavalg",children:n},n))]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const k=["SegmentedControlStory","Temavelger"];export{o as SegmentedControlStory,r as Temavelger,k as __namedExportsOrder,T as default};
