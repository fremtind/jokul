import{j as e}from"./iframe-Y1OcjnNo.js";import{R as a}from"./RadioButton-CrI0oqN1.js";import{R as r}from"./RadioButtonGroup-CcaMdP4-.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-i3O22uCG.js";import"./SupportLabel-CNFfRxpc.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CrXzAM-n.js";import"./Icon-DOc9L9Ko.js";import"./BaseRadioButton-DnLiGlqW.js";import"./FieldGroup-CsPfywGZ.js";import"./Label-CNv6mMbg.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
