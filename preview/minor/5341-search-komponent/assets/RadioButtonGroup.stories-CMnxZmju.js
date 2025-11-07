import{j as e}from"./jsx-runtime-DqZpzl9T.js";import{a}from"./RadioButton-CMWBylf3.js";import{R as r}from"./RadioButtonGroup-C5y0OHm1.js";/* empty css               */import"./index-siqcju79.js";import"./useId-CahK3IZ3.js";import"./SupportLabel-DqvOe-qA.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-C-dhPw1h.js";import"./Icon-DnRkF4CO.js";import"./BaseRadioButton-C4joAhFY.js";import"./FieldGroup-4QcUrmjz.js";import"./Label-Ct8Bs2e9.js";import"./_commonjsHelpers-DaWZu8wl.js";const j={title:"Komponenter/RadioButton/RadioButtonGroup",component:r,parameters:{layout:"centered"},tags:["autodocs"]},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const v=["RadioButtonGroup"];export{o as RadioButtonGroup,v as __namedExportsOrder,j as default};
