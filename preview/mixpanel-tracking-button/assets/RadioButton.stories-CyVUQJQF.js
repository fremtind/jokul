import{j as n,r as m}from"./iframe-DNo5Kdiv.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-_cQhax8Q.js";import i from"./BaseRadioButton.stories-Bae3g4w_.js";import{F as d}from"./FieldGroup-sanLV02O.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-kvkxBvIU.js";import"./SupportLabel--Rpq3HzI.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BWcqNXXY.js";import"./Icon-DyTFlY-Z.js";import"./WarningIcon-B8uY8EZ6.js";import"./BaseRadioButton-B0Shwzem.js";import"./Label--W2DkRVs.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
