import{j as n,r as m}from"./iframe-B253gQz5.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CTYn32LI.js";import i from"./BaseRadioButton.stories-KIqOlm0Y.js";import{F as d}from"./FieldGroup-BqQm3RAI.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CSiHipd-.js";import"./SupportLabel-DXRQtGMv.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-i6V-xjPa.js";import"./Icon-Ba_Sietz.js";import"./WarningIcon-Cy9w4GUe.js";import"./BaseRadioButton-BMeb5caL.js";import"./Label-BEjAibyP.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
