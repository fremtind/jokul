import{j as n,r as m}from"./iframe-Baj2zVwN.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BXnU-PwX.js";import i from"./BaseRadioButton.stories-xz6gJb1f.js";import{F as d}from"./FieldGroup-CZPKerDO.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DZP618ft.js";import"./SupportLabel-D-K1NxBH.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CN7TkbPL.js";import"./Icon-BsL9q1rf.js";import"./WarningIcon-9EWzznW1.js";import"./BaseRadioButton-16pO7SyI.js";import"./Label-BU2QBw-H.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
