import{j as n,r as m}from"./iframe-DABf5EGM.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B9Oh92-2.js";import i from"./BaseRadioButton.stories-CnXNxeDx.js";import{F as d}from"./FieldGroup-E4wyeoJC.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DQPqsQea.js";import"./SupportLabel-DIChkk9o.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DM1YJTeM.js";import"./Icon-10ffj0ic.js";import"./BaseRadioButton-nxm8IvNU.js";import"./Label-DjYfhJZn.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
