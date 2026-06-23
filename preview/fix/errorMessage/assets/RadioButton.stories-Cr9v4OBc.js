import{j as n,r as m}from"./iframe-Dr1UPJtt.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DN2p9eDi.js";import i from"./BaseRadioButton.stories-DUm8lCmJ.js";import{F as d}from"./FieldGroup-Cebl-AWv.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-qc5a6cGU.js";import"./SupportLabel-D3yCHFW7.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DEjSlgbp.js";import"./Icon-BpYOlmuK.js";import"./WarningIcon-Dz8coMW5.js";import"./BaseRadioButton-dGr01T08.js";import"./Label-Dy_Df6wg.js";const b={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button",args:{value:"radio-button"}},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
