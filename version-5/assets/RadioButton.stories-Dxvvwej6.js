import{j as n,r as m}from"./iframe-DiqnZ--B.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BdVS_IWO.js";import i from"./BaseRadioButton.stories-EC0HS9vB.js";import{F as d}from"./FieldGroup-B4-jw-iY.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C6Nl7AXO.js";import"./SupportLabel-BB_KLtu3.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DUGFYdMq.js";import"./Icon-GSHzwELV.js";import"./WarningIcon-l3pZ5Z8U.js";import"./BaseRadioButton-KPj7vgs8.js";import"./Label-Bs3wa7xO.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
