import{j as n,r as m}from"./iframe-BI_O4Haf.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Dp1zTK29.js";import i from"./BaseRadioButton.stories-DLGBmhY4.js";import{F as d}from"./FieldGroup-BLSuxhN7.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BLdODDqZ.js";import"./SupportLabel-Baqqd0b1.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-D_VN2RoI.js";import"./Icon-zZeSCmwQ.js";import"./WarningIcon-vIUFNvZh.js";import"./BaseRadioButton-DOtWwaGe.js";import"./Label-CV6paTMh.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
