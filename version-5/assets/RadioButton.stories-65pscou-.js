import{j as n,r as m}from"./iframe-BGaBJ1ys.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-qZ87h6E6.js";import i from"./BaseRadioButton.stories-Bd4-PB0n.js";import{F as d}from"./FieldGroup-Bo6ppGoz.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Cr0_R8OP.js";import"./SupportLabel-DpRTcJHs.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-x48MCFhe.js";import"./Icon-Cf3fY8pJ.js";import"./WarningIcon-BC6yM_cn.js";import"./BaseRadioButton-C77tyDAW.js";import"./Label-D7VCm1U8.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
