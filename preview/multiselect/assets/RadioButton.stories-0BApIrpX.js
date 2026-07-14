import{j as n,r as m}from"./iframe-vBol8UFS.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DcWU0rGO.js";import i from"./BaseRadioButton.stories-Ci7tBmtT.js";import{F as d}from"./FieldGroup-vjaiY5_0.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DFHrLyAp.js";import"./BaseRadioButton-BKYf4DUZ.js";import"./clsx-B-dksMZM.js";import"./Label-DZ5uKtYy.js";import"./SupportLabel-D9c5zRbt.js";import"./SuccessIcon-B-SXXyiH.js";import"./Icon-CM-bZq8k.js";import"./WarningIcon-CiONqNL8.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
