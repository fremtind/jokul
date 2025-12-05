import{j as e}from"./iframe-L6kck8Nc.js";import{R as a}from"./RadioButton-B1NFaYi9.js";import{R as r}from"./RadioButtonGroup-C2kCK9s1.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-BK4xM_v4.js";import"./SupportLabel-BpXidhZU.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DEzVcHO6.js";import"./Icon-CznP8Z9Z.js";import"./BaseRadioButton-xQhjwVjM.js";import"./FieldGroup-kGW5Mpxi.js";import"./Label-uq_umgy-.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
