import{j as n,r as m}from"./iframe-DqkTG_rX.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C7j79dxy.js";import i from"./BaseRadioButton.stories-DvUtLgPz.js";/* empty css               */import{F as p}from"./FieldGroup-pMGRiPXF.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CS4Wjhfi.js";import"./SupportLabel-tSFV-HoI.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DT8DvwG_.js";import"./Icon-Co5H8vON.js";import"./WarningIcon-DnZbW1EY.js";import"./BaseRadioButton-DLgRv7nS.js";import"./Label-C7_1EFuv.js";const F={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const j=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,j as __namedExportsOrder,F as default};
