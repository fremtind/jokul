import{j as n,r as m}from"./iframe-B64LIQks.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-5cnw48bG.js";import i from"./BaseRadioButton.stories-CZbY28wx.js";import{F as d}from"./FieldGroup-Bg1k34Pa.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CuroFdcW.js";import"./SupportLabel-blEwRc9i.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-T_ijIvth.js";import"./Icon-B1zqtEiJ.js";import"./WarningIcon-mHS0aChM.js";import"./BaseRadioButton-CLD_kVTA.js";import"./Label-CKdFdN1P.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
