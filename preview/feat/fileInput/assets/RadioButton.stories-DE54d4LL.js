import{j as n,r as m}from"./iframe-PjEGq4Ww.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BYPdi6Ye.js";import i from"./BaseRadioButton.stories-B_lm63rc.js";import{F as d}from"./FieldGroup-BPk_3Z74.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B3bxqwye.js";import"./SupportLabel-B7fBVH6_.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Ba3WWZ4j.js";import"./Icon-DD6feRjE.js";import"./WarningIcon-lR9VqVQ-.js";import"./BaseRadioButton-Bk8_JX6P.js";import"./Label-BV2nNllb.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
