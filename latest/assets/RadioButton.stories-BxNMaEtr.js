import{j as n,r as m}from"./iframe-CIUUJJXo.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CbqfGPoR.js";import i from"./BaseRadioButton.stories-BOAIgxQu.js";import{F as d}from"./FieldGroup-ChCHRc82.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D8hxvGSL.js";import"./SupportLabel-D_ZNFvkX.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-q11fxUSJ.js";import"./Icon-Bz-V4c_Z.js";import"./WarningIcon-Bu4BiOBR.js";import"./BaseRadioButton-B6XNfXhU.js";import"./Label-D0fCY3zJ.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
