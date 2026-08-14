import{j as n,r as m}from"./iframe-D6V2Ut_x.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Dcvqctbs.js";import i from"./BaseRadioButton.stories-CF_o-2ua.js";import{F as d}from"./FieldGroup-DnbrR3Ti.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-wHDLXxyy.js";import"./SupportLabel-B22ZqrQ-.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-B4M1bF5y.js";import"./Icon-Dd2ytlL1.js";import"./WarningIcon-zqLCjo-N.js";import"./BaseRadioButton-D-vRySpJ.js";import"./Label-Babbw4A0.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
