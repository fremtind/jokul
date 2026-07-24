import{j as n,r as m}from"./iframe-CVDJJb3e.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DUTgc5IE.js";import i from"./BaseRadioButton.stories-B3q35_to.js";import{F as d}from"./FieldGroup-BqWh2_5n.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BYKzAVIG.js";import"./SupportLabel-CVl54pHN.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-6p6Y80z_.js";import"./Icon-DuZ98Q96.js";import"./WarningIcon-BrSez6eY.js";import"./BaseRadioButton-Cni3ypDG.js";import"./Label-DwzQUDzu.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
