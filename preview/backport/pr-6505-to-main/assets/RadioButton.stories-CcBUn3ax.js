import{j as n,r as m}from"./iframe-qeIBcPXX.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CN46boCo.js";import i from"./BaseRadioButton.stories-A-A7p4Wf.js";import{F as d}from"./FieldGroup-CrqRitba.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-2dI2oHuh.js";import"./SupportLabel-D7eKOoeK.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-B-t7fck3.js";import"./Icon-BCjyDvr-.js";import"./WarningIcon-D1ZyKD9s.js";import"./BaseRadioButton-7y6vhpri.js";import"./Label-rPugtzcA.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
