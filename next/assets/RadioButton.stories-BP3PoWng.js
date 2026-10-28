import{j as n,r as m}from"./iframe-CZZYHK9f.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-_yRu76QQ.js";import i from"./BaseRadioButton.stories-CQEX-RjR.js";import{F as d}from"./FieldGroup-DirjMjV2.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DHB6Mfpj.js";import"./SupportLabel-BBj_AIhD.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CiIFszFM.js";import"./Icon-iLhHUHME.js";import"./WarningIcon-m5mWHGtA.js";import"./BaseRadioButton-CG-U5z5M.js";import"./Label-Djy31EoT.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
