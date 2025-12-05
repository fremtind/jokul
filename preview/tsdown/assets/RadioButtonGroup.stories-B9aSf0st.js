import{j as e}from"./iframe-Bgbk8A8w.js";import{R as a}from"./RadioButton-CPyvIvZT.js";import{R as r}from"./RadioButtonGroup-DH-VtoJK.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-BepAFXbc.js";import"./SupportLabel-BDO1ZkW6.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BXDRy6cv.js";import"./Icon-DESNu5Cp.js";import"./BaseRadioButton-Bj4JALhp.js";import"./FieldGroup-CByg5L14.js";import"./Label-Cs-HSq_H.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
