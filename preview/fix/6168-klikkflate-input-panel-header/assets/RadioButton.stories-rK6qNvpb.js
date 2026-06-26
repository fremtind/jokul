import{j as n,r as m}from"./iframe-06ZeKsUv.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CYueTOgr.js";import i from"./BaseRadioButton.stories-CG93gN5A.js";import{F as d}from"./FieldGroup-CboyZs4L.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-n4-O23FJ.js";import"./SupportLabel-DE6MpzlH.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-aZdft-re.js";import"./Icon-CXqmLSdn.js";import"./WarningIcon-bF_XPGQy.js";import"./BaseRadioButton-03LdVPR-.js";import"./Label-Cyd0iUVh.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
