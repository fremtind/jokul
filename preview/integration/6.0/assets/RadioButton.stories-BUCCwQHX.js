import{j as n,r as m}from"./iframe-C-coLB8C.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DoctWTWH.js";import i from"./BaseRadioButton.stories-B3ruXYxL.js";import{F as d}from"./FieldGroup-Ck8zTauQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BNJ8Q4ui.js";import"./SupportLabel-C5WQCCU7.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-PwygU81l.js";import"./Icon-CKqdB1HQ.js";import"./WarningIcon-Co8xTw0Y.js";import"./BaseRadioButton-DdoEzfmo.js";import"./Label-BNAStSrl.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
