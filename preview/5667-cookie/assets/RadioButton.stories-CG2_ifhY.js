import{j as n,r as m}from"./iframe-DX9D7YYS.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CCJkl61P.js";import i from"./BaseRadioButton.stories-vFVODLwQ.js";import{F as d}from"./FieldGroup-D9X22Z1E.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DrBIWBXz.js";import"./SupportLabel-BBUd_JYr.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-C3V2ghJy.js";import"./Icon-joQ_tE4D.js";import"./BaseRadioButton-BlSItsC5.js";import"./Label-0yXzyVGT.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
