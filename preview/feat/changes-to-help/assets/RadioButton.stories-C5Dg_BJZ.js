import{j as n,r as m}from"./iframe-BlL1f6tE.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BM7_CX0j.js";import i from"./BaseRadioButton.stories-i-SpGWEo.js";import{F as d}from"./FieldGroup-BJOoEWrV.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-5Z1nxQwM.js";import"./SupportLabel-C91qhPV0.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-B4o2UKJo.js";import"./Icon-DQG0WF9n.js";import"./BaseRadioButton-y7VuSFrz.js";import"./Label-BqQWt1hc.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
