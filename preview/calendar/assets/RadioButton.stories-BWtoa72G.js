import{j as n,r as m}from"./iframe-jR_QKpJn.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Btx1uS10.js";import i from"./BaseRadioButton.stories-DwrHPfWV.js";import{F as d}from"./FieldGroup-CmPhjOd1.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BSrcV0qG.js";import"./SupportLabel-Dv0bynpO.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-u_OiM3Ej.js";import"./Icon-B4HG5nD5.js";import"./WarningIcon-tduY0H83.js";import"./BaseRadioButton-5M55SRiV.js";import"./Label-DkZU00cL.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
