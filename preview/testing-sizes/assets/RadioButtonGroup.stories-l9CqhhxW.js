import{j as e}from"./iframe-DaXAj_UU.js";import{R as a}from"./RadioButton-wSnG9sMs.js";import{R as r}from"./RadioButtonGroup-BpsvBYaL.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-B7HliY4_.js";import"./SupportLabel-D8iUHRcP.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BBnlNgz0.js";import"./Icon-CC2xesMD.js";import"./BaseRadioButton-D0RPd1DQ.js";import"./FieldGroup-nwjuOIpe.js";import"./Label-BCF8EsYm.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
