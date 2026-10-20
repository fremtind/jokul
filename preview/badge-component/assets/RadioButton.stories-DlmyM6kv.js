import{j as n,r as m}from"./iframe--IbQLLfs.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CW6ybf68.js";import i from"./BaseRadioButton.stories-cd7KtMLH.js";import{F as d}from"./FieldGroup-BSwBDdYe.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DNQbD1bB.js";import"./SupportLabel-qNOnqW6o.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-C5g-_u-P.js";import"./Icon-D0ZC9qNb.js";import"./WarningIcon-B-lIFyxC.js";import"./BaseRadioButton-Bp6VCFR1.js";import"./Label-BB_Vk8H1.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
