import{j as n,r as m}from"./iframe-Dr3hdvzZ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CeTnz5J_.js";import i from"./BaseRadioButton.stories-DK8PtGVG.js";import{F as d}from"./FieldGroup-C2gZ7HBR.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BIrs1ezV.js";import"./SupportLabel-CIPnqu5V.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DCwvqYOg.js";import"./Icon-xBlGy7PF.js";import"./WarningIcon-VSPsgyrm.js";import"./BaseRadioButton-BEt_7sjb.js";import"./Label-CjQ6NTqV.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
