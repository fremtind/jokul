import{j as n,r as m}from"./iframe-DlNaW6W2.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Bu0YOIkL.js";import i from"./BaseRadioButton.stories-BsorcdiU.js";import{F as d}from"./FieldGroup-Bv38KpV7.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CtGXv7sF.js";import"./SupportLabel-sNoV-3x_.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Cq6ch3_j.js";import"./Icon-JIqShNts.js";import"./WarningIcon-dB_Mpny5.js";import"./BaseRadioButton-DSeBQFIj.js";import"./Label-Bzt42sD_.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
