import{j as n,r as m}from"./iframe-XeFmK1Ub.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C99uDtoD.js";import i from"./BaseRadioButton.stories-DowL4NFc.js";import{F as d}from"./FieldGroup-C28LcsXp.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Cb8QQQcv.js";import"./SupportLabel-Nqm1phAt.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Du0NWloJ.js";import"./Icon-B4Q1XuA_.js";import"./WarningIcon-DDumNALX.js";import"./BaseRadioButton-B_r3T2Zw.js";import"./Label-D06IGIOH.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
