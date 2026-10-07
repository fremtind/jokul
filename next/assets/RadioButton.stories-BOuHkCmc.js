import{j as n,r as m}from"./iframe-B6D1yXsi.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-dgJP_JAx.js";import i from"./BaseRadioButton.stories-BhyzkOj5.js";import{F as d}from"./FieldGroup-C-1n5BFU.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CD-jh8rz.js";import"./SupportLabel-C8GqWlVD.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-i8VPjMpa.js";import"./Icon-BjW8M-wg.js";import"./WarningIcon-BkyEAjhL.js";import"./BaseRadioButton-D9Qf2Ern.js";import"./Label-CBt3XE9N.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
