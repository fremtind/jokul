import{j as n,r as m}from"./iframe-CBqQfUWf.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CHiFCLBX.js";import i from"./BaseRadioButton.stories-DQbT1n8m.js";/* empty css               */import{F as p}from"./FieldGroup-CGR11tUQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DPO7NFsF.js";import"./SupportLabel-DfSGtJ9O.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DE6vsrnZ.js";import"./Icon-D25eYW8c.js";import"./BaseRadioButton-BuATVSSw.js";import"./Label-BJurifBr.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
