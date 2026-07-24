import{j as n,r as m}from"./iframe-Dv1jIxoy.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CNtw7O0i.js";import i from"./BaseRadioButton.stories-qhQ9aTl5.js";import{F as d}from"./FieldGroup-xxDvK_Dq.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DkXNANuD.js";import"./SupportLabel-hfZYRiYr.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-C1O8y8HK.js";import"./Icon-EAfqmxr_.js";import"./WarningIcon-0CTSxi72.js";import"./BaseRadioButton-Dhg9NOlL.js";import"./Label-CPFg0frD.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
