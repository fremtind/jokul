import{j as n,r as m}from"./iframe-S4b2atIM.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C4M1ZDSj.js";import i from"./BaseRadioButton.stories-Di4Kdpcx.js";import{F as d}from"./FieldGroup-CeMK_Fvn.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-YMAIXpHw.js";import"./SupportLabel-Dld-TH6V.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DiSh9XHe.js";import"./Icon-1n65_1AZ.js";import"./WarningIcon-R63AtuIA.js";import"./BaseRadioButton-DQkwwsuF.js";import"./Label-ioH_zT9p.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
