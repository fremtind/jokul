import{j as n,r as m}from"./iframe-CPCvHwW9.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BmbhzDGV.js";import i from"./BaseRadioButton.stories-CH7PAz0V.js";import{F as d}from"./FieldGroup-D7AqZed3.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-nuaNjdin.js";import"./SupportLabel-BLrmjw13.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Bu69SZzL.js";import"./Icon-DH34iQR3.js";import"./WarningIcon-Dw5dwANg.js";import"./BaseRadioButton-ClUSciDy.js";import"./Label-DoMcuh9I.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
