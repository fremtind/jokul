import{j as e}from"./iframe-C14rEe6T.js";import{R as a}from"./RadioButton-C2jHOjw9.js";import{R as r}from"./RadioButtonGroup-m6xSknIq.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-k4wiYRdm.js";import"./SupportLabel-BKp8Wxri.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DdFEwpRk.js";import"./Icon-CusSDIhm.js";import"./BaseRadioButton-CnL1Pthb.js";import"./FieldGroup-cvBrFaPC.js";import"./Label-BYHV_mne.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
