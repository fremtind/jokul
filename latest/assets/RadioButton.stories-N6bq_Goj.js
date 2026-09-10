import{j as n,r as m}from"./iframe-C7_rDRyt.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C_X6mMbf.js";import i from"./BaseRadioButton.stories-CLJn0xOf.js";import{F as d}from"./FieldGroup-Cn_jfW1e.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Du8IB49y.js";import"./SupportLabel-BHmf9cHu.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Ch7sFzki.js";import"./Icon-CR5RoihS.js";import"./WarningIcon-CaCV-Cod.js";import"./BaseRadioButton-DJ_Yh17h.js";import"./Label-Cwy4_LJf.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
