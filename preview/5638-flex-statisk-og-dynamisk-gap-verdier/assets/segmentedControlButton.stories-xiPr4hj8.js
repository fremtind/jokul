import{j as e}from"./iframe-BhXnxIvV.js";import{S as m,a}from"./_index-Y3GXR5bl.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-DMj2RqR-.js";import"./useId-C7VN9xNZ.js";import"./Label-DsE_zl55.js";import"./SupportLabel-BCbBVCJK.js";import"./WarningIcon-Cyg47eh_.js";import"./Icon-BxtqtHRq.js";import"./RadioButton-BUyny9sZ.js";import"./BaseRadioButton-CFY0YX4E.js";const f={title:"Komponenter/SegmentedControl/SegmentedControlButton",component:m,args:{separated:!0,value:"Auto",children:"Auto"},decorators:[t=>e.jsx(a,{legend:"Temavelger",children:e.jsx(t,{})})]},s=["Light","Dark"],o={name:"Segmented Control Button"},r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(m,{...t,name:"temavalg",children:t.value}),s.map(n=>e.jsx(m,{value:n,name:"temavalg",children:n},n))]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
