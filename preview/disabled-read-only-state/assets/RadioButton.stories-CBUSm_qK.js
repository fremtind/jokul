import{j as d,r as i}from"./iframe-BtDSgjSo.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{R as s}from"./RadioButton-B5H_XTp3.js";import c from"./BaseRadioButton.stories-DQXvuc6N.js";import{F as u}from"./FieldGroup-C6Qsr8DC.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BdftHoHp.js";import"./SupportLabel-i8VITltx.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-WMLnp3Ph.js";import"./Icon-Nb3dwUIe.js";import"./WarningIcon-BbUO-YPr.js";import"./BaseRadioButton-DYGYG6dd.js";import"./Label-vFZVJR_r.js";const G={title:"Komponenter/Radio Button",component:s,args:{...c.args,children:"Radio button",value:"radio-button"}},e={name:"Radio Button"},r={args:{disabled:!0}},o={name:"Disabled og valgt",args:{disabled:!0,defaultChecked:!0}},t={render:n=>d.jsx(u,{legend:"Kontaktmetoder",children:m.map(a=>i.createElement(s,{...e.args,...n,key:a,value:a,name:"kontaktmetode"},a))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
