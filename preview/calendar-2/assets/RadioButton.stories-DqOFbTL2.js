import{j as n,r as m}from"./iframe-DGbg-ens.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C0-RkYKl.js";import i from"./BaseRadioButton.stories-0Kdt_SZx.js";import{F as d}from"./FieldGroup-BRz0cPXo.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BcFB0y72.js";import"./SupportLabel-xkRrUmD_.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CpYfYRi4.js";import"./Icon-C9oAsKmZ.js";import"./WarningIcon-9Xmxpt-H.js";import"./BaseRadioButton-Z1jAoXLQ.js";import"./Label-DFKl9d8L.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
