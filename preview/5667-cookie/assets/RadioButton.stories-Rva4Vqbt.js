import{j as n,r as m}from"./iframe-KUO-F_B9.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BaCVHQeT.js";import i from"./BaseRadioButton.stories-Cj8idRh5.js";import{F as d}from"./FieldGroup-ftlZ1uYD.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B4V0-f1l.js";import"./SupportLabel-CYFetTZw.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-PMx6y0aI.js";import"./Icon-DG6s4xDk.js";import"./BaseRadioButton-BtK1gbF6.js";import"./Label-BQhRUifm.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
