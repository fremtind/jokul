import{j as e}from"./iframe-KBuXSPRb.js";import{R as a}from"./RadioButton-bFlOY0rQ.js";import{R as r}from"./RadioButtonGroup-IU0tmtoO.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-BjRjsyhH.js";import"./SupportLabel-Cz00_Izr.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-wh0TceHi.js";import"./Icon-BH6s9Awv.js";import"./BaseRadioButton-p3NL1fI1.js";import"./FieldGroup-Cf7BJ6Sg.js";import"./Label-9upv82HJ.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
