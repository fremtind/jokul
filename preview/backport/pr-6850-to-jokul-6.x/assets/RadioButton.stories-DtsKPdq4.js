import{j as n,r as m}from"./iframe-DtW-9sqb.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-AmB1Hbcc.js";import i from"./BaseRadioButton.stories-UKRi00NB.js";import{F as d}from"./FieldGroup-ChRuRpZY.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D1wItdsp.js";import"./SupportLabel-783_B6i6.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CbxBfvp_.js";import"./Icon-duu7qSjq.js";import"./WarningIcon-D7jXHdNB.js";import"./BaseRadioButton-CPmT4qro.js";import"./Label-WUj5foir.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
