import{j as n,r as m}from"./iframe-CQxc51jJ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-XWSQ3qmv.js";import i from"./BaseRadioButton.stories--SFUJbfE.js";import{F as d}from"./FieldGroup-Ch5eQfUt.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-ljCz2mpr.js";import"./SupportLabel-Cp1D5hPQ.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BbRKRIuT.js";import"./Icon-D72rwEyv.js";import"./BaseRadioButton-C-7n-fAm.js";import"./Label-CaD_wrdR.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
