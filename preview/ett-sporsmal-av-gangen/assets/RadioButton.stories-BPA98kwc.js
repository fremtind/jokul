import{j as n,r as m}from"./iframe-RvZfn1q1.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BeiJCF9F.js";import i from"./BaseRadioButton.stories-5bec1eYP.js";import{F as d}from"./FieldGroup-CDiR0DqP.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Ch1X8nij.js";import"./SupportLabel-OVQ0cGXh.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BDBwG57D.js";import"./Icon-C5TKyNa-.js";import"./WarningIcon-Dwsu9Vor.js";import"./BaseRadioButton-CISgIrRV.js";import"./Label-ULociDTI.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
