import{j as n,r as m}from"./iframe-BwkVf8HS.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-50HQXDgD.js";import i from"./BaseRadioButton.stories-gdP0kGMw.js";import{F as d}from"./FieldGroup-XfrjwUah.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D2Gib_Lw.js";import"./SupportLabel-CqiH7ePF.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BZAC2q9o.js";import"./Icon-B8CXOd5T.js";import"./WarningIcon-V-hjaUq0.js";import"./BaseRadioButton-OR92Cf2Y.js";import"./Label-CzrMKc58.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
