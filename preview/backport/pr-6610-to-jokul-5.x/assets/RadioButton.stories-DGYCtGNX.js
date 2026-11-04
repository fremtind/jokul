import{j as n,r as m}from"./iframe-BUw8fml-.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BXyZI9Mh.js";import i from"./BaseRadioButton.stories-DB3ldPWO.js";import{F as d}from"./FieldGroup-36ctHUDb.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BMEG0lZa.js";import"./SupportLabel-CRS0vmDK.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DuIxYgFi.js";import"./Icon-BZGR0LXX.js";import"./WarningIcon-B7lFNCme.js";import"./BaseRadioButton-DYZS9g8s.js";import"./Label-DQ3G0ctj.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
