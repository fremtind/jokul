import{j as n,r as m}from"./iframe-zqt1OK4q.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D00SXkUb.js";import i from"./BaseRadioButton.stories-9QSsfB42.js";import{F as d}from"./FieldGroup-CimUzwY4.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-hgiT-BiI.js";import"./SupportLabel-8imy5GFl.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-B6j_mzHK.js";import"./Icon-DFccgpfz.js";import"./WarningIcon-DfaW3xq1.js";import"./BaseRadioButton-Cp2ugtc0.js";import"./Label-ZHFh2c50.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
