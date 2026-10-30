import{j as n,r as m}from"./iframe-faZ-BQ5s.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-7JHCqy-H.js";import i from"./BaseRadioButton.stories-D1cim2g-.js";import{F as d}from"./FieldGroup-BBK7tgAA.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BZ_ER28T.js";import"./SupportLabel-DlnRrjQF.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-8SbR0fHE.js";import"./Icon-XvUqTLNT.js";import"./WarningIcon-C1ge9Raq.js";import"./BaseRadioButton-C-ks-QxM.js";import"./Label-B_AWcEof.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
