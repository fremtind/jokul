import{j as n,r as m}from"./iframe-n3WU9YTo.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Br7ZA0k6.js";import i from"./BaseRadioButton.stories-BljoDYYh.js";import{F as d}from"./FieldGroup-BWpoB2qY.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-FCti06Xf.js";import"./SupportLabel-Bj2MnU_U.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DhXgjBcY.js";import"./Icon-DWsfwSZE.js";import"./WarningIcon-D1xzeNKK.js";import"./BaseRadioButton-DPXw66bU.js";import"./Label-g48--br5.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
