import{j as n,r as m}from"./iframe-Dw87ThH7.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BB-RSm73.js";import i from"./BaseRadioButton.stories-XHH0kV8v.js";import{F as d}from"./FieldGroup-Ca9a_qir.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BamvAN1T.js";import"./SupportLabel-BDhCslb-.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DaVhnq91.js";import"./Icon-CB1xFF7_.js";import"./WarningIcon-BlWJQIkG.js";import"./BaseRadioButton-CpA5W_I5.js";import"./Label-CaPRK2i8.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
