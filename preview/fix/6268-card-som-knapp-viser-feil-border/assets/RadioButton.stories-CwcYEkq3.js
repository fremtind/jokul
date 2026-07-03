import{j as n,r as m}from"./iframe-C11iCbLl.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C4XP8-mh.js";import i from"./BaseRadioButton.stories-kaVtBwT8.js";import{F as d}from"./FieldGroup-Bq-0vP-T.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BXIrkPtE.js";import"./SupportLabel-Pb1Xv99Y.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-YuYQ7zS7.js";import"./Icon-GI5nvfDk.js";import"./WarningIcon-DOO-XT-7.js";import"./BaseRadioButton-YeoX6gK9.js";import"./Label-CU0vZZCC.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
