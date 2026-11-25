import{j as d,r as i}from"./iframe-DsTuScF2.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{R as s}from"./RadioButton-BkfjmE9_.js";import c from"./BaseRadioButton.stories-DM6tnlrA.js";import{F as p}from"./FieldGroup-Bewn5luT.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-2u9dESGf.js";import"./SupportLabel-Dw3FKZDp.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DHcjtxny.js";import"./Icon-BdAFmkkd.js";import"./types-IsTkoTmK.js";import"./WarningIcon-0V-TpBDR.js";import"./BaseRadioButton-VbxUdEuB.js";import"./Label-BTjbeN1O.js";const C={title:"Komponenter/Radio Button",component:s,args:{...c.args,children:"Radio button",value:"radio-button"}},e={name:"Radio Button"},r={args:{disabled:!0}},o={name:"Disabled og valgt",args:{disabled:!0,defaultChecked:!0}},t={render:n=>d.jsx(p,{legend:"Kontaktmetoder",children:m.map(a=>i.createElement(s,{...e.args,...n,key:a,value:a,name:"kontaktmetode"},a))})},E=["RadioButtonStory","Disabled","DisabledValgt","RadioButtonGroup"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
