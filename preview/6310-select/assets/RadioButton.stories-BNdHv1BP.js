import{j as n,r as m}from"./iframe-CtV_8YM5.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BUGRosNe.js";import i from"./BaseRadioButton.stories-_Yx2jbJ2.js";import{F as d}from"./FieldGroup-C28cc0jl.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CV-LVNxa.js";import"./SupportLabel-BCJ54qu_.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-RstulEUD.js";import"./Icon-B8k6P24I.js";import"./WarningIcon-CekaX7uZ.js";import"./BaseRadioButton-DWsPx6et.js";import"./Label-CIfpbCwU.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
