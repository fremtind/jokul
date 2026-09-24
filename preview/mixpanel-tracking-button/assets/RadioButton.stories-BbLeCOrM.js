import{j as n,r as m}from"./iframe-BB8VBLdf.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Booc7Tpg.js";import i from"./BaseRadioButton.stories-BEJWkemW.js";import{F as d}from"./FieldGroup-D91XtlEj.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-n8LHKOoG.js";import"./SupportLabel-ccywVs6u.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CwU34x0o.js";import"./Icon-BvHmRYDA.js";import"./WarningIcon-BGAuQLJB.js";import"./BaseRadioButton-B_FNu2lP.js";import"./Label-Bafoy6R9.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
