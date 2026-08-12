import{j as n,r as m}from"./iframe-DTxGWsmV.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-mNY4k69y.js";import i from"./BaseRadioButton.stories-4ixgHN0q.js";import{F as d}from"./FieldGroup-ByAZN1t6.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-L9g3EfZ5.js";import"./SupportLabel-DYuIFJt9.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CtG88OZr.js";import"./Icon-C94Ue9eR.js";import"./WarningIcon-8ZubMYTs.js";import"./BaseRadioButton-CZ-kGffZ.js";import"./Label-wNBeG8_l.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
