import{j as n,r as m}from"./iframe-e2zLSOxq.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Bj-vcjeO.js";import i from"./BaseRadioButton.stories-BWTlqt1O.js";import{F as d}from"./FieldGroup-r9NZjhuC.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Bs_ZDihn.js";import"./SupportLabel-DAyT_rWa.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-5mWPYXSc.js";import"./Icon-CEgxKMcZ.js";import"./WarningIcon-COHbmbIq.js";import"./BaseRadioButton-DCa3jvgK.js";import"./Label-CqXXG26D.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
