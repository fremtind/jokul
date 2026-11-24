import{j as n,r as m}from"./iframe-DHZS9f39.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BeujM1jh.js";import s from"./BaseRadioButton.stories-e7zGWwBN.js";import{F as p}from"./FieldGroup-3SNSqMPV.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CNuc0XWP.js";import"./SupportLabel-buCnpWH2.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CSgVft74.js";import"./Icon-Barr-cyp.js";import"./types-IsTkoTmK.js";import"./WarningIcon-CSLpx5LU.js";import"./BaseRadioButton-CfYeCQhB.js";import"./Label-i4GJCVcv.js";const E={title:"Komponenter/Radio Button",component:e,args:{...s.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:i.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},F=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
