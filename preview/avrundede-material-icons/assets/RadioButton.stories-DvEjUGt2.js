import{j as n,r as m}from"./iframe-BJuQ2aWC.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CAe5gvzF.js";import i from"./BaseRadioButton.stories-Dyb_1rp5.js";import{F as d}from"./FieldGroup-BJdX2Ik5.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Dk2CXiu0.js";import"./SupportLabel-Cq6niWr0.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CuPITth9.js";import"./Icon-CiQLL7qA.js";import"./WarningIcon-CgB4PirB.js";import"./BaseRadioButton-Dlco6bn9.js";import"./Label-CxHQuLyu.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
