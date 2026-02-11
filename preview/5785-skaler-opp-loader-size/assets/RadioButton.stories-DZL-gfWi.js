import{j as n,r as m}from"./iframe-2TS5MlSI.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DgM37rLG.js";import i from"./BaseRadioButton.stories-Bnj2VRnr.js";import{F as d}from"./FieldGroup-QLA8j5kH.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BXEwY_v3.js";import"./SupportLabel-DR0ikMBG.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-ChJbFFP0.js";import"./Icon-DjLTz21q.js";import"./BaseRadioButton-DgsNJ2qY.js";import"./Label-OScPrxH1.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
