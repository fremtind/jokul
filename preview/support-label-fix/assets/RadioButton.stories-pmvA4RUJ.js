import{j as d,r as i}from"./iframe-BLM1xPjh.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{R as s}from"./RadioButton-D9hElBTe.js";import p from"./BaseRadioButton.stories-CP-J_hTw.js";import{F as c}from"./FieldGroup-jd2LnIJA.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Bh2xPWaT.js";import"./SupportLabel-D6-INE_9.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-bu7RyI5G.js";import"./Icon-B3KCKcTu.js";import"./types-BlFGa32c.js";import"./WarningIcon-Dh7kYQb6.js";import"./Text-D8k6LJwR.js";import"./BaseRadioButton-C3_QquHR.js";import"./Label-DWRS7Vu7.js";const E={title:"Komponenter/Radio Button",component:s,args:{...p.args,children:"Radio button",value:"radio-button"}},e={name:"Radio Button"},r={args:{disabled:!0}},o={name:"Disabled og valgt",args:{disabled:!0,defaultChecked:!0}},t={render:n=>d.jsx(c,{legend:"Kontaktmetoder",children:m.map(a=>i.createElement(s,{...e.args,...n,key:a,value:a,name:"kontaktmetode"},a))})},F=["RadioButtonStory","Disabled","DisabledValgt","RadioButtonGroup"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
