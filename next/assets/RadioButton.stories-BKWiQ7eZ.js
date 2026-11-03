import{j as n,r as m}from"./iframe-C6HN1Jl8.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CE5LFAOE.js";import i from"./BaseRadioButton.stories-hk0SMlq8.js";import{F as d}from"./FieldGroup-CNIas1g0.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BYOpaF2_.js";import"./SupportLabel-BV0-WOBU.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-39ee37cI.js";import"./Icon-CJeNds9P.js";import"./WarningIcon-VqGWFj3e.js";import"./BaseRadioButton-DKt9ruhV.js";import"./Label-DfXIAAVQ.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
