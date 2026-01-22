import{j as n,r as m}from"./iframe-D7kpMrZy.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CtMxeH2Q.js";import i from"./BaseRadioButton.stories-3Uz9Uool.js";import{F as d}from"./FieldGroup-ChW_luO7.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Czy7u4h4.js";import"./SupportLabel-CCEph7wG.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-QDmGshK2.js";import"./Icon-288BA59h.js";import"./BaseRadioButton-Drz9ySOD.js";import"./Label-B-Uox9-a.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
