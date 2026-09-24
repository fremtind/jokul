import{j as n,r as m}from"./iframe-D0273_0s.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Dc-6aS25.js";import i from"./BaseRadioButton.stories-D6i_xplg.js";import{F as d}from"./FieldGroup-3uM_CA3s.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CMEqsnWW.js";import"./SupportLabel-C0th1Mhi.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DZGHMIej.js";import"./Icon-hWifPZMM.js";import"./WarningIcon-DcHNmchD.js";import"./BaseRadioButton-DD2uhc8K.js";import"./Label-DGm6Y0S6.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
