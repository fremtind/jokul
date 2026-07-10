import{j as n,r as m}from"./iframe-DNE93SOr.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-ZoyetU7Y.js";import i from"./BaseRadioButton.stories-CINGeIHV.js";import{F as d}from"./FieldGroup-qFSrOtQ4.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Jj0qVZT0.js";import"./SupportLabel-Ba859kf8.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BC7riFSY.js";import"./Icon-CzdnVlXv.js";import"./WarningIcon-DiAiI6xq.js";import"./BaseRadioButton-BfHY6QJ9.js";import"./Label-BR-Y1uKW.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
