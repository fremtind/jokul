import{j as n,r as m}from"./iframe-BNLLeI2Q.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-PlntGqfF.js";import i from"./BaseRadioButton.stories-BGI5ZfU8.js";import{F as d}from"./FieldGroup-CeavsZV-.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-SG3cudKF.js";import"./SupportLabel-C3Dei40O.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-C9bHzhjX.js";import"./Icon-Dd9zFDph.js";import"./WarningIcon-CXzlr4oB.js";import"./BaseRadioButton-BVfXCkmh.js";import"./Label-Dtd_t9YQ.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
