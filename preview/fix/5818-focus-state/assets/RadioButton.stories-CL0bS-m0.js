import{j as n,r as m}from"./iframe-BvHIUAER.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CpvO1XHr.js";import i from"./BaseRadioButton.stories-qD0e23xs.js";import{F as d}from"./FieldGroup-B8Z_Gp7n.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B3jicoNK.js";import"./SupportLabel-CvBZaK7P.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-D6qTJ6SK.js";import"./Icon-7rc9G81L.js";import"./BaseRadioButton-BRIdwQRN.js";import"./Label-hIaIYFZC.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
