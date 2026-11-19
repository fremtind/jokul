import{j as n,r as m}from"./iframe-BmEqDtt1.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DajaxdXO.js";import i from"./BaseRadioButton.stories-nF5muewP.js";import{F as d}from"./FieldGroup-4Td8h6cL.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CKeWHb7U.js";import"./SupportLabel-CkOWlRS4.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-C3uiQXjy.js";import"./Icon-CKi6uDZb.js";import"./WarningIcon-BA9RCtWB.js";import"./BaseRadioButton-Dz0oqzd3.js";import"./Label-DC9Pi_PK.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
