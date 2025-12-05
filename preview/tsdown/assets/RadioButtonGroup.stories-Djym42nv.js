import{j as e}from"./iframe-CF4AVgx1.js";import{R as a}from"./RadioButton-CIKtiFvG.js";import{R as r}from"./RadioButtonGroup-BrTtS9Do.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-B0uyATwQ.js";import"./SupportLabel-Dz8fuqna.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Dayb2Tpx.js";import"./Icon-D4-b-6ai.js";import"./BaseRadioButton-Cwq-b9v4.js";import"./FieldGroup-KxvcHiBL.js";import"./Label-MslsQ1Sz.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
