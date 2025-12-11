import{j as e}from"./iframe-01dd3rVd.js";import{R as a}from"./RadioButton-Cus10eOs.js";import{R as r}from"./RadioButtonGroup-BCrtgrPr.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./useId-Dkkelk-t.js";import"./SupportLabel-oIMBDzdZ.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-F9dwpPZ5.js";import"./Icon-CuPpdcnC.js";import"./BaseRadioButton-CaS4d0Ad.js";import"./FieldGroup-Co34sKn8.js";import"./Label-BMlncn0Y.js";const h={title:"Komponenter/RadioButton/RadioButtonGroup",component:r},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const j=["RadioButtonGroup"];export{o as RadioButtonGroup,j as __namedExportsOrder,h as default};
