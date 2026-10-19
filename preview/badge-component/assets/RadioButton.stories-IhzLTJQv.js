import{j as n,r as m}from"./iframe-B9t7Bhvf.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-FDDBIZ9E.js";import i from"./BaseRadioButton.stories-ri6LpaTR.js";import{F as d}from"./FieldGroup-XXg4kgZ7.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DPsHlg8A.js";import"./SupportLabel-CkjAD-AF.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Dg8CLSfn.js";import"./Icon-nVkRfvR3.js";import"./WarningIcon-BsTpSXEd.js";import"./BaseRadioButton-CqmngWXI.js";import"./Label-DI69Owzo.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
