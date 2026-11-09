import{j as n,r as m}from"./iframe-emgDk84Q.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BOXLsaZ2.js";import i from"./BaseRadioButton.stories-DfYAfoCz.js";import{F as d}from"./FieldGroup-4o_OVFFC.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B3WQAMOj.js";import"./SupportLabel-Br_uNfci.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CBcpgbM-.js";import"./Icon-D0A10AZI.js";import"./WarningIcon-BhklCEtr.js";import"./BaseRadioButton-CA8lgXxG.js";import"./Label-U2-B-_jR.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
