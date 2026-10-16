import{j as n,r as m}from"./iframe-WPZ7RaUF.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CtAKTIMa.js";import i from"./BaseRadioButton.stories-w6gNpab7.js";import{F as d}from"./FieldGroup-Bh3rgF_v.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Dk43YpkK.js";import"./SupportLabel-CYmnX8dN.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Djcantjp.js";import"./Icon-BL_CxV31.js";import"./WarningIcon-Bujkmemj.js";import"./BaseRadioButton-CAIgrKzi.js";import"./Label-ldMqR10e.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
