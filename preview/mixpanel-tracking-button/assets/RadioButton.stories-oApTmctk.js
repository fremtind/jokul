import{j as n,r as m}from"./iframe-BPDBDSZd.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton--QNJBwlG.js";import i from"./BaseRadioButton.stories-C8zzNHaa.js";import{F as d}from"./FieldGroup-BCnkko5i.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-VjG_-abN.js";import"./SupportLabel-c09phDRK.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BoYUFLX5.js";import"./Icon-CTyq0hst.js";import"./WarningIcon-DnldtVax.js";import"./BaseRadioButton-DXag9LzA.js";import"./Label-CoLeSM6P.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
