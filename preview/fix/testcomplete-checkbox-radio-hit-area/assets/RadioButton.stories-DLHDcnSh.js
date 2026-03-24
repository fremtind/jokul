import{j as n,r as m}from"./iframe-DIfcPc2U.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DDweaPra.js";import i from"./BaseRadioButton.stories-B5dRBjIF.js";import{F as d}from"./FieldGroup-7aRYQO1d.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-9YVcqFFs.js";import"./SupportLabel-aT7N09fh.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DMgeUR35.js";import"./Icon-BkBljnZt.js";import"./BaseRadioButton-Cf6diw13.js";import"./Label-B1hVH-ut.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
