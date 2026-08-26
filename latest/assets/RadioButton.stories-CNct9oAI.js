import{j as n,r as m}from"./iframe-DLQRFuRu.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CNI-rhMz.js";import i from"./BaseRadioButton.stories-CAxbTa3g.js";import{F as d}from"./FieldGroup-C7c-SDGQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CyP4rD9-.js";import"./SupportLabel-8E_dZTLj.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-yZX4g4Yk.js";import"./Icon-MpdY__nX.js";import"./WarningIcon-E6zVN4J6.js";import"./BaseRadioButton-D3yffbkK.js";import"./Label-CL_cA6vL.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
