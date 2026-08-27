import{j as n,r as m}from"./iframe-Nuh93MSL.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CtoTP58t.js";import i from"./BaseRadioButton.stories-BhJOXQKH.js";import{F as d}from"./FieldGroup-CAKBCXmo.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-COKWK-mY.js";import"./SupportLabel--joF35Er.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Dl_Ha6Kr.js";import"./Icon-Bab4jLj7.js";import"./WarningIcon-QveQmFWu.js";import"./BaseRadioButton-DSz7LzgB.js";import"./Label-DPRFEjYq.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
