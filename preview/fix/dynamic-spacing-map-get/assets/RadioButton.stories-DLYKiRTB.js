import{j as n,r as m}from"./iframe-D7QRd4bE.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DSDku4H9.js";import i from"./BaseRadioButton.stories-BDumG5Ah.js";import{F as d}from"./FieldGroup-DjlNMl9l.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CzW51RDq.js";import"./SupportLabel-DI0vg-i2.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-D80SXYPi.js";import"./Icon-C5PuQHF4.js";import"./BaseRadioButton-nraG6eVr.js";import"./Label-D46dKw_r.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
