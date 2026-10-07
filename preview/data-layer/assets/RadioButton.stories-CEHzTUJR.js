import{j as n,r as m}from"./iframe-CDa7pJma.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-fdy6p1KM.js";import s from"./BaseRadioButton.stories-BnrBqwoA.js";import{F as p}from"./FieldGroup-D70_83yk.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DTJ5Q7tR.js";import"./SupportLabel-DFPHlsxV.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CkajFwBn.js";import"./Icon-BFTeEGxG.js";import"./types-YjSsgwWY.js";import"./WarningIcon-DkyhFYvJ.js";import"./BaseRadioButton-CbjPMqMM.js";import"./Label-BR6gLBM4.js";const E={title:"Komponenter/Radio Button",component:e,args:{...s.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:i.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
