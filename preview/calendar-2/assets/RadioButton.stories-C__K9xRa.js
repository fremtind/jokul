import{j as n,r as m}from"./iframe-BZtx7Gpq.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Ce5lw0jX.js";import i from"./BaseRadioButton.stories-CL_K2k7u.js";import{F as d}from"./FieldGroup-CfaF5gOk.js";import"./preload-helper-PPVm8Dsz.js";import"./useId--nZMxYEd.js";import"./SupportLabel-B2snNPHG.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-YUQFTxEn.js";import"./Icon-Dkw04KCU.js";import"./WarningIcon-wEkZsFNg.js";import"./BaseRadioButton-gJxT-lk_.js";import"./Label-COez3Dy4.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
