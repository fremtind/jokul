import{j as n,r as m}from"./iframe-Cwc-6VXE.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-NCXYiY6M.js";import i from"./BaseRadioButton.stories-BUpPutEn.js";import{F as d}from"./FieldGroup-DD2awwdW.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C9SbrvJj.js";import"./SupportLabel-BJYcqK2S.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BCYaqfcj.js";import"./Icon-BkdH1r15.js";import"./WarningIcon-CvQLlBDK.js";import"./BaseRadioButton-C-zCCblX.js";import"./Label-C6LEfVxu.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
