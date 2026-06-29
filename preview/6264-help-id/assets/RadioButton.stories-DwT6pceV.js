import{j as n,r as m}from"./iframe-M3ErUHr-.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B9OxTQVG.js";import i from"./BaseRadioButton.stories-B7E8Z4aQ.js";import{F as d}from"./FieldGroup-CEme_5oP.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-PE-iYhKF.js";import"./SupportLabel-cJfq-ZCM.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BzWjpw59.js";import"./Icon-XH4TzFbj.js";import"./WarningIcon-D26WkRN6.js";import"./BaseRadioButton-N1-iv0KG.js";import"./Label-C4WU9jFZ.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
