import{j as n,r as m}from"./iframe-Cp07xSmx.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DRN1GzqC.js";import i from"./BaseRadioButton.stories-B_oxBlFD.js";import{F as d}from"./FieldGroup-B7X6bN7l.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-aQD7Wi8L.js";import"./SupportLabel-D8eTd6ZF.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DV6mJFuV.js";import"./Icon-s9meQJjp.js";import"./WarningIcon-CKDm5_9y.js";import"./BaseRadioButton-CCCWXHAV.js";import"./Label-C1R2znUG.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
