import{j as n,r as m}from"./iframe-B5c25FQx.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DsJHoebp.js";import i from"./BaseRadioButton.stories-nMU2aWDz.js";import{F as d}from"./FieldGroup-BC78zk1H.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B0Fs7r1j.js";import"./SupportLabel-BTU8ThyQ.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BPzD117u.js";import"./Icon-yNerfSrX.js";import"./WarningIcon-HmqvppYz.js";import"./BaseRadioButton-DFqM3bgT.js";import"./Label-QRT466-5.js";const b={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button",args:{value:"radio-button"}},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
