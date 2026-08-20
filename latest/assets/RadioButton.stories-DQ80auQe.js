import{j as n,r as m}from"./iframe-BKJaW5yO.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-A6TuUmoQ.js";import i from"./BaseRadioButton.stories-D0piH8VI.js";import{F as d}from"./FieldGroup-n1_kEx-P.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DQExpYGw.js";import"./SupportLabel-BTTinkTH.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CgmLsmVU.js";import"./Icon-DvSbO2i2.js";import"./WarningIcon-0n-tLGMq.js";import"./BaseRadioButton-BoDCBSqo.js";import"./Label-CNy5kL04.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
