import{j as n,r as m}from"./iframe-Clzw-ql_.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CQjop-W9.js";import i from"./BaseRadioButton.stories-Cv5dss1_.js";import{F as d}from"./FieldGroup-BiMwpvSf.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DjL0N4r2.js";import"./SupportLabel-CP0Zk4BO.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-C6CxT110.js";import"./Icon-Co2HVDIa.js";import"./BaseRadioButton-57xOOaUk.js";import"./Label-CkyJYEB-.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
