import{j as n,r as m}from"./iframe-CSziHxis.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BWYuAqAL.js";import i from"./BaseRadioButton.stories-DE6Pr_8x.js";import{F as d}from"./FieldGroup-CI-WIWMW.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DIwfb250.js";import"./SupportLabel-EEPTlvFq.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-B9IUw-R5.js";import"./Icon-qzpIHkwN.js";import"./WarningIcon-QGxwxL3W.js";import"./BaseRadioButton-yqv0hYA1.js";import"./Label-Bsn0MuJG.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
