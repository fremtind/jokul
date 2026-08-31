import{j as n,r as m}from"./iframe-Dumc8r-1.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CKBRo1mi.js";import i from"./BaseRadioButton.stories-DUPtx36F.js";import{F as d}from"./FieldGroup-BavQTMha.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Bol5vsRe.js";import"./SupportLabel-DCg-0BVf.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-D3U5sgj0.js";import"./Icon-hJp7EKqM.js";import"./WarningIcon-CE9Q8INp.js";import"./BaseRadioButton-BlH3y-aG.js";import"./Label-az7ejUzD.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
