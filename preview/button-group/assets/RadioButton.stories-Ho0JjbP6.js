import{j as n,r as m}from"./iframe-flQ69wzQ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CpTVcOGC.js";import i from"./BaseRadioButton.stories-cnxNSqfh.js";import{F as d}from"./FieldGroup-BwcvRP5U.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DR71Olns.js";import"./SupportLabel-xRCqBzpt.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DtRF8wjo.js";import"./Icon-Cmf2mBmJ.js";import"./WarningIcon-kHtajMSC.js";import"./BaseRadioButton-DUbxU7ql.js";import"./Label-qPtr7Ved.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
