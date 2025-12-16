import{j as e}from"./iframe-BkUFrIqG.js";import{R as a}from"./RadioButton-B5wz0pvz.js";import{R as r}from"./RadioButtonGroup-DFsYEyFs.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-Cwv6dpQ-.js";import"./SupportLabel-DlxuN8wM.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-D8f111Sa.js";import"./Icon-D3zN9Hfi.js";import"./BaseRadioButton-CtywRMVu.js";import"./FieldGroup-uSn63pty.js";import"./Label-CyWGL7ty.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
