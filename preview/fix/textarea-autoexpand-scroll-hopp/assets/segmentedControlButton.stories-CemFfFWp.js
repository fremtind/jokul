import{j as e}from"./iframe-_FaeG25D.js";import{a as m,S as a}from"./SegmentedControlButton-Cr_rixFf.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-BT2M24WN.js";import"./useId-D0CcExWh.js";import"./Label-CN0o_bgx.js";import"./SupportLabel-AxMOblDz.js";import"./SuccessIcon-CGOZPU-T.js";import"./Icon-GsgJp8Ld.js";import"./types-BlFGa32c.js";import"./WarningIcon-B4vC-nd2.js";import"./RadioButton-ByWSturz.js";import"./BaseRadioButton-H8FTknXC.js";const T={title:"Komponenter/SegmentedControl/SegmentedControlButton",component:m,args:{separated:!0,value:"Auto",children:"Auto"},decorators:[t=>e.jsx(a,{legend:"Temavelger",children:e.jsx(t,{})})]},s=["Light","Dark"],o={name:"Segmented Control Button"},r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(m,{...t,name:"temavalg",children:t.value}),s.map(n=>e.jsx(m,{value:n,name:"temavalg",children:n},n))]})},k=["SegmentedControlStory","Temavelger"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
