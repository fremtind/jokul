import{j as n,r as m}from"./iframe-I-BB2Vre.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-rIGzoQnM.js";import s from"./BaseRadioButton.stories-SqNVrri1.js";import{F as p}from"./FieldGroup-D6fpKRMY.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CDgEKytl.js";import"./SupportLabel-BF0uSPfh.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-D8UuHnOe.js";import"./Icon-CgIPxfMF.js";import"./types-BlFGa32c.js";import"./WarningIcon-xzD93k8l.js";import"./BaseRadioButton-MFk53pVK.js";import"./Label-DJs_1aFX.js";const E={title:"Komponenter/Radio Button",component:e,args:{...s.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:i.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},F=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
