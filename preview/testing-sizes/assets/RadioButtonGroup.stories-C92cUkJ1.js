import{j as e}from"./iframe-DKgmNawX.js";import{R as a}from"./RadioButton-Blixrd5o.js";import{R as r}from"./RadioButtonGroup-CYbh_pYR.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-B65hgErN.js";import"./SupportLabel-aJNBGcd_.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DN90veNF.js";import"./Icon-BhM1CSdy.js";import"./BaseRadioButton-BHjkwd1w.js";import"./FieldGroup-DoPKKGYA.js";import"./Label-D4YrUNMJ.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
