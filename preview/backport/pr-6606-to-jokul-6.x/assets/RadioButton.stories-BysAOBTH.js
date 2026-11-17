import{j as n,r as m}from"./iframe-DfRMJqQG.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DNggyI5I.js";import s from"./BaseRadioButton.stories-Bt6b8OfW.js";import{F as p}from"./FieldGroup-DUtejXFM.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-9euHN0Lj.js";import"./SupportLabel-CvXUfG2K.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DAlEwuTK.js";import"./Icon-Bb1JmFOR.js";import"./types-BlFGa32c.js";import"./WarningIcon-CoACJujz.js";import"./BaseRadioButton-BvU0y2nn.js";import"./Label-Df5eJIpF.js";const E={title:"Komponenter/Radio Button",component:e,args:{...s.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:i.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},F=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
