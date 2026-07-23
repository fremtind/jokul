import{j as n,r as m}from"./iframe-BcD9GcZD.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B_db-tPN.js";import i from"./BaseRadioButton.stories-b1z4zzCz.js";import{F as d}from"./FieldGroup-BVpEEagV.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BU_x9pLF.js";import"./SupportLabel-BHMJeESa.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DwSiPtvA.js";import"./Icon-inwkS7hI.js";import"./WarningIcon-C1csXuA_.js";import"./BaseRadioButton-DHroQYeV.js";import"./Label-CWctKa4l.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
