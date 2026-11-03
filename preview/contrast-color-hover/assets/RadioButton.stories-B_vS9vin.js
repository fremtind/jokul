import{j as n,r as m}from"./iframe-BsPziH6Q.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Bn5xDWKb.js";import i from"./BaseRadioButton.stories-CJHCyMvf.js";import{F as d}from"./FieldGroup-DG-zqxM0.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B8mKrpqT.js";import"./SupportLabel-CFoOb7cl.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-D740UtWV.js";import"./Icon-CtF_vN_8.js";import"./WarningIcon-C_15yUL3.js";import"./BaseRadioButton-_f89DnWQ.js";import"./Label--kEZRLgF.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
