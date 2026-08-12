import{j as n,r as m}from"./iframe-BUfh1FOG.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BCW6vvT6.js";import i from"./BaseRadioButton.stories-CiVE9ue4.js";import{F as d}from"./FieldGroup-vwvAy7Ft.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CB74Q9sI.js";import"./SupportLabel-Cdnir2Mu.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Rl4teyo7.js";import"./Icon-BTZSWG2z.js";import"./WarningIcon-BiotocCK.js";import"./BaseRadioButton-B-XXgJWN.js";import"./Label-CoEUJBzu.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
