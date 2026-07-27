import{j as n,r as m}from"./iframe-DUdM8bfa.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-b_SY5XWn.js";import i from"./BaseRadioButton.stories-DfzwE0ZA.js";import{F as d}from"./FieldGroup-DT1oK4VR.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CXNx6Z2h.js";import"./SupportLabel-CjPo2AgO.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CXkk0Xy5.js";import"./Icon-CqDP0AtM.js";import"./WarningIcon-Cucei4Fr.js";import"./BaseRadioButton-DVXU4v1d.js";import"./Label-zPx2PsUy.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
