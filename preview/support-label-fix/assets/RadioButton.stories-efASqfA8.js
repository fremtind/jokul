import{j as d,r as i}from"./iframe-hSS_WXnS.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{R as s}from"./RadioButton-O1fQKYzi.js";import p from"./BaseRadioButton.stories-puhB63zj.js";import{F as c}from"./FieldGroup-CZUBUOtl.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Bf-XDhg4.js";import"./SupportLabel-BbXZpbcO.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BeSkaq0s.js";import"./Icon-BuFaYyJU.js";import"./types-BlFGa32c.js";import"./WarningIcon-B1-7Dyux.js";import"./Text-1wwFMnrK.js";import"./BaseRadioButton-CERFyl9C.js";import"./Label-DEpp-RhL.js";const E={title:"Komponenter/Radio Button",component:s,args:{...p.args,children:"Radio button",value:"radio-button"}},e={name:"Radio Button"},r={args:{disabled:!0}},o={name:"Disabled og valgt",args:{disabled:!0,defaultChecked:!0}},t={render:n=>d.jsx(c,{legend:"Kontaktmetoder",children:m.map(a=>i.createElement(s,{...e.args,...n,key:a,value:a,name:"kontaktmetode"},a))})},F=["RadioButtonStory","Disabled","DisabledValgt","RadioButtonGroup"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{r as Disabled,o as DisabledValgt,t as RadioButtonGroup,e as RadioButtonStory,F as __namedExportsOrder,E as default};
