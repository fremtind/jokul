import{j as n,r as m}from"./iframe-C8PavQ4S.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BNra6VSm.js";import i from"./BaseRadioButton.stories-B6wo80Dh.js";import{F as d}from"./FieldGroup-Cs7H3xfM.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B2WbXKAM.js";import"./SupportLabel-BhQFbHLq.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BPzNRhCY.js";import"./Icon-BRgDz6hB.js";import"./WarningIcon-GWxwhnWP.js";import"./BaseRadioButton-Dp6Kz20r.js";import"./Label-BlWHP-iF.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
