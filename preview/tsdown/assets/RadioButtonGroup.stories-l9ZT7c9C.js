import{j as e}from"./iframe-BOohXgvX.js";import{R as a}from"./RadioButton-5UCzwYbe.js";import{R as r}from"./RadioButtonGroup-Ciqnrj-j.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-DR-y4Sju.js";import"./SupportLabel-ZJXmljTN.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Bn9SfBzt.js";import"./Icon-BSYjkIWE.js";import"./BaseRadioButton-BD4FemwD.js";import"./FieldGroup-BRFx3G7l.js";import"./Label-CiFrHv3-.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
