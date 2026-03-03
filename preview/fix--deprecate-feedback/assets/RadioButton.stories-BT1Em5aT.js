import{j as n,r as m}from"./iframe-CH9XGqLt.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-2dUATE3X.js";import i from"./BaseRadioButton.stories-CFhJUWNX.js";import{F as d}from"./FieldGroup-Btrq4W45.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B4DNed72.js";import"./SupportLabel-4ryjkqBd.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-C8udvh4c.js";import"./Icon-CE4Xg_O7.js";import"./BaseRadioButton-DSuKqyfk.js";import"./Label-BDEa5KhV.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
