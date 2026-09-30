import{j as n,r as m}from"./iframe-BXWrlVlI.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Bhu5MR6i.js";import i from"./BaseRadioButton.stories-LlhY7e2g.js";import{F as d}from"./FieldGroup-CEx9vRwZ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CQmYeihF.js";import"./SupportLabel-BM7QAHSH.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CJlBFfAi.js";import"./Icon-DdhlFq55.js";import"./WarningIcon-DMWtTbxl.js";import"./BaseRadioButton--wr1ltmr.js";import"./Label-CwnkRybq.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
