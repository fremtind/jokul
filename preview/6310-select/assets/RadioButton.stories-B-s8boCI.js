import{j as n,r as m}from"./iframe-CVI0Zc7O.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DZQHQ5bd.js";import i from"./BaseRadioButton.stories-D78PNzaA.js";import{F as d}from"./FieldGroup-CqPvqJaZ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Bl4n_eRC.js";import"./SupportLabel-XQ6UMhAO.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CQaqK7mZ.js";import"./Icon-jyN1qjA3.js";import"./WarningIcon-C-7Q1Qvw.js";import"./BaseRadioButton-CUIsBJZ5.js";import"./Label-Ce7yUA48.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
