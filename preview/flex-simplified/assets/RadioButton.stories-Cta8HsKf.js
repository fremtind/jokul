import{j as n,r as m}from"./iframe-CmNYqM8v.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C0XgXKmU.js";import i from"./BaseRadioButton.stories-BqnDW_Sp.js";import{F as d}from"./FieldGroup-BH4UXvVG.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B-TxhbV9.js";import"./SupportLabel-CH2mW8dj.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-B8N-4xA8.js";import"./Icon-C7q6JHEa.js";import"./WarningIcon-UX-_YZoo.js";import"./BaseRadioButton-Bf7AeoLk.js";import"./Label-Cw6Z8f1z.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
