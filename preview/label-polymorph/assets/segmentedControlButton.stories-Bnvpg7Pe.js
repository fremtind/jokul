import{j as e}from"./iframe-BU_jiWCV.js";import{S as a,a as m}from"./_index-BzP17j52.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-BkuWikkg.js";import"./useId-D_a0m0IF.js";import"./SupportLabel-DQb_eXfm.js";import"./WarningIcon-theVSf6h.js";import"./Icon-DZVy4Pvr.js";import"./RadioButton-B0bJstJP.js";import"./BaseRadioButton-BD3f7I2x.js";const j={title:"Komponenter/SegmentedControl/SegmentedControlButton",component:a,args:{separated:!0,value:"Auto",children:"Auto"},decorators:[t=>e.jsx(m,{legend:"Temavelger",children:e.jsx(t,{})})]},s=["Light","Dark"],o={name:"Segmented Control Button"},r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(a,{...t,name:"temavalg",children:t.value}),s.map(n=>e.jsx(a,{value:n,name:"temavalg",children:n},n))]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const f=["SegmentedControlStory","Temavelger"];export{o as SegmentedControlStory,r as Temavelger,f as __namedExportsOrder,j as default};
