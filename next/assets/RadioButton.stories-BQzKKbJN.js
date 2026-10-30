import{j as n,r as m}from"./iframe-5ERKBJ40.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BWubBshB.js";import i from"./BaseRadioButton.stories-C1bacdx6.js";import{F as d}from"./FieldGroup-BSmlkfmV.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CJwWTVui.js";import"./SupportLabel-CIFf30_1.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-B6LytoX1.js";import"./Icon-D5L3ZPM6.js";import"./WarningIcon-DyowYIY8.js";import"./BaseRadioButton-61V-zmVb.js";import"./Label-C_Q2IyCf.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
