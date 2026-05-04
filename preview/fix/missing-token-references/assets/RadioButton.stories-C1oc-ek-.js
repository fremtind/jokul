import{j as n,r as m}from"./iframe-B05LJxpz.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C0fiqEbU.js";import i from"./BaseRadioButton.stories-DiUuXsUd.js";import{F as d}from"./FieldGroup-BDPHFMIg.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Co7whMpO.js";import"./SupportLabel-7xQp8Epr.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-sZEAk-VZ.js";import"./Icon-tok_7tQ9.js";import"./BaseRadioButton-B87LhyOA.js";import"./Label-CTw_RBFt.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
