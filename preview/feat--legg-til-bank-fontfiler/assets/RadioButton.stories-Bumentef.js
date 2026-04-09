import{j as n,r as m}from"./iframe-B0NXgE_J.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-H6cgt0nU.js";import i from"./BaseRadioButton.stories-DI9hLT5z.js";import{F as d}from"./FieldGroup-DMrp32S8.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-ru8KQ18-.js";import"./SupportLabel-ClWXHbNd.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DFDU5c8D.js";import"./Icon-BCqJgAbh.js";import"./BaseRadioButton-C_MFwVTQ.js";import"./Label-0vl8_Gia.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
