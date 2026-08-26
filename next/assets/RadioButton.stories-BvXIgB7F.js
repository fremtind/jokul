import{j as n,r as m}from"./iframe-dvfQprBw.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-KkCAgxbK.js";import i from"./BaseRadioButton.stories-CRHdTpgE.js";import{F as d}from"./FieldGroup--mNxFrsP.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Dvpbx2Uk.js";import"./SupportLabel-DYYCHn26.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-8Tsd8E0o.js";import"./Icon-vN4poXzb.js";import"./WarningIcon-P1am_-K6.js";import"./BaseRadioButton-BxiKF6b-.js";import"./Label-C6j2sAu_.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
