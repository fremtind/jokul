import{j as n,r as m}from"./iframe-CjX8HJEK.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Bl5RbeO-.js";import i from"./BaseRadioButton.stories-nJj0bfUV.js";/* empty css               */import{F as p}from"./FieldGroup-BCw7qEf9.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-0Bc8FeKP.js";import"./SupportLabel-DAGlIyiD.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-n8cUyTZX.js";import"./Icon-C5ZwqQdL.js";import"./BaseRadioButton-CymBc6j5.js";import"./Label-CWyC5fsC.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
