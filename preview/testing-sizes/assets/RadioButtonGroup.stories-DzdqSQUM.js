import{j as e}from"./iframe-Bv7LMU6l.js";import{R as a}from"./RadioButton-BBsU06nI.js";import{R as r}from"./RadioButtonGroup-BRd0Hd4w.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-dGUThTlM.js";import"./SupportLabel-D2fcnhBk.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-8NJ-Eevq.js";import"./Icon-B48KsVuT.js";import"./BaseRadioButton-D_wS-mDs.js";import"./FieldGroup-BlQ9r5xh.js";import"./Label-CUsTONqQ.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
