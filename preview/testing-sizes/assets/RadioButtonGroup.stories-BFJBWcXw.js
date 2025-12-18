import{j as e}from"./iframe-BRp3drim.js";import{R as a}from"./RadioButton-B2DCLxGT.js";import{R as r}from"./RadioButtonGroup-q8lIKhbD.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-DggC7kGl.js";import"./SupportLabel-I20a0Jgx.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-B8DXHMwj.js";import"./Icon-B4jMHXpg.js";import"./BaseRadioButton-DERLVmuS.js";import"./FieldGroup-Bal04RxT.js";import"./Label-DkJCLBBa.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
