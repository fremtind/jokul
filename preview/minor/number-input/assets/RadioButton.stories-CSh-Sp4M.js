import{j as n,r as m}from"./iframe-BNT6YoXq.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-NWtJ_pXM.js";import i from"./BaseRadioButton.stories-DH_ILFm-.js";/* empty css               */import{F as p}from"./FieldGroup-CNGS8mBz.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DxsBaCjA.js";import"./SupportLabel-DwzDdzIs.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BPW-Sn5o.js";import"./Icon-CF1lqrfi.js";import"./BaseRadioButton-BE-OjtLz.js";import"./Label-BAY9tnaf.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
