import{j as n,r as m}from"./iframe-P1fcWeU-.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-_0gFPBFQ.js";import i from"./BaseRadioButton.stories-DpHRqjuB.js";import{F as d}from"./FieldGroup-Dmm8m9ED.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Badg02m7.js";import"./SupportLabel-SzwrbaQt.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DbpNqF5C.js";import"./Icon-DsEcBYv1.js";import"./WarningIcon-i8hYq61m.js";import"./BaseRadioButton-DsnSLGE2.js";import"./Label-DB28uTkh.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
