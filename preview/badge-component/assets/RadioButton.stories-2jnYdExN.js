import{j as n,r as m}from"./iframe-Dj7Oz-ZB.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Dyq0uM00.js";import i from"./BaseRadioButton.stories-jX5-x3SG.js";import{F as d}from"./FieldGroup-BxvUUmCA.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-UIpmHlGk.js";import"./SupportLabel-CqOrzWpL.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-C4xfIkdG.js";import"./Icon-Bu4yhsQZ.js";import"./WarningIcon-CokOg3dt.js";import"./BaseRadioButton-1J5kPLky.js";import"./Label-CxVSgVE_.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
