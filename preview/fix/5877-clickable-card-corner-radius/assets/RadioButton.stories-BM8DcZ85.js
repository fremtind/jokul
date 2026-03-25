import{j as n,r as m}from"./iframe-BSHXr__W.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DFAdIJGH.js";import i from"./BaseRadioButton.stories-BEek44aM.js";import{F as d}from"./FieldGroup-qMwQfT0L.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CYA0g5RK.js";import"./SupportLabel-CEX9mH4I.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-S5MdjChW.js";import"./Icon-vAn-hQxA.js";import"./BaseRadioButton-DJ7Atsn7.js";import"./Label-CD1C2Vf4.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
