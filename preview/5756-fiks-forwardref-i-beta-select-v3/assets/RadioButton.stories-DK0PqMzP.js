import{j as n,r as m}from"./iframe-g9tc2sDn.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BacII7G-.js";import i from"./BaseRadioButton.stories-uZcxvmNu.js";import{F as d}from"./FieldGroup-DPxkMdsq.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BdUeg3P0.js";import"./SupportLabel-CRaF74pA.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CymMXplh.js";import"./Icon-ITtVxmRN.js";import"./BaseRadioButton-BPA7d9mC.js";import"./Label-KA-SW84d.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
