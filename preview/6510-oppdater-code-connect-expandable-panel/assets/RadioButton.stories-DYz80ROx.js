import{j as n,r as m}from"./iframe-8yqxqoJu.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Sixg8mEi.js";import i from"./BaseRadioButton.stories-Ch8g_MS3.js";import{F as d}from"./FieldGroup-Dzbk9HMR.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-SNAhZQ4f.js";import"./SupportLabel-KqOYX_HJ.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CB9pjdbn.js";import"./Icon-UdeEzISX.js";import"./WarningIcon-Cango9VG.js";import"./BaseRadioButton-DucVn98T.js";import"./Label-LUJ6oK87.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
