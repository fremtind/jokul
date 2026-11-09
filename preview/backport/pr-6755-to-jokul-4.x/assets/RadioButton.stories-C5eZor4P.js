import{j as n,r as m}from"./iframe-BNyaib6N.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-U2mlFKVK.js";import i from"./BaseRadioButton.stories-BNngQm--.js";/* empty css               */import{F as p}from"./FieldGroup-DzVO9cKf.js";import"./preload-helper-PPVm8Dsz.js";import"./useId--DKImA4f.js";import"./SupportLabel-Cssps0vD.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BxcidHOf.js";import"./Icon-BXYXLWt7.js";import"./BaseRadioButton-DNy0MOPh.js";import"./Label-DFZVe-SV.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},F=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
