import{j as n,r as m}from"./iframe-Dj_0KXfL.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-mzfJxH-2.js";import s from"./BaseRadioButton.stories-B5uaFQ60.js";import{F as p}from"./FieldGroup-DvEf42vL.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CiF6n8vQ.js";import"./SupportLabel-GwdTy8cu.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-08BHLgdl.js";import"./Icon-DQ2KKCVA.js";import"./WarningIcon-BOII7UWe.js";import"./BaseRadioButton-vNCRnSBc.js";import"./Label-BW7pe0Q6.js";import"./Title-Dw6GHWGe.js";const E={title:"Komponenter/Radio Button",component:e,args:{...s.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:i.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
