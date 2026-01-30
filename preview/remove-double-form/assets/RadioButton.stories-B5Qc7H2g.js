import{j as n,r as m}from"./iframe-CFM47A3t.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B3sLNb9H.js";import i from"./BaseRadioButton.stories-Drf8_8VS.js";import{F as d}from"./FieldGroup-Cc_DzdpG.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CqyZTF6Z.js";import"./SupportLabel-CNz2zx8w.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-xlMInnbA.js";import"./Icon-D4OObDPq.js";import"./BaseRadioButton-B-GUAZiW.js";import"./Label-Bh2-FyOq.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
