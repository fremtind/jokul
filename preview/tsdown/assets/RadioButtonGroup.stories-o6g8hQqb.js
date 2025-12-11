import{j as e}from"./iframe-R6aOaHTp.js";import{R as a}from"./RadioButton-CNPoQ9Eo.js";import{R as r}from"./RadioButtonGroup-UF1p5T8s.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-BUKv216K.js";import"./SupportLabel-BXNMeyuh.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BajwyuyY.js";import"./Icon-C_eqd1IE.js";import"./BaseRadioButton-BDNyjeXX.js";import"./FieldGroup-B3tuwAXU.js";import"./Label-DcGKuD_n.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
