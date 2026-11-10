import{j as n,r as m}from"./iframe-BWqSof1o.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DJCM_DGW.js";import i from"./BaseRadioButton.stories-COZWnKR2.js";import{F as d}from"./FieldGroup-ntNRzdNi.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CUqs565_.js";import"./SupportLabel-BJMVddLT.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BJKag9Fq.js";import"./Icon-DyUqUHFK.js";import"./WarningIcon-wl8DJFxz.js";import"./BaseRadioButton-CQS5-kRS.js";import"./Label-CR-8vXp2.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
