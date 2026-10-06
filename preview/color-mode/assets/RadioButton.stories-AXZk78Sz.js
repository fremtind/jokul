import{j as n,r as m}from"./iframe-M28fAQO8.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-hXc9XNXo.js";import i from"./BaseRadioButton.stories-CA2Yw76M.js";import{F as d}from"./FieldGroup-DygvHtGT.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-s_og3R5Z.js";import"./SupportLabel--15flQmh.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BX4fIYTv.js";import"./Icon-Ch69uN6a.js";import"./WarningIcon-C9ODLQ99.js";import"./BaseRadioButton-CTG-kTAc.js";import"./Label-BgqujSL9.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
