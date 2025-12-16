import{j as e}from"./iframe-D_KIqJpS.js";import{R as a}from"./RadioButton-CbEG1Xum.js";import{R as r}from"./RadioButtonGroup-BWcWFzi-.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-COFLPwun.js";import"./SupportLabel-CdreSeNn.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Cptfvehu.js";import"./Icon-30guoCL6.js";import"./BaseRadioButton-DfVaeLuv.js";import"./FieldGroup-Bsqa6wZ1.js";import"./Label-DYujrYq9.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
