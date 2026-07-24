import{j as n,r as m}from"./iframe-lnnRhOPS.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BiX4OGpA.js";import i from"./BaseRadioButton.stories-DOw6Lm4y.js";import{F as d}from"./FieldGroup-DNNe7LjN.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DE8bibEE.js";import"./SupportLabel-CXLm2iOp.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Cz0BPqX9.js";import"./Icon-B2_nwEVu.js";import"./WarningIcon-DTIU3a-k.js";import"./BaseRadioButton-jbt-PNQk.js";import"./Label-D2-dGWe8.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
