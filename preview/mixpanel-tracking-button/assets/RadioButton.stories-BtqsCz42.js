import{j as n,r as m}from"./iframe-DbQEf8U-.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CXaAugPQ.js";import i from"./BaseRadioButton.stories-sBFl8jMc.js";import{F as d}from"./FieldGroup-WR-YZ3Ib.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BHvuSJX4.js";import"./SupportLabel-DLrksECA.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DWdLfxCe.js";import"./Icon-C3BOjqa_.js";import"./WarningIcon-BOGYRIY8.js";import"./BaseRadioButton-D9EFMAl5.js";import"./Label-DRv1HBm3.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
