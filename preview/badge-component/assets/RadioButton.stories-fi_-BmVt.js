import{j as n,r as m}from"./iframe-Cx70xiMg.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-bqi2UvQy.js";import i from"./BaseRadioButton.stories-BtpcY7W8.js";import{F as d}from"./FieldGroup-DF6Ng0qE.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CuhTZAtN.js";import"./SupportLabel-D2EW_-GC.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Dl2FTaji.js";import"./Icon-Dx1gILGr.js";import"./WarningIcon-Cl09IAj1.js";import"./BaseRadioButton-5A86hRA-.js";import"./Label-BKCKPsAi.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
