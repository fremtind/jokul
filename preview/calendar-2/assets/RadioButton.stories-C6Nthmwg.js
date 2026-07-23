import{j as n,r as m}from"./iframe--4tOxVpk.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BbMU5A_A.js";import i from"./BaseRadioButton.stories-BhUljzbX.js";import{F as d}from"./FieldGroup-C2Kq7tjE.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-RoFKxuY7.js";import"./SupportLabel-RmxH3HMm.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-5WKcaa8S.js";import"./Icon-DqOACwrg.js";import"./WarningIcon-BILMUuDA.js";import"./BaseRadioButton-1m93_Y8G.js";import"./Label-BkS4q7uG.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
