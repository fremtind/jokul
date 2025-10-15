import{R as o}from"./index-siqcju79.js";import{F as m}from"./FieldGroup-jrp1MMow.js";import{a,S as n}from"./_index-eFaOskg8.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./useId-CahK3IZ3.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./Icon-mINJCSxV.js";import"./WarningIcon-CnuYLHnq.js";import"./RadioButton-BEaJQk1K.js";import"./BaseRadioButton-BbIdBf1s.js";const k={title:"Komponenter/SegmentedControl",component:n,subcomponents:{FieldGroup:m,SegmentedControl:a},parameters:{layout:"centered"},tags:["autodocs"]},l=["Light","Dark"],e={name:"Segmented Control Button",args:{separated:!0,value:"Auto"},render:r=>o.createElement(a,{legend:"Velg tema"},l.map(t=>o.createElement(n,{value:t,key:t,name:"temavalg"},t)),o.createElement(n,{...r,name:"temavalg"},r.value))};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Segmented Control Button",
  args: {
    separated: true,
    value: "Auto"
  },
  render: args => <SegmentedControl legend="Velg tema">
            {themeChoices.map(choice => <SegmentedControlButton value={choice} key={choice} name="temavalg">
                    {choice}
                </SegmentedControlButton>)}
            <SegmentedControlButton {...args} name="temavalg">
                {args.value}
            </SegmentedControlButton>
        </SegmentedControl>
}`,...e.parameters?.docs?.source}}};const x=["SegmentedControlStory"];export{e as SegmentedControlStory,x as __namedExportsOrder,k as default};
