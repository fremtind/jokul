import{j as n,r as m}from"./iframe-BqM4Rfy8.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Bdine7dp.js";import i from"./BaseRadioButton.stories-CUNsaX7m.js";import{F as d}from"./FieldGroup-CmcLAmz_.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DAU0Ocvp.js";import"./SupportLabel-BzwdvJw2.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DYO6G_il.js";import"./Icon-B8FzFLRZ.js";import"./WarningIcon-vQGU5p4q.js";import"./BaseRadioButton-BRyqD59C.js";import"./Label-DCOoAXgB.js";const b={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button",args:{value:"radio-button"}},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
