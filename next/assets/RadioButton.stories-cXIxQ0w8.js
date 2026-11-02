import{j as n,r as m}from"./iframe-C1x_O7GQ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-gECA9rrh.js";import i from"./BaseRadioButton.stories-B5-SQ7LJ.js";import{F as d}from"./FieldGroup-BxXJLI3a.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C4R4fvas.js";import"./SupportLabel-BgIerNnQ.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-B2WglTI4.js";import"./Icon-BJfzl0Yo.js";import"./WarningIcon-pm80caIq.js";import"./BaseRadioButton-BvDii85_.js";import"./Label-DMnTm03d.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
