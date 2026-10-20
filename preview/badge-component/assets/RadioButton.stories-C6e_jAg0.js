import{j as n,r as m}from"./iframe-Bav4HC3l.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-8lREdRXs.js";import i from"./BaseRadioButton.stories-Bl8FhBPR.js";import{F as d}from"./FieldGroup-CgUq2wYG.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DhnIO5FX.js";import"./SupportLabel-H0F_Ka00.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-VrkUfdBu.js";import"./Icon-R-dxZmpt.js";import"./WarningIcon-Bg8BSOEf.js";import"./BaseRadioButton-DRyGBzMx.js";import"./Label-1dw7PB-4.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
