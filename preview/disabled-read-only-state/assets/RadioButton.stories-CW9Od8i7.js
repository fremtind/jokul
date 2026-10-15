import{j as d,r as i}from"./iframe-Cc0lsbEP.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{R as s}from"./RadioButton-C_pE1xJB.js";import c from"./BaseRadioButton.stories-BnqMQ-rz.js";import{F as u}from"./FieldGroup-C3vgeZbo.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BEqUuJdd.js";import"./SupportLabel-D8Vv-TW6.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CM5mryur.js";import"./Icon-BPBN9EvZ.js";import"./WarningIcon-C3tmYzoj.js";import"./BaseRadioButton-DZ53ihvM.js";import"./Label-8650UV_r.js";const G={title:"Komponenter/Radio Button",component:s,args:{...c.args,children:"Radio button",value:"radio-button"}},e={name:"Radio Button"},r={args:{disabled:!0}},o={name:"Disabled og valgt",args:{disabled:!0,defaultChecked:!0}},t={render:n=>d.jsx(u,{legend:"Kontaktmetoder",children:m.map(a=>i.createElement(s,{...e.args,...n,key:a,value:a,name:"kontaktmetode"},a))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const C=["RadioButtonStory","Disabled","DisabledValgt","RadioButtonGroup"];export{r as Disabled,o as DisabledValgt,t as RadioButtonGroup,e as RadioButtonStory,C as __namedExportsOrder,G as default};
