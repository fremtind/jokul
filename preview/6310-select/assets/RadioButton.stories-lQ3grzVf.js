import{j as n,r as m}from"./iframe-WXql0yr-.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B4CN9Fd6.js";import i from"./BaseRadioButton.stories-bFY4wl_m.js";import{F as d}from"./FieldGroup-CcHen7k1.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B1unaClP.js";import"./SupportLabel-BJyxK84m.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CYOyWzav.js";import"./Icon-f7TxltMM.js";import"./WarningIcon-xvstraac.js";import"./BaseRadioButton-B0G6FwpZ.js";import"./Label-BwbLkrUU.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
