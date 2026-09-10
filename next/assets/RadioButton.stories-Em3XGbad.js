import{j as n,r as m}from"./iframe-DPWZO8Y8.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DNWba85b.js";import i from"./BaseRadioButton.stories-D3KvSH2g.js";import{F as d}from"./FieldGroup-Bmj3u9Cz.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B-ur-ogy.js";import"./SupportLabel-ZUQa8OdB.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-v6yQZ0xR.js";import"./Icon-C5QPShCS.js";import"./WarningIcon-2b1Hpkrg.js";import"./BaseRadioButton-BHwSsAYF.js";import"./Label-CpE2UMsX.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
