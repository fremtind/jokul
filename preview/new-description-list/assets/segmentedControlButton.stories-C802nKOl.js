import{j as e}from"./jsx-runtime-DqZpzl9T.js";import"./index-siqcju79.js";import{S as a,a as m}from"./_index-SR0AAZp0.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-4QcUrmjz.js";import"./useId-CahK3IZ3.js";import"./Label-Ct8Bs2e9.js";import"./SupportLabel-DqvOe-qA.js";import"./WarningIcon-C-dhPw1h.js";import"./Icon-DnRkF4CO.js";import"./RadioButton-CMWBylf3.js";import"./BaseRadioButton-C4joAhFY.js";const f={title:"Komponenter/SegmentedControl/SegmentedControlButton",component:a,parameters:{layout:"centered"},args:{separated:!0,value:"Auto",children:"Auto"},decorators:[t=>e.jsx(m,{legend:"Temavelger",children:e.jsx(t,{})})],tags:["autodocs"]},s=["Light","Dark"],o={name:"Segmented Control Button"},r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(a,{...t,name:"temavalg",children:t.value}),s.map(n=>e.jsx(a,{value:n,name:"temavalg",children:n},n))]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const T=["SegmentedControlStory","Temavelger"];export{o as SegmentedControlStory,r as Temavelger,T as __namedExportsOrder,f as default};
