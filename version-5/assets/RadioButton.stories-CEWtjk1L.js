import{j as n,r as m}from"./iframe-CdEQOSA2.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CGnMir94.js";import i from"./BaseRadioButton.stories-BpitnoV6.js";import{F as d}from"./FieldGroup-B7796ihv.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D5dgWlEn.js";import"./SupportLabel-RKvCazXH.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-1KEw82OO.js";import"./Icon-CWH6pvSV.js";import"./WarningIcon-BChZwBQr.js";import"./BaseRadioButton-Cnj2JLed.js";import"./Label-C_scYUkU.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
