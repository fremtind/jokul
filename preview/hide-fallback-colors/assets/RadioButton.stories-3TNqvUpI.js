import{j as n,r as m}from"./iframe-BOByu7vN.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C_nEcrRz.js";import i from"./BaseRadioButton.stories-BKFave-B.js";import{F as d}from"./FieldGroup-CW48alfx.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CA1iC96R.js";import"./SupportLabel-BRerFdQZ.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CsCwvX9r.js";import"./Icon-DZbu0jXH.js";import"./WarningIcon-BCg1ONjp.js";import"./BaseRadioButton-BE_NhPCn.js";import"./Label-BQnxVneB.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
