import{j as n,r as m}from"./iframe-Co20lHln.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CkGiYibd.js";import i from"./BaseRadioButton.stories-C9tqOx6r.js";import{F as d}from"./FieldGroup-vksyufY5.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BQGXY8yz.js";import"./SupportLabel-DEl7gAeS.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-VvtpZblF.js";import"./Icon-6Mvxmq0I.js";import"./WarningIcon-Cu_Nd03u.js";import"./BaseRadioButton-BR1XM63Q.js";import"./Label-CujXmxlp.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
