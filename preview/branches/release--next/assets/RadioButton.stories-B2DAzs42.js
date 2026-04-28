import{j as n,r as m}from"./iframe-T23mdjuL.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BMovd2lj.js";import i from"./BaseRadioButton.stories-CZYj_0v_.js";import{F as d}from"./FieldGroup-DPthHXLj.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Csw23UKE.js";import"./SupportLabel-kkGv9zRu.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BnqZCwcb.js";import"./Icon-n9CxozG4.js";import"./BaseRadioButton-BKtTQGHK.js";import"./Label-CgWob-kP.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
