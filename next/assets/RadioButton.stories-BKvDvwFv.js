import{j as n,r as m}from"./iframe-CUMMJ2sT.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C2ZHl2ME.js";import i from"./BaseRadioButton.stories-WJmwMVNW.js";import{F as d}from"./FieldGroup-szQio1Qb.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C8eTQwT_.js";import"./SupportLabel-BUHpCuGE.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DMY7o2BI.js";import"./Icon-BfwJbBsh.js";import"./WarningIcon-TlYw3vdU.js";import"./BaseRadioButton-Bow7DKRD.js";import"./Label-BkPjCNKn.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
