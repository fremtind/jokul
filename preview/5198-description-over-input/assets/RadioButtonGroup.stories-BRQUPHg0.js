import{a}from"./RadioButton-BEaJQk1K.js";import{R as r}from"./RadioButtonGroup-BUKBhV2B.js";/* empty css               */import{R as e}from"./index-siqcju79.js";import"./useId-CahK3IZ3.js";import"./SupportLabel-Bm3W2hYF.js";import"./clsx-B-dksMZM.js";import"./ErrorIcon-BUXYVAIL.js";import"./Icon-mINJCSxV.js";import"./WarningIcon-CnuYLHnq.js";import"./BaseRadioButton-BbIdBf1s.js";import"./FieldGroup-ThhHt0Sp.js";import"./Label-tZYmh4ng.js";import"./_commonjsHelpers-DaWZu8wl.js";const y={title:"Komponenter/RadioButton/RadioButtonGroup",component:r,parameters:{layout:"centered"},tags:["autodocs"]},p=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.createElement(r,{...n},p.map(t=>e.createElement(a,{key:t,value:t},t)))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const E=["RadioButtonGroup"];export{o as RadioButtonGroup,E as __namedExportsOrder,y as default};
