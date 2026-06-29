import{j as n,r as m}from"./iframe-Ct-ChUKT.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DEp6T6Qw.js";import i from"./BaseRadioButton.stories-CdahN9De.js";import{F as d}from"./FieldGroup-C-ayab6h.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CCcp8gKd.js";import"./SupportLabel-CK46dzxT.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-rE2wq9Qw.js";import"./Icon-ED0STk-K.js";import"./WarningIcon-CP8ZF1aN.js";import"./BaseRadioButton-Cg_8mch4.js";import"./Label-BRxztRXU.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
