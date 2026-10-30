import{j as n,r as m}from"./iframe-CetG-oL2.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DZpu1YvE.js";import i from"./BaseRadioButton.stories-B5MQIO48.js";import{F as d}from"./FieldGroup-DQsdH8cU.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CoAx-v4p.js";import"./SupportLabel-1RhHNd6r.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DbocgTOA.js";import"./Icon-BUSQt2z_.js";import"./WarningIcon-wDUI3aNi.js";import"./BaseRadioButton-BfSxhDvQ.js";import"./Label-B3qsxmMe.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
