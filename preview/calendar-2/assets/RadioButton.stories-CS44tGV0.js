import{j as n,r as m}from"./iframe-0u691B2V.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C2Scwhg9.js";import i from"./BaseRadioButton.stories-BFvAOlSG.js";import{F as d}from"./FieldGroup-97jVu7Q1.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CDDm69rQ.js";import"./SupportLabel-Bndz-nD6.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-mBLl3EsO.js";import"./Icon-DEZjO3eT.js";import"./WarningIcon-BKlnYvtH.js";import"./BaseRadioButton-CsqXfeVS.js";import"./Label-DaVBMbDf.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
