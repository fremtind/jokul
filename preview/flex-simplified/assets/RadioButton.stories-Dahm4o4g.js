import{j as n,r as m}from"./iframe-wvx-g-2V.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-xs3Q9jtY.js";import i from"./BaseRadioButton.stories-BRL8jkdH.js";import{F as d}from"./FieldGroup-DOZ4lOTy.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Dw6jVryZ.js";import"./SupportLabel-C3WFf-t9.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CrlzhAVs.js";import"./Icon-DgFrHBJl.js";import"./WarningIcon-CrwdHGeU.js";import"./BaseRadioButton-CHA4wp8i.js";import"./Label-B5rSYA0u.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
