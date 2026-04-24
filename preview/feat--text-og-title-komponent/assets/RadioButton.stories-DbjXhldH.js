import{j as n,r as m}from"./iframe-BXt9Ys4r.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B5K1ACwB.js";import i from"./BaseRadioButton.stories-tnbPEmAv.js";/* empty css               */import{F as p}from"./FieldGroup-Co-P2Vki.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C2Dm1Bg5.js";import"./SupportLabel-Dyv_btTC.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DJQMW2N9.js";import"./Icon-C8IcTxVq.js";import"./BaseRadioButton-41oJ9Me0.js";import"./Label-BB8q-D74.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
