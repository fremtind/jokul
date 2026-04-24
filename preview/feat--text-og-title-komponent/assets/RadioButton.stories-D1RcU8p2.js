import{j as n,r as m}from"./iframe-RiSe5yph.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BkObpUwW.js";import i from"./BaseRadioButton.stories-Ck5t1Vez.js";/* empty css               */import{F as p}from"./FieldGroup-B7s1Dswe.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B6UCwi-r.js";import"./SupportLabel-CZ18TbkQ.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Cwhhvy9B.js";import"./Icon-B_ifdt1-.js";import"./BaseRadioButton-vKaDzqXr.js";import"./Label-BFZ-L014.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
