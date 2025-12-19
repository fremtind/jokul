import{j as e}from"./iframe-D9oBkFDu.js";import{R as a}from"./RadioButton-BPy6ha0N.js";import{R as r}from"./RadioButtonGroup-BZtBmY55.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-BgRHuBZ0.js";import"./SupportLabel-dgUyORTL.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Cm3wfqIK.js";import"./Icon-DDKdvxRe.js";import"./BaseRadioButton-CUSv-wqW.js";import"./FieldGroup-B6P5lv-w.js";import"./Label-BHbH4__I.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
