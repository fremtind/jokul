import{j as n,r as m}from"./iframe-BX8q34Qc.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CnOzJ5gF.js";import i from"./BaseRadioButton.stories-DUdnyYer.js";import{F as d}from"./FieldGroup-B6XNZ5wE.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CghsB_m4.js";import"./SupportLabel-PV3esFij.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BRMrnoIV.js";import"./Icon-DuQPsagy.js";import"./BaseRadioButton-mZs-HKeT.js";import"./Label-DS2457GU.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
