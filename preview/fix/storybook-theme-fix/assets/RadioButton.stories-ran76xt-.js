import{j as n,r as m}from"./iframe-D8Mx1idX.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-j1QnM8Mi.js";import i from"./BaseRadioButton.stories-Cgman3Be.js";import{F as d}from"./FieldGroup-CyE2UGv4.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CnO4CdBG.js";import"./SupportLabel-CbsFLFo0.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BTMB6EUA.js";import"./Icon-CqGzkYJ8.js";import"./WarningIcon-Bm6i4RoG.js";import"./BaseRadioButton-OHmJuSrd.js";import"./Label-Df-c3Sb5.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
