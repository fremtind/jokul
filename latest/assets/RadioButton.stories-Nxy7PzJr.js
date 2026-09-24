import{j as n,r as m}from"./iframe-bRmfUjI8.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D8fCS3kV.js";import i from"./BaseRadioButton.stories-j0fdGc-K.js";import{F as d}from"./FieldGroup-CjXHiz82.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BGZUki8m.js";import"./SupportLabel-DWmYDJXK.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DSI_2ZR7.js";import"./Icon-wPLJOhF6.js";import"./WarningIcon-Cvg1hCra.js";import"./BaseRadioButton-D6FujvxC.js";import"./Label-Ce12ZJ2X.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
