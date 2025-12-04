import{j as e}from"./iframe-DY6F1u9l.js";import{R as a}from"./RadioButton-QALSnCJ_.js";import{R as r}from"./RadioButtonGroup-BvQkPnGG.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-BpOmZkHM.js";import"./SupportLabel-CL5Qmh5u.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BUuez_6B.js";import"./Icon-Dq6U2rBX.js";import"./BaseRadioButton-DQDzDqv5.js";import"./FieldGroup-DdV3Dxw0.js";import"./Label-CH93HefZ.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
