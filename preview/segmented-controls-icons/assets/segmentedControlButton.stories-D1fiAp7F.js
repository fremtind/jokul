import{R as e}from"./index-siqcju79.js";import{I as o}from"./Icon-mINJCSxV.js";import{F as m}from"./FieldGroup-jrp1MMow.js";import{a,S as n}from"./_index-tZCgF5CH.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./useId-CahK3IZ3.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./WarningIcon-CnuYLHnq.js";import"./RadioButton-BEaJQk1K.js";import"./BaseRadioButton-BbIdBf1s.js";const k={title:"Komponenter/SegmentedControl",component:n,subcomponents:{FieldGroup:m,SegmentedControl:a},parameters:{layout:"centered"},tags:["autodocs"]},t={name:"Segmented Control Button",args:{separated:!0,value:"Auto"},render:r=>e.createElement(a,{legend:"Velg tema"},e.createElement(n,{value:"light",name:"temavalg",icon:e.createElement(o,null,"light_mode")},"Light"),e.createElement(n,{value:"dark",name:"temavalg",icon:e.createElement(o,null,"dark_mode")},"Dark"),e.createElement(n,{...r,name:"temavalg",icon:e.createElement(o,null,"routine")},r.value))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Segmented Control Button",
  args: {
    separated: true,
    value: "Auto"
  },
  render: args => <SegmentedControl legend="Velg tema">
            <SegmentedControlButton value={"light"} name="temavalg" icon={<Icon>light_mode</Icon>}>
                Light
            </SegmentedControlButton>
            <SegmentedControlButton value={"dark"} name="temavalg" icon={<Icon>dark_mode</Icon>}>
                Dark
            </SegmentedControlButton>
            <SegmentedControlButton {...args} name="temavalg" icon={<Icon>routine</Icon>}>
                {args.value}
            </SegmentedControlButton>
        </SegmentedControl>
}`,...t.parameters?.docs?.source}}};const _=["SegmentedControlStory"];export{t as SegmentedControlStory,_ as __namedExportsOrder,k as default};
