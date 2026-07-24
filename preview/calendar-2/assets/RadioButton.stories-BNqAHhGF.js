import{j as n,r as m}from"./iframe-BAOkdMH2.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-osxRox-9.js";import i from"./BaseRadioButton.stories-CTie09IA.js";import{F as d}from"./FieldGroup-Bq6bwgTZ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DxQLXUYI.js";import"./SupportLabel-C2JxB6Gn.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-D1Qj0uex.js";import"./Icon-BVz5u1ID.js";import"./WarningIcon-B3fJJsEc.js";import"./BaseRadioButton-CttR9pic.js";import"./Label-CM_pvvAi.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
