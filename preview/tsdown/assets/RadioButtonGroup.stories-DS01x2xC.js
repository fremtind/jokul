import{j as e}from"./iframe-BGVx81di.js";import{R as a}from"./RadioButton-Cbh368Q5.js";import{R as r}from"./RadioButtonGroup-DTSSf9oS.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-CKv-848r.js";import"./SupportLabel-d6pUXnru.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-SGU6ymye.js";import"./Icon-Drznu7pl.js";import"./BaseRadioButton-BGD4eapp.js";import"./FieldGroup-lrkBh55K.js";import"./Label-B1Xi_9FU.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
