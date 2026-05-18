import{j as n,r as m}from"./iframe-Dbv5nwIw.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DaFuk6G-.js";import i from"./BaseRadioButton.stories-N4lHQiYE.js";import{F as d}from"./FieldGroup-DUjEhIyn.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CFbMANRJ.js";import"./SupportLabel-D1QYRPle.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BGCWoZHU.js";import"./Icon-ZWZ2-tmG.js";import"./BaseRadioButton-DT2fpWnJ.js";import"./Label-BVadcKtj.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
