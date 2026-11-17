import{j as n,r as m}from"./iframe-DP4uPROL.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Dg0gEksS.js";import i from"./BaseRadioButton.stories-2F9F-vPh.js";import{F as d}from"./FieldGroup-I5NQPYAW.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BKR7rdEV.js";import"./SupportLabel-Yuh3sYTS.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-EzxEEpaW.js";import"./Icon-CSbOr9gQ.js";import"./WarningIcon-Bh0rJE6K.js";import"./BaseRadioButton-BnFDHEWX.js";import"./Label-CrjClzO8.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
