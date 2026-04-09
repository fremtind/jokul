import{j as n,r as m}from"./iframe-BVV4LrUq.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-5D-zpQHK.js";import i from"./BaseRadioButton.stories-CMgXf6rm.js";import{F as d}from"./FieldGroup-BDmQ7hhf.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CB5rypRD.js";import"./SupportLabel-C5Ul7-7q.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DMc3FsAI.js";import"./Icon-DMK-Z5AO.js";import"./BaseRadioButton-CKGbwUp-.js";import"./Label-BcoxwFM1.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
