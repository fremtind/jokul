import{j as e}from"./iframe-Cgl1Z5NR.js";import{a as m,S as a}from"./SegmentedControlButton-De58FpDe.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-CAIUo67o.js";import"./useId-GbcN4_7A.js";import"./Label-BiK5GbNo.js";import"./SupportLabel-J4jZz12X.js";import"./SuccessIcon-CtUP0yHF.js";import"./Icon-CwTF9V-p.js";import"./types-BlFGa32c.js";import"./WarningIcon-uqhtjl1H.js";import"./RadioButton-CQXs4HlF.js";import"./BaseRadioButton-RkwAWDGU.js";const T={title:"Komponenter/SegmentedControl/SegmentedControlButton",component:m,args:{separated:!0,value:"Auto",children:"Auto"},decorators:[t=>e.jsx(a,{legend:"Temavelger",children:e.jsx(t,{})})]},s=["Light","Dark"],o={name:"Segmented Control Button"},r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(m,{...t,name:"temavalg",children:t.value}),s.map(n=>e.jsx(m,{value:n,name:"temavalg",children:n},n))]})},k=["SegmentedControlStory","Temavelger"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};export{o as SegmentedControlStory,r as Temavelger,k as __namedExportsOrder,T as default};
