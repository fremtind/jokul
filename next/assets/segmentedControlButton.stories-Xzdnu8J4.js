import{j as e}from"./iframe-C7V8eVuP.js";import{a as m,S as a}from"./SegmentedControlButton-CP7LBZeF.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-Bv88EKWk.js";import"./useId-C9VpPwS8.js";import"./Label-DS19S-tU.js";import"./SupportLabel-fg0i7eVz.js";import"./SuccessIcon-D_xwPqmJ.js";import"./Icon-DtmXCUax.js";import"./WarningIcon-hzasHG4U.js";import"./RadioButton-18m6SnWW.js";import"./BaseRadioButton-DgSShevf.js";const y={title:"Komponenter/SegmentedControl/SegmentedControlButton",component:m,args:{separated:!0,value:"Auto",children:"Auto"},decorators:[t=>e.jsx(a,{legend:"Temavelger",children:e.jsx(t,{})})]},s=["Light","Dark"],o={name:"Segmented Control Button"},r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(m,{...t,name:"temavalg",children:t.value}),s.map(n=>e.jsx(m,{value:n,name:"temavalg",children:n},n))]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const T=["SegmentedControlStory","Temavelger"];export{o as SegmentedControlStory,r as Temavelger,T as __namedExportsOrder,y as default};
