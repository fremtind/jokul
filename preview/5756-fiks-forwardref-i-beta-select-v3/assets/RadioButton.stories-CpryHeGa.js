import{j as n,r as m}from"./iframe-CO-6u7ty.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-wlyreY5A.js";import i from"./BaseRadioButton.stories-BviQ7wB5.js";import{F as d}from"./FieldGroup-Cse5KNVK.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DIVYmsrS.js";import"./SupportLabel-Cna44SEe.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BvXE7Nnw.js";import"./Icon-CiI2KeTo.js";import"./BaseRadioButton-D6hQNUq-.js";import"./Label-CKBpQodC.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
