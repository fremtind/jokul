import{j as n,r as m}from"./iframe-DJMxtNWd.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DjrmTmMq.js";import i from"./BaseRadioButton.stories-XLWl_ger.js";import{F as d}from"./FieldGroup-BVRS2TGl.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D_bKw5QI.js";import"./SupportLabel-iARZQ_iv.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CK1M2AtI.js";import"./Icon-B7y-ND2W.js";import"./WarningIcon-BYXr81Rt.js";import"./BaseRadioButton-DoNj7E2M.js";import"./Label-ubq-7wUv.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
