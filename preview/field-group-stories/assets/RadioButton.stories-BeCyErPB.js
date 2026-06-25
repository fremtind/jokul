import{j as n,r as m}from"./iframe-BFG5Vphb.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DrEewz_J.js";import i from"./BaseRadioButton.stories-CtN10NkO.js";import{F as d}from"./FieldGroup-By0KzBcG.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-E9iq6_QI.js";import"./SupportLabel-io_f3QYS.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CuXwH8dD.js";import"./Icon-oTujzUjY.js";import"./WarningIcon-9AVdyGsZ.js";import"./BaseRadioButton-DlDl8n8v.js";import"./Label-CloG1QQZ.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
