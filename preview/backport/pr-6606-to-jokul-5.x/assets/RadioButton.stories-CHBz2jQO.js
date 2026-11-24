import{j as n,r as m}from"./iframe-DP8Xf_qW.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-vNJTCQgW.js";import s from"./BaseRadioButton.stories-CnnDD1m2.js";import{F as p}from"./FieldGroup-iELpliL-.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DCOUoPrx.js";import"./SupportLabel-BKFe5kWx.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CbZ15OhW.js";import"./Icon-k8xo1fZn.js";import"./types-IsTkoTmK.js";import"./WarningIcon-1AHRTzaM.js";import"./BaseRadioButton-B9qQwVPP.js";import"./Label-DF5EMnl-.js";const E={title:"Komponenter/Radio Button",component:e,args:{...s.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:i.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},F=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
