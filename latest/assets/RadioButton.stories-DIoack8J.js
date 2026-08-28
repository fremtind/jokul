import{j as n,r as m}from"./iframe-DsIRJCHv.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B-2Q8pzz.js";import i from"./BaseRadioButton.stories-CUwg6ABq.js";import{F as d}from"./FieldGroup-BeanGbcG.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BzhnSNA9.js";import"./SupportLabel-BXPiP8Mi.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CUlcbDWN.js";import"./Icon-6arutuCm.js";import"./WarningIcon-B29vxR6n.js";import"./BaseRadioButton-CibwdmLi.js";import"./Label-27cATDsG.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
