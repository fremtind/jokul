import{j as n,r as m}from"./iframe-cPJsEF4B.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D2khb6NM.js";import i from"./BaseRadioButton.stories-BKiYM-ak.js";import{F as d}from"./FieldGroup-DEMMvEAv.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CA4S2sd9.js";import"./SupportLabel-BTCzZPZG.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CoWIvDw7.js";import"./Icon-D6aJbd-B.js";import"./WarningIcon-tJi3pQwy.js";import"./BaseRadioButton-Culhw40c.js";import"./Label-ivZjbUGi.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
