import{j as n,r as m}from"./iframe-DC8U2c_F.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DWNC9y5M.js";import i from"./BaseRadioButton.stories-D1SgBzeK.js";import{F as d}from"./FieldGroup-CvNQ5q82.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BURPvmgR.js";import"./SupportLabel-DYZAB6pn.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DrYXcswI.js";import"./Icon-CHxPqR4m.js";import"./WarningIcon-TC0Uusis.js";import"./BaseRadioButton-BzHYlcfF.js";import"./Label-DApsMayJ.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
