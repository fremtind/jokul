import{j as n,r as m}from"./iframe-Dqvwbyjp.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CjqFpo5V.js";import i from"./BaseRadioButton.stories-BALD67uH.js";/* empty css               */import{F as p}from"./FieldGroup-DgXVITm_.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B6g5pRrS.js";import"./SupportLabel-DXcI0mRI.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DgIjs8X5.js";import"./Icon-BLEG48Hq.js";import"./BaseRadioButton-C0JFwR6F.js";import"./Label-QCFtjzwZ.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
