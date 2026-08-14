import{j as n,r as m}from"./iframe-C7zHfsx1.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CzvwkoaY.js";import i from"./BaseRadioButton.stories-PjIPx8e9.js";import{F as d}from"./FieldGroup-NULoNIx-.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CnnTf_vl.js";import"./SupportLabel-DPzc8x7b.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-hy3nMgGq.js";import"./Icon-CyDoACM2.js";import"./WarningIcon-f7pV_U16.js";import"./BaseRadioButton-B_sBpHKT.js";import"./Label-C-PL7IWK.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
