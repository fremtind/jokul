import{j as n,r as m}from"./iframe-CZL5QpJP.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C4YwVSwb.js";import i from"./BaseRadioButton.stories-cW1RDE8Y.js";import{F as d}from"./FieldGroup-B8OBwHdR.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-5rI8IeJH.js";import"./SupportLabel-4N9g7WJl.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Lm25257a.js";import"./Icon-_0Rb8KBj.js";import"./WarningIcon-DMQH1fMw.js";import"./BaseRadioButton-DUrwKcK6.js";import"./Label-C_Ac9ykU.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
