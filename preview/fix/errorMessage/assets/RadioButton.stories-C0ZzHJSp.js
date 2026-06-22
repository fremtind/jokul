import{j as n,r as m}from"./iframe-4uiQUciM.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-ppPykYXJ.js";import i from"./BaseRadioButton.stories-yX-qUHi2.js";import{F as d}from"./FieldGroup-DveMEe9c.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CVxm4vuw.js";import"./SupportLabel-41QTmV9Z.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Lzub0YU_.js";import"./Icon-DPIZnM2t.js";import"./WarningIcon-D5lKyH8H.js";import"./BaseRadioButton-Di5EhZxb.js";import"./Label-DBOAlTlD.js";const b={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button",args:{value:"radio-button"}},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button",
  args: {
    value: "radio-button"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const h=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,h as __namedExportsOrder,b as default};
