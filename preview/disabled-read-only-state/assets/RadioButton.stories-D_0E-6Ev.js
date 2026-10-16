import{j as d,r as i}from"./iframe-DXRLrOxy.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{R as s}from"./RadioButton-ZzRDVCma.js";import c from"./BaseRadioButton.stories-X0eHtySX.js";import{F as u}from"./FieldGroup-BjPtrVR7.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-0p61PYKC.js";import"./SupportLabel-mJ440r0I.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-hP94u6zQ.js";import"./Icon-CSRKG3LQ.js";import"./WarningIcon-B9vLvgXR.js";import"./BaseRadioButton-ButLjcln.js";import"./Label-QbC1hbI6.js";const G={title:"Komponenter/Radio Button",component:s,args:{...c.args,children:"Radio button",value:"radio-button"}},e={name:"Radio Button"},r={args:{disabled:!0}},o={name:"Disabled og valgt",args:{disabled:!0,defaultChecked:!0}},t={render:n=>d.jsx(u,{legend:"Kontaktmetoder",children:m.map(a=>i.createElement(s,{...e.args,...n,key:a,value:a,name:"kontaktmetode"},a))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
