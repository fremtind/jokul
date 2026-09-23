import{j as n,r as m}from"./iframe-B1Nvu0e9.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DjcoTXPg.js";import i from"./BaseRadioButton.stories-BoH4TpCn.js";/* empty css               */import{F as p}from"./FieldGroup-jsx0wz1p.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-S4wAr5R5.js";import"./SupportLabel-DSVbT03j.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BBJ58K9m.js";import"./Icon-D6_ets8M.js";import"./BaseRadioButton-B17qP5S9.js";import"./Label-Cpk4H8Iv.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
