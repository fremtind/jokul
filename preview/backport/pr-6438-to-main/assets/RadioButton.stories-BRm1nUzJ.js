import{j as n,r as m}from"./iframe-B_D-Yn_i.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C7n2D66D.js";import i from"./BaseRadioButton.stories-c0XSpLM7.js";import{F as d}from"./FieldGroup-Ce8PLPg0.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-1mPO-Ij8.js";import"./SupportLabel-BvvMUq5M.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-38lGBLgk.js";import"./Icon-CHxAH6Hv.js";import"./WarningIcon-YjELxZqt.js";import"./BaseRadioButton-ebbQUGIl.js";import"./Label-Dre8fBOY.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
