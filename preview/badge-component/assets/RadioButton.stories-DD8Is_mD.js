import{j as n,r as m}from"./iframe-Bo5vqqra.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-sIeYd8kb.js";import i from"./BaseRadioButton.stories-DYfIkwZq.js";import{F as d}from"./FieldGroup-CovznCmX.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-WwkPb0Ck.js";import"./SupportLabel-BqEj38He.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-D7d6cn32.js";import"./Icon-Cv8E2pY3.js";import"./WarningIcon-D4FwqFwN.js";import"./BaseRadioButton-DMFVFmkv.js";import"./Label-DzdI0AoO.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
