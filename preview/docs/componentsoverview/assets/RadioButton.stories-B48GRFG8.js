import{j as n,r as m}from"./iframe-DECrqAgD.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BOFlZhZ_.js";import i from"./BaseRadioButton.stories-Dmjt9QHW.js";/* empty css               */import{F as p}from"./FieldGroup-DRVrmMGR.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-v0YU8Q5R.js";import"./SupportLabel-CBt7kgVR.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Bzqc9ZZ6.js";import"./Icon-BCQk59Ds.js";import"./WarningIcon-BE_0lku-.js";import"./BaseRadioButton-DDrZwjn5.js";import"./Label-CxnBLO9q.js";const F={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const j=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,j as __namedExportsOrder,F as default};
