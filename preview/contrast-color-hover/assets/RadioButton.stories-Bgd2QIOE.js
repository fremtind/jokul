import{j as n,r as m}from"./iframe-DlbO5vOB.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-GPri5RaI.js";import i from"./BaseRadioButton.stories-B4n3SFnX.js";import{F as d}from"./FieldGroup-C-W4QPB_.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-nZJDttar.js";import"./SupportLabel-DpfWuZSz.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DIUW2Deg.js";import"./Icon-CwV8zqI1.js";import"./WarningIcon-_SDdhZYa.js";import"./BaseRadioButton-B2-9DA4-.js";import"./Label-C3Suf-xk.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
