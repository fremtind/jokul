import{j as n,r as m}from"./iframe-DxYlN7nq.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DeOE6ziB.js";import i from"./BaseRadioButton.stories-B83Bfhat.js";import{F as d}from"./FieldGroup-CGta8ljd.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Dcq2o0V2.js";import"./SupportLabel-DJpuwltU.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-dMtpW5y_.js";import"./Icon-CXmdW7MR.js";import"./WarningIcon-D7Wl25q-.js";import"./BaseRadioButton-RgOBGDPE.js";import"./Label-VCDfnGxr.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
