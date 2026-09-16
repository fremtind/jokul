import{j as n,r as m}from"./iframe-C5PVGYet.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Df6dDDl4.js";import i from"./BaseRadioButton.stories-BZq_tMTH.js";import{F as d}from"./FieldGroup-ljjP7vqh.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DTGCRy4K.js";import"./SupportLabel-xEeHDRVo.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CuqJouq8.js";import"./Icon-CHtB3UC8.js";import"./WarningIcon-BtYCozmf.js";import"./BaseRadioButton-DfkhnxeQ.js";import"./Label-p7Dd1hXl.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
