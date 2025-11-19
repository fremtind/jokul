import{j as e}from"./jsx-runtime-BOJBhsC5.js";import{a}from"./RadioButton-DGGFPd1A.js";import{R as r}from"./RadioButtonGroup-CD8Tp5WF.js";/* empty css               */import"./index-Bv6P490N.js";import"./useId-B1yQ3ow-.js";import"./SupportLabel-WsXYroYu.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-tCz-nOjC.js";import"./Icon-DYEEOjBa.js";import"./BaseRadioButton-B-4anWNh.js";import"./FieldGroup-DI0jauUP.js";import"./Label-BcS4ibrI.js";import"./_commonjsHelpers-DaWZu8wl.js";const j={title:"Komponenter/RadioButton/RadioButtonGroup",component:r,parameters:{layout:"centered"},tags:["autodocs"]},i=["Send en e-post","Ring meg","Send et brev til folkeregistrert adresse"],o={args:{legend:"Dette er en RadioButtonGroup"},render:n=>e.jsx(r,{...n,children:i.map(t=>e.jsx(a,{value:t,children:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Dette er en RadioButtonGroup"
  },
  render: args => <RadioButtonGroupComponent {...args}>
            {choices.map(value => <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>)}
        </RadioButtonGroupComponent>
}`,...o.parameters?.docs?.source}}};const v=["RadioButtonGroup"];export{o as RadioButtonGroup,v as __namedExportsOrder,j as default};
