import{j as n,r as m}from"./iframe-BPJr1WNG.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-NgiEL-_y.js";import i from"./BaseRadioButton.stories-DUzDtZPB.js";/* empty css               */import{F as p}from"./FieldGroup-053urIFG.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DRlhA7pK.js";import"./SupportLabel-DPt0FuTm.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DKrvNtZ1.js";import"./Icon-OAPQxwcA.js";import"./WarningIcon-Bt1oxkVf.js";import"./BaseRadioButton-CRLB-jFP.js";import"./Label-BvJFu5Dl.js";const F={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const j=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,j as __namedExportsOrder,F as default};
