import{j as e}from"./iframe-B6t6YqCc.js";import{R as a}from"./RadioButton-BetLRuSa.js";import{R as r}from"./RadioButtonGroup-B7PQMTuY.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-CAwgnIkD.js";import"./SupportLabel-Bn8GTQSZ.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CgvETRxr.js";import"./Icon-BFk3_Um7.js";import"./BaseRadioButton-DHELlS4u.js";import"./FieldGroup-C1g7n2fk.js";import"./Label-BFy386Ar.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
