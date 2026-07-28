import{j as n,r as m}from"./iframe-CJhAm7ux.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DlSK25as.js";import i from"./BaseRadioButton.stories-GeLK557z.js";import{F as d}from"./FieldGroup-B-Iszmpj.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C_uwXuEQ.js";import"./SupportLabel-SQx4v4Qw.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BtvuemZ7.js";import"./Icon-DQ-Lbc87.js";import"./WarningIcon-BcWC5qZo.js";import"./BaseRadioButton-vHiLSmJk.js";import"./Label-BoiptumS.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
