import{j as n,r as m}from"./iframe-BexQfyWH.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DTl_t4J3.js";import i from"./BaseRadioButton.stories-CiKKh9OI.js";import{F as d}from"./FieldGroup-CT2AAyep.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BtdtUNx-.js";import"./SupportLabel-DJaRj9eR.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CIq8qZ6v.js";import"./Icon-BCY1HP59.js";import"./WarningIcon-CjQxkrer.js";import"./BaseRadioButton-CjygaNt3.js";import"./Label-CeipaYE-.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
