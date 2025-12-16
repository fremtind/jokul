import{a}from"./RadioButton-B8l5SIpT.js";import{R as r}from"./RadioButtonGroup-taCVMD7n.js";/* empty css               */import{R as e}from"./index-siqcju79.js";import"./useId-CahK3IZ3.js";import"./SupportLabel-DfhTn3qm.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-TwjxhH69.js";import"./Icon-mINJCSxV.js";import"./BaseRadioButton-BbIdBf1s.js";import"./FieldGroup-DvKuzy6r.js";import"./Label-tZYmh4ng.js";import"./_commonjsHelpers-DaWZu8wl.js";const k={title:"Komponenter/RadioButton/RadioButtonGroup",component:r,parameters:{layout:"centered"},tags:["autodocs"]},p=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.createElement(r,{...n},p.map(t=>e.createElement(a,{key:t,value:t},t)))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const y=["RadioButtonGroup"];export{o as RadioButtonGroup,y as __namedExportsOrder,k as default};
