import{j as n,r as m}from"./iframe-0ZB4oRb9.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Bo9bQW-a.js";import i from"./BaseRadioButton.stories-CcK9GGsO.js";import{F as d}from"./FieldGroup-CdlEGNyd.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-8Auicuwd.js";import"./SupportLabel-CN9mkqeI.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DSiRLwce.js";import"./Icon-0UZbaLo5.js";import"./WarningIcon-p4Q4W2Fl.js";import"./BaseRadioButton-96S9UCZf.js";import"./Label-DFV5NPs1.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
