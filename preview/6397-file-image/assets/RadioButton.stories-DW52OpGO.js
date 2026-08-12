import{j as n,r as m}from"./iframe-D0jGEvlt.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CJDYuX3t.js";import i from"./BaseRadioButton.stories-C2_p--Ah.js";import{F as d}from"./FieldGroup-CFnfgSlN.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DQEuAQbV.js";import"./SupportLabel-CELo4syA.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-B15eQp0H.js";import"./Icon-BhmjRupB.js";import"./WarningIcon-x4yL-9lk.js";import"./BaseRadioButton-C6Cf8CgB.js";import"./Label-CXgb4YC8.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
