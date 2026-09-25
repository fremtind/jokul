import{j as n,r as m}from"./iframe-B8GZcKF1.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-ChzdECn3.js";import i from"./BaseRadioButton.stories-D5TTwk73.js";import{F as d}from"./FieldGroup-2EZb9snf.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BBhE9QAl.js";import"./SupportLabel-BQXTvPTf.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CofQwmc6.js";import"./Icon-BrP271Es.js";import"./WarningIcon-D6A2qNfL.js";import"./BaseRadioButton-Aj2jdRYY.js";import"./Label-BQ8F5SHk.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
