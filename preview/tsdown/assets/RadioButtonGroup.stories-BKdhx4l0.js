import{j as e}from"./iframe-477QQtzG.js";import{R as a}from"./RadioButton-cE4qWjZx.js";import{R as r}from"./RadioButtonGroup-Bo9tniZr.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-B7T7fP2z.js";import"./SupportLabel-DZNwYeVW.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CA2M-1rx.js";import"./Icon-Bbvo1pmI.js";import"./BaseRadioButton-DMqC9Ju5.js";import"./FieldGroup-QuHVIUPo.js";import"./Label-DcsQSj5V.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
