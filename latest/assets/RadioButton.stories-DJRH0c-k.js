import{j as n,r as m}from"./iframe-Bcnz8Hwy.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Cop2NfHn.js";import i from"./BaseRadioButton.stories-Dg9ib5Q5.js";import{F as d}from"./FieldGroup-B9qnO4sN.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CrN6botZ.js";import"./SupportLabel-abz3pzgu.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CIaEkV2I.js";import"./Icon-Rjr2sZhZ.js";import"./WarningIcon-DRA4hDwN.js";import"./BaseRadioButton-CJrbfVlC.js";import"./Label-dbNEGAZd.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
