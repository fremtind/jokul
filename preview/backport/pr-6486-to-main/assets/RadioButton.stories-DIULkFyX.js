import{j as n,r as m}from"./iframe-AvrK8vCh.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BPhP9g5w.js";import i from"./BaseRadioButton.stories-COdDbISF.js";import{F as d}from"./FieldGroup-gOSlnoqt.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-y4F-Ypl6.js";import"./SupportLabel-DgPtNCAk.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DC1b8d0s.js";import"./Icon-C_6paShe.js";import"./WarningIcon-PNEEfr3g.js";import"./BaseRadioButton-DSBsC1Ls.js";import"./Label-C4s5o-u8.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
