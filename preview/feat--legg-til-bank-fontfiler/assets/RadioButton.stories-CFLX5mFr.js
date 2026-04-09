import{j as n,r as m}from"./iframe-DIACKsDt.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BB1xI_vk.js";import i from"./BaseRadioButton.stories-BGqBeeyp.js";import{F as d}from"./FieldGroup-DUbHZW8L.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-ljHbtrZN.js";import"./SupportLabel-D4SyjSf_.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DMay_XJg.js";import"./Icon-CuQYNHek.js";import"./BaseRadioButton-AWcmGjBV.js";import"./Label-SZ3LrI5r.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
