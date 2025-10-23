import{j as e}from"./jsx-runtime-DqZpzl9T.js";import{a}from"./RadioButton-DTrcPWE4.js";import{R as r}from"./RadioButtonGroup-D7RlSHbq.js";/* empty css               */import"./index-siqcju79.js";import"./useId-CahK3IZ3.js";import"./SupportLabel-BNvn73Dv.js";import"./clsx-B-dksMZM.js";import"./ErrorIcon-4c1VmZaU.js";import"./Icon-DnRkF4CO.js";import"./WarningIcon-Bm98p7gS.js";import"./BaseRadioButton-C4joAhFY.js";import"./FieldGroup-CTL-9Ppy.js";import"./Label-Ct8Bs2e9.js";import"./_commonjsHelpers-DaWZu8wl.js";const v={title:"Komponenter/RadioButton/RadioButtonGroup",component:r,parameters:{layout:"centered"},tags:["autodocs"]},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const S=["RadioButtonGroup"];export{o as RadioButtonGroup,S as __namedExportsOrder,v as default};
