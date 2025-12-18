import{j as e}from"./iframe-BTDnbZua.js";import{R as a}from"./RadioButton-OWyVsQAv.js";import{R as r}from"./RadioButtonGroup-BOEr6RBR.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-B5PSNZHv.js";import"./SupportLabel-pWKXEveU.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CyaxSt2B.js";import"./Icon-BVRntAM3.js";import"./BaseRadioButton-B40Macun.js";import"./FieldGroup-Cqw-fXyS.js";import"./Label-DqzAb2dD.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
