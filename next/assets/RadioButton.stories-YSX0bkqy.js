import{j as n,r as m}from"./iframe-BXo3axTj.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-a2IC6bFw.js";import i from"./BaseRadioButton.stories-Zjycie1c.js";import{F as d}from"./FieldGroup-BrrYsz-e.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D5akchpY.js";import"./SupportLabel-D54Hdxq7.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DYm8P-W_.js";import"./Icon-D1qumIKY.js";import"./WarningIcon-BN3HDFv8.js";import"./BaseRadioButton-Cu2wFZlZ.js";import"./Label-DL96_w0E.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
