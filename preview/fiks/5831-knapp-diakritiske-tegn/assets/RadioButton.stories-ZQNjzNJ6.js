import{j as n,r as m}from"./iframe-B0DayZ9c.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CfK35Y8O.js";import i from"./BaseRadioButton.stories-DlC2Kuzn.js";import{F as d}from"./FieldGroup-D9O2iyUK.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-gBfxsYqv.js";import"./SupportLabel-ppS3Qo7O.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-sW0WzjW4.js";import"./Icon-DmvXO8IU.js";import"./BaseRadioButton-DjCrmF_H.js";import"./Label-FBS6vhMQ.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
