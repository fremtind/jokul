import{j as n,r as m}from"./iframe-D3Joq54M.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BWpQlTHo.js";import i from"./BaseRadioButton.stories-zynOqizi.js";import{F as d}from"./FieldGroup-COfGeFL1.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CDVZKZtS.js";import"./SupportLabel-C99o_OgQ.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DDgpdFpJ.js";import"./Icon-Chs4EIky.js";import"./WarningIcon-BBHJxfg5.js";import"./BaseRadioButton-DSi5_OtF.js";import"./Label-BXeKtcwk.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
