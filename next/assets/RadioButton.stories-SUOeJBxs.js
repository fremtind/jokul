import{j as n,r as m}from"./iframe-Bn0ZkiIR.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-QJnNnUsj.js";import i from"./BaseRadioButton.stories-c6mKez1K.js";import{F as d}from"./FieldGroup-Bwx6rtcH.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D3y2Tk0Q.js";import"./SupportLabel-uGSTvQaP.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-OfiQCLUU.js";import"./Icon-BiwrzqPC.js";import"./WarningIcon-Cx19SITa.js";import"./BaseRadioButton-B4ySe1l9.js";import"./Label-CKI5pYA0.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
