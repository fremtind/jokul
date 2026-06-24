import{j as n,r as m}from"./iframe-W15xCes2.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DMx-k-Vz.js";import i from"./BaseRadioButton.stories-C5Sieh6c.js";import{F as d}from"./FieldGroup-DFO9nrXl.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DSZZTfAa.js";import"./SupportLabel-B9YUdPWQ.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DH-wJ1GD.js";import"./Icon-DaoKULiV.js";import"./WarningIcon-BuAAP4hM.js";import"./BaseRadioButton-BUdfYoBl.js";import"./Label-CUk2OfHs.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
