import{j as n,r as m}from"./iframe-NC1Lmq9f.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D-njfvTK.js";import i from"./BaseRadioButton.stories-DrTGYTYk.js";import{F as d}from"./FieldGroup-0CLZ3oaO.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DZLr8X4y.js";import"./SupportLabel-nHKT8HHN.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-cidQ4F48.js";import"./Icon-XKLts_3x.js";import"./WarningIcon-DsI6MigH.js";import"./BaseRadioButton-DKOdC4f4.js";import"./Label-BsTPmh-i.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
