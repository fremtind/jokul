import{j as e}from"./iframe-DCpqq2AI.js";import{R as a}from"./RadioButton-D7jk13Kf.js";import{R as r}from"./RadioButtonGroup-BCJKSjAL.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-CiNANxLK.js";import"./SupportLabel-CMhjgfsA.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-B8KyBtL7.js";import"./Icon-BsOVuiL5.js";import"./BaseRadioButton-Bq3UtTqG.js";import"./FieldGroup-DBudnDVs.js";import"./Label-DQWlnq5s.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
