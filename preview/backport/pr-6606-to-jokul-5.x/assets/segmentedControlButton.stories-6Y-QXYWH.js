import{j as e}from"./iframe-DP8Xf_qW.js";import{S as m,a}from"./SegmentedControlButton-C_kU9kuN.js";/* empty css               *//* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-iELpliL-.js";import"./useId-DCOUoPrx.js";import"./Label-DF5EMnl-.js";import"./SupportLabel-BKFe5kWx.js";import"./SuccessIcon-CbZ15OhW.js";import"./Icon-k8xo1fZn.js";import"./types-IsTkoTmK.js";import"./WarningIcon-1AHRTzaM.js";import"./RadioButton-vNJTCQgW.js";import"./BaseRadioButton-B9qQwVPP.js";const k={title:"Komponenter/SegmentedControl/SegmentedControlButton",component:m,args:{separated:!0,value:"Auto",children:"Auto"},decorators:[t=>e.jsx(a,{legend:"Temavelger",children:e.jsx(t,{})})]},s=["Light","Dark"],o={name:"Segmented Control Button"},r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(m,{...t,name:"temavalg",children:t.value}),s.map(n=>e.jsx(m,{value:n,name:"temavalg",children:n},n))]})},A=["SegmentedControlStory","Temavelger"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
