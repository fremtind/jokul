import{j as n,r as m}from"./iframe-BJAzFGL5.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-xXiNSDWB.js";import i from"./BaseRadioButton.stories-DIVBNZaa.js";/* empty css               */import{F as p}from"./FieldGroup-CTUpPD-d.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DnZGCjo4.js";import"./SupportLabel-DTG1YbE7.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-XkM_s2l1.js";import"./Icon-DFMdU-gh.js";import"./WarningIcon-fvV-VPLY.js";import"./BaseRadioButton-Byc2aeQ2.js";import"./Label-D3RIyEwC.js";const F={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const j=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,j as __namedExportsOrder,F as default};
