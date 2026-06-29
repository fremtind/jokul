import{j as n,r as m}from"./iframe-B_vDuAt9.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DZb0jhEa.js";import i from"./BaseRadioButton.stories-CSNh8Xuj.js";import{F as d}from"./FieldGroup-DF5wpxve.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CCYEuVdd.js";import"./SupportLabel-KfybnHXi.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-D08pXGan.js";import"./Icon-yEi_PDN6.js";import"./WarningIcon-Bjh_QgTS.js";import"./BaseRadioButton-CmVvL-f0.js";import"./Label-_yP0K2n2.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
