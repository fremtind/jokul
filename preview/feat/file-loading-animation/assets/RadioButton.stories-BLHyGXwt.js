import{j as n,r as m}from"./iframe-CPFMEoFO.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BP9ZEqxh.js";import i from"./BaseRadioButton.stories-F7uTskUL.js";import{F as d}from"./FieldGroup-DJ2IB6fY.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BZMfV5z7.js";import"./SupportLabel-gYHvt_NB.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CTOFyPAT.js";import"./Icon-B5G_E87h.js";import"./BaseRadioButton-DvB5A6iY.js";import"./Label-JT7rNpii.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
