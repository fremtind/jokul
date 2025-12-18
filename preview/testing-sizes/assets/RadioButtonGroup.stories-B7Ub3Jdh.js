import{j as e}from"./iframe-BDteYe4r.js";import{R as a}from"./RadioButton-DjLNRJ2e.js";import{R as r}from"./RadioButtonGroup-C6sNEBN7.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-soo04-hG.js";import"./SupportLabel-D8b5jrJf.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DWCyfn23.js";import"./Icon-BG_QQN4a.js";import"./BaseRadioButton-DpBHzreL.js";import"./FieldGroup-oB-K7G9G.js";import"./Label-BiCUA10s.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
