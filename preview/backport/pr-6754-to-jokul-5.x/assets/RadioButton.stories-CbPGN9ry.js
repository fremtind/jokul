import{j as n,r as m}from"./iframe-yJDE4o2L.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B0oQDjCf.js";import i from"./BaseRadioButton.stories-D75Ov42W.js";import{F as d}from"./FieldGroup-CQIc_lpP.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Cxvb5004.js";import"./SupportLabel-DzUMLR4D.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-B2NR0BGv.js";import"./Icon-DVGCqIC2.js";import"./WarningIcon-CMMdpLw7.js";import"./BaseRadioButton-I79BdPbe.js";import"./Label-D-j1OB6o.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
