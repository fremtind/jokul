import{j as n,r as m}from"./iframe-BK24M5Oe.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CXECx3Dk.js";import i from"./BaseRadioButton.stories-BrbZhM_z.js";import{F as d}from"./FieldGroup-DXOwVK5V.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-JCj1BlW-.js";import"./SupportLabel-D5LsSob8.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-yEJbChJp.js";import"./Icon-CW7-MYqB.js";import"./WarningIcon-D8VLpzqT.js";import"./BaseRadioButton-kuApLFPS.js";import"./Label-D454D0nm.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
