import{j as n,r as m}from"./iframe-1ffnmLT_.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-qAWmB4l8.js";import i from"./BaseRadioButton.stories-CGeF1ETJ.js";import{F as d}from"./FieldGroup-BAb1SlQs.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Fs0FsRV4.js";import"./SupportLabel-Z2YkQDEJ.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-B38grMQP.js";import"./Icon-oZqmbVJA.js";import"./WarningIcon-D_kzO5US.js";import"./BaseRadioButton-D9JUv4bY.js";import"./Label-7BHNybe5.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
