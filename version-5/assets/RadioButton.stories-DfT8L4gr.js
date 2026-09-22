import{j as n,r as m}from"./iframe-CGl0IZEB.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-WFCvoph6.js";import i from"./BaseRadioButton.stories-B2ANwotm.js";import{F as d}from"./FieldGroup-DMzhQD7x.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DTo98mDX.js";import"./SupportLabel-BnTdUV1I.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-C0FyKzo8.js";import"./Icon-2ckkwcM2.js";import"./WarningIcon-BCGEPIpF.js";import"./BaseRadioButton-nP3kKnWr.js";import"./Label-RrXc1DM_.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
