import{j as n,r as m}from"./iframe-D0CIxAlt.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DnZzQKET.js";import i from"./BaseRadioButton.stories-Qzw5v_e0.js";import{F as d}from"./FieldGroup-C_JE86G7.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Btq2UMCu.js";import"./SupportLabel-DLYpN7WJ.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CTXqZj8x.js";import"./Icon-C9eF6OKl.js";import"./WarningIcon-DRZLEWtH.js";import"./BaseRadioButton-DTei3rRM.js";import"./Label-QV972wde.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
