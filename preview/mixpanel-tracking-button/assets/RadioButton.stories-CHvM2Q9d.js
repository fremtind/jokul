import{j as n,r as m}from"./iframe-C3kYsIHh.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BrHcAIeS.js";import i from"./BaseRadioButton.stories-Cqch6f6e.js";import{F as d}from"./FieldGroup-DLXXAhAA.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-2r5NKHv8.js";import"./SupportLabel-BG1Lbt55.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-C11QbNIe.js";import"./Icon-Cy3VvqMK.js";import"./WarningIcon-Dmp1vMvv.js";import"./BaseRadioButton-yb4OSqft.js";import"./Label-CU6Y_UTG.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
