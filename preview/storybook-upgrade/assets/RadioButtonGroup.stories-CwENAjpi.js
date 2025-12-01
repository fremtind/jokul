import{j as e}from"./iframe-BK3BmULa.js";import{R as a}from"./RadioButton-C_o9mSB5.js";import{R as r}from"./RadioButtonGroup-BvdoNP31.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-BhRRPLiD.js";import"./SupportLabel-D1c15vV8.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BBaRpe7o.js";import"./Icon-YN5xrEcq.js";import"./BaseRadioButton-BQt9CvMT.js";import"./FieldGroup-DKVCmo5i.js";import"./Label-C9Njtxd8.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
