import{j as n,r as m}from"./iframe-DN6ltrt2.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C9Cd-ivj.js";import i from"./BaseRadioButton.stories-Bc6Bjv4U.js";import{F as d}from"./FieldGroup-BJllY0K3.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B4BgBHbF.js";import"./SupportLabel-BfRqEEUd.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CpwDFfS0.js";import"./Icon-D4T0V1LA.js";import"./WarningIcon-Dpa71GYg.js";import"./BaseRadioButton-B8_prEbu.js";import"./Label-BjZ3wk9d.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
