import{j as n,r as m}from"./iframe-C4kGW9ed.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-byStc7Uu.js";import i from"./BaseRadioButton.stories-Bbxx7QFF.js";import{F as d}from"./FieldGroup-Baz4GZbp.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DqDMNHRO.js";import"./SupportLabel-sUm11pRi.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-GsSOcH16.js";import"./Icon-D9_b2G3l.js";import"./WarningIcon-BmoWrLuU.js";import"./BaseRadioButton-BK3UGLmp.js";import"./Label-CEQ1o7T-.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
