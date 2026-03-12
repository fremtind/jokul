import{j as n,r as m}from"./iframe-C4Nkq-VY.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D_NK07Ua.js";import i from"./BaseRadioButton.stories-D5l9Flap.js";import{F as d}from"./FieldGroup-CrBG7J_S.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Js1rDQKY.js";import"./SupportLabel-jgimv0Ej.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Du00iMuZ.js";import"./Icon-D-2N4vyt.js";import"./BaseRadioButton-D9qI2eYw.js";import"./Label-CrNNcbW6.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
