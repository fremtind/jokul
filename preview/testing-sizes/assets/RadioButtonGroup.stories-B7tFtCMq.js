import{j as e}from"./iframe-W-C0B6po.js";import{R as a}from"./RadioButton-B85Ne8fv.js";import{R as r}from"./RadioButtonGroup-DNTu4Y9N.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-Cofwx2ur.js";import"./SupportLabel-CjmnjkOa.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-zormt5yS.js";import"./Icon-C3fOhunk.js";import"./BaseRadioButton-DBXi7eHp.js";import"./FieldGroup-DVpdwjh-.js";import"./Label-DYU867K7.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
