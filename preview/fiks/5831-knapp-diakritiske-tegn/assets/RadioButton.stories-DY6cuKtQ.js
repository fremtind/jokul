import{j as n,r as m}from"./iframe-C00D7x2n.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Dxw24EEh.js";import i from"./BaseRadioButton.stories-8ZBY3RFh.js";import{F as d}from"./FieldGroup-BvZmcrJU.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Jl6tKbTB.js";import"./SupportLabel-DUal16Hu.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DiHbR5Nj.js";import"./Icon-ChH1clju.js";import"./BaseRadioButton-Bq7lmRvp.js";import"./Label-YzP4DYZy.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
