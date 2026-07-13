import{j as n,r as m}from"./iframe-BXOzOWGo.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BVQOW_9v.js";import i from"./BaseRadioButton.stories-Cfnd8xGl.js";import{F as d}from"./FieldGroup-5IspXmoa.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BWpV7ZLy.js";import"./SupportLabel-_ooaz7jV.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-h1CqZYZx.js";import"./Icon-BVknPPAF.js";import"./WarningIcon-dhUFrDBP.js";import"./BaseRadioButton-C_BuK1FB.js";import"./Label-DJ3Bg7BL.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
