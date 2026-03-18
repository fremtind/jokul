import{j as n,r as m}from"./iframe-BHanZNHf.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-ClAbjuTy.js";import i from"./BaseRadioButton.stories-8qkD3w6i.js";import{F as d}from"./FieldGroup-B809_EGV.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Dlpf33gm.js";import"./SupportLabel-DjAwP0Su.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CFB0ODQ5.js";import"./Icon-3SmRXZEX.js";import"./BaseRadioButton-BrAEWKTU.js";import"./Label-BhxZRB-7.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
