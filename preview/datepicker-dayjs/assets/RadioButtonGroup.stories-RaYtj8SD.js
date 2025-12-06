import{j as e}from"./iframe-s-7ILYx9.js";import{R as a}from"./RadioButton-Cim-E64Y.js";import{R as r}from"./RadioButtonGroup-DpUKa_7s.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-Df19DeTm.js";import"./SupportLabel-BHaIEAos.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-D7HkoStP.js";import"./Icon-Dlsb8Vxr.js";import"./BaseRadioButton-DP_bFKdn.js";import"./FieldGroup-DcJEOnRu.js";import"./Label-oxkWQkbE.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
