import{j as n,r as m}from"./iframe-CUnOM3T_.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-1VvVp65b.js";import i from"./BaseRadioButton.stories-D1i1BIMN.js";import{F as d}from"./FieldGroup-LrGA8pRV.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CJPpwNgz.js";import"./SupportLabel-Cr3_8tzD.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CYbNYO7_.js";import"./Icon-Bdkd54Hr.js";import"./WarningIcon-C2pbPbjk.js";import"./BaseRadioButton-CwGIcgw6.js";import"./Label-BOAgzY9a.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
