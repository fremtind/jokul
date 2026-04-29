import{j as n,r as m}from"./iframe-CPBESYMN.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BhnroEZQ.js";import i from"./BaseRadioButton.stories-BY0-GK0l.js";/* empty css               */import{F as p}from"./FieldGroup-BzuYcJI4.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CG3YQ_FP.js";import"./SupportLabel-D0Cu0KOo.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Cqd3saN3.js";import"./Icon-CPKTMe_m.js";import"./BaseRadioButton-wuoCO1MI.js";import"./Label-DrxA1auC.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
