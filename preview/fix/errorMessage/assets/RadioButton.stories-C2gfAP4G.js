import{j as n,r as m}from"./iframe-DrwSnDWG.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DhA4J6iv.js";import i from"./BaseRadioButton.stories-DxF268pX.js";import{F as d}from"./FieldGroup-29rSYWf-.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-647BzZ74.js";import"./SupportLabel-B330f_ov.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DO4ZDskS.js";import"./Icon-dnvXDhb6.js";import"./WarningIcon-DGLcr3Us.js";import"./BaseRadioButton-BKb5T4VV.js";import"./Label-DPULOsAn.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
