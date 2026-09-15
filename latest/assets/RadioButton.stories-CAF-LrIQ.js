import{j as n,r as m}from"./iframe-C1IsWWfc.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DbgwbkGs.js";import i from"./BaseRadioButton.stories-DtFXnwml.js";import{F as d}from"./FieldGroup-F6IPzsnt.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-JSZmh_7i.js";import"./SupportLabel-Buo-Rlhn.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BdN4mTbU.js";import"./Icon-B9Ax_45J.js";import"./WarningIcon-B_sMokb2.js";import"./BaseRadioButton-CGNBOFlR.js";import"./Label-B0u2DmNy.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
