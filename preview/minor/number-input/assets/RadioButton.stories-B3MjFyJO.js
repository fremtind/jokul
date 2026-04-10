import{j as n,r as m}from"./iframe-y6nOPYIN.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DTMi34eP.js";import i from"./BaseRadioButton.stories-prrPgj11.js";/* empty css               */import{F as p}from"./FieldGroup-ByU3VExJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B9ueczzi.js";import"./SupportLabel-D5VsiT6-.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BMtgscB1.js";import"./Icon-K_Qdkdg_.js";import"./BaseRadioButton-BkWhPx4P.js";import"./Label-D5jhZMUZ.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
