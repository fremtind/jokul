import{j as n,r as m}from"./iframe-DKRv853k.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Bx0iwj0X.js";import i from"./BaseRadioButton.stories-BS48lZvk.js";import{F as d}from"./FieldGroup-HlUV8zdO.js";import"./preload-helper-PPVm8Dsz.js";import"./useId--EObD0tb.js";import"./SupportLabel-DtihHlc3.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DyzcjlU6.js";import"./Icon-2Z_pbBqR.js";import"./WarningIcon-DNnIn1f1.js";import"./BaseRadioButton-Cv3g6S2B.js";import"./Label-DWsEW5oB.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
