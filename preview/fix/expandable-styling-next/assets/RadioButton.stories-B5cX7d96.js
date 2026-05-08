import{j as n,r as m}from"./iframe-CPzkmyrW.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-e4Sg6SW5.js";import i from"./BaseRadioButton.stories-BTUHQ3lr.js";import{F as d}from"./FieldGroup-C0f-SOqO.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-rCBoNnle.js";import"./SupportLabel-B9dD6Cr5.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-B9W0f3br.js";import"./Icon-Bl6Tl7eE.js";import"./BaseRadioButton-B3zURsGm.js";import"./Label-CouFVwnj.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
