import{j as n,r as m}from"./iframe-Df3-SZZN.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CCmyZT_2.js";import i from"./BaseRadioButton.stories-BqK3BNi6.js";import{F as d}from"./FieldGroup-D7zKWNpA.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CdYWG57o.js";import"./SupportLabel-Dqv2IqMs.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-6-jd-tAK.js";import"./Icon-D_Zu3gAc.js";import"./WarningIcon-BoTlvNOr.js";import"./BaseRadioButton-DOXPHIhj.js";import"./Label-D8Z_zxio.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
