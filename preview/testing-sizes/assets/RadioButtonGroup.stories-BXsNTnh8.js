import{j as e}from"./iframe-XXWDj_k0.js";import{R as a}from"./RadioButton-BG9YJ_mY.js";import{R as r}from"./RadioButtonGroup-cngBo2FX.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-DhUCm8x_.js";import"./SupportLabel-DJmM-NTW.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CWO9u6HD.js";import"./Icon-BjQbLDKK.js";import"./BaseRadioButton-tH3zmR_B.js";import"./FieldGroup-C5eM7IIb.js";import"./Label-CnlzOfH3.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
