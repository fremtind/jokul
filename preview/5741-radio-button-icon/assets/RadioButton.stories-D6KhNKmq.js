import{j as n,r as m}from"./iframe-DfOpI9f1.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Bcq8bPqA.js";import i from"./BaseRadioButton.stories-De-p6jt1.js";import{F as d}from"./FieldGroup-MFFCpwFC.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CP2RQFof.js";import"./SupportLabel-D3mo_dwk.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BaDoUAli.js";import"./Icon-Yw7sC7lT.js";import"./BaseRadioButton-Bxm_iymy.js";import"./Label-BzLd9IZ6.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
