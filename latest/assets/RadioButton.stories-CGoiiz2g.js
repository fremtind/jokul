import{j as n,r as m}from"./iframe-B1BcyvN2.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DvHejdX8.js";import i from"./BaseRadioButton.stories-CyoYYnnY.js";import{F as d}from"./FieldGroup-C-ANjulK.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CdK77Ikq.js";import"./SupportLabel-C_ob5oWt.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BKRi1kFF.js";import"./Icon-MgODGWcQ.js";import"./WarningIcon-BlIm9EkN.js";import"./BaseRadioButton-CUAopd-p.js";import"./Label-yfMfDkJi.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
