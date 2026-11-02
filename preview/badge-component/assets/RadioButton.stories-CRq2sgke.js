import{j as n,r as m}from"./iframe-BMcbZFRK.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C4EUCV8D.js";import i from"./BaseRadioButton.stories-BYj40hub.js";import{F as d}from"./FieldGroup-BltYmj4p.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Deh9Tok_.js";import"./SupportLabel-kY2cjEpi.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CvDfpDZk.js";import"./Icon-DKT90-_y.js";import"./WarningIcon-OXJF_bDH.js";import"./BaseRadioButton-WO8YA6yo.js";import"./Label-ttLof0MM.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
