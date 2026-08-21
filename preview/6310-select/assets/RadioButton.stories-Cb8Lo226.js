import{j as n,r as m}from"./iframe-Bkoz9kGE.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-bcD6m3Lb.js";import i from"./BaseRadioButton.stories-BepkGXB6.js";import{F as d}from"./FieldGroup-C3fjFUJN.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DfVzw2kn.js";import"./SupportLabel-9l0geRZw.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BJCQMOZo.js";import"./Icon-BUb_AyZD.js";import"./WarningIcon-s-0DHFVE.js";import"./BaseRadioButton-BYmvxgTi.js";import"./Label-B25e_Pm5.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
