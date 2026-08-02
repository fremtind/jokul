import{j as n,r as m}from"./iframe-DUO0Prub.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CUQ4czsM.js";import i from"./BaseRadioButton.stories-CLGwHkBZ.js";import{F as d}from"./FieldGroup-rOJ3-iU0.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B7pzm72k.js";import"./SupportLabel-D17FcdVd.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CxYeiKL6.js";import"./Icon-Ch58P3r8.js";import"./WarningIcon-BESjCQ3m.js";import"./BaseRadioButton-j5YHF-di.js";import"./Label-BehjC_Wt.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
