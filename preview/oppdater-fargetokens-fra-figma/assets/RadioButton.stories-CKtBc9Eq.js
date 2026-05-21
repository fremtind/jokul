import{j as n,r as m}from"./iframe-DsvwjQJN.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BUVDs4DE.js";import i from"./BaseRadioButton.stories-w3MVCe_j.js";import{F as d}from"./FieldGroup-CilmM_UO.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C7NiFP-2.js";import"./SupportLabel-4jqiVbd5.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Cu759P5v.js";import"./Icon-mzilcll6.js";import"./BaseRadioButton-CJmwq0h8.js";import"./Label-CCOjRc2c.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
