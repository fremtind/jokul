import{j as n,r as m}from"./iframe-Dc2kjKK-.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-M-zIRKpu.js";import i from"./BaseRadioButton.stories-DM7QBADB.js";import{F as d}from"./FieldGroup-Dl7ppBzC.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C5i7PY8g.js";import"./SupportLabel-_aBcKD1c.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-D6nB7358.js";import"./Icon-CAefYHXa.js";import"./WarningIcon-K0F3TNRu.js";import"./BaseRadioButton-qq0Bs48L.js";import"./Label-BhH25iZK.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
