import{j as n,r as m}from"./iframe-DVvSRF9B.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DAXbZiEq.js";import i from"./BaseRadioButton.stories-B56vwiy7.js";import{F as d}from"./FieldGroup-Lm3Dyxp-.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D2G3Fu5m.js";import"./SupportLabel-CkkcZjxB.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-D-Z_C2wf.js";import"./Icon-DT6Tz74c.js";import"./WarningIcon-D-GChEr8.js";import"./BaseRadioButton-D-Ns6MI5.js";import"./Label-BRjxClCH.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
