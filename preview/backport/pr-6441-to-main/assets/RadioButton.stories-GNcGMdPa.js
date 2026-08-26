import{j as n,r as m}from"./iframe-C4VUIY3M.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BFF9iaoN.js";import i from"./BaseRadioButton.stories-DBaTDk_L.js";import{F as d}from"./FieldGroup-B56FSZ4E.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-77KiF-pW.js";import"./SupportLabel-DKU3eDL6.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-D7S14r_X.js";import"./Icon-DdJLE8LI.js";import"./WarningIcon-YsTIyEhF.js";import"./BaseRadioButton-CbL8QpDz.js";import"./Label-BP2RbqSv.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
