import{j as n,r as m}from"./iframe-BM5Tk-7K.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BrjkwIRG.js";import i from"./BaseRadioButton.stories-CPE1z9vF.js";import{F as d}from"./FieldGroup-Cnp10eG0.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BpXa5wQ4.js";import"./SupportLabel-Dfr6JS5t.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-qKKMID0L.js";import"./Icon-CaXfkIdf.js";import"./WarningIcon-Biwm9-GU.js";import"./BaseRadioButton-DJ8_q_hn.js";import"./Label-C59R4ceN.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
