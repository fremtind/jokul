import{j as d,r as i}from"./iframe-DdycUQEW.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{R as s}from"./RadioButton-COSjj3rx.js";import c from"./BaseRadioButton.stories-D5-dgafK.js";import{F as u}from"./FieldGroup-5B0t5B9Q.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CzcTekdj.js";import"./SupportLabel-9_yhGTCA.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CNL63iIh.js";import"./Icon-X8VmP_1W.js";import"./WarningIcon-Y6DXZI_L.js";import"./BaseRadioButton-BlabL8XM.js";import"./Label-Bgc9Mwk7.js";const G={title:"Komponenter/Radio Button",component:s,args:{...c.args,children:"Radio button",value:"radio-button"}},e={name:"Radio Button"},r={args:{disabled:!0}},o={name:"Disabled og valgt",args:{disabled:!0,defaultChecked:!0}},t={render:n=>d.jsx(u,{legend:"Kontaktmetoder",children:m.map(a=>i.createElement(s,{...e.args,...n,key:a,value:a,name:"kontaktmetode"},a))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
