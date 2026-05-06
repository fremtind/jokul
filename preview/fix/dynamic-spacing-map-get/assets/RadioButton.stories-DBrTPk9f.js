import{j as n,r as m}from"./iframe-ChfTc0u3.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Da6MJXbp.js";import i from"./BaseRadioButton.stories-DYl1pW0I.js";import{F as d}from"./FieldGroup-BhXCpYMt.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BNqIIP5Z.js";import"./SupportLabel-CuPkbQKk.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-B8rc8oPl.js";import"./Icon-39SxBotn.js";import"./BaseRadioButton-DpkmIRDw.js";import"./Label-Cffwm11n.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
