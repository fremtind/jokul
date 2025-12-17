import{j as e}from"./iframe-BbCvJXdR.js";import{R as a}from"./RadioButton-jFxmEmlM.js";import{R as r}from"./RadioButtonGroup-BUb8PMdj.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-BRz3euu1.js";import"./SupportLabel-CX_PVdaF.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Ck8EjCWf.js";import"./Icon-DSPbMs1a.js";import"./BaseRadioButton-OCxl2BAL.js";import"./FieldGroup-uJ4bK_Hg.js";import"./Label-CsIvJd5S.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
