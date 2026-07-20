import{j as n,r as m}from"./iframe-B2lOZauQ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BryEx61g.js";import i from"./BaseRadioButton.stories-BY_WyyOL.js";import{F as d}from"./FieldGroup-kJyTXZQy.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BC__6eVE.js";import"./SupportLabel-CNpS_n6K.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-GkqCxZdR.js";import"./Icon-Db_WgtSx.js";import"./WarningIcon-7nMnctV3.js";import"./BaseRadioButton-CZJYbaq5.js";import"./Label-DNBbHM5O.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
