import{j as n,r as m}from"./iframe-BeW8231r.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-8mo1vNPS.js";import i from"./BaseRadioButton.stories-CiLH-rYd.js";import{F as d}from"./FieldGroup-D9WtPkxt.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CD2qvuFc.js";import"./SupportLabel-vE8N1Zgi.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BjIpl0Xz.js";import"./Icon-C2YR2oDk.js";import"./BaseRadioButton-BIpuDNX3.js";import"./Label-CR2FVV2F.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
