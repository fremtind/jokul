import{j as n,r as m}from"./iframe-aRFB7fRf.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-a8GQt5uD.js";import i from"./BaseRadioButton.stories-Rulu21Na.js";import{F as d}from"./FieldGroup-BWkct7sQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C4qKa9a7.js";import"./SupportLabel-DzEOXsUx.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CZG6piHz.js";import"./Icon-C7MblXCd.js";import"./WarningIcon-C6R0c53m.js";import"./BaseRadioButton-D88H4Z23.js";import"./Label-BjsLckEB.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
