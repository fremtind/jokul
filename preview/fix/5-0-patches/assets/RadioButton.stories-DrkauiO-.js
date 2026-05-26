import{j as n,r as m}from"./iframe-C8P7wUfQ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CibDUuOd.js";import i from"./BaseRadioButton.stories-CYFHQfLt.js";/* empty css               */import{F as p}from"./FieldGroup-BJh6iB8N.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Dp0FmzfQ.js";import"./SupportLabel-BZsA8fIg.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DBmG4iyG.js";import"./Icon-DSx_Iy8k.js";import"./BaseRadioButton-BBwBkXLe.js";import"./Label-NrmB6OBy.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
