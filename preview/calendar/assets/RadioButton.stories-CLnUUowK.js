import{j as n,r as m}from"./iframe-BHUqeWkC.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DNX87BJ5.js";import i from"./BaseRadioButton.stories-DYuhXyPF.js";import{F as d}from"./FieldGroup-DOG0EK2x.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DOOtjp30.js";import"./SupportLabel-DjpV8O8d.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DQzjzMMI.js";import"./Icon-CvhnRJgX.js";import"./WarningIcon-BsFHRMKL.js";import"./BaseRadioButton-CPKr2uk_.js";import"./Label-Cwa_0Yyr.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
