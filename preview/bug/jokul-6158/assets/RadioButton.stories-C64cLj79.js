import{j as n,r as m}from"./iframe-CuEuuiCJ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-3IaZVhzb.js";import i from"./BaseRadioButton.stories-BVXWOevz.js";import{F as d}from"./FieldGroup-BB_6BiWP.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-UyaluhAR.js";import"./SupportLabel-BVTHh71m.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-kI5O6Wt9.js";import"./Icon-kQc3XQaT.js";import"./WarningIcon-ortRa7ts.js";import"./BaseRadioButton-BZuSGMB-.js";import"./Label-ZUdy5C8M.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
