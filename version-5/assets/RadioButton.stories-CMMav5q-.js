import{j as n,r as m}from"./iframe-B7YbOLmq.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-RizfCRej.js";import i from"./BaseRadioButton.stories-CEeu7E0c.js";import{F as d}from"./FieldGroup-CaUbEMqq.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-7g_eJ4pF.js";import"./SupportLabel-D9QFVjEb.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-7vp1nSDM.js";import"./Icon-DsaVeY1m.js";import"./WarningIcon-DVHa3IOD.js";import"./BaseRadioButton-DRNHa2aC.js";import"./Label-BKJo6GRF.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
