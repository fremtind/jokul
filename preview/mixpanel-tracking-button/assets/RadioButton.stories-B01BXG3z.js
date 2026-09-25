import{j as n,r as m}from"./iframe-BMlLyzfG.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CJervHH-.js";import i from"./BaseRadioButton.stories-B7kg5ygg.js";import{F as d}from"./FieldGroup-DUrPHd9k.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C-j9VgEQ.js";import"./SupportLabel-ClFc9VER.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BoJDCzcW.js";import"./Icon-Dpc09SCI.js";import"./WarningIcon-KKyWLr58.js";import"./BaseRadioButton-BSIfrY_x.js";import"./Label-t4HpMhQo.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
