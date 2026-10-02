import{j as n,r as m}from"./iframe-Dof2-brO.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-piKXV-6B.js";import i from"./BaseRadioButton.stories-f8z8hqWm.js";import{F as d}from"./FieldGroup-hFmaBG63.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BWup3LHY.js";import"./SupportLabel-hLfrDTUu.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CA1pZnus.js";import"./Icon-CCr1xMKd.js";import"./WarningIcon-C6-QZrqP.js";import"./BaseRadioButton-DPi8GeHp.js";import"./Label-DYjybdt8.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
