import{j as e}from"./iframe-D6vAkaa1.js";import{R as a}from"./RadioButton-DqXa8Pkc.js";import{R as r}from"./RadioButtonGroup-BbghVmCD.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-DFdZPHHB.js";import"./SupportLabel-B95jMYhl.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BMmsAs8T.js";import"./Icon-BNJErtNk.js";import"./BaseRadioButton-D8sY0nI7.js";import"./FieldGroup-BTUgB_bX.js";import"./Label-DVnmPxGA.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
