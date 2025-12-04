import{j as e}from"./iframe-BjXEG3ty.js";import{R as a}from"./RadioButton-CaZyL0Ck.js";import{R as r}from"./RadioButtonGroup-Bcmxx0Sk.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-DDzAfnN4.js";import"./SupportLabel-gXaapy-x.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-3EXZbt0f.js";import"./Icon-DH5sQCcO.js";import"./BaseRadioButton-CtyJS4i4.js";import"./FieldGroup-Vd0d7Hxt.js";import"./Label-DOx2JQwo.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
