import{j as d,r as i}from"./iframe-CD9j_VvR.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{R as s}from"./RadioButton-9v42nAZl.js";import c from"./BaseRadioButton.stories-CJWaK_pX.js";import{F as u}from"./FieldGroup-BtYGeimE.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B-n43V7g.js";import"./SupportLabel-CD6SLrJc.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DJK73_6v.js";import"./Icon-GGGPU_kb.js";import"./WarningIcon-CmfMXJiV.js";import"./BaseRadioButton-BHIAXh5T.js";import"./Label-BHYAU5tG.js";const G={title:"Komponenter/Radio Button",component:s,args:{...c.args,children:"Radio button",value:"radio-button"}},e={name:"Radio Button"},r={args:{disabled:!0}},o={name:"Disabled og valgt",args:{disabled:!0,defaultChecked:!0}},t={render:n=>d.jsx(u,{legend:"Kontaktmetoder",children:m.map(a=>i.createElement(s,{...e.args,...n,key:a,value:a,name:"kontaktmetode"},a))})},C=["RadioButtonStory","Disabled","DisabledValgt","RadioButtonGroup"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
