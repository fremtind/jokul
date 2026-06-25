import{j as n,r as m}from"./iframe-GUEk6o9Q.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BJWrQZbI.js";import i from"./BaseRadioButton.stories-BYXG5VNj.js";import{F as d}from"./FieldGroup-BUVD2f6J.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Bg_u2xkg.js";import"./SupportLabel-D839Bww_.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BTexI83u.js";import"./Icon-DzOhMDjM.js";import"./WarningIcon-BqdZQG6e.js";import"./BaseRadioButton-BJilJ3nZ.js";import"./Label-CX1DrEs8.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
