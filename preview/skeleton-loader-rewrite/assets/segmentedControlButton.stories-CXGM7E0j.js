import{j as e}from"./jsx-runtime-BOJBhsC5.js";import"./index-Bv6P490N.js";import{S as a,a as m}from"./_index-6PfBOepc.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-DI0jauUP.js";import"./useId-B1yQ3ow-.js";import"./Label-BcS4ibrI.js";import"./SupportLabel-WsXYroYu.js";import"./WarningIcon-tCz-nOjC.js";import"./Icon-DYEEOjBa.js";import"./RadioButton-DGGFPd1A.js";import"./BaseRadioButton-B-4anWNh.js";const f={title:"Komponenter/SegmentedControl/SegmentedControlButton",component:a,parameters:{layout:"centered"},args:{separated:!0,value:"Auto",children:"Auto"},decorators:[t=>e.jsx(m,{legend:"Temavelger",children:e.jsx(t,{})})],tags:["autodocs"]},s=["Light","Dark"],o={name:"Segmented Control Button"},r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(a,{...t,name:"temavalg",children:t.value}),s.map(n=>e.jsx(a,{value:n,name:"temavalg",children:n},n))]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
