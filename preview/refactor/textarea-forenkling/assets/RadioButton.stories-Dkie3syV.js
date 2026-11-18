import{j as d,r as i}from"./iframe-BJ-Z_Cjo.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{R as s}from"./RadioButton-DZN3TpSE.js";import c from"./BaseRadioButton.stories-qAUh5Nin.js";import{F as p}from"./FieldGroup-IPQPpgol.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-37GC0E8t.js";import"./SupportLabel-7UNTNFvJ.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CnIOOGtD.js";import"./Icon-BJ9LRX6a.js";import"./types-BlFGa32c.js";import"./WarningIcon-CJGiKuPC.js";import"./BaseRadioButton-CYtpHXO3.js";import"./Label-CIuZ6ANC.js";const C={title:"Komponenter/Radio Button",component:s,args:{...c.args,children:"Radio button",value:"radio-button"}},e={name:"Radio Button"},r={args:{disabled:!0}},o={name:"Disabled og valgt",args:{disabled:!0,defaultChecked:!0}},t={render:n=>d.jsx(p,{legend:"Kontaktmetoder",children:m.map(a=>i.createElement(s,{...e.args,...n,key:a,value:a,name:"kontaktmetode"},a))})},E=["RadioButtonStory","Disabled","DisabledValgt","RadioButtonGroup"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Disabled og valgt",
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{r as Disabled,o as DisabledValgt,t as RadioButtonGroup,e as RadioButtonStory,E as __namedExportsOrder,C as default};
