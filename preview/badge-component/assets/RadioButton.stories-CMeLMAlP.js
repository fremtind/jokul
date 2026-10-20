import{j as n,r as m}from"./iframe-DG4ODjOJ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B5VBZ5qG.js";import i from"./BaseRadioButton.stories-Bc_6oMqb.js";import{F as d}from"./FieldGroup-CNK05K_Z.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DRjCOh10.js";import"./SupportLabel-CXkBTyHa.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BII5lEP4.js";import"./Icon-CKf8FPKn.js";import"./WarningIcon-CJbiE9qZ.js";import"./BaseRadioButton-DYdDNXqL.js";import"./Label-BuoszE_D.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
