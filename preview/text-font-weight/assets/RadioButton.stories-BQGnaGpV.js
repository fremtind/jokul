import{j as n,r as m}from"./iframe-75v6xoDJ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-d8JrlDgt.js";import i from"./BaseRadioButton.stories-B6Pp4_Dq.js";import{F as d}from"./FieldGroup-BvvaXiWM.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Dn7uxmpv.js";import"./SupportLabel-QZrIr_DR.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CrOeIq3e.js";import"./Icon-BfZ-U6A0.js";import"./WarningIcon-B44G4rz2.js";import"./BaseRadioButton-DdwiMajN.js";import"./Label-Df8HANgF.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
