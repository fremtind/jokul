import{j as n,r as m}from"./iframe-DrrEX-9p.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-hVsteoS3.js";import i from"./BaseRadioButton.stories-DC26VATA.js";/* empty css               */import{F as p}from"./FieldGroup-stsXSZXZ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B3DqQoGg.js";import"./SupportLabel-B65P_6G2.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CDEziEpe.js";import"./Icon-Cw2w7T3t.js";import"./BaseRadioButton-CAapTtP8.js";import"./Label-D452hEVR.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
