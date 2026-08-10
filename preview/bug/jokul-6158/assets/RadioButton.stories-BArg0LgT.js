import{j as n,r as m}from"./iframe-BIsu_vi5.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BdPMrLkp.js";import i from"./BaseRadioButton.stories-L4VzryQs.js";import{F as d}from"./FieldGroup-BRRbRNo1.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B-JT6Lp6.js";import"./SupportLabel-CNUURbTn.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-B7WqfD8O.js";import"./Icon-8Qx5snTz.js";import"./WarningIcon-yAp2DUym.js";import"./BaseRadioButton-Ctb_4Szi.js";import"./Label-iqJWIyEt.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
