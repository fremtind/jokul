import{j as e}from"./iframe-DVuwCucA.js";import{R as a}from"./RadioButton-N6qpBakI.js";import{R as r}from"./RadioButtonGroup-rJyv7IOx.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-x7qrK8aY.js";import"./SupportLabel-Rzski8XH.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CajCtnwA.js";import"./Icon-BvCYJseA.js";import"./BaseRadioButton-Cf-TPpaX.js";import"./FieldGroup-SbVfDfJc.js";import"./Label-DvCgVV4-.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
