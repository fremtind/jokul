import{j as n,r as m}from"./iframe-C-q4W1uV.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D2uxvXc_.js";import i from"./BaseRadioButton.stories-DfV8rkcz.js";/* empty css               */import{F as p}from"./FieldGroup-KXwhL1UJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-462Tmhdp.js";import"./SupportLabel-B-aQp0b1.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BcKcx9wk.js";import"./Icon-BZ-YwhYA.js";import"./WarningIcon-0owJ2ynl.js";import"./BaseRadioButton-DuxbrWIF.js";import"./Label-Djx8IsMW.js";const F={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const j=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,j as __namedExportsOrder,F as default};
