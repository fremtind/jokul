import{j as n,r as m}from"./iframe-Cm48T0tS.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CvGDyDRY.js";import i from"./BaseRadioButton.stories-B3Vv2AZX.js";import{F as d}from"./FieldGroup-OheB19X9.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C3fxz3Oh.js";import"./SupportLabel-D9xOXodY.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Dbel23xb.js";import"./Icon-BAMfdakS.js";import"./WarningIcon-CicChWgz.js";import"./BaseRadioButton-CvyDFwpM.js";import"./Label-D7f80aws.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
