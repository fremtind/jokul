import{j as n,r as m}from"./iframe-hCCqVmPB.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D_FUKc2c.js";import i from"./BaseRadioButton.stories-Be3LJd4w.js";import{F as d}from"./FieldGroup-BbftJKyy.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C160dsR_.js";import"./SupportLabel-CFuehY3h.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BtTcjMUH.js";import"./Icon-DyxlcUB3.js";import"./WarningIcon-Bpb43Nq0.js";import"./BaseRadioButton-fusEQSs0.js";import"./Label-DKmZznUd.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
