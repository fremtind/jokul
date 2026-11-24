import{j as n,r as m}from"./iframe-iV1sGcN7.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DQv4uLfT.js";import s from"./BaseRadioButton.stories-BAhYZBTC.js";import{F as p}from"./FieldGroup-C8901IFP.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-rND0VVge.js";import"./SupportLabel-QejYcZs9.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Bv2iZNmj.js";import"./Icon-BpgnOPZg.js";import"./types-BlFGa32c.js";import"./WarningIcon-BcBxnkqe.js";import"./BaseRadioButton-Du1u7esP.js";import"./Label-BrDlJVjw.js";const E={title:"Komponenter/Radio Button",component:e,args:{...s.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:i.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},F=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
