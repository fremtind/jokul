import{j as n,r as m}from"./iframe-CIcBiPdf.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Cy9JpkPj.js";import i from"./BaseRadioButton.stories-BMWzZ3Qp.js";import{F as d}from"./FieldGroup-DkCXyls8.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B88QKCfc.js";import"./SupportLabel-1dj_mshh.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DKHh9U3W.js";import"./Icon-P0T3j5Ky.js";import"./WarningIcon-BKOi12IP.js";import"./BaseRadioButton-BuV5IhqW.js";import"./Label-K-8OubWa.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
