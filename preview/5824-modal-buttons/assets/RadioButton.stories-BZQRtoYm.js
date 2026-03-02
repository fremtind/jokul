import{j as n,r as m}from"./iframe-BhHaSnlQ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-K4gV_m_x.js";import i from"./BaseRadioButton.stories-75Wsckmv.js";import{F as d}from"./FieldGroup-Z7vDOJ1n.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-3400H-RR.js";import"./SupportLabel-Dmc2z6yK.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CA8pG99d.js";import"./Icon-BB0MoTOA.js";import"./BaseRadioButton-BzqgPhd4.js";import"./Label-Lhv05DnF.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
