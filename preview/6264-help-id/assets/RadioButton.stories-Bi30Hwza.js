import{j as n,r as m}from"./iframe-D1MzGBjH.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Cz2Tlvs4.js";import i from"./BaseRadioButton.stories-Ci7BVTUB.js";import{F as d}from"./FieldGroup-CLJ7zs3s.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DAqXhn2R.js";import"./SupportLabel-C7_E0lcf.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DRf5Ad0H.js";import"./Icon-B8A45j_9.js";import"./WarningIcon-Bmf2cg-P.js";import"./BaseRadioButton-aFdken0p.js";import"./Label-8OWqXdNQ.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
