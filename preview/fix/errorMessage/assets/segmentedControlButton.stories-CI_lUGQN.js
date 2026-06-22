import{j as e}from"./iframe-B9B2iQPq.js";import{S as m,a}from"./SegmentedControlButton-D4tMDMGY.js";/* empty css               *//* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-Dpn7bkp_.js";import"./useId-COaKV4T_.js";import"./Label-CqUGzVVy.js";import"./SupportLabel-DE-BUjrK.js";import"./SuccessIcon-BlA4v25Z.js";import"./Icon-DOYMQfkf.js";import"./WarningIcon-BhhhauDK.js";import"./RadioButton-BXOBCQff.js";import"./BaseRadioButton-B50iZ-S4.js";const T={title:"Komponenter/SegmentedControl/SegmentedControlButton",component:m,args:{separated:!0,value:"Auto",children:"Auto"},decorators:[t=>e.jsx(a,{legend:"Temavelger",children:e.jsx(t,{})})]},s=["Light","Dark"],o={name:"Segmented Control Button"},r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(m,{...t,name:"temavalg",children:t.value}),s.map(n=>e.jsx(m,{value:n,name:"temavalg",children:n},n))]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
