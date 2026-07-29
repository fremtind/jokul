import{j as n,r as m}from"./iframe-CXbEdO1B.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BF2NxS52.js";import i from"./BaseRadioButton.stories-CP9ByGj4.js";import{F as d}from"./FieldGroup-Csk8e5yJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DUiuu6Sb.js";import"./SupportLabel-BN8RoPYf.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-B9Tyskft.js";import"./Icon-kTxURkV4.js";import"./WarningIcon-BldD50S6.js";import"./BaseRadioButton-B8kjrgi4.js";import"./Label-rDUoY7Vq.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
