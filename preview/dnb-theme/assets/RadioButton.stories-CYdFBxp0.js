import{j as n,r as m}from"./iframe-CZtxjeKl.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CgDAujLI.js";import i from"./BaseRadioButton.stories-WANivPf5.js";import{F as d}from"./FieldGroup-BTK3GDWB.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BHD6E2iM.js";import"./SupportLabel-CXH1WZ9H.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DWbb7BTo.js";import"./Icon-DxbY8yX_.js";import"./WarningIcon-D7nBnDHJ.js";import"./BaseRadioButton-DHKLgSxO.js";import"./Label-DP_NiiwF.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
