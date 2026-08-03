import{j as n,r as m}from"./iframe-yshzEluW.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Do2GgvIM.js";import i from"./BaseRadioButton.stories-D7o3iNHj.js";import{F as d}from"./FieldGroup-Cs-75qEy.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CVTW4aGV.js";import"./SupportLabel-Bc_b7yqB.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BBWyIP5M.js";import"./Icon-RDx2ewb6.js";import"./WarningIcon-BmQRxIuY.js";import"./BaseRadioButton-BGCtltPz.js";import"./Label-CSofdoRM.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
