import{j as e}from"./iframe-DBTjUgp-.js";import{R as a}from"./RadioButton-Dcb8Sxzf.js";import{R as r}from"./RadioButtonGroup-Csv4cNpZ.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-bMRGRjZ0.js";import"./SupportLabel-BMipDmQC.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DWghBC5r.js";import"./Icon-KRhdj7hg.js";import"./BaseRadioButton-DwFV4I_h.js";import"./FieldGroup-CjV5W60m.js";import"./Label-hX19tVwP.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
