import{j as e}from"./iframe-Cc5g7YQN.js";import{R as a}from"./RadioButton-BDgwyosS.js";import{R as r}from"./RadioButtonGroup-CmZlKwSE.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-hIeKDW01.js";import"./SupportLabel-7hTcN6Qv.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-3xaKXyPB.js";import"./Icon-p64i9PM5.js";import"./BaseRadioButton-qBc-12zg.js";import"./FieldGroup-Cwa5N9vW.js";import"./Label-DfDwSpOJ.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
