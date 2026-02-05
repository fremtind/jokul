import{j as n,r as m}from"./iframe-Z7U5_4Wx.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D49KBCBz.js";import i from"./BaseRadioButton.stories-yO31KtYH.js";import{F as d}from"./FieldGroup-BnW9gdvL.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DS_XmcWE.js";import"./SupportLabel-Co1SijlC.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Ce9lP_OC.js";import"./Icon-BR1N4Lbi.js";import"./BaseRadioButton-JBnUkCPX.js";import"./Label-D8cVr8IA.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
