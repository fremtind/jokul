import{j as n,r as m}from"./iframe-C3ET5Jo1.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-ClTllnCb.js";import i from"./BaseRadioButton.stories-CpLo5W3s.js";import{F as d}from"./FieldGroup-39ZG-T2V.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B_mm_1C3.js";import"./SupportLabel-fWXNlv7g.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-P3wCpI7C.js";import"./Icon-C1mtlF7d.js";import"./BaseRadioButton-Bjn0rH87.js";import"./Label-DHLCIdmM.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
