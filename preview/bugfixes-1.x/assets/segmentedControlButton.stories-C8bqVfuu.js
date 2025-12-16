import{R as e}from"./index-siqcju79.js";import{S as a,a as m}from"./_index-Db7AKOY1.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-DvKuzy6r.js";import"./useId-CahK3IZ3.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-DfhTn3qm.js";import"./WarningIcon-TwjxhH69.js";import"./Icon-mINJCSxV.js";import"./RadioButton-B8l5SIpT.js";import"./BaseRadioButton-BbIdBf1s.js";const f={title:"Komponenter/SegmentedControl/SegmentedControlButton",component:a,parameters:{layout:"centered"},args:{separated:!0,value:"Auto",children:"Auto"},decorators:[t=>e.createElement(m,{legend:"Temavelger"},e.createElement(t,null))],tags:["autodocs"]},l=["Light","Dark"],o={name:"Segmented Control Button"},r={render:t=>e.createElement(e.Fragment,null,e.createElement(a,{...t,name:"temavalg"},t.value),l.map(n=>e.createElement(a,{value:n,key:n,name:"temavalg"},n)))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const k=["SegmentedControlStory","Temavelger"];export{o as SegmentedControlStory,r as Temavelger,k as __namedExportsOrder,f as default};
