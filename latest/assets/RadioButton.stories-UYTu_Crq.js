import{j as n,r as m}from"./iframe-BffHq9Y-.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D2uCn7LG.js";import i from"./BaseRadioButton.stories-G1Ivgv_N.js";import{F as d}from"./FieldGroup-Doirt8wK.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CQ77dZxX.js";import"./SupportLabel-WB962_g3.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DCxx6_Zu.js";import"./Icon-Dgm4JdKe.js";import"./WarningIcon-D-y4s4x1.js";import"./BaseRadioButton-D_QsHp-j.js";import"./Label-siyWVQ1Y.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
