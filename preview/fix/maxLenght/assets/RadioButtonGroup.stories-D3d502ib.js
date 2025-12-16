import{j as e}from"./iframe-DvP7N9Q0.js";import{R as a}from"./RadioButton-yffpqm5R.js";import{R as r}from"./RadioButtonGroup-BexO8hqn.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-lHt1Depp.js";import"./SupportLabel-CorrWaHo.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-D6ZoqZ14.js";import"./Icon-B4XeI8eR.js";import"./BaseRadioButton-Cxl1rVtq.js";import"./FieldGroup-Czooc6jh.js";import"./Label-3F0NI7P9.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
