import{j as n,r as m}from"./iframe-BijQN6gr.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-NQSCxXFc.js";import i from"./BaseRadioButton.stories-K4Mlna7r.js";import{F as d}from"./FieldGroup-BirketAu.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-t-Zd41-l.js";import"./SupportLabel-DV5-7dyi.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BkZIKOTu.js";import"./Icon-pFlX71tu.js";import"./WarningIcon-DYHxpm7t.js";import"./BaseRadioButton-DZj1i766.js";import"./Label-BYbyLnLr.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
