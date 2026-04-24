import{j as n,r as m}from"./iframe-JousdF1p.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DrihEhCV.js";import i from"./BaseRadioButton.stories-Bj-1UC9T.js";/* empty css               */import{F as p}from"./FieldGroup-BsqRx5IZ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-bwfT0AS3.js";import"./SupportLabel-BJLfzXQ1.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DI63WPvu.js";import"./Icon-BVzSC_Eq.js";import"./BaseRadioButton-Dyiy2Kiw.js";import"./Label-B-GnZEp8.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
