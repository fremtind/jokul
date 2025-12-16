import{j as e}from"./iframe-BcNHjqF9.js";import{R as a}from"./RadioButton-BWKp7ai-.js";import{R as r}from"./RadioButtonGroup-B4v_QZrq.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-pnjw-vLv.js";import"./SupportLabel-BUau2ukg.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Cktca86i.js";import"./Icon-WdcJsBdU.js";import"./BaseRadioButton-MAFKdBcb.js";import"./FieldGroup-D9SPFuX-.js";import"./Label-CElumDHP.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
