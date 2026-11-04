import{j as d,r as i}from"./iframe-VEPE-gCM.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{R as s}from"./RadioButton-DSc4EILL.js";import c from"./BaseRadioButton.stories-CRTR9Tik.js";import{F as u}from"./FieldGroup-X4y4fp-p.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BCWeqM0e.js";import"./SupportLabel-CdatP24R.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Dv4vHjHn.js";import"./Icon-CN-MlVZB.js";import"./WarningIcon-E6SdyN62.js";import"./BaseRadioButton-C38uLexr.js";import"./Label-CjCi-K9B.js";const G={title:"Komponenter/Radio Button",component:s,args:{...c.args,children:"Radio button",value:"radio-button"}},e={name:"Radio Button"},r={args:{disabled:!0}},o={name:"Disabled og valgt",args:{disabled:!0,defaultChecked:!0}},t={render:n=>d.jsx(u,{legend:"Kontaktmetoder",children:m.map(a=>i.createElement(s,{...e.args,...n,key:a,value:a,name:"kontaktmetode"},a))})},C=["RadioButtonStory","Disabled","DisabledValgt","RadioButtonGroup"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{r as Disabled,o as DisabledValgt,t as RadioButtonGroup,e as RadioButtonStory,C as __namedExportsOrder,G as default};
