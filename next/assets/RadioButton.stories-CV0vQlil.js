import{j as n,r as m}from"./iframe-CKmQBEjB.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D3IRxOa3.js";import i from"./BaseRadioButton.stories-DvESgkVZ.js";import{F as d}from"./FieldGroup-Co5HMpvg.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CDRZ6Tc5.js";import"./SupportLabel-fjS145tJ.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CsSSHxXg.js";import"./Icon-B6nTDKHB.js";import"./WarningIcon-bziuTbLO.js";import"./BaseRadioButton-Dr073qjS.js";import"./Label-BoagSWRN.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
