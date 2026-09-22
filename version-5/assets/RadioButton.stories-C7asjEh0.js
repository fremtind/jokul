import{j as n,r as m}from"./iframe-CWO8LAu6.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-QeFlrjKx.js";import i from"./BaseRadioButton.stories-DNnZihMX.js";import{F as d}from"./FieldGroup-DBZRWWj2.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BRSTwzyI.js";import"./SupportLabel-Dze2zFY6.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-37aG6eH8.js";import"./Icon-PVJXW3mo.js";import"./WarningIcon-DDpqi8k2.js";import"./BaseRadioButton-akaJQT-E.js";import"./Label-Bf9u2-Tw.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
