import{j as n,r as m}from"./iframe-2K3Pj9vJ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DuBdoQPw.js";import i from"./BaseRadioButton.stories-DUn2_26u.js";/* empty css               */import{F as p}from"./FieldGroup-k-qFUYQ7.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-y5IsWS5l.js";import"./SupportLabel-mFT1L5mc.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Bgh8o-Ig.js";import"./Icon-ZWkOUCLr.js";import"./BaseRadioButton-DH_HNDQb.js";import"./Label-t0eAj_Pl.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
